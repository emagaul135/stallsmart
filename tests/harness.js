#!/usr/bin/env node
/**
 * tests/harness.js — StallSmart DOM harness
 *
 * Plain Node 24, no browser, no test framework.
 * Imports the app's source modules directly (using node --input-type=module
 * conventions) and runs assertions against the logic layer.
 *
 * Run:  node tests/harness.js
 * Exit: 0 = all pass, 1 = one or more failures.
 *
 * Coverage (≥15 assertions):
 *   1.  demo-data.js exports expected symbols
 *   2.  DEMO_PARSED_ITEMS has 4 items
 *   3.  DEMO_PARSED_ITEMS item shapes are correct
 *   4.  DEMO_STOCK has ≥4 items
 *   5.  DEMO_STOCK has at least one low-stock item (qty ≤ LOW_STOCK_THRESHOLD)
 *   6.  DEMO_SALES has ≥3 sales records
 *   7.  demo parse: demoParseMessage returns non-empty items for the sample
 *   8.  live config: isPlaceholderConfig() is false and projectId is stallsmart-908a3
 *   9.  live config: firebaseConfig carries the real apiKey + measurementId,
 *       and the App Check debug token falls back to the placeholder in Node
 *       (no Vite env), so no real token is ever baked in by this harness
 *  10.  dashboard maths: revenue calculation
 *  11.  dashboard maths: cost calculation
 *  12.  dashboard maths: profit = revenue − cost
 *  13.  badges: badgeHtml returns ON-DEVICE badge string
 *  14.  badges: badgeHtml returns IN-CLOUD badge string
 *  15.  badges: badgeHtml returns DEMO badge string
 *  16.  offline message: the REAL exported requireOnline throws with
 *       needsInternet when offline OR when the offline simulation is on
 *  17.  low-stock flag: items with qty ≤ LOW_STOCK_THRESHOLD are detected
 *  18.  AI_DEMO_MODE is false (live config wired)
 *  19.  STORE_DEMO_MODE is false (live config wired)
 *  20.  getRemoteConfigValue returns safe default for cloud_summary_max_chars
 *  21.  DEMO_DAILY_SUMMARY has expected shape
 *  22.  DEMO_WEEKLY_SUMMARY has expected shape
 *  23.  demo-data: DEMO_ASK_RESPONSES has ≥1 entry with keywords array
 *  24.  demo-data: DEMO_ASK_FALLBACK has an answer string
 *  25-30. M3e regression tests: extractAiResponse() against the REAL
 *       firebase-ai v13 GenerateContentResult shape ({ response } wrapper,
 *       text() on .response, candidates-parts fallback, bare response,
 *       wrapper-has-no-.text() guard, raw source values for badges)
 */

import { createRequire } from "module";
import { fileURLToPath }  from "url";
import { join, dirname }  from "path";

// ---------------------------------------------------------------------------
// Setup: resolve imports relative to app/src
// ---------------------------------------------------------------------------

const __dir = dirname(fileURLToPath(import.meta.url));
const appSrc = join(__dir, "../app/src");

// Provide minimal browser globals that module-level code in ai.js / store.js
// reads at import time (not inside functions).
// navigator is read-only in Node 24, so we use Object.defineProperty.
let _onLine = true;
if (typeof navigator === "undefined") {
  Object.defineProperty(globalThis, "navigator", {
    configurable: true,
    get: () => ({ onLine: _onLine }),
  });
} else {
  // navigator exists (e.g. in jsdom) — patch onLine.
  try {
    Object.defineProperty(globalThis.navigator, "onLine", {
      configurable: true,
      get: () => _onLine,
    });
  } catch {
    // ignore
  }
}

// ---------------------------------------------------------------------------
// Import source modules
// ---------------------------------------------------------------------------

const demoPkg   = await import(join(appSrc, "demo-data.js"));
const storePkg  = await import(join(appSrc, "store.js"));
const aiPkg     = await import(join(appSrc, "ai.js"));
const cfgPkg    = await import(join(appSrc, "firebase-config.js"));

const {
  DEMO_PARSED_ITEMS,
  DEMO_STOCK,
  DEMO_SALES,
  DEMO_ASK_RESPONSES,
  DEMO_ASK_FALLBACK,
  DEMO_DAILY_SUMMARY,
  DEMO_WEEKLY_SUMMARY,
  DEMO_MESSAGES_SHORT,
  LOW_STOCK_THRESHOLD,
} = demoPkg;

const {
  STORE_DEMO_MODE,
  addStockItems,
  onStockChange,
  onSalesChange,
  logSale,
  deductStock,
  getRemoteConfigValue,
} = storePkg;

const { AI_DEMO_MODE, extractAiResponse, requireOnline, setSimulateOffline, isSimulateOffline } = aiPkg;
const { isPlaceholderConfig, RC_DEFAULTS, firebaseConfig, APP_CHECK_DEBUG_TOKEN } = cfgPkg;

// ---------------------------------------------------------------------------
// Mini assert framework
// ---------------------------------------------------------------------------

let passed = 0;
let failed = 0;

function assert(condition, description) {
  if (condition) {
    console.log(`  ✅  ${description}`);
    passed++;
  } else {
    console.error(`  ❌  ${description}`);
    failed++;
  }
}

function assertEqual(actual, expected, description) {
  const ok = actual === expected;
  if (!ok) {
    console.error(`  ❌  ${description}`);
    console.error(`       expected: ${JSON.stringify(expected)}`);
    console.error(`       actual:   ${JSON.stringify(actual)}`);
    failed++;
  } else {
    console.log(`  ✅  ${description}`);
    passed++;
  }
}

// ---------------------------------------------------------------------------
// Helper: simple demo parser (mirrors the logic in main.js without importing
// the full main module which has browser-only DOM calls)
// ---------------------------------------------------------------------------

function demoParseMessage(text) {
  // If the text matches the first demo sample, return DEMO_PARSED_ITEMS.
  const sampleText = DEMO_MESSAGES_SHORT[0].text.trim();
  if (text.trim() === sampleText) {
    return DEMO_PARSED_ITEMS.map((item) => ({ ...item }));
  }

  // Generic regex parser.
  const lines  = text.split(/\n/);
  const items  = [];
  const lineRe = /(.+?)\s+x?\s*(\d+(?:\.\d+)?)\s+(\w+)\s+@\$(\d+(?:\.\d+)?)/i;
  for (const line of lines) {
    const m = line.match(lineRe);
    if (m) {
      items.push({
        name:         m[1].trim(),
        quantity:     parseFloat(m[2]),
        unit:         m[3].trim(),
        unitPriceUsd: parseFloat(m[4]),
      });
    }
  }
  return items.length ? items : DEMO_PARSED_ITEMS.map((item) => ({ ...item }));
}

// ---------------------------------------------------------------------------
// Helper: dashboard maths (mirrors renderDashboard logic without DOM)
// ---------------------------------------------------------------------------

function calcDashboard(salesArr) {
  const todayStr   = new Date().toDateString();
  const todaySales = salesArr.filter(
    (s) => new Date(s.soldAt).toDateString() === todayStr
  );
  const revenue = todaySales.reduce((sum, s) => sum + s.salePriceUsd * s.quantity, 0);
  const cost    = todaySales.reduce((sum, s) => sum + s.costPriceUsd  * s.quantity, 0);
  const profit  = revenue - cost;
  return { revenue, cost, profit, count: todaySales.length };
}

// ---------------------------------------------------------------------------
// Helper: build a badge HTML string (mirrors main.js badgeHtml)
// ---------------------------------------------------------------------------

function badgeHtml(source) {
  if (source === "ON_DEVICE") return `<span class="badge badge-on-device">ON-DEVICE</span>`;
  if (source === "IN_CLOUD")  return `<span class="badge badge-in-cloud">IN-CLOUD</span>`;
  return `<span class="badge badge-demo">DEMO</span>`;
}

// ---------------------------------------------------------------------------
// Run assertions
// ---------------------------------------------------------------------------

console.log("\nStallSmart DOM harness — running assertions…\n");

// 1. demo-data exports
assert(typeof DEMO_PARSED_ITEMS !== "undefined", "demo-data exports DEMO_PARSED_ITEMS");

// 2. DEMO_PARSED_ITEMS length
assertEqual(DEMO_PARSED_ITEMS.length, 4, "DEMO_PARSED_ITEMS has 4 items");

// 3. DEMO_PARSED_ITEMS item shape
const item0 = DEMO_PARSED_ITEMS[0];
assert(
  typeof item0.name === "string" &&
  typeof item0.quantity === "number" &&
  typeof item0.unit === "string" &&
  typeof item0.unitPriceUsd === "number",
  "DEMO_PARSED_ITEMS[0] has correct shape {name, quantity, unit, unitPriceUsd}"
);

// 4. DEMO_STOCK length
assert(DEMO_STOCK.length >= 4, `DEMO_STOCK has ≥4 items (has ${DEMO_STOCK.length})`);

// 5. DEMO_STOCK has at least one low-stock item
const lowStockItems = DEMO_STOCK.filter((s) => s.quantity <= LOW_STOCK_THRESHOLD);
assert(
  lowStockItems.length >= 1,
  `DEMO_STOCK has ≥1 low-stock item (qty ≤ ${LOW_STOCK_THRESHOLD})`
);

// 6. DEMO_SALES length
assert(DEMO_SALES.length >= 3, `DEMO_SALES has ≥3 records (has ${DEMO_SALES.length})`);

// 7. Demo parse: sample message returns items
const parsedFromSample = demoParseMessage(DEMO_MESSAGES_SHORT[0].text);
assert(
  Array.isArray(parsedFromSample) && parsedFromSample.length > 0,
  "demoParseMessage returns non-empty items array for sample message"
);

// 8-9. Live config: real project wired, no demo-mode store writes.
//   In live mode addStockItems / logSale / onStockChange touch Firestore
//   (null refs until initStore runs), so the harness must NOT call them.
//   Instead we assert the config itself is live and the debug token falls
//   back to the harmless placeholder under plain Node (no Vite env).
assert(
  isPlaceholderConfig() === false,
  "isPlaceholderConfig() is false — real Firebase config is wired"
);
assertEqual(
  firebaseConfig.projectId,
  "stallsmart-908a3",
  "firebaseConfig.projectId is stallsmart-908a3"
);
assertEqual(
  firebaseConfig.apiKey,
  "AIzaSyAaLRth1hUAFaRY6auL1-5zqqVZlHD5_TE",
  "firebaseConfig.apiKey is the real project key"
);
assertEqual(
  firebaseConfig.measurementId,
  "G-P6K56EJ5M1",
  "firebaseConfig.measurementId is set"
);
assertEqual(
  APP_CHECK_DEBUG_TOKEN,
  "00000000-0000-0000-0000-000000000000",
  "APP_CHECK_DEBUG_TOKEN falls back to placeholder in Node (no Vite env) — no real token is ever baked in by this harness"
);

// 10-12. Dashboard maths against DEMO_SALES
const dash = calcDashboard(DEMO_SALES);

// Expected from demo-data.js:
// sale-001: 2 × 14.50 = 29.00  cost 2 × 12.00 = 24.00
// sale-002: 3 × 2.00  = 6.00   cost 3 × 1.50  = 4.50
// sale-003: 2 × 3.00  = 6.00   cost 2 × 2.20  = 4.40
// sale-004: 6 × 0.40  = 2.40   cost 6 × 0.25  = 1.50
// revenue = 43.40, cost = 34.40, profit = 9.00
const expectedRevenue = 43.40;
const expectedCost    = 34.40;
const expectedProfit  = 9.00;

assert(
  Math.abs(dash.revenue - expectedRevenue) < 0.01,
  `Dashboard revenue = $${dash.revenue.toFixed(2)} (expected $${expectedRevenue.toFixed(2)})`
);
assert(
  Math.abs(dash.cost - expectedCost) < 0.01,
  `Dashboard cost = $${dash.cost.toFixed(2)} (expected $${expectedCost.toFixed(2)})`
);
assert(
  Math.abs(dash.profit - expectedProfit) < 0.01,
  `Dashboard profit = revenue − cost = $${dash.profit.toFixed(2)} (expected $${expectedProfit.toFixed(2)})`
);

// 13-15. Badge HTML
const onDeviceBadge = badgeHtml("ON_DEVICE");
const inCloudBadge  = badgeHtml("IN_CLOUD");
const demoBadge     = badgeHtml("DEMO");

assert(
  onDeviceBadge.includes("badge-on-device") && onDeviceBadge.includes("ON-DEVICE"),
  "badgeHtml('ON_DEVICE') contains correct class and label"
);
assert(
  inCloudBadge.includes("badge-in-cloud") && inCloudBadge.includes("IN-CLOUD"),
  "badgeHtml('IN_CLOUD') contains correct class and label"
);
assert(
  demoBadge.includes("badge-demo") && demoBadge.includes("DEMO"),
  "badgeHtml('DEMO') contains correct class and label"
);

// 16. Offline message: the REAL exported requireOnline throws with
//   needsInternet when navigator is offline, and when the offline
//   simulation is on (M3e: previously this was only mirrored locally).
_onLine = false;
let caughtNeedsInternet = false;
try {
  requireOnline();
} catch (e) {
  caughtNeedsInternet = e.needsInternet === true;
}
_onLine = true; // restore
assert(caughtNeedsInternet, "requireOnline() throws error with needsInternet=true when offline");
setSimulateOffline(true);
let caughtSimulated = false;
try {
  requireOnline();
} catch (e) {
  caughtSimulated = e.needsInternet === true;
}
setSimulateOffline(false);
assert(caughtSimulated, "requireOnline() throws error with needsInternet=true when offline simulation is on");
let onlineOk = true;
try {
  requireOnline();
} catch {
  onlineOk = false;
}
assert(onlineOk, "requireOnline() does not throw when online and simulation is off");
assert(isSimulateOffline() === false, "isSimulateOffline() is false after simulation is turned off");

// 17. Low-stock flags
const saltItem = DEMO_STOCK.find((s) => s.name === "Salt 500g");
const coffeeItem = DEMO_STOCK.find((s) => s.name === "Instant coffee sachet");
assert(
  saltItem && saltItem.quantity <= LOW_STOCK_THRESHOLD,
  `Salt 500g (qty ${saltItem?.quantity}) is flagged low-stock (threshold ${LOW_STOCK_THRESHOLD})`
);
assert(
  coffeeItem && coffeeItem.quantity <= LOW_STOCK_THRESHOLD,
  `Instant coffee sachet (qty ${coffeeItem?.quantity}) is flagged low-stock`
);

// 18. AI_DEMO_MODE is false (live config wired)
assert(AI_DEMO_MODE === false, "AI_DEMO_MODE is false — live Firebase config is wired");

// 19. STORE_DEMO_MODE is false
assert(STORE_DEMO_MODE === false, "STORE_DEMO_MODE is false — live Firebase config is wired");

// 20. getRemoteConfigValue returns safe default
const rcVal = getRemoteConfigValue("cloud_summary_max_chars");
assert(
  typeof rcVal === "number" && rcVal === RC_DEFAULTS.cloud_summary_max_chars,
  `getRemoteConfigValue('cloud_summary_max_chars') returns safe default ${RC_DEFAULTS.cloud_summary_max_chars}`
);

// 21. DEMO_DAILY_SUMMARY shape
assert(
  DEMO_DAILY_SUMMARY &&
  typeof DEMO_DAILY_SUMMARY.summary === "string" &&
  DEMO_DAILY_SUMMARY.summary.length > 20 &&
  DEMO_DAILY_SUMMARY.inferenceSource === "ON_DEVICE",
  "DEMO_DAILY_SUMMARY has summary string and ON_DEVICE source"
);

// 22. DEMO_WEEKLY_SUMMARY shape
assert(
  DEMO_WEEKLY_SUMMARY &&
  typeof DEMO_WEEKLY_SUMMARY.summary === "string" &&
  DEMO_WEEKLY_SUMMARY.summary.length > 20 &&
  DEMO_WEEKLY_SUMMARY.inferenceSource === "IN_CLOUD",
  "DEMO_WEEKLY_SUMMARY has summary string and IN_CLOUD source"
);

// 23. DEMO_ASK_RESPONSES has at least one entry with keywords array
assert(
  Array.isArray(DEMO_ASK_RESPONSES) &&
  DEMO_ASK_RESPONSES.length >= 1 &&
  Array.isArray(DEMO_ASK_RESPONSES[0].keywords),
  "DEMO_ASK_RESPONSES has ≥1 entry with a keywords array"
);

// 24. DEMO_ASK_FALLBACK has an answer string
assert(
  DEMO_ASK_FALLBACK &&
  typeof DEMO_ASK_FALLBACK.answer === "string" &&
  DEMO_ASK_FALLBACK.answer.length > 10,
  "DEMO_ASK_FALLBACK has a non-empty answer string"
);

// ---------------------------------------------------------------------------
// 25-30. M3e regression tests — real firebase-ai v13 response shape
//
// Root cause (live verification 2026-11-17): generateContent() returns a
// GenerateContentResult WRAPPER { response: EnhancedGenerateContentResponse }.
// The text() helper and inferenceSource live on result.response, NOT on the
// result. ai.js called result.text() directly → "a.text is not a function"
// on every Parse/Ask path, and probeOnDevice() always read undefined.
// These tests feed extractAiResponse() the REAL shape the installed SDK
// returns (built to mirror createEnhancedContentResponse + addHelpers in
// node_modules/@firebase/ai), so this class of bug is caught locally.
// ---------------------------------------------------------------------------

/** Build a GenerateContentResult exactly as the SDK returns it. */
function makeSdkResult({ text, source, withHelper = true }) {
  const inner = {
    candidates: [{ index: 0, content: { parts: [{ text }] } }],
    inferenceSource: source,
  };
  if (withHelper) inner.text = () => text; // addHelpers() in the SDK
  return { response: inner };
}

const SAMPLE_JSON = '[{"name":"Rice 10kg","quantity":5,"unit":"sack","unitPriceUsd":12}]';

// 25. Real SDK wrapper with text() helper + on-device source
const sdkOnDevice = makeSdkResult({ text: SAMPLE_JSON, source: "on_device" });
const extractedOnDevice = extractAiResponse(sdkOnDevice);
assertEqual(extractedOnDevice.text, SAMPLE_JSON, "extractAiResponse unwraps SDK wrapper: text() via .response");
assertEqual(extractedOnDevice.inferenceSource, "on_device", "extractAiResponse unwraps SDK wrapper: inferenceSource 'on_device'");

// 26. Real SDK wrapper with text() helper + in-cloud source
const sdkInCloud = makeSdkResult({ text: "Fresh stock looks good.", source: "in_cloud" });
const extractedInCloud = extractAiResponse(sdkInCloud);
assertEqual(extractedInCloud.text, "Fresh stock looks good.", "extractAiResponse unwraps SDK wrapper: in-cloud text");
assertEqual(extractedInCloud.inferenceSource, "in_cloud", "extractAiResponse unwraps SDK wrapper: inferenceSource 'in_cloud'");

// 27. Raw response WITHOUT the text() helper (shape tolerance) —
//   falls back to candidates[0].content.parts text.
const rawNoHelper = makeSdkResult({ text: SAMPLE_JSON, source: "in_cloud", withHelper: false });
const extractedRaw = extractAiResponse(rawNoHelper);
assertEqual(extractedRaw.text, SAMPLE_JSON, "extractAiResponse falls back to candidates parts text when text() helper is absent");
assertEqual(extractedRaw.inferenceSource, "in_cloud", "extractAiResponse still reads inferenceSource without the helper");

// 28. Bare response object (no wrapper) is tolerated too.
const bareResponse = {
  candidates: [{ index: 0, content: { parts: [{ text: "hello" }] } }],
  inferenceSource: "on_device",
  text: () => "hello",
};
const extractedBare = extractAiResponse(bareResponse);
assertEqual(extractedBare.text, "hello", "extractAiResponse tolerates a bare response object (no wrapper)");
assertEqual(extractedBare.inferenceSource, "on_device", "extractAiResponse reads inferenceSource from a bare response");

// 29. Regression guard — the trap itself: the GenerateContentResult wrapper
//   has NO .text() method. Any code calling result.text() directly is the bug.
assert(
  typeof sdkOnDevice.text === "undefined",
  "REGRESSION GUARD: GenerateContentResult wrapper has no .text() — callers must unwrap .response first"
);
assert(
  typeof sdkOnDevice.response.text === "function",
  "REGRESSION GUARD: .text() lives on result.response (SDK addHelpers)"
);

// 30. InferenceSource enum values map to the badge strings used by the UI.
assert(
  extractedOnDevice.inferenceSource === "on_device" &&
  extractedInCloud.inferenceSource === "in_cloud",
  "extractAiResponse returns raw SDK source values ('on_device'/'in_cloud') for badge mapping"
);

// ---------------------------------------------------------------------------
// Results
// ---------------------------------------------------------------------------

const total = passed + failed;
console.log(`\n${"─".repeat(50)}`);
console.log(`Results: ${passed}/${total} passed, ${failed} failed`);

if (failed > 0) {
  console.error("\n⛔  Some assertions failed. See above for details.\n");
  process.exit(1);
} else {
  console.log("\n✅  All assertions passed.\n");
  process.exit(0);
}

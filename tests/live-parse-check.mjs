// /tmp/test-live-parse.mjs — REAL end-to-end check of ai.js against the live
// Firebase AI Logic cloud endpoint, from plain Node (no browser).
//
// Exercises the EXACT code path that failed in live verification:
//   parseSupplierMessage() / askStallSmart() → getAI/getGenerativeModel
//   → generateContent() → extractAiResponse() → tryParseItems().
// App Check token is obtained via the REST debug-token exchange with curl
// (Node fetch times out in this VM for googleapis), then handed to the SDK
// through a CustomProvider. NOTHING secret is ever printed: the debug token
// and the App Check token stay in memory only.
//
// Usage: node /tmp/test-live-parse.mjs
// Exit 0 = parse + ask both returned real results with SDK badges.

import { execFileSync } from "child_process";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const workdir = dirname(fileURLToPath(import.meta.url)) + "/..";

// navigator shim (same pattern as tests/harness.js — Node 24 ships a
// navigator global whose onLine is NOT true, so patch it explicitly).
try {
  Object.defineProperty(globalThis, "navigator", {
    configurable: true,
    get: () => ({ onLine: true }),
  });
} catch {
  try {
    Object.defineProperty(globalThis.navigator, "onLine", {
      configurable: true,
      get: () => true,
    });
  } catch {
    // ignore — requireOnline will throw and the test will fail loudly
  }
}

// --- 1. Read the App Check debug token (local file, never printed) -------
const envText = readFileSync(join(workdir, "app/.env.local"), "utf8");
const debugToken = envText
  .match(/VITE_FIREBASE_APPCHECK_DEBUG_TOKEN=(.+)/)?.[1]
  ?.trim();
if (!debugToken) {
  console.error("NO DEBUG TOKEN FOUND in app/.env.local");
  process.exit(1);
}

const API_KEY = "AIzaSyAaLRth1hUAFaRY6auL1-5zqqVZlHD5_TE";
const PROJECT_NUMBER = "732262114772";
const APP_ID = "1:732262114772:web:db43bd475dac8d8087a241";

// --- 2. Exchange debug token for an App Check token via curl --------------
const exJson = execFileSync(
  "curl",
  [
    "-s", "--max-time", "30",
    `https://firebaseappcheck.googleapis.com/v1/projects/${PROJECT_NUMBER}/apps/${APP_ID}:exchangeDebugToken?key=${API_KEY}`,
    "-H", "Content-Type: application/json",
    "-d", JSON.stringify({ debug_token: debugToken }),
  ],
  { encoding: "utf8", timeout: 40000 }
);
const ex = JSON.parse(exJson);
if (!ex.token) {
  console.error("App Check exchange failed:", JSON.stringify(ex).slice(0, 300));
  process.exit(1);
}
console.log("App Check token obtained: yes (length %d)", ex.token.length);
const appCheckToken = ex.token;

// --- 3. Init Firebase + App Check (CustomProvider) + AI --------------------
// ESM imports via file URLs into app/node_modules. IMPORTANT: do NOT use
// require() here — CJS loads a SECOND copy of the firebase packages (dual
// package hazard), so App Check initialised that way silently never attaches
// to the AI service used by ai.js (verified 2026-11-18: missing
// X-Firebase-AppCheck header → 401). ESM file-URL imports share one graph.
const firebaseAppUrl = "file://" + join(workdir, "app/node_modules/firebase/app/dist/esm/index.esm.js");
const firebaseCheckUrl = "file://" + join(workdir, "app/node_modules/firebase/app-check/dist/esm/index.esm.js");
const { initializeApp } = await import(firebaseAppUrl);
const { initializeAppCheck, CustomProvider } = await import(firebaseCheckUrl);
const { firebaseConfig } = await import(join(workdir, "app/src/firebase-config.js"));

const app = initializeApp(firebaseConfig);
initializeAppCheck(app, {
  provider: new CustomProvider({
    getToken: async () => ({
      token: appCheckToken,
      expireTimeMillis: Date.now() + 55 * 60 * 1000,
    }),
  }),
  isTokenAutoRefreshEnabled: false,
});

// --- 4. Call the REAL ai.js functions --------------------------------------
const { parseSupplierMessage, askStallSmart } = await import(
  join(workdir, "app/src/ai.js")
);

console.log("\n--- parseSupplierMessage (short, cloud fallback if Nano absent) ---");
const parsed = await parseSupplierMessage(
  "Delivered 10 sacks rice @ $12, 5 bottles oil @ $3"
);
console.log(JSON.stringify(parsed, null, 2));

console.log("\n--- askStallSmart (short) ---");
const asked = await askStallSmart("Should I raise the price of rice this week?");
console.log(JSON.stringify(asked, null, 2));

// --- 5. Verdict -------------------------------------------------------------
const parseOk =
  Array.isArray(parsed.items) &&
  parsed.items.length >= 2 &&
  parsed.items.every((it) => typeof it.name === "string" && typeof it.quantity === "number");
const askOk = typeof asked.answer === "string" && asked.answer.length > 10;

console.log("\nparse OK:", parseOk, "| ask OK:", askOk);
if (!parseOk || !askOk) {
  console.error("⛔  Live parse/ask did NOT return real results.");
  process.exit(1);
}
console.log("✅  Live parse + ask work end-to-end through the real SDK path.");
process.exit(0);

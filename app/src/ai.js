/**
 * ai.js — Firebase AI Logic hybrid inference
 *
 * Exports:
 *   parseSupplierMessage(text)      → { items, inferenceSource, reason }
 *   askStallSmart(question)         → { answer, inferenceSource, reason }
 *   getDailySummary(salesData)      → { summary, inferenceSource, reason }
 *   getWeeklySummary(salesData)     → { summary, inferenceSource, reason }
 *   probeOnDevice()                 → Promise<boolean>  (true = Nano available)
 *
 * Routing:
 *   parseSupplierMessage: message ≤ 2000 chars → PREFER_ON_DEVICE; > 2000 → PREFER_IN_CLOUD
 *   askStallSmart:        question < 500 chars  → PREFER_ON_DEVICE; ≥ 500  → PREFER_IN_CLOUD
 *   getDailySummary:      always PREFER_ON_DEVICE (short, private)
 *   getWeeklySummary:     always PREFER_IN_CLOUD  (long analysis)
 *
 * Both functions return an inferenceSource badge string:
 *   "ON_DEVICE" | "IN_CLOUD"
 *
 * Offline degradation: when navigator.onLine is false, cloud calls are blocked
 * immediately and a needs-internet error is thrown with { needsInternet: true }.
 *
 * On-device parse fail: if on-device returns unparseable JSON, one cloud retry
 * is attempted before giving up.
 *
 * Demo mode: when isPlaceholderConfig() is true, the module exports stubs that
 * return { _demoMode: true } so main.js can keep the demo flow working without
 * initialising a real Firebase app.
 */

import { isPlaceholderConfig, firebaseConfig } from "./firebase-config.js";
import { initializeApp, getApp } from "firebase/app";
import {
  getAI,
  getGenerativeModel,
  InferenceMode,
  InferenceSource,
  Schema,
} from "firebase/ai";

// ---------------------------------------------------------------------------
// Demo-mode short-circuit
// ---------------------------------------------------------------------------

export const AI_DEMO_MODE = isPlaceholderConfig();

// ---------------------------------------------------------------------------
// Lazy Firebase + AI initialisation (runs once, skipped in demo mode)
// ---------------------------------------------------------------------------

let _aiOnDevice  = null;
let _aiInCloud   = null;
let _initialized = false;

function initAI() {
  if (_initialized || AI_DEMO_MODE) return;
  _initialized = true;

  // getApp() returns the default app if already initialised (store.js may have
  // done it first).  initializeApp() is idempotent when called with the same
  // name, but throws if the same name gets different configs, so we guard.
  let app;
  try {
    app = getApp();
  } catch {
    // No default app yet — initialise now.
    app = initializeApp(firebaseConfig);
  }

  // On-device model instance (PREFER_ON_DEVICE, Gemini Nano where available,
  // cloud fallback otherwise).
  const aiOnDeviceSvc = getAI(app);
  _aiOnDevice = getGenerativeModel(aiOnDeviceSvc, {
    mode: InferenceMode.PREFER_ON_DEVICE,
    inCloudParams: { model: "gemini-3.5-flash-lite" },
  });

  // Cloud model instance (PREFER_IN_CLOUD).
  const aiInCloudSvc = getAI(app);
  _aiInCloud = getGenerativeModel(aiInCloudSvc, {
    mode: InferenceMode.PREFER_IN_CLOUD,
    inCloudParams: { model: "gemini-3.5-flash-lite" },
  });
}

// ---------------------------------------------------------------------------
// JSON schema for parsed items
// ---------------------------------------------------------------------------

const ITEM_SCHEMA = Schema.array({
  items: Schema.object({
    properties: {
      name:         Schema.string({ description: "Product or item name" }),
      quantity:     Schema.number({ description: "Quantity delivered" }),
      unit:         Schema.string({ description: "Unit (sack, bag, bottle, pcs, etc.)" }),
      unitPriceUsd: Schema.number({ description: "Unit price in USD" }),
    },
    required: ["name", "quantity", "unit", "unitPriceUsd"],
    description: "One item from the supplier message",
  }),
  description: "List of items parsed from the supplier message",
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Map the SDK's InferenceSource values to our badge strings.
 * InferenceSource.ON_DEVICE === "on_device"
 * InferenceSource.IN_CLOUD  === "in_cloud"
 */
function toBadge(inferenceSourceValue) {
  if (
    inferenceSourceValue === InferenceSource.ON_DEVICE ||
    inferenceSourceValue === "on_device"
  ) {
    return "ON_DEVICE";
  }
  return "IN_CLOUD";
}

/**
 * Extract text + actual inference source from a generateContent() result.
 *
 * ROOT CAUSE (found 2026-11-18, M3e): in firebase-ai v13,
 * `GenerativeModel.generateContent()` returns a `GenerateContentResult`
 * WRAPPER — `{ response: EnhancedGenerateContentResponse }`. The `text()`
 * helper and the `inferenceSource` property live on `result.response`, NOT
 * on the result itself. Calling `result.text()` throws
 * "TypeError: result.text is not a function" (minified in the live demo as
 * "a.text is not a function" / "o.text is not a function") and reading
 * `result.inferenceSource` yields `undefined`, which also broke
 * probeOnDevice() (always reported on-device as unavailable).
 *
 * This helper unwraps the result and reads the SDK's documented accessor,
 * with a safe fallback to the raw `candidates[0].content.parts` text when
 * the helper is absent (e.g. a future SDK shape change). It is exported so
 * the harness can feed it a REAL-shaped SDK response and catch this class
 * of bug locally.
 *
 * @param {object} result - the value returned by model.generateContent()
 * @returns {{ text: string, inferenceSource: string|undefined }}
 */
export function extractAiResponse(result) {
  const resp =
    result && typeof result === "object" &&
    result.response && typeof result.response === "object"
      ? result.response
      : result;

  let text = "";
  if (resp && typeof resp.text === "function") {
    // The SDK's documented accessor. It throws on blocked/empty responses;
    // let that propagate so callers show the real SDK error, not a silent "".
    text = resp.text();
  } else {
    // Shape tolerance: raw GenerateContentResponse JSON without helpers.
    const parts = resp?.candidates?.[0]?.content?.parts ?? [];
    text = parts
      .filter((p) => p && typeof p.text === "string")
      .map((p) => p.text)
      .join("");
  }

  const inferenceSource = resp?.inferenceSource ?? result?.inferenceSource;
  return { text, inferenceSource };
}

/**
 * Resolve the badge source: prefer the ACTUAL inference source returned by
 * the SDK (it reflects the path really taken, including cloud fallback when
 * on-device was unavailable); fall back to the routing decision only when
 * the SDK returned nothing (defensive — should not happen with this SDK).
 */
function resolveBadge(sdkSource, routedSource) {
  return toBadge(sdkSource ?? routedSource);
}

/**
 * Annotate the routing reason when the ACTUAL source differs from the
 * routed one (e.g. PREFER_ON_DEVICE fell back to the cloud because Gemini
 * Nano was unavailable). Keeps the "What ran where & why" panel honest:
 * the badge shows the actual source, and the reason explains the fallback.
 */
function annotateReason(reason, sdkSource, routedSource) {
  if (!sdkSource || sdkSource === routedSource) return reason;
  if (sdkSource === InferenceSource.ON_DEVICE || sdkSource === "on_device") {
    return `${reason} The cloud was unreachable, so this ran on-device instead.`;
  }
  return `${reason} On-device model was unavailable, so this fell back to the cloud.`;
}

// ---------------------------------------------------------------------------
// Offline simulation (demo only — honest, no faked results)
// ---------------------------------------------------------------------------

/**
 * When true, the app behaves as if it were offline: cloud calls are
 * blocked with a needs-internet error, while on-device calls keep working
 * (that is the real offline behaviour — Gemini Nano runs locally).
 * Wired to the "Simulate offline" checkbox in the Hybrid Status panel.
 * Clearly labelled as a simulation in the UI; it never fabricates results.
 */
let _simulateOffline = false;

export function setSimulateOffline(value) {
  _simulateOffline = !!value;
}

export function isSimulateOffline() {
  return _simulateOffline;
}

/**
 * Try to parse the model's text response as JSON items array.
 * Returns the array or null on failure.
 */
function tryParseItems(text) {
  const cleaned = text.trim().replace(/^```(?:json)?/, "").replace(/```$/, "").trim();
  try {
    const parsed = JSON.parse(cleaned);
    if (Array.isArray(parsed)) return parsed;
    // Some models return { items: [...] }
    if (parsed && Array.isArray(parsed.items)) return parsed.items;
    return null;
  } catch {
    return null;
  }
}

/**
 * Check if we are online.  Throws an error with { needsInternet: true } when
 * navigator.onLine is false OR the offline simulation is on, so callers can
 * show the right message. Exported so the harness can test it for real.
 */
export function requireOnline() {
  if (_simulateOffline || !navigator.onLine) {
    const err = new Error("This request needs an internet connection. Please check your signal and try again.");
    err.needsInternet = true;
    throw err;
  }
}

// ---------------------------------------------------------------------------
// parseSupplierMessage
// ---------------------------------------------------------------------------

/**
 * Parse a supplier message into structured stock items.
 *
 * @param {string} text - The supplier message.
 * @returns {Promise<{items: Array, inferenceSource: string, reason: string}>}
 */
export async function parseSupplierMessage(text) {
  if (AI_DEMO_MODE) return { _demoMode: true };

  initAI();

  const isLong = text.trim().length > 2000;
  const model  = isLong ? _aiInCloud : _aiOnDevice;
  const reason = isLong
    ? `Long document (${text.trim().length} chars > 2 000) — sending to the cloud.`
    : `Short message (${text.trim().length} chars ≤ 2 000) — running on-device.`;

  // Cloud calls need internet.
  if (isLong) requireOnline();

  const prompt = [
    "Extract all items from this supplier message into a JSON array.",
    "Each element must have: name (string), quantity (number), unit (string), unitPriceUsd (number).",
    "Return ONLY valid JSON with no markdown fences, no extra text.",
    "",
    "Supplier message:",
    text,
  ].join("\n");

  const generationConfig = {
    responseMimeType: "application/json",
    responseSchema:   ITEM_SCHEMA,
  };

  let response;
  let inferenceSourceValue;

  try {
    response = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    });
    // generateContent() returns a { response } WRAPPER — unwrap it via
    // extractAiResponse (see its doc comment for the root cause).
    const extracted = extractAiResponse(response);
    inferenceSourceValue = extracted.inferenceSource;
    response = extracted; // from here on, `response` is { text, inferenceSource }
  } catch (err) {
    // If the error is offline-related on an on-device model, check online and
    // propagate.
    if (!navigator.onLine || _simulateOffline) {
      requireOnline(); // throws needsInternet
    }
    throw err;
  }

  const rawText = response.text;
  let items = tryParseItems(rawText);

  // On-device returned unparseable output → retry once in cloud.
  if (
    items === null &&
    (inferenceSourceValue === InferenceSource.ON_DEVICE ||
      inferenceSourceValue === "on_device")
  ) {
    requireOnline(); // cloud retry needs internet
    try {
      const retryResult = await _aiInCloud.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig,
      });
      const retryExtracted = extractAiResponse(retryResult);
      inferenceSourceValue = retryExtracted.inferenceSource;
      items = tryParseItems(retryExtracted.text);
    } catch (retryErr) {
      if (!navigator.onLine || _simulateOffline) requireOnline();
      throw retryErr;
    }
  }

  if (items === null) {
    const err = new Error("Could not parse the supplier message. Please check the format and try again.");
    err.rawText = rawText;
    throw err;
  }

  // Normalise field types.
  items = items.map((it) => ({
    name:         String(it.name         ?? "Unknown"),
    quantity:     Number(it.quantity     ?? 0),
    unit:         String(it.unit         ?? "unit"),
    unitPriceUsd: Number(it.unitPriceUsd ?? 0),
  }));

  return {
    items,
    // Badge shows the ACTUAL source the SDK reported; fall back to the
    // routing decision only if the SDK returned nothing.
    inferenceSource: resolveBadge(inferenceSourceValue, isLong ? "in_cloud" : "on_device"),
    reason: annotateReason(reason, inferenceSourceValue, isLong ? "in_cloud" : "on_device"),
  };
}

// ---------------------------------------------------------------------------
// askStallSmart
// ---------------------------------------------------------------------------

/**
 * Answer a vendor's question using hybrid AI.
 *
 * @param {string} question
 * @returns {Promise<{answer: string, inferenceSource: string, reason: string}>}
 */
export async function askStallSmart(question) {
  if (AI_DEMO_MODE) return { _demoMode: true };

  initAI();

  const isLong = question.trim().length >= 500;
  const model  = isLong ? _aiInCloud : _aiOnDevice;
  const reason = isLong
    ? `Long question (${question.trim().length} chars ≥ 500) — running in the cloud.`
    : `Short question (${question.trim().length} chars < 500) — running on-device.`;

  if (isLong) requireOnline();

  const prompt = [
    "You are StallSmart, an AI assistant for small market vendors.",
    "Answer the following question concisely and practically.",
    "Focus on pricing, inventory, and profit advice relevant to market vendors.",
    "",
    "Question:",
    question,
  ].join("\n");

  let response;
  try {
    response = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
  } catch (err) {
    if (!navigator.onLine || _simulateOffline) requireOnline();
    throw err;
  }

  const extracted = extractAiResponse(response);
  return {
    answer:          extracted.text,
    inferenceSource: resolveBadge(extracted.inferenceSource, isLong ? "in_cloud" : "on_device"),
    reason:          annotateReason(reason, extracted.inferenceSource, isLong ? "in_cloud" : "on_device"),
  };
}

// ---------------------------------------------------------------------------
// getDailySummary
// ---------------------------------------------------------------------------

/**
 * Generate a short on-device summary of today's sales.
 *
 * @param {{ revenue: number, cost: number, profit: number, topItems: Array<{name:string,revenue:number}> }} salesData
 * @returns {Promise<{summary: string, inferenceSource: string, reason: string}>}
 */
export async function getDailySummary(salesData) {
  if (AI_DEMO_MODE) return { _demoMode: true };

  initAI();

  const reason = "Short daily summary — running on-device for privacy.";

  const { revenue, cost, profit, topItems = [] } = salesData;
  const topText = topItems.length
    ? topItems.map((t) => `${t.name}: $${Number(t.revenue).toFixed(2)}`).join(", ")
    : "none recorded";

  const prompt = [
    "You are StallSmart, a friendly AI bookkeeper for a small market vendor.",
    "Write a short (2-3 sentence) end-of-day summary in plain English.",
    "Be encouraging and practical. Include the key numbers.",
    "",
    `Today's figures:`,
    `  Revenue: $${Number(revenue).toFixed(2)}`,
    `  Cost:    $${Number(cost).toFixed(2)}`,
    `  Profit:  $${Number(profit).toFixed(2)}`,
    `  Top sellers: ${topText}`,
  ].join("\n");

  let response;
  try {
    response = await _aiOnDevice.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
  } catch (err) {
    if (!navigator.onLine || _simulateOffline) requireOnline();
    throw err;
  }

  const extracted = extractAiResponse(response);
  return {
    summary:         extracted.text,
    inferenceSource: resolveBadge(extracted.inferenceSource, "on_device"),
    reason:          annotateReason(reason, extracted.inferenceSource, "on_device"),
  };
}

// ---------------------------------------------------------------------------
// getWeeklySummary
// ---------------------------------------------------------------------------

/**
 * Generate a detailed cloud-side analysis of the past 7 days.
 *
 * @param {Array<{itemName:string,quantity:number,salePriceUsd:number,costPriceUsd:number,soldAt:string}>} salesRows
 * @param {number} [maxChars=4000] - RC flag cloud_summary_max_chars
 * @returns {Promise<{summary: string, inferenceSource: string, reason: string}>}
 */
export async function getWeeklySummary(salesRows, maxChars = 4000) {
  if (AI_DEMO_MODE) return { _demoMode: true };

  initAI();
  requireOnline();

  const reason = "Detailed 7-day analysis — running in the cloud for deeper insights.";

  // Summarise raw rows into a compact text to stay within model context.
  const lines = salesRows.slice(0, 200).map((s) => {
    const date = s.soldAt ? new Date(s.soldAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "?";
    const rev  = (Number(s.salePriceUsd) * Number(s.quantity)).toFixed(2);
    const cost = (Number(s.costPriceUsd)  * Number(s.quantity)).toFixed(2);
    return `${date}: ${s.itemName} ×${s.quantity} rev=$${rev} cost=$${cost}`;
  });

  const salesText = lines.join("\n").slice(0, maxChars);

  const prompt = [
    "You are StallSmart, an AI business analyst for a small market vendor.",
    "Analyse the last 7 days of sales data below and provide:",
    "  1. Total revenue, cost, and profit.",
    "  2. Best-selling and most-profitable items.",
    "  3. One concrete recommendation to improve profit next week.",
    "Keep your response under 200 words and use plain English.",
    "",
    "Sales data (most recent first):",
    salesText || "No sales recorded yet.",
  ].join("\n");

  let response;
  try {
    response = await _aiInCloud.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
  } catch (err) {
    if (!navigator.onLine || _simulateOffline) requireOnline();
    throw err;
  }

  const extracted = extractAiResponse(response);
  return {
    summary:         extracted.text,
    inferenceSource: resolveBadge(extracted.inferenceSource, "in_cloud"),
    reason:          annotateReason(reason, extracted.inferenceSource, "in_cloud"),
  };
}

// ---------------------------------------------------------------------------
// probeOnDevice
// ---------------------------------------------------------------------------

/**
 * Probe whether the on-device Gemini Nano model is actually available in this
 * browser session by sending a minimal request.  Returns true when on-device
 * inference succeeded, false otherwise (model not downloaded, browser
 * unsupported, or SDK unavailable).
 *
 * This call is best-effort — failures are silently swallowed so the app never
 * hard-fails during startup.
 *
 * @returns {Promise<boolean>}
 */
export async function probeOnDevice() {
  if (AI_DEMO_MODE) return false;

  try {
    initAI();

    const response = await _aiOnDevice.generateContent({
      contents: [{ role: "user", parts: [{ text: "Reply with the single word: ready" }] }],
    });

    // If the response came from on-device, the model is available.
    // NOTE: generateContent() returns a { response } wrapper — the source
    // lives on the unwrapped response (see extractAiResponse).
    const src = extractAiResponse(response).inferenceSource;
    return (
      src === InferenceSource.ON_DEVICE ||
      src === "on_device"
    );
  } catch {
    // Any failure (network, model not ready, etc.) = unavailable.
    return false;
  }
}

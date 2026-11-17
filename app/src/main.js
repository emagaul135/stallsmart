/**
 * main.js — StallSmart UI wiring
 *
 * Responsibilities:
 *   - Detect demo mode (placeholder Firebase config).
 *   - In live mode: wire real AI calls (ai.js) and Firestore (store.js).
 *   - In demo mode: use deterministic local parser and in-memory demo data.
 *   - Wire all interactive elements (parse, save, log sale, ask, search).
 *   - Show routing-explainer and inference-source badges.
 *   - Provide the DOM surface that tests/harness.js inspects.
 */

import { isPlaceholderConfig } from "./firebase-config.js";
import {
  DEMO_MESSAGES_SHORT,
  DEMO_MESSAGE_LONG,
  DEMO_PARSED_ITEMS,
  DEMO_STOCK,
  DEMO_SALES,
  DEMO_ASK_RESPONSES,
  DEMO_ASK_FALLBACK,
  DEMO_DAILY_SUMMARY,
  DEMO_WEEKLY_SUMMARY,
  LOW_STOCK_THRESHOLD,
} from "./demo-data.js";
import {
  parseSupplierMessage,
  askStallSmart,
  getDailySummary,
  getWeeklySummary,
  probeOnDevice,
  setSimulateOffline,
  isSimulateOffline,
  AI_DEMO_MODE,
} from "./ai.js";
import {
  initStore,
  STORE_DEMO_MODE,
  addStockItems,
  onStockChange,
  onSalesChange,
  logSale,
  deductStock,
  getRemoteConfigValue,
} from "./store.js";

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

const IS_DEMO = isPlaceholderConfig();

/**
 * In-memory working copies.
 * In demo mode these are seeded from demo-data and updated locally.
 * In live mode they are kept in sync via Firestore real-time listeners
 * (onStockChange / onSalesChange), so the initial empty arrays are quickly
 * replaced by the listener callbacks.
 */
let stock = IS_DEMO ? DEMO_STOCK.map((s) => ({ ...s })) : [];
let sales = IS_DEMO ? DEMO_SALES.map((s) => ({ ...s })) : [];
let parsedItems = []; // rows currently shown in the parsed-results section

// ---------------------------------------------------------------------------
// DOM helpers
// ---------------------------------------------------------------------------

/** @param {string} id */
const el = (id) => document.getElementById(id);

/** @param {Element} el @param {boolean} hidden */
const setHidden = (element, hidden) => element.classList.toggle("hidden", hidden);

/** Format a number as USD */
const usd = (n) => `$${Number(n).toFixed(2)}`;

/** Format a date value as a short date — never prints "Invalid Date".
 * Live Firestore docs are normalised to ISO strings by store.js, but a
 * pending write can still be null and old docs could carry a Timestamp:
 * both render as "—" instead of "Invalid Date" (M3f). */
const shortDate = (value) => {
  if (!value) return "—";
  const d = value instanceof Date ? value : new Date(value);
  if (isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

/**
 * Build a source badge HTML string.
 * @param {"ON_DEVICE"|"IN_CLOUD"|"DEMO"} source
 */
function badgeHtml(source) {
  if (source === "ON_DEVICE") return `<span class="badge badge-on-device">ON-DEVICE</span>`;
  if (source === "IN_CLOUD")  return `<span class="badge badge-in-cloud">IN-CLOUD</span>`;
  return `<span class="badge badge-demo">DEMO</span>`;
}

// ---------------------------------------------------------------------------
// Demo / connection indicators
// ---------------------------------------------------------------------------

function initIndicators() {
  if (IS_DEMO) {
    setHidden(el("demo-badge"), false);
    el("footer-demo-note").textContent =
      "⚠ Running in demo mode — Firebase config not yet set. All AI results are simulated.";
  }

  const updateConnection = () => {
    const pill = el("connection-pill");
    if (isSimulateOffline()) {
      pill.textContent = "● Simulated offline";
      pill.className = "pill pill-offline";
    } else if (navigator.onLine) {
      pill.textContent = "● Online";
      pill.className = "pill pill-online";
    } else {
      pill.textContent = "● Offline";
      pill.className = "pill pill-offline";
    }
  };
  updateConnection();
  window.addEventListener("online",  updateConnection);
  window.addEventListener("offline", updateConnection);

  // Offline simulation toggle (Hybrid Status panel): blocks cloud calls so
  // the offline demo can be shown without DevTools. Honest simulation —
  // on-device calls keep working, cloud calls fail with needs-internet.
  el("chk-simulate-offline").addEventListener("change", (e) => {
    setSimulateOffline(e.target.checked);
    updateConnection();
  });
}

// ---------------------------------------------------------------------------
// Hybrid status panel
// ---------------------------------------------------------------------------

function updateStatusPanel({ mode = "—", lastRequest = "None yet", reason = "No AI call made yet.", onDevice = null } = {}) {
  el("status-mode").textContent       = mode;
  el("status-last").textContent       = lastRequest;
  el("status-reason").textContent     = reason;
  el("status-ondevice").textContent   =
    onDevice === null  ? (IS_DEMO ? "Unknown (demo mode)" : "Checking…")
    : onDevice         ? "✅ Available"
                       : "❌ Not available (falling back to cloud)";
}

// ---------------------------------------------------------------------------
// Parse section
// ---------------------------------------------------------------------------

/** Routing decision (mirrors ai.js logic used in S2) */
function routingDecision(text) {
  const len = text.trim().length;
  if (len > 2000) {
    return {
      mode:   "PREFER_IN_CLOUD",
      source: "IN_CLOUD",
      reason: `Long document (${len} chars > 2 000) — sending to the cloud.`,
    };
  }
  return {
    mode:   "PREFER_ON_DEVICE",
    source: "ON_DEVICE",
    reason: `Short message (${len} chars ≤ 2 000) — running on-device.`,
  };
}

/** Show routing explainer below the textarea */
function showRoutingExplainer(text) {
  const { source, reason } = routingDecision(text);
  const div = el("parse-routing");
  div.innerHTML = `${badgeHtml(IS_DEMO ? "DEMO" : source)}<span>${reason}</span>`;
  setHidden(div, false);
}

/** Demo parser: deterministic extraction from DEMO_MESSAGES_SHORT[0] pattern */
function demoParseMessage(text) {
  // Try to match the built-in sample first (exact match by id lookup)
  const knownMsg = [...DEMO_MESSAGES_SHORT, DEMO_MESSAGE_LONG].find(
    (m) => m.text.trim() === text.trim()
  );
  if (knownMsg && knownMsg.id === "msg-001") {
    return DEMO_PARSED_ITEMS.map((item) => ({ ...item }));
  }

  // Generic regex parser for lines like: "Name Qty unit @$price" or "Name x Qty @$price"
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

/** Render editable parsed-results table */
function renderParsedTable(items) {
  const tbody = el("parsed-tbody");
  tbody.innerHTML = "";

  items.forEach((item, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="text"   class="parsed-name"  data-idx="${idx}" value="${escHtml(item.name)}" /></td>
      <td><input type="number" class="parsed-qty"   data-idx="${idx}" value="${item.quantity}" min="0.01" step="0.01" style="width:80px"/></td>
      <td><input type="text"   class="parsed-unit"  data-idx="${idx}" value="${escHtml(item.unit)}" style="width:70px"/></td>
      <td><input type="number" class="parsed-price" data-idx="${idx}" value="${item.unitPriceUsd}" min="0.00" step="0.01" style="width:90px"/></td>
      <td><button class="btn btn-ghost btn-remove-row" data-idx="${idx}" style="padding:.25rem .5rem;font-size:.75rem;">✕</button></td>
    `;
    tbody.appendChild(tr);
  });

  // Sync edits back to parsedItems
  tbody.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const idx  = parseInt(input.dataset.idx, 10);
      const cls  = input.className.split(" ").find((c) => c.startsWith("parsed-"));
      if (cls === "parsed-name")  parsedItems[idx].name         = input.value;
      if (cls === "parsed-qty")   parsedItems[idx].quantity     = parseFloat(input.value) || 0;
      if (cls === "parsed-unit")  parsedItems[idx].unit         = input.value;
      if (cls === "parsed-price") parsedItems[idx].unitPriceUsd = parseFloat(input.value) || 0;
    });
  });

  tbody.querySelectorAll(".btn-remove-row").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.idx, 10);
      parsedItems.splice(idx, 1);
      renderParsedTable(parsedItems);
    });
  });
}

function initParseSection() {
  const btnParse    = el("btn-parse");
  const btnLoadDemo = el("btn-load-demo");
  const textarea    = el("parse-input");

  // Load demo message button cycles through short samples
  let demoMsgIdx = 0;
  btnLoadDemo.addEventListener("click", () => {
    const msgs = [...DEMO_MESSAGES_SHORT, DEMO_MESSAGE_LONG];
    const msg  = msgs[demoMsgIdx % msgs.length];
    textarea.value = msg.text;
    demoMsgIdx++;
    setHidden(el("parse-routing"), true);
    setHidden(el("section-parsed-results"), true);
  });

  // Show routing explainer as the user types
  textarea.addEventListener("input", () => {
    if (textarea.value.trim().length > 10) {
      showRoutingExplainer(textarea.value);
    } else {
      setHidden(el("parse-routing"), true);
    }
  });

  btnParse.addEventListener("click", async () => {
    const text = textarea.value.trim();
    if (!text) return;

    btnParse.disabled = true;
    setHidden(el("parse-loading"), false);
    setHidden(el("section-parsed-results"), true);
    // Clear any previous error
    setHidden(el("parse-error"), true);

    const { source, mode, reason } = routingDecision(text);

    // Show routing explainer with badge (may be overridden after real AI call)
    const div = el("parse-routing");
    div.innerHTML = `${badgeHtml(IS_DEMO ? "DEMO" : source)}<span>${reason}</span>`;
    setHidden(div, false);

    updateStatusPanel({
      mode:        IS_DEMO ? `${mode} (demo)` : mode,
      lastRequest: "Parse supplier message",
      reason:      reason,
    });

    if (IS_DEMO) {
      await new Promise((r) => setTimeout(r, 600));
      parsedItems = demoParseMessage(text);
    } else {
      try {
        const result = await parseSupplierMessage(text);
        parsedItems = result.items;
        // Update badge to reflect actual inferenceSource from the SDK
        div.innerHTML = `${badgeHtml(result.inferenceSource)}<span>${result.reason}</span>`;
        updateStatusPanel({
          mode:        result.inferenceSource === "ON_DEVICE"
                         ? "PREFER_ON_DEVICE"
                         : "PREFER_IN_CLOUD",
          lastRequest: "Parse supplier message",
          reason:      result.reason,
          onDevice:    result.inferenceSource === "ON_DEVICE",
        });
      } catch (err) {
        parsedItems = [];
        const errEl = el("parse-error");
        errEl.textContent = err.needsInternet
          ? "⚠ This request needs an internet connection. Please check your signal and try again."
          : `⚠ Could not parse message: ${err.message}`;
        setHidden(errEl, false);
      }
    }

    setHidden(el("parse-loading"), true);
    btnParse.disabled = false;

    if (parsedItems.length) {
      renderParsedTable(parsedItems);
      setHidden(el("section-parsed-results"), false);
    }
  });

  // Save to inventory
  el("btn-save-stock").addEventListener("click", async () => {
    if (!parsedItems.length) return;

    if (IS_DEMO) {
      const now = new Date().toISOString();
      parsedItems.forEach((item) => {
        const existing = stock.findIndex((s) => s.name.toLowerCase() === item.name.toLowerCase());
        if (existing >= 0) {
          stock[existing].quantity += item.quantity;
        } else {
          stock.push({
            id:           `stock-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
            name:         item.name,
            quantity:     item.quantity,
            unit:         item.unit,
            unitPriceUsd: item.unitPriceUsd,
            source:       "demo",
            createdAt:    now,
          });
        }
      });
    } else {
      try {
        await addStockItems(parsedItems, "ai-parsed");
      } catch (err) {
        alert(`Could not save to inventory: ${err.message}`);
      }
    }

    parsedItems = [];
    setHidden(el("section-parsed-results"), true);
    renderInventory();
    populateSaleItemSelect();
  });

  // Discard parsed
  el("btn-clear-parsed").addEventListener("click", () => {
    parsedItems = [];
    setHidden(el("section-parsed-results"), true);
  });
}

// ---------------------------------------------------------------------------
// Inventory
// ---------------------------------------------------------------------------

function renderInventory(filterText = "", lowStockOnly = false) {
  const tbody = el("inventory-tbody");
  const empty = el("inventory-empty");
  tbody.innerHTML = "";

  let rows = stock.slice();

  if (filterText) {
    const q = filterText.toLowerCase();
    rows = rows.filter((s) => s.name.toLowerCase().includes(q));
  }
  if (lowStockOnly) {
    rows = rows.filter((s) => s.quantity <= LOW_STOCK_THRESHOLD);
  }

  if (!rows.length) {
    setHidden(empty, false);
    return;
  }
  setHidden(empty, true);

  rows.forEach((item) => {
    const isLow = item.quantity <= LOW_STOCK_THRESHOLD;
    const tr    = document.createElement("tr");
    if (isLow) tr.classList.add("low-stock");
    tr.innerHTML = `
      <td>${escHtml(item.name)}${isLow ? '<span class="low-stock-flag">LOW</span>' : ""}</td>
      <td>${item.quantity}</td>
      <td>${escHtml(item.unit)}</td>
      <td>${usd(item.unitPriceUsd)}</td>
      <td><span class="badge badge-${item.source === "demo" ? "demo" : "on-device"}">${escHtml(item.source)}</span></td>
      <td>${shortDate(item.createdAt)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function initInventorySection() {
  if (!IS_DEMO) {
    // Live mode: set up real-time listener so inventory auto-updates.
    onStockChange((items) => {
      stock = items;
      renderInventory(el("inventory-search").value, el("chk-low-stock").checked);
      populateSaleItemSelect();
    });
  }

  renderInventory();

  el("inventory-search").addEventListener("input", (e) => {
    renderInventory(e.target.value, el("chk-low-stock").checked);
  });
  el("chk-low-stock").addEventListener("change", (e) => {
    renderInventory(el("inventory-search").value, e.target.checked);
  });
}

// ---------------------------------------------------------------------------
// Sales + profit dashboard
// ---------------------------------------------------------------------------

function populateSaleItemSelect() {
  const sel = el("sale-item");
  const cur = sel.value;
  sel.innerHTML = `<option value="">— select item —</option>`;
  stock.forEach((item) => {
    const opt = document.createElement("option");
    opt.value       = item.id;
    opt.textContent = `${item.name} (${item.quantity} ${item.unit} @ ${usd(item.unitPriceUsd)})`;
    sel.appendChild(opt);
  });
  if (cur) sel.value = cur;
}

function renderDashboard() {
  const todayStr = new Date().toDateString();
  const todaySales = sales.filter(
    (s) => new Date(s.soldAt).toDateString() === todayStr
  );

  const revenue = todaySales.reduce((sum, s) => sum + s.salePriceUsd * s.quantity, 0);
  const cost    = todaySales.reduce((sum, s) => sum + s.costPriceUsd  * s.quantity, 0);
  const profit  = revenue - cost;

  el("stat-revenue").textContent = usd(revenue);
  el("stat-cost").textContent    = usd(cost);
  el("stat-profit").textContent  = usd(profit);

  // Top items by revenue
  const byItem = {};
  todaySales.forEach((s) => {
    byItem[s.itemName] = (byItem[s.itemName] || 0) + s.salePriceUsd * s.quantity;
  });
  const sorted = Object.entries(byItem).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const list  = el("top-items-list");
  const empty = el("dashboard-empty");
  list.innerHTML = "";

  if (!sorted.length) {
    setHidden(empty, false);
    return;
  }
  setHidden(empty, true);

  sorted.forEach(([name, rev]) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${escHtml(name)}</span><span>${usd(rev)}</span>`;
    list.appendChild(li);
  });
}

function initSalesSection() {
  if (!IS_DEMO) {
    // Live mode: real-time listener for sales keeps dashboard in sync.
    onSalesChange((items) => {
      sales = items;
      renderDashboard();
    });
  }

  populateSaleItemSelect();
  renderDashboard();

  el("btn-log-sale").addEventListener("click", async () => {
    const itemId    = el("sale-item").value;
    const qty       = parseFloat(el("sale-qty").value);
    const salePrice = parseFloat(el("sale-price").value);

    if (!itemId || !qty || !salePrice) {
      alert("Please select an item and enter qty + sale price.");
      return;
    }

    const item = stock.find((s) => s.id === itemId);
    if (!item) return;

    if (item.quantity < qty) {
      alert(`Not enough stock. You have ${item.quantity} ${item.unit}(s).`);
      return;
    }

    const saleRecord = {
      itemId:       item.id,
      itemName:     item.name,
      quantity:     qty,
      salePriceUsd: salePrice,
      costPriceUsd: item.unitPriceUsd,
    };

    if (IS_DEMO) {
      sales.push({
        id: `sale-${Date.now()}`,
        ...saleRecord,
        soldAt: new Date().toISOString(),
      });
      item.quantity -= qty;
    } else {
      try {
        await logSale(saleRecord);
        await deductStock(item.id, qty);
      } catch (err) {
        alert(`Could not log sale: ${err.message}`);
        return;
      }
    }

    // Reset form
    el("sale-qty").value   = "";
    el("sale-price").value = "";

    renderInventory(el("inventory-search").value, el("chk-low-stock").checked);
    populateSaleItemSelect();
    renderDashboard();
  });
}

// ---------------------------------------------------------------------------
// Dashboard AI summaries
// ---------------------------------------------------------------------------

function buildSalesDataForSummary() {
  const todayStr   = new Date().toDateString();
  const todaySales = sales.filter((s) => new Date(s.soldAt).toDateString() === todayStr);

  const revenue = todaySales.reduce((sum, s) => sum + s.salePriceUsd * s.quantity, 0);
  const cost    = todaySales.reduce((sum, s) => sum + s.costPriceUsd  * s.quantity, 0);
  const profit  = revenue - cost;

  const byItem = {};
  todaySales.forEach((s) => {
    byItem[s.itemName] = (byItem[s.itemName] || 0) + s.salePriceUsd * s.quantity;
  });
  const topItems = Object.entries(byItem)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name, rev]) => ({ name, revenue: rev }));

  return { revenue, cost, profit, topItems };
}

function initDashboardSummaries() {
  el("btn-daily-summary").addEventListener("click", async () => {
    setHidden(el("daily-summary-result"), true);
    setHidden(el("weekly-summary-result"), true);
    setHidden(el("summary-error"), true);
    setHidden(el("daily-summary-loading"), false);

    let summary, inferenceSource, reason;

    if (IS_DEMO) {
      await new Promise((r) => setTimeout(r, 700));
      ({ summary, inferenceSource } = DEMO_DAILY_SUMMARY);
      reason          = "Short daily summary — running on-device for privacy. [DEMO — simulated result]";
      inferenceSource = "DEMO";
    } else {
      try {
        const salesData = buildSalesDataForSummary();
        const result    = await getDailySummary(salesData);
        summary         = result.summary;
        inferenceSource = result.inferenceSource;
        reason          = result.reason;
        updateStatusPanel({
          mode:        "PREFER_ON_DEVICE",
          lastRequest: "Daily summary",
          reason,
          onDevice:    inferenceSource === "ON_DEVICE",
        });
      } catch (err) {
        setHidden(el("daily-summary-loading"), true);
        const errEl = el("summary-error");
        errEl.textContent = err.needsInternet
          ? "⚠ This request needs an internet connection. Please check your signal and try again."
          : `⚠ Could not generate daily summary: ${err.message}`;
        setHidden(errEl, false);
        return;
      }
    }

    setHidden(el("daily-summary-loading"), true);
    el("daily-summary-badge-row").innerHTML =
      `${badgeHtml(inferenceSource)}<span>${reason}</span>`;
    el("daily-summary-text").textContent = summary;
    setHidden(el("daily-summary-result"), false);
  });

  el("btn-weekly-summary").addEventListener("click", async () => {
    setHidden(el("daily-summary-result"), true);
    setHidden(el("weekly-summary-result"), true);
    setHidden(el("summary-error"), true);
    setHidden(el("weekly-summary-loading"), false);

    let summary, inferenceSource, reason;

    if (IS_DEMO) {
      await new Promise((r) => setTimeout(r, 900));
      ({ summary, inferenceSource } = DEMO_WEEKLY_SUMMARY);
      reason          = "Detailed 7-day analysis — running in the cloud for deeper insights. [DEMO — simulated result]";
      inferenceSource = "DEMO";
    } else {
      if (!navigator.onLine) {
        setHidden(el("weekly-summary-loading"), true);
        const errEl = el("summary-error");
        errEl.textContent = "⚠ Weekly analysis needs an internet connection. Please check your signal.";
        setHidden(errEl, false);
        return;
      }

      try {
        const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
        const recentSales  = sales.filter((s) => new Date(s.soldAt).getTime() >= sevenDaysAgo);
        const maxChars     = getRemoteConfigValue("cloud_summary_max_chars");
        const result       = await getWeeklySummary(recentSales, maxChars);
        summary         = result.summary;
        inferenceSource = result.inferenceSource;
        reason          = result.reason;
        updateStatusPanel({
          mode:        "PREFER_IN_CLOUD",
          lastRequest: "Weekly analysis",
          reason,
          onDevice:    false,
        });
      } catch (err) {
        setHidden(el("weekly-summary-loading"), true);
        const errEl = el("summary-error");
        errEl.textContent = err.needsInternet
          ? "⚠ Weekly analysis needs an internet connection. Please check your signal."
          : `⚠ Could not generate weekly analysis: ${err.message}`;
        setHidden(errEl, false);
        return;
      }
    }

    setHidden(el("weekly-summary-loading"), true);
    el("weekly-summary-badge-row").innerHTML =
      `${badgeHtml(inferenceSource)}<span>${reason}</span>`;
    el("weekly-summary-text").innerHTML = escHtml(summary).replace(/\n/g, "<br>");
    setHidden(el("weekly-summary-result"), false);
  });
}

// ---------------------------------------------------------------------------
// Ask StallSmart
// ---------------------------------------------------------------------------

function demoAskAnswer(question) {
  const q = question.toLowerCase();
  const match = DEMO_ASK_RESPONSES.find((r) =>
    r.keywords.some((kw) => q.includes(kw))
  );
  return match || DEMO_ASK_FALLBACK;
}

function initAskSection() {
  el("btn-ask").addEventListener("click", async () => {
    const question = el("ask-input").value.trim();
    if (!question) return;

    el("btn-ask").disabled = true;
    setHidden(el("ask-loading"), false);
    setHidden(el("ask-result"), true);
    setHidden(el("ask-error"), true);

    const isLong = question.length >= 500;
    const { source, mode, reason } = isLong
      ? { source: "IN_CLOUD",  mode: "PREFER_IN_CLOUD",  reason: `Long question (${question.length} chars ≥ 500) — running in the cloud.` }
      : { source: "ON_DEVICE", mode: "PREFER_ON_DEVICE", reason: `Short question (${question.length} chars < 500) — running on-device.` };

    updateStatusPanel({
      mode:        IS_DEMO ? `${mode} (demo)` : mode,
      lastRequest: "Ask StallSmart",
      reason:      reason,
    });

    let resultSource = source;
    let resultReason = reason;
    let answerText   = "";

    if (IS_DEMO) {
      await new Promise((r) => setTimeout(r, 700));
      const demoResult = demoAskAnswer(question);
      answerText   = demoResult.answer;
      resultSource = "DEMO";
    } else {
      try {
        const result = await askStallSmart(question);
        answerText   = result.answer;
        resultSource = result.inferenceSource;
        resultReason = result.reason;
        updateStatusPanel({
          mode:        resultSource === "ON_DEVICE" ? "PREFER_ON_DEVICE" : "PREFER_IN_CLOUD",
          lastRequest: "Ask StallSmart",
          reason:      resultReason,
          onDevice:    resultSource === "ON_DEVICE",
        });
      } catch (err) {
        setHidden(el("ask-loading"), true);
        el("btn-ask").disabled = false;
        const errEl = el("ask-error");
        errEl.textContent = err.needsInternet
          ? "⚠ This request needs an internet connection. Please check your signal and try again."
          : `⚠ Error: ${err.message}`;
        setHidden(errEl, false);
        return;
      }
    }

    setHidden(el("ask-loading"), true);
    el("btn-ask").disabled = false;

    el("ask-badge-row").innerHTML =
      `${badgeHtml(resultSource)}<span>${resultReason}</span>`;
    el("ask-answer").textContent = answerText;

    setHidden(el("ask-result"), false);
  });

  // Allow Enter key
  el("ask-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") el("btn-ask").click();
  });
}

// ---------------------------------------------------------------------------
// XSS-safe HTML escaping
// ---------------------------------------------------------------------------

function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ---------------------------------------------------------------------------
// Bootstrap
// ---------------------------------------------------------------------------

async function init() {
  initIndicators();
  updateStatusPanel();

  // Start Firestore (and anonymous Auth) in live mode.  In demo mode this is
  // a no-op that returns immediately.
  try {
    await initStore();
  } catch (err) {
    console.warn("StallSmart: store init failed —", err.message);
  }

  initParseSection();
  initInventorySection();
  initSalesSection();
  initDashboardSummaries();
  initAskSection();

  // Probe for on-device model availability (best-effort, runs async).
  // We set the status panel to "Checking…" on start and update when done.
  if (!IS_DEMO) {
    probeOnDevice().then((available) => {
      updateStatusPanel({
        mode:        available ? "PREFER_ON_DEVICE" : "PREFER_IN_CLOUD (fallback)",
        lastRequest: el("status-last").textContent,
        reason:      available
          ? "Gemini Nano is available on this device — short jobs will run on-device."
          : "On-device model not available in this browser. All requests will fall back to the cloud.",
        onDevice: available,
      });
    }).catch(() => {
      // Probe failed — update panel to reflect unavailability.
      updateStatusPanel({
        mode:        "PREFER_IN_CLOUD (fallback)",
        lastRequest: el("status-last").textContent,
        reason:      "Could not reach on-device model — all requests will use the cloud.",
        onDevice:    false,
      });
    });
  }

  // Expose state for DOM harness (tests/harness.js)
  window.__stallsmart = {
    isDemo:                  IS_DEMO,
    getStock:                () => stock,
    getSales:                () => sales,
    getParsedItems:          () => parsedItems,
    renderInventory,
    renderDashboard,
    buildSalesDataForSummary,
  };
}

// Run after DOM is ready (module scripts are deferred by default, but be safe)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

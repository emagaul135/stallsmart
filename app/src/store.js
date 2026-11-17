/**
 * store.js — Firestore stock + sales collections with offline persistence.
 *
 * When firebase-config.js still has placeholder values, the module runs in
 * demo mode: all reads/writes operate on the in-memory demo data imported from
 * demo-data.js.  The public API is identical in both modes so main.js does not
 * need to branch.
 *
 * Public API:
 *   initStore()                       → Promise<void>   (call once on startup)
 *   addStockItems(items, source)      → Promise<void>
 *   onStockChange(callback)           → unsubscribe fn  (real-time listener)
 *   onSalesChange(callback)           → unsubscribe fn
 *   logSale(saleRecord)               → Promise<void>
 *   deductStock(itemId, qty)          → Promise<void>
 *   getRemoteConfigValue(key)         → current value from Remote Config cache
 *
 * Firestore collections:
 *   stock  { name, quantity, unit, unitPriceUsd, source, createdAt }
 *   sales  { itemId, itemName, quantity, salePriceUsd, costPriceUsd, soldAt }
 *
 * App Check:
 *   Local development: a debug token (app/.env.local, gitignored, never
 *   committed) is set on self.FIREBASE_APPCHECK_DEBUG_TOKEN before the SDK
 *   loads, so App Check passes in development without a real provider.
 *   Production: ReCaptchaEnterpriseProvider with the free Fraud Defense
 *   site key from firebase-config.js (registered in the console as
 *   "StallSmart Web"; enforcement ON for Firebase AI Logic). The debug
 *   token is only applied when it is a real token — never the zero-UUID
 *   placeholder, which would otherwise force debug mode with an invalid
 *   token and break live AI calls.
 *
 * Remote Config:
 *   Fetched once at startup with a 1-hour cache.  Falls back to RC_DEFAULTS
 *   when the network is unavailable or the project is not wired up yet.
 */

import {
  isPlaceholderConfig,
  firebaseConfig,
  APP_CHECK_DEBUG_TOKEN,
  RECAPTCHA_ENTERPRISE_SITE_KEY,
  RC_DEFAULTS,
} from "./firebase-config.js";
import { DEMO_STOCK, DEMO_SALES } from "./demo-data.js";

// ---------------------------------------------------------------------------
// Demo-mode flag
// ---------------------------------------------------------------------------

export const STORE_DEMO_MODE = isPlaceholderConfig();

// ---------------------------------------------------------------------------
// Remote Config cache (populated by initStore in live mode)
// ---------------------------------------------------------------------------

/** In-memory cache of Remote Config values, seeded with safe defaults. */
const _rcCache = { ...RC_DEFAULTS };

/**
 * Return the current cached value for a Remote Config key.
 * Falls back to RC_DEFAULTS when the key is unknown.
 *
 * @param {string} key
 * @returns {*}
 */
export function getRemoteConfigValue(key) {
  return key in _rcCache ? _rcCache[key] : (RC_DEFAULTS[key] ?? null);
}

// ---------------------------------------------------------------------------
// Demo-mode in-memory store
// ---------------------------------------------------------------------------

/** Mutable copies for demo mode */
let _demoStock = DEMO_STOCK.map((s) => ({ ...s }));
let _demoSales = DEMO_SALES.map((s) => ({ ...s }));

/** Listeners registered via onStockChange / onSalesChange in demo mode */
const _stockListeners = [];
const _salesListeners = [];

function _notifyStock() {
  const snap = _demoStock.map((s) => ({ ...s }));
  _stockListeners.forEach((cb) => cb(snap));
}
function _notifySales() {
  const snap = _demoSales.map((s) => ({ ...s }));
  _salesListeners.forEach((cb) => cb(snap));
}

// ---------------------------------------------------------------------------
// Firebase / Firestore references (populated by initStore in live mode)
// ---------------------------------------------------------------------------

let _db          = null;
let _stockRef    = null;
let _salesRef    = null;

// ---------------------------------------------------------------------------
// initStore
// ---------------------------------------------------------------------------

/**
 * Initialise Firebase Auth + Firestore.  Safe to call multiple times — only
 * the first call does real work.
 */
let _storeInitialised = false;

export async function initStore() {
  if (_storeInitialised) return;
  _storeInitialised = true;

  if (STORE_DEMO_MODE) {
    // Demo mode: nothing to initialise — in-memory data is already set.
    return;
  }

  // -------------------------------------------------------------------------
  // App Check debug token — must be set on `self` before the SDK initialises.
  // The SDK reads self.FIREBASE_APPCHECK_DEBUG_TOKEN; setting it here (not in
  // firebase-config.js) keeps the concern in one bootstrap location.
  // -------------------------------------------------------------------------
  // Only set a REAL debug token. The zero-UUID placeholder must NOT be set:
  // the SDK treats any string on self.FIREBASE_APPCHECK_DEBUG_TOKEN as a
  // debug token, and an invalid one would break live App Check attestation.
  if (
    typeof self !== "undefined" &&
    APP_CHECK_DEBUG_TOKEN &&
    !APP_CHECK_DEBUG_TOKEN.includes("PLACEHOLDER") &&
    APP_CHECK_DEBUG_TOKEN !== "00000000-0000-0000-0000-000000000000"
  ) {
    // Only set when running in a browser (or browser-like) context; the DOM
    // harness runs in plain Node where self is undefined.
    // eslint-disable-next-line no-self-assign
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = APP_CHECK_DEBUG_TOKEN;
  }

  // Lazy-import Firebase modules (keeps demo-mode bundle clean, though Vite
  // tree-shakes unused modules anyway).
  const { initializeApp, getApp } = await import("firebase/app");
  const {
    initializeFirestore,
    persistentLocalCache,
    persistentSingleTabManager,
    collection,
    getFirestore,
  } = await import("firebase/firestore");
  const {
    getAuth,
    signInAnonymously,
  } = await import("firebase/auth");

  // Get or create the default Firebase app.
  let app;
  try {
    app = getApp();
  } catch {
    app = initializeApp(firebaseConfig);
  }

  // -------------------------------------------------------------------------
  // App Check — reCAPTCHA Enterprise (Fraud Defense, free tier) with the
  // site key registered in the Firebase console as "StallSmart Web".
  // In local dev the debug token set on self above takes precedence
  // automatically (the SDK uses it when present). In the hosted demo the
  // Enterprise provider attests the app; enforcement is ON for AI Logic.
  // -------------------------------------------------------------------------
  try {
    const { initializeAppCheck, ReCaptchaEnterpriseProvider } = await import("firebase/app-check");
    initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_ENTERPRISE_SITE_KEY),
      isTokenAutoRefreshEnabled: true,
    });
  } catch (acErr) {
    // App Check is optional — the app still works without it in dev.
    console.warn("StallSmart: App Check init skipped —", acErr.message);
  }

  // Initialise Firestore with offline persistence.
  try {
    _db = initializeFirestore(app, {
      localCache: persistentLocalCache({
        tabManager: persistentSingleTabManager({ forceOwnership: false }),
      }),
    });
  } catch (e) {
    // If already initialised (e.g. initializeFirestore called twice), fall back
    // to getFirestore.
    if (e.code === "failed-precondition" || e.message?.includes("already been started")) {
      _db = getFirestore(app);
    } else {
      throw e;
    }
  }

  _stockRef = collection(_db, "stock");
  _salesRef = collection(_db, "sales");

  // Anonymous auth — required for Firestore security rules.
  try {
    const auth = getAuth(app);
    if (!auth.currentUser) {
      await signInAnonymously(auth);
    }
  } catch (authErr) {
    // Auth failure should not prevent the app from running (Firestore rules
    // may still allow unauthenticated reads in dev).
    console.warn("StallSmart: anonymous auth failed —", authErr.message);
  }

  // -------------------------------------------------------------------------
  // Remote Config — fetch flag: cloud_summary_max_chars (default 4000).
  // Uses a 1-hour minimum fetch interval so cold starts don't hammer the RC
  // server.  Falls back to RC_DEFAULTS when network is unavailable.
  // -------------------------------------------------------------------------
  try {
    const {
      getRemoteConfig,
      fetchAndActivate,
      getValue,
    } = await import("firebase/remote-config");

    const rc = getRemoteConfig(app);
    rc.settings.minimumFetchIntervalMillis = 3600_000; // 1 hour
    rc.defaultConfig = { ...RC_DEFAULTS };

    await fetchAndActivate(rc);

    // Pull the flag value into our in-memory cache.
    const maxChars = getValue(rc, "cloud_summary_max_chars");
    if (maxChars) {
      const parsed = parseInt(maxChars.asString(), 10);
      if (!isNaN(parsed)) _rcCache.cloud_summary_max_chars = parsed;
    }
  } catch (rcErr) {
    // RC is non-critical; app works with defaults.
    console.warn("StallSmart: Remote Config fetch skipped —", rcErr.message);
  }
}

// ---------------------------------------------------------------------------
// addStockItems
// ---------------------------------------------------------------------------

/**
 * Save parsed items to Firestore (or demo store).
 * Merges with existing items that share the same name (case-insensitive).
 *
 * @param {Array<{name, quantity, unit, unitPriceUsd}>} items
 * @param {"ai-parsed"|"demo"|string} source
 */
export async function addStockItems(items, source = "ai-parsed") {
  if (STORE_DEMO_MODE) {
    const now = new Date().toISOString();
    items.forEach((item) => {
      const idx = _demoStock.findIndex(
        (s) => s.name.toLowerCase() === item.name.toLowerCase()
      );
      if (idx >= 0) {
        _demoStock[idx].quantity += item.quantity;
      } else {
        _demoStock.push({
          id:           `stock-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          name:         item.name,
          quantity:     item.quantity,
          unit:         item.unit,
          unitPriceUsd: item.unitPriceUsd,
          source,
          createdAt:    now,
        });
      }
    });
    _notifyStock();
    return;
  }

  // Live mode
  const { addDoc, getDocs, query, where, updateDoc, doc, serverTimestamp }
    = await import("firebase/firestore");

  for (const item of items) {
    // Try to find an existing document with the same name.
    const q = query(_stockRef, where("name", "==", item.name));
    const snap = await getDocs(q);

    if (!snap.empty) {
      const existing = snap.docs[0];
      await updateDoc(doc(_db, "stock", existing.id), {
        quantity: existing.data().quantity + item.quantity,
      });
    } else {
      await addDoc(_stockRef, {
        name:         item.name,
        quantity:     item.quantity,
        unit:         item.unit,
        unitPriceUsd: item.unitPriceUsd,
        source,
        createdAt:    serverTimestamp(),
      });
    }
  }
}

// ---------------------------------------------------------------------------
// onStockChange / onSalesChange — real-time listeners
// ---------------------------------------------------------------------------

/**
 * Register a callback that fires whenever the stock collection changes.
 * Returns an unsubscribe function.
 *
 * @param {(items: Array) => void} callback
 * @returns {() => void} unsubscribe
 */
export function onStockChange(callback) {
  if (STORE_DEMO_MODE) {
    _stockListeners.push(callback);
    // Fire immediately with current data.
    callback(_demoStock.map((s) => ({ ...s })));
    return () => {
      const idx = _stockListeners.indexOf(callback);
      if (idx >= 0) _stockListeners.splice(idx, 1);
    };
  }

  // Live mode — set up real-time Firestore listener.
  // We store a promise for the unsubscribe function so callers can still call
  // it even before initStore finishes.
  let _unsub = null;
  let _cancelled = false;

  (async () => {
    const { onSnapshot, orderBy, query } = await import("firebase/firestore");
    if (_cancelled) return;
    const q = query(_stockRef, orderBy("createdAt", "desc"));
    _unsub = onSnapshot(q, (snap) => {
      const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      callback(items);
    }, (err) => {
      console.error("StallSmart: stock listener error —", err);
    });
  })();

  return () => {
    _cancelled = true;
    if (_unsub) _unsub();
  };
}

/**
 * Register a callback that fires whenever the sales collection changes.
 * Returns an unsubscribe function.
 *
 * @param {(sales: Array) => void} callback
 * @returns {() => void} unsubscribe
 */
export function onSalesChange(callback) {
  if (STORE_DEMO_MODE) {
    _salesListeners.push(callback);
    callback(_demoSales.map((s) => ({ ...s })));
    return () => {
      const idx = _salesListeners.indexOf(callback);
      if (idx >= 0) _salesListeners.splice(idx, 1);
    };
  }

  let _unsub = null;
  let _cancelled = false;

  (async () => {
    const { onSnapshot, orderBy, query } = await import("firebase/firestore");
    if (_cancelled) return;
    const q = query(_salesRef, orderBy("soldAt", "desc"));
    _unsub = onSnapshot(q, (snap) => {
      const salesItems = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      callback(salesItems);
    }, (err) => {
      console.error("StallSmart: sales listener error —", err);
    });
  })();

  return () => {
    _cancelled = true;
    if (_unsub) _unsub();
  };
}

// ---------------------------------------------------------------------------
// logSale
// ---------------------------------------------------------------------------

/**
 * Record a completed sale.
 *
 * @param {{ itemId, itemName, quantity, salePriceUsd, costPriceUsd }} saleRecord
 */
export async function logSale(saleRecord) {
  const record = {
    ...saleRecord,
    soldAt: new Date().toISOString(),
  };

  if (STORE_DEMO_MODE) {
    _demoSales.push({ id: `sale-${Date.now()}`, ...record });
    _notifySales();
    return;
  }

  const { addDoc, serverTimestamp } = await import("firebase/firestore");
  await addDoc(_salesRef, {
    ...saleRecord,
    soldAt: serverTimestamp(),
  });
}

// ---------------------------------------------------------------------------
// deductStock
// ---------------------------------------------------------------------------

/**
 * Reduce quantity of a stock item after a sale.
 *
 * @param {string} itemId
 * @param {number} qty
 */
export async function deductStock(itemId, qty) {
  if (STORE_DEMO_MODE) {
    const idx = _demoStock.findIndex((s) => s.id === itemId);
    if (idx >= 0) {
      _demoStock[idx].quantity = Math.max(0, _demoStock[idx].quantity - qty);
      _notifyStock();
    }
    return;
  }

  const { doc, updateDoc, getDoc, increment } = await import("firebase/firestore");
  const ref = doc(_db, "stock", itemId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;
  await updateDoc(ref, { quantity: increment(-qty) });
}

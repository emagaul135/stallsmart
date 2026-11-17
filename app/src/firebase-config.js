/**
 * firebase-config.js
 *
 * LIVE Firebase project: StallSmart (stallsmart-908a3), Spark free tier.
 * Wired 2026-11-17 (M3 ship prep). The public web config (apiKey etc.) is
 * NOT a secret; it is a client identifier and is safe to commit — this is
 * how every Firebase web app ships. Never put service-account keys or Admin
 * SDK credentials here.
 *
 * App Check debug token:
 *   The debug token is NEVER hard-coded here and NEVER committed. It is read
 *   from the Vite environment variable VITE_FIREBASE_APPCHECK_DEBUG_TOKEN,
 *   which is set in app/.env.local (gitignored, local-only). Without it the
 *   placeholder zero-UUID is used and App Check simply has no debug token.
 *   For the public hosted demo, App Check uses a free reCAPTCHA Enterprise
 *   (Fraud Defense) provider registered in the Firebase console — see
 *   NOTES.md. Enforcement is ON for Firebase AI Logic.
 *
 * Remote Config defaults (used when RC cannot be fetched).
 */

export const firebaseConfig = {
  apiKey:            "AIzaSyAaLRth1hUAFaRY6auL1-5zqqVZlHD5_TE",
  authDomain:        "stallsmart-908a3.firebaseapp.com",
  projectId:         "stallsmart-908a3",
  storageBucket:     "stallsmart-908a3.firebasestorage.app",
  messagingSenderId: "732262114772",
  appId:             "1:732262114772:web:db43bd475dac8d8087a241",
  measurementId:     "G-P6K56EJ5M1",
};

// Vite env (import.meta.env is undefined under plain Node, e.g. the harness).
const _viteEnv =
  typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env
    : {};

export const APP_CHECK_DEBUG_TOKEN =
  _viteEnv.VITE_FIREBASE_APPCHECK_DEBUG_TOKEN ||
  "00000000-0000-0000-0000-000000000000";

/**
 * reCAPTCHA Enterprise (Fraud Defense) site key for App Check — a public
 * identifier, safe to commit. Registered in the Firebase console 2026-11-17
 * as "StallSmart Web" (free tier, 10,000 assessments/month), domains:
 * localhost, stallsmart-908a3.firebaseapp.com, stallsmart-908a3.web.app.
 * The app uses ReCaptchaEnterpriseProvider with this key; the debug token
 * above is only used for local development (see store.js).
 */
export const RECAPTCHA_ENTERPRISE_SITE_KEY =
  "6LfwMiUuAAAAAKSCJE9S8jqythRiUNQS67WWpsLr";

/** Remote Config defaults (used when RC cannot be fetched). */
export const RC_DEFAULTS = {
  cloud_summary_max_chars: 4000,
};

/**
 * Returns true when the config still has placeholder values.
 * Used to activate demo mode throughout the app.
 */
export function isPlaceholderConfig() {
  return firebaseConfig.apiKey.startsWith("PLACEHOLDER");
}

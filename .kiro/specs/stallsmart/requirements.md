# StallSmart — requirements (EARS-style)

## R1 — Supplier message parsing (hybrid)
- WHEN the vendor pastes a supplier message AND taps Parse, THE SYSTEM SHALL call Firebase AI Logic with `InferenceMode.PREFER_ON_DEVICE` and a JSON schema (items: [{name, quantity, unit, unitPriceUsd}]) for messages up to 2,000 chars, and `PREFER_IN_CLOUD` for longer messages.
- WHEN the model returns, THE SYSTEM SHALL show each AI answer with its inference source badge (ON-DEVICE or IN-CLOUD, from `response.inferenceSource`) and the routing reason ("short message — ran on-device" / "long document — ran in the cloud").
- WHEN on-device inference is unavailable, THE SYSTEM SHALL fall back to the cloud automatically and say so in the UI; it SHALL NEVER hard-fail when offline (cloud calls show a clear "needs internet" message instead of crashing).
- THE SYSTEM SHALL let the vendor edit parsed rows before saving.

## R2 — Inventory (Firestore, offline-first)
- WHEN parsed rows are saved, THE SYSTEM SHALL store them in Firestore collection `stock` (fields: name, quantity, unit, unitPriceUsd, createdAt, source).
- THE SYSTEM SHALL enable Firestore offline persistence so the inventory works with no network and syncs queued writes when back online.
- THE SYSTEM SHALL show low-stock flags (quantity <= lowStockThreshold, default 5) and search/filter by name.

## R3 — Sales + profit dashboard
- WHEN the vendor logs a sale (item + qty + sale price), THE SYSTEM SHALL store it in Firestore collection `sales` and update the dashboard (today revenue, cost, profit, top items).
- THE SYSTEM SHALL provide a short on-device daily summary and a cloud weekly analysis (longer text routed to cloud).

## R4 — Ask StallSmart
- WHEN the vendor asks a short question (<500 chars), THE SYSTEM SHALL answer on-device; longer analysis requests go to the cloud. Every answer shows its inference-source badge.

## R5 — Hybrid status panel
- THE SYSTEM SHALL show on-device model availability, the active inference mode, and a plain-English explanation of what ran where and why.

## R6 — Firebase products + submission compliance
- THE SYSTEM SHALL use Firebase AI Logic (actually called at runtime), Firestore, anonymous Auth, App Check (debug token accepted), and one Remote Config flag (e.g. `cloud_summary_max_chars`).
- THE SYSTEM SHALL load all Firebase config from `app/src/firebase-config.js` (placeholder values until the real project exists) and SHALL contain no production secrets.
- THE SYSTEM SHALL be a static site (Vite build) with all UI copy in English and sample data in USD.
- THE SYSTEM SHALL work fully offline for all non-AI features and degrade gracefully for cloud AI calls.

## R7 — Demo data (no keys needed)
- THE SYSTEM SHALL ship a built-in demo dataset (sample supplier messages + stock + sales) so the UI, routing display, and harness work with zero Firebase keys; demo mode is clearly labelled and never pretends to be a live AI call.

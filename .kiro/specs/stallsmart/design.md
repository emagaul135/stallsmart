# StallSmart — design

## Architecture (static site, Vite + vanilla JS, no framework)
```
app/
├── index.html          # single-page UI: parse box, inventory table, sales, dashboard, ask, status panel
├── src/
│   ├── main.js         # UI wiring, event handlers, demo-mode switch
│   ├── firebase-config.js  # placeholder config (real project values drop in later)
│   ├── ai.js           # Firebase AI Logic: getGenerativeModel(PREFER_ON_DEVICE / PREFER_IN_CLOUD),
│   │                   # structured-output JSON schema, inferenceSource badge helper,
│   │                   # routing by input length, graceful offline degradation
│   ├── store.js        # Firestore: stock + sales collections, offline persistence, listeners
│   └── demo-data.js    # built-in sample messages/stock/sales (clearly labelled demo mode)
├── styles.css
└── package.json        # vite + firebase@^13
```

## Key decisions
- **Routing rule (visible, explainable):** message ≤2,000 chars → `PREFER_ON_DEVICE` (short parse fits Nano); >2,000 chars → `PREFER_IN_CLOUD`. Ask <500 chars → on-device; longer → cloud. The UI always states the reason next to the badge.
- **Structured output:** on-device parse uses the Firebase structured-output JSON schema for `items[]`; if the on-device model returns unparseable text, retry once in cloud, then show the raw text with a "could not parse" note — never silently drop data.
- **Offline-first:** Firestore `enableIndexedDbPersistence` (or the v13 equivalent `initializeFirestore` + `persistentLocalCache`); all local writes queue and sync. Cloud AI calls check `navigator.onLine` first and show "needs internet" inline.
- **Auth:** anonymous sign-in on load (no PII, no login screen). App Check debug token in dev; real App Check config comes with the Firebase project.
- **Remote Config:** one flag, `cloud_summary_max_chars` (default 4000), fetched at startup with a safe default so the app works with no network.
- **Demo mode:** when `firebase-config.js` still has placeholder values, the app runs in labelled demo mode: parsing uses a deterministic local parser for the built-in samples + canned routing badges clearly marked "DEMO". The real AI code paths stay in `ai.js` and are unit-tested by the harness; demo mode never claims a live call happened.
- **No secrets:** only the public Firebase web config (apiKey etc. are public client keys) is embedded; no service-account or Admin SDK material anywhere.

## UI layout (single page, desktop-first, works at 1440×900)
Header (StallSmart + connection status pill) → Parse card (textarea + Parse button + routing explainer) → Parsed results (editable table + Save to stock) → Inventory (search + low-stock flags) → Sales + Profit dashboard (today cards + top items) → Ask StallSmart → Hybrid status panel (on-device availability, mode, what ran where). Footer: demo-mode label when applicable.

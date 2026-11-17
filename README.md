# StallSmart — Offline-First AI Bookkeeper for Market Vendors

**#BuildHybridAI 2026 · Firebase AI Logic · Vite + Vanilla JS**

---

## What it does

Small market vendors worldwide track stock on paper or in WhatsApp threads. StallSmart turns that into a working bookkeeper that runs in a browser — including when there is no signal.

A vendor pastes a supplier message like:

> *"Beras 10kg x5 sacks @$12, Sugar 1kg x10 @$1.50, Cooking oil 1L x8 @$2.20"*

StallSmart parses it into editable stock rows, saves to inventory, lets the vendor log sales in two taps, and shows a live profit dashboard. Every AI answer carries an **ON-DEVICE** or **IN-CLOUD** badge so the hybrid behaviour is always visible.

---

## How hybrid inference is used

StallSmart uses **Firebase AI Logic** (`firebase/ai`, SDK v13) with both inference modes and surfaces the routing decision on every result.

| Feature | Routing | Why |
|---|---|---|
| Parse supplier message (≤ 2 000 chars) | `PREFER_ON_DEVICE` | Private, fast, works offline |
| Parse long catalog (> 2 000 chars) | `PREFER_IN_CLOUD` | Exceeds on-device context |
| Ask StallSmart (< 500 chars) | `PREFER_ON_DEVICE` | Short Q&A fits Gemini Nano |
| Ask StallSmart (≥ 500 chars) | `PREFER_IN_CLOUD` | Longer analysis |
| Daily profit summary | `PREFER_ON_DEVICE` | Private, end-of-day, short |
| Weekly trend analysis | `PREFER_IN_CLOUD` | Richer detail, 7-day data |

The inference source (`response.inferenceSource`) from the SDK is mapped to the **ON-DEVICE** / **IN-CLOUD** badge shown next to every AI result. The routing reason ("short message — ran on-device") is shown in plain English.

The **Hybrid AI Status** panel probes on-device availability at startup and updates in real time, showing which model is active and why.

**Structured output:** the parse feature uses a JSON schema (`Schema.array` / `Schema.object`) so the on-device model returns validated `items[]` instead of free text.

---

## Firebase products used

| Product | How |
|---|---|
| **Firebase AI Logic** | Hybrid inference, `InferenceMode.PREFER_ON_DEVICE` / `PREFER_IN_CLOUD`, `inferenceSource` badges, structured JSON output |
| **Firestore** | `stock` and `sales` collections with `persistentLocalCache` (IndexedDB) so inventory works offline and queued writes sync when back online |
| **Auth** | Anonymous sign-in on startup — no PII, no login screen |
| **App Check** | Free reCAPTCHA Enterprise (Fraud Defense) provider, `ReCaptchaEnterpriseProvider` with the site key registered in the Firebase console; enforcement ON for Firebase AI Logic. A debug token (local-only, `app/.env.local`, never committed) is used for development only. |
| **Remote Config** | Flag `cloud_summary_max_chars` (default 4 000) fetched at startup with 1-hour cache; app works with safe defaults when offline |

---

## Running the app

### Prerequisites

- Node 24 + npm 10
- A modern browser (Chrome 129+ for on-device Gemini Nano; any browser for cloud-only mode)

### Install and run (demo mode — no Firebase project needed)

```bash
cd app
npm install
npm run dev        # → http://localhost:5173
```

The app starts in **demo mode** when `firebase-config.js` still has placeholder values. All AI results use canned responses labelled **DEMO**. The full UI — parsing, inventory, sales, dashboard, Ask StallSmart — works with zero keys.

### Build for production

```bash
cd app
npm run build      # outputs to app/dist/
```

### Syntax check

```bash
node --check app/src/firebase-config.js
node --check app/src/demo-data.js
node --check app/src/store.js
node --check app/src/ai.js
node --check app/src/main.js
```

### Run the test harness

```bash
node tests/harness.js    # exits 0 when all 28 assertions pass
```

### Wire up a real Firebase project (Milestone 3 — done)

1. Project created at [console.firebase.google.com](https://console.firebase.google.com): **StallSmart** (`stallsmart-908a3`, Spark free tier).
2. Enabled: Firestore, Authentication (Anonymous), App Check (reCAPTCHA Enterprise / Fraud Defense, free tier), Remote Config, AI Logic (Gemini, text only).
3. Web app registered; the config object is in `app/src/firebase-config.js`.
4. Remote Config parameter `cloud_summary_max_chars` (number, default `4000`).
5. The App Check debug token lives only in `app/.env.local` (gitignored, never committed) for local development; production builds are made without it.

---

## Project structure

```
buildhybridai/
├── README.md
├── PLAN.md, NOTES.md
├── .kiro/
│   ├── steering/product.md, tech.md, structure.md
│   └── specs/stallsmart/requirements.md, design.md, tasks.md
├── app/
│   ├── index.html          Single-page UI
│   ├── styles.css          Responsive styles (390 px → 1440 px)
│   ├── package.json        vite + firebase@^13
│   └── src/
│       ├── main.js         UI wiring, event handlers, demo mode
│       ├── ai.js           Firebase AI Logic — hybrid inference, routing, badges
│       ├── store.js        Firestore, offline persistence, App Check, Remote Config
│       ├── demo-data.js    Built-in sample data (zero-key demo mode)
│       └── firebase-config.js  Placeholder config + RC defaults
└── tests/
    └── harness.js          Plain Node test harness (25 assertions, exits 0)
```

---

## Demo video shot list (< 3 minutes)

Target: a single continuous screen recording in Chrome on a machine with Gemini Nano downloaded. Keep narration in English.

| # | Scene | What to show | Expected badge |
|---|---|---|---|
| 1 | **Cold open (0:00–0:10)** | App loads in Chrome, header visible, Demo Mode badge | — |
| 2 | **On-device parse (0:10–0:35)** | Click "Load demo message", click Parse, spinner appears | **ON-DEVICE** badge appears |
| 3 | **Edit + save (0:35–0:50)** | Edit a price in the parsed table, click "Save to Inventory" | Inventory table updates |
| 4 | **Offline parse (0:50–1:10)** | Open DevTools → Network → Offline, paste the same short message, click Parse | **ON-DEVICE** badge — works with no signal |
| 5 | **Cloud parse (1:10–1:30)** | Restore network, load the long catalog demo message, click Parse | **IN-CLOUD** badge + routing reason |
| 6 | **Log a sale (1:30–1:45)** | Select an item, enter qty + price, click "Log Sale" | Dashboard stats update |
| 7 | **Daily summary (1:45–2:00)** | Click "Daily Summary (on-device)" | **ON-DEVICE** badge + summary text |
| 8 | **Weekly analysis (2:00–2:20)** | Click "Weekly Analysis (cloud)" | **IN-CLOUD** badge + multi-line analysis |
| 9 | **Ask StallSmart (2:20–2:35)** | Type "Is $12/sack for rice a good price?", press Enter | **ON-DEVICE** badge + answer |
| 10 | **Hybrid status panel (2:35–2:50)** | Scroll to Hybrid AI Status panel | Shows on-device availability, mode, reason |
| 11 | **Close (2:50–3:00)** | App on mobile viewport (DevTools responsive, 390 px wide) — no overflow | Clean responsive layout |

**Total target: ≤ 2 min 50 sec.**  Narrate each step in one sentence. Add English captions if the microphone audio is unclear.

---

## Submission checklist (Milestone 3)

- [x] Real Firebase config in `firebase-config.js`
- [x] Public GitHub repo (emagaul135) with open-source licence (MIT)
- [x] Deploy to GitHub Pages, free for judges: https://emagaul135.github.io/stallsmart/ (status: built, HTTP 200). NOTE: live AI calls need emagaul135.github.io added to the reCAPTCHA Enterprise key's domain list first.
- [ ] Demo video < 3 min on public YouTube, English/captions
- [ ] Devpost registration (oyentv770) + submission before **1 Dec 2026 05:00 WIB**

---

*StallSmart is a hackathon submission. No warranty. Sample data in USD.*

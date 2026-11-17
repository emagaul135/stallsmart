# Tech — StallSmart

- Vite + vanilla JS (no framework). Static site; `npm run build` outputs to `dist/`.
- `firebase` JS SDK v13: AI Logic (`getGenerativeModel`, `InferenceMode.PREFER_ON_DEVICE` / `PREFER_IN_CLOUD`, `response.inferenceSource`, structured output), Firestore with offline persistence, anonymous Auth, App Check (debug token in dev), Remote Config (one flag with safe default).
- Firebase config lives only in `app/src/firebase-config.js` (placeholder values until the real project exists). Never commit secrets; the public web config is fine once the project exists.
- Node 24, npm 10. Verify with `node --check` and `npm run build`. DOM harness in `tests/` (node, no browser needed).

# StallSmart — tasks

## Milestone 0 — Spec + scaffold (Muse, 17 Nov)
- [x] PLAN.md, NOTES.md, requirements/design/tasks written
- [x] Workdir + .kiro steering files

## Milestone 1 — Core build (REAL Kiro CLI sessions, logged in as oyentv770@gmail.com)
- [x] **S1 — Scaffold:** Vite project (`app/`), `package.json` (vite + firebase@^13), `index.html` + `styles.css` skeleton, `src/firebase-config.js` (placeholder), `src/demo-data.js`, `src/main.js` wiring the page sections. `npm install` + `npm run build` must pass. Commit-ready, no secrets. — DONE, sess_16e4862c
- [x] **S2 — Parse + inventory:** `src/ai.js` (Firebase AI Logic hybrid: PREFER_ON_DEVICE / PREFER_IN_CLOUD, JSON schema, inferenceSource badge, routing by length, offline degradation) + `src/store.js` (Firestore stock/sales, offline persistence) + parse UI with editable rows + save-to-stock + inventory table with search + low-stock flags. Demo mode works with zero keys. — DONE, sess_d3809290
- [x] **S3 — Dashboard + Ask + status + polish:** sales logging, profit dashboard (today revenue/cost/profit/top items), Ask StallSmart with badges, hybrid status panel, Remote Config flag, App Check debug setup, responsive polish, README + demo-video shot list. — DONE, sess_5f62259e; harness 25/25 pass

## Milestone 2 — Verify (Muse)
- [x] `node --check` on all JS; `npm run build` clean
- [x] DOM harness in `tests/` — 25/25 pass, exit 0
- [x] Real-browser visual check (Chrome via CDP, 1440×900) — styled UI, no overflow (scrollW == clientW), demo parse renders 4 rows, inventory 6 rows, revenue $43.40 / profit $9.00, routing badge shown. Note: file:// needs `--allow-file-access-from-files` for Vite ES-module scripts (Chrome CORS); `base: './'` fix applied (Muse, after 2 killed Kiro S4 attempts — see NOTES.md)
- [ ] Offline/online behaviour in a real browser with internet (parent cloud browser) — on-device path + cloud fallback both observed honestly — BLOCKED on Firebase project creation

## Milestone 3 — Ship prep (NOT YET — needs parent/user)
- [ ] Firebase project created (parent browser, oyentv770@gmail.com) → real config into `firebase-config.js`
- [ ] Public GitHub repo under emagaul135 (user confirms) → push → hosted demo (GitHub Pages or Firebase Hosting)
- [ ] Demo video <3 min, public YouTube → Devpost registration + submit (deadline 1 Dec 05:00 WIB)

# #BuildHybridAI 2026 — StallSmart: build plan

## The contest (verified live 2026-11-17 from firebasehybridaihackathon.devpost.com + /rules)
- **Contest:** #BuildHybridAI 2026, Google / Firebase on Devpost. Official URL: https://firebasehybridaihackathon.devpost.com/
- **Deadline:** submission closes **Sun 30 Nov 2026 14:00 PT = 17:00 ET = 22:00 UTC = Mon 1 Dec 2026 05:00 WIB**. Judging 10–16 Dec; winners announced ~21 Dec 12:00 PT.
- **Prizes ($30,000 total):** Grand $10,000 · 1st runner-up $7,000 · 2nd runner-up $4,000 · Best iOS / Android / Web app $3,000 each. Top winners also get a Firebase team interview + featured blog post + social mention.
- **Eligibility:** Indonesia ELIGIBLE. Excluded: Brazil, Italy, Quebec, Crimea, Cuba, Iran, Syria, North Korea, Sudan, Belarus, Russia + OFAC-sanctioned. Must be above the age of majority. Solo entry OK (individual / team / org).
- **What to build:** a Gen AI app using **Firebase AI Logic Hybrid Inference** (on-device model when available, cloud fallback otherwise) + other Firebase products (App Check REQUIRED — debug tokens accepted in submissions; Remote Config, Firestore, Auth encouraged).
- **Platform:** Web (Chrome) with Gemini Nano 4 via Firebase AI Logic. Multi-platform gets strong Grand Prize consideration, but an outstanding single-platform app can still win. We build **Web only** — finishable in the time left.
- **Submission requires:** working app (free for judges until judging ends) + public repo on GitHub/GitLab with an open-source licence + demo video <3 min, public on YouTube, English or English subtitles + text description (how Firebase AI Logic is used, features, value proposition). Firebase AI Logic must be **genuinely called at runtime** (imported and actually called — not just named in the README). All materials in English. No purchase necessary. Text inference is free within usage limits; Google Account Quota (4-day accounts, sprints: request by Wed 18 Nov 10:00 PT / Wed 25 Nov 10:00 PT) is only needed for billing-required models (e.g. image generation) — **we do not need it** (text only).
- **Coding agents explicitly encouraged** ("Build with any AI coding tool or IDE you like… Coding agents work best with Firebase Agent Skills").
- **Judging criteria** (from the Devpost page): Technological Implementation (how effectively Firebase AI Logic hybrid inference is used) · Design (complete, coherent product, not a proof of concept) · Potential Impact (real problem, real audience) · Quality of the Idea (creative, non-obvious use of hybrid inference).
- **Registration:** Devpost account required; register on the contest site. **STATUS: NOT DONE — needs the parent agent's live browser signed in as oyentv770 (Devpost oyentv770 / Diden Rahmadian).** No phone verification expected, but Cloudflare/human checks may appear.

## The app: StallSmart — the offline-first AI bookkeeper for market vendors

**One-line pitch:** A market vendor pastes a supplier message; StallSmart turns it into stock records, tracks sales, and tells them their profit — and it keeps working when the market has no signal, because short jobs run on-device and long jobs fall back to the cloud.

**Why this concept:**
- *Hybrid is the point, not decoration.* Vendors work in markets with bad or no signal. Short parsing ("Beras 10kg × 5 sacks @ $12") runs on-device (Gemini Nano, free, private, offline); long supplier catalogs and deep price analysis fall back to the cloud. The app shows a visible **ON-DEVICE / IN-CLOUD badge on every AI answer** (Firebase `response.inferenceSource`), so judges literally see hybrid inference working — plus a network-toggle demo moment in the video.
- *Real problem, real audience.* Millions of small vendors worldwide track stock on paper or in chat messages. A tool that turns a supplier WhatsApp-style message into an inventory table, offline, is immediately useful.
- *Non-obvious.* Not a chatbot wrapper and NOT the notes-summariser example from the contest page. Structured-output parsing (JSON schema) on-device is a genuinely good fit for a small on-device model.
- *Demoable in <3 min.* Paste message → parsed table appears with ON-DEVICE badge → toggle network off → still works → paste long catalog → IN-CLOUD badge → profit dashboard.
- *Finishable in ~1 week* with the Firebase web stack.

**Features (v1):**
1. **Parse supplier message** — paste/type text → structured JSON (items, qty, unit, price) via `PREFER_ON_DEVICE` with a JSON schema; long text (>~2,000 chars) routes to `PREFER_IN_CLOUD`. Parsed rows are editable before saving.
2. **Inventory** — Firestore collection `stock` (offline persistence on), low-stock flags, search/filter.
3. **Sales log + profit dashboard** — log a sale in two taps; dashboard shows today's revenue, cost, profit, top items. Short summaries on-device; weekly analysis in cloud.
4. **Ask StallSmart** — "Is $12/sack for rice a good price?" Short Q&A on-device; "analyse my month" goes to cloud. Every answer carries its inference-source badge.
5. **Hybrid status panel** — shows on-device availability, current mode, and a plain-English explanation of what ran where and why.
6. **Offline-first** — Firestore persistence; queued writes sync when back online; full UI works with no network (except cloud calls, which degrade with a clear message).

**Firebase products used:** AI Logic (Hybrid Inference, `InferenceMode.PREFER_ON_DEVICE` / `PREFER_IN_CLOUD`, `inferenceSource` badge, structured output JSON) · Firestore (inventory + sales, offline persistence) · Auth (anonymous sign-in, no PII) · App Check (debug token for submission) · Remote Config (flag: cloud-analysis max length / enable price-check).

**Tech stack:** Vite + vanilla JS (zero-framework, same robust pattern as NecroRepo) + `firebase` JS SDK v13 (default cloud fallback `gemini-3.5-flash-lite`, `inferenceSource` needs SDK ≥12.5). Static site, deployable to GitHub Pages or Firebase Hosting. All UI + copy in English; sample data in USD.

## Build plan / milestones
- **M0 — Spec + scaffold (today, 17 Nov):** this plan, `.kiro/` spec + steering, Vite scaffold, Firebase config placeholder (`app/src/firebase-config.js` — real values drop in later), demo-mode data so the UI works without keys.
- **M1 — Core build (Kiro sessions):** S1 scaffold + Firebase wiring skeleton; S2 parse-to-inventory feature (structured output, routing, Firestore); S3 sales/profit dashboard + Ask + hybrid status panel + polish + DOM harness.
- **M2 — Verify:** `node --check`, DOM harness (all checks pass), real-browser visual check (Chrome via CDP, 1440×900), offline/online behaviour checked in a real browser with internet (parent cloud browser — the VM's Chromium cannot reach the internet).
- **M3 — Ship prep (NOT yet — needs user/parent confirmation):** Firebase project creation (parent browser, Google account oyentv770@gmail.com) + config drop-in → public GitHub repo under emagaul135 → deploy hosted demo → demo video <3 min (public YouTube) → Devpost registration + submit (deadline 1 Dec 05:00 WIB).

## Risks / open items
- **Firebase project does not exist yet.** Creating one needs the Google account (browser or `firebase-tools` device-flow login) — a parent/user step. Code is written config-first so it drops in cleanly.
- **On-device Gemini Nano needs Chrome with the Prompt API + downloaded model.** The SDK falls back to cloud when unavailable; the app must never hard-fail. Demo video must be recorded in a real browser with internet (parent cloud browser) to show both paths honestly.
- **Kiro credits:** free plan 50/month; NecroRepo used ~5 sessions. `kiro-cli profile` is Pro-only so balance cannot be read directly — sessions will fail visibly if credits run out. The 4,000-credit claim was submitted 17 Nov but the code has NOT arrived yet. Fallback: build with Muse directly and note it honestly. NEVER buy credits.
- **Do NOT create the public GitHub repo or submit yet** — per task instruction; prepare everything and report readiness.
- **Odds:** honest — Devpost judging is subjective; no win can be promised. Goal: a polished, working, genuinely-hybrid submission.

## Why not the alternatives
- Notes/document summariser: literally the example on the contest page — judges will have seen it many times.
- Offline first-aid guide: strong offline story but medical-advice accuracy risk.
- Teacher quiz generator: generic, weak "why hybrid" story.
- Reddit Game of the Day (#2 pick) and Codegeist (#3) stay as the next targets after this submission.

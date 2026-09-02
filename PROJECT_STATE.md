# ESUR Project State

> Authoritative current project status for humans and AI assistants.
> Read this file before proposing or implementing further ESUR changes.

Last verified: 2026-09-02

## Verified code baseline

- Repository: `KnoxiCoke/Esur22`
- Main baseline: `cd671d69ffb6f99555ae99e0407a7b61827811e3`
- Refactor branch: `refactor/modularize-script`
- Verified code commit: `d244ae6ad13ffa9629ba47ee5ad2ae1a6b2087ef`
- Draft PR: `#12`
- PR state: open, Draft, not merged

## Medical status

The five HSR modules have completed the current manual source/Q&A review pass in EN/DE:

- Previous reaction — reviewed
- Acute management — reviewed
- Switch — reviewed
- Tryptase — reviewed
- NIHR — reviewed

This does **not** mean final Medical Affairs approval or medical validation.

### Known medical/source clarifications

1. Part 1 literally contains a hypotension positioning rule involving prone positioning / raising the legs. It is intentionally not implemented in the UI and remains `MEDICAL CLARIFICATION REQUIRED`.
2. The published acute source states salbutamol nebulization `2.5–5 µg`. The UI currently preserves the published unit and the item remains flagged for medical verification.

### Practice Changes 2018 → 2025

- Remains in the application as an informational tab.
- Has technical smoke-test coverage only.
- Has **not** yet completed the same full medical/source audit as the five HSR modules.
- Do not change or modularize its medical content before that audit.

## Regression protection

- Playwright tests: `82`
- Shared fixture fails on browser `pageerror` and `console.error`.
- Latest verified official PR CI run: `33616000229`
- Result: `82/82 passed`, `0 failed`, `0 skipped`, `2 workers`

The verified run loaded all current runtime files successfully:

- `js/content/i18n.js`
- `js/app/utils.js`
- `js/app/icons.js`
- `script.js`

## Refactor status

### R1 — VERIFIED

Commit: `0c9b967a1fa84f716a754831649a4fdda7259f72`

- Existing i18n content mechanically extracted to `js/content/i18n.js`.
- `script.js` now reads `window.ESUR.i18n`.
- No medical content change.

Integrity reference:

- i18n object body SHA-256: `eac3710cd43a82604f8864e8af521cbba6fcf6e3e7c73fdba6402a5cbe65b08c`

### R2A — VERIFIED

Commit: `6a42b7f05499063208403a381975f0096ae053bc`

Only the pure helpers were extracted:

- `escapeHtml()`
- `fmt()`

New file:

- `js/app/utils.js`

R2A production blobs:

- `index.html`: `5be1a4ab55a48c94363eaa44964cefe1ecf28dab`
- `js/app/utils.js`: `4365d30f8a9e73e1d4c0bbd397446cbe12e7d2a7`
- `script.js`: `31cc51f80d50d51fe7ba4f4f9e1782e9a2abebb2`
- `js/content/i18n.js`: unchanged from R1 (`e5f4543ae41eb2e55c4a7b98a3b63db522c389be`)
- `style.css`: unchanged (`78c4f94b2ee7a42ff38190889a974f5067f7c35f`)

`changesLibrary` remained in `script.js` and was not modified by R2A.

### R2B — VERIFIED

Commit: `d244ae6ad13ffa9629ba47ee5ad2ae1a6b2087ef`

Only the pure SVG helper was extracted:

- `iconSvg()`

New file:

- `js/app/icons.js`

Current runtime load order:

1. `js/content/i18n.js`
2. `js/app/utils.js`
3. `js/app/icons.js`
4. `script.js`

R2B production blobs:

- `index.html`: `1285d7b40e485beee20d1fc891b416107a373a36`
- `js/app/icons.js`: `6c0eb8e8bd14cc68c12c7882a2cfd35f1cad769f`
- `script.js`: `9babf856050d873691bd5df7fcd95708bbc5feec`
- `js/app/utils.js`: unchanged (`4365d30f8a9e73e1d4c0bbd397446cbe12e7d2a7`)
- `js/content/i18n.js`: unchanged (`e5f4543ae41eb2e55c4a7b98a3b63db522c389be`)
- `style.css`: unchanged (`78c4f94b2ee7a42ff38190889a974f5067f7c35f`)

R2B exact code diff versus its parent:

- `index.html`: +1 / -0
- `js/app/icons.js`: +83 / -0
- `script.js`: +1 / -80

`changesLibrary` remains in `script.js` and was not modified by R2B.

### R2C — NOT STARTED

Next permitted action:

- perform a read-only dependency review of the remaining monolith;
- propose exactly one narrow R2C extraction;
- do not implement R2C until that narrow scope has been reviewed and explicitly approved.

## Governance rules

- During refactor: no medical wording, recommendation-strength, units, routing, decision logic, or source meaning may change.
- Do not weaken, delete, bypass, or rewrite regression tests to make a refactor pass.
- Every structural step must pass the full Playwright suite and official PR CI before being marked VERIFIED.
- Keep `changesLibrary` / Practice Changes medical content untouched until its separate audit.
- PR `#12` stays Draft.
- Do not merge to `main` without explicit approval.
- Tests are regression guardrails, not proof of medical correctness.

## AI handoff rule

Before doing anything, read `PROJECT_STATE.md` and treat it as the authoritative project status.

If chat history, a local workspace, or an earlier report conflicts with this file, verify the current GitHub branch and CI before proceeding. Update this file only after a milestone has been independently verified.

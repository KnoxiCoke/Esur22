# ESUR Project State

> Authoritative current project status for humans and AI assistants.
> Read this file before proposing or implementing further ESUR changes.

Last verified: 2026-09-02

## Verified code baseline

- Repository: `KnoxiCoke/Esur22`
- Main baseline: `cd671d69ffb6f99555ae99e0407a7b61827811e3`
- Refactor branch: `refactor/modularize-script`
- Verified code commit: `3ba92834d940537b00363adb1bb04e14717f71eb`
- CI verification commit (tree-identical): `ab14f0326f8cbb40c6a572245b511ecafd0f7aed`
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
- Latest verified official PR CI run: `33623219011`
- CI verification head: `ab14f0326f8cbb40c6a572245b511ecafd0f7aed`
- Result: `82/82 passed`, `0 failed`, `0 skipped`, `2 workers`, `17.6 s`

The verified run loaded all current runtime files successfully:

- `js/content/i18n.js`
- `js/app/utils.js`
- `js/app/icons.js`
- `js/app/nav.js`
- `js/hsr/acute.js`
- `js/hsr/nihr.js`
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

### R2C — VERIFIED

Code commit: `0b2c94e24471fa87436f8d8b0a577e2636554299`

Only the Acute-specific list renderer helper was extracted:

- `renderAcuteList()`

New file:

- `js/hsr/acute.js`

Important: `js/hsr/acute.js` is **not yet the complete Acute module**. R2C moved this one helper only.

R2C production blobs:

- `index.html`: `922b23cc32b4689346b43c93a1d085dd91d7a9a0`
- `js/hsr/acute.js`: `e29e1294c62fb3c41720bac34dc785164343aae9`
- `script.js`: `89dc940912b804e31eb0fbe36390e7e8c1fbc75c`

R2C exact net code diff versus the last verified R2B status commit `282240b6b3b218dfec7f13a43e4cf87b6b16c85b`:

- `index.html`: +1 / -0
- `js/hsr/acute.js`: +12 / -0
- `script.js`: +1 / -3

`changesLibrary` remains in `script.js` and was not modified by the R2C net code change.

### R2D — VERIFIED

Code commit: `45b444128206a98465b35cbf6882e3e36db80af6`
CI verification commit (tree-identical): `7174a1792e03bd20a6a0db494f8672019efd99d3`

Only the NIHR-specific list renderer helper was extracted:

- `renderNihrList()`

New file:

- `js/hsr/nihr.js`

Important: `js/hsr/nihr.js` is **not yet the complete NIHR module**. R2D moved this one helper only.

R2D runtime load order at that milestone:

1. `js/content/i18n.js`
2. `js/app/utils.js`
3. `js/app/icons.js`
4. `js/hsr/acute.js`
5. `js/hsr/nihr.js`
6. `script.js`

R2D production blobs:

- `index.html`: `04530f8d0606fa6cccb87fa7f2c639b06e405cc6`
- `js/hsr/nihr.js`: `cf37be95193dcf835d93227de3298c6cf1b05de2`
- `script.js`: `477a1778880c9172d728acc7f4ba5711051fbf31`

R2D exact net code diff versus the last verified R2C status commit `ceab1429da169b1601f46e3eda16f3f6571ebdd1`:

- `index.html`: +1 / -0
- `js/hsr/nihr.js`: +14 / -0
- `script.js`: +1 / -2

The CI verification commit is tree-identical to the R2D code commit. `changesLibrary`, i18n, utils, icons, acute, style, tests, package files and the normal CI workflow were not modified by the R2D net code change.

### R2E — VERIFIED

Code commit: `3ba92834d940537b00363adb1bb04e14717f71eb`
CI verification commit (tree-identical): `ab14f0326f8cbb40c6a572245b511ecafd0f7aed`
Official PR CI run: `33623219011`

App-Chrome / navigation was extracted as the first larger coherent refactor package:

- `views`
- `hsrTabs`
- `setBodyMode()`
- `showMainView()`
- `showHsrTab()`
- `clearButtons()`

New file:

- `js/app/nav.js`

Implementation boundary:

- `window.ESUR.app.nav.init(state)` closes over the same existing `state` object.
- The existing document click / `requestAnimationFrame(setBodyMode)` listener remains in `script.js` after the nav init destructure.
- `setSegment`, `resetAll`, `renderAll`, `defaultAcutePattern`, translations, HSR renderers and Practice Changes were not moved as part of R2E.

R2E production blobs:

- `js/app/nav.js`: `f25ee452dd65891ad4a581ea6c12fcb69a50637c`
- `index.html`: `93d22d701c899b079a2b4ce29ccbd5ce86e636f2`
- `script.js`: `ce51293940e83824d5b99ce5dca44d97bbdff36a`

R2E exact net code diff versus R2D status commit `b52a8fb7d176b0eb1a6fa8ab0df306f6e02ae646`:

- `index.html`: +1 / -0
- `js/app/nav.js`: +74 / -0
- `script.js`: +1 / -61

The CI verification commit is tree-identical to the R2E code commit. The official run loaded `js/app/nav.js` successfully and finished `82/82 passed`, `0 failed`, `0 skipped`, `2 workers`, `17.6 s`.

Medical content changed: **NO**.
Practice Changes medical content changed: **NO**.

## Next permitted action

Do **not** start R2F automatically.

Before further implementation:

- review the remaining monolith read-only;
- propose one coherent low-risk refactor package, generally around 40–150 mechanically moved lines where coupling permits;
- list exact functions/blocks, target files, DOM dependencies, referenced `state` fields, any `t()` key groups, callers/call sites and explicit out-of-scope boundaries;
- prefer mechanical movement over redesign, cleanup or generalization;
- do not bundle a renderer with routing/default helpers merely because they belong to the same tab;
- avoid top-level binding collisions across classic scripts;
- keep Medical wording, recommendation strength, doses, units, severity/routing/decision logic and unaudited Practice Changes content untouched;
- obtain independent package-scope review before implementation.

## Governance rules

- During refactor: no medical wording, recommendation-strength, units, routing, decision logic, or source meaning may change.
- Do not weaken, delete, bypass, or rewrite regression tests to make a refactor pass.
- Every structural package must pass the full Playwright suite and official PR CI before being marked VERIFIED.
- ChatGPT independently verifies remote blobs/diff/CI rather than relying only on implementation reports.
- Keep `changesLibrary` / Practice Changes medical content untouched until its separate audit.
- Do not full-replace the large `script.js` through the unreliable file-API path; use a safe Git/blob/patch/server-side method.
- PR `#12` stays Draft.
- Do not merge to `main` without explicit approval.
- Tests are regression guardrails, not proof of medical correctness.

## AI handoff rule

Before doing anything, read `PROJECT_STATE.md` and treat it as the authoritative project status.

If chat history, a local workspace, or an earlier report conflicts with this file, verify the current GitHub branch and CI before proceeding. Update this file only after a milestone has been independently verified.

# ESUR Project State

> Authoritative current project status for humans and AI assistants.
> Read this file before proposing or implementing further ESUR changes.

Last verified: 2026-09-02

## Verified code baseline

- Repository: `KnoxiCoke/Esur22`
- Main baseline: `cd671d69ffb6f99555ae99e0407a7b61827811e3`
- Refactor branch: `refactor/modularize-script`
- Verified code commit: `766e156e83d6418d85dcd55064f64b3809859519`
- CI verification commit (tree-identical): `8896887b20949b75c89858ae260405cebf96a6af`
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

## Plan snapshot

- Engineering: R2H VERIFIED. This is one verified extraction package, not “refactor complete” and not a Medical Freeze.
- Medical Freeze / v0.9.0: still open (known source exceptions remain; no Medical Affairs sign-off).
- Practice Changes 2018→2025 audit: still open.
- Regulatory Gate: scheduled in the master plan, **not performed**. No MDSW classification and no Rule-11 class estimate.
- R2I: not defined. No implementation before a separate read-only scope review and explicit GO.

## Regulatory status

No regulatory qualification has been made. Educational disclaimers, renaming outputs, or deployment location do **not** exclude MDSW. Intended purpose plus actual function decide that — Bayer RA/Legal, not this repo.

Do **not** pre-empt RA by removing adrenaline doses, tryptase interpretation, switch mapping, or HSR rule trees. Do not treat “educational use only” as a regulatory solution. Do not mix Regulatory claim/UX changes into Medical or refactor packages.

Planned sequence after a stable, regression-protected HSR baseline:

1. Regulatory Gate
2. Function matrix to Bayer RA/Legal
3. RA/Legal sets intended purpose and qualification
4. Only then any required claim/UX/function changes

Later docs (not created in this commit):

- `REGULATORY_FUNCTION_MATRIX.md` — columns: Module | Inputs | Processing | Output | Intended Use | RA-Qualification (last two stay blank until RA)
- `CLAIM_REGISTER.md`
- optional `REGULATORY_GATE.md`

Keep three questions separate:

- Medical: is the statement covered by the uploaded ESUR sources?
- Engineering: does the software do exactly the reviewed behaviour?
- Regulatory: may Bayer provide that function with that intended purpose?

## Regression protection

- Playwright tests: `82`
- Shared fixture fails on browser `pageerror` and `console.error`.
- Latest verified official PR CI run: `33631632945`
- CI verification head: `8896887b20949b75c89858ae260405cebf96a6af`
- Result: `82/82 passed`, `0 failed`, `0 skipped`, `2 workers`, `20.5 s`

The verified run loaded all current runtime files successfully:

- `js/content/i18n.js`
- `js/app/utils.js`
- `js/app/icons.js`
- `js/app/nav.js`
- `js/app/i18nApply.js`
- `js/hsr/acute.js`
- `js/hsr/nihr.js`
- `js/hsr/previous.js`
- `js/hsr/switch.js`
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

### R2F — VERIFIED

Code commit: `256ae0d6b7eebd9b0b3bc6e3517f3dc0a5dbac30`
CI verification commit (tree-identical): `cc146fe6ed69b2657869295fd71def25c8916bb5`
Official PR CI run: `33625550511`

Static i18n application was extracted as one coherent low-risk package:

- `t()`
- `applyStaticTranslations()`
- `fillSwitchPrinciples()` as a private helper inside the module

New file:

- `js/app/i18nApply.js`

Implementation boundary:

- `window.ESUR.app.i18nApply.init({ state, i18n, escapeHtml, changesSearchInput })` closes over the existing references.
- Only `t` and `applyStaticTranslations` are returned to `script.js`; `fillSwitchPrinciples` remains private.
- Initialization occurs after `changesSearchInput` is declared and before `levelLabel()` / other remaining `t()` consumers.
- The existing `(ng/mL)` placeholder literal was preserved unchanged.
- `js/content/i18n.js` remained unchanged.
- No Medical renderer, severity/routing logic, Tryptase calculation, Practice Changes content, `renderAll`, `resetAll`, `setSegment` or `defaultAcutePattern` moved in R2F.

R2F runtime load order at that milestone:

1. `js/content/i18n.js`
2. `js/app/utils.js`
3. `js/app/icons.js`
4. `js/app/nav.js`
5. `js/app/i18nApply.js`
6. `js/hsr/acute.js`
7. `js/hsr/nihr.js`
8. `script.js`

R2F production blobs:

- `js/app/i18nApply.js`: `f8ea96afb22c55ed7c083383f4013890ae8af020`
- `index.html`: `ff1c6e276bb9bb9dfcfa80a03370d757e74649a0`
- `script.js`: `1bf0afedd0bf7f830f53e683001be21845f2a20d`
- `js/content/i18n.js`: unchanged (`e5f4543ae41eb2e55c4a7b98a3b63db522c389be`)

R2F exact net code diff versus R2E status commit `549507ca69899bf2b62a8f62546670ad73009b38`:

- `index.html`: +1 / -0
- `js/app/i18nApply.js`: +106 / -0
- `script.js`: +6 / -94

The CI verification commit is tree-identical to the R2F code commit. The official run loaded `js/app/i18nApply.js` successfully and finished `82/82 passed`, `0 failed`, `0 skipped`, `2 workers`, `19.5 s`.

Medical content changed: **NO**.
Practice Changes medical content changed: **NO**.

### R2G — VERIFIED

Code commit: `33da3635ab701ed218d548a3b7400670b0debfd0`
CI verification commit (tree-identical): `09511a04a3f39686d1da32132acff1764d306d7f`
Official PR CI run: `33628922510`

Only the Previous-Reaction flow renderer was mechanically extracted:

- `renderFlow()`

New file:

- `js/hsr/previous.js`

Implementation boundary:

- `window.ESUR.hsr.previous.init({ state, t, escapeHtml, flowOutput, flowSafety })` closes over the same existing references.
- `renderFlow()` reads only `state.situation` and `state.reaction`; it does not write state.
- The lookups `t("flow_titles")[key]`, `t("flow_bullets")[key]` and `t("flow_safety")` were preserved without a fallback.
- The existing `renderFlow();` call inside `renderAll()` remained unchanged.
- `setSegment`, `defaultAcutePattern`, Acute, Switch, Tryptase, NIHR, reset/orchestration, listeners, i18n content and Practice Changes were not moved or changed in R2G.

R2G runtime load order at that milestone:

1. `js/content/i18n.js`
2. `js/app/utils.js`
3. `js/app/icons.js`
4. `js/app/nav.js`
5. `js/app/i18nApply.js`
6. `js/hsr/acute.js`
7. `js/hsr/nihr.js`
8. `js/hsr/previous.js`
9. `script.js`

R2G production blobs:

- `js/hsr/previous.js`: `53487ae796e84f0b7c65ba66a63b8729268d3d7c`
- `index.html`: `e5cc1e1e553b4c63b6f43e3e3726c101fa4e4503`
- `script.js`: `0fe821c4639be492bb673cd59b18a1b38e91e6a1`
- `js/content/i18n.js`: unchanged (`e5f4543ae41eb2e55c4a7b98a3b63db522c389be`)

R2G exact net code diff versus regulatory docs baseline `ef66d8bb9c0102566e7687451d6ce37f537fa79f`:

- `index.html`: +1 / -0
- `js/hsr/previous.js`: +23 / -0
- `script.js`: +7 / -14

The CI verification commit is tree-identical to the R2G code commit. The official run loaded `js/hsr/previous.js` successfully and finished `82/82 passed`, `0 failed`, `0 skipped`, `2 workers`, `19.8 s`.

Medical content changed: **NO**.
Practice Changes medical content changed: **NO**.

### R2H — VERIFIED

Code commit: `766e156e83d6418d85dcd55064f64b3809859519`
CI verification commit (tree-identical): `8896887b20949b75c89858ae260405cebf96a6af`
Official PR CI run: `33631632945`

Only the Switch renderer was mechanically extracted:

- `renderSwitch()`

New file:

- `js/hsr/switch.js`

Implementation boundary:

- `window.ESUR.hsr.switch.init({ state, t, escapeHtml, switchOutput, icmCard, gbcaCard })` closes over the same existing references.
- `renderSwitch()` reads `state.cmtype`, `state.icm` and `state.gbca`; it does not write state.
- The lookups `switch_placeholder_icm`, `switch_placeholder_gbca`, `icm_rules` and `gbca_rules` were preserved without content changes.
- The three existing host calls remain: `renderAll()`, the ICM group listener and the GBCA group listener.
- Existing `setSegment("cmtype")` card-visibility writes were deliberately left unchanged; no cleanup or deduplication was performed.
- `fillSwitchPrinciples()` remains private in `js/app/i18nApply.js`.
- Listeners, brands, i18n values, Medical content, Practice Changes and unrelated renderers were not moved or changed in R2H.

Current runtime load order:

1. `js/content/i18n.js`
2. `js/app/utils.js`
3. `js/app/icons.js`
4. `js/app/nav.js`
5. `js/app/i18nApply.js`
6. `js/hsr/acute.js`
7. `js/hsr/nihr.js`
8. `js/hsr/previous.js`
9. `js/hsr/switch.js`
10. `script.js`

R2H production blobs:

- `js/hsr/switch.js`: `2e7a98f19f40d3f6d563217defde9daba177c93f`
- `index.html`: `67f58775723b8dfcc2288faa6eef4e8b2399d344`
- `script.js`: `6c16f61d76afda63a6067b26a1a2d93870305f80`
- `js/content/i18n.js`: unchanged (`e5f4543ae41eb2e55c4a7b98a3b63db522c389be`)

R2H exact net code diff versus R2G docs baseline `816bd9e98b06233d00580cdfa78fea6245ae61d8`:

- `index.html`: +1 / -0
- `js/hsr/switch.js`: +45 / -0
- `script.js`: +8 / -36

The CI verification commit is tree-identical to the R2H code commit. The official run loaded `js/hsr/switch.js` successfully and finished `82/82 passed`, `0 failed`, `0 skipped`, `2 workers`, `20.5 s`.

Medical content changed: **NO**.
Practice Changes medical content changed: **NO**.

## Next permitted action

Do **not** start R2I automatically.

The accepted post-R2F risk map uses two separate axes: Medical sensitivity and mechanical extraction risk. Medical sensitivity alone does not freeze a renderer, but all Medical content and behaviour remain frozen during refactor.

For the next package:

- prepare a read-only exact scope proposal before implementation;
- next evaluate the Tryptase area, explicitly comparing `renderTryptase()` alone versus a coherent `renderTryptase() + calcTryptase()` extraction; do not bundle them automatically;
- preserve all wording, keys, values, units, formula, threshold, recommendation strength and decision behaviour;
- do not bundle `setSegment`, `renderAll`, `resetAll`, `defaultAcutePattern` or unrelated renderers merely to increase package size;
- keep Practice Changes / `changesLibrary` frozen until its separate medical/source audit;
- obtain independent GO / MODIFY / STOP review before implementation.

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
- Regulatory work must not alter Medical content or refactor scope before a Bayer RA/Legal vote. No MDSW class is recorded in this file.

## AI handoff rule

Before doing anything, read `PROJECT_STATE.md` and treat it as the authoritative project status.

If chat history, a local workspace, or an earlier report conflicts with this file, verify the current GitHub branch and CI before proceeding. Update this file only after a milestone has been independently verified.
# ESUR Project State

> Authoritative current project status for humans and AI assistants.
> Read this file before proposing or implementing further ESUR changes.

Last verified: 2026-09-02

## Verified code baseline

- Repository: `KnoxiCoke/Esur22`
- Main baseline: `cd671d69ffb6f99555ae99e0407a7b61827811e3`
- Refactor branch: `refactor/modularize-script`
- Verified code commit: `5ecbf18dc47605701bd97e4a6df53b3a7109e1c0`
- CI verification commit (tree-identical): `31d4474f3f22084db37aae040af38c9a20ace533`
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

- Engineering: R2L VERIFIED. This is one verified extraction package, not “refactor complete” and not a Medical Freeze.
- Medical Freeze / v0.9.0: still open (known source exceptions remain; no Medical Affairs sign-off).
- Practice Changes 2018→2025 audit: still open.
- Regulatory Gate: scheduled in the master plan, **not performed**. No MDSW classification and no Rule-11 class estimate.
- R2K: VERIFIED.
- R2L: VERIFIED.
- R2M: not defined. No implementation before a separate read-only scope review and explicit ChatGPT technical GO.

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

- Playwright tests: `86`
- Shared fixture fails on browser `pageerror` and `console.error`.
- Latest verified official PR CI run: `33681177366`
- CI verification head: `31d4474f3f22084db37aae040af38c9a20ace533`
- Result: `86/86 passed`, `0 failed`, `0 skipped`, `2 workers`, `18.5 s`

The verified run loaded all current runtime files successfully:

- `js/content/i18n.js`
- `js/app/utils.js`
- `js/app/icons.js`
- `js/app/nav.js`
- `js/app/i18nApply.js`
- `js/app/disclaimer.js`
- `js/hsr/acute.js`
- `js/hsr/nihr.js`
- `js/hsr/previous.js`
- `js/hsr/switch.js`
- `js/hsr/tryptase.js`
- `script.js`

## Refactor status

### R1 — VERIFIED

Commit: `0c9b967a1fa84f716a754831649a4fdda7259f72`

- Existing i18n content mechanically extracted from `script.js` to `js/content/i18n.js`.
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

R2H runtime load order at that milestone:

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

### R2I — VERIFIED

Code commit: `2bede43edd6ae6490743fb40f5b43f0781036a62`
CI verification commit (tree-identical): `b6d4ec568bb7e7dec7408e1b6b95a330d41d7a98`
Official PR CI run: `33636536231`

The Tryptase display renderer and calculator were mechanically extracted together as one coherent package:

- `renderTryptase()`
- `calcTryptase()`

New file:

- `js/hsr/tryptase.js`

Implementation boundary:

- `window.ESUR.hsr.tryptase.init({ t, escapeHtml, fmt, tryptaseOutput })` closes over the same existing references.
- `renderTryptase()` still uses `tryptaseOutput.dataset.ready` exactly as before.
- `calcTryptase()` still obtains `baseline` and `acute` with `document.getElementById(...)` inside the function body.
- Blank input remains invalid; explicit numeric zero remains valid.
- The formula remains exactly `(1.2 * baseline) + 2` and significance remains `acute >= threshold`.
- The literal ` ng/mL`, all existing `t()` keys, formatting calls and output structure were preserved.
- Existing invalid branches still return without deleting/resetting `dataset.ready`; no readiness cleanup was introduced.
- `renderAll()`, `refreshComputedModulesAfterLanguageChange()`, `resetAll()` including `delete tryptaseOutput.dataset.ready`, the calculator button listener and language listeners remain in `script.js`.
- No Medical content, i18n values, tests, Practice Changes or unrelated HSR logic moved or changed in R2I.

R2I runtime load order at that milestone:

1. `js/content/i18n.js`
2. `js/app/utils.js`
3. `js/app/icons.js`
4. `js/app/nav.js`
5. `js/app/i18nApply.js`
6. `js/hsr/acute.js`
7. `js/hsr/nihr.js`
8. `js/hsr/previous.js`
9. `js/hsr/switch.js`
10. `js/hsr/tryptase.js`
11. `script.js`

R2I production blobs:

- `js/hsr/tryptase.js`: `d1bf579eb71ca5fbef07a6365b2a0af508ec51b0`
- `index.html`: `e76d5dba8968de92d273f0e0cfb866448b6b67bc`
- `script.js`: `b1537046d1d023e245d0e0c2083954e2d4d9b1e0`
- `js/content/i18n.js`: unchanged (`e5f4543ae41eb2e55c4a7b98a3b63db522c389be`)

R2I exact net code diff versus standing-authorization docs baseline `b3a017aeb371ea358a2d0a3db9ca62ac37ee7052`:

- `index.html`: +1 / -0
- `js/hsr/tryptase.js`: +52 / -0
- `script.js`: +6 / -43

The CI verification commit is tree-identical to the R2I code commit. The official run loaded `js/hsr/tryptase.js` successfully and finished `82/82 passed`, `0 failed`, `0 skipped`, `2 workers`, `18.5 s`.

Medical content changed: **NO**.
Practice Changes medical content changed: **NO**.

### R2J — VERIFIED

Code commit: `beb299cdb9884b1542406e6ed3fa4e5c5cfc9fc4`
CI verification commit (tree-identical): `c5aba6d599746dfc56f6b712f110b70a3dfa24b6`
Official PR CI run: `33639546466`

The NIHR renderer was mechanically extracted into the existing NIHR module:

- `renderNihr()`

Existing file expanded:

- `js/hsr/nihr.js`

Implementation boundary:

- `window.ESUR.hsr.nihr.init({ state, t, escapeHtml, nihrOutput })` now owns the existing private `renderNihrList()` and the extracted `renderNihr()`.
- `renderNihrList()` preserves its existing body and is now private to the NIHR module.
- `renderNihr()` still reads `.nihr-check` directly and reads only `state.nihrSeverity`, `state.nihrCulpritKnown` and `state.nihrCmtype`; it does not write state.
- The existing mild, moderate, severe-with-danger-sign SCAR and scope-guard branch ordering and return points were preserved.
- The conditional `nihr_choose_different` action and GBCA / unknown / ICM class-rule selection were preserved.
- `renderAll()`, `refreshComputedModulesAfterLanguageChange()`, `resetAll()`, `.nihr-check` listeners and `setSegment()` remain in `script.js`.
- `index.html` and runtime load order were unchanged.
- No Medical content, i18n values, tests, Practice Changes or unrelated HSR logic moved or changed in R2J.

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
10. `js/hsr/tryptase.js`
11. `script.js`

R2J production blobs:

- `js/hsr/nihr.js`: `e526e30054276a468d6de57ed24444f07bab0e71`
- `script.js`: `878cd4e5d9b58e2b9227e80d02638fe1240e1a7b`
- `index.html`: unchanged (`e76d5dba8968de92d273f0e0cfb866448b6b67bc`)
- `js/content/i18n.js`: unchanged (`e5f4543ae41eb2e55c4a7b98a3b63db522c389be`)

R2J exact net code diff versus R2I docs baseline `d8894ddd710bf5a749d063257630c8daa0cbfd86`:

- `js/hsr/nihr.js`: +95 / -9
- `script.js`: +6 / -88
- `index.html`: unchanged

The CI verification commit is tree-identical to the R2J code commit. The official run loaded `js/hsr/nihr.js` successfully, exercised the NIHR mild/moderate/SCAR/scope-guard/class-specific paths, and finished `82/82 passed`, `0 failed`, `0 skipped`, `2 workers`, `19.9 s`.

Medical content changed: **NO**.
Practice Changes medical content changed: **NO**.


### R2K — VERIFIED

Code commit: `4647917fb6bf2d1a0b8aae6f8a8a71dcf56b759f`
Parent: `f861338a49f42dc2f17efa5b8917807f2343ceca`
CI verification commit (tree-identical): `1bde6259a1161640b3e24c9aa56c0c70fc0d1950`
Official PR CI run: `33643757974`

The Acute management renderer was mechanically extracted into the existing Acute module:

- `renderAcuteManagement()`

Existing file expanded:

- `js/hsr/acute.js`

Implementation boundary:

- `window.ESUR.hsr.acute.init({ state, t, escapeHtml, defaultAcutePattern, acuteImmediateOutput, acuteOutput })` returns `{ renderAcuteManagement }`.
- `renderAcuteList()` preserves its existing body and is now private to the Acute module.
- `defaultAcutePattern()` and `setSegment()` remain in `script.js`. `defaultAcutePattern` is injected as a function dependency.
- Existing Acute logic, translation keys, markup, Immediate-block indentation, fallback write to `state.acutePattern`, pattern/severity button `hidden`/`active` behaviour, `|| []` fallbacks, dose display and pattern-state behaviour were preserved.
- `renderAll()`, `resetAll()`, language listeners and generic segment listeners remain in `script.js`.
- `index.html` and runtime load order were unchanged.
- No Medical content, i18n values, tests, Practice Changes or unrelated HSR logic moved or changed in R2K.

Historical note: the final `js/hsr/acute.js` blob was already present on the direct parent `f861338a49f42dc2f17efa5b8917807f2343ceca`. The code commit `4647917fb6bf2d1a0b8aae6f8a8a71dcf56b759f` wired the renderer in `script.js` and removed the temporary helper workflow. Document R2K from the net diff versus `e668c5b9…` and the final tree, not as if the entire `acute.js` rewrite lived only inside `4647917…`.

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
10. `js/hsr/tryptase.js`
11. `script.js`

R2K production blobs:

- `js/hsr/acute.js`: `816cf5e433f820ce0a96cac3e663aba90dfb1422`
- `script.js`: `2d5121de4405d8efe820007287a796d925bddd6c`
- `index.html`: unchanged (`e76d5dba8968de92d273f0e0cfb866448b6b67bc`)
- `js/content/i18n.js`: unchanged (`e5f4543ae41eb2e55c4a7b98a3b63db522c389be`)

R2K exact net code diff versus hybrid-workflow docs baseline `e668c5b95b3f6df602c031ddbea1f77aa3fd4754`:

- `js/hsr/acute.js`: +78 / -5
- `script.js`: +8 / -67
- `index.html`: unchanged

No other production files changed in that net code diff. The temporary `.github/workflows/r2k-wire.yml` is not present in the final tree.

The CI verification commit is tree-identical to the R2K code commit. The official run loaded `js/hsr/acute.js` successfully (HTTP 200), exercised the Acute immediate/pattern/dose/unit scenarios, and finished `82/82 passed`, `0 failed`, `0 skipped`, `2 workers`, `19.8 s`.

Medical content changed: **NO**.
Practice Changes medical content changed: **NO**.


### R2L — VERIFIED

Code commit: `5ecbf18dc47605701bd97e4a6df53b3a7109e1c0`
Parent: `c8590597892765df1ea15c44c32efc863a4bda8d`
CI verification commit (tree-identical): `31d4474f3f22084db37aae040af38c9a20ace533`
Official PR CI run: `33681177366`

The sticky disclaimer interaction was mechanically extracted from `script.js` into a dedicated app-chrome module:

- `js/app/disclaimer.js`

Implementation boundary:

- `window.ESUR.app.disclaimer.init()` owns only the existing `#stickyDisclaimer` interaction.
- Existing `role="button"`, `tabindex="0"`, initial `aria-expanded="false"`, `is-open` toggling, click behaviour, Enter behaviour, Space behaviour and `preventDefault()` semantics were preserved.
- The host call remains inside the existing `DOMContentLoaded` flow, after `resetAll()` is defined and before the Main-nav listeners.
- Disclaimer wording, markup, i18n keys/values and CSS were unchanged.
- `defaultAcutePattern`, `setSegment`, `renderAll`, `resetAll`, `refreshComputedModulesAfterLanguageChange`, `changesLibrary`, Practice Changes content and all HSR modules were unchanged.

R2L runtime load order:

1. `js/content/i18n.js`
2. `js/app/utils.js`
3. `js/app/icons.js`
4. `js/app/nav.js`
5. `js/app/i18nApply.js`
6. `js/app/disclaimer.js`
7. `js/hsr/acute.js`
8. `js/hsr/nihr.js`
9. `js/hsr/previous.js`
10. `js/hsr/switch.js`
11. `js/hsr/tryptase.js`
12. `script.js`

R2L production/test blobs:

- `index.html`: `24c222ef988c07fb9d7cd10db1817802331624e7`
- `js/app/disclaimer.js`: `b27e92b4cb6c3713198967696a48d74f2ad73b88`
- `script.js`: `252f88fff95c482b84c43de24ef0026f803f1847`
- `tests/disclaimer.spec.js`: `4c2bb39a33d01d75d32068a523f13bec6adc2127`

R2L exact code diff versus `c8590597892765df1ea15c44c32efc863a4bda8d`:

- `index.html`: +1 / -0
- `js/app/disclaimer.js`: +28 / -0
- `script.js`: +1 / -21
- `tests/disclaimer.spec.js`: +52 / -0

The four new characterization tests protect initial accessibility attributes plus click, Enter and Space toggling. The official run loaded `js/app/disclaimer.js` successfully (HTTP 200) and finished `86/86 passed`, `0 failed`, `0 skipped`, `2 workers`, `18.5 s`.

The original Grok-local R2L commit `46802374a70b13c8d08f938d89048a4f58abeb6d` was lost with its sandbox before it could be pushed. The preserved artifact ZIP was independently verified against all four expected blob SHAs. The authoritative remote R2L code commit is therefore `5ecbf18dc47605701bd97e4a6df53b3a7109e1c0`; it has the verified target tree/content even though its commit SHA differs from the lost local commit.

Medical content changed: **NO**.
Practice Changes medical content changed: **NO**.

### R2M — VERIFIED

Authoritative remote code commit: `fe26cc94687f940ab0725b71b1087fb0aef4bdf1`
Parent: `e952ad58b7178a7af0c68bcd40628243cdef8964`
CI verification commit (tree-identical): `c7105e2fd11b1c27f591ed051e5b69317422514b`
Official PR CI run: `33685124875`

The two existing Practice Changes label helpers were mechanically extracted from `script.js` into:

- `js/app/changeLabels.js`

Implementation boundary:

- `window.ESUR.app.changeLabels.init({ t })` returns the existing `levelLabel` and `modeLabel` helpers.
- `levelLabel`: `high` → `badge_practice_changing`, `medium` → `badge_refined`, all other values → `badge_structural`.
- `modeLabel`: `action` → `changes_action_mode_badge`, all other values → `changes_compare_mode_badge`.
- Existing i18n keys and values were unchanged, including the existing German `changes_action_mode_badge: "Action mode"` value.
- `changesLibrary`, all Practice Changes renderers/content, HSR modules, state routing and global orchestration were unchanged.

R2M runtime load order:

1. `js/content/i18n.js`
2. `js/app/utils.js`
3. `js/app/icons.js`
4. `js/app/nav.js`
5. `js/app/i18nApply.js`
6. `js/app/disclaimer.js`
7. `js/app/changeLabels.js`
8. `js/hsr/acute.js`
9. `js/hsr/nihr.js`
10. `js/hsr/previous.js`
11. `js/hsr/switch.js`
12. `js/hsr/tryptase.js`
13. `script.js`

R2M production/test blobs:

- `index.html`: `aff4953149dbb6b53d930bfb0ebf13b44d75b7a1`
- `js/app/changeLabels.js`: `860705e5bf17e0e2dfbb18b94ff1ccb61bea0993`
- `script.js`: `c4383ea790ba11ec0e74c3a721acfbd008c59ff8`
- `tests/change-labels.spec.js`: `570120bb91f67ea782b81f878fa8ae7a0bc52f8e`

R2M exact code diff versus `e952ad58b7178a7af0c68bcd40628243cdef8964`:

- `index.html`: +1 / -0
- `js/app/changeLabels.js`: +23 / -0
- `script.js`: +1 / -9
- `tests/change-labels.spec.js`: +80 / -0

The four new characterization tests protect EN/DE level-label mapping and Compare/Action-mode labels without freezing Practice Changes topic inventory, card IDs, card order or medical claims. The local handoff reported `4/4` characterization tests green against the untouched baseline before extraction and `90/90` local full-suite tests after extraction. Official PR CI run `33685124875` completed successfully on the tree-identical verification commit; the accessible Actions metadata confirms the full HSR Playwright job and regression-test step succeeded. The total 90-test inventory is derived from the unchanged verified 86-test baseline plus the four new characterization tests.

The Grok-local implementation commit `b6b141e81f073a9e52a494f16bf541ee0e59a1ad` is handoff metadata only and was not pushed. The authoritative milestone is the independently verified remote tree above. The temporary R2M wire branch/workflow was removed and is not present in the refactor branch tree.

Medical content changed: **NO**.
Practice Changes medical content changed: **NO**.
`changesLibrary` changed: **NO**.
i18n values changed: **NO**.
HSR behaviour changed: **NO**.

## Next permitted action

Do **not** start R2N automatically.

The next permitted engineering step is only a **read-only** dependency/scope review for a possible R2N package. ChatGPT independently reviews that scope. R2N may be implemented only after an explicit ChatGPT technical `GO`.

The accepted risk map uses two separate axes: Medical sensitivity and mechanical extraction risk. Medical sensitivity alone does not freeze a renderer, but all Medical content and behaviour remain frozen during refactor.

For any later package:

- prepare a read-only exact scope proposal before implementation;
- do not bundle `defaultAcutePattern`, `setSegment`, `renderAll`, `resetAll` or unrelated renderers merely to increase package size;
- preserve all wording, keys, values, doses, units, severity/pattern routing, recommendation strength and decision behaviour;
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


## Remote handoff / single-writer rule

GitHub is the authoritative source of truth. Local sandboxes, `/tmp` clones and unpushed commit SHAs are temporary implementation state, not project milestones.

For the current multi-agent setup, use exactly one remote writer per package:

- **Grok implements and tests locally. ChatGPT is the current Remote Writer and independent remote verifier.**
- Grok must not promise or report a remote HEAD, pushed commit, official CI result or completed remote milestone unless its environment actually has working GitHub authentication and has verified that remote state.
- After a green local implementation, Grok must preserve the handoff outside ephemeral `/tmp`: provide the exact baseline/parent, local commit SHA if one exists, changed-file list, target blob SHAs and a persistent artifact/ZIP containing the final files or patch material needed for recovery.
- A local commit that has not reached GitHub is not a completed milestone. If its sandbox disappears, recover from the preserved artifact and target blob SHAs; do not treat the lost local SHA as authoritative.
- ChatGPT may publish the verified artifact/patch to the remote branch only through a safe Git/Git-Data/server-side path that preserves the approved bytes and boundaries. If that cannot be done safely, return `STOP`; do not improvise a large-file full replacement.
- Do **not** use the GitHub Contents/File API to full-replace large existing files such as `script.js` or `PROJECT_STATE.md`. Small new temporary helper files may be created only when necessary for a controlled server-side wire and must not remain in the final refactor tree.
- Code package order is strict: local implementation/tests → remote write → ChatGPT remote diff/blob verification → official full CI → `VERIFIED PASS` → separate docs-only `PROJECT_STATE.md` update.
- Do not combine an unverified code package and its milestone documentation into the same completion step.
- Temporary helper branches/workflows used for recovery or wiring must be removed after successful use and must not remain in the final refactor branch tree.
- The authoritative commit for a milestone is the verified **remote** commit/tree recorded here, even if a lost local implementation commit had a different SHA but identical verified content.

## Standing technical refactor authorization

The user has granted standing authorization for the ongoing purely technical, behaviour-preserving refactor on Draft PR `#12`.

- A separate one-word user `GO` is **not required** for each technical refactor package.
- ChatGPT acts as the independent technical reviewer/orchestrator and may issue `GO`, `MODIFY` or `STOP` after a read-only scope review.
- ChatGPT `GO` authorizes Grok to implement exactly the approved technical scope without waiting for another user message.
- If ChatGPT returns `MODIFY` or `STOP`, Grok must not implement until the issue is resolved and a new technical `GO` is issued.
- After implementation, Grok must stop and report the exact local handoff: baseline/parent, local commit SHA if available, changed-file list, target blob SHAs, persistent artifact/ZIP, targeted-test result and local full-suite result. ChatGPT, as current Remote Writer, publishes through the safe remote path and then independently verifies the GitHub diff/blobs and official CI.
- After ChatGPT marks a package `VERIFIED PASS`, a docs-only `PROJECT_STATE.md` milestone update is authorized without another user `GO`.
- This standing authorization is for the agreed incremental refactor only; it is not authorization to expand scope autonomously or chain multiple unreviewed packages.

Standing authorization does **not** cover:

- Medical wording, source meaning, recommendation strength, doses, units, thresholds or Medical decision/routing changes;
- source interpretation or source-conflict resolution;
- weakening, deleting or changing regression tests to make an implementation pass;
- Regulatory, Intended Purpose or claim decisions;
- major architecture changes outside the agreed incremental refactor;
- merging PR `#12` to `main`;
- release or deployment decisions.

Those require explicit user approval.

## Hybrid refactor workflow

The refactor uses a risk-adaptive hybrid workflow to reduce coordination overhead without removing the independent post-implementation verification.

### Default fast path

Use this for clearly bounded, mechanically straightforward packages with low or manageable coupling:

**ChatGPT scope from the live remote → Grok local implementation/tests + persistent artifact handoff → ChatGPT remote write + independent verification → full regression CI**

- ChatGPT inspects the current remote code, defines the exact package, dependencies, invariants and out-of-scope boundary, and provides the ready-to-copy implementation prompt directly.
- Grok implements exactly that approved package, runs the required local tests, preserves the final handoff artifact outside ephemeral `/tmp`, reports the target blob SHAs and stops.
- ChatGPT is the current Remote Writer: it publishes the approved handoff through the safe remote path, then independently verifies the actual GitHub diff/blobs and official CI rather than relying on Grok's report.
- The full Playwright suite remains required for every structural package before `VERIFIED PASS`.
- No separate user `GO` is required for these routine technical packages under the standing authorization.

### Expanded-scope path

Use this when a package is unusually coupled, stateful, cross-cutting, ambiguous, or otherwise materially riskier to scope correctly. Examples include `defaultAcutePattern`, `setSegment`, `renderAll`, `resetAll`, or similarly coupled orchestration/state logic.

**Grok read-only scope → ChatGPT independent scope review (`GO / MODIFY / STOP`) → Grok local implementation/tests + persistent artifact handoff → ChatGPT remote write + independent verification → full regression CI**

- The extra Grok scope pass is deliberate redundancy before implementation.
- ChatGPT independently checks the proposed boundary against the live remote before issuing technical `GO`.
- Medical sensitivity alone does not automatically require this longer path; the decision is based on the concrete combination of coupling, state mutation, routing/orchestration reach, boundary ambiguity and extraction risk.
- ChatGPT may escalate any package from the fast path to the expanded-scope path whenever independent pre-build redundancy is warranted.

### Package discipline

- Default principle: **fast by default, extra scope redundancy only when the concrete risk justifies it**.
- One coherent package at a time. Do not chain multiple unreviewed packages.
- A package is not complete until the implementation is on GitHub, ChatGPT has independently verified the remote implementation, and the full official CI is green.
- After `VERIFIED PASS`, the routine docs-only `PROJECT_STATE.md` milestone update remains authorized without another user `GO`.
- This hybrid workflow does not relax any Medical, Regulatory, test, merge or release exclusions listed above.

ChatGPT decides which path applies to each technical package and must state that choice explicitly in the next-step handoff.

## AI handoff rule

Before doing anything, read `PROJECT_STATE.md` and treat it as the authoritative project status.

If chat history, a local workspace, an artifact handoff, or an earlier report conflicts with this file, verify the current GitHub branch and CI before proceeding. GitHub remote state is authoritative. Update this file only after a milestone has been independently verified.

Every reviewer/orchestrator response in this refactor workflow must also end with the **exact next permitted step**. When another model needs to act, provide a ready-to-copy prompt instead of making the user ask what to do next.

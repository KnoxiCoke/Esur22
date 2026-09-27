# ESUR Project State

> **SINGLE AUTHORITATIVE PROJECT STATE**
> Canonical location: `KnoxiCoke/Esur22` → `main` → `PROJECT_STATE.md`.
> Branch copies, chat history, memories, local worktrees and handoff artifacts are secondary and must not override this file without live GitHub verification.

## HARD START RULE — mandatory for every ESUR task

Before **any** ESUR work — analysis, source review, Medical review, Regulatory work, design, coding, GitHub writes, testing, prompt handoff or implementation — every agent (ChatGPT, Work, Grok, Codex or another tool/agent) must:

1. Read the current `PROJECT_STATE.md` from `Esur22/main`.
2. Verify the live GitHub state of every affected branch / PR / commit before relying on recorded SHAs.
3. If live GitHub conflicts with this file, **STOP implementation**, report the conflict, reconcile the state, and update this file first.
4. Respect all scope, Medical, Regulatory, test, merge and release boundaries recorded here.
5. After every verified milestone that changes project state — e.g. merge, new/updated PR, Medical decision, RA decision, verified CI result, new preview integration state, accepted design milestone, release/status change — update this file on `main`.
6. Do not treat a chat summary or memory as a substitute for reading this file.

GitHub remote state is authoritative for code and refs. This file is the authoritative human/AI project-status interpretation of that verified remote state.

Last remote verification: 2026-09-27

## Current verified baseline

- Repository: `KnoxiCoke/Esur22`
- Main state-consolidation parent verified before this documentation update: `ae4bb66aeefddbeda659e3c71a914c0cb7fa8ab5`. The current application/code baseline on `main` remains `1ebbe97b555673dd59c5c708532d39040291c303`, which includes merged card PRs `#14`–`#19` and provenance-only PR `#20`. Subsequent commits that only maintain `PROJECT_STATE.md` / `AGENTS.md` do not change that application/code baseline.
- Refactor branch: `refactor/modularize-script` (Draft PR `#12`, open, not merged). Current docs-only branch HEAD after marking its PROJECT_STATE copy non-authoritative: `155ccd40dbfef5bd062a704d4806bd3780f10ed8`. PR `#12` is behind the current application baseline after `#16`–`#20` and requires reconciliation plus renewed verification before any merge.
- Independently verified Medical integration code commit: `0cba0542fef7b590bcbf5fa588088728bc78dc1b`; verified code tree: `615ef4a303f614c80321862e487cd57aa2661e37`.
- At that code milestone, GitHub's virtual merge of `main` and PR `#12` was `77a8f135b6e3bd78ed26e236de27e70bdda2004f` with the same code tree. This is historical verification, not a current virtual merge reference.
- Code-milestone CI: run `35919339082`, successful, `94/94 passed`. Subsequent documentation-only commit `071830ce74e66fc277124169acdcc43b79a2aa41`: CI run `35921260615`, successful, `94/94 passed`.
- Historical ENG-09 reference branch HEAD: `dc9ea4d00d89d47660f8d7b2293a713cb8a98439`. Historical Waiting Times production-code milestone: `dc8cd213d9329bcf49313544bb6cc51972ee5ebf`.

## Live preview / design sandbox

- Repository: `KnoxiCoke/Esur2`.
- Role: browser-visible integration and design sandbox only; it is **not** the controlled source of truth.
- Current verified `Esur2/main`: `ce28de6219a8f40af0ffb455ee944112ac227360`.
- Commit `0053b2b0a0bc92ced7c3de5672d00bbc328eb57b` adds only a standalone `prototype.html` design-prototype page; the live application files were not changed by that commit.
- Product Owner accepted the Phase-1 V2 design direction. Phase 2 was implemented in the preview sandbox at `4d54d522930d8ecfdf6fad797cbcd248039ffc82` as a presentation-only `style.css` change. `index.html` and `script.js` remained byte-identical to the pre-Phase-2 preview state; therefore `changesLibrary`, Medical strings/logic, IDs and UI-01 neutral-entry behavior were not changed by this implementation. This preview milestone is not Human Medical Affairs, Regulatory, merge or release approval.
- GitHub Pages run `36338704007` for that exact commit completed successfully. The deploy job reported environment URL `https://knoxicoke.github.io/Esur2/`.
- Phase 2B unified the visual workspace pattern across all five HSR modules in `Esur2/main`: Previous reaction, Acute management, Switch, Tryptase and NIHR now use the same compact dark workspace hierarchy with left-side context/inputs and a dominant right-side result pane where applicable. Commits `59b28cb905e8bb2f582b8b31134299c8d5c6e754` and `101828bac267e9b9ba13726485e7337fa90c0eb3` changed only `style.css`; `index.html` remained at blob `55c59c834d8c9d487bcb3fc86c5293841d33d072` and `script.js` at blob `428c801581f6074b0293f8a30d3d03a4f0477946`. Therefore Medical strings, `changesLibrary`, Medical IDs, calculations and pathway logic were not changed by Phase 2B. GitHub Pages run `36339920349` for final Phase-2B HEAD `101828bac267e9b9ba13726485e7337fa90c0eb3` completed successfully.
- That preview combines the `Esur22` application baseline `1ebbe97b555673dd59c5c708532d39040291c303`, Draft PR `#21`, and Draft PR `#22`.
- `Esur2/main` may intentionally contain unmerged draft content so the Product Owner can inspect the whole product in one browser build.
- Visibility in `Esur2` is **not** evidence of Source QA, Internal Medical Lock, Human Medical Affairs approval, Regulatory approval, technical validation, merge approval, release, conformity, or Go Live.
- Design experiments and accepted visual-design work remain in `KnoxiCoke/Esur2/main`. Per Product Owner decision on 2026-09-27, the Phase-2 design must **not** be transferred back to `KnoxiCoke/Esur22`; no UI/design PR in `Esur22` is authorized. A future transfer would require a new explicit Product Owner authorization.
- Medical strings, medical logic, doses, thresholds, pathways, source mappings and formal approvals remain governed in `Esur22`.

## Pull requests

- `#12` — modularization; open Draft, not merged. R1–R2M and the recorded earlier integration milestones were technically verified historically. The branch is now behind the current application baseline and must be reconciled/reverified before any merge.
- `#14` — Extravasation; merged into `main` as `9bd716cc23dd4457c89f6be186a94e5e0418c8a5`.
- `#15` — Laboratory Interference; merged into `main` as `179d58b73a7798e06a1573211fd0ed594d7acdd2`.
- `#16` — `publication_structure`; merged into `main` as `6a53eb6590b7b9db3db728c8ed4aae9fecc7331d`.
- `#17` — `dialysis_refinement`; merged into `main` as `912d67e5d932f695197118f568b96c4770b23f2f`.
- `#18` — `new_clinical_scenarios`; merged into `main` as `ef74c4a8843b36316a0a181d37776369cb2d51bd`.
- `#19` — `other_reorganized_topics`; merged into `main` as `a6bf6a144f8e78c3395849d65c5681d843e58b83`.
- `#20` — source-locator provenance only; merged into `main` as `1ebbe97b555673dd59c5c708532d39040291c303`.
- `#21` — revised `hypersensitivity` and `ca_aki_terminology` EN/DE Practice Changes objects; open Draft at `b388923110abe828fea6de469e71a5dd7a255880`, not merged. Independent source QA: PASS. No new Internal Medical Lock and no Human Medical Affairs sign-off.
- `#22` — UI-01 neutral case entry; open Draft at `969af23b108e49d5794c1d65f95b862b9dfebf04`, not merged. F02 and F11 start without preselected case characteristics. Medical strings/rules are unchanged by the UI-01 implementation. The old NIHR regressions were updated to make the newly required case selections explicit rather than relying on historical defaults; `FORB_05` was strengthened so an empty output cannot pass vacuously. Official HSR Regression run `36337880603` succeeded: `75/75 passed`. PR `#22` is now **TECHNICALLY VERIFIED for UI-01**, but remains Draft and is not Medical/Regulatory approval or merge authorization.
- `#13` — separate Laboratory Interference Draft, open at `8996ee5eebb21996444e4a300f7514c1e7758701`. Its EN/DE card objects match the later merged content; check the remaining smoke-test dependency before disposition. Do not close or merge automatically.
- `#11` — earlier HSR Draft, open at `87655d75e6a75812cf643dbd3539b78e8ffb004a`. It contains distinct deferred HSR overlay content; inventory and decide its disposition separately. Do not merge automatically.
- `#4` — earlier HSR terminology PR, open at `125c5a909715cdfe6bd98e2ae5e3d6558ada86c3`. Its NIHR labels/brand mapping remain distinct; resolve that mapping before disposition. Do not close or merge automatically.

## Local worktree caution

Per Product Owner report, the original Windows worktree `C:\Users\stroj\Documents\GitHub\Esur22` most recently contained eight uncommitted changes of unresolved origin. Do not automatically discard, overwrite, stash or commit them. Check the current status again before any future work in that directory; this report does not establish its present state.

## Medical status

The five HSR modules have completed the current manual source/Q&A review pass in EN/DE:

- Previous reaction — reviewed
- Acute management — reviewed
- Switch — reviewed
- Tryptase — reviewed
- NIHR — reviewed

This does **not** mean final Medical Affairs approval or medical validation.

Review layers must remain distinct:

- **Source QA** checks whether EN/DE statements are supported by the authorized sources. A PASS is a source finding, not approval of the wording.
- **Internal Medical Lock** fixes exact reviewed wording for implementation under the project workflow. It is not Human Medical Affairs sign-off.
- **Human Medical Affairs** provides the human medical confirmation/correction of clinical correctness, applicability, limits and prerequisites. This sign-off is still pending.

### MED-01 Medical Review Pack

A compact Human Medical Affairs review pack now exists for the five patient-specific modules:

- F02 Previous reaction
- F05 Acute management
- F07 Switch
- F09 Tryptase Rule
- F11 NIHR Check

The original MED-01 pack used existing project source mappings without a new source audit. **Revision 2** (`MED-01-Medical-Review-Pack-v2-Esur22-1ebbe97.docx`) now incorporates the independently re-checked source-locator/review-question clarifications from the blind audit: F02 adds Part 2 Fig. 1 and explicitly asks Human Medical Affairs about known/unknown culprit gating; F05 adds Part 1 Fig. 2 and explicitly asks Human Medical Affairs to resolve the adult-population boundary; F09 remains source-separated without a manufactured conflict. Each module still asks Human Medical Affairs for `CONFIRM`, `CHANGE` or `NOT APPLICABLE` plus comments, followed by common Medical questions. PR `#21` is a separate Medical package and is not part of the MED-01 baseline.

#### Independent blind audit — Gemini, 2026-09-27

A read-only independent blind source audit was run against the MED-01 pack using only the authorized 2025 ESUR sources for the five modules. Gemini had no live GitHub access; ChatGPT subsequently re-verified the live Esur22 state and independently reconciled the reported findings against the authorized sources.

- Overall third-review result: **SOURCE-CONCORDANT WITH FINDINGS**; no item was identified as `NOT SUPPORTED BY THE AUTHORIZED ESUR SOURCES` or `CONTRADICTED BY SOURCE`.
- F02: source-locator coverage should include Part 2 Fig. 1 in addition to Table 2. The source text states that routine premedication is not recommended and that premedication is optional in emergency situations where an unidentified culprit CM led to a severe HR. The current F02 UI has no explicit culprit-known/unknown input; its severe-emergency output includes the source limitation in explanatory text and conditions alternative-CM wording on a known culprit. Whether an explicit culprit-known/unknown case gate is required remains **Human Medical Affairs review required** rather than an automatically authorized Medical/code change.
- F05: Part 1 / Table 3 is explicitly for immediate/acute hypersensitivity reactions **in adults**. MED-01 already records that age/weight are not captured and already asks Medical which patients/prerequisites are permitted; Human Medical Affairs should explicitly resolve the adult-use boundary. Add Part 1 Fig. 2 as a more precise reaction-pattern locator alongside Table 3.
- F07: no new hard source issue identified by the blind audit.
- F09: the blind report's proposed "source conflict" between `within 4 h`, `1–4 h`, `ideally 1–2 h`, and the detailed three-sample sequence was **not confirmed as a contradiction**. The authorized sources present different levels of detail that can coexist: Part 1 gives an acute-management "ideally 1–2 h" statement; Part 2 requires moderate/severe IHR measurement within 1–4 h and gives the detailed three-sample sequence; the booklet says within 4 h. MED-01 already keeps these source statements separate and asks Medical to define the prerequisites for using real values. No automatic harmonization is authorized.
- F11: no new hard source issue identified by the blind audit.
- Human Medical Affairs sign-off remains pending. This blind audit is source QA support only and does not create an Internal Medical Lock, Medical Affairs approval, Regulatory approval, merge authorization or Go Live status.

### Known medical/source clarifications

1. Part 1 literally contains a hypotension positioning rule involving prone positioning / raising the legs. It is intentionally not implemented in the UI and remains `MEDICAL CLARIFICATION REQUIRED`.
2. The published acute source states salbutamol nebulization `2.5–5 µg`. The UI currently preserves the published unit and the item remains flagged for medical verification.

### Practice Changes 2018 → 2025

- Remains in the application as an informational/work-aid tab.
- All nine prior card-level workflows were completed under their accepted processes through merged PRs `#14`–`#19`.
- Draft PR `#21` proposes revised wording for `hypersensitivity` and `ca_aki_terminology`. That revision has independent source-QA PASS only; it has no new Internal Medical Lock and no Human Medical Affairs sign-off.
- Human Medical Affairs sign-off remains outstanding for the overall Practice Changes content.

Card status:

- `hypersensitivity` — existing `main` wording completed/verified under the accepted prior workflow; revised EN/DE wording in Draft PR `#21`: source-QA PASS only.
- `ca_aki_terminology` — existing `main` wording completed/verified under the accepted prior workflow (`STANDARD_AUDIT`); revised EN/DE wording in Draft PR `#21`: source-QA PASS only.
- `waiting_times` — `BLIND_REQUIRED`; source-audited / Medical-Locked / technically verified at `dc8cd213d9329bcf49313544bb6cc51972ee5ebf`; Human Medical Affairs sign-off pending.
- `extravasation` — source-audited / Medical-Locked / independently challenged; merged via `#14`; Human Medical Affairs sign-off pending.
- `laboratory_interference` — source-audited / Medical-Locked / independently challenged; merged via `#15`; Human Medical Affairs sign-off pending.
- `publication_structure`, `dialysis_refinement`, `new_clinical_scenarios`, `other_reorganized_topics` — card workflows completed and merged through `#16`–`#19`; Human Medical Affairs sign-off pending.

The completed `waiting_times` workflow includes the Grok blind source pass, Work primary source audit, Grok challenge, ChatGPT exact EN/DE Medical Lock, Codex exact implementation, independent patch/scope verification, remote implementation verification and official GitHub CI verification.

The independently verified PR `#12` Medical integration code commit `0cba0542fef7b590bcbf5fa588088728bc78dc1b` copied both merged EN/DE Medical card objects from `main` without rewriting them. All 18 EN/DE Practice Changes objects were compared against the intended branch versions; the other three audited branch cards remained unchanged. The accompanying smoke-test change replaced a search token that the updated Laboratory Interference card no longer contains. These are content-integrity and software-test findings, not a new source audit or Medical Affairs approval.

### Practice Changes audit governance

- Audit classes are `BLIND_REQUIRED` and `STANDARD_AUDIT`; they are workflow classes and are **not** the Practice Changes UI `level`.
- Any audit trigger makes a card automatically `BLIND_REQUIRED`. Triggers include numbers/time windows/thresholds/doses; strong recommendation language such as `DO NOT`, `avoid`, `must` or equivalent; severity-specific pathways; elective/emergency splits; population-specific rules; switch/avoidance rules; source conflicts; EN↔DE meaning/strength differences; or 2018→2025 claims of clinical change.
- If classification is disputed or unclear, use `BLIND_REQUIRED`. `STANDARD_AUDIT` is allowed only when no trigger is present.
- For `BLIND_REQUIRED`, Grok performs a blind source pass before seeing the Work audit, then challenges the Work audit afterwards. Grok is reviewer only: it does not write the Medical Lock and does not implement.
- Work performs the structured primary source audit. ChatGPT independently reviews the sources and writes the exact EN/DE Medical Lock. Codex implements only that Lock.
- Final post-implementation verification is a yes/no check against the Lock, scope, tests and remote HEAD; it must not rewrite or “improve” Medical wording.
- Bruno is Product Owner: he decides work order, start/pause, product scope, authorized source set and when material is handed to Medical Affairs. He does not decide Medical claim correctness, recommendation strength, population applicability or audit-class disputes.
- Human Medical Affairs sign-off is required before claiming a Medical Freeze/final medical approval. The separately authorized card-only merges `#14`–`#19` occurred while that sign-off remained pending; those merges do not constitute Medical Affairs approval. PR `#20` changed source-locator provenance only. PRs `#21` and `#22` remain Draft.
- `hypersensitivity` and `ca_aki_terminology` are completed under the accepted prior workflow and are not to be rolled back solely because this governance was introduced later. `ca_aki_terminology` is `STANDARD_AUDIT`.
- Historical Practice Changes code HEAD before the earlier docs-only governance update: `fa9dd1ec814aec83b5ca9acd012b52b0fe453e62`.

### Future versioned content architecture

After the 2025 Medical content has completed its source audit and Content Freeze, introduce a separately scoped `VERSIONED_CONTENT_ARCHITECTURE`. Audited ESUR guideline releases should become immutable versioned content packages referenced through a single manifest `currentVersionId`; historical guidance must not be overwritten. Stable topic and claim identifiers plus audited change events should support both “current guidance” and “what changed since the previous ESUR version.” The initial 2018 package must remain limited to the content required by audited 2018→2025 change events and must not expand into a second full Version 10 medical audit. `medicalAffairsStatus` is traceability metadata only, not an application lock. This architecture is not authorized for implementation before the 2025 Content Freeze.

## Plan snapshot

- Engineering: R1–R2M modularization and the earlier Medical-card integration milestones on PR `#12` are historical VERIFIED milestones. PR `#12` is behind the current application baseline after `#16`–`#20` and requires reconciliation plus renewed verification before merge.
- Current `main` application baseline: `1ebbe97b555673dd59c5c708532d39040291c303`. Official HSR Regression run `36321577992`: successful, `74/74 passed`.
- Medical Freeze / `v0.9.0-medical-review`: still open. No Human Medical Affairs final sign-off.
- Practice Changes 2018→2025: nine prior card workflows completed; Draft PR `#21` revises two cards with source-QA PASS only.
- MED-01 Revision 2: **independent Gemini closure audit completed** with result `READY FOR HUMAN MEDICAL AFFAIRS REVIEW`; revised source locators were reported correct, F02 known/unknown culprit and F05 adult-population boundaries were correctly left as Human Medical Affairs questions, F09 was confirmed as compatible source detail rather than a source contradiction, and no hard failures were reported. Human Medical Affairs review/answers are still pending. This remains source-QA support, not Human Medical Affairs approval.
- Regulatory/intended-use preparation: RA-01 functional inventory, RA-02 intended-use decision sheet and RA-03 Product-Owner intended-use draft have been prepared. They do not constitute Regulatory qualification.
- Product-Owner intent currently recorded: voluntary professional work aid for radiology professionals; learning/lookup plus support in real clinical cases. F05 may also be used during an acute reaction. Clinical responsibility remains with the medical professional.
- Formal Bayer RA/Legal qualification/classification: **not performed**. No MDSW qualification or Rule-11 class conclusion is recorded.
- UI-01 / PR `#22`: neutral-start behaviour for F02/F11 is TECHNICALLY VERIFIED at head `969af23b108e49d5794c1d65f95b862b9dfebf04`; official run `36337880603` succeeded `75/75`. PR remains Draft and not merged.
- `Esur2`: current visual integration/design sandbox; it combines draft states for browser review and is not approval evidence.
- R2K: VERIFIED.
- R2L: VERIFIED.
- R2M: VERIFIED.
- R2N: NOT REQUIRED / NOT STARTED.
- No new refactor strand is authorized automatically.

## Regulatory status

No formal regulatory qualification has been made. No MDSW qualification or Rule-11 classification is recorded.

The project has moved beyond the earlier blank regulatory-gate stage in one limited sense: the Product Owner has documented intended-use decisions and the project now has preparatory RA artifacts:

- RA-01 — functional inventory of the current application;
- RA-02 — intended-use decision sheet;
- RA-03 — intended-use / intended-purpose draft based on Product-Owner decisions.

These documents are **inputs for Medical and Regulatory review**, not a Bayer RA/Legal decision.

Current Product-Owner intent is that the app may be used voluntarily by radiology professionals for learning/lookup and to support real clinical cases. That includes F02, F05, F07, F09 and F11 as described in RA-03; F05 may be used during an ongoing acute reaction. The responsible medical professional retains the clinical decision.

Do **not** infer regulatory status from disclaimers, naming, deployment location, `Esur2`, or the existence of RA-01/02/03. Intended purpose plus actual function must be assessed by Bayer RA/Legal.

Do **not** pre-empt RA by deleting adrenaline doses, tryptase interpretation, switch mapping or HSR rule trees solely to force a regulatory outcome.

The next formal regulatory step comes after Medical has clarified the clinical applicability/limits of the five modules: Bayer RA/Legal evaluates the consolidated intended purpose, software qualification and any applicable Rule-11 classification.

Keep three questions separate:

- Medical: is the statement covered by the uploaded ESUR sources?
- Engineering: does the software do exactly the reviewed behaviour?
- Regulatory: may Bayer provide that function with that intended purpose?

## Regression protection

- Tests are regression guardrails for technical behaviour, not proof of medical correctness.
- Historical PR `#12` regression inventory at its documented Medical-integration milestone: `94 tests`; run `35919339082` succeeded `94/94`.
- Current `main` application baseline `1ebbe97b555673dd59c5c708532d39040291c303`: HSR Regression run `36321577992` succeeded `74/74 passed`.
- Draft PR `#22` now has a 75-test UI-01 regression inventory. After adapting the existing NIHR tests to the deliberate neutral-entry workflow, official run `36337880603` succeeded `75/75 passed` at head `969af23b108e49d5794c1d65f95b862b9dfebf04`.
- The original PR `#22` regression failure was caused by existing NIHR tests that did not select all newly required neutral-start fields before expecting a pathway. That test adaptation is now complete; official run `36337880603` succeeded `75/75`, so UI-01 is technically VERIFIED while PR `#22` remains Draft and unmerged.
- Shared fixtures continue to treat browser `pageerror` / `console.error` as failures where applicable.
- `tests/waiting-times.spec.js` protects the exact EN/DE Compare and Action Waiting-Times Medical-Lock content on the refactor branch.

Current runtime files:

- `js/content/i18n.js`
- `js/app/utils.js`
- `js/app/icons.js`
- `js/app/nav.js`
- `js/app/i18nApply.js`
- `js/app/disclaimer.js`
- `js/app/changeLabels.js`
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

## Refactor closeout — VERIFIED

The R1–R2M modularization strand is technically complete at remote tree `5deee2920f23d68d09d6318293ba4c6c95e3500d`.

Independent closeout review found no remaining mandatory FAST extraction and no structural blocker requiring another R2 package.

The following responsibilities intentionally remain in `script.js`:

- `state` ownership;
- `defaultAcutePattern` severity-to-pattern routing;
- `setSegment` state/DOM orchestration;
- `renderAll` global render orchestration;
- `refreshComputedModulesAfterLanguageChange` language-refresh orchestration;
- `resetAll` global state/DOM reset;
- global application listeners;
- `changesLibrary` and the Practice Changes renderer shell. Card-level audited content changes after the refactor closeout are recorded above.

This is intentional host orchestration, not an unresolved refactor defect. The existing `renderChangeSummary()` helper is currently unused; it is documented as optional later dead-code cleanup and is not removed in this behaviour-preserving refactor strand.

The runtime remains one-directional with no inter-module cycle: i18n → utils → icons → nav → i18nApply → disclaimer → changeLabels → acute → nihr → previous → switch → tryptase → `script.js`. HSR modules receive their required state/helpers/DOM dependencies through their established `init(...)` boundaries and do not import one another.

The regression inventory at the R2M closeout was 90 tests. The current inventory is 94 tests. These tests are regression guardrails for technical behaviour, not proof of medical correctness.

Closeout governance:

- Medical content changed: **NO**.
- Practice Changes medical content changed: **NO**.
- `changesLibrary` changed: **NO**.
- i18n values changed: **NO**.
- HSR behaviour changed: **NO**.
- decision/routing behaviour changed: **NO**.
- existing tests weakened: **NO**.
- R2N implementation: **NOT STARTED / NOT REQUIRED**.

## Next permitted action

Do **not** continue the old card-audit sequence described in earlier versions of this file; that sequence is complete through PR `#19`.

Current parallel workstreams are:

1. **Human Medical Affairs:** MED-01 Revision 2 has completed independent closure QA and is ready to send for F02/F05/F07/F09/F11 review. Human Medical Affairs confirmation/corrections remain pending; the Gemini result does not replace that sign-off. PR `#21` remains a separate Medical review package.
2. **UI-01:** regression repair is complete and official CI is green (`75/75`). Keep PR `#22` Draft unless/until the Product Owner explicitly authorizes its controlled next disposition; technical verification does not imply Medical/Regulatory approval.
3. **Design:** use `Esur2/main` as the visual design/integration sandbox. Medical strings and medical logic are frozen during design iteration. Per the Product Owner decision of 2026-09-27, accepted visual-design work remains in `Esur2`; do not transfer it to `Esur22` unless the Product Owner gives new explicit authorization.
4. **PR #12:** no merge. Reconcile against current `main` and reverify only when/if the modularized branch is brought forward.
5. **Regulatory:** after Medical clarifies applicability/limits, hand the consolidated intended purpose/function package to Bayer RA/Legal for qualification/classification.

Do not treat the `Esur2` integration build, a Source-QA PASS, a green technical test, or a Draft PR as a Medical/Regulatory approval.

## Governance rules

- During refactor: no medical wording, recommendation-strength, units, routing, decision logic, or source meaning may change.
- Do not weaken, delete, bypass, or rewrite regression tests to make a refactor pass.
- Every structural package must pass the full Playwright suite and official PR CI before being marked VERIFIED.
- ChatGPT independently verifies remote blobs/diff/CI rather than relying only on implementation reports.
- Change Practice Changes Medical content only through the applicable card-level source audit and Medical Lock; preserve the unaudited cards until their workflows are complete.
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

### Prompt routing rule

- Every ready-to-copy AI handoff prompt must state its exact destination prominently before the prompt: `CHATGPT CHAT`, `CHATGPT WORK`, `GROK`, or `CODEX`.
- Bruno must never need to infer which system receives the next prompt.
- Results from `CHATGPT WORK`, `GROK`, or `CODEX` return to `CHATGPT CHAT` unless the handoff explicitly states otherwise.

## Current design workflow — Esur2

- Design work is currently separated from Medical/content work.
- Phase 1: show/review the design concept without changing GitHub.
- After Product Owner approval of a concept, implementation may be iterated directly on `KnoxiCoke/Esur2/main` for immediate browser review.
- `Esur2` may combine Draft PR content for visibility; this does not change approval status.
- Product Owner decision 2026-09-27: accepted visual-design work remains in `KnoxiCoke/Esur2`; do not transfer the design back to `Esur22` and do not create a UI/design PR there unless the Product Owner gives a new explicit authorization.
- During this design track, `changesLibrary` and all medical strings/logic must remain unchanged unless a separately governed Medical change explicitly authorizes otherwise.

## Practice Changes UX decision — `UX_CHANGES_01`

The authoritative `UX_CHANGES_01` decision is currently the text in this `PROJECT_STATE.md`. The referenced `docs/ux/PRACTICE_CHANGES_UX.md` file is not present on `main` as of the 2026-09-27 live verification; do not treat that missing path as an additional source of requirements.

### Product Owner decision — Variant B (2026-09-27)

The Product Owner explicitly replaced the earlier Variant-A presentation decision with **Variant B** for the `Esur2` Practice Changes preview:

- one topic is selected at a time from a compact topic navigator;
- the selected topic opens in one primary detail area;
- `Compare` / `Action` remains available **locally at the selected topic**, not as a global page-level mode;
- `Compare` presents existing 2018 and 2025 content side by side on desktop;
- `Action` presents the existing Action content for the selected topic;
- remove level filters from user controls;
- keep search;
- keep existing level metadata only as a small navigation/status signal; do not reclassify levels;
- Sources are collapsed by default;
- any layout lead/summary must reuse an already existing field from the selected locked object; no new Medical summary text may be created for presentation;
- existing 2018, 2025, Action, Why/impact and Source strings must remain unchanged;
- Waiting Times remains a special presentation case using its three existing content blocks — MRI + CT/angiography, two ICM administrations, and two GBCA administrations — without rewriting their Medical text;
- on narrow/mobile viewports, the topic navigator becomes compact/stacked and the same selected-topic detail content is shown below; no desktop-only behaviour is acceptable.

### Behaviour-preserving requirement before implementation

`UX_CHANGES_01` still does **not** by itself authorize immediate code changes. Before implementation, ChatGPT must write a behaviour-preserving scope that is reviewed first and covers:

- untouched `changesLibrary` strings and fields;
- local Compare/Action control behaviour and default state;
- source/disclosure behaviour;
- topic-selection and search behaviour;
- Waiting Times special handling;
- state/DOM dependencies and selectors;
- regression invariants;
- explicit out-of-scope Medical/content changes.

Medical/content boundary before the relevant audit is complete:

- existing EN/DE Medical strings remain unchanged;
- no shortening, merging, paraphrasing, reclassification, recommendation-strength change, number/unit/threshold change, source-claim change or decision/routing change;
- moving existing text is allowed only inside the reviewed behaviour-preserving scope;
- no new Medical claims may be introduced by UI labels, helper text, summaries or layout-specific copy.

Editorial compression or rewriting remains a separate future Medical/source-governed phase and is not authorized by this decision.

This Product Owner decision changes the approved `Esur2` presentation behaviour only. It does not change Medical approval status, recommendation strength, decision logic, Source-QA status, Human Medical Affairs status, Regulatory status, merge status or release/Go-Live status.

### Variant B preview implementation — verified

- Implemented only in `KnoxiCoke/Esur2/main` at `ad1c4b9cb9cd546b99f24fce85ae1712aa8ec739` (`UI Phase 2C: rebuild Practice Changes workspace`).
- Changed files: `index.html`, `script.js`, `style.css`.
- `changesLibrary` was compared pre/post and remained byte-identical. PR `#21` and PR `#22` remained open Draft at their prior verified heads.
- The first existing object in the current Practice Changes array is `publication_structure`; therefore the reviewed “default = first existing object” rule resolves to that topic, not to a newly chosen priority topic.
- Compare remains the default local mode. Search filters the topic navigator. Sources are collapsed by default.
- Waiting Times retains its three existing nested blocks; they render as collapsed disclosures in Action mode without rewriting their text.
- Why / Practical impact content is not dropped: all existing sections in the selected mode are rendered unchanged.
- Narrow layouts stack the selected-topic detail view and the Compare columns instead of preserving the desktop split.
- GitHub Pages run `36341470585` for exact HEAD `ad1c4b9cb9cd546b99f24fce85ae1712aa8ec739` completed successfully.
- This is a preview/UI milestone only. It is not a new Medical Lock, Human Medical Affairs approval, Regulatory approval, merge approval or Go-Live authorization.

### Waiting Times Compare refinement — Product Owner decision (2026-09-27)

- In `Compare`, show the existing top-level 2018, 2025 and Practical impact sections directly.
- If an existing `compare.nested` block is present, keep all of it unchanged but place it behind one collapsed neutral disclosure labelled `Additional comparison details` / `Weitere Vergleichsdetails`.
- Do not create that disclosure where `compare.nested` is absent.
- `Action` remains unchanged and continues to show its existing scenario-specific nested blocks.
- `changesLibrary` strings, IDs, levels, refs, recommendation strength, numbers, units and source mappings must remain unchanged.
- The observed EN/DE Waiting Times structure difference is a separate Medical/source review point: EN currently has no `compare.nested`; DE currently has three `compare.nested` scenario blocks that overlap in subject matter with Action. Do not harmonize, delete or rewrite that structure during this UI pass.
- This is presentation-only in `Esur2`; no design transfer to `Esur22` is authorized.

### Waiting Times Compare refinement — verified implementation

- Implemented in `KnoxiCoke/Esur2/main` at `63b3f9035fcffd66da947ab06417d80477c8ecc1` (`UI Phase 2D: collapse extra Compare details`).
- Changed files: `script.js`, `style.css`; `index.html` remained unchanged.
- `changesLibrary` was verified byte-identical to the preceding `ad1c4b9...` preview. The Action renderer was also verified byte-identical.
- Compare still renders the existing top-level 2018, 2025 and Practical impact sections directly. Any existing `compare.nested` content is preserved and placed behind one default-closed neutral disclosure: `Additional comparison details` / `Weitere Vergleichsdetails`.
- EN Waiting Times still has no `compare.nested`; DE Waiting Times still has its existing three `compare.nested` blocks. No harmonization was performed.
- GitHub Pages run `36342396957` for exact HEAD `63b3f9035fcffd66da947ab06417d80477c8ecc1` completed successfully.
- PR `#21` and PR `#22` were not changed. This remains a preview/UI milestone only, not a Medical, Regulatory, merge or Go-Live approval.


## Terminology / abbreviation UX audit — `UX_ABBREV_01`

Read-only audit performed 2026-09-27 against the live `KnoxiCoke/Esur2/main` preview at `63b3f9035fcffd66da947ab06417d80477c8ecc1`, using only the authorized ESUR sources for Medical/scientific terminology. `prototype.html` was excluded because it is not referenced by the live app entry point.

Scope/findings:

- User-visible abbreviations/short forms inventoried: `ESUR`, `HSR`, `IHR`, `NIHR`, `CMSC`, `ICM`, `GBCA`, `CM`/`KM`, `eGFR`, `CA-AKI`, `PC-AKI`, `HSG`, `CAPD`, `NSF`, `SCAR`, `ACR`, `ACR/NKF`, `ABCDE`, `CPR`, `EAACI`, `IV`/`IM`, `PAD`, `EVAR`, `RCTs`, plus common modality/source metadata such as `CT`, `MRI`/`MRT`, `EN`, `DE`, `PDF`, and the formula `CO₂`.
- Clear UX introduction gaps with an authorized-source-supported expansion available: `ESUR`, `CMSC`, `IHR`, `NIHR`, `ICM`, `GBCA`, `eGFR`, `HSG`, `CAPD`, `NSF`, `SCAR`, `ACR`, `CPR`, `EAACI`, `IV`, `IM`, `PAD`, and `EVAR`. Several are explained later or only in another module/source disclosure rather than at first visible use.
- `CMSC`: the app contains the full phrase `ESUR Contrast Media Safety Committee` in the disclaimer but does not bind it to `(CMSC)`; later screens use `CMSC` directly.
- `HSR`: used as the main navigation/title without an explicit in-app expansion. The authorized HSR sources use the HSR acronym contextually, but the reviewed authorized source material did not provide a clean abbreviation-list entry mapping `HSR = ...`; do not silently invent a formal expansion in production wording.
- `NIHR`: explicitly expanded in the NIHR module title, but is already used earlier on the HSR landing view. `IHR` is explicitly defined in the authorized Part 2 figure/abbreviation material but is not consistently introduced before use in the app.
- `ICM` and `GBCA`: Switch partially introduces them as `ICM (iodine-based)` / `GBCA (gadolinium-based)`; the authorized source definitions are `iodine-based contrast medium` and `gadolinium-based contrast agent`. Other modules use the acronyms without the local mapping.
- `CM` / `KM`: used in NIHR labels (`Culprit CM known` / `Auslösendes KM bekannt`). `CM` is explicitly defined in authorized Part 2 as contrast medium/media. No explicit `KM` abbreviation definition was found in the authorized source set; using the full word `Kontrastmittel` would avoid an unsupported abbreviation expansion.
- `eGFR`: used repeatedly with clinical thresholds but not expanded in the live app. The authorized 2018 and 2025 booklets explicitly define `estimated glomerular filtration rate (eGFR)`.
- `CA-AKI` and `PC-AKI`: expanded within the dedicated terminology card, but can also appear in other Practice Changes content where a user may encounter the acronym without first reading that card.
- `HSG`, `CAPD`, `NSF`, `EAACI`, `PAD`, and `EVAR`: visible abbreviations are not expanded in the normal visible app content at first use; their full forms are supported by the authorized sources. Some full forms appear only in collapsed source text or source references, which is not treated as adequate first-use explanation.
- `SCAR`: the current NIHR wording `severe non-immediate hypersensitivity reaction ... with danger signs (SCAR)` mirrors the authorized Part 2 pathway phrasing. The authorized sources separately define `SCAR` as `severe cutaneous adverse reaction`; the app does not display that expansion. This is an explanation gap, not a finding that the current pathway is contradicted.
- `ACR/NKF`: the authorized 2025 booklet itself uses `ACR/NKF Consensus 2020`. `ACR` is explicitly expanded in the authorized HSR sources; no `NKF` full-name expansion was found in the authorized ESUR source set. Do not add an NKF expansion to controlled Medical content without separate authorization for external research or another authorized source.
- `ABCDE` and `RCTs`: the authorized 2025 booklet uses these short forms without providing a reviewed full-form expansion in the authorized source set used for this audit. Do not silently expand them under Source-only mode.
- `CPR`, `IV` and `IM` have explicit full forms in HSR Part 1's abbreviation material; the German app partially clarifies CPR as `Reanimationsteam`, while the English acute view uses CPR directly.
- `CT`, `MRI`/`MRT`, `EN`, `DE`, `PDF` and `CO₂` are not treated as priority terminology defects in this audit; they are modality/language/source metadata or a chemical formula. `CO₂` is also described as carbon dioxide/Kohlendioxid within the Practice Changes topic.
- No app code or Medical wording was changed by this audit.

Remediation is authorized only for the Product Owner-approved presentation-only subset recorded below; any change to an existing locked Medical sentence remains separately governed.

### UX_ABBREV_01 presentation-only implementation authorization — Product Owner (2026-09-27)

Authorized only in `KnoxiCoke/Esur2`:

- add source-supported EN/DE first-seen or immediately adjacent abbreviation explanations for the READY presentation-only items;
- permitted READY items: `ESUR`, `CMSC`, `IHR`, `NIHR`, `ICM`, `GBCA`, `eGFR`, `SCAR`, `NSF`, `HSG`, `EAACI`, `ACR`, `CPR`, `PAD`, `EVAR`;
- existing locked Medical sentences, `changesLibrary`, recommendation strength, numbers, units, thresholds, source mappings and decision logic must remain byte-identical;
- EN and DE explanations must be added at parallel locations;
- use local explanation/disclosure UI rather than rewriting locked content;
- specifically prohibited from this implementation: changing or expanding `HSR`, `CM`/`KM`, `CAPD`, `PC-AKI`/`CA-AKI`, `NKF`, `ABCDE`, or `RCTs`;
- `CT`, `MRI`/`MRT`, `IV`/`IM`, `EN`, `DE`, `PDF`, and `CO₂` remain unchanged for this pass;
- after implementation, verify scope diff, desktop/mobile responsive behavior structurally, GitHub Pages deployment, and update this state file.

This authorization is UI/terminology presentation only. It is not a Medical Lock, Human Medical Affairs sign-off, Regulatory approval, merge approval or Go-Live authorization.

### UX_ABBREV_01 presentation-only implementation — verified

- Implemented only in `KnoxiCoke/Esur2/main` at `842e16ae44546061c70f291b92c2345f05049442` (`UI Phase 2E: add abbreviation explanations`).
- Changed files: `index.html`, `script.js`, `style.css`.
- Existing `i18n` Medical/content strings were verified byte-identical to the preceding `63b3f903...` preview. `changesLibrary` was verified byte-identical. The existing Action renderer was verified byte-identical.
- The implementation is additive: source-supported abbreviation data live in a separate presentation object; existing locked Medical sentences were not replaced or rewritten.
- Added source-supported presentation explanations for the authorized READY set: `ESUR`, `CMSC`, `IHR`, `NIHR`, `ICM`, `GBCA`, `eGFR`, `SCAR`, `NSF`, `HSG`, `EAACI`, `ACR`, `CPR`, `PAD`, and `EVAR`.
- No new expansion was added for the prohibited/deferred set: `HSR`, `CM`/`KM`, `CAPD`, `PC-AKI`/`CA-AKI`, `NKF`, `ABCDE`, or `RCTs`; `CT`, `MRI`/`MRT`, `IV`/`IM`, `EN`, `DE`, `PDF`, and `CO₂` remained unchanged.
- EN/DE are implemented at parallel UI locations: HSR first-seen disclosure; Switch and NIHR class disclosures; Previous-reaction EAACI disclosure; Acute CPR disclosure; and topic-local Practice Changes disclosures for hypersensitivity, waiting times, dialysis refinement, and new clinical scenarios.
- First-seen structure was checked in the live source: HSR abbreviation disclosure precedes the HSR subtitle; Switch disclosure precedes ICM/GBCA controls; NIHR disclosure precedes ICM/GBCA controls; Practice Changes explanations are inserted between selected-topic header and mode/body content.
- All new abbreviation disclosures are default-closed. Desktop and mobile responsive behavior was structurally checked in the committed DOM/CSS, including the existing `max-width: 820px` mobile breakpoint and one-column abbreviation rows on narrow viewports. No graphical browser screenshot QA was completed in this environment because the headless runtime could not resolve the deployed site; Product Owner visual inspection remains the final preview check.
- GitHub Pages run `36344710032` for exact HEAD `842e16ae44546061c70f291b92c2345f05049442` completed successfully.
- PR `#21` remained open Draft at `b388923110abe828fea6de469e71a5dd7a255880`; PR `#22` remained open Draft at `969af23b108e49d5794c1d65f95b862b9dfebf04`; neither was changed.
- This remains a preview/UI terminology milestone only. It is not a new Medical Lock, Human Medical Affairs approval, Regulatory approval, merge approval or Go-Live authorization.

### UX_ABBREV_01 contextual refinement authorization — Product Owner (2026-09-27)

Authorized only in `KnoxiCoke/Esur2`:

- abbreviation explanations must be context- and language-dependent;
- show an explanation only when the abbreviation is present in the currently visible content in the current language and is not already sufficiently introduced there;
- remove the global HSR-level IHR/NIHR abbreviation block;
- EN CPR may be explained only when the currently visible Acute output contains `CPR`; DE must not add a separate CPR disclosure because the existing German Medical string already includes `Reanimationsteam`;
- EAACI and other dynamic abbreviations must likewise appear only when the currently visible rendered content contains the abbreviation;
- topic-local Practice Changes abbreviation help must follow the same currently-visible-content rule, not just topic membership;
- existing locked Medical strings, `changesLibrary`, recommendation strength, numbers, units, thresholds, source mappings and decision logic must remain byte-identical;
- this is a presentation-only refinement in `Esur2`; no design transfer to `Esur22` is authorized.

This authorization supersedes only the placement/display behavior of the prior UX_ABBREV_01 presentation layer. It does not authorize any new abbreviation expansion or Medical content change.

### UX_ABBREV_01 contextual refinement — verified

- Implemented only in `KnoxiCoke/Esur2/main` at `ce28de6219a8f40af0ffb455ee944112ac227360` (`UI Phase 2F: contextualize abbreviation help`).
- Changed files: `index.html`, `script.js`; `style.css` remained unchanged from the preceding Phase 2E preview.
- Existing `i18n` Medical/content strings were verified byte-identical to `842e16ae...`. `changesLibrary` was verified byte-identical. The existing Action renderer was verified byte-identical.
- The global HSR-level IHR/NIHR abbreviation block was removed.
- Abbreviation disclosures now filter against the currently rendered visible text in the active language. Hidden subviews, hidden elements and content inside default-closed `details` are excluded from the visibility scan.
- Previous reaction: EAACI appears only when the currently visible Previous-reaction content contains `EAACI`.
- Acute: EN can show CPR only when the currently visible Acute content contains `CPR`; DE has no separate CPR disclosure.
- Switch: ICM/GBCA help remains available only while those acronyms are present in the visible Switch content.
- Tryptase: an IHR disclosure slot was added and becomes populated only when the currently visible Tryptase content contains `IHR`.
- NIHR: ICM/GBCA/SCAR are filtered against the currently visible NIHR content; NIHR itself is not redundantly added to the disclosure because the existing NIHR title already expands the term.
- Practice Changes: topic-local abbreviation candidates are now filtered against the currently visible selected-topic content and current Compare/Action state instead of being shown solely by topic membership; closed nested details do not trigger an abbreviation disclosure until opened.
- Existing source-supported organization mapping for ESUR/CMSC remains in the global source/disclaimer presentation layer.
- Desktop/mobile behavior was structurally rechecked against the unchanged responsive CSS; the existing abbreviation layout and `max-width: 820px` mobile behavior remain intact.
- GitHub Pages run `36345705818` for exact HEAD `ce28de6219a8f40af0ffb455ee944112ac227360` completed successfully.
- PR `#21` remained open Draft at `b388923110abe828fea6de469e71a5dd7a255880`; PR `#22` remained open Draft at `969af23b108e49d5794c1d65f95b862b9dfebf04`; neither was changed.
- This is a preview/UI terminology refinement only. It is not a new Medical Lock, Human Medical Affairs approval, Regulatory approval, merge approval or Go-Live authorization.

### UX_ABBREV_01 Phase 2F regression finding — verified, fix pending

Product Owner visual inspection of the deployed Phase 2F preview identified two regressions at exact `Esur2/main` HEAD `ce28de6219a8f40af0ffb455ee944112ac227360`:

- Abbreviation disclosures cannot stay open. Verified code cause: the document-level `toggle` listener calls `updateContextualAbbreviations()`; that function clears and re-renders the abbreviation slot via `slot.innerHTML`, recreating the native `<details>` element in its default-closed state immediately after a user opens it.
- HSR two-column layout, visibly Switch, is broken by the new abbreviation slot placement. Verified code cause: `#hsr-tab-switch` and the other Phase-2 HSR subviews are direct-child CSS grids whose placement rules were written for direct `.card` children. The newly inserted direct-child `.abbr-slot` participates in that grid as an additional item and shifts subsequent cards/output into unintended grid cells.

Status:
- Phase 2F deployment is technically deployed but **visually regressed and not accepted**.
- Do not treat `ce28de6219a8f40af0ffb455ee944112ac227360` as the accepted abbreviation UX.
- No Medical/content defect is implied by these UI regressions; existing locked Medical strings and `changesLibrary` remain protected.
- No further direct patching should be performed without browser-level visual verification across EN/DE, desktop/mobile, and all HSR tabs.
- Preferred next execution path: browser-capable ChatGPT Work or an equivalent coding agent with repository access, live-page inspection, and explicit visual regression verification before commit.

### UX_ABBREV_01 Phase 2F regression repair — deployed, desktop QA verified; narrow viewport QA pending (2026-09-27)

- The Product Owner explicitly authorized a commit-first preview-QA exception after the cloud browser refused local `file:` preview. Implemented only on `KnoxiCoke/Esur2/main` at `05b5589ab008786b64ab0c4a519e8dbe2977b179` (`UI: repair contextual abbreviation disclosure and HSR grids`). Changed files: `index.html`, `script.js`; `style.css` unchanged.
- Regression causes at preceding `ce28de6...`: a document-level `toggle` listener re-rendered the native abbreviation `<details>` via `innerHTML` immediately after opening; direct-child `.abbr-slot` elements participated in HSR card grids and displaced card placements.
- Repair: each HSR abbreviation slot is now inside an existing card, restoring the original direct-card grid structure. Abbreviation-only clicks/toggles do not request contextual re-render; the disclosure is retained when its candidate signature is unchanged, and its open state is preserved if the visible candidate list changes.
- Before/after byte guards: existing `i18n` Medical/content block, `changesLibrary`, the Medical/output renderers and the Action renderer were **byte-identical**. The only `script.js` edits were in the abbreviation presentation updater and document event listeners; no Medical string, Medical logic, source mapping, dose, threshold or clinical pathway was changed. `git diff --check` and `node --check script.js` passed.
- Exact GitHub Pages run `36346791649` completed **success** for that exact commit. The served `index.html` and `script.js` Git blob hashes matched the committed blobs (`237620371ad768a1b23329fdb8a4b020c88dcb0e`, `6f1a5123b21851450bb0d208b67824dfe071a584`). Deployed URL: `https://knoxicoke.github.io/Esur2/`.
- Browser QA on the deployed page at 1363 CSS px: Previous reaction EN/DE grid intact, EAACI present for emergency/severe and absent for mild; Acute DE mild without abbreviation, DE severe/arrest without separate CPR disclosure, EN severe/arrest with CPR disclosure opening/closing; Switch EN/DE original `intro/type/agent/output/safety` two-column areas restored, ICM/GBCA disclosure opens and remains open through ICM→GBCA change; Tryptase EN/DE `info/values/output` areas and IHR help; NIHR EN/DE original grid areas, ICM/GBCA help and SCAR only when severe/danger output contains SCAR. Practice Changes Waiting Times EN/DE Compare/Action filters eGFR against visible content and closed nested details; opening the relevant nested block reveals eGFR help. New clinical scenarios EN/DE Compare/Action filters HSG/PAD/EVAR against visible content. Hypersensitivity/ACR and dialysis/NSF disclosures were also opened. All observed abbreviation disclosures stayed open until closed. No desktop document-width overflow was observed in the checked views.
- **Narrow/mobile graphical browser QA remains unverified.** This cloud browser exposes a fixed 1363 CSS px viewport; available responsive/zoom keyboard actions did not change it, and no supported viewport-resize API is exposed. Static HTML/CSS inspection confirms all HSR subviews again have only the original direct `.card` children and the existing `max-width: 768px` grid stacking rules remain unchanged, but this is not a substitute for the requested narrow-viewport browser inspection. Do not mark this repair fully visually accepted until that check is performed.
- PR `#21` remained open Draft at `b388923110abe828fea6de469e71a5dd7a255880`; PR `#22` remained open Draft at `969af23b108e49d5794c1d65f95b862b9dfebf04`; neither was touched.
- This is a preview/UI-only deployment and desktop technical QA. It is **not** Source-QA approval, Internal Medical Lock, Human Medical Affairs sign-off, Regulatory approval, merge/release approval or Go Live.

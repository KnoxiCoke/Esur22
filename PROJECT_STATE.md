# PROJECT_STATE

Last verified: 2026-09-27

## 1. Repository roles

### `KnoxiCoke/Esur22` — controlled source of truth
This repository is the controlled project repository for:
- medical/source QA,
- Human Medical Affairs review,
- regulatory work,
- regression tests,
- reviewed implementation branches and pull requests.

Medical or clinical changes must not be treated as approved merely because they are visible in a draft PR.

### `KnoxiCoke/Esur2` — live preview / design sandbox
`Esur2` is intentionally **not** the source of truth.

Its purpose is to provide a single browser-visible integration build in which draft states from `Esur22` can be combined for review and design work.

Rules:
- `Esur2/main` may contain combined draft content that is not yet merged in `Esur22`.
- Content visible in `Esur2` does **not** imply Medical approval, Regulatory approval, technical release, Go Live, or conformity.
- Design experiments may be made directly on `Esur2/main` so they can be reviewed visually.
- Once a design is accepted, the final presentation-only diff must be transferred back to `Esur22` as a separate reviewed UI branch / Draft PR.
- Medical strings, medical logic, doses, thresholds, rules and source mappings remain governed in `Esur22`, not in `Esur2`.

## 2. Controlled baseline in Esur22

Clinical/application baseline before this documentation-only commit:

`main = 1ebbe97b555673dd59c5c708532d39040291c303`

This baseline contains the merged Practice Changes cards through PR #20.

No Medical Freeze, Human Medical Affairs final sign-off, Rule 11 classification, software release, or Go Live approval exists at this point.

## 3. Open Draft PRs relevant to the current visible build

### PR #21 — Practice Changes medical wording package
- State: Draft / open
- Head: `b388923110abe828fea6de469e71a5dd7a255880`
- Scope: revised Practice Changes content, especially Hypersensitivity and CA-AKI terminology
- Source QA completed against the authorized project sources
- No new Internal Medical Lock
- No Human Medical Affairs sign-off
- Must not be treated as merged or approved

### PR #22 — UI-01 neutral case entry
- State: Draft / open
- Branch: `ui/neutral-case-entry-20260927`
- Head: `ddc9de09232b1d6d26baaa87e0a0bd33b496243b`
- F02 Previous reaction starts without a preselected situation/severity
- F11 NIHR Check starts without preselected severity / contrast class / culprit-known state
- Existing medical paths appear only after deliberate case selection
- No intended medical wording, dose, threshold, pathway or source change
- This is **not** the visual redesign; it is only the neutral-start UX change

## 4. Current Esur2 integration build

Current verified `Esur2/main`:

`4f028580077ca7b5612ed2acf6da158fcd5115e2`

It combines:
1. `Esur22/main` at `1ebbe97b555673dd59c5c708532d39040291c303`
2. the full content of Draft PR #21 at `b388923110abe828fea6de469e71a5dd7a255880`
3. UI-01 from Draft PR #22 at `ddc9de09232b1d6d26baaa87e0a0bd33b496243b`

This combined state exists so the Product Owner can inspect the current overall product in one place.

It must never be used as evidence that PR #21 or PR #22 has been approved or merged into `Esur22`.

## 5. Design workflow from now on

For visible design work:

1. First develop/review the design concept without changing Medical content.
2. After Product Owner approval of the concept, implement the design on `Esur2/main` for immediate browser review.
3. Iterate there until the Product Owner accepts the visual result.
4. Only then transfer the final presentation-only changes to a new UI Draft PR in `Esur22`.
5. Before that PR is accepted, verify that medical strings / `changesLibrary` / medical logic are unchanged from the intended `Esur22` basis.

`Esur2` is therefore the **visual integration sandbox**; `Esur22` remains the **controlled project record**.

## 6. Medical review package

`MED-01` contains review sheets for:
- F02 Previous reaction
- F05 Acute management
- F07 Switch
- F09 Tryptase Rule
- F11 NIHR Check

It is intended for Human Medical Affairs review with CONFIRM / CHANGE / NOT APPLICABLE decisions plus the five common Medical questions.

PR #21 is a separate Medical package and is not part of the MED-01 baseline.

## 7. Governance reminder

Keep the following concepts separate:
- Source QA
- Internal Medical Lock
- Human Medical Affairs sign-off
- Regulatory assessment / classification
- Technical validation
- Merge status
- Software release / Go Live

None of these should be inferred from the others.

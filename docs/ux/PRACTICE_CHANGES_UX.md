# Practice Changes UX Decision

Decision ID: `UX_CHANGES_01`
Status: **LOCKED DESIGN DECISION / NOT YET IMPLEMENTED**
Scope: Practice Changes / Changes 2018→2025 tab only

## Purpose

Reduce cognitive load in the Practice Changes tab without changing any unaudited Medical wording, source meaning, recommendation strength, category meaning, or decision logic.

The current tab tries to serve comparison, action guidance and filtering at the same time. The agreed direction is to simplify the interaction model first and defer editorial compression until after the Practice Changes Medical/source audit.

## Phase 1 — behaviour-preserving UX only

The following UX direction is approved in principle:

- Use one primary card view instead of separate Compare and Action modes.
- Remove the Compare/Action mode control.
- Remove the level filters from the user controls.
- Keep search.
- Keep the existing level classification visible only as a small badge on each card.
- Keep existing Action content in the same card rather than behind a separate mode, without rewriting it.
- Collapse secondary comparison/background material by default, especially:
  - 2018 wording/context;
  - Why/context;
  - Sources/references.
- For Waiting Times, present the existing material through three collapsible sub-blocks:
  - MRI + CT / angiography;
  - two iodine-based contrast medium administrations;
  - two gadolinium-based contrast agent administrations.

## Locked Medical/content boundary for Phase 1

Phase 1 is presentation and interaction only.

The following must remain unchanged unless separately authorized through the Practice Changes Medical/source-audit workflow:

- all existing EN and DE Medical strings;
- recommendation strength;
- numbers, thresholds, intervals and units;
- source claims and references;
- 2018-versus-2025 meaning;
- Action wording;
- topic/card meaning;
- `level` meaning and classification;
- clinical conditions, exceptions and populations;
- Medical decision or routing logic.

Do **not** shorten, merge, paraphrase, reclassify, "clarify", harmonize or otherwise editorially improve Medical strings during Phase 1.

Moving an existing string to a different presentation layer is allowed only if its wording and meaning remain unchanged and the behaviour-preserving implementation scope explicitly accounts for it.

## Implementation gate

This decision does **not** itself authorize implementation.

Before any Phase-1 code change, ChatGPT must write a behaviour-preserving implementation scope that identifies at minimum:

- exact controls to remove or retain;
- exact existing strings/fields that remain untouched;
- card and disclosure behaviour;
- Waiting Times disclosure structure;
- relevant state/DOM dependencies;
- regression-test invariants;
- explicit out-of-scope Medical/content changes.

That scope must be reviewed before implementation. Until then: **no Practice Changes UX code changes**.

## Phase 2 — after Medical/source audit

Only after the relevant Practice Changes content has completed its Medical/source audit may a separate editorial/content UX phase consider:

- shortening 2018 and 2025 summaries;
- merging redundant text;
- rewriting headings or explanatory copy;
- reassessing `practice-relevant / refined / structural` categories;
- restructuring cards as separate medical/content items where appropriate.

Phase 2 is not covered by `UX_CHANGES_01` and requires separate Medical/content approval.

## Decision summary

**First simplify presentation without changing the Medical content. Only after audit may the content itself be compressed or rewritten.**

# ESUR 2025 HSR traceability

## Scope

This change set is intentionally limited to hypersensitivity reactions (HSR) and uses only these two source papers:

1. van der Molen AJ et al. *Hypersensitivity reactions to contrast media: Part 1. Management of immediate and non-immediate hypersensitivity reactions in adults.* European Radiology. 2025. DOI: `10.1007/s00330-025-11675-1`.
2. van der Molen AJ et al. *Hypersensitivity reactions to contrast media: Part 2. Prevention of recurrent hypersensitivity reactions in adults.* European Radiology. 2025. DOI: `10.1007/s00330-025-11676-0`.

Thyroid, DLP/effective-dose and adrenal-washout logic are explicitly out of scope and were not medically reviewed or changed in this revision.

## Implemented traceability

| App area | Implemented rule | Source |
|---|---|---|
| Acute management | Adult-only warning for fixed doses and treatment pathways | Part 1 title, methods and Table 3 |
| Acute management | ABCDE, stop CM, crystalloid line, positioning, monitoring and vasovagal differential | Part 1 Figure 2 and Table 3 |
| Acute management | Symptom-specific adult treatment pathways and escalation | Part 1 Figure 2 |
| Acute management | Minimum 30 min after mild reaction; 4–6 h after non-life-threatening reaction; admission after life-threatening reaction | Part 1 Table 3 |
| Acute management | Sedating H1-antihistamine driving/machinery warning | Part 1 Table 3 and drug discussion |
| Acute management | Beta-blocker warning; glucagon/dobutamine listed as additional options | Part 1 Table 3 and drug discussion |
| Acute management | Agent-specific documentation checklist | Part 1 Table 3 |
| Previous IHR | Alternative imaging/unenhanced exam if diagnostically sufficient; do not deny an indicated enhanced exam without an adequate alternative | Part 2 Table 2 |
| Previous IHR | Mild, moderate and severe pathways separated by elective/emergency context | Part 2 Figure 1 and Table 2 |
| Previous IHR | Culprit known/unknown selection | Part 2 Figure 1 and Table 2 |
| Previous IHR | Unclear reaction pathway prevents unsupported severity assignment | Conservative implementation based on the paper's requirement for detailed reaction classification and documentation |
| Previous IHR | Emergency premedication shown only for severe emergency IHR with an unidentified culprit | Part 2 Figure 1 and Table 2 |
| Tryptase | Required non-empty values; formula `acute >= 1.2 × baseline + 2 ng/mL` | Part 2 tryptase section and Table 2 |
| Tryptase | Sampling guidance: early sample, 1–2 h sample no later than 4 h, baseline >24 h after complete resolution | Part 2 tryptase section |
| NIHR | SCAR danger-sign screening occurs before the ordinary mild/moderate pathway | Part 2 Figure 4 and Table 2 |
| NIHR | SCAR pathway is triggered by documented danger signs | Part 2 Figure 4 and Table 2 |
| NIHR | Severe/unclear NIHR without documented danger signs is flagged for urgent specialist clarification rather than automatically labelled SCAR | Part 2 Figure 4 distinguishes severe reactions *with danger signs (SCAR)* |
| NIHR | Class-wide avoidance after severe NIHR with danger signs, class-specific | Part 2 Figure 4 and Table 2 |
| Empirical switch | Group suggestions are labelled optional, non-validated and not confirmed safe | Part 2 Table 1 and Table 2 |

## Source presentation

Part 1 Figure 2 supplies the symptom-specific adult treatment pathways. Table 3 supplies general principles, observation, admission, documentation and safety details. The app presents immediate actions first and moves escalation, special situations, aftercare, documentation and source details into progressively disclosed sections.

The source text's unusual wording for hypotension positioning is not silently rewritten: the app explicitly states that the paper names prone positioning with leg elevation.

## Interface design

The HSR interface is replaced after the existing application script has initialised. The new files are intentionally isolated to `#view-hsr`:

- `hsr-2025.js` — sequential asset loader and visible load-failure fallback
- `hsr-2025-data-en.js` — English paper-derived content
- `hsr-2025-data-de.js` — concise German clinical wording
- `hsr-2025-app.js` — state, decision paths, calculations and rendering
- `hsr-2025.css` — progressive disclosure, visual priority and responsive layout

No clinical option is preselected. The previous-reaction and NIHR modules reveal later questions only after the preceding decision has been confirmed. The acute module prioritises immediate actions visually; escalation, special situations, aftercare, documentation and sources are collapsible.

# ESUR 2025 HSR traceability

## Scope

This change set is intentionally limited to hypersensitivity reactions (HSR) and uses only these two source papers:

1. van der Molen AJ et al. *Hypersensitivity reactions to contrast media: Part 1. Management of immediate and non-immediate hypersensitivity reactions in adults.* European Radiology. 2025. DOI: `10.1007/s00330-025-11675-1`.
2. van der Molen AJ et al. *Hypersensitivity reactions to contrast media: Part 2. Prevention of recurrent hypersensitivity reactions in adults.* European Radiology. 2025. DOI: `10.1007/s00330-025-11676-0`.

Thyroid, DLP/effective-dose and adrenal-washout logic are explicitly out of scope and were not medically reviewed in this change set.

## Implemented traceability

| App area | Implemented rule | Source |
|---|---|---|
| Acute management | Adult-only warning for fixed doses and treatment pathways | Part 1 title, methods and Table 3 |
| Acute management | ABCDE, stop CM, crystalloid line, positioning, monitoring, vasovagal differential | Part 1 Table 3 |
| Acute management | 30 min minimum after mild reaction; 4-6 h after non-life-threatening reaction; admission after life-threatening reaction | Part 1 Table 3 |
| Acute management | Sedating H1-antihistamine driving/machinery warning | Part 1 Table 3 and drug discussion |
| Acute management | Beta-blocker warning; glucagon/dobutamine listed as additional options | Part 1 Table 3 and drug discussion |
| Acute management | Agent-specific documentation checklist | Part 1 Table 3 |
| Previous IHR | Alternative imaging/unenhanced exam if diagnostically sufficient; do not deny an indicated enhanced exam without an adequate alternative | Part 2 Table 2 |
| Previous IHR | Mild, moderate and severe pathways separated by elective/emergency context | Part 2 Figure 1 and Table 2 |
| Previous IHR | Culprit known/unknown selection | Part 2 Figure 1 and Table 2 |
| Previous IHR | Unclear reaction pathway prevents unsupported severity assignment | Conservative implementation based on the paper's requirement for detailed reaction classification and documentation |
| Previous IHR | Emergency premedication protocol only in the severe emergency pathway | Part 2 Table 2 |
| Tryptase | Required non-empty values; formula `acute >= 1.2 x baseline + 2 ng/mL` | Part 2 tryptase section and Table 2 |
| Tryptase | Sampling guidance: early sample, 1-2 h sample no later than 4 h, baseline >24 h after complete resolution | Part 2 tryptase section |
| NIHR | Mild and moderate pathways without danger signs | Part 2 Figure 4 and Table 2 |
| NIHR | SCAR pathway triggered by documented danger signs | Part 2 Figure 4 and Table 2 |
| NIHR | Severe NIHR without documented danger signs is flagged for urgent specialist clarification rather than automatically labelled SCAR | Part 2 Figure 4 distinguishes severe reactions *with danger signs (SCAR)* |
| NIHR | Class-wide avoidance after severe NIHR with danger signs, class-specific | Part 2 Figure 4 and Table 2 |
| Empirical switch | Existing group suggestions retained but labelled optional and non-validated | Part 2 Table 1 and Table 2 |

## Important source tension

Part 1 Figure 2 contains some treatment details that are not repeated identically in Table 3. The overlay does not silently replace the existing symptom-specific treatment text. It adds the unambiguous general principles, aftercare, documentation and safety statements from Table 3. A future clinical review should explicitly decide how the local app wants to reconcile Figure 2 and Table 3 where their presentation differs.

## Implementation design

`hsr-2025.js` is loaded after the existing `script.js` and is intentionally limited to DOM elements inside the HSR views. This avoids changing the excluded thyroid, DLP and adrenal-washout calculations while the HSR revision is reviewed.

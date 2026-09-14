# RUN_MANIFEST — ESUR Source Atlas v0.1

- repository: KnoxiCoke/Esur22
- base branch: refactor/modularize-script
- base HEAD: ce4aefd6e96f9f760999406715a1d437a47a9f89
- UTC start: 2026-09-14T22:14:52Z
- UTC completion: 2026-09-14T22:25:04Z
- output branch intended: bot/source-atlas-v0.1-2026-09-15
- tool/software: pdftotext/poppler, tesseract (where used on BK25 covers/back), python

## Source PDFs (exact filenames + SHA-256 + physical page counts)

| source_id | filename | sha256 | physical_pages |
|---|---|---|---:|
| V10EN | ESUR-Guidelines-10_0-Final-Version-1.pdf | `d86b45ac84439647f9fbeba497b7ac26d267b20dcc61e17c2a3944dbeca1674c` | 46 |
| V10DE | ESUR-V0-Deutsch.pdf | `385fe918fe6217ba104e98e83bd1279c161b852c5d355d4ca9c9d2a35c52574b` | 29 |
| BK25 | Guidelines-2025-ESUR-vf.pdf | `c86b067ff1bf598f56b53abc391cb619c47f2d300bfad634a86e1777b762aea0` | 46 |
| P1 | 330_2025_Article_11675.pdf | `d80e8fa294eb1f303b4508f3dc404a0e36a97cba613eeaf8a55ea58d237b7bf3` | 13 |
| P2 | 330_2025_Article_11676.pdf | `19f9c8bfdb887308c585629aa7be763c235eef01c524035e8b23378cac947b0c` | 15 |

Exact filenames:
- ESUR-Guidelines-10_0-Final-Version-1.pdf
- ESUR-V0-Deutsch.pdf
- Guidelines-2025-ESUR-vf.pdf
- 330_2025_Article_11675.pdf
- 330_2025_Article_11676.pdf

## Files created
- `audits/source-atlas/v0.1/RUN_MANIFEST.md` (2279 bytes)
- `audits/source-atlas/v0.1/COVERAGE_REPORT.md` (2625 bytes)
- `audits/source-atlas/v0.1/PAGE_LEDGER.csv` (28090 bytes)
- `audits/source-atlas/v0.1/SECTION_INDEX.csv` (23903 bytes)
- `audits/source-atlas/v0.1/NUMERIC_INDEX.csv` (367930 bytes)
- `audits/source-atlas/v0.1/RECOMMENDATION_LANGUAGE_INDEX.csv` (213086 bytes)
- `audits/source-atlas/v0.1/TOPIC_INDEX.csv` (11504 bytes)
- `audits/source-atlas/v0.1/V10_EN_DE_ALIGNMENT.md` (17996 bytes)
- `audits/source-atlas/v0.1/BOOKLET_PART_ALIGNMENT.md` (14130 bytes)
- `audits/source-atlas/v0.1/OPEN_QUESTIONS.md` (10836 bytes)

## Index row counts (merged)
- PAGE_LEDGER.csv: 149
- SECTION_INDEX.csv: 258
- NUMERIC_INDEX.csv: 1063
- RECOMMENDATION_LANGUAGE_INDEX.csv: 594
- TOPIC_INDEX.csv: 78

## Notes
- SOURCE-FIRST presence/indexing only; no medical conclusions or SUPPORTED/KEEP/MODIFY/PASS/FAIL/CORRECT verdicts.
- Base HEAD left as UNKNOWN_UNTIL_SCM (not invented).
- No git push performed by synthesizer.

# COVERAGE_REPORT — ESUR Source Atlas v0.1

Machine-assisted presence/indexing report. This atlas is a **machine-assisted index pending independent sampling**.
No medical completeness claims are made.

| source_id | physical_pages (PDF) | ledger_rows | unique_phys_pages | PAGE COVERAGE | sections | numeric | recommendation-language | tables/figures (section index) | tables/figures (ledger ids) | unresolved locator issues |
|---|---:|---:|---:|---|---:|---:|---:|---:|---:|---|
| V10EN | 46 | 46 | 46 | PAGE COVERAGE COMPLETE | 70 | 260 | 136 | 3 | 0 | Printed page 1 absent; content footer starts at printed 2 on physical 3.; pdftotext Invalid Font Weight warnings (text generally usable).; Physical 45 NOTES / 46 back cover sparse. |
| V10DE | 29 | 29 | 29 | PAGE COVERAGE COMPLETE | 67 | 212 | 161 | 3 | 0 | Front matter phys 3–5 lack printed page numbers.; Two-up layout phys 6–28; column interleave possible in pdftotext -layout.; TOC C.8 label vs body ultrasound content inconsistency (indexed).; DE printed pages extend to 54–55 vs EN to 44. |
| BK25 | 46 | 46 | 46 | PAGE COVERAGE COMPLETE | 85 | 257 | 163 | 0 | 2 | Phys 1–2 covers required OCR (pdftotext empty).; Phys 46 decorative/near-blank: no usable text after OCR.; TOC vs body heading placement for NSF / risk classification (pp24–25).; Unicode bullet glyph fidelity not preserved in extracts. |
| P1 | 13 | 13 | 13 | PAGE COVERAGE COMPLETE | 20 | 161 | 63 | 7 | 7 | Phys 6 figure-dominant (Fig. 2); sparse body text.; Two-column Springer reading-order interleave on dense pages. |
| P2 | 15 | 15 | 15 | PAGE COVERAGE COMPLETE | 16 | 173 | 71 | 6 | 6 | Fig. 2 / Fig. 3 chemical-formula pages: text layer may under-represent labels.; Two-column Springer reading-order interleave on dense pages. |

## Totals
- PAGE_LEDGER rows: 149 (expected 149 = 75 V10 + 74 BK25/P)
- SECTION_INDEX rows: 258
- NUMERIC_INDEX rows: 1063
- RECOMMENDATION_LANGUAGE_INDEX rows: 594
- TOPIC_INDEX rows: 78 (V10 37 + BK25_P 41; deduped by source-native label)

## Method notes (indexing only)
- Text extraction: pdftotext/poppler (`-layout`) into `extracts/{V10EN,V10DE,BK25,P1,P2}/`.
- OCR: tesseract eng+deu used where pdftotext empty (BK25 phys 1, 2; attempted 46).
- V10DE layout: two printed pages per physical page from phys 6.
- Numeric index excludes bibliographic citation markers where filtered in prior pass.

## Explicit non-claims
- This is **not** a complete medical index.
- Do **not** interpret PAGE COVERAGE COMPLETE as “all recommendations captured” or “nothing missed”.
- Atlas remains machine-assisted and pending independent sampling.


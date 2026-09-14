# OPEN_QUESTIONS — ESUR Source Atlas v0.1

Merged presence/indexing questions from V10 and BK25/P passes, plus PASS E alignment anomalies.
**No medical resolution.**

## A. From V10 pass

Presence/indexing notes only. No medical resolution.

## Pagination anomalies

1. V10EN: Printed page 1 is not present in the PDF. Physical pages 1–2 are covers (version 10.0); content footer numbering begins at printed page 2 on physical page 3.
2. V10DE: Front matter physical pages 3–5 (Einleitung, Kurzanleitung, INHALT) have no visible printed page numbers in footers; content numbering begins at printed pages 10–11 on physical page 6.
3. V10DE: Two-up layout — each physical PDF page (6–28) shows two printed pages (even;odd). EN is one printed page per physical page.
4. V10DE: 29 physical pages vs V10EN 46 physical pages; DE printed page numbers extend to 54–55 vs EN to 44.
5. V10EN physical page 45 is a blank NOTES page (printed 44); physical page 46 is back cover (www.esur.org) with no printed page number.
6. V10DE physical page 29 back cover shows `esur.org` and code `86638177 / PP-CONT-DE-0005-1` without booklet printed page number.

## OCR / text extraction issues

7. V10EN: pdftotext emitted many `Invalid Font Weight` warnings; text generally usable. No full-page OCR was required.
8. V10EN physical pages 45–46 and V10DE physical page 29 are sparse but text-extractable (not empty image-only pages).
9. V10DE two-up columns sometimes interleave in pdftotext `-layout` output; left/right assignment of a given line can be ambiguous on dense pages (e.g. hydration protocols on phys 16).
10. V10EN page 20 hydration block has line-wrapped units (`3 ml/` + `kg/h`); indexing joined whitespace for capture.
11. Source typo retained in EN D.1 heading: `ALLGERGY` (as printed).
12. DE TOC contains typographical issues retained as-is (e.g. `gadoliuniumhaltige`, `iodiodhaltigem`).

## EN ↔ DE wording / structure / value presence differences (list only)

13. Section numbering differs: EN A.1.3 = Warming iodine-based contrast medium; DE A.1.3 = Dokumentation der akuten unerwünschten Wirkungen. Warming topic not found as identically numbered DE subsection in TOC.
14. EN A.1.2 = Management of acute adverse reactions; DE TOC A.1.2 labeled as acute reactions to gadolinium (non-organ-specific) with A.1.2.1–A.1.2.4 covering preparation/therapy — structural labeling mismatch vs EN.
15. DE TOC lists C.8 as `Weitere Aspekte bezüglich Gadolinium` (p.44) while physical page 23 body content presents ultrasound contrast safety statements typical of EN C.8; C.7 already covers further gadolinium aspects — TOC/body heading inconsistency to verify.
16. DE includes explicit A.1.2.4 `Überprüfung der Behandlungsprotokolle` and A.1.3 Dokumentation as separate TOC entries; EN folds related material into A.1.2 end / adjacent subsections.
17. EN terminology page is printed page 5 (shared with end of TOC); DE terminology is printed pages 10–11 after multi-page TOC.
18. Decimal comma vs point: DE uses forms such as `0,3 ml`, `0,15 mg`; EN uses `0.3 ml`, `0.15 mg` — same numeric loci, different source-native orthography.
19. EN preface states comments welcome at `esursecretary@esur.org`; DE Einleitung points to `www.esur.org` for comments/electronic versions.
20. DE back-cover product code `PP-CONT-DE-0005-1` has no EN counterpart on EN back cover.
21. Bibliography/appendix span differs: EN Appendix 1 on printed 40–42; DE Anhang 1 on printed ~51–53 with two-up packing.
22. Some questionnaire item wording and ordering may differ between EN D.2/D.3 and DE D.2/D.3 (presence indexing only; not compared clinically here).

## Indexing completeness notes

23. PAGE_LEDGER contains exactly 46 V10EN + 29 V10DE rows (one per physical PDF page).
24. No pages required tesseract OCR substitution of the primary extract; footer/header OCR crops were used only to confirm DE front-matter page-number absence.

## B. From BK25/P pass

Source-first presence/indexing questions only. No medical verdicts.

Total open questions: 15

## OQ-001
- source_id: BK25
- physical_pdf_page: 46
- printed_page_numbers: 
- question: Physical page 46 yields no usable text after pdftotext and multi-PSM OCR (eng+deu); appears decorative/near-blank. Confirm whether any logo/URL text should be indexed.
- evidence_pointer: OCR empty; ~14% non-white pixels but no readable OCR

## OQ-002
- source_id: BK25
- physical_pdf_page: 1
- printed_page_numbers: 
- question: Cover OCR reads "safety Committee" (lowercase s) on physical p1 vs "Safety Committee" on p2; likely OCR artifact—confirm native casing from image.
- evidence_pointer: extracts/BK25/page_001.txt

## OQ-003
- source_id: BK25
- physical_pdf_page: 8
- printed_page_numbers: 8
- question: Salbutamol nebulization dose printed as "2.5-5 µg diluted in 3 mL" in text layer; typical clinical nebulized doses are in mg—confirm whether booklet text layer / print uses µg or mg.
- evidence_pointer: page_008.txt acute management

## OQ-004
- source_id: BK25
- physical_pdf_page: 9
- printed_page_numbers: 9
- question: Typo presence: "condisdering discharge" on printed p9—index as source spelling; confirm if later errata exist (out of scope for web).
- evidence_pointer: page_009.txt

## OQ-005
- source_id: BK25
- physical_pdf_page: 22
- printed_page_numbers: 22
- question: GBCA successive waiting-times paragraph refers to clearance of "previously administered iodine-based contrast media" while section title is GBCA-to-GBCA—presence observation of wording inconsistency for later PASS.
- evidence_pointer: page_022.txt

## OQ-006
- source_id: BK25
- physical_pdf_page: 24
- printed_page_numbers: 24
- question: NSF section appears on printed p24 but TOC (printed pp4–5) lists "Risk classification..." under analytical interference block at p25 and does not list a standalone NSF heading at p24—TOC vs body heading alignment.
- evidence_pointer: page_004/005 TOC vs page_024

## OQ-007
- source_id: BK25
- physical_pdf_page: 15
- printed_page_numbers: 15
- question: TOC places "Risk classification of gadolinium-based contrast agents and recommendations" under Analytical interference (p25); body places NSF prevention at p24 then risk classification at p25—confirm intended hierarchy.
- evidence_pointer: TOC vs body

## OQ-008
- source_id: BK25
- physical_pdf_page: 38
- printed_page_numbers: 38
- question: ICM questionnaire page contains typo "Rememeber"; same on p40 GBCA questionnaire.
- evidence_pointer: page_038.txt; page_040.txt

## OQ-009
- source_id: BK25
- physical_pdf_page: 39
- printed_page_numbers: 39
- question: GBCA questionnaire typo "ogoing recurrent angioedema" (likely "ongoing").
- evidence_pointer: page_039.txt

## OQ-010
- source_id: P1
- physical_pdf_page: 6
- printed_page_numbers: 6803
- question: Physical p6 is figure-dominant (Fig. 2) with minimal extractable body text; therapy doses primarily recoverable from Fig. 2 caption / Table 3 elsewhere—confirm OCR need for figure internals.
- evidence_pointer: page_006.txt sparse

## OQ-011
- source_id: P2
- physical_pdf_page: 5
- printed_page_numbers: 6815
- question: Fig. 2 ICM chemical formulas page—text layer may under-represent structure labels; presence of figure noted; molecular labels may need visual review for numeric/index completeness.
- evidence_pointer: page_005.txt

## OQ-012
- source_id: P2
- physical_pdf_page: 6
- printed_page_numbers: 6816
- question: Fig. 3 GBCA chemical formulas page—same OCR/text-layer limitation as OQ-011.
- evidence_pointer: page_006.txt

## OQ-013
- source_id: BK25
- physical_pdf_page: multi
- printed_page_numbers: 
- question: Unicode right-to-left / special bullet glyphs (Arabic presentation forms) appear as "‫ ׇ‬" in pdftotext extracts—bullet presence confirmed; exact glyph fidelity not preserved.
- evidence_pointer: many BK25 pages

## OQ-014
- source_id: P1/P2
- physical_pdf_page: multi
- printed_page_numbers: 
- question: Two-column Springer layout causes reading-order interleaving in pdftotext -layout for some pages; section boundaries on dense pages may need column-aware re-parse for PASS B+.
- evidence_pointer: P1/P2 extracts

## OQ-015
- source_id: BK25
- physical_pdf_page: 3
- printed_page_numbers: 3
- question: Preface states guidelines updated annually and published electronically on ESUR webpage; no URL captured on that page beyond esursecretary@esur.org.
- evidence_pointer: page_003.txt

## C. PASS E alignment anomalies (new)

### AQ-001
- sources: V10EN; V10DE
- question: Section number collision — EN A.1.3 Warming vs DE A.1.3 Dokumentation; warming not identically numbered in DE TOC. Recorded in V10_EN_DE_ALIGNMENT; not resolved.
- evidence_pointer: V10EN-C1-014 vs V10DE-C1-015; V10 open item 13

### AQ-002
- sources: V10EN; V10DE
- question: EN A.1.2 single management heading vs DE A.1.2.1–A.1.2.4 split (including A.1.2.4 Behandlungsprotokolle). Structural labeling mismatch; presence only.
- evidence_pointer: V10EN-C1-010 vs V10DE-C1-011..014; V10 open item 14/16

### AQ-003
- sources: V10DE
- question: TOC lists C.8 as Weitere Aspekte bezüglich Gadolinium while body phys 23 presents ultrasound contrast safety (EN C.8 analogue); C.7 already covers further gadolinium aspects.
- evidence_pointer: V10DE-C1-055; V10 open item 15

### AQ-004
- sources: V10EN; V10DE
- question: Pagination model differs (1:1 vs two-up) so printed-page equality cannot be used as cross-language locator without physical-page mapping.
- evidence_pointer: PAGE_LEDGER V10EN/V10DE; V10 open items 1–4

### AQ-005
- sources: BK25; P1; P2
- question: Booklet HSR block is condensed relative to P1/P2 articles; many P1/P2 figures/tables lack identically titled booklet twins (and vice versa for booklet-only Nonvascular administration subsection). Alignment documents presence/absence only.
- evidence_pointer: BOOKLET_PART_ALIGNMENT.md H01–H14

### AQ-006
- sources: BK25; P2
- question: Premedication — BK25 “Emergency premedication protocol” vs P2 “Use of premedication”; titles differ in scope wording; not equated.
- evidence_pointer: BK25-HSR-020; P2-HSR-007

### AQ-007
- sources: BK25; P1
- question: Salbutamol nebulization unit in BK25 text layer (µg vs expected mg discussion) vs P1 therapy materials — unit string discrepancy remains open (BK25 OQ-003); no clinical adjudication.
- evidence_pointer: BK25 page_008.txt; P1 Fig. 2 / Table 3

### AQ-008
- sources: V10EN; V10DE
- question: Decimal/orthography differences (point vs comma; 1:1,000 vs 1:1.000) at shared dose loci — indexing captures both; not a content preference.
- evidence_pointer: V10_EN_DE_ALIGNMENT management/NSF/hydration rows

## Counts
- V10 open items (numbered): 24
- BK25/P OQ entries: 15
- PASS E alignment anomalies (AQ): 8
- **Total open-question entries: 47**


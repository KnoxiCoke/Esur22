# RUN_MANIFEST — extravasation (night audit evidence)

## Frozen baseline

| Field | Value |
| --- | --- |
| Repo full name | KnoxiCoke/Esur22 |
| Authoritative branch | refactor/modularize-script |
| Handoff HEAD | ce4aefd6e96f9f760999406715a1d437a47a9f89 |
| Resolved / frozen start HEAD | ce4aefd6e96f9f760999406715a1d437a47a9f89 (same as handoff — independently re-resolved 2026-09-14) |
| Frozen script.js blob SHA | 81d6e352cbdacdf0197df7a7c91cfb72569b83c1 |
| UTC start timestamp | 2026-09-14T21:50:16Z |
| Assigned card ID | extravasation |
| Bot output branch | bot/night-audit-2026-09-14-extravasation |

## Authorized PDF inputs (workspace filenames + SHA-256)

| # | Workspace filename | SHA-256 | Identity note |
| --- | --- | --- | --- |
| 1 | ESUR-Guidelines-10_0-Final-Version-1.pdf | d86b45ac84439647f9fbeba497b7ac26d267b20dcc61e17c2a3944dbeca1674c | English ESUR Guidelines Version 10.0 |
| 2 | ESUR-V0-Deutsch.pdf | 385fe918fe6217ba104e98e83bd1279c161b852c5d355d4ca9c9d2a35c52574b | German ESUR Guidelines Version 10.0 (small booklet; often two printed pages per physical PDF page) |
| 3 | Guidelines-2025-ESUR-vf.pdf | c86b067ff1bf598f56b53abc391cb619c47f2d300bfad634a86e1777b762aea0 | CMSC Contrast Media Safety Committee Guidelines 2025 / Contrast Agent Guidelines 2025 (preface dated November 2025); A4 booklet |
| 4 | 330_2025_Article_11675.pdf | d80e8fa294eb1f303b4508f3dc404a0e36a97cba613eeaf8a55ea58d237b7bf3 | European Radiology (2025) 35:6798–6810 — Hypersensitivity Part 1 |
| 5 | 330_2025_Article_11676.pdf | 19f9c8bfdb887308c585629aa7be763c235eef01c524035e8b23378cac947b0c | European Radiology (2025) 35:6811–6825 — Hypersensitivity Part 2 |

### Identity notes

- PDF SHA-256 values above were re-checked on this run against `/workspace/esur-audit/pdfs/` and matched the frozen handoff list.
- Card extracts used for this packet: `/workspace/esur-audit/out/card_extravasation_en.js` and `/workspace/esur-audit/out/card_extravasation_de.js`.
- Part 1 and Part 2 are hypersensitivity papers; no extravasation-topic candidate passages were located in either (absence recorded in `SOURCE_PACKET.md`).
- German V10 is two-up: one physical PDF page commonly carries two printed page numbers (footer shows both).

## Files created by this run

1. `audits/night/extravasation/RUN_MANIFEST.md`
2. `audits/night/extravasation/SOURCE_PACKET.md`
3. `audits/night/extravasation/CLAIM_INVENTORY.md`
4. `audits/night/extravasation/OPEN_QUESTIONS.md`

## Scope note

Evidence assembly only. No medical conclusions. No edits to existing repository source files. No git push.

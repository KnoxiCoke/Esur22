# SOURCE_PACKET — laboratory_interference

Evidence packet only. Candidate passages are presence records with locators; wording is identifying description, not a synthesis of recommendations.

---

## 1. Complete current EN card object (`card_en.js`)

```js
{
        id: "laboratory_interference",
        level: "high",
        icon: "lab",
        title: "Analytical interference with laboratory tests",
        summary:
          "2025 makes laboratory interference a distinct practice block with clearer eGFR-based timing for blood and urine collection.",
        keywords: [
          "laboratory",
          "blood",
          "urine",
          "interference",
          "analytical",
          "timing",
          "post contrast"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "The 2018 guideline discussed interaction with other drugs and clinical tests, but the advice was more general: collect blood and urine before contrast whenever possible and delay post-contrast testing, especially in renal impairment."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "The 2025 guidance presents laboratory interference as its own section and gives clearer timing recommendations after intravascular iodine- or gadolinium-based contrast administration."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "This turns an older cautionary topic into a more usable timing framework for everyday blood and urine collection after contrast studies."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR 10.0 guideline",
            "Source: ESUR 2025 laboratory-interference guidance"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 action points",
              bullets: [
                "For blood collection after intravascular contrast: eGFR >60: minimum 4 h, optimal 12 h.",
                "For blood collection after intravascular contrast: eGFR 30–60: minimum 16 h, optimal 48 h.",
                "For blood collection after intravascular contrast: eGFR <30: minimum 60 h, optimal 168 h.",
                "For urine collection after intravascular contrast: eGFR >60: minimum 24 h; eGFR 30–60: minimum 48 h; eGFR <30: minimum 7 days."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "The 2025 document gives a much more explicit practice framework than the older “delay if possible” approach."
              ]
            }
          ],
          refs: [
            "Source: ESUR 2025 laboratory-interference guidance",
            "Source: ESUR 10.0 guideline"
          ]
        }
      }
```

---

## 2. Complete current DE card object (`card_de.js`)

```js
{
        id: "laboratory_interference",
        level: "high",
        icon: "lab",
        title: "Analytische Interferenz mit Labortests",
        summary:
          "2025 wird Laborinterferenz zu einem eigenen Praxisblock mit klareren eGFR-basierten Zeitangaben für Blut- und Urinsammlung.",
        keywords: [
          "labor",
          "blut",
          "urin",
          "interferenz",
          "analytisch",
          "timing",
          "nach kontrastmittel"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Die 2018er Guideline behandelte Wechselwirkungen mit anderen Medikamenten und klinischen Tests, aber deutlich allgemeiner: Blut und Urin nach Möglichkeit vor Kontrastmittelgabe abnehmen und Nachkontrollen insbesondere bei Niereninsuffizienz hinauszögern."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Die 2025er Guidance führt Laborinterferenz als eigenen Abschnitt und gibt klarere Zeitangaben nach intravaskulärer Gabe iodhaltiger oder gadoliniumhaltiger Kontrastmittel."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Aus einem älteren Vorsichtsthema wird ein deutlich praktikableres Timing-Schema für Blut- und Urinabnahmen nach Kontrastmitteluntersuchungen."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR 10.0 Guideline",
            "Quelle: ESUR 2025 Laborinterferenz-Guidance"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR-2025-Kernaussagen",
              bullets: [
                "Für Blutentnahmen nach intravaskulärem Kontrastmittel: eGFR >60: Minimum 4 h, optimal 12 h.",
                "Für Blutentnahmen nach intravaskulärem Kontrastmittel: eGFR 30–60: Minimum 16 h, optimal 48 h.",
                "Für Blutentnahmen nach intravaskulärem Kontrastmittel: eGFR <30: Minimum 60 h, optimal 168 h.",
                "Für Urinentnahmen nach intravaskulärem Kontrastmittel: eGFR >60: Minimum 24 h; eGFR 30–60: Minimum 48 h; eGFR <30: Minimum 7 Tage."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Die 2025er Guidance ist hier viel klarer und praxisnäher als der ältere Ansatz „wenn möglich verzögern“."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR 2025 Laborinterferenz-Guidance",
            "Quelle: ESUR 10.0 Guideline"
          ]
        }
      }
```

---

## 3. Candidate passages by source

Locator rule: when printed page and physical PDF page differ, both are recorded. German V10.0 is a small booklet with two printed pages on one physical PDF page (footer shows both printed numbers).

### 3.1 English V10 — `ESUR-Guidelines-10_0-Final-Version-1.pdf`

#### CAND-EN-V10-001 — TOC entry for C.6

| Field | Value |
| --- | --- |
| Source file | ESUR-Guidelines-10_0-Final-Version-1.pdf |
| Printed page | 5 (TOC page body; section target listed as printed page 30) |
| Physical PDF page | 6 |
| Section / subsection | Contents → C. MISCELLANEOUS → C.6. INTERACTION WITH OTHER DRUGS AND CLINICAL TESTS |
| Table / figure | none |
| Identifying wording | TOC line: “C.6. INTERACTION WITH OTHER DRUGS AND CLINICAL TESTS 30” |

#### CAND-EN-V10-002 — Non-emergency biochemical assays (blood/urine timing)

| Field | Value |
| --- | --- |
| Source file | ESUR-Guidelines-10_0-Final-Version-1.pdf |
| Printed page | 30 |
| Physical PDF page | 31 |
| Section / subsection | C.6. INTERACTION WITH OTHER DRUGS AND CLINICAL TESTS → Non-emergency biochemical assays → Recommendation |
| Table / figure | none (bullet list) |
| Identifying wording | “Preferably collect urine and blood before administration of a contrast agent.” / “In patients with normal renal function, blood can be collected 4 hours after contrast agent administration if necessary.” / “In patients with reduced renal function (eGFR < 45 ml/min/1.73 m2), blood collection should be delayed for as long as possible after contrast agent administration.” / “Urine collection should not be done within 24 hours of administration of a contrast agent.” / “The effects of the contrast agents on the analyses may differ dependent on which analytic method is used.” |

#### CAND-EN-V10-003 — Bibliographic citation (interaction topic)

| Field | Value |
| --- | --- |
| Source file | ESUR-Guidelines-10_0-Final-Version-1.pdf |
| Printed page | 40 (Appendix publications list area; footer context on physical page) |
| Physical PDF page | 42 |
| Section / subsection | Appendix 1. Publications from the ESUR Contrast Media Safety Committee |
| Table / figure | none |
| Identifying wording | Morcos SK et al. “Contrast media: interaction with other drugs and clinical tests. Eur Radiol 2005; 15: 1463–1468.” |

---

### 3.2 German V10 — `ESUR-V0-Deutsch.pdf`

Note: physical PDF page 21 is a two-up spread: left printed page **40**, right printed page **41** (footer: “40 … Verschiedenes … Verschiedenes 41”).

#### CAND-DE-V10-001 — TOC entry for C.6

| Field | Value |
| --- | --- |
| Source file | ESUR-V0-Deutsch.pdf |
| Printed page | Contents page listing target printed page 40 |
| Physical PDF page | 5 |
| Section / subsection | INHALT → C. Verschiedenes → C.6. Wechselwirkungen mit anderen Wirkstoffen und klinischen Tests |
| Table / figure | none |
| Identifying wording | TOC: “C.6. Wechselwirkungen mit anderen Wirkstoffen und klinischen Tests” with page reference **40** |

#### CAND-DE-V10-002 — C.6 header and general recommendations (left column of spread)

| Field | Value |
| --- | --- |
| Source file | ESUR-V0-Deutsch.pdf |
| Printed page | 40 |
| Physical PDF page | 21 |
| Section / subsection | C.6. Wechselwirkungen mit anderen Wirkstoffen und klinischen Tests → Generelle Empfehlungen / Wirkstoffe, die besonders beachtet werden müssen |
| Table / figure | none |
| Identifying wording | Section title “Wechselwirkungen mit anderen Wirkstoffen und klinischen Tests”; general points on drug history, documentation of contrast administration, not mixing contrast with other drugs in tubes/syringes; metformin / nephrotoxic drugs / β-blocker / interleukin-2 cross-references |

#### CAND-DE-V10-003 — Laborchemische Proben in der Routinediagnostik (right column of spread)

| Field | Value |
| --- | --- |
| Source file | ESUR-V0-Deutsch.pdf |
| Printed page | 41 |
| Physical PDF page | 21 |
| Section / subsection | Laborchemische Proben in der Routinediagnostik → Empfehlung (appears on the same physical page as C.6, right printed page) |
| Table / figure | none (bullet list) |
| Identifying wording | “Vorzugsweise Urin- und Blutproben vor Administration eines Kontrastmittels abnehmen” / “Bei Patienten mit normaler Nierenfunktion kann bei Bedarf 4 Stunden nach Kontrastmittelgabe eine Blutentnahme erfolgen.” / “Bei Patienten mit reduzierter Nierenfunktion (eGFR < 45 ml/min/1,73 m2) sollten Blutentnahmen so lange wie möglich nach Kontrastmittelgabe hinausgezögert werden.” / “Sammelurin sollte für 24 Stunden unterbleiben.” / “Die Effekte eines Kontrastmittels auf die Laborauswertungen können je nach Auswertmethode differieren.” |

---

### 3.3 2025 Booklet — `Guidelines-2025-ESUR-vf.pdf`

Identity: CMSC Contrast Media Safety Committee Guidelines 2025 / Contrast Agent Guidelines 2025 (preface November 2025).

#### CAND-2025-BK-001 — Preface mention of analytical interference

| Field | Value |
| --- | --- |
| Source file | Guidelines-2025-ESUR-vf.pdf |
| Printed page | 3 |
| Physical PDF page | 3 |
| Section / subsection | Preface |
| Table / figure | none |
| Identifying wording | Preface lists inclusions including “analytical interference of contrast agents with lab tests” among updated 2025 topics; notes that the booklet summarizes key recommendations and points readers to original ESUR CMSC guideline publication(s). |

#### CAND-2025-BK-002 — Contents entries for analytical interference / delays

| Field | Value |
| --- | --- |
| Source file | Guidelines-2025-ESUR-vf.pdf |
| Printed page | 4 |
| Physical PDF page | 4 |
| Section / subsection | Contents |
| Table / figure | none |
| Identifying wording | “Analytical interference of intravascular contrast agents with clinical laboratory tests. …… 23”; “Recommended delay in blood collection after administration of contrast agents: …… 23”; “Recommended delay in urine collection after administration of contrast agents: …… 23” |

#### CAND-2025-BK-003 — Analytical interference section (blood and urine delay bands)

| Field | Value |
| --- | --- |
| Source file | Guidelines-2025-ESUR-vf.pdf |
| Printed page | 23 |
| Physical PDF page | 23 |
| Section / subsection | Analytical interference of intravascular contrast agents with clinical laboratory tests → Recommended delay in blood collection … / Recommended delay in urine collection … |
| Table / figure | none (banded eGFR lists) |
| Identifying wording | Opening: radiological contrast agents “including iodine- and gadolinium-based compounds, can interfere with commonly used laboratory tests”; CMSC “expert consensus guidance on the timing and use of blood and urine analyses after imaging with contrast agents.” Blood: eGFR > 60 — “At least 4h and optimally 12h”; eGFR 30–60 — “At least 16h and optimally 48h”; eGFR < 30 — “At least 2.5 days (60h) and optimally 7 days (168h)”. Urine: eGFR > 60 — “At least 24h”; eGFR 30–60 — “At least 48h”; eGFR < 30 — “At least 7 days (168h)”. |

#### CAND-2025-BK-004 — Adjacent successive-injection waiting times (same numeric bands; different topic)

| Field | Value |
| --- | --- |
| Source file | Guidelines-2025-ESUR-vf.pdf |
| Printed page | 21–23 |
| Physical PDF page | 21–23 |
| Section / subsection | Safe time intervals between contrast agent injections (successive iodine-/gadolinium-based administrations; waiting times between two iodine-based / two gadolinium-based injections) |
| Table / figure | none |
| Identifying wording | Waiting times between successive contrast administrations by eGFR bands using values such as optimally 12 h / minimally 4 h; optimally 48 h / minimally 16 h; optimally 7 days (168h) / minimally 2.5 days (60h). **Topic is successive contrast injections, not blood/urine specimen collection.** Recorded because numeric/eGFR banding overlaps with laboratory-interference delay figures on printed page 23. |

#### CAND-2025-BK-005 — Bibliographic citations to joint analytical-interference guideline

| Field | Value |
| --- | --- |
| Source file | Guidelines-2025-ESUR-vf.pdf |
| Printed page | 42 |
| Physical PDF page | 42 |
| Section / subsection | Appendix / publications list (Stacul & Clement citations) |
| Table / figure | none |
| Identifying wording | Stacul F, Clement O … “Analytical interference of intravascular contrast agents with clinical laboratory tests: a joint guideline by the ESUR Contrast Media Safety Committee and the Preanalytical Phase Working Group of the EFLM Science Committee. Eur Radiol 2024; 34: 4821–4827.” and parallel citation “Clin Chem Lab Med 2024; 62: 608–614.” (full joint papers are outside the five authorized PDFs attached for this run). |

---

### 3.4 Part 1 — `330_2025_Article_11675.pdf`

| Field | Value |
| --- | --- |
| Source file | 330_2025_Article_11675.pdf |
| Printed page range (journal) | European Radiology (2025) 35:6798–6810 |
| Physical PDF pages | 1–13 |
| Section / subsection | Full article scope: hypersensitivity management (immediate / non-immediate) |
| Candidate laboratory-interference / blood-urine post-contrast analytical timing passages | **None located.** Text search for analytical interference, laboratory-test interference, blood/urine collection delay after contrast for analytical reasons returned no matches. Occurrences of “blood” relate to tryptase/histamine sampling for hypersensitivity work-up, vital signs, or scheduling “daytime hours,” not laboratory analytical interference timing. |

---

### 3.5 Part 2 — `330_2025_Article_11676.pdf`

| Field | Value |
| --- | --- |
| Source file | 330_2025_Article_11676.pdf |
| Printed page range (journal) | European Radiology (2025) 35:6811–6825 |
| Physical PDF pages | 1–15 |
| Section / subsection | Full article scope: prevention of recurrent hypersensitivity reactions |
| Candidate laboratory-interference / blood-urine post-contrast analytical timing passages | **None located.** Text search for analytical interference, laboratory-test interference, blood/urine collection delay after contrast for analytical reasons returned no matches. “Interfere” appears in an immune-modulatory / LTT context, not clinical chemistry specimen timing. Tryptase timing (1–4 h / ≥24 h after symptom resolution) is hypersensitivity documentation, not analytical interference with routine labs. |

---

## 4. Neutral cross-source observation notes (no governing choice)

### 4.1 2018 EN ↔ DE (Version 10.0 sources inspected independently)

| Observation theme | EN V10 locator | DE V10 locator | Neutral difference description |
| --- | --- | --- | --- |
| Section title / framing | C.6 “INTERACTION WITH OTHER DRUGS AND CLINICAL TESTS” (printed 30 / physical 31) | C.6 “Wechselwirkungen mit anderen Wirkstoffen und klinischen Tests” (printed 40 / physical 21 left) plus heading “Laborchemische Proben in der Routinediagnostik” (printed 41 / physical 21 right) | DE places biochemical-sample text under an explicit “Laborchemische Proben…” heading on the facing printed page; EN nests under “Non-emergency biochemical assays” within C.6. |
| Prefer collection before contrast | “Preferably collect urine and blood before administration of a contrast agent.” | “Vorzugsweise Urin- und Blutproben vor Administration eines Kontrastmittels abnehmen” | Parallel preference for pre-contrast sampling. |
| Blood timing — normal renal function | “normal renal function … blood can be collected 4 hours after …” | “normaler Nierenfunktion … bei Bedarf 4 Stunden nach … Blutentnahme” | Same 4-hour figure; DE adds “bei Bedarf” (if needed). |
| Blood timing — reduced renal function | eGFR **< 45** ml/min/1.73 m²; delay “as long as possible” | eGFR **< 45** ml/min/1,73 m²; “so lange wie möglich … hinausgezögert” | Same eGFR threshold and open-ended delay language; no 30–60 / >60 / <30 bands in either V10 biochemical-assay block. |
| Urine timing wording | “Urine collection should not be done within 24 hours …” | “Sammelurin sollte für 24 Stunden unterbleiben.” | Terminology/scope difference: EN “urine collection”; DE “Sammelurin” (timed/collection urine). Verb framing differs (not within 24 h vs unterbleiben for 24 h). |
| Analytic method dependence | Present in EN | Present in DE (“Auswertmethode”) | Parallel presence. |
| Intravascular / iodine / gadolinium specification in biochemical-assay bullets | Biochemical bullets say “contrast agent” without iodine/gadolinium or intravascular qualifier in that subsection | Same — “Kontrastmittel” without iodine/gadolinium or intravascular qualifier in the laboratory-sample bullets | Scope wording in V10 laboratory bullets is general “contrast agent/Kontrastmittel.” |

### 4.2 2025 Booklet ↔ Part 1 ↔ Part 2 (inspected separately)

| Source | Laboratory / analytical interference timing content | Notes |
| --- | --- | --- |
| 2025 Booklet | Present as dedicated section on printed/physical page 23 with eGFR-banded blood and urine delays; preface and TOC also list the topic; references cite 2024 joint guideline papers not among the five attached PDFs | Also contains successive-injection waiting-time section (pp. 21–23) with overlapping numeric bands but different clinical topic |
| Part 1 (11675) | No candidate laboratory-interference timing passages located | Hypersensitivity management paper |
| Part 2 (11676) | No candidate laboratory-interference timing passages located | Recurrent hypersensitivity prevention paper |

Unresolved differences and missing locators are listed in `OPEN_QUESTIONS.md` without resolution.

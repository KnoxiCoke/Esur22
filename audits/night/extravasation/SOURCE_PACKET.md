# SOURCE_PACKET — extravasation

Evidence packet only. Candidate passages are presence records with locators; wording is identifying description, not a synthesis of recommendations.

---

## 1. Complete current EN card object (`card_extravasation_en.js`)

```js
{
        id: "extravasation",
        level: "high",
        icon: "extravasation",
        title: "Extravasation",
        summary:
          "2025 is much more operational here, with severity framing, clearer prevention, structured detection, and escalation criteria.",
        keywords: [
          "extravasation",
          "contrast leak",
          "severity",
          "mild moderate severe",
          "150 mL",
          "surgical opinion"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Extravasation was already addressed in 2018, but with a simpler management frame and less detailed separation of risk factors, recognition steps, and escalation pathways."
              ]
            },
            {
              label: "2025",
              bullets: [
                "Uses a clearer mild / moderate / severe framing.",
                "Separates technique-related and patient-related risk factors.",
                "Expands prevention, detection, documentation, follow-up, and escalation.",
                "Specifically addresses radiographic documentation in moderate / severe cases and surgical input for severe injury concerns."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "The 2025 approach is less dependent on local habit and more like an operational pathway."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR 10.0 guideline",
            "Source: ESUR 2025 extravasation guidance"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 action points",
              bullets: [
                "Use a structured mild / moderate / severe framework rather than treating all extravasations as one category.",
                "Consider technique-related and patient-related risk factors separately.",
                "For moderate / severe cases, radiographic documentation is described.",
                "If severe injury is suspected, surgical assessment is described; a surgical opinion is also described for extravasation volumes >150 mL."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "Compared with 2018, this section is far more explicit about prevention, recognition, documentation, and escalation."
              ]
            }
          ],
          refs: [
            "Source: ESUR 2025 extravasation guidance",
            "Source: ESUR 10.0 guideline"
          ]
        }
      }
```

---

## 2. Complete current DE card object (`card_extravasation_de.js`)

```js
{
        id: "extravasation",
        level: "high",
        icon: "extravasation",
        title: "Extravasation",
        summary:
          "2025 wird dieser Bereich viel operativer: Severity-Framing, klarere Prävention, strukturierte Erkennung und definiertere Eskalationskriterien.",
        keywords: [
          "extravasation",
          "kontrastmittelaustritt",
          "schweregrad",
          "mild moderat schwer",
          "150 mL",
          "chirurgische beurteilung"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Extravasation wurde bereits 2018 behandelt, aber mit einfacherem Management-Rahmen und weniger detaillierter Trennung von Risikofaktoren, Erkennungsschritten und Eskalationswegen."
              ]
            },
            {
              label: "2025",
              bullets: [
                "Klarere Einteilung in mild / moderat / schwer.",
                "Trennung zwischen technikbezogenen und patientenbezogenen Risikofaktoren.",
                "Deutlich mehr Details zu Prävention, Erkennung, Dokumentation, Follow-up und Eskalation.",
                "Explizite radiographische Dokumentation bei moderaten / schweren Fällen sowie chirurgischer Input bei Verdacht auf schwere Verletzung."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Der 2025er Ansatz ist weniger von lokaler Gewohnheit abhängig und stärker wie ein operativer Pathway aufgebaut."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR 10.0 Guideline",
            "Quelle: ESUR 2025 Extravasations-Guidance"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR-2025-Kernaussagen",
              bullets: [
                "Es sollte ein strukturiertes mild / moderat / schwer-Schema verwendet werden, statt alle Extravasationen als eine Kategorie zu behandeln.",
                "Technikbezogene und patientenbezogene Risikofaktoren sollten getrennt betrachtet werden.",
                "Für moderate / schwere Fälle wird radiographische Dokumentation beschrieben.",
                "Bei Verdacht auf schwere Verletzung wird chirurgische Beurteilung beschrieben; zusätzlich wird eine chirurgische Beurteilung bei >150 mL beschrieben."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Im Vergleich zu 2018 ist dieser Abschnitt deutlich expliziter in Prävention, Erkennung, Dokumentation und Eskalation."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR 2025 Extravasations-Guidance",
            "Quelle: ESUR 10.0 Guideline"
          ]
        }
      }
```

---

## 3. Candidate passages by source

Locator rule: when printed page and physical PDF page differ, both are recorded. German V10.0 is a small booklet with two printed pages on one physical PDF page (footer shows both printed numbers). Page mapping checked with `pdftotext -f N -l N -layout`.

Topic search keys used across sources (presence scan): extravasation / contrast extravasation / Kontrastmittel-Extravasat(e) / mild·moderate·severe / severity classification / technique-related and patient-related risk factors / prevention / detection·recognition / documentation·radiographic documentation / follow-up / escalation / severe injury / compartment syndrome / ulceration / tissue injury / surgical assessment·opinion·surgeon / volume·>150 mL·150 mL / conservative management / limb elevation / cooling·cold compress·ice packs / aspiration / cannula·IV access.

---

### 3.1 English V10 — `ESUR-Guidelines-10_0-Final-Version-1.pdf`

#### CAND-EN-V10-001 — TOC entry for C.1

| Field | Value |
| --- | --- |
| Source file | ESUR-Guidelines-10_0-Final-Version-1.pdf |
| Printed page | 5 (TOC page body; section target listed as printed page 26) |
| Physical PDF page | 6 |
| Section / subsection | Contents → C. MISCELLANEOUS → C.1. CONTRAST MEDIUM EXTRAVASATION |
| Table / figure | none |
| Identifying wording | TOC line: “C.1. CONTRAST MEDIUM EXTRAVASATION 26” |

#### CAND-EN-V10-002 — C.1 body (injuries, risk factors, risk reduction, management)

| Field | Value |
| --- | --- |
| Source file | ESUR-Guidelines-10_0-Final-Version-1.pdf |
| Printed page | 26 |
| Physical PDF page | 27 |
| Section / subsection | C.1. CONTRAST MEDIUM EXTRAVASATION → Type of injuries; RISK FACTORS (Technique-related / Patient-related); To reduce the risk; Management |
| Table / figure | none (structured bullet lists) |
| Identifying wording | “Most injuries are minor.” / “Severe injuries include skin ulceration, soft-tissue necrosis, and compartment syndrome.” / Technique-related: power injector; less optimal injection sites (lower limb, small distal veins); large volume; high-osmolar; high-viscosity. / Patient-related: inability to communicate; fragile or damaged veins; arterial insufficiency; compromised lymphatic and/or venous drainage; obesity. / To reduce the risk: meticulous IV technique with appropriate sized plastic cannula in a suitable vein; cannulas with sideholes; saline test injection; non-ionic iodine-based contrast medium. / Management: documenting with plain radiograph, CT, or MR of the affected region may be helpful; conservative management adequate in most cases (limb elevation; ice packs; careful monitoring); if a serious injury is suspected, seek the advice of a surgeon. |

#### CAND-EN-V10-003 — Warming subsection mentioning extravasation risk

| Field | Value |
| --- | --- |
| Source file | ESUR-Guidelines-10_0-Final-Version-1.pdf |
| Printed page | 11 |
| Physical PDF page | 12 |
| Section / subsection | A.1.3. Warming iodine-based contrast medium before administration |
| Table / figure | none |
| Identifying wording | “Reduces viscosity and may reduce the risk of contrast medium extravasation.” |

#### CAND-EN-V10-004 — Appendix bibliographic citation (extravasation injury guideline)

| Field | Value |
| --- | --- |
| Source file | ESUR-Guidelines-10_0-Final-Version-1.pdf |
| Printed page | 40 |
| Physical PDF page | 41 |
| Section / subsection | E. APPENDIX → Appendix 1. Publications from the ESUR Contrast Media Safety Committee |
| Table / figure | none |
| Identifying wording | “Contrast medium extravasation injury: guidelines for prevention and management. Eur Radiol 2002; 12: …” (Bellin / ESUR CMSC line in publications list) |

#### CAND-EN-V10-005 — Front-matter topic list mention

| Field | Value |
| --- | --- |
| Source file | ESUR-Guidelines-10_0-Final-Version-1.pdf |
| Printed page | early front matter (topic bullet list near preface/intro area in extract) |
| Physical PDF page | see extract front-matter chunk listing “Contrast medium extravasation.” |
| Section / subsection | Introductory topic list |
| Table / figure | none |
| Identifying wording | Bullet: “Contrast medium extravasation.” |

---

### 3.2 German V10 — `ESUR-V0-Deutsch.pdf`

Note: physical PDF page 19 is a two-up spread: left printed page **36**, right printed page **37** (footer: “36 … Verschiedenes … Verschiedenes 37”). C.1 occupies the left printed page.

#### CAND-DE-V10-001 — TOC entry for C.1

| Field | Value |
| --- | --- |
| Source file | ESUR-V0-Deutsch.pdf |
| Printed page | Contents listing target printed page **36** |
| Physical PDF page | 5 |
| Section / subsection | INHALT → C. Verschiedenes → C.1. Kontrastmittel-Extravasate |
| Table / figure | none |
| Identifying wording | TOC: “C.1. Kontrastmittel-Extravasate” with page reference **36** |

#### CAND-DE-V10-002 — C.1 body (Schäden, Risikofaktoren, Risikoreduktion, Behandlung)

| Field | Value |
| --- | --- |
| Source file | ESUR-V0-Deutsch.pdf |
| Printed page | 36 |
| Physical PDF page | 19 |
| Section / subsection | C.1. Kontrastmittel-Extravasate → Art der Schäden; Risikofaktoren (Von technischer Seite / Von Patientenseite); Risikoreduktion; Behandlung |
| Table / figure | none (structured bullet lists; two-up layout shares physical page with C.2 start on printed 37) |
| Identifying wording | “Die meisten Schäden sind gering.” / “Schwere Schäden beinhalten Hautulzerationen, Weichteilnekrosen und Kompartmentsyndrom.” / Von technischer Seite: Power-Injektor; schwierige Injektionslokalisationen (untere Extremität oder kleine distale Venen); hohes Volumen; hoch-osmolar; hoch-viskös (printed form “Hoch-visköses Röntgenontrastmittel”). / Von Patientenseite: Kommunikationsschwierigkeiten; brüchige oder vorgeschädigte Venen; arterielle Insuffizienz; eingeschränkte lymphatische und/oder venöse Drainage; Adipositas. / Risikoreduktion: sorgfältige intravenöse Techniken; ausreichende Kanülengröße; Kanülen mit Seitenöffnungen; Testinjektion mit Kochsalzlösung; nicht-ionische iodhaltige Röntgenkontrastmittel. / Behandlung: Dokumentation durch Röntgenbild, CT oder MRT der betroffenen Region kann hilfreich sein; meist konservative Behandlung (Hochlagern der Extremitäten; Eispackungen; sorgfältige Überwachung); bei Verdacht auf schwere Schäden chirurgische Vorstellung. |

#### CAND-DE-V10-003 — Viscosity / extravasation-risk bullets under heading labeled A.1.3

| Field | Value |
| --- | --- |
| Source file | ESUR-V0-Deutsch.pdf |
| Printed page | 18 |
| Physical PDF page | 10 |
| Section / subsection | Heading printed as “A.1.3. Dokumentation der akuten unerwünschten Wirkungen” with bullet body matching warming / viscosity / extravasation-risk themes; adjacent right column (printed 19) carries orphaned “Gilt gegenwärtig als Best Practice.” then A.1.4 / A.1.5 |
| Table / figure | none |
| Identifying wording | “Durch Reduktion der Viskosität könnte sich das Risiko einer Röntgenkontrastmittel-Extravasation verringern.” (Heading text on this locus differs from English V10 A.1.3 title “Warming iodine-based contrast medium before administration”; recorded as layout/heading observation only.) |

#### CAND-DE-V10-004 — Appendix bibliographic citation (extravasation injury guideline)

| Field | Value |
| --- | --- |
| Source file | ESUR-V0-Deutsch.pdf |
| Printed page | 50–51 (two-up footer on physical page) |
| Physical PDF page | 26 |
| Section / subsection | E. Anhang / publications list area |
| Table / figure | none |
| Identifying wording | “Contrast medium extravasation injury: guidelines for prevention and management. Eur Radiol 2002; 12: 2807–2812.” |

#### CAND-DE-V10-005 — Front-matter / intro topic list mention

| Field | Value |
| --- | --- |
| Source file | ESUR-V0-Deutsch.pdf |
| Printed page | early front-matter topic list |
| Physical PDF page | front-matter chunk listing “Röntgenkontrastmittel-Extravasate” |
| Section / subsection | Introductory topic list |
| Table / figure | none |
| Identifying wording | Bullet: “Röntgenkontrastmittel-Extravasate” |

---

### 3.3 2025 Booklet — `Guidelines-2025-ESUR-vf.pdf`

Identity: CMSC Contrast Media Safety Committee Guidelines 2025 / Contrast Agent Guidelines 2025 (preface November 2025). Printed page numbers on body pages match physical PDF page numbers for the extravasation and warming loci below.

#### CAND-2025-BK-001 — Preface mention of extravasation

| Field | Value |
| --- | --- |
| Source file | Guidelines-2025-ESUR-vf.pdf |
| Printed page | 2 |
| Physical PDF page | 2 |
| Section / subsection | Preface |
| Table / figure | none |
| Identifying wording | Preface lists inclusions covering “agent hypersensitivity and extravasation as well as recommended waiting times between …” |

#### CAND-2025-BK-002 — Contents entry

| Field | Value |
| --- | --- |
| Source file | Guidelines-2025-ESUR-vf.pdf |
| Printed page | 4 |
| Physical PDF page | 4 |
| Section / subsection | Contents |
| Table / figure | none |
| Identifying wording | “Management and prevention of contrast agent extravasation. …… 20” |

#### CAND-2025-BK-003 — Extravasation section page 20 (definition, injuries, risk factors, prevention, recognition start, mild/moderate)

| Field | Value |
| --- | --- |
| Source file | Guidelines-2025-ESUR-vf.pdf |
| Printed page | 20 |
| Physical PDF page | 20 |
| Section / subsection | Management and prevention of contrast agent extravasation → Type of injuries; Risk factors (Technique-related / Patient-related); To reduce the risk; Recognition and diagnosis (Mild / Moderate definitions begin) |
| Table / figure | none (bulleted lists) |
| Identifying wording | Opening: “Contrast extravasation is the commonest adverse event in radiological practise …” leakage of intravenously administered iodine- or gadolinium-based agents into surrounding soft tissues. / Injuries: most minor (swelling, discomfort); severe include skin ulceration, soft-tissue necrosis, compartment syndrome. / Technique-related: less optimal injection sites (lower limb, small distal veins); large volume; high-viscosity. / Patient-related: inability to communicate; fragile or damaged veins; compromised lymphatic and/or venous drainage; obesity. / To reduce the risk: meticulous cannula insertion (appropriate size upper arm vein preferred); appropriately sized cannula for vein and flow rate; saline test injection; warming of iodine-based contrast especially high viscosity; minimising volume; flow rates and pressures appropriate to the specific catheter (esp. central venous catheters); observation-based detection phrasing. / Recognition: instruct patient to report pain or swelling; observe during and after injection; palpate cannula site; watch injector alerts and enhancement. / Mild: minor erythema or swelling, no skin changes. / Moderate: skin blistering, progressive oedema and/or ulceration; close monitoring; physician assessment advised for neurovascular compromise (peripheral pulse and sensation distal in affected limb). |

#### CAND-2025-BK-004 — Extravasation section page 21 (severe class, management, radiographic documentation, follow-up, surgeon / >150 ml)

| Field | Value |
| --- | --- |
| Source file | Guidelines-2025-ESUR-vf.pdf |
| Printed page | 21 |
| Physical PDF page | 21 |
| Section / subsection | Continuation of Recognition and diagnosis (Severe); Management → Conservative; Involving a surgeon |
| Table / figure | none |
| Identifying wording | Severe: any neurovascular compromise, signs of tissue necrosis or compartment syndrome. / Management Conservative: cease injection and scan; consult responsible physician; mark affected area; assess severity as mild, moderate, or severe. / Mild cases: limb elevation, ice packs, monitor patient 2–4 hourly; if improving then discharge; if no improvement then requires surgical opinion. / Moderate and severe cases: “Radiographic documentation — two orthogonal views or cross-sectional imaging can help assess compartmentalisation and extent of extravasation.” / Record as complication in radiology report and local incident reporting system; patient information leaflet; follow-up appointment if necessary. / Involving a surgeon: if severe injury is suspected, urgently seek advice of a surgeon; “Surgical opinion also recommended for extravasate >150 ml”. |

#### CAND-2025-BK-005 — Warming section (extravasation risk reduction)

| Field | Value |
| --- | --- |
| Source file | Guidelines-2025-ESUR-vf.pdf |
| Printed page | 31 |
| Physical PDF page | 31 |
| Section / subsection | Warming of iodine-based contrast medium before administration |
| Table / figure | none |
| Identifying wording | “Reduces viscosity and may reduce the risk of contrast medium extravasation.” |

#### CAND-2025-BK-006 — Bibliography: Bellin 2002 extravasation injury guidelines

| Field | Value |
| --- | --- |
| Source file | Guidelines-2025-ESUR-vf.pdf |
| Printed page | 41 |
| Physical PDF page | 41 |
| Section / subsection | References / publications list |
| Table / figure | none |
| Identifying wording | Bellin M-F et al.: “extravasation injury: guidelines for prevention and management. Eur Radiol 2002; 12: 2807-…” |

#### CAND-2025-BK-007 — Bibliography: Roditi / CMSC 2022 intravenous contrast medium extravasation systematic review

| Field | Value |
| --- | --- |
| Source file | Guidelines-2025-ESUR-vf.pdf |
| Printed page | 43 |
| Physical PDF page | 43 |
| Section / subsection | References / publications list |
| Table / figure | none |
| Identifying wording | “Intravenous contrast medium extravasation: systematic review and updated ESUR Contrast Media Safety Committee Guidelines. Eur Radiol 2022; 32: 3056–3066.” |

---

### 3.4 Part 1 — `330_2025_Article_11675.pdf`

Hypersensitivity Part 1 (Eur Radiol 2025; 35:6798–6810). Full-text search for extravasation / Extravasat / contrast extravasation / Kontrastmittelaustritt: **no hits**.

| Field | Value |
| --- | --- |
| Source file | 330_2025_Article_11675.pdf |
| Printed / physical pages | n/a for this topic |
| Section / subsection | n/a |
| Table / figure | n/a |
| Identifying wording | Absence record: no candidate passages located for extravasation, severity classification of extravasation, radiographic documentation of extravasation, surgical referral for extravasation, or >150 mL extravasate thresholds. Incidental non-extravasation uses of words such as “compartment” in hypersensitivity context are outside this topic scan. |

Locator ID: **CAND-2025-P1-ABSENCE**

---

### 3.5 Part 2 — `330_2025_Article_11676.pdf`

Hypersensitivity Part 2 (Eur Radiol 2025; 35:6811–6825). Full-text search for extravasation / Extravasat / contrast extravasation / Kontrastmittelaustritt: **no hits**.

| Field | Value |
| --- | --- |
| Source file | 330_2025_Article_11676.pdf |
| Printed / physical pages | n/a for this topic |
| Section / subsection | n/a |
| Table / figure | n/a |
| Identifying wording | Absence record: no candidate passages located for the extravasation topic keys listed in section 3 header. |

Locator ID: **CAND-2025-P2-ABSENCE**

---

## 4. Neutral presence notes (no adjudication)

### 4.1 Aspiration

- EN V10 C.1 / DE V10 C.1 / 2025 booklet extravasation section: no aspiration-of-extravasate management bullet located.
- Separate non-extravasation “Aspiration” bullets exist elsewhere in EN V10 / 2025 booklet (e.g., pulmonary foreign-material contexts); not treated as extravasation candidates.

### 4.2 Cooling / cold compress wording

- EN V10 C.1 and 2025 booklet use “ice packs” under conservative management.
- DE V10 C.1 uses “Eispackungen”.
- Phrase “cold compress” / “cooling” as such not located in these extravasation sections.

### 4.3 Cannula / IV access

- Present in EN V10 “To reduce the risk”, DE V10 “Risikoreduktion”, and 2025 booklet “To reduce the risk” / recognition (cannula insertion site palpation).

### 4.4 Numeric volume threshold >150 mL / 150 ml

- Located in 2025 booklet CAND-2025-BK-004 (“extravasate >150 ml”).
- Not located as a numeric volume threshold in EN V10 C.1 or DE V10 C.1.

### 4.5 Mild / moderate / severe classification locus

- Explicit Mild / Moderate / Severe classification bullets located in 2025 booklet CAND-2025-BK-003 / CAND-2025-BK-004.
- EN V10 / DE V10 C.1 use “most injuries minor” / “Die meisten Schäden sind gering” plus a “severe injuries / schwere Schäden” list (ulceration, necrosis, compartment syndrome) without a three-tier mild/moderate/severe classification block.

### 4.6 Technique- vs patient-related risk factors

- Both EN V10 and DE V10 C.1 and the 2025 booklet separate technique-related and patient-related lists.
- Item membership differs across eras (e.g., power injector and high-osmolar and arterial insufficiency appear in V10 lists; 2025 booklet technique list as extracted emphasizes injection site, volume, viscosity; 2025 patient list as extracted does not list arterial insufficiency in the same bullet set).

### 4.7 Radiographic documentation

- EN V10 / DE V10: documentation with plain radiograph / CT / MR “may be helpful” without mild/moderate/severe gate.
- 2025 booklet: radiographic documentation specified under moderate and severe cases (two orthogonal views or cross-sectional imaging).

### 4.8 Surgical assessment / opinion

- EN V10: seek advice of a surgeon if serious injury suspected.
- DE V10: chirurgische Vorstellung bei Verdacht auf schwere Schäden.
- 2025 booklet: urgently seek surgeon if severe injury suspected; plus separate surgical-opinion line for extravasate >150 ml; mild pathway also mentions surgical opinion if no improvement after monitoring.

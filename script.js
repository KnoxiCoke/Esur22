document.addEventListener("DOMContentLoaded", function () {
  const state = {
    mainNav: "hsr",          // hsr | changes
    hsrTab: "guidance",      // guidance | acute | switch | tryptase | nihr

    // HSR
    situation: "elective",
    reaction: "moderate",    // mild | moderate | severe
    cmtype: "icm",
    nihrCmtype: "icm",
    nihrSeverity: "mild",
    nihrCulpritKnown: "known",
    acuteSeverity: "mild",   // mild | moderate | severe
    acutePattern: "mild_general",
    icm: null,
    gbca: null,

    // Global
    lang: "en",

    // Practice Changes tab
    changesFilter: "all",   // all | high | medium | low
    changesMode: "compare", // compare | action
    changesSearch: "",
    openChanges: new Set()
  };

  const i18n = window.ESUR.i18n;

  const changesLibrary = {
    en: [
      {
        id: "publication_structure",
        level: "low",
        icon: "document",
        title: "Publication model and structure",
        summary:
          "The 2018 Version 10 quick guide groups topics under three main sections. The 2025 contents list topic headings; its preface announces that the guidelines will also be published electronically on the ESUR webpage and updated annually.",
        keywords: [
          "publication",
          "structure",
          "electronic",
          "yearly update",
          "topic sections",
          "permanent work in progress"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Version 10.0 (2018) was presented as a booklet. Its quick guide groups topics under General adverse reactions, Renal adverse reactions (PC-AKI), and Miscellaneous. The official German 2018 edition also mentions electronic versions of these guidelines on the ESUR website."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "The 2025 contents list topic sections including hypersensitivity reactions, prevention of CA-AKI, dialysis, extravasation, waiting times, laboratory interference, and systemic diseases. Under Miscellaneous recommendations and topics, the contents also list CO₂ and HSG.",
                "The 2025 preface announces that, from now on, the guidelines will also be published in electronic form on the ESUR webpage and updated annually. It describes the guidelines as a permanent work in progress."
              ]
            },
            {
              label: "Scope of comparison",
              paragraphs: [
                "The two editions group their contents differently. This structural comparison does not establish whether an individual clinical recommendation changed."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR Guidelines 10.0 (2018 EN), Preface p. 2 / PDF p. 3; Quick Guide p. 3 / PDF p. 4; Contents pp. 4–5 / PDF pp. 5–6",
            "Source: ESUR Guidelines 10.0 (2018 DE), Einleitung and Kurzanleitung, unnumbered / PDF p. 3; Inhalt, unnumbered / PDF pp. 4–5",
            "Source: ESUR CMSC Guidelines 2025, Preface p. 3 / PDF p. 3; Contents pp. 4–5 / PDF pp. 4–5"
          ]
        },
        action: {
          sections: [
            {
              label: "Source notes",
              bullets: [
                "The 2025 preface says that the guidelines summarize key recommendations and encourages readers to consult the original ESUR CMSC guideline publications for a complete understanding of each topic.",
                "The 2025 preface announces that, from now on, the guidelines will also be published in electronic form on the ESUR webpage and updated annually."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "The 2025 preface names, among others, updated sections on contrast agent hypersensitivity and extravasation. Its contents alone do not show how an individual clinical recommendation changed."
              ]
            }
          ],
          refs: [
            "Source: ESUR CMSC Guidelines 2025, Preface and Note, p. 3 / PDF p. 3; Contents pp. 4–5 / PDF pp. 4–5"
          ]
        }
      },

      {
        id: "hypersensitivity",
        level: "high",
        icon: "warningDrop",
        title: "Hypersensitivity",
        summary:
          "2025 uses immediate (IHR) and non-immediate (NIHR) terminology and structures prevention of recurrent reactions by reaction type and severity; moderate and severe IHR are additionally separated into elective and emergency pathways.",
        keywords: [
          "hypersensitivity",
          "immediate",
          "non-immediate",
          "tryptase",
          "allergy assessment",
          "SCAR",
          "re-exposure",
          "documentation",
          "premedication"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Version 10.0 grouped reactions as acute, late and very late. It advised keeping the patient in a medical environment for 30 minutes after contrast-agent injection. After a moderate or severe acute reaction, Version 10.0 advised histamine and tryptase sampling and referral to a specialist in drug allergy for skin testing. For previous contrast-agent reactors at increased risk, it advised use of a different contrast agent, preferably after consultation with a specialist in drug allergy. The contrast-agent name and dose and the details of the reaction and its treatment were to be recorded."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "The 2025 guidance defines immediate versus non-immediate hypersensitivity reactions and endorses both the ACR and the Ring & Messmer classifications. Prevention of recurrent reactions is set out by reaction type and severity; moderate and severe IHR are additionally separated into elective and emergency pathways. Acute general principles include assessment with the ABCDE method and sitting the patient up for dyspnoea or stridor."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "Prevention of recurrent reactions should be adapted to the reaction type and severity and to the urgency of required re-administration, as set out in Part 2."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR Guidelines on Contrast Agents Version 10.0 (2018), printed pp. 6–8 and 10–13",
            "Source: ESUR CMSC Guidelines 2025, pp. 6 and 8",
            "Source: van der Molen et al. 2025 Part 1, Table 3, journal p. 6805",
            "Source: van der Molen et al. 2025 Part 2, Table 2, journal pp. 6818–6820"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 action points",
              bullets: [
                "After a moderate or severe hypersensitivity reaction, refer the patient to a drug allergy specialist for allergy assessment.",
                "For mild, moderate and severe IHR, and for mild or moderate NIHR without danger signs, Part 2 specifies observation for at least 30 minutes with the IV line in place when contrast is administered.",
                "After severe NIHR with danger signs (SCAR): do not give the contrast-agent class that caused the reaction. Avoid all ICM after severe NIHR to ICM; avoid all GBCA after severe NIHR to GBCA. After a severe reaction to an unknown contrast agent, individualize the approach following multidisciplinary consultation.",
                "After a moderate-to-severe immediate hypersensitivity reaction (IHR), measure serum tryptase within 1–4 hours from the start of the reaction, with a second measurement after ≥24 hours as baseline."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "2025 adds type- and severity-specific recurrent-prevention pathways, with elective versus emergency rows for moderate and severe IHR. Version 10.0 already included 30-minute observation, recording, sampling after moderate or severe acute reactions, and referral."
              ]
            }
          ],
          refs: [
            "Source: van der Molen et al. 2025 Part 2, Table 2, journal pp. 6818–6820",
            "Source: ESUR CMSC Guidelines 2025, pp. 11–14"
          ]
        }
      },

      {
        id: "ca_aki_terminology",
        level: "low",
        icon: "kidney",
        title: "Renal terminology: PC-AKI → CA-AKI",
        summary:
          "The 2025 CMSC guidance uses the term CA-AKI and states that this updates the older term PC-AKI.",
        keywords: [
          "pc-aki",
          "ca-aki",
          "renal",
          "terminology",
          "contrast-associated acute kidney injury"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Version 10.0 used the term PC-AKI (post-contrast acute kidney injury)."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "From 2025 onwards, the CMSC follows the recommendations of the ACR/NKF Consensus 2020 and updates the older term PC-AKI to CA-AKI (contrast-associated acute kidney injury)."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "This card covers the terminology change only. Other renal prevention recommendations are outside its scope."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR Guidelines on Contrast Agents Version 10.0 (2018), printed p. 17",
            "Source: ESUR CMSC Guidelines 2025, p. 15"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 action points",
              bullets: [
                "In the 2025 ESUR framework, the term is CA-AKI (contrast-associated acute kidney injury)."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "The CMSC states that this terminology update follows the ACR/NKF Consensus 2020."
              ]
            }
          ],
          refs: [
            "Source: ESUR CMSC Guidelines 2025, p. 15"
          ]
        }
      },

      {
        id: "waiting_times",
        level: "high",
        icon: "clock",
        title: "Safe time intervals between contrast administrations",
        summary:
          "The 2018 guideline already provided separate rules for same-day iodine- plus gadolinium-based contrast administration, two iodine-based contrast administrations, and two gadolinium-based contrast administrations. The 2025 booklet brings these topics together in one waiting-times section and changes examination order, renal-function categories, intervals, emergency handling, and dialysis distinctions.",
        keywords: [
          "waiting times",
          "time interval",
          "gbca",
          "icm",
          "same day",
          "mri first",
          "repeat contrast",
          "dialysis sessions"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Version 10.0 already contained numerical waiting-time rules for all three scenarios and an examination-order rule for same-day iodine- plus gadolinium-based contrast administration."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "The 2025 booklet continues to address the three scenarios separately, but changes renal-function categories and intervals, changes the examination-order rule for the mixed scenario, adds scenario-specific emergency guidance, and refines dialysis distinctions for repeated same-class administrations."
              ]
            }
          ],
          nested: [
            {
              title: "Mixed MRI + CT/(coronary) angiography",
              sections: [
                {
                  label: "2018",
                  paragraphs: [
                    "GFR >30 mL/min/1.73 m²: there should be 4 h between iodine- and gadolinium-based contrast injections.",
                    "GFR <30 mL/min/1.73 m² or dialysis: there should be 7 days between injections.",
                    "For abdominal examinations, contrast-enhanced CT should be performed before contrast-enhanced MR.",
                    "For chest and brain examinations, either CT or MR may be performed first."
                  ]
                },
                {
                  label: "2025",
                  paragraphs: [
                    "Elective same-day combination: it is better to start with MRI, unless the CT is intended for the kidneys, ureters, or bladder (CT urography).",
                    "eGFR >60 mL/min/1.73 m²: consider a waiting time of optimally 6 h and minimally 2 h.",
                    "eGFR 30–60 mL/min/1.73 m²: consider a waiting time of optimally 48 h and minimally 16 h.",
                    "eGFR <30 mL/min/1.73 m²: consider a waiting time of optimally 7 days (168 h) and minimally 2.5 days (60 h).",
                    "In emergency or life-threatening situations, use no waiting time and perform the examinations back-to-back."
                  ]
                },
                {
                  label: "Change",
                  paragraphs: [
                    "Compared with 2018, the 2025 mixed-scenario guidance changes the examination-order rule, splits the renal-function categories, introduces optimal/minimum intervals, and adds an explicit emergency rule."
                  ],
                  variant: "impact"
                }
              ]
            },
            {
              title: "Two iodine-based contrast administrations",
              sections: [
                {
                  label: "2018",
                  paragraphs: [
                    "GFR >30 mL/min/1.73 m²: there should be 4 h between administrations.",
                    "GFR <30 mL/min/1.73 m²: there should be 48 h between administrations.",
                    "For patients on dialysis with remnant renal function, there should be at least 48 h between administrations."
                  ]
                },
                {
                  label: "2025",
                  paragraphs: [
                    "GFR >60 mL/min/1.73 m²: consider a waiting time of optimally 12 h and minimally 4 h.",
                    "GFR 30–60 mL/min/1.73 m²: consider a waiting time of optimally 48 h and minimally 16 h.",
                    "GFR <30 mL/min/1.73 m², including (pre)dialysis patients with remnant renal function: consider a waiting time of optimally 7 days (168 h) and minimally 2.5 days (60 h).",
                    "For patients on dialysis with no remnant renal function, consider a waiting time of at least 3 dialysis sessions between successive administrations.",
                    "In emergency or life-threatening situations, use a shorter waiting time between successive iodine-based contrast administrations."
                  ]
                },
                {
                  label: "Change",
                  paragraphs: [
                    "Compared with 2018, the 2025 guidance splits the renal-function categories, introduces optimal/minimum intervals, adds a rule for dialysis without remnant renal function, and adds emergency guidance to use a shorter waiting time."
                  ],
                  variant: "impact"
                }
              ]
            },
            {
              title: "Two gadolinium-based contrast administrations",
              sections: [
                {
                  label: "2018",
                  paragraphs: [
                    "GFR >30 mL/min/1.73 m²: there should be 4 h between administrations.",
                    "GFR <30 mL/min/1.73 m² or dialysis: there should be 7 days between administrations."
                  ]
                },
                {
                  label: "2025",
                  paragraphs: [
                    "Without known renal impairment: consider a waiting time of optimally 12 h and minimally 4 h.",
                    "Moderate renal impairment (if available: eGFR 30–60 mL/min/1.73 m²): consider a waiting time of optimally 48 h and minimally 16 h.",
                    "Severe renal impairment and (pre)dialysis with remnant renal function, eGFR <30 mL/min/1.73 m²: consider a waiting time of optimally 7 days (168 h) and minimally 2.5 days (60 h).",
                    "For patients on dialysis with no remnant renal function, consider a waiting time of at least 3 dialysis sessions between successive administrations.",
                    "In emergency or life-threatening situations, use a shorter waiting time between successive gadolinium-based contrast administrations."
                  ]
                },
                {
                  label: "Change",
                  paragraphs: [
                    "Compared with 2018, the 2025 guidance separates renal-function groups more finely, introduces optimal/minimum intervals, separates dialysis by remnant renal function, and adds emergency guidance to use a shorter waiting time."
                  ],
                  variant: "impact"
                }
              ]
            }
          ],
          refs: [
            "Source: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), B.6, printed p. 24 (PDF p. 25)",
            "Source: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), B.7–B.8, printed p. 25 (PDF p. 26)",
            "Source: ESUR Contrast Media Safety Committee Guidelines 2025, “Safe time intervals between contrast agent injections”, printed pp. 21–23"
          ]
        },
        action: {
          sections: [
            {
              label: "How to read the 2025 intervals",
              paragraphs: [
                "The 2025 elective rules use “consider a waiting time”. For each renal-function group, the source provides an optimal interval with a near-complete-clearance rationale and a minimum interval when the clinical indication requires rapid follow-up."
              ]
            },
            {
              label: "Publication note",
              paragraphs: [
                "In the repeated-GBCA subsection, the 2025 booklet unexpectedly refers to near-complete clearance of previously administered iodine-based contrast medium. This is retained as a source anomaly and is not used to alter the interval values."
              ]
            }
          ],
          nested: [
            {
              title: "Elective same-day MRI + CT/(coronary) angiography",
              sections: [
                {
                  label: "ESUR 2025 action points",
                  bullets: [
                    "It is better to start with MRI, unless the CT is intended for the kidneys, ureters, or bladder (CT urography).",
                    "eGFR >60 mL/min/1.73 m²: consider a waiting time of optimally 6 h and minimally 2 h.",
                    "eGFR 30–60 mL/min/1.73 m²: consider a waiting time of optimally 48 h and minimally 16 h.",
                    "eGFR <30 mL/min/1.73 m²: consider a waiting time of optimally 7 days (168 h) and minimally 2.5 days (60 h).",
                    "In emergency or life-threatening situations, use no waiting time and perform the examinations back-to-back."
                  ],
                  variant: "action"
                }
              ]
            },
            {
              title: "Two iodine-based contrast administrations — routine examinations",
              sections: [
                {
                  label: "ESUR 2025 action points",
                  bullets: [
                    "GFR >60 mL/min/1.73 m²: consider a waiting time of optimally 12 h and minimally 4 h.",
                    "GFR 30–60 mL/min/1.73 m²: consider a waiting time of optimally 48 h and minimally 16 h.",
                    "GFR <30 mL/min/1.73 m², including (pre)dialysis patients with remnant renal function: consider a waiting time of optimally 7 days (168 h) and minimally 2.5 days (60 h).",
                    "For patients on dialysis with no remnant renal function, consider a waiting time of at least 3 dialysis sessions between successive administrations.",
                    "In emergency or life-threatening situations, use a shorter waiting time between successive iodine-based contrast administrations."
                  ],
                  variant: "action"
                }
              ]
            },
            {
              title: "Two gadolinium-based contrast administrations — routine examinations",
              sections: [
                {
                  label: "ESUR 2025 action points",
                  bullets: [
                    "Without known renal impairment: consider a waiting time of optimally 12 h and minimally 4 h.",
                    "Moderate renal impairment (if available: eGFR 30–60 mL/min/1.73 m²): consider a waiting time of optimally 48 h and minimally 16 h.",
                    "Severe renal impairment and (pre)dialysis with remnant renal function, eGFR <30 mL/min/1.73 m²: consider a waiting time of optimally 7 days (168 h) and minimally 2.5 days (60 h).",
                    "For patients on dialysis with no remnant renal function, consider a waiting time of at least 3 dialysis sessions between successive administrations.",
                    "In emergency or life-threatening situations, use a shorter waiting time between successive gadolinium-based contrast administrations."
                  ],
                  variant: "action"
                }
              ]
            }
          ],
          refs: [
            "Source: ESUR Contrast Media Safety Committee Guidelines 2025, “Safe time intervals between contrast agent injections”, printed pp. 21–23",
            "Source: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), B.6–B.8, printed pp. 24–25"
          ]
        }
      },

      {
        id: "laboratory_interference",
        level: "high",
        icon: "lab",
        title: "Analytical interference with laboratory tests",
        summary:
          "Version 10.0 already included blood- and urine-sampling advice. The 2025 booklet sets out recommended delays after intravascular contrast agent administration separately for blood and urine across three eGFR groups.",
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
                "For non-emergency biochemical assays, Version 10.0 recommended collecting blood and urine preferably before contrast agent administration. With normal renal function, blood could be collected after 4 h if necessary. With reduced renal function (eGFR <45 mL/min/1.73 m²), blood collection should be delayed for as long as possible. The English version states that urine collection should not be done within 24 h; the official German version specifically refers to “Sammelurin”."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "The 2025 booklet has a separate section on analytical interference of intravascular contrast agents with laboratory tests. It provides expert-consensus guidance, including for iodine- and gadolinium-based compounds, and lists recommended blood- and urine-collection delays by eGFR group."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "Compared with the 2018 guidance, the 2025 booklet specifies three eGFR groups for each sample type, with both minimum and optimal recommended delays for blood collection and minimum recommended delays for urine collection."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), EN, section C.6 “Non-emergency biochemical assays”, printed p. 30 / PDF p. 31.",
            "Source: Offizielle deutsche ESUR Leitlinien für Kontrastmittel, Version 10.0 (2018), section C.6 “Laborchemische Proben in der Routinediagnostik”, printed p. 41 / PDF p. 21 (two-up).",
            "Source: ESUR CMSC Contrast Agent Guidelines 2025 booklet, “Analytical interference of intravascular contrast agents with clinical laboratory tests”, printed/PDF p. 23."
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 action points",
              bullets: [
                "Recommended delay for blood collection after intravascular contrast agent administration: eGFR >60 mL/min/1.73 m² — at least 4 h; optimally 12 h.",
                "Recommended delay for blood collection after intravascular contrast agent administration: eGFR 30–60 mL/min/1.73 m² — at least 16 h; optimally 48 h.",
                "Recommended delay for blood collection after intravascular contrast agent administration: eGFR <30 mL/min/1.73 m² — at least 2.5 days (60 h); optimally 7 days (168 h).",
                "Recommended delay for urine collection after intravascular contrast agent administration: eGFR >60 mL/min/1.73 m² — at least 24 h; eGFR 30–60 mL/min/1.73 m² — at least 48 h; eGFR <30 mL/min/1.73 m² — at least 7 days (168 h)."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "The 2018 guideline already contained specific blood- and urine-collection intervals. The 2025 booklet distinguishes three eGFR groups and provides recommended minimum and optimal delays for blood collection, but only minimum delays for urine collection."
              ]
            }
          ],
          refs: [
            "Source: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), EN, section C.6 “Non-emergency biochemical assays”, printed p. 30 / PDF p. 31.",
            "Source: Offizielle deutsche ESUR Leitlinien für Kontrastmittel, Version 10.0 (2018), section C.6 “Laborchemische Proben in der Routinediagnostik”, printed p. 41 / PDF p. 21 (two-up).",
            "Source: ESUR CMSC Contrast Agent Guidelines 2025 booklet, “Analytical interference of intravascular contrast agents with clinical laboratory tests”, printed/PDF p. 23."
          ]
        }
      },

      {
        id: "extravasation",
        level: "high",
        icon: "extravasation",
        title: "Extravasation",
        summary:
          "The 2025 extravasation guidance adds explicit mild, moderate and severe definitions, more detailed recognition and reporting steps, and specified monitoring and surgical-escalation criteria. The 2018 guidelines already addressed risk factors, prevention, imaging and surgical advice.",
        keywords: [
          "extravasation",
          "contrast leak",
          "severity",
          "mild moderate severe",
          ">150 mL",
          "surgical opinion"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "The 2018 English and official German guidelines already separate technique-related from patient-related risk factors. They describe risk reduction, potentially helpful imaging documentation, conservative treatment in most cases, and surgical advice when serious injury is suspected."
              ]
            },
            {
              label: "2025",
              bullets: [
                "Defines mild, moderate and severe extravasation using clinical findings and instructs assessment of severity.",
                "Retains separate technique-related and patient-related risk factors and specifies further risk-reduction measures, including preferred use of an appropriately sized upper-arm vein, suitable cannula size, appropriate flow and pressure, and contrast-volume minimisation based on indication and patient size.",
                "Specifies recognition during and after injection, recording in the radiology report and local incident system, a patient information leaflet, and a follow-up appointment if necessary.",
                "For moderate or severe cases, two orthogonal radiographic views or cross-sectional imaging can help assess extent and compartmentalisation. If severe injury is suspected, urgently seek advice from a surgeon; surgical opinion is also recommended for extravasated volumes >150 mL."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "Compared with 2018, the 2025 section specifies three severity grades, more recognition and reporting steps, a 2–4-hourly monitoring interval for mild cases, and additional conditions for surgical advice."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "ESUR Guidelines 10.0 (2018), § C.1, printed p. 26 (PDF p. 27).",
            "Official German ESUR Guidelines 10.0 (2018), § C.1, printed p. 36 (PDF p. 19).",
            "ESUR CMSC Guidelines 2025, Management and prevention of contrast agent extravasation, printed pp. 20–21 (PDF pp. 20–21)."
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 action points",
              bullets: [
                "The 2025 booklet directs classification as mild, moderate or severe. Moderate cases require close monitoring; physician assessment is advised to check for neurovascular compromise.",
                "The 2025 section specifies further prevention details for venous access, cannula size, flow, pressure and contrast volume. Meticulous cannulation and a saline test injection were already described in 2018.",
                "For mild cases, the 2025 booklet specifies limb elevation, ice packs and monitoring every 2–4 hours. Discharge is stated if improving; if there is no improvement, surgical opinion is required.",
                "In moderate or severe cases, two orthogonal radiographic views or cross-sectional imaging can help assess extent and compartmentalisation. The complication is to be recorded in the radiology report and local incident system; a patient information leaflet should be given, and a follow-up appointment arranged if necessary.",
                "If severe injury is suspected, urgently seek advice from a surgeon. Surgical opinion is also recommended when the extravasated volume exceeds 150 mL."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "The added 2025 detail concerns severity definitions, recognition, reporting, mild-case monitoring and specific indications for surgical advice; several risk-reduction and management measures were already present in 2018."
              ]
            }
          ],
          refs: [
            "ESUR CMSC Guidelines 2025, Management and prevention of contrast agent extravasation, printed pp. 20–21 (PDF pp. 20–21).",
            "For the 2018 comparison: ESUR Guidelines 10.0, § C.1, printed p. 26 (PDF p. 27)."
          ]
        }
      },

      {
        id: "dialysis_refinement",
        level: "medium",
        icon: "dialysis",
        title: "Dialysis-related refinement",
        summary:
          "The 2025 dialysis section explicitly distinguishes macrocyclic and linear GBCA within separate haemodialysis and CAPD sections.",
        keywords: [
          "dialysis",
          "haemodialysis",
          "macrocyclic",
          "linear",
          "GBCA",
          "CAPD"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "ESUR 10.0 already separated haemodialysis from CAPD and iodine-based contrast from GBCA. In haemodialysis, timing coordination and an extra session were unnecessary for iodine-based contrast; for GBCA, timing coordination and an extra haemodialysis session as soon as possible after administration were recommended.",
                "In CAPD, haemodialysis to remove iodine-based contrast was unnecessary; after GBCA, the need for haemodialysis was to be discussed with the referring physician."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "For patients on haemodialysis, an immediate dialysis session is not needed after macrocyclic GBCA; after linear agents (e.g., liver-specific agents), it is indicated and needs to be repeated on the following two days.",
                "For patients on CAPD, an immediate dialysis session is not needed after macrocyclic GBCA; with linear GBCA, the NSF risk should be weighed against the risk of placing a temporary haemodialysis catheter in consultation with the referring physician."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "Compared with 2018, the 2025 GBCA guidance adds an explicit macrocyclic-versus-linear distinction. The immediate-dialysis instructions differ by dialysis type and GBCA class."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR Guidelines on Contrast Agents 10.0 (2018 EN), § B.5 Dialysis and contrast medium administration, printed p. 23 / PDF p. 24.",
            "Source: ESUR Leitlinien für Kontrastmittel 10.0 (official DE), § B.5 Dialyse und Kontrastmittelgabe, printed pp. 33–34 / PDF pp. 17–18.",
            "Source: ESUR Contrast Media Safety Committee Guidelines 2025, Safe use of contrast agent administration in patients on dialysis, printed/PDF p. 19."
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 action points",
              bullets: [
                "For iodine-based contrast in patients on haemodialysis, coordinating injection with the haemodialysis session or sessions is unnecessary, and extra haemodialysis sessions to remove the contrast medium are not recommended. In CAPD, additional haemodialysis to remove iodine-based contrast is unnecessary.",
                "After macrocyclic GBCA, an immediate dialysis session is not needed in haemodialysis or CAPD.",
                "After linear GBCA in patients on haemodialysis, an immediate dialysis session is indicated and needs to be repeated on the following two days.",
                "For CAPD and linear GBCA, the NSF risk should be weighed against the risk of placing a temporary haemodialysis catheter in consultation with the referring physician."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "The 2025 GBCA instructions differ by dialysis type and GBCA class."
              ]
            }
          ],
          refs: [
            "Source: ESUR Contrast Media Safety Committee Guidelines 2025, Safe use of contrast agent administration in patients on dialysis — Patients on haemodialysis; Patients on continuous ambulatory peritoneal dialysis, printed/PDF p. 19."
          ]
        }
      },

      {
        id: "new_clinical_scenarios",
        level: "medium",
        icon: "layers",
        title: "Dedicated ESUR 2025 sections: myasthenia gravis, HSG and CO₂ angiography",
        summary:
          "The 2018 EN and DE booklets do not address myasthenia gravis or HSG; both name carbon dioxide only in the terminology definition. The 2025 booklet contains dedicated subsections for all three topics.",
        keywords: [
          "myasthenia gravis",
          "HSG",
          "hysterosalpingography",
          "CO2",
          "vascular procedures",
          "systemic diseases"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Neither 2018 edition addresses myasthenia gravis or HSG. Both mention carbon dioxide only as an example of an X-ray contrast medium in the terminology section; neither contains a CO₂ angiography subsection."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Myasthenia gravis appears under “Safe use of contrast agents in patients with systemic diseases”. HSG and CO₂ angiography appear as separate subsections under “Miscellaneous recommendations and topics”."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "This comparison establishes a change in the booklet’s coverage and section structure."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR Guidelines on Contrast Agents, Version 10.0 (2018 EN), Contents C.1–C.11, printed pp. 4–5 / PDF pp. 5–6; Terminology: Contrast agents and contrast media, printed p. 5 / PDF p. 6.",
            "Source: Official German ESUR Leitlinien für Kontrastmittel, Version 10.0 (2018 DE), Inhalt C.1–C.11, PDF pp. 4–5; Terminologie: Kontrastmittel und Röntgenkontrastmittel, printed pp. 10–11 / PDF p. 6.",
            "Source: ESUR Contrast Media Safety Committee Guidelines 2025, Contents, printed/PDF p. 5; Safe use of contrast agents in patients with myasthenia gravis, p. 29; CO₂ and HSG subsections, p. 31."
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 statements",
              bullets: [
                "For myasthenia gravis, the 2025 booklet states that intravenous low- or iso-osmolar iodine-based contrast media can be associated with symptom exacerbation within the first 24 hours after administration, probably in fewer than 5% of patients receiving these agents intravenously; gadolinium-based contrast agents are described as safe for myasthenia gravis patients.",
                "The 2025 HSG subsection notes limited external validity because some contrast media used in the past are no longer on the market. Compared with water-based contrast media, oil-based contrast media are associated with approximately 10% more pregnancies and live births and significantly better image quality; intravasation occurs with equal frequency. Oil-based contrast media can remain in the abdominal cavity for a prolonged period and have a significantly greater inflammatory effect on the peritoneum; the clinical consequences are unknown, and caution is advised. In every woman receiving oil-based contrast media, thyroid function should be tested before HSG and monitored for 6 months afterwards; routine additional neonatal thyroid function tests after HSG are not indicated.",
                "The 2025 booklet describes the evidence for CO₂ angiography as an alternative to iodine-based contrast media as limited. CO₂ angiography seems to be a safe alternative in vascular procedures and may reduce CA-AKI risk, especially in PAD procedures, while specific contraindications and safety measures and the higher incidence of non-serious adverse events need to be considered. More large-scale RCTs are needed to confirm these findings and further investigate CA-AKI risk factors in EVAR and interventional procedures for PAD."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "These are dedicated subsections in the 2025 booklet; carbon dioxide was already named in the 2018 terminology sections."
              ]
            }
          ],
          refs: [
            "Source: ESUR Contrast Media Safety Committee Guidelines 2025, Safe use of contrast agents in patients with myasthenia gravis, printed/PDF p. 29.",
            "Source: ESUR Contrast Media Safety Committee Guidelines 2025, Safety of CO₂ as an alternative to iodine-based contrast media in vascular procedures; Safe use of contrast agents in hysterosalpingography (HSG), printed/PDF p. 31."
          ]
        }
      },

      {
        id: "other_reorganized_topics",
        level: "medium",
        icon: "stack",
        title: "Other reorganized or continued topics",
        summary:
          "Several subjects are retained, regrouped, or expanded in 2025 without always becoming headline changes.",
        keywords: [
          "pregnancy",
          "lactation",
          "paediatric",
          "metformin",
          "retention",
          "warming",
          "fasting",
          "nonvascular iodine",
          "systemic diseases",
          "sickle cell"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Pregnancy / lactation, paediatric use, metformin, gadolinium retention, warming / fasting, and several older miscellaneous topics already existed in the 2018 booklet.",
                "Some topics such as late reactions, very late reactions, sickle cell disease, and effects on blood / endothelium were more separately visible in the older structure."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Many of these topics remain, but are regrouped differently. Pregnancy / lactation and paediatric use continue, metformin is embedded within systemic diseases, gadolinium retention remains, and nonvascular iodine administration is described in more detail.",
                "At the same time, some 2018 topics are less separately foregrounded in the 2025 summary structure."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "Absence from the 2025 table of contents should not automatically be interpreted as “removed.” In several cases the content is retained but reorganized."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR 10.0 guideline",
            "Source: ESUR 2025 summary guideline"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 action points",
              bullets: [
                "Do not assume that a topic is gone just because it is less separately visible in the 2025 summary structure.",
                "Use the systemic-diseases block in 2025 for regrouped items such as metformin and other disease-related topics.",
                "Use the 2025 text if you need the expanded wording on nonvascular iodine-based contrast administration."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "Not every difference between 2018 and 2025 is a new rule. Some are changes in framing, grouping, or level of emphasis."
              ]
            }
          ],
          refs: [
            "Source: ESUR 2025 summary guideline",
            "Source: ESUR 10.0 guideline"
          ]
        }
      }
    ],

    de: [
      {
        id: "publication_structure",
        level: "low",
        icon: "document",
        title: "Publikationsmodell und Struktur",
        summary:
          "Die Kurzanleitung der Version 10 von 2018 gliedert die Themen in drei Hauptabschnitte. Das Inhaltsverzeichnis 2025 enthält thematische Überschriften; die Einleitung kündigt an, dass die Leitlinien auch in elektronischer Form auf der ESUR-Website erscheinen und jährlich aktualisiert werden sollen.",
        keywords: [
          "publikation",
          "struktur",
          "elektronisch",
          "jährliche aktualisierung",
          "thematische abschnitte",
          "permanent work in progress"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Die Version 10.0 (2018) wurde als Broschüre vorgestellt. Ihre Kurzanleitung gliedert die Themen in Allgemeine unerwünschte Wirkungen, Renale unerwünschte Wirkungen (PC-AKI) und Verschiedenes. Die offizielle deutsche Ausgabe von 2018 erwähnt bereits elektronische Versionen dieser Leitlinien auf der ESUR-Website."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Das Inhaltsverzeichnis 2025 nennt thematische Abschnitte unter anderem zu Hypersensitivitätsreaktionen, Prävention von CA-AKI, Dialyse, Extravasation, Wartezeiten, Laborinterferenz und systemischen Erkrankungen. Unter der Überschrift „Miscellaneous recommendations and topics“ stehen außerdem CO₂ und HSG.",
                "Die Einleitung 2025 kündigt an, dass die Leitlinien von nun an auch in elektronischer Form auf der ESUR-Website erscheinen und jährlich aktualisiert werden sollen. Sie beschreibt die Leitlinien als permanent work in progress."
              ]
            },
            {
              label: "Gegenstand des Vergleichs",
              paragraphs: [
                "Die beiden Ausgaben gliedern ihre Inhalte unterschiedlich. Aus diesem Strukturvergleich lässt sich nicht ableiten, ob sich eine einzelne klinische Empfehlung geändert hat."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR-Leitlinien 10.0 (2018 EN), Preface S. 2 / PDF S. 3; Quick Guide S. 3 / PDF S. 4; Contents S. 4–5 / PDF S. 5–6",
            "Quelle: ESUR-Leitlinien 10.0 (2018 DE), Einleitung und Kurzanleitung, unnummeriert / PDF S. 3; Inhalt, unnummeriert / PDF S. 4–5",
            "Quelle: ESUR CMSC Guidelines 2025, Preface S. 3 / PDF S. 3; Contents S. 4–5 / PDF S. 4–5"
          ]
        },
        action: {
          sections: [
            {
              label: "Hinweise zu den Quellen",
              bullets: [
                "Laut Einleitung fasst die Ausgabe 2025 zentrale Empfehlungen zusammen und regt an, für ein vollständiges Verständnis des jeweiligen Themas die ursprünglichen ESUR-CMSC-Leitlinienpublikationen heranzuziehen.",
                "Die Einleitung 2025 kündigt an, dass die Leitlinien von nun an auch in elektronischer Form auf der ESUR-Website erscheinen und jährlich aktualisiert werden sollen."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Die Einleitung 2025 nennt unter anderem aktualisierte Abschnitte zu Kontrastmittel-Hypersensitivität und Extravasation. Das Inhaltsverzeichnis allein zeigt nicht, wie sich eine einzelne klinische Empfehlung geändert hat."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR CMSC Guidelines 2025, Preface und Note, S. 3 / PDF S. 3; Contents S. 4–5 / PDF S. 4–5"
          ]
        }
      },

      {
        id: "hypersensitivity",
        level: "high",
        icon: "warningDrop",
        title: "Hypersensitivität",
        summary:
          "2025 verwendet die Begriffe immediate (IHR) und non-immediate (NIHR) und gliedert die Prävention erneuter Reaktionen nach Reaktionstyp und Schweregrad; bei moderaten und schweren IHR wird zusätzlich zwischen elektiven und notfallmäßigen Pfaden unterschieden.",
        keywords: [
          "hypersensitivität",
          "immediate",
          "non-immediate",
          "tryptase",
          "allergieabklärung",
          "SCAR",
          "re-exposure",
          "dokumentation",
          "prämedikation"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Version 10.0 gliederte Reaktionen in akut, spät und sehr spät. Nach der Kontrastmittelgabe sollten Patienten 30 Minuten medizinisch qualifiziert überwacht werden. Nach einer moderaten oder schweren akuten Reaktion sah Version 10.0 Histamin- und Tryptase-Proben sowie die Überweisung an einen Spezialisten für Allergologie zur Durchführung eines Hauttests vor. Bei Patienten mit erhöhtem Risiko und früherer Reaktion auf ein bestimmtes Kontrastmittel sah Version 10.0 den Einsatz eines anderen Kontrastmittels vor, vorzugsweise nach Rücksprache mit einem Allergologen. Kontrastmittelname und -dosierung sowie Art der Reaktion und ergriffene Maßnahmen sollten in der Patientenakte dokumentiert werden."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Die 2025er Guidance definiert immediate versus non-immediate Hypersensitivitätsreaktionen und stützt sowohl die ACR- als auch die Ring-&-Messmer-Klassifikation. Die Prävention erneuter Reaktionen ist nach Reaktionstyp und Schweregrad dargestellt; bei moderaten und schweren IHR wird zusätzlich zwischen elektiven und notfallmäßigen Pfaden unterschieden. Zu den allgemeinen Prinzipien des Akutmanagements gehören die Beurteilung nach der ABCDE-Methode und das Aufsetzen bei Dyspnoe oder Stridor."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Die Prävention erneuter Reaktionen sollte entsprechend Part 2 an Reaktionstyp und Schweregrad sowie an die Dringlichkeit einer erneuten Kontrastmittelgabe angepasst werden."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR Leitlinien für Kontrastmittel Version 10.0 (2018), DE-PDF S. 7–8 und 10–12",
            "Quelle: ESUR CMSC Guidelines 2025, S. 6 und 8",
            "Quelle: van der Molen et al. 2025 Part 1, Tabelle 3, Journal-S. 6805",
            "Quelle: van der Molen et al. 2025 Part 2, Tabelle 2, Journal-S. 6818–6820"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR-2025-Kernaussagen",
              bullets: [
                "Patienten nach moderater oder schwerer Hypersensitivitätsreaktion zur allergologischen Abklärung überweisen.",
                "Bei milder, moderater und schwerer IHR sowie bei milder oder moderater NIHR ohne Danger Signs sieht Part 2 bei Kontrastmittelgabe eine Beobachtung von mindestens 30 Minuten mit liegendem IV-Zugang vor.",
                "Nach schwerer NIHR mit Danger Signs (SCAR): die verursachende Kontrastmittelklasse nicht geben. Nach schwerer NIHR auf ICM alle ICM vermeiden; nach schwerer NIHR auf GBCA alle GBCA vermeiden. Nach einer schweren Reaktion auf ein unbekanntes Kontrastmittel das Vorgehen nach interdisziplinärer Beratung individualisieren.",
                "Nach einer moderaten bis schweren unmittelbaren Hypersensitivitätsreaktion (IHR) Serumtryptase innerhalb von 1–4 Stunden nach Beginn der Reaktion bestimmen; eine zweite Messung nach ≥24 Stunden dient als Baseline."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "2025 ergänzt typ- und schweregradbezogene Präventionspfade, bei moderater und schwerer IHR zusätzlich elektiv versus Notfall. Version 10.0 enthielt bereits 30-Minuten-Überwachung, Dokumentation, Proben nach moderater oder schwerer akuter Reaktion und Überweisung."
              ]
            }
          ],
          refs: [
            "Quelle: van der Molen et al. 2025 Part 2, Tabelle 2, Journal-S. 6818–6820",
            "Quelle: ESUR CMSC Guidelines 2025, S. 11–14"
          ]
        }
      },

      {
        id: "ca_aki_terminology",
        level: "low",
        icon: "kidney",
        title: "Renale Terminologie: PC-AKI → CA-AKI",
        summary:
          "Die 2025er CMSC-Guidance verwendet das Kürzel CA-AKI anstelle des älteren Kürzels PC-AKI. Die deutsche Version 10.0 bezeichnete PC-AKI bereits als „Kontrastmittel-assoziierte akute Nierenschädigung“.",
        keywords: [
          "pc-aki",
          "ca-aki",
          "renal",
          "terminologie",
          "contrast-associated acute kidney injury"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Die deutsche Version 10.0 verwendete das Kürzel PC-AKI und die Bezeichnung „Kontrastmittel-assoziierte akute Nierenschädigung“; das englische Original bezeichnete PC-AKI als „post-contrast acute kidney injury“."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Ab 2025 folgt das CMSC den Empfehlungen des ACR/NKF Consensus 2020 und aktualisiert den älteren Begriff PC-AKI zu CA-AKI (contrast-associated acute kidney injury)."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Diese Karte behandelt ausschließlich die Terminologieänderung. Weitere renale Präventionsempfehlungen sind nicht Gegenstand dieser Karte."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR Leitlinien für Kontrastmittel Version 10.0 (2018), DE-PDF S. 14",
            "Quelle: ESUR Guidelines on Contrast Agents Version 10.0 (2018), gedruckte S. 17",
            "Quelle: ESUR CMSC Guidelines 2025, S. 15"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR-2025-Kernaussagen",
              bullets: [
                "Im ESUR-Rahmen 2025 lautet das Kürzel CA-AKI (contrast-associated acute kidney injury)."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Das CMSC begründet diese Terminologieänderung mit dem ACR/NKF Consensus 2020."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR CMSC Guidelines 2025, S. 15"
          ]
        }
      },

      {
        id: "waiting_times",
        level: "high",
        icon: "clock",
        title: "Sichere Zeitintervalle zwischen Kontrastmittelgaben",
        summary:
          "Die ESUR-Version 10.0 von 2018 enthielt bereits getrennte Regeln für iod- und gadoliniumhaltige Kontrastmittel am selben Tag, zwei iodhaltige Kontrastmittelgaben und zwei gadoliniumhaltige Kontrastmittelgaben. Das 2025-Booklet bündelt diese Themen in einer Wartezeiten-Sektion und ändert Untersuchungsreihenfolge, Nierenfunktionsgruppen, Intervalle, Notfallregeln und Dialyseuntergruppen.",
        keywords: [
          "wartezeiten",
          "zeitintervall",
          "gbca",
          "icm",
          "same day",
          "mri zuerst",
          "wiederholte kontrastmittelgabe",
          "dialysesitzungen"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Version 10.0 enthielt bereits numerische Wartezeitregeln für alle drei Szenarien und eine Regel zur Untersuchungsreihenfolge bei iod- und gadoliniumhaltigen Kontrastmitteln am selben Tag."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Das 2025-Booklet behandelt die drei Szenarien weiterhin getrennt, ändert jedoch Nierenfunktionsgruppen und Intervalle, ändert die Reihenfolgeregel im gemischten Szenario, ergänzt szenariospezifische Notfallregeln und differenziert Dialyse bei wiederholten Gaben derselben Kontrastmittelklasse nach Restnierenfunktion."
              ]
            }
          ],
          nested: [
            {
              title: "Gemischte MRT + CT/(koronare) Angiographie",
              sections: [
                {
                  label: "2018",
                  paragraphs: [
                    "GFR >30 ml/min/1,73 m²: Zwischen iod- und gadoliniumhaltigen Kontrastmittelgaben sollten 4 Stunden liegen.",
                    "GFR <30 ml/min/1,73 m² oder Dialysepflicht: Zwischen den Gaben sollte ein Abstand von 7 Tagen liegen.",
                    "Bei Abdomenuntersuchungen sollte die kontrastmittelgestützte CT vor der kontrastmittelgestützten MRT erfolgen.",
                    "Bei Thorax- und Gehirnuntersuchungen kann CT oder MRT zuerst durchgeführt werden."
                  ]
                },
                {
                  label: "2025",
                  paragraphs: [
                    "Elektive Kombination am selben Tag: Es ist besser, mit der MRT zu beginnen, außer wenn die CT für Nieren, Ureteren oder Harnblase als CT-Urographie vorgesehen ist.",
                    "eGFR >60 ml/min/1,73 m²: Eine Wartezeit von optimal 6 h und minimal 2 h erwägen.",
                    "eGFR 30–60 ml/min/1,73 m²: Eine Wartezeit von optimal 48 h und minimal 16 h erwägen.",
                    "eGFR <30 ml/min/1,73 m²: Eine Wartezeit von optimal 7 Tagen (168 h) und minimal 2,5 Tagen (60 h) erwägen.",
                    "Bei Notfall oder lebensbedrohlicher Situation keine Wartezeit einhalten und die Untersuchungen unmittelbar nacheinander durchführen."
                  ]
                },
                {
                  label: "Änderung",
                  paragraphs: [
                    "Gegenüber 2018 ändert die 2025-Regel für das gemischte Szenario die Untersuchungsreihenfolge, unterteilt die Nierenfunktionsgruppen neu, führt Optimal-/Minimum-Intervalle ein und ergänzt eine ausdrückliche Notfallregel."
                  ],
                  variant: "impact"
                }
              ]
            },
            {
              title: "Zwei iodhaltige Kontrastmittelgaben",
              sections: [
                {
                  label: "2018",
                  paragraphs: [
                    "GFR >30 ml/min/1,73 m²: Zwischen den Gaben sollten 4 Stunden liegen.",
                    "GFR <30 ml/min/1,73 m²: Zwischen den Gaben sollte ein Abstand von 48 Stunden liegen.",
                    "Bei Dialysepatienten mit Restdiurese sollte zwischen den Gaben ein Abstand von mindestens 48 Stunden liegen."
                  ]
                },
                {
                  label: "2025",
                  paragraphs: [
                    "GFR >60 ml/min/1,73 m²: Eine Wartezeit von optimal 12 h und minimal 4 h erwägen.",
                    "GFR 30–60 ml/min/1,73 m²: Eine Wartezeit von optimal 48 h und minimal 16 h erwägen.",
                    "GFR <30 ml/min/1,73 m², einschließlich (Prä-)Dialyse mit Restnierenfunktion: Eine Wartezeit von optimal 7 Tagen (168 h) und minimal 2,5 Tagen (60 h) erwägen.",
                    "Bei Dialyse ohne Restnierenfunktion einen Abstand von mindestens 3 Dialysesitzungen zwischen aufeinanderfolgenden Gaben erwägen.",
                    "Bei Notfall oder lebensbedrohlicher Situation eine kürzere Wartezeit zwischen aufeinanderfolgenden iodhaltigen Kontrastmittelgaben verwenden."
                  ]
                },
                {
                  label: "Änderung",
                  paragraphs: [
                    "Gegenüber 2018 unterteilt die 2025-Regel die Nierenfunktionsgruppen neu, führt Optimal-/Minimum-Intervalle ein, ergänzt eine Regel für Dialyse ohne Restnierenfunktion und ergänzt die Notfallregel einer kürzeren Wartezeit."
                  ],
                  variant: "impact"
                }
              ]
            },
            {
              title: "Zwei gadoliniumhaltige Kontrastmittelgaben",
              sections: [
                {
                  label: "2018",
                  paragraphs: [
                    "GFR >30 ml/min/1,73 m²: Zwischen den Gaben sollten 4 Stunden liegen.",
                    "GFR <30 ml/min/1,73 m² oder Dialyse: Zwischen den Gaben sollte ein Abstand von 7 Tagen liegen."
                  ]
                },
                {
                  label: "2025",
                  paragraphs: [
                    "Ohne bekannte Niereninsuffizienz: Eine Wartezeit von optimal 12 h und minimal 4 h erwägen.",
                    "Moderate Nierenfunktionseinschränkung (falls verfügbar: eGFR 30–60 ml/min/1,73 m²): Eine Wartezeit von optimal 48 h und minimal 16 h erwägen.",
                    "Schwere Nierenfunktionseinschränkung und (Prä-)Dialyse mit Restnierenfunktion, eGFR <30 ml/min/1,73 m²: Eine Wartezeit von optimal 7 Tagen (168 h) und minimal 2,5 Tagen (60 h) erwägen.",
                    "Bei Dialyse ohne Restnierenfunktion einen Abstand von mindestens 3 Dialysesitzungen zwischen aufeinanderfolgenden Gaben erwägen.",
                    "Bei Notfall oder lebensbedrohlicher Situation eine kürzere Wartezeit zwischen aufeinanderfolgenden gadoliniumhaltigen Kontrastmittelgaben verwenden."
                  ]
                },
                {
                  label: "Änderung",
                  paragraphs: [
                    "Gegenüber 2018 differenziert die 2025-Regel die Nierenfunktionsgruppen stärker, führt Optimal-/Minimum-Intervalle ein, unterscheidet Dialyse nach Restnierenfunktion und ergänzt die Notfallregel einer kürzeren Wartezeit."
                  ],
                  variant: "impact"
                }
              ]
            }
          ],
          refs: [
            "Primärquelle: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), B.6, gedruckte S. 24 (PDF-S. 25)",
            "Primärquelle: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), B.7–B.8, gedruckte S. 25 (PDF-S. 26)",
            "Offizielle deutsche Fassung: ESUR Leitlinien für Kontrastmittel, Version 10.0 (2018), B.6–B.8, gedruckte S. 34–35 (PDF-S. 18)",
            "Quelle: ESUR Contrast Media Safety Committee Guidelines 2025, „Safe time intervals between contrast agent injections“, gedruckte S. 21–23"
          ]
        },
        action: {
          sections: [
            {
              label: "Bedeutung der 2025-Intervalle",
              paragraphs: [
                "Bei den elektiven Regeln verwendet die 2025-Quelle die Empfehlungsstärke „consider a waiting time“ – eine Wartezeit soll erwogen werden. Für jede Nierenfunktionsgruppe nennt die Quelle ein optimales Intervall mit einer Begründung über annähernd vollständige Clearance und ein minimales Intervall, wenn die klinische Indikation eine rasche Folgeuntersuchung erfordert."
              ]
            },
            {
              label: "Publikationshinweis",
              paragraphs: [
                "Im Abschnitt über zwei GBCA-Gaben verweist das 2025-Booklet bei der Begründung des optimalen Intervalls unerwartet auf die annähernd vollständige Clearance eines zuvor gegebenen iodhaltigen Kontrastmittels. Dies wird als Quellenanomalie dokumentiert und nicht zur Änderung der Intervallwerte verwendet."
              ]
            }
          ],
          nested: [
            {
              title: "Elektive Kombination am selben Tag: MRT + CT/(koronare) Angiographie",
              sections: [
                {
                  label: "ESUR-2025-Kernaussagen",
                  bullets: [
                    "Es ist besser, mit der MRT zu beginnen, außer wenn die CT für Nieren, Ureteren oder Harnblase als CT-Urographie vorgesehen ist.",
                    "eGFR >60 ml/min/1,73 m²: Eine Wartezeit von optimal 6 h und minimal 2 h erwägen.",
                    "eGFR 30–60 ml/min/1,73 m²: Eine Wartezeit von optimal 48 h und minimal 16 h erwägen.",
                    "eGFR <30 ml/min/1,73 m²: Eine Wartezeit von optimal 7 Tagen (168 h) und minimal 2,5 Tagen (60 h) erwägen.",
                    "Bei Notfall oder lebensbedrohlicher Situation keine Wartezeit einhalten und die Untersuchungen unmittelbar nacheinander durchführen."
                  ],
                  variant: "action"
                }
              ]
            },
            {
              title: "Zwei iodhaltige Kontrastmittelgaben — Routineuntersuchungen",
              sections: [
                {
                  label: "ESUR-2025-Kernaussagen",
                  bullets: [
                    "GFR >60 ml/min/1,73 m²: Eine Wartezeit von optimal 12 h und minimal 4 h erwägen.",
                    "GFR 30–60 ml/min/1,73 m²: Eine Wartezeit von optimal 48 h und minimal 16 h erwägen.",
                    "GFR <30 ml/min/1,73 m², einschließlich (Prä-)Dialyse mit Restnierenfunktion: Eine Wartezeit von optimal 7 Tagen (168 h) und minimal 2,5 Tagen (60 h) erwägen.",
                    "Bei Dialyse ohne Restnierenfunktion einen Abstand von mindestens 3 Dialysesitzungen zwischen aufeinanderfolgenden Gaben erwägen.",
                    "Bei Notfall oder lebensbedrohlicher Situation eine kürzere Wartezeit zwischen aufeinanderfolgenden iodhaltigen Kontrastmittelgaben verwenden."
                  ],
                  variant: "action"
                }
              ]
            },
            {
              title: "Zwei gadoliniumhaltige Kontrastmittelgaben — Routineuntersuchungen",
              sections: [
                {
                  label: "ESUR-2025-Kernaussagen",
                  bullets: [
                    "Ohne bekannte Niereninsuffizienz: Eine Wartezeit von optimal 12 h und minimal 4 h erwägen.",
                    "Moderate Nierenfunktionseinschränkung (falls verfügbar: eGFR 30–60 ml/min/1,73 m²): Eine Wartezeit von optimal 48 h und minimal 16 h erwägen.",
                    "Schwere Nierenfunktionseinschränkung und (Prä-)Dialyse mit Restnierenfunktion, eGFR <30 ml/min/1,73 m²: Eine Wartezeit von optimal 7 Tagen (168 h) und minimal 2,5 Tagen (60 h) erwägen.",
                    "Bei Dialyse ohne Restnierenfunktion einen Abstand von mindestens 3 Dialysesitzungen zwischen aufeinanderfolgenden Gaben erwägen.",
                    "Bei Notfall oder lebensbedrohlicher Situation eine kürzere Wartezeit zwischen aufeinanderfolgenden gadoliniumhaltigen Kontrastmittelgaben verwenden."
                  ],
                  variant: "action"
                }
              ]
            }
          ],
          refs: [
            "Quelle: ESUR Contrast Media Safety Committee Guidelines 2025, „Safe time intervals between contrast agent injections“, gedruckte S. 21–23",
            "Primärquelle 2018: ESUR Guidelines on Contrast Agents, Version 10.0, B.6–B.8, gedruckte S. 24–25",
            "Offizielle deutsche Fassung 2018: ESUR Leitlinien für Kontrastmittel, Version 10.0, B.6–B.8, gedruckte S. 34–35"
          ]
        }
      },

      {
        id: "laboratory_interference",
        level: "high",
        icon: "lab",
        title: "Analytische Interferenz mit Labortests",
        summary:
          "Version 10.0 enthielt bereits Empfehlungen zur Blut- und Urinprobenahme. Das Booklet 2025 nennt für die Probenahme nach intravaskulärer Kontrastmittelgabe getrennte empfohlene Wartezeiten für Blut und Urin in drei eGFR-Gruppen.",
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
                "Für laborchemische Proben in der Routinediagnostik empfahl Version 10.0, Urin- und Blutproben vorzugsweise vor der Kontrastmittelgabe abzunehmen. Bei normaler Nierenfunktion konnte eine Blutentnahme bei Bedarf 4 h nach der Gabe erfolgen. Bei reduzierter Nierenfunktion (eGFR <45 ml/min/1,73 m²) sollten Blutentnahmen so lange wie möglich hinausgezögert werden. Die offizielle deutsche Fassung sagt, dass „Sammelurin“ für 24 h unterbleiben sollte; die englische Fassung spricht von „urine collection“."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Das Booklet 2025 enthält einen eigenen Abschnitt zur analytischen Interferenz intravaskulärer Kontrastmittel mit Labortests. Es gibt Empfehlungen auf Grundlage eines Expertenkonsenses, unter anderem für iod- und gadoliniumhaltige Kontrastmittel, und nennt empfohlene Wartezeiten für Blut- und Urinproben nach eGFR-Gruppe."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Im Vergleich zu 2018 nennt das Booklet 2025 drei eGFR-Gruppen für jede Probenart: Für Blutentnahmen werden empfohlene Mindest- und Optimalwartezeiten angegeben, für Urinproben nur empfohlene Mindestwartezeiten."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), EN, Abschnitt C.6 „Non-emergency biochemical assays“, gedruckte S. 30 / PDF-S. 31.",
            "Quelle: Offizielle deutsche ESUR Leitlinien für Kontrastmittel, Version 10.0 (2018), Abschnitt C.6 „Laborchemische Proben in der Routinediagnostik“, gedruckte S. 41 / PDF-S. 21 (Doppelseite).",
            "Quelle: ESUR CMSC Contrast Agent Guidelines 2025 Booklet, „Analytical interference of intravascular contrast agents with clinical laboratory tests“, gedruckte/PDF-S. 23."
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR-2025-Kernaussagen",
              bullets: [
                "Empfohlene Wartezeit für Blutentnahmen nach intravaskulärer Kontrastmittelgabe: eGFR >60 ml/min/1,73 m² — mindestens 4 h; optimal 12 h.",
                "Empfohlene Wartezeit für Blutentnahmen nach intravaskulärer Kontrastmittelgabe: eGFR 30–60 ml/min/1,73 m² — mindestens 16 h; optimal 48 h.",
                "Empfohlene Wartezeit für Blutentnahmen nach intravaskulärer Kontrastmittelgabe: eGFR <30 ml/min/1,73 m² — mindestens 2,5 Tage (60 h); optimal 7 Tage (168 h).",
                "Empfohlene Wartezeit für Urinproben nach intravaskulärer Kontrastmittelgabe: eGFR >60 ml/min/1,73 m² — mindestens 24 h; eGFR 30–60 ml/min/1,73 m² — mindestens 48 h; eGFR <30 ml/min/1,73 m² — mindestens 7 Tage (168 h)."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Die Guideline von 2018 enthielt bereits konkrete Zeitangaben zur Blut- und Urinprobenahme. Das Booklet 2025 unterscheidet drei eGFR-Gruppen und gibt für Blutentnahmen empfohlene Mindest- und Optimalwartezeiten an, für Urinproben jedoch nur empfohlene Mindestwartezeiten."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), EN, Abschnitt C.6 „Non-emergency biochemical assays“, gedruckte S. 30 / PDF-S. 31.",
            "Quelle: Offizielle deutsche ESUR Leitlinien für Kontrastmittel, Version 10.0 (2018), Abschnitt C.6 „Laborchemische Proben in der Routinediagnostik“, gedruckte S. 41 / PDF-S. 21 (Doppelseite).",
            "Quelle: ESUR CMSC Contrast Agent Guidelines 2025 Booklet, „Analytical interference of intravascular contrast agents with clinical laboratory tests“, gedruckte/PDF-S. 23."
          ]
        }
      },

      {
        id: "extravasation",
        level: "high",
        icon: "extravasation",
        title: "Extravasation",
        summary:
          "Die Extravasationshinweise von 2025 ergänzen ausdrückliche Definitionen für leichte, moderate und schwere Fälle, genauere Schritte zur Erkennung und Meldung sowie konkrete Angaben zur Überwachung und chirurgischen Abklärung. Risikofaktoren, Prävention, Bildgebung und chirurgische Vorstellung waren bereits 2018 behandelt.",
        keywords: [
          "extravasation",
          "kontrastmittelaustritt",
          "schweregrad",
          "mild moderat schwer",
          ">150 mL",
          "chirurgische beurteilung"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Die englische und die offizielle deutsche Leitlinie von 2018 trennen bereits technische von patientenbezogenen Risikofaktoren. Sie beschreiben Risikoreduktion, eine möglicherweise hilfreiche bildgebende Dokumentation, meist ausreichende konservative Behandlung und die chirurgische Vorstellung bei Verdacht auf schwere Schäden."
              ]
            },
            {
              label: "2025",
              bullets: [
                "Definiert leichte, moderate und schwere Extravasationen anhand klinischer Befunde und sieht die Beurteilung des Schweregrades vor.",
                "Behält die Trennung technischer und patientenbezogener Risikofaktoren bei und konkretisiert weitere Massnahmen zur Risikoreduktion: Eine geeignete Oberarmvene wird bevorzugt; ausserdem nennt der Abschnitt eine geeignete Kanülengrösse, passende Flussraten und Drücke sowie die Minimierung des Kontrastmittelvolumens anhand von Indikation und Patientengrösse.",
                "Konkretisiert die Erkennung während und nach der Injektion, die Dokumentation im radiologischen Bericht und im lokalen Meldesystem, ein Patienteninformationsblatt sowie einen Nachsorgetermin, falls erforderlich.",
                "Bei moderaten oder schweren Fällen können zwei orthogonale Röntgenaufnahmen oder eine Schnittbildgebung helfen, Ausdehnung und Kompartimentierung zu beurteilen. Bei Verdacht auf schwere Schäden ist dringend chirurgischer Rat einzuholen; bei einem extravasierten Volumen >150 mL wird eine chirurgische Beurteilung ebenfalls empfohlen."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Gegenüber 2018 nennt der Abschnitt von 2025 drei Schweregrade, genauere Schritte zur Erkennung und Meldung, eine Überwachung leichter Fälle alle 2–4 Stunden und zusätzliche Anlässe für chirurgischen Rat."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Offizielle deutsche ESUR-Leitlinie 10.0 (2018), § C.1, Druckseite 36 (PDF-Seite 19).",
            "ESUR CMSC Guidelines 2025, Management and prevention of contrast agent extravasation, Druckseiten 20–21 (PDF-Seiten 20–21)."
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR-2025-Kernaussagen",
              bullets: [
                "Das Booklet von 2025 sieht die Einordnung als leicht, moderat oder schwer vor. Moderate Fälle erfordern engmaschige Überwachung; zur Prüfung einer neurovaskulären Beeinträchtigung wird eine ärztliche Beurteilung empfohlen.",
                "Der Abschnitt von 2025 konkretisiert die Prävention bei Venenzugang, Kanülengrösse, Fluss, Druck und Kontrastmittelvolumen. Sorgfältige Kanülierung und eine Testinjektion mit Kochsalzlösung waren bereits 2018 beschrieben.",
                "Für leichte Fälle nennt das Booklet von 2025 Hochlagern der Extremität, Eispackungen und Überwachung alle 2–4 Stunden. Bei Besserung ist die Entlassung vorgesehen; bleibt die Besserung aus, ist chirurgischer Rat erforderlich.",
                "Bei moderaten oder schweren Fällen können zwei orthogonale Röntgenaufnahmen oder eine Schnittbildgebung helfen, Ausdehnung und Kompartimentierung zu beurteilen. Die Komplikation ist im radiologischen Bericht und im lokalen Meldesystem zu dokumentieren; ein Patienteninformationsblatt sollte ausgehändigt und ein Nachsorgetermin vereinbart werden, falls erforderlich.",
                "Bei Verdacht auf schwere Schäden dringend chirurgischen Rat einholen. Auch bei einem extravasierten Volumen von mehr als 150 mL wird eine chirurgische Beurteilung empfohlen."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Die zusätzlichen Angaben von 2025 betreffen Schweregraddefinitionen, Erkennung, Meldung, Überwachung leichter Fälle und konkrete Anlässe für chirurgischen Rat; mehrere Massnahmen zur Risikoreduktion und Behandlung standen bereits in der Leitlinie von 2018."
              ]
            }
          ],
          refs: [
            "ESUR CMSC Guidelines 2025, Management and prevention of contrast agent extravasation, Druckseiten 20–21 (PDF-Seiten 20–21).",
            "Für den Vergleich mit 2018: offizielle deutsche ESUR-Leitlinie 10.0, § C.1, Druckseite 36 (PDF-Seite 19)."
          ]
        }
      },

      {
        id: "dialysis_refinement",
        level: "medium",
        icon: "dialysis",
        title: "Dialyse-bezogene Präzisierung",
        summary:
          "Der Dialyseabschnitt von 2025 unterscheidet innerhalb getrennter Abschnitte für Hämodialyse und CAPD ausdrücklich zwischen makrozyklischen und linearen GBCA.",
        keywords: [
          "dialyse",
          "hämodialyse",
          "makrozyklisch",
          "linear",
          "GBCA",
          "CAPD"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "ESUR 10.0 unterschied bereits Hämodialyse und CAPD sowie iodhaltige Röntgenkontrastmittel und GBCA. Bei Hämodialyse waren für iodhaltige Röntgenkontrastmittel die Abstimmung mit der Hämodialysesitzung nicht erforderlich und eine zusätzliche Hämodialyse zur Elimination nicht notwendig; bei gadoliniumhaltigen Kontrastmitteln wurde empfohlen, die Gabe mit dem Hämodialysezeitpunkt abzustimmen, und nach der Gabe sollte so früh wie möglich eine Hämodialyse durchgeführt werden.",
                "Bei CAPD war eine Hämodialyse zur Elimination iodhaltiger Röntgenkontrastmittel nicht notwendig; nach gadoliniumhaltigen Kontrastmitteln sollte die Notwendigkeit einer Hämodialyse mit dem überweisenden Arzt besprochen werden."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Bei Patientinnen und Patienten unter Hämodialyse ist nach makrozyklischen GBCA keine sofortige Dialysesitzung erforderlich; nach linearen Mitteln (z. B. leberspezifischen Mitteln) ist sie angezeigt und muss an den folgenden zwei Tagen wiederholt werden.",
                "Bei Patientinnen und Patienten unter CAPD ist nach makrozyklischen GBCA keine sofortige Dialysesitzung erforderlich; bei linearen GBCA sollte das NSF-Risiko gegen das Risiko der Anlage eines temporären Hämodialysekatheters abgewogen werden, in Rücksprache mit dem überweisenden Arzt."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Gegenüber 2018 ergänzt die GBCA-Guidance 2025 eine ausdrückliche Unterscheidung zwischen makrozyklischen und linearen Mitteln. Die Vorgaben zur sofortigen Dialyse unterscheiden sich nach Dialyseart und GBCA-Klasse."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR Guidelines on Contrast Agents 10.0 (2018 EN), § B.5 Dialysis and contrast medium administration, Druckseite 23 / PDF-Seite 24.",
            "Quelle: ESUR Leitlinien für Kontrastmittel 10.0 (offizielle DE-Fassung), § B.5 Dialyse und Kontrastmittelgabe, Druckseiten 33–34 / PDF-Seiten 17–18.",
            "Quelle: ESUR Contrast Media Safety Committee Guidelines 2025, Safe use of contrast agent administration in patients on dialysis, Druck-/PDF-Seite 19."
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR-2025-Kernaussagen",
              bullets: [
                "Bei iodhaltigen Röntgenkontrastmitteln ist für Hämodialysepatienten keine zeitliche Abstimmung der Injektion mit der Hämodialysesitzung oder den Hämodialysesitzungen erforderlich; zusätzliche Hämodialysesitzungen zur Entfernung des Kontrastmittels werden nicht empfohlen. Bei CAPD ist eine zusätzliche Hämodialyse zur Elimination iodhaltigen Röntgenkontrastmittels nicht notwendig.",
                "Nach makrozyklischen GBCA ist bei Hämodialyse oder CAPD keine sofortige Dialysesitzung erforderlich.",
                "Nach linearen GBCA ist bei Patientinnen und Patienten unter Hämodialyse eine sofortige Dialysesitzung angezeigt und muss an den folgenden zwei Tagen wiederholt werden.",
                "Bei CAPD und linearen GBCA sollte das NSF-Risiko in Rücksprache mit dem überweisenden Arzt gegen das Risiko der Anlage eines temporären Hämodialysekatheters abgewogen werden."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Die GBCA-Anweisungen von 2025 unterscheiden sich nach Dialyseart und GBCA-Klasse."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR Contrast Media Safety Committee Guidelines 2025, Safe use of contrast agent administration in patients on dialysis — Patients on haemodialysis; Patients on continuous ambulatory peritoneal dialysis, Druck-/PDF-Seite 19."
          ]
        }
      },

      {
        id: "new_clinical_scenarios",
        level: "medium",
        icon: "layers",
        title: "Eigene ESUR-2025-Abschnitte: Myasthenia gravis, HSG und CO₂-Angiographie",
        summary:
          "Die englische und die offizielle deutsche Ausgabe von 2018 behandeln Myasthenia gravis und HSG nicht; beide nennen Kohlendioxid nur in der Terminologie. Das Booklet 2025 enthält zu allen drei Themen eigene Unterabschnitte.",
        keywords: [
          "myasthenia gravis",
          "HSG",
          "hysterosalpingographie",
          "CO2",
          "vaskuläre eingriffe",
          "systemische erkrankungen"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Keine der beiden Ausgaben von 2018 behandelt Myasthenia gravis oder HSG. Beide nennen Kohlendioxid nur als Beispiel eines Röntgenkontrastmittels in der Terminologie; ein Unterabschnitt zur CO₂-Angiographie fehlt."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Myasthenia gravis steht unter „Safe use of contrast agents in patients with systemic diseases“. HSG und CO₂-Angiographie stehen als getrennte Unterabschnitte unter „Miscellaneous recommendations and topics“."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Dieser Vergleich belegt eine Änderung der im Booklet behandelten Themen und ihrer Gliederung."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR Guidelines on Contrast Agents, Version 10.0 (2018 EN), Inhaltsverzeichnis C.1–C.11, Drucks. 4–5 / PDF-S. 5–6; „Terminology: Contrast agents and contrast media“, Drucks. 5 / PDF-S. 6.",
            "Quelle: Offizielle deutsche ESUR Leitlinien für Kontrastmittel, Version 10.0 (2018 DE), Inhalt C.1–C.11, PDF-S. 4–5; „Terminologie: Kontrastmittel und Röntgenkontrastmittel“, Drucks. 10–11 / PDF-S. 6.",
            "Quelle: ESUR Contrast Media Safety Committee Guidelines 2025, Inhaltsverzeichnis, Druck-/PDF-S. 5; „Safe use of contrast agents in patients with myasthenia gravis“, S. 29; CO₂- und HSG-Unterabschnitte, S. 31."
          ]
        },
        action: {
          sections: [
            {
              label: "Aussagen der ESUR 2025",
              bullets: [
                "Bei Myasthenia gravis können laut Booklet 2025 intravenös verabreichte niedrig- oder iso-osmolare iodhaltige Röntgenkontrastmittel innerhalb der ersten 24 Stunden nach der Gabe mit einer Verschlechterung der Symptome verbunden sein, wahrscheinlich bei weniger als 5 % der Patientinnen und Patienten, die diese Mittel intravenös erhalten; gadoliniumhaltige Kontrastmittel werden für Patientinnen und Patienten mit Myasthenia gravis als sicher beschrieben.",
                "Der HSG-Unterabschnitt von 2025 weist darauf hin, dass die externe Validität begrenzt ist, weil einige früher verwendete Kontrastmittel nicht mehr auf dem Markt sind. Im Vergleich zu wasserbasierten Kontrastmitteln treten nach HSG mit ölbasierten Kontrastmitteln etwa 10 % mehr Schwangerschaften und Lebendgeburten auf und die Bildqualität ist signifikant besser; Intravasationen treten gleich häufig auf. Ölbasierte Kontrastmittel können längere Zeit in der Bauchhöhle verbleiben und haben einen signifikant stärkeren entzündlichen Effekt auf das Peritoneum; die klinischen Folgen sind unbekannt und bei der Anwendung ist Vorsicht geboten. Bei jeder Frau, die ein ölbasiertes Kontrastmittel erhält, soll die Schilddrüsenfunktion vor der HSG geprüft und danach 6 Monate lang überwacht werden; routinemässige zusätzliche Schilddrüsenfunktionstests beim Neugeborenen nach HSG sind nicht indiziert.",
                "Das Booklet 2025 bezeichnet die Evidenz zur CO₂-Angiographie als Alternative zu iodhaltigen Röntgenkontrastmitteln als begrenzt. CO₂ scheint bei vaskulären Eingriffen eine sichere Alternative zu sein und könnte das CA-AKI-Risiko insbesondere bei PAD-Eingriffen senken; dabei sind spezifische Kontraindikationen und Sicherheitsmassnahmen sowie die höhere Häufigkeit nicht schwerwiegender unerwünschter Ereignisse zu berücksichtigen. Weitere grosse RCTs sind erforderlich, um diese Ergebnisse zu bestätigen und CA-AKI-Risikofaktoren bei EVAR und interventionellen Eingriffen wegen PAD weiter zu untersuchen."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Dies sind eigene Unterabschnitte im Booklet 2025; Kohlendioxid wurde bereits 2018 in der Terminologie genannt."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR Contrast Media Safety Committee Guidelines 2025, „Safe use of contrast agents in patients with myasthenia gravis“, Druck-/PDF-S. 29.",
            "Quelle: ESUR Contrast Media Safety Committee Guidelines 2025, „Safety of CO₂ as an alternative to iodine-based contrast media in vascular procedures“ und „Safe use of contrast agents in hysterosalpingography (HSG)“, Druck-/PDF-S. 31."
          ]
        }
      },

      {
        id: "other_reorganized_topics",
        level: "medium",
        icon: "stack",
        title: "Weitere reorganisierte oder fortgeführte Themen",
        summary:
          "Mehrere Inhalte bleiben erhalten, werden umgruppiert oder ausgebaut, ohne dass sie immer als grosse Headline-Änderungen erscheinen.",
        keywords: [
          "schwangerschaft",
          "laktation",
          "pädiatrie",
          "metformin",
          "retention",
          "warming",
          "fasting",
          "nichtvaskuläres jod",
          "systemische erkrankungen",
          "sickle cell"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Schwangerschaft / Laktation, pädiatrische Anwendung, Metformin, Gadolinium-Retention, Warming / Fasting und mehrere ältere Miscellaneous-Themen waren bereits im 2018er Booklet enthalten.",
                "Einige Themen wie late reactions, very late reactions, sickle cell disease und effects on blood / endothelium waren im älteren Aufbau stärker separat sichtbar."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Viele dieser Inhalte bleiben erhalten, werden aber anders gruppiert. Schwangerschaft / Laktation und Pädiatrie bleiben, Metformin ist in systemische Erkrankungen eingebettet, Gadolinium-Retention bleibt, und die nichtvaskuläre Gabe iodhaltiger Kontrastmittel wird breiter beschrieben.",
                "Gleichzeitig werden manche 2018 prominenter sichtbaren Themen im 2025er Summary-Aufbau weniger separat hervorgehoben."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Dass ein Thema im 2025er Inhaltsverzeichnis weniger prominent erscheint, bedeutet nicht automatisch, dass es inhaltlich entfernt wurde. In mehreren Fällen wurde es fortgeführt, aber umgruppiert."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR 10.0 Guideline",
            "Quelle: ESUR 2025 Summary Guideline"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR-2025-Kernaussagen",
              bullets: [
                "Es sollte nicht automatisch angenommen werden, dass ein Thema verschwunden ist, nur weil es im 2025er Summary-Aufbau weniger separat sichtbar ist.",
                "Für umgruppierte Inhalte wie Metformin und weitere krankheitsbezogene Themen sollte in 2025 der Block zu systemischen Erkrankungen genutzt werden.",
                "Wenn die breitere Formulierung zur nichtvaskulären Gabe iodhaltiger Kontrastmittel gebraucht wird, sollte der 2025er Text verwendet werden."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Nicht jede Differenz zwischen 2018 und 2025 ist eine neue Regel. Teilweise geht es um Framing, Gruppierung oder unterschiedliche Betonung."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR 2025 Summary Guideline",
            "Quelle: ESUR 10.0 Guideline"
          ]
        }
      }
    ]
  };

  const { setBodyMode, showMainView, showHsrTab, clearButtons } = window.ESUR.app.nav.init(state);


  const flowOutput = document.getElementById("flowOutput");
  const flowSafety = document.getElementById("flowSafety");
  const acuteImmediateOutput = document.getElementById("acuteImmediateOutput");
  const acuteOutput = document.getElementById("acuteOutput");
  const switchOutput = document.getElementById("switchOutput");
  const tryptaseOutput = document.getElementById("tryptaseOutput");
  const nihrOutput = document.getElementById("nihrOutput");

  const icmCard = document.getElementById("icmCard");
  const gbcaCard = document.getElementById("gbcaCard");

  const changesSummaryGrid = document.getElementById("changesSummaryGrid");
  const changesList = document.getElementById("changesList");
  const changesSearchInput = document.getElementById("changesSearch");

  const { t, applyStaticTranslations } = window.ESUR.app.i18nApply.init({
    state,
    i18n,
    escapeHtml: window.ESUR.utils.escapeHtml,
    changesSearchInput
  });

  const { escapeHtml, fmt } = window.ESUR.utils;

  const { levelLabel, modeLabel } = window.ESUR.app.changeLabels.init({ t });

  const { iconSvg } = window.ESUR.icons;

  document.addEventListener("click", function () {
  window.requestAnimationFrame(setBodyMode);
});
  function defaultAcutePattern(severity) {
    if (severity === "moderate") return "moderate_urticaria";
    if (severity === "severe") return "severe_anaphylaxis";
    return "mild_general";
  }

  function setSegment(seg, value) {
    state[seg] = value;

    if (seg === "acuteSeverity") {
      state.acutePattern = defaultAcutePattern(value);
    }

    document.querySelectorAll(`.seg__btn[data-seg="${seg}"]`).forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.value === value);
    });

    if (seg === "situation") setBodyMode();

    if (seg === "cmtype") {
      if (icmCard) icmCard.hidden = value !== "icm";
      if (gbcaCard) gbcaCard.hidden = value !== "gbca";
    }

    renderAll();
  }

  const { renderFlow } = window.ESUR.hsr.previous.init({
    state,
    t,
    escapeHtml,
    flowOutput,
    flowSafety
  });


  const { renderAcuteManagement } = window.ESUR.hsr.acute.init({
    state,
    t,
    escapeHtml,
    defaultAcutePattern,
    acuteImmediateOutput,
    acuteOutput
  });

  const { renderSwitch } = window.ESUR.hsr.switch.init({
    state,
    t,
    escapeHtml,
    switchOutput,
    icmCard,
    gbcaCard
  });

  const { renderTryptase, calcTryptase } = window.ESUR.hsr.tryptase.init({
    t,
    escapeHtml,
    fmt,
    tryptaseOutput
  });

  const { renderNihr } = window.ESUR.hsr.nihr.init({
    state,
    t,
    escapeHtml,
    nihrOutput
  });

    function getChanges() {
    return changesLibrary[state.lang];
  }

  function flattenChangeText(change) {
    const chunks = [change.title, change.summary, ...(change.keywords || [])];

    const readSections = (block) => {
      if (!block) return;

      (block.sections || []).forEach((section) => {
        chunks.push(section.label || "");
        (section.paragraphs || []).forEach((p) => chunks.push(p));
        (section.bullets || []).forEach((b) => chunks.push(b));
      });

      (block.nested || []).forEach((item) => {
        chunks.push(item.title || "");
        (item.sections || []).forEach((section) => {
          chunks.push(section.label || "");
          (section.paragraphs || []).forEach((p) => chunks.push(p));
          (section.bullets || []).forEach((b) => chunks.push(b));
        });
      });

      (block.refs || []).forEach((r) => chunks.push(r));
    };

    readSections(change.compare);
    readSections(change.action);

    return chunks.join(" ").toLowerCase();
  }

  function getVisibleChanges() {
    const search = state.changesSearch.trim().toLowerCase();
    return getChanges().filter((change) => {
      const levelMatch = state.changesFilter === "all" || change.level === state.changesFilter;
      if (!levelMatch) return false;
      if (!search) return true;
      return flattenChangeText(change).includes(search);
    });
  }

  function renderChangeSection(section) {
    const classes = ["change-section"];
    if (section.variant === "action") classes.push("change-section--action");
    if (section.variant === "impact") classes.push("change-section--impact");

    const paragraphs = (section.paragraphs || [])
      .map((p) => `<p>${escapeHtml(p)}</p>`)
      .join("");

    const bullets = (section.bullets || []).length
      ? `<ul>${section.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
      : "";

    return `
      <div class="${classes.join(" ")}">
        <div class="change-section__label">${escapeHtml(section.label)}</div>
        <div class="change-section__content">
          ${paragraphs}
          ${bullets}
        </div>
      </div>
    `;
  }

  function renderNestedItem(item) {
    return `
      <div class="change-nested__item">
        <div class="change-nested__head">
          <div class="change-nested__title">${escapeHtml(item.title)}</div>
        </div>
        <div class="change-nested__body">
          ${(item.sections || []).map(renderChangeSection).join("")}
        </div>
      </div>
    `;
  }

  function renderRefs(refs) {
    return `
      <div class="change-card__refs">
        ${(refs || []).map((ref) => `<span class="change-ref">${escapeHtml(ref)}</span>`).join("")}
      </div>
    `;
  }

  function renderChangeBody(change) {
    const block = state.changesMode === "action" ? change.action : change.compare;
    const sections = (block.sections || []).map(renderChangeSection).join("");
    const nested = (block.nested || []).length
      ? `<div class="change-nested">${block.nested.map(renderNestedItem).join("")}</div>`
      : "";

    return `
      <div class="change-card__body" ${state.openChanges.has(change.id) ? "" : "hidden"}>
        ${sections}
        ${nested}
        ${renderRefs(block.refs || [])}
      </div>
    `;
  }

  function renderChangeSummary(change) {
    return `
      <article class="change-summary" data-change-summary="${escapeHtml(change.id)}">
        <div class="change-summary__top">
          <div class="change-summary__titlewrap">
            <div class="change-summary__titleline">
              ${iconSvg(change.icon, "change-summary__icon")}
              <div class="change-summary__title">${escapeHtml(change.title)}</div>
            </div>
            <span class="change-pill change-pill--${escapeHtml(change.level)}">${escapeHtml(levelLabel(change.level))}</span>
          </div>
        </div>
        <div class="change-summary__text">${escapeHtml(change.summary)}</div>
        <button class="change-summary__jump" type="button" data-change-open="${escapeHtml(change.id)}">${escapeHtml(t("changes_open"))}</button>
      </article>
    `;
  }

  function renderChangeCard(change) {
    const isOpen = state.openChanges.has(change.id);
    return `
      <article class="change-card ${isOpen ? "is-open" : ""}" id="change-card-${escapeHtml(change.id)}" data-change-card="${escapeHtml(change.id)}">
        <button class="change-card__header" type="button" data-change-toggle="${escapeHtml(change.id)}" aria-expanded="${isOpen ? "true" : "false"}">
          <div class="change-card__titlewrap">
            <div class="change-card__titleline">
              ${iconSvg(change.icon, "change-card__icon")}
              <div class="change-card__title">${escapeHtml(change.title)}</div>
            </div>
            <div class="change-card__meta">
              <span class="change-pill change-pill--${escapeHtml(change.level)}">${escapeHtml(levelLabel(change.level))}</span>
              <span class="change-pill change-pill--mode">${escapeHtml(modeLabel(state.changesMode))}</span>
            </div>
          </div>
          ${iconSvg("chevron", "change-card__chevron")}
        </button>
        ${renderChangeBody(change)}
      </article>
    `;
  }

  function updateChangeControlButtons() {
    document.querySelectorAll("[data-change-filter]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.changeFilter === state.changesFilter);
    });

    document.querySelectorAll("[data-change-mode]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.changeMode === state.changesMode);
    });

    if (changesSearchInput && changesSearchInput.value !== state.changesSearch) {
      changesSearchInput.value = state.changesSearch;
    }
  }

  function attachChangeEvents() {
    document.querySelectorAll("[data-change-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.changeToggle;
        if (state.openChanges.has(id)) {
          state.openChanges.delete(id);
        } else {
          state.openChanges.add(id);
        }
        renderChanges();
      });
    });

    document.querySelectorAll("[data-change-open]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.changeOpen;
        state.openChanges.add(id);
        renderChanges();

        requestAnimationFrame(() => {
          const target = document.getElementById(`change-card-${id}`);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });
    });
  }

  function renderChanges() {
  if (!changesSummaryGrid || !changesList) return;

  updateChangeControlButtons();
  changesSummaryGrid.innerHTML = "";

  const visible = getVisibleChanges();

  if (!visible.length) {
    const empty = `<div class="change-empty">${escapeHtml(t("changes_no_results"))}</div>`;
    changesList.innerHTML = empty;
    return;
  }

  changesList.innerHTML = visible.map(renderChangeCard).join("");

  attachChangeEvents();
}

  function renderAll() {
  setBodyMode();

  applyStaticTranslations();
  renderFlow();
  renderAcuteManagement();
  renderSwitch();
  renderTryptase();
  renderNihr();
  renderChanges();
}

  function refreshComputedModulesAfterLanguageChange() {
    const baselineVal = document.getElementById("baseline")?.value ?? "";
    const acuteVal = document.getElementById("acute")?.value ?? "";
    if (baselineVal !== "" && acuteVal !== "") {
      calcTryptase();
    } else {
      renderTryptase();
    }

    renderNihr();
    renderChanges();
  }

  function resetAll() {
    state.mainNav = "hsr";
    state.hsrTab = "guidance";

    state.situation = "elective";
    state.reaction = "moderate";
    state.cmtype = "icm";
    state.nihrCmtype = "icm";
    state.nihrSeverity = "mild";
    state.nihrCulpritKnown = "known";
    state.acuteSeverity = "mild";
    state.acutePattern = "mild_general";
    state.icm = null;
    state.gbca = null;



    state.changesFilter = "all";
    state.changesMode = "compare";
    state.changesSearch = "";
    state.openChanges = new Set();

    document.body.classList.remove("emergency");

    const defaults = {
      situation: "elective",
      reaction: "moderate",
      cmtype: "icm",
      nihrCmtype: "icm",
      nihrSeverity: "mild",
      nihrCulpritKnown: "known",
      acuteSeverity: "mild",
      acutePattern: "mild_general",
    };

    Object.keys(defaults).forEach((seg) => {
      document.querySelectorAll(`.seg__btn[data-seg="${seg}"]`).forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.value === defaults[seg]);
      });
    });

    clearButtons("icm");
    clearButtons("gbca");

    document.querySelectorAll("[data-hsr-tab]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.hsrTab === "guidance");
    });


    document.querySelectorAll(".bottomnav__btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.mainNav === "hsr");
    });

    document.querySelectorAll("[data-change-filter]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.changeFilter === "all");
    });

    document.querySelectorAll("[data-change-mode]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.changeMode === "compare");
    });

    const idsToClear = [
      "baseline",
      "acute",
      "changesSearch"
    ];

    idsToClear.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });

    document.querySelectorAll(".nihr-check").forEach((el) => (el.checked = false));

    if (tryptaseOutput) {
      delete tryptaseOutput.dataset.ready;
      tryptaseOutput.innerHTML = "";
    }

    showMainView("hsr");
    showHsrTab("guidance");
    setBodyMode();
    renderAll();
  }
window.ESUR.app.disclaimer.init();

  // Main nav
  document.querySelectorAll(".bottomnav__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      showMainView(btn.dataset.mainNav);
    });
  });

  // HSR subnav
  document.querySelectorAll("[data-hsr-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      showHsrTab(btn.dataset.hsrTab);
    });
  });

  // Generic segment buttons
  [
    "situation",
    "reaction",
    "cmtype",
    "nihrCmtype",
    "nihrSeverity",
    "nihrCulpritKnown",
    "acuteSeverity",
    "acutePattern",
  ].forEach((seg) => {
    document.querySelectorAll(`.seg__btn[data-seg="${seg}"]`).forEach((btn) => {
      btn.addEventListener("click", () => setSegment(seg, btn.dataset.value));
    });
  });

  // ICM/GBCA group selectors
  document.querySelectorAll('.seg__btn[data-seg="icm"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      state.icm = btn.dataset.value;
      clearButtons("icm");
      btn.classList.add("active");
      renderSwitch();
    });
  });

  document.querySelectorAll('.seg__btn[data-seg="gbca"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      state.gbca = btn.dataset.value;
      clearButtons("gbca");
      btn.classList.add("active");
      renderSwitch();
    });
  });

  // Practice Changes controls
  document.querySelectorAll("[data-change-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.changesFilter = btn.dataset.changeFilter;
      renderChanges();
    });
  });

  document.querySelectorAll("[data-change-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.changesMode = btn.dataset.changeMode;
      renderChanges();
    });
  });

  if (changesSearchInput) {
    changesSearchInput.addEventListener("input", (event) => {
      state.changesSearch = event.target.value || "";
      renderChanges();
    });
  }

  // Tryptase calculator
  const calcBtn = document.getElementById("calcTryptase");
  if (calcBtn) calcBtn.addEventListener("click", calcTryptase);



  document.querySelectorAll(".nihr-check").forEach((el) => el.addEventListener("change", renderNihr));

  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) resetBtn.addEventListener("click", resetAll);

  const langEn = document.getElementById("lang-en");
  const langDe = document.getElementById("lang-de");

  if (langEn) {
    langEn.addEventListener("click", () => {
      state.lang = "en";
      langEn.classList.add("active");
      if (langDe) langDe.classList.remove("active");
      renderAll();
      refreshComputedModulesAfterLanguageChange();
    });
  }

  if (langDe) {
    langDe.addEventListener("click", () => {
      state.lang = "de";
      langDe.classList.add("active");
      if (langEn) langEn.classList.remove("active");
      renderAll();
      refreshComputedModulesAfterLanguageChange();
    });
  }

  showMainView("hsr");
  showHsrTab("guidance");
  setBodyMode();
  renderAll();
});

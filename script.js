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
          "2025 moves from a booklet-style version update to an electronic, modular guidance framework with yearly updates.",
        keywords: [
          "publication",
          "structure",
          "electronic",
          "yearly update",
          "modular",
          "permanent work in progress"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "ESUR 10.0 was presented as a classical guideline booklet with the large sections General adverse reactions, Renal adverse reactions (PC-AKI), and Miscellaneous."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "The 2025 document is organized as topic-based modules such as hypersensitivity, CA-AKI, dialysis, extravasation, waiting times, laboratory interference, systemic diseases, HSG, and CO₂.",
                "It is also described as an electronic, annually updated document and a permanent work in progress."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "The newer structure is easier to map to concrete clinical questions and should not be read as a simple static reprint of the 2018 booklet."
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
                "When citing current ESUR contrast safety guidance, use the 2025 electronic guidance rather than treating it as a conventional booklet update.",
                "Expect topic-based modules and yearly electronic updates when checking whether a practice point has changed."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "This is a structural change in how the guidance is maintained and accessed, even where the underlying clinical rule has not dramatically changed."
              ]
            }
          ],
          refs: [
            "Source: ESUR 2025 summary guideline",
            "Source: ESUR 10.0 guideline"
          ]
        }
      },

      {
        id: "hypersensitivity",
        level: "high",
        icon: "warningDrop",
        title: "Hypersensitivity",
        summary:
          "This is the strongest clinical redesign in the 2025 guidance: clearer classification, stronger allergy work-up, and more structured re-exposure pathways.",
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
                "The 2018 guideline already addressed acute, late, and very late adverse reactions, but the structure was less centered on modern allergy work-up and formal re-exposure pathways.",
                "Classification and management were less explicitly separated into immediate and non-immediate hypersensitivity reactions."
              ]
            },
            {
              label: "2025",
              bullets: [
                "Distinguishes immediate and non-immediate hypersensitivity reactions more clearly.",
                "Explicitly uses both ACR and Ring & Messmer classification frameworks.",
                "Expands acute management, including structured observation, IV access, ABCDE-style thinking, and clearer positioning / supportive measures.",
                "Strengthens tryptase use, documentation, and prevention of recurrent reactions.",
                "Separates recurrent-reaction management by severity and by elective versus emergency situations."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "Compared with 2018, the 2025 framework is more allergy-oriented and more structured for future contrast decisions, especially after moderate or severe reactions.",
                "Documentation of the exact agent and the reaction details becomes much more important because later testing and re-exposure planning depend on it."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR 10.0 guideline",
            "Source: ESUR 2025 hypersensitivity guidance"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 action points",
              bullets: [
                "ESUR 2025 recommends formal allergy assessment after moderate or severe reactions and after clinically relevant non-immediate reactions.",
                "During future contrast administration, observation for at least 30 min with IV access in place is described.",
                "If the culprit agent is known and no allergy-based recommendation is available, use of a different contrast agent may be considered.",
                "For severe NIHR / SCAR, avoidance of the involved contrast agent class is described.",
                "Tryptase sampling is described within 4 h, with a baseline sample after ≥24 h."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "This part of the guideline is no longer just about labeling a prior reaction. It is now built around structured risk documentation, specialist work-up, and better-controlled re-exposure decisions."
              ]
            }
          ],
          refs: [
            "Source: ESUR 2025 hypersensitivity guidance",
            "Source: ESUR 10.0 guideline"
          ]
        }
      },

      {
        id: "ca_aki_terminology",
        level: "low",
        icon: "kidney",
        title: "Renal terminology: PC-AKI → CA-AKI",
        summary:
          "The renal section is renamed and aligned with newer terminology, but the core preventive framework is not completely rebuilt.",
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
                "The 2018 renal chapter used the term PC-AKI (post-contrast acute kidney injury)."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "The 2025 guidance uses CA-AKI (contrast-associated acute kidney injury) and explicitly aligns this wording with newer consensus terminology."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "This mainly affects terminology, communication, and alignment with newer literature. It should not be mistaken for the strongest practical change in the renal section."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR 10.0 guideline",
            "Source: ESUR 2025 CA-AKI guidance"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 action points",
              bullets: [
                "Use the term CA-AKI in current communication and documentation when referring to the updated ESUR framework.",
                "Do not overstate this wording change as a major new bedside rule."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "The terminology change aligns ESUR with newer nephrology / radiology consensus language, while much of the underlying risk framework remains familiar."
              ]
            }
          ],
          refs: [
            "Source: ESUR 2025 CA-AKI guidance",
            "Source: ESUR 10.0 guideline"
          ]
        }
      },

      {
        id: "waiting_times",
        level: "high",
        icon: "clock",
        title: "Safe time intervals between contrast administrations",
        summary:
          "2025 turns waiting times into a distinct practice block and separates mixed MRI/CT scenarios from repeated iodine-only and gadolinium-only administrations.",
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
                "The 2018 guideline already discussed same-day iodine + gadolinium administration, two iodine administrations, and two gadolinium administrations, but as older stand-alone chapters with a less operational framework."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "The 2025 guidance makes this a more explicit practice section and separates scenario-specific intervals, including mixed MRI / CT workflows and repeated administrations of the same contrast class."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "This topic should not be reduced to one generic eGFR rule. The 2025 guidance differentiates between mixed GBCA → ICM workflows, two ICM injections, and two GBCA injections."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR 10.0 guideline",
            "Source: ESUR 2025 waiting-time guidance"
          ]
        },
        action: {
          sections: [
            {
              label: "Why this topic needs separate scenarios",
              paragraphs: [
                "ESUR 2025 does not use one single waiting-time rule for every situation. The mixed MRI/CT scenario is handled separately from repeated iodine-only and gadolinium-only administrations."
              ]
            }
          ],
          nested: [
            {
              title: "Mixed elective MRI + CT/(coronary) angiography",
              sections: [
                {
                  label: "ESUR 2025 action points",
                  bullets: [
                    "For elective same-day combinations, ESUR 2025 states it is better to start with MRI, except CT urography.",
                    "If GBCA is given before ICM: eGFR >60: minimum 2 h, optimal 6 h.",
                    "If GBCA is given before ICM: eGFR 30–60: minimum 16 h, optimal 48 h.",
                    "If GBCA is given before ICM: eGFR <30: minimum 60 h, optimal 168 h.",
                    "In emergency or life-threatening situations, no waiting time / back-to-back administration may still be used."
                  ],
                  variant: "action"
                },
                {
                  label: "Why this matters",
                  paragraphs: [
                    "This is the scenario where a too-simplified “4 h / 12 h for everyone” rule becomes wrong."
                  ]
                }
              ]
            },
            {
              title: "Two iodine-based contrast administrations",
              sections: [
                {
                  label: "ESUR 2025 action points",
                  bullets: [
                    "eGFR >60: minimum 4 h, optimal 12 h.",
                    "eGFR 30–60: minimum 16 h, optimal 48 h.",
                    "eGFR <30: minimum 60 h, optimal 168 h.",
                    "Dialysis without remnant renal function: at least 3 dialysis sessions."
                  ],
                  variant: "action"
                }
              ]
            },
            {
              title: "Two gadolinium-based contrast administrations",
              sections: [
                {
                  label: "ESUR 2025 action points",
                  bullets: [
                    "Without known renal impairment: minimum 4 h, optimal 12 h.",
                    "eGFR 30–60: minimum 16 h, optimal 48 h.",
                    "eGFR <30: minimum 60 h, optimal 168 h.",
                    "Dialysis without remnant renal function: at least 3 dialysis sessions."
                  ],
                  variant: "action"
                }
              ]
            }
          ],
          refs: [
            "Source: ESUR 2025 waiting-time guidance",
            "Source: ESUR 10.0 guideline"
          ]
        }
      },

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
      },

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
      },

      {
        id: "dialysis_refinement",
        level: "medium",
        icon: "dialysis",
        title: "Dialysis-related refinement",
        summary:
          "2025 refines the dialysis section, especially for GBCA, and differentiates more clearly between macrocyclic and linear agents.",
        keywords: [
          "dialysis",
          "haemodialysis",
          "macrocyclic",
          "linear",
          "GBCA",
          "CAPD",
          "rest diuresis"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "The 2018 guideline was more general: no special timing with dialysis for iodine-based contrast, and dialysis correlation / extra haemodialysis was recommended more broadly for GBCA."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "The newer guidance is more explicit: after macrocyclic GBCA, immediate dialysis is not required, whereas after linear agents immediate dialysis is described and repetition on the following two days is advised.",
                "It also highlights the relevance of remnant renal function and CAPD-specific trade-offs."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "The dialysis section is no longer just “dialyse soon after GBCA.” It is more agent-specific and more nuanced."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR 10.0 guideline",
            "Source: ESUR 2025 dialysis guidance"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 action points",
              bullets: [
                "After macrocyclic GBCA, immediate dialysis is not described as necessary.",
                "After linear GBCA, immediate dialysis is described and repetition on the following two days is advised.",
                "In CAPD and similar settings, the guideline describes weighing the NSF risk of linear agents against the risk of temporary haemodialysis access.",
                "For iodine-based contrast in end-stage renal failure, the role of remnant diuresis is highlighted more clearly."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "The 2025 section is more specific and avoids lumping all GBCA into one dialysis rule."
              ]
            }
          ],
          refs: [
            "Source: ESUR 2025 dialysis guidance",
            "Source: ESUR 10.0 guideline"
          ]
        }
      },

      {
        id: "new_clinical_scenarios",
        level: "medium",
        icon: "layers",
        title: "New clinical scenarios: myasthenia gravis, HSG, CO₂",
        summary:
          "2025 explicitly adds or foregrounds topics that were absent or not separately framed in the 2018 booklet.",
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
                "The 2018 booklet did not have dedicated practice chapters for myasthenia gravis, hysterosalpingography, or CO₂ as an alternative intravascular contrast option."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "The 2025 guidance explicitly includes myasthenia gravis within systemic diseases and adds dedicated sections for HSG and for CO₂ as an alternative to iodine-based contrast media in vascular procedures."
              ]
            },
            {
              label: "Practical impact",
              paragraphs: [
                "These areas are easier to find and use in the 2025 guidance, rather than requiring extrapolation from broader sections."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Source: ESUR 2025 summary guideline",
            "Source: ESUR 10.0 guideline"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR 2025 action points",
              bullets: [
                "Use the 2025 guidance when questions arise about myasthenia gravis and contrast use, because this topic is now explicitly addressed.",
                "Use the 2025 dedicated section for hysterosalpingography rather than extrapolating from general contrast rules.",
                "Use the 2025 CO₂ section when considering CO₂ as an alternative to iodine-based contrast in vascular procedures."
              ],
              variant: "action"
            },
            {
              label: "Why this matters",
              paragraphs: [
                "These are genuine additions or newly explicit topic areas, not just cosmetic rearrangements."
              ]
            }
          ],
          refs: [
            "Source: ESUR 2025 summary guideline",
            "Source: ESUR 10.0 guideline"
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
          "2025 verschiebt sich die Guidance von einer Booklet-artigen Versionslogik zu einem elektronischen, modularen und jährlich aktualisierten Rahmen.",
        keywords: [
          "publikation",
          "struktur",
          "elektronisch",
          "jährliche aktualisierung",
          "modular",
          "permanent work in progress"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "ESUR 10.0 war als klassisches Leitlinien-Booklet aufgebaut, mit den grossen Bereichen General adverse reactions, Renal adverse reactions (PC-AKI) und Miscellaneous."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Die 2025er Guidance ist themenbasiert modular aufgebaut, etwa zu Hypersensitivität, CA-AKI, Dialyse, Extravasation, Wartezeiten, Laborinterferenz, systemischen Erkrankungen, HSG und CO₂.",
                "Sie wird zudem als elektronisches, jährlich aktualisiertes Dokument und als permanent work in progress beschrieben."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Die neuere Struktur lässt sich direkter auf konkrete klinische Fragen abbilden und sollte nicht als einfacher statischer Nachdruck des 2018er Booklets gelesen werden."
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
                "Wenn du aktuelle ESUR-Kontrastmittel-Guidance zitierst oder vermittelst, sollte die elektronische 2025er Guidance als Referenz dienen und nicht nur ein klassisches Booklet-Update.",
                "Es sollte erwartet werden, dass topic-basierte Module und jährliche elektronische Aktualisierungen relevant sind, wenn ein Praxispunkt neu überprüft wird."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Das ist eine strukturelle Änderung in der Pflege und Zugänglichkeit der Guidance, auch dort, wo sich die zugrunde liegende klinische Regel nicht dramatisch verändert hat."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR 2025 Summary Guideline",
            "Quelle: ESUR 10.0 Guideline"
          ]
        }
      },

      {
        id: "hypersensitivity",
        level: "high",
        icon: "warningDrop",
        title: "Hypersensitivität",
        summary:
          "Das ist der stärkste klinische Umbau der 2025er Guidance: klarere Klassifikation, stärkerer allergologischer Fokus und strukturiertere Re-Exposure-Pfade.",
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
                "Die 2018er Guideline behandelte akute, späte und sehr späte Reaktionen bereits, war aber weniger um moderne allergologische Abklärung und formalisierte Re-Exposure-Pfade herum aufgebaut.",
                "Klassifikation und Management waren weniger explizit in immediate und non-immediate hypersensitivity reactions getrennt."
              ]
            },
            {
              label: "2025",
              bullets: [
                "Klare Trennung zwischen immediate und non-immediate hypersensitivity reactions.",
                "Explizite Nutzung sowohl der ACR- als auch der Ring-&-Messmer-Klassifikation.",
                "Deutlich ausgebautes Akutmanagement mit strukturierter Beobachtung, liegendem IV-Zugang, ABCDE-Denke sowie präziserer Lagerung / Supportivmassnahmen.",
                "Stärkerer Fokus auf Tryptase, Dokumentation und Prävention erneuter Reaktionen.",
                "Getrennte Re-Exposure-Logik nach Schweregrad sowie nach elektiver versus notfallmässiger Situation."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Im Vergleich zu 2018 ist die 2025er Guidance deutlich allergologischer und strukturierter, vor allem nach moderaten oder schweren Reaktionen.",
                "Die exakte Dokumentation des auslösenden Kontrastmittels und der Reaktionsdetails wird viel wichtiger, weil spätere Tests und Re-Exposure-Entscheidungen davon abhängen."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR 10.0 Guideline",
            "Quelle: ESUR 2025 Hypersensitivitäts-Guidance"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR-2025-Kernaussagen",
              bullets: [
                "Nach moderaten oder schweren Reaktionen sowie nach klinisch relevanten NIHR beschreibt ESUR 2025 eine formelle allergologische Abklärung.",
                "Bei zukünftiger Kontrastmittelgabe wird eine Beobachtung von mindestens 30 min mit liegendem IV-Zugang beschrieben.",
                "Wenn das auslösende Mittel bekannt ist und keine allergologisch basierte Empfehlung vorliegt, kann die Verwendung eines anderen Kontrastmittels erwogen werden.",
                "Bei schweren NIHR / SCAR wird die Vermeidung der betroffenen Kontrastmittelklasse beschrieben.",
                "Eine Tryptase-Bestimmung innerhalb von 4 h sowie eine Baseline-Bestimmung nach ≥24 h werden beschrieben."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Dieser Guideline-Teil dreht sich nicht mehr nur um das Etikett einer früheren Reaktion. Er ist jetzt auf strukturierte Risikodokumentation, Fachabklärung und kontrolliertere Re-Exposure-Entscheidungen ausgerichtet."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR 2025 Hypersensitivitäts-Guidance",
            "Quelle: ESUR 10.0 Guideline"
          ]
        }
      },

      {
        id: "ca_aki_terminology",
        level: "low",
        icon: "kidney",
        title: "Renale Terminologie: PC-AKI → CA-AKI",
        summary:
          "Der renale Abschnitt wird umbenannt und an neuere Terminologie angepasst, ohne dass das präventive Grundgerüst komplett neu gebaut wird.",
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
                "Die 2018er Guideline verwendete im renalen Kapitel den Begriff PC-AKI (post-contrast acute kidney injury)."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Die 2025er Guidance verwendet CA-AKI (contrast-associated acute kidney injury) und verknüpft diese Wortwahl explizit mit neuerer Konsensterminologie."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Das betrifft vor allem Terminologie, Kommunikation und den Anschluss an die neuere Literatur. Es sollte nicht als grösste praktische Änderung des renalen Abschnitts fehlinterpretiert werden."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR 10.0 Guideline",
            "Quelle: ESUR 2025 CA-AKI-Guidance"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR-2025-Kernaussagen",
              bullets: [
                "In aktueller Kommunikation und Dokumentation sollte im aktualisierten ESUR-Rahmen der Begriff CA-AKI verwendet werden.",
                "Diese sprachliche Änderung sollte nicht als grosser neuer klinischer Bedside-Algorithmus überbewertet werden."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Die Terminologie wird an neuere nephrologische / radiologische Konsenssprache angepasst, während grosse Teile des zugrunde liegenden Risikorahmens vertraut bleiben."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR 2025 CA-AKI-Guidance",
            "Quelle: ESUR 10.0 Guideline"
          ]
        }
      },

      {
        id: "waiting_times",
        level: "high",
        icon: "clock",
        title: "Sichere Zeitintervalle zwischen Kontrastmittelgaben",
        summary:
          "2025 wird daraus ein eigener Praxisblock, der gemischte MRI/CT-Szenarien von wiederholten jodhaltigen bzw. gadoliniumhaltigen Gaben trennt.",
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
                "Die 2018er Guideline behandelte bereits die Kombination Iod + Gadolinium am selben Tag, zwei Iod-Gaben und zwei Gadolinium-Gaben, aber als ältere Einzelkapitel mit weniger operativer Logik."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Die 2025er Guidance macht daraus einen expliziteren Praxisblock und trennt szenariospezifische Intervalle, inklusive gemischter MRI-/CT-Workflows und wiederholter Gaben derselben Kontrastmittelklasse."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Dieses Thema darf nicht auf eine einzige generische eGFR-Regel reduziert werden. Die 2025er Guidance trennt zwischen gemischten GBCA → ICM-Abläufen, zwei ICM-Gaben und zwei GBCA-Gaben."
              ],
              variant: "impact"
            }
          ],
          nested: [
            {
              title: "1. Elektive Kombination MRI + CT/(koronare) Angiographie",
              sections: [
                {
                  label: "2018",
                  paragraphs: [
                    "Die Kombination von Iod + Gadolinium am selben Tag wurde bereits erwähnt, aber weniger explizit operativ strukturiert."
                  ]
                },
                {
                  label: "2025",
                  bullets: [
                    "Für elektive Same-Day-Kombinationen sagt ESUR 2025, dass MRI vorzuziehen ist, ausser bei CT-Urographie.",
                    "GBCA → ICM: eGFR >60: Minimum 2 h, optimal 6 h.",
                    "GBCA → ICM: eGFR 30–60: Minimum 16 h, optimal 48 h.",
                    "GBCA → ICM: eGFR <30: Minimum 60 h, optimal 168 h.",
                    "Bei Notfall oder lebensbedrohlicher Situation können keine Wartezeit / back-to-back-Gaben verwendet werden."
                  ]
                },
                {
                  label: "Praktische Bedeutung",
                  paragraphs: [
                    "Die Reihenfolge der Untersuchungen ist relevant. Gemischte Same-Day-Workflows sollten bewusster geplant werden als früher."
                  ],
                  variant: "impact"
                }
              ]
            },
            {
              title: "2. Zwei jodhaltige Kontrastmittelgaben",
              sections: [
                {
                  label: "2025",
                  bullets: [
                    "eGFR >60: Minimum 4 h, optimal 12 h.",
                    "eGFR 30–60: Minimum 16 h, optimal 48 h.",
                    "eGFR <30: Minimum 60 h, optimal 168 h.",
                    "Dialyse ohne Restfunktion: mindestens 3 Dialysesitzungen."
                  ]
                }
              ]
            },
            {
              title: "3. Zwei gadoliniumhaltige Kontrastmittelgaben",
              sections: [
                {
                  label: "2025",
                  bullets: [
                    "Ohne bekannte Niereninsuffizienz: Minimum 4 h, optimal 12 h.",
                    "eGFR 30–60: Minimum 16 h, optimal 48 h.",
                    "eGFR <30: Minimum 60 h, optimal 168 h.",
                    "Dialyse ohne Restfunktion: mindestens 3 Dialysesitzungen."
                  ]
                }
              ]
            }
          ],
          refs: [
            "Quelle: ESUR 10.0 Guideline",
            "Quelle: ESUR 2025 Wartezeiten-Guidance"
          ]
        },
        action: {
          sections: [
            {
              label: "Warum dieses Thema getrennte Szenarien braucht",
              paragraphs: [
                "ESUR 2025 verwendet keine einzige Wartezeiten-Regel für alle Situationen. Das gemischte MRI-/CT-Szenario wird getrennt von wiederholten rein jodhaltigen bzw. rein gadoliniumhaltigen Gaben behandelt."
              ]
            }
          ],
          nested: [
            {
              title: "Elektive Kombination MRI + CT/(koronare) Angiographie",
              sections: [
                {
                  label: "ESUR-2025-Kernaussagen",
                  bullets: [
                    "Für elektive Same-Day-Kombinationen sagt ESUR 2025, dass MRI vorzugsweise zuerst erfolgen sollte, ausser bei CT-Urographie.",
                    "Wenn GBCA vor ICM gegeben wird: eGFR >60: Minimum 2 h, optimal 6 h.",
                    "Wenn GBCA vor ICM gegeben wird: eGFR 30–60: Minimum 16 h, optimal 48 h.",
                    "Wenn GBCA vor ICM gegeben wird: eGFR <30: Minimum 60 h, optimal 168 h.",
                    "Bei Notfall oder lebensbedrohlicher Situation können weiterhin keine Wartezeit / back-to-back-Gaben verwendet werden."
                  ],
                  variant: "action"
                },
                {
                  label: "Warum das wichtig ist",
                  paragraphs: [
                    "Genau in diesem Szenario wäre eine zu grobe „4 h / 12 h für alle“-Regel falsch."
                  ]
                }
              ]
            },
            {
              title: "Zwei jodhaltige Kontrastmittelgaben",
              sections: [
                {
                  label: "ESUR-2025-Kernaussagen",
                  bullets: [
                    "eGFR >60: Minimum 4 h, optimal 12 h.",
                    "eGFR 30–60: Minimum 16 h, optimal 48 h.",
                    "eGFR <30: Minimum 60 h, optimal 168 h.",
                    "Dialyse ohne Restfunktion: mindestens 3 Dialysesitzungen."
                  ],
                  variant: "action"
                }
              ]
            },
            {
              title: "Zwei gadoliniumhaltige Kontrastmittelgaben",
              sections: [
                {
                  label: "ESUR-2025-Kernaussagen",
                  bullets: [
                    "Ohne bekannte Niereninsuffizienz: Minimum 4 h, optimal 12 h.",
                    "eGFR 30–60: Minimum 16 h, optimal 48 h.",
                    "eGFR <30: Minimum 60 h, optimal 168 h.",
                    "Dialyse ohne Restfunktion: mindestens 3 Dialysesitzungen."
                  ],
                  variant: "action"
                }
              ]
            }
          ],
          refs: [
            "Quelle: ESUR 2025 Wartezeiten-Guidance",
            "Quelle: ESUR 10.0 Guideline"
          ]
        }
      },

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
      },

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
      },

      {
        id: "dialysis_refinement",
        level: "medium",
        icon: "dialysis",
        title: "Dialyse-bezogene Präzisierung",
        summary:
          "2025 wird der Dialyse-Abschnitt insbesondere für GBCA klarer und unterscheidet deutlicher zwischen makrozyklischen und linearen Mitteln.",
        keywords: [
          "dialyse",
          "hämodialyse",
          "makrozyklisch",
          "linear",
          "GBCA",
          "CAPD",
          "restdiurese"
        ],
        compare: {
          sections: [
            {
              label: "2018",
              paragraphs: [
                "Die 2018er Guideline war allgemeiner: für iodhaltige Kontrastmittel keine spezielle zeitliche Abstimmung mit Dialyse, und für GBCA eher breitere Empfehlungen zur Korrelation mit Dialyse bzw. zusätzlicher Hämodialyse."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Die neuere Guidance ist konkreter: nach makrozyklischen GBCA ist keine sofortige Dialyse nötig, nach linearen Mitteln wird eine sofortige Dialyse beschrieben und eine Wiederholung an den folgenden zwei Tagen empfohlen.",
                "Zudem werden Restfunktion der Niere und CAPD-spezifische Abwägungen klarer betont."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Der Dialyse-Abschnitt ist nicht mehr einfach „nach GBCA möglichst rasch dialysieren“. Er ist mittel- und situationsspezifischer geworden."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR 10.0 Guideline",
            "Quelle: ESUR 2025 Dialyse-Guidance"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR-2025-Kernaussagen",
              bullets: [
                "Nach makrozyklischen GBCA wird eine sofortige Dialyse nicht als notwendig beschrieben.",
                "Nach linearen GBCA wird eine sofortige Dialyse beschrieben, mit Wiederholung an den folgenden zwei Tagen.",
                "Bei CAPD und ähnlichen Situationen beschreibt die Guideline eine Abwägung zwischen NSF-Risiko linearer Mittel und dem Risiko eines temporären Hämodialysezugangs.",
                "Für iodhaltige Kontrastmittel bei terminalem Nierenversagen wird die Bedeutung der Restdiurese klarer hervorgehoben."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Die 2025er Guidance ist hier deutlich spezifischer und behandelt nicht mehr alle GBCA unter derselben Dialyse-Regel."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR 2025 Dialyse-Guidance",
            "Quelle: ESUR 10.0 Guideline"
          ]
        }
      },

      {
        id: "new_clinical_scenarios",
        level: "medium",
        icon: "layers",
        title: "Neue klinische Szenarien: Myasthenia gravis, HSG, CO₂",
        summary:
          "2025 werden Themen explizit ergänzt oder hervorgehoben, die im 2018er Booklet fehlten oder nicht separat gerahmt waren.",
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
                "Das 2018er Booklet hatte keine eigenen Praxis-Kapitel zu Myasthenia gravis, Hysterosalpingographie oder CO₂ als alternative intravaskuläre Kontrastoption."
              ]
            },
            {
              label: "2025",
              paragraphs: [
                "Die 2025er Guidance enthält Myasthenia gravis explizit im Block zu systemischen Erkrankungen und ergänzt eigene Abschnitte zu HSG sowie zu CO₂ als Alternative zu iodhaltigen Kontrastmitteln bei vaskulären Eingriffen."
              ]
            },
            {
              label: "Praktische Bedeutung",
              paragraphs: [
                "Diese Themen sind in der 2025er Guidance leichter auffindbar und nutzbar, anstatt aus breiteren Abschnitten abgeleitet werden zu müssen."
              ],
              variant: "impact"
            }
          ],
          refs: [
            "Quelle: ESUR 2025 Summary Guideline",
            "Quelle: ESUR 10.0 Guideline"
          ]
        },
        action: {
          sections: [
            {
              label: "ESUR-2025-Kernaussagen",
              bullets: [
                "Bei Fragen zu Myasthenia gravis und Kontrastmittel sollte die 2025er Guidance verwendet werden, weil dieses Thema jetzt explizit adressiert wird.",
                "Für HSG sollte der dedizierte 2025er Abschnitt verwendet werden, statt nur von allgemeinen Kontrastmittelregeln auszugehen.",
                "Wenn CO₂ als Alternative zu iodhaltigem Kontrastmittel bei vaskulären Eingriffen erwogen wird, sollte der 2025er CO₂-Abschnitt herangezogen werden."
              ],
              variant: "action"
            },
            {
              label: "Warum das wichtig ist",
              paragraphs: [
                "Das sind echte Ergänzungen bzw. neu explizit gemachte Themenbereiche und nicht nur kosmetische Umstellungen."
              ]
            }
          ],
          refs: [
            "Quelle: ESUR 2025 Summary Guideline",
            "Quelle: ESUR 10.0 Guideline"
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

  function levelLabel(level) {
    if (level === "high") return t("badge_practice_changing");
    if (level === "medium") return t("badge_refined");
    return t("badge_structural");
  }

  function modeLabel(mode) {
    return mode === "action" ? t("changes_action_mode_badge") : t("changes_compare_mode_badge");
  }

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

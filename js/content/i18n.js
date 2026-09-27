window.ESUR = window.ESUR || {};
window.ESUR.i18n = {
    en: {
      app_title: "Radiology Contrast & Safety App",
      reset: "Reset",

      disclaimer_line1: "Educational tool. Follow local protocols.",
      disclaimer_line2: "Information only. Clinical decisions should follow local protocols, source documents and clinical judgement. No patient data are stored.",
      disclaimer_line3: "Contrast safety content adapted from ESUR Contrast Media Safety Committee guidance.",

      nav_hsr: "HSR",
      nav_changes: "Changes",

      // HSR main
      hsr_title: "HSR",
      hsr_subtitle: "Previous-reaction planning, acute management, empiric switch support, tryptase interpretation and NIHR decision support.",
      hsr_tools_title: "HSR tools",
      hsr_guidance_tab: "Previous reaction",
      hsr_acute_tab: "Acute management",
      hsr_switch_tab: "Switch",
      hsr_tryptase_tab: "Tryptase",
      hsr_nihr_tab: "NIHR",

      flow_title: "Previous reaction",
      flow_subtitle: "Educational support for prior contrast media hypersensitivity reactions.",
      flow_step1: "Step 1 — Clinical situation",
      flow_step2: "Step 2 — Prior reaction severity",

      flow_routing_note:
        "Educational support for prior immediate hypersensitivity reactions. For non-immediate reactions, use the NIHR module.",
      hsr_referral_title: "Referral & documentation",
      hsr_referral_specify:
        "When referring the patient to a drug allergy specialist, always specify the used contrast medium.",
      hsr_referral_document:
        "Detailed documentation of the culprit contrast agent and the severity of the reaction, including a grading scheme, is mandatory.",

      elective: "Elective",
      emergency: "Emergency",
      mild: "Mild",
      moderate: "Moderate",
      severe: "Severe",

      recommendation: "Recommendation",
      safety_net: "Safety net",
      flow_safety:
        "Acute hypersensitivity reactions should be managed according to local protocols and ESUR acute management guidance.",

      switch_title: "Switch",
      switch_subtitle:
        "Optional, non-validated contrast-agent grouping and practical-experience suggestions for empiric switch consideration.",
      contrast_type: "Contrast type",
      nihr_cmtype_title: "Contrast type",
      icm_ct: "ICM (CT)",
      gbca_mri: "GBCA (MRI)",
      icm_title: "ICM (iodine-based)",
      gbca_title: "GBCA (gadolinium-based)",
      possible_alternatives: "Possible alternatives",
      safety_note: "Safety note",
      switch_status_optional:
        "This switch overview is optional and based on a non-validated classification and practical experience.",
      switch_cmsc:
        "The CMSC cannot make evidence-based recommendations on a robust scientific basis for change to an alternative contrast agent based on practical experience.",
      switch_cr_structure:
        "Cross-reactivity cannot be predicted on the basis of the chemical structure.",
      switch_cr_frequency:
        "Cross-reactivity can occur with a higher frequency among iodine-based contrast media with a N-(2,3-hydroxypropyl)-carbamoyl side chain and among macrocyclic gadolinium-based contrast agents.",
      switch_best_option:
        "The best option is to choose an alternative based on the results of an allergy evaluation.",
      switch_brand_governance:
        "Brand names are shown for product identification only. ESUR grouping and switch guidance are based on the generic contrast-agent substance.",
      switch_safety_note:
        "This switch overview is optional and based on a non-validated classification and practical experience. The CMSC cannot make evidence-based recommendations on a robust scientific basis for change to an alternative contrast agent based on practical experience. Cross-reactivity cannot be predicted on the basis of the chemical structure. The best option is to choose an alternative based on the results of an allergy evaluation.",
      unknown: "Unknown",
      icm_unknown_hint: "Use when the involved ICM is not known.",
      gbca_unknown_hint: "Use when the involved GBCA is not known.",
      icm_group_a_label: "Group A",
      icm_group_b_label: "Group B",
      icm_group_c_label: "Group C",
      icm_group_d_label: "Group D",
      gbca_group_a_label: "Group A",
      gbca_group_b_label: "Group B",
      gbca_group_c_label: "Group C",
      icm_group_a_names:
        "Omnipaque® — iohexol · Visipaque® — iodixanol · Iomeron® — iomeprol · Optiray® — ioversol",
      icm_group_b_names: "Iopamiro® / Isovue® — iopamidol",
      icm_group_c_names: "Ultravist® — iopromide",
      icm_group_d_names: "Xenetix® — iobitridol",
      gbca_group_a_names: "Dotarem® / Clariscan® — gadoterate meglumine",
      gbca_group_b_names:
        "ProHance® — gadoteridol · Gadovist® / Gadavist® — gadobutrol",
      gbca_group_c_names: "Elucirem® / Vueway® — gadopiclenol",
      switch_nonvalidated:
        "This switch overview is optional and based on a non-validated classification and practical experience.",

      tryptase_title: "Serum tryptase",
      tryptase_sample_measure:
        "Measure serum tryptase within 1–4 h from the start of all moderate-to-severe immediate hypersensitivity reactions to contrast media.",
      tryptase_sample_baseline:
        "A second measurement after ≥ 24 h serves as a baseline for further allergologic examinations.",
      tryptase_sample_ideal:
        "Ideally, three samples should be obtained: the first as early as possible during a suspected hypersensitivity reaction, the second at 1–2 h after the first but no later than 4 h after the onset of the reaction, and the third more than 24 h after all signs and symptoms have subsided.",
      enter_values: "Enter values",
      calculate: "Calculate",
      result: "Result",
      tryptase_default:
        "Enter an acute tryptase value obtained during or within 4 h after symptoms and a baseline tryptase value.",
      tryptase_invalid: "Please enter valid numeric values.",
      tryptase_threshold: "Threshold",
      tryptase_acute: "Acute tryptase",
      tryptase_baseline: "Baseline tryptase",
      tryptase_formula:
        "An acute-over-baseline elevation of tryptase of at least 2 ng/mL + (1.2 × baseline tryptase) during or within 4 h after symptoms is suggestive of an IHR.",
      tryptase_positive:
        "The result is suggestive of an IHR.",
      tryptase_negative:
        "The result does not show an acute-over-baseline elevation of at least 2 ng/mL + (1.2 × baseline tryptase).",
      tryptase_note:
        "In mild or moderate IHR, tryptase levels typically remain normal, and the absence of elevation does not exclude the possibility of a genuine IHR.",

            acute_title: "Acute management",
      acute_subtitle:
        "ESUR acute algorithm. Follow local emergency protocol and verify medication concentration before administration.",
      acute_immediate_title: "Immediate assessment and general actions",
      acute_severity_title: "Severity selector",
      acute_pattern_title: "Dominant reaction pattern",
      acute_output_title: "ESUR acute management",
      acute_dose_reference_title: "Dose safety note",
      acute_dose_reference_note:
        "ESUR dose reference. Verify concentration, route, patient factors and local emergency protocol before administration.",
      acute_severity_mild: "Mild reactions",
      acute_severity_moderate: "Moderate reactions",
      acute_severity_severe: "Severe reactions",
      acute_pattern_mild_general: "Mild reactions",
      acute_pattern_moderate_urticaria: "Diffuse urticaria / diffuse erythema",
      acute_pattern_moderate_angioedema: "Facial edema without stridor",
      acute_pattern_moderate_bronchospasm: "Mild bronchospasm",
      acute_pattern_severe_anaphylaxis: "Anaphylactic reaction or stridor",
      acute_section_clinical: "Clinical pattern / warning",
      acute_section_management: "Management",
      acute_section_escalation: "Escalation / rapid response",
      acute_warning_label: "Warning",
      acute_arrest_title: "Cardiac or respiratory arrest",
      acute_immediate_actions: [
        "Monitor the patient closely and judge for progression of the reaction.",
        "Observe closely for mucosal edema of the nose, mouth, throat, or larynx.",
        "In case of symptoms, check heart rate, arterial blood pressure, and consciousness.",
        "Check and stabilize the patient according to the ABCDE method.",
        "Stop infusing contrast agent and replace the IV line with crystalloid.",
        "Dyspnoea or stridor: let the patient sit up.",
        "Consider measuring serum tryptase, ideally 1–2 h after start of the reaction.",
        "Record acute allergic reactions and the culprit contrast medium in the allergy registry of the electronic health record of the patient."
      ],
      acute_content: {
        mild_general: {
clinical:
  "Mild features: nasal congestion; sneezing, conjunctivitis, rhinorrhoea; limited or scattered urticaria and pruritus; cutaneous oedema; limited itchy or scratchy throat. Classify by the most intense symptom.",
management: [
  "Mild reactions may only need reassurance.",
  "Observe vital signs until symptoms resolve.",
  "Do not remove IV access during observation.",
  "After a mild reaction, keep the patient under surveillance until every symptom has disappeared (minimum 30 minutes, usually less than 60 minutes).",
  "Consider a nonsedating antihistamine for mild allergic reactions, for example desloratadine 5 mg orally or cetirizine 10 mg orally, once daily.",
  "For protracted vomiting: ondansetron 4 mg IV."
],
escalation: [
  "Monitor closely and assess for progression of the reaction."
]
        },
        moderate_urticaria: {
clinical: "Diffuse urticaria / diffuse erythema.",
management: [
  "Give chlorphenamine 20 mg or clemastine 2 mg IV.",
  "Consider transferring the patient to a department with facilities for monitoring vital functions."
],
escalation: [
  "If accompanied by hypotension, treat as anaphylaxis."
]
        },
        moderate_angioedema: {
clinical: "Facial edema without stridor.",
management: [
  "Give oxygen 10 to 15 L/min via a non-rebreathing mask.",
  "Give chlorphenamine 20 mg or clemastine 2 mg IV.",
  "Consider transferring the patient to a department with facilities for monitoring vital functions."
],
escalation: [
  "If edema is severe, near airways, or if stridor develops, treat as anaphylaxis."
]
        },
        moderate_bronchospasm: {
clinical: "Mild bronchospasm.",
management: [
  "Short-acting β2-agonist: 2–4 inhalations of 100 µg of salbutamol via inhalation (depending on severity), with option to repeat every 20 min, or via nebulization (2.5–5 µg diluted in 3 mL of saline solution) until clinical improvement.",
  "Consider transferring the patient to a department with facilities for monitoring vital functions."
],
escalation: [
  "In case of deterioration, give adrenaline 0.5 mg IM and consider consulting the rapid response team.",
  "When bronchospasm increases in severity, consider repeating adrenaline 0.5 mg IM, guided by heart rate."
]
        },
        severe_anaphylaxis: {
clinical: "Anaphylactic reaction or stridor.",
management: [
  "Call the rapid response team.",
  "Give oxygen 10 to 15 L/min with non-rebreathing mask.",
  "Give 0.5 mg adrenaline IM in the lateral upper thigh, repeat as necessary, guided by heart rate.",
  "Give fluid bolus of crystalloid 500 mL IV in 10 min, repeat as necessary.",
  "Short-acting β2-agonist: 2–10 inhalations of 100 µg of salbutamol via inhalation (depending on severity), with option to repeat every 20 min, or via nebulization (2.5–5 µg diluted in 3 mL of saline solution) up to 1 h.",
  "Give chlorphenamine 20 mg or clemastine 2 mg IV, repeat as necessary.",
  "Consider adding corticosteroid (for example, prednisolone 50 mg IV)."
],
arrest: [
  "Call the CPR team.",
  "Start CPR."
]
        }
      },

      nihr_title: "NIHR — non-immediate hypersensitivity reactions",
      nihr_subtitle:
        "For a previous non-immediate hypersensitivity reaction to an iodine-based contrast medium or a gadolinium-based contrast agent when re-administration is being considered.",
      nihr_severity_title: "Previous NIHR severity",
      nihr_severity_mild: "Mild",
      nihr_severity_moderate: "Moderate",
      nihr_severity_severe: "Severe",
      nihr_severity_hint:
        "Mild: skin lesions resolve without treatment. Moderate: skin lesions resolve with outpatient treatment. Severe: hospital admission is required for treatment.",
      nihr_culprit_class_title: "Previous culprit contrast class",
      nihr_cmtype_icm: "ICM",
      nihr_cmtype_gbca: "GBCA",
      nihr_cmtype_unknown: "Contrast class unknown",
      nihr_culprit_known_title: "Exact culprit contrast medium known?",
      nihr_culprit_known: "Culprit CM known",
      nihr_culprit_unknown: "Culprit CM unknown",
      nihr_danger_signs_title: "Danger signs",
      erosions: "Erosive and/or haemorrhagic lesions",
      blistering: "Blistering and skin disruption",
      mucosal_involvement: "Mucosal involvement",
      extracutaneous_involvement: "Extracutaneous organ involvement (high fever, abnormal liver/kidney values, lymphadenopathy)",
      nihr_recommendation_title: "NIHR recommendation",
      nihr_safety_note_title: "Safety note",
      nihr_safety_note: "",
      nihr_recommended_actions: "Recommended actions",
      nihr_class_specific_rule: "Class-specific rule",
      nihr_status_scar: "Severe non-immediate hypersensitivity reaction with danger signs (SCAR)",
      nihr_status_moderate: "Moderate NIHR without danger signs",
      nihr_status_mild: "Mild NIHR without danger signs",
      nihr_scope_guard:
        "This combination is not represented as a separate management pathway in ESUR Part 2 Table 2. Reassess the NIHR severity and documented danger signs.",
      nihr_mild_interview: "Interview the patient about their previous hypersensitivity reaction.",
      nihr_mild_refer:
        "Optionally, refer the patient to a drug allergy specialist (if not done before) when the local drug allergy specialist capacity is sufficient.",
      nihr_moderate_refer: "Refer the patient to a drug allergy specialist (if not done before).",
      nihr_optimize_ehr: "Optimize the allergy registration in the electronic health record.",
      nihr_apply_advice:
        "Apply the advice of the drug allergy specialist for a safe iodine-based contrast medium or gadolinium-based contrast agent.",
      nihr_choose_different:
        "When this advice is not available, choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast agent is known.",
      nihr_observe:
        "When the contrast medium is administered, observe the patient for at least 30 min with the IV line in place.",
      nihr_written:
        "Give the patient written instructions for a possible repeat non-immediate hypersensitivity reaction.",
      nihr_recurrence:
        "If a non-immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory.",
      nihr_preventive_alt:
        "Consider an alternative imaging modality, or consider performing an unenhanced exam if the diagnostic yield is sufficient for the correct management of the patient.",
      nihr_preventive_never_deny:
        "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available.",
      nihr_footnote_crossreact:
        "Consider cross-reactivity of contrast media and an increased risk for non-immediate hypersensitivity reaction with the use of iso-osmolar dimeric iodine-based contrast media.",
      nihr_scar_refer:
        "Refer the patient immediately to a drug allergy specialist (if not done before).",
      nihr_scar_choose_imaging: "Choose an alternative imaging modality.",
      nihr_scar_ehr: "Optimize the allergy registration in the electronic health record.",
      nihr_scar_do_not_give:
        "Do not give the group of contrast media to which the severe skin reaction has occurred.",
      nihr_scar_icm_rule:
        "Avoid all iodine-based contrast media after a severe non-immediate hypersensitivity reaction to an iodine-based contrast medium.",
      nihr_scar_gbca_rule:
        "Avoid all gadolinium-based contrast agents after a severe non-immediate hypersensitivity reaction to a gadolinium-based contrast agent.",
      nihr_scar_unknown_rule:
        "Individualize the approach following multidisciplinary consultation after a severe reaction to an unknown CM.",

            icm_hint:
        "ESUR grouping is based on the generic contrast-agent substance. Brand names are shown for product identification only.\nGrouping according to ESUR Part 2 Fig. 2 / Fig. 3 and Table 1.",
      gbca_hint:
        "ESUR grouping is based on the generic contrast-agent substance. Brand names are shown for product identification only.\nGrouping according to ESUR Part 2 Fig. 2 / Fig. 3 and Table 1.",

      flow_titles: {
        elective_mild: "Elective imaging — prior mild immediate hypersensitivity reaction",
        elective_moderate: "Elective imaging — prior moderate immediate hypersensitivity reaction",
        elective_severe: "Elective imaging — prior severe immediate hypersensitivity reaction",
        emergency_mild: "Emergency imaging — prior mild immediate hypersensitivity reaction",
        emergency_moderate: "Emergency imaging — prior moderate immediate hypersensitivity reaction",
        emergency_severe: "Emergency imaging — prior severe immediate hypersensitivity reaction"
      },

      flow_bullets: {
        elective_mild: [
          "Interview the patient about their previous hypersensitivity reaction.",
          "Optionally, refer the patient to a drug allergy specialist (if not done before) when the local drug allergy specialist capacity is sufficient.",
          "Optimize the allergy registration in the electronic health record.",
          "Apply the advice of the drug allergy specialist for a safe iodine-based contrast medium or gadolinium-based contrast agent, or, when not available, choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast agent is known.",
          "When the contrast medium is administered, observe the patient for at least 30 min with the IV line in place.",
          "Be prepared and vigilant for a recurring immediate hypersensitivity reaction.",
          "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory.",
          "Consider an alternative imaging modality, or consider performing an unenhanced exam if the diagnostic yield is sufficient for the correct management of the patient.",
          "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available."
        ],
        elective_moderate: [
          "Refer the patient to a drug allergy specialist (if not done before).",
          "Optimize the allergy registration in the electronic health record.",
          "Postpone imaging to wait for the results of the allergy analysis.",
          "Apply the advice of the drug allergy specialist for a safe iodine-based contrast medium or gadolinium-based contrast agent.",
          "When the contrast medium is administered, observe the patient for at least 30 min with the IV line in place.",
          "Be prepared and vigilant for a recurring immediate hypersensitivity reaction.",
          "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory.",
          "Consider an alternative imaging modality, or consider performing an unenhanced exam if the diagnostic yield is sufficient for the correct management of the patient.",
          "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available."
        ],
        elective_severe: [
          "Refer the patient to a drug allergy specialist (if not done before).",
          "Optimize the allergy registration in the electronic health record.",
          "Have a trained rapid response (or resuscitation) team member nearby.",
          "Postpone imaging to wait for the results of the allergy analysis.",
          "Apply the advice of the drug allergy specialist for a safe iodine-based contrast medium or gadolinium-based contrast agent.",
          "When the contrast medium is administered, observe the patient for at least 30 min with the IV line in place.",
          "Be prepared and vigilant for a recurring immediate hypersensitivity reaction.",
          "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory.",
          "Consider an alternative imaging modality, or consider performing an unenhanced exam if the diagnostic yield is sufficient for the correct management of the patient.",
          "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available."
        ],
        emergency_mild: [
          "Interview the patient about their previous hypersensitivity reaction.",
          "Optionally, refer the patient to a drug allergy specialist (if not done before) when the local drug allergy specialist capacity is sufficient.",
          "Optimize the allergy registration in the electronic health record.",
          "Apply the advice of the drug allergy specialist for a safe iodine-based contrast medium or gadolinium-based contrast agent, or, when not available, choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast agent is known.",
          "When the contrast medium is administered, observe the patient for at least 30 min with the IV line in place.",
          "Be prepared and vigilant for a recurring immediate hypersensitivity reaction.",
          "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory.",
          "Consider an alternative imaging modality, or consider performing an unenhanced exam if the diagnostic yield is sufficient for the correct management of the patient.",
          "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available."
        ],
        emergency_moderate: [
          "Refer the patient to a drug allergy specialist (if not done before).",
          "Optimize the allergy registration in the electronic health record.",
          "Have a trained imaging or emergency room physician nearby.",
          "Choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast medium is known.",
          "When the contrast medium is administered, observe the patient for at least 30 min with the IV line in place.",
          "Be prepared and vigilant for a recurring immediate hypersensitivity reaction.",
          "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory.",
          "Consider an alternative imaging modality, or consider performing an unenhanced exam if the diagnostic yield is sufficient for the correct management of the patient.",
          "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available."
        ],
        emergency_severe: [
          "Refer the patient to a drug allergy specialist (if not done before).",
          "Optimize the allergy registration in the electronic health record.",
          "Have a trained rapid response (or resuscitation) team member nearby.",
          "Consider administration of premedication (EAACI guidelines).",
          "Emergency premedication protocol: 50 mg prednisolone IV (or equivalent) ≥ 30 min before contrast medium administration.",
          "Emergency premedication protocol: 2 mg clemastine IV (or equivalent) ≥ 30 min before contrast medium administration.",
          "Context from Part 2: Routine premedication is not recommended. Premedication is optional in emergency situations where an unidentified culprit contrast medium led to a severe hypersensitivity reaction.",
          "Choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast medium is known.",
          "When the contrast medium is administered, observe the patient for at least 30 min with the IV line in place.",
          "Be prepared and vigilant for a recurring immediate hypersensitivity reaction.",
          "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory.",
          "Consider an alternative imaging modality, or consider performing an unenhanced exam if the diagnostic yield is sufficient for the correct management of the patient.",
          "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available."
        ]
      },

      switch_placeholder_icm: "Select the involved ICM group above.",
      switch_placeholder_gbca: "Select the involved GBCA group above.",

      icm_rules: {
        A: {
          title: "Group A selected",
          text: "Practical-experience suggestion: Alternative ICM from Group B or D (without classic carbamoyl sidechain).",
          note: "High cross-reactivity between Group A and Group C."
        },
        B: {
          title: "Group B selected",
          text: "Practical-experience suggestion: Alternative ICM from Group A, C or D.",
          note: ""
        },
        C: {
          title: "Group C selected",
          text: "Practical-experience suggestion: Alternative ICM from Group B (without classic or methyl-modified carbamoyl sidechain).",
          note: "High cross-reactivity between Group C and Group A."
        },
        D: {
          title: "Group D selected",
          text: "Practical-experience suggestion: Alternative ICM from Group A or B (without methyl-modified carbamoyl sidechain).",
          note: ""
        },
        unknown: {
          title: "ICM unknown",
          text: "Due to the higher likelihood that the involved ICM is from Group A: choose the alternative ICM from Group B or D.",
          note: "High cross-reactivity between Group C and Group A. This is a practical-experience suggestion based on the optional, non-validated classification and is not a robust evidence-based recommendation."
        }
      },

      gbca_rules: {
        A: {
          title: "Group A selected",
          text: "Practical-experience suggestion: Alternative GBCA from Group B.",
          note: ""
        },
        B: {
          title: "Group B selected",
          text: "Practical-experience suggestion: Alternative GBCA from Group A.",
          note: ""
        },
        C: {
          title: "Group C selected",
          text: "Insufficient data for empiric change advice.",
          note: ""
        },
        unknown: {
          title: "GBCA unknown",
          text: "It is not possible to recommend a regimen with certainty. Due to the probability of involvement, using a GBCA different from the one routinely administered is suggested.",
          note: "This is based on practical experience and is not a robust evidence-based recommendation."
        }
      },

      // Practice Changes tab — static UI
      changes_title: "Practice Changes 2025",
      changes_subtitle:
        "ESUR 2025 vs ESUR 10.0 — key practical differences.",
      changes_intro:
        "Compact overview of practice-relevant changes. Educational support only.",
      badge_practice_changing: "Practice-changing",
      badge_refined: "Refined",
      badge_structural: "Structural / terminological",
      changes_filter_title: "Filter",
      changes_filter_label: "Relevance",
      changes_mode_label: "Reading mode",
      changes_search_label: "Search",
      changes_filter_all: "All",
      changes_filter_high: "Practice-changing",
      changes_filter_medium: "Refined",
      changes_filter_low: "Structural",
      changes_mode_compare: "Compare",
      changes_mode_action: "Action mode",
      changes_search_placeholder: "Search topics (e.g. hypersensitivity, CA-AKI, waiting times)",
      changes_open: "Open",
      changes_no_results:
        "No topics match the current filter. Try another search term or switch back to “All”.",
      changes_compare_mode_badge: "Compare",
      changes_action_mode_badge: "Action mode"
    },

    de: {
      app_title: "Radiology Contrast & Safety App",
      reset: "Zurücksetzen",

      disclaimer_line1: "Didaktisches Support-Tool. Lokale Protokolle beachten.",
      disclaimer_line2: "Nur zur Information. Klinische Entscheidungen sollten lokalen Protokollen, den Quellendokumenten und der klinischen Beurteilung folgen. Es werden keine Patientendaten gespeichert.",
      disclaimer_line3: "Inhalt zur Kontrastmittelsicherheit adaptiert aus der Guidance des ESUR Contrast Media Safety Committee.",

      nav_hsr: "HSR",
      nav_changes: "Changes",

      // HSR main
      hsr_title: "HSR",
      hsr_subtitle: "Planung nach früherer Reaktion, Akutmanagement, empirische Switch-Hilfe, Tryptase-Interpretation und NIHR-Entscheidungshilfe.",
      hsr_tools_title: "HSR-Tools",
      hsr_guidance_tab: "Frühere Reaktion",
      hsr_acute_tab: "Akutmanagement",
      hsr_switch_tab: "Switch",
      hsr_tryptase_tab: "Tryptase",
      hsr_nihr_tab: "NIHR",

      flow_title: "Frühere Reaktion",
      flow_subtitle: "Didaktische Orientierung bei früheren Hypersensitivitätsreaktionen auf Kontrastmittel.",
      flow_step1: "Schritt 1 — Klinische Situation",
      flow_step2: "Schritt 2 — Schweregrad der früheren Reaktion",

      flow_routing_note:
        "Didaktische Orientierung bei früheren unmittelbaren Hypersensitivitätsreaktionen. Bei nicht unmittelbaren Reaktionen das NIHR-Modul verwenden.",
      hsr_referral_title: "Überweisung & Dokumentation",
      hsr_referral_specify:
        "Bei einer Überweisung an eine Fachperson für Arzneimittelallergien immer das verwendete Kontrastmittel angeben.",
      hsr_referral_document:
        "Eine detaillierte Dokumentation des auslösenden Kontrastmittels und des Schweregrads der Reaktion einschließlich eines Graduierungsschemas ist verpflichtend.",

      elective: "Elektiv",
      emergency: "Notfall",
      mild: "Mild",
      moderate: "Moderat",
      severe: "Schwer",

      recommendation: "Empfehlung",
      safety_net: "Safety net",
      flow_safety:
        "Akute Hypersensitivitätsreaktionen sollten gemäss lokalen Protokollen und der ESUR-Guidance zum Akutmanagement behandelt werden.",

      switch_title: "Switch",
      switch_subtitle:
        "Optionale, nicht validierte Kontrastmittelgruppierung und Vorschläge aus praktischer Erfahrung zur empirischen Wechselorientierung.",
      contrast_type: "Kontrastmitteltyp",
      nihr_cmtype_title: "Kontrastmitteltyp",
      icm_ct: "ICM (CT)",
      gbca_mri: "GBCA (MRT)",
      icm_title: "ICM (iodhaltig)",
      gbca_title: "GBCA (gadoliniumbasiert)",
      possible_alternatives: "Mögliche Alternativen",
      safety_note: "Sicherheitshinweis",
      switch_status_optional:
        "Diese Switch-Übersicht ist optional und beruht auf einer nicht validierten Klassifikation sowie auf praktischer Erfahrung.",
      switch_cmsc:
        "Das CMSC kann keine evidenzbasierten Empfehlungen auf robuster wissenschaftlicher Grundlage für den Wechsel auf ein alternatives Kontrastmittel auf Basis praktischer Erfahrung geben.",
      switch_cr_structure:
        "Kreuzreaktivität lässt sich nicht auf Grundlage der chemischen Struktur vorhersagen.",
      switch_cr_frequency:
        "Kreuzreaktivität kann häufiger auftreten bei iodhaltigen Kontrastmitteln mit einer N-(2,3-Hydroxypropyl)-carbamoyl-Seitenkette und bei makrozyklischen gadoliniumbasierten Kontrastmitteln.",
      switch_best_option:
        "Die beste Option ist, eine Alternative anhand der Ergebnisse einer allergologischen Abklärung zu wählen.",
      switch_brand_governance:
        "Markennamen dienen ausschließlich der Produktidentifikation. Die ESUR-Gruppierung und die Switch-Orientierung beziehen sich auf den jeweiligen Wirkstoff des Kontrastmittels.",
      switch_safety_note:
        "Diese Switch-Übersicht ist optional und beruht auf einer nicht validierten Klassifikation sowie auf praktischer Erfahrung. Das CMSC kann keine evidenzbasierten Empfehlungen auf robuster wissenschaftlicher Grundlage für den Wechsel auf ein alternatives Kontrastmittel auf Basis praktischer Erfahrung geben. Kreuzreaktivität lässt sich nicht auf Grundlage der chemischen Struktur vorhersagen. Die beste Option ist, eine Alternative anhand der Ergebnisse einer allergologischen Abklärung zu wählen.",
      unknown: "Unbekannt",
      icm_unknown_hint: "Verwenden, wenn das auslösende ICM nicht bekannt ist.",
      gbca_unknown_hint: "Verwenden, wenn das auslösende GBCA nicht bekannt ist.",
      icm_group_a_label: "Gruppe A",
      icm_group_b_label: "Gruppe B",
      icm_group_c_label: "Gruppe C",
      icm_group_d_label: "Gruppe D",
      gbca_group_a_label: "Gruppe A",
      gbca_group_b_label: "Gruppe B",
      gbca_group_c_label: "Gruppe C",
      icm_group_a_names:
        "Omnipaque® — iohexol · Visipaque® — iodixanol · Iomeron® — iomeprol · Optiray® — ioversol",
      icm_group_b_names: "Iopamiro® / Isovue® — iopamidol",
      icm_group_c_names: "Ultravist® — iopromide",
      icm_group_d_names: "Xenetix® — iobitridol",
      gbca_group_a_names: "Dotarem® / Clariscan® — gadoterate meglumine",
      gbca_group_b_names:
        "ProHance® — gadoteridol · Gadovist® / Gadavist® — gadobutrol",
      gbca_group_c_names: "Elucirem® / Vueway® — gadopiclenol",
      switch_nonvalidated:
        "Diese Switch-Übersicht ist optional und beruht auf einer nicht validierten Klassifikation sowie auf praktischer Erfahrung.",

      tryptase_title: "Serumtryptase",
      tryptase_sample_measure:
        "Serumtryptase innerhalb von 1–4 h nach Beginn aller moderaten bis schweren unmittelbaren Hypersensitivitätsreaktionen auf Kontrastmittel messen.",
      tryptase_sample_baseline:
        "Eine zweite Messung nach ≥ 24 h dient als Baseline für weitere allergologische Untersuchungen.",
      tryptase_sample_ideal:
        "Idealerweise sollten drei Proben gewonnen werden: die erste so früh wie möglich während einer vermuteten Hypersensitivitätsreaktion, die zweite 1–2 h nach der ersten, jedoch nicht später als 4 h nach Beginn der Reaktion, und die dritte mehr als 24 h nach Abklingen aller Zeichen und Symptome.",
      enter_values: "Werte eingeben",
      calculate: "Berechnen",
      result: "Ergebnis",
      tryptase_default:
        "Einen akuten Tryptasewert eingeben, der während der Symptome oder innerhalb von 4 h danach gewonnen wurde, sowie einen Baseline-Tryptasewert.",
      tryptase_invalid: "Bitte gültige Zahlenwerte eingeben.",
      tryptase_threshold: "Schwellenwert",
      tryptase_acute: "Akute Tryptase",
      tryptase_baseline: "Baseline-Tryptase",
      tryptase_formula:
        "Ein akuter Anstieg der Tryptase gegenüber der Baseline von mindestens 2 ng/mL + (1,2 × Baseline-Tryptase) während der Symptome oder innerhalb von 4 h danach ist hinweisend auf eine IHR.",
      tryptase_positive:
        "Das Ergebnis ist hinweisend auf eine IHR.",
      tryptase_negative:
        "Das Ergebnis zeigt keinen akuten Anstieg gegenüber der Baseline von mindestens 2 ng/mL + (1,2 × Baseline-Tryptase).",
      tryptase_note:
        "Bei milder oder moderater IHR bleiben die Tryptasewerte typischerweise normal; ein fehlender Anstieg schließt die Möglichkeit einer echten IHR nicht aus.",

            acute_title: "Akutmanagement",
      acute_subtitle:
        "ESUR-Akutalgorithmus. Lokales Notfallprotokoll beachten und Medikamentenkonzentration vor Gabe prüfen.",
      acute_immediate_title: "Sofortbeurteilung und allgemeine Maßnahmen",
      acute_severity_title: "Schweregrad-Auswahl",
      acute_pattern_title: "Dominantes Reaktionsmuster",
      acute_output_title: "ESUR-Akutmanagement",
      acute_dose_reference_title: "Dosissicherheit",
      acute_dose_reference_note:
        "ESUR-Dosisreferenz. Vor Gabe Konzentration, Applikationsweg, Patientensituation und lokales Notfallprotokoll prüfen.",
      acute_severity_mild: "Milde Reaktionen",
      acute_severity_moderate: "Moderate Reaktionen",
      acute_severity_severe: "Schwere Reaktionen",
      acute_pattern_mild_general: "Milde Reaktionen",
      acute_pattern_moderate_urticaria: "Diffuse Urtikaria / diffuses Erythem",
      acute_pattern_moderate_angioedema: "Faziales Ödem ohne Stridor",
      acute_pattern_moderate_bronchospasm: "Milder Bronchospasmus",
      acute_pattern_severe_anaphylaxis: "Anaphylaktische Reaktion oder Stridor",
      acute_section_clinical: "Klinisches Muster / Warnhinweis",
      acute_section_management: "Management",
      acute_section_escalation: "Eskalation / Rapid Response",
      acute_warning_label: "Warnhinweis",
      acute_arrest_title: "Herz- oder Atemstillstand",
      acute_immediate_actions: [
        "Den Patienten engmaschig überwachen und die Progression der Reaktion beurteilen.",
        "Engmaschig auf Schleimhautödem von Nase, Mund, Rachen oder Larynx achten.",
        "Bei Symptomen Herzfrequenz, arteriellen Blutdruck und Bewusstsein prüfen.",
        "Den Patienten gemäß der ABCDE-Methode prüfen und stabilisieren.",
        "Kontrastmittelinfusion stoppen und die i.v.-Leitung durch Kristalloid ersetzen.",
        "Dyspnoe oder Stridor: den Patienten aufsetzen lassen.",
        "Bestimmung der Serumtryptase erwägen, idealerweise 1–2 h nach Beginn der Reaktion.",
        "Akute allergische Reaktionen und das auslösende Kontrastmittel im Allergieregister der elektronischen Patientenakte dokumentieren."
      ],
      acute_content: {
        mild_general: {
clinical:
  "Milde Merkmale: nasale Kongestion; Niesen, Konjunktivitis, Rhinorrhö; begrenzte oder vereinzelte Urtikaria und Pruritus; kutanes Ödem; begrenzter juckender oder kratzender Hals. Maßgeblich ist das stärkste Symptom.",
management: [
  "Milde Reaktionen können allein mit Beruhigung auskommen.",
  "Vitalzeichen beobachten, bis die Symptome abklingen.",
  "Den i.v.-Zugang während der Beobachtung nicht entfernen.",
  "Nach einer milden Reaktion überwachen, bis jedes Symptom verschwunden ist (mindestens 30 Minuten, üblicherweise unter 60 Minuten).",
  "Bei milder allergischer Reaktion ein nicht sedierendes Antihistaminikum erwägen, z. B. Desloratadin 5 mg oral oder Cetirizin 10 mg oral, einmal täglich.",
  "Bei protrahiertem Erbrechen: Ondansetron 4 mg i.v."
],
escalation: [
  "Engmaschig überwachen und auf eine Progredienz der Reaktion achten."
]
        },
        moderate_urticaria: {
clinical: "Diffuse Urtikaria / diffuses Erythem.",
management: [
  "Chlorphenamin 20 mg oder Clemastin 2 mg i.v. geben.",
  "Verlegung in einen Bereich mit Überwachung der Vitalfunktionen erwägen."
],
escalation: [
  "Bei begleitender Hypotonie wie eine Anaphylaxie behandeln."
]
        },
        moderate_angioedema: {
clinical: "Faziales Ödem ohne Stridor.",
management: [
  "Sauerstoff 10 bis 15 L/min über eine Nicht-Rückatmungsmaske geben.",
  "Chlorphenamin 20 mg oder Clemastin 2 mg i.v. geben.",
  "Verlegung in einen Bereich mit Überwachung der Vitalfunktionen erwägen."
],
escalation: [
  "Wenn das Ödem schwer ist, in Atemwegsnähe liegt oder Stridor auftritt, wie eine Anaphylaxie behandeln."
]
        },
        moderate_bronchospasm: {
clinical: "Milder Bronchospasmus.",
management: [
  "Kurzwirksamer β2-Agonist: 2–4 Inhalationen zu je 100 µg Salbutamol (abhängig vom Schweregrad), mit der Option zur Wiederholung alle 20 Minuten, oder per Vernebelung (2,5–5 µg verdünnt in 3 mL Kochsalzlösung) bis zur klinischen Besserung.",
  "Verlegung in einen Bereich mit Überwachung der Vitalfunktionen erwägen."
],
escalation: [
  "Bei Verschlechterung Adrenalin 0,5 mg i.m. geben und die Hinzuziehung des Rapid-Response-Teams erwägen.",
  "Wenn der Bronchospasmus an Schwere zunimmt, Wiederholung von Adrenalin 0,5 mg i.m. erwägen, gesteuert anhand der Herzfrequenz."
]
        },
        severe_anaphylaxis: {
clinical: "Anaphylaktische Reaktion oder Stridor.",
management: [
  "Das Rapid-Response-Team rufen.",
  "Sauerstoff 10 bis 15 L/min mit Nicht-Rückatmungsmaske geben.",
  "0,5 mg Adrenalin i.m. in den lateralen Oberschenkel geben, nach Bedarf wiederholen, gesteuert anhand der Herzfrequenz.",
  "Flüssigkeitsbolus von 500 mL Kristalloid i.v. in 10 min geben, nach Bedarf wiederholen.",
  "Kurzwirksamer β2-Agonist: 2–10 Inhalationen zu je 100 µg Salbutamol (abhängig vom Schweregrad), mit der Option zur Wiederholung alle 20 Minuten, oder per Vernebelung (2,5–5 µg verdünnt in 3 mL Kochsalzlösung) bis zu 1 Stunde.",
  "Chlorphenamin 20 mg oder Clemastin 2 mg i.v. geben, nach Bedarf wiederholen.",
  "Zusatz eines Kortikosteroids erwägen (zum Beispiel Prednisolon 50 mg i.v.)."
],
arrest: [
  "CPR-Team (Reanimationsteam) rufen.",
  "CPR starten."
]
        }
      },

      nihr_title: "NIHR — nicht unmittelbare Hypersensitivitätsreaktionen",
      nihr_subtitle:
        "Für eine frühere nicht unmittelbare Hypersensitivitätsreaktion auf ein iodhaltiges Kontrastmittel oder ein gadoliniumbasiertes Kontrastmittel, wenn eine erneute Gabe erwogen wird.",
      nihr_severity_title: "Schweregrad der früheren NIHR",
      nihr_severity_mild: "Mild",
      nihr_severity_moderate: "Moderat",
      nihr_severity_severe: "Schwer",
      nihr_severity_hint:
        "Mild: Hautläsionen klingen ohne Behandlung ab. Moderat: Hautläsionen klingen unter ambulanter Behandlung ab. Schwer: eine stationäre Aufnahme zur Behandlung ist erforderlich.",
      nihr_culprit_class_title: "Klasse des früher auslösenden Kontrastmittels",
      nihr_cmtype_icm: "ICM",
      nihr_cmtype_gbca: "GBCA",
      nihr_cmtype_unknown: "Kontrastmittelklasse unbekannt",
      nihr_culprit_known_title: "Genaues auslösendes Kontrastmittel bekannt?",
      nihr_culprit_known: "Auslösendes KM bekannt",
      nihr_culprit_unknown: "Auslösendes KM unbekannt",
      nihr_danger_signs_title: "Warnzeichen",
      erosions: "Erosive und/oder hämorrhagische Läsionen",
      blistering: "Blasenbildung und Hautstörung",
      mucosal_involvement: "Schleimhautbeteiligung",
      extracutaneous_involvement: "Extrakutane Organbeteiligung (hohes Fieber, auffällige Leber-/Nierenwerte, Lymphadenopathie)",
      nihr_recommendation_title: "NIHR-Empfehlung",
      nihr_safety_note_title: "Sicherheitshinweis",
      nihr_safety_note: "",
      nihr_recommended_actions: "Empfohlene Maßnahmen",
      nihr_class_specific_rule: "Klassenspezifische Regel",
      nihr_status_scar: "Schwere nicht unmittelbare Hypersensitivitätsreaktion mit Warnzeichen (SCAR)",
      nihr_status_moderate: "Moderate NIHR ohne Warnzeichen",
      nihr_status_mild: "Milde NIHR ohne Warnzeichen",
      nihr_scope_guard:
        "Diese Kombination ist in ESUR Part 2 Table 2 nicht als eigener Managementpfad dargestellt. Schweregrad der NIHR und dokumentierte Warnzeichen erneut prüfen.",
      nihr_mild_interview: "Die Patientin oder den Patienten zur früheren Hypersensitivitätsreaktion befragen.",
      nihr_mild_refer:
        "Optional die Patientin oder den Patienten an eine Fachperson für Arzneimittelallergien überweisen (falls noch nicht erfolgt), wenn die lokale Kapazität für Arzneimittelallergologie ausreicht.",
      nihr_moderate_refer:
        "Die Patientin oder den Patienten an eine Fachperson für Arzneimittelallergien überweisen (falls noch nicht erfolgt).",
      nihr_optimize_ehr: "Die Allergieregistrierung in der elektronischen Patientenakte optimieren.",
      nihr_apply_advice:
        "Die Empfehlung der Fachperson für Arzneimittelallergien für ein sicheres iodhaltiges Kontrastmittel oder gadoliniumbasiertes Kontrastmittel umsetzen.",
      nihr_choose_different:
        "Wenn diese Empfehlung nicht vorliegt, ein anderes iodhaltiges Kontrastmittel oder gadoliniumbasiertes Kontrastmittel wählen, sofern das auslösende Kontrastmittel bekannt ist.",
      nihr_observe:
        "Wenn das Kontrastmittel verabreicht wird, die Patientin oder den Patienten mindestens 30 Minuten mit liegendem i.v.-Zugang beobachten.",
      nihr_written:
        "Der Patientin oder dem Patienten schriftliche Hinweise für eine mögliche erneute nicht unmittelbare Hypersensitivitätsreaktion mitgeben.",
      nihr_recurrence:
        "Wenn eine nicht unmittelbare Hypersensitivitätsreaktion wieder auftritt, ist die Überweisung an eine Fachperson für Arzneimittelallergien verpflichtend.",
      nihr_preventive_alt:
        "Eine alternative Bildgebungsmodalität erwägen oder eine Untersuchung ohne Kontrastmittel erwägen, wenn die diagnostische Aussagekraft für die korrekte Patientenführung ausreicht.",
      nihr_preventive_never_deny:
        "Eine klinisch gut indizierte kontrastverstärkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verfügbar sind.",
      nihr_footnote_crossreact:
        "Kreuzreaktivität von Kontrastmitteln und ein erhöhtes Risiko für eine nicht unmittelbare Hypersensitivitätsreaktion bei Verwendung iso-osmolarer dimerer iodhaltiger Kontrastmittel erwägen.",
      nihr_scar_refer:
        "Die Patientin oder den Patienten sofort an eine Fachperson für Arzneimittelallergien überweisen (falls noch nicht erfolgt).",
      nihr_scar_choose_imaging: "Eine alternative Bildgebungsmodalität wählen.",
      nihr_scar_ehr: "Die Allergieregistrierung in der elektronischen Patientenakte optimieren.",
      nihr_scar_do_not_give:
        "Die Kontrastmittelgruppe, auf die die schwere Hautreaktion aufgetreten ist, nicht geben.",
      nihr_scar_icm_rule:
        "Nach einer schweren nicht unmittelbaren Hypersensitivitätsreaktion auf ein iodhaltiges Kontrastmittel alle iodhaltigen Kontrastmittel vermeiden.",
      nihr_scar_gbca_rule:
        "Nach einer schweren nicht unmittelbaren Hypersensitivitätsreaktion auf ein gadoliniumbasiertes Kontrastmittel alle gadoliniumbasierten Kontrastmittel vermeiden.",
      nihr_scar_unknown_rule:
        "Nach einer schweren Reaktion auf ein unbekanntes Kontrastmittel das Vorgehen nach multidisziplinärer Konsultation individualisieren.",

            icm_hint:
        "Die ESUR-Gruppierung basiert auf dem jeweiligen Kontrastmittelwirkstoff. Markennamen werden ausschließlich zur Produktidentifikation angezeigt.\nGruppierung gemäß ESUR Part 2 Fig. 2 / Fig. 3 und Table 1.",
      gbca_hint:
        "Die ESUR-Gruppierung basiert auf dem jeweiligen Kontrastmittelwirkstoff. Markennamen werden ausschließlich zur Produktidentifikation angezeigt.\nGruppierung gemäß ESUR Part 2 Fig. 2 / Fig. 3 und Table 1.",

      flow_titles: {
        elective_mild: "Elektive Bildgebung — frühere milde unmittelbare Hypersensitivitätsreaktion",
        elective_moderate: "Elektive Bildgebung — frühere moderate unmittelbare Hypersensitivitätsreaktion",
        elective_severe: "Elektive Bildgebung — frühere schwere unmittelbare Hypersensitivitätsreaktion",
        emergency_mild: "Notfallbildgebung — frühere milde unmittelbare Hypersensitivitätsreaktion",
        emergency_moderate: "Notfallbildgebung — frühere moderate unmittelbare Hypersensitivitätsreaktion",
        emergency_severe: "Notfallbildgebung — frühere schwere unmittelbare Hypersensitivitätsreaktion"
      },

      flow_bullets: {
        elective_mild: [
          "Die Patientin oder den Patienten zur früheren Hypersensitivitätsreaktion befragen.",
          "Optional die Patientin oder den Patienten an eine Fachperson für Arzneimittelallergien überweisen (falls noch nicht erfolgt), wenn die lokale Kapazität für Arzneimittelallergologie ausreicht.",
          "Die Allergieregistrierung in der elektronischen Patientenakte optimieren.",
          "Die Empfehlung der Fachperson für Arzneimittelallergien für ein sicheres iodhaltiges Kontrastmittel oder gadoliniumbasiertes Kontrastmittel umsetzen; oder, wenn diese nicht vorliegt, ein anderes iodhaltiges oder gadoliniumbasiertes Kontrastmittel wählen, sofern das auslösende Kontrastmittel bekannt ist.",
          "Wenn das Kontrastmittel verabreicht wird, die Patientin oder den Patienten mindestens 30 Minuten mit liegendem i.v.-Zugang beobachten.",
          "Auf eine wiederkehrende unmittelbare Hypersensitivitätsreaktion vorbereitet und wachsam sein.",
          "Wenn eine unmittelbare Hypersensitivitätsreaktion wieder auftritt, ist die Überweisung an eine Fachperson für Arzneimittelallergien verpflichtend.",
          "Eine alternative Bildgebungsmodalität erwägen oder eine Untersuchung ohne Kontrastmittel erwägen, wenn die diagnostische Aussagekraft für die korrekte Patientenführung ausreicht.",
          "Eine klinisch gut indizierte kontrastverstärkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verfügbar sind."
        ],
        elective_moderate: [
          "Die Patientin oder den Patienten an eine Fachperson für Arzneimittelallergien überweisen (falls noch nicht erfolgt).",
          "Die Allergieregistrierung in der elektronischen Patientenakte optimieren.",
          "Die Bildgebung aufschieben, um die Ergebnisse der Allergieanalyse abzuwarten.",
          "Die Empfehlung der Fachperson für Arzneimittelallergien für ein sicheres iodhaltiges Kontrastmittel oder gadoliniumbasiertes Kontrastmittel umsetzen.",
          "Wenn das Kontrastmittel verabreicht wird, die Patientin oder den Patienten mindestens 30 Minuten mit liegendem i.v.-Zugang beobachten.",
          "Auf eine wiederkehrende unmittelbare Hypersensitivitätsreaktion vorbereitet und wachsam sein.",
          "Wenn eine unmittelbare Hypersensitivitätsreaktion wieder auftritt, ist die Überweisung an eine Fachperson für Arzneimittelallergien verpflichtend.",
          "Eine alternative Bildgebungsmodalität erwägen oder eine Untersuchung ohne Kontrastmittel erwägen, wenn die diagnostische Aussagekraft für die korrekte Patientenführung ausreicht.",
          "Eine klinisch gut indizierte kontrastverstärkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verfügbar sind."
        ],
        elective_severe: [
          "Die Patientin oder den Patienten an eine Fachperson für Arzneimittelallergien überweisen (falls noch nicht erfolgt).",
          "Die Allergieregistrierung in der elektronischen Patientenakte optimieren.",
          "Ein geschultes Mitglied des Rapid-Response-Teams (oder Reanimationsteams) in der Nähe haben.",
          "Die Bildgebung aufschieben, um die Ergebnisse der Allergieanalyse abzuwarten.",
          "Die Empfehlung der Fachperson für Arzneimittelallergien für ein sicheres iodhaltiges Kontrastmittel oder gadoliniumbasiertes Kontrastmittel umsetzen.",
          "Wenn das Kontrastmittel verabreicht wird, die Patientin oder den Patienten mindestens 30 Minuten mit liegendem i.v.-Zugang beobachten.",
          "Auf eine wiederkehrende unmittelbare Hypersensitivitätsreaktion vorbereitet und wachsam sein.",
          "Wenn eine unmittelbare Hypersensitivitätsreaktion wieder auftritt, ist die Überweisung an eine Fachperson für Arzneimittelallergien verpflichtend.",
          "Eine alternative Bildgebungsmodalität erwägen oder eine Untersuchung ohne Kontrastmittel erwägen, wenn die diagnostische Aussagekraft für die korrekte Patientenführung ausreicht.",
          "Eine klinisch gut indizierte kontrastverstärkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verfügbar sind."
        ],
        emergency_mild: [
          "Die Patientin oder den Patienten zur früheren Hypersensitivitätsreaktion befragen.",
          "Optional die Patientin oder den Patienten an eine Fachperson für Arzneimittelallergien überweisen (falls noch nicht erfolgt), wenn die lokale Kapazität für Arzneimittelallergologie ausreicht.",
          "Die Allergieregistrierung in der elektronischen Patientenakte optimieren.",
          "Die Empfehlung der Fachperson für Arzneimittelallergien für ein sicheres iodhaltiges Kontrastmittel oder gadoliniumbasiertes Kontrastmittel umsetzen; oder, wenn diese nicht vorliegt, ein anderes iodhaltiges oder gadoliniumbasiertes Kontrastmittel wählen, sofern das auslösende Kontrastmittel bekannt ist.",
          "Wenn das Kontrastmittel verabreicht wird, die Patientin oder den Patienten mindestens 30 Minuten mit liegendem i.v.-Zugang beobachten.",
          "Auf eine wiederkehrende unmittelbare Hypersensitivitätsreaktion vorbereitet und wachsam sein.",
          "Wenn eine unmittelbare Hypersensitivitätsreaktion wieder auftritt, ist die Überweisung an eine Fachperson für Arzneimittelallergien verpflichtend.",
          "Eine alternative Bildgebungsmodalität erwägen oder eine Untersuchung ohne Kontrastmittel erwägen, wenn die diagnostische Aussagekraft für die korrekte Patientenführung ausreicht.",
          "Eine klinisch gut indizierte kontrastverstärkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verfügbar sind."
        ],
        emergency_moderate: [
          "Die Patientin oder den Patienten an eine Fachperson für Arzneimittelallergien überweisen (falls noch nicht erfolgt).",
          "Die Allergieregistrierung in der elektronischen Patientenakte optimieren.",
          "Eine geschulte Ärztin oder einen geschulten Arzt aus Bildgebung oder Notaufnahme in der Nähe haben.",
          "Ein anderes iodhaltiges Kontrastmittel oder gadoliniumbasiertes Kontrastmittel wählen, sofern das auslösende Kontrastmittel bekannt ist.",
          "Wenn das Kontrastmittel verabreicht wird, die Patientin oder den Patienten mindestens 30 Minuten mit liegendem i.v.-Zugang beobachten.",
          "Auf eine wiederkehrende unmittelbare Hypersensitivitätsreaktion vorbereitet und wachsam sein.",
          "Wenn eine unmittelbare Hypersensitivitätsreaktion wieder auftritt, ist die Überweisung an eine Fachperson für Arzneimittelallergien verpflichtend.",
          "Eine alternative Bildgebungsmodalität erwägen oder eine Untersuchung ohne Kontrastmittel erwägen, wenn die diagnostische Aussagekraft für die korrekte Patientenführung ausreicht.",
          "Eine klinisch gut indizierte kontrastverstärkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verfügbar sind."
        ],
        emergency_severe: [
          "Die Patientin oder den Patienten an eine Fachperson für Arzneimittelallergien überweisen (falls noch nicht erfolgt).",
          "Die Allergieregistrierung in der elektronischen Patientenakte optimieren.",
          "Ein geschultes Mitglied des Rapid-Response-Teams (oder Reanimationsteams) in der Nähe haben.",
          "Die Gabe einer Prämedikation erwägen (EAACI-Leitlinien).",
          "Notfall-Prämedikationsprotokoll: 50 mg Prednisolon i.v. (oder Äquivalent) ≥ 30 min vor der Kontrastmittelgabe.",
          "Notfall-Prämedikationsprotokoll: 2 mg Clemastin i.v. (oder Äquivalent) ≥ 30 min vor der Kontrastmittelgabe.",
          "Kontext aus Part 2: Eine routinemäßige Prämedikation wird nicht empfohlen. Eine Prämedikation ist in Notfallsituationen optional, wenn ein nicht identifiziertes auslösendes Kontrastmittel zu einer schweren Hypersensitivitätsreaktion geführt hat.",
          "Ein anderes iodhaltiges Kontrastmittel oder gadoliniumbasiertes Kontrastmittel wählen, sofern das auslösende Kontrastmittel bekannt ist.",
          "Wenn das Kontrastmittel verabreicht wird, die Patientin oder den Patienten mindestens 30 Minuten mit liegendem i.v.-Zugang beobachten.",
          "Auf eine wiederkehrende unmittelbare Hypersensitivitätsreaktion vorbereitet und wachsam sein.",
          "Wenn eine unmittelbare Hypersensitivitätsreaktion wieder auftritt, ist die Überweisung an eine Fachperson für Arzneimittelallergien verpflichtend.",
          "Eine alternative Bildgebungsmodalität erwägen oder eine Untersuchung ohne Kontrastmittel erwägen, wenn die diagnostische Aussagekraft für die korrekte Patientenführung ausreicht.",
          "Eine klinisch gut indizierte kontrastverstärkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verfügbar sind."
        ]
      },

      switch_placeholder_icm: "Bitte oben die beteiligte ICM-Gruppe auswählen.",
      switch_placeholder_gbca: "Bitte oben die beteiligte GBCA-Gruppe auswählen.",

      icm_rules: {
        A: {
          title: "Gruppe A ausgewählt",
          text: "Vorschlag aus praktischer Erfahrung: Alternatives ICM aus Gruppe B oder D (ohne klassische Carbamoyl-Seitenkette).",
          note: "Hohe Kreuzreaktivität zwischen Gruppe A und Gruppe C."
        },
        B: {
          title: "Gruppe B ausgewählt",
          text: "Vorschlag aus praktischer Erfahrung: Alternatives ICM aus Gruppe A, C oder D.",
          note: ""
        },
        C: {
          title: "Gruppe C ausgewählt",
          text: "Vorschlag aus praktischer Erfahrung: Alternatives ICM aus Gruppe B (ohne klassische oder methylmodifizierte Carbamoyl-Seitenkette).",
          note: "Hohe Kreuzreaktivität zwischen Gruppe C und Gruppe A."
        },
        D: {
          title: "Gruppe D ausgewählt",
          text: "Vorschlag aus praktischer Erfahrung: Alternatives ICM aus Gruppe A oder B (ohne methylmodifizierte Carbamoyl-Seitenkette).",
          note: ""
        },
        unknown: {
          title: "ICM unbekannt",
          text: "Aufgrund der höheren Wahrscheinlichkeit, dass das beteiligte ICM aus Gruppe A stammt: das alternative ICM aus Gruppe B oder D wählen.",
          note: "Hohe Kreuzreaktivität zwischen Gruppe C und Gruppe A. Dies ist ein Vorschlag aus praktischer Erfahrung auf Basis der optionalen, nicht validierten Klassifikation und keine robuste evidenzbasierte Empfehlung."
        }
      },

      gbca_rules: {
        A: {
          title: "Gruppe A ausgewählt",
          text: "Vorschlag aus praktischer Erfahrung: Alternatives GBCA aus Gruppe B.",
          note: ""
        },
        B: {
          title: "Gruppe B ausgewählt",
          text: "Vorschlag aus praktischer Erfahrung: Alternatives GBCA aus Gruppe A.",
          note: ""
        },
        C: {
          title: "Gruppe C ausgewählt",
          text: "Unzureichende Datenlage für eine empirische Wechsel-Empfehlung.",
          note: ""
        },
        unknown: {
          title: "GBCA unbekannt",
          text: "Ein Schema kann nicht mit Sicherheit empfohlen werden. Aufgrund der Beteiligungswahrscheinlichkeit wird die Verwendung eines anderen als des routinemässig eingesetzten GBCA vorgeschlagen.",
          note: "Dies beruht auf praktischer Erfahrung und ist keine robuste evidenzbasierte Empfehlung."
        }
      },

      // Practice Changes tab — static UI
      changes_title: "Practice Changes 2025",
      changes_subtitle:
        "ESUR 2025 vs. ESUR 10.0 — wichtigste Praxisunterschiede.",
      changes_intro:
        "Kompakte Übersicht praxisrelevanter Änderungen. Nur zur didaktischen Unterstützung.",
      badge_practice_changing: "Praxisrelevant verändert",
      badge_refined: "Präzisiert",
      badge_structural: "Strukturell / terminologisch",
      changes_filter_title: "Filter",
      changes_filter_label: "Relevanz",
      changes_mode_label: "Lesemodus",
      changes_search_label: "Suche",
      changes_filter_all: "Alle",
      changes_filter_high: "Praxisrelevant verändert",
      changes_filter_medium: "Präzisiert",
      changes_filter_low: "Strukturell",
      changes_mode_compare: "Vergleich",
      changes_mode_action: "Action mode",
      changes_search_placeholder: "Themen suchen (z. B. Hypersensitivität, CA-AKI, Wartezeiten)",
      changes_open: "Öffnen",
      changes_no_results:
        "Keine Themen passen zum aktuellen Filter. Versuche einen anderen Suchbegriff oder stelle auf „Alle“ zurück.",
      changes_compare_mode_badge: "Vergleich",
      changes_action_mode_badge: "Action mode"
    }
  };

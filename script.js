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

  const i18n = {
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

      disclaimer_line1: "Didaktisches Support-Tool. Lokale Protokolle beachten..",
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

  const views = {
    hsr: document.getElementById("view-hsr"),
    changes: document.getElementById("view-changes")
  };

  const hsrTabs = {
    guidance: document.getElementById("hsr-tab-guidance"),
    acute: document.getElementById("hsr-tab-acute"),
    switch: document.getElementById("hsr-tab-switch"),
    tryptase: document.getElementById("hsr-tab-tryptase"),
    nihr: document.getElementById("hsr-tab-nihr")
  };


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

  function t(key) {
    return i18n[state.lang][key];
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function fmt(value, digits = 2) {
    return Number(value).toFixed(digits);
  }

  function levelLabel(level) {
    if (level === "high") return t("badge_practice_changing");
    if (level === "medium") return t("badge_refined");
    return t("badge_structural");
  }

  function modeLabel(mode) {
    return mode === "action" ? t("changes_action_mode_badge") : t("changes_compare_mode_badge");
  }

  function iconSvg(name, className) {
    const cls = className ? ` class="${className}"` : "";
    const common = `fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`;

    const icons = {
      document: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="M8 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 7 20V5a1.5 1.5 0 0 1 1.5-1.5Z"/>
          <path ${common} d="M14 3.5V8h4"/>
          <path ${common} d="M9.5 12h5"/>
          <path ${common} d="M9.5 15.5h5"/>
        </svg>
      `,
      warningDrop: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="M12 4.5 3.8 18.3a1.3 1.3 0 0 0 1.1 2h14.2a1.3 1.3 0 0 0 1.1-2L12 4.5Z"/>
          <path ${common} d="M12 10v3.8"/>
          <path ${common} d="M12 17.2h.01"/>
          <path ${common} d="M18.8 4.2c-1.6 1.2-3 2.7-3 4.6 0 1.6 1.2 2.8 2.8 2.8 1.7 0 3.1-1.3 3.1-3.1 0-1.5-1-3.1-2.9-4.3Z"/>
        </svg>
      `,
      kidney: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="M9.4 4.4c-2.8 0-5 2.2-5 5v2.1c0 3.3 2.5 6 5.6 6 2.4 0 4.4-1.9 4.4-4.3V8.8c0-2.4-1.9-4.4-4.4-4.4Z"/>
          <path ${common} d="M14.6 4.4c2.8 0 5 2.2 5 5v2.1c0 3.3-2.5 6-5.6 6-2.4 0-4.4-1.9-4.4-4.3V8.8c0-2.4 1.9-4.4 4.4-4.4Z"/>
        </svg>
      `,
      clock: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <circle ${common} cx="12" cy="12" r="8.5"/>
          <path ${common} d="M12 7.7v4.9l3.3 1.8"/>
        </svg>
      `,
      lab: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="M9 3.8h6"/>
          <path ${common} d="M10.4 3.8v5.1l-4.7 8.3a2.2 2.2 0 0 0 1.9 3.3h8.8a2.2 2.2 0 0 0 1.9-3.3l-4.7-8.3V3.8"/>
          <path ${common} d="M8.2 14.2h7.6"/>
        </svg>
      `,
      extravasation: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="M6.2 13.2 8 7.6c.3-.9 1.2-1.5 2.2-1.5h1.1c1 0 1.9.6 2.2 1.5l1.5 4.7"/>
          <path ${common} d="M5.5 14.4h9.6c1.7 0 3 1.3 3 3v.2a2.8 2.8 0 0 1-2.8 2.8H9.9a4.2 4.2 0 0 1-4.1-4.1v-1.9c0-.6.5-1 1-1Z"/>
          <path ${common} d="M18.2 5.4c-1.2.9-2.2 2-2.2 3.5 0 1.2.9 2.2 2.2 2.2 1.4 0 2.5-1.1 2.5-2.5 0-1.2-.8-2.4-2.5-3.2Z"/>
        </svg>
      `,
      dialysis: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <rect ${common} x="4.5" y="5.2" width="6.4" height="13.6" rx="1.6"/>
          <path ${common} d="M10.9 8.2h2.7a3.8 3.8 0 0 1 3.8 3.8v0a3.8 3.8 0 0 1-3.8 3.8h-2.7"/>
          <path ${common} d="M17.4 6.1v2.1"/>
          <path ${common} d="M17.4 15.8v2.1"/>
          <path ${common} d="M6.5 9.2h2.4"/>
          <path ${common} d="M6.5 14.8h2.4"/>
        </svg>
      `,
      layers: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="m12 4.4 8 4.2-8 4.2-8-4.2 8-4.2Z"/>
          <path ${common} d="m4 12.1 8 4.2 8-4.2"/>
          <path ${common} d="m6.2 17.1 5.8 3 5.8-3"/>
        </svg>
      `,
      stack: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <rect ${common} x="5" y="4.5" width="11.8" height="7" rx="1.4"/>
          <rect ${common} x="7.2" y="9.1" width="11.8" height="7" rx="1.4"/>
          <rect ${common} x="9.4" y="13.7" width="9.6" height="5.8" rx="1.4"/>
        </svg>
      `,
      chevron: `
        <svg viewBox="0 0 24 24"${cls} aria-hidden="true">
          <path ${common} d="m6.8 9.5 5.2 5 5.2-5"/>
        </svg>
      `
    };

    return icons[name] || icons.document;
  }

  function applyStaticTranslations() {
    document.documentElement.lang = state.lang;
    document.title = t("app_title");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (i18n[state.lang][key] !== undefined) {
        el.textContent = i18n[state.lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (i18n[state.lang][key] !== undefined) {
        el.placeholder = i18n[state.lang][key];
      }
    });

    const stickyDisclaimer = document.getElementById("stickyDisclaimer");
    if (stickyDisclaimer) {
      let extra = stickyDisclaimer.querySelector('[data-i18n="disclaimer_line3"]');
      if (!extra) {
        extra = document.createElement("span");
        extra.setAttribute("data-i18n", "disclaimer_line3");
        stickyDisclaimer.appendChild(extra);
      }
      extra.textContent = t("disclaimer_line3");
    }

    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };

    const setMultilineText = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = escapeHtml(value).replace(/\n/g, "<br />");
    };

    const setGroupLabel = (seg, value, label) => {
      const el = document.querySelector(`.seg__btn[data-seg="${seg}"][data-value="${value}"] > span`);
      if (el) el.textContent = label;
    };

    setMultilineText("icmHint", t("icm_hint"));
    setMultilineText("gbcaHint", t("gbca_hint"));
    fillSwitchPrinciples();

    setGroupLabel("icm", "A", t("icm_group_a_label"));
    setGroupLabel("icm", "B", t("icm_group_b_label"));
    setGroupLabel("icm", "C", t("icm_group_c_label"));
    setGroupLabel("icm", "D", t("icm_group_d_label"));
    setGroupLabel("gbca", "A", t("gbca_group_a_label"));
    setGroupLabel("gbca", "B", t("gbca_group_b_label"));
    setGroupLabel("gbca", "C", t("gbca_group_c_label"));

    setText("icm-group-a-names", t("icm_group_a_names"));
    setText("icm-group-b-names", t("icm_group_b_names"));
    setText("icm-group-c-names", t("icm_group_c_names"));
    setText("icm-group-d-names", t("icm_group_d_names"));
    setText("gbca-group-a-names", t("gbca_group_a_names"));
    setText("gbca-group-b-names", t("gbca_group_b_names"));
    setText("gbca-group-c-names", t("gbca_group_c_names"));

    const baseline = document.getElementById("baseline");
    const acute = document.getElementById("acute");
    if (baseline) baseline.placeholder = `${t("tryptase_baseline")} (ng/mL)`;
    if (acute) acute.placeholder = `${t("tryptase_acute")} (ng/mL)`;

    if (changesSearchInput && changesSearchInput.value !== state.changesSearch) {
      changesSearchInput.value = state.changesSearch;
    }
  }

  function setBodyMode() {
  const hsrView = document.getElementById("view-hsr");
  const guidanceView = document.getElementById("hsr-tab-guidance");

  const isRelevantView =
    hsrView &&
    !hsrView.hidden &&
    guidanceView &&
    !guidanceView.hidden;

  const isEmergencySelected = state.situation === "emergency";

  document.body.classList.toggle(
    "emergency",
    isRelevantView && isEmergencySelected
  );
}
  
  document.addEventListener("click", function () {
  window.requestAnimationFrame(setBodyMode);
});
  function showMainView(name) {
    Object.keys(views).forEach((key) => {
      if (views[key]) views[key].hidden = key !== name;
    });

    document.querySelectorAll(".bottomnav__btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.mainNav === name);
    });

    state.mainNav = name;
  }

  function showHsrTab(name) {
    Object.keys(hsrTabs).forEach((key) => {
      if (hsrTabs[key]) hsrTabs[key].hidden = key !== name;
    });

    document.querySelectorAll("[data-hsr-tab]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.hsrTab === name);
    });

    state.hsrTab = name;
  }


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

  function renderFlow() {
    const key = `${state.situation}_${state.reaction}`;
    const title = t("flow_titles")[key];
    const bullets = t("flow_bullets")[key];

    if (flowOutput) {
      flowOutput.innerHTML = `
        <div><strong>${escapeHtml(title)}</strong></div>
        <ul>${bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
      `;
    }

    if (flowSafety) flowSafety.textContent = t("flow_safety");
  }


  function renderAcuteList(items) {
    return `<ul>${(items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function renderAcuteManagement() {
    const contentByPattern = t("acute_content");
    if (!contentByPattern[state.acutePattern]) {
      state.acutePattern = defaultAcutePattern(state.acuteSeverity);
    }

    document.querySelectorAll('.seg__btn[data-seg="acuteSeverity"]').forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.value === state.acuteSeverity);
    });

    document.querySelectorAll('.seg__btn[data-seg="acutePattern"]').forEach((btn) => {
      const isVisible = btn.dataset.acuteSeverity === state.acuteSeverity;
      btn.hidden = !isVisible;
      btn.classList.toggle("active", isVisible && btn.dataset.value === state.acutePattern);
    });

    if (acuteImmediateOutput) {
  const immediateActions = t("acute_immediate_actions") || [];
  const intro = immediateActions[0] || "";
  const actions = immediateActions.slice(1);

  acuteImmediateOutput.innerHTML = `
    ${intro ? `<div>${escapeHtml(intro)}</div>` : ""}
    ${renderAcuteList(actions)}
  `;
}

    if (!acuteOutput) return;

    const content = contentByPattern[state.acutePattern];
    const warning = content.warning
      ? `<div><strong>${escapeHtml(t("acute_warning_label"))}:</strong> ${escapeHtml(content.warning)}</div>`
      : "";
    const escalation = (content.escalation || []).length
      ? renderAcuteList(content.escalation)
      : "";
    const arrest = (content.arrest || []).length
      ? `
        <div>
<strong>${escapeHtml(t("acute_arrest_title"))}:</strong>
${renderAcuteList(content.arrest)}
        </div>
      `
      : "";

    acuteOutput.innerHTML = `
      <div>
        <strong>${escapeHtml(t("acute_section_clinical"))}</strong>
        <div>${escapeHtml(content.clinical)}</div>
        ${warning}
      </div>
      <div>
        <strong>${escapeHtml(t("acute_section_management"))}</strong>
        ${renderAcuteList(content.management)}
      </div>
      <div>
        <strong>${escapeHtml(t("acute_section_escalation"))}</strong>
        ${escalation}
        ${arrest}
      </div>
      <div class="hint">
        <strong>${escapeHtml(t("acute_dose_reference_title"))}:</strong> ${escapeHtml(t("acute_dose_reference_note"))}
      </div>
    `;
  }

  function fillSwitchPrinciples() {
    const items = [
      t("switch_status_optional"),
      t("switch_cmsc"),
      t("switch_cr_structure"),
      t("switch_cr_frequency"),
      t("switch_best_option")
    ];
    const html =
      `<ul>${items.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>` +
      `<div class="hint">${escapeHtml(t("switch_brand_governance"))}</div>`;
    const top = document.getElementById("switchNonvalidated");
    const safety = document.getElementById("switchSafety");
    if (top) top.innerHTML = html;
    if (safety) safety.innerHTML = html;
  }

  function renderSwitch() {
    if (!switchOutput) return;

    if (state.cmtype === "icm") {
      if (icmCard) icmCard.hidden = false;
      if (gbcaCard) gbcaCard.hidden = true;

      if (!state.icm) {
        switchOutput.innerHTML = `<div class="hint">${escapeHtml(t("switch_placeholder_icm"))}</div>`;
        return;
      }

      const rule = t("icm_rules")[state.icm];
      switchOutput.innerHTML = `
        <div><strong>${escapeHtml(rule.title)}</strong></div>
        <div style="margin-top:10px">${escapeHtml(rule.text)}</div>
        <div class="hint" style="margin-top:10px">${escapeHtml(rule.note)}</div>
      `;
      return;
    }

    if (icmCard) icmCard.hidden = true;
    if (gbcaCard) gbcaCard.hidden = false;

    if (!state.gbca) {
      switchOutput.innerHTML = `<div class="hint">${escapeHtml(t("switch_placeholder_gbca"))}</div>`;
      return;
    }

    const rule = t("gbca_rules")[state.gbca];
    switchOutput.innerHTML = `
      <div><strong>${escapeHtml(rule.title)}</strong></div>
      <div style="margin-top:10px">${escapeHtml(rule.text)}</div>
      <div class="hint" style="margin-top:10px">${escapeHtml(rule.note)}</div>
    `;
  }

  function renderTryptase() {
    if (!tryptaseOutput) return;
    if (!tryptaseOutput.dataset.ready) {
      tryptaseOutput.innerHTML = `
        <div class="hint">${escapeHtml(t("tryptase_default"))}</div>
        <div class="hint" style="margin-top:10px">${escapeHtml(t("tryptase_formula"))}</div>
      `;
    }
  }

  function calcTryptase() {
    if (!tryptaseOutput) return;

    const baseline = Number(document.getElementById("baseline")?.value);
    const acute = Number(document.getElementById("acute")?.value);

    if (!isFinite(baseline) || !isFinite(acute) || baseline < 0 || acute < 0) {
      tryptaseOutput.innerHTML = `<div class="hint">${escapeHtml(t("tryptase_invalid"))}</div>`;
      return;
    }

    const threshold = (1.2 * baseline) + 2;
    const significant = acute >= threshold;

    tryptaseOutput.innerHTML = `
      <div><strong>${escapeHtml(t("tryptase_threshold"))}:</strong> ${fmt(threshold)} ng/mL</div>
      <div><strong>${escapeHtml(t("tryptase_acute"))}:</strong> ${fmt(acute)} ng/mL</div>
      <div><strong>${escapeHtml(t("tryptase_baseline"))}:</strong> ${fmt(baseline)} ng/mL</div>
      <div class="hint" style="margin-top:10px">${escapeHtml(t("tryptase_formula"))}</div>
      <div style="margin-top:10px"><strong>${escapeHtml(significant ? t("tryptase_positive") : t("tryptase_negative"))}</strong></div>
      <div class="hint" style="margin-top:10px">${escapeHtml(t("tryptase_note"))}</div>
    `;

    tryptaseOutput.dataset.ready = "1";
  }

  function renderNihr() {
    if (!nihrOutput) return;

    const hasDangerSigns = Array.from(document.querySelectorAll(".nihr-check")).some((el) => el.checked);
    const severity = state.nihrSeverity;
    const mildValid = severity === "mild" && !hasDangerSigns;
    const moderateValid = severity === "moderate" && !hasDangerSigns;
    const scarValid = severity === "severe" && hasDangerSigns;

    const renderNihrList = (items) =>
      `<ul>${(items || []).map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>`;

    const adviceItems = () => {
      const items = [t("nihr_apply_advice")];
      if (state.nihrCulpritKnown === "known") items.push(t("nihr_choose_different"));
      return items;
    };

    const followUpItems = [
      t("nihr_observe"),
      t("nihr_written"),
      t("nihr_recurrence"),
      t("nihr_preventive_alt"),
      t("nihr_preventive_never_deny"),
      t("nihr_footnote_crossreact")
    ];

    if (mildValid) {
      nihrOutput.innerHTML = `
        <div><strong>${escapeHtml(t("nihr_status_mild"))}</strong></div>
        <div>
          <strong>${escapeHtml(t("nihr_recommended_actions"))}</strong>
          ${renderNihrList([
            t("nihr_mild_interview"),
            t("nihr_mild_refer"),
            t("nihr_optimize_ehr"),
            ...adviceItems(),
            ...followUpItems
          ])}
        </div>
      `;
      return;
    }

    if (moderateValid) {
      nihrOutput.innerHTML = `
        <div><strong>${escapeHtml(t("nihr_status_moderate"))}</strong></div>
        <div>
          <strong>${escapeHtml(t("nihr_recommended_actions"))}</strong>
          ${renderNihrList([
            t("nihr_moderate_refer"),
            t("nihr_optimize_ehr"),
            ...adviceItems(),
            ...followUpItems
          ])}
        </div>
      `;
      return;
    }

    if (scarValid) {
      const classRule =
        state.nihrCmtype === "gbca"
          ? t("nihr_scar_gbca_rule")
          : state.nihrCmtype === "unknown"
            ? t("nihr_scar_unknown_rule")
            : t("nihr_scar_icm_rule");

      nihrOutput.innerHTML = `
        <div><strong>${escapeHtml(t("nihr_status_scar"))}</strong></div>
        <div>
          <strong>${escapeHtml(t("nihr_recommended_actions"))}</strong>
          ${renderNihrList([
            t("nihr_scar_refer"),
            t("nihr_scar_choose_imaging"),
            t("nihr_scar_ehr"),
            t("nihr_scar_do_not_give")
          ])}
        </div>
        <div>
          <strong>${escapeHtml(t("nihr_class_specific_rule"))}</strong>
          ${renderNihrList([classRule])}
        </div>
      `;
      return;
    }

    nihrOutput.innerHTML = `<div>${escapeHtml(t("nihr_scope_guard"))}</div>`;
  }

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

  function clearButtons(seg) {
    document.querySelectorAll(`.seg__btn[data-seg="${seg}"]`).forEach((btn) => {
      btn.classList.remove("active");
    });
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
const stickyDisclaimer = document.getElementById("stickyDisclaimer");

if (stickyDisclaimer) {
  stickyDisclaimer.setAttribute("role", "button");
  stickyDisclaimer.setAttribute("tabindex", "0");
  stickyDisclaimer.setAttribute("aria-expanded", "false");

  const toggleDisclaimer = () => {
    const isOpen = stickyDisclaimer.classList.toggle("is-open");
    stickyDisclaimer.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  stickyDisclaimer.addEventListener("click", toggleDisclaimer);

  stickyDisclaimer.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDisclaimer();
    }
  });
}

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

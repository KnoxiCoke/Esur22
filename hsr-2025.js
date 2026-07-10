(() => {
  "use strict";

  const PART_1_DOI = "10.1007/s00330-025-11675-1";
  const PART_2_DOI = "10.1007/s00330-025-11676-0";

  const overlayState = {
    culpritKnown: null,
    reaction: null,
    tryptaseCalculated: false
  };

  const text = {
    en: {
      adultOnly: "Adults only (18 years and older). The ESUR treatment algorithm and the medication doses shown here were developed for adults; they are not a paediatric dosing algorithm.",
      sourcePart1: `Source: ESUR CMSC 2025, Part 1 (${PART_1_DOI}).`,
      sourcePart2: `Source: ESUR CMSC 2025, Part 2 (${PART_2_DOI}).`,
      unclear: "Unclear",
      culpritTitle: "Step 3 — Is the culprit contrast medium known?",
      culpritKnown: "Culprit CM known",
      culpritUnknown: "Culprit CM unknown",
      chooseRequired: "Select the previous reaction severity and whether the culprit contrast medium is known.",
      allPreviousCommon: [
        "Consider an alternative imaging modality or an unenhanced examination if the diagnostic yield is sufficient.",
        "Do not deny a clinically well-indicated contrast-enhanced examination when no diagnostically adequate alternative is available.",
        "Document the specific contrast agent and the reaction severity accurately in the electronic health record."
      ],
      mildCommon: [
        "Interview the patient about the previous immediate hypersensitivity reaction.",
        "Referral to a drug allergy specialist is optional when local capacity is sufficient.",
        "Apply drug-allergy specialist advice when available.",
        "If no allergy advice is available and the culprit CM is known, choose a different CM.",
        "When CM is administered, observe for at least 30 minutes with the IV line in place and remain prepared for recurrence.",
        "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory."
      ],
      moderateElective: [
        "Refer the patient to a drug allergy specialist if this has not already been done.",
        "Postpone the examination, when clinically feasible, to await the allergy-analysis result.",
        "Use the contrast medium recommended as safe by the drug allergy specialist.",
        "When CM is administered, observe for at least 30 minutes with the IV line in place and remain prepared for recurrence.",
        "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory."
      ],
      moderateEmergency: [
        "Refer the patient to a drug allergy specialist if this has not already been done.",
        "Have a trained imaging or emergency-room physician nearby.",
        "If the culprit CM is known, choose a different CM.",
        "When CM is administered, observe for at least 30 minutes with the IV line in place and remain prepared for recurrence.",
        "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory."
      ],
      severeElective: [
        "Refer the patient to a drug allergy specialist if this has not already been done.",
        "Have a trained rapid-response or resuscitation-team member nearby.",
        "Postpone the examination, when clinically feasible, to await the allergy-analysis result.",
        "Use the contrast medium recommended as safe by the drug allergy specialist.",
        "When CM is administered, observe for at least 30 minutes with the IV line in place and remain prepared for recurrence.",
        "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory."
      ],
      severeEmergency: [
        "Refer the patient to a drug allergy specialist if this has not already been done.",
        "Have a trained rapid-response or resuscitation-team member nearby.",
        "Consider emergency premedication according to the EAACI-based protocol reproduced in the ESUR paper.",
        "If the culprit CM is known, choose a different CM.",
        "When CM is administered, observe for at least 30 minutes with the IV line in place and remain prepared for recurrence.",
        "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory."
      ],
      unclearReaction: [
        "Clarify the symptoms, timing, treatment and exact contrast agent from the previous event whenever possible.",
        "Do not assign a mild, moderate or severe pathway until the reaction can be classified reliably.",
        "Use clinical judgement, local protocols and specialist input when contrast administration cannot wait for clarification."
      ],
      premedTitle: "Emergency premedication protocol stated in ESUR Part 2",
      premedBullets: [
        "Prednisolone 50 mg IV (or equivalent) at least 30 minutes before CM administration.",
        "Clemastine 2 mg IV (or equivalent) at least 30 minutes before CM administration.",
        "Prednisolone equivalents: methylprednisolone 40 mg IV, dexamethasone 8 mg IV, or hydrocortisone 200 mg IV.",
        "Clemastine equivalents: diphenhydramine 50 mg IV, chlorphenamine 20 mg IV, or cetirizine 10 mg IV.",
        "Routine premedication is not recommended; this protocol is presented for the severe emergency pathway described in the paper."
      ],
      acuteGeneral: [
        "Check and stabilise the patient according to ABCDE.",
        "Stop contrast-agent infusion and replace the IV line with crystalloid.",
        "For dyspnoea or stridor, sit the patient up.",
        "For hypotension, place the patient prone and raise the legs.",
        "Check heart rate, arterial blood pressure and consciousness when symptoms occur.",
        "With marked bradycardia, consider a vasovagal reaction and local atropine guidance.",
        "Consider serum tryptase ideally 1–2 hours after reaction onset; measure within 1–4 hours for moderate-to-severe IHR.",
        "Record the reaction and the exact culprit contrast medium in the electronic health record."
      ],
      aftercareTitle: "After successful acute treatment",
      aftercareMild: [
        "Observe until every symptom has disappeared, for at least 30 minutes and usually less than 60 minutes."
      ],
      aftercareModerate: [
        "Consider transfer to a department with facilities for monitoring vital functions.",
        "Observe a non-life-threatening reaction for 4–6 hours after successful treatment before discharge."
      ],
      aftercareSevere: [
        "Admit and observe a patient who experienced a life-threatening reaction.",
        "Order serum tryptase within 1–4 hours and obtain a later baseline sample as described in Part 2."
      ],
      sedatingWarning: "After a sedating H1-antihistamine, driving a car or motorcycle and operating machinery may no longer be safe or insured.",
      betaBlockerWarning: "In patients receiving beta-blockers, adrenaline may be less effective; the paper lists glucagon or dobutamine as additional options. Follow the local resuscitation protocol and qualified medical direction.",
      documentationTitle: "Agent-specific documentation",
      documentation: [
        "Location, date and time of administration.",
        "Exact contrast-agent name, volume and concentration.",
        "Immediate or non-immediate reaction and severity category.",
        "Symptoms, vital signs, onset time and evolution.",
        "Treatment and response to treatment.",
        "Specialist consultation, follow-up and referral advice."
      ],
      tryptaseGuidanceTitle: "Sampling and interpretation",
      tryptaseGuidance: [
        "Ideally obtain an early sample during the reaction, a second sample 1–2 hours later but no later than 4 hours after onset, and a baseline sample more than 24 hours after complete resolution.",
        "Use the highest available acute value and the true baseline value for this calculation.",
        "A normal result does not exclude a genuine immediate hypersensitivity reaction."
      ],
      tryptaseInvalid: "Enter both a valid acute value and a valid baseline value in ng/mL.",
      tryptaseThreshold: "Calculated threshold",
      tryptasePositive: "The acute-over-baseline increase meets the ESUR/EAACI criterion and is suggestive of an immediate hypersensitivity reaction.",
      tryptaseNegative: "The acute-over-baseline increase does not meet the criterion. This does not exclude a genuine immediate hypersensitivity reaction.",
      nihrSevereUnclear: "A severe NIHR was selected without a documented danger sign. The paper's class-wide avoidance pathway is specifically defined for severe NIHR with danger signs (SCAR). Obtain urgent specialist clarification rather than letting this app label the reaction as SCAR.",
      nihrScarTitle: "Possible severe NIHR with danger signs (SCAR pathway)",
      nihrScarCommon: [
        "Refer immediately to a drug allergy specialist.",
        "Choose an alternative imaging modality.",
        "Optimise allergy registration in the electronic health record."
      ],
      nihrAvoidIcm: "After severe NIHR with danger signs to ICM, do not administer any iodine-based contrast medium.",
      nihrAvoidGbca: "After severe NIHR with danger signs to GBCA, do not administer any gadolinium-based contrast agent.",
      nihrUnknownClass: "After a severe reaction to an unknown contrast-medium class, individualise the approach after multidisciplinary consultation.",
      nihrMild: [
        "Interview the patient about the previous NIHR.",
        "Referral to a drug allergy specialist is optional when local capacity is sufficient.",
        "Optimise allergy registration in the electronic health record.",
        "Apply specialist advice when available; otherwise choose a different CM only when the culprit is known.",
        "When CM is administered, observe for at least 30 minutes with the IV line in place.",
        "Give written instructions for a possible repeat NIHR.",
        "If NIHR recurs, referral to a drug allergy specialist is mandatory."
      ],
      nihrModerate: [
        "Refer the patient to a drug allergy specialist if this has not already been done.",
        "Optimise allergy registration in the electronic health record.",
        "Apply specialist advice when available; otherwise choose a different CM only when the culprit is known.",
        "When CM is administered, observe for at least 30 minutes with the IV line in place.",
        "Give written instructions for a possible repeat NIHR.",
        "If NIHR recurs, referral to a drug allergy specialist is mandatory."
      ],
      nihrIcmCaution: "For ICM, consider cross-reactivity and the increased NIHR risk associated with iso-osmolar dimeric iodine-based contrast media.",
      switchCaution: "This output reproduces the optional, non-validated practical suggestions in ESUR Part 2, Table 1. The CMSC states that it cannot make robust evidence-based switching recommendations from practical experience alone; allergy evaluation with testing is the safest method when available."
    },
    de: {
      adultOnly: "Nur für Erwachsene ab 18 Jahren. Der ESUR-Therapiealgorithmus und die hier gezeigten Medikamentendosen wurden für Erwachsene entwickelt und sind kein pädiatrischer Dosierungsalgorithmus.",
      sourcePart1: `Quelle: ESUR CMSC 2025, Teil 1 (${PART_1_DOI}).`,
      sourcePart2: `Quelle: ESUR CMSC 2025, Teil 2 (${PART_2_DOI}).`,
      unclear: "Unklar",
      culpritTitle: "Schritt 3 — Ist das auslösende Kontrastmittel bekannt?",
      culpritKnown: "Auslösendes KM bekannt",
      culpritUnknown: "Auslösendes KM unbekannt",
      chooseRequired: "Schweregrad der früheren Reaktion und Bekanntheit des auslösenden Kontrastmittels auswählen.",
      allPreviousCommon: [
        "Alternative Bildgebung oder eine native Untersuchung erwägen, wenn der diagnostische Nutzen ausreichend ist.",
        "Eine klinisch klar indizierte kontrastverstärkte Untersuchung nicht verweigern, wenn keine diagnostisch ausreichende Alternative verfügbar ist.",
        "Das genaue Kontrastmittel und den Reaktionsschweregrad korrekt im KIS/EHR dokumentieren."
      ],
      mildCommon: [
        "Patientin oder Patient zur früheren unmittelbaren Hypersensitivitätsreaktion befragen.",
        "Eine allergologische Überweisung ist bei ausreichender lokaler Kapazität optional.",
        "Eine vorhandene allergologische Empfehlung anwenden.",
        "Wenn keine allergologische Empfehlung vorliegt und das auslösende KM bekannt ist, ein anderes KM wählen.",
        "Bei KM-Gabe mindestens 30 Minuten mit liegendem IV-Zugang beobachten und auf ein Rezidiv vorbereitet sein.",
        "Bei erneuter unmittelbarer Hypersensitivitätsreaktion ist die allergologische Überweisung verpflichtend."
      ],
      moderateElective: [
        "Patientin oder Patient allergologisch abklären lassen, sofern dies noch nicht erfolgt ist.",
        "Die Untersuchung, wenn klinisch möglich, bis zum Ergebnis der Allergieabklärung verschieben.",
        "Das von der Allergologie als sicher empfohlene Kontrastmittel verwenden.",
        "Bei KM-Gabe mindestens 30 Minuten mit liegendem IV-Zugang beobachten und auf ein Rezidiv vorbereitet sein.",
        "Bei erneuter unmittelbarer Hypersensitivitätsreaktion ist die allergologische Überweisung verpflichtend."
      ],
      moderateEmergency: [
        "Patientin oder Patient allergologisch abklären lassen, sofern dies noch nicht erfolgt ist.",
        "Eine in der Behandlung von HSR geschulte Radiologie- oder Notfallärztin beziehungsweise einen entsprechenden Arzt in unmittelbarer Nähe haben.",
        "Wenn das auslösende KM bekannt ist, ein anderes KM wählen.",
        "Bei KM-Gabe mindestens 30 Minuten mit liegendem IV-Zugang beobachten und auf ein Rezidiv vorbereitet sein.",
        "Bei erneuter unmittelbarer Hypersensitivitätsreaktion ist die allergologische Überweisung verpflichtend."
      ],
      severeElective: [
        "Patientin oder Patient allergologisch abklären lassen, sofern dies noch nicht erfolgt ist.",
        "Ein geschultes Mitglied des Rapid-Response- oder Reanimationsteams in unmittelbarer Nähe haben.",
        "Die Untersuchung, wenn klinisch möglich, bis zum Ergebnis der Allergieabklärung verschieben.",
        "Das von der Allergologie als sicher empfohlene Kontrastmittel verwenden.",
        "Bei KM-Gabe mindestens 30 Minuten mit liegendem IV-Zugang beobachten und auf ein Rezidiv vorbereitet sein.",
        "Bei erneuter unmittelbarer Hypersensitivitätsreaktion ist die allergologische Überweisung verpflichtend."
      ],
      severeEmergency: [
        "Patientin oder Patient allergologisch abklären lassen, sofern dies noch nicht erfolgt ist.",
        "Ein geschultes Mitglied des Rapid-Response- oder Reanimationsteams in unmittelbarer Nähe haben.",
        "Eine Notfallprämedikation nach dem im ESUR-Paper wiedergegebenen EAACI-basierten Protokoll erwägen.",
        "Wenn das auslösende KM bekannt ist, ein anderes KM wählen.",
        "Bei KM-Gabe mindestens 30 Minuten mit liegendem IV-Zugang beobachten und auf ein Rezidiv vorbereitet sein.",
        "Bei erneuter unmittelbarer Hypersensitivitätsreaktion ist die allergologische Überweisung verpflichtend."
      ],
      unclearReaction: [
        "Symptome, zeitlichen Verlauf, Behandlung und genaues Kontrastmittel des früheren Ereignisses möglichst klären.",
        "Keinen milden, moderaten oder schweren Pfad zuordnen, solange die Reaktion nicht zuverlässig klassifiziert werden kann.",
        "Wenn die Kontrastmittelgabe nicht bis zur Klärung warten kann, klinische Beurteilung, lokale Protokolle und fachärztlichen Input nutzen."
      ],
      premedTitle: "Im ESUR-Teil-2-Paper genanntes Notfallprämedikationsprotokoll",
      premedBullets: [
        "Prednisolon 50 mg i.v. oder Äquivalent mindestens 30 Minuten vor KM-Gabe.",
        "Clemastin 2 mg i.v. oder Äquivalent mindestens 30 Minuten vor KM-Gabe.",
        "Prednisolon-Äquivalente: Methylprednisolon 40 mg i.v., Dexamethason 8 mg i.v. oder Hydrocortison 200 mg i.v.",
        "Clemastin-Äquivalente: Diphenhydramin 50 mg i.v., Chlorphenamin 20 mg i.v. oder Cetirizin 10 mg i.v.",
        "Eine routinemässige Prämedikation wird nicht empfohlen; dieses Schema gehört zum im Paper beschriebenen schweren Notfallpfad."
      ],
      acuteGeneral: [
        "Patientin oder Patient nach ABCDE prüfen und stabilisieren.",
        "Kontrastmittelinfusion stoppen und die IV-Leitung durch kristalloide Flüssigkeit ersetzen.",
        "Bei Dyspnoe oder Stridor aufsetzen.",
        "Bei Hypotonie Bauchlage und Beine hochlagern.",
        "Bei Symptomen Herzfrequenz, arteriellen Blutdruck und Bewusstsein prüfen.",
        "Bei ausgeprägter Bradykardie eine vasovagale Reaktion und das lokale Atropin-Protokoll erwägen.",
        "Serumtryptase idealerweise 1–2 Stunden nach Reaktionsbeginn erwägen; bei moderater bis schwerer IHR innerhalb von 1–4 Stunden bestimmen.",
        "Reaktion und exaktes auslösendes Kontrastmittel im KIS/EHR dokumentieren."
      ],
      aftercareTitle: "Nach erfolgreicher Akutbehandlung",
      aftercareMild: [
        "Beobachten, bis sämtliche Symptome verschwunden sind: mindestens 30 Minuten, üblicherweise unter 60 Minuten."
      ],
      aftercareModerate: [
        "Eine Verlegung in einen Bereich mit Überwachung der Vitalfunktionen erwägen.",
        "Eine nicht lebensbedrohliche Reaktion nach erfolgreicher Behandlung 4–6 Stunden beobachten und danach entlassen."
      ],
      aftercareSevere: [
        "Nach einer lebensbedrohlichen Reaktion stationär aufnehmen und überwachen.",
        "Serumtryptase innerhalb von 1–4 Stunden bestimmen und später eine Baseline-Probe gemäss Teil 2 abnehmen."
      ],
      sedatingWarning: "Nach einem sedierenden H1-Antihistaminikum können Autofahren, Motorradfahren und das Bedienen von Maschinen nicht mehr sicher oder versicherungsrechtlich gedeckt sein.",
      betaBlockerWarning: "Unter Betablockern kann Adrenalin weniger wirksam sein; das Paper nennt Glukagon oder Dobutamin als zusätzliche Optionen. Lokales Reanimationsprotokoll und qualifizierte ärztliche Anordnung beachten.",
      documentationTitle: "Kontrastmittelspezifische Dokumentation",
      documentation: [
        "Ort, Datum und Uhrzeit der Gabe.",
        "Exakter Kontrastmittelname, Volumen und Konzentration.",
        "Unmittelbare oder verzögerte Reaktion und Schweregrad.",
        "Symptome, Vitalparameter, Beginn und Verlauf.",
        "Behandlung und Reaktion auf die Behandlung.",
        "Fachärztliche Rücksprache, Verlaufskontrolle und Überweisungsempfehlung."
      ],
      tryptaseGuidanceTitle: "Probenzeitpunkte und Interpretation",
      tryptaseGuidance: [
        "Idealerweise eine frühe Probe während der Reaktion, eine zweite Probe nach 1–2 Stunden, spätestens vier Stunden nach Beginn, und eine Baseline-Probe mehr als 24 Stunden nach vollständigem Abklingen abnehmen.",
        "Für die Berechnung den höchsten verfügbaren Akutwert und den echten Baseline-Wert verwenden.",
        "Ein normales Ergebnis schliesst eine echte unmittelbare Hypersensitivitätsreaktion nicht aus."
      ],
      tryptaseInvalid: "Einen gültigen Akutwert und einen gültigen Baseline-Wert in ng/mL eingeben.",
      tryptaseThreshold: "Berechnete Schwelle",
      tryptasePositive: "Der Akut-über-Baseline-Anstieg erfüllt das ESUR/EAACI-Kriterium und spricht für eine unmittelbare Hypersensitivitätsreaktion.",
      tryptaseNegative: "Der Akut-über-Baseline-Anstieg erfüllt das Kriterium nicht. Eine echte unmittelbare Hypersensitivitätsreaktion ist dadurch nicht ausgeschlossen.",
      nihrSevereUnclear: "Eine schwere NIHR wurde gewählt, aber kein Warnzeichen dokumentiert. Der klassenweite Vermeidungspfad des Papers ist ausdrücklich für schwere NIHR mit Warnzeichen (SCAR) definiert. Dringende fachärztliche Klärung veranlassen, statt die Reaktion durch diese App als SCAR festzulegen.",
      nihrScarTitle: "Mögliche schwere NIHR mit Warnzeichen (SCAR-Pfad)",
      nihrScarCommon: [
        "Sofortige Überweisung an eine Arzneimittelallergie-Spezialistin beziehungsweise einen entsprechenden Spezialisten.",
        "Alternative Bildgebung wählen.",
        "Allergiedokumentation im KIS/EHR optimieren."
      ],
      nihrAvoidIcm: "Nach schwerer NIHR mit Warnzeichen auf ICM keine jodhaltigen Kontrastmittel mehr geben.",
      nihrAvoidGbca: "Nach schwerer NIHR mit Warnzeichen auf GBCA keine gadoliniumhaltigen Kontrastmittel mehr geben.",
      nihrUnknownClass: "Nach schwerer Reaktion auf eine unbekannte Kontrastmittelklasse das Vorgehen nach multidisziplinärer Rücksprache individualisieren.",
      nihrMild: [
        "Patientin oder Patient zur früheren NIHR befragen.",
        "Eine allergologische Überweisung ist bei ausreichender lokaler Kapazität optional.",
        "Allergiedokumentation im KIS/EHR optimieren.",
        "Vorhandene fachärztliche Empfehlung anwenden; andernfalls nur bei bekanntem Auslöser ein anderes KM wählen.",
        "Bei KM-Gabe mindestens 30 Minuten mit liegendem IV-Zugang beobachten.",
        "Schriftliche Instruktionen für eine mögliche erneute NIHR mitgeben.",
        "Bei erneuter NIHR ist die allergologische Überweisung verpflichtend."
      ],
      nihrModerate: [
        "Patientin oder Patient allergologisch abklären lassen, sofern dies noch nicht erfolgt ist.",
        "Allergiedokumentation im KIS/EHR optimieren.",
        "Vorhandene fachärztliche Empfehlung anwenden; andernfalls nur bei bekanntem Auslöser ein anderes KM wählen.",
        "Bei KM-Gabe mindestens 30 Minuten mit liegendem IV-Zugang beobachten.",
        "Schriftliche Instruktionen für eine mögliche erneute NIHR mitgeben.",
        "Bei erneuter NIHR ist die allergologische Überweisung verpflichtend."
      ],
      nihrIcmCaution: "Bei ICM Kreuzreaktivität und das erhöhte NIHR-Risiko durch isoosmolare dimere jodhaltige Kontrastmittel berücksichtigen.",
      switchCaution: "Diese Ausgabe gibt die optionalen, nicht validierten praktischen Vorschläge aus Tabelle 1 des ESUR-Teil-2-Papers wieder. Die CMSC erklärt ausdrücklich, dass daraus keine robust evidenzbasierte Wechselentscheidung abgeleitet werden kann; eine allergologische Abklärung mit Testung ist, wenn verfügbar, die sicherste Methode."
    }
  };

  function language() {
    return document.documentElement.lang === "de" ? "de" : "en";
  }

  function tr(key) {
    return text[language()][key];
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function list(items) {
    return `<ul>${(items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function activeValue(selector) {
    return document.querySelector(`${selector}.active`)?.dataset.value || null;
  }

  function sourceLine(part) {
    return `<div class="hsr2025-source">${escapeHtml(part === 1 ? tr("sourcePart1") : tr("sourcePart2"))}</div>`;
  }

  function installStyles() {
    if (document.getElementById("hsr2025Styles")) return;
    const style = document.createElement("style");
    style.id = "hsr2025Styles";
    style.textContent = `
      .hsr2025-alert,
      .hsr2025-note {
        margin-top: 10px;
        padding: 11px 12px;
        border-radius: 14px;
        border: 1px solid var(--border-strong);
        background: rgba(255,255,255,.035);
        line-height: 1.45;
      }
      .hsr2025-alert {
        border-left: 5px solid var(--danger);
        background: var(--danger-faint);
        font-weight: 800;
      }
      .hsr2025-warning {
        border-left: 5px solid var(--warn);
        background: var(--warn-faint);
      }
      .hsr2025-source {
        margin-top: 10px;
        color: var(--muted);
        font-size: 12px;
        line-height: 1.35;
      }
      .hsr2025-section {
        margin-top: 12px;
        padding: 11px 12px;
        border: 1px solid var(--border-strong);
        border-radius: 14px;
        background: rgba(255,255,255,.035);
      }
      .hsr2025-section > strong { display: block; margin-bottom: 7px; }
      .hsr2025-section ul { margin-top: 6px; }
    `;
    document.head.appendChild(style);
  }

  function ensureGuidanceUi() {
    const guidance = document.getElementById("hsr-tab-guidance");
    if (!guidance) return;

    const reactionSegment = guidance.querySelector('[data-seg="reaction"]')?.parentElement;
    if (reactionSegment && !reactionSegment.querySelector('[data-value="unclear"]')) {
      const button = document.createElement("button");
      button.className = "seg__btn";
      button.type = "button";
      button.dataset.seg = "reaction";
      button.dataset.value = "unclear";
      button.dataset.hsr2025 = "reaction";
      button.textContent = tr("unclear");
      reactionSegment.appendChild(button);
    }

    if (!document.getElementById("hsr2025CulpritCard")) {
      const outputCard = guidance.querySelector(".card--output");
      if (outputCard) {
        const card = document.createElement("div");
        card.className = "card";
        card.id = "hsr2025CulpritCard";
        card.innerHTML = `
          <div class="card__title" id="hsr2025CulpritTitle"></div>
          <div class="seg">
            <button class="seg__btn" type="button" data-hsr2025-culprit="known"></button>
            <button class="seg__btn" type="button" data-hsr2025-culprit="unknown"></button>
          </div>
        `;
        outputCard.before(card);
      }
    }
  }

  function syncGuidanceUi() {
    const unclear = document.querySelector('#hsr-tab-guidance [data-seg="reaction"][data-value="unclear"]');
    if (unclear) unclear.textContent = tr("unclear");
    const title = document.getElementById("hsr2025CulpritTitle");
    if (title) title.textContent = tr("culpritTitle");
    document.querySelectorAll("[data-hsr2025-culprit]").forEach((button) => {
      const value = button.dataset.hsr2025Culprit;
      button.textContent = value === "known" ? tr("culpritKnown") : tr("culpritUnknown");
      const selected = overlayState.culpritKnown === value;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
    });

    if (overlayState.reaction) {
      document.querySelectorAll('#hsr-tab-guidance [data-seg="reaction"]').forEach((button) => {
        const selected = button.dataset.value === overlayState.reaction;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", selected ? "true" : "false");
      });
    }
  }

  function renderGuidance() {
    const output = document.getElementById("flowOutput");
    const safety = document.getElementById("flowSafety");
    if (!output) return;

    syncGuidanceUi();

    const situation = activeValue('#hsr-tab-guidance [data-seg="situation"]') || "elective";
    const reaction = overlayState.reaction || activeValue('#hsr-tab-guidance [data-seg="reaction"]');
    const culprit = overlayState.culpritKnown;

    if (!reaction || !culprit) {
      output.innerHTML = `<div class="hint">${escapeHtml(tr("chooseRequired"))}</div>${sourceLine(2)}`;
      if (safety) safety.textContent = tr("allPreviousCommon")[1];
      return;
    }

    let actions = [...tr("allPreviousCommon")];
    let title = "";

    if (reaction === "unclear") {
      title = language() === "de" ? "Frühere unmittelbare Reaktion nicht sicher klassifizierbar" : "Previous immediate reaction cannot be classified reliably";
      actions.push(...tr("unclearReaction"));
    } else if (reaction === "mild") {
      title = language() === "de" ? "Frühere milde unmittelbare Hypersensitivitätsreaktion" : "Previous mild immediate hypersensitivity reaction";
      actions.push(...tr("mildCommon"));
    } else if (reaction === "moderate") {
      title = language() === "de" ? "Frühere moderate unmittelbare Hypersensitivitätsreaktion" : "Previous moderate immediate hypersensitivity reaction";
      actions.push(...(situation === "emergency" ? tr("moderateEmergency") : tr("moderateElective")));
    } else if (reaction === "severe") {
      title = language() === "de" ? "Frühere schwere unmittelbare Hypersensitivitätsreaktion" : "Previous severe immediate hypersensitivity reaction";
      actions.push(...(situation === "emergency" ? tr("severeEmergency") : tr("severeElective")));
    }

    if (culprit === "unknown") {
      actions = actions.filter((item) => !/different CM|anderes KM/.test(item));
      actions.push(language() === "de"
        ? "Das genaue frühere Kontrastmittel möglichst aus Befunden, RIS/KIS oder Voruntersuchungen ermitteln."
        : "Identify the exact previous contrast medium from reports, the EHR/RIS or prior examinations whenever possible.");
    }

    const premedication = reaction === "severe" && situation === "emergency"
      ? `<div class="hsr2025-section hsr2025-warning"><strong>${escapeHtml(tr("premedTitle"))}</strong>${list(tr("premedBullets"))}</div>`
      : "";

    output.innerHTML = `
      <div><strong>${escapeHtml(title)}</strong></div>
      ${list(actions)}
      ${premedication}
      ${sourceLine(2)}
    `;

    if (safety) {
      safety.textContent = language() === "de"
        ? "Die allergologisch getestete Alternative ist sicherer als eine rein empirische Wechselentscheidung. Routineprämedikation wird nicht empfohlen."
        : "An allergy-tested alternative is safer than an empirical switch. Routine premedication is not recommended.";
    }
  }

  function ensureAcuteUi() {
    const acute = document.getElementById("hsr-tab-acute");
    if (!acute) return;
    const introCard = acute.querySelector(".card--subtle");
    if (introCard && !document.getElementById("hsr2025AdultOnly")) {
      const alert = document.createElement("div");
      alert.id = "hsr2025AdultOnly";
      alert.className = "hsr2025-alert";
      introCard.appendChild(alert);
    }
  }

  function renderAcuteSupplement() {
    ensureAcuteUi();
    const adult = document.getElementById("hsr2025AdultOnly");
    if (adult) adult.textContent = tr("adultOnly");

    const immediate = document.getElementById("acuteImmediateOutput");
    if (immediate) {
      immediate.innerHTML = `${list(tr("acuteGeneral"))}${sourceLine(1)}`;
    }

    const output = document.getElementById("acuteOutput");
    if (!output) return;
    output.querySelectorAll(".hsr2025-supplement").forEach((element) => element.remove());

    const severity = activeValue('#hsr-tab-acute [data-seg="acuteSeverity"]') || "mild";
    const pattern = activeValue('#hsr-tab-acute [data-seg="acutePattern"]');
    const aftercare = severity === "severe"
      ? tr("aftercareSevere")
      : severity === "moderate"
        ? tr("aftercareModerate")
        : tr("aftercareMild");

    const warnings = [];
    if (["moderate_urticaria", "moderate_angioedema", "severe_anaphylaxis"].includes(pattern)) {
      warnings.push(tr("sedatingWarning"));
    }
    if (severity === "severe" || pattern === "moderate_bronchospasm") {
      warnings.push(tr("betaBlockerWarning"));
    }

    const supplement = document.createElement("div");
    supplement.className = "hsr2025-supplement";
    supplement.innerHTML = `
      <div class="hsr2025-section">
        <strong>${escapeHtml(tr("aftercareTitle"))}</strong>
        ${list(aftercare)}
      </div>
      ${warnings.length ? `<div class="hsr2025-section hsr2025-warning">${list(warnings)}</div>` : ""}
      <div class="hsr2025-section">
        <strong>${escapeHtml(tr("documentationTitle"))}</strong>
        ${list(tr("documentation"))}
      </div>
      ${sourceLine(1)}
    `;
    output.appendChild(supplement);
  }

  function ensureTryptaseUi() {
    const tab = document.getElementById("hsr-tab-tryptase");
    if (!tab || document.getElementById("hsr2025TryptaseGuidance")) return;
    const firstCard = tab.querySelector(".card");
    if (!firstCard) return;
    const card = document.createElement("div");
    card.className = "card card--subtle";
    card.id = "hsr2025TryptaseGuidance";
    firstCard.before(card);
  }

  function renderTryptaseGuidance() {
    ensureTryptaseUi();
    const card = document.getElementById("hsr2025TryptaseGuidance");
    if (card) {
      card.innerHTML = `
        <div class="card__title">${escapeHtml(tr("tryptaseGuidanceTitle"))}</div>
        <div class="output">${list(tr("tryptaseGuidance"))}${sourceLine(2)}</div>
      `;
    }
    if (overlayState.tryptaseCalculated) calculateTryptase();
  }

  function calculateTryptase() {
    const output = document.getElementById("tryptaseOutput");
    const baselineRaw = document.getElementById("baseline")?.value.trim() || "";
    const acuteRaw = document.getElementById("acute")?.value.trim() || "";
    if (!output) return;

    const baseline = baselineRaw === "" ? NaN : Number(baselineRaw);
    const acute = acuteRaw === "" ? NaN : Number(acuteRaw);

    if (!Number.isFinite(baseline) || !Number.isFinite(acute) || baseline < 0 || acute < 0) {
      output.innerHTML = `<div class="hint">${escapeHtml(tr("tryptaseInvalid"))}</div>${sourceLine(2)}`;
      overlayState.tryptaseCalculated = false;
      return;
    }

    const threshold = (1.2 * baseline) + 2;
    const positive = acute >= threshold;
    const formatter = new Intl.NumberFormat(language() === "de" ? "de-CH" : "en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    output.innerHTML = `
      <div><strong>${escapeHtml(tr("tryptaseThreshold"))}:</strong> ${formatter.format(threshold)} ng/mL</div>
      <div><strong>${escapeHtml(language() === "de" ? "Akutwert" : "Acute value")}:</strong> ${formatter.format(acute)} ng/mL</div>
      <div><strong>${escapeHtml(language() === "de" ? "Baseline" : "Baseline")}:</strong> ${formatter.format(baseline)} ng/mL</div>
      <div class="hsr2025-note ${positive ? "" : "hsr2025-warning"}"><strong>${escapeHtml(positive ? tr("tryptasePositive") : tr("tryptaseNegative"))}</strong></div>
      ${sourceLine(2)}
    `;
    overlayState.tryptaseCalculated = true;
  }

  function renderNihr() {
    const output = document.getElementById("nihrOutput");
    if (!output) return;

    const severity = activeValue('#hsr-tab-nihr [data-seg="nihrSeverity"]') || "mild";
    const cmtype = activeValue('#hsr-tab-nihr [data-seg="nihrCmtype"]') || "icm";
    const known = activeValue('#hsr-tab-nihr [data-seg="nihrCulpritKnown"]') || "known";
    const danger = Array.from(document.querySelectorAll(".nihr-check")).some((element) => element.checked);

    if (danger) {
      const classRule = known === "unknown"
        ? tr("nihrUnknownClass")
        : cmtype === "gbca" ? tr("nihrAvoidGbca") : tr("nihrAvoidIcm");
      output.innerHTML = `
        <div><strong>${escapeHtml(tr("nihrScarTitle"))}</strong></div>
        ${list([...tr("nihrScarCommon"), classRule])}
        ${cmtype === "icm" ? `<div class="hsr2025-note">${escapeHtml(tr("nihrIcmCaution"))}</div>` : ""}
        ${sourceLine(2)}
      `;
      return;
    }

    if (severity === "severe") {
      output.innerHTML = `
        <div class="hsr2025-alert">${escapeHtml(tr("nihrSevereUnclear"))}</div>
        ${list([
          language() === "de" ? "Dringende allergologische beziehungsweise dermatologische Beurteilung veranlassen." : "Arrange urgent drug-allergy or dermatology assessment.",
          language() === "de" ? "Alternative Bildgebung erwägen und die Allergiedokumentation optimieren." : "Consider alternative imaging and optimise allergy documentation."
        ])}
        ${sourceLine(2)}
      `;
      return;
    }

    let actions = severity === "moderate" ? [...tr("nihrModerate")] : [...tr("nihrMild")];
    if (known === "unknown") {
      actions = actions.filter((item) => !/different CM|anderes KM/.test(item));
    }

    output.innerHTML = `
      <div><strong>${escapeHtml(severity === "moderate"
        ? (language() === "de" ? "Moderate NIHR ohne Warnzeichen" : "Moderate NIHR without danger signs")
        : (language() === "de" ? "Milde NIHR ohne Warnzeichen" : "Mild NIHR without danger signs"))}</strong></div>
      ${list(actions)}
      ${cmtype === "icm" ? `<div class="hsr2025-note">${escapeHtml(tr("nihrIcmCaution"))}</div>` : ""}
      ${sourceLine(2)}
    `;
  }

  function renderSwitchCaution() {
    const top = document.getElementById("switchNonvalidated");
    if (top) top.textContent = tr("switchCaution");

    const output = document.getElementById("switchOutput");
    if (!output) return;
    output.querySelectorAll(".hsr2025-switch-caution").forEach((element) => element.remove());
    const note = document.createElement("div");
    note.className = "hsr2025-switch-caution hsr2025-note hsr2025-warning";
    note.textContent = tr("switchCaution");
    output.appendChild(note);
  }

  function renderAll() {
    ensureGuidanceUi();
    renderGuidance();
    renderAcuteSupplement();
    renderTryptaseGuidance();
    renderNihr();
    renderSwitchCaution();
  }

  function resetOverlay() {
    overlayState.culpritKnown = null;
    overlayState.reaction = "moderate";
    overlayState.tryptaseCalculated = false;
    document.querySelectorAll("[data-hsr2025-culprit]").forEach((button) => button.classList.remove("active"));
    renderAll();
  }

  function installEvents() {
    document.addEventListener("click", (event) => {
      const target = event.target.closest("button");
      if (!target) return;

      if (target.id === "calcTryptase") {
        event.preventDefault();
        event.stopImmediatePropagation();
        calculateTryptase();
        return;
      }

      if (target.dataset.hsr2025Culprit) {
        event.preventDefault();
        overlayState.culpritKnown = target.dataset.hsr2025Culprit;
        renderGuidance();
        return;
      }

      if (target.closest("#hsr-tab-guidance") && target.dataset.seg === "reaction") {
        overlayState.reaction = target.dataset.value;
      }

      window.requestAnimationFrame(renderAll);
    }, true);

    document.querySelectorAll(".nihr-check").forEach((element) => {
      element.addEventListener("change", () => window.requestAnimationFrame(renderNihr));
    });

    document.getElementById("resetBtn")?.addEventListener("click", () => {
      window.requestAnimationFrame(resetOverlay);
    });

    document.getElementById("lang-en")?.addEventListener("click", () => window.requestAnimationFrame(renderAll));
    document.getElementById("lang-de")?.addEventListener("click", () => window.requestAnimationFrame(renderAll));
  }

  function init() {
    installStyles();
    overlayState.reaction = activeValue('#hsr-tab-guidance [data-seg="reaction"]') || "moderate";
    ensureGuidanceUi();
    ensureAcuteUi();
    ensureTryptaseUi();
    installEvents();
    renderAll();
  }

  window.ESUR2025HSR = {
    calculateTryptase,
    renderAll,
    sources: {
      part1: PART_1_DOI,
      part2: PART_2_DOI
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

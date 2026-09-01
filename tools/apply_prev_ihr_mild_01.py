#!/usr/bin/env python3
from pathlib import Path
path = Path("script.js")
text = path.read_text(encoding="utf-8")

def replace_once(src, old, new, label):
    n = src.count(old)
    if n != 1:
        raise SystemExit(f"{label}: expected 1, found {n}")
    return src.replace(old, new, 1)

OLD_EN_EL = '''elective_mild: [
          "The previous reaction should be reviewed.",
          "Allergy documentation should be optimized.",
          "Advice from a drug allergy specialist may be followed or referral may be considered.",
          "If the culprit contrast agent is known, use of an alternative contrast agent may be considered.",
          "If contrast agent administration is required, observation for ≥30 minutes with intravenous access should be ensured.",
          "Clinical vigilance for recurrent reactions should be maintained."
        ],'''
NEW_EN_EL = '''elective_mild: [
          "Interview the patient about their previous hypersensitivity reaction.",
          "Optionally, refer the patient to a drug allergy specialist (if not done before) when the local drug allergy specialist capacity is sufficient.",
          "Optimize the allergy registration in the electronic health record.",
          "Apply the advice of the drug allergy specialist for a safe iodine-based contrast medium or gadolinium-based contrast agent, or, when not available, choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast agent is known.",
          "When the contrast medium is administered, observe the patient for at least 30 min with the IV line in place.",
          "Be prepared and vigilant for a recurring immediate hypersensitivity reaction.",
          "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory.",
          "Consider an alternative imaging modality, or consider performing an unenhanced exam if the diagnostic yield is sufficient for the correct management of the patient.",
          "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available."
        ],'''
OLD_DE_EL = '''elective_mild: [
          "Die frühere Reaktion sollte überprüft werden.",
          "Die Allergiedokumentation sollte optimiert werden.",
          "Empfehlungen einer allergologischen Fachperson können berücksichtigt oder eine Überweisung kann erwogen werden.",
          "Wenn das auslösende Kontrastmittel bekannt ist, kann die Verwendung eines alternativen Kontrastmittels erwogen werden.",
          "Wenn eine Kontrastmittelgabe erforderlich ist, sollte eine Beobachtung für ≥30 Minuten mit intravenösem Zugang sichergestellt werden.",
          "Auf mögliche wiederkehrende Reaktionen sollte klinisch geachtet werden."
        ],'''
NEW_DE_EL = '''elective_mild: [
          "Die Patientin oder den Patienten zur früheren Hypersensitivitätsreaktion befragen.",
          "Optional die Patientin oder den Patienten an eine Fachperson für Arzneimittelallergien überweisen (falls noch nicht erfolgt), wenn die lokale Kapazität für Arzneimittelallergologie ausreicht.",
          "Die Allergieregistrierung in der elektronischen Patientenakte optimieren.",
          "Die Empfehlung der Fachperson für Arzneimittelallergien für ein sicheres iodhaltiges Kontrastmittel oder gadoliniumbasiertes Kontrastmittel umsetzen; oder, wenn diese nicht vorliegt, ein anderes iodhaltiges oder gadoliniumbasiertes Kontrastmittel wählen, sofern das auslösende Kontrastmittel bekannt ist.",
          "Wenn das Kontrastmittel verabreicht wird, die Patientin oder den Patienten mindestens 30 Minuten mit liegendem i.v.-Zugang beobachten.",
          "Auf eine wiederkehrende unmittelbare Hypersensitivitätsreaktion vorbereitet und wachsam sein.",
          "Wenn eine unmittelbare Hypersensitivitätsreaktion wieder auftritt, ist die Überweisung an eine Fachperson für Arzneimittelallergien verpflichtend.",
          "Eine alternative Bildgebungsmodalität erwägen oder eine Untersuchung ohne Kontrastmittel erwägen, wenn die diagnostische Aussagekraft für die korrekte Patientenführung ausreicht.",
          "Eine klinisch gut indizierte kontrast verstärkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verfügbar sind."
        ],'''
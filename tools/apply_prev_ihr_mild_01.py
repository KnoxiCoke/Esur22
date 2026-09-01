#!/usr/bin/env python3
from pathlib import Path
path = Path("script.js")
text = path.read_text(encoding="utf-8")

def replace_once(src, old, new, label):
    n = src.count(old)
    if n != 1:
        raise SystemExit(f"{label}: expected 1, found {n}")
    return src.replace(old, new, 1)

OLD_EN_EL = (
    "elective_mild: [\n"
    '          "The previous reaction should be reviewed.",\n'
    '          "Allergy documentation should be optimized.",\n'
    '          "Advice from a drug allergy specialist may be followed or referral may be considered.",\n'
    '          "If the culprit contrast agent is known, use of an alternative contrast agent may be considered.",\n'
    '          "If contrast agent administration is required, observation for \u226530 minutes with intravenous access should be ensured.",\n'
    '          "Clinical vigilance for recurrent reactions should be maintained."\n'
    "        ],"
)
NEW_EN_EL = (
    "elective_mild: [\n"
    '          "Interview the patient about their previous hypersensitivity reaction.",\n'
    '          "Optionally, refer the patient to a drug allergy specialist (if not done before) when the local drug allergy specialist capacity is sufficient.",\n'
    '          "Optimize the allergy registration in the electronic health record.",\n'
    '          "Apply the advice of the drug allergy specialist for a safe iodine-based contrast medium or gadolinium-based contrast agent, or, when not available, choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast agent is known.",\n'
    '          "When the contrast medium is administered, observe the patient for at least 30 min with the IV line in place.",\n'
    '          "Be prepared and vigilant for a recurring immediate hypersensitivity reaction.",\n'
    '          "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory.",\n'
    '          "Consider an alternative imaging modality, or consider performing an unenhanced exam if the diagnostic yield is sufficient for the correct management of the patient.",\n'
    '          "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available."\n'
    "        ],"
)
OLD_DE_EL = (
    "elective_mild: [\n"
    '          "Die fr\u00fchere Reaktion sollte \u00fcberpr\u00fcft werden.",\n'
    '          "Die Allergiedokumentation sollte optimiert werden.",\n'
    '          "Empfehlungen einer allergologischen Fachperson k\u00f6nnen ber\u00fccksichtigt oder eine \u00dcberweisung kann erwogen werden.",\n'
    '          "Wenn das ausl\u00f6sende Kontrastmittel bekannt ist, kann die Verwendung eines alternativen Kontrastmittels erwogen werden.",\n'
    '          "Wenn eine Kontrastmittelgabe erforderlich ist, sollte eine Beobachtung f\u00fcr \u226530 Minuten mit intraven\u00f6sem Zugang sichergestellt werden.",\n'
    '          "Auf m\u00f6gliche wiederkehrende Reaktionen sollte klinisch geachtet werden."\n'
    "        ],"
)
NEW_DE_EL = (
    "elective_mild: [\n"
    '          "Die Patientin oder den Patienten zur fr\u00fcheren Hypersensitivit\u00e4tsreaktion befragen.",\n'
    '          "Optional die Patientin oder den Patienten an eine Fachperson f\u00fcr Arzneimittelallergien \u00fcberweisen (falls noch nicht erfolgt), wenn die lokale Kapazit\u00e4t f\u00fcr Arzneimittelallergologie ausreicht.",\n'
    '          "Die Allergieregistrierung in der elektronischen Patientenakte optimieren.",\n'
    '          "Die Empfehlung der Fachperson f\u00fcr Arzneimittelallergien f\u00fcr ein sicheres iodhaltiges Kontrastmittel oder gadoliniumbasiertes Kontrastmittel umsetzen; oder, wenn diese nicht vorliegt, ein anderes iodhaltiges oder gadoliniumbasiertes Kontrastmittel w\u00e4hlen, sofern das ausl\u00f6sende Kontrastmittel bekannt ist.",\n'
    '          "Wenn das Kontrastmittel verabreicht wird, die Patientin oder den Patienten mindestens 30 Minuten mit liegendem i.v.-Zugang beobachten.",\n'
    '          "Auf eine wiederkehrende unmittelbare Hypersensitivit\u00e4tsreaktion vorbereitet und wachsam sein.",\n'
    '          "Wenn eine unmittelbare Hypersensitivit\u00e4tsreaktion wieder auftritt, ist die \u00dcberweisung an eine Fachperson f\u00fcr Arzneimittelallergien verpflichtend.",\n'
    '          "Eine alternative Bildgebungsmodalit\u00e4t erw\u00e4gen oder eine Untersuchung ohne Kontrastmittel erw\u00e4gen, wenn die diagnostische Aussagekraft f\u00fcr die korrekte Patientenf\u00fchrung ausreicht.",\n'
    '          "Eine klinisch gut indizierte kontrastverst\u00e4rkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verf\u00fcgbar sind."\n'
    "        ],"
)
OLD_EN_EM = (
    "emergency_mild: [\n"
    '          "If contrast agent administration is required, the potential risk of recurrence should be considered.",\n'
    '          "Use of an alternative contrast agent may be considered if the culprit agent is known.",\n'
    '          "Availability of personnel trained in the management of acute hypersensitivity reactions should be ensured.",\n'
    '          "Observation for \u226530 minutes with intravenous access should be ensured."\n'
    "        ],"
)
NEW_EN_EM = NEW_EN_EL.replace("elective_mild:", "emergency_mild:", 1)
OLD_DE_EM = (
    "emergency_mild: [\n"
    '          "Wenn eine Kontrastmittelgabe erforderlich ist, sollte das potenzielle Risiko eines Wiederauftretens ber\u00fccksichtigt werden.",\n'
    '          "Die Verwendung eines alternativen Kontrastmittels kann erwogen werden, wenn das ausl\u00f6sende Kontrastmittel bekannt ist.",\n'
    '          "Die Verf\u00fcgbarkeit von Personal mit Schulung im Management akuter Hypersensitivit\u00e4tsreaktionen sollte sichergestellt werden.",\n'
    '          "Eine Beobachtung f\u00fcr \u226530 Minuten mit intraven\u00f6sem Zugang sollte sichergestellt werden."\n'
    "        ],"
)
NEW_DE_EM = NEW_DE_EL.replace("elective_mild:", "emergency_mild:", 1)

text = replace_once(text, OLD_EN_EL, NEW_EN_EL, "en_el")
text = replace_once(text, OLD_DE_EL, NEW_DE_EL, "de_el")
text = replace_once(text, OLD_EN_EM, NEW_EN_EM, "en_em")
text = replace_once(text, OLD_DE_EM, NEW_DE_EM, "de_em")
path.write_text(text, encoding="utf-8")
print("PREV_IHR_MILD_01 applied", path.stat().st_size)

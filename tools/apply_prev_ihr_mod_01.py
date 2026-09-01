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
    "elective_moderate: [\n"
    '          "Postponement of the examination should be considered when clinically feasible.",\n'
    '          "Referral for a formal allergy evaluation is strongly recommended.",\n'
    '          "If contrast-enhanced imaging remains necessary, use of an alternative contrast agent should be considered.",\n'
    '          "Observation for \u226530 minutes with intravenous access should be ensured."\n'
    "        ],"
)
NEW_EN_EL = (
    "elective_moderate: [\n"
    '          "Refer the patient to a drug allergy specialist (if not done before).",\n'
    '          "Optimize the allergy registration in the electronic health record.",\n'
    '          "Postpone imaging to wait for the results of the allergy analysis.",\n'
    '          "Apply the advice of the drug allergy specialist for a safe iodine-based contrast medium or gadolinium-based contrast agent.",\n'
    '          "When the contrast medium is administered, observe the patient for at least 30 min with the IV line in place.",\n'
    '          "Be prepared and vigilant for a recurring immediate hypersensitivity reaction.",\n'
    '          "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory.",\n'
    '          "Consider an alternative imaging modality, or consider performing an unenhanced exam if the diagnostic yield is sufficient for the correct management of the patient.",\n'
    '          "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available."\n'
    "        ],"
)
OLD_DE_EL = (
    "elective_moderate: [\n"
    '          "Ein Aufschub der Untersuchung sollte erwogen werden, wenn dies klinisch m\u00f6glich ist.",\n'
    '          "Eine \u00dcberweisung zur formellen allergologischen Abkl\u00e4rung wird dringend empfohlen.",\n'
    '          "Wenn eine kontrastverst\u00e4rkte Bildgebung weiterhin erforderlich ist, sollte die Verwendung eines alternativen Kontrastmittels erwogen werden.",\n'
    '          "Eine Beobachtung f\u00fcr \u226530 Minuten mit intraven\u00f6sem Zugang sollte sichergestellt werden."\n'
    "        ],"
)
NEW_DE_EL = (
    "elective_moderate: [\n"
    '          "Die Patientin oder den Patienten an eine Fachperson f\u00fcr Arzneimittelallergien \u00fcberweisen (falls noch nicht erfolgt).",\n'
    '          "Die Allergieregistrierung in der elektronischen Patientenakte optimieren.",\n'
    '          "Die Bildgebung aufschieben, um die Ergebnisse der Allergieanalyse abzuwarten.",\n'
    '          "Die Empfehlung der Fachperson f\u00fcr Arzneimittelallergien f\u00fcr ein sicheres iodhaltiges Kontrastmittel oder gadoliniumbasiertes Kontrastmittel umsetzen.",\n'
    '          "Wenn das Kontrastmittel verabreicht wird, die Patientin oder den Patienten mindestens 30 Minuten mit liegendem i.v.-Zugang beobachten.",\n'
    '          "Auf eine wiederkehrende unmittelbare Hypersensitivit\u00e4tsreaktion vorbereitet und wachsam sein.",\n'
    '          "Wenn eine unmittelbare Hypersensitivit\u00e4tsreaktion wieder auftritt, ist die \u00dcberweisung an eine Fachperson f\u00fcr Arzneimittelallergien verpflichtend.",\n'
    '          "Eine alternative Bildgebungsmodalit\u00e4t erw\u00e4gen oder eine Untersuchung ohne Kontrastmittel erw\u00e4gen, wenn die diagnostische Aussagekraft f\u00fcr die korrekte Patientenf\u00fchrung ausreicht.",\n'
    '          "Eine klinisch gut indizierte kontrastverst\u00e4rkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verf\u00fcgbar sind."\n'
    "        ],"
)
OLD_EN_EM = (
    "emergency_moderate: [\n"
    '          "If contrast-enhanced imaging is considered necessary, use of an alternative contrast agent should be considered.",\n'
    '          "Availability of personnel trained in the management of acute hypersensitivity reactions should be ensured.",\n'
    '          "Observation for \u226530 minutes with intravenous access should be ensured."\n'
    "        ],"
)
NEW_EN_EM = (
    "emergency_moderate: [\n"
    '          "Refer the patient to a drug allergy specialist (if not done before).",\n'
    '          "Optimize the allergy registration in the electronic health record.",\n'
    '          "Have a trained imaging or emergency room physician nearby.",\n'
    '          "Choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast medium is known.",\n'
    '          "When the contrast medium is administered, observe the patient for at least 30 min with the IV line in place.",\n'
    '          "Be prepared and vigilant for a recurring immediate hypersensitivity reaction.",\n'
    '          "If an immediate hypersensitivity reaction recurs, referral to a drug allergy specialist is mandatory.",\n'
    '          "Consider an alternative imaging modality, or consider performing an unenhanced exam if the diagnostic yield is sufficient for the correct management of the patient.",\n'
    '          "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available."\n'
    "        ],"
)
OLD_DE_EM = (
    "emergency_moderate: [\n"
    '          "Wenn eine kontrastverst\u00e4rkte Bildgebung als notwendig erachtet wird, sollte die Verwendung eines alternativen Kontrastmittels erwogen werden.",\n'
    '          "Die Verf\u00fcgbarkeit von Personal mit Schulung im Management akuter Hypersensitivit\u00e4tsreaktionen sollte sichergestellt werden.",\n'
    '          "Eine Beobachtung f\u00fcr \u226530 Minuten mit intraven\u00f6sem Zugang sollte sichergestellt werden."\n'
    "        ],"
)
NEW_DE_EM = (
    "emergency_moderate: [\n"
    '          "Die Patientin oder den Patienten an eine Fachperson f\u00fcr Arzneimittelallergien \u00fcberweisen (falls noch nicht erfolgt).",\n'
    '          "Die Allergieregistrierung in der elektronischen Patientenakte optimieren.",\n'
    '          "Eine geschulte \u00c4rztin oder einen geschulten Arzt aus Bildgebung oder Notaufnahme in der N\u00e4he haben.",\n'
    '          "Ein anderes iodhaltiges Kontrastmittel oder gadoliniumbasiertes Kontrastmittel w\u00e4hlen, sofern das ausl\u00f6sende Kontrastmittel bekannt ist.",\n'
    '          "Wenn das Kontrastmittel verabreicht wird, die Patientin oder den Patienten mindestens 30 Minuten mit liegendem i.v.-Zugang beobachten.",\n'
    '          "Auf eine wiederkehrende unmittelbare Hypersensitivit\u00e4tsreaktion vorbereitet und wachsam sein.",\n'
    '          "Wenn eine unmittelbare Hypersensitivit\u00e4tsreaktion wieder auftritt, ist die \u00dcberweisung an eine Fachperson f\u00fcr Arzneimittelallergien verpflichtend.",\n'
    '          "Eine alternative Bildgebungsmodalit\u00e4t erw\u00e4gen oder eine Untersuchung ohne Kontrastmittel erw\u00e4gen, wenn die diagnostische Aussagekraft f\u00fcr die korrekte Patientenf\u00fchrung ausreicht.",\n'
    '          "Eine klinisch gut indizierte kontrastverst\u00e4rkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verf\u00fcgbar sind."\n'
    "        ],"
)

text = replace_once(text, OLD_EN_EL, NEW_EN_EL, "en_el")
text = replace_once(text, OLD_DE_EL, NEW_DE_EL, "de_el")
text = replace_once(text, OLD_EN_EM, NEW_EN_EM, "en_em")
text = replace_once(text, OLD_DE_EM, NEW_DE_EM, "de_em")
path.write_text(text, encoding="utf-8")
print("PREV_IHR_MOD_01 applied", path.stat().st_size)

#!/usr/bin/env python3
from pathlib import Path

path = Path("script.js")
text = path.read_text(encoding="utf-8")

def replace_once(src, old, new, label):
    count = src.count(old)
    if count != 1:
        raise SystemExit(f"{label}: expected 1 occurrence, found {count}")
    return src.replace(old, new, 1)

text = replace_once(
    text,
    'acute_pattern_moderate_angioedema: "Facial / angioedema",',
    'acute_pattern_moderate_angioedema: "Facial edema without stridor",',
    "en_label",
)
text = replace_once(
    text,
    "acute_pattern_moderate_angioedema: \"Faziales \u00d6dem / Angio\u00f6dem\",",
    "acute_pattern_moderate_angioedema: \"Faziales \u00d6dem ohne Stridor\",",
    "de_label",
)

old_en = (
    "        moderate_angioedema: {\n"
    'clinical: "Facial / angioedema.",\n'
    'warning: "Cave laryngeal oedema.",\n'
    "management: [\n"
    '  "O\u2082 via mask 10\u201315 L/min.",\n'
    '  "IV 1000 mL NaCl 0.9% in 1 h.",\n'
    '  "H1-antihistamine IV, e.g. clemastine 2 mg.",\n'
    '  "When needed, repeat H1-antihistamine IV after 5 minutes."\n'
    "],\n"
    "escalation: [\n"
    '  "If severe or stridor/laryngeal oedema: sitting position.",\n'
    '  "If severe or stridor/laryngeal oedema: treat as anaphylaxis.",\n'
    '  "If severe or stridor/laryngeal oedema: consult rapid response team."\n'
    "]\n"
    "        },"
)
new_en = (
    "        moderate_angioedema: {\n"
    'clinical: "Facial edema without stridor.",\n'
    "management: [\n"
    '  "Give oxygen 10 to 15 L/min via a non-rebreathing mask.",\n'
    '  "Give chlorphenamine 20 mg or clemastine 2 mg IV.",\n'
    '  "Consider transferring the patient to a department with facilities for monitoring vital functions."\n'
    "],\n"
    "escalation: [\n"
    '  "If edema is severe, near airways, or if stridor develops, treat as anaphylaxis."\n'
    "]\n"
    "        },"
)
old_de = (
    "        moderate_angioedema: {\n"
    'clinical: "Faziales \u00d6dem / Angio\u00f6dem.",\n'
    'warning: "Achtung Larynx\u00f6dem.",\n'
    "management: [\n"
    '  "O\u2082 \u00fcber Maske 10\u201315 L/min.",\n'
    '  "1000 mL NaCl 0,9% i.v. in 1 h.",\n'
    '  "H1-Antihistaminikum i.v., z. B. Clemastin 2 mg.",\n'
    '  "Bei Bedarf H1-Antihistaminikum i.v. nach 5 Minuten wiederholen."\n'
    "],\n"
    "escalation: [\n"
    '  "Bei schwerem Verlauf oder Stridor/Larynx\u00f6dem: sitzende Position.",\n'
    '  "Bei schwerem Verlauf oder Stridor/Larynx\u00f6dem: wie Anaphylaxie behandeln.",\n'
    '  "Bei schwerem Verlauf oder Stridor/Larynx\u00f6dem: Rapid-Response-Team hinzuziehen."\n'
    "]\n"
    "        },"
)
new_de = (
    "        moderate_angioedema: {\n"
    'clinical: "Faziales \u00d6dem ohne Stridor.",\n'
    "management: [\n"
    '  "Sauerstoff 10 bis 15 L/min \u00fcber eine Nicht-R\u00fcckatmungsmaske geben.",\n'
    '  "Chlorphenamin 20 mg oder Clemastin 2 mg i.v. geben.",\n'
    '  "Verlegung in einen Bereich mit \u00dcberwachung der Vitalfunktionen erw\u00e4gen."\n'
    "],\n"
    "escalation: [\n"
    '  "Wenn das \u00d6dem schwer ist, in Atemwegsn\u00e4he liegt oder Stridor auftritt, wie eine Anaphylaxie behandeln."\n'
    "]\n"
    "        },"
)

text = replace_once(text, old_en, new_en, "en_block")
text = replace_once(text, old_de, new_de, "de_block")
path.write_text(text, encoding="utf-8")
print("ACUTE_MOD_ANGIO_01 applied", path.stat().st_size)

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
    'acute_pattern_moderate_angioedema: "Faziales \u00d6dem / Angio\u00f6dem",',
    'acute_pattern_moderate_angioedema: "Faziales \u00d6dem ohne Stridor",',
    "de_label",
)

old_en = """        moderate_angioedema: {
clinical: \"Facial / angioedema.\",
warning: \"Cave laryngeal oedema.\",
management: [
  \"O\u2082 via mask 10\u201315 L/min.\",
  \"IV 1000 mL NaCl 0.9% in 1 h.\",
  \"H1-antihistamine IV, e.g. clemastine 2 mg.\",
  \"When needed, repeat H1-antihistamine IV after 5 minutes.\"
],
escalation: [
  \"If severe or stridor/laryngeal oedema: sitting position.\",
  \"If severe or stridor/laryngeal oedema: treat as anaphylaxis.\",
  \"If severe or stridor/laryngeal oedema: consult rapid response team.\"
]
        },"""

new_en = """        moderate_angioedema: {
clinical: \"Facial edema without stridor.\",
management: [
  \"Give oxygen 10 to 15 L/min via a non-rebreathing mask.\",
  \"Give chlorphenamine 20 mg or clemastine 2 mg IV.\",
  \"Consider transferring the patient to a department with facilities for monitoring vital functions.\"
],
escalation: [
  \"If edema is severe, near airways, or if stridor develops, treat as anaphylaxis.\"
]
        },"""

old_de = """        moderate_angioedema: {
clinical: \"Faziales \u00d6dem / Angio\u00f6dem.\",
warning: \"Achtung Larynx\u00f6dem.\",
management: [
  \"O\u2082 \u00fcber Maske 10\u201315 L/min.\",
  \"1000 mL NaCl 0,9% i.v. in 1 h.\",
  \"H1-Antihistaminikum i.v., z. B. Clemastin 2 mg.\",
  \"Bei Bedarf H1-Antihistaminikum i.v. nach 5 Minuten wiederholen.\"
],
escalation: [
  \"Bei schwerem Verlauf oder Stridor/Larynx\u00f6dem: sitzende Position.\",
  \"Bei schwerem Verlauf oder Stridor/Larynx\u00f6dem: wie Anaphylaxie behandeln.\",
  \"Bei schwerem Verlauf oder Stridor/Larynx\u00f6dem: Rapid-Response-Team hinzuziehen.\"
]
        },"""

new_de = """        moderate_angioedema: {
clinical: \"Faziales \u00d6dem ohne Stridor.\",
management: [
  \"Sauerstoff 10 bis 15 L/min \u00fcber eine Nicht-R\u00fcckatmungsmaske geben.\",
  \"Chlorphenamin 20 mg oder Clemastin 2 mg i.v. geben.\",
  \"Verlegung in einen Bereich mit \u00dcberwachung der Vitalfunktionen erw\u00e4gen.\"
],
escalation: [
  \"Wenn das \u00d6dem schwer ist, in Atemwegsn\u00e4he liegt oder Stridor auftritt, wie eine Anaphylaxie behandeln.\"
]
        },"""

text = replace_once(text, old_en, new_en, "en_block")
text = replace_once(text, old_de, new_de, "de_block")

if "Cave laryngeal oedema." in text:
    raise SystemExit("old EN warning still present")
if "Achtung Larynx" in text and "Achtung Larynx\u00f6dem." in text:
    raise SystemExit("old DE warning still present")
if 'clinical: "Facial / angioedema."' in text:
    raise SystemExit("old EN clinical still present")

path.write_text(text, encoding="utf-8")
print("ACUTE_MOD_ANGIO_01 applied", path.stat().st_size)

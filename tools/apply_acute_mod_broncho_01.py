#!/usr/bin/env python3
from pathlib import Path

path = Path("script.js")
text = path.read_text(encoding="utf-8")

def replace_once(src, old, new, label):
    count = src.count(old)
    if count != 1:
        raise SystemExit(f"{label}: expected 1 occurrence, found {count}")
    return src.replace(old, new, 1)

old_en = (
    "        moderate_bronchospasm: {\n"
    'clinical: "Mild bronchospasm.",\n'
    'warning: "Cave respiratory threat.",\n'
    "management: [\n"
    '  "O\u2082 via mask 10\u201315 L/min.",\n'
    '  "SABA dose-aerosol: 2\u20133 deep inhalations of 100 \u00b5g, or nebulization in 3 mL saline until improved, according to ESUR/source text.",\n'
    '  "When needed, repeat SABA nebulization until improved."\n'
    "],\n"
    "escalation: [\n"
    '  "When increasing in severity: adrenaline 1 mg/mL, 0.5 mg IM.",\n'
    '  "When increasing in severity: when needed, repeat adrenaline 1 mg/mL, 0.5 mg IM after 5 minutes, guided by heart rate.",\n'
    '  "When protracted >5 h: consider adding corticosteroid slowly IV, e.g. prednisolone 50 mg.",\n'
    '  "When needed, consult rapid response team."\n'
    "]\n"
    "        },"
)
new_en = (
    "        moderate_bronchospasm: {\n"
    'clinical: "Mild bronchospasm.",\n'
    "management: [\n"
    '  "Short-acting \u03b22-agonist: 2\u20134 inhalations of 100 \u00b5g of salbutamol via inhalation (depending on severity), with option to repeat every 20 min, or via nebulization (2.5\u20135 \u00b5g diluted in 3 mL of saline solution) until clinical improvement.",\n'
    '  "Consider transferring the patient to a department with facilities for monitoring vital functions."\n'
    "],\n"
    "escalation: [\n"
    '  "In case of deterioration, give adrenaline 0.5 mg IM and consider consulting the rapid response team.",\n'
    '  "When bronchospasm increases in severity, consider repeating adrenaline 0.5 mg IM, guided by heart rate."\n'
    "]\n"
    "        },"
)
old_de = (
    "        moderate_bronchospasm: {\n"
    'clinical: "Milder Bronchospasmus.",\n'
    'warning: "Achtung respiratorische Bedrohung.",\n'
    "management: [\n"
    '  "O\u2082 \u00fcber Maske 10\u201315 L/min.",\n'
    '  "SABA-Dosieraerosol: 2\u20133 tiefe Inhalationen \u00e0 100 \u00b5g oder Vernebelung in 3 mL NaCl bis zur Besserung, gem\u00e4\u00df ESUR/Quelltext.",\n'
    '  "Bei Bedarf SABA-Vernebelung bis zur Besserung wiederholen."\n'
    "],\n"
    "escalation: [\n"
    '  "Bei zunehmender Schwere: Adrenalin 1 mg/mL, 0,5 mg i.m.",\n'
    '  "Bei zunehmender Schwere: bei Bedarf Adrenalin 1 mg/mL, 0,5 mg i.m. nach 5 Minuten wiederholen, herzfrequenzgesteuert.",\n'
    '  "Bei protrahiertem Verlauf >5 h: Kortikosteroid langsam i.v. erw\u00e4gen, z. B. Prednisolon 50 mg.",\n'
    '  "Bei Bedarf Rapid-Response-Team hinzuziehen."\n'
    "]\n"
    "        },"
)
new_de = (
    "        moderate_bronchospasm: {\n"
    'clinical: "Milder Bronchospasmus.",\n'
    "management: [\n"
    '  "Kurzwirksamer \u03b22-Agonist: 2\u20134 Inhalationen zu je 100 \u00b5g Salbutamol (abh\u00e4ngig vom Schweregrad), mit der Option zur Wiederholung alle 20 Minuten, oder per Vernebelung (2,5\u20135 \u00b5g verd\u00fcnnt in 3 mL Kochsalzl\u00f6sung) bis zur klinischen Besserung.",\n'
    '  "Verlegung in einen Bereich mit \u00dcberwachung der Vitalfunktionen erw\u00e4gen."\n'
    "],\n"
    "escalation: [\n"
    '  "Bei Verschlechterung Adrenalin 0,5 mg i.m. geben und die Hinzuziehung des Rapid-Response-Teams erw\u00e4gen.",\n'
    '  "Wenn der Bronchospasmus an Schwere zunimmt, Wiederholung von Adrenalin 0,5 mg i.m. erw\u00e4gen, gesteuert anhand der Herzfrequenz."\n'
    "]\n"
    "        },"
)

text = replace_once(text, old_en, new_en, "en_block")
text = replace_once(text, old_de, new_de, "de_block")

for forbidden, label in [
    ("Cave respiratory threat.", "old EN warning"),
    ("Achtung respiratorische Bedrohung.", "old DE warning"),
    ("2\u20133 deep inhalations", "old EN saba"),
    ("protracted >5 h", "old steroid"),
    ("Kurz wirksames", "old DE grammar"),
]:
    if forbidden in text:
        raise SystemExit(f"still present: {label}")
if "Facial edema without stridor." not in text:
    raise SystemExit("angio EN missing")
if "Diffuse urticaria / diffuse erythema." not in text:
    raise SystemExit("urt EN missing")
if "Mild reactions may only need reassurance." not in text:
    raise SystemExit("mild EN missing")
if 'clinical: "Anaphylaxis."' not in text:
    raise SystemExit("severe missing")
if "History and physical exam by radiology physician." not in text:
    raise SystemExit("immediate missing")

path.write_text(text, encoding="utf-8")
print("ACUTE_MOD_BRONCHO_01 applied", path.stat().st_size)

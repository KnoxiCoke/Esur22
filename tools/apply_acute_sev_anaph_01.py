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
    'acute_pattern_severe_anaphylaxis: "Anaphylaxis",',
    'acute_pattern_severe_anaphylaxis: "Anaphylactic reaction or stridor",',
    "en_label",
)
text = replace_once(
    text,
    'acute_pattern_severe_anaphylaxis: "Anaphylaxie",',
    'acute_pattern_severe_anaphylaxis: "Anaphylaktische Reaktion oder Stridor",',
    "de_label",
)

old_en = (
    "        severe_anaphylaxis: {\n"
    'clinical: "Anaphylaxis.",\n'
    "management: [\n"
    '  "Consult rapid response team.",\n'
    '  "O\u2082 via mask 10\u201315 L/min.",\n'
    '  "IV 500 mL NaCl 0.9% in 10 minutes.",\n'
    '  "When needed, repeat IV NaCl 0.9%.",\n'
    '  "Adrenaline 1 mg/mL, 0.5 mg IM.",\n'
    '  "When needed, repeat adrenaline 1 mg/mL, 0.5 mg IM after 5 minutes, guided by heart rate.",\n'
    '  "H1-antihistamine IV, e.g. clemastine 2 mg.",\n'
    '  "When needed, SABA dose-aerosol 2\u201310 deep inhalations of 100 \u00b5g or nebulization in 3 mL saline up to 1 hour, according to ESUR/source text.",\n'
    '  "Consider adding corticosteroid slowly IV, e.g. prednisolone 50 mg.",\n'
    '  "When needed, intubation and ICU."\n'
    "],\n"
    "arrest: [\n"
    '  "CALL RESUSCITATION TEAM.",\n'
    '  "Start cardio-pulmonary resuscitation.",\n'
    '  "Adrenaline 0.1 mg/mL IV only via resuscitation team."\n'
    "]\n"
    "        }"
)
new_en = (
    "        severe_anaphylaxis: {\n"
    'clinical: "Anaphylactic reaction or stridor.",\n'
    "management: [\n"
    '  "Call the rapid response team.",\n'
    '  "Give oxygen 10 to 15 L/min with non-rebreathing mask.",\n'
    '  "Give 0.5 mg adrenaline IM in the lateral upper thigh, repeat as necessary, guided by heart rate.",\n'
    '  "Give fluid bolus of crystalloid 500 mL IV in 10 min, repeat as necessary.",\n'
    '  "Short-acting \u03b22-agonist: 2\u201310 inhalations of 100 \u00b5g of salbutamol via inhalation (depending on severity), with option to repeat every 20 min, or via nebulization (2.5\u20135 \u00b5g diluted in 3 mL of saline solution) up to 1 h.",\n'
    '  "Give chlorphenamine 20 mg or clemastine 2 mg IV, repeat as necessary.",\n'
    '  "Consider adding corticosteroid (for example, prednisolone 50 mg IV)."\n'
    "],\n"
    "arrest: [\n"
    '  "Call the CPR team.",\n'
    '  "Start CPR."\n'
    "]\n"
    "        }"
)
old_de = (
    "        severe_anaphylaxis: {\n"
    'clinical: "Anaphylaxie.",\n'
    "management: [\n"
    '  "Rapid-Response-Team hinzuziehen.",\n'
    '  "O\u2082 \u00fcber Maske 10\u201315 L/min.",\n'
    '  "500 mL NaCl 0,9% i.v. in 10 Minuten.",\n'
    '  "Bei Bedarf NaCl 0,9% i.v. wiederholen.",\n'
    '  "Adrenalin 1 mg/mL, 0,5 mg i.m.",\n'
    '  "Bei Bedarf Adrenalin 1 mg/mL, 0,5 mg i.m. nach 5 Minuten wiederholen, herzfrequenzgesteuert.",\n'
    '  "H1-Antihistaminikum i.v., z. B. Clemastin 2 mg.",\n'
    '  "Bei Bedarf SABA-Dosieraerosol 2\u201310 tiefe Inhalationen \u00e0 100 \u00b5g oder Vernebelung in 3 mL NaCl bis zu 1 Stunde, gem\u00e4\u00df ESUR/Quelltext.",\n'
    '  "Kortikosteroid langsam i.v. erw\u00e4gen, z. B. Prednisolon 50 mg.",\n'
    '  "Bei Bedarf Intubation und ICU/Intensivstation."\n'
    "],\n"
    "arrest: [\n"
    '  "REANIMATIONSTEAM RUFEN.",\n'
    '  "Kardiopulmonale Reanimation starten.",\n'
    '  "Adrenalin 0,1 mg/mL i.v. nur durch das Reanimationsteam."\n'
    "]\n"
    "        }"
)
new_de = (
    "        severe_anaphylaxis: {\n"
    'clinical: "Anaphylaktische Reaktion oder Stridor.",\n'
    "management: [\n"
    '  "Das Rapid-Response-Team rufen.",\n'
    '  "Sauerstoff 10 bis 15 L/min mit Nicht-R\u00fcckatmungsmaske geben.",\n'
    '  "0,5 mg Adrenalin i.m. in den lateralen Oberschenkel geben, nach Bedarf wiederholen, gesteuert anhand der Herzfrequenz.",\n'
    '  "Fl\u00fcssigkeitsbolus von 500 mL Kristalloid i.v. in 10 min geben, nach Bedarf wiederholen.",\n'
    '  "Kurzwirksamer \u03b22-Agonist: 2\u201310 Inhalationen zu je 100 \u00b5g Salbutamol (abh\u00e4ngig vom Schweregrad), mit der Option zur Wiederholung alle 20 Minuten, oder per Vernebelung (2,5\u20135 \u00b5g verd\u00fcnnt in 3 mL Kochsalzl\u00f6sung) bis zu 1 Stunde.",\n'
    '  "Chlorphenamin 20 mg oder Clemastin 2 mg i.v. geben, nach Bedarf wiederholen.",\n'
    '  "Zusatz eines Kortikosteroids erw\u00e4gen (zum Beispiel Prednisolon 50 mg i.v.)."\n'
    "],\n"
    "arrest: [\n"
    '  "CPR-Team (Reanimationsteam) rufen.",\n'
    '  "CPR starten."\n'
    "]\n"
    "        }"
)

text = replace_once(text, old_en, new_en, "en_block")
text = replace_once(text, old_de, new_de, "de_block")
path.write_text(text, encoding="utf-8")
print("ACUTE_SEV_ANAPH_01 applied", path.stat().st_size)

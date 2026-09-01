#!/usr/bin/env python3
from pathlib import Path
import sys

TARGET = Path("script.js")

MILD_EN_OLD = '''        mild_general: {
clinical:
  "Nasal congestion, sneezing, conjunctivitis, rhinorrhoea, cutaneous oedema, itchy throat, mild scattered urticaria, e.g. <10.",
management: [
  "Reassure patient.",
  "Maintain IV access.",
  "IV drip 500 mL NaCl 0.9%.",
  "Observation with regular intervals until symptoms resolve, minimum 30 minutes.",
  "When vomiting is protracted: ondansetron 4 mg IV.",
  "When persisting cutaneous reaction or itching: non-sedating H1-antihistamine, e.g. desloratadine 5 mg PO once daily or cetirizine 10 mg PO once daily."
],
escalation: [
  "When needed, consult rapid response team."
]
        },'''

MILD_EN_NEW = '''        mild_general: {
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
        },'''

MILD_DE_OLD = '''        mild_general: {
clinical:
  "Nasale Kongestion, Niesen, Konjunktivitis, Rhinorrhö, kutanes Ödem, juckender Hals, milde vereinzelte Urtikaria, z. B. <10.",
management: [
  "Patientin/Patient beruhigen.",
  "IV-Zugang belassen.",
  "500 mL NaCl 0,9% i.v. als Infusion.",
  "Regelmäßige Beobachtung bis zum Abklingen der Symptome, mindestens 30 Minuten.",
  "Bei prolongiertem Erbrechen: Ondansetron 4 mg i.v.",
  "Bei persistierender Hautreaktion oder Juckreiz: nicht sedierendes H1-Antihistaminikum, z. B. Desloratadin 5 mg p.o. 1× täglich oder Cetirizin 10 mg p.o. 1× täglich."
],
escalation: [
  "Bei Bedarf Rapid-Response-Team hinzuziehen."
]
        },'''

MILD_DE_NEW = '''        mild_general: {
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
        },'''

URT_EN_OLD = '''        moderate_urticaria: {
clinical: "Generalised urticaria / diffuse erythema.",
warning: "Cave hypotension.",
management: [
  "IV 1000 mL NaCl 0.9% in 1 h.",
  "H1-antihistamine IV, e.g. clemastine 2 mg.",
  "When needed, repeat H1-antihistamine IV after 5 minutes.",
  "When hypotensive (SBP <90): active elevation of legs."
],
escalation: [
  "When hypotensive (SBP <90): treat as anaphylaxis.",
  "When needed, consult rapid response team."
]
        },'''

URT_EN_NEW = '''        moderate_urticaria: {
clinical: "Diffuse urticaria / diffuse erythema.",
management: [
  "Give chlorphenamine 20 mg or clemastine 2 mg IV.",
  "Consider transferring the patient to a department with facilities for monitoring vital functions."
],
escalation: [
  "If accompanied by hypotension, treat as anaphylaxis."
]
        },'''

URT_DE_OLD = '''        moderate_urticaria: {
clinical: "Generalisierte Urtikaria / diffuses Erythem.",
warning: "Achtung Hypotonie.",
management: [
  "1000 mL NaCl 0,9% i.v. in 1 h.",
  "H1-Antihistaminikum i.v., z. B. Clemastin 2 mg.",
  "Bei Bedarf H1-Antihistaminikum i.v. nach 5 Minuten wiederholen.",
  "Bei Hypotonie (SBP <90): Beine aktiv hochlagern."
],
escalation: [
  "Bei Hypotonie (SBP <90): wie Anaphylaxie behandeln.",
  "Bei Bedarf Rapid-Response-Team hinzuziehen."
]
        },'''

URT_DE_NEW = '''        moderate_urticaria: {
clinical: "Diffuse Urtikaria / diffuses Erythem.",
management: [
  "Chlorphenamin 20 mg oder Clemastin 2 mg i.v. geben.",
  "Verlegung in einen Bereich mit Überwachung der Vitalfunktionen erwägen."
],
escalation: [
  "Bei begleitender Hypotonie wie eine Anaphylaxie behandeln."
]
        },'''

def replace_once(text, old, new, label):
    n = text.count(old)
    if n != 1:
        raise SystemExit(f"{label}: expected 1 match, found {n}")
    return text.replace(old, new, 1)

def apply_mild(text):
    text = replace_once(text, MILD_EN_OLD, MILD_EN_NEW, "mild EN")
    text = replace_once(text, MILD_DE_OLD, MILD_DE_NEW, "mild DE")
    return text

def apply_urt(text):
    text = replace_once(
        text,
        'acute_pattern_moderate_urticaria: "Generalised urticaria / diffuse erythema"',
        'acute_pattern_moderate_urticaria: "Diffuse urticaria / diffuse erythema"',
        "pattern EN",
    )
    text = replace_once(
        text,
        'acute_pattern_moderate_urticaria: "Generalisierte Urtikaria / diffuses Erythem"',
        'acute_pattern_moderate_urticaria: "Diffuse Urtikaria / diffuses Erythem"',
        "pattern DE",
    )
    text = replace_once(text, URT_EN_OLD, URT_EN_NEW, "urt EN")
    text = replace_once(text, URT_DE_OLD, URT_DE_NEW, "urt DE")
    return text

def main():
    if len(sys.argv) != 2 or sys.argv[1] not in {"mild", "urt"}:
        raise SystemExit("usage: apply_approved_hsr_blocks.py mild|urt")
    text = TARGET.read_text()
    text = apply_mild(text) if sys.argv[1] == "mild" else apply_urt(text)
    TARGET.write_text(text)
    print("applied", sys.argv[1], "chars", len(text))

if __name__ == "__main__":
    main()

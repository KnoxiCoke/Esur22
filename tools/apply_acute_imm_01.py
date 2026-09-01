#!/usr/bin/env python3
from pathlib import Path
path = Path("script.js")
text = path.read_text(encoding="utf-8")

def replace_once(src, old, new, label):
    n = src.count(old)
    if n != 1:
        raise SystemExit(f"{label}: expected 1, found {n}")
    return src.replace(old, new, 1)

OLD_EN = """acute_immediate_actions: [
        "History and physical exam by radiology physician.",
        "A — Airway: wheezing, stridor.",
        "B — Breathing: auscultation of lungs/throat, SaO₂.",
        "C — Circulation: pulse, blood pressure, pulsations.",
        "D — Disability: responsiveness.",
        "E — Environment: inspection of the entire skin.",
        "Stop infusing contrast agent and replace IV line with crystalloid.",
        "Determine serum tryptase within 1–4 h in all moderate to severe reactions."
      ],"""
NEW_EN = """acute_immediate_actions: [
        "Monitor the patient closely and judge for progression of the reaction.",
        "Observe closely for mucosal edema of the nose, mouth, throat, or larynx.",
        "In case of symptoms, check heart rate, arterial blood pressure, and consciousness.",
        "Check and stabilize the patient according to the ABCDE method.",
        "Stop infusing contrast agent and replace the IV line with crystalloid.",
        "Dyspnoea or stridor: let the patient sit up.",
        "Consider measuring serum tryptase, ideally 1–2 h after start of the reaction.",
        "Record acute allergic reactions and the culprit contrast medium in the allergy registry of the electronic health record of the patient."
      ],"""
OLD_DE = """acute_immediate_actions: [
        "Anamnese und körperliche Untersuchung durch Radiologin/Radiologen.",
        "A — Airway/Atemweg: Giemen, Stridor.",
        "B — Breathing/Atmung: Auskultation von Lunge/Rachen, SaO₂.",
        "C — Circulation/Kreislauf: Puls, Blutdruck, Pulsationen.",
        "D — Disability/Neurologie: Ansprechbarkeit.",
        "E — Environment/Exposition: Inspektion der gesamten Haut.",
        "Kontrastmittelinfusion stoppen und i.v.-Leitung mit kristalloider Infusion weiterführen.",
        "Serumtryptase innerhalb von 1–4 h bei allen moderaten bis schweren Reaktionen bestimmen."
      ],"""
NEW_DE = """acute_immediate_actions: [
        "Den Patienten engmaschig überwachen und die Progression der Reaktion beurteilen.",
        "Engmaschig auf Schleimhautödem von Nase, Mund, Rachen oder Larynx achten.",
        "Bei Symptomen Herzfrequenz, arteriellen Blutdruck und Bewusstsein prüfen.",
        "Den Patienten gemäß der ABCDE-Methode prüfen und stabilisieren.",
        "Kontrastmittelinfusion stoppen und die i.v.-Leitung durch Kristalloid ersetzen.",
        "Dyspnoe oder Stridor: den Patienten aufsetzen lassen.",
        "Bestimmung der Serumtryptase erwägen, idealerweise 1–2 h nach Beginn der Reaktion.",
        "Akute allergische Reaktionen und das auslösende Kontrastmittel im Allergieregister der elektronischen Patientenakte dokumentieren."
      ],"""

text = replace_once(text, OLD_EN, NEW_EN, "en")
text = replace_once(text, OLD_DE, NEW_DE, "de")
path.write_text(text, encoding="utf-8")
print("ACUTE_IMM_01 applied", path.stat().st_size)

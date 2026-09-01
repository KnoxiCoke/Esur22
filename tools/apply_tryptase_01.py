#!/usr/bin/env python3
from pathlib import Path

def replace_between(src, start, end, new, label):
    i = src.find(start)
    if i < 0:
        raise SystemExit(f"{label}: start not found")
    j = src.find(end, i)
    if j < 0:
        raise SystemExit(f"{label}: end not found")
    old = src[i:j]
    if src.count(old) != 1:
        raise SystemExit(f"{label}: old block not unique ({src.count(old)})")
    return src[:i] + new + src[j:]

script = Path("script.js")
html = Path("index.html")
st = script.read_text(encoding="utf-8")
ht = html.read_text(encoding="utf-8")

st = replace_between(
    st,
    '      tryptase_title: "Tryptase Rule",',
    '      acute_title: "Acute management",',
    '''      tryptase_title: "Serum tryptase",
      tryptase_sample_measure:
        "Measure serum tryptase within 1\u20134 h from the start of all moderate-to-severe immediate hypersensitivity reactions to contrast media.",
      tryptase_sample_baseline:
        "A second measurement after \u2265 24 h serves as a baseline for further allergologic examinations.",
      tryptase_sample_ideal:
        "Ideally, three samples should be obtained: the first as early as possible during a suspected hypersensitivity reaction, the second at 1\u20132 h after the first but no later than 4 h after the onset of the reaction, and the third more than 24 h after all signs and symptoms have subsided.",
      enter_values: "Enter values",
      calculate: "Calculate",
      result: "Result",
      tryptase_default:
        "Enter an acute tryptase value obtained during or within 4 h after symptoms and a baseline tryptase value.",
      tryptase_invalid: "Please enter valid numeric values.",
      tryptase_threshold: "Threshold",
      tryptase_acute: "Acute tryptase",
      tryptase_baseline: "Baseline tryptase",
      tryptase_formula:
        "An acute-over-baseline elevation of tryptase of at least 2 ng/mL + (1.2 \u00d7 baseline tryptase) during or within 4 h after symptoms is suggestive of an IHR.",
      tryptase_positive:
        "The result is suggestive of an IHR.",
      tryptase_negative:
        "The result does not show an acute-over-baseline elevation of at least 2 ng/mL + (1.2 \u00d7 baseline tryptase).",
      tryptase_note:
        "In mild or moderate IHR, tryptase levels typically remain normal, and the absence of elevation does not exclude the possibility of a genuine IHR.",

      ''',
    "en",
)
st = replace_between(
    st,
    '      tryptase_title: "Tryptase-Regel",',
    '      acute_title: "Akutmanagement",',
    '''      tryptase_title: "Serumtryptase",
      tryptase_sample_measure:
        "Serumtryptase innerhalb von 1\u20134 h nach Beginn aller moderaten bis schweren unmittelbaren Hypersensitivit\u00e4tsreaktionen auf Kontrastmittel messen.",
      tryptase_sample_baseline:
        "Eine zweite Messung nach \u2265 24 h dient als Baseline f\u00fcr weitere allergologische Untersuchungen.",
      tryptase_sample_ideal:
        "Idealerweise sollten drei Proben gewonnen werden: die erste so fr\u00fch wie m\u00f6glich w\u00e4hrend einer vermuteten Hypersensitivit\u00e4tsreaktion, die zweite 1\u20132 h nach der ersten, jedoch nicht sp\u00e4ter als 4 h nach Beginn der Reaktion, und die dritte mehr als 24 h nach Abklingen aller Zeichen und Symptome.",
      enter_values: "Werte eingeben",
      calculate: "Berechnen",
      result: "Ergebnis",
      tryptase_default:
        "Einen akuten Tryptasewert eingeben, der w\u00e4hrend der Symptome oder innerhalb von 4 h danach gewonnen wurde, sowie einen Baseline-Tryptasewert.",
      tryptase_invalid: "Bitte g\u00fcltige Zahlenwerte eingeben.",
      tryptase_threshold: "Schwellenwert",
      tryptase_acute: "Akute Tryptase",
      tryptase_baseline: "Baseline-Tryptase",
      tryptase_formula:
        "Ein akuter Anstieg der Tryptase gegen\u00fcber der Baseline von mindestens 2 ng/mL + (1,2 \u00d7 Baseline-Tryptase) w\u00e4hrend der Symptome oder innerhalb von 4 h danach ist hinweisend auf eine IHR.",
      tryptase_positive:
        "Das Ergebnis ist hinweisend auf eine IHR.",
      tryptase_negative:
        "Das Ergebnis zeigt keinen akuten Anstieg gegen\u00fcber der Baseline von mindestens 2 ng/mL + (1,2 \u00d7 Baseline-Tryptase).",
      tryptase_note:
        "Bei milder oder moderater IHR bleiben die Tryptasewerte typischerweise normal; ein fehlender Anstieg schlie\u00dft die M\u00f6glichkeit einer echten IHR nicht aus.",

      ''',
    "de",
)

old_html = '''    <section class="subview" id="hsr-tab-tryptase" hidden>
      <div class="card">
        <div class="card__title" data-i18n="enter_values">Enter values</div>'''
new_html = '''    <section class="subview" id="hsr-tab-tryptase" hidden>
      <div class="card">
        <div class="card__title" data-i18n="tryptase_title">Serum tryptase</div>
        <div class="output">
          <ul>
            <li data-i18n="tryptase_sample_measure">Measure serum tryptase within 1\u20134 h from the start of all moderate-to-severe immediate hypersensitivity reactions to contrast media.</li>
            <li data-i18n="tryptase_sample_baseline">A second measurement after \u2265 24 h serves as a baseline for further allergologic examinations.</li>
            <li data-i18n="tryptase_sample_ideal">Ideally, three samples should be obtained: the first as early as possible during a suspected hypersensitivity reaction, the second at 1\u20132 h after the first but no later than 4 h after the onset of the reaction, and the third more than 24 h after all signs and symptoms have subsided.</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card__title" data-i18n="enter_values">Enter values</div>'''
if ht.count(old_html) != 1:
    raise SystemExit("html block not unique")
ht = ht.replace(old_html, new_html, 1)

if "highest available" in st or "highest available" in ht:
    raise SystemExit("highest available leaked")
if "tryptase_subtitle" in st:
    raise SystemExit("old subtitle key remains")
if "const threshold = (1.2 * baseline) + 2;" not in st:
    raise SystemExit("calc changed")
if "const significant = acute >= threshold;" not in st:
    raise SystemExit("cmp changed")

script.write_text(st, encoding="utf-8")
html.write_text(ht, encoding="utf-8")
print("TRYPTASE_01 applied", script.stat().st_size, html.stat().st_size)

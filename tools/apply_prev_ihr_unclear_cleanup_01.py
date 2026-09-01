#!/usr/bin/env python3
from pathlib import Path
path = Path("script.js")
text = path.read_text(encoding="utf-8")

def replace_once(src, old, new, label):
    n = src.count(old)
    if n != 1:
        raise SystemExit(f"{label}: expected 1, found {n}")
    return src.replace(old, new, 1)

text = replace_once(text, '      unclear: "Unclear",\n', "", "unclear_en")
text = replace_once(text, '      unclear: "Unklar",\n', "", "unclear_de")
text = replace_once(text, '        elective_unclear: "Elective imaging \u2014 prior reaction severity unclear",\n', "", "title_el_en")
text = replace_once(
    text,
    '        emergency_severe: "Emergency imaging \u2014 prior severe immediate hypersensitivity reaction",\n'
    '        emergency_unclear: "Emergency imaging \u2014 prior reaction severity unclear"\n',
    '        emergency_severe: "Emergency imaging \u2014 prior severe immediate hypersensitivity reaction"\n',
    "title_em_en",
)
text = replace_once(text, '        elective_unclear: "Elektive Bildgebung \u2014 Schweregrad der fr\u00fcheren Reaktion unklar",\n', "", "title_el_de")
text = replace_once(
    text,
    '        emergency_severe: "Notfallbildgebung \u2014 fr\u00fchere schwere unmittelbare Hypersensitivit\u00e4tsreaktion",\n'
    '        emergency_unclear: "Notfallbildgebung \u2014 Schweregrad der fr\u00fcheren Reaktion unklar"\n',
    '        emergency_severe: "Notfallbildgebung \u2014 fr\u00fchere schwere unmittelbare Hypersensitivit\u00e4tsreaktion"\n',
    "title_em_de",
)
text = replace_once(
    text,
    '        elective_unclear: [\n'
    '          "The previous reaction should be reviewed.",\n'
    '          "Allergy documentation should be optimized.",\n'
    '          "If contrast agent administration remains necessary, clinical judgement and local protocols should guide further management."\n'
    "        ],\n",
    "",
    "arr_el_en",
)
text = replace_once(
    text,
    '        elective_unclear: [\n'
    '          "Die fr\u00fchere Reaktion sollte \u00fcberpr\u00fcft werden.",\n'
    '          "Die Allergiedokumentation sollte optimiert werden.",\n'
    '          "Wenn eine Kontrastmittelgabe weiterhin erforderlich ist, sollten klinische Beurteilung und lokale Protokolle das weitere Vorgehen leiten."\n'
    "        ],\n",
    "",
    "arr_el_de",
)
text = replace_once(
    text,
    '          "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available."\n'
    "        ],\n"
    "        emergency_unclear: [\n"
    '          "If contrast agent administration is considered necessary, the potential risk of recurrence should be considered.",\n'
    '          "Availability of personnel trained in the management of acute hypersensitivity reactions should be ensured.",\n'
    '          "Clinical judgement and local protocols should guide further management."\n'
    "        ]\n",
    '          "Never deny a patient a clinically well-indicated enhanced examination if alternative imaging strategies are not available."\n'
    "        ]\n",
    "arr_em_en",
)
text = replace_once(
    text,
    '          "Eine klinisch gut indizierte kontrastverst\u00e4rkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verf\u00fcgbar sind."\n'
    "        ],\n"
    "        emergency_unclear: [\n"
    '          "Wenn eine Kontrastmittelgabe als notwendig erachtet wird, sollte das potenzielle Risiko eines Wiederauftretens ber\u00fccksichtigt werden.",\n'
    '          "Die Verf\u00fcgbarkeit von Personal mit Schulung im Management akuter Hypersensitivit\u00e4tsreaktionen sollte sichergestellt werden.",\n'
    '          "Klinische Beurteilung und lokale Protokolle sollten das weitere Vorgehen leiten."\n'
    "        ]\n",
    '          "Eine klinisch gut indizierte kontrastverst\u00e4rkte Untersuchung nicht verweigern, wenn keine alternativen Bildgebungsstrategien verf\u00fcgbar sind."\n'
    "        ]\n",
    "arr_em_de",
)
for banned in ["elective_unclear", "emergency_unclear", 'unclear: "Unclear"', 'unclear: "Unklar"']:
    if banned in text:
        raise SystemExit("still present: " + banned)
for keep in ["elective_mild", "elective_moderate", "elective_severe", "emergency_mild", "emergency_moderate", "emergency_severe", 'title: "ICM unknown"', "Culprit CM unknown"]:
    if keep not in text:
        raise SystemExit("missing keep: " + keep)
path.write_text(text, encoding="utf-8")
print("PREV_IHR_UNCLEAR_CLEANUP_01 applied", path.stat().st_size)

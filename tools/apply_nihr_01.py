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

base = Path("tools")
new_en = (base / "nihr_en_block.txt").read_text(encoding="utf-8")
new_de = (base / "nihr_de_block.txt").read_text(encoding="utf-8")
new_fn = (base / "nihr_fn.js").read_text(encoding="utf-8")

script = Path("script.js")
html = Path("index.html")
st = script.read_text(encoding="utf-8")
ht = html.read_text(encoding="utf-8")

st = replace_between(st, '      nihr_title: "NIHR \u2014 non-immediate hypersensitivity reactions",', '      icm_hint:', new_en, "en_nihr")
st = replace_between(st, '      nihr_title: "NIHR \u2014 verz\u00f6gerte Hypersensitivit\u00e4tsreaktionen",', '      icm_hint:', new_de, "de_nihr")
st = replace_between(st, 'function renderNihr() {', '  function getChanges() {', new_fn, "renderNihr")

replacements = [
(
'''        <div class="seg seg--stack">
          <button class="seg__btn active" data-seg="nihrSeverity" data-value="mild" type="button" data-i18n="nihr_severity_mild">Mild skin reaction</button>
          <button class="seg__btn" data-seg="nihrSeverity" data-value="moderate" type="button" data-i18n="nihr_severity_moderate">Moderate skin reaction</button>
          <button class="seg__btn" data-seg="nihrSeverity" data-value="severe" type="button" data-i18n="nihr_severity_severe">Severe skin reaction / SCAR</button>
        </div>
        <div class="hint" data-i18n="nihr_severity_hint">
          Mild: resolves without treatment. Moderate: resolves with outpatient treatment. Severe: hospital admission required.
        </div>''',
'''        <div class="seg seg--stack">
          <button class="seg__btn active" data-seg="nihrSeverity" data-value="mild" type="button" data-i18n="nihr_severity_mild">Mild</button>
          <button class="seg__btn" data-seg="nihrSeverity" data-value="moderate" type="button" data-i18n="nihr_severity_moderate">Moderate</button>
          <button class="seg__btn" data-seg="nihrSeverity" data-value="severe" type="button" data-i18n="nihr_severity_severe">Severe</button>
        </div>
        <div class="hint" data-i18n="nihr_severity_hint">
          Mild: skin lesions resolve without treatment. Moderate: skin lesions resolve with outpatient treatment. Severe: hospital admission is required for treatment.
        </div>''',
"severity"
),
(
'''        <div class="seg">
          <button class="seg__btn active" data-seg="nihrCmtype" data-value="icm" type="button" data-i18n="icm_ct">ICM (CT)</button>
          <button class="seg__btn" data-seg="nihrCmtype" data-value="gbca" type="button" data-i18n="gbca_mri">GBCA (MRI)</button>
        </div>''',
'''        <div class="seg">
          <button class="seg__btn active" data-seg="nihrCmtype" data-value="icm" type="button" data-i18n="nihr_cmtype_icm">ICM</button>
          <button class="seg__btn" data-seg="nihrCmtype" data-value="gbca" type="button" data-i18n="nihr_cmtype_gbca">GBCA</button>
          <button class="seg__btn" data-seg="nihrCmtype" data-value="unknown" type="button" data-i18n="nihr_cmtype_unknown">Contrast class unknown</button>
        </div>''',
"class"
),
(
'''        <div class="checklist">
          <label><input type="checkbox" class="nihr-check" value="erosion" /> <span data-i18n="erosions">Erosive and/or haemorrhagic lesions</span></label>
          <label><input type="checkbox" class="nihr-check" value="blister" /> <span data-i18n="blistering">Blistering</span></label>
          <label><input type="checkbox" class="nihr-check" value="skin_disruption" /> <span data-i18n="skin_disruption">Skin disruption / skin barrier disruption</span></label>
          <label><input type="checkbox" class="nihr-check" value="mucosa" /> <span data-i18n="mucosal_involvement">Mucosal involvement</span></label>
          <label><input type="checkbox" class="nihr-check" value="fever" /> <span data-i18n="fever">High fever</span></label>
          <label><input type="checkbox" class="nihr-check" value="organ_values" /> <span data-i18n="organ_values">Abnormal liver / kidney values</span></label>
          <label><input type="checkbox" class="nihr-check" value="lymphadenopathy" /> <span data-i18n="lymphadenopathy">Lymphadenopathy</span></label>
        </div>''',
'''        <div class="checklist">
          <label><input type="checkbox" class="nihr-check" value="erosion" /> <span data-i18n="erosions">Erosive and/or haemorrhagic lesions</span></label>
          <label><input type="checkbox" class="nihr-check" value="blister_skin" /> <span data-i18n="blistering">Blistering and skin disruption</span></label>
          <label><input type="checkbox" class="nihr-check" value="mucosa" /> <span data-i18n="mucosal_involvement">Mucosal involvement</span></label>
          <label><input type="checkbox" class="nihr-check" value="extracutaneous" /> <span data-i18n="extracutaneous_involvement">Extracutaneous organ involvement (high fever, abnormal liver/kidney values, lymphadenopathy)</span></label>
        </div>''',
"danger"
),
(
'''      <div class="card card--subtle">
        <div class="card__title" data-i18n="nihr_safety_note_title">Safety note</div>
        <div class="output" data-i18n="nihr_safety_note">
          ESUR-based support for previous NIHR. Consider contrast media cross-reactivity and increased NIHR risk with iso-osmolar dimeric iodine-based contrast media. Follow local protocols and drug allergy specialist advice.
        </div>
      </div>''',
"",
"safety"
),
]

for old, new, label in replacements:
    n = ht.count(old)
    if n != 1:
        raise SystemExit(f"{label}: expected 1, found {n}")
    ht = ht.replace(old, new, 1)

ht = ht.replace(
    'data-i18n="nihr_danger_signs_title">Danger signs for SCAR</div>',
    'data-i18n="nihr_danger_signs_title">Danger signs</div>',
    1,
)
ht = ht.replace(
    'data-i18n="nihr_culprit_known_title">Culprit contrast medium known?</div>',
    'data-i18n="nihr_culprit_known_title">Exact culprit contrast medium known?</div>',
    1,
)

for banned in ["Severe skin reaction / SCAR", "isScarPathway", "nihr_high_risk", "nihr_mild_actions", "nihr_moderate_actions", "nihr_scar_actions"]:
    if banned in st or banned in ht:
        raise SystemExit("banned leftover: " + banned)

script.write_text(st, encoding="utf-8")
html.write_text(ht, encoding="utf-8")
print("NIHR_01 applied", script.stat().st_size, html.stat().st_size)

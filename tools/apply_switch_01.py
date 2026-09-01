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
        raise SystemExit(f"{label}: not unique ({src.count(old)})")
    return src[:i] + new + src[j:]

st = Path("script.js").read_text(encoding="utf-8")
ht = Path("index.html").read_text(encoding="utf-8")

EN_HEAD = Path("tools/switch_en_head.txt").read_text(encoding="utf-8")
DE_HEAD = Path("tools/switch_de_head.txt").read_text(encoding="utf-8")
EN_RULES = Path("tools/switch_en_rules.txt").read_text(encoding="utf-8")
DE_RULES = Path("tools/switch_de_rules.txt").read_text(encoding="utf-8")

st = replace_between(st, '      switch_title: "Switch",\n      switch_subtitle:\n        "Educational support', '      tryptase_title:', EN_HEAD, "en_head")
st = replace_between(st, '      switch_title: "Switch",\n      switch_subtitle:\n        "Didaktische Orientierung', '      tryptase_title:', DE_HEAD, "de_head")
st = replace_between(st, '      icm_rules: {\n        A: {\n          title: "Group A selected",', '      // Practice Changes tab', EN_RULES, "en_rules")
st = replace_between(st, '      icm_rules: {\n        A: {\n          title: "Gruppe A ausgewählt",', '      // Practice Changes tab', DE_RULES, "de_rules")

st = st.replace(
    '"ICM group examples\\nBrand examples; availability and trademarks may vary by country."',
    '"ESUR grouping is based on the generic contrast-agent substance. Brand names are shown for product identification only.\\nGrouping according to ESUR Part 2 Fig. 2 / Fig. 3 and Table 1."',
    1,
)
st = st.replace(
    '"GBCA group examples\\nBrand examples; availability and trademarks may vary by country."',
    '"ESUR grouping is based on the generic contrast-agent substance. Brand names are shown for product identification only.\\nGrouping according to ESUR Part 2 Fig. 2 / Fig. 3 and Table 1."',
    1,
)
st = st.replace(
    '"ICM-Gruppenbeispiele\\nMarkenbeispiele; Verfügbarkeit und Markenrechte können je nach Land variieren."',
    '"Die ESUR-Gruppierung basiert auf dem jeweiligen Kontrastmittelwirkstoff. Markennamen werden ausschließlich zur Produktidentifikation angezeigt.\\nGruppierung gemäß ESUR Part 2 Fig. 2 / Fig. 3 und Table 1."',
    1,
)
st = st.replace(
    '"GBCA-Gruppenbeispiele\\nMarkenbeispiele; Verfügbarkeit und Markenrechte können je nach Land variieren."',
    '"Die ESUR-Gruppierung basiert auf dem jeweiligen Kontrastmittelwirkstoff. Markennamen werden ausschließlich zur Produktidentifikation angezeigt.\\nGruppierung gemäß ESUR Part 2 Fig. 2 / Fig. 3 und Table 1."',
    1,
)

if st.count('    setText("switchNonvalidated", t("switch_nonvalidated"));') != 1:
    raise SystemExit("fill call missing")
st = st.replace(
    '    setText("switchNonvalidated", t("switch_nonvalidated"));',
    '    fillSwitchPrinciples();',
    1,
)

if st.count("  function renderSwitch() {") != 1:
    raise SystemExit("renderSwitch not unique")
st = st.replace(
    "  function renderSwitch() {",
    '''  function fillSwitchPrinciples() {
    const items = [
      t("switch_status_optional"),
      t("switch_cmsc"),
      t("switch_cr_structure"),
      t("switch_cr_frequency"),
      t("switch_best_option")
    ];
    const html =
      `<ul>${items.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>` +
      `<div class="hint">${escapeHtml(t("switch_brand_governance"))}</div>`;
    const top = document.getElementById("switchNonvalidated");
    const safety = document.getElementById("switchSafety");
    if (top) top.innerHTML = html;
    if (safety) safety.innerHTML = html;
  }

  function renderSwitch() {''',
    1,
)

old_safe = '''        <div class="output" data-i18n="switch_safety_note">
          Cross-reactivity is variable. ESUR states that empiric switching is not robustly evidence-based; allergy evaluation with testing is preferred when available.
        </div>'''
new_safe = '''        <div class="output" id="switchSafety" data-i18n="switch_safety_note">
          This switch overview is optional and based on a non-validated classification and practical experience. The CMSC cannot make evidence-based recommendations on a robust scientific basis for change to an alternative contrast agent based on practical experience. Cross-reactivity cannot be predicted on the basis of the chemical structure. The best option is to choose an alternative based on the results of an allergy evaluation.
        </div>'''
if ht.count(old_safe) != 1:
    raise SystemExit("html safety not unique")
ht = ht.replace(old_safe, new_safe, 1)

for brand in ["Omnipaque", "Visipaque", "Iomeron", "Optiray", "Iopamiro", "Isovue", "Ultravist", "Xenetix", "Dotarem", "Clariscan", "Gadovist", "Gadavist", "ProHance", "Elucirem", "Vueway"]:
    if brand not in st:
        raise SystemExit("missing brand " + brand)

Path("script.js").write_text(st, encoding="utf-8")
Path("index.html").write_text(ht, encoding="utf-8")
print("SWITCH_01 applied", Path("script.js").stat().st_size, Path("index.html").stat().st_size)

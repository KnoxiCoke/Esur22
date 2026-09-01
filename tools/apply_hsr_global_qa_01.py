#!/usr/bin/env python3
from pathlib import Path
import re

def replace_once(src, old, new, label):
    n = src.count(old)
    if n != 1:
        raise SystemExit(f"{label}: expected 1, found {n}")
    return src.replace(old, new, 1)

st = Path("script.js").read_text(encoding="utf-8")
ht = Path("index.html").read_text(encoding="utf-8")

OLD_CALC = '''    const baseline = Number(document.getElementById("baseline")?.value);
    const acute = Number(document.getElementById("acute")?.value);

    if (!isFinite(baseline) || !isFinite(acute) || baseline < 0 || acute < 0) {
      tryptaseOutput.innerHTML = `<div class="hint">${escapeHtml(t("tryptase_invalid"))}</div>`;
      return;
    }'''

NEW_CALC = '''    const baselineRaw = document.getElementById("baseline")?.value?.trim() ?? "";
    const acuteRaw = document.getElementById("acute")?.value?.trim() ?? "";

    if (baselineRaw === "" || acuteRaw === "") {
      tryptaseOutput.innerHTML = `<div class="hint">${escapeHtml(t("tryptase_invalid"))}</div>`;
      return;
    }

    const baseline = Number(baselineRaw);
    const acute = Number(acuteRaw);

    if (!Number.isFinite(baseline) || !Number.isFinite(acute) || baseline < 0 || acute < 0) {
      tryptaseOutput.innerHTML = `<div class="hint">${escapeHtml(t("tryptase_invalid"))}</div>`;
      return;
    }'''

st = replace_once(st, OLD_CALC, NEW_CALC, "calc")

st = replace_once(
    st,
    'disclaimer_line1: "Didaktisches Support-Tool. Lokale Protokolle beachten..",',
    'disclaimer_line1: "Didaktisches Support-Tool. Lokale Protokolle beachten.",',
    "typo",
)

EN_KEYS = '''      flow_step1: "Step 1 — Clinical situation",
      flow_step2: "Step 2 — Prior reaction severity",

      flow_routing_note:
        "Educational support for prior immediate hypersensitivity reactions. For non-immediate reactions, use the NIHR module.",
      hsr_referral_title: "Referral & documentation",
      hsr_referral_specify:
        "When referring the patient to a drug allergy specialist, always specify the used contrast medium.",
      hsr_referral_document:
        "Detailed documentation of the culprit contrast agent and the severity of the reaction, including a grading scheme, is mandatory.",
'''

st = replace_once(
    st,
    '''      flow_step1: "Step 1 — Clinical situation",
      flow_step2: "Step 2 — Prior reaction severity",
''',
    EN_KEYS,
    "en_keys",
)

m = None
for match in re.finditer(r'      flow_step1: "[^"]+",\n      flow_step2: "[^"]+",\n', st):
    if "Step 1" not in match.group(0):
        m = match
        break
if not m:
    raise SystemExit("DE flow_step not found")
de_pair = m.group(0)
DE_KEYS = de_pair + '''
      flow_routing_note:
        "Didaktische Orientierung bei früheren unmittelbaren Hypersensitivitätsreaktionen. Bei nicht unmittelbaren Reaktionen das NIHR-Modul verwenden.",
      hsr_referral_title: "Überweisung & Dokumentation",
      hsr_referral_specify:
        "Bei einer Überweisung an eine Fachperson für Arzneimittelallergien immer das verwendete Kontrastmittel angeben.",
      hsr_referral_document:
        "Eine detaillierte Dokumentation des auslösenden Kontrastmittels und des Schweregrads der Reaktion einschließlich eines Graduierungsschemas ist verpflichtend.",
'''
st = replace_once(st, de_pair, DE_KEYS, "de_keys")

ht = replace_once(
    ht,
    '          Use this module for previous delayed / non-immediate skin reactions after contrast media when re-administration is being considered. Screen for danger signs suggesting SCAR and follow the ESUR prevention pathway.',
    '          For a previous non-immediate hypersensitivity reaction to an iodine-based contrast medium or a gadolinium-based contrast agent when re-administration is being considered.',
    "html_nihr_sub",
)
ht = replace_once(
    ht,
    '<strong data-i18n="disclaimer_line1">Educational tool based on ESUR CMSC guidance (2025).</strong>',
    '<strong data-i18n="disclaimer_line1">Educational tool. Follow local protocols.</strong>',
    "html_disc1",
)
ht = replace_once(
    ht,
    '<span data-i18n="disclaimer_line2">Information only. Does not replace clinical judgement or local protocols. No patient data stored.</span>',
    '<span data-i18n="disclaimer_line2">Information only. Clinical decisions should follow local protocols, source documents and clinical judgement. No patient data are stored.</span>',
    "html_disc2",
)
ht = replace_once(
    ht,
    'data-i18n="acute_pattern_moderate_urticaria" hidden>Generalised urticaria / diffuse erythema</button>',
    'data-i18n="acute_pattern_moderate_urticaria" hidden>Diffuse urticaria / diffuse erythema</button>',
    "html_urt",
)
ht = replace_once(
    ht,
    'data-i18n="acute_pattern_moderate_angioedema" hidden>Facial / angioedema</button>',
    'data-i18n="acute_pattern_moderate_angioedema" hidden>Facial edema without stridor</button>',
    "html_angio",
)
ht = replace_once(
    ht,
    'data-i18n="acute_pattern_severe_anaphylaxis" hidden>Anaphylaxis</button>',
    'data-i18n="acute_pattern_severe_anaphylaxis" hidden>Anaphylactic reaction or stridor</button>',
    "html_sev",
)
ht = replace_once(
    ht,
    'data-i18n="flow_step1">Step 1 — Situation</div>',
    'data-i18n="flow_step1">Step 1 — Clinical situation</div>',
    "html_step1",
)

ht = replace_once(
    ht,
    '    <section class="subview" id="hsr-tab-guidance">\n',
    '''    <section class="subview" id="hsr-tab-guidance">
      <div class="card card--subtle">
        <div class="output hint" data-i18n="flow_routing_note">Educational support for prior immediate hypersensitivity reactions. For non-immediate reactions, use the NIHR module.</div>
      </div>
''',
    "html_routing",
)

ht = replace_once(
    ht,
    '''      <div class="card card--subtle">
        <div class="card__title" data-i18n="safety_net">Safety net</div>''',
    '''      <div class="card card--subtle">
        <div class="card__title" data-i18n="hsr_referral_title">Referral & documentation</div>
        <div class="output">
          <ul>
            <li data-i18n="hsr_referral_specify">When referring the patient to a drug allergy specialist, always specify the used contrast medium.</li>
            <li data-i18n="hsr_referral_document">Detailed documentation of the culprit contrast agent and the severity of the reaction, including a grading scheme, is mandatory.</li>
          </ul>
        </div>
      </div>

      <div class="card card--subtle">
        <div class="card__title" data-i18n="safety_net">Safety net</div>''',
    "html_ref_prev",
)

ht = replace_once(
    ht,
    '''        <div class="output hint" data-i18n="nihr_subtitle">
          For a previous non-immediate hypersensitivity reaction to an iodine-based contrast medium or a gadolinium-based contrast agent when re-administration is being considered.
        </div>
      </div>
''',
    '''        <div class="output hint" data-i18n="nihr_subtitle">
          For a previous non-immediate hypersensitivity reaction to an iodine-based contrast medium or a gadolinium-based contrast agent when re-administration is being considered.
        </div>
      </div>

      <div class="card card--subtle">
        <div class="card__title" data-i18n="hsr_referral_title">Referral & documentation</div>
        <div class="output">
          <ul>
            <li data-i18n="hsr_referral_specify">When referring the patient to a drug allergy specialist, always specify the used contrast medium.</li>
            <li data-i18n="hsr_referral_document">Detailed documentation of the culprit contrast agent and the severity of the reaction, including a grading scheme, is mandatory.</li>
          </ul>
        </div>
      </div>
''',
    "html_ref_nihr",
)

if "threshold = (1.2 * baseline) + 2" not in st:
    raise SystemExit("formula lost")
if "significant = acute >= threshold" not in st:
    raise SystemExit("threshold compare lost")
if "keep patient in prone" in st:
    raise SystemExit("prone leaked")
if "beachten.." in st:
    raise SystemExit("typo remains")

Path("script.js").write_text(st, encoding="utf-8")
Path("index.html").write_text(ht, encoding="utf-8")
print("HSR_GLOBAL_QA_01 applied", Path("script.js").stat().st_size, Path("index.html").stat().st_size)

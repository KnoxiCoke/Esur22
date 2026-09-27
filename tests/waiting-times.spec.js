// Exact waiting_times Medical Lock supplied for baseline 3a71ead10f4264b5f019b1150fb8a52a5df228fa.
// Fixed expectations come from the approved Lock, not the application's dataset.
const { test, expect, openApp, setLang } = require("./helpers/ui");

const locked = {
  en: {
    summary: "The 2018 guideline already provided separate rules for same-day iodine- plus gadolinium-based contrast administration, two iodine-based contrast administrations, and two gadolinium-based contrast administrations. The 2025 booklet brings these topics together in one waiting-times section and changes examination order, renal-function categories, intervals, emergency handling, and dialysis distinctions.",
    compare: {
      sections: [
        [
          "2018",
          "Version 10.0 already contained numerical waiting-time rules for all three scenarios and an examination-order rule for same-day iodine- plus gadolinium-based contrast administration."
        ],
        [
          "2025",
          "The 2025 booklet continues to address the three scenarios separately, but changes renal-function categories and intervals, changes the examination-order rule for the mixed scenario, adds scenario-specific emergency guidance, and refines dialysis distinctions for repeated same-class administrations."
        ]
      ],
      scenarios: [
        [
          "Mixed MRI + CT/(coronary) angiography",
          "2018",
          "GFR >30 mL/min/1.73 m²: there should be 4 h between iodine- and gadolinium-based contrast injections.",
          "GFR <30 mL/min/1.73 m² or dialysis: there should be 7 days between injections.",
          "For abdominal examinations, contrast-enhanced CT should be performed before contrast-enhanced MR.",
          "For chest and brain examinations, either CT or MR may be performed first.",
          "2025",
          "Elective same-day combination: it is better to start with MRI, unless the CT is intended for the kidneys, ureters, or bladder (CT urography).",
          "eGFR >60 mL/min/1.73 m²: consider a waiting time of optimally 6 h and minimally 2 h.",
          "eGFR 30–60 mL/min/1.73 m²: consider a waiting time of optimally 48 h and minimally 16 h.",
          "eGFR <30 mL/min/1.73 m²: consider a waiting time of optimally 7 days (168 h) and minimally 2.5 days (60 h).",
          "In emergency or life-threatening situations, use no waiting time and perform the examinations back-to-back.",
          "Change",
          "Compared with 2018, the 2025 mixed-scenario guidance changes the examination-order rule, splits the renal-function categories, introduces optimal/minimum intervals, and adds an explicit emergency rule."
        ],
        [
          "Two iodine-based contrast administrations",
          "2018",
          "GFR >30 mL/min/1.73 m²: there should be 4 h between administrations.",
          "GFR <30 mL/min/1.73 m²: there should be 48 h between administrations.",
          "For patients on dialysis with remnant renal function, there should be at least 48 h between administrations.",
          "2025",
          "GFR >60 mL/min/1.73 m²: consider a waiting time of optimally 12 h and minimally 4 h.",
          "GFR 30–60 mL/min/1.73 m²: consider a waiting time of optimally 48 h and minimally 16 h.",
          "GFR <30 mL/min/1.73 m², including (pre)dialysis patients with remnant renal function: consider a waiting time of optimally 7 days (168 h) and minimally 2.5 days (60 h).",
          "For patients on dialysis with no remnant renal function, consider a waiting time of at least 3 dialysis sessions between successive administrations.",
          "In emergency or life-threatening situations, use a shorter waiting time between successive iodine-based contrast administrations.",
          "Change",
          "Compared with 2018, the 2025 guidance splits the renal-function categories, introduces optimal/minimum intervals, adds a rule for dialysis without remnant renal function, and adds emergency guidance to use a shorter waiting time."
        ],
        [
          "Two gadolinium-based contrast administrations",
          "2018",
          "GFR >30 mL/min/1.73 m²: there should be 4 h between administrations.",
          "GFR <30 mL/min/1.73 m² or dialysis: there should be 7 days between administrations.",
          "2025",
          "Without known renal impairment: consider a waiting time of optimally 12 h and minimally 4 h.",
          "Moderate renal impairment (if available: eGFR 30–60 mL/min/1.73 m²): consider a waiting time of optimally 48 h and minimally 16 h.",
          "Severe renal impairment and (pre)dialysis with remnant renal function, eGFR <30 mL/min/1.73 m²: consider a waiting time of optimally 7 days (168 h) and minimally 2.5 days (60 h).",
          "For patients on dialysis with no remnant renal function, consider a waiting time of at least 3 dialysis sessions between successive administrations.",
          "In emergency or life-threatening situations, use a shorter waiting time between successive gadolinium-based contrast administrations.",
          "Change",
          "Compared with 2018, the 2025 guidance separates renal-function groups more finely, introduces optimal/minimum intervals, separates dialysis by remnant renal function, and adds emergency guidance to use a shorter waiting time."
        ]
      ],
      refs: [
        "Source: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), B.6, printed p. 24 (PDF p. 25)",
        "Source: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), B.7–B.8, printed p. 25 (PDF p. 26)",
        "Source: ESUR Contrast Media Safety Committee Guidelines 2025, “Safe time intervals between contrast agent injections”, printed pp. 21–23"
      ]
    },
    action: {
      sections: [
        [
          "How to read the 2025 intervals",
          "The 2025 elective rules use “consider a waiting time”. For each renal-function group, the source provides an optimal interval with a near-complete-clearance rationale and a minimum interval when the clinical indication requires rapid follow-up."
        ],
        [
          "Publication note",
          "In the repeated-GBCA subsection, the 2025 booklet unexpectedly refers to near-complete clearance of previously administered iodine-based contrast medium. This is retained as a source anomaly and is not used to alter the interval values."
        ]
      ],
      scenarios: [
        [
          "Elective same-day MRI + CT/(coronary) angiography",
          "ESUR 2025 action points",
          "It is better to start with MRI, unless the CT is intended for the kidneys, ureters, or bladder (CT urography).",
          "eGFR >60 mL/min/1.73 m²: consider a waiting time of optimally 6 h and minimally 2 h.",
          "eGFR 30–60 mL/min/1.73 m²: consider a waiting time of optimally 48 h and minimally 16 h.",
          "eGFR <30 mL/min/1.73 m²: consider a waiting time of optimally 7 days (168 h) and minimally 2.5 days (60 h).",
          "In emergency or life-threatening situations, use no waiting time and perform the examinations back-to-back."
        ],
        [
          "Two iodine-based contrast administrations — routine examinations",
          "ESUR 2025 action points",
          "GFR >60 mL/min/1.73 m²: consider a waiting time of optimally 12 h and minimally 4 h.",
          "GFR 30–60 mL/min/1.73 m²: consider a waiting time of optimally 48 h and minimally 16 h.",
          "GFR <30 mL/min/1.73 m², including (pre)dialysis patients with remnant renal function: consider a waiting time of optimally 7 days (168 h) and minimally 2.5 days (60 h).",
          "For patients on dialysis with no remnant renal function, consider a waiting time of at least 3 dialysis sessions between successive administrations.",
          "In emergency or life-threatening situations, use a shorter waiting time between successive iodine-based contrast administrations."
        ],
        [
          "Two gadolinium-based contrast administrations — routine examinations",
          "ESUR 2025 action points",
          "Without known renal impairment: consider a waiting time of optimally 12 h and minimally 4 h.",
          "Moderate renal impairment (if available: eGFR 30–60 mL/min/1.73 m²): consider a waiting time of optimally 48 h and minimally 16 h.",
          "Severe renal impairment and (pre)dialysis with remnant renal function, eGFR <30 mL/min/1.73 m²: consider a waiting time of optimally 7 days (168 h) and minimally 2.5 days (60 h).",
          "For patients on dialysis with no remnant renal function, consider a waiting time of at least 3 dialysis sessions between successive administrations.",
          "In emergency or life-threatening situations, use a shorter waiting time between successive gadolinium-based contrast administrations."
        ]
      ],
      refs: [
        "Source: ESUR Contrast Media Safety Committee Guidelines 2025, “Safe time intervals between contrast agent injections”, printed pp. 21–23",
        "Source: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), B.6–B.8, printed pp. 24–25"
      ]
    }
  },
  de: {
    summary: "Die ESUR-Version 10.0 von 2018 enthielt bereits getrennte Regeln für iod- und gadoliniumhaltige Kontrastmittel am selben Tag, zwei iodhaltige Kontrastmittelgaben und zwei gadoliniumhaltige Kontrastmittelgaben. Das 2025-Booklet bündelt diese Themen in einer Wartezeiten-Sektion und ändert Untersuchungsreihenfolge, Nierenfunktionsgruppen, Intervalle, Notfallregeln und Dialyseuntergruppen.",
    compare: {
      sections: [
        [
          "2018",
          "Version 10.0 enthielt bereits numerische Wartezeitregeln für alle drei Szenarien und eine Regel zur Untersuchungsreihenfolge bei iod- und gadoliniumhaltigen Kontrastmitteln am selben Tag."
        ],
        [
          "2025",
          "Das 2025-Booklet behandelt die drei Szenarien weiterhin getrennt, ändert jedoch Nierenfunktionsgruppen und Intervalle, ändert die Reihenfolgeregel im gemischten Szenario, ergänzt szenariospezifische Notfallregeln und differenziert Dialyse bei wiederholten Gaben derselben Kontrastmittelklasse nach Restnierenfunktion."
        ]
      ],
      scenarios: [
        [
          "Gemischte MRT + CT/(koronare) Angiographie",
          "2018",
          "GFR >30 ml/min/1,73 m²: Zwischen iod- und gadoliniumhaltigen Kontrastmittelgaben sollten 4 Stunden liegen.",
          "GFR <30 ml/min/1,73 m² oder Dialysepflicht: Zwischen den Gaben sollte ein Abstand von 7 Tagen liegen.",
          "Bei Abdomenuntersuchungen sollte die kontrastmittelgestützte CT vor der kontrastmittelgestützten MRT erfolgen.",
          "Bei Thorax- und Gehirnuntersuchungen kann CT oder MRT zuerst durchgeführt werden.",
          "2025",
          "Elektive Kombination am selben Tag: Es ist besser, mit der MRT zu beginnen, außer wenn die CT für Nieren, Ureteren oder Harnblase als CT-Urographie vorgesehen ist.",
          "eGFR >60 ml/min/1,73 m²: Eine Wartezeit von optimal 6 h und minimal 2 h erwägen.",
          "eGFR 30–60 ml/min/1,73 m²: Eine Wartezeit von optimal 48 h und minimal 16 h erwägen.",
          "eGFR <30 ml/min/1,73 m²: Eine Wartezeit von optimal 7 Tagen (168 h) und minimal 2,5 Tagen (60 h) erwägen.",
          "Bei Notfall oder lebensbedrohlicher Situation keine Wartezeit einhalten und die Untersuchungen unmittelbar nacheinander durchführen.",
          "Änderung",
          "Gegenüber 2018 ändert die 2025-Regel für das gemischte Szenario die Untersuchungsreihenfolge, unterteilt die Nierenfunktionsgruppen neu, führt Optimal-/Minimum-Intervalle ein und ergänzt eine ausdrückliche Notfallregel."
        ],
        [
          "Zwei iodhaltige Kontrastmittelgaben",
          "2018",
          "GFR >30 ml/min/1,73 m²: Zwischen den Gaben sollten 4 Stunden liegen.",
          "GFR <30 ml/min/1,73 m²: Zwischen den Gaben sollte ein Abstand von 48 Stunden liegen.",
          "Bei Dialysepatienten mit Restdiurese sollte zwischen den Gaben ein Abstand von mindestens 48 Stunden liegen.",
          "2025",
          "GFR >60 ml/min/1,73 m²: Eine Wartezeit von optimal 12 h und minimal 4 h erwägen.",
          "GFR 30–60 ml/min/1,73 m²: Eine Wartezeit von optimal 48 h und minimal 16 h erwägen.",
          "GFR <30 ml/min/1,73 m², einschließlich (Prä-)Dialyse mit Restnierenfunktion: Eine Wartezeit von optimal 7 Tagen (168 h) und minimal 2,5 Tagen (60 h) erwägen.",
          "Bei Dialyse ohne Restnierenfunktion einen Abstand von mindestens 3 Dialysesitzungen zwischen aufeinanderfolgenden Gaben erwägen.",
          "Bei Notfall oder lebensbedrohlicher Situation eine kürzere Wartezeit zwischen aufeinanderfolgenden iodhaltigen Kontrastmittelgaben verwenden.",
          "Änderung",
          "Gegenüber 2018 unterteilt die 2025-Regel die Nierenfunktionsgruppen neu, führt Optimal-/Minimum-Intervalle ein, ergänzt eine Regel für Dialyse ohne Restnierenfunktion und ergänzt die Notfallregel einer kürzeren Wartezeit."
        ],
        [
          "Zwei gadoliniumhaltige Kontrastmittelgaben",
          "2018",
          "GFR >30 ml/min/1,73 m²: Zwischen den Gaben sollten 4 Stunden liegen.",
          "GFR <30 ml/min/1,73 m² oder Dialyse: Zwischen den Gaben sollte ein Abstand von 7 Tagen liegen.",
          "2025",
          "Ohne bekannte Niereninsuffizienz: Eine Wartezeit von optimal 12 h und minimal 4 h erwägen.",
          "Moderate Nierenfunktionseinschränkung (falls verfügbar: eGFR 30–60 ml/min/1,73 m²): Eine Wartezeit von optimal 48 h und minimal 16 h erwägen.",
          "Schwere Nierenfunktionseinschränkung und (Prä-)Dialyse mit Restnierenfunktion, eGFR <30 ml/min/1,73 m²: Eine Wartezeit von optimal 7 Tagen (168 h) und minimal 2,5 Tagen (60 h) erwägen.",
          "Bei Dialyse ohne Restnierenfunktion einen Abstand von mindestens 3 Dialysesitzungen zwischen aufeinanderfolgenden Gaben erwägen.",
          "Bei Notfall oder lebensbedrohlicher Situation eine kürzere Wartezeit zwischen aufeinanderfolgenden gadoliniumhaltigen Kontrastmittelgaben verwenden.",
          "Änderung",
          "Gegenüber 2018 differenziert die 2025-Regel die Nierenfunktionsgruppen stärker, führt Optimal-/Minimum-Intervalle ein, unterscheidet Dialyse nach Restnierenfunktion und ergänzt die Notfallregel einer kürzeren Wartezeit."
        ]
      ],
      refs: [
        "Primärquelle: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), B.6, gedruckte S. 24 (PDF-S. 25)",
        "Primärquelle: ESUR Guidelines on Contrast Agents, Version 10.0 (2018), B.7–B.8, gedruckte S. 25 (PDF-S. 26)",
        "Offizielle deutsche Fassung: ESUR Leitlinien für Kontrastmittel, Version 10.0 (2018), B.6–B.8, gedruckte S. 34–35 (PDF-S. 18)",
        "Quelle: ESUR Contrast Media Safety Committee Guidelines 2025, „Safe time intervals between contrast agent injections“, gedruckte S. 21–23"
      ]
    },
    action: {
      sections: [
        [
          "Bedeutung der 2025-Intervalle",
          "Bei den elektiven Regeln verwendet die 2025-Quelle die Empfehlungsstärke „consider a waiting time“ – eine Wartezeit soll erwogen werden. Für jede Nierenfunktionsgruppe nennt die Quelle ein optimales Intervall mit einer Begründung über annähernd vollständige Clearance und ein minimales Intervall, wenn die klinische Indikation eine rasche Folgeuntersuchung erfordert."
        ],
        [
          "Publikationshinweis",
          "Im Abschnitt über zwei GBCA-Gaben verweist das 2025-Booklet bei der Begründung des optimalen Intervalls unerwartet auf die annähernd vollständige Clearance eines zuvor gegebenen iodhaltigen Kontrastmittels. Dies wird als Quellenanomalie dokumentiert und nicht zur Änderung der Intervallwerte verwendet."
        ]
      ],
      scenarios: [
        [
          "Elektive Kombination am selben Tag: MRT + CT/(koronare) Angiographie",
          "ESUR-2025-Kernaussagen",
          "Es ist besser, mit der MRT zu beginnen, außer wenn die CT für Nieren, Ureteren oder Harnblase als CT-Urographie vorgesehen ist.",
          "eGFR >60 ml/min/1,73 m²: Eine Wartezeit von optimal 6 h und minimal 2 h erwägen.",
          "eGFR 30–60 ml/min/1,73 m²: Eine Wartezeit von optimal 48 h und minimal 16 h erwägen.",
          "eGFR <30 ml/min/1,73 m²: Eine Wartezeit von optimal 7 Tagen (168 h) und minimal 2,5 Tagen (60 h) erwägen.",
          "Bei Notfall oder lebensbedrohlicher Situation keine Wartezeit einhalten und die Untersuchungen unmittelbar nacheinander durchführen."
        ],
        [
          "Zwei iodhaltige Kontrastmittelgaben — Routineuntersuchungen",
          "ESUR-2025-Kernaussagen",
          "GFR >60 ml/min/1,73 m²: Eine Wartezeit von optimal 12 h und minimal 4 h erwägen.",
          "GFR 30–60 ml/min/1,73 m²: Eine Wartezeit von optimal 48 h und minimal 16 h erwägen.",
          "GFR <30 ml/min/1,73 m², einschließlich (Prä-)Dialyse mit Restnierenfunktion: Eine Wartezeit von optimal 7 Tagen (168 h) und minimal 2,5 Tagen (60 h) erwägen.",
          "Bei Dialyse ohne Restnierenfunktion einen Abstand von mindestens 3 Dialysesitzungen zwischen aufeinanderfolgenden Gaben erwägen.",
          "Bei Notfall oder lebensbedrohlicher Situation eine kürzere Wartezeit zwischen aufeinanderfolgenden iodhaltigen Kontrastmittelgaben verwenden."
        ],
        [
          "Zwei gadoliniumhaltige Kontrastmittelgaben — Routineuntersuchungen",
          "ESUR-2025-Kernaussagen",
          "Ohne bekannte Niereninsuffizienz: Eine Wartezeit von optimal 12 h und minimal 4 h erwägen.",
          "Moderate Nierenfunktionseinschränkung (falls verfügbar: eGFR 30–60 ml/min/1,73 m²): Eine Wartezeit von optimal 48 h und minimal 16 h erwägen.",
          "Schwere Nierenfunktionseinschränkung und (Prä-)Dialyse mit Restnierenfunktion, eGFR <30 ml/min/1,73 m²: Eine Wartezeit von optimal 7 Tagen (168 h) und minimal 2,5 Tagen (60 h) erwägen.",
          "Bei Dialyse ohne Restnierenfunktion einen Abstand von mindestens 3 Dialysesitzungen zwischen aufeinanderfolgenden Gaben erwägen.",
          "Bei Notfall oder lebensbedrohlicher Situation eine kürzere Wartezeit zwischen aufeinanderfolgenden gadoliniumhaltigen Kontrastmittelgaben verwenden."
        ]
      ],
      refs: [
        "Quelle: ESUR Contrast Media Safety Committee Guidelines 2025, „Safe time intervals between contrast agent injections“, gedruckte S. 21–23",
        "Primärquelle 2018: ESUR Guidelines on Contrast Agents, Version 10.0, B.6–B.8, gedruckte S. 24–25",
        "Offizielle deutsche Fassung 2018: ESUR Leitlinien für Kontrastmittel, Version 10.0, B.6–B.8, gedruckte S. 34–35"
      ]
    }
  }
};

const contentSelector = ".change-section__label, .change-section__content p, .change-section__content li";

async function expectExactVisibleText(container, selector, expected) {
  const nodes = container.locator(selector);
  await expect.poll(() => nodes.allTextContents()).toEqual(expected);
  for (const node of await nodes.all()) await expect(node).toBeVisible();
}

for (const lang of ["en", "de"]) {
  for (const mode of ["compare", "action"]) {
    test(`WAITING_LOCK ${lang} ${mode}: exact content, sources and three reachable scenarios`, async ({ page }) => {
      await openApp(page);
      await setLang(page, lang);
      await page.locator('[data-main-nav="changes"]').click();
      await page.locator(`[data-change-mode="${mode}"]`).click();
      const card = page.locator('[data-change-card="waiting_times"]');

      // The existing summary is searchable; it is not rendered in the card body.
      await page.locator("#changesSearch").fill(locked[lang].summary);
      await expect(card).toBeVisible();
      await page.locator("#changesSearch").fill("");
      await card.locator('[data-change-toggle="waiting_times"]').click();
      const body = card.locator(".change-card__body");
      await expect(body).toBeVisible();
      const expected = locked[lang][mode];
      const sections = body.locator(":scope > .change-section");
      await expect(sections).toHaveCount(expected.sections.length);
      for (let i = 0; i < expected.sections.length; i++) {
        await expectExactVisibleText(sections.nth(i), contentSelector, expected.sections[i]);
      }
      const scenarios = body.locator(".change-nested__item");
      await expect(scenarios).toHaveCount(3);
      for (let i = 0; i < 3; i++) {
        await expectExactVisibleText(scenarios.nth(i), ".change-nested__title, " + contentSelector, expected.scenarios[i]);
      }
      await expectExactVisibleText(body, ".change-ref", expected.refs);
    });
  }
}

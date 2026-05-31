import type { Note } from '../data/notes'

export const lipidsStatins: Note = {
  id: 'lipids-statins',
  title: 'Lipids, Statins & Cardiovascular Prevention',
  subtitle: 'QRISK3, primary and secondary prevention, statin choice, muscle intolerance, ezetimibe, PCSK9 inhibitors and post-MI care',
  tags: ['cardiology', 'metabolic'],

  body: 'cholesterol lipids statins QRISK3 primary prevention secondary prevention atorvastatin rosuvastatin simvastatin ezetimibe bempedoic acid PCSK9 inhibitors evolocumab inclisiran fibrates non-HDL LDL HDL triglycerides myalgia rhabdomyolysis CK cardiovascular risk familial hypercholesterolaemia secondary prevention post-MI post-stroke antiplatelet clopidogrel aspirin prasugrel ticagrelor cardiac rehabilitation Mediterranean diet',

  content: [

    { type: 'heading', level: 2, text: 'Who to Treat — QRISK3 and Risk Assessment' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Statin Prescribing Decision Guide',
      items: [
        'Secondary prevention (established CVD — previous MI, stroke/TIA, PVD, coronary revascularisation): atorvastatin 80 mg regardless of baseline lipids — prescribe immediately',
        'CKD (eGFR <60 or proteinuria): atorvastatin 20 mg regardless of QRISK3 — renal protection and CV prevention',
        'Type 1 DM: atorvastatin 20 mg if age >40, or if DM >10 years duration, or if renal/CV risk factors present',
        'Type 2 DM: calculate QRISK3 (includes T2DM — risk is higher); atorvastatin 10 mg if DM alone; 20 mg if QRISK3 ≥10%',
        'Age >85: do NOT use QRISK3 (model not validated); clinical judgement — discuss benefits vs polypharmacy; do not deny statins to older adults on age alone if they have established CVD',
        'All others aged >25 with raised cholesterol: calculate QRISK3 — if ≥10%: offer lifestyle advice AND statin (atorvastatin 20 mg first-line for primary prevention); if <10%: lifestyle advice; consider statin if strong family history or patient preference',
      ],
    },

    { type: 'heading', level: 2, text: 'Lipid Targets' },

    {
      type: 'table',
      headers: ['Scenario', 'Target', 'Notes'],
      rows: [
        ['Primary prevention', '≥40% reduction in non-HDL cholesterol (or LDL <3 mmol/L)', 'Recheck lipids at 3 months then 12 months; if <40% reduction, check adherence and consider increasing dose or switching'],
        ['Secondary prevention (CVD)', 'Non-HDL <2.5 mmol/L (LDL <1.8 mmol/L); or ≥40% reduction if above target not achievable', 'Atorvastatin 80 mg first-line; if not reaching target, add ezetimibe; if still not: PCSK9 inhibitor (refer lipid clinic)'],
        ['Triglycerides', '<2.3 mmol/L: reassure and lifestyle; 2.3–10: lifestyle + treat secondary causes; >10 mmol/L: risk of acute pancreatitis — fibrate or nicotinic acid; refer lipid clinic', 'Secondary causes: poorly controlled DM, alcohol excess, hypothyroidism, drugs (thiazides, beta-blockers, steroids, isotretinoin, antipsychotics)'],
        ['HDL', 'HDL <1.0 (men) / <1.2 (women): low HDL increases CV risk independently; lifestyle (exercise, stop smoking, reduce alcohol, lose weight); no drug licensed to raise HDL in UK', ''],
      ],
    },

    { type: 'heading', level: 2, text: 'Monitoring Statins' },

    {
      type: 'list',
      items: [
        'Baseline bloods before starting: LFT (exclude liver disease), fasting lipid profile, HbA1c (statins mildly increase DM risk — baseline); TFTs if suspected hypothyroidism',
        'Recheck: lipids and LFT at 3 months; if on target and LFT normal, repeat lipids at 12 months; no routine LFT monitoring needed beyond 12 months unless symptomatic',
        'Withhold/stop: ALT >3× ULN (stop, investigate, rechallenge when normalised)',
        'Statins and DM: small increased risk of developing T2DM (~10% relative increase); benefits (CV protection) massively outweigh this risk; do not stop statin because of DM — treat both',
        'Counsel all patients: most people tolerate statins well; some get mild myalgia (muscle aches); rarely severe rhabdomyolysis; encourage reporting of muscle symptoms',
      ],
    },

    { type: 'heading', level: 2, text: 'Statin Intolerance — Practical Approach' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Statin Intolerance — Avoid Premature Labelling',
      items: [
        'Statins are the most effective lipid-lowering treatment — avoid labelling patients as "intolerant" without a systematic approach; many myalgias resolve with dose change or different statin',
        'Check CK first: if CK >10× ULN or severe symptoms → STOP; refer if poor renal function (rhabdomyolysis); if CK <4× ULN and symptoms tolerable → continue and monitor',
        'De-challenge / rechallenge: stop statin for 4–6 weeks until symptoms resolve and CK normalises; then rechallenge with the SAME or DIFFERENT statin — if symptoms return only with statin, true intolerance confirmed; if no symptoms on rechallenge, was likely coincidental',
        'Switch statin: rosuvastatin or pravastatin may be better tolerated (more hydrophilic, fewer muscle effects); both have long half-lives so can be used every other day (alternate day dosing) to reduce myalgia whilst maintaining some lipid lowering',
        'If genuinely unable to tolerate any statin: ezetimibe 10 mg + bempedoic acid 180 mg (Nustendi — combined pill) — non-statin combination with meaningful LDL reduction; no muscle effects',
        'Refer to lipid clinic if: cannot tolerate ≥2 different statins, secondary prevention with high risk and lipids not controlled, suspected familial hypercholesterolaemia, for PCSK9 inhibitor initiation',
        'Risk factors for myalgia: older age, female, low BMI/frailty, hypothyroidism (always check TFTs), renal impairment, heavy alcohol use, drug interactions (ciclosporin, clarithromycin, amiodarone, verapamil, diltiazem)',
      ],
    },

    { type: 'heading', level: 2, text: 'Additional Lipid-Lowering Agents' },

    {
      type: 'table',
      headers: ['Drug', 'Mechanism', 'Use / Notes'],
      rows: [
        ['Ezetimibe 10 mg', 'Inhibits NPC1L1 in gut — blocks cholesterol absorption; reduces LDL ~20%', 'Add to statin if target not reached; or monotherapy if statin intolerant; well tolerated; Inegy = ezetimibe + simvastatin combined tablet'],
        ['Bempedoic acid 180 mg', 'Inhibits ATP-citrate lyase — reduces hepatic cholesterol synthesis (similar pathway to statins but prodrug activated only in liver — no muscle activation); reduces LDL ~18%', 'No muscle side effects; used alone or with ezetimibe (Nustendi); suitable for statin-intolerant patients'],
        ['PCSK9 inhibitors (evolocumab — Repatha; inclisiran — Leqvio; alirocumab — Praluent)', 'Block PCSK9 — prevents LDL receptor degradation → more LDL uptake from blood; dramatically reduce LDL by 50–60%', 'Evolocumab / alirocumab: SC injections every 2–4 weeks; inclisiran: SC injection twice yearly (GP can administer after specialist initiation); NICE approved for FH and secondary prevention not at target on max statin ± ezetimibe; refer lipid clinic for initiation'],
        ['Fibrates (fenofibrate, bezafibrate)', 'Reduce triglycerides by 30–50%; modest HDL increase; minimal LDL effect', 'Use for severe hypertriglyceridaemia (>10 mmol/L, pancreatitis risk); combination with statin increases myopathy risk — use only if compelling indication and caution; fenofibrate commonly combined with statin (lower risk than gemfibrozil)'],
        ['Omega-3 fatty acids (icosapentaenoic acid — Vascepa, licensed in US; Omacor UK)', 'High-dose EPA reduces CV events (REDUCE-IT trial); lower doses mainly reduce triglycerides', 'Omacor 4 g/day for severe hypertriglyceridaemia (NHS England criteria); over-the-counter omega-3 supplements at low doses have no proven CV benefit'],
      ],
    },

    { type: 'heading', level: 2, text: 'Secondary Prevention — Post-MI and Post-Stroke Care' },

    {
      type: 'list',
      items: [
        'Post-MI antiplatelet: dual antiplatelet therapy (DAPT) for 12 months — if PCI with stent: prasugrel (preferred) or ticagrelor; if no PCI: ticagrelor or clopidogrel; then aspirin 75 mg lifelong after DAPT stops',
        'Post-stroke/TIA (non-cardioembolic): clopidogrel 75 mg lifelong (preferred over aspirin monotherapy per NICE); if AF: DOAC instead of antiplatelet; caution with omeprazole/esomeprazole (CYP2C19 inhibition reduces clopidogrel efficacy — use lansoprazole or pantoprazole instead)',
        'Post-MI "cocktail": atorvastatin 80 mg; ACE inhibitor or ARB (all post-MI; especially if LVEF <40%); beta-blocker; spironolactone/eplerenone (MRA) if LVEF <35% and symptomatic HF; consider ICD if LVEF <35% after 40 days',
        'Lifestyle: Mediterranean diet (oily fish, vegetables, fruit, nuts, olive oil — reduces CV mortality by 25%); aerobic exercise 20–30 mins/day; cardiac rehabilitation (refer within 10 days of discharge — reduces CV mortality by 25%); stop smoking; limit alcohol; reduce stress',
        'Return to activities: driving — 1 month after MI (DVLA Group 1); 6 weeks if PCI; 4 weeks for Group 2 licence — check DVLA guidance; sex after 1 month; PDE5 inhibitors (sildenafil/tadalafil) after 6 months (not with nitrates — severe hypotension)',
        'Lifestyle — what does NOT help: omega-3 supplementation (low dose); vitamins C/E; antioxidants; routine aspirin for primary prevention in non-diabetic patients (bleeding risk outweighs benefit)',
      ],
    },

    { type: 'heading', level: 2, text: 'Lifestyle Advice for Dyslipidaemia' },

    {
      type: 'list',
      items: [
        'Cardioprotective diet: reduce saturated fats (replace with unsaturated — olive oil, oily fish, nuts, avocado); reduce processed foods, refined carbohydrates, added sugar; increase fibre (oats, pulses, fruit, vegetables)',
        'Oily fish: 2 portions/week (salmon, mackerel, sardines, herring) — omega-3 content; reduces triglycerides',
        'Plant sterols/stanols: 2 g/day reduces LDL by ~10% — add-on to diet (fortified foods: Flora Pro-activ, Benecol yogurts); not a replacement for statins',
        'Exercise: 150 min/week moderate aerobic activity; raises HDL, lowers triglycerides, improves insulin sensitivity',
        'Alcohol: raises triglycerides and BP; limit to ≤14 units/week; avoid binge drinking',
        'Stop smoking: raises LDL, lowers HDL; cessation improves lipid profile',
      ],
    },

  ],
}

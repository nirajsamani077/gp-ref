import type { Note } from '../data/notes'

export const asthmaAdult: Note = {
  id: 'asthmaAdult',
  title: 'Asthma Management — Adults & Young People (≥12)',
  subtitle: 'GINA MART stepwise approach, inhaler formulary, ICS doses, and carbon footprint',
  tags: ['Respiratory'],

  body: 'asthma adult management GINA MART SIT AIR stepwise ICS LABA LTRA montelukast preventer reliever beclometasone budesonide fluticasone formoterol salmeterol Fostair Symbicort Duoresp prednisolone rescue pack SABA salbutamol Easyhaler Turbohaler carbon footprint DPI MDI low moderate high dose atorvastatin',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Treatment aims — what does "well-controlled" asthma look like?',
      items: [
        'Daytime symptoms ≤2 days/week; no night waking; reliever use ≤2 days/week',
        'No limitation of activity; no exacerbations',
        'Poor control indicators: night waking >1×/week, using SABA ≥3×/week, issuing >3 SABAs/year or <3 ICS inhalers/year, any exacerbation needing oral steroids or admission',
        'Review every patient: check inhaler technique, adherence, and triggers at every asthma review',
        'Every patient should have a Personal Asthma Action Plan (PAAP) — see link below',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'ICS Dose Bands — Beclometasone Equivalents (Adults)',
    },
    {
      type: 'table',
      headers: ['Dose band', 'Beclometasone/day', 'Budesonide/day', 'Fluticasone prop/day', 'Clinical notes'],
      rows: [
        ['Very low', '100 mcg', '200 mcg', '100 mcg', 'SIT-AIR step 1 PRN use only'],
        ['Low', '200 mcg', '400 mcg', '200 mcg', 'Step 2 maintenance — 1 puff BD of 100 mcg beclometasone Easyhaler'],
        ['Medium', '400 mcg', '800 mcg', '400 mcg', 'Step 3 — 2 puffs BD of 100 mcg, or 1 puff BD of 200 mcg'],
        ['High', '800 mcg', '1600 mcg', '800 mcg', 'Step 4 — refer to specialist; not used in MART'],
      ],
      caption: 'Note: extra-fine particle beclometasone (QVAR, Fostair) is approximately twice as potent — 100 mcg extra-fine ≈ 200 mcg standard. When stepping down, reduce ICS by 25–50%.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'GINA Stepwise Treatment — Track 1: MART (Preferred ≥12)',
    },
    {
      type: 'table',
      headers: ['Step', 'Treatment', 'Notes'],
      rows: [
        ['Step 1', 'ICS-formoterol low dose PRN only (SIT-AIR)', 'Use same inhaler as both preventer AND reliever. Max 8 puffs/day. No separate SABA needed'],
        ['Step 2', 'ICS-formoterol low dose daily + PRN (MART). Add LTRA if needed', 'Fostair NEXThaler 100/6: 1 puff BD maintenance + 1 puff PRN. Symbicort 100/6 Turbohaler: 1 puff BD + 1 puff PRN (max 8 puffs/day total)'],
        ['Step 3', 'ICS-formoterol medium dose daily + PRN. Add LTRA if not already', 'Fostair NEXThaler 100/6: 2 puffs BD + PRN. Or Symbicort 200/6 Turbohaler: 1 puff BD + PRN'],
        ['Step 4', 'ICS-formoterol medium–high dose + PRN. Add LTRA or LAMA. Refer', 'LAMA: tiotropium 18 mcg OD or umeclidinium. Refer to respiratory/specialist asthma clinic. Consider trial montelukast 8 weeks, azithromycin on specialist advice'],
        ['Step 5', 'Specialist management: add-on biologics (anti-IgE, anti-IL5, anti-IL4/13), high dose ICS, oral steroids, bronchial thermoplasty', 'Biologics: omalizumab (anti-IgE), mepolizumab/benralizumab (anti-eosinophil), dupilumab (anti-IL4/13). Require eosinophil count, IgE, FeNO'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'MART & AIR — Which Inhalers Are Licensed, and at What Age?',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'MART vs AIR — what\'s the difference?',
      items: [
        'MART (Maintenance And Reliever Therapy): fixed maintenance dose BD + same inhaler as reliever PRN. Both controller and rescue in one device',
        'AIR (Anti-Inflammatory Reliever): no regular maintenance dose — inhaler used as reliever ONLY (PRN). Each puff delivers ICS + formoterol. Step 1 in GINA Track 1',
        'Only ICS-formoterol inhalers are licensed for MART/AIR — formoterol is fast-acting enough to use as a reliever. Salmeterol-based inhalers (e.g. Seretide) are NOT suitable',
        'On MART or AIR: remove SABA from repeat prescriptions — the MART inhaler IS the reliever',
        'Max total puffs/day: normally ≤8 (maintenance + relief combined). Up to 12 puffs/day for limited periods with medical review',
        'Using >6–8 puffs daily regularly = poor control → step up or refer',
      ],
    },
    {
      type: 'table',
      headers: ['Inhaler', 'Drug', 'Device', 'Strength', 'MART licensed?', 'AIR licensed?', 'Min age', 'Maintenance dose', 'Max/day'],
      rows: [
        ['Symbicort Turbohaler', 'Budesonide / Formoterol', 'DPI', '100/6 mcg', 'Yes', 'No', 'MART ≥6 yrs*', '1 puff BD + 1 puff PRN', '8 (12 short-term)'],
        ['Symbicort Turbohaler', 'Budesonide / Formoterol', 'DPI', '200/6 mcg', 'Yes', 'Yes (AIR ≥12)', '≥12 yrs', '1 puff BD + 1 puff PRN', '8 (12 short-term)'],
        ['Symbicort Turbohaler', 'Budesonide / Formoterol', 'DPI', '400/12 mcg', 'No', 'No', '—', 'Not for MART/AIR', '—'],
        ['Fobumix Easyhaler', 'Budesonide / Formoterol', 'DPI', '80/4.5 mcg (≡100/6)', 'Off-label', 'Off-label', '≥12 (off-label)', '1 puff BD + 1 puff PRN', '8 (12 short-term)'],
        ['Fobumix Easyhaler', 'Budesonide / Formoterol', 'DPI', '160/4.5 mcg (≡200/6)', 'Yes', 'Yes', '≥12 yrs', '1 puff BD + 1 puff PRN', '8 (12 short-term)'],
        ['DuoResp Spiromax', 'Budesonide / Formoterol', 'DPI', '160/4.5 mcg (≡200/6)', 'Yes', 'Yes', '≥12 yrs', '1 puff BD + 1 puff PRN', '8 (12 short-term)'],
        ['Fostair NEXThaler', 'BDP extra-fine / Formoterol', 'DPI', '100/6 mcg', 'Yes', 'No', '≥18 yrs', '1 puff BD + 1 puff PRN', '8'],
        ['Luforbec MDI', 'BDP extra-fine / Formoterol', 'pMDI + spacer', '100/6 mcg', 'Yes', 'No', '≥18 yrs', '1 puff BD + 1 puff PRN', '8'],
        ['Fostair MDI', 'BDP extra-fine / Formoterol', 'pMDI + spacer', '100/6 mcg', 'Yes', 'No', '≥18 yrs', '1 puff BD + 1 puff PRN', '8'],
      ],
      caption: '* Symbicort 100/6 Turbohaler is the ONLY inhaler licensed for MART in children aged 6–11 years. All other MART inhalers are ≥12 or ≥18. BDP extra-fine (Fostair/Luforbec) 100 mcg ≡ ~250 mcg standard BDP — not interchangeable by strength. Fobumix: 4-month expiry after opening foil wrapping.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Common MART prescribing pitfalls',
      items: [
        'Do NOT prescribe Symbicort 400/12 or Fostair 200/6 for MART — high dose ICS not licensed for this indication',
        'Do NOT continue SABA alongside MART — remove salbutamol from repeat. If patient insists on keeping it, document counselling',
        'BDP extra-fine (Fostair/Luforbec) potency: 100 mcg extra-fine ≠ 100 mcg standard BDP. Extra-fine ≡ ~250 mcg standard — ensure like-for-like switching is done carefully',
        'Salmeterol-based inhalers (Seretide, Relvar, AirFluSal) are NOT suitable for MART — salmeterol onset is too slow (10–20 min) to act as reliever',
        'Emergency: >6 puffs with no response → call 999. MART is not a substitute for emergency care',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'GINA Track 2: Traditional Controller + Reliever (Alternative)',
    },
    {
      type: 'list',
      items: [
        'Step 1: SABA PRN + low dose ICS whenever SABA is used (use same inhaler or separate)',
        'Step 2: Low dose ICS daily (200 mcg beclometasone) + SABA PRN. Add LTRA if needed',
        'Step 3: Low dose ICS/LABA daily + SABA PRN',
        'Step 4: Medium–high dose ICS/LABA + SABA PRN. Add LTRA or LAMA',
        'Note: MART (Track 1) preferred for better control and reduced exacerbations; Track 2 used when patient cannot use formoterol-based inhaler or <12 years',
        'NEVER use LABA or LAMA alone without ICS in asthma — risk of life-threatening exacerbation',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Preferred Inhaler Formulary (Staffordshire)',
    },
    {
      type: 'image',
      src: '/images/inhaler-identifier-chart.jpg',
      alt: 'NHS Inhaler Identifier Chart — SABA, SAMA, LABA, LAMA, ICS, ICS/LABA, triple therapy inhalers with images',
      caption: 'NHS Inhaler Identifier Chart (Bristol, North Somerset & South Gloucestershire CCG): visual guide to all inhaler types — relievers (SABA), preventers (ICS, LAMA, LABA), combination (ICS/LABA), triple therapy (ICS/LABA/LAMA). Key: MDI = metered dose inhaler, BA MDI = breath-actuated, DPI = dry powder inhaler.',
    },
    {
      type: 'table',
      headers: ['Category', 'Preferred choice (DPI)', 'Puffs & dose', 'Alternative (MDI)', 'Notes'],
      rows: [
        ['SABA (reliever)', 'Easyhaler Salbutamol 100 mcg/dose', '1–2 puffs as needed', 'Salamol MDI 100 mcg (lower carbon than Ventolin)', 'Ventolin Evohaler / Symbicort pMDI have highest carbon footprint — avoid'],
        ['ICS only — low dose', 'Easyhaler Beclometasone 200 mcg/dose — 1 puff OD or BD', '1 puff once daily = 200 mcg/day (very low); 1 puff BD = 400 mcg/day (low–medium)', 'Clenil Modulite 100 mcg — 2 puffs BD', 'Easyhaler Budesonide 100/200/400 mcg also available. Remember: 200 mcg 1 puff BD = low dose, 200 mcg 2 puffs BD = medium dose'],
        ['ICS/LABA — low dose', 'Fostair NEXThaler 100/6 mcg — 1 puff BD (maintenance) + 1 puff PRN', '1 puff BD = 200 mcg beclometasone equivalent/day (extra-fine)', 'Fostair MDI 100/6 (MART); Luforbec MDI 100/6', 'Symbicort 100/6 Turbohaler also preferred DPI: 1 puff BD + PRN for MART'],
        ['ICS/LABA — medium dose', 'Fostair NEXThaler 100/6 — 2 puffs BD OR Symbicort 200/6 Turbohaler 1 puff BD', '2×BD of 100/6 = 400 mcg beclometasone equiv/day', 'Beclometasone/Formoterol MDI 200/6', 'Symbicort 400/12 Turbohaler 1 puff BD = high dose ICS — specialist territory'],
        ['ICS/LABA/LAMA (Step 4)', 'Trimbow DPI 87/5/9 mcg (Beclometasone/Formoterol/Glycopyrronium) — 2 puffs BD. OR Trelegy Ellipta 92/55/22 mcg (Fluticasone/Umeclidinium/Vilanterol) — 1 puff OD', 'Trimbow: 2 puffs BD. Trelegy: 1 puff OD', '—', 'For Step 4 add-on LAMA; ensure specialist review. Trelegy once-daily may aid compliance'],
        ['LTRA (add-on)', 'Montelukast 10 mg tablet', '1 tablet at night (adults ≥15y)', '—', 'Trial 8 weeks. Warn: neuropsychiatric side effects (sleep disturbance, mood change) — MHRA warning 2019. Montelukast 5 mg chewable for age 6–14'],
      ],
      caption: 'DPI = dry powder inhaler (preferred, lower carbon footprint, but requires good inspiratory effort). MDI = metered dose inhaler (use with Aerochamber Plus spacer). Screen inspiratory effort: ask patient to breathe in hard and fast for 3 seconds — if unable, use MDI + spacer.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Exacerbations & Rescue Treatment',
    },
    {
      type: 'list',
      items: [
        'Acute exacerbation: quadruple ICS dose for up to 14 days (evidence base; discuss with patient) OR oral prednisolone',
        'Prednisolone 40 mg OD for 5 days (adults): standard course. Give with rescue pack if poor control or previous admissions',
        'Rescue pack wording: "Prednisolone 5 mg tablets — 8 tablets (40 mg) once daily for 5 days. Use as directed as part of your asthma action plan to treat exacerbations"',
        'Follow-up: asthma nurse review within 2 weeks of any exacerbation (or 2 days if admitted)',
        'Review: step up regular treatment if 2+ exacerbations in a year, or if exacerbation required admission',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Carbon footprint & inhaler switching',
      items: [
        'DPI (dry powder) inhalers have up to 25× lower carbon footprint than pMDI — offer DPI first for all new prescriptions',
        'Switching inhalers for environmental reasons alone: discuss with patient, never switch without consent, check technique with new device, review in 4–8 weeks',
        'Cannot use DPI (poor inspiratory effort, young children): use pMDI — choose Salamol or Airomir over Ventolin Evohaler (lower HFC propellant)',
        'Dispose of inhalers: return to pharmacy for incineration — do NOT put in household waste',
        'SMART inhalers: single inhaler = less overall device waste and better adherence',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Rightbreathe — inhaler choice tool', url: 'https://www.rightbreathe.com' },
        { label: 'FeNO Calculator', url: '#feno' },
        { label: 'NICE 2024 Adult Asthma Algorithm (PDF)', url: '/pdfs/asthma-adult-algorithm-nice-2024.pdf' },
        { label: 'NCL Adult Inhaler Pathway (PDF)', url: '/pdfs/asthma-adult-inhaler-pathway-ncl.pdf' },
        { label: 'Asthma Inhaler Formulary (PDF)', url: '/pdfs/asthma-inhaler-formulary.pdf' },
        { label: 'Staffs & Stoke Asthma Guidelines (PDF)', url: '/pdfs/asthma-staffordshire-guidelines.pdf' },
        { label: 'PEFR Diary (print)', url: '/pdfs/pefr-diary.pdf' },
        { label: 'Asthma + Lung UK — PAAP', url: 'https://www.asthmaandlung.org.uk/living-with/your-asthma/your-asthma-action-plan' },
      ],
    },
  ],
}

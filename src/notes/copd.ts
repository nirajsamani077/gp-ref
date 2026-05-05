import type { Note } from '../data/notes'

export const copd: Note = {
  id: 'copd',
  title: 'COPD — Diagnosis, Treatment & Exacerbations',
  subtitle: 'Spirometry criteria, inhaler ladder, rescue packs, and referral thresholds',
  tags: ['respiratory'],

  body: 'COPD chronic obstructive pulmonary disease spirometry FEV1 FVC post-bronchodilator reversibility MRC CAT score SABA SAMA LABA LAMA ICS triple therapy Trimbow Trelegy Spiolto Anoro Fostair exacerbation rescue pack prednisolone doxycycline azithromycin roflumilast pulmonary rehabilitation LTOT long-term oxygen smoking cessation eosinophils A1AT alpha-1-antitrypsin PRISM pre-COPD asthma overlap ACOS emphysema hyperinflation bullae carbocisteine mucolytic cor pulmonale secondary polycythaemia',

  content: [

    // ── DIAGNOSIS ─────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Suspect COPD if…',
      items: [
        'Age >40, smoker or ex-smoker (pack-years = cigarettes per day ÷ 20 × years smoked)',
        'Chronic productive cough, exertional breathlessness, wheeze — little variability but frequent "winter bronchitis"',
        'Progressive airflow obstruction confirmed by post-bronchodilator spirometry',
        'Consider: asthma overlap, 2WW (persistent cough, haemoptysis, weight loss, night sweats ≥40y), heart failure, occupational/asbestos exposure, bronchiectasis',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis — Investigations' },

    {
      type: 'table',
      headers: ['Investigation', 'Finding / Purpose', 'Notes'],
      rows: [
        ['Post-BD spirometry', 'FEV1/FVC <0.7 confirms obstruction', 'Reversibility ≥12% or ≥400 mL FEV1 suggests asthma overlap (also check PEFR variability ≥20%, FeNO)'],
        ['FBC', 'Secondary polycythaemia, ACD, eosinophilia', 'Eosinophilia >0.3 × 10⁹/L suggests asthma-COPD overlap (ACOS) — add ICS'],
        ['CXR', 'Hyperinflation, bullae, R/O malignancy or HF', 'Not diagnostic for COPD but excludes differentials'],
        ['MRC dyspnoea scale', '1 (strenuous) → 5 (at home/dressing)', 'MRC ≥3 = severe enough for pulmonary rehabilitation'],
        ['CAT score', '0–40 (lower = better); catestonline.org', 'CAT >10 = significant symptom burden — step up therapy'],
        ['%FEV1 predicted (severity)', '<80% mild, <50% severe, <30% very severe', 'Used to guide therapy escalation and specialist referral'],
        ['A1AT level', 'If <40y, non-smoker, family history', 'Alpha-1-antitrypsin deficiency — refer specialist if low'],
        ['Sputum MC&S / ECG / BNP / echo / HRCT', 'Optional if alternative cause suspected', 'HRCT for suspected bronchiectasis, ILD or pre-surgical assessment'],
      ],
      caption: 'COPD spirometry: obstructive pattern (FEV1/FVC <0.7 post-BD). Pre-COPD: symptoms or CT changes with normal spirometry. PRISM: preserved ratio (>0.7) but reduced absolute FEV1. Both warrant smoking cessation and monitoring.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'COPD Overlap Syndromes',
      items: [
        'Asthma-COPD overlap (ACOS): consider if age <40y, variability, BD reversibility (FEV1 >12% or >400 mL), eosinophilia, atopy, positive FeNO — ALWAYS add ICS; NEVER use LABA or LAMA alone without ICS (risk of life-threatening exacerbation)',
        'COPD-ILD overlap: paradoxically normal spirometry/ratio, desaturation disproportionate to severity, recurrent exacerbations or CXR changes — arrange HRCT chest',
        'On imaging (emphysema, hyperinflation) without spirometric obstruction: if non-smoker consider A1AT; check spirometry and monitor',
      ],
    },

    // ── TREATMENT LADDER ──────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Treatment Ladder' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Health Promotion — for all COPD patients',
      items: [
        'Smoking cessation — only intervention with proven survival benefit; calculate pack-years at every encounter',
        'Pulmonary rehabilitation — if MRC ≥3 or following any admission; 3-month programme covering breathlessness, nutrition, smoking and coping; proven survival benefit',
        'Annual flu vaccination + one-off pneumococcal vaccination',
        'Screen for malnutrition (BMI <20, cachexia) — involve dietician',
        'Screen for depression — common and undertreated in COPD',
      ],
    },

    {
      type: 'table',
      headers: ['Step', 'When', 'Options', 'Specific Inhalers'],
      rows: [
        ['1st line', 'All COPD patients', 'SABA PRN (usually salbutamol) or SAMA PRN (ipratropium)', 'Salbutamol 100 mcg pMDI 1–2 puffs PRN; Ipratropium 20 mcg pMDI 2 puffs QDS'],
        ['2nd line — option A', 'MRC ≥3 or CAT >10; very few symptoms/exacerbations', 'LABA alone or LAMA alone', 'Salmeterol / Formoterol; Tiotropium / Umeclidinium. Caution: LAMA has CVD risk'],
        ['2nd line — option B (most)', 'MRC ≥3, CAT >10, no ICS indicators', 'LABA/LAMA combination', 'Spiolto Respimat 2 puffs OD (soft mist); Anoro Ellipta / Ultibro Breezhaler 1 puff OD (DPI)'],
        ['2nd line — option C', 'Asthma overlap features (eosinophils >0.3, variability, atopy, FeNO)', 'LABA/ICS combination', 'Fostair 100/6 NEXThaler DPI or pMDI 2 puffs BD; Symbicort 200/6 Turbohaler; Relvar Ellipta 1 puff OD'],
        ['3rd line', 'On LABA/LAMA + eosinophils >0.3 AND ≥2 exacerbations/year or admission', 'Triple therapy LABA/LAMA/ICS', 'Trimbow pMDI 2 puffs BD; Trelegy Ellipta DPI 1 puff OD'],
        ['Specialist step-up', 'Frequent exacerbations ≥1/year or admission, eosinophils <0.1', 'Prophylactic azithromycin; roflumilast', 'Azithromycin 250 mg 3×/week (needs sputum, CT, ECG QTc, LFT, audiology first); Roflumilast for severe bronchitis FEV1 <50%'],
      ],
      caption: 'Inhaler choice: check inspiratory effort using InCheck Dial G16 — pMDIs need least effort but higher carbon footprint; DPIs (NEXThaler, Ellipta) need more effort but lowest carbon footprint; Spiolto Respimat (soft mist) is low effort and low carbon. For ACOS patients — never use LABA or LAMA without ICS.',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Additional Therapies',
      items: [
        'Carbocisteine / Acetylcysteine (NACSYS) — mucolytics to reduce sputum viscosity; consider before azithromycin if eosinophils adequate',
        'Home nebulisers — under specialist assessment only',
        'LTOT (Long-term oxygen therapy) — proven survival benefit if chronic hypoxaemia: sats <92%, cyanosis, secondary polycythaemia, or cor pulmonale (needs echo + diuretics). FEV1 usually <50%',
        'Lung volume reduction surgery / bullectomy — specialist assessment; survival benefit in selected patients',
        'Theophylline — only if inhalers insufficient; narrow therapeutic window; monitor levels',
        'Fitness to fly — assess only if FEV1 <50%, on LTOT, or bullous disease (risk of pneumothorax)',
      ],
    },

    // ── EXACERBATIONS ─────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'COPD Exacerbations' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Admit to Hospital if ANY of the Following',
      items: [
        'Oxygen saturations <88% on air',
        'CO₂ retention / flapping tremor / drowsy',
        'Not improving or deteriorating on rescue pack within 48 hours',
        'Severe breathlessness at rest / cyanosis',
        'Unable to manage at home / lack of social support',
      ],
    },

    {
      type: 'table',
      headers: ['Component', 'Drug', 'When to Use', 'Notes'],
      rows: [
        ['Bronchodilator', 'Salbutamol (SABA) inhaler', 'Always — first step in exacerbation', 'Up to 10 puffs via spacer every 4 hours, can stretch; do NOT give ipratropium (Atrovent) if patient already on a LAMA inhaler'],
        ['Steroid', 'Prednisolone 30 mg for 5 days', 'If breathlessness is distressing / significant wheeze', 'Part of rescue pack; not for every exacerbation if mild'],
        ['Antibiotic', 'Doxycycline 100 mg BD for 5 days OR Amoxicillin/Clarithromycin 500 mg BD for 5 days', 'Only if change in sputum colour or thickness', 'If high risk or treatment failure: Co-amoxiclav or levofloxacin based on sputum cultures; if on prophylactic azithromycin — continue it and ADD above antibiotic (not another macrolide)'],
      ],
      caption: 'NNT to prevent 1 hospital admission with rescue pack = 15. Issue rescue pack on repeat with instruction to call for clinical review — rescue pack does not replace assessment. Arrange review within 2 weeks of each use. Do not use rescue pack if cause may not be COPD (e.g. pneumonia, PE, HF).',
    },

    // ── ANNUAL REVIEW ─────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Annual Review — Minimum Dataset' },

    {
      type: 'list',
      items: [
        'MRC score and CAT score — assess symptom burden and adjust therapy',
        'BMI — screen for malnutrition (BMI <20) and obesity; involve dietician',
        'Exacerbation frequency — number in past year, any hospitalisations',
        'Spirometry — track FEV1 decline (rapid decline >500 mL over 5 years → refer)',
        'Inhaler technique and adherence — check with each review; switch device if technique poor',
        'Smoking status — document pack-years; offer cessation support at every contact',
        'Pulmonary rehabilitation — offer if MRC ≥3 and not yet attended or needs refresher',
        'Vaccination status — annual flu; one-off pneumococcal',
        'Mental health screening — depression common; impact on adherence and QOL',
        'Blood eosinophil count — guides ICS use (>0.3 favours ICS)',
      ],
    },

    // ── REFERRAL ──────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'When to Refer to Secondary Care (Respiratory)' },

    {
      type: 'table',
      headers: ['Indication', 'Action'],
      rows: [
        ['Diagnostic uncertainty / 2WW features (haemoptysis, weight loss ≥40y)', 'Urgent 2WW respiratory referral — via e-RS'],
        ['Suspected bronchiectasis — direct access HRCT', 'Respiratory / radiology referral'],
        ['Possible A1AT deficiency (<40y, non-smoker, FHx)', 'Respiratory medicine — genetic counselling and augmentation therapy'],
        ['Frequent exacerbations on maximal inhaler therapy (consider azithromycin or roflumilast)', 'Respiratory medicine'],
        ['Rapid FEV1 decline >500 mL over 5 years', 'Respiratory medicine — urgent'],
        ['Considering home nebulisers or LTOT', 'Respiratory medicine for formal assessment'],
        ['ACOS overlap — complex management', 'Respiratory or severe asthma team'],
      ],
    },

    // ── LOCAL REFERRAL ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Respiratory medicine (2WW and routine): Good Hope Hospital (UHB, Birmingham) — primary respiratory referral for South Staffordshire',
        'Alternatively: UHDB Queen\'s Hospital Burton (general respiratory and spirometry)',
        'Pulmonary rehabilitation: arranged via GP referral through intermediate care / community physiotherapy — contact Community Respiratory Team (Staffordshire)',
        'LTOT assessment: refer to respiratory medicine at Good Hope or UHDB Burton; home oxygen service via BOC/Air Liquide post-assessment',
        'Patient may prefer alternative local site — discuss at consultation',
        'For suspected malignancy (2WW): e-RS to respiratory at Good Hope or UHDB Burton — confirm local 2WW pathway with PCN',
      ],
    },

    // ── SAFETY NETTING ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — When to Act Urgently',
      items: [
        '999 / A&E (UHDB Burton): sats <88%, flapping tremor, worsening drowsiness, cyanosis, not improving on rescue pack',
        'NHS 111 / same-day GP: significant increase in breathlessness not responding to SABA, unwell despite starting rescue pack, new chest pain',
        'Red flags for urgent review: new haemoptysis, unintentional weight loss, new wheeze in non-asthmatic, chest signs suggesting pneumonia',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — COPD', url: 'https://cks.nice.org.uk/topics/copd/' },
        { label: 'NICE NG115 — COPD in Adults', url: 'https://www.nice.org.uk/guidance/ng115' },
        { label: 'GOLD Report — COPD', url: 'https://goldcopd.org/2024-gold-report/' },
        { label: 'CAT Score', url: 'https://www.catestonline.org/patient-site-test-page-english.html' },
        { label: 'Rightbreathe — inhaler choice', url: 'https://www.rightbreathe.com' },
        { label: 'NHS — COPD', url: 'https://www.nhs.uk/conditions/chronic-obstructive-pulmonary-disease-copd/' },
      ],
    },
  ],
}

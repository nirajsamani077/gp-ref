import type { Note } from '../data/notes'

export const asthmaDiagnosis: Note = {
  id: 'asthmaDiagnosis',
  title: 'Asthma — Diagnosis',
  subtitle: 'Symptoms, objective testing, FeNO, spirometry, and differential diagnosis',
  tags: ['respiratory'],

  body: 'asthma diagnosis symptoms wheeze breathlessness cough chest tightness spirometry reversibility FeNO fractional exhaled nitric oxide peak flow variability PEFR differential COPD vocal cord dysfunction hyperventilation eosinophilic',

  content: [
    {
      type: 'image',
      src: '/images/asthma-diagnostic-algorithm.png',
      alt: 'BTS/SIGN asthma diagnostic algorithm — high, intermediate, and low probability pathways',
      caption: 'BTS/SIGN 2019 Diagnostic Algorithm: high probability → initiate treatment and assess response objectively; intermediate probability → spirometry + bronchodilator reversibility ± FeNO, blood eosinophils; low probability → investigate alternative diagnosis. Red flags listed on right.',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Diagnosis requires BOTH: compatible symptoms + objective evidence of variable airflow obstruction',
      items: [
        'Symptoms alone are insufficient — asthma is over-diagnosed without objective testing',
        'Never start regular preventer therapy without attempting objective confirmation first',
        'If spirometry/FeNO unavailable, document why and arrange at next available opportunity',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Symptoms & History',
    },
    {
      type: 'list',
      items: [
        'Classic triad: episodic wheeze, breathlessness, and cough — worse at night/early morning',
        'Chest tightness: often described as a band around the chest',
        'Triggers: cold air, exercise, allergens (pollen, pets, dust mites), irritants (smoke, fumes), viral URTI, NSAIDs/aspirin, beta-blockers',
        'Atopic history: personal or family history of eczema, allergic rhinitis, or food allergy increases probability',
        'Occupational history: PEFR dip on working days vs days off suggests occupational asthma — refer OH/respiratory',
        'Pattern: variable and reversible — symptom-free intervals are characteristic',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Objective Tests',
    },
    {
      type: 'table',
      headers: ['Test', 'Positive result', 'Notes'],
      rows: [
        ['Spirometry + bronchodilator reversibility', 'FEV1 ↑ ≥12% AND ≥200 mL post-salbutamol 400 mcg', 'Test when symptomatic if possible; normal spirometry does not exclude asthma'],
        ['FeNO (Fractional Exhaled Nitric Oxide)', '≥40 ppb = high probability eosinophilic airway inflammation; 25–39 ppb = intermediate', 'Supports diagnosis; also guides ICS dose and steroid response. Use FeNO calculator on Calculators tab'],
        ['Peak flow variability (PEFR diary)', '≥20% diurnal variation on ≥3 days/week over 2 weeks', 'Best done over 2 weeks. Provide PEFR diary printout. Also establishes personal best for action plans'],
        ['Bronchial challenge (histamine/methacholine)', 'Positive if FEV1 ↓ ≥20% at low dose', 'Specialist test — refer if spirometry/FeNO inconclusive but high clinical suspicion'],
        ['Blood eosinophil count', '≥300 cells/µL supports eosinophilic asthma', 'Relevant to biologic eligibility at Step 4/5; not diagnostic alone'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Differential Diagnosis',
    },
    {
      type: 'table',
      headers: ['Condition', 'Distinguishing features'],
      rows: [
        ['COPD', 'Smoker/ex-smoker ≥35y; FEV1/FVC <0.7 post-BD; little/no reversibility; progressive'],
        ['Vocal cord dysfunction (VCD)', 'Inspiratory stridor; dysphonia; younger women; normal spirometry between episodes; psychogenic trigger'],
        ['Cardiac failure / cardiac asthma', 'Bibasal crackles; elevated JVP; BNP elevated; orthopnoea; nocturnal dyspnoea'],
        ['Hyperventilation / dysfunctional breathing', 'Paraesthesiae; chest tightness; anxiety; normal FeNO and spirometry; Nijmegen questionnaire positive'],
        ['Bronchiectasis', 'Chronic productive cough; recurrent infections; HRCT shows dilated bronchi'],
        ['ACE inhibitor cough', 'Dry persistent cough started after initiating ACE inhibitor; no wheeze; resolves on stopping'],
        ['Inhalation of foreign body', 'Sudden onset; unilateral wheeze; history of choking episode — especially in children'],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Probability-based approach (NICE 2017)',
      items: [
        'High probability (typical history + positive objective test): start treatment, review response',
        'Intermediate probability (typical history but no objective test yet): arrange FeNO + spirometry before starting treatment if possible',
        'Low probability (atypical or alternative diagnosis more likely): investigate alternative diagnosis first',
        'Unified airways: consider allergic rhinitis, sinusitis — treating nasal disease often improves asthma control',
      ],
    },

    // ── OCCUPATIONAL ASTHMA ───────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Occupational Asthma' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Suspect occupational asthma if symptoms vary with work schedule',
      items: [
        'Better on days off / holidays and worse on return to work — classic pattern',
        'Common causes: flour/grain dust (bakers), isocyanates (paint sprayers, foam manufacture), latex, wood dust, animal proteins (lab workers, vets), colophony (soldering), enzymes',
        'Serial PEFR: ask patient to record peak flow ≥4×/day for 4 weeks across working and non-working days — ≥20% variation linked to work pattern is diagnostic',
        'Refer to occupational health / respiratory medicine — early diagnosis and removal from exposure gives better prognosis; chronic exposure leads to fixed obstruction',
        'Notifiable disease: occupational asthma is a prescribed disease (D7) — inform patient of statutory sick pay/compensation rights via RIDDOR reporting',
        'Do not simply switch inhalers — if still exposed, disease will progress regardless of pharmacological treatment',
      ],
    },

    // ── WHEN TO REFER ─────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'When to Refer to Secondary Care' },

    {
      type: 'table',
      headers: ['Indication', 'Refer to'],
      rows: [
        ['Diagnostic uncertainty — spirometry and FeNO inconclusive but symptoms persist', 'Respiratory medicine — bronchial provocation testing (histamine/methacholine challenge)'],
        ['Occupational asthma suspected', 'Occupational health + respiratory medicine'],
        ['Step 4+ asthma not controlled on high-dose ICS + LABA', 'Severe asthma clinic — biologic eligibility assessment (dupilumab, mepolizumab, benralizumab)'],
        ['Blood eosinophils ≥300/µL + uncontrolled asthma', 'Severe asthma MDT — consider anti-IL-5/IL-4 biologic'],
        ['Frequent exacerbations (≥2/year requiring OCS)', 'Respiratory medicine — review diagnosis, triggers, adherence, inhaler technique'],
        ['Child with atypical symptoms or poor response to treatment', 'Paediatric respiratory / allergy'],
      ],
      caption: 'BTS/SIGN Step 5 = add-on therapy with biologics (NHS England approved) — requires ≥3 severe exacerbations/year or continuous OCS, with evidence of eosinophilic inflammation.',
    },

    {
      type: 'calclink',
      calculators: [
        { id: 'feno', label: 'FeNO Calculator', subtitle: 'Fractional Exhaled Nitric Oxide — eosinophilic airway inflammation' },
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'FeNO Calculator', url: '#feno' },
        { label: 'PEFR Diary (print)', url: '/pdfs/pefr-diary.pdf' },
        { label: 'PEFR Normal Ranges', url: '/pdfs/pefr-normal-ranges.pdf' },
        { label: 'NICE CKS — Asthma diagnosis', url: 'https://cks.nice.org.uk/topics/asthma/' },
        { label: 'NICE NG80 — Asthma', url: 'https://www.nice.org.uk/guidance/ng80' },
        { label: 'BTS/SIGN — Asthma Guidelines', url: 'https://www.brit-thoracic.org.uk/quality-improvement/guidelines/asthma/' },
        { label: 'Rightbreathe — inhaler choice', url: 'https://www.rightbreathe.com' },
      ],
    },
  ],
}

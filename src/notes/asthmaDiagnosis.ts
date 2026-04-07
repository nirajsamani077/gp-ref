import type { Note } from '../data/notes'

export const asthmaDiagnosis: Note = {
  id: 'asthmaDiagnosis',
  title: 'Asthma — Diagnosis',
  subtitle: 'Symptoms, objective testing, FeNO, spirometry, and differential diagnosis',
  tags: ['Respiratory'],

  body: 'asthma diagnosis symptoms wheeze breathlessness cough chest tightness spirometry reversibility FeNO fractional exhaled nitric oxide peak flow variability PEFR differential COPD vocal cord dysfunction hyperventilation eosinophilic',

  content: [
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

    {
      type: 'linkrow',
      links: [
        { label: 'FeNO Calculator', url: '#feno' },
        { label: 'PEFR Diary (print)', url: '/pdfs/pefr-diary.pdf' },
        { label: 'PEFR Normal Ranges', url: '/pdfs/pefr-normal-ranges.pdf' },
        { label: 'NICE CKS — Asthma diagnosis', url: 'https://cks.nice.org.uk/topics/asthma/' },
        { label: 'Rightbreathe — inhaler choice', url: 'https://www.rightbreathe.com' },
      ],
    },
  ],
}

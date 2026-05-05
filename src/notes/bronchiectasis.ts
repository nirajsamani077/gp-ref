import type { Note } from '../data/notes'

export const bronchiectasis: Note = {
  id: 'bronchiectasis',
  title: 'Bronchiectasis',
  subtitle: 'Diagnosis, exacerbation management, antibiotic choice and annual review',
  tags: ['respiratory'],

  body: 'bronchiectasis chronic productive cough purulent sputum HRCT CT thorax FEV1 FVC spirometry obstructive COPD misdiagnosis haemoptysis pseudomonas colonisation azithromycin colistin nebulised prophylactic antibiotics chest physiotherapy mucus clearance ABPA aspergillus cystic fibrosis CF primary ciliary dyskinesia immunodeficiency immunoglobulin TB tuberculosis pertussis whooping cough pulmonary rehabilitation MRC score exacerbation doxycycline amoxicillin co-amoxiclav levofloxacin IV admission',

  content: [
    {
      type: 'callout',
      variant: 'warning',
      title: 'Bronchiectasis — Often Misdiagnosed as COPD',
      items: [
        'Suspect when: persistent purulent cough, recurrent chest infections, haemoptysis, wheeze — especially if COPD treatment is not working',
        'Key distinction from COPD: younger age, non-smoker, persistent sputum production year-round (not just "winter bronchitis")',
        'Often has obstructive spirometry (FEV1/FVC <0.7) and non-specific CXR changes — easily confused with COPD',
        'Always consider lung cancer on differential if smoker ≥40 years with chronic productive cough',
        'Common causes: post-infection (TB, pertussis, measles), idiopathic (50%), CF, primary ciliary dyskinesia, ABPA, connective tissue disease, immunodeficiency',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations — Refer to Respiratory if Suspected' },

    {
      type: 'table',
      headers: ['Investigation', 'Purpose'],
      rows: [
        ['HRCT thorax (gold standard)', 'Diagnosis — shows dilated bronchi (signet ring sign), tram-tracking, mucus plugging'],
        ['Direct access CXR', 'Initial screening — may show ring shadows, tram-tracks, but may be normal'],
        ['Sputum MC&S (when stable)', 'Identify colonisation — Pseudomonas aeruginosa most important (associated with worse prognosis)'],
        ['FBC', 'Eosinophilia (ABPA), anaemia of chronic disease, neutrophilia'],
        ['Immunoglobulins (IgG, IgA, IgM)', 'Primary or secondary immunodeficiency — hypogammaglobulinaemia'],
        ['IgE total + Aspergillus RAST/IgE', 'ABPA — treat with oral steroids ± itraconazole; avoid antifungals as monotherapy'],
        ['Spirometry (post-BD)', 'Obstructive or mixed pattern common; track decline'],
        ['CF sweat test / genetics', 'If young, bilateral lower lobe, recurrent infections from childhood'],
        ['Ciliary biopsy (specialist)', 'Primary ciliary dyskinesia — situs inversus + bronchiectasis = Kartagener syndrome'],
      ],
    },

    { type: 'heading', level: 2, text: 'Stable Disease Management' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Daily Management — MDT Approach',
      items: [
        'Chest physiotherapy (airway clearance): active cycle of breathing technique (ACBT) for 10–20 minutes daily — reduces sputum retention and infection frequency; refer to physiotherapy',
        'Pulmonary rehabilitation: if MRC ≥3 or functionally limited',
        'Vaccinations: annual flu + one-off pneumococcal; if immunodeficiency, specialist may give 23-valent pneumococcal and measure antibody response at 4–8 weeks',
        'Mucolytics: carbocisteine can reduce sputum viscosity — specialist decision',
        'Bronchodilators: only if reversibility demonstrated; ICS rarely indicated (exception: ABPA)',
        'Smoking cessation: reduces progression and infection frequency',
        'Sputum MC&S annually (stable) — change in isolate guides exacerbation antibiotic choice',
      ],
    },

    { type: 'heading', level: 2, text: 'Exacerbation Management' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Always Send Sputum Before Starting Antibiotics',
      items: [
        'Send sputum MC&S: essential — treatment guided by culture results and sensitivity',
        'Change antibiotic only if not sensitive to current choice, or if not improving at 48 hours',
        'Duration: 7–14 days (longer than standard course)',
      ],
    },

    {
      type: 'table',
      headers: ['Antibiotic', 'Dose', 'When to Use'],
      rows: [
        ['Amoxicillin', '500 mg TDS for 7–14 days', '1st line if Haemophilus or Streptococcus colonisation; no Pseudomonas'],
        ['Clarithromycin', '500 mg BD for 7–14 days', '1st line penicillin allergy; Haemophilus coverage'],
        ['Doxycycline', '100 mg BD for 7–14 days', '1st line alternative; Haemophilus, Moraxella, Pseudomonas (limited)'],
        ['Co-amoxiclav', '625 mg TDS for 7–14 days', '2nd line — polymicrobial or H. influenzae producing beta-lactamase'],
        ['Levofloxacin', '500 mg OD for 7–14 days', '2nd line — Pseudomonas coverage (NB: tendon rupture risk, caution in elderly)'],
        ['IV antibiotics (hospital)', 'Piperacillin/tazobactam or ceftazidime', 'If not improving at 48h on oral or systemically unwell → admit'],
      ],
      caption: 'If patient is on prophylactic antibiotics (e.g. azithromycin), use a DIFFERENT antibiotic for exacerbation — macrolide resistance may have developed. If not improving at 48 hours on oral → admit for IV therapy.',
    },

    { type: 'heading', level: 2, text: 'Prophylactic Antibiotics — Specialist Decision' },

    {
      type: 'list',
      items: [
        'Consider if ≥3 exacerbations per year requiring antibiotics — specialist initiated',
        'Options: azithromycin 500 mg 3×/week (check ECG QTc, LFTs, hearing — risk of hearing loss); colistin nebulised (for Pseudomonas colonisation)',
        'If >5 exacerbations: may have IV antibiotics every 3 months (specialist unit)',
        'If Pseudomonas colonised: colistin nebulised BD ± azithromycin 3×/week',
        'Contraindication to azithromycin: non-tuberculous mycobacteria (NTM) colonisation — risk of resistance',
        'If on prophylactic azithromycin and exacerbation: continue azithromycin AND add above exacerbation antibiotic (not another macrolide)',
      ],
    },

    { type: 'heading', level: 2, text: 'Annual Review' },

    {
      type: 'list',
      items: [
        'MRC dyspnoea score and exercise tolerance',
        'BMI — malnutrition common; dietician referral if BMI <20',
        'Oxygen saturations at rest',
        'Exacerbation frequency (how many in past year, any hospitalisations)',
        'Spirometry — track FEV1 decline',
        'Sputum MC&S — baseline colonisation status',
        'Adherence to chest physiotherapy',
        'Smoking status — cessation support',
        'Review prophylactic antibiotic need',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Respiratory medicine: Good Hope Hospital (UHB) — primary respiratory referral for South Staffordshire; has bronchiectasis clinic',
        'Alternative: UHDB Queen\'s Hospital Burton — general respiratory follow-up',
        'Direct access HRCT chest: request via radiology — check local pathway (may need respiratory GP referral first)',
        'Chest physiotherapy: community physiotherapy via GP referral; physiotherapy at Good Hope or UHDB Burton',
        'Pseudomonas eradication: specialist respiratory referral — protocol involves high-dose ciprofloxacin ± nebulised colistin',
        'Patient may prefer alternative local site — discuss at consultation',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        '999 / A&E: significant haemoptysis (>250 mL), haemoptysis with haemodynamic instability, severe respiratory distress',
        'Same-day GP / admit: not improving at 48h on antibiotics, sats <90%, systemically unwell (fever, HR >100)',
        'Red flags: new haemoptysis in bronchiectasis patient → CXR and CT (new lesion, aspergilloma, or cancer); change in sputum character (increasing volume or blood)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Bronchiectasis', url: 'https://cks.nice.org.uk/topics/bronchiectasis/' },
        { label: 'BTS — Bronchiectasis Guidelines', url: 'https://www.brit-thoracic.org.uk/quality-improvement/guidelines/bronchiectasis/' },
        { label: 'NHS — Bronchiectasis', url: 'https://www.nhs.uk/conditions/bronchiectasis/' },
        { label: 'Bronchiectasis UK', url: 'https://www.bronchiectasis.co.uk/' },
      ],
    },
  ],
}

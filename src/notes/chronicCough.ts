import type { Note } from '../data/notes'

export const chronicCough: Note = {
  id: 'chronicCough',
  title: 'Chronic Cough',
  subtitle: 'Causes, investigation, red flags, and management by aetiology',
  tags: ['symptoms', 'Respiratory'],

  body: 'chronic cough >8 weeks causes differential diagnosis GORD gastro-oesophageal reflux asthma upper airway cough syndrome post-nasal drip ACE inhibitor NAEB non-asthmatic eosinophilic bronchitis COPD bronchiectasis idiopathic refractory chronic cough red flags 2WW investigation chest X-ray spirometry CXR haemoptysis weight loss night sweats smoking flowchart morphine low-dose gabapentin speech therapy',

  content: [
    {
      type: 'callout',
      variant: 'warning',
      title: 'Red flags — urgent action required',
      items: [
        'Haemoptysis (not just blood-streaked mucus in URTI) → urgent CXR; if CXR normal and age >40 with smoking history → 2WW chest CT / chest physician referral',
        'Unexplained weight loss, night sweats, or lymphadenopathy alongside cough → 2WW referral (lung or lymphoma)',
        'New cough in a smoker or ex-smoker age >40 years, even without haemoptysis → CXR; 2WW if any concern on imaging',
        'Progressive dyspnoea + cough → urgent spirometry + CXR (consider COPD, ILD, cardiac cause)',
        'Stridor with cough → urgent ENT or respiratory referral (laryngeal cause, subglottic stenosis)',
        'Immunocompromised patient with cough + fever + weight loss → consider TB, PCP, fungal — urgent CXR',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Definition and Epidemiology',
    },
    {
      type: 'list',
      items: [
        'Chronic cough: cough persisting for >8 weeks (some guidelines use >3 weeks for subacute, >8 weeks for chronic)',
        'Affects approximately 10–12% of the population; one of the most common reasons to present to primary care',
        'More common in women; peak prevalence in middle age',
        'In most cases, a treatable cause can be identified — the "big three" account for ~75–85% of cases in non-smokers: UACS (upper airway cough syndrome), asthma/NAEB, and GORD',
        'Always rule out ACE inhibitor-related cough first — occurs in 10–15% of ACE inhibitor users, typically within weeks but can occur years later',
      ],
    },

    {
      type: 'image',
      src: '/images/chronic-cough.jpg',
      alt: 'Chronic cough causes and differential diagnosis wheel',
      caption: 'Common causes of chronic cough — the "big three" (UACS, asthma/eosinophilic, GORD) account for the majority in non-smokers. Always consider ACE inhibitor cough and smoking-related disease.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Common Causes — Structured Approach',
    },
    {
      type: 'table',
      headers: ['Cause', 'Clues', 'Investigation', 'Treatment'],
      rows: [
        ['ACE inhibitor cough', 'Any ACE inhibitor (lisinopril, ramipril, etc.); dry irritating cough; onset weeks–years after starting', 'Clinical diagnosis; trial off ACE inhibitor for 4 weeks', 'Switch to ARB (e.g. losartan, candesartan). Cough usually resolves within 2–4 weeks of stopping'],
        ['Upper Airway Cough Syndrome (UACS / post-nasal drip)', 'Sensation of drip at back of throat, frequent throat clearing, cobblestone posterior pharynx, nasal symptoms, worsens lying flat', 'Clinical; nasal examination; ENT referral if structural cause', 'Intranasal corticosteroid spray (e.g. fluticasone); LTRA (montelukast); antihistamine if allergic component; saline nasal irrigation'],
        ['Asthma / NAEB (Non-Asthmatic Eosinophilic Bronchitis)', 'Dry cough, worse at night / with exercise / cold air / allergens; may have no wheeze in cough-variant asthma; NAEB has eosinophilia on sputum but normal spirometry and no BHR', 'Spirometry + reversibility; FeNO (elevated in eosinophilic); sputum eosinophils; peak flow diary; trial of ICS', 'ICS (e.g. beclomethasone 200–400 mcg BD); SABA PRN; LABA if needed; 8-week trial — assess response'],
        ['GORD / Laryngopharyngeal Reflux (LPR)', 'Hoarse voice, globus, cough worse after meals or lying down; heartburn may be absent ("silent reflux")', 'Clinical; PPI trial (8 weeks high-dose); pH-impedance study if uncertain', 'PPI (omeprazole 20–40 mg OD, or BD for LPR); lifestyle: head of bed elevation, avoid late meals, reduce coffee/alcohol/fatty foods; alginate (Gaviscon Advance) post-meals'],
        ['Smoking-related / COPD', 'Current or ex-smoker; chronic productive cough; progressive dyspnoea', 'Spirometry (post-bronchodilator FEV1/FVC <0.7 = COPD); CXR', 'Smoking cessation (most important); SABA/SAMA; LABA ± LAMA; ICS if frequent exacerbations'],
        ['Bronchiectasis', 'Chronic productive cough, large volumes of purulent sputum, recurrent chest infections, clubbing', 'HRCT chest (gold standard); sputum culture; spirometry', 'Airway clearance (physiotherapy / flutter device / PEP mask); treat exacerbations; prophylactic antibiotics if ≥3 exacerbations/year (azithromycin or doxycycline)'],
        ['Interstitial Lung Disease (ILD)', 'Dry cough + progressive dyspnoea; fine bibasal crackles; may have systemic features (connective tissue disease, drug history)', 'CXR; HRCT; pulmonary function tests (restrictive pattern); ANA, ANCA, anti-CCP', 'Urgent respiratory referral; treat underlying cause; pirfenidone/nintedanib for IPF'],
        ['Idiopathic / Refractory Chronic Cough', 'Diagnosis of exclusion; often female >40 years; dry, tickling cough; hypersensitivity to triggers (temperature, smells, talking)', 'All investigations normal or do not respond to treatment of identified cause', 'Low-dose morphine (5 mg BD — ERS guideline-recommended); gabapentin 100–300 mg OD–TDS; speech and language therapy (cough suppression techniques); trial of amitriptyline; neuromodulators'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Chronic Cough — Investigation Flowchart',
    },
    {
      type: 'image',
      src: '/images/chronic-cough-flowchart.jpg',
      alt: 'Chronic cough investigation and management flowchart',
      caption: 'Systematic approach to chronic cough — sequential investigation and empirical treatment trials. If step-wise approach fails, refer to respiratory / specialist cough clinic.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Step-by-Step Investigation in Primary Care',
    },
    {
      type: 'list',
      items: [
        'Step 1 — History and examination: smoking status, ACE inhibitor use, onset/character/triggers, associated symptoms (wheeze, dyspnoea, heartburn, post-nasal drip). Examine: chest (wheeze, crackles), oropharynx (cobblestoning, post-nasal drip), nasal passages',
        'Step 2 — Stop ACE inhibitor if on one: reassess at 4 weeks. If cough resolves → switch to ARB and discharge',
        'Step 3 — CXR: all patients with new chronic cough. Look for: consolidation, mass, pleural effusion, hilar lymphadenopathy, hyperinflation, ILD changes',
        'Step 4 — Spirometry with reversibility: assess for asthma (reversibility >12%/200 mL) or COPD (FEV1/FVC <0.7)',
        'Step 5 — FeNO: if available, elevated FeNO (>25 ppb) supports eosinophilic airway inflammation; trial of ICS is warranted',
        'Step 6 — Empirical treatment trials (in order): (1) intranasal steroid for UACS, (2) ICS ± SABA for asthma/NAEB, (3) PPI for GORD/LPR. Allow 8 weeks per trial',
        'Step 7 — If above fails: sputum culture, HRCT chest, pH-impedance study, bronchoscopy (if haemoptysis or structural concern); refer to respiratory medicine or specialist cough clinic',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Refractory Chronic Cough — newer treatments',
      items: [
        'Low-dose morphine sulphate (5 mg twice daily): ERS 2020 guidelines — first evidence-based pharmacological treatment for refractory chronic cough; significant reduction in cough frequency and severity in RCTs',
        'Gabapentin (100–900 mg/day in divided doses): reduces central sensitisation; useful if neuropathic cough hypersensitivity. Monitor for drowsiness and cognitive effects',
        'Gefapixant (P2X3 receptor antagonist): licensed in some countries for refractory chronic cough; causes taste disturbance (ageusia/dysgeusia) in ~20%',
        'Speech and Language Therapy (SLT) — cough suppression techniques: highly effective, non-pharmacological; physiotherapy-type approach to voluntary cough suppression; available in specialist cough clinics',
        'Amitriptyline 10–25 mg nocte: widely used off-label; evidence from case series; helps with sleep and may reduce cough hypersensitivity',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Chronic Cough in Children',
    },
    {
      type: 'list',
      items: [
        'Definition in children: cough >4 weeks (shorter than adult definition)',
        'Most common cause: protracted bacterial bronchitis (PBB) in young children — wet/productive cough, no wheeze, responds to amoxicillin 2–4 weeks',
        'Asthma: consider if cough is dry, nocturnal, and associated with triggers (exercise, cold air, allergens); trial of ICS + SABA; spirometry if >5 years',
        'Foreign body inhalation: sudden onset cough in toddler with no other symptoms → urgent CXR and refer for bronchoscopy',
        'Habit cough (Tourettic cough): dry barking cough, absent during sleep, often school-age; reassurance + suggestion therapy / SLT',
        'Whooping cough (pertussis): paroxysmal, post-tussive vomiting, whoop; see Acute Cough note',
        'Referral: if wet cough >4 weeks not responding to antibiotics, or any red flags → paediatric respiratory referral',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Practical tips for chronic cough consultations',
      items: [
        'Most patients with chronic cough feel dismissed — validate their symptoms and set out a systematic plan',
        'Explain that the process may take months — multiple causes often need to be tested and treated sequentially',
        'Cough hypersensitivity syndrome: a unifying explanation for many refractory cases — the cough reflex is sensitised, causing coughing to innocuous stimuli (cold air, talking, perfumes)',
        'Avoid prescribing codeine-containing cough suppressants long-term (addiction risk, limited evidence)',
        'Consider referring to a specialist cough clinic if >12 months of symptoms without response to standard treatment — they have access to FeNO, bronchoscopy, pH-impedance testing, and SLT services',
        'Document clearly: which causes have been investigated, which treatments were tried and for how long, and the response — this aids continuity of care',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Cough (Chronic)', url: 'https://cks.nice.org.uk/topics/cough/' },
        { label: 'Patient Info — Chronic Cough (PDF)', url: '/pdfs/cough-info.pdf' },
        { label: 'ERS 2020 Chronic Cough Guidelines', url: 'https://erj.ersjournals.com/content/55/1/1901136' },
        { label: 'Acute Cough / LRTI note', url: '#acuteCough' },
        { label: 'NICE NG120 — Antimicrobial prescribing', url: 'https://www.nice.org.uk/guidance/ng120' },
      ],
    },
  ],
}

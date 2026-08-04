/**
 * Presentation-first differential-diagnosis guides.
 *
 * Notes are CONDITION-first (you know the diagnosis, you want management).
 * Symptoms are PRESENTATION-first: a patient presents with X → the differential,
 * red flags and first-line investigations, each linking into the condition notes.
 *
 * TO ADD A SYMPTOM: add one entry below. `note` on any ddx/related item is a
 * note id — clicking it jumps to that note. Keep ids valid (see src/notes).
 * Prefer ONE condition per ddx item so each links to its own note.
 */

export interface DdxItem {
  label: string
  /** Optional note id — makes the item a clickable link into that condition note. */
  note?: string
}

export interface DdxGroup {
  heading: string
  variant?: 'common' | 'serious' | 'other'
  items: DdxItem[]
}

export interface Symptom {
  id: string
  name: string
  icon: string
  system: string
  blurb: string
  redFlags: string[]
  ddx: DdxGroup[]
  investigations: string[]
  related?: DdxItem[]
}

/** Display order of systems in the left rail. */
export const SYMPTOM_SYSTEMS: string[] = [
  'General & non-specific',
  'Cardiorespiratory',
  'Gastrointestinal',
  'Neurology',
  'Urogenital',
  "Women's health",
  'Musculoskeletal',
  'Skin',
  'Mental health',
  'ENT & eyes',
  'Paediatrics',
]

const C = 'Common'
const S = 'Serious — must not miss'
const O = 'Also consider'

export const SYMPTOMS: Symptom[] = [

  // ── General & non-specific ────────────────────────────────────────────────
  {
    id: 'fatigue',
    name: 'Fatigue / tiredness (TATT)',
    icon: '🔋',
    system: 'General & non-specific',
    blurb: 'A very common, non-specific presentation — screen broadly, treat the cause.',
    redFlags: [
      'Unintentional weight loss, night sweats, or lymphadenopathy → malignancy screen',
      'New severe/localising symptoms (e.g. bone pain, bleeding, breathlessness)',
      'Progressive functional decline in an older/frail patient',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Anaemia', note: 'normocytic-anaemia' },
        { label: 'Depression / anxiety', note: 'depression' },
        { label: 'Hypothyroidism', note: 'hypothyroidism' },
        { label: 'Poor sleep / OSA', note: 'osa' },
        { label: 'Diabetes', note: 'diabetes-diagnosis' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Coeliac disease', note: 'coeliac-disease' },
        { label: 'Vitamin B12 / folate deficiency', note: 'vitamin-b12' },
        { label: 'Chronic kidney disease', note: 'ckd' },
        { label: 'Chronic liver disease', note: 'chronic-liver-disease' },
        { label: 'CFS/ME (diagnosis of exclusion)', note: 'cfs-me' },
        { label: 'Medication / alcohol', note: 'alcohol-etoh' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Malignancy (esp. haematological)', note: 'haem-malignancies' },
      ]},
    ],
    investigations: ['FBC, ferritin, U&E, LFT, TFT, HbA1c, calcium', 'Coeliac serology; B12/folate; CRP/ESR', 'Consider a myeloma screen / imaging if red flags'],
    related: [{ label: 'Unintentional weight loss', note: 'weight-loss' }, { label: 'Insomnia', note: 'insomnia' }, { label: 'Night sweats', note: 'night-sweats' }],
  },
  {
    id: 'weight-loss-symptom',
    name: 'Unintentional weight loss',
    icon: '⚖️',
    system: 'General & non-specific',
    blurb: 'A red-flag symptom — a structured search for malignancy, organic and functional causes.',
    redFlags: [
      'Weight loss WITH a site-specific symptom (GI, respiratory, urinary, mass) → 2WW',
      'Iron-deficiency anaemia, or new lymphadenopathy/organomegaly',
      '≥5% body weight over 6–12 months without dieting',
    ],
    ddx: [
      { heading: S, variant: 'serious', items: [
        { label: 'Malignancy (GI, lung, haematological, renal, ovarian)', note: 'two-week-wait' },
      ]},
      { heading: C, variant: 'common', items: [
        { label: 'Hyperthyroidism', note: 'hyperthyroidism' },
        { label: 'New / poorly controlled diabetes', note: 'diabetes-diagnosis' },
        { label: 'Depression / anxiety', note: 'depression' },
        { label: 'Coeliac disease / malabsorption', note: 'coeliac-disease' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'COPD cachexia', note: 'copd' },
        { label: 'Heart failure', note: 'heart-failure' },
        { label: 'Chronic kidney disease', note: 'ckd' },
        { label: 'Frailty & sarcopenia', note: 'frailty' },
        { label: 'Alcohol / substance misuse', note: 'substance-misuse' },
      ]},
    ],
    investigations: ['FBC, U&E, LFT, calcium, glucose/HbA1c, TFT, CRP/ESR, coeliac serology, ferritin', 'Urinalysis; CXR; consider FIT, myeloma screen, HIV', 'Site-directed imaging / 2WW as guided'],
    related: [{ label: 'Full weight-loss note', note: 'weight-loss' }, { label: 'Night sweats', note: 'night-sweats' }],
  },
  {
    id: 'night-sweats-symptom',
    name: 'Night sweats',
    icon: '💦',
    system: 'General & non-specific',
    blurb: 'Usually benign (menopause, environment) — but exclude infection and malignancy.',
    redFlags: [
      'Drenching sweats with weight loss / lymphadenopathy → lymphoma',
      'Fever, foreign travel, or IVDU → TB, HIV, endocarditis',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Menopause / perimenopause', note: 'menopause' },
        { label: 'Anxiety', note: 'anxiety-gad' },
        { label: 'Medication (SSRIs, hormones)', note: 'individual-drug-cautions' },
        { label: 'Alcohol', note: 'alcohol-etoh' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Lymphoma / leukaemia', note: 'haem-malignancies' },
        { label: 'Tuberculosis', note: 'tuberculosis' },
        { label: 'HIV', note: 'hiv' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Hyperthyroidism', note: 'hyperthyroidism' },
        { label: 'Sarcoidosis', note: 'sarcoidosis' },
      ]},
    ],
    investigations: ['FBC, LFT, LDH, CRP/ESR, TFT, glucose', 'CXR; consider HIV & TB testing', 'Malignancy screen if B-symptoms'],
    related: [{ label: 'Full night-sweats note', note: 'night-sweats' }],
  },
  {
    id: 'dizziness',
    name: 'Dizziness & lightheadedness',
    icon: '💫',
    system: 'General & non-specific',
    blurb: 'First separate true vertigo (spinning) from presyncope, disequilibrium and anxiety.',
    redFlags: [
      'Acute vertigo with focal neurology, headache, or new deafness → posterior stroke',
      'Exertional presyncope → aortic stenosis / arrhythmia',
      'Dizziness with chest pain, palpitations or collapse',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Vertigo (BPPV, vestibular neuronitis, Ménière’s)', note: 'vertigo' },
        { label: 'Postural hypotension / presyncope', note: 'syncope' },
        { label: 'Anxiety / hyperventilation', note: 'anxiety-gad' },
        { label: 'Anaemia', note: 'normocytic-anaemia' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Hypoglycaemia', note: 'hypoglycaemia' },
        { label: 'Atrial fibrillation / arrhythmia', note: 'atrialFibrillation' },
        { label: 'Medication (antihypertensives, sedatives)', note: 'polypharmacy' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Posterior-circulation stroke / TIA', note: 'stroke-tia' },
      ]},
    ],
    investigations: ['Lying/standing BP; ECG; capillary glucose', 'FBC; U&E; consider HbA1c', 'Dix-Hallpike / HINTS for vertigo'],
  },
  {
    id: 'confusion-delirium',
    name: 'Confusion / delirium',
    icon: '🧠',
    system: 'General & non-specific',
    blurb: 'Acute confusion is delirium until proven otherwise — find and treat the cause.',
    redFlags: [
      'Acute change in cognition/consciousness → screen for sepsis, hypoxia, hypoglycaemia',
      'Fever + confusion + headache/neck stiffness → CNS infection',
      'Focal neurology, head injury, or anticoagulated → intracranial cause',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Delirium (infection, drugs, retention, constipation)', note: 'delirium' },
        { label: 'UTI / chest infection', note: 'uti-women' },
        { label: 'Medication / opioids / sedatives', note: 'polypharmacy' },
        { label: 'Alcohol intoxication / withdrawal', note: 'alcohol-etoh' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Sepsis', note: 'delirium' },
        { label: 'Hypoglycaemia', note: 'hypoglycaemia' },
        { label: 'Stroke / intracranial event', note: 'stroke-tia' },
        { label: 'Meningitis / encephalitis', note: 'meningitis' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Hyponatraemia / hypercalcaemia', note: 'hyponatraemia' },
        { label: 'Underlying dementia', note: 'dementia' },
      ]},
    ],
    investigations: ['4AT / confusion screen; obs incl. SpO₂ & glucose', 'FBC, U&E, calcium, glucose, LFT, CRP, TFT; urine dip + MC&S', 'CXR/ECG; CT head if focal signs or head injury'],
    related: [{ label: 'Dementia (chronic)', note: 'dementia' }],
  },
  {
    id: 'falls-symptom',
    name: 'Falls (older adult)',
    icon: '🧍',
    system: 'General & non-specific',
    blurb: 'A multifactorial syndrome — separate a mechanical trip from syncope and assess future risk.',
    redFlags: [
      'Fall with loss of consciousness / no memory → treat as syncope (ECG)',
      'Head injury on anticoagulant → CT head',
      'Fall with new focal neurology, or the “long lie”',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Postural hypotension', note: 'syncope' },
        { label: 'Polypharmacy / sedatives', note: 'polypharmacy' },
        { label: 'Gait / balance / vision impairment', note: 'elderly-falls' },
        { label: 'Vertigo', note: 'vertigo' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Cardiac syncope / arrhythmia', note: 'atrialFibrillation' },
        { label: 'Stroke / TIA', note: 'stroke-tia' },
        { label: 'Sepsis / acute illness', note: 'delirium' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Fragility fracture / osteoporosis', note: 'osteoporosis' },
        { label: 'Hypoglycaemia', note: 'hypoglycaemia' },
      ]},
    ],
    investigations: ['Lying/standing BP; ECG; medication review', 'FBC, U&E, calcium, glucose, TFT, vitamin D', 'Gait & balance assessment; bone-health / FRAX'],
    related: [{ label: 'Full falls note', note: 'elderly-falls' }, { label: 'Blackout / collapse', note: 'syncope' }],
  },
  {
    id: 'fever-adult',
    name: 'Fever in adults',
    icon: '🌡️',
    system: 'General & non-specific',
    blurb: 'Find the source; screen for sepsis and ask about travel and immunosuppression.',
    redFlags: [
      'Sepsis: NEWS2 ↑, mottled/cold, confusion, low BP, low urine output → admit',
      'Non-blanching rash, neck stiffness, photophobia → meningococcal disease',
      'Recent travel (malaria) / neutropenia / returning traveller',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Viral / URTI', note: 'acuteCough' },
        { label: 'UTI / pyelonephritis', note: 'uti-women' },
        { label: 'Cellulitis / skin infection', note: 'cellulitis' },
        { label: 'Gastroenteritis', note: 'gastroenteritis-adult' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Sepsis (any source)', note: 'delirium' },
        { label: 'Meningitis', note: 'meningitis' },
        { label: 'Malaria (returning traveller)', note: 'tuberculosis' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Glandular fever', note: 'glandular-fever' },
        { label: 'HIV seroconversion', note: 'hiv' },
        { label: 'Endocarditis; PUO', note: 'night-sweats' },
      ]},
    ],
    investigations: ['Observations + NEWS2; identify a source', 'FBC, U&E, LFT, CRP, cultures per source; urine dip', 'Travel screen (malaria films) / HIV where relevant'],
  },
  {
    id: 'lymphadenopathy',
    name: 'Lymphadenopathy (swollen glands)',
    icon: '🫧',
    system: 'General & non-specific',
    blurb: 'Most is reactive — persistent, hard, fixed or generalised nodes need investigation.',
    redFlags: [
      'Hard, fixed, painless node >2 cm, or persisting >6 weeks → 2WW',
      'Generalised lymphadenopathy + B-symptoms (weight loss, night sweats)',
      'Supraclavicular node at any time',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Reactive (local infection)', note: 'neck-lumps' },
        { label: 'Glandular fever (EBV)', note: 'glandular-fever' },
        { label: 'Tonsillitis / dental', note: 'sorethroat-tonsillitis' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Lymphoma / leukaemia', note: 'haem-malignancies' },
        { label: 'Metastatic carcinoma (neck)', note: 'neck-lumps' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'HIV', note: 'hiv' },
        { label: 'Tuberculosis', note: 'tuberculosis' },
        { label: 'Sarcoidosis', note: 'sarcoidosis' },
      ]},
    ],
    investigations: ['FBC + film, LDH, CRP/ESR, monospot; HIV where relevant', 'CXR; USS ± FNA/biopsy of a persistent node', '2WW haematology/head-and-neck per features'],
    related: [{ label: 'Neck lumps', note: 'neck-lumps' }],
  },

  // ── Cardiorespiratory ─────────────────────────────────────────────────────
  {
    id: 'chest-pain',
    name: 'Chest pain',
    icon: '❤️',
    system: 'Cardiorespiratory',
    blurb: 'Exclude the life-threatening causes first, then the common benign ones.',
    redFlags: [
      'Central/crushing pain, radiation to arm/jaw, sweating, breathlessness → ACS (999)',
      'Sudden tearing pain radiating to the back → aortic dissection (999)',
      'Pleuritic pain with breathlessness/haemoptysis, or unilateral leg swelling → PE',
    ],
    ddx: [
      { heading: S, variant: 'serious', items: [
        { label: 'Acute coronary syndrome / angina', note: 'angina-ihd' },
        { label: 'Pulmonary embolism', note: 'pulmonary-embolism' },
        { label: 'Aortic dissection / aneurysm', note: 'aaa' },
      ]},
      { heading: C, variant: 'common', items: [
        { label: 'Musculoskeletal / costochondritis', note: 'myofascial-pain' },
        { label: 'GORD / dyspepsia', note: 'gord-dyspepsia' },
        { label: 'Anxiety / panic', note: 'anxiety-gad' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Pneumonia / pleurisy', note: 'acuteCough' },
        { label: 'Shingles (before the rash)', note: 'shingles-chickenpox' },
      ]},
    ],
    investigations: ['ECG (and serial); observations incl. SpO₂', 'Troponin / CXR via acute pathway if cardiac/PE suspected', 'Wells score if PE possible'],
  },
  {
    id: 'breathlessness',
    name: 'Breathlessness (dyspnoea)',
    icon: '🫁',
    system: 'Cardiorespiratory',
    blurb: 'Acuity guides urgency; think heart, lungs, blood and anxiety.',
    redFlags: [
      'Acute severe breathlessness, hypoxia (SpO₂ <92%), or unable to speak in sentences → 999',
      'Breathlessness with chest pain / haemoptysis / unilateral leg swelling → PE',
      'Orthopnoea + PND + oedema → decompensated heart failure',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Asthma', note: 'asthmaAdult' },
        { label: 'COPD', note: 'copd' },
        { label: 'Heart failure', note: 'heart-failure' },
        { label: 'Chest infection', note: 'acuteCough' },
        { label: 'Anaemia', note: 'normocytic-anaemia' },
        { label: 'Anxiety / hyperventilation', note: 'anxiety-gad' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Pulmonary embolism', note: 'pulmonary-embolism' },
        { label: 'Anaphylaxis (acute)', note: 'anaphylaxis' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Interstitial lung disease', note: 'interstitial-lung-disease' },
        { label: 'Lung cancer / pleural effusion', note: 'lung-cancer' },
      ]},
    ],
    investigations: ['SpO₂, RR, PEFR; ECG', 'Spirometry; FBC; BNP; CXR', 'Consider D-dimer / Wells for PE'],
  },
  {
    id: 'palpitations-symptom',
    name: 'Palpitations',
    icon: '💓',
    system: 'Cardiorespiratory',
    blurb: 'Capture the rhythm; separate benign ectopics from significant arrhythmia.',
    redFlags: [
      'Palpitations with syncope, chest pain or breathlessness',
      'Family history of sudden cardiac death <40',
      'Sustained fast/irregular rhythm or structural heart disease',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Ectopics / sinus tachycardia (anxiety, caffeine)', note: 'palpitations' },
        { label: 'Atrial fibrillation / flutter', note: 'atrialFibrillation' },
        { label: 'Anxiety', note: 'anxiety-gad' },
        { label: 'Hyperthyroidism', note: 'hyperthyroidism' },
        { label: 'Anaemia', note: 'normocytic-anaemia' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'SVT / VT', note: 'palpitations' },
        { label: 'Cardiomyopathy (HOCM) / long QT', note: 'cardiomyopathies' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Hypoglycaemia', note: 'hypoglycaemia' },
        { label: 'Phaeochromocytoma', note: 'phaeochromocytoma' },
      ]},
    ],
    investigations: ['12-lead ECG; ambulatory ECG to capture episodes', 'FBC; TFT; U&E; glucose', 'Echo if structural disease suspected'],
  },
  {
    id: 'cough',
    name: 'Cough',
    icon: '😮‍💨',
    system: 'Cardiorespiratory',
    blurb: 'Split acute (<3 weeks) from chronic (>8 weeks); watch for the cancer red flags.',
    redFlags: [
      'Haemoptysis; unexplained weight loss; a smoker >40 → lung cancer 2WW / CXR',
      'Breathlessness, chest pain or systemic illness',
      'Cough >3 weeks unexplained → chest X-ray',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Acute URTI / LRTI', note: 'acuteCough' },
        { label: 'Chronic cough (asthma, GORD, post-nasal drip)', note: 'chronicCough' },
        { label: 'Asthma', note: 'asthmaAdult' },
        { label: 'ACE-inhibitor cough', note: 'individual-drug-cautions' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Lung cancer', note: 'lung-cancer' },
        { label: 'Tuberculosis', note: 'tuberculosis' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'COPD', note: 'copd' },
        { label: 'Bronchiectasis', note: 'bronchiectasis' },
        { label: 'Interstitial lung disease', note: 'interstitial-lung-disease' },
        { label: 'Heart failure', note: 'heart-failure' },
      ]},
    ],
    investigations: ['Examination + SpO₂; PEFR/spirometry', 'CXR if >3 weeks or red flags', 'Consider FeNO / sputum'],
    related: [{ label: 'Haemoptysis', note: 'lung-cancer' }],
  },
  {
    id: 'haemoptysis',
    name: 'Haemoptysis (coughing blood)',
    icon: '🩸',
    system: 'Cardiorespiratory',
    blurb: 'Coughing up blood needs a CXR and, in smokers, a low threshold for a 2WW.',
    redFlags: [
      'Haemoptysis + weight loss / smoker >40 → lung-cancer 2WW',
      'Massive haemoptysis, or with breathlessness/hypoxia → 999',
      'Pleuritic pain + risk factors → PE',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Chest infection / bronchitis', note: 'acuteCough' },
        { label: 'Bronchiectasis', note: 'bronchiectasis' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Lung cancer', note: 'lung-cancer' },
        { label: 'Pulmonary embolism', note: 'pulmonary-embolism' },
        { label: 'Tuberculosis', note: 'tuberculosis' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Pulmonary oedema (pink froth)', note: 'heart-failure' },
        { label: 'Anticoagulation; nasal/GI source (mimic)', note: 'epistaxis' },
      ]},
    ],
    investigations: ['CXR (all); FBC, clotting, U&E', '2WW / urgent CXR per NICE if cancer suspected', 'CTPA if PE suspected'],
  },
  {
    id: 'oedema',
    name: 'Leg swelling / oedema',
    icon: '🦵',
    system: 'Cardiorespiratory',
    blurb: 'Bilateral points to a systemic cause; unilateral to DVT/cellulitis.',
    redFlags: [
      'Unilateral hot, swollen, tender calf → DVT',
      'Rapidly spreading redness with fever → cellulitis / sepsis',
      'Sudden bilateral oedema with breathlessness → heart failure',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Venous insufficiency / immobility', note: 'leg-ulcers' },
        { label: 'Heart failure', note: 'heart-failure' },
        { label: 'Drugs (calcium-channel blockers)', note: 'individual-drug-cautions' },
        { label: 'Chronic kidney disease / nephrotic', note: 'proteinuria-nephrotic' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'DVT (unilateral)', note: 'dvt' },
        { label: 'Cellulitis (unilateral)', note: 'cellulitis' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Chronic liver disease', note: 'chronic-liver-disease' },
        { label: 'Hypothyroidism', note: 'hypothyroidism' },
      ]},
    ],
    investigations: ['Assess uni- vs bilateral; U&E, LFT, BNP; urine ACR', 'D-dimer / Wells if unilateral (DVT)', 'ECG; consider echo'],
  },
  {
    id: 'blackout',
    name: 'Blackout / collapse',
    icon: '🕳️',
    system: 'Cardiorespiratory',
    blurb: 'Distinguish syncope (cardiovascular) from seizure and other causes.',
    redFlags: [
      'Exertional syncope, or syncope lying down → cardiac (aortic stenosis, arrhythmia)',
      'No prodrome / injury / palpitations beforehand',
      'Family history of sudden cardiac death',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Vasovagal / situational syncope', note: 'syncope' },
        { label: 'Postural hypotension', note: 'syncope' },
        { label: 'Arrhythmia (AF, brady/tachy)', note: 'atrialFibrillation' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Structural heart disease (aortic stenosis, HOCM)', note: 'valvular-heart-disease' },
        { label: 'Epileptic seizure', note: 'epilepsyAdults' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Hypoglycaemia', note: 'hypoglycaemia' },
        { label: 'Dissociative (functional) attacks', note: 'fnd' },
      ]},
    ],
    investigations: ['12-lead ECG (all); lying/standing BP; glucose', 'FBC; U&E', 'Ambulatory ECG / echo per suspicion; consider DVLA advice'],
    related: [{ label: 'DVLA fitness to drive', note: 'dvla-fitness-to-drive' }],
  },

  // ── Gastrointestinal ──────────────────────────────────────────────────────
  {
    id: 'abdominal-pain',
    name: 'Abdominal pain',
    icon: '🤕',
    system: 'Gastrointestinal',
    blurb: 'Site, onset and associated features narrow a very wide differential.',
    redFlags: [
      'Peritonism, rigidity, or shock → surgical abdomen (999)',
      'Pulsatile/tearing pain in an older arteriopath → ruptured AAA',
      'Pain out of proportion to examination → mesenteric ischaemia',
      'Pain + positive pregnancy test → ectopic until proven otherwise',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Dyspepsia / peptic ulcer', note: 'gord-dyspepsia' },
        { label: 'IBS', note: 'ibs' },
        { label: 'Constipation', note: 'adult-constipation' },
        { label: 'UTI', note: 'uti-women' },
        { label: 'Gallstones / biliary colic', note: 'gallstones-pancreatitis' },
        { label: 'Renal colic', note: 'renal-stones' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Appendicitis / obstruction / perforation', note: 'two-week-wait' },
        { label: 'Ruptured AAA', note: 'aaa' },
        { label: 'Ectopic pregnancy', note: 'miscarriage-ectopic' },
        { label: 'Mesenteric ischaemia', note: 'mesenteric-ischaemia' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Diverticular disease', note: 'diverticular-disease' },
        { label: 'Inflammatory bowel disease', note: 'ibd' },
        { label: 'Coeliac disease', note: 'coeliac-disease' },
      ]},
    ],
    investigations: ['Pregnancy test (any woman of childbearing age); urine dip', 'FBC, U&E, LFT, amylase/lipase, CRP', 'Imaging (USS/CT) per suspicion'],
  },
  {
    id: 'nausea-vomiting',
    name: 'Nausea & vomiting',
    icon: '🤮',
    system: 'Gastrointestinal',
    blurb: 'Usually benign/GI — but exclude bowel obstruction, raised ICP and metabolic causes.',
    redFlags: [
      'Vomiting + severe abdominal pain / distension / no flatus → obstruction',
      'Vomiting + headache worse on lying, or focal neurology → raised ICP',
      'Haematemesis or coffee-ground vomit → upper GI bleed',
      'Vomiting with ketones / dehydration → DKA or hyperemesis',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Gastroenteritis', note: 'gastroenteritis-adult' },
        { label: 'Gastritis / peptic ulcer / GORD', note: 'gord-dyspepsia' },
        { label: 'Medication (opioids, SSRIs, chemo)', note: 'individual-drug-cautions' },
        { label: 'Pregnancy / hyperemesis', note: 'antiemetics-vertigo' },
        { label: 'Vertigo / labyrinthitis', note: 'vertigo' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Bowel obstruction', note: 'two-week-wait' },
        { label: 'Raised intracranial pressure', note: 'brain-tumour' },
        { label: 'DKA', note: 'diabetes-diagnosis' },
        { label: 'Upper GI bleed (haematemesis)', note: 'gord-dyspepsia' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Migraine', note: 'migraine' },
        { label: 'Hypercalcaemia', note: 'hypercalcaemia' },
        { label: 'Cyclical vomiting / functional', note: 'antiemetics-vertigo' },
      ]},
    ],
    investigations: ['Pregnancy test; capillary glucose/ketones; hydration status', 'U&E, FBC, calcium, LFT, amylase per suspicion', 'Imaging if obstruction or neuro cause suspected'],
    related: [{ label: 'Antiemetic choice', note: 'antiemetics-vertigo' }],
  },
  {
    id: 'diarrhoea',
    name: 'Diarrhoea',
    icon: '💩',
    system: 'Gastrointestinal',
    blurb: 'Split acute (usually infective) from chronic (>4 weeks — investigate).',
    redFlags: [
      'Blood in stool + weight loss / change in bowel habit → colorectal cancer (FIT/2WW)',
      'Dehydration, or diarrhoea in the frail/immunosuppressed',
      'Recent antibiotics + severe diarrhoea → C. difficile',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Gastroenteritis (infective)', note: 'gastroenteritis-adult' },
        { label: 'IBS', note: 'ibs' },
        { label: 'Medication (metformin, PPIs, antibiotics)', note: 'individual-drug-cautions' },
        { label: 'Overflow (constipation)', note: 'adult-constipation' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Colorectal cancer', note: 'colorectal-cancer' },
        { label: 'Inflammatory bowel disease', note: 'ibd' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Coeliac disease', note: 'coeliac-disease' },
        { label: 'Bile-acid malabsorption / pancreatic', note: 'chronic-liver-disease' },
        { label: 'Hyperthyroidism', note: 'hyperthyroidism' },
      ]},
    ],
    investigations: ['Stool culture / C. diff if indicated; FIT if red flags', 'FBC, ferritin, U&E, CRP, TFT, coeliac serology', 'Faecal calprotectin (IBD vs IBS)'],
  },
  {
    id: 'constipation-symptom',
    name: 'Constipation',
    icon: '🚽',
    system: 'Gastrointestinal',
    blurb: 'Usually functional — but a new persistent change in an older adult is a red flag.',
    redFlags: [
      'New constipation ≥60 with weight loss / rectal bleeding → colorectal cancer',
      'Absolute constipation + distension/vomiting → obstruction',
      'Red-flag back pain + bowel change → cord/cauda equina',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Functional / low fibre / dehydration', note: 'adult-constipation' },
        { label: 'Medication (opioids, iron, CCBs)', note: 'individual-drug-cautions' },
        { label: 'IBS-C', note: 'ibs' },
        { label: 'Immobility', note: 'frailty' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Colorectal cancer / obstruction', note: 'colorectal-cancer' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Hypothyroidism', note: 'hypothyroidism' },
        { label: 'Hypercalcaemia', note: 'hypercalcaemia' },
      ]},
    ],
    investigations: ['Abdominal + rectal examination', 'FBC, calcium, TFT if atypical; FIT if red flags', 'Treat cause; laxative choice if functional'],
    related: [{ label: 'Faecal incontinence', note: 'faecal-incontinence' }],
  },
  {
    id: 'dyspepsia',
    name: 'Dyspepsia & heartburn',
    icon: '🔥',
    system: 'Gastrointestinal',
    blurb: 'Common and benign — but know the ALARM features for urgent endoscopy.',
    redFlags: [
      'Dysphagia at any age → urgent OGD',
      'Age ≥55 with weight loss + upper abdominal pain/reflux/dyspepsia → OGD',
      'GI bleeding, iron-deficiency anaemia, or an epigastric mass',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'GORD / functional dyspepsia', note: 'gord-dyspepsia' },
        { label: 'Peptic ulcer / H. pylori', note: 'gord-dyspepsia' },
        { label: 'Hiatus hernia', note: 'hiatus-hernia' },
        { label: 'Drug-induced (NSAIDs)', note: 'nsaids' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Oesophageal / gastric cancer', note: 'oesophagogastric-cancer' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Barrett’s oesophagus', note: 'barretts-oesophagus' },
        { label: 'Biliary or cardiac pain (mimic)', note: 'gallstones-pancreatitis' },
      ]},
    ],
    investigations: ['H. pylori test (stool antigen / breath); FBC/ferritin', 'OGD if alarm features', 'Review NSAIDs; PPI trial'],
    related: [{ label: 'PPI deprescribing', note: 'ppi-deprescribing' }],
  },
  {
    id: 'dysphagia-symptom',
    name: 'Dysphagia (difficulty swallowing)',
    icon: '🍽️',
    system: 'Gastrointestinal',
    blurb: 'Progressive dysphagia is a cardinal alarm symptom — urgent OGD.',
    redFlags: [
      'Dysphagia at ANY age → urgent 2WW OGD',
      'Progressive (solids then liquids), weight loss, or food sticking',
    ],
    ddx: [
      { heading: S, variant: 'serious', items: [
        { label: 'Oesophageal / gastric cancer', note: 'oesophagogastric-cancer' },
      ]},
      { heading: C, variant: 'common', items: [
        { label: 'GORD / oesophagitis / peptic stricture', note: 'gord-dyspepsia' },
        { label: 'Neurological (stroke, bulbar)', note: 'stroke-tia' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Achalasia', note: 'dysphagia' },
        { label: 'Motor neuron disease', note: 'motor-neuron-disease' },
        { label: 'Globus (functional)', note: 'dysphagia' },
      ]},
    ],
    investigations: ['Urgent OGD (2WW)', 'FBC/ferritin', 'SALT assessment if neurological / aspiration'],
    related: [{ label: 'Full dysphagia note', note: 'dysphagia' }],
  },
  {
    id: 'rectal-bleeding',
    name: 'Rectal bleeding & change in bowel habit',
    icon: '🩸',
    system: 'Gastrointestinal',
    blurb: 'Usually benign anorectal disease — but exclude colorectal cancer.',
    redFlags: [
      'Change in bowel habit + rectal bleeding/weight loss/iron-deficiency anaemia → 2WW',
      'A rectal or abdominal mass',
      'Age-based FIT / 2WW thresholds (see colorectal cancer)',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Haemorrhoids / anal fissure', note: 'anal-fissure' },
        { label: 'IBS', note: 'ibs' },
        { label: 'Gastroenteritis / infective', note: 'gastroenteritis-adult' },
        { label: 'Diverticular disease', note: 'diverticular-disease' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Colorectal cancer', note: 'colorectal-cancer' },
        { label: 'Inflammatory bowel disease', note: 'ibd' },
        { label: 'Anal cancer', note: 'anal-cancer' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Coeliac disease', note: 'coeliac-disease' },
        { label: 'Ischaemic colitis', note: 'mesenteric-ischaemia' },
      ]},
    ],
    investigations: ['FIT test; FBC/ferritin', 'DRE; examine perianal area', '2WW / colonoscopy per thresholds'],
  },
  {
    id: 'bloating',
    name: 'Bloating & distension',
    icon: '🎈',
    system: 'Gastrointestinal',
    blurb: 'Very common and usually functional — but persistent bloating in women flags ovarian cancer.',
    redFlags: [
      'Persistent bloating (≥12×/month), esp. women >50 → CA125 / ovarian cancer',
      'Weight loss, rectal bleeding or a mass',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'IBS', note: 'ibs' },
        { label: 'Constipation', note: 'adult-constipation' },
        { label: 'Functional / dietary (FODMAPs)', note: 'ibs' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Ovarian cancer', note: 'ovarian-cancer' },
        { label: 'Colorectal / gastric cancer', note: 'colorectal-cancer' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Coeliac disease', note: 'coeliac-disease' },
        { label: 'Ascites (liver disease)', note: 'chronic-liver-disease' },
      ]},
    ],
    investigations: ['CA125 in women with persistent symptoms; FBC/ferritin', 'Coeliac serology; FIT if bowel symptoms', 'USS/pelvic imaging per suspicion'],
  },
  {
    id: 'jaundice',
    name: 'Jaundice',
    icon: '🟡',
    system: 'Gastrointestinal',
    blurb: 'Split the bilirubin and think pre-hepatic, hepatic and obstructive.',
    redFlags: [
      'PAINLESS obstructive jaundice ≥40 → pancreatic/biliary cancer 2WW',
      'Jaundice with confusion, ascites or GI bleeding → decompensated liver disease',
      'Fever + right-upper-quadrant pain + jaundice → cholangitis (sepsis)',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Gallstones / biliary obstruction', note: 'gallstones-pancreatitis' },
        { label: 'Viral / alcoholic hepatitis', note: 'hepatitis' },
        { label: 'Chronic liver disease / cirrhosis', note: 'chronic-liver-disease' },
        { label: 'Gilbert’s syndrome', note: 'abnormal-lft' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Pancreatic / biliary cancer', note: 'pancreatic-biliary-cancer' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Haemolysis (pre-hepatic)', note: 'g6pd-spherocytosis' },
        { label: 'Haemochromatosis', note: 'haemochromatosis' },
      ]},
    ],
    investigations: ['LFTs with SPLIT bilirubin; FBC; coagulation', 'Liver screen (viral, autoimmune, ferritin)', 'Urgent USS ± CT'],
    related: [{ label: 'Abnormal LFTs approach', note: 'abnormal-lft' }],
  },

  // ── Neurology ─────────────────────────────────────────────────────────────
  {
    id: 'headache',
    name: 'Headache',
    icon: '🤯',
    system: 'Neurology',
    blurb: 'Exclude the secondary red flags, then classify the primary headache.',
    redFlags: [
      'Thunderclap (maximal in seconds/minutes) → subarachnoid haemorrhage (999)',
      'New headache >50 with scalp tenderness/jaw claudication → GCA (start steroids)',
      'Fever + neck stiffness / non-blanching rash → meningitis',
      'Features of raised ICP (worse on lying/straining, morning, vomiting, papilloedema)',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Tension-type headache', note: 'headache-assessment' },
        { label: 'Migraine', note: 'migraine' },
        { label: 'Medication-overuse headache', note: 'headache-assessment' },
        { label: 'Cluster headache', note: 'cluster-headache' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Giant cell arteritis', note: 'gca' },
        { label: 'Brain tumour / raised ICP', note: 'brain-tumour' },
        { label: 'Meningitis', note: 'meningitis' },
        { label: 'Carbon monoxide poisoning', note: 'co-poisoning' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Idiopathic intracranial hypertension', note: 'iih' },
        { label: 'Trigeminal neuralgia', note: 'trigeminal-neuralgia' },
        { label: 'Sinusitis', note: 'rhinosinusitis' },
      ]},
    ],
    investigations: ['Full neuro exam incl. fundoscopy & BP', 'ESR/CRP if GCA suspected (do not delay steroids)', 'Imaging for red flags'],
  },
  {
    id: 'limb-weakness',
    name: 'Weakness / limb weakness',
    icon: '🦾',
    system: 'Neurology',
    blurb: 'Pattern and speed of onset localise the lesion; some are emergencies.',
    redFlags: [
      'Sudden focal weakness / facial droop / speech change → stroke (FAST, 999)',
      'Ascending symmetrical weakness with areflexia → Guillain-Barré (admit)',
      'Bladder/bowel dysfunction + bilateral leg weakness → cord/cauda equina',
    ],
    ddx: [
      { heading: S, variant: 'serious', items: [
        { label: 'Stroke / TIA', note: 'stroke-tia' },
        { label: 'Guillain-Barré syndrome', note: 'guillain-barre' },
        { label: 'Cord compression / cauda equina', note: 'lower-back-pain' },
      ]},
      { heading: C, variant: 'common', items: [
        { label: 'Bell’s palsy (facial)', note: 'bells-palsy' },
        { label: 'Radiculopathy (nerve root)', note: 'neck-pain' },
        { label: 'Functional neurological disorder', note: 'fnd' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Multiple sclerosis', note: 'multiple-sclerosis' },
        { label: 'Motor neuron disease', note: 'motor-neuron-disease' },
      ]},
    ],
    investigations: ['Full neuro exam; localise UMN vs LMN', 'Glucose; consider FBC/U&E/B12', 'Urgent imaging / admission per red flags'],
  },
  {
    id: 'tremor',
    name: 'Tremor',
    icon: '🤝',
    system: 'Neurology',
    blurb: 'Rest vs action tremor is the key discriminator.',
    redFlags: [
      'Asymmetric rest tremor with bradykinesia/rigidity → Parkinsonism',
      'Rapidly progressive or with red-flag neurology',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Essential tremor (action)', note: 'essential-tremor' },
        { label: 'Physiological (anxiety, caffeine)', note: 'anxiety-gad' },
        { label: 'Hyperthyroidism', note: 'hyperthyroidism' },
        { label: 'Drug-induced / alcohol withdrawal', note: 'alcohol-etoh' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Parkinson’s disease (rest tremor)', note: 'parkinsons-pd' },
      ]},
    ],
    investigations: ['TFT; observe rest vs action', 'Medication/alcohol review', 'Refer neurology if Parkinsonism / diagnostic doubt'],
  },
  {
    id: 'paraesthesia',
    name: 'Numbness & tingling',
    icon: '✋',
    system: 'Neurology',
    blurb: 'Distribution (nerve, root, glove-and-stocking, or central) localises the cause.',
    redFlags: [
      'Sudden onset with weakness/speech change → stroke/TIA',
      'Saddle anaesthesia + bladder/bowel change → cauda equina',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Carpal tunnel syndrome', note: 'carpal-tunnel' },
        { label: 'Diabetic / peripheral neuropathy', note: 'diabetic-neuropathy' },
        { label: 'Cervical / lumbar radiculopathy', note: 'neck-pain' },
        { label: 'Hyperventilation / anxiety', note: 'anxiety-gad' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'B12 deficiency', note: 'vitamin-b12' },
        { label: 'Multiple sclerosis', note: 'multiple-sclerosis' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Stroke / TIA', note: 'stroke-tia' },
      ]},
    ],
    investigations: ['Examine sensory distribution & reflexes', 'HbA1c; B12/folate; TFT', 'Nerve conduction studies if focal/uncertain'],
  },
  {
    id: 'memory-problems',
    name: 'Memory problems / cognitive decline',
    icon: '🧩',
    system: 'Neurology',
    blurb: 'Separate dementia from delirium, depression and reversible causes before labelling.',
    redFlags: [
      'Rapid decline (weeks), young onset, or focal neurology → urgent referral',
      'Acute fluctuating confusion → delirium (not dementia)',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Dementia (Alzheimer’s, vascular)', note: 'dementia' },
        { label: 'Depression (pseudodementia)', note: 'depression' },
        { label: 'Delirium (acute)', note: 'delirium' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'B12 / folate deficiency', note: 'vitamin-b12' },
        { label: 'Hypothyroidism', note: 'hypothyroidism' },
        { label: 'Medication / alcohol', note: 'alcohol-etoh' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Space-occupying lesion / NPH', note: 'brain-tumour' },
      ]},
    ],
    investigations: ['Cognitive testing (6-CIT/MMSE); collateral history', 'Dementia bloods: FBC, U&E, calcium, LFT, TFT, glucose, B12/folate', 'Consider CT/MRI; memory-clinic referral'],
  },

  // ── Urogenital ────────────────────────────────────────────────────────────
  {
    id: 'dysuria-symptom',
    name: 'Dysuria & lower urinary symptoms',
    icon: '🚻',
    system: 'Urogenital',
    blurb: 'Usually UTI — but reconsider when cultures are negative or it is a man.',
    redFlags: [
      'Visible haematuria → 2WW suspected bladder cancer',
      'Systemic illness / loin pain → pyelonephritis',
      'Any UTI in a man, or recurrent with sterile pyuria',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'UTI (women)', note: 'uti-women' },
        { label: 'UTI / prostatitis (men)', note: 'uti-men' },
        { label: 'STI / urethritis', note: 'stis' },
        { label: 'Vaginal / genital cause', note: 'vaginal-discharge' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Bladder pain syndrome (sterile)', note: 'interstitial-cystitis' },
        { label: 'BPH / LUTS', note: 'bph-luts' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Bladder cancer (with haematuria)', note: 'haematuria' },
      ]},
    ],
    investigations: ['Urine dip + MC&S (always in men/pregnancy)', 'STI screen where relevant', 'Recheck haematuria resolves after treatment'],
    related: [{ label: 'Full dysuria DDx note', note: 'dysuria' }],
  },
  {
    id: 'haematuria-symptom',
    name: 'Haematuria (blood in urine)',
    icon: '🧫',
    system: 'Urogenital',
    blurb: 'Visible haematuria is a cancer red flag until proven otherwise.',
    redFlags: [
      'Visible haematuria ≥45 (without UTI, or persisting after treatment) → 2WW',
      'Non-visible haematuria ≥60 with dysuria or raised WCC → 2WW',
      'Clot retention or heavy bleeding',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'UTI', note: 'uti-women' },
        { label: 'Renal / bladder stones', note: 'renal-stones' },
        { label: 'BPH / prostatitis', note: 'bph-luts' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Bladder / renal cancer', note: 'two-week-wait' },
        { label: 'Prostate cancer', note: 'prostate-cancer' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Glomerulonephritis (with proteinuria)', note: 'proteinuria-nephrotic' },
        { label: 'Polycystic kidney disease', note: 'pckd' },
      ]},
    ],
    investigations: ['Confirm on dip + exclude UTI (MC&S)', 'U&E/eGFR; urine ACR; BP', '2WW urology per thresholds'],
    related: [{ label: 'Full haematuria note', note: 'haematuria' }],
  },
  {
    id: 'urinary-incontinence-symptom',
    name: 'Urinary incontinence',
    icon: '💧',
    system: 'Urogenital',
    blurb: 'Classify stress vs urge vs overflow — it directs conservative and drug treatment.',
    redFlags: [
      'Visible haematuria, or a pelvic mass → urgent referral',
      'New incontinence + neurology (leg weakness, saddle numbness) → cauda equina',
      'Recurrent UTI / retention with overflow',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Stress incontinence', note: 'urinary-incontinence' },
        { label: 'Urge / overactive bladder', note: 'urinary-incontinence' },
        { label: 'Mixed incontinence', note: 'urinary-incontinence' },
        { label: 'BPH with overflow (men)', note: 'bph-luts' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'UTI', note: 'uti-women' },
        { label: 'Vaginal atrophy', note: 'menopause' },
        { label: 'Constipation / medications', note: 'adult-constipation' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Neurological (cord/cauda equina)', note: 'lower-back-pain' },
      ]},
    ],
    investigations: ['Bladder diary; urine dip + MC&S', 'Post-void residual if retention suspected', 'Pelvic-floor / examination; treat by type'],
  },
  {
    id: 'erectile-dysfunction-symptom',
    name: 'Erectile dysfunction',
    icon: '♂️',
    system: 'Urogenital',
    blurb: 'Often the first sign of vascular disease — screen cardiovascular risk.',
    redFlags: [
      'ED is an independent cardiovascular risk marker → assess QRISK / do bloods',
      'Sudden onset with a clear psychological trigger (still assess organically)',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Vascular / cardiovascular disease', note: 'erectile-dysfunction' },
        { label: 'Diabetes', note: 'diabetes-diagnosis' },
        { label: 'Psychogenic / relationship', note: 'erectile-dysfunction' },
        { label: 'Medication (antihypertensives, SSRIs)', note: 'individual-drug-cautions' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Hypogonadism / low testosterone', note: 'erectile-dysfunction' },
        { label: 'Hyperprolactinaemia / thyroid', note: 'hyperthyroidism' },
        { label: 'Alcohol / smoking', note: 'alcohol-etoh' },
      ]},
    ],
    investigations: ['HbA1c, lipids, U&E; 9am testosterone (± prolactin, LH/FSH)', 'BP & cardiovascular risk (QRISK)', 'PDE5-inhibitor trial; treat reversible causes'],
  },
  {
    id: 'scrotal-symptom',
    name: 'Scrotal / testicular pain & lumps',
    icon: '⚕️',
    system: 'Urogenital',
    blurb: 'Acute severe pain is torsion until proven otherwise; a solid lump is cancer.',
    redFlags: [
      'Sudden severe testicular pain (esp. adolescent) → torsion (surgical emergency)',
      'A hard, craggy, non-transilluminating intratesticular lump → 2WW/USS',
    ],
    ddx: [
      { heading: S, variant: 'serious', items: [
        { label: 'Testicular torsion', note: 'acute-testicular-pain' },
        { label: 'Testicular cancer', note: 'testicular-penile-cancer' },
      ]},
      { heading: C, variant: 'common', items: [
        { label: 'Epididymo-orchitis', note: 'acute-testicular-pain' },
        { label: 'Epididymal cyst / hydrocele / varicocele', note: 'scrotal-groin-lumps' },
        { label: 'Inguinal hernia', note: 'hernias' },
      ]},
    ],
    investigations: ['Urgent urology/USS if torsion or solid lump suspected', 'Urine dip / STI screen for epididymo-orchitis', 'Examine standing and lying'],
  },

  // ── Women's health ────────────────────────────────────────────────────────
  {
    id: 'hmb-symptom',
    name: 'Heavy menstrual bleeding',
    icon: '🩸',
    system: "Women's health",
    blurb: 'Common and quality-of-life limiting; exclude structural and systemic causes.',
    redFlags: [
      'Intermenstrual / postcoital bleeding → assess for cervical/endometrial pathology',
      'Persistent bleeding with risk factors → endometrial cancer',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Dysfunctional / no structural cause', note: 'hmb-fibroids' },
        { label: 'Fibroids / adenomyosis', note: 'hmb-fibroids' },
        { label: 'PCOS / anovulation', note: 'pcos' },
        { label: 'Hypothyroidism', note: 'hypothyroidism' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Bleeding disorder (from menarche)', note: 'haemophilia-vwd' },
        { label: 'Copper coil', note: 'larcs' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Endometrial / cervical cancer', note: 'endometrial-cancer' },
      ]},
    ],
    investigations: ['FBC/ferritin; consider TFT & coagulation', 'Pelvic/TV ultrasound if structural cause suspected', 'Smear up to date; refer if IMB/PCB'],
  },
  {
    id: 'irregular-periods',
    name: 'Irregular or absent periods',
    icon: '📅',
    system: "Women's health",
    blurb: 'Always exclude pregnancy first, then work through the hormonal axis.',
    redFlags: [
      'Postcoital / intermenstrual bleeding → cervical assessment',
      'Amenorrhoea + headache/visual field loss / galactorrhoea → pituitary',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Pregnancy', note: 'amenorrhoea' },
        { label: 'PCOS', note: 'pcos' },
        { label: 'Perimenopause', note: 'menopause' },
        { label: 'Contraception (progestogen)', note: 'larcs' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Thyroid disease', note: 'hypothyroidism' },
        { label: 'Hyperprolactinaemia', note: 'amenorrhoea' },
        { label: 'Hypothalamic (weight, stress, exercise)', note: 'amenorrhoea' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Premature ovarian insufficiency', note: 'menopause' },
      ]},
    ],
    investigations: ['Pregnancy test always; FSH/LH, oestradiol, prolactin, TFT', 'Testosterone/SHBG if PCOS features', 'Pelvic USS per suspicion'],
    related: [{ label: 'Full amenorrhoea note', note: 'amenorrhoea' }],
  },
  {
    id: 'menopause-symptom',
    name: 'Menopausal symptoms',
    icon: '🔥',
    system: "Women's health",
    blurb: 'A clinical diagnosis over 45 — vasomotor, genitourinary and psychological.',
    redFlags: [
      'Postmenopausal bleeding → 2WW (see that presentation)',
      'Unscheduled bleeding on HRT that persists',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Perimenopause / menopause', note: 'menopause' },
        { label: 'Vaginal atrophy (GSM)', note: 'menopause' },
        { label: 'Anxiety / low mood', note: 'anxiety-gad' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Thyroid disease', note: 'hyperthyroidism' },
        { label: 'Premature ovarian insufficiency (<40)', note: 'menopause' },
      ]},
    ],
    investigations: ['Clinical diagnosis if ≥45 with typical symptoms', 'FSH only if <45 or diagnostic doubt', 'Assess HRT suitability & cardiovascular risk'],
    related: [{ label: 'Bleeding on HRT', note: 'bleeding-on-hrt' }, { label: 'Postmenopausal bleeding', note: 'endometrial-cancer' }],
  },
  {
    id: 'vaginal-discharge-symptom',
    name: 'Vaginal discharge',
    icon: '🌸',
    system: "Women's health",
    blurb: 'Separate the non-sexually-transmitted causes from STIs; treat empirically where clear.',
    redFlags: [
      'Discharge + pelvic pain / fever / deep dyspareunia → PID',
      'Postcoital / intermenstrual bleeding → cervical assessment',
      'Discharge in pregnancy',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Bacterial vaginosis', note: 'vaginal-discharge' },
        { label: 'Vulvovaginal candidiasis', note: 'vaginal-discharge' },
        { label: 'Chlamydia / gonorrhoea', note: 'stis' },
        { label: 'Trichomonas', note: 'stis' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Pelvic inflammatory disease', note: 'stis' },
        { label: 'Cervical cancer (with bleeding)', note: 'cervical-cancer' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Atrophic vaginitis', note: 'menopause' },
        { label: 'Retained tampon / foreign body', note: 'vaginal-discharge' },
      ]},
    ],
    investigations: ['Vaginal pH; high vaginal + endocervical/NAAT swabs', 'STI screen where relevant', 'Examine cervix; treat empirically if classic'],
  },
  {
    id: 'breast-lump-symptom',
    name: 'Breast lump',
    icon: '🎀',
    system: "Women's health",
    blurb: 'Most are benign — but a new discrete lump needs assessment.',
    redFlags: [
      'New discrete lump (esp. ≥30), skin/nipple change, or bloody discharge → 2WW',
      'Persistent unilateral eczema of the nipple → Paget’s',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Fibroadenoma / cyst / benign', note: 'benign-breast' },
        { label: 'Mastitis / abscess', note: 'mastitis-breast-pain' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Breast cancer', note: 'breast-cancer' },
      ]},
    ],
    investigations: ['Triple assessment via 2WW breast clinic', 'Examine both breasts and axillae', 'Do not over-reassure a discrete lump'],
  },
  {
    id: 'pelvic-pain-symptom',
    name: 'Pelvic pain (women)',
    icon: '🎗️',
    system: "Women's health",
    blurb: 'Cyclical vs acute vs chronic guides the differential.',
    redFlags: [
      'Acute pain + positive pregnancy test → ectopic (999/EPAU)',
      'Fever, discharge, deep dyspareunia → PID',
      'Adnexal mass / ovarian accident',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Dysmenorrhoea / PMS', note: 'pms-dysmenorrhoea' },
        { label: 'Endometriosis / adenomyosis', note: 'endometriosis' },
        { label: 'Ovarian cyst', note: 'ovarian-cyst' },
        { label: 'PID / STI', note: 'stis' },
        { label: 'IBS / bladder pain', note: 'ibs' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Ectopic pregnancy', note: 'miscarriage-ectopic' },
        { label: 'Ovarian cancer', note: 'ovarian-cancer' },
      ]},
    ],
    investigations: ['Pregnancy test; STI/HVS swabs', 'Pelvic/TV ultrasound', 'CA125 per ovarian-cancer pathway'],
    related: [{ label: 'Chronic pelvic pain', note: 'chronic-pelvic-pain' }],
  },
  {
    id: 'subfertility-symptom',
    name: 'Difficulty conceiving',
    icon: '👶',
    system: "Women's health",
    blurb: 'Investigate after 12 months (or 6 if ≥36 / risk factors) — assess both partners.',
    redFlags: [
      'Amenorrhoea / very irregular cycles → anovulation workup',
      'Previous PID, ectopic or pelvic surgery → tubal factor',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Anovulation / PCOS', note: 'pcos' },
        { label: 'Male factor', note: 'subfertility' },
        { label: 'Tubal / pelvic factor', note: 'subfertility' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Endometriosis', note: 'endometriosis' },
        { label: 'Thyroid / prolactin', note: 'hypothyroidism' },
        { label: 'Age-related / unexplained', note: 'subfertility' },
      ]},
    ],
    investigations: ['Day-21 progesterone; rubella; chlamydia; TFT/prolactin', 'Semen analysis for the male partner', 'Refer per NICE; pre-conception advice (folic acid)'],
  },

  // ── Musculoskeletal ───────────────────────────────────────────────────────
  {
    id: 'back-pain-symptom',
    name: 'Low back pain',
    icon: '🔩',
    system: 'Musculoskeletal',
    blurb: 'Mostly benign mechanical pain — screen for the serious causes.',
    redFlags: [
      'Bilateral sciatica, saddle anaesthesia, urinary retention/incontinence → cauda equina (emergency)',
      'Thoracic pain, age <20 or >55, systemic illness, weight loss, cancer history',
      'Fever / IV drug use → spinal infection',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Mechanical / non-specific back pain', note: 'lower-back-pain' },
        { label: 'Sciatica / radiculopathy', note: 'lower-back-pain' },
        { label: 'Osteoarthritis', note: 'osteoarthritis' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Cauda equina syndrome', note: 'lower-back-pain' },
        { label: 'Malignancy / myeloma / metastases', note: 'sarcoma-bone-cancer' },
        { label: 'Vertebral fragility fracture', note: 'osteoporosis' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Axial spondyloarthritis (inflammatory)', note: 'inflammatory-arthritis' },
      ]},
    ],
    investigations: ['Neuro exam of the legs; red-flag screen', 'Inflammatory markers / imaging only if red flags or inflammatory features', 'Consider myeloma screen in the older patient'],
  },
  {
    id: 'joint-pain-symptom',
    name: 'Joint pain & swelling',
    icon: '🦴',
    system: 'Musculoskeletal',
    blurb: 'Number of joints, inflammation and acuity separate the causes.',
    redFlags: [
      'A single hot, swollen, very painful joint → septic arthritis (aspirate, urgent)',
      'Systemic illness, rash, or rapidly destructive arthritis',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Osteoarthritis', note: 'osteoarthritis' },
        { label: 'Gout / pseudogout', note: 'gout' },
        { label: 'Soft-tissue / tendinopathy', note: 'tennis-elbow-tendinopathy' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Septic arthritis', note: 'gout' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Rheumatoid / inflammatory arthritis', note: 'inflammatory-arthritis' },
        { label: 'Polymyalgia rheumatica', note: 'pmr' },
        { label: 'Connective tissue disease (SLE)', note: 'sle-sjogrens' },
      ]},
    ],
    investigations: ['Aspirate any acute hot joint (microscopy, culture, crystals)', 'FBC, inflammatory markers, urate, RF/anti-CCP', 'X-ray / refer per pattern'],
  },
  {
    id: 'shoulder-pain-symptom',
    name: 'Shoulder pain',
    icon: '💪',
    system: 'Musculoskeletal',
    blurb: 'Localise to the joint vs referred; range of movement points to the structure.',
    redFlags: [
      'Trauma with loss of rotation / deformity → fracture or dislocation',
      'Referred pain: cardiac, diaphragmatic or apical lung → look beyond the shoulder',
      'Hot swollen joint, or mass → septic arthritis / tumour',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Rotator cuff / subacromial pain', note: 'shoulder-problems' },
        { label: 'Frozen shoulder (adhesive capsulitis)', note: 'shoulder-problems' },
        { label: 'Glenohumeral osteoarthritis', note: 'osteoarthritis' },
        { label: 'Acromioclavicular joint pain', note: 'shoulder-problems' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Cervical radiculopathy (referred)', note: 'neck-pain' },
        { label: 'Polymyalgia rheumatica', note: 'pmr' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Referred cardiac / lung pathology', note: 'angina-ihd' },
      ]},
    ],
    investigations: ['Examine active/passive ROM; painful arc tests', 'X-ray if trauma or OA; consider USS', 'Refer physiotherapy; inject per protocol'],
  },
  {
    id: 'widespread-pain-symptom',
    name: 'Widespread / chronic pain',
    icon: '🕸️',
    system: 'Musculoskeletal',
    blurb: 'Distinguish fibromyalgia and chronic primary pain from inflammatory and endocrine mimics.',
    redFlags: [
      'Proximal pain + stiffness >50 with raised ESR → PMR / GCA',
      'Weight loss, fevers, or objective weakness → inflammatory/malignant cause',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Fibromyalgia', note: 'fibromyalgia' },
        { label: 'Chronic primary pain', note: 'chronic-pain' },
        { label: 'Osteoarthritis (generalised)', note: 'osteoarthritis' },
        { label: 'Depression / poor sleep', note: 'depression' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Polymyalgia rheumatica', note: 'pmr' },
        { label: 'Inflammatory arthritis', note: 'inflammatory-arthritis' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Hypothyroidism', note: 'hypothyroidism' },
        { label: 'Vitamin D deficiency', note: 'vitamin-b12' },
        { label: 'Statin-related myalgia', note: 'individual-drug-cautions' },
      ]},
    ],
    investigations: ['FBC, ESR/CRP, TFT, calcium, vitamin D, CK', 'Consider RF/anti-CCP only if synovitis', 'Diagnose fibromyalgia positively (avoid over-investigation)'],
  },

  // ── Skin ──────────────────────────────────────────────────────────────────
  {
    id: 'acute-rash',
    name: 'Acute rash (approach)',
    icon: '🌡️',
    system: 'Skin',
    blurb: 'Describe morphology and distribution; spot the few rashes that signal an emergency.',
    redFlags: [
      'Non-blanching (purpuric) rash + unwell → meningococcal sepsis (see purpura)',
      'Blistering / mucosal involvement / skin pain → SJS/TEN or eczema herpeticum',
      'Rash + facial/tongue swelling or wheeze → anaphylaxis',
      'Widespread erythema + systemic upset → erythroderma',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Eczema / dermatitis', note: 'atopic-eczema' },
        { label: 'Contact / allergic dermatitis', note: 'contact-dermatitis' },
        { label: 'Urticaria', note: 'urticaria-angioedema' },
        { label: 'Viral exanthem', note: 'childhood-viral-rashes' },
        { label: 'Drug eruption', note: 'individual-drug-cautions' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Anaphylaxis (with airway/systemic signs)', note: 'anaphylaxis' },
        { label: 'Meningococcal / purpuric rash', note: 'meningitis' },
        { label: 'Eczema herpeticum', note: 'atopic-eczema' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Psoriasis', note: 'psoriasis' },
        { label: 'Cellulitis (localised, hot)', note: 'cellulitis' },
        { label: 'Fungal / tinea', note: 'fungal-skin-infections' },
        { label: 'Erythema nodosum', note: 'erythema-nodosum' },
      ]},
    ],
    investigations: ['Describe: morphology, distribution, blanching, mucosae', 'Obs if systemically unwell; photograph for records', 'Swab if infected/weeping; refer urgently for red flags'],
    related: [{ label: 'Describing skin lesions', note: 'skin-lesion-morphology' }, { label: 'Non-blanching rash', note: 'meningitis' }],
  },
  {
    id: 'purpura-symptom',
    name: 'Non-blanching rash / purpura',
    icon: '🟣',
    system: 'Skin',
    blurb: 'A non-blanching rash always needs a cause — some are immediately life-threatening.',
    redFlags: [
      'Non-blanching rash + fever / unwell (any age) → meningococcal sepsis (999)',
      'Widespread petechiae + bleeding → thrombocytopenia / leukaemia',
      'Purpura + acute kidney or joint involvement → vasculitis (HSP)',
    ],
    ddx: [
      { heading: S, variant: 'serious', items: [
        { label: 'Meningococcal septicaemia', note: 'meningitis' },
        { label: 'Thrombocytopenia / leukaemia (ITP)', note: 'haem-malignancies' },
        { label: 'Henoch-Schönlein purpura / vasculitis', note: 'childhood-viral-rashes' },
      ]},
      { heading: C, variant: 'common', items: [
        { label: 'Senile / actinic purpura', note: 'skin-lesion-morphology' },
        { label: 'Trauma / steroid-related', note: 'skin-lesion-morphology' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Anticoagulant-related bleeding', note: 'individual-drug-cautions' },
      ]},
    ],
    investigations: ['Glass (tumbler) test; full obs incl. temperature', 'FBC + film, clotting, U&E, CRP; urine dip (vasculitis)', 'Emergency admission if febrile/unwell'],
  },
  {
    id: 'itch-symptom',
    name: 'Itch (pruritus)',
    icon: '🪶',
    system: 'Skin',
    blurb: 'The key split: is there a primary rash, or itch without one (systemic)?',
    redFlags: [
      'Itch with weight loss, night sweats or lymphadenopathy → lymphoma',
      'Itch in pregnancy (palms/soles, no rash) → obstetric cholestasis',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Eczema / dermatitis', note: 'atopic-eczema' },
        { label: 'Scabies', note: 'scabies-lice' },
        { label: 'Urticaria', note: 'urticaria-angioedema' },
        { label: 'Dry skin / senile pruritus', note: 'pruritus' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Cholestatic (liver) itch', note: 'chronic-liver-disease' },
        { label: 'Renal (uraemic) itch', note: 'ckd' },
        { label: 'Iron deficiency', note: 'normocytic-anaemia' },
        { label: 'Thyroid disease', note: 'hyperthyroidism' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Lymphoma / haematological malignancy', note: 'haem-malignancies' },
      ]},
    ],
    investigations: ['Examine for a primary rash / burrows', 'FBC, ferritin, U&E, LFT, TFT, glucose', 'Bile acids in pregnancy; malignancy screen if red flags'],
    related: [{ label: 'Full pruritus note', note: 'pruritus' }],
  },
  {
    id: 'skin-lesion-symptom',
    name: 'Changing mole / skin lesion',
    icon: '🔍',
    system: 'Skin',
    blurb: 'Apply the ABCDE / ugly-duckling rules and the non-healing-lesion red flags.',
    redFlags: [
      'Changing pigmented lesion (ABCDE) or new nodule → 2WW melanoma',
      'Non-healing, bleeding, ulcerated or enlarging lesion (esp. sun-exposed/ear/lip)',
    ],
    ddx: [
      { heading: S, variant: 'serious', items: [
        { label: 'Melanoma', note: 'melanoma' },
        { label: 'Squamous cell carcinoma / Bowen’s', note: 'scc-bowens' },
        { label: 'Basal cell carcinoma', note: 'bcc' },
      ]},
      { heading: C, variant: 'common', items: [
        { label: 'Actinic keratosis', note: 'actinic-keratosis' },
        { label: 'Seborrhoeic keratosis / benign naevus', note: 'skin-lesion-morphology' },
        { label: 'Viral wart', note: 'warts-molluscum' },
      ]},
    ],
    investigations: ['Dermoscopy; measure and photograph', '2WW / dermatology per suspicion — do not shave-biopsy suspected melanoma/SCC', 'Sun-protection advice'],
    related: [{ label: 'Describing skin lesions', note: 'skin-lesion-morphology' }],
  },

  // ── Mental health ─────────────────────────────────────────────────────────
  {
    id: 'low-mood',
    name: 'Low mood',
    icon: '🌧️',
    system: 'Mental health',
    blurb: 'Assess severity and risk; screen for bipolarity and organic mimics.',
    redFlags: [
      'Suicidal ideation / plan, or risk to others → urgent risk assessment',
      'Psychotic features; severe self-neglect',
      'A past manic/hypomanic episode → do not start an antidepressant alone',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Depression', note: 'depression' },
        { label: 'Anxiety disorders', note: 'anxiety-gad' },
        { label: 'Stress / grief / adjustment', note: 'stress-grief-adjustment' },
        { label: 'Alcohol / substance misuse', note: 'alcohol-etoh' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Bipolar disorder', note: 'mania-hypomania' },
        { label: 'Hypothyroidism', note: 'hypothyroidism' },
        { label: 'Anaemia', note: 'normocytic-anaemia' },
        { label: 'Perinatal depression', note: 'perinatal-mh' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Suicide / self-harm risk', note: 'suicide-self-harm' },
      ]},
    ],
    investigations: ['PHQ-9 / GAD-7; risk assessment', 'Consider FBC, TFT, ferritin, B12 if fatigue-predominant', 'Screen for bipolarity and alcohol'],
  },
  {
    id: 'anxiety-symptom',
    name: 'Anxiety',
    icon: '😰',
    system: 'Mental health',
    blurb: 'Common and treatable — but exclude the physical mimics before labelling.',
    redFlags: [
      'Palpitations/sweats/weight loss → hyperthyroidism or arrhythmia',
      'Panic with chest pain/breathlessness → rule out cardiac/PE first',
      'Suicidal ideation or severe functional impairment',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Generalised anxiety disorder', note: 'anxiety-gad' },
        { label: 'Panic disorder', note: 'anxiety-gad' },
        { label: 'Depression (mixed)', note: 'depression' },
        { label: 'Stress / adjustment', note: 'stress-grief-adjustment' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Hyperthyroidism', note: 'hyperthyroidism' },
        { label: 'Caffeine / stimulants / substance misuse', note: 'substance-misuse' },
        { label: 'Medication / withdrawal', note: 'individual-drug-cautions' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Arrhythmia / phaeochromocytoma (mimic)', note: 'phaeochromocytoma' },
      ]},
    ],
    investigations: ['GAD-7; risk assessment', 'TFT (± ECG) where physical symptoms predominate', 'Screen for depression and substance use'],
    related: [{ label: 'Insomnia', note: 'insomnia' }],
  },

  // ── ENT & eyes ────────────────────────────────────────────────────────────
  {
    id: 'visual-loss-symptom',
    name: 'Sudden visual loss',
    icon: '👁️',
    system: 'ENT & eyes',
    blurb: 'A same-day ophthalmology emergency in most cases.',
    redFlags: [
      'Any sudden loss of vision → same-day ophthalmology',
      'New headache/jaw claudication >50 with visual symptoms → GCA (start steroids)',
      'Flashes + a curtain/shadow across vision → retinal detachment',
    ],
    ddx: [
      { heading: S, variant: 'serious', items: [
        { label: 'Giant cell arteritis', note: 'gca' },
        { label: 'Retinal artery/vein occlusion; detachment', note: 'visual-loss' },
        { label: 'Wet age-related macular degeneration', note: 'amd' },
        { label: 'Stroke / TIA (amaurosis fugax)', note: 'stroke-tia' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Acute angle-closure glaucoma (painful)', note: 'glaucoma' },
        { label: 'Optic neuritis', note: 'multiple-sclerosis' },
      ]},
    ],
    investigations: ['Visual acuity, fields, fundoscopy, RAPD', 'ESR/CRP urgently if GCA suspected', 'Same-day eye casualty referral'],
    related: [{ label: 'Full visual-loss note', note: 'visual-loss' }],
  },
  {
    id: 'red-eye-symptom',
    name: 'Red eye',
    icon: '🔴',
    system: 'ENT & eyes',
    blurb: 'Most are benign conjunctivitis; spot the sight-threatening causes.',
    redFlags: [
      'Pain, photophobia, reduced vision, or a fixed mid-dilated pupil → sight-threatening',
      'Contact-lens wearer with a painful red eye → keratitis',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Conjunctivitis', note: 'conjunctivitis' },
        { label: 'Dry eye / blepharitis', note: 'dry-eyes-blepharitis' },
        { label: 'Subconjunctival haemorrhage', note: 'red-eye' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Acute angle-closure glaucoma', note: 'glaucoma' },
        { label: 'Keratitis / corneal ulcer', note: 'red-eye' },
        { label: 'Anterior uveitis / iritis', note: 'red-eye' },
        { label: 'Scleritis', note: 'red-eye' },
      ]},
    ],
    investigations: ['Visual acuity; fluorescein; pupil reaction', 'Same-day referral for any red-flag red eye', 'Swab if severe/neonatal conjunctivitis'],
    related: [{ label: 'Full red-eye note', note: 'red-eye' }],
  },
  {
    id: 'sore-throat-symptom',
    name: 'Sore throat',
    icon: '🗣️',
    system: 'ENT & eyes',
    blurb: 'Mostly self-limiting viral; use FeverPAIN/Centor and spot the emergencies.',
    redFlags: [
      'Stridor, drooling, muffled voice, or difficulty swallowing secretions → airway emergency',
      'Severe unilateral pain + trismus + deviated uvula → quinsy',
      'Immunosuppression / very unwell',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Viral / bacterial tonsillitis', note: 'sorethroat-tonsillitis' },
        { label: 'Glandular fever', note: 'glandular-fever' },
        { label: 'Scarlet fever (Strep A)', note: 'toxic-shock' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Quinsy / epiglottitis (ENT emergency)', note: 'ent-emergencies' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Persistent hoarseness/lump → head & neck cancer', note: 'neck-lumps' },
      ]},
    ],
    investigations: ['FeverPAIN / Centor score', 'Consider monospot if glandular fever likely', 'Do not examine the throat if epiglottitis suspected'],
  },
  {
    id: 'ear-pain-symptom',
    name: 'Ear pain (otalgia)',
    icon: '👂',
    system: 'ENT & eyes',
    blurb: 'Otoscopy separates middle- from outer-ear causes; a normal ear means look for referred pain.',
    redFlags: [
      'Persistent unilateral otalgia with a normal ear (esp. smoker) → head & neck cancer',
      'Pain, swelling behind the ear + pushed-forward pinna → mastoiditis',
      'Diabetic/immunosuppressed with severe otitis externa → malignant otitis externa',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Acute otitis media', note: 'acute-otitis-media' },
        { label: 'Otitis externa', note: 'otitis-externa' },
        { label: 'Referred (TMJ, dental, throat)', note: 'sorethroat-tonsillitis' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Mastoiditis', note: 'acute-otitis-media' },
        { label: 'Head & neck cancer (referred)', note: 'neck-lumps' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Ear wax / foreign body', note: 'hearing-loss' },
        { label: 'Herpes zoster (Ramsay Hunt)', note: 'shingles-chickenpox' },
      ]},
    ],
    investigations: ['Otoscopy (both ears); examine throat, TMJ, teeth', 'Consider referral if persistent unilateral with normal ear', 'Swab if resistant otitis externa'],
  },
  {
    id: 'hearing-loss-symptom',
    name: 'Hearing loss & tinnitus',
    icon: '🦻',
    system: 'ENT & eyes',
    blurb: 'Separate conductive from sensorineural; sudden SNHL is an emergency.',
    redFlags: [
      'Sudden sensorineural hearing loss → same-week ENT (steroids window)',
      'Unilateral hearing loss / tinnitus → exclude acoustic neuroma (MRI)',
      'Pulsatile tinnitus, or with neurology',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Ear wax / conductive', note: 'hearing-loss' },
        { label: 'Age-related (presbycusis)', note: 'hearing-loss' },
        { label: 'Otitis media / effusion', note: 'acute-otitis-media' },
        { label: 'Noise-induced', note: 'tinnitus' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Sudden sensorineural hearing loss', note: 'hearing-loss' },
        { label: 'Acoustic neuroma (unilateral)', note: 'tinnitus' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Ménière’s disease', note: 'vertigo' },
        { label: 'Ototoxic drugs', note: 'individual-drug-cautions' },
      ]},
    ],
    investigations: ['Otoscopy; tuning-fork (Rinne/Weber); whisper test', 'Audiometry; MRI for unilateral SNHL/tinnitus', 'Urgent ENT for sudden SNHL'],
    related: [{ label: 'Full tinnitus note', note: 'tinnitus' }],
  },
  {
    id: 'neck-lump-symptom',
    name: 'Neck lump',
    icon: '🫙',
    system: 'ENT & eyes',
    blurb: 'Reactive nodes are common; a persistent adult neck lump needs a cancer pathway.',
    redFlags: [
      'Persistent (>3 weeks) unexplained neck lump in an adult → 2WW head & neck',
      'Hard fixed node, hoarseness, dysphagia, or a smoker',
      'Thyroid lump with stridor / rapid growth',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Reactive lymph node', note: 'neck-lumps' },
        { label: 'Glandular fever', note: 'glandular-fever' },
        { label: 'Thyroid nodule / goitre', note: 'goitre-thyroid-cancer' },
        { label: 'Salivary gland (stone, sialadenitis)', note: 'salivary-gland-disease' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Head & neck cancer', note: 'neck-lumps' },
        { label: 'Lymphoma', note: 'haem-malignancies' },
        { label: 'Thyroid cancer', note: 'goitre-thyroid-cancer' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Thyroglossal / branchial cyst; lipoma', note: 'neck-lumps' },
      ]},
    ],
    investigations: ['Examine site, mobility, relation to swallowing/tongue', 'USS ± FNA; TFT if thyroid; monospot/FBC', '2WW head-and-neck per NICE'],
  },

  // ── Paediatrics ───────────────────────────────────────────────────────────
  {
    id: 'feverish-child-symptom',
    name: 'Feverish child',
    icon: '🌡️',
    system: 'Paediatrics',
    blurb: 'Use the traffic-light system to find the source and spot the seriously unwell child.',
    redFlags: [
      'Non-blanching rash, neck stiffness, or looking very unwell → meningococcal sepsis (999 + benzylpenicillin)',
      'Age <3 months with fever → same-day paediatric assessment',
      'Prolonged capillary refill, mottled/pale, weak cry, poor feeding',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Viral URTI / viral exanthem', note: 'childhood-viral-rashes' },
        { label: 'Otitis media', note: 'acute-otitis-media' },
        { label: 'Tonsillitis', note: 'sorethroat-tonsillitis' },
        { label: 'UTI', note: 'uti-children' },
        { label: 'Gastroenteritis', note: 'gastroenteritis-children' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Meningitis', note: 'meningitis' },
        { label: 'Sepsis (any source)', note: 'meningitis' },
        { label: 'Kawasaki disease (>5 days fever)', note: 'childhood-viral-rashes' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Croup', note: 'croup' },
        { label: 'Bronchiolitis', note: 'bronchiolitis' },
        { label: 'Pneumonia', note: 'feverish-child' },
      ]},
    ],
    investigations: ['NICE traffic-light assessment; observations', 'Urine dip (clean catch) — always consider UTI', 'Safety-net; same-day review if any amber/red'],
    related: [{ label: 'Feverish child (full note)', note: 'feverish-child' }],
  },
  {
    id: 'rash-in-child',
    name: 'Rash in a child',
    icon: '🧒',
    system: 'Paediatrics',
    blurb: 'Most are benign viral exanthems — the priority is spotting the non-blanching rash.',
    redFlags: [
      'Non-blanching rash + fever / unwell → meningococcal sepsis (999)',
      'Mucosal involvement / blistering / very unwell → SJS or staph scalded skin',
      'Fever >5 days + rash + red eyes/lips → Kawasaki disease',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Viral exanthem (measles, slapped cheek, roseola)', note: 'childhood-viral-rashes' },
        { label: 'Chickenpox', note: 'shingles-chickenpox' },
        { label: 'Hand, foot & mouth', note: 'childhood-viral-rashes' },
        { label: 'Eczema', note: 'atopic-eczema' },
        { label: 'Impetigo', note: 'cellulitis' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Meningococcal (non-blanching)', note: 'meningitis' },
        { label: 'Kawasaki disease', note: 'childhood-viral-rashes' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Scarlet fever (Strep A)', note: 'toxic-shock' },
        { label: 'Urticaria / allergy', note: 'urticaria-angioedema' },
        { label: 'Henoch-Schönlein purpura', note: 'childhood-viral-rashes' },
      ]},
    ],
    investigations: ['Glass test; obs incl. temperature & cap refill', 'Usually clinical — describe morphology & distribution', 'Safety-net; admit if non-blanching/unwell'],
  },
  {
    id: 'limping-child-symptom',
    name: 'Limping child',
    icon: '🦯',
    system: 'Paediatrics',
    blurb: 'Age-dependent causes; a hot joint or systemic illness needs urgent assessment.',
    redFlags: [
      'Fever + refusal to weight-bear / hot swollen joint → septic arthritis (emergency)',
      'Night pain, weight loss, pallor/bruising → malignancy (leukaemia, bone tumour)',
      'Any child <3 with a limp, or a painful hip → urgent assessment',
    ],
    ddx: [
      { heading: C, variant: 'common', items: [
        { label: 'Transient synovitis (irritable hip)', note: 'limpingChild' },
        { label: 'Minor trauma / soft-tissue', note: 'paediatric-lower-limb' },
        { label: 'Reactive (post-viral)', note: 'limpingChild' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Septic arthritis / osteomyelitis', note: 'limpingChild' },
        { label: 'Perthes / SUFE', note: 'limpingChild' },
        { label: 'Leukaemia / bone tumour', note: 'paediatric-cancer' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Developmental dysplasia of the hip', note: 'paediatric-lower-limb' },
        { label: 'Juvenile idiopathic arthritis', note: 'inflammatory-arthritis' },
      ]},
    ],
    investigations: ['Examine hip/knee, gait, temperature', 'FBC, CRP/ESR, blood film if systemic; X-ray/USS', 'Urgent referral for hot joint or SUFE/Perthes'],
    related: [{ label: 'Limping child (full note)', note: 'limpingChild' }],
  },
]

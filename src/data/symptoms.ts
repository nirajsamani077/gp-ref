/**
 * Presentation-first differential-diagnosis guides.
 *
 * Notes are CONDITION-first (you know the diagnosis, you want management).
 * Symptoms are PRESENTATION-first: a patient presents with X → the differential,
 * red flags and first-line investigations, each linking into the condition notes.
 *
 * TO ADD A SYMPTOM: add one entry below. `note` on any ddx/related item is a
 * note id — clicking it jumps to that note. Keep ids valid (see src/notes).
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
        { label: 'Vitamin B12 / D deficiency', note: 'vitamin-b12' },
        { label: 'Chronic kidney/liver disease', note: 'ckd' },
        { label: 'CFS/ME (diagnosis of exclusion)', note: 'cfs-me' },
        { label: 'Medication / alcohol', note: 'alcohol-etoh' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Malignancy (esp. haematological)', note: 'haem-malignancies' },
      ]},
    ],
    investigations: ['FBC, ferritin, U&E, LFT, TFT, HbA1c, calcium', 'Coeliac serology; B12/folate; CRP/ESR', 'Consider a myeloma screen / imaging if red flags'],
    related: [{ label: 'Unintentional weight loss', note: 'weight-loss' }, { label: 'Insomnia', note: 'insomnia' }],
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
        { label: 'Malabsorption (coeliac, IBD, pancreatic)', note: 'coeliac-disease' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'COPD / heart failure / CKD cachexia', note: 'copd' },
        { label: 'Frailty & sarcopenia', note: 'frailty' },
        { label: 'Alcohol / substance misuse', note: 'substance-misuse' },
      ]},
    ],
    investigations: ['FBC, U&E, LFT, calcium, glucose/HbA1c, TFT, CRP/ESR, coeliac serology, ferritin', 'Urinalysis; CXR; consider FIT, myeloma screen, HIV', 'Site-directed imaging / 2WW as guided'],
    related: [{ label: 'Full weight-loss note', note: 'weight-loss' }, { label: 'Night sweats', note: 'night-sweats' }],
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
        { label: 'Arrhythmia (AF)', note: 'atrialFibrillation' },
        { label: 'Medication (antihypertensives, sedatives)', note: 'polypharmacy' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Posterior-circulation stroke / TIA', note: 'stroke-tia' },
      ]},
    ],
    investigations: ['Lying/standing BP; ECG; capillary glucose', 'FBC; U&E; consider HbA1c', 'Dix-Hallpike / HINTS for vertigo'],
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
        { label: 'Pericarditis; pneumonia', note: 'acuteCough' },
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
        { label: 'Lung cancer / effusion', note: 'lung-cancer' },
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
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'SVT / VT; cardiomyopathy (HOCM); long QT', note: 'cardiomyopathies' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Anaemia; hypoglycaemia; phaeochromocytoma', note: 'phaeochromocytoma' },
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
        { label: 'COPD; bronchiectasis; ILD; heart failure', note: 'bronchiectasis' },
        { label: 'Whooping cough (pertussis)', note: 'childhood-viral-rashes' },
      ]},
    ],
    investigations: ['Examination + SpO₂; PEFR/spirometry', 'CXR if >3 weeks or red flags', 'Consider FeNO / sputum'],
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
        { label: 'Chronic liver disease; hypothyroidism', note: 'chronic-liver-disease' },
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
        { label: 'Hypoglycaemia; dissociative attacks', note: 'fnd' },
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
        { label: 'Diverticular disease; IBD; coeliac', note: 'diverticular-disease' },
      ]},
    ],
    investigations: ['Pregnancy test (any woman of childbearing age); urine dip', 'FBC, U&E, LFT, amylase/lipase, CRP', 'Imaging (USS/CT) per suspicion'],
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
        { label: 'Barrett’s oesophagus; biliary/cardiac pain', note: 'barretts-oesophagus' },
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
        { label: 'GORD / oesophagitis / stricture', note: 'gord-dyspepsia' },
        { label: 'Neurological (stroke, bulbar)', note: 'stroke-tia' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Achalasia; pharyngeal pouch; MND; globus', note: 'ent-emergencies' },
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
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Coeliac; anal cancer; ischaemic colitis', note: 'mesenteric-ischaemia' },
      ]},
    ],
    investigations: ['FIT test; FBC/ferritin', 'DRE; examine perianal area', '2WW / colonoscopy per thresholds'],
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
        { label: 'Trigeminal neuralgia; sinusitis', note: 'trigeminal-neuralgia' },
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
        { label: 'Multiple sclerosis; motor neuron disease', note: 'multiple-sclerosis' },
        { label: 'Peripheral nerve palsy (foot drop)', note: 'myofascial-pain' },
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
        { label: 'Cervical/lumbar radiculopathy', note: 'neck-pain' },
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
    id: 'scrotal-symptom',
    name: 'Scrotal / testicular pain & lumps',
    icon: '♂️',
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
    id: 'pmb',
    name: 'Postmenopausal bleeding',
    icon: '⚠️',
    system: "Women's health",
    blurb: 'Endometrial cancer until proven otherwise — 2WW.',
    redFlags: [
      'ANY bleeding ≥12 months after the last period → 2WW gynaecology',
      'Unscheduled bleeding on HRT that persists',
    ],
    ddx: [
      { heading: S, variant: 'serious', items: [
        { label: 'Endometrial cancer', note: 'endometrial-cancer' },
        { label: 'Cervical cancer', note: 'cervical-cancer' },
      ]},
      { heading: C, variant: 'common', items: [
        { label: 'Vaginal atrophy', note: 'menopause' },
        { label: 'Endometrial / cervical polyps', note: 'endometrial-cancer' },
        { label: 'HRT-related bleeding', note: 'bleeding-on-hrt' },
      ]},
    ],
    investigations: ['2WW referral; TV ultrasound (endometrial thickness)', 'Examine cervix; smear if due', 'Hysteroscopy/biopsy in secondary care'],
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
    icon: '🌸',
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

  // ── Skin ──────────────────────────────────────────────────────────────────
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
        { label: 'Renal (uraemic) / iron deficiency', note: 'ckd' },
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
        { label: 'Hypothyroidism / anaemia', note: 'hypothyroidism' },
        { label: 'Perinatal depression', note: 'perinatal-mh' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Suicide / self-harm risk', note: 'suicide-self-harm' },
      ]},
    ],
    investigations: ['PHQ-9 / GAD-7; risk assessment', 'Consider FBC, TFT, ferritin, B12 if fatigue-predominant', 'Screen for bipolarity and alcohol'],
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
        { label: 'Keratitis / corneal ulcer; uveitis; scleritis', note: 'red-eye' },
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
        { label: 'Otitis media / tonsillitis', note: 'acute-otitis-media' },
        { label: 'UTI', note: 'uti-children' },
        { label: 'Gastroenteritis', note: 'gastroenteritis-children' },
      ]},
      { heading: S, variant: 'serious', items: [
        { label: 'Meningitis / sepsis', note: 'meningitis' },
        { label: 'Kawasaki disease (>5 days fever)', note: 'childhood-viral-rashes' },
      ]},
      { heading: O, variant: 'other', items: [
        { label: 'Croup; bronchiolitis; pneumonia', note: 'croup' },
      ]},
    ],
    investigations: ['NICE traffic-light assessment; observations', 'Urine dip (clean catch) — always consider UTI', 'Safety-net; same-day review if any amber/red'],
    related: [{ label: 'Feverish child (full note)', note: 'feverish-child' }],
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
        { label: 'DDH; JIA', note: 'paediatric-lower-limb' },
      ]},
    ],
    investigations: ['Examine hip/knee, gait, temperature', 'FBC, CRP/ESR, blood film if systemic; X-ray/USS', 'Urgent referral for hot joint or SUFE/Perthes'],
    related: [{ label: 'Limping child (full note)', note: 'limpingChild' }],
  },
]

import type { Note } from '../data/notes'

export const gallstonesPancreatitis: Note = {
  id: 'gallstones-pancreatitis',
  title: 'Gallstones & Pancreatitis',
  subtitle: 'Biliary colic to cholangitis, acute and chronic pancreatitis, severity scoring',
  tags: ['gastroenterology', 'surgery'],

  body: 'gallstones cholelithiasis biliary colic cholecystitis pancreatitis CBD common bile duct stone obstructive jaundice MRCP ERCP cholangitis ascending Charcot triad Reynold pentad RUQ right upper quadrant fatty food LFT liver function tests ultrasound USS laparoscopic cholecystectomy lap chole Creon pancreatic enzyme replacement DEXA chronic pancreatitis pseudocyst ascites pleural effusion alcohol Glasgow Imrie Bedside severity score BISAP Ranson criteria type 3c diabetes HbA1c faecal elastase steatorrhoea',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Gallstones — Epidemiology and Spectrum',
      items: [
        'Common: affects up to 25% of the adult population; majority are asymptomatic and require no treatment',
        'Risk factors: "4 Fs" — Female, Fat (obesity), Forty, Fertile (pregnancy/oestrogen); also: Crohn\'s disease (ileal disease reduces bile salt reabsorption), cirrhosis, haemolytic anaemia',
        'Spectrum of disease: asymptomatic → biliary colic → acute cholecystitis → CBD stone/obstructive jaundice → acute cholangitis → acute pancreatitis',
        'Primary care investigations for suspected gallstones: FBC, LFT, amylase/lipase (if pancreatitis suspected), USS abdomen — arrange USS first before referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Spectrum and Management' },

    {
      type: 'table',
      headers: ['Condition', 'Key Features', 'Action'],
      rows: [
        ['Asymptomatic gallstones', 'Incidental finding on USS; no symptoms; CBD normal diameter (<7mm)', 'Observe only — no treatment needed. Exception: if CBD stone found incidentally → refer to surgery (high complication risk)'],
        ['Biliary colic', 'Crampy RUQ/epigastric pain 30–60 min after fatty food; settles spontaneously in 1–6 hours; no fever or systemic upset; LFT usually normal', 'Arrange LFT + USS in primary care; analgesia (diclofenac PR is first-line); refer to surgery for elective laparoscopic cholecystectomy ("lap chole")'],
        ['Acute cholecystitis', 'Biliary colic + persistent fever + systemic upset + Murphy\'s sign (positive); elevated WBC and CRP', 'Admit to surgical assessment unit — IV antibiotics (co-amoxiclav or cefuroxime + metronidazole), analgesia, IV fluids; early lap chole preferred within 72 hours or same admission'],
        ['CBD (common bile duct) stone', 'Obstructive jaundice: jaundice + pale stools + dark urine + pruritus + RUQ pain; ALP and bilirubin disproportionately elevated; USS shows dilated CBD (>7mm)', 'Admit; arrange MRCP to confirm; ERCP for stone extraction before lap chole; surgical review'],
        ['Ascending cholangitis', 'Charcot\'s triad: fever + jaundice + RUQ pain; severe: Reynold\'s pentad adds shock + confusion', 'Emergency admission: IV antibiotics (tazocin or meropenem if severe) + urgent ERCP; can be life-threatening within hours; call surgical and gastroenterology teams simultaneously'],
        ['Acute pancreatitis', 'Epigastric pain radiating to back, nausea, vomiting, raised serum amylase/lipase (>3× upper limit)', 'ALL require hospital admission — see below'],
      ],
    },

    { type: 'heading', level: 2, text: 'Acute Pancreatitis — Severity Assessment' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Acute Pancreatitis — Always Admit; Score Severity',
      items: [
        'ALL acute pancreatitis requires hospital admission: IV fluid resuscitation (1L Hartmann\'s over 1 hour then reassess), early enteral nutrition (NG/NJ within 24–48h if not tolerating orally), analgesia, monitoring',
        'Common causes: alcohol and gallstones account for ~80%; other causes: hypertriglyceridaemia, hypercalcaemia, drugs (azathioprine, valproate, thiazides, GLP-1 agonists, steroids), post-ERCP, trauma, autoimmune (IgG4)',
        'Glasgow (Imrie) Score: C-Reactive Protein >150 mg/L alone at 48 hours is a strong predictor of severity',
        'Glasgow score ≥3: severe pancreatitis → ITU/HDU input; CT abdomen if no clinical improvement or diagnostic uncertainty',
        'BISAP (Bedside Index of Severity in Acute Pancreatitis): BUN >25, impaired mental status, SIRS, age >60, pleural effusion on imaging — score ≥3 = high mortality risk',
        'After gallstone pancreatitis: lap chole DURING same hospital admission (if mild) or within 2 weeks — prevents recurrence (first attack carries 30–50% recurrence rate)',
      ],
    },

    { type: 'heading', level: 2, text: 'Glasgow (Imrie) Severity Score at 48 hours' },

    {
      type: 'table',
      headers: ['Parameter', 'Abnormal Value', 'Score'],
      rows: [
        ['Age', '>55 years', '1'],
        ['WBC', '>15 × 10⁹/L', '1'],
        ['Glucose', '>10 mmol/L (no known DM)', '1'],
        ['Urea', '>16 mmol/L', '1'],
        ['PaO₂', '<8 kPa (60 mmHg)', '1'],
        ['Calcium', '<2 mmol/L (corrected)', '1'],
        ['Albumin', '<32 g/L', '1'],
        ['LDH', '>600 IU/L', '1'],
        ['AST/ALT', '>200 IU/L', '1'],
      ],
      caption: 'Glasgow (Imrie) Score: 0–2 = mild (managed on ward), ≥3 = severe pancreatitis (ITU/HDU care needed). Also called PANCREAS mnemonic: PaO₂, Age, Neutrophils, Calcium, Renal urea, Enzymes (LDH/AST), Albumin, Sugar.',
    },

    { type: 'heading', level: 2, text: 'Acute Pancreatitis — Complications' },

    {
      type: 'table',
      headers: ['Complication', 'Timing', 'Features', 'Management'],
      rows: [
        ['Systemic inflammatory response (SIRS)', 'Early (hours–days)', 'Fever, tachycardia, tachypnoea, raised WBC', 'IV fluid resuscitation, monitoring, HDU'],
        ['Pancreatic necrosis', 'Days–weeks', 'CT: non-enhancing pancreatic tissue >30%; if sterile — conservative; if infected — fever + ↑CRP + ↑WBC', 'Infected necrosis: minimally invasive drainage (step-up approach); antibiotics (carbapenems); surgical necrosectomy last resort'],
        ['Pseudocyst', 'Weeks–months', 'Persistent abdominal pain; palpable mass; CT confirms fluid collection with thin wall', 'Many resolve spontaneously; endoscopic or surgical drainage if symptomatic or enlarging'],
        ['Ascites / pleural effusion', 'Acute or subacute', 'Abdominal distension or respiratory compromise', 'Drainage if significant; pancreaticopleural fistula — specialist management'],
        ['Multi-organ failure', 'Early (severe disease)', 'Renal failure, respiratory failure, DIC', 'ITU; organ support'],
        ['Post-pancreatitis diabetes (Type 3c)', 'Months–years', 'May present de novo as DM after severe or recurrent pancreatitis', 'Check HbA1c 6 months post-acute attack and annually; may require insulin'],
      ],
    },

    { type: 'heading', level: 2, text: 'Chronic Pancreatitis — Primary Care Management' },

    {
      type: 'list',
      items: [
        'Caused by recurrent acute attacks or chronic alcohol use → progressive irreversible fibrosis and loss of pancreatic function',
        'Chronic abdominal pain: often postprandial, radiating to back; complex management — gastroenterology/pain team; coeliac plexus block for refractory pain',
        'Exocrine insufficiency (malabsorption): check faecal elastase (<200 µg/g stool = low; <100 µg/g = severe); symptoms: steatorrhoea (fatty, foul, floating stools), weight loss, fat-soluble vitamin deficiency',
        'Pancreatic enzyme replacement: Creon (pancrelipase) with EVERY meal — start Creon 25,000 with meals and 10,000 with snacks; titrate up to Creon 50,000 per meal if response inadequate; give with a sip of water at the start of eating',
        'Fat-soluble vitamin supplementation: vitamins A, D, E, K — malabsorption causes deficiency; prescribe vitamin D and check levels annually',
        'DEXA scan: every 2 years — chronic pancreatitis causes osteoporosis (malabsorption + possible steroid use)',
        'Type 3c diabetes (pancreatic DM): check HbA1c 6-monthly; usually requires insulin (beta cells destroyed); no sulphonylureas (risk of hypoglycaemia); SGLT-2 inhibitors NOT first-line',
        'Alcohol cessation: essential — reduces pain and delays disease progression; refer to alcohol services; naltrexone and acamprosate can be used',
        'Pancreatic cancer surveillance: new abdominal pain + significant weight loss + new diabetes in known chronic pancreatitis patient over 50 → 2WW CT abdomen',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Drug-Induced Pancreatitis — Check Medication List',
      items: [
        'Most commonly implicated: azathioprine, sodium valproate, thiazide diuretics, furosemide, systemic corticosteroids',
        'GLP-1 receptor agonists (semaglutide, exenatide, liraglutide) and DPP-4 inhibitors (sitagliptin, saxagliptin): possible increased risk — consider stopping and switching if pancreatitis confirmed; review benefit-risk',
        'Hypertriglyceridaemia-induced: triglycerides >10–11 mmol/L can cause pancreatitis; treat with urgent hypertriglyceridaemia management (fibrates, insulin infusion in hospital)',
        'Review ALL medications in any patient with acute pancreatitis where cause is not obvious; document implicated drugs clearly',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG104 — Pancreatitis', url: 'https://www.nice.org.uk/guidance/ng104' },
        { label: 'NICE CKS — Gallstones', url: 'https://cks.nice.org.uk/topics/gallstones/' },
        { label: 'BSG — Pancreatitis Guidelines', url: 'https://www.bsg.org.uk/clinical-resource/bsg-guidelines-for-management-of-acute-pancreatitis/' },
        { label: 'Guts UK — Pancreatitis', url: 'https://gutscharity.org.uk/advice-and-information/conditions/pancreatitis/' },
        { label: 'Radiopaedia — Pancreatitis CT', url: 'https://radiopaedia.org/articles/acute-pancreatitis' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Acute complicated gallstone disease / acute pancreatitis: UHDB Queen\'s Hospital Burton A&E / SAU — emergency admission; call ahead if severe',
        'Elective cholecystectomy (biliary colic, symptomatic gallstones): arrange USS + LFT first; refer UHDB Burton general surgery via e-RS; include USS report',
        'ERCP (CBD stone): arranged via secondary care after MRCP confirmation — UHDB Burton gastroenterology/GI surgery',
        'Chronic pancreatitis / exocrine insufficiency: UHDB Burton gastroenterology — via e-RS; include faecal elastase result, HbA1c, weight loss data',
        'Pancreatic cancer 2WW: UHDB Burton or Good Hope Hospital (UHB) via e-RS 2WW HPB/upper GI pathway',
      ],
    },
  ],
}

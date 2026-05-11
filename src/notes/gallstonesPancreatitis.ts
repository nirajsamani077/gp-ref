import type { Note } from '../data/notes'

export const gallstonesPancreatitis: Note = {
  id: 'gallstones-pancreatitis',
  title: 'Gallstones & Pancreatitis',
  subtitle: 'Biliary colic, cholecystitis, CBD stones, acute pancreatitis and chronic pancreatitis',
  tags: ['gastroenterology', 'surgery'],

  body: 'gallstones cholelithiasis biliary colic cholecystitis pancreatitis CBD common bile duct stone obstructive jaundice MRCP ERCP cholangitis ascending bile duct infection RUQ right upper quadrant fatty food LFT liver function tests ultrasound USS laparoscopic cholecystectomy lap chole Creon pancreatic enzyme replacement DEXA chronic pancreatitis pseudocyst ascites pleural effusion alcohol gallstone risk factors',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Gallstones — Epidemiology and Spectrum',
      items: [
        'Common: up to 25% of the adult population; majority are asymptomatic and require no treatment',
        'Risk factors: "4 Fs" — Female, Fat, Forty, Fertile (pregnancy/oestrogen); also: Crohn\'s disease, cirrhosis, haemolysis',
        'Spectrum of disease — from asymptomatic to life-threatening:',
        '(1) Diverticulosis = asymptomatic; (2) Biliary colic; (3) Acute cholecystitis; (4) CBD stone / obstructive jaundice; (5) Acute cholangitis; (6) Pancreatitis',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Spectrum' },

    {
      type: 'table',
      headers: ['Condition', 'Key Features', 'Action'],
      rows: [
        ['Asymptomatic gallstones (GB stones, normal CBD)', 'Incidental finding; no symptoms', 'Observe only; no treatment needed. EXCEPTION: if CBD stone found → refer to surgery (high risk of complications)'],
        ['Biliary colic', 'Crampy RUQ/epigastric pain after fatty food; settles spontaneously; no fever', 'Ix via primary care (LFT + USS); refer to surgery for laparoscopic cholecystectomy'],
        ['Acute cholecystitis', 'Biliary colic + fever + systemic upset + Murphy\'s sign (positive)', 'Admit to surgical assessment unit (SAU) — IV antibiotics, analgesia, IV fluids, lap chole early (within 1 week if fit)'],
        ['CBD (common bile duct) stone', 'Obstructive jaundice: jaundice + pale stools + dark urine + itch + RUQ pain', 'Admit; LFT + USS + MRCP → ERCP for CBD clearance before cholecystectomy'],
        ['Ascending cholangitis', 'Charcot\'s triad: fever + jaundice + RUQ pain; may progress to Reynold\'s pentad (shock + confusion)', 'Emergency admission: IV antibiotics + ERCP; can be life-threatening'],
        ['Pancreatitis (gallstone or ETOH)', 'Epigastric pain radiating to back, nausea, vomiting, systemic upset', 'ALL require admission (see below)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Pancreatitis — Acute' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Acute Pancreatitis — Always Admit',
      items: [
        'ALL acute pancreatitis requires hospital admission: IV fluids, bowel rest, analgesia, monitoring',
        'Common causes: ETOH (alcohol) and gallstones account for ~80%; rarer: drugs (TZDs, valproate, steroids, GLP-1 agonists/gliptins, azathioprine, furosemide), trauma, post-ERCP, hypertriglyceridaemia, hypercalcaemia, autoimmune (IgG4), malignancy',
        'Complications: infected pancreatic necrosis, pseudocyst, ascites, pleural effusion, multi-organ failure',
        'ITU input if severe (Ranson or Glasgow score ≥3) or organ failure',
        'After gallstone pancreatitis: laparoscopic cholecystectomy should be performed during the same hospital admission or within 2 weeks to prevent recurrence',
      ],
    },

    { type: 'heading', level: 2, text: 'Chronic Pancreatitis' },

    {
      type: 'list',
      items: [
        'Recurrent acute attacks leading to progressive fibrosis and loss of pancreatic function',
        'Chronic abdominal pain: often worse after eating, radiating to back; may require specialist pain management',
        'Exocrine dysfunction (malabsorption): inability to absorb fat and fat-soluble vitamins (A, D, E, K); steatorrhoea (fatty, foul-smelling stools that float)',
        'Check faecal elastase (low = pancreatic exocrine insufficiency) — replace with pancreatic enzymes: Creon (pancrelipase) with every meal; dose titrated to stool consistency',
        'DEXA scan every 2 years: malabsorption causes osteoporosis; supplement fat-soluble vitamins',
        'Endocrine dysfunction: secondary Type 3c diabetes (pancreatic diabetes) — usually requires insulin; check HbA1c 6-monthly',
        'Pancreatic cancer risk: new onset abdominal pain + weight loss + new diabetes in over 60 = 2WW direct access CT abdomen (pancreatic cancer pathway)',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Drug-Induced Pancreatitis — Common Causes to Check',
      items: [
        'Drugs most commonly implicated: azathioprine, valproate, thiazide diuretics, furosemide, steroids',
        'Newer agents: GLP-1 receptor agonists (exenatide, liraglutide), DPP-4 inhibitors (sitagliptin, saxagliptin) — possible risk; consider stopping if pancreatitis confirmed',
        'Review all medications in any patient with acute pancreatitis where no obvious cause found',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Surgical assessment (acute cholecystitis, pancreatitis, cholangitis): UHDB Queen\'s Hospital Burton A&E/SAU — emergency admission',
        'Elective cholecystectomy (biliary colic, symptomatic gallstones): UHDB Burton general surgery — via e-RS; include LFT and USS result; aim for USS first in primary care',
        'ERCP (CBD stone): UHDB Burton gastroenterology/GI surgery — arranged via secondary care after MRCP',
        'Gastroenterology (chronic pancreatitis, exocrine insufficiency): UHDB Burton gastroenterology — via e-RS',
        'Pancreatic cancer 2WW: UHDB Burton via e-RS 2WW HPB/upper GI pathway',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Gallstones', url: 'https://cks.nice.org.uk/topics/gallstones/' },
        { label: 'NICE NG104 — Pancreatitis', url: 'https://www.nice.org.uk/guidance/ng104' },
        { label: 'BSG — Pancreatitis Guidelines', url: 'https://www.bsg.org.uk/clinical-resource/bsg-guidelines-for-management-of-acute-pancreatitis/' },
        { label: 'Guts UK — Pancreatitis', url: 'https://gutscharity.org.uk/advice-and-information/conditions/pancreatitis/' },
      ],
    },
  ],
}

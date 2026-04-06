import type { Note } from '../data/notes'

export const abnormalLft: Note = {
  id: 'abnormal-lft',
  title: 'Abnormal LFTs',
  subtitle: 'Systematic approach to raised liver function tests in primary care',
  tags: ['gastroenterology'],

  body: `abnormal liver function tests LFT raised ALT AST bilirubin ALP GGT albumin INR jaundice Gilbert syndrome haemolysis hepatitis viral HBV HCV autoimmune liver screen ferritin transferrin saturation caeruloplasmin immunoglobulins fatty liver NAFLD MASLD FIB4 ELF test fibroscan fibrosis alcohol ETOH ARLD cholestatic hepatic synthetic failure urgent referral gastroenterology USS ultrasound liver`,

  content: [
    {
      type: 'linkrow',
      links: [
        { label: '📄 Abnormal LFT Algorithm — Camden CCG (PDF)', url: '/pdfs/abnormal-lft-camden.pdf' },
      ],
    },

    // ── BEFORE YOU START ─────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'History in Every Patient with Abnormal LFTs',
      items: [
        'Alcohol — units per week (harmful: M >14 units, F >14 units; high risk: M >50, F >35)',
        'BMI / metabolic syndrome — T2DM, dyslipidaemia, hypertension (NAFLD risk factors)',
        'Drugs — prescribed, OTC, herbal, supplements (hepatotoxic drugs: methotrexate, statins, nitrofurantoin, flucloxacillin, NSAIDs, antiepileptics)',
        'Viral hepatitis risk factors — IVDU, tattoos, blood transfusion pre-1991, sexual contacts, endemic country origin',
        'Symptoms — jaundice, pruritus, RUQ pain, weight loss, fatigue, dark urine, pale stools',
        'Note: LFTs are normal in 25% of patients with established cirrhosis',
      ],
    },

    // ── URGENT — RED FLAGS ────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Step 1 — Urgent/Emergency Situations',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer Urgently / Same-Day Assessment if ANY of:',
      items: [
        'Jaundice (bilirubin >40) — immediate referral to acute medicine; request liver screen but do not await result',
        'ALT >300 IU/L — seek telephone advice from gastroenterology; consider urgent tests',
        'Synthetic failure — very low albumin, prolonged INR, suspected hepatic decompensation',
        'Suspected malignancy — weight loss, marked cholestasis, raised AFP',
        'Acute complications — encephalopathy, ascites, variceal bleeding',
      ],
    },

    // ── FLOWCHART IMAGES ─────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'LFT Pattern Recognition — Diagnostic Flowcharts',
    },
    {
      type: 'image',
      src: '/images/Abnormal-LFT.jpg',
      alt: 'Flowchart showing approach to abnormal LFTs: raised bilirubin + ALP/ALT (jaundice → immediate referral; no jaundice → urgent hepatology); isolated raised bilirubin (check for Gilbert\'s vs haemolysis); isolated raised ALP (check GGT — if raised, USS + liver screen; if normal, consider bone); raised ALT (<300 repeat with screen; >300 urgent advice)',
      caption: 'Systematic approach based on pattern of LFT abnormality',
    },
    {
      type: 'image',
      src: '/images/lft algorithm.png',
      alt: 'Detailed LFT algorithm showing hepatic, cholestatic, synthetic failure, and isolated bilirubin pathways with management steps',
      caption: 'Clinical pattern recognition: hepatic (↑ALT/AST), cholestatic (↑ALP/GGT), synthetic failure, isolated bilirubin',
    },

    // ── PATTERN 1: ISOLATED BILIRUBIN ────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Pattern 1 — Isolated Raised Bilirubin (All Other LFTs Normal)',
    },
    {
      type: 'list',
      items: [
        'Most common cause: Gilbert\'s syndrome (~5% of population) — unconjugated hyperbilirubinaemia, benign, no treatment needed',
        'Less commonly: haemolysis',
        'Action: repeat fasting sample with split bilirubin (conjugated/unconjugated) + FBC ± reticulocytes + LDH',
        'Unconjugated BR + normal FBC/LDH/retics → diagnose Gilbert\'s; inform patient it is benign and lifelong',
        'Anaemia or raised LDH/retics → haemolysis screen (haptoglobins <200, LDH, reticulocyte count) → refer haematology if abnormal',
        'Conjugated bilirubin raised → obstructive pathology; treat as cholestatic (see below)',
      ],
    },

    // ── PATTERN 2: HEPATIC ────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Pattern 2 — Hepatic Pattern (↑ALT ± AST, Normal or Near-Normal ALP)',
    },
    {
      type: 'table',
      headers: ['Step', 'Action', 'Detail'],
      rows: [
        ['1. First abnormal result', 'Repeat in 1 month', 'Add AST, GGT, FBC; advise ETOH reduction if >14 units/week; check HBV/HCV if risk factors'],
        ['2. Still abnormal', 'USS liver + extended liver screen', 'USS + HBV/HCV, EBV/CMV (if acute), autoantibodies (AMA, ASMA, ANA), immunoglobulins, ferritin + TSAT, caeruloplasmin, A1 antitrypsin, HbA1c'],
        ['3a. USS — fatty liver + screen NAD', 'NAFLD/MASLD pathway', 'Calculate FIB4; see fatty liver section below'],
        ['3b. USS — abnormal (non-fatty)', 'Refer gastroenterology', 'Urgent if suspected malignancy or rapid deterioration'],
        ['3c. Abnormal autoantibodies / screen', 'Refer gastroenterology', 'Autoimmune hepatitis (ASMA/ANA), haemochromatosis (TSAT >45%), Wilson\'s (caeruloplasmin), A1AT deficiency'],
        ['3d. All normal including USS', 'Lifestyle advice + repeat LFTs in 1 year', 'Weight loss, alcohol reduction, review hepatotoxic drugs'],
        ['ALT >300 at any point', 'Urgent telephone advice from gastroenterology', 'Same-day advice; arrange urgent bloods and USS'],
      ],
    },

    // ── PATTERN 3: CHOLESTATIC ────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Pattern 3 — Cholestatic Pattern (↑ALP ± GGT, Normal or Near-Normal ALT)',
    },
    {
      type: 'table',
      headers: ['GGT', 'Interpretation', 'Action'],
      rows: [
        ['GGT also raised', 'Liver source likely', 'USS liver + liver aetiology screen (autoantibodies, Igs, ferritin/TSAT); refer gastroenterology if USS abnormal or screen positive; consider PBC (AMA positive), PSC, drug-induced'],
        ['GGT normal', 'Bone source likely', 'Check bone profile (calcium, phosphate, ALP isoforms) + vitamin D; consider Paget\'s disease, bone metastases, vitamin D deficiency'],
        ['ALP & GGT remain abnormal after USS negative screen', 'Further evaluation needed', 'Refer for specialist management; consider MRCP if duct dilatation suspected'],
      ],
    },

    // ── NAFLD / FATTY LIVER ───────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Fatty Liver (NAFLD/MASLD) — FIB4 and ELF Pathway',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to use this pathway',
      items: [
        'USS confirms fatty liver AND rest of liver screen is negative AND no excess alcohol (≤14 units/week)',
        'Use EMIS fatty liver template to document',
        'FIB4 is inaccurate if excess alcohol — use ELF test instead (see below)',
      ],
    },
    {
      type: 'table',
      headers: ['FIB4 Score', 'Risk', 'Action'],
      rows: [
        ['<1.3', 'Low risk of advanced fibrosis', 'Manage in GP: annual LFTs, UE, HbA1c, lipids, BP; lifestyle advice (10% weight loss target); treat metabolic risk factors (statin, diabetes control, BP)'],
        ['1.3 – 3.25', 'Indeterminate', 'Check ELF test (separate gold top tube); if ELF >9.8 → refer gastroenterology for fibroscan; if ELF <9.8 → manage in GP with annual review'],
        ['>3.25', 'High risk of advanced fibrosis', 'Refer gastroenterology directly'],
      ],
      caption: 'FIB4 = Age × AST / (Platelets × √ALT). Calculate using online tools. ELF (Enhanced Liver Fibrosis) test — send in gold top tube.',
    },

    // ── ALCOHOL-RELATED ───────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Alcohol-Related Liver Disease (ARLD)',
    },
    {
      type: 'list',
      items: [
        'If harmful drinking (M >50 units/week, F >35 units/week) OR AUDIT score >7 — do USS liver even if LFTs normal',
        'FIB4 is inaccurate in excess alcohol — use ELF test (gold top) directly',
        'ELF >9.8 → high risk advanced fibrosis → refer gastroenterology (fibroscan)',
        'ELF <9.8 → manage in GP with ETOH reduction advice and support',
        'Consider referral to alcohol services if AUDIT >15 or dependent drinking',
        'GGT disproportionately raised relative to ALT/ALP is a useful marker of alcohol excess',
      ],
    },

    // ── LIVER SCREEN TABLE ────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Extended Liver Screen — What to Send and Why',
    },
    {
      type: 'table',
      headers: ['Test', 'Diagnoses', 'Action if Abnormal'],
      rows: [
        ['Hepatitis B surface antigen (HBsAg)', 'Chronic HBV infection', 'Refer gastroenterology; notify PHE; check contacts'],
        ['Hepatitis C antibody (anti-HCV)', 'HCV infection', 'Refer gastroenterology; treatment available (DAAs — curative)'],
        ['ANA, ASMA, AMA, LKM-1', 'Autoimmune hepatitis (ANA/ASMA), PBC (AMA), AIH-2 (LKM)', 'Refer gastroenterology'],
        ['Immunoglobulins (IgG, IgM, IgA)', 'AIH (↑IgG), PBC (↑IgM), ALD (↑IgA)', 'Interpret with autoantibodies'],
        ['Ferritin + transferrin saturation (TSAT)', 'Hereditary haemochromatosis (TSAT >45%, ferritin ↑)', 'Check HFE gene; refer if confirmed'],
        ['Caeruloplasmin', 'Wilson\'s disease (low caeruloplasmin)', 'Refer gastroenterology; slit-lamp exam for KF rings'],
        ['Alpha-1 antitrypsin (A1AT)', 'A1AT deficiency', 'Refer gastroenterology if low level'],
        ['USS liver', 'Fatty liver, cirrhosis, mass lesion, duct dilatation', 'Direct subsequent pathway'],
        ['HbA1c', 'T2DM (NAFLD risk factor)', 'Manage metabolic risk factors'],
        ['Alpha fetoprotein (AFP)', 'Hepatocellular carcinoma', 'Raised + liver disease → urgent referral'],
        ['Fasting lipids', 'Dyslipidaemia (NAFLD risk)', 'Treat with statin (safe in NAFLD/MASLD)'],
      ],
    },

    // ── REFERRAL SUMMARY ─────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'warning',
      title: 'Referral Summary',
      items: [
        'Same-day / 999: jaundice + coagulopathy/encephalopathy/ascites → acute medicine',
        'Urgent (same week): jaundice (BR >40), ALT >300, synthetic failure, suspected malignancy → telephone gastroenterology',
        'Routine: positive liver screen (autoimmune, viral, metabolic), abnormal USS, FIB4 >3.25, ELF >9.8',
        'Haematology: confirmed haemolysis, unexplained anaemia with abnormal LFTs',
        'Alcohol services: AUDIT >15, dependent drinking, ARLD with high fibrosis risk',
      ],
    },
  ],
}

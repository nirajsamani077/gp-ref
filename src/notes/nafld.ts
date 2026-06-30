import type { Note } from '../data/notes'

export const nafld: Note = {
  id: 'nafld',
  title: 'NAFLD / MASLD (Fatty Liver)',
  subtitle: 'Metabolic-associated fatty liver, FIB-4 & ELF fibrosis pathway, lifestyle and when to refer',
  tags: ['gastroenterology', 'metabolic'],

  body: `NAFLD MASLD non-alcoholic fatty liver metabolic dysfunction associated steatotic liver disease NASH steatohepatitis hepatic steatosis insulin resistance metabolic syndrome FIB-4 ELF enhanced liver fibrosis fibroscan cirrhosis HCC raised ALT ultrasound lifestyle weight loss statin`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG49 — NAFLD', url: 'https://www.nice.org.uk/guidance/ng49' },
        { label: 'NICE CKS — NAFLD', url: 'https://cks.nice.org.uk/topics/non-alcoholic-fatty-liver-disease-nafld/' },
        { label: 'British Liver Trust', url: 'https://britishlivertrust.org.uk/' },
      ],
    },

    {
      type: 'calclink',
      calculators: [
        { id: 'fib4', label: 'FIB-4 Index — Liver Fibrosis', subtitle: 'Risk-stratify advanced fibrosis: <1.3 low, 1.3–2.67 indeterminate, >2.67 high' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'NAFLD (now often termed MASLD — metabolic dysfunction-associated steatotic liver disease) is fat accumulation in the liver, both a cause and consequence of insulin resistance',
        'Spans a spectrum: simple steatosis → steatohepatitis (NASH, with inflammation) → fibrosis → cirrhosis (and HCC)',
        'Risk factors: metabolic syndrome — type 2 diabetes, obesity, dyslipidaemia, hypertension; also rapid weight loss and jejuno-ileal bypass',
        'The single most important task in primary care is to identify the minority with advanced fibrosis (who need hepatology) among the majority with low-risk fatty liver',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Investigate' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Suspect / Assess NAFLD if:',
      items: [
        'Persistently raised ALT with other causes excluded (alcohol, viral hepatitis, autoimmune, drugs — see Abnormal LFTs), OR',
        'Incidental fatty liver on ultrasound',
        'Typical biochemistry: ALT > AST (a rising AST:ALT ratio suggests progression to fibrosis); ferritin can be mildly raised',
        'Note: NAFLD can be present with completely normal LFTs — and normal LFTs do NOT exclude significant fibrosis',
      ],
    },

    { type: 'heading', level: 2, text: 'Fibrosis Risk Pathway (FIB-4 → ELF/Fibroscan)' },

    {
      type: 'table',
      headers: ['FIB-4 score', 'Risk of advanced fibrosis', 'Action'],
      rows: [
        ['<1.3 (or <2.0 if aged ≥65)', 'Low', 'Manage in primary care: lifestyle, treat metabolic risk factors; reassess fibrosis risk every ~2–3 years'],
        ['1.3–2.67', 'Indeterminate', 'Do an ELF test (or Fibroscan) — if ELF ≥9.8 (or Fibroscan suggests fibrosis) → refer hepatology; if below threshold → manage in primary care with surveillance'],
        ['>2.67', 'High', 'Refer hepatology directly'],
      ],
      caption: 'FIB-4 = Age × AST ÷ (Platelets × √ALT). It is inaccurate with significant alcohol use — use the ELF test instead in that setting (see Abnormal LFTs / Chronic Liver Disease).',
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Lifestyle is the mainstay: weight loss (target ~7–10% body weight reduces steatosis and inflammation), a Mediterranean-style diet, increased physical activity, and alcohol moderation',
        'Aggressively manage metabolic risk: optimise type 2 diabetes (some agents — pioglitazone, GLP-1 agonists — have evidence in NASH, specialist-guided), treat hypertension',
        'Statins are SAFE and beneficial in NAFLD — do not withhold them for mildly deranged LFTs; they reduce cardiovascular risk (the leading cause of death in NAFLD)',
        'Cardiovascular disease — not liver disease — is the commonest cause of death in NAFLD; treat global CV risk',
        'If cirrhosis develops: HCC surveillance (6-monthly liver ultrasound ± AFP) and variceal screening via hepatology',
        'Vaccinate (hepatitis A/B if not immune, flu), and counsel on alcohol',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'abnormal-lft', label: 'Abnormal LFTs', subtitle: 'The investigation pathway that leads here; FIB-4/ELF detail' },
        { id: 'chronic-liver-disease', label: 'Chronic Liver Disease', subtitle: 'Cirrhosis complications and HCC surveillance' },
        { id: 'obesity', label: 'Obesity & Weight Management', subtitle: 'Weight loss is the primary treatment' },
        { id: 'diabetes-t2dm', label: 'Type 2 Diabetes', subtitle: 'Insulin resistance is central; some agents help NASH' },
        { id: 'lipids-statins', label: 'Lipids & Cardiovascular Prevention', subtitle: 'Statins are safe in NAFLD; CVD is the main killer' },
      ],
    },

  ],
}

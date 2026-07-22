import type { Note } from '../data/notes'

export const pancreaticBiliaryCancer: Note = {
  id: 'pancreatic-biliary-cancer',
  title: 'Pancreatic & Biliary Cancer',
  subtitle: 'Painless jaundice, new diabetes + weight loss, the direct-access CT pathway and Creon',
  tags: ['cancer', 'gastroenterology'],

  body: `pancreatic cancer cholangiocarcinoma gallbladder cancer painless jaundice weight loss new-onset diabetes 2WW direct access CT abdomen CA19-9 Courvoisier pancreatic enzyme replacement Creon steatorrhoea BRCA Lynch Peutz-Jeghers`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Pancreatic)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE NG85 — Pancreatic Cancer', url: 'https://www.nice.org.uk/guidance/ng85' },
        { label: 'Pancreatic Cancer UK', url: 'https://www.pancreaticcancer.org.uk/' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Referral Criteria',
      items: [
        'New painless obstructive jaundice in someone aged ≥40 → 2WW (suspected pancreatic/biliary cancer)',
        'Age ≥60 with weight loss AND any of: abdominal/back pain, nausea, vomiting, constipation, diarrhoea, or NEW-ONSET diabetes → direct-access urgent CT abdomen (or 2WW)',
        'An upper abdominal mass → upper-GI 2WW',
        'Think of it (like ovarian cancer) in vague persistent symptoms in the over-50s — go looking even if initial tests are normal',
        'Courvoisier\'s law: a palpable, non-tender gallbladder with painless jaundice is unlikely to be gallstones — suspect malignant obstruction',
      ],
    },

    { type: 'heading', level: 2, text: 'Background' },
    {
      type: 'para',
      text: 'Pancreatic cancer is one of the deadliest common cancers because it presents late with vague, non-specific symptoms. The two patterns worth burning into memory are PAINLESS obstructive jaundice, and new-onset diabetes with weight loss in an older adult — both should trigger urgent imaging. As with ovarian cancer, the rule is to look harder in the over-50s with persistent vague symptoms even when first-line tests are normal.',
    },
    {
      type: 'list',
      items: [
        'Pancreatic cancer has the worst 1-year survival of all common cancers — it presents late with vague symptoms; only ~10–20% are resectable at diagnosis',
        'Most are ductal adenocarcinoma (exocrine); ~10% are hereditary (BRCA, Lynch syndrome, Peutz-Jeghers, familial pancreatitis)',
        'Risk factors: smoking, obesity, chronic pancreatitis, heavy alcohol, and new-onset diabetes in an older adult',
        'Cholangiocarcinoma (bile duct) and gallbladder cancer are rare — managed surgically via an MDT',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation' },

    {
      type: 'list',
      items: [
        'CT of the abdomen is the key test (ultrasound misses ~10% of pancreatic cancers) — arrange via the direct-access/2WW pathway',
        'Do NOT request CA19-9 in primary care — it is used by specialists for monitoring, not diagnosis',
        'Bloods: FBC, LFTs (obstructive pattern), and glucose/HbA1c',
        'Staging CT ± PET, and biopsy (EUS-guided) determine resectability',
      ],
    },

    { type: 'heading', level: 2, text: 'Management & Pancreatic Enzyme Replacement' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Curative vs Palliative — and Creon',
      items: [
        'Curative: surgical resection (e.g. Whipple\'s) ± neoadjuvant/adjuvant chemotherapy — only a minority are candidates',
        'Palliative: biliary stenting for obstructive jaundice/pruritus, chemotherapy, and symptom/nutritional support',
        'Exocrine insufficiency (malabsorption, steatorrhoea, weight loss) → pancreatic enzyme replacement (Creon): ~50,000 units with main meals and ~25,000 with snacks; swallow capsules whole with the first mouthfuls (do not crush — enzymes are acid-labile)',
        'Creon is porcine-derived — flag for Muslim/Jewish patients (religious authorities generally deem its use acceptable given medical necessity)',
        'Involve dietitian and palliative care early; signpost Pancreatic Cancer UK and Macmillan',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG85 — Pancreatic Cancer', url: 'https://www.nice.org.uk/guidance/ng85' },
        { label: 'Pancreatic Cancer UK', url: 'https://www.pancreaticcancer.org.uk/' },
        { label: 'AMMF — Cholangiocarcinoma Charity', url: 'https://ammf.org.uk/' },
        { label: 'Macmillan — Pancreatic Cancer', url: 'https://www.macmillan.org.uk/cancer-information-and-support/pancreatic-cancer' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'abnormal-lft', label: 'Abnormal LFTs', subtitle: 'Obstructive/cholestatic pattern and jaundice work-up' },
        { id: 'oesophagogastric-cancer', label: 'Oesophageal & Gastric Cancer', subtitle: 'Overlapping upper-GI 2WW pathway' },
        { id: 'ovarian-cancer', label: 'Ovarian Cancer & CA125', subtitle: 'Similar "look-harder in the over-50s" principle' },
        { id: 'gallstones-pancreatitis', label: 'Gallstones & Pancreatitis', subtitle: 'Benign biliary disease and chronic pancreatitis risk' },
      ],
    },

  ],
}

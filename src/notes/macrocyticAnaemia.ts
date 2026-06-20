import type { Note } from '../data/notes'

export const macrocyticAnaemia: Note = {
  id: 'macrocytic-anaemia',
  title: 'Macrocytic Anaemia',
  subtitle: 'Megaloblastic vs non-megaloblastic, B12/folate, reticulocytes, and when to refer haematology',
  tags: ['haematology'],

  body: `macrocytic anaemia raised MCV megaloblastic B12 deficiency folate deficiency pernicious anaemia intrinsic factor antibody reticulocytes haemolysis LDH haptoglobin alcohol liver disease hypothyroidism drugs methotrexate azathioprine trimethoprim hydroxycarbamide AEDs pregnancy myelodysplastic syndrome MDS myeloma blood film folic acid hydroxocobalamin`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Anaemia (B12/Folate)', url: 'https://cks.nice.org.uk/topics/anaemia-b12-folate-deficiency/' },
        { label: 'NICE CKS — Macrocytosis', url: 'https://cks.nice.org.uk/topics/anaemia-b12-folate-deficiency/' },
        { label: 'BSH — Cobalamin & Folate Guidelines', url: 'https://b-s-h.org.uk/guidelines/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Causes — Frame by Mechanism' },

    {
      type: 'table',
      headers: ['Mechanism', 'Causes', 'Clues'],
      rows: [
        ['Megaloblastic (impaired DNA synthesis)', 'B12 deficiency, folate deficiency', 'Hypersegmented neutrophils on film; may have very high MCV; neuro features (B12)'],
        ['Non-megaloblastic', 'Alcohol excess, liver disease, hypothyroidism', 'Common and reversible; GGT/LFTs, TFTs'],
        ['Drug-induced', 'Methotrexate, azathioprine, trimethoprim, hydroxycarbamide, antiepileptics (phenytoin), some chemotherapy', 'Medication review'],
        ['Reticulocytosis (large young red cells)', 'Haemolysis, acute bleeding with marrow response', 'Raised reticulocytes; raised bilirubin/LDH, low haptoglobin'],
        ['Marrow disorder', 'Myelodysplastic syndrome (MDS), myeloma, aplastic anaemia', 'Cytopenias of other lineages; refer haematology'],
        ['Physiological / other', 'Pregnancy, neonatal period', 'Always consider pregnancy in a woman of childbearing age'],
      ],
    },

    { type: 'heading', level: 2, text: 'Initial Investigations' },

    {
      type: 'callout',
      variant: 'info',
      title: 'First-Line Bloods for a Raised MCV',
      items: [
        'Haematinics: serum B12 (or active B12/holotranscobalamin) and folate',
        'Reticulocyte count — high suggests haemolysis or response to bleeding',
        'LFTs (alcohol/liver) and GGT; TFTs (hypothyroidism)',
        'Blood film — hypersegmented neutrophils (megaloblastic), dysplastic features (MDS), evidence of haemolysis',
        'FBC — look for accompanying cytopenias (suggest marrow pathology)',
        'In anyone >60 with anaemia: assess for malignancy — FIT testing and myeloma screen as appropriate',
        'Check pregnancy status in women of childbearing age',
      ],
    },

    { type: 'heading', level: 2, text: 'Pathway by Reticulocyte Count' },

    {
      type: 'table',
      headers: ['Reticulocytes', 'Bilirubin/LDH', 'Interpretation & Action'],
      rows: [
        ['High (raised)', 'Raised bilirubin/LDH, low haptoglobin', 'Suspected haemolytic anaemia → send haemolysis screen (LDH, haptoglobin, reticulocytes, DAT/Coombs, blood film) → refer haematology'],
        ['Normal/low', 'Normal', 'Look for B12/folate deficiency and common reversible causes (alcohol, liver, thyroid, drugs, pregnancy)'],
      ],
    },

    { type: 'heading', level: 2, text: 'B12 Deficiency' },

    {
      type: 'list',
      items: [
        'Causes: pernicious anaemia (autoimmune — check intrinsic factor antibodies), malabsorption (coeliac, Crohn\'s, ileal resection, metformin, PPIs), dietary (strict vegan)',
        'Neurological features can occur without anaemia and may be irreversible if untreated: paraesthesiae, peripheral neuropathy, subacute combined degeneration of the cord, cognitive change — treat promptly',
        'Treatment: hydroxocobalamin IM — if neurological involvement, 1 mg on alternate days until no further improvement, then 1 mg every 2 months; without neuro involvement, 1 mg IM three times weekly for 2 weeks then 1 mg every 3 months (every 2 months if pernicious anaemia)',
        'IMPORTANT: treat B12 BEFORE (or alongside) folate — giving folate alone in B12 deficiency can precipitate or worsen subacute combined degeneration of the cord',
        'See the dedicated Vitamin B12 note for full pathway',
      ],
    },

    { type: 'heading', level: 2, text: 'Folate Deficiency' },

    {
      type: 'list',
      items: [
        'Causes: dietary (poor intake, alcohol), malabsorption (coeliac), increased demand (pregnancy, haemolysis), drugs (methotrexate, trimethoprim, phenytoin)',
        'Treatment: folic acid 5 mg OD for ~4 months (and address dietary intake); recheck FBC',
        'Always exclude/treat coexisting B12 deficiency first',
        'Preconception/pregnancy: folic acid 400 mcg daily (5 mg if high risk — diabetes, BMI ≥30, antiepileptics, previous NTD, sickle/thalassaemia)',
      ],
    },

    { type: 'heading', level: 2, text: 'When Common Causes Are Excluded' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer Haematology if Unexplained',
      items: [
        'If reticulocytes normal, B12 and folate normal, and reversible causes (alcohol, liver, thyroid, drugs, pregnancy) excluded → refer haematology (often via advice & guidance, frequently urgent)',
        'Consider myelodysplastic syndrome (MDS), myeloma, or other marrow pathology — especially with other cytopenias or dysplastic blood film',
        'Persistent unexplained macrocytosis even without anaemia warrants investigation',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'vitamin-b12', label: 'Vitamin B12 Deficiency', subtitle: 'Full pathway — pernicious anaemia, replacement regimens, neuro features' },
        { id: 'microcytic-anaemia', label: 'Microcytic Anaemia', subtitle: 'Iron deficiency — the other end of the MCV spectrum' },
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'MDS, myeloma — when macrocytosis is unexplained' },
        { id: 'coeliac-disease', label: 'Coeliac Disease', subtitle: 'Malabsorption causing combined B12/folate/iron deficiency' },
        { id: 'alcohol-etoh', label: 'Alcohol & Liver Disease', subtitle: 'Common reversible cause of macrocytosis' },
      ],
    },

  ],
}

import type { Note } from '../data/notes'

export const normocyticAnaemia: Note = {
  id: 'normocytic-anaemia',
  title: 'Normocytic Anaemia',
  subtitle: 'The reticulocyte-led approach — bleeding, anaemia of chronic disease, haemolysis and marrow failure',
  tags: ['haematology'],

  body: `normocytic anaemia reticulocytes anaemia of chronic disease ACD acute bleeding haemolysis LDH haptoglobin haematinics myeloma marrow failure CKD FIT test mixed picture blood film`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Anaemia (Iron Deficiency)', url: 'https://cks.nice.org.uk/topics/anaemia-iron-deficiency/' },
        { label: 'BSH — Guidelines', url: 'https://b-s-h.org.uk/guidelines/' },
        { label: 'NICE NG12 — Suspected Cancer (FIT)', url: 'https://www.nice.org.uk/guidance/ng12' },
      ],
    },

    {
      type: 'para',
      text: 'Normocytic anaemia has a wide differential, so the most useful organising principle is the reticulocyte count: a high count points to a marrow responding to blood loss or haemolysis, while a low/normal count points to anaemia of chronic disease, mixed deficiency, or a marrow problem. Normocytic anaemia is a symptom to be worked up, not a diagnosis — and in the over-60s, unexplained anaemia should always prompt thoughts of GI malignancy and myeloma.',
    },
    { type: 'heading', level: 2, text: 'Causes — Frame Around the Reticulocyte Count' },

    {
      type: 'table',
      headers: ['Category', 'Examples', 'Clues'],
      rows: [
        ['Acute blood loss', 'GI bleed, trauma, menorrhagia, occult malignancy', 'May be obvious; reticulocytes rise as marrow responds; will become microcytic if chronic/iron-deficient'],
        ['Anaemia of chronic disease (ACD)', 'Chronic infection/inflammation, malignancy, CKD (reduced erythropoietin)', 'Low/normal reticulocytes; ferritin normal/high; often the commonest cause in older patients'],
        ['Early/mixed deficiency', 'Combined iron + B12/folate deficiency (MCV "averages out")', 'Check full haematinics — a normal MCV can hide mixed deficiency'],
        ['Haemolysis', 'Autoimmune, hereditary, drug-induced', 'High reticulocytes, raised bilirubin/LDH, low haptoglobin'],
        ['Marrow failure / infiltration', 'Myeloma, myelodysplasia, aplastic anaemia, leukaemia', 'Often other cytopenias; refer haematology'],
      ],
    },

    { type: 'heading', level: 2, text: 'Initial Investigations' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Check the Reticulocyte Count First',
      items: [
        'Reticulocytes distinguish a marrow that is responding (high — bleeding/haemolysis) from one that is not (low/normal — ACD, deficiency, marrow problem)',
        'Send alongside: full haematinics (ferritin, B12, folate), U&E (CKD), LFTs, TFTs, CRP/ESR, and a blood film',
        'In anyone ≥60 with unexplained anaemia: FIT test and consider a myeloma screen (protein electrophoresis, serum free light chains)',
        'Always look for blood loss — GI symptoms, menstrual history, and consider occult GI malignancy',
      ],
    },

    { type: 'heading', level: 2, text: 'Pathway by Reticulocyte Count' },

    {
      type: 'table',
      headers: ['Reticulocytes', 'Next step'],
      rows: [
        ['High (>~80–100 ×10⁹/L)', 'If bilirubin also raised → haemolysis screen (LDH, haptoglobin, DAT/Coombs, blood film) → refer haematology. If bilirubin normal → investigate for blood loss (GI/menstrual)'],
        ['Normal/low', 'Consider all other causes: anaemia of chronic disease, CKD, mixed deficiency, hypothyroidism, and marrow disorders (myeloma/MDS) — refer haematology if unexplained or other cytopenias'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management Principles' },

    {
      type: 'list',
      items: [
        'Treat the underlying cause — there is no single "treatment" for normocytic anaemia',
        'Anaemia of chronic disease: treat the underlying condition; iron is only helpful if there is coexisting iron deficiency; CKD-related anaemia may need an erythropoiesis-stimulating agent (renal team)',
        'Acute/significant blood loss: identify and treat the source; transfuse per clinical need',
        'Refer haematology for: unexplained normocytic anaemia after first-line work-up, suspected haemolysis, pancytopenia, or features suggesting marrow pathology',
        'Refer/2WW for suspected GI or other malignancy as indicated (FIT, weight loss, other red flags)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'microcytic-anaemia', label: 'Microcytic Anaemia', subtitle: 'Iron deficiency — the low-MCV end of the spectrum' },
        { id: 'macrocytic-anaemia', label: 'Macrocytic Anaemia', subtitle: 'B12/folate and the high-MCV causes' },
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Myeloma/MDS/leukaemia — marrow causes' },
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'Anaemia of CKD — reduced erythropoietin' },
        { id: 'colorectal-cancer', label: 'Colorectal Cancer', subtitle: 'Occult GI blood loss — FIT and 2WW' },
      ],
    },

  ],
}

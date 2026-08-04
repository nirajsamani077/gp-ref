import type { Note } from '../data/notes'

export const weightLoss: Note = {
  id: 'weight-loss',
  title: 'Unintentional Weight Loss',
  subtitle: 'A structured approach to a red-flag symptom — malignancy, organic and psychosocial causes, and what to test',
  tags: ['general'],

  body: `unintentional weight loss unexplained weight loss malignancy cancer 2WW hyperthyroidism diabetes malabsorption coeliac depression dementia frailty sarcopenia appetite cachexia investigations CT FIT chest x-ray myeloma`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Unintentional weight loss — usually taken as ≥5% of body weight over 6–12 months — is a non-specific but important symptom that warrants a structured search rather than a scattergun of tests. The causes group into malignancy, non-malignant organic disease, and psychosocial/functional causes. About a quarter have a serious underlying condition, so the approach is a focused history and examination, first-line screening tests, and a low threshold for cancer investigation when other features are present.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'First — Is It Real, and Is There a Red Flag?',
      items: [
        'Confirm objectively where possible (documented weights, changed clothing/belt notch) — perceived loss is often not borne out.',
        'Cancer is a common serious cause: unexplained weight loss combined with other features (e.g. abdominal/GI symptoms, a mass, iron-deficiency anaemia, or specific site symptoms) triggers a site-specific 2WW referral (see 2WW guide).',
        'Weight loss with no localising features still needs investigation — do not simply reassure.',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes to Consider' },
    {
      type: 'table',
      headers: ['Category', 'Examples'],
      rows: [
        ['Malignancy', 'GI, lung, haematological (lymphoma, myeloma), pancreatic, renal, ovarian — often with site-specific symptoms'],
        ['Endocrine / metabolic', 'Hyperthyroidism, new/poorly controlled diabetes, Addison\'s disease, phaeochromocytoma'],
        ['GI', 'Malabsorption (coeliac, pancreatic insufficiency, IBD), chronic liver disease, peptic ulcer, dysphagia'],
        ['Chronic disease / infection', 'COPD/heart failure/CKD cachexia, TB, HIV, chronic infection'],
        ['Psychosocial / functional', 'Depression, anxiety, dementia, eating disorders, alcohol/substance misuse, social isolation, poverty ("can\'t afford / can\'t cook / can\'t shop"), poor dentition'],
        ['Frailty / older adults', 'Sarcopenia, polypharmacy, swallowing problems, reduced appetite — often multifactorial'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment & Investigations' },
    {
      type: 'list',
      items: [
        'History: quantify the loss; appetite (reduced vs preserved — preserved appetite with weight loss suggests hyperthyroidism, diabetes or malabsorption); GI, respiratory and systemic symptoms; mood and cognition; drugs, alcohol and social circumstances.',
        'Examination: full general and systems examination including lymph nodes, abdomen (masses/organomegaly), chest, thyroid, and a rectal/breast/testicular exam guided by symptoms.',
        'First-line tests: FBC, U&E, LFTs, calcium, glucose/HbA1c, TFTs, CRP/ESR, coeliac serology, ferritin; urinalysis; consider FIT, protein electrophoresis/free light chains (myeloma), HIV, and a chest X-ray.',
        'If initial work-up is normal but weight loss continues, consider CT and further imaging, and review for occult depression/functional causes; "active monitoring" with repeat assessment is reasonable when investigations are negative.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (incl. Weight Loss)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — Weight Loss (Unintentional)', url: 'https://cks.nice.org.uk/' },
        { label: 'BMJ Best Practice — Unintentional Weight Loss', url: 'https://bestpractice.bmj.com/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Site-specific cancer criteria including weight loss' },
        { id: 'hyperthyroidism', label: 'Hyperthyroidism & Thyrotoxicosis', subtitle: 'Weight loss with a preserved/increased appetite' },
        { id: 'coeliac-disease', label: 'Coeliac Disease', subtitle: 'Malabsorption as a cause' },
        { id: 'depression', label: 'Depression', subtitle: 'A common functional cause; reduced appetite' },
        { id: 'frailty', label: 'Frailty', subtitle: 'Sarcopenia and multifactorial weight loss in older adults' },
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Myeloma/lymphoma — weight loss with B symptoms' },
      ],
    },

  ],
}

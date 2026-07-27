import type { Note } from '../data/notes'

export const nightSweats: Note = {
  id: 'night-sweats',
  title: 'Night Sweats & Non-Menopausal Flushing',
  subtitle: 'A structured approach to drenching night sweats — the serious causes, drugs, and when to investigate',
  tags: ['symptoms'],

  body: `night sweats drenching sweats lymphoma B symptoms tuberculosis HIV endocarditis menopause hyperthyroidism phaeochromocytoma carcinoid flushing GORD medication SSRI opioid anxiety weight loss malignancy investigations`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Night sweats are common and usually benign, but drenching sweats — soaking the bedclothes and requiring a change — are a recognised "B symptom" and warrant a structured search for a serious cause. The task is to separate the trivial (a warm room, anxiety, menopause, GORD, a drug side effect) from infection, malignancy (especially lymphoma) and endocrine disease, guided by associated features.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Red-Flag Associations',
      items: [
        'Drenching night sweats WITH weight loss, fever, lymphadenopathy, fatigue or itch → investigate for lymphoma/malignancy and infection urgently (consider 2WW haematology).',
        'Cough/weight loss/travel/risk factors → tuberculosis and HIV.',
        'Assess the pattern: truly nocturnal and drenching is more concerning than feeling generally warm/clammy.',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes to Consider' },
    {
      type: 'table',
      headers: ['Category', 'Examples'],
      rows: [
        ['Infection', 'Tuberculosis, HIV, infective endocarditis, abscess, brucellosis, other chronic infection'],
        ['Malignancy', 'Lymphoma (Hodgkin/non-Hodgkin), leukaemia, other cancers'],
        ['Endocrine', 'Menopause/andropause, hyperthyroidism, diabetes (nocturnal hypoglycaemia), phaeochromocytoma, carcinoid'],
        ['Drugs', 'Antidepressants (SSRIs, venlafaxine), opioids, hormonal treatments (tamoxifen, anti-androgens/GnRH), cholinesterase inhibitors, alcohol/withdrawal'],
        ['Other', 'Anxiety/panic, GORD, obstructive sleep apnoea, chronic pain, and simply a hot bedroom'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment & Investigation' },
    {
      type: 'list',
      items: [
        'History: pattern and severity, weight/appetite, fever, itch, lymph nodes, cough, travel and infection risk, menopausal status, mood/anxiety, alcohol, and a full drug history.',
        'Examination: lymph nodes, liver/spleen, chest, thyroid, and general assessment.',
        'If red flags or persistent unexplained sweats: FBC and blood film, ESR/CRP, LDH, U&E, LFTs, glucose/HbA1c, TFTs, HIV test, and a chest X-ray; consider protein electrophoresis and further imaging as directed.',
        'Menopausal vasomotor flushing is a clinical diagnosis in the right age/context — treat with HRT/alternatives (see Menopause) rather than extensive investigation.',
        'If no cause is found and the patient is otherwise well, reassure with safety-netting and a plan to review.',
      ],
    },

    { type: 'heading', level: 2, text: 'Non-Menopausal Flushing' },
    {
      type: 'list',
      items: [
        'Consider rosacea, medications (calcium-channel blockers, nicotinic acid), alcohol/food triggers, mastocytosis, and (rare) carcinoid syndrome (flushing + diarrhoea + wheeze — check urinary 5-HIAA) and phaeochromocytoma.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — Menopause (Vasomotor Symptoms)', url: 'https://cks.nice.org.uk/topics/menopause/' },
        { label: 'BMJ Best Practice — Night Sweats', url: 'https://bestpractice.bmj.com/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Lymphoma — night sweats as a B symptom' },
        { id: 'tuberculosis', label: 'Tuberculosis', subtitle: 'Classic infective cause of night sweats' },
        { id: 'menopause', label: 'Menopause', subtitle: 'Vasomotor symptoms and their treatment' },
        { id: 'hyperthyroidism', label: 'Hyperthyroidism', subtitle: 'Endocrine cause of sweating/heat intolerance' },
        { id: 'weight-loss', label: 'Unintentional Weight Loss', subtitle: 'Overlapping red-flag symptom cluster' },
      ],
    },

  ],
}

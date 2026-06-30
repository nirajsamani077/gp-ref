import type { Note } from '../data/notes'

export const oesophagogastricCancer: Note = {
  id: 'oesophagogastric-cancer',
  title: 'Oesophageal & Gastric Cancer',
  subtitle: 'Upper-GI 2WW criteria, progressive dysphagia, Barrett\'s/H. pylori risk and treatment',
  tags: ['cancer', 'gastroenterology'],

  body: `oesophageal cancer gastric cancer adenocarcinoma squamous cell carcinoma Barrett's H pylori dysphagia weight loss UGI 2WW two week wait OGD endoscopy staging CT PET oesophagectomy gastrectomy palliative stent Virchow's node`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Upper GI)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE NG83 — Oesophago-Gastric Cancer', url: 'https://www.nice.org.uk/guidance/ng83' },
        { label: 'CRUK — Oesophageal/Stomach Cancer', url: 'https://www.cancerresearchuk.org/about-cancer' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Upper GI 2WW Referral (Urgent OGD)',
      items: [
        'Dysphagia (difficulty swallowing) at ANY age → urgent OGD',
        'Age ≥55 with weight loss AND any of: upper abdominal pain, reflux, or dyspepsia → urgent OGD',
        'An upper abdominal mass consistent with stomach cancer → 2WW',
        'Consider (non-urgent OGD / further assessment): treatment-resistant dyspepsia, raised platelets (thrombocytosis) with upper-GI symptoms, nausea/vomiting with weight loss, or iron-deficiency anaemia',
        'Progressive dysphagia (solids then liquids) is the classic alarm symptom; hoarseness and cough are late signs',
      ],
    },

    { type: 'heading', level: 2, text: 'Types & Risk Factors' },

    {
      type: 'table',
      headers: ['Cancer', 'Subtype & site', 'Key risk factors'],
      rows: [
        ['Oesophageal — squamous cell', 'Upper/middle third (incidence declining)', 'Smoking and alcohol'],
        ['Oesophageal — adenocarcinoma', 'Lower third (incidence rising)', 'Barrett\'s oesophagus (metaplasia from chronic reflux), GORD, obesity'],
        ['Gastric — adenocarcinoma', 'Stomach (more common in East Asia, South America)', 'Chronic H. pylori infection, smoking, alcohol, diet, pernicious anaemia, Lynch syndrome'],
      ],
      caption: 'Both are often aggressive and present late (overall 5-year survival ~15–20%). Barrett\'s with high-grade dysplasia overlaps with early mucosal cancer.',
    },

    { type: 'heading', level: 2, text: 'Investigation & Staging' },

    {
      type: 'list',
      items: [
        'OGD with biopsy is the diagnostic test; in those who do not meet 2WW criteria but have unexplained/abnormal findings (e.g. iron-deficiency anaemia), arrange a non-urgent OGD',
        'Staging: CT chest/abdomen/pelvis ± PET-CT, and endoscopic ultrasound (local T/N staging) to decide curative vs palliative intent',
        'A palpable left supraclavicular node (Virchow\'s node / Troisier\'s sign) suggests advanced gastric cancer (rare)',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment (MDT-led)' },

    {
      type: 'list',
      items: [
        'Early mucosal disease (overlap with high-grade Barrett\'s dysplasia): endoscopic mucosal resection/ablation',
        'Locally advanced: oesophagectomy or gastrectomy with neoadjuvant/perioperative chemotherapy (± radiotherapy)',
        'Advanced/metastatic: palliative chemotherapy, oesophageal stenting or radiotherapy/brachytherapy for dysphagia; targeted therapy (e.g. HER2-directed) in selected gastric cancers',
        'Nutrition is central — dietitian input, and PEG/jejunostomy feeding may be needed; watch post-gastrectomy complications (dumping syndrome, B12 and iron/calcium malabsorption)',
        'Supportive care via the clinical nurse specialist and Macmillan; signpost CRUK and local services',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'barretts-oesophagus', label: "Barrett's Oesophagus", subtitle: 'Pre-malignant metaplasia and surveillance' },
        { id: 'gord-dyspepsia', label: 'GORD & Dyspepsia', subtitle: 'Reflux, H. pylori and alarm features' },
        { id: 'dysphagia', label: 'Dysphagia', subtitle: 'Approach to swallowing difficulty — the key alarm symptom' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Full suspected-cancer referral criteria' },
        { id: 'microcytic-anaemia', label: 'Microcytic Anaemia', subtitle: 'Iron-deficiency anaemia as a presenting feature' },
      ],
    },

  ],
}

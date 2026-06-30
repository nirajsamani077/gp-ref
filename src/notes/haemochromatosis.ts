import type { Note } from '../data/notes'

export const haemochromatosis: Note = {
  id: 'haemochromatosis',
  title: 'Haemochromatosis & Raised Ferritin',
  subtitle: 'HFE genetics, the raised-ferritin algorithm, transferrin saturation, venesection and HCC surveillance',
  tags: ['gastroenterology', 'haematology'],

  body: `hereditary haemochromatosis HFE gene C282Y H63D iron overload raised ferritin transferrin saturation TSAT iron studies venesection desferrioxamine bronze diabetes arthritis pseudogout chronic liver disease cirrhosis hepatocellular carcinoma HCC slate grey skin hypogonadism cardiomyopathy autosomal recessive`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Haemochromatosis', url: 'https://cks.nice.org.uk/topics/haemochromatosis/' },
        { label: 'BSG — Haemochromatosis Guideline', url: 'https://www.bsg.org.uk/clinical-resource/' },
        { label: 'Haemochromatosis UK', url: 'https://www.haemochromatosis.org.uk/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Raised Ferritin — Primary Care Algorithm' },

    {
      type: 'callout',
      variant: 'info',
      title: 'First Step — Always Pair Ferritin with Transferrin Saturation',
      items: [
        'Ferritin is an acute-phase reactant — it rises with inflammation, infection, alcohol, obesity, and liver disease, NOT just iron overload',
        'Raised ferritin: males >300 µg/L, females >200 µg/L',
        'Check FBC, LFTs, CRP and transferrin saturation (TSAT = serum iron ÷ TIBC × 100) — TSAT is the key test for distinguishing true iron overload',
      ],
    },

    {
      type: 'table',
      headers: ['Pattern', 'Interpretation', 'Action'],
      rows: [
        ['Raised TSAT (>50% men, >40% women)', 'Suggests iron overload', 'Check HFE genotype. If FBC normal → refer gastroenterology/liver. If FBC abnormal (e.g. high Hb/other cytopenias) → refer haematology'],
        ['Normal TSAT, ferritin <1000', 'Iron overload unlikely — reactive ferritin', 'Address cause: alcohol, obesity, metabolic syndrome, inflammation/infection; give lifestyle advice and recheck ferritin + TSAT in 3–6 months — refer if persistently high'],
        ['Normal TSAT, ferritin >1000', 'Significant — needs assessment', 'Refer gastroenterology/liver (risk of underlying liver disease or other pathology)'],
      ],
      caption: 'A high ferritin with a normal TSAT is usually reactive (alcohol/metabolic/inflammatory), not haemochromatosis. A high ferritin with a high TSAT warrants HFE testing.',
    },

    { type: 'heading', level: 2, text: 'Hereditary Haemochromatosis — Genetics' },

    {
      type: 'list',
      items: [
        'Autosomal recessive disorder of the HFE gene (chromosome 6) → increased GI iron absorption → progressive iron overload deposited in liver, pancreas, heart, joints, skin and pituitary',
        'The two key mutations are C282Y and H63D; homozygosity for C282Y is the classic high-risk genotype',
        'Homozygous prevalence ~1:200–1:400 in people of northern European ancestry; carrier frequency ~1:10',
        'Men present earlier and more severely; women are relatively protected by menstrual blood loss until after the menopause',
        'Screen first-degree relatives of affected individuals (TSAT/ferritin ± HFE genotyping)',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features' },

    {
      type: 'table',
      headers: ['System', 'Manifestation'],
      rows: [
        ['Early/non-specific', 'Fatigue, arthralgia (especially 2nd/3rd MCP joints), low libido — often the first symptoms; frequently an incidental raised ferritin'],
        ['Liver', 'Chronic liver disease — hepatomegaly, deranged LFTs, progressing to cirrhosis'],
        ['Endocrine', '"Bronze diabetes" (pancreatic iron + skin pigmentation); hypogonadism (pituitary deposition); hypothyroidism'],
        ['Joints', 'Arthropathy and chondrocalcinosis/pseudogout'],
        ['Cardiac', 'Dilated/restrictive cardiomyopathy, heart failure, arrhythmia'],
        ['Skin', 'Slate-grey or bronze hyperpigmentation'],
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis & Staging' },

    {
      type: 'list',
      items: [
        'Iron studies: ferritin raised, TSAT raised (>50% men / >45–55% women), low TIBC',
        'HFE genotyping (C282Y, H63D) confirms the genetic diagnosis in the right biochemical context',
        'Assess organ involvement: HbA1c, LFTs, AFP, USS liver; ECG and echocardiogram (cardiac); consider pituitary/gonadal axis if symptomatic',
        'Liver assessment: fibrosis staging (FIB-4/fibroscan ± biopsy) — ferritin >1000, abnormal LFTs, or hepatomegaly raise concern for advanced fibrosis',
        'MRI can quantify hepatic iron non-invasively',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Venesection & HCC Surveillance',
      items: [
        'Venesection is first-line: remove ~1 unit of blood weekly until iron-deplete (target ferritin and TSAT toward the low-normal range, e.g. ferritin <50), then lifelong maintenance venesection (typically 3–4 times/year)',
        'Iron chelation (desferrioxamine) is second-line, for those who cannot tolerate venesection (e.g. anaemia, cardiac disease)',
        'Lifestyle: avoid alcohol (synergistic liver damage), avoid iron and high-dose vitamin C supplements (vitamin C increases iron absorption)',
        'If cirrhosis develops, the risk of hepatocellular carcinoma is greatly increased (~200×) → 6-monthly HCC surveillance with liver ultrasound ± AFP',
        'Life expectancy is normal if diagnosed and treated BEFORE cirrhosis or diabetes develops — hence the value of early detection',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'abnormal-lft', label: 'Abnormal LFTs', subtitle: 'Ferritin/TSAT form part of the liver screen; investigation pathway' },
        { id: 'chronic-liver-disease', label: 'Chronic Liver Disease', subtitle: 'Cirrhosis complications and HCC surveillance' },
        { id: 'diabetes-diagnosis', label: 'Diabetes Diagnosis', subtitle: '"Bronze diabetes" — pancreatic iron deposition' },
        { id: 'gout', label: 'Gout', subtitle: 'Arthropathy and chondrocalcinosis/pseudogout in iron overload' },
      ],
    },

  ],
}

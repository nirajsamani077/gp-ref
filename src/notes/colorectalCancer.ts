import type { Note } from '../data/notes'

export const colorectalCancer: Note = {
  id: 'colorectal-cancer',
  title: 'Colorectal Cancer',
  subtitle: 'FIT testing, 2WW criteria, bowel cancer screening, Lynch syndrome and surveillance',
  tags: ['oncology', 'colorectal', 'gastroenterology'],

  body: 'colorectal cancer bowel cancer CRC FIT faecal immunochemical test 2WW two week wait urgent referral colonoscopy CT colonography IDA iron deficiency anaemia change in bowel habit PR rectal bleeding weight loss abdominal pain Lynch syndrome FAP familial adenomatous polyposis IBD ulcerative colitis Crohns CEA carcinoembryonic antigen screening NHS bowel cancer screening programme 60 74 aspirin polypectomy',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Colorectal Cancer — Overview',
      items: [
        'Fourth most common cancer in the UK; predominantly adenocarcinoma arising from colonic/rectal adenomatous polyps',
        'Most arise in the sigmoid colon and rectum (left-sided)',
        'Presentation: altered bowel habit, rectal bleeding, iron deficiency anaemia (IDA), abdominal pain, weight loss, palpable abdominal mass',
        'FBC + FIT (faecal immunochemical test) are the key primary care investigations',
        'FIT-positive: urgent referral regardless of symptoms; do NOT wait for colonoscopy result before acting',
      ],
    },

    { type: 'heading', level: 2, text: 'Risk Factors' },

    {
      type: 'list',
      items: [
        'Age: incidence rises sharply after 50 years',
        'Male sex: slightly higher incidence in men',
        'Family history: first-degree relative with CRC — increased risk; multiple relatives or early onset may indicate Lynch syndrome or FAP',
        'IBD: ulcerative colitis (especially extensive, longstanding) and Crohn\'s colitis — surveillance colonoscopy programme',
        'Multiple adenomatous polyps (>3 or >1 cm): surveillance colonoscopy',
        'Diet: red and processed meat, low fibre, excess alcohol, obesity, physical inactivity, smoking',
        'Lynch syndrome (HNPCC): autosomal dominant; MLH1/MSH2/MSH6/PMS2 mutations; lifetime CRC risk up to 80%; also associated with endometrial, ovarian, urinary tract, gastric cancers',
        'FAP (Familial Adenomatous Polyposis): hundreds of polyps; near 100% lifetime CRC risk if untreated',
      ],
    },

    { type: 'heading', level: 2, text: '2WW Referral Criteria (NICE NG12)' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Urgent 2WW Referral — Suspected Colorectal Cancer',
      items: [
        'Age ≥40: unexplained weight loss + abdominal pain',
        'Age ≥50: unexplained rectal bleeding',
        'Age ≥60: IDA (iron deficiency anaemia) OR change in bowel habit (CIBH)',
        'Positive FIT test: any age — refer urgently',
        'Rectal or abdominal mass on examination: any age — urgent referral',
        'Thrombocytosis (raised platelets) + rectal bleeding or CIBH: increased suspicion — refer',
        'In men: IDA without GI symptoms — refer lower GI 2WW (to exclude right-sided CRC)',
      ],
    },

    { type: 'heading', level: 2, text: 'FIT Testing in Primary Care' },

    {
      type: 'list',
      items: [
        'FIT (faecal immunochemical test): measures haemoglobin in stool — highly sensitive for colorectal cancer',
        'FIT is the primary care investigation of choice for symptomatic patients — request alongside FBC',
        'FIT threshold: ≥10 μg Hb/g faeces is generally used for urgent referral in symptomatic patients (may vary by local guidance)',
        'FIT NEGATIVE + low-risk symptoms: reassure, treat symptomatically, safety-net to return if symptoms change',
        'FIT POSITIVE: urgent 2WW lower GI referral — do NOT wait for symptom worsening',
        'FIT is NOT appropriate for asymptomatic screening — that is done via NHS Bowel Cancer Screening Programme (BCS)',
        'Do NOT use FIT if visible rectal bleeding present (haematochezia) — this requires direct 2WW referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'table',
      headers: ['Investigation', 'Detail'],
      rows: [
        ['FBC + FIT', 'Primary care: IDA or FIT positivity → urgent referral. FIT has high negative predictive value.'],
        ['Colonoscopy', 'Gold standard diagnostic test; allows biopsy and polypectomy; requires bowel prep; may be less tolerated in frail/elderly'],
        ['CT colonography (CTC)', 'Alternative to colonoscopy for frail patients; no sedation needed; can also detect extracolonic pathology; lower specificity — positive CTC still requires colonoscopy for biopsy'],
        ['CT chest/abdomen/pelvis', 'Staging investigation once CRC confirmed — nodal and metastatic disease'],
        ['CEA (carcinoembryonic antigen)', 'Not a diagnostic test; used for disease monitoring after treatment (secondary care) — rise in CEA may suggest recurrence'],
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment Overview' },

    {
      type: 'list',
      items: [
        'MDT: colorectal surgeon, oncologist, radiologist, histopathologist, colorectal clinical nurse specialist (CNS)',
        'Surgery: curative intent — colectomy (extent depends on tumour location); stoma may be permanent or temporary depending on surgery',
        'Low anterior resection (LAR): for upper/mid rectal cancer (sphincter-preserving); bowel function often affected post-op',
        'Hartmann\'s procedure: for distal rectal cancer or emergency — end colostomy; reversal possible later',
        'Adjuvant chemotherapy: stage III/IV disease — FOLFOX or CAPOX regimen post-surgery',
        'Chemoradiotherapy: for rectal cancer — neoadjuvant to downstage before surgery',
        'Palliative: chemotherapy ± targeted therapy (bevacizumab); colonic stenting for obstruction',
        'Lynch syndrome: screen ALL diagnosed CRC for Lynch (immunohistochemistry + MSI testing); offer aspirin 600 mg daily if Lynch-positive (reduces CRC and endometrial cancer incidence)',
      ],
    },

    { type: 'heading', level: 2, text: 'NHS Bowel Cancer Screening Programme' },

    {
      type: 'list',
      items: [
        'Ages 60–74 (England): invited every 2 years for home FIT kit (stool sample)',
        'Positive screening FIT: invited for assessment colonoscopy',
        'Over 75: can request a kit from the bowel cancer screening programme',
        'Bowel scope screening (flexible sigmoidoscopy at 55): being phased out; replaced by FIT-based screening',
        'High-risk surveillance (family history, polyps, IBD): separate enhanced surveillance programme — consult BCSP or gastroenterology',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        '2WW lower GI (suspected colorectal cancer): UHDB Queen\'s Hospital Burton colorectal surgery — via e-RS 2WW pathway; include FIT result, symptoms, examination findings',
        'Alternative: Good Hope Hospital (UHB) lower GI 2WW',
        'Colonoscopy / CT colonography: requested via lower GI 2WW — arranged by secondary care',
        'Lynch syndrome queries: UHDB Burton or QEHB Birmingham genetics — via GP referral for genetic counselling',
        'Bowel cancer screening programme: NHS BCSP — patients aged 60–74 are automatically invited; practice can request kits for over-75s',
        'Patient support: Bowel Cancer UK (bowelcanceruk.org.uk); Macmillan Cancer Support (macmillan.org.uk)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer 2WW', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE NG151 — Colorectal Cancer', url: 'https://www.nice.org.uk/guidance/ng151' },
        { label: 'NHS Bowel Cancer Screening', url: 'https://www.nhs.uk/conditions/bowel-cancer-screening/' },
        { label: 'Bowel Cancer UK', url: 'https://www.bowelcanceruk.org.uk/' },
        { label: 'NICE CKS — Colorectal Cancer', url: 'https://cks.nice.org.uk/topics/colorectal-cancer/' },
      ],
    },
  ],
}

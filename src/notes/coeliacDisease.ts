import type { Note } from '../data/notes'

export const coeliacDisease: Note = {
  id: 'coeliac-disease',
  title: 'Coeliac Disease',
  subtitle: 'Diagnosis, dietary management, monitoring & complications',
  tags: ['gastroenterology', 'dermatology', 'autoimmune', 'nutrition'],

  body: 'coeliac disease gluten TTG tTG IgA EMA endomysial antibody biopsy OGD duodenal GFD gluten free diet wheat barley rye oats IDA iron deficiency anaemia osteoporosis DEXA dermatitis herpetiformis dapsone non-coeliac gluten sensitivity pneumococcal vaccination hyposplenism HLA DQ2 DQ8 malabsorption bloating CIBH fatigue neuropathy B12 folate calcium Vitamin D ferritin haematinics non-Hodgkin lymphoma Coeliac UK dietician',

  content: [

    // ── Overview ────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Coeliac disease affects approximately 1% of the population and is significantly underdiagnosed — many patients are labelled with IBS for years before coeliac is considered. It is an autoimmune condition in which gluten (found in wheat, rye, barley, and — due to contamination — oats) triggers T-cell-mediated inflammation of the small bowel mucosa, leading to villous atrophy, malabsorption, and systemic complications. Genetic susceptibility (HLA-DQ2 in ~90%, HLA-DQ8 in most of the remainder) and environmental factors are both required.',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Key rule',
      items: [
        'Never diagnose IBS without first checking IgA tTG — coeliac disease is a common and treatable mimic.',
        'Also consider FIT test, faecal calprotectin, and CA-125 before attributing symptoms to functional bowel disease.',
      ],
    },

    // ── Presentation ────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Presentation' },
    {
      type: 'para',
      text: 'The classical triad of diarrhoea, steatorrhoea, and weight loss is now rare at presentation. Most patients present with non-specific or extra-intestinal features:',
    },
    {
      type: 'table',
      headers: ['Category', 'Features'],
      rows: [
        ['GI symptoms',          'Bloating, change in bowel habit, indigestion, nausea, abdominal pain'],
        ['Deficiency states',    'Iron deficiency anaemia (often the only finding), B12/folate deficiency, calcium & Vitamin D deficiency'],
        ['Consequences',         'Fatigue, osteoporosis (often silent), peripheral neuropathy, mouth ulcers (aphthous)'],
        ['Skin',                 'Dermatitis herpetiformis — itchy blistering rash on extensor surfaces (pathognomonic)'],
        ['Reproductive',         'Delayed puberty, short stature in children, infertility, recurrent miscarriage'],
        ['Associated AI disease','Type 1 diabetes, autoimmune thyroid disease, Addison\'s disease, primary biliary cholangitis'],
        ['Children',             'Failure to thrive, growth faltering — classical presentation is actually more common in younger children'],
      ],
    },

    // ── Diagnosis ───────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Diagnosis & Testing' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Gluten challenge — essential before testing',
      items: [
        'Patient MUST be eating gluten before any serological test — at least 10g/day (approximately 4 slices of bread) for a minimum of 6 weeks.',
        'If already on a gluten-free diet, results will be falsely negative. Gluten challenge (reintroduction) for 6 weeks is required before testing.',
        'Do NOT start a GFD before diagnostic biopsy is confirmed — this will invalidate the histology.',
      ],
    },

    { type: 'heading', level: 3, text: 'First-line serology' },
    {
      type: 'para',
      text: 'Request IgA tTG (tissue transglutaminase) together with a total IgA level. IgA deficiency occurs in 1:500 of the general population (10× higher than average in coeliac disease) and will give a falsely negative tTG result.',
    },

    {
      type: 'table',
      headers: ['Result', 'Interpretation', 'Action'],
      rows: [
        [
          'Strong positive IgA tTG (≥10× ULN)',
          'High probability of coeliac disease',
          'Refer to gastroenterology for OGD + duodenal biopsy to confirm. Do NOT start GFD yet.',
        ],
        [
          'Weak/borderline positive IgA tTG',
          'Possible coeliac — needs further testing',
          'Check IgA EMA (endomysial antibody). If EMA positive, or if patient is a child → refer for biopsy.',
        ],
        [
          'IgA deficiency (total IgA low)',
          'Standard IgA tTG test is invalid',
          'Request IgG tTG or IgG EMA instead.',
        ],
        [
          'Negative IgA tTG (normal total IgA)',
          'Coeliac disease unlikely — but not excluded',
          'Low threshold to retest if high clinical suspicion. Consider referral if other AI diseases, strong FHx, or ongoing unexplained symptoms. Specialist may perform HLA typing (high negative predictive value).',
        ],
      ],
    },

    { type: 'heading', level: 3, text: 'Confirmatory biopsy (OGD)' },
    {
      type: 'para',
      text: 'Duodenal biopsy remains the gold standard. Histology shows villous atrophy, crypt hyperplasia, and increased intraepithelial lymphocytes (Marsh grading). Multiple biopsies from duodenum and duodenal bulb are taken.',
    },

    { type: 'heading', level: 3, text: 'Non-biopsy pathway (NICE 2020)' },
    {
      type: 'para',
      text: 'Selected adults with IgA tTG ≥10× ULN may be diagnosed without biopsy, in line with updated NICE and ESPGHAN guidance — provided specific criteria are met. This pathway is led by the gastroenterologist, not initiated in primary care.',
    },
    {
      type: 'image',
      src: '/images/Non-biospy-protocol.png',
      alt: 'Non-biopsy diagnostic protocol for coeliac disease',
      caption: 'NICE 2020 non-biopsy pathway — applies when IgA tTG ≥10× ULN is confirmed. Gastroenterology-led.',
    },

    // ── Dietary Management ──────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Dietary Management — Gluten-Free Diet (GFD)' },
    {
      type: 'para',
      text: 'A strict lifelong GFD is the only effective treatment. All patients should be referred to a dietitian with coeliac experience — adherence is complex and cross-contamination is a common cause of persistent symptoms.',
    },
    {
      type: 'table',
      headers: ['Category', 'Detail'],
      rows: [
        ['Must avoid',          'Wheat (including spelt, kamut, durum), barley, rye — and all products containing them (bread, pasta, cereals, beer, most sauces, ready meals)'],
        ['Oats',                'Oats do not contain gluten but carry high cross-contamination risk. Certified gluten-free oats are available and tolerated by most patients — but a small minority react to avenin in oats regardless'],
        ['Naturally GF foods',  'Rice, potato, corn/maize, quinoa, buckwheat, sorghum, teff, millet, soya, gram flour — all safe'],
        ['On prescription',     'Gluten-free bread and flour alternatives are available on NHS prescription (ACBS criteria)'],
        ['Hidden gluten',       'Communion wafers, medications (check excipients), soy sauce, malt vinegar, many processed foods — patients need to check all labels'],
        ['Useful resource',     'Coeliac UK (www.coeliac.org.uk) — provides a food checker app and extensive guidance. Recommend to all newly diagnosed patients.'],
      ],
    },

    { type: 'heading', level: 3, text: 'Foods at a glance' },
    {
      type: 'image',
      src: '/images/Coeliac-Cheat-Sheet.gif',
      alt: 'Coeliac disease food cheat sheet — GO, CAUTION, STOP',
      caption: 'Quick reference: green = safe, amber = check labels carefully, red = avoid.',
    },
    {
      type: 'image',
      src: '/images/Flowchar_580.png.jpeg',
      alt: 'Detailed coeliac foods allowed, to check, and to avoid table',
      caption: 'Detailed food category guide — Foods Allowed / Foods to Check / Foods to Avoid.',
    },

    // ── Beyond Diet ─────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Management Beyond Diet' },

    { type: 'heading', level: 3, text: 'Bone health' },
    {
      type: 'list',
      items: [
        'Check DEXA scan at diagnosis — villous atrophy causes calcium malabsorption and bone density loss is common even before diagnosis.',
        'Repeat DEXA 1 year after commencing GFD, particularly in patients over 55 or with additional risk factors.',
        'Calculate FRAX score and assess calcium intake. Supplement calcium and Vitamin D where dietary intake is insufficient.',
        'Reassess fracture risk annually — bone density typically improves significantly on a strict GFD.',
      ],
    },

    { type: 'heading', level: 3, text: 'Vaccinations — hyposplenism' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Splenic dysfunction — encapsulated organism risk',
      items: [
        'Coeliac disease causes functional hyposplenism, increasing the risk of infection with encapsulated bacteria (Streptococcus pneumoniae, Haemophilus influenzae, Neisseria meningitidis).',
        'Pneumococcal vaccination (PPV23): give at diagnosis, repeat every 5 years.',
        'Also ensure up to date with: Men B, Men ACWY, HiB/Men C — as per the Green Book.',
        'Annual influenza vaccine recommended.',
        'Document vaccination status clearly and create a recall system.',
      ],
    },

    { type: 'heading', level: 3, text: 'Nutritional supplementation' },
    {
      type: 'list',
      items: [
        'Check and correct iron, B12, folate, Vitamin D, and calcium at diagnosis — malabsorption is often longstanding.',
        'Most deficiencies resolve on a strict GFD alone; supplement where levels are significantly low.',
        'Recheck haematinics at the annual review to confirm recovery and GFD adherence.',
      ],
    },

    // ── Monitoring ──────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Monitoring' },
    {
      type: 'para',
      text: 'All patients with confirmed coeliac disease should have a structured annual review — typically shared between the GP and gastroenterology:',
    },
    {
      type: 'table',
      headers: ['Review element', 'Detail'],
      rows: [
        ['Symptoms',            'Ongoing GI symptoms, fatigue, bone pain, neurological symptoms'],
        ['Anthropometrics',     'Weight, BMI; height and growth centiles in children'],
        ['Dietary adherence',   'Dietitian review — assess GFD adherence and check for inadvertent gluten exposure'],
        ['Serology',            'IgA tTG — should normalise within 12 months on a strict GFD; persistently elevated suggests dietary non-adherence or refractory coeliac disease'],
        ['Bloods',              'FBC, LFTs, bone profile, Vitamin D, haematinics (iron/ferritin, B12, folate)'],
        ['AI screening',        'TFTs, fasting glucose — screen for associated autoimmune disease'],
        ['Bone health',         'DEXA at 1 year; ongoing FRAX assessment and supplementation review'],
      ],
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer back to gastroenterology if',
      items: [
        'IgA tTG remains elevated after 12 months of confirmed strict GFD.',
        'Persistent or worsening symptoms despite adherence — consider refractory coeliac disease.',
        'Unexplained weight loss, lymphadenopathy, or abdominal pain — coeliac disease carries an increased risk of Non-Hodgkin lymphoma, enteropathy-associated T-cell lymphoma (EATL), colorectal cancer, and small bowel adenocarcinoma.',
        'New nutritional deficiencies developing on an established GFD.',
      ],
    },

    // ── Dermatitis Herpetiformis ─────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Dermatitis Herpetiformis (DH)' },
    {
      type: 'para',
      text: 'Dermatitis herpetiformis is the skin manifestation of coeliac disease — caused by IgA deposition in the dermal papillae. It is rare but pathognomonic: a positive skin biopsy confirms coeliac disease without the need for a duodenal biopsy.',
    },
    {
      type: 'table',
      headers: ['Feature', 'Detail'],
      rows: [
        ['Appearance',       'Intensely itchy, symmetrical, grouped vesicles and papules — often excoriated by the time of presentation'],
        ['Distribution',     'Extensor surfaces — elbows, knees, buttocks, shoulders, scalp'],
        ['Differential Dx',  'Papular eczema, psoriasis, scabies, pemphigus vulgaris, linear IgA disease'],
        ['Investigation',    'IgA tTG (often positive) + refer for skin biopsy with direct immunofluorescence (perilesional skin — not active blister)'],
        ['Treatment',        'Lifelong GFD (as for coeliac disease) + dapsone initiated by dermatology for symptom control; dapsone dose can usually be reduced as GFD takes effect over months'],
      ],
    },
    {
      type: 'image',
      src: '/images/dermatitis-herpetiformis-0001.jpg',
      alt: 'Dermatitis herpetiformis — grouped vesicles on extensor surface',
      caption: 'Dermatitis herpetiformis — intensely pruritic grouped vesicles on an extensor surface. Tap to enlarge.',
    },

    // ── Non-Coeliac Gluten Sensitivity ──────────────────────────────────────
    { type: 'heading', level: 2, text: 'Non-Coeliac Gluten Sensitivity (NCGS)' },
    {
      type: 'para',
      text: 'A distinct condition in which patients experience GI and systemic symptoms attributable to gluten, but have negative coeliac serology and normal duodenal histology on biopsy. The underlying mechanism is poorly understood — it is not IgE-mediated and does not cause villous atrophy or the long-term complications of coeliac disease.',
    },
    {
      type: 'list',
      items: [
        'Diagnosis is one of exclusion: coeliac disease must first be excluded with serology and biopsy (while still eating gluten), and wheat allergy excluded with IgE testing.',
        'Consider wheat allergy separately — this is an IgE-mediated reaction to wheat proteins (including "baker\'s rhinitis" — occupational rhinitis in bakers), presenting with urticaria, rhinitis, or asthma triggered by wheat rather than general gluten intolerance.',
        'Management of NCGS is a GFD by patient preference — there is no mandatory restriction on oats, no malabsorption risk, no bone surveillance requirement, and no vaccination requirement.',
        'Patients with NCGS should be advised that long-term adherence to GFD should be guided by symptom response, not fear of complications.',
      ],
    },
  ],
}

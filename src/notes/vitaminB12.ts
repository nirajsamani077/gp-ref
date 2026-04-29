import type { Note } from '../data/notes'

export const vitaminB12: Note = {
  id: 'vitamin-b12',
  title: 'Vitamin B12 Deficiency',
  subtitle: 'Causes, investigation, treatment pathways, and raised B12 — including pernicious anaemia, dietary deficiency and SACCD',
  tags: ['haematology'],

  body: 'vitamin B12 deficiency cobalamin hydroxocobalamin cyanocobalamin pernicious anaemia intrinsic factor antibody IFAb GPA gastric parietal cell antibody SACCD subacute combined degeneration cord megaloblastic anaemia macrocytosis folate deficiency metformin PPI malabsorption coeliac gastric surgery vegan vegetarian nitrous oxide B12 loading injection maintenance oral cyanocobalamin methylmalonic acid MMA homocysteine glossitis neuropathy',

  content: [

    // ── KEY RULE ──────────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Always check folate at the same time — and replace B12 FIRST',
      items: [
        'Always request B12 and folate together — deficiency of both is common',
        'If BOTH are deficient: replace B12 first before giving folate — giving folate alone to a B12-deficient patient risks precipitating or worsening subacute combined degeneration of the cord (SACCD)',
        'SACCD = irreversible spinal cord damage — once established, may only partially reverse with treatment',
        'Any neurological symptoms in a B12-deficient patient = urgent — do not delay treatment pending investigations',
      ],
    },

    // ── SYMPTOMS ──────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Clinical Features' },

    {
      type: 'table',
      headers: ['System', 'Features', 'Urgency'],
      rows: [
        ['Neurological — URGENT', 'Sensorimotor peripheral neuropathy (glove-and-stocking), SACCD (dorsal column loss: vibration/proprioception loss, ataxic gait), autonomic neuropathy, confusion/memory impairment, optic neuropathy', '🔴 Urgent — start treatment immediately, seek haematology advice for alternate-day loading'],
        ['Haematological', 'Macrocytic megaloblastic anaemia (high MCV), pancytopenia in severe cases, hypersegmented neutrophils on blood film', 'Investigate + treat'],
        ['GI / Oral', 'Glossitis (smooth red sore tongue), loss of taste and smell, mouth ulcers', 'Treat B12'],
        ['Other', 'Subfertility, fatigue, neuropsychiatric symptoms (depression, psychosis)', 'Consider B12 as contributory cause'],
        ['Drug association', 'Metformin (1 in 10 — check B12 if on metformin and symptomatic), PPIs (reduces gastric acid needed for B12 absorption), nitrous oxide (inactivates B12)', 'Check B12 if on these drugs and symptomatic'],
      ],
      caption: 'B12 deficiency may present without anaemia — neurological features can precede haematological changes, especially in patients with a concurrent high folate intake masking the FBC changes.',
    },

    // ── CAUSES ────────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Causes' },

    {
      type: 'table',
      headers: ['Cause', 'Notes'],
      rows: [
        ['Pernicious anaemia (autoimmune)', 'Autoimmune destruction of gastric parietal cells → no intrinsic factor → B12 cannot be absorbed. IgG anti-intrinsic factor antibody (IFAb) is highly specific but only 50% sensitive. Gastric parietal cell antibody (GPA) is more sensitive but less specific. Requires lifelong IM treatment.'],
        ['Dietary deficiency', 'Vegans (meat/fish/dairy-free) and some strict vegetarians; fortified foods (cereals, nutritional yeast) help but may be insufficient. Diet-related deficiency can often be managed with oral supplementation.'],
        ['Malabsorption', 'Coeliac disease (test tTG IgA), Crohn\'s disease, previous gastric or ileal surgery (terminal ileum is where B12 is absorbed), achlorhydria'],
        ['Drugs', 'Metformin (~10% of long-term users — screens those with symptoms); PPIs; colchicine; nitrous oxide (inactivates B12 — can cause acute SACCD in pre-existing deficiency)'],
        ['Other', 'Small intestinal bacterial overgrowth (SIBO), HIV, pancreatic exocrine insufficiency'],
      ],
      caption: 'Folate and copper deficiency post-GI surgery can mimic B12 deficiency — always check all three if GI surgery in the history.',
    },

    // ── ALGORITHMS ────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Investigation Algorithms' },

    {
      type: 'image',
      src: '/images/b12-no-neuro-algorithm.png',
      alt: 'Algorithm 2: Investigation of low B12 without neurological symptoms — flowchart showing pathways for B12 <150, 150-211 and actions for IFAb positive/negative',
      caption: 'Algorithm for low B12 without neurological symptoms. B12 <150: check GPA/IFAb and treat. B12 150–211: repeat in 1–2 months; if persistently low, check IFAb. Key actions depend on antibody results and whether deficiency is dietary.',
    },

    {
      type: 'image',
      src: '/images/b12-algorithm-v2.png',
      alt: 'Algorithm for management of serum vitamin B12 with strong clinical suspicion — including neurological features, pancytopenia and megaloblastic anaemia pathways',
      caption: 'Algorithm for strong clinical suspicion of B12 deficiency (neurological features, macrocytic anaemia, pancytopenia). If neurological symptoms present — start treatment before awaiting all results. Use MMA or homocysteine as second-line tests if result is borderline.',
    },

    // ── 3 SCENARIOS ───────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Three Clinical Scenarios' },

    {
      type: 'table',
      headers: ['Scenario', 'B12 Level', 'Action'],
      rows: [
        [
          '1. Low B12, NO neurological symptoms',
          '<150 ng/L',
          'Check GPA (lab will add IFAb if positive). Start hydroxocobalamin IM loading (1 mg × 3/week × 2 weeks). Maintenance based on cause — see below.',
        ],
        [
          '1. Low B12, NO neurological symptoms',
          '150–200 ng/L (borderline)',
          'Repeat in 1–2 months (may be transient/lab variation). If still 150–200: check IFAb. If IFAb positive → treat as pernicious anaemia. If IFAb negative → oral cyanocobalamin 50–150 mcg/day and recheck in 3 months.',
        ],
        [
          '2. Low B12 + neurological symptoms',
          'Any low level',
          '🔴 URGENT. Check IFAb. Start IM loading immediately — do not wait for results. Neurological involvement: alternate-day hydroxocobalamin loading until no further improvement (may exceed 2 weeks). Maintenance IM every 2 months (not 3). Seek haematology advice.',
        ],
        [
          '3. Normal B12 + symptoms (clinical suspicion)',
          '150–250 ng/L (low-normal) with symptoms',
          'Check IFAb and second-line metabolic tests (methylmalonic acid MMA or homocysteine — discuss with lab). Start a trial of B12 loading. If clinical response AND/OR tests positive → continue IM maintenance. If no response and tests negative → unlikely to be B12 deficiency.',
        ],
      ],
      caption: 'These three scenarios cover the vast majority of primary care presentations. When in doubt with neurological symptoms — treat first, investigate in parallel.',
    },

    // ── TREATMENT ─────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Treatment' },

    {
      type: 'table',
      headers: ['Phase / Situation', 'Treatment', 'Notes'],
      rows: [
        ['Loading — standard (no neuro symptoms)', 'Hydroxocobalamin 1 mg IM — 3 injections/week for 2 weeks (6 injections total)', 'Prescribe: Hydroxocobalamin 1 mg/1 ml solution for injection — 6 ampoules'],
        ['Loading — with neurological involvement', 'Hydroxocobalamin 1 mg IM every other day until no further neurological improvement — this may be considerably more than 2 weeks', '🔴 Seek haematology advice. Arrange urgent follow-up to monitor neurological response.'],
        ['Maintenance — pernicious anaemia / not dietary', 'Hydroxocobalamin 1 mg IM every 3 months for life', 'This is lifelong — do not stop even if asymptomatic. If neurological features were present, give every 2 months for life.'],
        ['Maintenance — dietary deficiency (vegans, dietary)', 'Oral cyanocobalamin 50–150 mcg daily (OTC, patient-purchased), OR IM hydroxocobalamin 1 mg every 6 months', 'In strict vegans, oral replacement may need to be lifelong even after correction. Dietary counselling re: fortified foods.'],
        ['2nd line — if IM not tolerated', 'Orobalin (cyanocobalamin 1 mg tablets) — 2 tablets twice daily between meals until remission of symptoms; then 1 mg daily ongoing', 'High-dose oral can work even without intrinsic factor via passive diffusion. Use if patient declines injections or has needle phobia.'],
        ['Borderline, dietary suspected, asymptomatic', 'Oral cyanocobalamin 50–150 mcg daily (OTC) — advise patient to purchase', 'Reassess in 3 months. If level corrects and dietary cause confirmed, oral ongoing is reasonable.'],
      ],
      caption: 'Prescribe hydroxocobalamin (not cyanocobalamin) for IM injections — it is longer-acting. Second-line oral high-dose works by passive diffusion (~1% absorbed without intrinsic factor, so 1 mg oral gives ~10 mcg absorbed).',
    },

    // ── FOLATE ────────────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Treating Concurrent Folate Deficiency',
      items: [
        'Replace B12 first — then start folic acid once B12 treatment is established (usually at same time as 2nd or 3rd IM injection)',
        'Folic acid 5 mg daily for 4 months (if diet-related) — then review need for ongoing supplementation',
        'In pregnancy: standard folic acid 400 mcg/day unless high risk (previous NTD, anti-epileptic drugs, BMI >30, diabetes) → 5 mg/day from pre-conception to 12 weeks',
        'Isolated folate deficiency: dietary advice + folic acid supplementation; investigate underlying cause (coeliac, alcohol, drugs)',
      ],
    },

    // ── MONITORING ───────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: 'Monitoring — Do NOT routinely recheck B12 levels once on treatment',
      items: [
        'B12 levels are not useful once on replacement — levels will be supraphysiological after IM injection; do not recheck',
        'Macrocytic anaemia (raised MCV): should normalise within 3 months — check FBC at 3 months',
        'Reticulocyte response: occurs within 1 week of starting loading — if uncertain about response, check reticulocytes after first week',
        'Neurological symptoms: may take up to 6 months to improve; do not expect immediate resolution — ensure regular follow-up',
        'If suboptimal haematological response at 3 months — consider concurrent iron deficiency anaemia (common, may become apparent as B12 corrects and erythropoiesis picks up)',
        'Pernicious anaemia: consider gastroscopy surveillance (slightly increased gastric cancer risk) per local guidelines; refer gastroenterology if indicated',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Side Effects of B12 Injections',
      items: [
        'Usually well tolerated',
        'Can cause: itching at injection site, flushing, rash, nausea, dizziness — usually transient',
        'Rarely: anaphylaxis — have resuscitation equipment available for first dose (in practice, first dose often given in surgery)',
        'Acne-like eruption reported with prolonged use in some patients',
      ],
    },

    // ── RAISED B12 ────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Raised Vitamin B12' },

    {
      type: 'image',
      src: '/images/raised-b12.png',
      alt: 'High vitamin B12 levels guidance — often non-pathological; most common cause is liver disease; exclude haematological malignancy with FBC',
      caption: 'Raised B12 is most commonly a non-pathological finding. Liver disease is the most common pathological cause. A normal FBC makes haematological malignancy unlikely.',
    },

    {
      type: 'table',
      headers: ['Cause', 'Notes'],
      rows: [
        ['Supplements / replacement therapy', 'Most common — check if patient is taking B12 supplements, multivitamins or has recently had injections'],
        ['Liver disease', 'Most common pathological cause in the absence of supplementation — consider ALD, NAFLD/MASLD, hepatitis, cirrhosis. Check LFTs, GGT, consider USS liver.'],
        ['Haematological malignancy', 'Myeloproliferative disorders (polycythaemia vera, CML, myelofibrosis), haematological cancers — excluded by a normal FBC'],
        ['CKD', 'Reduced renal clearance of B12-binding proteins'],
        ['Nitrous oxide misuse', 'Paradoxically can coexist with functional B12 deficiency — B12 inactivated; serum level may be high but cells cannot use it'],
      ],
      caption: 'In the absence of supplementation: check FBC (exclude haematological cause), LFTs (exclude liver disease). Haematology referral is not routinely required unless FBC is abnormal or malignancy is suspected.',
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Anaemia B12/Folate', url: 'https://cks.nice.org.uk/topics/anaemia-b12-folate-deficiency/' },
        { label: 'BNF — Hydroxocobalamin', url: 'https://bnf.nice.org.uk/drugs/hydroxocobalamin/' },
        { label: 'Pernicious Anaemia Society', url: 'https://www.pernicious-anaemia-society.org/' },
        { label: 'NICE CKS — Folate Deficiency', url: 'https://cks.nice.org.uk/topics/anaemia-b12-folate-deficiency/' },
      ],
    },

  ],
}

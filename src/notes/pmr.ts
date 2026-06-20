import type { Note } from '../data/notes'

export const pmr: Note = {
  id: 'pmr',
  title: 'Polymyalgia Rheumatica (PMR)',
  subtitle: 'Girdle stiffness in the over-50s, steroid response test, tapering regimen and GCA overlap',
  tags: ['rheumatology'],

  body: `polymyalgia rheumatica PMR girdle pain shoulder hip stiffness morning stiffness elderly prednisolone steroid taper inflammatory markers ESR CRP plasma viscosity giant cell arteritis GCA temporal arteritis steroid sparing methotrexate azathioprine bone protection bisphosphonate PPI relapse vasculitis CK myeloma malignancy`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Polymyalgia Rheumatica', url: 'https://cks.nice.org.uk/topics/polymyalgia-rheumatica/' },
        { label: 'BSR — PMR Guideline', url: 'https://www.rheumatology.org.uk/practice-quality/guidelines' },
        { label: 'PMRGCAuk — Patient Support', url: 'https://pmrgca.org.uk/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'Inflammatory condition (related to the vasculitis spectrum) causing bilateral shoulder and pelvic girdle pain and stiffness in patients >50 (almost never under 50 — reconsider diagnosis)',
        'Strongly associated with giant cell arteritis (GCA / temporal arteritis): ~15–20% of PMR patients develop GCA, and ~40–50% of GCA patients have PMR features — always ask about GCA symptoms at every review',
        'Peak age 70–80; more common in women and in northern European populations',
        'Consider an underlying malignancy or alternative inflammatory diagnosis if atypical features, poor steroid response, or red flags',
      ],
    },

    { type: 'heading', level: 2, text: 'Core Clinical Features' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Typical PMR Presentation',
      items: [
        'Bilateral shoulder pain and/or pelvic girdle pain — usually symmetrical',
        'Morning stiffness lasting >45 minutes (often hours)',
        'Difficulty rising from a chair, turning in bed, raising arms to wash/dress hair',
        'Onset typically subacute (over days to 2 weeks)',
        'Systemic features may occur: fatigue, low-grade fever, weight loss, low mood, anorexia',
        'Age >50 (usually >60), symptoms present for ≥2 weeks, raised inflammatory markers',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'GCA Symptoms — Screen at EVERY Contact (Sight-Threatening)',
      items: [
        'New temporal/unilateral headache, scalp tenderness (combing hair painful)',
        'Jaw claudication (pain in jaw on chewing — highly specific)',
        'Visual symptoms: transient or permanent visual loss, diplopia, amaurosis fugax — EMERGENCY',
        'If GCA suspected: start prednisolone 40–60 mg immediately (do NOT wait for tests); same-day rheumatology/ophthalmology referral; visual loss in GCA is often irreversible',
        'See dedicated GCA / temporal arteritis note for full pathway',
      ],
    },

    { type: 'heading', level: 2, text: 'Differential Diagnosis' },

    {
      type: 'table',
      headers: ['Condition', 'Distinguishing Features'],
      rows: [
        ['Rheumatoid arthritis', 'Small joint synovitis (MCPs, wrists), positive RF/anti-CCP, joint swelling rather than girdle stiffness'],
        ['Inflammatory myopathy (polymyositis)', 'Proximal muscle WEAKNESS (PMR is pain/stiffness, not true weakness), markedly raised CK'],
        ['Hypothyroidism', 'Proximal aches, raised CK, fatigue — check TFTs in everyone'],
        ['Osteoarthritis (cervical/shoulder)', 'Mechanical pain, normal inflammatory markers, no systemic features'],
        ['Statin-induced myalgia', 'Temporal relationship to statin, check CK, dechallenge'],
        ['Malignancy / myeloma', 'Weight loss, bony pain, raised calcium, paraproteinaemia — screen if atypical'],
        ['Fibromyalgia', 'Younger, widespread pain, normal inflammatory markers, no true morning stiffness, poor steroid response'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations Before Starting Steroids' },

    {
      type: 'list',
      items: [
        'Inflammatory markers: ESR, CRP and/or plasma viscosity — usually raised (ESR often >40); note ~10–20% of PMR has normal ESR/CRP so a normal result does not exclude it if the picture is classic',
        'FBC (anaemia of chronic disease, exclude other causes), U&E, LFTs, bone profile (calcium), glucose/HbA1c (baseline before steroids)',
        'CK — exclude myositis and statin myopathy',
        'TFTs — exclude hypothyroidism',
        'Protein electrophoresis + serum free light chains (myeloma screen), urine Bence-Jones if indicated',
        'Consider RF/anti-CCP if any small-joint involvement; ANA if connective tissue disease suspected',
        'Consider urine dip, CXR if malignancy/infection suspected',
        'Vitamin D, and FRAX/DEXA assessment for bone protection (steroids imminent)',
      ],
    },

    { type: 'heading', level: 2, text: 'The Steroid Response Test & Treatment Regimen' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Rapid Response Confirms the Diagnosis',
      items: [
        'A dramatic, near-complete symptom response within 72 hours (often within days, sometimes overnight) is characteristic of PMR',
        'If the response is poor or incomplete → question the diagnosis and consider referral / alternative cause',
        'Always take baseline bloods before the first dose',
      ],
    },

    {
      type: 'table',
      headers: ['Phase', 'Prednisolone Dose', 'Notes'],
      rows: [
        ['Induction', '15 mg OD for 3 weeks', 'Some regimens use 15–20 mg; expect rapid symptomatic response'],
        ['Then', '12.5 mg OD for 3 weeks', 'Confirm sustained response and normalising inflammatory markers'],
        ['Then', '10 mg OD for 4–6 weeks', 'Slower from here to reduce relapse'],
        ['Maintenance taper', 'Reduce by 1 mg every 4–8 weeks until stopped', 'Typical total treatment duration 1–2 years; some need longer'],
      ],
      caption: 'Tapering must be individualised and guided by symptoms AND inflammatory markers — do not reduce based on bloods alone if symptomatic, and do not chase a mildly raised ESR if asymptomatic. NICE/BSR doses vary (15–20 mg induction); use local guidance.',
    },

    { type: 'heading', level: 2, text: 'Monitoring & Steroid Safety' },

    {
      type: 'list',
      items: [
        'Review schedule: typically at 1 week (response), then weeks 3, 6, then every 3 months in the first year, and every 6 months in the second year; review at any relapse',
        'Check inflammatory markers and HbA1c roughly every 3 months and at any suspected relapse',
        'Bone protection: most patients need it — assess FRAX; corticosteroid-induced bone loss is rapid and uses different intervention thresholds. Co-prescribe calcium/vitamin D and a bisphosphonate (e.g. alendronate) in most; arrange DEXA per local protocol',
        'Gastroprotection: PPI cover while on steroids, especially if also on NSAIDs/antiplatelets',
        'Steroid sick-day rules and a steroid emergency card; warn against abrupt cessation (adrenal suppression)',
        'Monitor BP, weight, glucose, mood, and cataract/glaucoma risk on long-term steroids',
        'Annual flu vaccine; pneumococcal; avoid live vaccines if on ≥20 mg/day or long-term immunosuppression',
      ],
    },

    { type: 'heading', level: 2, text: 'Relapse & Referral' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'When to Refer to Rheumatology',
      items: [
        'Diagnostic uncertainty, age <60, or atypical features (prominent systemic upset, peripheral synovitis, normal inflammatory markers with poor steroid response)',
        'Incomplete or no response to steroids within 1 week (questions the diagnosis)',
        'Frequent relapses or inability to reduce prednisolone below 10 mg (consider steroid-sparing agents — methotrexate, azathioprine)',
        'Contraindications to or serious adverse effects from steroids',
        'Any features of GCA — urgent same-day referral',
        'Relapse management: treat by returning to the previous dose that controlled symptoms; confirm with inflammatory markers; re-taper more slowly',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'gca', label: 'Giant Cell Arteritis (GCA)', subtitle: 'Temporal arteritis — sight-threatening; high-dose steroids, urgent referral' },
        { id: 'inflammatory-arthritis', label: 'Inflammatory Arthritis', subtitle: 'RA and other inflammatory arthropathies — key differential' },
        { id: 'osteoporosis', label: 'Osteoporosis', subtitle: 'Steroid-induced bone loss — FRAX, bisphosphonate protocol' },
        { id: 'hypothyroidism', label: 'Hypothyroidism', subtitle: 'Proximal aches and raised CK — always exclude' },
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Myeloma screen in atypical or steroid-resistant cases' },
      ],
    },

  ],
}

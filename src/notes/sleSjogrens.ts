import type { Note } from '../data/notes'

export const sleSjogrens: Note = {
  id: 'sle-sjogrens',
  title: 'SLE & Sjögren\'s Syndrome',
  subtitle: 'Multisystem autoimmune disease, autoantibody work-up, lupus nephritis and sicca symptoms',
  tags: ['rheumatology'],

  body: `systemic lupus erythematosus SLE Sjogren's sicca dry eyes dry mouth malar butterfly rash photosensitivity lupus nephritis ANA anti-dsDNA ENA Ro La complement C3 C4 antiphospholipid hydroxychloroquine Raynaud's serositis pancytopenia B-cell lymphoma cardiovascular risk`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — SLE', url: 'https://cks.nice.org.uk/topics/lupus-systemic/' },
        { label: 'NICE CKS — Sjögren\'s Syndrome', url: 'https://cks.nice.org.uk/topics/sjogrens-syndrome/' },
        { label: 'BSR — Guidelines', url: 'https://www.rheumatology.org.uk/practice-quality/guidelines' },
      ],
    },

    { type: 'heading', level: 2, text: 'Systemic Lupus Erythematosus (SLE)' },

    {
      type: 'list',
      items: [
        'A complex multisystem connective-tissue autoimmune disease; typically young women, more common and more severe in Black, South Asian and Chinese populations; relapsing–remitting',
        'Fatigue is very common and often dominant; cardiovascular risk is markedly increased (accelerated atherosclerosis) — manage CV risk actively',
      ],
    },

    {
      type: 'table',
      headers: ['System', 'Features (approx. frequency)'],
      rows: [
        ['Musculoskeletal', 'Inflammatory arthritis (~50%) — usually non-erosive; arthralgia'],
        ['Skin', 'Malar (butterfly) photosensitive rash (~30%), discoid lesions, non-scarring alopecia, oral ulcers, Raynaud\'s'],
        ['Renal', 'Lupus nephritis — may be present at diagnosis (~20%); check urine for blood/protein and ACR — the key organ to protect'],
        ['Haematological', 'Cytopenias (leucopenia, lymphopenia, thrombocytopenia, haemolytic anaemia)'],
        ['Serositis', 'Pleuritis, pericarditis'],
        ['Neuropsychiatric', 'Headache, seizures, psychosis, cognitive dysfunction'],
        ['Other', 'Antiphospholipid syndrome overlap (thrombosis, recurrent miscarriage)'],
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'If You Suspect SLE — Investigations Before/With Referral',
      items: [
        'Bloods: FBC (cytopenias), ESR (typically raised) with a characteristically NORMAL/low CRP (a high CRP suggests infection or serositis), U&E, LFTs',
        'Immunology: ANA (sensitive screen — if negative, SLE is unlikely), then anti-dsDNA (specific, tracks activity) and ENA (anti-Ro/La, Sm, RNP); complement C3/C4 (low in active disease); antiphospholipid antibodies (anticardiolipin, lupus anticoagulant, anti-β2-GP1)',
        'Urine: dipstick for blood/protein and urine ACR — screen for lupus nephritis',
        'Refer to rheumatology; SLE in pregnancy/planning needs specialist input (anti-Ro and congenital heart block; hydroxychloroquine is continued)',
      ],
    },

    { type: 'heading', level: 2, text: 'SLE — Management Principles (specialist-led)' },

    {
      type: 'list',
      items: [
        'Hydroxychloroquine is the backbone for most patients (reduces flares; baseline and annual retinal monitoring after 5 years); corticosteroids for flares; steroid-sparing immunosuppression (azathioprine, mycophenolate, methotrexate) and biologics (belimumab, rituximab) for organ involvement',
        'Sun protection (photosensitivity), smoking cessation, and aggressive cardiovascular risk management',
        'Manage lupus nephritis with nephrology; monitor BP, renal function and urine protein',
        'Watch for, and have a low threshold to treat, infection (immunosuppressed); vaccinate (avoid live vaccines on significant immunosuppression)',
      ],
    },

    { type: 'heading', level: 2, text: 'Sjögren\'s Syndrome' },

    {
      type: 'list',
      items: [
        'Autoimmune exocrine gland destruction → sicca symptoms: dry eyes (keratoconjunctivitis sicca) and dry mouth (xerostomia); can also cause vaginal dryness, fatigue and arthralgia',
        'Primary, or secondary to RA/SLE/systemic sclerosis — always screen for an associated inflammatory arthritis/connective tissue disease',
        'Investigations: anti-Ro (SSA) and anti-La (SSB) antibodies, ANA, RF, ESR; Schirmer\'s test (tear production); refer for confirmation (salivary gland assessment/biopsy)',
        'Important: significantly increased risk of B-cell non-Hodgkin lymphoma — be alert to persistent unilateral parotid swelling or lymphadenopathy',
        'Management is symptomatic: artificial tears and ocular lubricants, saliva substitutes/stimulants (pilocarpine — a muscarinic agonist), meticulous dental care (high caries risk); no disease-modifying drug reliably alters the course (hydroxychloroquine for arthralgia/fatigue)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'inflammatory-arthritis', label: 'Inflammatory Arthritis', subtitle: 'RA and connective tissue disease overlap' },
        { id: 'raynauds', label: "Raynaud's Phenomenon", subtitle: 'Common in SLE/connective tissue disease' },
        { id: 'antiphospholipid-syndrome', label: 'Antiphospholipid Syndrome', subtitle: 'Frequent SLE overlap — thrombosis and pregnancy loss' },
        { id: 'dmards', label: 'DMARDs & Biologics', subtitle: 'Hydroxychloroquine and immunosuppressant monitoring' },
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'Lupus nephritis — protect renal function' },
        { id: 'systemic-sclerosis', label: 'Systemic Sclerosis (Scleroderma)', subtitle: 'Other connective tissue disease; overlap syndromes' },
        { id: 'drug-induced-lupus', label: 'Drug-Induced Lupus', subtitle: 'A reversible SLE-like syndrome — the drug causes' },
      ],
    },

  ],
}

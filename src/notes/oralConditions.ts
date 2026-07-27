import type { Note } from '../data/notes'

export const oralConditions: Note = {
  id: 'oral-conditions',
  title: 'Oral & Tongue Conditions',
  subtitle: 'Oral candidiasis, gingivitis, tongue problems, gingival hyperplasia — and the oral-cancer red flags',
  tags: ['ent'],

  body: `oral candidiasis thrush nystatin miconazole angular cheilitis geographic tongue black hairy tongue glossitis gingivitis periodontitis gingival hyperplasia phenytoin ciclosporin nifedipine leukoplakia erythroplakia oral cancer 2WW dry mouth`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A range of common oral and tongue complaints present to the GP — most are benign and reassurance or simple treatment suffices, but the mouth is also a site where systemic disease and malignancy declare themselves. The unifying safety message is to examine the oral cavity properly and refer any persistent (>3 weeks) unexplained ulcer, lump, or red/white patch on the 2WW head-and-neck pathway.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Oral Cancer Red Flags — 2WW',
      items: [
        'Unexplained oral ulceration or a lump/swelling lasting >3 weeks, or a persistent red (erythroplakia) or red-and-white (speckled) patch → 2WW head & neck referral. White patches (leukoplakia) that persist also need referral/biopsy.',
        'Higher risk with smoking, alcohol, betel/paan, and HPV; also refer persistent unexplained neck lump, hoarseness >3 weeks, or a non-healing tooth-socket.',
        'Dentists are a key part of oral-cancer detection — encourage regular dental review.',
      ],
    },

    { type: 'heading', level: 2, text: 'Oral Candidiasis (Thrush)' },
    {
      type: 'list',
      items: [
        'White, curd-like plaques that rub off leaving an erythematous base (pseudomembranous), or erythematous/atrophic forms; angular cheilitis at the mouth corners.',
        'Predisposing factors — ALWAYS look for one: inhaled corticosteroids (rinse mouth after use / use a spacer), dentures (denture hygiene), diabetes, antibiotics, immunosuppression, iron/B12/folate deficiency, dry mouth, and infancy/old age. Unexplained/recurrent oral candidiasis in an adult → consider HIV and diabetes.',
        'Treatment: topical antifungal — miconazole oral gel (note the warfarin interaction) or nystatin suspension for 7–14 days; oral fluconazole for extensive/immunocompromised cases; treat angular cheilitis with topical miconazole ± hydrocortisone.',
      ],
    },

    { type: 'heading', level: 2, text: 'Gums & Gingival Hyperplasia' },
    {
      type: 'table',
      headers: ['Condition', 'Notes'],
      rows: [
        ['Gingivitis / periodontitis', 'Red, swollen, bleeding gums from plaque; reversible with oral hygiene and dental scaling; periodontitis (bone/attachment loss) needs dental care — associated with diabetes and cardiovascular disease'],
        ['Drug-induced gingival hyperplasia', 'Gum overgrowth from PHENYTOIN, CICLOSPORIN, and calcium-channel blockers (nifedipine/amlodipine) — improve oral hygiene, review the drug with the prescriber'],
        ['Acute necrotising ulcerative gingivitis', 'Painful, bleeding, ulcerated interdental gums with halitosis (smokers, stress, immunosuppression) — metronidazole + dental referral'],
      ],
    },

    { type: 'heading', level: 2, text: 'Tongue Conditions' },
    {
      type: 'list',
      items: [
        'Geographic tongue (benign migratory glossitis): map-like red patches with white borders that change over time — benign, reassure; avoid irritant/spicy foods if sore.',
        'Black hairy tongue: elongated, pigmented filiform papillae from poor hygiene, smoking, or drugs — reassure, tongue-brushing/scraping, and address triggers.',
        'Glossitis (smooth, red, sore tongue): consider iron, B12 or folate deficiency (check haematinics), and candidiasis.',
        'Median rhomboid glossitis: a smooth central rhomboid area — a form of candidiasis; treat and look for predisposing factors.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Candida (Oral)', url: 'https://cks.nice.org.uk/topics/candida-oral/' },
        { label: 'NICE NG12 — Suspected Cancer (Oral)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'Oral Health Foundation', url: 'https://www.dentalhealth.org/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'aphthous-ulcers', label: 'Mouth Ulcers (Aphthous)', subtitle: 'Recurrent ulcers and the systemic differential' },
        { id: 'neck-lumps', label: 'Neck Lumps', subtitle: 'Head & neck cancer pathway overlap' },
        { id: 'lichen-sclerosus', label: 'Lichen Sclerosus & Lichen Planus', subtitle: 'Oral lichen planus — reticular white lesions' },
        { id: 'macrocytic-anaemia', label: 'Macrocytic Anaemia', subtitle: 'B12/folate deficiency causing glossitis' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Head & neck cancer criteria' },
      ],
    },

  ],
}

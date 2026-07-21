import type { Note } from '../data/notes'

export const pruritus: Note = {
  id: 'pruritus',
  title: 'Generalised Pruritus (Itch Without Rash)',
  subtitle: 'When the itch has no primary rash — the systemic screen and symptomatic relief',
  tags: ['dermatology'],

  body: `pruritus itch generalised itching no rash systemic causes iron deficiency liver cholestasis renal uraemic thyroid polycythaemia lymphoma malignancy drug induced emollients antihistamine excoriation nocturnal itch`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Itch (Generalised)', url: 'https://cks.nice.org.uk/topics/itch-widespread/' },
        { label: 'BAD — Itch/Pruritus', url: 'https://www.bad.org.uk/' },
        { label: 'NICE NG12 — Suspected Cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'The Key Split — Is There a Primary Rash?',
      items: [
        'Itch WITH a primary rash → a dermatosis (eczema, urticaria, scabies, lichen planus, bullous disease) — diagnose and treat the skin condition',
        'Itch WITHOUT a primary rash (only secondary excoriations) → screen for a systemic cause',
        'Scabies is the great mimic — always consider it (itchy household contacts, burrows in web spaces, worse at night)',
      ],
    },

    { type: 'heading', level: 2, text: 'Systemic Causes to Screen For' },

    {
      type: 'table',
      headers: ['Category', 'Examples & clues'],
      rows: [
        ['Haematological', 'Iron deficiency, polycythaemia (itch after a hot bath), lymphoma (Hodgkin\'s — with night sweats/weight loss)'],
        ['Hepatic', 'Cholestasis (PBC, obstruction) — itch, pale stools, dark urine, deranged LFTs'],
        ['Renal', 'Chronic kidney disease (uraemic pruritus)'],
        ['Endocrine', 'Thyroid disease (hyper- and hypo-), diabetes'],
        ['Other', 'Drug-induced (opioids, statins, ACE-i), pregnancy, HIV, psychological, senile xerosis (dry skin in the elderly)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'list',
      items: [
        'Examine the whole skin for a primary rash, burrows, and dermographism; note excoriations and lichenification',
        'Ask about systemic red flags: weight loss, night sweats, fatigue, jaundice, bowel/urinary change',
        'First-line bloods: FBC (+ferritin), U&E, LFTs (+GGT), TFTs, glucose/HbA1c; add ESR, LDH, HIV, and imaging (CXR) if lymphoma/malignancy suspected',
      ],
    },

    { type: 'heading', level: 2, text: 'Symptomatic Management' },

    {
      type: 'list',
      items: [
        'Treat the underlying cause where found',
        'Generous emollients (including a cooling menthol-containing emollient), avoid soap/hot baths, keep nails short, cotton clothing',
        'A sedating antihistamine at night can help sleep; non-sedating antihistamines are of limited benefit in non-urticarial itch',
        'For specific causes: colestyramine or specialist agents for cholestatic itch; gabapentin/UVB for uraemic itch — often specialist-directed',
        'Refer/investigate urgently if red flags for malignancy, or persistent unexplained pruritus despite a normal initial screen',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'scabies-lice', label: 'Scabies & Lice', subtitle: 'The classic mimic of unexplained itch' },
        { id: 'chronic-liver-disease', label: 'Chronic Liver Disease', subtitle: 'Cholestatic pruritus' },
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'Uraemic pruritus' },
        { id: 'polycythaemia', label: 'Polycythaemia', subtitle: 'Aquagenic itch after a hot bath' },
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Lymphoma — itch with B symptoms' },
      ],
    },

  ],
}

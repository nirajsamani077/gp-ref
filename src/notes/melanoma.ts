import type { Note } from '../data/notes'

export const melanoma: Note = {
  id: 'melanoma',
  title: 'Melanoma',
  subtitle: '2WW criteria, ABCD2/EFG, 7-point checklist, Breslow thickness, nodular melanoma and referral',
  tags: ['cancer', 'dermatology'],

  body: 'melanoma skin cancer ABCD asymmetry border colour diameter EFG elevated firm growing 7 point checklist 2WW two week wait Breslow thickness excision biopsy sentinel lymph node BRAF immunotherapy targeted therapy metastasis acral lentiginous amelanotic subungual dermoscopy atypical mole syndrome sun exposure UV fair skin red hair dysplastic naevus pyogenic granuloma SCC squamous cell carcinoma nodular melanoma lentigo maligna',

  content: [

    {
      type: 'callout',
      variant: 'danger',
      title: '2WW Referral to Dermatology — Suspect Melanoma',
      items: [
        'ANY major ABCD criterion: asymmetry, irregular border, ≥3 colours, diameter changing, OR',
        'ANY nodular melanoma EFG criterion: elevated, firm, growing lesion — do not dismiss as benign if rapid growth',
        '7-point checklist: ≥3 points (any major feature scores 2, any minor feature scores 1)',
        'Suspicious dermoscopy findings — atypical network, regression areas, blue-black veil',
        'Clinician concern regardless of scoring — use "safety netting" 2WW if in doubt',
        'Do NOT perform shave biopsy or curettage in primary care for suspected melanoma — refer',
      ],
    },

    { type: 'heading', level: 2, text: 'Risk Factors' },

    {
      type: 'list',
      items: [
        'UV exposure: intermittent intense sun exposure (holidays, sunburn) > chronic cumulative — especially in childhood',
        'Skin type: Fitzpatrick type I–II (fair, burns easily, freckles, red or blonde hair, blue eyes)',
        'Atypical mole syndrome: >100 common naevi, or >2 atypical naevi with indistinct borders — refer to dermatology, especially with family history of melanoma',
        'Family history: first-degree relative with melanoma increases risk ~2-fold; CDKN2A mutation families: very high risk, consider genetic referral',
        'Immunosuppression: organ transplant recipients, HIV, long-term immunosuppressive therapy',
        'Previous melanoma or other skin cancers',
        'In non-white patients: melanoma is rare but occurs on palms, soles, subungual (nail bed) or mucous membranes — acral lentiginous subtype',
      ],
    },

    { type: 'heading', level: 2, text: 'ABCD Criteria' },

    {
      type: 'table',
      headers: ['Letter', 'Feature', 'Concerning Signs'],
      rows: [
        ['A', 'Asymmetry', 'One half does not mirror the other half'],
        ['B', 'Border', 'Irregular, notched, ragged, or blurred edges'],
        ['C', 'Colour', 'Variation within the lesion — shades of brown, black, red, white, or blue'],
        ['D', 'Diameter / Dimensions', '>6 mm diameter OR increasing in size, shape, or colour'],
      ],
      caption: 'Any one major ABCD feature warrants 2WW referral. Sensitivity of ABCD alone is ~90% but specificity is lower — most 2WW referrals will not be melanoma but referral is always appropriate.',
    },

    { type: 'heading', level: 2, text: 'EFG Criteria — Nodular Melanoma' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Nodular Melanoma — Do Not Miss',
      items: [
        'Accounts for ~15% of all melanomas but disproportionately fatal — grows rapidly vertically (Breslow thickness increases fast)',
        'Does NOT fit ABCD criteria well — it can be symmetric, have regular borders, and be uniform in colour',
        'EFG criteria: Elevated above skin surface, Firm to touch, Growing over weeks to months',
        'Differential includes pyogenic granuloma (rapid vascular lesion, bleeds easily, often post-trauma), SCC, BCC — all require biopsy if in doubt',
        'Amelanotic melanoma: pink/flesh-coloured lesion with NO pigment — suspect if papulonodular lesion fits EFG criteria regardless of colour',
        '2WW refer all EFG-positive lesions; do NOT reassure based on absence of pigment alone',
      ],
    },

    { type: 'heading', level: 2, text: '7-Point Checklist' },

    {
      type: 'table',
      headers: ['Category', 'Feature', 'Points'],
      rows: [
        ['Major (score 2 each)', 'Change in size', '2'],
        ['Major (score 2 each)', 'Irregular shape', '2'],
        ['Major (score 2 each)', 'Irregular colour / ≥3 shades', '2'],
        ['Minor (score 1 each)', 'Diameter >7 mm', '1'],
        ['Minor (score 1 each)', 'Inflammation around lesion', '1'],
        ['Minor (score 1 each)', 'Oozing, bleeding, or crusting', '1'],
        ['Minor (score 1 each)', 'Change in sensation (itch, tingling)', '1'],
      ],
      caption: 'Total score ≥3: 2WW referral. Presence of ANY major feature alone should prompt 2WW referral. Score <3 with clinical concern: still refer if uncertain.',
    },

    { type: 'heading', level: 2, text: 'Dermoscopy' },

    {
      type: 'list',
      items: [
        'Use only if trained and competent — dermoscopy in untrained hands has lower sensitivity than the naked eye',
        'Features suggesting melanoma: atypical pigment network (thick irregular lines), blue-white veil (pale blue structure over raised area), irregular dots/globules, regression (white scar-like areas), atypical vessels',
        'Features suggesting benign: regular globular pattern (dermal naevus), homogeneous pigment, parallel furrow pattern (palmar/plantar lesions)',
        'Dermoscopy training: PCD (Primary Care Dermatology Society) online modules, BDA accreditation; consider referring if uncertain even with dermoscopy',
      ],
    },

    { type: 'heading', level: 2, text: 'What Happens After Referral' },

    {
      type: 'list',
      items: [
        'Excision biopsy with 2 mm margin: full-thickness elliptical excision — shave/punch biopsy avoided for suspected melanoma (may compromise staging)',
        'Breslow thickness (depth of invasion in mm): most important prognostic factor — determines further management',
        'Breslow <1 mm: wide local excision with 1 cm margin; sentinel lymph node biopsy (SLNB) may be offered for 0.8–1 mm or with ulceration',
        'Breslow 1–2 mm: wide local excision with 1–2 cm margin; SLNB offered',
        'Breslow >2 mm: 2 cm margin excision; SLNB; staging CT; oncology referral',
        'SLNB: identifies microscopic nodal spread — positive SLNB triggers completion lymphadenectomy or adjuvant therapy',
        'Metastatic melanoma: targeted therapy (BRAF/MEK inhibitors if BRAF V600E mutation); immunotherapy (PD-1 inhibitors — nivolumab, pembrolizumab) — improved prognosis over last decade',
      ],
    },

    { type: 'heading', level: 2, text: 'Melanoma Subtypes' },

    {
      type: 'table',
      headers: ['Subtype', 'Prevalence', 'Key Features'],
      rows: [
        ['Superficial spreading melanoma', '70%', 'Grows radially (laterally) before vertical invasion; classic ABCD features; most amenable to early detection'],
        ['Nodular melanoma', '15%', 'Vertical growth from outset; EFG criteria; rapidly enlarging; amelanotic in 5–25%'],
        ['Lentigo maligna melanoma', '5–10%', 'Occurs on chronically sun-damaged skin (face, scalp of elderly); precursor = lentigo maligna (in situ); slow growing'],
        ['Acral lentiginous melanoma', '~5% overall; disproportionate in Black and Asian patients', 'Palms, soles, subungual (nail bed — dark streak/Hutchinson\'s sign); check nails in all patients regardless of skin type'],
        ['Amelanotic melanoma', '~5%', 'Pink or skin-coloured; often missed; poor prognosis due to late diagnosis'],
      ],
    },

    { type: 'heading', level: 2, text: 'Sun Protection Advice' },

    {
      type: 'list',
      items: [
        'SPF 30–50+ broad-spectrum sunscreen (UVA + UVB) — apply generously and reapply every 2 hours and after swimming',
        'Avoid peak sun hours (11 am–3 pm UK in summer)',
        'Cover skin with clothing, wide-brim hat, sunglasses with UV protection',
        'Sunbeds: carcinogenic — advise against use; ban for under-18s in UK',
        'Self-examination: monthly total body skin self-check; use ABCD/7-point criteria; couples/carers can help examine difficult areas',
        'Atypical mole syndrome: annual dermatology surveillance, total body photography for monitoring',
      ],
    },

  ],
}

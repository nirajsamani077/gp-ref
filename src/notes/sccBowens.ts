import type { Note } from '../data/notes'

export const sccBowens: Note = {
  id: 'scc-bowens',
  title: 'SCC, Bowen\'s Disease & Keratoacanthoma',
  subtitle: 'The AK–Bowen\'s–SCC spectrum, 2WW red flags, high-risk sites and keratoacanthoma',
  tags: ['dermatology', 'cancer'],

  body: `squamous cell carcinoma SCC Bowen's disease SCC in situ actinic keratosis keratoacanthoma Marjolin's ulcer non-healing ulcer cutaneous horn sun exposure immunosuppression organ transplant 2WW dermatology excision biopsy perineural 5-FU Efudix imiquimod photodynamic therapy cryotherapy`,

  content: [

    { type: 'heading', level: 2, text: 'Overview — the AK → Bowen\'s → SCC Spectrum' },
    {
      type: 'para',
      text: 'Cutaneous squamous cell carcinoma is the second commonest skin cancer and, unlike BCC, has a real (if usually low) metastatic potential. It sits at the malignant end of a spectrum of sun-damage: actinic keratoses (precursor) → Bowen\'s disease (SCC in situ) → invasive SCC. The GP\'s job is to recognise and urgently refer suspicious lesions, know the high-risk sites and patients, and treat the pre-invasive end appropriately.',
    },
    {
      type: 'list',
      items: [
        'Risk factors: cumulative UV exposure, fair skin, older age, immunosuppression (organ-transplant recipients have a many-fold increased risk and more aggressive tumours), chronic inflammation/scarring, and previous skin cancer.',
        'Actinic keratoses are the precursor — a low individual transformation rate, but ~65% of SCCs arise from them (see Actinic Keratosis). Bowen\'s disease is SCC in situ; invasive SCC breaches the basement membrane.',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer Suspected SCC on the 2WW Skin Pathway',
      items: [
        'SCC: an enlarging, non-healing, keratotic or ulcerated papule/plaque/nodule, often tender or bleeding, with ill-defined margins, on sun-exposed skin (head, neck, dorsal hands, forearms).',
        'A non-healing ulcer or lesion present >~3 months warrants suspicion; a Marjolin\'s ulcer is an SCC arising in a chronic wound, burn scar or sinus.',
        'HIGH-RISK sites (metastasise more readily): the ear (highest risk), lip, nose, eyelids and scalp; and ANY SCC in an immunosuppressed patient.',
        'Refer any suspected SCC on the 2WW dermatology pathway; do NOT shave-biopsy or curette a suspected SCC in primary care.',
      ],
    },

    { type: 'heading', level: 2, text: 'Bowen\'s Disease (SCC In Situ)' },
    {
      type: 'list',
      items: [
        'A well-demarcated, scaly, red/pink solitary patch (1–3 cm), slow-growing, on sun-exposed skin — classically the lower legs of older women.',
        'Around 3–5% (up to ~10–15% at some sites, e.g. genital) progress to invasive SCC.',
        'Treatment options (a lesion confirmed as Bowen\'s can be managed in primary/community care with follow-up): topical 5-fluorouracil (Efudix), imiquimod, cryotherapy, curettage & cautery, or photodynamic therapy — choice depends on site, size and patient. Refer if diagnosis is uncertain, lesions are multiple/high-risk (e.g. lower leg in the elderly with poor healing), or poorly responsive.',
      ],
    },

    { type: 'heading', level: 2, text: 'Keratoacanthoma' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Rapidly Growing "Volcano" Lesion',
      items: [
        'A rapidly growing (weeks) dome-shaped nodule with a central keratin-filled crater ("volcano"), on older, sun-exposed skin.',
        'Although often self-resolving over ~3 months, it can be impossible to distinguish clinically from — or may actually be — a well-differentiated SCC → refer 2WW and excise for histology (which also avoids the scar of spontaneous regression).',
      ],
    },

    { type: 'heading', level: 2, text: 'Management of Confirmed SCC & Prognosis' },
    {
      type: 'list',
      items: [
        'Specialist management: surgical excision with histological assessment of depth, differentiation and perineural invasion; Mohs surgery for high-risk facial sites; radiotherapy in selected cases.',
        'Regular dermatology follow-up for high-risk lesions and immunosuppressed patients; reinforce lifelong sun protection and skin self-examination.',
        'Prognosis is generally good (>90% 5-year survival) with a low metastatic rate, but larger (>2 cm) or thicker tumours, high-risk sites, perineural invasion and immunosuppression worsen the outlook.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Skin)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'PCDS — Squamous Cell Carcinoma', url: 'https://www.pcds.org.uk/clinical-guidance/squamous-cell-carcinoma' },
        { label: 'BAD — SCC Patient Leaflet', url: 'https://www.bad.org.uk/pils/squamous-cell-carcinoma/' },
        { label: 'BAD — Bowen\'s Disease Leaflet', url: 'https://www.bad.org.uk/pils/bowens-disease/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'actinic-keratosis', label: 'Actinic Keratosis', subtitle: 'The pre-malignant precursor and field treatment' },
        { id: 'bcc', label: 'Basal Cell Carcinoma', subtitle: 'The commonest skin cancer — different behaviour/referral' },
        { id: 'melanoma', label: 'Melanoma', subtitle: 'Pigmented lesion red flags and 2WW' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Suspected skin cancer criteria' },
      ],
    },

  ],
}

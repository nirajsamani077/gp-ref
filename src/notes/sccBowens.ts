import type { Note } from '../data/notes'

export const sccBowens: Note = {
  id: 'scc-bowens',
  title: 'SCC, Bowen\'s Disease & Keratoacanthoma',
  subtitle: 'The AK–Bowen\'s–SCC spectrum, 2WW red flags, high-risk sites and keratoacanthoma',
  tags: ['dermatology', 'cancer'],

  body: `squamous cell carcinoma SCC Bowen's disease SCC in situ actinic keratosis keratoacanthoma Marjolin's ulcer non-healing ulcer sun exposure immunosuppression 2WW dermatology excision biopsy 5-FU imiquimod`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Skin)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'PCDS — SCC & Bowen\'s Disease', url: 'https://www.pcds.org.uk/clinical-guidance/squamous-cell-carcinoma' },
        { label: 'BAD — Squamous Cell Carcinoma', url: 'https://www.bad.org.uk/pils/squamous-cell-carcinoma/' },
      ],
    },

    { type: 'heading', level: 2, text: 'The AK → Bowen\'s → SCC Spectrum' },

    {
      type: 'list',
      items: [
        'Cutaneous squamous cell carcinoma arises on sun-damaged skin; risk factors include cumulative UV exposure, immunosuppression (organ transplant — much higher risk), chronic inflammation/scarring, and older age',
        'Actinic keratoses are the precursor (low individual transformation rate, but ~65% of SCCs arise from them); Bowen\'s disease is SCC in situ; invasive SCC breaches the basement membrane',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer Suspected SCC 2WW',
      items: [
        'SCC: an enlarging, non-healing, keratotic or ulcerated papule/plaque/nodule, often tender or bleeding, with ill-defined margins, on sun-exposed skin (head and neck)',
        'A non-healing ulcer/lesion present for >3 months warrants suspicion; a Marjolin\'s ulcer is an SCC arising in a chronic wound/scar',
        'HIGH-RISK sites: the ear (highest risk), lip, nose, eyelids and scalp; and any SCC in an immunosuppressed patient — these metastasise more readily',
        'Refer any suspected SCC on the 2WW dermatology pathway; do NOT attempt shave biopsy/curettage of a suspected SCC in primary care',
      ],
    },

    { type: 'heading', level: 2, text: 'Bowen\'s Disease (SCC In Situ)' },

    {
      type: 'list',
      items: [
        'A well-demarcated, scaly, red/pink solitary patch (1–2 cm), slow-growing, on sun-exposed skin (often the lower legs in older women)',
        '~5% (up to ~15% at some sites) progress to invasive SCC',
        'Refer urgently if uncertain, multiple/high-risk, or poorly responsive; otherwise it can be treated in primary care like actinic keratoses — topical 5-fluorouracil (Efudix), imiquimod, or cryotherapy/curettage — with follow-up',
      ],
    },

    { type: 'heading', level: 2, text: 'Keratoacanthoma' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Rapidly Growing "Volcano" Lesion',
      items: [
        'A rapidly growing dome-shaped nodule with a central keratin-filled crater ("volcano"), in older, sun-exposed skin',
        'Although often self-resolving over ~3 months, it can be difficult to distinguish from (or represent) a well-differentiated SCC → refer 2WW and excise for histology (which also prevents the scarring of spontaneous regression)',
      ],
    },

    {
      type: 'list',
      items: [
        'SCC management (specialist): excision with histological assessment of depth, differentiation and perineural invasion; regular dermatology follow-up for high-risk lesions; sun protection and self-examination advice',
        'Prognosis is generally good (>90% 5-year survival) with a low metastatic rate, but larger (>2 cm) and high-risk-site lesions carry a worse outlook',
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

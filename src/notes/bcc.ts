import type { Note } from '../data/notes'

export const bcc: Note = {
  id: 'bcc',
  title: 'Basal Cell Carcinoma (BCC)',
  subtitle: 'PCDS classification, risk stratification, topical vs surgical treatment',
  tags: ['dermatology', 'cancer'],

  body: 'basal cell carcinoma BCC skin cancer superficial nodular morphoeic infiltrative papulonodular sun exposure ultraviolet UV immunosuppression Gorlin syndrome efudix fluorouracil Aldara imiquimod cryotherapy surgical excision 4mm margin high risk low risk dermatology refer dermoscopy AK actinic keratosis SCC squamous cell carcinoma keratoacanthoma melanoma',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'BCC — Key Facts',
      items: [
        'Most common skin cancer; rarely metastasises but causes significant local destruction if untreated',
        'Risk factors: sun/UV exposure (cumulative lifetime), fair skin, immunosuppression (transplant, chronic steroid use), previous BCC, Gorlin syndrome (multiple BCCs)',
        'Location: predominantly head and neck (sun-exposed areas) but can occur anywhere',
        'BCCs tend to bleed and crust (vs AK/SCC which tend to keratinise and scale)',
        'Three main subtypes: superficial, papulonodular, and infiltrative/morphoeic',
        'If multiple BCCs (especially in young patient) → consider Gorlin syndrome — refer genetics',
      ],
    },

    { type: 'heading', level: 2, text: 'BCC Subtypes and Features' },

    {
      type: 'table',
      headers: ['Subtype', 'Appearance', 'Risk Level', 'Management'],
      rows: [
        ['Superficial BCC', 'Slowly expanding, fine raised "whipcord" pearlescent edge, may have erosions and crust; flat, erythematous patch with slight scaling', 'Low risk', 'Non-surgical or surgical — see options below'],
        ['Papulonodular BCC (nodular)', 'Papule or nodule with raised rolled shiny telangiectatic (blood vessel) edge; may ulcerate centrally ("rodent ulcer") and crust', 'Low-intermediate risk', 'Surgical excision with 4mm margin (standard); can be minor surgery if low risk'],
        ['Mixed BCC', 'Features of both superficial and nodular', 'Intermediate risk', 'Surgical excision preferred'],
        ['Infiltrative/morphoeic BCC', 'Poorly defined scar-like waxy pale/pink patch, often on face; may be depressed or firm; extends deeper than anticipated', 'HIGH RISK — all refer', 'Always refer dermatology/plastic surgery — requires wider excision or Mohs surgery'],
      ],
      caption: 'Infiltrative/morphoeic BCCs are particularly dangerous — they have poorly defined borders and extend deeply, making complete excision challenging in primary care.',
    },

    { type: 'heading', level: 2, text: 'Differential Diagnosis' },

    {
      type: 'list',
      items: [
        'Actinic keratosis (AK) — scaly, rough, hyperkeratotic patch on sun-exposed skin; pre-malignant',
        'Bowen\'s disease (SCC in-situ) — well-demarcated erythematous scaly plaque',
        'Squamous cell carcinoma (SCC) — faster-growing, keratinising, can metastasise',
        'Amelanotic melanoma — can mimic BCC nodular variant; amelanotic (no pigment)',
        'Keratoacanthoma — rapid growth (weeks), central keratin plug, may spontaneously regress; still refer for excision',
        'Dermatofibroma — benign firm nodule on limbs; "dimples" inward on lateral pressure (Fitzpatrick sign)',
        'Sebaceous hyperplasia — yellowish lobulated papule on face (enlarged sebaceous gland)',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment — Low Risk Superficial BCC' },

    {
      type: 'table',
      headers: ['Treatment', 'Details', 'When to Use'],
      rows: [
        ['No treatment', 'Observation only with sun protection advice', 'Asymptomatic; very elderly; reduced life expectancy; patient preference'],
        ['Topical fluorouracil (Efudix) 5% cream', 'Apply to lesion + 4mm margin for 6 weeks; 2× daily; cover 12h', 'Superficial BCC (off-label but widely used); good cosmetic outcome; not for nodular BCC'],
        ['Topical imiquimod (Aldara) 5% cream', 'Apply to lesion + 4mm margin 5 days/week for 6 weeks; wash off after 8 hours', 'Superficial BCC (NHS-approved for superficial BCC); causes significant local reaction; also used for AK and genital warts; ensure SPF++ during treatment'],
        ['Cryotherapy (liquid nitrogen)', 'Freeze-thaw cycle; curettage alone or combined', 'Superficial, well-defined BCCs; lower cure rate than surgery; good for elderly'],
        ['Photodynamic therapy (PDT)', 'Specialist dermatology — aminolevulinic acid + light', 'Superficial BCC; good cosmetic result; specialist-initiated'],
        ['Surgical excision (4 mm margin)', 'Gold standard; highest cure rate', 'Low risk nodular BCC; can be done in minor surgery if confident and trained clinician'],
      ],
      caption: 'Topical treatments (Efudix and imiquimod): cause significant local inflammatory reactions (redness, erosion, crusting) — warn patients that this is expected and indicates response. Post-treatment pigmentation changes are common.',
    },

    { type: 'heading', level: 2, text: 'High-Risk BCCs — Always Refer to Dermatology/OMFS' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer to Secondary Care if ANY High-Risk Feature',
      items: [
        'All infiltrative/morphoeic BCCs — poorly defined margins, high recurrence rate',
        'Age <25 years — consider Gorlin syndrome',
        'Immunosuppressed patient (transplant, chronic steroids, HIV)',
        'Gorlin syndrome (multiple BCCs, calcified falx cerebri, palmar pits)',
        'Head and neck location in anatomically challenging areas (periorbital, nasal, auricular, perioral)',
        'Very large BCC (>2 cm)',
        'Poorly defined clinical margin — cannot confidently plan 4mm margin',
        'Recurrent BCC (higher risk of incomplete excision and deeper invasion)',
        'Mohs micrographic surgery: indicated for high-risk facial BCCs — refer to dermatology or OMFS',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Dermatology (routine BCC): UHDB Queen\'s Hospital Burton OR Cannock Chase Hospital (check local pathway)',
        'Urgent 2WW (if uncertain malignancy type or suspicious for melanoma/SCC): e-RS 2WW skin cancer — UHDB Burton or Good Hope (UHB)',
        'High-risk BCCs / Mohs surgery: dermatology at Good Hope Hospital (UHB) or Queen Elizabeth Hospital Birmingham',
        'Oral and Maxillofacial Surgery (OMFS) for perioral/facial BCCs: UHDB Burton',
        'Ophthalmology (periorbital BCCs): UHDB Burton eye department',
        'Patient may prefer alternative local site — discuss at consultation',
        'Dermatoscopy available at Darwin Practice if trained clinician — can help distinguish from benign lesions before referral',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        '2WW urgent: any lesion you cannot confidently classify; rapidly growing lesion; pigmented nodule suspicious for melanoma',
        'Red flags: ulceration with rolled edge not healing, bleeding without trauma, satellite lesions (suggests locally aggressive BCC or SCC)',
        'Post-treatment: review at 6–12 weeks to confirm treatment response; any new lesions require new assessment',
        'Sun protection advice: SPF30+ daily; reapply every 2 hours in sun; avoid midday sun; hats; annual skin check',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'PCDS — Basal Cell Carcinoma', url: 'https://www.pcds.org.uk/clinical-guidance/basal-cell-carcinoma' },
        { label: 'NICE NG12 — Skin Cancer 2WW', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'BAD — BCC Guidelines', url: 'https://www.bad.org.uk/healthcare-professionals/clinical-standards/clinical-guidelines/bcc' },
        { label: 'Skin Cancer UK', url: 'https://www.skincancer.co.uk/' },
        { label: 'NHS — Basal Cell Carcinoma', url: 'https://www.nhs.uk/conditions/basal-cell-carcinoma/' },
      ],
    },
  ],
}

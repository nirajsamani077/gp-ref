import type { Note } from '../data/notes'

export const vulvalConditions: Note = {
  id: 'vulval-conditions',
  title: 'Vulval Dermatoses & Vulval Cancer',
  subtitle: 'The itchy/sore vulva, lichen sclerosus/planus/eczema, VIN and the 2WW red flags',
  tags: ['gynaecology'],

  body: `vulval itch pruritus vulvae vulval dermatoses lichen sclerosus lichen planus vulval eczema contact dermatitis lichen simplex vulval intraepithelial neoplasia VIN vulval cancer squamous cell carcinoma 2WW biopsy potent topical steroid emollient soap substitute`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Vulval symptoms — itch, soreness, burning — are common, under-reported, and frequently mislabelled as recurrent "thrush". Most are due to benign vulval dermatoses that respond well to the right topical treatment and skin care, but two things must not be missed: lichen sclerosus (which carries a small cancer risk and needs surveillance), and vulval cancer/VIN, which presents as a persistent lump, ulcer or non-resolving lesion warranting biopsy or 2WW referral.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'If "Thrush" Isn\'t Getting Better, Reconsider',
      items: [
        'Persistent vulval itch/soreness not responding to antifungals is rarely recurrent candidiasis — examine the vulva and think dermatosis or neoplasia.',
        'Examine (with consent and a chaperone): note erythema, white plaques, atrophy, fissuring, architectural change, lumps or ulcers.',
      ],
    },

    { type: 'heading', level: 2, text: 'Benign Vulval Dermatoses' },
    {
      type: 'table',
      headers: ['Condition', 'Features', 'Management'],
      rows: [
        ['Vulval eczema / contact dermatitis', 'Itch, erythema, poorly demarcated; triggered by soaps, wipes, panty-liners, incontinence', 'Stop irritants; soap substitute + emollient; a short course of a mild–moderate topical steroid'],
        ['Lichen simplex', 'Thickened, lichenified skin from chronic scratch-itch cycle', 'Emollient, moderate/potent steroid, break the itch cycle (sedating antihistamine at night)'],
        ['Lichen sclerosus', 'White, atrophic, fragile "parchment" skin ± fissuring/scarring; ~5% SCC risk', 'Ultra-potent topical steroid (clobetasol) induction then maintenance; surveillance; biopsy suspicious change (see Lichen Sclerosus)'],
        ['Lichen planus', 'Erosive or reticulate; may involve the vagina/mouth; painful', 'Potent topical steroid; refer erosive/refractory disease (pre-malignant potential)'],
      ],
    },
    {
      type: 'list',
      items: [
        'General vulval skin care (helps all dermatoses): avoid soap/shower gel/wipes/perfumed products, use an emollient/soap substitute, wear cotton underwear, avoid tight clothing, and pat dry.',
        'Check TSH in lichen sclerosus/planus (autoimmune associations); consider patch testing for suspected contact allergy.',
      ],
    },

    { type: 'heading', level: 2, text: 'Vulval Cancer & VIN' },
    {
      type: 'callout',
      variant: 'danger',
      title: '2WW / Biopsy Red Flags',
      items: [
        'Refer 2WW (suspected vulval cancer) for an unexplained vulval LUMP, ULCERATION or BLEEDING.',
        'Biopsy a persistent, non-healing, thickened, warty, or pigmented lesion, or one not responding to adequate treatment — do not simply keep re-treating.',
        'Vulval intraepithelial neoplasia (VIN) is the pre-malignant precursor — usual-type VIN is HPV-related (younger women); differentiated VIN arises on a background of lichen sclerosus/planus (older women, higher cancer risk).',
        'Most vulval cancers are squamous cell carcinoma; risk factors include lichen sclerosus, HPV, smoking and immunosuppression. Check the inguinal lymph nodes.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Gynaecological)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'BAD — Vulval Dermatoses / Lichen Sclerosus', url: 'https://www.bad.org.uk/pils/lichen-sclerosus/' },
        { label: 'BSSVD — Vulval Disease Guidance', url: 'https://bssvd.org/' },
        { label: 'NHS — Vulval Cancer', url: 'https://www.nhs.uk/conditions/vulval-cancer/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'lichen-sclerosus', label: 'Lichen Sclerosus & Lichen Planus', subtitle: 'The commonest dermatoses in detail — steroid regimens' },
        { id: 'vaginal-discharge', label: 'Vaginal Discharge', subtitle: 'Candidiasis — the common misdiagnosis' },
        { id: 'menopause', label: 'Menopause', subtitle: 'Vulvovaginal atrophy — another cause of vulval symptoms' },
        { id: 'genital-warts', label: 'Genital Warts', subtitle: 'HPV — relevant to usual-type VIN' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Gynaecological cancer referral criteria' },
      ],
    },

  ],
}

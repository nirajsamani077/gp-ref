import type { Note } from '../data/notes'

export const mastitisBreastPain: Note = {
  id: 'mastitis-breast-pain',
  title: 'Mastitis, Mastalgia & Nipple Problems',
  subtitle: 'Lactational mastitis, breast abscess, cyclical mastalgia, nipple pain and Paget\'s disease',
  tags: ['breast'],

  body: `mastitis lactational breastfeeding flucloxacillin breast abscess incision drainage cyclical mastalgia breast pain evening primrose nipple pain poor latch candidiasis Raynaud's nipple galactocele Paget's disease breast nipple eczema 2WW`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Mastitis & Breast Abscess', url: 'https://cks.nice.org.uk/topics/mastitis-breast-abscess/' },
        { label: 'NICE CKS — Breast Pain (Cyclical)', url: 'https://cks.nice.org.uk/topics/breast-pain-cyclical/' },
        { label: 'NICE NG12 — Suspected Cancer (Breast)', url: 'https://www.nice.org.uk/guidance/ng12' },
      ],
    },

    {
      type: 'para',
      text: 'This note covers the common benign breast and nipple problems: lactational mastitis (where the first move is keeping the milk moving, not reaching for antibiotics), nipple pain in breastfeeding (usually a fixable latch problem), cyclical mastalgia, and other nipple presentations. Running through it are two cancer safety-nets: a red breast not responding to antibiotics (inflammatory breast cancer) and eczematous change starting AT the nipple (Paget\'s disease) — both warrant 2WW referral.',
    },
    { type: 'heading', level: 2, text: 'Mastitis & Breast Abscess' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Keep the Milk Moving',
      items: [
        'Lactational mastitis: a red, painful, swollen segment of breast ± flu-like symptoms — usually from milk stasis/blocked duct, sometimes with infection (Staph aureus)',
        'First step is effective milk removal — CONTINUE breastfeeding/expressing from the affected side, with good positioning; warm compresses, analgesia (paracetamol/ibuprofen), and rest',
        'Antibiotics (flucloxacillin 10–14 days; erythromycin/clarithromycin if penicillin-allergic) if: systemically unwell, a nipple fissure is present, symptoms do not improve within 12–24 hours of effective milk removal, or culture confirms infection',
        'Breast abscess (fluctuant swelling, not settling): refer for ultrasound and needle aspiration or incision & drainage — breastfeeding can usually continue',
        'Non-lactational/periductal mastitis: associated with smoking; may need co-amoxiclav and referral (recurrent → duct excision)',
        'A red breast NOT responding to antibiotics → consider inflammatory breast cancer and refer (2WW)',
      ],
    },

    { type: 'heading', level: 2, text: 'Nipple Pain in Breastfeeding' },

    {
      type: 'list',
      items: [
        'Poor latch is the commonest cause — refer to a breastfeeding/health-visitor/infant-feeding specialist to assess and correct positioning; check for tongue-tie',
        'Nipple/ductal candidiasis: burning nipple pain (± shiny/flaky areola) after feeds — treat mother (topical miconazole) AND baby (oral nystatin/miconazole gel) simultaneously',
        'Nipple vasospasm (Raynaud\'s of the nipple): intermittent severe pain with white→blue→red colour change around feeds; keep warm, avoid cold/caffeine/nicotine, and trial nifedipine (off-licence) if severe',
        'Blocked duct/milk bleb and engorgement: continue feeding, massage, reposition, hand-express; warm compress before and cool after',
        'Watch neonatal weight: >10% loss in the first week → midwife-led breastfeeding assessment and look for an underlying cause',
      ],
    },

    { type: 'heading', level: 2, text: 'Cyclical Mastalgia' },

    {
      type: 'list',
      items: [
        'Bilateral, diffuse breast pain/tenderness in the luteal phase (around ovulation to menstruation), improving with the period — hormonally driven and benign',
        'Management: reassurance, a well-fitting/supportive bra, simple analgesia/topical NSAID; keep a pain diary; some find evening primrose/starflower oil helpful',
        'If not improved after ~3 months or quality of life is affected → refer for consideration of hormonal treatment (e.g. danazol, tamoxifen, or bromocriptine — specialist, side-effect-limited)',
        'Non-cyclical or focal breast pain, or pain with a lump/skin change → assess and refer per breast pathways',
      ],
    },

    { type: 'heading', level: 2, text: 'Other Nipple Presentations' },

    {
      type: 'callout',
      variant: 'warning',
      title: "Galactocele vs Paget's Disease",
      items: [
        'Galactocele: a painless milk-filled cyst, typically after stopping/reducing breastfeeding, with no signs of infection — reassure; imaging not routinely needed',
        "Paget's disease of the nipple: persistent eczematous/scaly change STARTING at the nipple and spreading outward (unlike eczema, which usually starts on the areola and spares the nipple) — ~90% have an underlying breast malignancy → 2WW breast referral for mammography, ultrasound and punch biopsy",
        'Any unilateral bloody or single-duct nipple discharge, or a nipple change with a lump → 2WW breast referral',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'benign-breast', label: 'Benign Breast Conditions', subtitle: 'Breast lumps, cysts, fibroadenoma and referral' },
        { id: 'breast-cancer', label: 'Breast Cancer', subtitle: '2WW criteria and red flags' },
        { id: 'raynauds', label: "Raynaud's Phenomenon", subtitle: 'Vasospasm — relevant to nipple Raynaud\'s' },
        { id: 'perinatal-mh', label: 'Perinatal Mental Health', subtitle: 'Feeding difficulties and postnatal support' },
      ],
    },

  ],
}

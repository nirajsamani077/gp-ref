import type { Note } from '../data/notes'

export const benignBreast: Note = {
  id: 'benign-breast',
  title: 'Benign Breast Conditions',
  subtitle: 'Mastalgia, breast lumps, nipple discharge, mastitis, and when to refer',
  tags: ['symptoms', 'breast'],

  body: `benign breast conditions mastalgia breast pain cyclical non-cyclical breast lump fibroadenoma breast cyst fibrocystic change fat necrosis nipple discharge nipple inversion mastitis breast abscess lactational non-lactational periductal mastitis 2WW two week wait referral reassure triple assessment evening primrose oil EPO flucloxacillin co-amoxiclav erythromycin clarithromycin paracetamol NSAID diclofenac topical supportive bra costochondritis Tietze galactorrhoea prolactin TSH duct papilloma duct ectasia ductal carcinoma Paget disease Staphylococcus aureus perimenopausal premenopausal HRT pregnancy breast mouse upper outer quadrant`,

  content: [

    // ── LINKS ─────────────────────────────────────────────────────────────────
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Breast Cancer Recognition & Referral', url: 'https://cks.nice.org.uk/topics/breast-cancer-recognition-referral/' },
        { label: 'Breast Cancer Now — Breast Pain', url: 'https://breastcancernow.org/information-support/have-i-got-breast-cancer/benign-breast-conditions/breast-pain' },
        { label: 'CoppaFeel — Breast Pain', url: 'https://coppafeel.org.uk/info-resources/health-information/breast-pain/' },
      ],
    },

    // ── OVERVIEW ──────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Overview',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Key Messages',
      items: [
        'Most breast symptoms are non-cancerous — reassurance is often the most important intervention.',
        'Breast pain alone (without a lump) does NOT require referral and is NOT associated with breast cancer.',
        'Triple assessment (clinical examination + imaging + biopsy if needed) is the gold standard for any breast lump.',
      ],
    },
    {
      type: 'image',
      src: '/images/breast-quadrants.png',
      alt: 'Diagram of breast anatomy showing quadrants: upper outer, upper inner, lower outer, lower inner, central, axillary tail, nipple and areola',
      caption: 'Breast anatomy quadrants — upper outer is the most common site for both benign and malignant lesions',
    },

    // ── BREAST LUMP — REFERRAL ────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Breast Lump — When to Refer',
    },
    {
      type: 'table',
      headers: ['Referral pathway', 'Indications'],
      rows: [
        [
          '2WW (urgent)',
          'Unexplained breast, skin, or axillary lump aged ≥30\nUnilateral nipple changes (discharge, retraction, other) aged ≥50',
        ],
        [
          'Non-urgent',
          'Persistent unexplained breast lump aged <30\nPersistent unexplained breast pain aged <30',
        ],
        [
          'DO NOT REFER — reassess after next period',
          'Nodularity that comes and goes\nSymmetrical nodularity\nNodularity associated with cyclical tenderness\nNodularity the patient has difficulty defining',
        ],
      ],
      caption: 'Referral criteria for breast lumps in primary care',
    },

    // ── COMMON BENIGN CONDITIONS ──────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Common Benign Conditions',
    },
    {
      type: 'image',
      src: '/images/fibroadenoma-breast.jpg',
      alt: 'Cross-section diagram comparing breast cysts (fluid-filled) versus fibroadenoma (solid mass)',
      caption: 'Breast cysts (fluid-filled, may fluctuate with cycle) vs fibroadenoma (solid, mobile, rubbery)',
    },
    {
      type: 'image',
      src: '/images/fibroadenoma-1.jpg',
      alt: 'Diagram showing types of breast lesions — abscess, fibroadenoma, cyst, fibroadenomatosis, tumour; and types of cyst — atypical, fibrous, multilocular, fat, solitary',
      caption: 'Types of breast lesions and breast cyst subtypes',
    },

    // Fibroadenoma
    {
      type: 'heading',
      level: 3,
      text: 'Fibroadenoma',
    },
    {
      type: 'list',
      items: [
        'Most common in young women aged 15–35',
        'Smooth, rubbery, mobile — often called the "breast mouse"',
        'May enlarge in pregnancy or with HRT use',
        'Most can be managed conservatively once triple assessment confirms benign nature',
        '"Giant" fibroadenoma (>5 cm): surgical excision required',
      ],
    },

    // Breast Cysts
    {
      type: 'heading',
      level: 3,
      text: 'Breast Cysts',
    },
    {
      type: 'list',
      items: [
        'Most common in perimenopausal women aged 35–55',
        'Fluid-filled, round or oval, may fluctuate with the menstrual cycle',
        'Often tender premenstrually',
        'Ultrasound confirms diagnosis; fine needle aspiration if symptomatic',
        'Multiple or recurrent cysts = fibrocystic change (normal variant)',
      ],
    },

    // Fibrocystic Change
    {
      type: 'heading',
      level: 3,
      text: 'Fibrocystic Change (Fibrocystic Disease)',
    },
    {
      type: 'list',
      items: [
        'Diffuse nodularity, often bilateral, predominantly upper outer quadrant',
        'Peaks perimenstrually; typically improves after menopause',
        'NOT a cancer risk — reassure the patient',
      ],
    },

    // Fat Necrosis
    {
      type: 'heading',
      level: 3,
      text: 'Fat Necrosis',
    },
    {
      type: 'list',
      items: [
        'Benign adipose tissue inflammation — often follows trauma or surgery',
        'Can produce a mass, erythema, and skin changes that mimic malignancy',
        'Usually requires 2WW referral as biopsy is needed to confirm benign diagnosis',
      ],
    },

    // ── MASTALGIA ─────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Mastalgia (Breast Pain)',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Key Message — Breast Pain Alone',
      items: [
        'Breast pain WITHOUT a lump does NOT require referral.',
        'Breast pain is NOT associated with breast cancer.',
        'Reassurance is often the most effective treatment.',
      ],
    },
    {
      type: 'image',
      src: '/images/breast-pain-flowchart.png',
      alt: 'Northern Cancer Alliance breast pain flowchart: take history, examine; if no lump and near-population family history reassure, no association between breast pain and cancer; cyclical pain — supportive bra, paracetamol 1g QDS, topical NSAID, evening primrose oil; non-cyclical — consider costochondritis, axillary, idiopathic, periductal mastitis, same analgesia; refer if not improving after 3 months',
      caption: 'Northern Cancer Alliance breast pain management pathway',
    },

    // Cyclical Mastalgia
    {
      type: 'heading',
      level: 3,
      text: 'Cyclical Mastalgia (Hormonal)',
    },
    {
      type: 'list',
      items: [
        'Related to the menstrual cycle — bilateral, worse premenstrually, improves after period',
      ],
    },
    {
      type: 'table',
      headers: ['Treatment', 'Details'],
      rows: [
        [
          'Supportive bra',
          'Properly fitted; wear 24 hrs/day if needed; avoid underwired bras',
        ],
        [
          'Paracetamol 1g QDS',
          'Regular use for 2 weeks; extend a further 2 weeks if improving',
        ],
        [
          'Topical NSAID gel',
          'e.g. diclofenac gel applied to breast for 2–3 months',
        ],
        [
          'Evening primrose oil (EPO)',
          'OTC only — do NOT prescribe on FP10; EPO 500 mg capsules contain ~40 mg GLA; dose 120–160 mg GLA twice daily. Note: RCT showed 12% reduction in pain days vs 14% for placebo — probably no better than placebo, but harmless and works for some patients',
        ],
      ],
      caption: 'Cyclical mastalgia — treatments can be offered concurrently; refer to breast clinic only if no improvement after 3 months',
    },

    // Non-Cyclical Mastalgia
    {
      type: 'heading',
      level: 3,
      text: 'Non-Cyclical Mastalgia',
    },
    {
      type: 'list',
      items: [
        'Not related to menstrual cycle; may be unilateral',
        'Use the same analgesia approach as for cyclical mastalgia',
        'Consider non-breast causes before attributing to breast pathology:',
        '— Costochondritis / Tietze\'s syndrome: tenderness at the costochondral junction',
        '— Axillary pain: muscle or lymph node origin',
        '— Referred pain: cardiac or oesophageal',
        '— Periductal mastitis: central / periareolar; associated with smoking',
        '— Idiopathic',
        'Refer to breast clinic if: specific new sign (lump, infection), or severe persistent pain unresponsive to treatment',
      ],
    },

    // ── NIPPLE DISCHARGE ──────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Nipple Discharge',
    },
    {
      type: 'table',
      headers: ['Type', 'Features', 'Action'],
      rows: [
        [
          'Physiological — DO NOT REFER',
          'Bilateral discharge\nMulti-duct discharge\nDischarge on pressure only\nYellow, green, milky, or creamy colour\nDischarge on areola from excoriation/eczema',
          'Check: prolactin + TSH if galactorrhoea in non-pregnant patient\nReview medications: COCP, antipsychotics, antiemetics (domperidone, metoclopramide), antidepressants',
        ],
        [
          'Pathological — REFER',
          'Unilateral single-duct bloodstained or watery discharge\nAssociated mass\nNew unilateral nipple inversion',
          '2WW referral for bloodstained/watery unilateral discharge\nUrgent/non-urgent referral for associated mass or nipple inversion\nCauses: duct papilloma (most common), duct ectasia, ductal carcinoma',
        ],
      ],
      caption: 'Distinguishing physiological from pathological nipple discharge',
    },

    // Nipple Changes
    {
      type: 'heading',
      level: 3,
      text: 'Nipple Changes',
    },
    {
      type: 'table',
      headers: ['Feature', 'Action'],
      rows: [
        ['Bilateral nipple inversion (longstanding)', 'DO NOT REFER — reassure'],
        ['Bilateral areola eczema with personal eczema history', 'DO NOT REFER — trial topical steroid'],
        ['New unilateral nipple inversion', 'REFER'],
        [
          'Unilateral "eczema" affecting the nipple',
          '2WW REFER — consider Paget\'s disease of the nipple (starts on nipple, eccentric spread to areola; unlike eczema which is usually periareolar first)',
        ],
      ],
      caption: 'Nipple changes — referral decisions',
    },

    // ── MASTITIS & BREAST ABSCESS ─────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Mastitis and Breast Abscess',
    },

    // Lactational Mastitis
    {
      type: 'heading',
      level: 3,
      text: 'Lactational Mastitis',
    },
    {
      type: 'list',
      items: [
        'Usually Staphylococcus aureus; presents with fever, erythema, localised pain, and hardness',
        'Encourage continued breastfeeding and regular pumping — opening blocked ducts aids resolution',
        'Warm compresses, frequent feeds from affected side',
        'If not improving within 24 hours → flucloxacillin 500 mg QDS for 10–14 days',
        'Penicillin allergy: erythromycin (preferred if pregnant/breastfeeding) or clarithromycin',
        'Suspected abscess → urgent referral to breast clinic for USS and aspiration',
      ],
    },

    // Non-Lactational Mastitis
    {
      type: 'heading',
      level: 3,
      text: 'Non-Lactational Mastitis (Periductal Mastitis)',
    },
    {
      type: 'list',
      items: [
        'Often central / periareolar; strongly associated with smoking; can be chronic or recurrent',
        'Often polymicrobial (not only Staphylococcus aureus)',
        'Antibiotic: co-amoxiclav 500/125 mg TDS for 10–14 days',
        'Penicillin allergy: erythromycin or clarithromycin + metronidazole',
        'If no improvement after 2 weeks → refer to breast clinic',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Safety Net — Inflammatory Breast Cancer',
      items: [
        'Inflammatory breast cancer can mimic mastitis (erythema, peau d\'orange, warmth, swelling).',
        'If mastitis is not resolving as expected, follow up early and have a low threshold for referral.',
        'Absence of fever or systemic upset in a non-lactating woman with persistent breast erythema should raise suspicion.',
      ],
    },

  ],
}

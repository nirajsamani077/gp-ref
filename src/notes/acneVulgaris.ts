import type { Note } from '../data/notes'

export const acneVulgaris: Note = {
  id: 'acne-vulgaris',
  title: 'Acne Vulgaris',
  subtitle: 'Classification, prescribing guide, and referral criteria for acne in primary care',
  tags: ['dermatology', 'acne', 'skin', 'scarring', 'isotretinoin', 'PCOS', 'COCP'],

  body: 'acne vulgaris mild moderate severe comedones papules pustules nodules cysts scarring nodulocystic hormonal PCOS isotretinoin roaccutane epiduo duac benzoyl peroxide adapalene tretinoin lymecycline doxycycline azelaic acid COCP dianette spironolactone pregnancy breastfeeding prescribing referral dermatology',

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Classification & Assessment',
    },
    {
      type: 'image',
      src: '/images/acne-severity.png',
      alt: 'Acne severity classification grading mild moderate severe',
      caption: 'Acne severity grading: mild (comedonal), moderate (papulopustular), severe (nodulocystic/scarring)',
    },
    {
      type: 'table',
      headers: ['Grade', 'Lesions', 'Treatment target'],
      rows: [
        ['Mild', 'Open/closed comedones ± few papules', 'Topical monotherapy or fixed-combo'],
        ['Mild–moderate', 'More papules & pustules (inflammatory)', 'Fixed-combo topical ± oral antibiotic'],
        ['Moderate', 'Widespread papules & pustules', 'Topical + oral antibiotic 12 weeks'],
        ['Severe', 'Nodules, cysts, scarring (atrophic/ice-pick or hypertrophic)', 'Refer for isotretinoin'],
        ['Acne conglobata', 'Rare; severe trunk/UL in men, nodules & sinuses (fulminans = systemic)', 'Urgent dermatology referral'],
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Key principle',
      items: [
        'Any treatment takes 6 weeks to show improvement and 3–6 months for maximum effect — always prescribe 12-week courses',
        'Aim of treatment is to prevent scarring, not just clear existing spots',
        'Enquire about androgenic symptoms (irregular periods, hirsutism) and psychosocial impact',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Skin Care Advice (All Grades)',
    },
    {
      type: 'list',
      items: [
        'Cleanse: use a non-alkaline synthetic detergent face wash BD (e.g. Acneicide, CeraVe Foaming, La Roche-Posay Effaclar) — alkaline soaps (pH >7) disrupt the slightly acidic skin barrier (pH 4–6.5) and worsen acne flora',
        'Do not over-wash or scrub — this irritates the skin and triggers more sebum production; twice daily is enough',
        'Avoid picking or squeezing spots — this worsens inflammation, increases scarring risk, and spreads bacteria',
        'Moisturise: use a light, oil-free, non-comedogenic moisturiser (especially important when starting retinoids or BPO which cause dryness) — e.g. Simple Kind to Skin, Cetaphil, La Roche-Posay Toleriane',
        'SPF daily: essential if using retinoids (photosensitising) or doxycycline; use a non-comedogenic SPF 30+ — e.g. Altruist, La Roche-Posay Anthelios',
        'Make-up: use oil-free, non-comedogenic products; mineral-based make-up is better tolerated; always remove fully before bed',
        'Avoid applying hair products (gels, waxes, oils) to the forehead — these can block follicles',
        'Diet: limited evidence but some patients notice worsening with high-glycaemic foods and dairy — worth trialling reduction if suspected',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Stepped Treatment by Grade',
    },
    {
      type: 'table',
      caption: 'Stepped care — all courses 12 weeks; extend oral antibiotics up to 6 months if partial response',
      headers: ['Grade', 'Topical (first-line)', 'Oral antibiotic', 'Key points'],
      rows: [
        [
          'Mild — comedonal',
          'Epiduo 0.1%/2.5% gel ON (adapalene + BPO)\nAlt: Differin 0.1% ON (gentler, OTC)\nIf retinoid CI: BPO 5% gel OD–BD (pregnancy/BF safe, OTC)',
          'None',
          'Start BPO wash-off method: 30–60 min then rinse, build to overnight\nEpiduo bleaches fabrics/pillowcases — warn patient\nRetinoids are teratogenic — ensure contraception',
        ],
        [
          'Mild–moderate — + papules/pustules',
          'Epiduo gel ON (first choice)\nDuac gel ON (BPO 3 or 5% + clindamycin 1%)\nAlt: Treclin ON (tretinoin + clindamycin)',
          'Usually none; add if poor response',
          'Fixed combos preferred — dual agents reduce resistance\nNEVER oral + topical antibiotic together\nRetinoid component — contraception needed',
        ],
        [
          'Moderate — widespread papulopustular',
          'Epiduo gel ON\nAzelaic acid 15% gel BD (adjunct; only option safe in pregnancy/BF)',
          '1st line: Lymecycline 408mg OD\nAlt: Doxycycline 100mg OD\n2nd line: Trimethoprim 300mg BD (monitor FBC — agranulocytosis risk)\n<12 yrs or tetracycline intolerant: Clarithromycin',
          'Combine topical + oral for 12 weeks\nExtend oral to 6 months if significant partial response\nTetracyclines: unsafe <12 yrs and in pregnancy',
        ],
        [
          'Severe — nodulocystic / scarring',
          'Continue topical while awaiting referral',
          'None routinely — isotretinoin is definitive',
          'Refer to dermatology for isotretinoin (≥12 yrs only)\nPre-referral: bloods (FBC, U&E, LFTs, fasting lipids), discuss pregnancy prevention programme\nContraception 1 month before, during, ≥1 month after',
        ],
        [
          'Pregnancy / breastfeeding',
          'BPO 5% gel (safest)\nTopical azelaic acid\nTopical erythromycin 2%',
          'Oral erythromycin 500mg BD if needed (risk-benefit)',
          'AVOID: all retinoids, tetracyclines, trimethoprim, spironolactone\nIsotretinoin absolutely contraindicated',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Antibiotic prescribing rules',
      items: [
        'NEVER prescribe oral AND topical antibiotics together — promotes bacterial resistance',
        'Tetracyclines (lymecycline, doxycycline) unsafe in pregnancy and in those under 12 years',
        'Do not use topical clindamycin or erythromycin as monotherapy — always combine with BPO',
        'Oral erythromycin (500mg BD) is the only oral antibiotic safe in pregnancy/BF — use only if benefits outweigh risks',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Specific Preparations Reference',
    },
    {
      type: 'table',
      caption: 'Common acne preparations with formulation and dosing details (Ardens/BNF)',
      headers: ['Preparation', 'Contents', 'Dose', 'Pack', 'Notes'],
      rows: [
        ['Benzoyl peroxide 5% gel (Acneicide)', 'BPO 5%', 'OD–BD to affected area', '50g', 'Safe in pregnancy/BF; OTC; bleaches fabrics'],
        ['Epiduo 0.1%/2.5% gel', 'Adapalene 0.1% + BPO 2.5%', 'Thinly ON', '45g', 'First-line; dual action reduces resistance'],
        ['Epiduo Forte 0.3%/2.5% gel', 'Adapalene 0.3% + BPO 2.5%', 'Thinly ON', '45g', 'Stronger — for non-responders to standard Epiduo'],
        ['Duac 3%/1% gel', 'BPO 3% + Clindamycin 1%', 'OD at night', '30g', 'Avoid with oral antibiotics'],
        ['Duac 5%/1% gel', 'BPO 5% + Clindamycin 1%', 'OD at night', '30g', 'Higher BPO strength'],
        ['Treclin 1%/0.025% gel', 'Clindamycin 1% + Tretinoin 0.025%', 'Thinly at night', '30g', 'WCBA: ensure contraception; retinoid component'],
        ['Differin 0.1% cream/gel', 'Adapalene 0.1%', 'ON', '45g', 'Gentler retinoid; available OTC'],
        ['Azelaic acid 15% gel (Skinoren)', 'Azelaic acid 15%', 'BD', '30g', 'Safe in pregnancy/BF; helps PIH'],
        ['Azelaic acid 20% cream', 'Azelaic acid 20%', 'BD', '30g', 'Only licensed for face'],
        ['Lymecycline 408mg capsules', 'Lymecycline', 'One capsule OD', '84 caps', 'First-line oral; can take with food'],
        ['Doxycycline 100mg capsules', 'Doxycycline', 'One capsule OD', '84 caps', 'Take with food; photosensitising; avoid lying down after'],
        ['Erythromycin 250mg gastro-resistant', 'Erythromycin', 'Two tablets BD (500mg BD)', '336 tabs', 'Only oral abx safe in pregnancy/BF'],
        ['Trimethoprim 100mg tablets', 'Trimethoprim', 'Three tablets BD (300mg BD)', '504 tabs', '2nd line; risk of severe skin reaction, agranulocytosis'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Hormonal Acne',
    },
    {
      type: 'list',
      items: [
        'Consider PCOS if: irregular periods, hirsutism, weight gain — check FAI, LH/FSH, testosterone, SHBG, pelvic USS',
        'COCP: effective for hormonal acne — prefer lower-oestrogen pills (e.g. Mercilon or Eloine, 20mcg EE)',
        'Can tricycle COCP to reduce hormone fluctuation',
        'If standard COCP not working: consider Dianette (co-cyprindiol) — higher VTE risk; use for 3 months only then switch; risk higher if repeatedly stopping and starting',
        'Spironolactone: specialist-initiated; 50mg OD (max 200mg); check U&E first; not for men (gynaecomastia) or in pregnancy (feminisation of male fetus)',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Acne in Pregnancy / Breastfeeding',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Safe options in pregnancy & breastfeeding',
      items: [
        'Topical BPO — safe; preferred first choice',
        'Topical azelaic acid 15% or 20% — safe',
        'Topical erythromycin 2% — safe',
        'Oral erythromycin 500mg BD — consider if severe, depending on risk-benefit',
        'AVOID: all retinoids (Epiduo, Differin, Treclin, isotretinoin), tetracyclines (lymecycline, doxycycline), trimethoprim, spironolactone',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Referral Criteria',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'When to refer to dermatology',
      items: [
        'Any scarring — refer urgently or semi-urgently; do not delay to prevent permanent damage',
        'Post-inflammatory hyperpigmentation persisting — early referral for isotretinoin consideration',
        'Failed 2× courses of 3-month oral antibiotics combined with fixed-combo topical (Epiduo)',
        'Previous course of isotretinoin (relapse)',
        'Significant psychological distress',
        'Acne conglobata or acne fulminans (rare; may need systemic steroids)',
        'Pre-referral preparation: discuss pregnancy prevention programme, arrange baseline bloods (FBC, U&E, LFTs, fasting lipids)',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Pathophysiology & Triggers',
    },
    {
      type: 'image',
      src: '/images/Acne-vulgaris-comedones-papules-pustules-nodules-cysts-Whiteheads-Blackheads.jpg',
      alt: 'Acne vulgaris lesion types comedones papules pustules nodules cysts whiteheads blackheads',
      caption: 'Acne lesion morphology: open comedones (blackheads), closed comedones (whiteheads), papules, pustules, nodules, and cysts',
    },
    {
      type: 'list',
      items: [
        'Blockage of pilosebaceous units with sebum/keratin → anaerobic growth of Cutibacterium acnes → inflammation',
        'Hormonal drivers: androgens at puberty, PCOS, hormonal fluctuation',
        'Drug-induced acne: corticosteroids, progestogen-only pill (POP), lithium, phenytoin, anabolic steroids',
        'Aggravating factors: smoking, comedogenic products, mechanical friction (helmet, phone against face)',
        'DDx: rosacea (no comedones, flushing, telangiectasia), perioral dermatitis, folliculitis, keratosis pilaris (harmless dry skin keratin plugs)',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Treatment Pathway',
    },
    {
      type: 'image',
      src: '/images/acne-pathway.jpeg',
      alt: 'Acne vulgaris treatment pathway by severity',
      caption: 'PCDS acne treatment pathway by severity',
    },
    {
      type: 'image',
      src: '/images/Acne-Pathway-2024-final-proof-1.jpg',
      alt: 'PCDS 2024 acne primary care treatment algorithm full pathway',
      caption: 'PCDS 2024 — full primary care acne prescribing pathway',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Acne Scarring',
    },
    {
      type: 'image',
      src: '/images/acne-scar.webp',
      alt: 'Types of acne scarring ice-pick boxcar rolling atrophic hypertrophic keloid',
      caption: 'Acne scar types: ice-pick (deep, narrow), boxcar (broad depression), rolling (wave-like); hypertrophic and keloid variants',
    },
    {
      type: 'list',
      items: [
        'Atrophic (most common): ice-pick (deep, narrow), boxcar (broad depression), rolling (wave-like)',
        'Hypertrophic: raised, firm — common on chest/back',
        'Keloid: extends beyond original lesion boundary — more common in darker skin tones',
        'Post-inflammatory hyperpigmentation (PIH): flat discolouration, not true scarring — can persist months; azelaic acid helps',
        'Any scarring = refer early; do not wait for multiple failed treatment courses',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Maintenance & Follow-up',
    },
    {
      type: 'list',
      items: [
        'Consider maintenance Epiduo or BPO monotherapy after successful treatment to prevent relapse',
        'Review response at 12 weeks; extend oral antibiotics to 6 months if significant partial response',
        'After isotretinoin: 50% cured after 1 course; refer again for 2nd course if relapse (acitretin requires contraception for 2 years after stopping)',
        'Signpost: Acne Support (acnesupport.org.uk) — patient information and peer support',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Camden Acne Summary', url: '/pdfs/acne-camden-summary.pdf' },
        { label: 'Wiltshire Prescribing Guide', url: '/pdfs/acne-prescribing-guide-wiltshire.pdf' },
        { label: 'Dorset Treatment Pathway', url: '/pdfs/acne-treatment-pathway-dorset.pdf' },
        { label: 'PCDS Acne Guidelines', url: 'https://www.pcds.org.uk/clinical-guidance/acne-vulgaris' },
        { label: 'CKS Acne Vulgaris', url: 'https://cks.nice.org.uk/topics/acne-vulgaris/' },
      ],
    },
  ],
}

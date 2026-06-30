import type { Note } from '../data/notes'

export const legUlcers: Note = {
  id: 'leg-ulcers',
  title: 'Leg Ulcers & Wounds',
  subtitle: 'Venous vs arterial vs neuropathic, ABPI before compression, infection and pressure sores',
  tags: ['dermatology', 'vascular'],

  body: `leg ulcer venous arterial neuropathic mixed ABPI compression bandaging stockings gaiter varicose eczema lipodermatosclerosis flucloxacillin doppler tissue viability dressings TIME biofilm pressure sore grading pentoxifylline`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Leg Ulcer (Venous)', url: 'https://cks.nice.org.uk/topics/leg-ulcer-venous/' },
        { label: 'NICE CKS — Pressure Ulcers', url: 'https://cks.nice.org.uk/topics/pressure-ulcers/' },
        { label: 'Legs Matter', url: 'https://www.legsmatter.org/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Classify the Ulcer' },

    {
      type: 'table',
      headers: ['Type', 'Typical features', 'Management direction'],
      rows: [
        ['Venous (~80% of leg ulcers)', 'Gaiter area (medial malleolus), shallow, sloughy, irregular; surrounding venous changes (varicose eczema, haemosiderin staining, lipodermatosclerosis); related to varicose veins, prior DVT, obesity', 'Compression (after ABPI), leg elevation, emollients; refer for varicose vein treatment'],
        ['Arterial (~20% of leg, common on the foot)', 'Pressure points/distal, "punched-out", deep, necrotic, painful (worse on elevation); absent pulses, signs of PVD', 'Check ABPI, refer vascular; do NOT compress; secondary prevention (antiplatelet, statin, smoking cessation)'],
        ['Neuropathic (~80% of foot ulcers)', 'Sole/toe pressure points, deep, painless (loss of sensation); diabetes', 'Offload pressure, optimise diabetes, podiatry/diabetic foot MDT'],
        ['Mixed', 'Features of more than one — common in practice', 'ABPI guides safety of compression; often specialist-led'],
      ],
      caption: 'Assessment essentials: neurovascular status, signs of infection, footwear — and ALWAYS an ABPI before applying compression.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'ABPI & Compression',
      items: [
        'Measure ABPI before compression bandaging/stockings',
        'ABPI <0.8 is a relative contraindication to compression; <0.5 indicates critical ischaemia — do NOT compress and refer vascular urgently',
        'ABPI 0.8–1.3 generally permits full compression (the mainstay of venous ulcer healing); 0.5–0.8 only under specialist guidance (reduced/modified compression)',
        'A falsely high ABPI (>1.3) occurs with calcified vessels (diabetes, CKD) — interpret with caution and consider toe-brachial pressures',
      ],
    },

    { type: 'heading', level: 2, text: 'Wound Care & Dressings' },

    {
      type: 'list',
      items: [
        'Use the TIME framework: Tissue (viable/non-viable), Infection/inflammation, Moisture balance, Edge of wound',
        'Choose dressings with the practice/tissue-viability nurse and local ICB formulary (adherent vs non-adherent, absorbency, change frequency)',
        'Beware biofilm — a gelatinous colonised layer that impairs healing and can mimic infection',
        'Refer to the tissue viability team for non-healing wounds, and to a leg ulcer/vascular clinic if not improving',
        'Pentoxifylline (off-licence, specialist) can aid venous ulcer healing',
      ],
    },

    { type: 'heading', level: 2, text: 'Infection' },

    {
      type: 'list',
      items: [
        'Suspect infection with increasing pain, spreading erythema/cellulitis, purulent discharge, or systemic features — wound colonisation is common and does NOT itself need antibiotics',
        'First-line (if infected): flucloxacillin 500 mg–1 g QDS for 7–10 days (clarithromycin/doxycycline if penicillin-allergic; erythromycin in pregnancy); second-line co-amoxiclav',
        'Do not swab routinely at first presentation — swab only if not responding; refer/admit if systemically unwell, immunocompromised, neurovascular compromise, or features of osteomyelitis/necrotising fasciitis (needs urgent imaging + IV antibiotics)',
      ],
    },

    { type: 'heading', level: 2, text: 'Pressure Sores (Grading)' },

    {
      type: 'list',
      items: [
        'Grade 1: non-blanching erythema of intact skin; Grade 2: partial-thickness loss (abrasion/blister); Grade 3: full-thickness skin loss down to fascia; Grade 4: extensive loss with muscle/bone involvement',
        'Management: pressure redistribution (repositioning, specialist mattress/cushion), keep the wound moist (hydrocolloid/gel dressings), avoid soap, optimise nutrition, and debride/antibiotics only if clinically indicated; involve the tissue viability nurse',
        'Prevention is key in immobile/frail patients — risk assessment (e.g. Waterlow), skin inspection, repositioning',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'pvd', label: 'Peripheral Vascular Disease', subtitle: 'Arterial ulcers, ABPI and revascularisation' },
        { id: 'diabetic-foot', label: 'Diabetic Foot', subtitle: 'Neuropathic/neuro-ischaemic foot ulcers and the MDT' },
        { id: 'cellulitis', label: 'Cellulitis & Skin Infections', subtitle: 'Distinguishing infection from venous changes' },
        { id: 'dvt', label: 'DVT', subtitle: 'Post-thrombotic syndrome and venous insufficiency' },
      ],
    },

  ],
}

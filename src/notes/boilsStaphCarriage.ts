import type { Note } from '../data/notes'

export const boilsStaphCarriage: Note = {
  id: 'boils-staph-carriage',
  title: 'Boils, Carbuncles & Staphylococcal Carriage',
  subtitle: 'Management of skin abscesses, boils, carbuncles and MRSA/MSSA decolonisation protocols',
  tags: ['infection', 'dermatology', 'prescribing'],

  body: 'boil furuncle carbuncle abscess staphylococcus aureus MSSA MRSA decolonisation nasal carriage mupirocin naseptin chlorhexidine flucloxacillin skin infection incision drainage recurrent boils staph carriage protocol',

  content: [

    // ── ACUTE MANAGEMENT ─────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Acute Boil / Abscess — Initial Management' },

    {
      type: 'table',
      headers: ['Feature', 'Management'],
      rows: [
        ['Fluctuant abscess / pointing boil', 'Incision and drainage (I&D) — most effective treatment; antibiotics alone are insufficient for established abscess'],
        ['Early boil (no fluctuance)', 'Warm compresses to promote pointing; oral flucloxacillin if cellulitis surrounding, systemically unwell, or immunocompromised'],
        ['Cellulitis around boil', 'Oral flucloxacillin 500 mg QDS 5–7 days; review in 48 hours'],
        ['Systemic features (fever, rigors)', 'Hospital admission — IV antibiotics and surgical drainage'],
        ['Carbuncle (multiple follicles)', 'Usually require I&D + antibiotics; often larger, deeper, more systemic features'],
        ['Swab', 'Send for MC&S to guide antibiotic choice and identify MRSA vs MSSA'],
      ],
      caption: 'I&D is the definitive treatment for any fluctuant collection. Antibiotics alone will not resolve a pointing abscess.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Recurrent Boils — Consider Decolonisation',
      items: [
        'Recurrent boils (≥3 episodes in 12 months) suggest nasal/perineal Staphylococcus aureus carriage',
        'Swab: anterior nares, perineum, axillae, groin — send for MC&S and MRSA screen',
        'Consider household contacts — MSSA/MRSA can spread within families; screen and treat together',
        'Underlying conditions to exclude: diabetes mellitus (check HbA1c), immunodeficiency, iron deficiency',
        'Do NOT start decolonisation until the acute infection has fully resolved',
      ],
    },

    // ── DECOLONISATION PROTOCOL ──────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Decolonisation Protocol (MSSA/Nasal Carriage)' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Important — Do NOT start decolonisation until acute infection has resolved',
      items: [
        'Decolonisation is a prevention strategy — it will not treat active infection',
        'All sites (nasal, skin, hair) must be treated simultaneously for decolonisation to be effective',
        'Treat all household contacts at the same time to prevent re-colonisation',
        'Wash bedlinen and towels daily during the decolonisation course',
      ],
    },

    { type: 'heading', level: 3, text: 'Nasal Decolonisation' },

    {
      type: 'table',
      headers: ['Drug', 'Formulation', 'Dose & Frequency', 'Notes'],
      rows: [
        ['Naseptin nasal cream (chlorhexidine + neomycin)', '15 g tube', 'Apply to BOTH nostrils FOUR times daily for 10 days', 'Check peanut and soya allergy before prescribing — neomycin + arachis oil (peanut oil) formulation. IMPORTANT: Naseptin has been reformulated as peanut-free, however BOTH formulations will be in circulation until November 2025 — verify which formulation you are dispensing. Avoid if peanut/soya allergy until old stock is cleared.'],
        ['Mupirocin 2% nasal ointment (Bactroban)', '3 g tube', 'Apply to BOTH nostrils 2–3 times daily for 5 days', 'First-line for MRSA decolonisation; also effective for MSSA. Preferred if peanut/soya allergy. Use a cotton bud or fingertip — press nostrils together afterwards to spread. Check local MRSA decolonisation policy.'],
      ],
      caption: 'Both agents are effective for nasal decolonisation. Mupirocin is preferred if MRSA confirmed or peanut allergy. Resistance to mupirocin can develop — reserve for confirmed MRSA where possible.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Naseptin — Peanut Oil Alert',
      items: [
        'Original Naseptin contains arachis oil (peanut oil) — contraindicated in peanut and soya allergy',
        'Naseptin has now been reformulated to be FREE FROM peanut oil — but BOTH the old and new formulations are in circulation until November 2025',
        'Until old stock is cleared: always check peanut/soya allergy status before prescribing; if allergy present, prescribe mupirocin nasal ointment instead',
        'Neomycin in Naseptin may also cause contact sensitisation — switch to mupirocin if skin irritation occurs',
      ],
    },

    { type: 'heading', level: 3, text: 'Skin & Body Wash Decolonisation' },

    {
      type: 'table',
      headers: ['Drug', 'Formulation', 'Instructions'],
      rows: [
        ['Chlorhexidine gluconate 4% solution (e.g. Hibiscrub)', '500 ml bottle', 'Use DAILY as liquid soap in the bath, shower, or sink for 5 days. Use as a shampoo on days 1, 3, and 5. Leave on skin for 1 minute before rinsing. Avoid eyes, ears, mucous membranes and genitalia.'],
        ['Dermol 500 lotion (chlorhexidine 0.1% + benzalkonium chloride 0.1%)', '500 ml bottle', 'Apply TWO to FOUR times a day as leave-on moisturiser or use as a soap substitute. Particularly useful if skin is dry/eczematous during decolonisation course.'],
      ],
      caption: 'Chlorhexidine 4% is the standard body wash for decolonisation. Dermol 500 can be used alongside as a moisturising wash, or as an alternative if skin is sensitive. Do not use neat chlorhexidine on broken skin.',
    },

    // ── ORAL ANTIBIOTICS ──────────────────────────────────────────────────────────
    { type: 'heading', level: 3, text: 'Oral Antibiotic Treatment (Acute Infection)' },

    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Duration', 'Notes'],
      rows: [
        ['Flucloxacillin 500 mg capsules', 'ONE capsule FOUR times daily (on an empty stomach)', '7 days', 'Double the dose (1 g QDS) if infection is severe. First-line for MSSA skin infection. Must be taken 30–60 minutes before food — poor absorption with food.'],
        ['Clarithromycin 250–500 mg', 'ONE tablet TWICE daily', '5–7 days', 'If penicillin allergy (non-anaphylactic); check local resistance patterns'],
        ['Clindamycin 300 mg', 'ONE capsule FOUR times daily', '7 days', 'Good tissue penetration; alternative for penicillin allergy or deep tissue infections. Risk of C. difficile — counsel patient.'],
        ['Co-trimoxazole (trimethoprim/sulfamethoxazole)', 'Two 480 mg tablets (960 mg) TWICE daily', '7 days', 'Good MRSA activity in community-acquired MRSA (CA-MRSA); use if MRSA confirmed and mupirocin-resistant or extensive'],
      ],
      caption: 'Flucloxacillin is first-line for MSSA skin infections. Antibiotic choice for MRSA should be guided by sensitivity results and local MRSA protocol. Oral antibiotics are adjunctive to I&D — they do not replace drainage.',
    },

    // ── HOUSEHOLD AND GENERAL ADVICE ─────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Patient & Household Advice' },

    {
      type: 'list',
      items: [
        'Wash hands frequently, particularly after touching the affected area',
        'Do not squeeze or burst boils — increases risk of spreading infection',
        'Use separate towels and flannels — do not share with household contacts',
        'Wash bedlinen, towels and clothing in hot wash (60°C) during the decolonisation course',
        'Treat all household members simultaneously if recurrent/shared infections',
        'Avoid close skin contact (contact sports, gym equipment) until infection resolved',
        'Advise patient to keep wounds covered with a clean dry dressing',
        'Review after decolonisation course — repeat nasal swab 2 days after completing treatment to confirm clearance',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Boils, Carbuncles & Staph Carriage', url: 'https://cks.nice.org.uk/topics/boils-carbuncles-staphylococcal-carriage/' },
        { label: 'BNF — Skin Infections', url: 'https://bnf.nice.org.uk/treatment-summaries/skin-infections-antibacterial-therapy/' },
        { label: 'PHE — MRSA decolonisation guidance', url: 'https://www.gov.uk/government/publications/mrsa-guidance-on-diagnosis-screening-and-decolonisation-treatment' },
      ],
    },

  ],
}

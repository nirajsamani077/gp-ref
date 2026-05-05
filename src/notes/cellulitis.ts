import type { Note } from '../data/notes'

export const cellulitis: Note = {
  id: 'cellulitis',
  title: 'Cellulitis & Skin Infections',
  subtitle: 'Diagnosis, differential from venous stasis dermatitis, antibiotic choice and red flags',
  tags: ['dermatology', 'infection'],

  body: 'cellulitis skin infection erysipelas flucloxacillin clarithromycin co-amoxiclav venous stasis dermatitis DVT eczema lipodermatosclerosis haemosiderin leg raise test bilateral cellulitis NVI neurovascular inspection NVi Eron severity LRINEC necrotising fasciitis nec fasc GAS group A streptococcus recurrent prophylaxis penicillin V erythromycin compression stockings lymphoedema PVD peripheral vascular disease diabetic lower limb',

  content: [

    // ── DIAGNOSIS & DIFFERENTIAL ──────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'warning',
      title: 'Cellulitis is Commonly Misdiagnosed',
      items: [
        'The most common mimics: venous stasis/varicose eczema, lipodermatosclerosis, DVT, superficial thrombophlebitis, lymphoedema, contact dermatitis',
        'Bilateral lower leg redness = almost NEVER true cellulitis — think venous stasis dermatitis',
        'Venous signs: haemosiderin staining (brownish discolouration), lipodermatosclerosis (white waxy skin), scaling, crusting, itch — bilateral and chronic',
        'Leg raise test: if redness disappears with elevation → venous cause more likely; if remains → cellulitis more likely',
        'True cellulitis: unilateral, spreading, warm, tender, systemic features possible (fever, rigors)',
        'Do NOT routinely swab cellulitis — only swab if failed initial antibiotic treatment or suspected tropical infection',
      ],
    },

    { type: 'heading', level: 2, text: 'Neurovascular Inspection (NVI)' },

    {
      type: 'list',
      items: [
        'Always assess pulses (dorsalis pedis, posterior tibial) and sensation in lower limb cellulitis',
        'Absent pulses or signs of PVD (thin shiny skin, hair loss, pallor on elevation) → high risk case — IV antibiotics and vascular/tissue viability input',
        'Diabetic foot: cellulitis in diabetic patient is a foot emergency — refer same day to diabetic foot team or hospital',
        'Consider DVT (especially if unilateral leg swelling) — D-dimer and Wells score; CT/duplex USS if indicated',
      ],
    },

    { type: 'heading', level: 2, text: 'Severity Grading (Eron Classification)' },

    {
      type: 'table',
      headers: ['Class', 'Description', 'Management'],
      rows: [
        ['Class I', 'No systemic signs; no comorbidities', 'Oral antibiotics — manage in community; review at 48 hours'],
        ['Class II', 'Mild systemic illness (e.g. mild fever) OR significant comorbidity (PVD, DM, obesity)', 'Consider outpatient IV antibiotics (OPAT) or low threshold to admit; review at 48 hours'],
        ['Class III', 'Significant systemic signs (HR >100, RR >25) or limb-threatening (PVD, DM foot)', 'Admit for IV antibiotics'],
        ['Class IV', 'Sepsis or suspected necrotising fasciitis', 'Emergency admission — immediate IV antibiotics and surgical review'],
      ],
    },

    // ── ANTIBIOTIC TREATMENT ──────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Antibiotic Treatment' },

    {
      type: 'table',
      headers: ['Situation', 'Antibiotic', 'Dose / Duration', 'Notes'],
      rows: [
        ['Standard cellulitis (limb)', 'Flucloxacillin', '500 mg QDS for 5–7 days (1 g QDS if severe or PVD/DM — off-label high dose)', 'First-line for non-facial cellulitis — covers Staphylococcus and Streptococcus'],
        ['Penicillin allergy', 'Clarithromycin', '500 mg BD for 5–7 days', 'If true penicillin allergy (not just intolerance); cover both Staph and Strep'],
        ['Facial cellulitis', 'Co-amoxiclav', '625 mg TDS for 5–7 days', 'Broader cover needed for facial cellulitis — risk of orbital/intracranial spread'],
        ['Facial — penicillin allergy', 'Clarithromycin 500 mg BD + Metronidazole 400 mg TDS', 'For 5–7 days', 'Anaerobic cover added for metronidazole in facial infections'],
        ['Lymphoedema-associated', 'Amoxicillin 500 mg TDS', 'For 14 days', 'Better tissue penetration for lymphoedema; Streptococcal predominance'],
        ['Diabetic foot cellulitis', 'Co-amoxiclav 625 mg TDS OR hospital referral for IV', '5–7 days (or hospital)', 'Polymicrobial — refer to diabetic foot team urgently; NICE recommends hospital assessment'],
      ],
      caption: 'Mark the border of cellulitis with a skin pen at first assessment — essential for monitoring spread at the 48-hour review. Extend treatment if not improving. If IV required: flucloxacillin 1–2 g QDS IV (hospital) or consider OPAT service.',
    },

    // ── REVIEW & MONITORING ───────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Review Protocol',
      items: [
        'Mark cellulitis border with a marker pen at first assessment — compare at 48-hour review',
        '48-hour review: assess for spreading erythema beyond mark, systemic signs, pain level',
        'If improving: complete course; if spreading or not improving: step up (IV antibiotics or admit)',
        '7-day review to confirm resolution and consider recurrence prevention',
        'Blood results: WBC, CRP useful to monitor if severe — not required in all mild cases',
      ],
    },

    // ── RECURRENT CELLULITIS ──────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Recurrent Cellulitis — Prevention' },

    {
      type: 'list',
      items: [
        'If ≥2 episodes at the same site within the last year: consider prophylactic antibiotics',
        'Refer to dermatology for assessment and decision regarding prophylaxis',
        'Prophylaxis: Phenoxymethylpenicillin (Pen V) 250 mg BD OR Erythromycin 250 mg BD (if penicillin allergy)',
        'Review at 6 months — consider stopping if episodes controlled (similar approach to UTI prophylaxis)',
        'Address contributing factors: compression stockings for venous insufficiency, skin hygiene and emollients, tinea pedis treatment (interdigital cracking = entry point for bacteria)',
        'Weight management — obesity is a significant risk factor for recurrent lower limb cellulitis',
      ],
    },

    // ── NECROTISING FASCIITIS ─────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Necrotising Fasciitis — Do Not Miss',
      items: [
        'Rare but life-threatening — rapidly progressive subcutaneous infection (usually Group A Streptococcus or polymicrobial)',
        'Features: severe pain disproportionate to appearance, rapid progression, dusky/grey skin, gas in tissues (crepitus), haemorrhagic bullae, systemic sepsis',
        'Progresses to gas gangrene, necrosis, multi-organ failure',
        'Use LRINEC score (blood results) — score ≥6 warrants urgent surgical assessment',
        'Time-sensitive emergency: immediate hospital admission, IV antibiotics, urgent surgical debridement',
        'Do NOT delay admission for investigations — this is a clinical diagnosis requiring immediate action',
      ],
    },

    // ── LOCAL REFERRAL ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Admit for IV antibiotics (Class III/IV): UHDB Queen\'s Hospital Burton — A&E or acute medical take',
        'Necrotising fasciitis / surgical emergency: UHDB Burton A&E — immediate 999',
        'OPAT (outpatient IV antibiotics): check availability via UHDB Burton; some ICBs arrange via community nursing',
        'Dermatology (recurrent cellulitis, prophylaxis decision): UHDB Burton or Cannock Chase Hospital',
        'Diabetic foot emergency: refer same day to UHDB Burton diabetic foot team (or specialist nurse)',
        'Tissue viability / wound care: community tissue viability nurse — referral via GP or district nurse',
        'Patient may prefer alternative local site — discuss at consultation',
      ],
    },

    // ── SAFETY NETTING ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — When to Act Urgently',
      items: [
        '999 / A&E: rapidly spreading redness, severe pain disproportionate to appearance, bullae, grey/dusky skin (necrotising fasciitis), fever >38.5°C + systemically unwell, hypotension',
        'Same-day GP: spreading beyond marked border at 48-hour review, worsening pain, new systemic symptoms, diabetic foot with any infection signs',
        'Red flags: pain disproportionate to visible skin changes (necrotising fasciitis), rapidly expanding erythema despite 48 hours of antibiotics, new blister formation',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Cellulitis', url: 'https://cks.nice.org.uk/topics/cellulitis-acute/' },
        { label: 'NICE NG141 — Skin and Soft Tissue Infections', url: 'https://www.nice.org.uk/guidance/ng141' },
        { label: 'UKHSA — Cellulitis Antibiotic Guidelines', url: 'https://www.gov.uk/government/publications/cellulitis-antimicrobial-prescribing-guidelines' },
        { label: 'Leg Health — Venous Stasis Eczema vs Cellulitis', url: 'https://www.legsforlife.org.uk/' },
        { label: 'NHS — Cellulitis', url: 'https://www.nhs.uk/conditions/cellulitis/' },
      ],
    },
  ],
}

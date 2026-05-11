import type { Note } from '../data/notes'

export const atopicEczema: Note = {
  id: 'atopic-eczema',
  title: 'Atopic Eczema',
  subtitle: 'Emollients, steroid ladder, eczema herpeticum and special site management',
  tags: ['dermatology'],

  body: 'atopic eczema dermatitis emollient steroid ladder 1% hydrocortisone betamethasone valerate Betnovate dermovate clobetasol potassium permanganate tacrolimus protopic pimecrolimus calcineurin inhibitor eczema herpeticum herpes simplex antiviral aciclovir discoid venous gravitational stasis pompholyx hand eczema hyperkeratotic fucidin fusidic acid bacterial superinfection tachyphylaxis weekend regime maintenance',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Eczema Management Principles',
      items: [
        'Two pillars: emollients (maintain the skin barrier continuously) + topical steroids (treat flares)',
        'Emollients: use liberally — 2–4 × 500g tubs/month; use even when eczema-free; use as soap substitute; ointments for very dry skin, creams for less dry',
        'Topical steroids: use only during flares, once or twice daily for 7–14 days (or until 2 days after clear); step up ladder if not improving after 5–7 days',
        'Antihistamines: only offer if severe itch interfering with sleep — sedating (e.g. chlorphenamine) for 7–14 days; non-sedating (e.g. cetirizine) if needed for 1 month',
        'Patient education: Eczema Care Online (free, NIHR-funded, online self-management programme) — signpost all patients',
      ],
    },

    { type: 'heading', level: 2, text: 'Emollient Prescribing' },

    {
      type: 'list',
      items: [
        'Prescribe 2–4 × 500g tubs per month for adults; less for children',
        'Use same emollient as soap substitute — do NOT use soap or shower gel',
        'Bath emollients for children: NOT cost-effective — dilute emollient in small amount of hot water instead',
        'Shampoo: eczema-friendly unperfumed shampoo; rinse out thoroughly',
        'Apply emollient first; leave 30 minutes before applying steroid (or apply steroid first — the gap matters more than order)',
        'Emollient is NOT a treatment for flares — steroids are; emollient prevents them',
      ],
    },

    { type: 'heading', level: 2, text: 'Topical Steroid Ladder' },

    {
      type: 'table',
      headers: ['Potency', 'Example', 'Typical Use'],
      rows: [
        ['Mild', '1% hydrocortisone; Eumovate (clobetasone butyrate 0.05%)', 'Face, genitals, axillae; children; first-line for mild disease; short courses only on face'],
        ['Moderate', 'Betnovate-RD (betamethasone 0.025%)', 'Body and limbs; step up from mild if insufficient response'],
        ['Potent', 'Betnovate (betamethasone 0.1%); Elocon (mometasone 0.1%)', 'Body and limbs; common workhorse; also scalp applications available'],
        ['Very potent', 'Dermovate (clobetasol propionate 0.05%)', 'Reserve for severe, resistant disease on body (NOT face/genitals); hand eczema; under occlusion'],
      ],
      caption: 'Safe to use up to 100g steroid/month alongside 1000g emollient/month for adults. In children, halve the steroid quantities. Weekend maintenance regime: apply potent steroid 2 nights per week to chronically affected areas to reduce flares (up to 6 months).',
    },

    { type: 'heading', level: 2, text: 'Site-Specific Management' },

    {
      type: 'table',
      headers: ['Site / Type', 'First-Line', 'Notes'],
      rows: [
        ['Face / genitals / neck', '1% hydrocortisone OD/BD or Eumovate short course', 'Can switch to tacrolimus 0.1% (adults) or 0.03% (<2 years) if using regular hydrocortisone — Protopic ointment or Pimecrolimus cream; no skin atrophy risk'],
        ['Trunk and limbs', 'Step up steroid ladder based on severity', 'Start mild, increase to potent if no improvement in 7 days'],
        ['Hand eczema (pompholyx, hyperkeratotic)', 'Super-potent steroid (Dermovate) under occlusion — cotton gloves or cling film overnight', 'If weeping: dry with potassium permanganate 1:10,000 soaks. Hyperkeratotic/scaly: Diprosalic ointment (betamethasone + salicylic acid) under occlusion'],
        ['Scalp', 'Betnovate or Dermovate scalp application', 'If too stinging: try Synalar (fluocinolone acetonide)'],
        ['Discoid eczema', 'Potent steroid OD until settled (usually 6 weeks)', 'Discrete itchy patches with crusting (not advancing like fungal infection). Consider mycology scraping if unsure.'],
        ['Venous/gravitational stasis eczema', 'Copious emollient ointments (large spoon quantities); potent steroid short bursts; tacrolimus 0.1% maintenance', 'Medicated bandages (Zipzoc or Viscopaste) twice weekly for 6–8 weeks. Long-term: Class II made-to-measure compression hosiery + exercise.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Eczema Herpeticum — Dermatological Emergency' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Eczema Herpeticum — Same-Day Admission',
      items: [
        'Rapidly worsening eczema + systemic upset + scattered vesicles/punched-out erosions',
        'Caused by herpes simplex (HSV) spreading on eczematous skin — even a cold sore in an atopic person can trigger this',
        'Any atopic patient with a cold sore (HSV labialis) should be given aciclovir as prophylaxis or at onset',
        'ADMIT urgently: IV antibiotics (secondary bacterial infection is common) + IV/oral aciclovir; take swabs for confirmation',
        'Do NOT be falsely reassured by negative swab — treat empirically if clinical picture fits',
      ],
    },

    { type: 'heading', level: 2, text: 'Secondary Infection' },

    {
      type: 'list',
      items: [
        'Bacterial (Staphylococcus aureus): weeping, crusting, worsening eczema — check nasal carriage (MRSA if resistant)',
        'Localised bacterial: Fucibet cream OD/BD (fusidic acid + betamethasone) or fucidin TDS for 7–10 days',
        'Widespread bacterial superinfection: oral flucloxacillin 500mg QDS for 7 days',
        'Fungal (tinea): steroid can change appearance of tinea (loss of distinct advancing edge); take skin scrapings; stop steroid and use topical or oral antifungal for 2 weeks',
        'Tachyphylaxis: loss of response after repeated steroid use — switch to alternative steroid or tacrolimus',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Dermatology referral: UHDB Queen\'s Hospital Burton dermatology — via e-RS for refractory/severe eczema; include steroid ladder used, triggers, emollient compliance',
        'Alternative: Good Hope Hospital (UHB) dermatology',
        'Eczema herpeticum: UHDB Burton A&E — same-day admission',
        'Allergy testing (patch testing for allergic contact component): UHDB Burton dermatology allergy clinic',
        'Patient resources: National Eczema Society (eczema.org); Eczema Care Online (eczemacaresonline.org.uk)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Atopic Eczema', url: 'https://cks.nice.org.uk/topics/eczema-atopic/' },
        { label: 'NICE NG190 — Atopic Eczema in Children', url: 'https://www.nice.org.uk/guidance/ng190' },
        { label: 'National Eczema Society', url: 'https://eczema.org/' },
        { label: 'Eczema Care Online', url: 'https://www.eczemacaresonline.org.uk/' },
        { label: 'BAD — Eczema Guidelines', url: 'https://www.bad.org.uk/healthcare-professionals/clinical-standards/clinical-guidelines/atopic-eczema' },
      ],
    },
  ],
}

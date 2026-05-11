import type { Note } from '../data/notes'

export const gca: Note = {
  id: 'gca',
  title: 'Giant Cell Arteritis (GCA)',
  subtitle: 'Same-day blood tests and prednisolone, temporal artery biopsy and steroid tapering',
  tags: ['rheumatology', 'ophthalmology'],

  body: 'giant cell arteritis GCA temporal arteritis polymyalgia rheumatica PMR ESR CRP elevated age over 50 temporal headache scalp tenderness jaw claudication visual symptoms RAPD temporal artery biopsy TAB prednisolone high dose steroid taper dipropionate CT angiography duplex ultrasound urgent ophthalmology bone protection PPI steroid sick day rules',

  content: [
    {
      type: 'callout',
      variant: 'danger',
      title: 'GCA — Same-Day Urgency',
      items: [
        'GCA is a medical emergency — sudden, irreversible visual loss can occur without warning',
        'SUSPECT in anyone >50 with: subacute new temporal/occipital headache, jaw claudication, scalp tenderness, visual symptoms',
        'Same-day bloods: ESR, CRP, FBC',
        'If GCA is the most likely diagnosis: START PREDNISOLONE 60 mg ORALLY — DO NOT WAIT for biopsy results',
        'If ANY visual symptoms (amaurosis fugax, diplopia, RAPD, pale optic disc): SAME-DAY ophthalmology referral',
        'If no visual symptoms: same-day (or urgent within 24h) rheumatology referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features' },

    {
      type: 'table',
      headers: ['Feature', 'Detail'],
      rows: [
        ['Headache', 'New, subacute-onset temporal, frontal or occipital headache — different from previous headaches; often severe'],
        ['Temporal artery', 'Tender, thickened, nodular or absent pulse over temporal artery'],
        ['Scalp tenderness', 'Tenderness when combing hair or lying on pillow'],
        ['Jaw claudication', 'Pain in jaw muscles when chewing — pathognomonic for GCA; stops when chewing stops'],
        ['Visual symptoms', 'Amaurosis fugax (transient monocular visual loss), diplopia, sustained visual loss — EMERGENCY'],
        ['RAPD', 'Relative afferent pupillary defect — swinging light test; pale optic disc on fundoscopy'],
        ['Systemic features', 'Fatigue, fever, weight loss, night sweats — overlap with PMR (shoulder/hip girdle stiffness)'],
        ['Carotid bruit', 'Large vessel GCA — may cause upper limb claudication or stroke'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'ESR: typically >50 mm/h (often >100); may be normal in ~4% of GCA',
        'CRP: usually markedly elevated; more sensitive than ESR',
        'FBC: normocytic anaemia common; thrombocytosis',
        'Temporal artery biopsy (TAB): gold standard for diagnosis; arrange urgently via rheumatology; can be done up to 2 weeks after starting steroids without losing diagnostic value',
        'CT angiography (CTA) or duplex ultrasound of temporal/axillary arteries: alternative or adjunct to TAB for large vessel disease',
        'Do NOT keep re-checking inflammatory markers once established on treatment — they may stay elevated and cause unnecessary steroid escalation',
      ],
    },

    { type: 'heading', level: 2, text: 'Prednisolone Tapering Regimen' },

    {
      type: 'table',
      headers: ['Phase', 'Dose', 'Duration'],
      rows: [
        ['Initial (GCA without visual symptoms)', 'Prednisolone 40–60 mg OD', '4 weeks'],
        ['Initial (GCA with visual symptoms / AION)', 'IV methylprednisolone 500–1000 mg/day × 3 days (hospital) then prednisolone 60 mg OD', 'Hospital initiation'],
        ['Taper Phase 1', 'Reduce by 10 mg every 2 weeks', 'Down to 20 mg'],
        ['Taper Phase 2', 'Reduce by 2.5 mg every 2–4 weeks', 'Down to 10 mg'],
        ['Taper Phase 3', 'Reduce by 1 mg every 4–8 weeks', 'Down to 0'],
        ['Total duration', 'Typically 18–24 months', 'Relapse rate ~40–50%; may need to return to higher dose'],
      ],
      caption: 'If symptoms return during taper: return to previously effective dose + discuss urgently with rheumatology. New jaw claudication or systemic upset during taper = urgent rheumatology contact. New visual change = emergency ophthalmology.',
    },

    { type: 'heading', level: 2, text: 'Steroid-Related Co-prescribing' },

    {
      type: 'list',
      items: [
        'PPI: prescribe lansoprazole or omeprazole to prevent steroid-related peptic ulcers',
        'Bone protection: prescribe alendronate (or risedronate) + calcium and vitamin D from day 1 of prednisolone — do NOT wait for DEXA (start empirically as high-dose long-term steroid is high fracture risk)',
        'Steroid emergency card: ensure patient gets a steroid alert card from the pharmacy; explain sick day rules (do NOT stop steroids during illness — double dose during fever/illness/surgery)',
        'Annual DEXA if on long-term steroids',
        'Aspirin: NO LONGER recommended routinely in GCA (previously used to reduce ischaemic events)',
        'Monitoring: see rheumatology; shared care with GP for BP, glucose, eye pressure, bone health',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Ophthalmology (same day — visual symptoms): UHDB Queen\'s Hospital Burton eye department OR Good Hope Hospital (UHB) eye casualty — telephone ahead',
        'Rheumatology (same/next day — no visual symptoms): UHDB Burton rheumatology — urgent e-RS or telephone; start steroids before referral',
        'TAB: arranged by rheumatology team — usually done within 1–2 weeks of starting steroids',
        'Shared care: GP manages steroid tapering, bone protection, BP and glucose monitoring; rheumatology retains overall care',
        'If PMR also present: PMR note for initial dose (lower — 15–20 mg) and tapering schedule',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — GCA', url: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/' },
        { label: 'BSR — GCA Guidelines', url: 'https://www.rheumatology.org.uk/practice-quality/guidelines/giant-cell-arteritis' },
        { label: 'NHS — Giant Cell Arteritis', url: 'https://www.nhs.uk/conditions/giant-cell-arteritis/' },
        { label: 'Vasculitis UK', url: 'https://www.vasculitis.org.uk/' },
      ],
    },
  ],
}

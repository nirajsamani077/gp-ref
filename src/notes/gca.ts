import type { Note } from '../data/notes'

export const gca: Note = {
  id: 'gca',
  title: 'Giant Cell Arteritis (GCA)',
  subtitle: 'Same-day bloods and prednisolone, temporal artery biopsy, tapering and tocilizumab',
  tags: ['rheumatology', 'ophthalmology'],

  body: 'giant cell arteritis GCA temporal arteritis polymyalgia rheumatica PMR ESR CRP elevated age over 50 temporal headache scalp tenderness jaw claudication visual symptoms RAPD temporal artery biopsy TAB prednisolone high dose steroid taper tocilizumab IL-6 inhibitor dipropionate CT angiography duplex ultrasound urgent ophthalmology bone protection PPI steroid sick day rules alendronate ACR EULAR criteria AION anterior ischaemic optic neuropathy diplopiamonitoring shared care GP',

  content: [
    {
      type: 'callout',
      variant: 'danger',
      title: 'GCA — Same-Day Urgency. Do Not Wait.',
      items: [
        'GCA can cause sudden, irreversible, complete visual loss — the window between warning symptoms and blindness can be hours',
        'SUSPECT in anyone >50 with: new temporal/occipital headache, jaw claudication, scalp tenderness, amaurosis fugax, diplopia, or any visual change',
        'Same-day bloods: ESR + CRP + FBC — do in-surgery or phone for same-day results',
        'Start PREDNISOLONE 60 mg orally SAME DAY if GCA is the leading diagnosis — do NOT wait for biopsy results or specialist appointment',
        'Visual symptoms (amaurosis fugax, diplopia, visual loss, RAPD): SAME-DAY ophthalmology referral — this is an ophthalmic emergency; IV methylprednisolone often needed (hospital-initiated)',
        'No visual symptoms: same-day or urgent next-day rheumatology referral; start oral prednisolone before referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features — What to Look for in the Consultation' },

    {
      type: 'table',
      headers: ['Feature', 'Detail', 'GP Action'],
      rows: [
        ['Headache', 'New, subacute-onset temporal, frontal or occipital headache; severe; different from any previous headache', 'Distinguish from tension/migraine — GCA headache is constant, often worst at night, associated with scalp tenderness'],
        ['Temporal artery', 'Tender, thickened, nodular, or pulseless temporal artery on palpation', 'Examine both temporal arteries in anyone >50 with new headache; a pulseless artery is a strong positive finding'],
        ['Scalp tenderness', 'Pain when combing hair, touching scalp, or lying on pillow', 'Often dismissed — specifically ask about this'],
        ['Jaw claudication', 'Aching/fatigue in the jaw muscles when chewing — stops when chewing stops; pathognomonic for GCA', 'Distinguish from TMJ — jaw claudication is fatigue with chewing, not pain at rest'],
        ['Amaurosis fugax', 'Transient monocular visual loss (curtain coming down); lasts seconds to minutes, then resolves', 'A warning before permanent AION (anterior ischaemic optic neuropathy) — treat as ophthalmic emergency; same-day referral'],
        ['Diplopia', 'Double vision — cranial nerve ischaemia; sign of advanced disease', 'Same-day ophthalmology'],
        ['Sustained visual loss', 'Fixed visual field defect or complete visual loss — AION has occurred', 'Emergency — call eye casualty; start IV steroids if able; admit'],
        ['Systemic features', 'Fatigue, malaise, fever, night sweats, weight loss; jaw claudication most specific', 'Ask about concurrent shoulder/hip girdle stiffness (PMR overlap)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'ESR: typically >50 mm/h (often >100); may be normal in ~4% — a normal ESR does NOT rule out GCA',
        'CRP: usually markedly elevated; more sensitive than ESR; can use alone if ESR not available',
        'FBC: normocytic anaemia of chronic disease; thrombocytosis (raised platelets) common',
        'Temporal artery biopsy (TAB): gold standard for histological confirmation — organise via rheumatology; start steroids immediately; TAB remains diagnostic for up to 2–4 weeks after starting steroids (may still show giant cells)',
        'Duplex ultrasound of temporal arteries: increasingly used as first-line non-invasive test (EULAR recommends); can show "halo sign" (hypoechoic wall); arranged by rheumatology/vascular',
        'CT/PET angiography: for large vessel GCA (aorta, subclavian, axillary involvement) — arranged by rheumatology',
        'Do NOT repeatedly check ESR/CRP once established on steroids — they may lag, causing unnecessary dose escalation; rheumatology will guide monitoring',
      ],
    },

    { type: 'heading', level: 2, text: 'ACR/EULAR 2022 Classification Criteria (for Clinical Context)' },

    {
      type: 'callout',
      variant: 'info',
      title: 'ACR 2022 Criteria — Not Required for GP Decision; Guides Specialist Assessment',
      items: [
        'Age ≥50 at onset of vasculitis (required)',
        'Positive items (weighted scoring): morning stiffness in shoulder/hip girdle; jaw claudication; sudden visual loss; temporal artery tenderness/decreased pulse; ESR ≥50 or CRP ≥10; new temporal headache; scalp tenderness; positive temporal artery biopsy or halo sign on ultrasound',
        'GP clinical decision: if age >50 + elevated ESR/CRP + any of the above features — that is sufficient to start treatment same day. Classification criteria are for research; GCA is a clinical diagnosis.',
      ],
    },

    { type: 'heading', level: 2, text: 'Prednisolone Tapering — GP Shared Care' },

    {
      type: 'table',
      headers: ['Phase', 'Dose', 'Duration', 'Notes'],
      rows: [
        ['Initial (no visual symptoms)', 'Prednisolone 40–60 mg OD', '4 weeks', 'Start same day; rheumatology confirm and adjust'],
        ['Initial (visual symptoms / AION)', 'IV methylprednisolone 500–1000 mg × 3 days then prednisolone 60 mg OD', 'Hospital initiation', 'Admit — IV steroids for 3 days first'],
        ['Phase 1 taper', 'Reduce by 10 mg every 2 weeks', 'Down to 20 mg over ~2 months', 'Slow taper — too fast = relapse'],
        ['Phase 2 taper', 'Reduce by 2.5 mg every 4 weeks', 'Down to 10 mg over ~4 months', 'Relapse most common at this stage — watch for return of symptoms'],
        ['Phase 3 taper', 'Reduce by 1 mg every 4–8 weeks', 'Down to 0 over 12–18 months', 'Total duration: typically 18–24+ months; some require long-term low dose'],
        ['Relapse during taper', 'Return to previously effective dose + contact rheumatology', 'After any symptom return', 'New jaw claudication or visual symptoms = contact rheumatology urgently; new visual change = emergency ophthalmology'],
      ],
      caption: 'If patient relapses frequently or cannot taper below 7.5–10 mg: consider tocilizumab (see below).',
    },

    { type: 'heading', level: 2, text: 'Tocilizumab — Steroid-Sparing for GCA' },

    {
      type: 'list',
      items: [
        'Tocilizumab (Actemra): IL-6 receptor inhibitor — significantly reduces steroid burden in GCA; now NICE-approved for newly diagnosed or relapsing GCA',
        'Indication: newly diagnosed GCA OR relapsing disease not achieving remission on steroids alone',
        'Dose: subcutaneous 162 mg weekly or IV 8 mg/kg 4-weekly; specialist-initiated (rheumatology)',
        'Benefit: allows faster steroid taper and reduces cumulative steroid exposure — important for reducing steroid-related morbidity (osteoporosis, diabetes, cataracts, hypertension)',
        'GP role: shared care — GP monitors for infections (tocilizumab is an immunosuppressant), checks FBC and LFTs, manages steroid side effects; refer to rheumatology for initiation',
        'Methotrexate: alternative steroid-sparing agent (evidence weaker than tocilizumab); weekly dose; requires methotrexate monitoring shared care protocol',
      ],
    },

    { type: 'heading', level: 2, text: 'Steroid Co-Prescribing — Start Day 1' },

    {
      type: 'list',
      items: [
        'PPI: lansoprazole 15–30 mg OD or omeprazole 20 mg OD — prescribe with steroids to prevent peptic ulceration; continue for the duration of steroid therapy',
        'Bone protection: start alendronate 70 mg weekly (or risedronate 35 mg weekly if intolerant) + calcium/vitamin D (Calcichew-D3 Forte 1 tablet BD or Adcal-D3 1 tablet BD) FROM DAY 1; do NOT wait for DEXA — high-dose long-term steroid is automatically high fracture risk (FRAX scores elevated)',
        'DEXA scan: arrange within 3–6 months if not already done; reassess bone protection annually',
        'Steroid alert card (blue card): patient must carry at all times; ensure pharmacy dispenses with every steroid supply',
        'Sick day rules: do NOT stop steroids when unwell — double dose during intercurrent illness (fever, vomiting, diarrhoea, major surgery); if vomiting and unable to absorb tablets → emergency: hospital for IV hydrocortisone',
        'Blood pressure: steroids raise BP — check at every review; treat if needed',
        'Blood glucose: steroids worsen glucose control — HbA1c 3–6 monthly if diabetic; fasting glucose if not diabetic; introduce metformin or insulin if needed',
      ],
    },

    { type: 'heading', level: 2, text: 'GP Monitoring in Shared Care' },

    {
      type: 'table',
      headers: ['Frequency', 'What to Check'],
      rows: [
        ['Monthly (during active taper)', 'Symptoms of relapse (headache, jaw claudication, visual symptoms); blood pressure; weight; blood glucose; depression/mood (steroid effect)'],
        ['Every 3–6 months', 'ESR + CRP (to monitor disease activity, NOT to guide taper alone); U&E (hypertension, fluid retention); HbA1c (steroid-induced DM); eye review if cataracts or raised IOP developing'],
        ['Annually', 'DEXA scan; calcium/vitamin D blood levels; ophthalmology review (cataracts, IOP)'],
        ['Urgent contact point', 'Any new visual symptoms, jaw claudication, or severe headache during taper → rheumatology urgent advice or same-day ophthalmology'],
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Giant Cell Arteritis', url: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/' },
        { label: 'BSR — GCA Guidelines (2020)', url: 'https://www.rheumatology.org.uk/practice-quality/guidelines/giant-cell-arteritis' },
        { label: 'NICE TA518 — Tocilizumab for GCA', url: 'https://www.nice.org.uk/guidance/ta518' },
        { label: 'Vasculitis UK — GCA Patient Info', url: 'https://www.vasculitis.org.uk/about-vasculitis/giant-cell-arteritis' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Ophthalmology (SAME DAY — visual symptoms): UHDB Queen\'s Hospital Burton eye department — phone ahead; or Good Hope Hospital (UHB) eye casualty; IV methylprednisolone will be given in hospital',
        'Rheumatology (urgent — no visual symptoms, start prednisolone first): UHDB Burton rheumatology; phone for urgent advice or send urgent e-RS referral; start steroids before referral',
        'TAB: arranged by UHDB rheumatology team — usually performed within 1–2 weeks of starting steroids; biopsy remains diagnostic for up to 4 weeks',
        'Tocilizumab initiation: UHDB Burton rheumatology; shared care agreement with GP for monitoring',
        'Shared care (GP): manage steroid taper, bone protection, BP, HbA1c, steroid sick day rules — key primary care role; rheumatology retains overall care and inflammatory marker monitoring',
      ],
    },
  ],
}

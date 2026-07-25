import type { Note } from '../data/notes'

export const oralSteroids: Note = {
  id: 'oral-steroids',
  title: 'Oral Corticosteroids',
  subtitle: 'Adrenal suppression, sick-day rules, monitoring, steroid-induced diabetes and safe withdrawal',
  tags: ['drugs', 'rheumatology'],

  body: `oral corticosteroids prednisolone hydrocortisone dexamethasone adrenal suppression steroid emergency card sick day rules withdrawal tapering osteoporosis FRAX DEXA steroid induced diabetes gastroprotection PPI cataracts glaucoma`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Corticosteroids (Oral)', url: 'https://cks.nice.org.uk/topics/corticosteroids-oral/' },
        { label: 'Society for Endocrinology — Steroid Sick-Day Rules', url: 'https://www.endocrinology.org/adrenal-crisis/' },
        { label: 'NHS Steroid Emergency Card', url: 'https://www.gov.uk/government/publications/nhs-steroid-emergency-card' },
      ],
    },

    {
      type: 'para',
      text: 'Oral corticosteroids are highly effective but carry a wide range of dose- and duration-related harms, so safe prescribing is really about four things: knowing which regimens suppress the HPA axis, issuing a Steroid Emergency Card with sick-day rules to those patients, monitoring for and prophylaxing against the key adverse effects (bone loss, steroid-induced diabetes, GI ulceration), and withdrawing gradually rather than abruptly when the axis may be suppressed.',
    },
    { type: 'heading', level: 2, text: 'Who Develops Adrenal Suppression?' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Doses That Suppress the HPA Axis',
      items: [
        'Continuous: prednisolone >5 mg/day (hydrocortisone >15 mg, dexamethasone >0.5 mg) for >4 weeks',
        'Recurrent: prednisolone ~40 mg (or equivalent) for >1 week, or multiple short courses (>3 in a year)',
        'Also consider cumulative effects of high-dose inhaled, intranasal, and potent topical steroids (especially in combination)',
        'Adrenal suppression can persist for up to a year after stopping — patients remain at risk of adrenal crisis during illness/surgery',
      ],
    },

    { type: 'heading', level: 2, text: 'Sick-Day Rules & Steroid Emergency Card' },

    {
      type: 'list',
      items: [
        'Issue a Steroid Emergency Card and educate on sick-day rules for anyone on suppressive doses',
        'Intercurrent illness (fever needing antibiotics): double the dose (unless already on >15 mg prednisolone); or switch to 20 mg hydrocortisone then 10 mg QDS',
        'Vomiting / unable to take oral / severe illness → IM hydrocortisone 100 mg and seek urgent care (risk of adrenal crisis)',
        'Patients with known Addison\'s or complete steroid dependence should have a home supply of IM hydrocortisone (100 mg) and be trained to use it',
        'Specific peri-operative/procedure cover rules apply (per Society for Endocrinology guidance)',
      ],
    },

    { type: 'heading', level: 2, text: 'Monitoring' },

    {
      type: 'table',
      headers: ['When', 'Checks'],
      rows: [
        ['Before starting', 'BMI, blood pressure, U&E, HbA1c, lipids (triglycerides); ask about/observe for glaucoma/cataracts'],
        ['At ~1 month', 'U&E, fasting glucose/HbA1c, triglycerides'],
        ['Ongoing', 'HbA1c every ~3 months; BP and weight; FRAX assessment and DEXA for bone protection; periodic lipids; eye review for long-term use'],
      ],
    },

    { type: 'heading', level: 2, text: 'Key Adverse Effects & Prophylaxis' },

    {
      type: 'list',
      items: [
        'Osteoporosis: bone loss is rapid and early — assess FRAX and start calcium/vitamin D and a bisphosphonate in most on long-term steroids (lower intervention threshold than usual; see Osteoporosis note)',
        'Steroid-induced diabetes: check HbA1c before (if at risk) and 3-monthly; treat with gliclazide ± insulin, and reduce hypoglycaemic treatment as steroids are tapered (glucose mirrors steroid dose)',
        'Gastroprotection: PPI cover, especially if also on NSAIDs/antiplatelets',
        'Others: weight gain, mood/sleep disturbance and psychosis, hypertension, fluid retention/hypokalaemia, proximal myopathy, skin thinning/easy bruising, cataracts and glaucoma, increased infection risk (and reactivation — e.g. TB, hepatitis B; consider PCP prophylaxis at high doses with other immunosuppression)',
      ],
    },

    { type: 'heading', level: 2, text: 'Withdrawing Steroids' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Taper vs Stop',
      items: [
        'Taper gradually (do not stop abruptly) if any of: dose >40 mg for >1 week, treatment for >3 weeks at any dose, repeat courses, a short course within a year of stopping long-term steroids, or where relapse of the underlying disease is likely',
        'A common approach: reduce relatively quickly to a physiological dose (~7.5 mg prednisolone/day) then taper more slowly',
        'Abrupt cessation is acceptable only if none of the above apply and relapse is unlikely',
        'Warn patients never to stop suddenly themselves, and about symptoms of adrenal insufficiency (fatigue, nausea, dizziness, weight loss)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'adrenal-insufficiency', label: 'Adrenal Insufficiency', subtitle: 'Addison\'s and adrenal crisis — the consequence of suppression' },
        { id: 'osteoporosis', label: 'Osteoporosis', subtitle: 'Steroid-induced bone loss — FRAX and bisphosphonate protocol' },
        { id: 'pmr', label: 'Polymyalgia Rheumatica', subtitle: 'Common long-term steroid indication with a taper regimen' },
        { id: 'gca', label: 'Giant Cell Arteritis', subtitle: 'High-dose long-term steroids — monitoring and withdrawal' },
        { id: 'diabetes-t2dm', label: 'T2DM Management', subtitle: 'Steroid-induced hyperglycaemia management' },
      ],
    },

  ],
}

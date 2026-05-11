import type { Note } from '../data/notes'

export const cataracts: Note = {
  id: 'cataracts',
  title: 'Cataracts',
  subtitle: 'Lens opacity, causes, optometrist referral, surgical indications and driving standards',
  tags: ['ophthalmology'],

  body: 'cataract lens opacity visual loss glare halos night vision refractive change optometrist visual acuity VA red reflex slit lamp fundoscopy cataract surgery phacoemulsification endophthalmitis posterior capsule rupture floppy iris syndrome tamsulosin alpha blocker driving group 1 group 2 RNIB',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Cataracts — Key Points',
      items: [
        'Lens opacity — most common cause of reversible blindness worldwide; predominantly age-related',
        'Presentation: gradual visual loss, glare (worse at night), halos around lights, frequent changes to glasses prescription',
        'Refer to optometrist for formal assessment: visual acuity, fundoscopy, loss of red reflex, slit-lamp, intraocular pressure (IOP)',
        'Treatment is surgical (phacoemulsification) when functional impairment is not corrected by glasses and QOL is affected',
        'Signpost to RNIB for patient information and support',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes of Cataract' },

    {
      type: 'list',
      items: [
        'Age-related (most common): nuclear sclerosis, cortical or posterior subcapsular',
        'Trauma: unilateral; always consider non-accidental injury in children',
        'Secondary to eye disease: uveitis, glaucoma, high myopia',
        'Systemic: diabetes mellitus, Wilson\'s disease',
        'Drugs: long-term systemic or high-dose inhaled/topical corticosteroids',
        'Lifestyle: smoking, excess alcohol',
        'Genetic/congenital: Down\'s syndrome, Marfan\'s syndrome, congenital rubella; congenital cataracts require urgent paediatric ophthalmology referral (risk of amblyopia)',
      ],
    },

    { type: 'heading', level: 2, text: 'Surgical Management' },

    {
      type: 'table',
      headers: ['Aspect', 'Detail'],
      rows: [
        ['Indication', 'Functional visual impairment not corrected by glasses AND affecting quality of life — patient-led decision'],
        ['Procedure', 'Phacoemulsification: ultrasound removal of lens + intraocular lens (IOL) implant; day case under local anaesthetic'],
        ['Bilateral cataracts', 'Remove one eye first; wait several weeks before second eye (allows assessment of result and IOL calculation)'],
        ['Post-op care', 'Antibiotic drops ± steroid drops; avoid swimming 4–6 weeks; driving restrictions until vision meets standard (usually 1–4 weeks)'],
        ['Complications', 'Posterior capsule rupture (most common intra-op); endophthalmitis (rare but serious — urgent same-day ophthalmology if red painful eye post-op); posterior capsule opacification (PCO) — YAG laser later'],
        ['Tamsulosin warning', 'Floppy iris syndrome — intra-operative floppy iris syndrome (IFIS) linked to alpha blockers (tamsulosin, alfuzosin); inform surgeon before listing; do NOT withhold tamsulosin without specialist advice'],
      ],
    },

    { type: 'heading', level: 2, text: 'Driving Standards (DVLA)' },

    {
      type: 'table',
      headers: ['Licence Type', 'Visual Standard'],
      rows: [
        ['Group 1 (car/motorcycle)', 'Must read a number plate at 20 metres; binocular visual acuity ≥6/12 (with glasses if worn)'],
        ['Group 2 (HGV/bus/lorry)', 'Higher standards apply — each eye ≥6/7.5 unaided or with correction; binocular VA ≥6/9; reduced field of vision may also disqualify'],
      ],
      caption: 'Advise patients with cataracts affecting vision to stop driving until visual standards are met. Patient must inform DVLA if vision does not meet Group 1 standards; GP does not need to notify DVLA unless patient refuses to stop driving despite advice.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Step 1: Optometrist — all suspected cataracts should be assessed by optometrist first (NHS sight test); they can initiate the ophthalmology referral',
        'NHS cataract surgery: UHDB Queen\'s Hospital Burton — primary ophthalmology referral for cataract assessment and surgery',
        'Alternative: Good Hope Hospital (UHB) ophthalmology department or Walsall Manor Hospital eye unit',
        'Congenital cataracts in children: urgent referral to Birmingham Children\'s Hospital ophthalmology or paediatric ophthalmology via UHDB',
        'RNIB helpline: 0303 123 9999 — sight loss support',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        'Painful red eye after cataract surgery: same-day emergency ophthalmology — possible endophthalmitis',
        'Sudden visual loss at any time: same-day ophthalmology to exclude retinal detachment, CRVO, or CRAO',
        'Congenital cataract in a child: urgent same-day/next-day paediatric ophthalmology — risk of deprivation amblyopia if delayed',
        'Driving: advise patient they must not drive if vision falls below Group 1 standard',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Cataracts', url: 'https://cks.nice.org.uk/topics/cataracts/' },
        { label: 'NICE NG77 — Cataracts in Adults', url: 'https://www.nice.org.uk/guidance/ng77' },
        { label: 'RNIB — Cataracts', url: 'https://www.rnib.org.uk/eye-health/eye-conditions/cataracts/' },
        { label: 'DVLA — Visual Disorders Guidance', url: 'https://www.gov.uk/guidance/visual-disorders-assessing-fitness-to-drive' },
      ],
    },
  ],
}

import type { Note } from '../data/notes'

export const sightRegistration: Note = {
  id: 'sight-registration',
  title: 'Sight Impairment Registration',
  subtitle: 'Sight impaired vs severely sight impaired, the CVI process, and the practical support it unlocks',
  tags: ['ophthalmology'],

  body: `sight impairment registration blind partially sighted severely sight impaired SSI SI certificate of visual impairment CVI consultant ophthalmologist visual acuity visual field low vision benefits DVLA support ECLO`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Formal registration of sight impairment is initiated by a consultant ophthalmologist (not the GP) via a Certificate of Visual Impairment (CVI), but GPs should understand the process because they support patients through it and because registration unlocks a wide range of practical, financial and social support. Registration is voluntary and based on visual acuity and visual fields.',
    },

    { type: 'heading', level: 2, text: 'The Two Categories' },
    {
      type: 'table',
      headers: ['Category', 'Broad criteria (guide)'],
      rows: [
        ['Sight impaired (SI) — "partially sighted"', 'Acuity ~6/18 to 6/60 with full fields, or better acuity with significant field loss'],
        ['Severely sight impaired (SSI) — "blind"', 'Acuity worse than ~3/60, or better acuity (e.g. 3/60–6/60) with a very contracted field, or 6/60+ with a marked field defect'],
      ],
      caption: 'The consultant ophthalmologist certifies the category on the CVI based on best-corrected acuity and fields; the exact thresholds combine acuity and field loss.',
    },

    { type: 'heading', level: 2, text: 'The Process' },
    {
      type: 'list',
      items: [
        'A consultant ophthalmologist completes the Certificate of Visual Impairment (CVI), a copy of which goes to the patient, their GP, and (with consent) the local authority social-services team.',
        'The local authority then offers registration and a social-care assessment; registration is voluntary.',
        'Even before formal registration, patients with significant sight loss can be referred for a LOW VISION assessment and to an Eye Clinic Liaison Officer (ECLO) for support.',
      ],
    },

    { type: 'heading', level: 2, text: 'What Registration Unlocks' },
    {
      type: 'list',
      items: [
        'Social-care support and a needs assessment; low-vision aids and rehabilitation (mobility training, independent-living skills).',
        'Financial support: potential eligibility for benefits (e.g. Attendance Allowance/PIP), a Blind Person\'s Allowance, Council Tax and travel concessions, and reduced TV licence for SSI.',
        'Practical help: talking books, guide-dog assessment, and registration with local sight-loss charities.',
        'Note the DRIVING implications — significant sight loss must be notified to the DVLA and usually means stopping driving (see DVLA note).',
      ],
    },

    { type: 'heading', level: 2, text: 'The GP Role' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Support and Signpost',
      items: [
        'Ensure timely referral to ophthalmology for anyone with significant, non-improving visual loss so that treatable causes are addressed and, where appropriate, a CVI is offered.',
        'Support the patient emotionally (sight loss carries a high risk of depression — screen and treat), coordinate care, and signpost to the RNIB and local services and the ECLO.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'RNIB — Registering Your Sight Loss', url: 'https://www.rnib.org.uk/your-eyes/navigating-sight-loss/registering-your-sight-loss/' },
        { label: 'GOV.UK — Blind & Partially Sighted Registration', url: 'https://www.gov.uk/register-blind-severely-sight-impaired' },
        { label: 'NICE CKS — Blindness / Visual Impairment', url: 'https://cks.nice.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'visual-loss', label: 'Sudden Visual Loss', subtitle: 'Assessing and referring visual loss' },
        { id: 'glaucoma', label: 'Glaucoma', subtitle: 'A leading cause of field loss and registration' },
        { id: 'amd', label: 'Age-Related Macular Degeneration', subtitle: 'A leading cause of central vision loss' },
        { id: 'dvla-fitness-to-drive', label: 'DVLA Fitness to Drive', subtitle: 'Visual-standard requirements and notification' },
        { id: 'depression', label: 'Depression', subtitle: 'Common with sight loss — screen and support' },
      ],
    },

  ],
}

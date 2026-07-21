import type { Note } from '../data/notes'

export const dryEyesBlepharitis: Note = {
  id: 'dry-eyes-blepharitis',
  title: 'Dry Eyes, Blepharitis & Eyelid Lumps',
  subtitle: 'Chronic ocular surface disease, lid hygiene, and the chalazion/stye/lid-lesion differential',
  tags: ['ophthalmology'],

  body: `dry eyes dry eye disease keratoconjunctivitis sicca blepharitis meibomian gland dysfunction lid hygiene warm compress artificial tears chalazion meibomian cyst stye hordeolum blepharitis Sjogren eyelid lump basal cell carcinoma`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Dry Eye Disease', url: 'https://cks.nice.org.uk/topics/dry-eye-disease/' },
        { label: 'NICE CKS — Blepharitis', url: 'https://cks.nice.org.uk/topics/blepharitis/' },
        { label: 'College of Optometrists — Clinical Guidance', url: 'https://www.college-optometrists.org/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Chronic and Recurrent — Manage Expectations',
      items: [
        'Dry eye disease and blepharitis are common, chronic conditions that are controlled rather than cured; the mainstay is patient-performed lid hygiene and lubricants',
        'They frequently coexist — blepharitis/meibomian gland dysfunction is a leading cause of evaporative dry eye',
        'Symptoms (grittiness, burning, watering paradoxically) often exceed signs',
      ],
    },

    { type: 'heading', level: 2, text: 'Dry Eye Disease' },

    {
      type: 'list',
      items: [
        'Grittiness, burning, transient blurring relieved by blinking, and reflex watering; worse with screen use, air-conditioning, contact lenses and low humidity',
        'Consider contributing factors: age, female sex, medication (antihistamines, antidepressants, diuretics, isotretinoin), and autoimmune disease (Sjögren\'s — with dry mouth)',
        'Management ladder: reduce environmental triggers and screen time (blink breaks); regular artificial tears (preservative-free if used frequently) and lubricating ointment at night; treat associated blepharitis',
        'Refer if severe/persistent despite treatment, vision affected, corneal signs, or suspected Sjögren\'s (for systemic work-up)',
      ],
    },

    { type: 'heading', level: 2, text: 'Blepharitis' },

    {
      type: 'list',
      items: [
        'Anterior (lash-base, staphylococcal/seborrhoeic) or posterior (meibomian gland dysfunction); often with rosacea',
        'Cornerstone is daily lid hygiene: warm compress, gentle lid massage, and lid-margin cleaning — continued long-term even when settled',
        'A short course of topical antibiotic (e.g. chloramphenicol ointment to the lid margin) for anterior blepharitis with significant crusting; oral doxycycline/lymecycline (specialist or where appropriate) for refractory posterior disease/ocular rosacea',
      ],
    },

    { type: 'heading', level: 2, text: 'Eyelid Lumps' },

    {
      type: 'table',
      headers: ['Lump', 'Features & management'],
      rows: [
        ['Chalazion (meibomian cyst)', 'Painless firm lump from a blocked meibomian gland; warm compresses/massage; refer for incision if persistent'],
        ['Stye (hordeolum)', 'Acute tender lash-line abscess; warm compresses; usually self-resolves; topical antibiotic if spreading'],
        ['Suspicious lid lesion', 'Non-healing, ulcerated, bleeding, distorting lashes, or pigmented → refer to exclude BCC/other malignancy'],
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'conjunctivitis', label: 'Conjunctivitis', subtitle: 'Red-eye differential' },
        { id: 'red-eye', label: 'Red Painful Eye', subtitle: 'Distinguishing benign surface disease from sight-threatening causes' },
        { id: 'acne-rosacea', label: 'Acne Rosacea', subtitle: 'Ocular rosacea overlaps with posterior blepharitis' },
        { id: 'sle-sjogrens', label: 'SLE & Sjögren\'s', subtitle: 'Sjögren\'s — autoimmune dry eye/dry mouth' },
        { id: 'bcc', label: 'Basal Cell Carcinoma', subtitle: 'A suspicious eyelid lesion to exclude' },
      ],
    },

  ],
}

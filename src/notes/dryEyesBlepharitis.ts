import type { Note } from '../data/notes'

export const dryEyesBlepharitis: Note = {
  id: 'dry-eyes-blepharitis',
  title: 'Dry Eyes, Blepharitis & Eyelid Lumps',
  subtitle: 'Chronic ocular-surface disease, lid hygiene, drug/systemic causes and the chalazion/stye/lid-lesion differential',
  tags: ['ophthalmology'],

  body: `dry eye disease keratoconjunctivitis sicca blepharitis meibomian gland dysfunction MGD lid hygiene warm compress artificial tears hypromellose carbomer preservative-free chalazion meibomian cyst stye hordeolum Sjogren ocular rosacea eyelid lump basal cell carcinoma doxycycline`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Dry eye disease and blepharitis are common, chronic, relapsing conditions of the ocular surface and lid margins. They are controlled rather than cured, and the mainstay — patient-performed lid hygiene and lubricants — needs to be sustained long-term. They frequently coexist: meibomian gland dysfunction (posterior blepharitis) is a leading cause of evaporative dry eye. Symptoms (grittiness, burning, watering) often exceed the visible signs.',
    },

    { type: 'heading', level: 2, text: 'Dry Eye Disease' },
    {
      type: 'list',
      items: [
        'Grittiness, burning, a foreign-body sensation, transient blurring relieved by blinking, and paradoxical reflex watering; worse with screen use, air-conditioning, contact lenses, wind and low humidity.',
        'Contributing factors: increasing age, female sex, and drugs — antihistamines, antidepressants (anticholinergics), diuretics, beta-blockers, isotretinoin, and HRT.',
        'Consider Sjögren\'s syndrome if there is also a dry mouth ± arthralgia (check anti-Ro/La and refer for a systemic work-up).',
      ],
    },
    {
      type: 'table',
      headers: ['Step', 'Detail'],
      rows: [
        ['Environmental', 'Reduce screen time / take blink breaks, humidify, avoid direct draughts; review contributing drugs and contact-lens wear'],
        ['Lubricants', 'Regular artificial tears (hypromellose or carbomer); PRESERVATIVE-FREE drops if used >4–6×/day or with contact lenses; a lubricating ointment (e.g. Lacri-Lube) at night for overnight symptoms'],
        ['Treat lid disease', 'Manage coexisting blepharitis (below) — often the underlying driver'],
        ['Refer', 'Persistent/severe symptoms despite treatment, vision affected, corneal signs, or suspected Sjögren\'s'],
      ],
    },

    { type: 'heading', level: 2, text: 'Blepharitis' },
    {
      type: 'list',
      items: [
        'Anterior (lash-base — staphylococcal/seborrhoeic) or posterior (meibomian gland dysfunction); often associated with rosacea and seborrhoeic dermatitis.',
        'Cornerstone is DAILY lid hygiene — continued long-term even when settled: (1) warm compress to the closed lids for ~5–10 minutes to soften meibomian secretions, (2) gentle lid massage towards the lashes, (3) lid-margin cleaning (dilute baby shampoo or a proprietary lid-cleanser/wipe).',
        'A short course of topical antibiotic (e.g. chloramphenicol ointment rubbed into the lid margin) for anterior blepharitis with significant crusting.',
        'Refractory posterior blepharitis / ocular rosacea: an oral tetracycline (doxycycline or lymecycline) for its anti-inflammatory effect over several weeks (avoid in pregnancy/children — use erythromycin).',
      ],
    },

    { type: 'heading', level: 2, text: 'Eyelid Lumps' },
    {
      type: 'table',
      headers: ['Lump', 'Features & management'],
      rows: [
        ['Chalazion (meibomian cyst)', 'Painless firm lump from a blocked meibomian gland; warm compresses and massage; refer for incision & curettage if persistent (>6 weeks)'],
        ['Stye (hordeolum)', 'Acute tender lash-line abscess; warm compresses; usually self-resolves; topical antibiotic only if spreading; consider epilating the affected lash'],
        ['Suspicious lid lesion', 'Non-healing, ulcerated, bleeding, distorting/destroying lashes, pearly or pigmented → refer to exclude BCC (commonest lid malignancy) or other cancer'],
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Dry Eye Disease', url: 'https://cks.nice.org.uk/topics/dry-eye-disease/' },
        { label: 'NICE CKS — Blepharitis', url: 'https://cks.nice.org.uk/topics/blepharitis/' },
        { label: 'College of Optometrists — Blepharitis', url: 'https://www.college-optometrists.org/clinical-guidance/clinical-management-guidelines' },
        { label: 'NHS — Blepharitis', url: 'https://www.nhs.uk/conditions/blepharitis/' },
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

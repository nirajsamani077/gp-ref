import type { Note } from '../data/notes'

export const salivaryGlandDisease: Note = {
  id: 'salivary-gland-disease',
  title: 'Salivary Gland Disease',
  subtitle: 'Stones, sialadenitis, mumps and salivary gland tumours — the mealtime swelling and the malignancy red flags',
  tags: ['ent'],

  body: `salivary gland parotid submandibular sialolithiasis stone mealtime swelling sialadenitis mumps parotitis pleomorphic adenoma Warthin's tumour malignancy facial nerve palsy Sjogren's xerostomia dry mouth ultrasound`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Salivary gland problems present as swelling or dryness. The pattern of the swelling is the key discriminator: intermittent swelling around meals suggests obstruction by a stone; acute painful swelling suggests infection; and a slow, painless, persistent lump raises the question of a tumour. The parotid and submandibular glands are the main sites, with the facial nerve a critical structure in the parotid.',
    },

    { type: 'heading', level: 2, text: 'Obstruction & Infection' },
    {
      type: 'table',
      headers: ['Condition', 'Features & management'],
      rows: [
        ['Salivary stone (sialolithiasis)', 'Recurrent, painful swelling of a gland (usually SUBMANDIBULAR) that comes on/worsens with EATING and settles after — from a duct stone. Manage with hydration, sialogogues (sour sweets/lemon), gland massage and warmth; refer ENT/OMFS if persistent (stone removal / sialendoscopy)'],
        ['Acute sialadenitis', 'Painful, red, swollen gland ± pus from the duct — often bacterial (dehydration, stone, poor oral hygiene, elderly); treat with hydration, oral hygiene, antibiotics; admit if systemically unwell/abscess'],
        ['Mumps (viral parotitis)', 'Bilateral tender parotid swelling with prodrome, in the unvaccinated — supportive care; NOTIFIABLE; complications include orchitis, meningitis, pancreatitis'],
        ['Sjögren\'s / autoimmune', 'Recurrent/bilateral gland swelling with DRY mouth and eyes → check autoantibodies (see SLE & Sjögren\'s)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Salivary Gland Tumours' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'A Persistent Lump → Refer (2WW if Malignancy Suspected)',
      items: [
        'A slowly growing, painless, persistent lump in a salivary gland → refer for assessment (ultrasound ± fine-needle aspiration); do NOT simply observe.',
        'Most parotid tumours are benign (pleomorphic adenoma commonest; Warthin\'s tumour); the SMALLER the gland, the HIGHER the proportion that are malignant (sublingual/minor gland lumps are more often malignant).',
        'RED FLAGS for malignancy → 2WW: rapid growth, PAIN, FIXATION/hard consistency, skin involvement/ulceration, FACIAL NERVE WEAKNESS (parotid), or cervical lymphadenopathy.',
        'Do not enucleate/excise a suspected parotid lump in primary care — the facial nerve is at risk; refer to head & neck/OMFS.',
      ],
    },

    { type: 'heading', level: 2, text: 'Dry Mouth (Xerostomia)' },
    {
      type: 'list',
      items: [
        'Common causes: drugs (anticholinergics, antidepressants, diuretics, opioids), dehydration, mouth-breathing, radiotherapy, and Sjögren\'s syndrome.',
        'Manage: review/rationalise culprit drugs, hydration, sugar-free gum/saliva substitutes; meticulous dental care (high caries risk); investigate/refer if Sjögren\'s suspected.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Head & Neck)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'ENT UK — Salivary Gland Conditions', url: 'https://www.entuk.org/patients/conditions/' },
        { label: 'NICE CKS — Mumps', url: 'https://cks.nice.org.uk/topics/mumps/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'neck-lumps', label: 'Neck Lumps', subtitle: 'Salivary lumps in the neck-mass differential' },
        { id: 'sle-sjogrens', label: 'SLE & Sjögren\'s', subtitle: 'Autoimmune gland swelling and dry mouth' },
        { id: 'oral-conditions', label: 'Oral & Tongue Conditions', subtitle: 'Dry mouth and oral health' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Head & neck cancer criteria' },
      ],
    },

  ],
}

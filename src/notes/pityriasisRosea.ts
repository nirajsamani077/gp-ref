import type { Note } from '../data/notes'

export const pityriasisRosea: Note = {
  id: 'pityriasis-rosea',
  title: 'Pityriasis Rosea',
  subtitle: 'The herald patch and "Christmas-tree" rash — a self-limiting eruption, and what to exclude',
  tags: ['dermatology'],

  body: `pityriasis rosea herald patch collarette scale Christmas tree distribution trunk self-limiting viral HHV secondary syphilis guttate psoriasis tinea drug eruption pregnancy reassurance emollient`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Pityriasis rosea is a common, benign, self-limiting rash — thought to be viral (human herpesvirus 6/7) — mainly in older children and young adults. It has a characteristic evolution and distribution, so it is usually a confident clinical diagnosis needing only reassurance. The main job is to recognise it and exclude the mimics, especially secondary syphilis.',
    },

    { type: 'heading', level: 2, text: 'Recognition' },
    {
      type: 'list',
      items: [
        'A single "HERALD PATCH" (a larger, oval, scaly plaque) appears first, followed days to ~2 weeks later by a crop of smaller oval pink patches.',
        'The patches have a fine "collarette" of scale at the edge, are distributed along the skin-cleavage lines on the TRUNK — giving a "CHRISTMAS-TREE"/fir-tree pattern on the back — and spare the face, palms and soles.',
        'Mild or no itch; may follow a viral prodrome. It resolves spontaneously over ~6–12 weeks (occasionally longer), sometimes with post-inflammatory pigment change (more noticeable in darker skin).',
      ],
    },

    { type: 'heading', level: 2, text: 'What to Exclude' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Mimics — Especially Secondary Syphilis',
      items: [
        'SECONDARY SYPHILIS can closely mimic pityriasis rosea BUT characteristically INVOLVES the palms and soles, and there is no herald patch — if there is palm/sole involvement, lymphadenopathy, mucosal lesions, or any STI risk, check syphilis serology.',
        'Guttate psoriasis (smaller, more scaly "raindrop" papules, often post-streptococcal), tinea corporis (an asymmetric annular plaque with an active edge — the "herald patch" can be mistaken for this; scrape if unsure), and a drug eruption (review recent drugs).',
        'Nummular/discoid eczema and viral exanthems are other differentials.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'list',
      items: [
        'Reassurance is the mainstay — explain it is benign, non-scarring, minimally contagious, and self-resolving; recurrence is uncommon.',
        'For itch: emollients, a mild-to-moderate topical corticosteroid, and a sedating antihistamine at night if needed.',
        'In PREGNANCY, extensive pityriasis rosea (especially in early pregnancy) has been associated with a small increased risk of adverse outcomes — have a lower threshold to discuss/monitor.',
        'Refer if the diagnosis is uncertain, it is atypical/persistent (>3 months), or syphilis needs excluding (GUM).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Pityriasis Rosea', url: 'https://cks.nice.org.uk/topics/pityriasis-rosea/' },
        { label: 'BAD — Pityriasis Rosea Leaflet', url: 'https://www.bad.org.uk/pils/pityriasis-rosea/' },
        { label: 'DermNet — Pityriasis Rosea', url: 'https://dermnetnz.org/topics/pityriasis-rosea' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'psoriasis', label: 'Psoriasis', subtitle: 'Guttate psoriasis — a key differential' },
        { id: 'fungal-skin-infections', label: 'Fungal Skin Infections', subtitle: 'Tinea corporis mimicking the herald patch' },
        { id: 'stis', label: 'STIs', subtitle: 'Secondary syphilis — the must-exclude mimic' },
        { id: 'skin-lesion-morphology', label: 'Describing Skin Lesions', subtitle: 'Collarette scale and distribution patterns' },
      ],
    },

  ],
}

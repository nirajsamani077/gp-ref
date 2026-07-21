import type { Note } from '../data/notes'

export const scabiesLice: Note = {
  id: 'scabies-lice',
  title: 'Scabies & Lice',
  subtitle: 'Permethrin treatment and the whole-household approach, crusted scabies, and head/pubic lice',
  tags: ['dermatology', 'infection'],

  body: `scabies Sarcoptes scabiei burrows finger webs permethrin 5% malathion crusted Norwegian scabies ivermectin post-scabetic itch head lice Pediculus capitis nits wet combing detection combing dimeticone pubic lice crabs household contacts hypersensitivity`,

  content: [

    { type: 'heading', level: 2, text: 'Scabies' },
    {
      type: 'para',
      text: 'Scabies is an infestation by the mite Sarcoptes scabiei, which burrows into the skin and is spread by prolonged skin-to-skin contact — hence outbreaks in households and care homes. The intense itch is a delayed hypersensitivity reaction, so it appears ~3–6 weeks after a first infestation and, importantly, PERSISTS for up to ~6 weeks after successful treatment (this is not treatment failure). The keys to cure are correct application and treating all contacts simultaneously.',
    },
    {
      type: 'list',
      items: [
        'Intensely itchy (worse at night) generalised papular rash, typically sparing the face in adults; look for burrows (fine, wavy linear tracks) in the finger webs, wrists, sides of the hands, axillae, periumbilical skin and genitals (penile/scrotal papules are diagnostic).',
        'In infants/elderly, the palms, soles, scalp and face can be involved.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Treatment — Permethrin + Treat Contacts Together',
      items: [
        'First-line: permethrin 5% cream. Apply to the WHOLE body (cool, dry skin — NOT after a hot bath), including under the nails, behind the ears, the umbilicus and genitals; in young children and the elderly include the scalp, face and neck. Leave on 8–12 hours (overnight) then wash off. REPEAT after 7 days. ~30–60 g is needed per application (two 30 g tubes for an adult).',
        'Treat ALL household members and close/sexual contacts at the SAME time (one application each), even if asymptomatic.',
        'Decontaminate: wash clothing, towels and bedding at ≥50°C on the treatment day (or seal in a bag for 72 hours).',
        'Second-line: malathion 0.5% aqueous (leave on 24 hours).',
        'Residual itch: emollients, a sedating antihistamine or crotamiton; only use a topical steroid once eradication is confirmed.',
        'Treatment "failure" is usually incorrect application or untreated contacts — re-counsel before switching agent.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Crusted (Norwegian) Scabies',
      items: [
        'A heavily mite-laden, hyperkeratotic, often LESS itchy scaly rash in immunocompromised, frail or institutionalised patients — extremely contagious (huge mite burden).',
        'Needs oral ivermectin (often repeated and combined with topical treatment) plus infection-control/barrier-nursing measures — involve dermatology and infection control.',
      ],
    },

    { type: 'heading', level: 2, text: 'Head Lice' },
    {
      type: 'list',
      items: [
        'Pediculus capitis, spread by head-to-head contact; "nits" are empty egg cases stuck to hairs. Diagnose only by finding LIVE lice (detection combing of wet, conditioned hair with a fine-toothed comb).',
        'ONLY treat if live lice are found; treat the affected person and check (and treat) affected household contacts — no need to keep children off school.',
        'Options: dimeticone 4% (a physical agent with low resistance — but HIGHLY FLAMMABLE, keep away from flames/hairdryers) or malathion 0.5%. Apply per product instructions and REPEAT after 7 days to kill newly hatched lice; wet-combing (Bug Busting) is a non-chemical alternative.',
        'Pubic lice ("crabs"): sexually transmitted — treat with permethrin/malathion, treat sexual partners, and screen for other STIs; refer for eyelash involvement (do not use insecticide near the eyes).',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Scabies', url: 'https://cks.nice.org.uk/topics/scabies/' },
        { label: 'NICE CKS — Head Lice', url: 'https://cks.nice.org.uk/topics/head-lice/' },
        { label: 'PCDS — Scabies', url: 'https://www.pcds.org.uk/clinical-guidance/scabies' },
        { label: 'NHS — Scabies', url: 'https://www.nhs.uk/conditions/scabies/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'atopic-eczema', label: 'Atopic Eczema', subtitle: 'Itchy rash differential; scabies can mimic/flare eczema' },
        { id: 'fungal-skin-infections', label: 'Fungal Skin Infections', subtitle: 'Other itchy/scaly rash differentials' },
        { id: 'stis', label: 'STIs', subtitle: 'Pubic lice — screen for co-existing STIs' },
        { id: 'pruritus', label: 'Generalised Pruritus', subtitle: 'Scabies is the classic mimic of unexplained itch' },
      ],
    },

  ],
}

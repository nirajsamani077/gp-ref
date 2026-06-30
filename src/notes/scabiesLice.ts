import type { Note } from '../data/notes'

export const scabiesLice: Note = {
  id: 'scabies-lice',
  title: 'Scabies & Lice',
  subtitle: 'Permethrin treatment, household contacts, crusted scabies and head/pubic lice',
  tags: ['dermatology', 'infection'],

  body: `scabies Sarcoptes scabiei burrows permethrin malathion crusted scabies ivermectin head lice pubic lice nits wet combing dimeticone household contacts itch hypersensitivity`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Scabies', url: 'https://cks.nice.org.uk/topics/scabies/' },
        { label: 'NICE CKS — Head Lice', url: 'https://cks.nice.org.uk/topics/head-lice/' },
        { label: 'PCDS — Scabies', url: 'https://www.pcds.org.uk/clinical-guidance/scabies' },
      ],
    },

    { type: 'heading', level: 2, text: 'Scabies' },

    {
      type: 'list',
      items: [
        'Infestation by the mite Sarcoptes scabiei, which burrows into the skin; spread by prolonged skin-to-skin contact (outbreaks in households/care homes)',
        'Intensely itchy (worse at night) generalised papular rash, often sparing the face in adults; look for burrows (fine linear tracks) in the finger webs, wrists, axillae and genitals',
        'The itch is a delayed hypersensitivity reaction, so it appears ~3–6 weeks after a first infestation and persists for up to ~6 weeks AFTER successful treatment (this is not treatment failure)',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Treatment — Permethrin + Treat Contacts',
      items: [
        'First-line: permethrin 5% cream — apply to the WHOLE body (cool, dry skin; not after a hot bath), including under nails, behind ears, and the genitals; in young children and the elderly include the scalp/face/neck. Leave on for 8–12 hours (overnight) then wash off. Repeat after 1 week. ~30–60 g is needed per application',
        'Treat all household and close/sexual contacts at the SAME time (one application), even if asymptomatic',
        'Wash clothing, towels and bedding at ≥50°C (or seal in a bag for 72 hours)',
        'Second-line: malathion 0.5% (leave on 24 hours)',
        'Residual itch: sedating antihistamine or crotamiton; only use a topical steroid once eradication is confirmed',
        'Treatment failure is usually due to incorrect application or untreated contacts — re-counsel before changing agent',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Crusted (Norwegian) Scabies',
      items: [
        'A heavily mite-laden, hyperkeratotic, often LESS itchy scaly rash in immunocompromised or frail/institutionalised patients — extremely contagious',
        'Needs oral ivermectin (often combined with topical treatment) and infection-control measures; involve dermatology/specialist',
      ],
    },

    { type: 'heading', level: 2, text: 'Head Lice' },

    {
      type: 'list',
      items: [
        'Pediculus capitis; spread by head-to-head contact; "nits" are the empty egg cases. Diagnose by finding LIVE lice (detection combing with a fine-toothed comp on wet, conditioned hair)',
        'Only treat if live lice are found; treat the affected person and check (treat) household contacts',
        'Options: dimeticone 4% (physical agent, lower resistance — but highly flammable, keep away from flames/hairdryers) or an insecticide (malathion 0.5%); apply, leave per product instructions, and REPEAT after 7 days to kill newly hatched lice; wet combing is a non-chemical alternative',
        'Pubic lice ("crabs"): sexually transmitted — treat with permethrin/malathion, treat partners, screen for other STIs; refer for eyelash involvement',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'atopic-eczema', label: 'Atopic Eczema', subtitle: 'Itchy rash differential; scabies can mimic/flare eczema' },
        { id: 'fungal-skin-infections', label: 'Fungal Skin Infections', subtitle: 'Other itchy/scaly rash differentials' },
        { id: 'stis', label: 'STIs', subtitle: 'Pubic lice — screen for co-existing STIs' },
      ],
    },

  ],
}

import type { Note } from '../data/notes'

export const shinglesChickenpox: Note = {
  id: 'shingles-chickenpox',
  title: 'Shingles & Chickenpox (VZV)',
  subtitle: 'Aciclovir within 72h, herpes zoster ophthalmicus, post-herpetic neuralgia and the vaccine',
  tags: ['infection'],

  body: `shingles herpes zoster chickenpox varicella VZV dermatomal rash aciclovir post-herpetic neuralgia herpes zoster ophthalmicus Hutchinson's sign Ramsay Hunt Shingrix vaccine immunocompromised pregnancy calamine`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Shingles', url: 'https://cks.nice.org.uk/topics/shingles/' },
        { label: 'NICE CKS — Chickenpox', url: 'https://cks.nice.org.uk/topics/chickenpox/' },
        { label: 'Green Book — Shingles Vaccine (Ch.28a)', url: 'https://www.gov.uk/government/publications/shingles-herpes-zoster-the-green-book-chapter-28a' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'Chickenpox = primary varicella-zoster virus (VZV) infection (usually children); shingles = reactivation of dormant VZV in a dorsal root/cranial nerve ganglion (older adults, or when unwell/immunocompromised)',
        'Shingles: often 2–3 days of burning dermatomal pain, then a unilateral vesicular rash in a single dermatome that does NOT cross the midline; clinical diagnosis (viral PCR swab if uncertain)',
        'Chickenpox: an itchy vesicular rash in crops (macule → papule → vesicle → crust, different stages together), often starting centrally',
      ],
    },

    { type: 'heading', level: 2, text: 'Shingles — Management' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Oral Aciclovir Within 72 Hours',
      items: [
        'Offer oral antiviral (started within 72 hours of rash onset) if: moderate/severe pain or rash, non-truncal involvement (e.g. face/eye), age >50 (reduces post-herpetic neuralgia), or immunocompromised/comorbid',
        'Aciclovir 800 mg five times daily for 7–10 days (note this is HIGHER/longer than for HSV); valaciclovir or famciclovir are effective alternatives (better dosing, more expensive)',
        'Immunocompromised or systemically unwell → discuss/admit (risk of disseminated disease; may need IV aciclovir)',
        'Pain relief: paracetamol/co-codamol; NSAIDs are acceptable in adult shingles; consider amitriptyline/gabapentin early for neuropathic pain; topical lidocaine or capsaicin for post-herpetic neuralgia',
        'Infection control: cover lesions; avoid contact with the immunocompromised, non-immune pregnant women and neonates until the lesions have crusted (~5 days)',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Herpes Zoster Ophthalmicus & Ramsay Hunt',
      items: [
        'Herpes zoster ophthalmicus (V1 dermatome): periocular rash ± red eye, with Hutchinson\'s sign (rash on the tip/side of the nose = nasociliary nerve) predicting eye involvement → refer same-day to eye casualty AND start high-dose aciclovir immediately (do not wait) — sight-threatening',
        'Ramsay Hunt syndrome: VZV of the facial nerve → facial palsy with vesicles in the ear/auditory canal, ± vertigo/hearing loss → aciclovir + prednisolone; refer',
        'Other complications: bacterial superinfection, VZV pneumonitis/encephalitis, and disseminated disease (immunocompromised — admit)',
      ],
    },

    { type: 'heading', level: 2, text: 'Chickenpox & Special Groups' },

    {
      type: 'list',
      items: [
        'Chickenpox is contagious from ~2 days before the rash until all lesions have crusted (~5 days after onset); supportive care — calamine, antihistamine for itch, keep nails short, paracetamol for fever',
        'AVOID NSAIDs (ibuprofen) in chickenpox — associated with severe skin/soft-tissue infection (necrotising fasciitis)',
        'Higher-risk exposures — non-immune pregnant women, neonates, and the immunocompromised: seek urgent advice (may need VZV immunoglobulin or aciclovir); adult chickenpox and pregnancy carry a higher complication risk (pneumonitis)',
        'Post-herpetic neuralgia: common (~1 in 3, especially older patients); usually resolves by ~6 months but can be debilitating — antivirals/steroids in the acute phase do NOT prevent it; treat with neuropathic agents',
      ],
    },

    { type: 'heading', level: 2, text: 'Shingles Vaccine' },

    {
      type: 'list',
      items: [
        'Shingrix (a recombinant, NON-live subunit vaccine, 2 doses) has replaced the live Zostavax',
        'Offered to eligible older adults (the programme is expanding — from around age 60/65, with a second dose at 80), and to severely immunocompromised patients from age 50',
        'Because it is non-live, Shingrix is suitable for immunocompromised patients (unlike the old live vaccine)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'neuropathic-pain', label: 'Neuropathic Pain & Gabapentinoids', subtitle: 'Post-herpetic neuralgia management' },
        { id: 'bells-palsy', label: "Bell's Palsy", subtitle: 'Ramsay Hunt syndrome — facial palsy with ear vesicles' },
        { id: 'red-eye', label: 'Red Painful Eye', subtitle: 'Herpes zoster ophthalmicus — sight-threatening' },
        { id: 'immunisation-schedule', label: 'Immunisation Schedule', subtitle: 'Shingles (Shingrix) programme' },
      ],
    },

  ],
}

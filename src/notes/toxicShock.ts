import type { Note } from '../data/notes'

export const toxicShock: Note = {
  id: 'toxic-shock',
  title: 'Toxic Shock Syndrome & Scarlet Fever',
  subtitle: 'Toxin-mediated illness — the TSS emergency, scarlet fever recognition, and invasive Strep A',
  tags: ['infection'],

  body: `toxic shock syndrome TSS staphylococcal streptococcal tampon superantigen fever rash desquamation hypotension multi-organ scarlet fever group A strep sandpaper rash strawberry tongue penicillin invasive Strep A iGAS notifiable`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'These illnesses are caused by bacterial TOXINS (superantigens) from Staphylococcus aureus and group A Streptococcus (Strep pyogenes), rather than the bug itself spreading. They range from the common, treatable scarlet fever to the rare, rapidly fatal toxic shock syndrome. The key GP skills are recognising scarlet fever (and treating promptly to prevent complications and spread) and spotting the toxic-shock/invasive-Strep-A emergency.',
    },

    { type: 'heading', level: 2, text: 'Toxic Shock Syndrome (TSS)' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'A Rapidly Progressive Emergency — 999',
      items: [
        'A sudden febrile illness with a diffuse "SUNBURN"-like macular rash, HYPOTENSION and MULTI-ORGAN involvement (vomiting/diarrhoea, myalgia, confusion, renal/hepatic derangement) — progressing rapidly to shock.',
        'Staphylococcal TSS is classically associated with tampon use, but also with wounds, burns, packing and post-surgical/skin infection; streptococcal TSS often complicates a severe soft-tissue infection (e.g. necrotising fasciitis).',
        'Later, DESQUAMATION (peeling), especially of the palms and soles, occurs ~1–2 weeks after onset.',
        'Immediate action: call 999/admit; remove any source (e.g. tampon/packing); IV fluids, antibiotics and intensive supportive care in hospital. Delay is fatal.',
      ],
    },

    { type: 'heading', level: 2, text: 'Scarlet Fever' },
    {
      type: 'list',
      items: [
        'A toxin-mediated illness from group A Strep, mainly in children: fever, sore throat, and a fine, red, "SANDPAPER" rash (rough to touch), starting on the trunk and sparing the face but with flushed cheeks and circumoral pallor; a white then "STRAWBERRY" tongue; and skin peeling later.',
        'Treat with a 10-day course of PENICILLIN V (azithromycin/clarithromycin if penicillin-allergic) — antibiotics speed recovery, reduce spread, and reduce the (now rare) complications of rheumatic fever and post-streptococcal glomerulonephritis.',
        'It is a NOTIFIABLE disease — notify UKHSA. Exclude from school until 24 hours after starting antibiotics.',
      ],
    },

    { type: 'heading', level: 2, text: 'Invasive Group A Strep (iGAS)' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Be Alert to Severe Strep A',
      items: [
        'Group A Strep can cause severe invasive disease (iGAS) — necrotising fasciitis, streptococcal TSS, pneumonia and sepsis — sometimes following a viral illness (esp. chickenpox) or a "simple" sore throat/skin infection.',
        'Red flags in a child/adult who is deteriorating: high or persistent fever, severe/rapidly spreading skin pain or swelling out of proportion, breathing difficulty, or signs of sepsis → urgent/emergency assessment.',
        'A low threshold for review during known Strep A surges; close contacts of iGAS cases may need chemoprophylaxis (per UKHSA).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Scarlet Fever', url: 'https://cks.nice.org.uk/topics/scarlet-fever/' },
        { label: 'UKHSA — Group A Streptococcus Guidance', url: 'https://www.gov.uk/government/collections/group-a-streptococcal-infections-guidance-and-data' },
        { label: 'UKHSA — Notifiable Diseases', url: 'https://www.gov.uk/guidance/notifiable-diseases-and-causative-organisms-how-to-report' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'sorethroat-tonsillitis', label: 'Sore Throat & Tonsillitis', subtitle: 'Group A Strep pharyngitis' },
        { id: 'cellulitis', label: 'Cellulitis & Skin Infections', subtitle: 'Necrotising fasciitis / severe soft-tissue Strep A' },
        { id: 'childhood-viral-rashes', label: 'Childhood Viral Rashes', subtitle: 'Distinguishing scarlet fever from viral exanthems' },
        { id: 'notifiable-diseases', label: 'Notifiable Diseases', subtitle: 'Scarlet fever/iGAS notification' },
        { id: 'shingles-chickenpox', label: 'Shingles & Chickenpox', subtitle: 'Chickenpox as a risk factor for invasive Strep A' },
      ],
    },

  ],
}

import type { Note } from '../data/notes'

export const wartsMolluscum: Note = {
  id: 'warts-molluscum',
  title: 'Viral Warts & Molluscum Contagiosum',
  subtitle: 'Common/plantar warts, salicylic acid & cryotherapy, molluscum and when treatment is (and isn\'t) needed',
  tags: ['dermatology'],

  body: `viral warts verruca plantar wart common wart HPV salicylic acid lactic acid cryotherapy liquid nitrogen duct tape occlusion molluscum contagiosum pox virus umbilicated papules potassium hydroxide corns calluses filiform plane mosaic warts immunocompromised`,

  content: [

    { type: 'heading', level: 2, text: 'Viral Warts (incl. Verrucae)' },
    {
      type: 'para',
      text: 'Warts are benign proliferations caused by non-oncogenic human papillomavirus. They are very common (~10% of people), have no malignant potential, and most resolve spontaneously — but this can take months to years, and no treatment guarantees clearance. The key messages are reassurance, treating only if bothersome, and recognising the corn/callus mimic.',
    },
    {
      type: 'list',
      items: [
        'Common warts (hands) and plantar warts/verrucae (feet): firm hyperkeratotic papules with pinpoint black dots (thrombosed capillaries) that disrupt (interrupt) the normal skin lines.',
        'Differential — corns/calluses: friction-related, skin lines PRESERVED, no black dots; manage with soaks, pumice/paring and footwear changes.',
        'Other types: mosaic (clustered plaques on the sole), filiform (stalked, on the face/neck), plane (small flat-topped, often facial).',
        'Anogenital warts → refer to GUM for an STI screen (see Genital Warts).',
      ],
    },
    {
      type: 'table',
      headers: ['Option', 'How', 'Notes'],
      rows: [
        ['No treatment', 'Reassure and wait', 'Reasonable — ~1/3 clear within a year; appropriate if asymptomatic'],
        ['Salicylic acid (± lactic acid)', 'Daily for up to 12 weeks; pare/file and soak first, apply under occlusion (plaster)', 'First-line active treatment; ~50% cure; protect surrounding skin'],
        ['Cryotherapy (liquid nitrogen)', 'Every 2–3 weeks for up to ~6 treatments', 'Similar cure rate; painful; stop if no benefit; avoid over nerves/on children\'s digits with care'],
        ['Duct-tape occlusion', 'Cover the wart continuously, replace regularly', 'Cheap adjunct some find helpful'],
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Cautions & Referral',
      items: [
        'Facial/plane warts: AVOID salicylic acid and cryotherapy (scarring/irritation) — consider a topical retinoid or refer.',
        'Refer to dermatology/podiatry if immunocompromised, or for extensive, refractory, painful or cosmetically problematic warts (specialist options: curettage/cautery, laser, intralesional/topical immunomodulators).',
        'Be cautious diagnosing a solitary "wart" on the sole/nail that is atypical, bleeding or non-resolving — verrucous carcinoma/amelanotic melanoma can mimic warts.',
      ],
    },

    { type: 'heading', level: 2, text: 'Molluscum Contagiosum' },
    {
      type: 'para',
      text: 'Molluscum is a common self-limiting poxvirus infection, mainly in children, spread by direct contact and shared towels. Lesions are clusters of small, shiny, flesh-coloured papules with a central dimple (umbilication). It clears on its own — usually within 12–18 months (occasionally up to 5 years) — so reassurance and no treatment is generally the best approach.',
    },
    {
      type: 'list',
      items: [
        'Advice: avoid scratching/squeezing and sharing towels; lesions often become red, crusted or inflamed as they resolve (a sign of clearance, not secondary infection).',
        'Treat coexisting problems: secondary bacterial infection, or a flare of surrounding eczema.',
        'If treatment is wanted for stubborn/cosmetically troublesome lesions: topical potassium hydroxide (5–10% OTC) or cryotherapy — used with caution in children.',
        'Refer if: immunocompromised (extensive disease, e.g. HIV), anogenital lesions (GUM/STI screen), or eyelid-margin lesions with a red eye (ophthalmology).',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Warts & Verrucae', url: 'https://cks.nice.org.uk/topics/warts-verrucae/' },
        { label: 'NICE CKS — Molluscum Contagiosum', url: 'https://cks.nice.org.uk/topics/molluscum-contagiosum/' },
        { label: 'PCDS — Viral Warts', url: 'https://www.pcds.org.uk/clinical-guidance/viral-warts' },
        { label: 'NHS — Warts & Verrucas', url: 'https://www.nhs.uk/conditions/warts-and-verrucas/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'genital-warts', label: 'Genital Warts', subtitle: 'Anogenital HPV — GUM referral and treatment' },
        { id: 'fungal-skin-infections', label: 'Fungal Skin & Nail Infections', subtitle: 'Other common dermatology presentations' },
        { id: 'atopic-eczema', label: 'Atopic Eczema', subtitle: 'Molluscum often flares eczema; eczema herpeticum differential' },
        { id: 'melanoma', label: 'Melanoma', subtitle: 'Be cautious with atypical/changing pigmented or amelanotic lesions' },
      ],
    },

  ],
}

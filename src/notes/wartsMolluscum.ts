import type { Note } from '../data/notes'

export const wartsMolluscum: Note = {
  id: 'warts-molluscum',
  title: 'Viral Warts & Molluscum Contagiosum',
  subtitle: 'Common/plantar warts, salicylic acid & cryotherapy, molluscum and when to refer',
  tags: ['dermatology'],

  body: `viral warts verruca plantar wart HPV salicylic acid cryotherapy duct tape molluscum contagiosum pox virus umbilicated papules potassium hydroxide corns calluses filiform plane warts mosaic warts immunocompromised`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Warts & Verrucae', url: 'https://cks.nice.org.uk/topics/warts-verrucae/' },
        { label: 'NICE CKS — Molluscum Contagiosum', url: 'https://cks.nice.org.uk/topics/molluscum-contagiosum/' },
        { label: 'PCDS — Viral Warts', url: 'https://www.pcds.org.uk/clinical-guidance/viral-warts' },
      ],
    },

    { type: 'heading', level: 2, text: 'Viral Warts (incl. Verrucae)' },

    {
      type: 'list',
      items: [
        'Caused by non-oncogenic HPV; very common (~10%); benign with no malignant potential; most resolve spontaneously (~1/3 within months) but this can take years and no treatment guarantees clearance',
        'Common warts (hands) and plantar warts/verrucae (feet): well-defined hyperkeratotic papules with pinpoint black dots (thrombosed capillaries) that disrupt the skin lines',
        'Differential — corns/calluses: friction-related, skin lines preserved, NO black dots; manage with soaks, pumice/paring, and footwear changes',
        'Other types: mosaic (clustered on the sole), filiform (stalked, on the face), plane (small, flat-topped)',
        'Anogenital warts → refer to GUM for STI screen (see Genital Warts note)',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Treatment — Only if Bothersome',
      items: [
        'No treatment is reasonable (many resolve); treat if painful, in a cosmetically sensitive area, or the patient wishes',
        'Topical salicylic acid (e.g. with lactic acid) daily for up to 12 weeks — pare/file down and soak first; can apply under occlusion (waterproof plaster), ~50% cure',
        'Cryotherapy (liquid nitrogen) weekly for up to ~6 treatments — similar cure rate; stop if no benefit',
        'Duct-tape occlusion is a cheap option some find helpful',
        'Facial/plane warts: avoid salicylic acid/cryotherapy (scarring/irritation) — consider topical retinoid or refer',
        'Refer to dermatology if immunocompromised, or for extensive/refractory/cosmetically problematic warts (specialist options: curettage/cautery, laser, immunomodulators)',
      ],
    },

    { type: 'heading', level: 2, text: 'Molluscum Contagiosum' },

    {
      type: 'list',
      items: [
        'A poxvirus infection — clusters of small, shiny, flesh-coloured, umbilicated (central dimple) papules; very contagious by direct contact; common in children',
        'Self-limiting: most resolve within ~12–18 months (occasionally up to 5 years) — reassurance and no treatment is usually best',
        'Advice: avoid scratching/squeezing and sharing towels; lesions may become inflamed or crusted as they clear (a sign of resolution); treat secondary bacterial infection or flared eczema as usual',
        'If treatment is wanted for stubborn lesions: topical potassium hydroxide (e.g. 5–10% OTC) or cryotherapy',
        'Refer if: immunocompromised (extensive disease, e.g. HIV), anogenital lesions (GUM for STI screen), or eyelid lesions with a red eye (ophthalmology)',
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

import type { Note } from '../data/notes'

export const vitiligo: Note = {
  id: 'vitiligo',
  title: 'Vitiligo',
  subtitle: 'Autoimmune depigmentation — diagnosis, associated conditions, treatment options and psychological support',
  tags: ['dermatology'],

  body: `vitiligo depigmentation white patches leucoderma autoimmune melanocyte Wood's lamp Koebner non-segmental segmental topical corticosteroid tacrolimus pimecrolimus phototherapy narrowband UVB ruxolitinib camouflage sun protection thyroid TFTs`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Vitiligo is an acquired autoimmune condition in which melanocytes are lost, producing well-demarcated depigmented (chalk/milk-white) macules and patches. It affects ~1% of people of all skin types but is far more visible — and psychosocially disabling — in darker skin. Diagnosis is clinical; the main pitfalls are recognising the associated autoimmune diseases and giving realistic expectations about treatment.',
    },

    { type: 'heading', level: 2, text: 'Diagnosis & Types' },
    {
      type: 'list',
      items: [
        'Well-demarcated depigmented macules/patches, often symmetrical over extensor surfaces, around orifices (eyes, mouth, genitals), and at sites of trauma/friction (Koebner phenomenon).',
        'A Wood\'s lamp accentuates the patches (bright blue-white) and helps confirm depigmentation in fair skin.',
        'Non-segmental (commonest): symmetrical, often progressive, associated with other autoimmune disease.',
        'Segmental: unilateral, in a broadly dermatomal distribution, usually earlier-onset (often childhood) and more stable.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Screen for Associated Autoimmune Disease',
      items: [
        'Check thyroid function (± thyroid peroxidase antibodies) — autoimmune thyroid disease is the commonest association; recheck periodically.',
        'Be alert to type 1 diabetes, pernicious anaemia (B12), Addison\'s disease and alopecia areata.',
        'Assess psychological impact at every review — vitiligo causes significant distress, stigma and low mood, especially with visible or extensive disease.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'table',
      headers: ['Option', 'Detail'],
      rows: [
        ['Sun protection & camouflage', 'High-SPF (50) sunscreen — depigmented skin burns easily and tanning increases contrast; skin-camouflage services (e.g. Changing Faces) and self-tanning (dihydroxyacetone) products'],
        ['Topical corticosteroid', 'A potent/very potent steroid trial for limited non-facial areas (e.g. once daily, 1–2 months on/off); monitor for atrophy'],
        ['Topical calcineurin inhibitor', 'Tacrolimus 0.1% or pimecrolimus — preferred for the face and skin folds (no atrophy risk), often used with steroids'],
        ['Phototherapy', 'Narrowband UVB for widespread or actively spreading disease — specialist-led; best repigmentation on the face/trunk'],
        ['Topical JAK inhibitor', 'Ruxolitinib cream is now available in some settings for non-segmental facial/limited vitiligo'],
      ],
    },
    {
      type: 'list',
      items: [
        'Set realistic expectations: repigmentation is slow (months) and variable; the face and trunk respond better than hands, feet and lips; treatment aims to stabilise and partially repigment, not guarantee cure.',
        'Refer to dermatology for rapidly spreading disease, extensive/segmental disease in children, significant psychological impact, diagnostic uncertainty, or when phototherapy/specialist treatments are needed.',
        'Signpost patient support and consider psychological input for low mood.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Vitiligo', url: 'https://cks.nice.org.uk/topics/vitiligo/' },
        { label: 'BAD — Vitiligo Patient Leaflet', url: 'https://www.bad.org.uk/pils/vitiligo/' },
        { label: 'The Vitiligo Society', url: 'https://vitiligosociety.org/' },
        { label: 'Changing Faces — Skin Camouflage', url: 'https://www.changingfaces.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hypothyroidism', label: 'Hypothyroidism', subtitle: 'Autoimmune thyroid disease — check TFTs' },
        { id: 'hyperthyroidism', label: 'Hyperthyroidism', subtitle: 'Graves\' — another associated autoimmune condition' },
        { id: 'alopecia', label: 'Alopecia', subtitle: 'Alopecia areata — associated autoimmune condition' },
        { id: 'diabetes-t1dm', label: 'Type 1 Diabetes', subtitle: 'Associated autoimmune disease' },
        { id: 'topical-steroid-ladder', label: 'Topical Steroid Ladder', subtitle: 'Choosing potency and site-appropriate steroids' },
      ],
    },

  ],
}

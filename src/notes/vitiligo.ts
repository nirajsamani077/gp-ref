import type { Note } from '../data/notes'

export const vitiligo: Note = {
  id: 'vitiligo',
  title: 'Vitiligo',
  subtitle: 'Autoimmune depigmentation — diagnosis, associated conditions, treatment options and psychological support',
  tags: ['dermatology'],

  body: `vitiligo depigmentation white patches autoimmune melanocyte Wood's lamp non-segmental segmental topical corticosteroid tacrolimus phototherapy narrowband UVB camouflage sun protection thyroid autoimmune`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Vitiligo', url: 'https://cks.nice.org.uk/topics/vitiligo/' },
        { label: 'BAD — Vitiligo Patient Leaflet', url: 'https://www.bad.org.uk/pils/vitiligo/' },
        { label: 'The Vitiligo Society', url: 'https://vitiligosociety.org/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Diagnosis Is Usually Clinical',
      items: [
        'Well-demarcated depigmented (chalk/milk-white) macules and patches, often symmetrical over extensor surfaces, around orifices, and at sites of friction (Koebner phenomenon)',
        'A Wood\'s lamp accentuates the patches and helps in fair skin; depigmentation is more visible and disfiguring in darker skin',
        'It is an autoimmune condition — screen for and warn about associated autoimmune disease, especially thyroid',
      ],
    },

    { type: 'heading', level: 2, text: 'Types & Associations' },

    {
      type: 'list',
      items: [
        'Non-segmental (commonest): symmetrical, often progressive, associated with other autoimmune conditions',
        'Segmental: unilateral, in a dermatomal-like distribution, usually stable and earlier-onset (often childhood)',
        'Associated autoimmune conditions: autoimmune thyroid disease (check TFTs and consider thyroid antibodies), type 1 diabetes, pernicious anaemia, Addison\'s, alopecia areata',
        'Assess psychological impact — vitiligo can cause significant distress, stigma and low mood, especially in visible areas or darker skin',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'table',
      headers: ['Option', 'Notes'],
      rows: [
        ['Sun protection & camouflage', 'High-SPF sunscreen (depigmented skin burns easily and lack of contrast); skin camouflage services and self-tanning products'],
        ['Topical corticosteroid', 'A potent steroid trial for limited non-facial areas; monitor for atrophy — use intermittently'],
        ['Topical calcineurin inhibitor', 'Tacrolimus/pimecrolimus — preferred for face and skin folds (no atrophy risk)'],
        ['Phototherapy', 'Narrowband UVB for widespread/active disease — specialist-led'],
        ['Newer options', 'Topical ruxolitinib (JAK inhibitor) available in some settings for facial/non-segmental vitiligo'],
      ],
    },

    {
      type: 'list',
      items: [
        'Set realistic expectations: repigmentation is slow and variable; facial and truncal lesions respond better than hands/feet',
        'Refer to dermatology for rapidly spreading disease, significant psychological impact, diagnostic uncertainty, or when phototherapy/specialist treatments are needed',
        'Address low mood — signpost support groups and consider psychological input',
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

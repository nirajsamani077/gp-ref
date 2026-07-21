import type { Note } from '../data/notes'

export const jointHypermobility: Note = {
  id: 'joint-hypermobility',
  title: 'Joint Hypermobility & hEDS',
  subtitle: 'From asymptomatic hypermobility to hypermobility spectrum disorder and hypermobile Ehlers-Danlos syndrome',
  tags: ['msk'],

  body: `joint hypermobility Beighton score hypermobility spectrum disorder HSD hypermobile Ehlers-Danlos syndrome hEDS chronic widespread pain subluxation dislocation autonomic dysautonomia POTS fatigue physiotherapy proprioception pacing connective tissue vascular EDS marfanoid`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Joint hypermobility exists on a spectrum. Generalised hypermobility is common and often asymptomatic (even an asset in dancers and athletes). At the other end, hypermobile Ehlers-Danlos syndrome (hEDS) is a clinical diagnosis with strict criteria and multisystem features. In between sits hypermobility spectrum disorder (HSD) — hypermobility with musculoskeletal symptoms that does not meet full hEDS criteria. Management is broadly the same across the symptomatic end: strengthen, protect joints, and treat the associated problems.',
    },

    { type: 'heading', level: 2, text: 'Assessment — the Beighton Score' },
    {
      type: 'list',
      items: [
        'Beighton score (out of 9), 1 point each side unless stated: passive little-finger dorsiflexion >90° (×2), thumb to volar forearm (×2), elbow hyperextension >10° (×2), knee hyperextension >10° (×2), and palms flat on the floor with straight knees (×1).',
        'A raised score (age/sex-adjusted: ≥6 pre-pubertal, ≥5 adult, ≥4 over 50) confirms generalised hypermobility — but does NOT by itself diagnose hEDS.',
        'Ask about the wider picture: chronic widespread pain, recurrent subluxations/dislocations, soft/stretchy or fragile skin, easy bruising, fatigue, and autonomic symptoms (light-headedness on standing).',
      ],
    },

    { type: 'heading', level: 2, text: 'Associated Problems' },
    {
      type: 'table',
      headers: ['System', 'Common associations'],
      rows: [
        ['Musculoskeletal', 'Chronic pain, joint instability/dislocations, soft-tissue injuries, earlier osteoarthritis'],
        ['Autonomic', 'Postural tachycardia syndrome (POTS), orthostatic intolerance'],
        ['GI', 'Functional gut symptoms, reflux, constipation, bloating'],
        ['Other', 'Fatigue, anxiety, pelvic-floor dysfunction (incl. prolapse/incontinence), poor/slow wound healing, migraine'],
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Red Flags — Think of a Rarer, Serious EDS Type',
      items: [
        'Vascular EDS: family history of arterial/organ/uterine rupture, translucent skin with visible veins, easy severe bruising — needs URGENT genetics referral (life-threatening).',
        'Marfanoid habitus, lens dislocation, aortic root dilatation → consider Marfan/Loeys-Dietz — refer for cardiac and genetic assessment.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'list',
      items: [
        'Core treatment is graded physiotherapy focused on strengthening, proprioception and PACING — protecting and stabilising joints rather than stretching them; avoid end-range hyperextension.',
        'Multimodal chronic-pain management; be cautious with opioids; treat coexisting anxiety/depression and sleep problems.',
        'Manage POTS conservatively first: increased fluid and salt, compression garments, and graded exercise; refer if severe.',
        'Refer to rheumatology/relevant specialist if the diagnosis is uncertain, symptoms are refractory, or hEDS criteria are met; urgent genetics if a vascular/rarer type is suspected.',
        'Signpost patient support (The Ehlers-Danlos Society) and coordinate the often multisystem care.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'The Ehlers-Danlos Society — Diagnostic Criteria', url: 'https://www.ehlers-danlos.com/heds-diagnostic-checklist/' },
        { label: 'RCGP — hEDS Toolkit', url: 'https://www.rcgp.org.uk/clinical-and-research/resources/toolkits/ehlers-danlos-syndromes-toolkit.aspx' },
        { label: 'NHS — Joint Hypermobility Syndrome', url: 'https://www.nhs.uk/conditions/joint-hypermobility-syndrome/' },
        { label: 'STEPS / Hypermobility Syndromes Association', url: 'https://www.hypermobility.org/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'chronic-pain', label: 'Chronic Pain', subtitle: 'Multimodal management of widespread pain' },
        { id: 'fibromyalgia', label: 'Fibromyalgia', subtitle: 'Frequent overlap with widespread pain and fatigue' },
        { id: 'cfs-me', label: 'CFS/ME', subtitle: 'Fatigue and pacing overlap' },
        { id: 'osteoarthritis', label: 'Osteoarthritis', subtitle: 'Earlier-onset OA in hypermobile joints' },
        { id: 'palpitations', label: 'Palpitations', subtitle: 'POTS as an associated autonomic feature' },
      ],
    },

  ],
}

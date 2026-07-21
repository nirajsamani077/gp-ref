import type { Note } from '../data/notes'

export const jointHypermobility: Note = {
  id: 'joint-hypermobility',
  title: 'Joint Hypermobility & hEDS',
  subtitle: 'From asymptomatic hypermobility to hypermobility spectrum disorder and hypermobile Ehlers-Danlos syndrome',
  tags: ['msk'],

  body: `joint hypermobility Beighton score hypermobility spectrum disorder HSD hypermobile Ehlers-Danlos syndrome hEDS chronic pain subluxation dislocation autonomic dysautonomia POTS fatigue physiotherapy proprioception connective tissue`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'The Ehlers-Danlos Society — Diagnostic Criteria', url: 'https://www.ehlers-danlos.com/' },
        { label: 'NICE CKS — Joint Hypermobility', url: 'https://cks.nice.org.uk/' },
        { label: 'RCGP — hEDS Toolkit', url: 'https://www.rcgp.org.uk/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'A Spectrum, Not a Single Disease',
      items: [
        'Generalised joint hypermobility is common and often asymptomatic (an asset in dancers/athletes)',
        'Hypermobility Spectrum Disorder (HSD) = hypermobility plus musculoskeletal symptoms without meeting full hEDS criteria',
        'Hypermobile Ehlers-Danlos syndrome (hEDS) is a clinical diagnosis using strict 2017 criteria; there is currently no confirmatory gene test',
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment — the Beighton Score' },

    {
      type: 'list',
      items: [
        'Beighton score (out of 9): passive little-finger dorsiflexion >90° (1 each side), thumb to forearm (1 each), elbow hyperextension >10° (1 each), knee hyperextension >10° (1 each), palms flat on floor with straight knees (1)',
        'A raised score (age/sex adjusted) confirms generalised hypermobility but does not by itself diagnose hEDS',
        'Ask about the wider picture: chronic widespread pain, recurrent subluxations/dislocations, soft/stretchy skin, easy bruising, fatigue, and autonomic symptoms (dizziness on standing — POTS)',
      ],
    },

    { type: 'heading', level: 2, text: 'Associated Problems' },

    {
      type: 'table',
      headers: ['System', 'Common associations'],
      rows: [
        ['MSK', 'Chronic pain, joint instability, early osteoarthritis, soft-tissue injuries'],
        ['Autonomic', 'Postural tachycardia syndrome (POTS), orthostatic intolerance'],
        ['GI', 'Functional gut symptoms, reflux, constipation'],
        ['Other', 'Fatigue, anxiety, pelvic-floor dysfunction, poor wound healing'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Core treatment is physiotherapy focused on strengthening, proprioception and pacing — protecting joints rather than stretching them; avoid hyperextending joints',
        'Multimodal chronic-pain management; be cautious with opioids; treat coexisting anxiety/depression',
        'Address POTS with fluids, salt, compression and graded exercise; refer if severe',
        'Refer to rheumatology/specialist if the diagnosis is uncertain, or features suggest a rarer/vascular EDS type (family history of arterial/organ rupture, marfanoid features) which needs urgent genetics referral',
        'Signpost patient support (The Ehlers-Danlos Society); coordinate care as symptoms are often multisystem',
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

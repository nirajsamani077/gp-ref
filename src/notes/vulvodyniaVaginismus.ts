import type { Note } from '../data/notes'

export const vulvodyniaVaginismus: Note = {
  id: 'vulvodynia-vaginismus',
  title: 'Vulvodynia & Vaginismus',
  subtitle: 'Chronic vulval pain and involuntary vaginal muscle spasm — diagnosis, and a multimodal management approach',
  tags: ['gynaecology'],

  body: `vulvodynia provoked localised vestibulodynia unprovoked generalised chronic vulval pain dyspareunia vaginismus pelvic floor muscle spasm cotton bud test amitriptyline gabapentin topical lidocaine vaginal trainers dilators psychosexual physiotherapy`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Vulvodynia and vaginismus are common but under-recognised causes of vulval pain and painful/impossible penetration, and they often coexist. Both are distressing, frequently long-standing before diagnosis, and respond best to a multimodal, patient-centred approach combining education, physiotherapy, psychosexual support and — for vulvodynia — neuropathic pain treatment. The first step is a positive diagnosis after excluding treatable causes, not another cycle of antifungals.',
    },

    { type: 'heading', level: 2, text: 'Vulvodynia' },
    {
      type: 'list',
      items: [
        'Chronic vulval pain (≥3 months) — burning, stinging, rawness — with NO identifiable cause (no dermatosis, infection or neurological lesion). It is a pain syndrome, considered neuropathic/hypersensitivity in nature.',
        'Subtypes: provoked (pain on touch/pressure/intercourse — localised "vestibulodynia" is common) vs unprovoked (spontaneous, often generalised); the "cotton-bud test" maps tender areas at the vestibule.',
        'Exclude treatable causes first: candidiasis, lichen sclerosus/planus, eczema/contact dermatitis, herpes, atrophy, and referred/neurological pain (see Vulval Conditions).',
        'Management: gentle vulval skin care (soap substitute, avoid irritants), topical local anaesthetic (lidocaine) before intercourse, and neuropathic pain agents (amitriptyline or gabapentin) for persistent pain; pelvic-floor physiotherapy and psychosexual therapy; refer to a specialist vulval/pain clinic if refractory.',
      ],
    },

    { type: 'heading', level: 2, text: 'Vaginismus' },
    {
      type: 'list',
      items: [
        'Recurrent or persistent involuntary spasm/tightening of the pelvic-floor and perivaginal muscles on attempted penetration (intercourse, tampon, or examination), often with fear/anticipation of pain — which can make examination itself difficult or impossible.',
        'May be primary (never been able to have penetration) or secondary (after a trigger — pain, trauma, childbirth, or a vulval condition); frequently has a strong psychological/anxiety component.',
        'Management is graded and patient-led: education about the anatomy and the spasm cycle; relaxation and pelvic-floor "down-training"; graded vaginal trainers/dilators the woman controls herself; and psychosexual therapy/CBT. Treat any underlying pain condition. Refer to psychosexual services/specialist physiotherapy.',
      ],
    },

    { type: 'heading', level: 2, text: 'General Approach' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Believe, Explain, Support',
      items: [
        'Validate the pain and its impact on relationships, mood and self-esteem — these conditions are real and treatable, and acknowledgement is therapeutic.',
        'Take a sensitive sexual and psychosocial history; ask about (and address) past sexual trauma with care.',
        'Set realistic expectations — improvement is usually gradual and multimodal; involve the partner where appropriate.',
        'Screen for and treat coexisting depression/anxiety.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Vulval Pain', url: 'https://cks.nice.org.uk/topics/vulval-problems/' },
        { label: 'BSSVD — Vulval Pain Guidance', url: 'https://bssvd.org/' },
        { label: 'Vulval Pain Society', url: 'https://www.vulvalpainsociety.org/' },
        { label: 'College of Sexual & Relationship Therapists', url: 'https://www.cosrt.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'vulval-conditions', label: 'Vulval Dermatoses & Cancer', subtitle: 'Exclude a treatable cause of vulval pain first' },
        { id: 'menopause', label: 'Menopause', subtitle: 'Vulvovaginal atrophy as a cause of dyspareunia' },
        { id: 'chronic-pelvic-pain', label: 'Chronic Pelvic Pain', subtitle: 'Overlapping pelvic-pain syndromes' },
        { id: 'chronic-pain', label: 'Chronic Pain', subtitle: 'Neuropathic pain and biopsychosocial management' },
      ],
    },

  ],
}

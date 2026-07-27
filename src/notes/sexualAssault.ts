import type { Note } from '../data/notes'

export const sexualAssault: Note = {
  id: 'sexual-assault',
  title: 'Sexual Assault & Post-Exposure Care',
  subtitle: 'The SARC pathway, preserving forensic evidence, emergency contraception, PEP/PEPSE and safeguarding',
  tags: ['gynaecology'],

  body: `sexual assault rape SARC sexual assault referral centre forensic evidence emergency contraception PEP PEPSE HIV post exposure prophylaxis hepatitis B STI screening safeguarding trauma-informed consent police disclosure`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A disclosure of sexual assault requires a calm, believing, trauma-informed response and awareness of a time-critical pathway. The two priorities that must not be missed are: signposting to a Sexual Assault Referral Centre (SARC) so forensic evidence can be preserved (which is time-limited), and providing urgent medical post-exposure care — emergency contraception and HIV/other prophylaxis. The survivor is in control of decisions, including whether to involve the police.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Immediate Priorities',
      items: [
        'Ensure safety and treat any acute injuries/medical emergency first.',
        'Offer referral to a SEXUAL ASSAULT REFERRAL CENTRE (SARC) — they provide specialist forensic examination and holistic support, and can store evidence even if the person is undecided about police involvement (self-referral is possible).',
        'Preserve forensic evidence: advise (gently, without pressure) to avoid washing, changing clothes, eating/drinking, brushing teeth or using the toilet if possible before a forensic exam — but never let evidence concerns delay urgent medical care.',
        'The decision to report to police is the SURVIVOR\'S — support either choice; do not examine for forensic purposes yourself unless trained.',
      ],
    },

    { type: 'heading', level: 2, text: 'Medical Post-Exposure Care' },
    {
      type: 'table',
      headers: ['Need', 'Action & timing'],
      rows: [
        ['Emergency contraception', 'Offer a copper IUD (most effective, up to 5 days) or oral EC (ulipristal/levonorgestrel) — as early as possible; discuss ongoing contraception'],
        ['HIV PEP (PEPSE)', 'Assess risk and offer HIV post-exposure prophylaxis ideally within 24h and up to 72h — refer urgently to GUM/SARC/ED; do not delay'],
        ['Hepatitis B', 'Offer accelerated hepatitis B vaccination (± immunoglobulin) per risk assessment'],
        ['STI screening & prophylaxis', 'Baseline and follow-up STI testing (timed for window periods); consider antibiotic prophylaxis; arrange via GUM/SARC'],
        ['Pregnancy', 'Pregnancy test and follow-up; discuss options if a pregnancy results'],
      ],
    },

    { type: 'heading', level: 2, text: 'Wider Care' },
    {
      type: 'list',
      items: [
        'Trauma-informed approach: believe the person, go at their pace, take only the history needed for their care, obtain consent for each step, and offer a chaperone/support person.',
        'Safeguarding: consider risks to children (a child/under-18 victim triggers child-safeguarding duties) and vulnerable adults; assess ongoing risk from the perpetrator (domestic abuse overlap).',
        'Mental health: acute distress and later PTSD/depression are common — offer follow-up, and signpost specialist counselling/ISVA (Independent Sexual Violence Advisor) support.',
        'Document factually and contemporaneously (the account in the person\'s own words, injuries), as records may later be relevant; maintain confidentiality within safeguarding limits.',
        'Arrange clear follow-up for results, prophylaxis completion, contraception and emotional support.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NHS — Help After Rape & Sexual Assault (Find a SARC)', url: 'https://www.nhs.uk/live-well/sexual-health/help-after-rape-and-sexual-assault/' },
        { label: 'BASHH — PEPSE Guideline', url: 'https://www.bashh.org/guidelines' },
        { label: 'Rape Crisis England & Wales', url: 'https://rapecrisis.org.uk/' },
        { label: 'FSRH — Emergency Contraception', url: 'https://www.fsrh.org/standards-and-guidance/documents/ceu-clinical-guidance-emergency-contraception/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'emergency-contraception', label: 'Emergency Contraception', subtitle: 'Copper IUD and oral options, timing and efficacy' },
        { id: 'hiv', label: 'HIV', subtitle: 'PEP/PEPSE risk assessment and initiation' },
        { id: 'stis', label: 'STIs', subtitle: 'Screening, prophylaxis and window periods' },
        { id: 'domestic-violence', label: 'Domestic Abuse', subtitle: 'Overlapping safeguarding and risk assessment' },
        { id: 'ptsd', label: 'PTSD', subtitle: 'Psychological sequelae and follow-up' },
      ],
    },

  ],
}

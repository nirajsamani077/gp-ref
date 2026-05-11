import type { Note } from '../data/notes'

export const childDevelopment: Note = {
  id: 'child-development',
  title: 'Child Development Milestones',
  subtitle: 'Red flags for referral, regression, developmental delay and surveillance schedule',
  tags: ['paediatrics'],

  body: 'child development milestones developmental delay red flags regression premature corrected age 6 week check 10 month review 2.5 year review gross motor fine motor speech language social hearing vision head circumference centile paediatrics referral FBC TFT CK Vit D growth chart RCPCH',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Developmental Surveillance — Key Principles',
      items: [
        'Take parental concerns seriously — parents are usually right',
        'Surveillance contacts: 6–8 week GP check, Health Visitor (HV) 10-month review, HV 2–2.5 year review; otherwise opportunistic',
        'Premature infants: use corrected age (gestational age) for milestones until 2 years old (4 years if very premature <30 weeks)',
        'For all developmental concerns: plot height, weight, head circumference on RCPCH growth chart; check hearing and vision',
      ],
    },

    { type: 'heading', level: 2, text: 'Developmental Red Flags — Refer to Paediatrics' },

    {
      type: 'table',
      headers: ['Age', 'Red Flag — Refer if...'],
      rows: [
        ['6 weeks', 'No response to sound or visual stimuli; no social smile emerging'],
        ['3 months', 'Lack of social smile or social response; not fixing and following'],
        ['6 months', 'No reaching for objects; no head control when pulled to sit'],
        ['9 months', 'No babbling; no turn-taking or social interaction'],
        ['12 months', 'Cannot sit unsupported; not weight-bearing when standing'],
        ['18 months', 'Cannot walk independently; no single words ("mama", "dada" with meaning)'],
        ['2 years', 'Cannot run; does not join 2 words ("more juice"); does not share interest (pointing, showing)'],
        ['3 years', 'Cannot climb stairs; limited words — cannot communicate basic needs clearly'],
        ['Any age', 'Loss of a previously acquired skill (regression); concerns about vision or hearing; asymmetric movements especially before age 1; persistent toe-walking; head circumference crossing 2 centile lines (up or down); HC >99.6th or <0.4th centile'],
      ],
      caption: 'Refer ANY child with regression of skills urgently — this may indicate a neurodegenerative condition and should not wait.',
    },

    { type: 'heading', level: 2, text: 'Investigations if Not Referring Immediately' },

    {
      type: 'list',
      items: [
        'FBC: anaemia, lymphopenia',
        'TFTs: hypothyroidism can cause global developmental delay',
        'Bone profile and Vitamin D: rickets, metabolic bone disease',
        'CK: if muscle weakness or hypotonia suspected (Duchenne muscular dystrophy)',
        'Ensure formal hearing assessment (audiology): often arranged via HV or via UHDB audiology',
        'Ensure formal vision check (orthoptist or optometrist)',
        'Plot on RCPCH growth chart: height, weight, head circumference — note centile crossings',
      ],
    },

    { type: 'heading', level: 2, text: 'Developmental Domains to Assess' },

    {
      type: 'table',
      headers: ['Domain', 'Examples'],
      rows: [
        ['Gross motor', 'Head control, rolling, sitting, crawling, walking, running, stairs'],
        ['Fine motor / vision', 'Reaching, pincer grip, building bricks, drawing, writing'],
        ['Speech / language', 'Babbling, first words, two-word phrases, sentences, intelligibility'],
        ['Social / emotional', 'Social smile, eye contact, joint attention (pointing, showing), play, peer interaction'],
        ['Self-care', 'Feeding, dressing, toilet training'],
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Causes of Developmental Delay to Consider',
      items: [
        'Global developmental delay: genetic syndromes (Down\'s, Fragile X, Angelman\'s), hypothyroidism, severe hearing/visual impairment, cerebral palsy, metabolic disorders, neurodegenerative conditions',
        'Language delay alone: hearing impairment (ALWAYS exclude first), autism spectrum disorder, speech and language disorder, selective mutism, bilingual environment',
        'Motor delay alone: cerebral palsy, muscular dystrophy, hypotonia (Down\'s, Prader-Willi), spina bifida',
        'Regression at any age: neurodegenerative condition, epilepsy (especially Landau-Kleffner), psychosocial stress, acquired brain injury — REFER URGENTLY',
        'Premature infants: higher risk of cerebral palsy, developmental delay, learning difficulties — specialist surveillance until 2–4 years',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'General developmental concern: refer to UHDB Queen\'s Hospital Burton General Paediatrics via e-RS (include height/weight/HC centiles, hearing/vision status, specific concerns)',
        'Alternative: Good Hope Hospital (UHB) paediatrics',
        'Speech and language delay: direct referral to Staffordshire SaLT service — self-referral or GP referral via MPFT community services',
        'Hearing assessment: refer to UHDB Burton audiology or via HV-initiated audiological referral',
        'CAMHS/autism assessment (if autism suspected): refer to CaFSPA at Holly Lodge, St Michaels Court, Lichfield WS13 6EF',
        'Health Visitor: coordinate with HV team for surveillance and support — MPFT community team',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Developmental Delay', url: 'https://cks.nice.org.uk/topics/developmental-delay/' },
        { label: 'RCPCH — Growth Charts', url: 'https://www.rcpch.ac.uk/resources/uk-who-growth-charts' },
        { label: 'SIGN 159 — Assessment and Management of DD', url: 'https://www.sign.ac.uk/our-guidelines/assessment-and-management-of-developmental-delay-in-children/' },
        { label: 'NHS — Your Childs Development', url: 'https://www.nhs.uk/conditions/baby/babys-development/' },
      ],
    },
  ],
}

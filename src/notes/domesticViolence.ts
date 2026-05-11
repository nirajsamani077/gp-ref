import type { Note } from '../data/notes'

export const domesticViolence: Note = {
  id: 'domestic-violence',
  title: 'Domestic Violence & Abuse',
  subtitle: 'Safe enquiry, DASH risk tool, MARAC referral, honour-based violence and coercive control',
  tags: ['safeguarding', 'mental health'],

  body: "domestic violence domestic abuse DV DA coercive control physical emotional sexual financial abuse DASH risk tool MARAC multi-agency risk assessment conference safe enquiry safeguarding children IRIS identification referral improve safety Women's Aid Refuge National Domestic Abuse Helpline honour based violence forced marriage Karma Nirvana stalking GDPR information sharing",

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Domestic Violence & Abuse — Definition',
      items: [
        'Any controlling, coercive, threatening behaviour, violence or abuse between those aged 16+ who are, or have been, intimate partners or family members',
        'Types of abuse: physical, sexual, psychological/emotional, financial/economic, coercive control',
        'Coercive control: a pattern of behaviour that creates fear, dependency or compliance — may occur without physical violence; legally recognised in England and Wales',
        'Domestic abuse occurs across all ages, genders, sexual orientations and social groups — men are also affected',
      ],
    },

    { type: 'heading', level: 2, text: 'Recognising Domestic Abuse in Consultations' },

    {
      type: 'list',
      items: [
        'Red flags: recurrent vague presentations, unexplained injuries, frequent attendances, MH conditions (depression/anxiety/PTSD), partner attending all appointments and speaking for the patient, patient looks to partner before answering',
        'Pregnancy: ask about DV at booking and at every antenatal appointment — DV often starts or escalates in pregnancy',
        'Safe enquiry: always see the patient alone; use a normalising approach',
        '"I ask all my patients — do you feel safe at home?"',
        '"Has somebody hurt you or made you feel frightened?"',
        '"Have you ever felt pressured or controlled by a partner or family member?"',
        'Document sensitively: use neutral language; do NOT document in a way that the patient could face risk if medical records are accessed by abuser',
      ],
    },

    { type: 'heading', level: 2, text: 'Risk Assessment — DASH Tool' },

    {
      type: 'list',
      items: [
        'Complete the DASH (Domestic Abuse, Stalking, Honour-Based Violence) risk checklist when abuse is disclosed',
        'DASH score ≥14 (or <14 with professional escalation concerns) = HIGH RISK = refer to MARAC',
        'High-risk indicators: sexual abuse, pregnancy or new baby, stalking, victim isolated from support, escalating frequency/severity, perpetrator uses weapons or threatens to kill, access to weapons, substance misuse',
        'Obtain consent to make MARAC referral where possible — but safety takes precedence if serious risk',
        'Check with the practice safeguarding lead before making a MARAC referral',
        'MARAC: multi-agency meeting (police, social care, probation, health, housing) sharing information and creating a safety plan for high-risk victims',
      ],
    },

    { type: 'heading', level: 2, text: 'Management in Consultation' },

    {
      type: 'table',
      headers: ['Scenario', 'Action'],
      rows: [
        ['Immediate safety risk', 'Call 999 immediately; follow child and adult safeguarding procedures'],
        ['Children involved', 'Always initiate child safeguarding procedures — children witnessing DV are at risk of emotional abuse and harm'],
        ['DASH HIGH risk (≥14)', 'Refer to MARAC via safeguarding lead; signpost to IDVA (Independent Domestic Violence Adviser)'],
        ['DASH MEDIUM/LOW risk', 'Safety planning, signposting to specialist services; document; safety net'],
        ['Acute injury', 'Treat and document injuries with body maps; consider forensic medical examination if recent assault; patient\'s decision'],
        ['All disclosures', 'Provide NDADV helpline number; signpost to Women\'s Aid/Refuge; document clearly but sensitively; safety planning discussion'],
      ],
    },

    { type: 'heading', level: 2, text: 'Honour-Based Violence & Forced Marriage' },

    {
      type: 'list',
      items: [
        'Honour-based violence (HBV): abuse perpetrated in the name of family honour — can include forced marriage, "honour" killings, acid attacks, forced hymenoplasty',
        'Forced marriage: distinct from arranged marriage — legally prohibited in England and Wales; Forced Marriage Unit (FMU): 020 7008 0151',
        'Do NOT attempt mediation or involve family members — significant risk of escalation',
        'Karma Nirvana: specialist charity for HBV and forced marriage — 0800 5999 247',
        'Refer to specialist domestic violence service and involve police if immediate risk',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Information Sharing & GDPR',
      items: [
        'GDPR does NOT prevent sharing information to protect someone from serious harm',
        'Always try to obtain consent first — but you may share without consent if there is serious risk of harm, or the victim is being coerced',
        'For ADULTS with capacity who refuse sharing: more complex — seek advice from your MDU/MPS if unsure',
        'For children involved: information sharing is guided by child safeguarding legislation — consent not required if child is at risk',
        'Document all decisions clearly — including if you decided NOT to share and your reasons',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Resources — Darwin Practice, Lichfield',
      items: [
        'Staffordshire DV service: Staffordshire Commissioner\'s Office for DV services — contact via 0300 111 5 111 or check staffordshireconnects.info',
        'MARAC referral: via Staffordshire Police or safeguarding lead — complete DASH tool at safelives.org.uk',
        'Children involved: Staffordshire MASH 0800 1313 126',
        'IRIS training for GPs: IRIS (Identification and Referral to Improve Safety) — specialist training for general practice to improve DV identification',
        'National services: Women\'s Aid (womensaid.org.uk), Refuge (nationaldahelpline.org.uk — 0808 2000 247, 24/7 free)',
        'Honour-based violence: Karma Nirvana 0800 5999 247; Forced Marriage Unit 020 7008 0151',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE PH50 — Domestic Violence', url: 'https://www.nice.org.uk/guidance/ph50' },
        { label: 'SafeLives — DASH Risk Tool', url: 'https://safelives.org.uk/practice_blog/resources-dashriskchecklist' },
        { label: 'National DA Helpline (Refuge)', url: 'https://www.nationaldahelpline.org.uk/' },
        { label: "Women's Aid", url: 'https://www.womensaid.org.uk/' },
        { label: 'IRIS Programme', url: 'https://www.irisdomesticviolence.org.uk/' },
      ],
    },
  ],
}

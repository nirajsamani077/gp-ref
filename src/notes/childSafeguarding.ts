import type { Note } from '../data/notes'

export const childSafeguarding: Note = {
  id: 'child-safeguarding',
  title: 'Child Safeguarding & Non-Accidental Injury',
  subtitle: 'Physical abuse, neglect, sexual abuse, MARAC, early help levels and information sharing',
  tags: ['paediatrics', 'safeguarding'],

  body: 'child safeguarding NAI non-accidental injury physical abuse neglect sexual abuse FGM female genital mutilation child trafficking exploitation MARAC multi agency risk assessment DASH risk tool early help 4 levels of need parental responsibility Gillick Fraser information sharing GDPR social care referral police domestic violence voice of the child documentation',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Consider vs Suspect — Two Thresholds',
      items: [
        '"Consider" — maltreatment is a possible cause: information gathering, discussion with colleagues, document carefully; does not automatically trigger referral',
        '"Suspect" — serious level of concern: IMMEDIATE safeguarding referral to Children\'s Social Care AND discuss with named/designated safeguarding lead',
        'Imminent risk to safety OR child trafficking/sexual exploitation: call police (999) immediately',
        'If abuse suspected: arrange admission to a safe place away from the perpetrator — contact on-call paediatric consultant',
      ],
    },

    { type: 'heading', level: 2, text: 'The 4 Levels of Need (Early Help Framework)' },

    {
      type: 'table',
      headers: ['Level', 'Description', 'Response'],
      rows: [
        ['Level 1', 'Normal basic needs — universal services adequate', 'Standard primary care, Health Visitor, school'],
        ['Level 2', 'Additional support needed — family under some stress', 'Early Help — practical/emotional support, enhanced HV, parenting support'],
        ['Level 3', 'Complex needs — child in need', 'Early Help with multi-agency plan; Children\'s Social Care involvement'],
        ['Level 4', 'Significant risk or harm — child protection', 'Immediate Children\'s Social Care referral; parental consent NOT needed to share information at Level 4'],
      ],
      caption: 'Each local authority defines thresholds for their area. Staffordshire uses the same framework. If in doubt about level, discuss with the named GP for safeguarding or the Staffordshire MASH (Multi-Agency Safeguarding Hub).',
    },

    { type: 'heading', level: 2, text: 'Physical Abuse — Signs to Consider or Suspect' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Physical Abuse Red Flags',
      items: [
        'CONSIDER: No adequate explanation for an injury; story changes between carers; delay in seeking help',
        'SUSPECT (report): Bruising or petechiae in a non-mobile child (under 6 months especially)',
        'SUSPECT: Bruising in a definable shape (hand, stick, ligature, bite marks)',
        'SUSPECT: Bruising on non-bony areas of body — ears, neck, buttocks, genitalia',
        'SUSPECT: Burns/scalds or cold injury without plausible explanation',
        'SUSPECT: Fracture without a fragility bone condition; intracranial or retinal haemorrhage; multiple fractures at different stages of healing',
        'Unexplained abdominal injuries, torn frenulum in infant — high specificity for NAI',
      ],
    },

    { type: 'heading', level: 2, text: 'Neglect — Signs' },

    {
      type: 'list',
      items: [
        'Child not brought to appointments / recurrent DNA (did not attend) to GP, HV, hospital',
        'Immunisations or medications not given; not attending school',
        'Poor hygiene (recurrent scabies, lice), unsafe home environment, malnutrition, poor dentition',
        'Not being supervised or being abandoned; persistent bed-wetting not addressed',
        'Odd behaviour: food scavenging, sexualised behaviour, running away',
        'Risk factors in parent/carer: substance misuse, alcohol, mental illness, domestic abuse, lack of support, previous involvement with social services',
      ],
    },

    { type: 'heading', level: 2, text: 'Sexual Abuse — Key Points' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Sexual Abuse — Always Consider',
      items: [
        'ANY sexual activity with a child under 13 is unlawful — even if "consensual" with a peer; any STI or pregnancy under 13 = sexual abuse until proven otherwise',
        'STI in a child, anogenital warts (without history of consensual activity with a peer), persistent or recurrent anogenital symptoms',
        'Evidence of FGM (female genital mutilation): mandatory reporting to police for girls under 18',
        'Any disclosure by the child: document verbatim using the child\'s own words; do NOT question further (forensic interview by specialist); refer to MASH or police',
        'Child sexual exploitation (CSE): may present as gifts, new older "friends", unexplained money, missing from home, secretive about phone; low threshold to suspect',
      ],
    },

    { type: 'heading', level: 2, text: 'Domestic Violence — Impact on Children' },

    {
      type: 'list',
      items: [
        'Children living with domestic violence are at significant risk of emotional abuse and neglect — always consider child safeguarding when DV is identified',
        'Use DASH risk tool to calculate risk level in the adult victim',
        'DASH score ≥14 (or <14 with professional escalation concerns): refer to MARAC (Multi-Agency Risk Assessment Conference) — obtain consent where possible but not required if safety risk',
        'Where children are involved: always follow child safeguarding procedures alongside adult DV response',
      ],
    },

    { type: 'heading', level: 2, text: 'Documentation and Information Sharing' },

    {
      type: 'list',
      items: [
        'Record the "voice of the child" — document what the child says verbatim; speak to the child alone where possible; observe child\'s response when adult is present',
        'GDPR does NOT prevent sharing information to protect a child at risk — always try to obtain consent first, but you may share without consent if a child is at risk of significant harm',
        'Adults with capacity who refuse information sharing: more complex — may share if matter of public interest, serious risk of harm, or adult is being coerced; seek advice from MDU/MPS',
        'Gather information from other agencies: school, HV, practice nurses, social care',
        'Contact the Staffordshire MASH (Multi-Agency Safeguarding Hub) for advice on any safeguarding concern',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Contacts — Darwin Practice, Lichfield',
      items: [
        'Staffordshire Children\'s Safeguarding referral: 0800 1313 126 (in hours) / 0345 604 2886 (out of hours)',
        'Named GP for Safeguarding: via Staffordshire and Stoke-on-Trent ICB — contact practice manager for details',
        'MASH (Multi-Agency Safeguarding Hub): Staffordshire — access via 0800 1313 126',
        'Child at immediate risk: call 999',
        'MARAC referral: discuss with practice safeguarding lead or ICB designated nurse; complete DASH risk tool at safelives.org.uk',
        'Child Trafficking concerns: Modern Slavery Helpline 0800 0121 700',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG76 — Child Maltreatment', url: 'https://www.nice.org.uk/guidance/ng76' },
        { label: 'Staffordshire Children\'s Safeguarding Partnership', url: 'https://www.staffsscb.org.uk/' },
        { label: 'SafeLives — DASH Risk Tool', url: 'https://safelives.org.uk/practice_blog/resources-dashriskchecklist' },
        { label: 'RCPCH — Safeguarding Resources', url: 'https://www.rcpch.ac.uk/resources/child-protection-companion' },
        { label: 'NSPCC — Safeguarding Guidance', url: 'https://www.nspcc.org.uk/safeguarding-guidance-and-resources/' },
      ],
    },
  ],
}

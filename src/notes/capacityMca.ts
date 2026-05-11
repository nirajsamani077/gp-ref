import type { Note } from '../data/notes'

export const capacityMca: Note = {
  id: 'capacity-mca',
  title: 'Mental Capacity Assessment (MCA 2005)',
  subtitle: 'Two-stage capacity test, best interests, LPA, ADRT, Gillick competence and DoLS',
  tags: ['mental health', 'law', 'ethics'],

  body: 'mental capacity assessment MCA 2005 two stage test understand retain weigh communicate decision specific time specific LPOA lasting power of attorney ADRT advance decision to refuse treatment best interests IMCA independent mental capacity advocate DoLS deprivation of liberty safeguards Court of Protection Gillick competence child consent Fraser guidelines parental responsibility',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Core Principles of the Mental Capacity Act 2005',
      items: [
        'Capacity is decision-specific and time-specific — a patient may have capacity for one decision but not another',
        'Presume capacity until proven otherwise',
        'Support the patient to make their own decision before concluding they lack capacity',
        'An unwise decision does not = lack of capacity',
        'Any act done for a person lacking capacity must be in their best interests and be the least restrictive option',
      ],
    },

    { type: 'heading', level: 2, text: 'The Two-Stage Capacity Test' },

    {
      type: 'list',
      items: [
        'Stage 1 — Is there an impairment or disturbance in the functioning of the mind or brain? (e.g. dementia, delirium, mental illness, severe learning disability, intoxication)',
        'Stage 2 — Does this impairment cause the person to be unable to:',
        '  a) Understand the relevant information about the decision?',
        '  b) Retain the information long enough to use it?',
        '  c) Weigh up or use the information as part of the decision-making process?',
        '  d) Communicate their decision (any means — including gesture, blinking, AAC)?',
        'The person lacks capacity only if they fail Stage 1 AND one or more components of Stage 2',
        'Document the assessment clearly — what was the decision, what information was given, what was the outcome of each stage',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'If the Patient Has Capacity',
      items: [
        'A patient WITH capacity can refuse any treatment — even if it will result in death — as long as the refusal does not endanger others or public safety',
        'Respect informed refusal; document carefully, including counselling given',
        'Do not override a capacitous refusal, even under pressure from family',
      ],
    },

    { type: 'heading', level: 2, text: 'If the Patient Lacks Capacity — Decision Hierarchy' },

    {
      type: 'table',
      headers: ['Tool', 'What It Does', 'Key Points'],
      rows: [
        ['Lasting Power of Attorney (LPA)', 'Legal document giving a named person authority to make health/welfare OR financial decisions', 'Must be registered with the Office of the Public Guardian (OPG) before it has legal effect. Check on OPG website. Two types: Health & Welfare LPA, and Property & Financial LPA.'],
        ['Advance Decision to Refuse Treatment (ADRT)', 'Legally binding refusal of specific treatments in advance', 'Does NOT need a solicitor. Must be written and signed. If it concerns life-sustaining treatment, must be witnessed and state it applies "even if life is at risk". Check validity before acting.'],
        ['Best Interests Decision', 'If no LPA or ADRT, clinicians and family/carers make decisions in the patient\'s best interests', 'Involve the patient as much as possible; involve NOK/carers; document prior wishes, values and beliefs; take the least restrictive approach.'],
        ['Independent Mental Capacity Advocate (IMCA)', 'Statutory advocate where there is no family or NOK', 'Mandatory to instruct an IMCA if no appropriate person to consult and the decision involves serious medical treatment, change of accommodation, or adult safeguarding'],
        ['Court of Protection', 'Makes decisions for people who lack capacity when there is disagreement', 'Can appoint a Deputy to act on a person\'s behalf. Family member or local authority can apply.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Deprivation of Liberty Safeguards (DoLS)' },

    {
      type: 'list',
      items: [
        'DoLS applies when a person who lacks capacity is being cared for in a care home or hospital in a way that deprives them of their liberty',
        'This is NOT the same as voluntary admission — applies where person would object or is being restrained',
        'The care home or hospital (the "managing authority") must apply to the supervisory body (local authority or CCG/ICB) for a Standard Authorisation',
        'In the community (people\'s own homes, supported living): Liberty Protection Safeguards (LPS) will replace DoLS — check current legislation',
        'In an emergency: can use an "urgent authorisation" for up to 7 days while awaiting Standard Authorisation',
      ],
    },

    { type: 'heading', level: 2, text: "Children and Capacity — Gillick Competence" },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Children Under 18 — Key Rules',
      items: [
        'Gillick competence: a child under 16 may consent to treatment if they have sufficient intelligence, maturity and understanding to appreciate the implications — there is no lower age limit',
        'Children 16–17: presumed to have capacity to consent under the Family Law Reform Act 1969, same as adults for most decisions',
        'CRITICAL: In UK law, a child CAN consent to treatment but CANNOT refuse treatment or withdraw consent — a parent or court can override refusal even if Gillick competent (e.g. 16-year-old refusing life-saving treatment)',
        'If a competent child refuses: seek senior advice and involve your medical indemnity provider immediately',
        'Parental responsibility: automatic for birth mothers; fathers if married at time of birth OR named on birth certificate; shared with local authority if child in care',
        'If child in care: parental responsibility may be shared — check care order to determine extent',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Resources — Darwin Practice, Lichfield',
      items: [
        'Mental Capacity Act queries: seek advice from MPFT Liaison Psychiatry or your MDU/MPS indemnity provider',
        'DoLS applications: managed by Staffordshire County Council Social Care — social worker referral for care home residents',
        'IMCA service in Staffordshire: via local authority social care referral',
        'Court of Protection applications: patient and family would usually instruct a solicitor; provide supporting medical evidence',
        'Child safeguarding and consent disputes: contact Staffordshire LADO or Named GP for Safeguarding (via ICB); 0800 1313 126',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Mental Capacity Act 2005 — Full Text', url: 'https://www.legislation.gov.uk/ukpga/2005/9/contents' },
        { label: 'Office of the Public Guardian — LPA Check', url: 'https://www.gov.uk/government/organisations/office-of-the-public-guardian' },
        { label: 'NICE NG108 — Decision Making & MCA', url: 'https://www.nice.org.uk/guidance/ng108' },
        { label: 'BMA — Consent & Capacity Guidance', url: 'https://www.bma.org.uk/advice-and-support/ethics/consent-and-capacity/consent-toolkit' },
      ],
    },
  ],
}

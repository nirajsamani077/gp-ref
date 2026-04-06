import type { Note } from '../data/notes'

export const abortionForms: Note = {
  id: 'abortion-forms',
  title: 'Termination of Pregnancy (TOP)',
  subtitle: 'Self-referral via BPAS, HSA forms and legal grounds — GP reference only',
  tags: ['obstetrics'],

  body: 'termination of pregnancy TOP abortion BPAS self-referral HSA1 HSA2 HSA4 forms grounds legal 24 weeks CMO statutory',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'GP Role — BPAS Self-Referral',
      items: [
        'Patients requesting TOP should be directed to self-refer directly to BPAS — no GP referral needed',
        'BPAS accepts self-referrals online or by phone: bpas.org/make-a-referral',
        'GP role is largely supportive: discuss options, provide contraception counselling, ensure safeguarding if needed',
        'BPAS will arrange the required HSA paperwork and certification',
        'If conscientious objection: ensure patient is referred without delay to another professional',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: '🔗 BPAS Self-Referral', url: 'https://www.bpas.org/make-a-referral/' },
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Legal Grounds for Abortion (Abortion Act 1967)',
    },
    {
      type: 'table',
      headers: ['Ground', 'Detail', 'Gestation limit'],
      rows: [
        ['A', 'Continuing the pregnancy would involve risk to the life of the pregnant woman greater than if the pregnancy were terminated', 'No limit'],
        ['B', 'Termination is necessary to prevent grave permanent injury to the physical or mental health of the pregnant woman', 'No limit'],
        ['C', 'Continuance of the pregnancy would involve risk, greater than if the pregnancy were terminated, of injury to the physical or mental health of the pregnant woman', 'Up to 24 weeks'],
        ['D', 'Continuance of the pregnancy would involve risk, greater than if the pregnancy were terminated, of injury to the physical or mental health of any existing child(ren) of the family', 'Up to 24 weeks'],
        ['E', 'There is a substantial risk that if the child were born it would suffer from such physical or mental abnormalities as to be seriously handicapped', 'No limit'],
      ],
      caption: 'The vast majority of abortions in England/Wales are carried out under Ground C',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Statutory HSA Forms',
    },
    {
      type: 'table',
      headers: ['Form', 'Purpose', 'Who signs', 'Retention'],
      rows: [
        ['HSA1', 'Certificate of opinion — planned abortion', '2 Registered Medical Practitioners (RMPs) must sign before the procedure', '3 years'],
        ['HSA2', 'Certificate of opinion — emergency abortion', '1 RMP only (within 24 hours — urgent/emergency circumstances)', '3 years'],
        ['HSA4', 'Notification to Chief Medical Officer (CMO)', 'Practitioner who performed the abortion — submitted to CMO within 14 days of any abortion', '—'],
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Legal Obligation — HSA4',
      items: [
        'Failure to notify the CMO via HSA4 within 14 days is a criminal offence',
        'HSA4 is used for statutory record-keeping and national abortion statistics',
        'BPAS and registered abortion providers manage this — not a GP responsibility when BPAS performs the procedure',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Practical Points for GP',
    },
    {
      type: 'list',
      items: [
        'Confirm pregnancy and estimated gestation (LMP, USS if available) before directing to BPAS',
        'Check for safeguarding concerns — coercion, domestic abuse, age (<16 → Fraser competence/safeguarding assessment)',
        'Discuss all options without bias: continuing pregnancy, adoption, termination',
        'Contraception: ideal opportunity to discuss future contraception — LARC can be fitted at time of TOP by BPAS',
        'Rhesus status: BPAS will check but confirm Rh status available — anti-D required if Rh negative and gestation ≥10 weeks (surgical) or ≥10 weeks (medical)',
        'Follow-up: offer GP appointment post-procedure for emotional support, contraception review, and to ensure complete evacuation if concerns',
        'Conscientious objection: legal right to object but must refer promptly without delaying patient care',
      ],
    },
  ],
}

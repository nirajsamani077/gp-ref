import type { Note } from '../data/notes'

export const fgm: Note = {
  id: 'fgm',
  title: 'Female Genital Mutilation (FGM)',
  subtitle: 'Recognition, the legal and mandatory-reporting duties, safeguarding and clinical management',
  tags: ['gynaecology'],

  body: `female genital mutilation FGM cutting types WHO classification mandatory reporting under 18 police safeguarding child protection deinfibulation illegal Female Genital Mutilation Act risk indicators recording data`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Female genital mutilation is the partial or total removal of the external female genitalia, or other injury to the female genital organs, for non-medical reasons. It has no health benefits and causes serious lifelong physical and psychological harm. It is illegal in the UK (including taking a girl abroad for it), and clinicians have specific legal, reporting and safeguarding duties. The GP must know how to recognise risk, respond to a disclosure or finding, and support affected women without judgement.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Mandatory Reporting Duty (Under-18s)',
      items: [
        'There is a MANDATORY personal duty for regulated professionals (including doctors) to report to the POLICE if a girl under 18 discloses she has had FGM, or you observe physical signs of FGM in an under-18 — report by phone to 101 by the end of the next working day (unless already reported).',
        'This is distinct from — and in addition to — the usual safeguarding process: also make a safeguarding referral to children\'s social care where a child is at risk (including sisters/other female children in the family).',
        'For a girl at RISK (not yet subjected to FGM), follow safeguarding pathways; the mandatory police report applies to known/observed cases in under-18s.',
      ],
    },

    { type: 'heading', level: 2, text: 'Types & Recognition' },
    {
      type: 'list',
      items: [
        'WHO types I–IV (from partial clitoral removal, to excision, to infibulation/narrowing, to other harmful procedures).',
        'Risk indicators: family from a practising community, a mother/sister who has had FGM, plans to travel to a country where it is practised (especially around school holidays — the "cutting season"), or talk of a "special procedure/ceremony".',
        'Clinical presentations: urinary problems, recurrent infections, dysmenorrhoea, dyspareunia, psychological sequelae (PTSD, anxiety), and difficulties in pregnancy/childbirth.',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Management (Adults)' },
    {
      type: 'list',
      items: [
        'Approach with sensitivity and without judgement; use professional interpreters (not family members); document carefully and record FGM in the notes (there are also national FGM data-recording requirements for the relevant enhanced dataset).',
        'Manage complications and refer to specialist FGM/gynaecology services; DEINFIBULATION (surgical opening) can be offered for urinary/menstrual/sexual difficulties and is ideally done before or during pregnancy.',
        'In pregnancy, ensure early referral to specialist antenatal/FGM services and safeguarding assessment for the unborn/other children in the household.',
        'RE-infibulation (re-closing after childbirth) is illegal — never perform it.',
        'Offer psychological support and address the mental-health impact.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'GOV.UK — FGM: Mandatory Reporting Duty', url: 'https://www.gov.uk/government/publications/mandatory-reporting-of-female-genital-mutilation-procedural-information' },
        { label: 'GOV.UK — FGM Safeguarding & Risk Assessment', url: 'https://www.gov.uk/government/publications/safeguarding-women-and-girls-at-risk-of-fgm' },
        { label: 'NHS — Female Genital Mutilation', url: 'https://www.nhs.uk/conditions/female-genital-mutilation-fgm/' },
        { label: 'NSPCC — FGM Helpline', url: 'https://www.nspcc.org.uk/what-is-child-abuse/types-of-abuse/female-genital-mutilation-fgm/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'child-safeguarding', label: 'Child Safeguarding', subtitle: 'Safeguarding pathways for at-risk girls and siblings' },
        { id: 'domestic-violence', label: 'Domestic Abuse', subtitle: 'Overlapping safeguarding and disclosure skills' },
        { id: 'vulval-conditions', label: 'Vulval Dermatoses & Cancer', subtitle: 'Assessing the vulva and related complications' },
        { id: 'ptsd', label: 'PTSD', subtitle: 'Psychological sequelae of FGM' },
      ],
    },

  ],
}

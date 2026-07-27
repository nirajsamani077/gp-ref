import type { Note } from '../data/notes'

export const contraception: Note = {
  id: 'contraception',
  title: 'Contraception — Overview & Method Choice',
  subtitle: 'UKMEC, efficacy (typical vs perfect use), quick-starting, when methods become effective and special situations',
  tags: ['contraception', 'gynaecology'],

  body: `contraception UKMEC LARC efficacy typical use perfect use quick start quick-starting Fraser competence emergency contraception postpartum breastfeeding when effective immediate IUD POP COCP implant injection IUS condoms sterilisation menopause method choice`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'FSRH — UKMEC', url: 'https://www.fsrh.org/standards-and-guidance/uk-medical-eligibility-criteria/' },
        { label: 'NICE CKS — Contraception Assessment', url: 'https://cks.nice.org.uk/topics/contraception-assessment/' },
        { label: 'FSRH — Quick Starting Contraception', url: 'https://www.fsrh.org/standards-and-guidance/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Method Choice — Key Principles' },

    {
      type: 'list',
      items: [
        'Discuss all methods, led by the patient\'s priorities (efficacy, bleeding pattern, reversibility, non-contraceptive benefits, hormone preference)',
        'Promote LARCs (long-acting reversible contraception — implant, IUS, IUD, injection): the most effective because they remove the "typical-use" gap; more cost-effective than user-dependent methods',
        'Use UKMEC to check safety: UKMEC 1 = no restriction, 2 = benefits outweigh risks, 3 = risks generally outweigh benefits (caution/specialist), 4 = unacceptable risk (do not use)',
        'Always consider STI protection (condoms) alongside, and offer chlamydia screening',
        'Assess the need for emergency contraception and consider quick-starting',
      ],
    },

    { type: 'heading', level: 2, text: 'Efficacy — Typical vs Perfect Use' },

    {
      type: 'table',
      headers: ['Method', 'Perfect use', 'Typical use'],
      rows: [
        ['Implant (Nexplanon)', '>99% (~0.05%/yr failure)', '>99% — most effective; no user action'],
        ['IUS / IUD', '>99%', '>99% — user-independent'],
        ['Injection (Depo)', '>99%', '~94% (depends on timely re-dosing)'],
        ['COCP / POP', '>99%', '~91% (missed pills, interactions, vomiting)'],
        ['Male condoms', '~98%', '~82%'],
        ['Female sterilisation / vasectomy', '>99%', '>99% (vasectomy slightly more effective and safer)'],
      ],
      caption: 'The gap between perfect and typical use is why LARCs are promoted — they are "fit and forget".',
    },

    { type: 'heading', level: 2, text: 'When Does a Method Become Effective?' },

    {
      type: 'callout',
      variant: 'info',
      title: 'If Not Started in the First 5 Days of the Cycle',
      items: [
        'Immediately effective: copper IUD (effective as soon as inserted)',
        'After 2 days (48h): progestogen-only pill (POP)',
        'After 7 days: COCP, contraceptive injection, implant, and the levonorgestrel IUS (everything else)',
        'If started within the first 5 days of the menstrual cycle (day 1–5), most methods need no extra precautions (the copper IUD any time; POP up to day 5)',
      ],
    },

    { type: 'heading', level: 2, text: 'Quick-Starting' },

    {
      type: 'list',
      items: [
        'Quick-starting = starting contraception immediately (rather than waiting for the next period), e.g. after emergency contraception — reduces the risk of pregnancy from delay',
        'Pregnancy can reasonably be excluded if: no sex since the last period, currently day 1–5 of the cycle, reliably using another method, <3 weeks postpartum (or fully breastfeeding and <6 months/amenorrhoeic), <7 days since abortion/miscarriage, or no UPSI in the last 3 weeks with a negative pregnancy test',
        'You can quick-start the COCP, POP or implant even if pregnancy cannot be fully excluded (use precautions and do a follow-up pregnancy test in ~3 weeks); avoid co-cyprindiol (Dianette) as it can feminise a male fetus; the injection only if other methods unsuitable; the copper IUD only when used as emergency contraception',
        'After ulipristal acetate (ellaOne) emergency contraception: WAIT 5 days before starting hormonal contraception (it can reduce ellaOne\'s efficacy) — use condoms meanwhile',
        'Precautions after quick-start: 7 days for COCP/implant/injection, 2 days for POP',
      ],
    },

    { type: 'heading', level: 2, text: 'Special Situations' },

    {
      type: 'list',
      items: [
        'Postpartum: progestogen-only methods (POP, implant) and the injection can start any time; COCP avoided before day 21 (VTE risk) and longer if breastfeeding with other risk factors; IUD/IUS within 48h of birth or after 4 weeks',
        'Breastfeeding: progestogen-only methods are UKMEC 1–2 and preferred',
        'Around the menopause: contraception until age 55 (or 2 years\' amenorrhoea if <50 / 1 year if ≥50) — see Menopause note; the Mirena IUS provides both contraception and the progestogen component of HRT',
        'Enzyme-inducing drugs (e.g. some antiepileptics, rifampicin): reduce efficacy of most hormonal methods — the injection and the copper/LNG-IUD are unaffected and preferred',
        'Under-16s: assess Fraser competence and safeguarding',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'larcs', label: 'Progestogen-Only Contraception & LARCs', subtitle: 'POP, implant, injection, IUS/IUD — detail and side effects' },
        { id: 'cocp', label: 'Combined Oral Contraceptive Pill', subtitle: 'UKMEC, missed-pill rules, VTE and migraine cautions' },
        { id: 'emergency-contraception', label: 'Emergency Contraception', subtitle: 'Copper IUD, ulipristal, levonorgestrel — and quick-starting after' },
        { id: 'menopause', label: 'Menopause', subtitle: 'Contraception around the menopause and stopping rules' },
        { id: 'bleeding-on-contraception', label: 'Bleeding on Contraception', subtitle: 'Managing unscheduled bleeding' },
        { id: 'sterilisation', label: 'Vasectomy & Female Sterilisation', subtitle: 'Permanent options — and why LARC is worth considering first' },
      ],
    },

  ],
}

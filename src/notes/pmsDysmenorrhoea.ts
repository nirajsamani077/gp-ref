import type { Note } from '../data/notes'

export const pmsDysmenorrhoea: Note = {
  id: 'pms-dysmenorrhoea',
  title: 'PMS & Dysmenorrhoea',
  subtitle: 'Premenstrual syndrome/PMDD, primary vs secondary period pain, and treatment ladders',
  tags: ['gynaecology'],

  body: `premenstrual syndrome PMS PMDD premenstrual dysphoric disorder symptom diary drospirenone Yasmin COCP continuous SSRI sertraline luteal phase dysmenorrhoea primary secondary NSAID mefenamic acid ibuprofen LNG-IUS endometriosis GnRH analogue transdermal oestrogen`,

  content: [

    { type: 'heading', level: 2, text: 'Premenstrual Syndrome (PMS)' },
    {
      type: 'para',
      text: 'PMS is a cluster of cyclical psychological, physical and behavioural symptoms occurring in the luteal phase and resolving with menstruation, driven by sensitivity to normal ovarian hormone fluctuations. It affects ~40% of women (~5% severe); premenstrual dysphoric disorder (PMDD) is the severe form with marked mood symptoms and functional impairment. Diagnosis rests on a prospective symptom diary.',
    },
    {
      type: 'list',
      items: [
        'Diagnose with a prospective SYMPTOM DIARY over ≥2 cycles — symptoms must be confined to the luteal phase and resolve with menses (a validated chart such as the DRSP helps).',
        'Screen for and treat coexisting mood disorders; distinguish premenstrual EXACERBATION of an underlying condition (which does not fully resolve after menses).',
      ],
    },
    {
      type: 'table',
      headers: ['Step', 'Treatment'],
      rows: [
        ['Lifestyle / first-line', 'Regular exercise, sleep, stress reduction, reduced alcohol/caffeine; CBT is effective; some find complementary options (e.g. evening primrose oil) helpful'],
        ['Hormonal', 'A drospirenone-containing combined pill (e.g. Yasmin), preferably taken CONTINUOUSLY rather than cyclically'],
        ['SSRI', 'Sertraline/fluoxetine/citalopram — either continuously or LUTEAL-PHASE only; effective for the mood symptoms of PMS/PMDD and can work faster than in depression'],
        ['Specialist (severe)', 'Transdermal oestrogen (e.g. 100 mcg patch) with cyclical progestogen or LNG-IUS for endometrial protection; GnRH analogues with add-back HRT to suppress the cycle; hysterectomy + BSO only as a last resort'],
      ],
    },

    { type: 'heading', level: 2, text: 'Dysmenorrhoea — Primary vs Secondary' },
    {
      type: 'table',
      headers: ['', 'Primary', 'Secondary'],
      rows: [
        ['Cause', 'No pelvic pathology (prostaglandin-mediated)', 'Underlying pelvic pathology'],
        ['Onset', 'Within 6–12 months of menarche', 'Years after menarche (new/changing pain)'],
        ['Timing', 'Starts just before/with the period, lasts 1–2 days', 'May start several days before the period; can be constant'],
        ['Associated', 'None specific', 'Deep dyspareunia, menorrhagia, IMB/PCB, subfertility, abnormal examination'],
        ['Likely causes', '—', 'Endometriosis/adenomyosis, PID, fibroids, ovarian pathology, copper IUD'],
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Management of Dysmenorrhoea',
      items: [
        'Primary — first-line: an NSAID (mefenamic acid or ibuprofen) taken from the onset of pain/period (inhibits prostaglandins — most effective); local heat and TENS help.',
        'Primary — second-line: a combined oral contraceptive (can be run continuously) or the LNG-IUS.',
        'Secondary: examine, take STI swabs if relevant, arrange a pelvic ultrasound, and refer to gynaecology to investigate/treat the cause.',
        'Refer any new or progressively worsening dysmenorrhoea, or features suggesting endometriosis (cyclical bowel/bladder symptoms, deep dyspareunia, subfertility) — a normal ultrasound does NOT exclude endometriosis.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Premenstrual Syndrome', url: 'https://cks.nice.org.uk/topics/premenstrual-syndrome/' },
        { label: 'NICE CKS — Dysmenorrhoea', url: 'https://cks.nice.org.uk/topics/dysmenorrhoea/' },
        { label: 'RCOG — Managing PMS (Green-top 48)', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/premenstrual-syndrome-management-green-top-guideline-no-48/' },
        { label: 'IAPMD — PMDD Support', url: 'https://iapmd.org/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'endometriosis', label: 'Endometriosis', subtitle: 'Leading cause of secondary dysmenorrhoea' },
        { id: 'hmb-fibroids', label: 'Heavy Menstrual Bleeding & Fibroids', subtitle: 'Overlapping menstrual complaints' },
        { id: 'contraception', label: 'Contraception — Overview', subtitle: 'COCP/LNG-IUS for symptom control' },
        { id: 'adenomyosis', label: 'Adenomyosis', subtitle: 'Painful, heavy periods — secondary dysmenorrhoea' },
        { id: 'menopause', label: 'Menopause', subtitle: 'Hormonal treatments and the perimenopausal transition' },
      ],
    },

  ],
}

import type { Note } from '../data/notes'

export const pmsDysmenorrhoea: Note = {
  id: 'pms-dysmenorrhoea',
  title: 'PMS & Dysmenorrhoea',
  subtitle: 'Premenstrual syndrome/PMDD, primary vs secondary period pain, and when to refer',
  tags: ['gynaecology'],

  body: `premenstrual syndrome PMS PMDD premenstrual dysphoric disorder symptom diary drospirenone COCP SSRI luteal phase dysmenorrhoea primary secondary NSAID mefenamic acid endometriosis GnRH analogue evening primrose`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Premenstrual Syndrome', url: 'https://cks.nice.org.uk/topics/premenstrual-syndrome/' },
        { label: 'NICE CKS — Dysmenorrhoea', url: 'https://cks.nice.org.uk/topics/dysmenorrhoea/' },
        { label: 'RCOG — Managing PMS (Green-top 48)', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Premenstrual Syndrome (PMS)' },

    {
      type: 'list',
      items: [
        'Common (affects ~40% of women; ~5% severe) — cyclical psychological, physical and behavioural symptoms in the luteal phase that resolve after menstruation, driven by sensitivity to normal hormone fluctuations',
        'Premenstrual dysphoric disorder (PMDD) is the severe form with marked mood symptoms and functional impairment',
        'Diagnose by a prospective SYMPTOM DIARY over ≥2 cycles (symptoms confined to the luteal phase, resolving with menses) — use a validated chart',
      ],
    },

    {
      type: 'table',
      headers: ['Step', 'Treatment'],
      rows: [
        ['Lifestyle / first-line', 'Regular exercise, sleep, stress reduction, reduced alcohol/caffeine; a balanced diet; CBT is effective. Some find complementary options (e.g. evening primrose oil) helpful'],
        ['Hormonal', 'Combined oral contraceptive — a drospirenone-containing pill (e.g. Yasmin) taken continuously (rather than cyclically) is preferred for PMS'],
        ['SSRI', 'An SSRI (e.g. sertraline, fluoxetine) either continuously or in the luteal phase only — effective for the mood symptoms of PMS/PMDD'],
        ['Specialist (severe)', 'Transdermal oestrogen (e.g. 100 mcg patch) with cyclical progestogen for endometrial protection (e.g. micronised progesterone); GnRH analogues with add-back HRT to suppress the cycle (avoid prolonged use — bone density); rarely surgery (hysterectomy + BSO) as a last resort'],
      ],
    },

    { type: 'heading', level: 2, text: 'Dysmenorrhoea' },

    {
      type: 'table',
      headers: ['', 'Primary', 'Secondary'],
      rows: [
        ['Cause', 'No pelvic pathology (prostaglandin-mediated)', 'Underlying pelvic pathology'],
        ['Onset', 'Within a couple of years of menarche', 'Years after menarche (new/changing pain)'],
        ['Timing', 'Starts just before/with the period, lasts 1–2 days', 'Often starts several days before the period; may be constant'],
        ['Associated', 'None specific', 'Dyspareunia, menorrhagia, IMB/PCB, subfertility, abnormal exam'],
        ['Causes', '—', 'Endometriosis/adenomyosis, PID, fibroids, ovarian pathology, IUD'],
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Management of Dysmenorrhoea',
      items: [
        'Primary: NSAIDs (e.g. mefenamic acid, ibuprofen) — most effective, taken from the onset of pain/period; a combined oral contraceptive (or LNG-IUS) is second-line; local heat and TENS help',
        'Secondary: examine, take STI swabs if relevant, arrange pelvic ultrasound, and refer to gynaecology to investigate/treat the underlying cause',
        'Refer any new or progressively worsening dysmenorrhoea, or features suggesting endometriosis (cyclical bowel/bladder symptoms, deep dyspareunia, subfertility)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'endometriosis', label: 'Endometriosis', subtitle: 'Leading cause of secondary dysmenorrhoea' },
        { id: 'hmb-fibroids', label: 'Heavy Menstrual Bleeding & Fibroids', subtitle: 'Overlapping menstrual complaints' },
        { id: 'contraception', label: 'Contraception — Overview', subtitle: 'COCP/LNG-IUS for symptom control' },
        { id: 'menopause', label: 'Menopause', subtitle: 'Hormonal treatments and the perimenopausal transition' },
      ],
    },

  ],
}

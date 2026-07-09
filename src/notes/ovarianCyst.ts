import type { Note } from '../data/notes'

export const ovarianCyst: Note = {
  id: 'ovarian-cyst',
  title: 'Ovarian Cyst',
  subtitle: 'Functional vs pathological, when to scan/CA125, follow-up thresholds and cyst accidents',
  tags: ['gynaecology'],

  body: `ovarian cyst functional follicular corpus luteal pathological endometrioma dermoid teratoma cystadenoma CA125 RMI transvaginal ultrasound TVUSS torsion haemorrhage rupture postmenopausal germ cell tumour AFP hCG LDH`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Ovarian Cyst', url: 'https://cks.nice.org.uk/topics/ovarian-cancer/' },
        { label: 'RCOG — Ovarian Cysts (Green-top 62)', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/' },
        { label: 'Target Ovarian Cancer', url: 'https://targetovariancancer.org.uk/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'Very common and usually benign and asymptomatic — often an incidental scan finding',
        'Functional (cycle-related) cysts typically resolve within ~3 cycles; pathological cysts tend to persist and grow',
        'Symptoms (when present): pelvic pain/pressure, bloating, urinary/bowel symptoms; a "cyst accident" (rupture, haemorrhage, or torsion) causes acute severe pain',
      ],
    },

    {
      type: 'table',
      headers: ['Type', 'Examples'],
      rows: [
        ['Physiological (functional)', 'Follicular cyst, corpus luteum cyst'],
        ['Benign pathological', 'Endometrioma ("chocolate cyst"), dermoid cyst (mature teratoma), serous/mucinous cystadenoma'],
        ['Malignant potential', 'Borderline/malignant epithelial tumours; germ cell tumours (younger women)'],
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Cyst Accident — Acute Severe Pelvic Pain',
      items: [
        'Ovarian torsion: sudden severe unilateral pelvic pain ± nausea/vomiting, sometimes a palpable mass — a gynaecological emergency (the ovary can infarct) → urgent USS and same-day gynaecology',
        'Haemorrhage into or rupture of a cyst can cause acute pain and, if significant bleeding, haemodynamic compromise',
        'Always exclude ectopic pregnancy (do a pregnancy test) in any woman of childbearing age with acute pelvic pain',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation' },

    {
      type: 'list',
      items: [
        'Do NOT measure CA125 for a simple cyst <5 cm in a premenopausal woman (CA125 is non-specific and commonly raised by benign conditions)',
        'Arrange transvaginal ultrasound ± CA125 for cysts that are complex/suspicious (>5 cm, bilateral, multiloculated, solid components, symptomatic, or with ascites), and for any cyst in a postmenopausal woman',
        'In a woman <40 with a complex cyst, check germ-cell tumour markers (AFP, hCG, LDH)',
        'Secondary care uses the Risk of Malignancy Index (RMI: ultrasound features × menopausal status × CA125) and MRI to characterise cysts',
      ],
    },

    { type: 'heading', level: 2, text: 'Follow-Up & Referral' },

    {
      type: 'table',
      headers: ['Group', 'Cyst', 'Action'],
      rows: [
        ['Premenopausal', 'Simple <5 cm', 'No follow-up needed'],
        ['Premenopausal', 'Simple 5–7 cm', 'Rescan in ~1 year'],
        ['Premenopausal', 'Simple >7 cm, or complex/haemorrhagic/endometrioma', 'Rescan ~6 weeks (± tumour markers); refer if persistent'],
        ['Postmenopausal', 'Simple <5 cm with normal CA125', 'Rescan at 6 months and 1 year; discharge if unchanged'],
        ['Postmenopausal', 'Cyst >5 cm, complex, raised CA125, or ascites', 'Refer gynaecology (2WW if suspicious features/ascites)'],
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'ovarian-cancer', label: 'Ovarian Cancer & CA125', subtitle: 'The malignant pathway and 2WW criteria' },
        { id: 'endometriosis', label: 'Endometriosis', subtitle: 'Endometriomas and chronic pelvic pain' },
        { id: 'pcos', label: 'PCOS', subtitle: 'Polycystic ovarian morphology is NOT the same as a cyst' },
        { id: 'chronic-pelvic-pain', label: 'Chronic Pelvic Pain', subtitle: 'Differential for persistent pelvic pain' },
      ],
    },

  ],
}

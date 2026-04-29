import type { Note } from '../data/notes'

export const adenomyosis: Note = {
  id: 'adenomyosis',
  title: 'Adenomyosis',
  subtitle: 'Endometrial tissue within the myometrium — diagnosis and management',
  tags: ['gynaecology'],

  body: `Adenomyosis endometrial tissue myometrium pelvic pain menorrhagia HMB heavy menstrual bleeding dysmenorrhoea infertility miscarriage subfertility uterus enlarged boggy retrograde menstruation myometrial contractions MRI ultrasound TVUSS Mirena IUS levonorgestrel COCP mefenamic acid tranexamic acid dienogest norethisterone Prostap GnRH analogue uterine artery embolisation hysterectomy TAH women childbearing age WCBA asymptomatic endometriosis Naga Munchetty`,

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'What is Adenomyosis?',
    },
    {
      type: 'para',
      text: 'Adenomyosis is defined as the presence of endometrial glands and stroma within the myometrium (uterine muscle), resulting in a diffusely enlarged, "boggy" uterus. It is a distinct condition from endometriosis in terms of pathogenic mechanisms, though the two frequently co-exist.',
    },
    {
      type: 'image',
      src: '/images/adenomyosis.jpg.webp',
      alt: 'Anatomical diagram of adenomyosis showing endometrium invading uterus wall',
      caption: 'Adenomyosis: endometrial tissue invading through the myometrium. Often co-exists with fibroids and endometriosis.',
          sensitive: true,
},
    {
      type: 'callout',
      variant: 'info',
      title: 'Pathophysiology — Theories',
      items: [
        'Chronic myometrial micro-trauma triggering inflammation and inward migration of endometrial cells',
        'Retrograde menstruation into the myometrium (via intramural rather than peritoneal route)',
        'Stem cell dysfunction within the basalis layer of the endometrium',
        'Poorly understood overall — likely multifactorial',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Epidemiology',
    },
    {
      type: 'table',
      headers: ['Feature', 'Detail'],
      rows: [
        ['Prevalence', '~30% of women of childbearing age (WCBA) on imaging'],
        ['Asymptomatic', '~30% of those with adenomyosis on scan have no symptoms'],
        ['Age', 'Most commonly diagnosed in 40s–50s, but increasingly found earlier'],
        ['Association', 'Often co-exists with endometriosis, fibroids, and HMB'],
        ['Public awareness', 'Notable figure: Naga Munchetty (BBC journalist) has spoken publicly about her diagnosis'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Presentation',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Notes'],
      rows: [
        ['Heavy menstrual bleeding (HMB)', 'Most common presenting complaint; cyclical and worsening over time'],
        ['Dysmenorrhoea / pelvic pain', 'Often severe; may radiate to the back or thighs'],
        ['Dyspareunia', 'Deep dyspareunia, particularly perimenstrually'],
        ['Subfertility / miscarriage', '10% of patients with unexplained subfertility have isolated adenomyosis; causative link unclear'],
        ['Bloating / pressure symptoms', 'From uterine enlargement; may cause urinary frequency'],
        ['Asymptomatic', 'Incidental finding on USS in ~30% — no treatment required'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Clinical Sign',
      items: [
        'On bimanual examination: diffusely enlarged, tender, globular uterus — the "boggy uterus"',
        'Uterus may be 2–3× normal size',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Investigations',
    },
    {
      type: 'table',
      headers: ['Investigation', 'Role', 'Detail'],
      rows: [
        ['Transvaginal USS (TVUSS)', 'First-line', '~80% sensitivity; heterogeneous myometrium, myometrial cysts, asymmetric thickening, poor definition between endo- and myometrium'],
        ['MRI pelvis', 'Second-line', 'Indicated if USS inconclusive or pre-surgical planning; gold standard for mapping extent; shows junctional zone thickening >12mm'],
        ['Endometrial biopsy', 'Exclude malignancy', 'If HMB with risk factors for endometrial cancer (age >45, obesity, PCOS, nulliparity)'],
        ['Bloods', 'Screen for anaemia', 'FBC, ferritin if significant HMB; TFTs if clinically indicated'],
      ],
    },
    {
      type: 'image',
      src: '/images/MRI-Adenomyosis-1.jpg',
      alt: 'Sagittal MRI pelvis showing enlarged uterus with adenomyosis',
      caption: 'Sagittal T2 MRI pelvis: grossly enlarged uterus with heterogeneous myometrial signal and loss of the junctional zone — typical of adenomyosis.',
          sensitive: true,
},
    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer All Symptomatic Patients',
      items: [
        'Refer to gynaecology if symptomatic (HMB, pain, dyspareunia)',
        'Refer if fertility concerns, even if symptoms are mild',
        'No treatment needed if truly asymptomatic (incidental finding)',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Management',
    },
    {
      type: 'para',
      text: 'There is no specifically licensed treatment for adenomyosis. Management follows a similar framework to heavy menstrual bleeding and endometriosis — non-hormonal, hormonal, and procedural/surgical options — guided by symptom severity, fertility wishes, and patient preference.',
    },
    {
      type: 'table',
      headers: ['Category', 'Option', 'Notes'],
      rows: [
        ['Non-hormonal', 'Mefenamic acid', 'NSAIDs; start 2–3 days before period; reduces pain and blood loss'],
        ['Non-hormonal', 'Tranexamic acid (TXA)', 'Antifibrinolytic; up to 4g/day for 4 days from onset of bleeding; does not affect pain'],
        ['Hormonal', 'Levonorgestrel IUS (Mirena)', 'Best evidence for adenomyosis; reduces HMB and pain; may be less effective if uterine cavity significantly enlarged'],
        ['Hormonal', 'COCP', 'Continuous use (no pill-free interval) may provide better symptom control'],
        ['Hormonal', 'Dienogest (Visanne)', 'Best progestogen evidence for adenomyosis; not currently licensed in UK — may require specialist initiation'],
        ['Hormonal', 'Norethisterone (NET)', 'Cyclical or continuous; note VTE risk with higher doses'],
        ['Hormonal', 'GnRH analogue (Prostap/Zoladex)', 'Temporary menopause; effective but limited to 6 months without add-back HRT; used pre-operatively or as a diagnostic tool'],
        ['Procedural', 'Uterine artery embolisation (UAE)', 'Minimally invasive; reduces uterine volume and symptoms; not appropriate if future fertility desired'],
        ['Surgical', 'Total abdominal hysterectomy (TAH)', 'Definitive curative treatment; only appropriate when family is complete; laparoscopic approach preferred where possible'],
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'HMB Pathway',
      items: [
        'See local Abnormal Uterine Bleeding / HMB pathway for structured management steps',
        'Includes PALM-COEIN classification of AUB causes',
      ],
    },
    {
      type: 'linkrow',
      links: [
        { label: '📄 HMB / Abnormal Uterine Bleeding Pathway (PDF)', url: '/pdfs/abnormal-uterine-bleeding.pdf' },
      ],
    },
  ],
}

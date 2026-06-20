import type { Note } from '../data/notes'

export const hmbFibroids: Note = {
  id: 'hmb-fibroids',
  title: 'Heavy Menstrual Bleeding & Fibroids',
  subtitle: 'PALM-COEIN causes, tranexamic acid, Mirena, fibroid management and when to scan',
  tags: ['gynaecology'],

  body: `heavy menstrual bleeding HMB menorrhagia abnormal uterine bleeding AUB intermenstrual bleeding IMB postcoital bleeding PCB PALM-COEIN fibroids leiomyoma adenomyosis endometrial polyp endometrial hyperplasia endometrial cancer coagulopathy von Willebrand anovulatory tranexamic acid mefenamic acid mirena IUS levonorgestrel COCP progestogen norethisterone medroxyprogesterone ulipristal esmya ryeqo GnRH antagonist endometrial ablation myomectomy uterine artery embolisation hysterectomy transvaginal ultrasound hysteroscopy ferritin iron deficiency`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG88 — Heavy Menstrual Bleeding', url: 'https://www.nice.org.uk/guidance/ng88' },
        { label: 'NICE CKS — Menorrhagia', url: 'https://cks.nice.org.uk/topics/menorrhagia-heavy-menstrual-bleeding/' },
        { label: 'NICE CKS — Fibroids', url: 'https://cks.nice.org.uk/topics/fibroids/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'Heavy menstrual bleeding (HMB) affects ~1 in 3 women and is defined by impact on quality of life, not a fixed blood volume',
        'Abnormal uterine bleeding (AUB) also includes intermenstrual (IMB), post-coital (PCB), and (separately) post-menopausal bleeding (PMB — always investigate for endometrial cancer)',
        'Use the FIGO PALM-COEIN framework to structure causes — structural (PALM) vs non-structural (COEIN)',
        'Iron deficiency anaemia is the most common consequence — always check FBC',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes — PALM-COEIN' },

    {
      type: 'table',
      headers: ['Group', 'Cause', 'Notes'],
      rows: [
        ['P — Polyp', 'Endometrial / endocervical polyp', 'Often causes IMB/PCB; seen on USS/hysteroscopy; polypectomy'],
        ['A — Adenomyosis', 'Endometrial tissue within myometrium', 'Heavy, painful periods; bulky tender uterus; best seen on MRI/TVUSS'],
        ['L — Leiomyoma (fibroid)', 'Benign myometrial smooth muscle tumours', 'Very common; may distort cavity and bleed; rarely degenerate (painful, esp. pregnancy) or transform to leiomyosarcoma (very rare)'],
        ['M — Malignancy/hyperplasia', 'Endometrial hyperplasia or carcinoma', 'Higher risk with unopposed oestrogen: obesity, PCOS, nulliparity, tamoxifen, age; PMB/IMB are red flags'],
        ['C — Coagulopathy', 'von Willebrand disease, platelet disorders', 'Consider in HMB since menarche, family history, or other bleeding (>10% of HMB)'],
        ['O — Ovulatory dysfunction', 'Anovulatory cycles → unopposed oestrogen', 'Extremes of reproductive age, PCOS, obesity, thyroid disease — erratic, unpredictable bleeding'],
        ['E — Endometrial', 'Primary endometrial disorders of local haemostasis', 'Diagnosis of exclusion'],
        ['I — Iatrogenic', 'Copper IUD, progestogens, implant, anticoagulants', 'Review contraception and drug history'],
        ['N — Not otherwise classified', 'e.g. AV malformations, niche', 'Rare'],
      ],
    },

    { type: 'heading', level: 2, text: 'History & Examination' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Key History and Red Flags',
      items: [
        'Bleeding pattern: cyclical vs erratic; HMB vs IMB vs PCB vs PMB; clots, flooding, sanitary product use; impact on life',
        'Associated: pelvic pain, dyspareunia, pressure symptoms (urinary/bowel — fibroids), discharge',
        'Risk assessment: smear history, STI risk, contraception, parity, BMI, family history (bleeding disorders, gynae cancer), medications (anticoagulants, tamoxifen, HRT)',
        'Red flags: PCB and persistent IMB (think cervical/endometrial pathology), any PMB (endometrial cancer until proven otherwise), rapidly enlarging pelvic mass',
        'Examination: abdominal and bimanual (uterine size/tenderness), speculum + cervical inspection; STI swabs if risk; not always needed before a trial of treatment if no other symptoms',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'FBC for all women with HMB; check ferritin if anaemic/borderline; consider TFTs and coagulation screen (including von Willebrand) only if history suggests',
        'If no other symptoms and low risk → reasonable to trial treatment first (e.g. tranexamic acid, or hormonal) without imaging',
        'Transvaginal ultrasound (TVUSS): if pelvic mass, abnormal exam, suspected adenomyosis, treatment failure, or to assess fibroids',
        'Outpatient hysteroscopy ± endometrial biopsy: for IMB/PCB/PMB, suspected polyp/hyperplasia/malignancy, persistent symptoms, or risk factors — allows see-and-treat',
        'PCB is usually cervical (examine cervix, consider colposcopy); IMB is often endometrial or hormonal; PMB requires urgent endometrial assessment',
      ],
    },

    { type: 'heading', level: 2, text: 'Medical Management' },

    {
      type: 'table',
      headers: ['Line', 'Treatment', 'Regimen & Pearls'],
      rows: [
        ['Non-hormonal (if contraception not wanted)', 'Tranexamic acid (antifibrinolytic)', '1 g TDS started at onset of bleeding, for up to 4 days during the period only; no VTE risk when used cyclically like this; add mefenamic acid 500 mg TDS if dysmenorrhoea (also reduces flow)'],
        ['1st line overall', 'Levonorgestrel IUS (Mirena)', 'Most effective medical treatment; reduces bleeding by ~90%; provides contraception; can take 3–6 months for full effect (warn re: irregular spotting early); difficult to fit if cavity distorted by fibroids'],
        ['2nd line', 'COCP', 'Regulates and lightens periods; can be tricycled; standard contraindications apply'],
        ['3rd line', 'Cyclical oral progestogen', 'Norethisterone 5 mg TDS or medroxyprogesterone acetate, days 5–26 of the cycle; controls bleeding but not contraceptive at this regimen; long-acting progestogens (implant/injection) are alternatives'],
      ],
    },

    { type: 'heading', level: 2, text: 'Fibroid-Specific & Surgical Management' },

    {
      type: 'list',
      items: [
        'Fibroid types: submucosal ("pushing into" the cavity — most likely to cause HMB), intramural, subserosal ("pushing out" — pressure symptoms), and pedunculated',
        'Fibroids >3 cm or distorting the cavity, or suspected adenomyosis/polyp, usually need a gynaecology procedure',
        'Fertility-sparing options: myomectomy and uterine artery embolisation (UAE) can preserve the uterus; endometrial ablation and hysterectomy do NOT preserve fertility',
        'Ulipristal acetate (Esmya): progesterone-receptor modulator that shrinks fibroids — now restricted to short courses in secondary care due to risk of serious liver toxicity (monthly LFT monitoring; stop if ALT >3× ULN)',
        'Relugolix combination (Ryeqo): oral GnRH antagonist with add-back HRT — suppresses oestrogen-sensitive fibroid growth; specialist-initiated',
        'Refer for endometrial ablation or hysterectomy when medical treatment fails and fertility is not desired; UAE/myomectomy if fertility preservation wanted',
      ],
    },

    { type: 'heading', level: 2, text: 'HMB in Adolescents' },

    {
      type: 'list',
      items: [
        'Most commonly anovulatory cycles due to an immature hypothalamic-pituitary-ovarian axis — usually improves in the years after menarche',
        'Structural causes are rare; consider coagulopathy (HMB from menarche), and review the rest of PALM-COEIN',
        'Usually safe to trial treatment (tranexamic acid ± hormonal) without examination if no other symptoms — examination/imaging is rarely needed and can be distressing',
        'Check FBC/ferritin; treat iron deficiency',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'endometrial-cancer', label: 'Endometrial Cancer', subtitle: 'PMB/IMB red flags; unopposed oestrogen risk factors' },
        { id: 'microcytic-anaemia', label: 'Microcytic Anaemia', subtitle: 'Iron deficiency from menstrual blood loss — investigation and iron replacement' },
        { id: 'pcos', label: 'PCOS', subtitle: 'Anovulatory bleeding and endometrial protection' },
        { id: 'cocp', label: 'COCP', subtitle: 'Contraindications and prescribing of combined hormonal contraception' },
        { id: 'endometriosis', label: 'Endometriosis', subtitle: 'Dysmenorrhoea and pelvic pain — overlapping presentation' },
      ],
    },

  ],
}

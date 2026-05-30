import type { Note } from '../data/notes'

export const vaginalDischarge: Note = {
  id: 'vaginal-discharge',
  title: 'Vaginal Discharge',
  subtitle: 'Thrush, BV, chlamydia, gonorrhoea, trichomonas, mycoplasma genitalium',
  tags: ['gum', 'gynaecology', 'infection', 'sti', 'antibiotics'],

  body: 'vaginal discharge thrush candidiasis fluconazole clotrimazole bacterial vaginosis BV metronidazole chlamydia doxycycline azithromycin gonorrhoea ceftriaxone trichomonas mycoplasma genitalium STI sexually transmitted infection HVS high vaginal swab endocervical charcoal NAAT pH Amsel criteria GUM Umbrella clinic PID pelvic inflammatory disease ectopic infertility reactive arthritis Fitz-Hugh-Curtis contact tracing physiological discharge clue cells KOH fishy smell douching IUD recurrent BV pregnancy',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Key Principle',
      items: [
        '**Thrush is overdiagnosed; BV and STIs are underdiagnosed**',
        'Always ask: bleeding, pelvic pain, dyspareunia, itch',
        'Consider **non-infective causes**: foreign body (tampon), cervical ectropion/polyp, malignancy',
        'Previous OTC antifungal treatment that failed may make **vulvovaginal dermatitis worse** — rare bacterial desquamative inflammatory vaginitis needs **2% clindamycin cream** (refer GUM)',
      ],
    },

    // ── APPROACH ─────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Clinical Approach',
    },
    {
      type: 'list',
      items: [
        '**No STI risk factors + symptoms of thrush or BV** → treat empirically + safety net',
        '**STI risk factors, atypical features, or examination needed** → examine externally (herpes/dermatitis), speculum (FB, cervicitis, ectropion/lesion), take HVS + endocervical charcoal swabs (STI screen)',
        '**pH testing** with narrow-range pH paper (Camlab): thrush pH <4.5 | BV pH >4.5 — useful for differentiation at point of care',
        'If patient declines speculum examination → **self-taken LVS for NAAT** (or first-catch urine NAAT) — often superior for chlamydia/gonorrhoea/mycoplasma',
      ],
    },

    // ── NON-STI ──────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Common Non-STI Causes',
    },
    {
      type: 'table',
      headers: ['Diagnosis', 'Features', 'Treatment'],
      rows: [
        [
          '**Vaginal Thrush** (Candidiasis)',
          'Thick, curdy, white discharge; pH **acidic (<4.5)**; itch, soreness, external dyspareunia; satellite lesions on vulva. Often colonised without symptoms — **only treat if symptomatic**',
          '**Oral fluconazole 150 mg STAT** + clotrimazole pessary 500 mg. Topical azoles less effective and can irritate. Repeat after 4 days if severe',
        ],
        [
          '**Bacterial Vaginosis (BV)**',
          'Most common cause in WCBA; thin, grey-white, fishy-smelling discharge; pH **alkaline (>4.5)**; Amsel criteria on swab. Often no itch. RFs: douching, cunnilingus, IUD, STI (but BV itself is **not an STI**)',
          '**Metronidazole 400 mg BD × 5–7 days** (preferred) or 2 g STAT (more expensive). Alternatives: vaginal metronidazole gel, vaginal/oral clindamycin',
        ],
      ],
      caption: 'OTC treatments (pessaries, cream) less effective than oral; avoid douching/detergents in BV',
    },

    // ── STI CAUSES ───────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'STI Causes of Vaginal Discharge',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Suspected STI → Refer to GUM (Umbrella Clinic)',
      items: [
        'All 4 STIs below can cause green/frothy/offensive discharge',
        'GUM provides: treatment, full STI screen, abstinence advice until treated, **contact tracing** (last 6 months of partners), partner notification',
      ],
    },
    {
      type: 'table',
      headers: ['STI', 'Key Features', 'Treatment', 'Complications'],
      rows: [
        [
          '**Chlamydia**',
          'Most common; **70% asymptomatic**. NAAT from HVS or self-taken LVS/urine',
          'Doxycycline 100 mg BD × 7 days (1st line). 2nd line: azithromycin 1 g STAT',
          'PID (15% if untreated), ectopic pregnancy, infertility (tubal damage), reactive arthritis, Fitz-Hugh-Curtis perihepatitis',
        ],
        [
          '**Gonorrhoea**',
          'Increasing incidence; **50% asymptomatic**. Can affect pharynx, conjunctiva, rectum. NAAT from HVS/urine',
          '**Ceftriaxone 1 g IM STAT** (1st line). If known quinolone-sensitive: ciprofloxacin 500 mg STAT (counsel tendon rupture risk)',
          'Similar to chlamydia + arthritis, disseminated gonococcal infection (DGI)',
        ],
        [
          '**Trichomonas vaginalis (TV)**',
          'Most common worldwide; **50% asymptomatic**. Flagellated protozoan. NAAT from HVS/urine (send to lab quickly) or endocervical charcoal from posterior fornix at GUM',
          'Metronidazole 400 mg BD × 5–7 days (same as BV)',
          'PID, preterm birth in pregnancy',
        ],
        [
          '**Mycoplasma genitalium**',
          'Rising incidence; similar symptoms to chlamydia; risk of PID. NAAT from HVS (ECS gold standard)',
          'Doxycycline 100 mg BD × 7 days **+ azithromycin** 1 g STAT then 500 mg × 2 days (combined = strong chlamydia Rx)',
          'PID, infertility; high antibiotic resistance risk — test of cure at GUM',
        ],
      ],
      caption: 'All STIs: abstain until treated + partner notification; self-taken NAAT acceptable for diagnosis',
    },

    // ── BV DETAIL ────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Bacterial Vaginosis — Additional Detail',
    },
    {
      type: 'list',
      items: [
        '**Amsel criteria** (if swabbing): clue cells + fishy whiff with KOH + pH >4.5 + homogeneous discharge (3 of 4 = diagnosis)',
        '**Recurrent BV** (≥3 episodes/year) → refer GUM to confirm wet mount; consider **ABx prophylaxis**: metronidazole 400 mg BD × 3 days at start AND end of period, or 2 g STAT monthly',
        '**Avoid:** douching, detergents, scented products, topical treatments that disrupt flora',
        '**Pregnancy + BV** = risk of recurrent miscarriage, preterm birth — treat even if asymptomatic',
        'In pregnancy: metronidazole **500 mg dosing** (safe); if breastfeeding use vaginal metronidazole to minimise infant exposure',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS – Vaginal discharge', url: 'https://cks.nice.org.uk/topics/vaginal-discharge/' },
        { label: 'BASHH – STI guidelines', url: 'https://www.bashh.org/guidelines' },
        { label: 'Umbrella GUM clinic (Birmingham)', url: 'https://umbrellahealth.co.uk/' },
        { label: 'NICE CKS – BV', url: 'https://cks.nice.org.uk/topics/bacterial-vaginosis/' },
      ],
    },
  ],
}

import type { Note } from '../data/notes'

export const larcs: Note = {
  id: 'larcs',
  title: 'Progestogen-Only Contraception & LARCs',
  subtitle: 'POP, implant, injection and IUS/IUD — UKMEC, bleeding, missed-pill rules and lost threads',
  tags: ['contraception', 'gynaecology'],

  body: `progestogen only pill POP desogestrel Cerazette levonorgestrel implant Nexplanon etonogestrel injection Depo Provera DMPA Sayana Press IUS Mirena Levosert Kyleena Jaydess copper IUD LARC missed pill window breast cancer UKMEC unscheduled bleeding lost threads perforation expulsion osteoporosis`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'FSRH — Progestogen-Only Implant', url: 'https://www.fsrh.org/standards-and-guidance/' },
        { label: 'FSRH — Intrauterine Contraception', url: 'https://www.fsrh.org/standards-and-guidance/' },
        { label: 'NICE CKS — Contraception (Progestogen-Only)', url: 'https://cks.nice.org.uk/topics/contraception-progestogen-only-methods/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Progestogen-Only Pill (POP)' },

    {
      type: 'list',
      items: [
        'Daily pill with no break; safer/fewer contraindications than the COCP; works mainly by thickening cervical mucus (desogestrel also inhibits ovulation)',
        'Traditional POP (levonorgestrel/norethisterone): 3-hour missed-pill window; most have little bleeding change',
        'Desogestrel POP (Cerazette/Cerelle): 12-hour missed-pill window; more effective at suppressing ovulation; more likely to alter the bleeding pattern',
        'Key UKMEC: current breast cancer = 4; breast cancer in the past 5 years, active liver disease, or new migraine with aura whilst taking = 3',
        'Can start any time if not pregnant (2 days\' precautions; none if days 1–5)',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Missed POP Rules',
      items: [
        'A pill is "missed" if >3 hours late (traditional POP) or >12 hours late (desogestrel)',
        'Take the missed pill as soon as remembered (just one, even if >1 missed), take the next at the usual time, and use 48 hours of extra precautions',
        'If unprotected sex occurred during the missed-pill window and within 48h of restarting → emergency contraception needed',
      ],
    },

    { type: 'heading', level: 2, text: 'Contraceptive Implant (Nexplanon)' },

    {
      type: 'list',
      items: [
        'Subdermal etonogestrel rod; lasts 3 years; the MOST effective method (~0.05%/yr failure); rapidly reversible; can be used to age 55',
        'Same progestogen-only UKMEC as the POP (mainly current/recent breast cancer, liver disease)',
        'Bleeding is the main drawback: ~6 in 10 have a change; ~2 in 10 frequent/prolonged bleeding, ~2–3 in 10 amenorrhoea — a COCP (or other oestrogen) can be added short-term to settle bleeding (after STI check/exam)',
        'Insert days 1–5 (no precautions) or any time with 7 days\' precautions; can insert immediately after TOP',
        'Radio-opaque; rare insertion/removal problems (deep/impalpable implants need specialist removal)',
      ],
    },

    { type: 'heading', level: 2, text: 'Contraceptive Injection (Depo Provera / Sayana Press)' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Injection — Specific Cautions',
      items: [
        'Medroxyprogesterone acetate (DMPA) 150 mg IM every 12 weeks (Sayana Press is a SC self-inject version — good for obesity/self-administration); can be given up to 14 weeks before extra precautions needed',
        'Associated with a small, reversible reduction in bone mineral density — review need at 2 years and consider alternatives, especially in adolescents and women >45',
        'Delayed return of fertility — can take up to ~1 year after stopping',
        'Most become amenorrhoeic (helpful for bleeding) but bleeding can be erratic initially',
        'NOT affected by enzyme-inducing drugs (a good option in that setting); UKMEC 4 for current breast cancer',
      ],
    },

    { type: 'heading', level: 2, text: 'Intrauterine Methods (IUS & Copper IUD)' },

    {
      type: 'table',
      headers: ['Device', 'Duration / Notes'],
      rows: [
        ['Mirena / Levosert IUS (52 mg LNG)', 'Contraception ~8 years (per updated FSRH); licensed 5 years for HMB and as the progestogen arm of HRT (changed every ~5 years for HRT). Thins endometrium → lighter bleeding; treats HMB; ideal if also need menstrual benefit'],
        ['Kyleena (19.5 mg) / Jaydess (13.5 mg)', 'Smaller frames, easier insertion; contraception only (3–5 years); less amenorrhoea/bleeding control but fewer hormonal effects'],
        ['Copper IUD', 'Up to 5–10 years; non-hormonal; effective immediately (also the most effective emergency contraception); tends to make periods heavier/more painful'],
      ],
      caption: 'IUS effective after 7 days; copper IUD effective immediately. If inserted at age ≥45, an LNG-IUS used for contraception can often stay until menopause. Mirena is the only IUS licensed for HRT.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Intrauterine Device Risks & "Lost Threads"',
      items: [
        'Risks: uterine perforation (~1 in 1000), expulsion (~1 in 20, mostly in the first 3 months — teach thread-checking), and a small increased risk of PID in the first ~3 weeks after insertion',
        'Ectopic: overall risk is reduced (fewer pregnancies), but if pregnancy occurs with an IUD/IUS in situ the proportion that are ectopic is higher — exclude ectopic in any pregnancy with a coil',
        'Lost threads: exclude pregnancy and consider emergency contraception; examine; arrange a pelvic ultrasound — if in the uterus, reassure; if not seen, an abdominal/pelvic X-ray to exclude perforation (perforated devices need laparoscopic removal)',
        'Pregnancy with an IUS/IUD <12 weeks: refer to remove the device (reduces miscarriage/infection risk)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'contraception', label: 'Contraception — Overview & Method Choice', subtitle: 'UKMEC, efficacy, quick-starting, special situations' },
        { id: 'cocp', label: 'Combined Oral Contraceptive Pill', subtitle: 'The oestrogen-containing alternative — different cautions' },
        { id: 'hmb-fibroids', label: 'Heavy Menstrual Bleeding & Fibroids', subtitle: 'Mirena IUS is first-line for HMB' },
        { id: 'emergency-contraception', label: 'Emergency Contraception', subtitle: 'Copper IUD is the most effective EC' },
        { id: 'menopause', label: 'Menopause', subtitle: 'Mirena provides the progestogen arm of HRT' },
      ],
    },

  ],
}

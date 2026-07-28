import type { Note } from '../data/notes'

export const hirsutism: Note = {
  id: 'hirsutism',
  title: 'Hirsutism & Hypertrichosis',
  subtitle: 'Androgen-dependent excess hair — PCOS as the commonest cause, the red flags, and treatment',
  tags: ['endocrine', 'dermatology'],

  body: `hirsutism hypertrichosis androgen excess PCOS testosterone Ferriman-Gallwey idiopathic congenital adrenal hyperplasia Cushing's androgen-secreting tumour virilisation COCP co-cyprindiol eflornithine spironolactone electrolysis laser`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Hirsutism is excess terminal (coarse, pigmented) hair in a male-pattern, ANDROGEN-dependent distribution (face, chest, back, lower abdomen) in women — distinct from hypertrichosis, which is generalised excess hair unrelated to androgens. The overwhelming majority of hirsutism is PCOS or idiopathic and benign, but the key task is to spot the rare rapidly-progressive/virilising picture that signals an androgen-secreting tumour.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — Suspect an Androgen-Secreting Tumour',
      items: [
        'RAPID onset or rapidly progressive hirsutism, especially of recent onset in an older woman, or with VIRILISATION (deep voice, clitoromegaly, male-pattern balding, increased muscle bulk) → urgent endocrine referral to exclude an ovarian or adrenal androgen-secreting tumour.',
        'A markedly raised testosterone (e.g. >5 nmol/L) warrants urgent investigation.',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes' },
    {
      type: 'list',
      items: [
        'PCOS — by far the commonest cause (with oligomenorrhoea, acne, obesity, insulin resistance).',
        'Idiopathic hirsutism (normal androgens, regular cycles) — common.',
        'Less common: non-classical congenital adrenal hyperplasia, Cushing\'s syndrome, hyperprolactinaemia, and androgen-secreting tumours (rare).',
        'Drugs (androgens, some progestogens) and hypertrichosis-causing drugs (ciclosporin, minoxidil, phenytoin) — distinguish drug-induced hypertrichosis from true hirsutism.',
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },
    {
      type: 'list',
      items: [
        'Quantify with the Ferriman-Gallwey score; assess cycle regularity, speed of onset, and virilising features.',
        'Bloods: total testosterone (and SHBG/free androgen index); if raised or red flags — add DHEAS, 17-OH-progesterone (CAH), prolactin, and consider a Cushing\'s screen; check for PCOS (LH/FSH, glucose/lipids).',
        'A normal testosterone with gradual onset and regular cycles = likely idiopathic — reassure and treat cosmetically.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'table',
      headers: ['Approach', 'Detail'],
      rows: [
        ['Cosmetic / mechanical', 'Bleaching, waxing/threading, and — for longer-term reduction — electrolysis or laser (more effective on dark hair/pale skin; often self-funded)'],
        ['Topical', 'Eflornithine cream slows facial hair growth (used with other measures; effect reverses on stopping)'],
        ['Hormonal (first-line systemic)', 'A combined oral contraceptive reduces androgens; co-cyprindiol (cyproterone-containing) is more anti-androgenic but has a higher VTE risk — reserve and review'],
        ['Anti-androgen', 'Spironolactone (off-licence) as an adjunct; ensure effective contraception (feminisation of a male fetus). Takes ~6 months to show benefit'],
      ],
      caption: 'Counsel that hair treatments take months to work and address existing hair only slowly; treat the underlying cause (e.g. weight loss in PCOS) alongside.',
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hirsutism', url: 'https://cks.nice.org.uk/topics/hirsutism/' },
        { label: 'NICE CKS — PCOS', url: 'https://cks.nice.org.uk/topics/polycystic-ovary-syndrome/' },
        { label: 'BAD — Hirsutism Leaflet', url: 'https://www.bad.org.uk/pils/hirsutism/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'pcos', label: 'PCOS', subtitle: 'The commonest cause of hirsutism' },
        { id: 'cushings-syndrome', label: 'Cushing\'s Syndrome', subtitle: 'Androgen excess with other features' },
        { id: 'amenorrhoea', label: 'Amenorrhoea & Oligomenorrhoea', subtitle: 'Cycle disturbance in androgen excess' },
        { id: 'acne-vulgaris', label: 'Acne Vulgaris', subtitle: 'Coexisting androgen-driven skin feature' },
      ],
    },

  ],
}

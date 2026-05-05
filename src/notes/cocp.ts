import type { Note } from '../data/notes'

export const cocp: Note = {
  id: 'cocp',
  title: 'Combined Oral Contraceptive Pill (COCP)',
  subtitle: 'UKMEC criteria, preparation choice, missed pill rules, risks and annual review',
  tags: ['contraception', 'gynaecology'],

  content: [

    // ── OVERVIEW ──────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'How the COCP Works',
      items: [
        'Contains oestrogen (ethinylestradiol) + progestogen — prevents ovulation, thickens cervical mucus, keeps endometrium thin and stable',
        'Benefits: effective contraception, regularises and reduces heavy/painful periods, helps PCOS, endometriosis and PMS',
        'Reduces risk of endometrial and ovarian cancer (and colorectal) — slightly increases breast and cervical cancer risk (returns to baseline after stopping)',
        'Real-life failure rate ~10% in first year — depends on correct use and missed pill rules',
        'Not as effective as LARC (implant, IUD, IUS) — consider LARC for women who struggle with daily pill-taking',
      ],
    },

    // ── GENERATIONS ───────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Progestogen Generations' },

    {
      type: 'table',
      headers: ['Generation', 'Progestogen', 'Examples'],
      rows: [
        ['1st generation', 'Norethisterone (NET)', 'Loestrin (20 mcg)'],
        ['2nd generation', 'Levonorgestrel (LNG)', 'Microgynon 30 (ED version has dummy pills), Rigevidon'],
        ['3rd generation', 'Desogestrel, Gestodene', 'Marvelon/Mercilon (desogestrel 30/20 mcg); Femodene/Femodette (gestodene 30/20 mcg)'],
        ['4th generation', 'Drospirenone, Dienogest', 'Yasmin (30 mcg), Eloine (20 mcg); Zoely (nomegestrol + estradiol)'],
      ],
      caption: '3rd and 4th generation pills carry slightly higher VTE risk than 2nd generation — but absolute risk remains very low. Usually start with Microgynon 30 (2nd gen, 30 mcg) as first-line. 20 mcg pills used if oestrogen side effects prominent. Phasic pills (e.g. Logynon) have varying hormone levels — may be more "natural" but trickier to use.',
    },

    // ── UKMEC CONTRAINDICATIONS ───────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'UKMEC — Contraindications' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'UKMEC 4 — Absolute Contraindications (Do Not Use)',
      items: [
        'Migraine WITH aura (risk of ischaemic stroke)',
        'Blood pressure ≥160/100 mmHg',
        'Current or past CVD / stroke / TIA',
        'Smoker >15 cigarettes/day AND age ≥35 years',
        'Current or past VTE, or known thrombogenic mutation (e.g. Factor V Leiden)',
        'Breastfeeding <6 weeks post-partum',
        'Known BRCA mutation — review relative risk carefully',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'UKMEC 3 — Relative Contraindications (Risks Usually Outweigh Benefits)',
      items: [
        'BMI ≥35 kg/m²',
        'Smoking <15 cigarettes/day AND age ≥35 years',
        'Migraine WITHOUT aura (UKMEC 2 if no other risk factors — can use; UKMEC 3 if combined risk factors)',
        'Migraine with aura — if last episode >5 years ago = UKMEC 3 (discuss carefully)',
        'Enzyme-inducing drugs (rifampicin, carbamazepine, phenytoin, St John\'s Wort, modafinil) — COCP efficacy significantly reduced; use LARC (Mirena or injectable) instead',
        'Lamotrigine — COCP reduces lamotrigine levels (seizure risk on pill-free interval); Mirena or injectable preferred',
        'Malabsorption syndromes — LARC preferred',
      ],
    },

    // ── RISKS ─────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Key Risks — Absolute Risk Perspective' },

    {
      type: 'table',
      headers: ['Risk', 'Absolute Risk', 'Notes'],
      rows: [
        ['VTE', 'Non-pill: ~2/10,000 women/year; 2nd gen pill: ~6/10,000; 3rd/4th gen: ~9–12/10,000', 'Risk of death from VTE ~2/100,000 — much lower than VTE risk in pregnancy (~20/10,000). Higher risk with 3rd/4th gen pills and when starting/stopping/restarting pill repeatedly'],
        ['Stroke/MI', 'Very low absolute risk in healthy non-smoking women <35y', 'Significantly higher if migraine with aura, high oestrogen dose, or uncontrolled hypertension'],
        ['Breast cancer', 'Slight increase in current users — returns to baseline after stopping', 'Absolute risk very low in young women; avoid if BRCA carrier'],
        ['Cervical cancer', 'Small increased risk with prolonged use (>10 years)', 'Ensure cervical screening up to date; risk returns to baseline after stopping'],
      ],
    },

    // ── BEFORE STARTING ───────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Before Starting — Checklist' },

    {
      type: 'list',
      items: [
        'Check UKMEC criteria — smoking status, VTE history, migraine type, BP, BMI',
        'Measure blood pressure and BMI',
        'Counsel on risks and common side effects: breakthrough bleeding (usually settles in 3 months), headache, mood changes, breast tenderness, nausea',
        'Persistent breakthrough bleeding: lower oestrogen dose, change progestogen, back-to-back packets — first exclude pregnancy, STI, structural lesion',
        'Missed pill rules: know the rules and sick day rules — ensure patient has clear written information',
        'Drug interactions: enzyme inducers (rifampicin, AEDs), lamotrigine, malabsorption',
        'Annual review: BP, BMI, smoking status, symptom check',
      ],
    },

    // ── REGIMES ───────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Regimes and Starting Rules' },

    {
      type: 'table',
      headers: ['Regime', 'Method', 'Notes'],
      rows: [
        ['Standard 21/7', '21 active pills then 7-day break (withdrawal bleed)', 'Most common regime; 7-day break is highest failure risk window if pills missed at either end'],
        ['Tricycling', '3 packs back-to-back then 4-day break', 'Fewer bleeds, lower risk of failure, helps PMS and dysmenorrhoea'],
        ['Continuous use', 'Take pills continuously until breakthrough bleed occurs', 'Useful for endometriosis or patient preference; skip breaks entirely'],
        ['Starting mid-cycle', 'After day 5 of cycle: use 7 days of additional contraception (condoms)', 'If within first 5 days of cycle, no additional protection needed'],
        ['After emergency contraception', 'After Levonorgestrel EC: start COCP immediately (7 days additional protection); after UPA (EllaOne): wait 5 days then start (7 days additional protection + pregnancy test at 3 weeks)', 'Do not start UPA and COCP simultaneously'],
      ],
    },

    // ── MISSED PILL RULES ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Missed Pill Rules (30/35 mcg COCP)' },

    {
      type: 'table',
      headers: ['Situation', 'Action', 'Emergency Contraception?'],
      rows: [
        ['1 pill missed (any week)', 'Take the missed pill now (even if 2 at once today), continue pack as normal', 'No'],
        ['2+ pills missed — Week 1 (days 1–7)', 'Take most recent missed pill now, continue pack, use condoms 7 days', 'Yes — if UPSI in previous 7 days'],
        ['2+ pills missed — Week 2 (days 8–14)', 'Take most recent missed pill now, continue pack, use condoms 7 days', 'No (if pills taken correctly in week 1)'],
        ['2+ pills missed — Week 3 (days 15–21)', 'Take most recent missed pill now, continue pack, SKIP the pill-free break — go straight to next pack', 'No'],
        ['Extended pill-free interval (>7 days)', 'Treat as missed pills in Week 1 — EC if UPSI, 7 days additional protection', 'Yes if UPSI during or after extended break'],
      ],
      caption: 'The pill-free interval is the highest risk window — extending it even by 1 day can allow ovulation. Back-to-back packets reduce this risk. Sick day rules: vomiting within 2 hours of taking pill = treat as missed pill.',
    },

    // ── SPECIFIC PREPARATIONS ─────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Specific Preparations' },

    {
      type: 'table',
      headers: ['Preparation', 'Oestrogen dose', 'Progestogen', 'Notes'],
      rows: [
        ['Microgynon 30 / Rigevidon', '30 mcg EE', 'Levonorgestrel (2nd gen)', 'Standard first-line choice; Microgynon ED has dummy pills for continuous-feeling use'],
        ['Marvelon', '30 mcg EE', 'Desogestrel (3rd gen)', 'Slightly higher VTE risk; useful if androgenic side effects on Microgynon'],
        ['Femodene', '30 mcg EE', 'Gestodene (3rd gen)', 'As above'],
        ['Yasmin', '30 mcg EE', 'Drospirenone (4th gen)', 'Anti-androgenic — helps with acne/PCOS; mild diuretic effect; slightly higher VTE risk'],
        ['Mercilon / Femodette', '20 mcg EE', '3rd gen', 'Lower oestrogen — for oestrogen-related side effects; may have more breakthrough bleeding'],
        ['Loestrin 20', '20 mcg EE', 'Norethisterone (1st gen)', 'Lowest oestrogen dose; least VTE risk increase'],
        ['Zoely', 'Natural 17β-oestradiol 2.5 mg', 'Nomegestrol acetate', '"Bioidentical" oestrogen — more expensive; fewer oestrogen side effects'],
        ['Qlaira', 'Estradiol valerate', 'Dienogest (4th gen)', 'Phasic pill with bioidentical oestrogen — more expensive; for women with oestrogen SE'],
        ['Evra patch', 'Weekly transdermal oestrogen', 'Norelgestromin', 'Weekly patch — good adherence for those forgetting daily pills; higher oestrogen exposure'],
        ['NuvaRing', 'Monthly intravaginal', 'Etonogestrel', '3-weekly ring — discreet; good adherence; more expensive'],
      ],
    },

    // ── LOCAL REFERRAL ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Resources — Darwin Practice, Lichfield',
      items: [
        'SRH advice / complex contraception queries: Staffordshire Sexual Health Service — 01543 444100 (Lichfield)',
        'LARC fitting (IUD/IUS/implant): can be done at Darwin Practice if trained clinician, or refer to Lichfield SRH clinic',
        'Emergency contraception: available same-day at Darwin Practice, Lichfield SRH clinic, or local pharmacy (Levonorgestrel up to 72h, EllaOne up to 120h)',
        'Complex cases (e.g. enzyme inducers, history of VTE, medical conditions): Faculty of Sexual and Reproductive Healthcare (FSRH) helpline: 0300 300 0014',
        'Pregnancy confirmation and onward referral: Darwin Practice directly or via community midwifery',
      ],
    },

    // ── SAFETY NETTING ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — When to Act Urgently',
      items: [
        '999 / A&E: severe leg pain or swelling (DVT), sudden breathlessness or chest pain (PE), severe headache or visual disturbance (migraine with aura or stroke), sudden severe abdominal pain',
        'Same-day GP: new persistent severe headache (new onset migraine with aura = STOP COCP), new onset visual disturbance, BP ≥160/100 mmHg (STOP COCP), jaundice (hepatic effects)',
        'Red flags for stopping COCP: first episode of migraine with aura (switch to progestogen-only), hypertension ≥160/100, immobility (>3 weeks/surgery: stop 4 weeks before, restart 2 weeks after)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'FSRH — Combined Hormonal Contraception', url: 'https://www.fsrh.org/standards-and-guidance/documents/combined-hormonal-contraception/' },
        { label: 'UKMEC 2016 — Full Criteria', url: 'https://www.fsrh.org/standards-and-guidance/documents/ukmec-2016/' },
        { label: 'NICE CKS — Contraception', url: 'https://cks.nice.org.uk/topics/contraception-combined-hormonal-methods/' },
        { label: 'FPA — The Pill', url: 'https://www.fpa.org.uk/contraception/combined-pill' },
        { label: 'NHS — Combined Pill', url: 'https://www.nhs.uk/conditions/contraception/combined-contraceptive-pill/' },
      ],
    },
  ],

  body: 'COCP combined oral contraceptive pill oestrogen progestogen ethinylestradiol levonorgestrel desogestrel gestodene drospirenone UKMEC VTE thrombosis migraine aura contraindication missed pill emergency contraception Microgynon Marvelon Yasmin Femodene Mercilon Loestrin Qlaira Zoely Evra NuvaRing enzyme inducer lamotrigine LARC tricycling continuous use regime annual review BP BMI smoking',
}

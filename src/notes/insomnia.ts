import type { Note } from '../data/notes'

export const insomnia: Note = {
  id: 'insomnia',
  title: 'Insomnia',
  subtitle: 'Sleep hygiene, CBT-I, digital sleep programmes, and prescribing — including z-drugs, melatonin and daridorexant',
  tags: ['mental', 'prescribing', 'symptoms'],

  body: 'insomnia poor sleep sleep hygiene CBT-I cognitive behavioural therapy insomnia zopiclone zolpidem z-drug melatonin daridorexant Quviviq promethazine mirtazapine trazodone hydroxyzine sleep diary Sleepstation Sleepio Sleepful sleep hygiene hyperarousal chronic insomnia short term acute sleep disorder deprescribing hypnotic withdrawal benzodiazepine',

  content: [

    // ── OVERVIEW ─────────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Definition — Insomnia Disorder',
      items: [
        'Difficulty initiating or maintaining sleep, or early morning waking, occurring ≥3 nights/week',
        'Chronic insomnia: ≥3 months duration WITH significant daytime impairment (fatigue, mood, concentration, performance)',
        'Short-term insomnia: <3 months; usually precipitated by an identifiable stressor',
        'Always exclude secondary causes: OSA, RLS, circadian rhythm disorders, chronic pain, heart failure, GORD, menopause, anxiety, depression, medications (steroids, SSRIs, stimulants, beta-blockers)',
        'Use the Insomnia Severity Index (ISI) to assess severity — available free online',
      ],
    },

    // ── PATH OF INSOMNIA ──────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Understanding Insomnia — The Cognitive Model' },

    {
      type: 'image',
      src: '/images/insomnia-path-diagram.png',
      alt: 'The Path of Insomnia: a 5-step diagram from predisposition through life event, change in relationship with sleep, hyperarousal and learned neural pathways',
      caption: 'The path of insomnia. Once sleep becomes a "goal" rather than a biological function, hyperarousal kicks in — the more we try to sleep, the harder it becomes. The brain learns to signal danger at bedtime. This is the target of CBT-I.',
    },

    {
      type: 'para',
      text: 'Explaining this model to patients is often transformative — understanding why they cannot sleep reduces catastrophising, and helps them engage with behavioural approaches (CBT-I) rather than seeking medication. Key message: "The more you try, the worse it gets."',
    },

    // ── ACUTE VS CHRONIC ──────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Acute vs Chronic — Initial Approach' },

    {
      type: 'table',
      headers: ['Type', 'Duration', 'First Step', 'Medication'],
      rows: [
        ['Acute / short-term', '<3 months (often stress-related)', 'Listening, reassurance, sleep hygiene — very try not to prescribe', 'Only if highly distressed/disabling: single short course z-drug 3–7 days. Do not repeat.'],
        ['Short-term likely to resolve', 'Clear precipitant e.g. bereavement', 'Digital CBT-I or refer to local sleep service', 'Avoid medication — reassure it will resolve. Review in 4 weeks.'],
        ['Short-term with severe acute symptoms', 'Identifiable stressor, significant distress', 'Short course z-drug 3–7 days as temporary adjunct alongside digital CBT-I', 'Zopiclone 7.5 mg nocte (3.75 mg if elderly) or zolpidem 10 mg nocte (5 mg if elderly)'],
        ['Chronic insomnia', '≥3 months, ≥3 nights/week + daytime impairment', 'Digital CBT-I first — Sleepstation, Sleepio, Sleepful (free)', 'Only after CBT-I tried/unsuitable: consider melatonin (≥55 yrs) or daridorexant'],
      ],
      caption: 'Keep a low threshold for NOT prescribing. Z-drugs reduce sleep onset by ~20 minutes and increase total sleep by a subjective ~7 minutes — most benefit is placebo. Risks (addiction, falls, accidents, dementia association) outweigh benefits in most cases.',
    },

    // ── SLEEP HYGIENE ─────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Sleep Hygiene' },

    {
      type: 'list',
      items: [
        'Fixed bed time and wake-up time every day — including weekends; irregular schedules disrupt circadian rhythm',
        'Avoid screens (phones, tablets, TV) in the hour before bed — blue light suppresses melatonin',
        'Keep the phone outside the bedroom — remove the temptation to check it at night',
        'Avoid caffeine from the afternoon onwards (half-life 5–6 hours); avoid alcohol — it fragments sleep and reduces REM',
        'Avoid heavy meals within 2–3 hours of bed; avoid nicotine near bedtime',
        'Make the bedroom quiet, dark and cool — blackout curtains, ear plugs, keep thermostat around 18°C',
        'Relaxing activity before bed: reading, gentle stretching, mindfulness, warm bath',
        'Avoid napping during the day — or limit to 20 min before 3 pm if essential',
        'Exercise regularly — even a daily walk helps; avoid vigorous exercise within 2 hours of bed',
        'Write down worries or a to-do list for the next day — externalise the mental load before bed',
        'Keep a sleep diary for 2 weeks — identifies patterns, quantifies the problem, and helps target CBT-I',
        'Reassure: sleep naturally occurs in cycles (~90 min) with brief awakenings; waking at 3 am is normal and does not mean poor sleep unless daytime function is affected',
      ],
    },

    // ── CBT-I ─────────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'CBT-I — Cognitive Behavioural Therapy for Insomnia' },

    {
      type: 'callout',
      variant: 'info',
      title: 'CBT-I — First-Line for All Chronic Insomnia',
      items: [
        'CBT-I is the most effective treatment for chronic insomnia — superior to medication and without the risks',
        'Targets the interaction between negative thoughts ("I can never sleep"), feelings (anxiety, low mood) and behaviour (bad habits, clock-watching, lying awake in bed)',
        'Key techniques: sleep restriction therapy, stimulus control (bed only for sleep and sex), relaxation training, cognitive restructuring, sleep hygiene education',
        'Usually delivered over 6–8 sessions; digital programmes make it highly accessible',
        'NICE recommends offering digital CBT-I to all patients with chronic insomnia before considering medication',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Digital CBT-I — Local and National Options',
      items: [
        'Sleepstation (NHS): evidence-based digital CBT-I programme — referrals via https://www.sleepstation.org.uk/nhs_options/ (check local ICB for direct referral pathway)',
        'Sleepio (Big Health): available to some NHS patients depending on ICB — free if available on NHS',
        'Sleepful: FREE to all — self-directed CBT-I app; good first step while awaiting Sleepstation',
        'Every Mind Matters (NHS): sleep section with practical CBT-I based resources — nhs.uk/every-mind-matters',
        'Advise patients that digital CBT-I requires commitment and may feel counterintuitive (sleep restriction initially worsens sleep before improving it)',
      ],
    },

    // ── MANAGEMENT PATHWAY ────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Primary Care Management Pathway' },

    {
      type: 'image',
      src: '/images/insomnia-pathway.png',
      alt: 'Primary Care Insomnia Management Pathway for Adults — Coventry and Warwickshire APC flowchart showing assessment, short vs long-term insomnia, z-drugs, digital CBT-I, melatonin and daridorexant',
      caption: 'Primary care insomnia pathway. Short-term insomnia: reassure ± short z-drug course (3–7 days) if severely distressed. Chronic insomnia: CBT-I first; if failed/unavailable — melatonin MR 2mg (≥55 years) or daridorexant (any age, if CBT-I tried). Review within 2–4 weeks; stop medication at 12–13 weeks if no improvement.',
    },

    // ── MEDICATION TABLE ──────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Prescribing Options' },

    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Indication', 'Max Duration', 'Key Cautions'],
      rows: [
        ['Zopiclone (z-drug)', '7.5 mg nocte (3.75 mg if elderly / hepatic impairment)', 'Short-term severe insomnia only', '3–7 days; do not repeat or put on repeat prescription', 'Addiction, tolerance, rebound insomnia on stopping, falls, accidents, possible dementia association. Do not drive. Metallic taste common.'],
        ['Zolpidem (z-drug)', '10 mg nocte (5 mg if elderly)', 'Short-term severe insomnia only', '3–7 days', 'As above. Complex sleep behaviours (sleepwalking). Shorter half-life than zopiclone. Do not drive.'],
        ['Melatonin MR 2 mg', '2 mg 1–2 hours before bed', 'Chronic primary insomnia in patients ≥55 years; also jet lag (unlicensed adults 3 mg for 5 days)', '13 weeks (licensed); review at 13 weeks — stop if no benefit; ongoing if effective with regular review', 'Generally well tolerated; does not cause daytime sedation at licensed dose; driving: caution. Red on many formularies — check local prescribing policy. Off-licence for <55 years (specialist-initiated or if risk-benefit discussed).'],
        ['Daridorexant (Quviviq)', '50 mg nocte, 30 minutes before bed (25 mg if on CYP3A4 inhibitors e.g. ciclosporin, ciprofloxacin)', 'Chronic insomnia ≥3 months with daytime impairment, AFTER CBT-I has been tried / is unavailable / unsuitable', 'As short as possible; reassess within 12 weeks; stop if no benefit', 'Orexin receptor antagonist — novel mechanism; not associated with dependence. Do not drive if drowsy. Avoid in severe hepatic impairment. Must meet all 3 NICE criteria (see below).'],
        ['Promethazine hydrochloride', '25 mg nocte (ONE or TWO 10 mg tablets at night)', 'Short-term, mild–moderate insomnia; useful as a non-addictive option; acute adjustment-related sleep issues', 'Short-term; avoid prolonged use', 'Sedating antihistamine; anticholinergic (dry mouth, blurred vision, urinary retention); avoid in elderly; hangover sedation next day. OTC as Phenergan.'],
        ['Diphenhydramine (OTC)', 'As per OTC product (e.g. Nytol 25–50 mg)', 'Mild insomnia; patient-initiated OTC', 'OTC short-term only', 'Anticholinergic; tolerance rapidly develops; not recommended as routine GP prescription'],
        ['Hydroxyzine 10–25 mg', '10–25 mg nocte', 'Short-term; adjunct for anxiety-related insomnia; useful when anxiety is a key driver', 'Short-term', 'Antihistamine / anxiolytic; anticholinergic; QTc prolongation risk at higher doses; not licensed for insomnia but commonly used off-label'],
        ['Mirtazapine 7.5–15 mg', '7.5 mg or 15 mg nocte (paradoxically more sedating at lower doses)', 'If comorbid depression or anxiety — treat both; do not use for insomnia alone', 'Ongoing if clinically indicated for depression — not for primary insomnia without depression', 'Weight gain; increased appetite; sedation (useful here); discontinuation syndrome. Lower doses are more sedating (H1 predominance).'],
        ['Trazodone 50–100 mg', '50–100 mg nocte', 'Comorbid depression + insomnia; off-label for primary insomnia', 'Ongoing for depression; review regularly for primary insomnia', 'Off-licence for primary insomnia; sedating antidepressant; orthostatic hypotension; priapism (rare). Commonly used in practice despite off-label status.'],
      ],
      caption: 'IMPORTANT: Any drug with sedative effects impairs driving — patients must be advised they must NOT drive when impaired. This applies to all drugs in this table. Document advice given.',
    },

    // ── DARIDOREXANT ──────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Daridorexant (Quviviq) — NICE Criteria for Prescribing',
      items: [
        '1. Insomnia disorder: symptoms ≥3 nights/week for ≥3 months AND daytime functioning considerably affected',
        '2. CBT-I has been tried but not worked, OR is unavailable, OR is unsuitable for the patient',
        '3. Treatment to be as short as possible with review within 12 weeks; stop if no improvement at 12 weeks',
        'Orexin receptor antagonist — blocks wake-promoting signals; non-addictive; does not cause tolerance or withdrawal',
        'Dose: 50 mg nocte 30 minutes before bed. Reduce to 25 mg if on strong CYP3A4 inhibitors (ciclosporin, ciprofloxacin)',
        'Review at 12 weeks — if benefiting, reassess whether ongoing use is appropriate; if not, stop',
      ],
    },

    // ── MELATONIN ─────────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Melatonin MR 2 mg — Prescribing Notes',
      items: [
        'Licensed for short-term treatment of primary insomnia in patients ≥55 years — 13-week course',
        'Take 1–2 hours before bed; does not cause next-day sedation at 2 mg MR dose',
        'Jet lag: 3 mg for 5 days (unlicensed; OTC in USA/Canada)',
        'Formulary status: red/amber on many ICB formularies — check local policy before prescribing',
        'Children and <55 years: specialist initiation only (or clear documented risk-benefit discussion)',
        'Prescribing for >55 years: generally safe and well-tolerated; review at 13 weeks — stop if no benefit, continue if effective',
        'Preferred over z-drugs as no addiction, withdrawal or falls risk at standard dose',
      ],
    },

    // ── Z-DRUG DANGERS ────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Z-Drugs & Benzodiazepines — Risks & Guidance',
      items: [
        'Reduces sleep onset by ~20 minutes; increases subjective total sleep time by only ~7 minutes — largely placebo effect',
        'Risks: addiction and dependence (physical and psychological), tolerance within days, severe rebound insomnia on stopping, daytime sedation, falls and accidents, complex sleep behaviours (sleepwalking, sleep-eating)',
        'Association with increased risk of dementia — causal link debated but not disproven',
        'NEVER put on repeat prescription; prescribe a single short supply (7 tablets = 7 nights)',
        'Document in notes: indication, duration advised, driving advice given, counselled re risks',
        'Never prescribe as first-line for insomnia without attempting sleep hygiene and CBT-I first',
        'NICE patient decision aid: "Should I stop my benzodiazepine or z-drug?" — share with patients',
      ],
    },

    // ── DEPRESCRIBING ─────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Deprescribing Z-Drugs & Benzodiazepines' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Tapering Strategy',
      items: [
        'Engage the patient — explain the benefits of stopping clearly: better sleep quality, reduced accident risk, reduced dementia risk, reduced falls risk',
        'Reframe: "Often what feels like insomnia when stopping the drug is withdrawal — not your original insomnia returning"',
        'Taper slowly: reduce by ~25% of current dose every 2 weeks; go slower if withdrawal symptoms emerge',
        'Simultaneously introduce CBT-I and sleep hygiene — this is the key to sustained success',
        'Mild transient withdrawal symptoms expected: anxiety, rebound insomnia, irritability, sweating — reassure these will settle',
        'If unable to taper in primary care: refer to community drugs/alcohol team or specialist if severe dependence',
        'NICE patient decision aid on stopping: https://www.nice.org.uk/guidance/ng215/resources/should-i-stop-my-benzodiazepine-or-zdrug-patient-decision-aid-summary-pdf-13072600333',
      ],
    },

    // ── QUICK GUIDE ───────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Quick Prescribing Guide — By Situation' },

    {
      type: 'table',
      headers: ['Situation', 'Approach'],
      rows: [
        ['Short-term insomnia, mild, likely to resolve', 'Sleep hygiene advice; sleep diary; digital CBT-I (Sleepstation/Sleepful). No medication.'],
        ['Short-term, highly distressed, severe', 'Sleep hygiene + digital CBT-I + short course zopiclone 7.5 mg (7 tablets only). Review in 2–4 weeks.'],
        ['Young adult, anxiety-related insomnia', 'CBT-I (Talking Therapies referral); promethazine 25 mg PRN short-term or hydroxyzine 10–25 mg nocte PRN while awaiting CBT-I'],
        ['Vague, non-severe, ≥55 years', 'Melatonin MR 2 mg — safe, non-addictive, well tolerated; 13-week trial'],
        ['Chronic insomnia, CBT-I failed, any age', 'Daridorexant 50 mg (if meets all 3 NICE criteria); review at 12 weeks'],
        ['Insomnia with comorbid depression', 'Treat the depression — mirtazapine 15 mg or trazodone 100 mg nocte addresses both; refer Talking Therapies'],
        ['Elderly patient on long-term z-drug/BDZ', 'Deprescribing — 25% taper every 2 weeks + CBT-I; share NICE decision aid; do not add melatonin/daridorexant without tapering hypnotic first'],
        ['Insomnia + OSA suspected', 'Refer for sleep study first; treat OSA before treating insomnia pharmacologically — CPAP often resolves insomnia'],
      ],
      caption: 'When in doubt: less is more. Sleep hygiene + CBT-I + time resolves most insomnia without medication.',
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Insomnia', url: 'https://cks.nice.org.uk/topics/insomnia/' },
        { label: 'Sleepstation NHS', url: 'https://www.sleepstation.org.uk/nhs_options/' },
        { label: 'Sleepful (free CBT-I)', url: 'https://www.sleepful.me/' },
        { label: 'Every Mind Matters — Sleep', url: 'https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/' },
        { label: 'NICE — Stop BDZ/Z-drug Decision Aid', url: 'https://www.nice.org.uk/guidance/ng215/resources/should-i-stop-my-benzodiazepine-or-zdrug-patient-decision-aid-summary-pdf-13072600333' },
        { label: 'Mind — Sleeping Pills Information', url: 'https://www.mind.org.uk/information-support/drugs-and-treatments/sleeping-pills-and-minor-tranquillisers/about-sleeping-pills-and-minor-tranquillisers/' },
      ],
    },

  ],
}

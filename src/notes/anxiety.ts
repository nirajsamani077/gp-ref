import type { Note } from '../data/notes'

export const anxiety: Note = {
  id: 'anxiety-gad',
  title: 'Anxiety Disorders',
  subtitle: 'GAD, panic disorder, social anxiety, health anxiety — assessment, CBT principles and management in primary care',
  tags: ['mental', 'symptoms'],

  body: 'anxiety GAD generalised anxiety disorder panic disorder social anxiety health anxiety agoraphobia phobia worry CBT cognitive behavioural therapy stepped care sertraline SSRI pregabalin venlafaxine benzodiazepine avoidance serotonin GAD-2 PHQ breathing graded exposure mindfulness relaxation self-help talking therapies Staffordshire IAPT CMHT flight fight',

  content: [

    { type: 'heading', level: 2, text: 'Screening & Assessment' },

    {
      type: 'callout',
      variant: 'info',
      title: 'GAD-2 Screening Questions',
      items: [
        '"Feeling anxious, nervous or on edge?" — scored: 3 (nearly every day), 2 (most days), 1 (a few days)',
        '"Can\'t stop or control worrying?" — scored the same way',
        'Score ≥3 is positive for anxiety — then explore further: functioning, avoidance, situational vs generalised ("free-floating") tension, panic attacks (physical symptoms), and comorbid depression/risk',
        'Ask about safety and suicide risk — anxiety disorders carry significant distress and associated self-harm risk, especially in OCD/BDD',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Framing anxiety for patients',
      items: [
        '"Worrying is a normal part of life, but becomes a problem when it happens too frequently, inappropriately, or gets in the way of day-to-day functioning"',
        '"The anxiety response (flight or fight) is unpleasant but not itself dangerous — the physical symptoms feel alarming but are not harmful"',
        'Acknowledge the real impact of anxiety on sleep, relationships, and work before introducing the management options',
      ],
    },

    { type: 'heading', level: 2, text: 'CBT Framework' },

    {
      type: 'para',
      text: 'Use the CBT framework in consultations: thoughts, emotions, behaviours and physical symptoms all interact in a vicious cycle. For example, anxious thoughts → physical symptoms → avoidance → reinforces belief that the thing is dangerous → more anxiety. Breaking any part of the cycle helps.',
    },

    {
      type: 'image',
      src: '/images/anxiety-cycles.png',
      alt: 'CBT anxiety vicious cycle diagram showing interactions between thoughts, emotions, physical symptoms and behaviour',
      caption: 'The anxiety vicious cycle — thoughts, physical symptoms, emotions and behaviour reinforce each other. CBT targets each component.',
      float: 'right',
      maxWidth: '340px',
    },

    {
      type: 'list',
      items: [
        'Thoughts: identify catastrophising ("what if" thinking), challenge with realistic alternatives, use "two-track" approach (physical and mental well-being)',
        'Behaviours: avoidance maintains anxiety — graded exposure (facing feared situations incrementally) is key; behavioural activation breaks the cycle',
        'Physical symptoms: breathing exercises (slow, steady out-breath), progressive muscle relaxation, sleep hygiene',
        'Mood & lifestyle: alcohol and poor sleep perpetuate anxiety and low mood — address these as part of the cycle',
        'Allocated "worry time" — contain worry to a fixed 15 min/day period; practise postponing worry outside this time',
        'Mindfulness and meditation reduce rumination; Headspace app is evidence-based; group exercise has good evidence',
      ],
    },

    {
      type: 'image',
      src: '/images/anxiety-self-help.png',
      alt: 'Things that help my anxiety — infographic showing self-help strategies',
      caption: 'Self-help strategies for anxiety — share with patients as a take-away resource.',
      maxWidth: '500px',
    },

    {
      type: 'image',
      src: '/images/7-underlying-factors-that-create-anxiety-and-stress.jpg.webp',
      alt: 'Seven underlying factors that create anxiety and stress infographic',
      caption: 'Seven underlying factors that create anxiety and stress — useful for psychoeducation.',
      maxWidth: '500px',
    },

    { type: 'heading', level: 2, text: 'Stepped Care' },

    {
      type: 'table',
      headers: ['Step', 'Who', 'Interventions'],
      rows: [
        ['Step 1', 'Mild symptoms, not interfering with function', 'Watch, wait, and educate. Psychoeducation, self-help resources, lifestyle advice. Review in 4–6 weeks.'],
        ['Step 2', 'Mild to moderate, some impact on function', 'Low-intensity psychological: guided self-help (CBT-based), computerised CBT (e.g. SilverCloud), group exercise, group psychoeducation. Staffordshire Talking Therapies (self-referral).'],
        ['Step 3', 'Moderate to severe, significant functional impairment or Step 2 failed', 'High-intensity CBT (individual or group) and/or pharmacotherapy. Refer to Talking Therapies or consider medication.'],
        ['Step 4', 'Severe, complex, treatment-resistant, or significant risk', 'Specialist CMHT referral. Consider complex needs, comorbidity, crisis support.'],
      ],
      caption: 'NICE stepped care model for anxiety. Most patients are managed at Steps 1–3 in primary care.',
    },

    { type: 'heading', level: 2, text: 'Anxiety Disorder Types & Specific Management' },

    {
      type: 'table',
      headers: ['Condition', 'Key features', 'Psychological Rx', 'Pharmacological Rx'],
      rows: [
        ['Generalised Anxiety Disorder (GAD)', 'Chronic, "free-floating" worry across multiple domains; physical tension, sleep disturbance, irritability; not situational', 'CBT (worry postponement, cognitive restructuring, mindfulness), guided self-help', 'SSRI (sertraline 1st line); if failed → 2nd SSRI or SNRI (venlafaxine); if failed → CMHT for pregabalin. Avoid BDZ.'],
        ['Panic Disorder', 'Recurrent unexpected panic attacks (palpitations, breathlessness, chest tightness, derealization, fear of dying); anticipatory anxiety; may develop agoraphobia', 'Graded exposure + breathing exercises (slow, steady out-breath). CBT explaining the panic cycle.', 'SSRI (any — sertraline usual 1st line); if failed after 12 weeks → TCA (imipramine or clomipramine) off-licence. Propranolol short-term adjunct (e.g. for flying) — masks but does not cure.'],
        ['Social Anxiety Disorder', 'Fear of social situations, scrutiny, embarrassment; avoidance; may present as "shyness"', 'CBT with social exposure hierarchy', 'SSRI — sertraline or escitalopram preferred; if failed → alternative SSRI or venlafaxine'],
        ['Health Anxiety', 'Excessive preoccupation with having or developing serious illness; "doctor shopping"; reassurance seeking provides only brief relief', '"Two-track" approach — validate physical and mental aspects; CBT challenging reassurance-seeking; graded reduction in medical investigations', 'SSRI if severe; CBT is primary treatment'],
        ['Agoraphobia', 'Fear of leaving home/open spaces; often secondary to panic disorder; can become very disabling', 'Graded exposure — start with short trips with support, build up. Relapse rate high so usually needs pharmacotherapy alongside.', 'As per panic disorder. Meds often needed long-term given high relapse rate.'],
        ['Specific Phobia', 'Situational fear (blood, needles, flying, animals); circumscribed', 'Graded exposure is treatment of choice', 'Limited role for medication; propranolol occasionally for acute situational use'],
      ],
      caption: 'Anxiety disorder types and management overview. Psychological and pharmacological treatments are complementary.',
    },

    { type: 'heading', level: 2, text: 'Pharmacological Management' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Drug choices',
      items: [
        'SSRIs are first-line for all anxiety disorders — sertraline most commonly used first-line (fewest drug interactions)',
        'Start low, go slow — SSRIs initially worsen anxiety in first 1–2 weeks; warn patients and review at 2 weeks',
        'Allow 4–8 weeks for full effect; do not switch too early',
        'If SSRI fails after adequate trial (≥12 weeks at therapeutic dose) → try alternative SSRI or SNRI (venlafaxine, duloxetine)',
        'If two SSRI/SNRIs fail → refer to CMHT; pregabalin is an option but only via specialist in most areas',
        'For panic disorder: TCA (imipramine or clomipramine) is second-line after failed SSRI — off-licence but evidence-based',
        'Propranolol: occasional short-term adjunct for situational symptoms (e.g. presentations, flying) — does not treat underlying disorder',
        'Duration: treat for at least 12 months for GAD/panic (12 months from remission for OCD); then taper slowly',
        'See antidepressant note for switching guidance, doses, and discontinuation',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'antidepressants', label: 'Antidepressants', subtitle: 'Dosing, drug choices, switching, discontinuation' },
        { id: 'ocd-bdd', label: 'OCD & BDD', subtitle: 'Higher-dose SSRIs, ERP therapy' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'What to avoid',
      items: [
        'Benzodiazepines: no evidence for long-term benefit, highly addictive, poor long-term outcomes, rebound anxiety on cessation — avoid except very short-term crisis use',
        'Sedating antihistamines (promethazine, hydroxyzine): limited evidence, sedation, not recommended',
        'Antipsychotics: not first-line for anxiety in primary care',
        'Beta-blockers as monotherapy for GAD: treat symptoms but do not address underlying disorder',
        'Avoid advising alcohol to "take the edge off" — alcohol perpetuates the anxiety cycle',
      ],
    },

    { type: 'heading', level: 2, text: 'Review & Follow-up' },

    {
      type: 'list',
      items: [
        'Review at 2 weeks when starting an SSRI (especially if patient under 30 or significant risk) — assess for worsening anxiety or suicidal ideation',
        'Then monthly for first 3 months',
        'Then 3–6 monthly once stable',
        'At each review: GAD-7 score, functioning, sleep, avoidance behaviour, side effects, alcohol/substance use',
        'Plan for stopping: taper slowly after 12 months in remission; withdrawal symptoms (anxiety, agitation, GI upset) differ from relapse — relapse usually months after stopping',
        'Educate patient: recovery is not linear; setbacks are normal; continued engagement with self-help is protective',
      ],
    },

    { type: 'heading', level: 2, text: 'Self-Help & Patient Resources' },

    {
      type: 'list',
      items: [
        'Staffordshire & Stoke Talking Therapies — IAPT service; patients can self-refer; offers CBT, guided self-help, group programmes',
        'Anxiety UK (anxietyuk.org.uk) — charity with resources and therapist support',
        'MIND (mind.org.uk) — information, local groups, peer support',
        'Book: "Overcoming Worry & Generalised Anxiety Disorder" by Mark Freeston — highly recommended self-help',
        'Apps: Headspace, Calm, SilverCloud (computerised CBT on prescription)',
        'Encourage graded return to activities avoided due to anxiety — avoidance is the main driver of chronicity',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Staffordshire & Stoke Talking Therapies (self-refer)', url: 'https://staffsandstoketalkingtherapies.nhs.uk' },
        { label: 'Staffordshire Local MH Support Services', url: 'https://www.staffordshire.gov.uk/health-and-wellbeing/mental-wellbeing-services/mental-health-support/local-support-services-and' },
        { label: 'NICE CKS — Generalised Anxiety Disorder', url: 'https://cks.nice.org.uk/topics/generalized-anxiety-disorder/' },
        { label: 'NICE CKS — Panic Disorder', url: 'https://cks.nice.org.uk/topics/panic-disorder/' },
        { label: 'NICE NG189 — Generalised Anxiety Disorder', url: 'https://www.nice.org.uk/guidance/cg113' },
        { label: 'Anxiety UK', url: 'https://www.anxietyuk.org.uk' },
        { label: 'MIND — Anxiety', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/' },
        { label: 'SilverCloud (computerised CBT — prescribe via Talking Therapies)', url: 'https://www.silvercloudhealth.com' },
      ],
    },

  ],
}

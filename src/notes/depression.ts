import type { Note } from '../data/notes'

export const depression: Note = {
  id: 'depression',
  title: 'Depression',
  subtitle: 'Screening, CBT framework, stepped care, pharmacotherapy, SAD, and safety planning',
  tags: ['mental', 'symptoms'],

  body: 'depression low mood PHQ9 PHQ-9 PHQ2 screening anhedonia biological symptoms sleep appetite weight tired TATT CBT cognitive behavioural therapy stepped care SSRI antidepressant behavioural activation guided self help IAPT talking therapies bipolar SAD seasonal affective disorder lightbox safety plan crisis relapse counselling mindfulness sertraline fluoxetine mirtazapine venlafaxine CMHT referral SPA suicidal thoughts self-harm psychosis',

  content: [

    { type: 'heading', level: 2, text: 'Screening & Assessment' },

    {
      type: 'callout',
      variant: 'info',
      title: '2-Question Screening (PHQ-2)',
      items: [
        '"Do you feel down, depressed or hopeless?"',
        '"Have you had little interest or pleasure in doing things?"',
        'If either positive → complete PHQ-9 and explore further',
        'Also ask about: sleep, appetite, weight, fatigue (TATT), concentration, psychomotor changes, suicidal thoughts / self-harm',
        'Social history: home, work, relationships, children, finances, recent stressful life events, alcohol/drugs',
        'Screen for anxiety and panic attacks (very common comorbidity)',
        'Periods of elevated mood, reduced sleep, risky behaviour → consider bipolar affective disorder (BAD) — 10% of depression presentations',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Differential diagnosis — do not miss',
      items: [
        'Bipolar affective disorder (BAD) — 10% of patients presenting with depression have BAD; always screen for past elevated mood episodes',
        'Stress reaction / adjustment disorder / PTSD — especially after acute life events',
        'Hypothyroidism — fatigue, low mood, weight gain; check TFTs',
        'Anaemia, vitamin D deficiency, B12 deficiency — check bloods',
        'Eating disorder — weight loss, preoccupation with food/body',
        'Dementia — cognitive symptoms, functional decline, especially in older patients',
        'Alcohol/substance misuse — can mimic or perpetuate depression',
        'Seasonal affective disorder (SAD) — depression consistently only in winter months',
      ],
    },

    { type: 'heading', level: 2, text: 'Understanding Depression' },

    {
      type: 'image',
      src: '/images/understanding-depression-and-how-our-body-responds.png.webp',
      alt: 'Understanding depression — how our body responds, showing triggers, core beliefs, thoughts, brain changes, body reactions and behaviour',
      caption: 'Understanding depression — triggers, core beliefs, thoughts, brain changes, body reactions and behaviour all interact. Use this to explain the condition to patients.',
      maxWidth: '480px',
    },

    { type: 'heading', level: 2, text: 'CBT Framework' },

    {
      type: 'para',
      text: 'Use the CBT framework to explain depression to patients: negative thoughts and emotions interact with behaviours and physical symptoms in a vicious cycle. Breaking any part of the cycle — especially the behavioural and physical components — can reverse the spiral.',
    },

    {
      type: 'image',
      src: '/images/Cognitive_behavioral_therapy_-_basic_tenets.svg.png',
      alt: 'CBT cycle diagram showing bidirectional links between behaviour, feelings and thoughts, with core beliefs at the centre',
      caption: 'The CBT model — thoughts, feelings and behaviour are interconnected. Core beliefs (about self, others and the future) drive the cycle. CBT targets each component.',
      float: 'right',
      maxWidth: '320px',
    },

    {
      type: 'list',
      items: [
        'Control what you can control: behaviours and the physical body — exercise, sleep, diet, social contact, reducing alcohol',
        'Behavioural activation: gradually increase engagement with activities previously enjoyed; use "microsteps" to build momentum',
        'Mindfulness: step back, observe thoughts without fusing with them; self-awareness and measured response rather than automatic reactions',
        'Challenge negative automatic thoughts: identify cognitive distortions (catastrophising, black-and-white thinking, mind-reading); test evidence for and against',
        'Improving sleep, reducing alcohol, and re-engaging social support all feed back positively into mood',
      ],
    },

    {
      type: 'image',
      src: '/images/Core-Principles-of-Cognitive-Behavioural-Therapy.png.webp',
      alt: 'Core principles of CBT — behavioural activation, skill development, cognitive restructuring and goal-oriented therapy',
      caption: 'Core principles of CBT — behavioural activation, skill development, cognitive restructuring and goal-oriented therapy.',
      maxWidth: '460px',
    },

    { type: 'heading', level: 2, text: 'Stepped Care' },

    {
      type: 'table',
      headers: ['PHQ-9 score', 'Severity', 'First-line interventions'],
      rows: [
        ['<10', 'Mild', 'Watchful waiting, psychoeducation, self-help, lifestyle advice (exercise, sleep, alcohol reduction). Review in 2–4 weeks.'],
        ['10–15', 'Moderate', 'Low-intensity psychological interventions via IAPT Talking Therapies (guided self-help, behavioural activation, group CBT, computerised CBT). Counsel on risks/benefits of SSRI — start if patient prefers or psychological Rx not accessible.'],
        ['16–19', 'Moderately severe', 'SSRI alongside high-intensity psychological therapy (individual CBT, counselling). Refer to Talking Therapies for high-intensity work.'],
        ['≥20', 'Severe', 'SSRI (consider urgent start), high-intensity CBT, consider urgent CMHT referral if psychosis, severe risk, or poor response. Safety net fully.'],
      ],
      caption: 'Stepped care for depression. PHQ-9 guides intensity of treatment. Reassess at 4–6 weeks — if no improvement, step up treatment.',
    },

    { type: 'heading', level: 2, text: 'Psychological Treatments' },

    {
      type: 'table',
      headers: ['Treatment', 'Best for', 'Notes'],
      rows: [
        ['Guided self-help (CBT-based)', 'Mild-moderate depression', 'Workbook-based CBT concepts + coping skills; 6–8 sessions with IAPT practitioner. SilverCloud (computerised CBT) available on prescription.'],
        ['Behavioural activation', 'Social withdrawal, anhedonia', 'Focus on increasing activity and engagement; microsteps; reduces avoidance. Very effective for moderate depression.'],
        ['Group exercise programme', 'Any severity as adjunct', 'Evidence-based; also combats isolation. Social and physical benefits.'],
        ['Mindfulness-based CBT', 'Relapse prevention; rumination', 'Structured mindfulness programme (MBCT); 8 weeks. Particularly effective at preventing relapse (3+ episodes).'],
        ['Counselling', 'Specific life issues (work, relationships, bereavement)', 'Therapist providing emotional listening and working through issues. Better for defined stressors than generalised depression.'],
        ['Psychodynamic therapy', 'Stress in relationships; interpersonal conflicts', 'Explores underlying relational patterns and past experiences.'],
        ['Individual CBT', 'Moderate-severe depression', '8–20 sessions; gold-standard for moderate-severe; continual work with therapist on cognitive and behavioural change.'],
      ],
      caption: 'Psychological treatments available in IAPT/Talking Therapies. Combinations of treatments are often used.',
    },

    { type: 'heading', level: 2, text: 'Pharmacotherapy' },

    {
      type: 'callout',
      variant: 'info',
      title: 'When and how to start an antidepressant',
      items: [
        'Consider SSRI alongside psychological treatment for PHQ-9 ≥16 (moderately severe/severe) or if patient prefers medication',
        'Discuss risks and benefits: initial worsening of anxiety, GI side effects, sexual dysfunction, 4–8 weeks for full effect',
        'Review at 2 weeks (1 week if under 30 or high risk of suicide); then monthly for 3 months; then 3–6 monthly',
        'Continue for at least 6–12 months after remission to reduce relapse risk',
        'If not improving with escalating doses or after switching: refer via SPA to CMHT — specialist may add 2nd antidepressant, switch to vortioxetine (after 2 failures), TCA, MAOI, or augment with antipsychotic',
        'See antidepressants note for full dosing, drug choices, switching guidance and discontinuation',
      ],
    },

    { type: 'heading', level: 2, text: 'Bipolar Affective Disorder (BAD)' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Bipolar — always screen, never treat with antidepressant alone',
      items: [
        'Screen all patients with depression for past episodes of elevated mood, reduced sleep without fatigue, increased energy, risky behaviours, pressured speech, grandiosity — even one such episode suggests BAD',
        'BAD affects ~10% of patients presenting with depression — do not miss it',
        'Antidepressants alone in BAD can trigger manic switch or rapid cycling — always use with a mood stabiliser',
        'Refer all suspected new BAD urgently to CMHT/psychiatry for diagnosis and initiation of mood stabiliser (lithium, valproate, quetiapine, olanzapine, aripiprazole)',
        'In shared care: lithium monitoring 3-monthly (levels, U&E, TFTs, LFTs, Ca) — see lithium & bipolar note for full detail',
        'Antipsychotics: annual metabolic monitoring (BMI, HbA1c, lipids, BP, ECG, prolactin) — only reduce/stop on specialist advice',
      ],
    },

    { type: 'heading', level: 2, text: 'Seasonal Affective Disorder (SAD)' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'SAD — winter-only depression',
      items: [
        'Depression that occurs exclusively in autumn/winter and remits spontaneously in spring — hypersomnia, carbohydrate craving, low energy, low mood',
        'Treat the same as depression (CBT, SSRI if moderate-severe)',
        'Light therapy: a 10,000 lux lightbox used for 30 minutes each morning — mimics sunlight; available to purchase (~£100); evidence supports benefit; recommend use from October',
        'Ensure vitamin D levels are adequate — deficiency common in winter and contributes to fatigue and low mood',
      ],
    },

    { type: 'heading', level: 2, text: 'Follow-up & Safety Planning' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Review schedule and safety netting',
      items: [
        'Review all new cases at 2 weeks (1 week if <30 years old or significant risk)',
        'Then monthly for first 3 months; then 3–6 monthly depending on progress',
        'At every review: PHQ-9, functioning, side effects, alcohol/substance use, suicidal/SH thoughts',
        'Always safety net — provide crisis information at every appointment',
        'Safety plan: identify things that calm them (breathing, taking a bath), reasons for living (loved ones, responsibilities), safe space to move to if thoughts intrude',
        'Crisis plan: if feeling unsafe → speak to a trusted person → contact MPFT crisis team → Samaritans 116 123 → if imminent risk call 999',
        'Signpost to MIND (mind.org.uk) and getselfhelp.co.uk',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Staffordshire & Stoke Talking Therapies (self-refer)', url: 'https://staffsandstoketalkingtherapies.nhs.uk' },
        { label: 'MPFT — Emergency Mental Health Help', url: 'https://www.mpft.nhs.uk/service-users-and-carers/emergency-help' },
        { label: 'Staffordshire Local MH Support Services', url: 'https://www.staffordshire.gov.uk/health-and-wellbeing/mental-wellbeing-services/mental-health-support/local-support-services-and' },
        { label: 'NICE CKS — Depression', url: 'https://cks.nice.org.uk/topics/depression/' },
        { label: 'NICE NG222 — Depression in Adults', url: 'https://www.nice.org.uk/guidance/ng222' },
        { label: 'MIND — Depression', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/' },
        { label: 'Get Self Help (CBT resources)', url: 'https://www.getselfhelp.co.uk' },
        { label: 'SilverCloud (computerised CBT)', url: 'https://www.silvercloudhealth.com' },
        { label: 'Samaritans', url: 'https://www.samaritans.org' },
      ],
    },

  ],
}

import type { Note } from '../data/notes'

export const ptsd: Note = {
  id: 'ptsd',
  title: 'PTSD',
  subtitle: 'Post-traumatic stress disorder — diagnosis, watchful waiting, trauma-focused CBT, EMDR and pharmacotherapy',
  tags: ['mental'],

  body: 'PTSD post-traumatic stress disorder trauma flashbacks hyperarousal avoidance numbing dissociation EMDR eye movement desensitisation reprocessing trauma-focused CBT sertraline venlafaxine risperidone watchful waiting complex PTSD anxiety depression insomnia substance misuse nightmares',

  content: [

    { type: 'heading', level: 2, text: 'Diagnosis' },

    {
      type: 'callout',
      variant: 'info',
      title: 'PTSD criteria and symptoms',
      items: [
        'PTSD: symptoms persisting for >1 month following a traumatic event (direct experience, witnessing, learning about, or repeated exposure — e.g. emergency workers)',
        'Intrusion symptoms: flashbacks, nightmares, intrusive memories, psychological/physiological distress when reminded of trauma',
        'Avoidance: of trauma-related thoughts, feelings, people, places, situations',
        'Negative cognitions and mood: persistent negative beliefs ("I am bad", "the world is dangerous"), distorted guilt/blame, emotional numbing, loss of interest, detachment',
        'Hyperarousal: hypervigilance, exaggerated startle, sleep disturbance, irritability/aggression, poor concentration',
        'All four symptom clusters must be present for full PTSD diagnosis; partial presentations (sub-threshold PTSD) also cause significant distress and warrant treatment',
        'Complex PTSD: additional features of emotion dysregulation, persistent negative self-concept, and difficulties in relationships — typically follows prolonged/repeated trauma (childhood abuse, domestic violence, torture)',
        'Common comorbidities: depression, anxiety, substance misuse, insomnia — screen for all',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Distinguish from adjustment disorder / acute stress reaction',
      items: [
        'Acute stress reaction: immediately after trauma; symptoms of anxiety, shock, dissociation — normal response; usually resolves within days to weeks',
        'Adjustment disorder: symptoms within 3 months of stressor, resolve within 6 months — see stress/adjustment/grief note',
        'PTSD: symptoms persist >1 month; specific cluster of intrusion, avoidance, negative cognition and hyperarousal',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Watchful waiting',
      items: [
        'For mild-moderate PTSD symptoms within the first month after trauma: offer watchful waiting with active monitoring at 1 month',
        'Provide psychoeducation: explain that acute stress symptoms are a normal response to an abnormal event; most people recover naturally',
        'Advise maintenance of daily routine, social support, avoiding alcohol/drugs, sleep hygiene',
        'Do NOT routinely offer single-session debriefing — evidence suggests it may be harmful',
        'If symptoms persist beyond 4 weeks or are severe from the outset → start trauma-focused treatment',
      ],
    },

    { type: 'heading', level: 2, text: 'Trauma-Focused CBT & EMDR' },

    {
      type: 'image',
      src: '/images/EMDR.webp',
      alt: 'EMDR therapy infographic — Eye Movement Desensitisation and Reprocessing uses bilateral stimulation to help individuals heal from traumatic experiences',
      caption: 'EMDR — Eye Movement Desensitisation and Reprocessing. Uses bilateral stimulation (eye movements, taps or tones) to help the brain reprocess traumatic memories.',
      float: 'right',
      maxWidth: '320px',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Trauma-focused CBT (TF-CBT)',
      items: [
        'Gold-standard psychological treatment for PTSD — first-line for all adults',
        'Typically 8–12 sessions, each around 90 minutes — longer and more intensive than standard CBT',
        'Components: psychoeducation, trauma narrative (processing the memory in detail), cognitive restructuring (challenging distorted beliefs such as blame and guilt), in-vivo exposure (confronting avoided situations)',
        'Delivered by trained therapists — available via Talking Therapies (Step 3 or specialist PTSD pathway) or CMHT',
        'Hotspot processing: focuses on the most distressing "hotspot" moments of the trauma memory',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'EMDR — Eye Movement Desensitisation and Reprocessing',
      items: [
        'EMDR is equally effective to TF-CBT and is recommended by NICE as first-line for PTSD',
        'Uses bilateral stimulation (side-to-side eye movements, alternating taps or tones) while the patient holds the traumatic memory in mind',
        'Mechanism: thought to mimic REM sleep processing, allowing the brain to integrate and "file" the traumatic memory rather than leaving it raw and intrusive',
        'Typically 8–12 sessions of 90 minutes each — shorter treatment course than some TF-CBT protocols',
        'Highly effective for single-incident trauma; also used for complex PTSD with adapted protocols',
        'Available via IAPT Talking Therapies PTSD pathway or specialist trauma services',
      ],
    },

    { type: 'heading', level: 2, text: 'Pharmacotherapy' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Medications in PTSD',
      items: [
        'Medications are second-line to trauma-focused psychological treatment — always offer TF-CBT or EMDR first',
        'Indications: patient preference; unable to engage in psychological therapy; severe symptoms preventing engagement; comorbid depression/anxiety requiring treatment',
        'First-line: SSRI — sertraline (most commonly used) or paroxetine; start low, titrate over weeks',
        'Second-line: SNRI — venlafaxine (if SSRI failed or not tolerated)',
        'Adjuncts for specific symptoms: prazosin for nightmares (specialist-initiated); propranolol occasionally for hyperarousal; sleep hygiene and low-dose melatonin for insomnia',
        'Severe/complex PTSD or partial response: risperidone (low dose) as augmentation — under specialist guidance',
        'If failed one or two medication trials or severe/complex → refer to CMHT',
        'Duration: continue medication for at least 12 months after remission to prevent relapse',
      ],
    },

    { type: 'heading', level: 2, text: 'Complex PTSD' },

    {
      type: 'list',
      items: [
        'Complex PTSD (ICD-11) arises from prolonged, repeated or multiple traumatic events — childhood abuse, domestic violence, trafficking, torture, war',
        'Additional features beyond PTSD: severe emotion dysregulation (self-harm, impulsivity, dissociation), persistent negative self-concept ("I am worthless"), profound interpersonal difficulties',
        'Often presents with comorbid personality disorder traits, depression, substance misuse and eating disorders',
        'Treatment is longer and more complex — specialist trauma service or CMHT; adapted TF-CBT or EMDR with phase-based approach (stabilisation → processing → integration)',
        'Refer to CMHT for all suspected complex PTSD',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Safety and risk',
      items: [
        'Always assess for suicidal ideation and self-harm — PTSD carries significant suicide risk',
        'Assess for substance misuse — commonly used as self-medication for PTSD symptoms',
        'Ensure patient has crisis plan and knows how to access emergency support (MPFT crisis line, Samaritans 116 123, 999 if imminent risk)',
        'Safeguarding: if trauma involves ongoing abuse or exploitation, consider adult or child safeguarding referral',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Staffordshire & Stoke Talking Therapies (self-refer)', url: 'https://staffsandstoketalkingtherapies.nhs.uk' },
        { label: 'MPFT — Emergency Mental Health Help', url: 'https://www.mpft.nhs.uk/service-users-and-carers/emergency-help' },
        { label: 'NICE CKS — PTSD', url: 'https://cks.nice.org.uk/topics/post-traumatic-stress-disorder/' },
        { label: 'NICE NG116 — PTSD', url: 'https://www.nice.org.uk/guidance/ng116' },
        { label: 'NHS Inform — Overcoming Traumatic Stress', url: 'https://www.nhsinform.scot/illnesses-and-conditions/mental-health/post-traumatic-stress-disorder-ptsd/' },
        { label: 'MIND — PTSD', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/post-traumatic-stress-disorder-ptsd/' },
        { label: 'EMDR Association UK', url: 'https://emdrassociation.org.uk' },
      ],
    },

  ],
}

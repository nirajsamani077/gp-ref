import type { Note } from '../data/notes'

export const stressGrief: Note = {
  id: 'stress-grief-adjustment',
  title: 'Stress, Grief & Adjustment Disorder',
  subtitle: 'Stress reactions, adjustment disorder, normal and prolonged grief — assessment and management',
  tags: ['mental', 'symptoms'],

  body: 'stress reaction adjustment disorder grief bereavement loss prolonged grief disorder CRUSE counselling behavioural activation microsteps CBT psychoeducation acute stressor life events depression PTSD alcohol substance misuse self-harm suicide risk normal bereavement prolonged grief 6 months disproportionate CRUSE family bereavement Edwards Trust',

  content: [

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Key concepts',
      items: [
        'Stress reactions and adjustment disorders are extremely common in general practice — most people recover fully without specialist input',
        'Important to distinguish from primary mental health disorders (depression, anxiety, PTSD) which require different treatment',
        'Good prognosis: symptoms usually resolve within 6 months of the stressor resolving, and do NOT predict future mental health problems',
        'Despite good prognosis, there is still an increased risk of self-harm and suicide — always risk assess',
      ],
    },

    { type: 'heading', level: 2, text: 'Acute Stress Reaction' },

    {
      type: 'list',
      items: [
        'Normal response immediately following a traumatic or overwhelming event',
        'Symptoms: shock, emotional numbness, disorientation, dissociation, anxiety, autonomic arousal, insomnia',
        'Usually resolves within days to a few weeks without intervention',
        'Management: normalise ("this is a normal response to an abnormal situation"), encourage social support, advise rest and routine, avoid alcohol',
        'Monitor — if symptoms persist beyond 1 month, consider PTSD (see PTSD note)',
        'Do NOT routinely offer single-session psychological debriefing — evidence suggests this may be counterproductive',
      ],
    },

    { type: 'heading', level: 2, text: 'Adjustment Disorder' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Diagnosis',
      items: [
        'Significant emotional or behavioural symptoms (depression, anxiety, or mixed) occurring within 3 months of an identifiable stressor or multiple stressors',
        'Symptoms are out of proportion to the severity of the stressor and impair functioning',
        'Symptoms do not meet full criteria for another mental health disorder (depression, PTSD etc.)',
        'Cannot be explained by normal bereavement alone',
        'Resolves within 6 months of the stressor ending — if it persists, reconsider the diagnosis (depression, PTSD)',
        'Common stressors: relationship breakdown, job loss, financial crisis, housing problems, serious illness (own or family member\'s), academic failure',
      ],
    },

    { type: 'heading', level: 2, text: 'Management of Adjustment Disorder' },

    {
      type: 'list',
      items: [
        'Supportive listening: create space to talk, validate the patient\'s experience — do not minimise',
        'Psychoeducation: explain the expected trajectory of recovery; normalise the response',
        'Problem-solving: collaboratively identify specific stressors that can be addressed; practical signposting (debt advice, housing, social services)',
        'Behavioural activation: "microsteps" — small, achievable activities to rebuild routine and sense of accomplishment; counter social withdrawal',
        'CBT framework: help patient identify how thoughts are affecting mood and behaviour; challenge unhelpful thinking patterns',
        'Counselling: especially helpful for adjustment disorders with a specific cause (relationship, work, loss)',
        'Continuity of care: follow-up and an ongoing therapeutic relationship with one GP is especially valuable',
        'Refer to Talking Therapies for guided self-help or counselling if not improving',
        'Avoid SSRIs as routine first-line — psychological treatment is preferred; use if depression criteria met',
      ],
    },

    { type: 'heading', level: 2, text: 'Grief Reaction' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Normal grief',
      items: [
        'Grief is a normal response to bereavement — there is no single "correct" way to grieve',
        'Presentation varies enormously: sadness, anger, guilt, numbness, relief, physical symptoms — all can be part of normal grief',
        'Grief does not follow fixed stages; it is non-linear and unpredictable',
        'Most people do not need formal psychological treatment — support from family, friends and community is often sufficient',
        'GP role: compassionate listening, normalise the experience, provide information on support organisations, monitor for complications',
        'Key dates (anniversaries, birthdays) are often especially difficult — anticipate and offer support',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Prolonged Grief Disorder (PGD)',
      items: [
        'PGD (ICD-11): persistent, distressing and disabling grief symptoms lasting >6 months after bereavement, occurring in ~10% of bereaved people',
        'Features: difficulty accepting the reality of the loss, intense longing for the deceased, inability to engage with life or relationships, bitterness or anger that is disproportionate or prolonged',
        'PGD is distinct from depression (which can coexist) — grief is the primary emotion, not low mood as a global state',
        'Screen closely for: depression, PTSD (especially if violent or traumatic death), substance/alcohol misuse',
        'Main intervention: grief-focused CBT and bereavement counselling — CRUSE Bereavement Support is the key referral',
        'Children: The Family Bereavement Programme and The Edwards Trust offer specialist support for bereaved children and families',
      ],
    },

    { type: 'heading', level: 2, text: 'Risk Assessment' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Always risk assess — even when prognosis is good',
      items: [
        'Stress reactions, adjustment disorder and grief all carry increased risk of self-harm and suicide',
        'Always ask about thoughts of self-harm or suicide at every contact',
        'See suicide & self-harm note for full risk assessment framework and safety/crisis planning',
        'If active suicidal ideation with plans → refer to crisis team or call 999',
        'If passive thoughts without plans → risk assess, close follow-up, detailed safety net, involve family if consented',
        'MPFT crisis line available 24/7 — provide the number at every contact with a patient at risk',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Resources' },

    {
      type: 'list',
      items: [
        'CRUSE Bereavement Support (cruse.org.uk) — national bereavement charity with trained volunteers and professional counsellors',
        'Get Self Help (getselfhelp.co.uk) — CBT-based self-help worksheets for stress, anxiety, depression and grief; excellent free resource',
        'MIND (mind.org.uk) — information on stress, bereavement and adjustment',
        'Staffordshire & Stoke Talking Therapies — self-refer for guided self-help or counselling',
        'Citizens Advice (citizensadvice.org.uk) — for practical stressors: debt, housing, employment issues',
        'For bereaved children: The Family Bereavement Programme; The Edwards Trust (edwardstrust.org.uk)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'CRUSE Bereavement Support', url: 'https://www.cruse.org.uk' },
        { label: 'Get Self Help (CBT resources)', url: 'https://www.getselfhelp.co.uk' },
        { label: 'Staffordshire & Stoke Talking Therapies', url: 'https://staffsandstoketalkingtherapies.nhs.uk' },
        { label: 'MPFT — Emergency Mental Health Help', url: 'https://www.mpft.nhs.uk/service-users-and-carers/emergency-help' },
        { label: 'NICE CKS — Adjustment Disorder', url: 'https://cks.nice.org.uk/topics/adjustment-disorder/' },
        { label: 'The Edwards Trust (bereaved children)', url: 'https://www.edwardstrust.org.uk' },
        { label: 'MIND — Bereavement', url: 'https://www.mind.org.uk/information-support/guides-to-support-and-services/bereavement/' },
      ],
    },

  ],
}

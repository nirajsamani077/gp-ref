import type { Note } from '../data/notes'

export const maniaHypomania: Note = {
  id: 'mania-hypomania',
  title: 'Mania & Hypomania',
  subtitle: 'Recognising a manic episode, distinguishing it from hypomania, urgent referral and antidepressant cautions',
  tags: ['mental'],

  body: `mania hypomania bipolar affective disorder elevated mood grandiosity reduced need for sleep pressured speech flight of ideas risk-taking psychosis antidepressant-induced mania lithium valproate antipsychotic referral crisis section`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Mania and hypomania are the "highs" of the bipolar spectrum — periods of abnormally elevated or irritable mood with increased energy and activity. Distinguishing the two matters: hypomania is milder and does not grossly impair function or feature psychosis, whereas mania is severe, often with psychosis and risk, and usually needs urgent psychiatric input. Recognising them also reframes recurrent "depression", because an unrecognised bipolar diathesis changes treatment — antidepressants alone can precipitate a switch to mania.',
    },

    { type: 'heading', level: 2, text: 'Mania vs Hypomania' },
    {
      type: 'table',
      headers: ['Feature', 'Hypomania', 'Mania'],
      rows: [
        ['Duration', '≥4 days', '≥1 week (or any duration if hospitalisation needed)'],
        ['Severity/function', 'Noticeable change but function largely preserved', 'Marked impairment of social/occupational function'],
        ['Psychosis', 'Absent', 'May be present (grandiose/persecutory delusions, hallucinations)'],
        ['Insight', 'Often partially retained', 'Usually lost'],
        ['Setting', 'Usually managed in the community', 'Often needs admission (± Mental Health Act)'],
      ],
    },
    {
      type: 'list',
      items: [
        'Core symptoms (mnemonic "DIG FAST"): Distractibility, Indiscretion/impulsivity (risky spending, sex, driving), Grandiosity, Flight of ideas/racing thoughts, Activity increase, reduced need for Sleep, and pressured/rapid Talk.',
        'Bipolar I = at least one manic episode; Bipolar II = hypomania + depressive episodes (no full mania). Depression is usually the predominant and most disabling pole.',
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment & Referral' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'When to Refer Urgently',
      items: [
        'Suspected MANIA (or mania with psychosis, risk to self/others, reckless behaviour, or loss of insight) → refer urgently to the crisis/community mental health team; consider the Mental Health Act if the person lacks insight and is at risk and won\'t engage.',
        'Suspected HYPOMANIA or a first suspicion of bipolar disorder → routine referral to secondary care for diagnosis (do not diagnose bipolar disorder or start mood stabilisers in primary care).',
        'Exclude organic and drug causes: stimulants/cocaine, steroids, dopaminergic drugs, hyperthyroidism, and antidepressant-induced switching.',
      ],
    },

    { type: 'heading', level: 2, text: 'Antidepressant Caution & Ongoing Care' },
    {
      type: 'list',
      items: [
        'In known or suspected bipolar disorder, do NOT use an antidepressant alone — it can trigger a manic switch or rapid cycling; antidepressants (if used) are given with a mood stabiliser/antipsychotic under specialist guidance.',
        'Acute mania is treated (secondary care) with an antipsychotic ± a mood stabiliser (lithium or valproate — note valproate must be avoided in women of childbearing potential); stop any antidepressant.',
        'Long-term: lithium is the most effective mood stabiliser (requires monitoring — see Lithium note); the GP role includes physical-health monitoring, relapse-signature recognition, and supporting a crisis plan.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG185 — Bipolar Disorder', url: 'https://www.nice.org.uk/guidance/cg185' },
        { label: 'NICE CKS — Bipolar Disorder', url: 'https://cks.nice.org.uk/topics/bipolar-disorder/' },
        { label: 'Bipolar UK', url: 'https://www.bipolaruk.org/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'lithium-bipolar', label: 'Lithium & Bipolar Disorder', subtitle: 'Long-term mood stabilisation and lithium monitoring' },
        { id: 'depression', label: 'Depression', subtitle: 'Screen for bipolarity before antidepressants' },
        { id: 'psychosis-schizophrenia', label: 'Psychosis & Schizophrenia', subtitle: 'Psychotic features and antipsychotic use' },
        { id: 'antidepressants', label: 'Antidepressants', subtitle: 'Manic-switch risk in bipolar disorder' },
        { id: 'antipsychotics-smi', label: 'Antipsychotics & SMI', subtitle: 'Acute mania treatment and monitoring' },
      ],
    },

  ],
}

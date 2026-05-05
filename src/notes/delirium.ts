import type { Note } from '../data/notes'

export const delirium: Note = {
  id: 'delirium',
  title: 'Delirium (Acute Confusional State)',
  subtitle: '4AT tool, causes, management and follow-up',
  tags: ['care of the elderly', 'neurology'],

  body: 'delirium acute confusional state 4AT assessment tool hyperactive hypoactive mixed alertness attention fluctuation orientation AMT4 causes ICU BED HEAD infection constipation urinary retention bleed electrolyte dehydration hypoxia drugs alcohol pain environment haloperidol antipsychotic dementia Lewy body quetiapine capacity follow-up cognitive impairment',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'What is Delirium?',
      items: [
        'Acute onset disturbance of attention and awareness with cognitive change — fluctuating over hours to days',
        'Common and underdiagnosed — especially hypoactive type (quiet, withdrawn, confused) vs. hyperactive (agitated)',
        'Hypoactive delirium is MORE common but LESS recognized — patient appears drowsy, disoriented, but not aggressive',
        'Delirium is a medical emergency — always indicates an underlying cause that needs treatment',
        'High mortality if untreated (~10–30% in hospital); can be a sign of undiagnosed dementia or serious illness',
      ],
    },

    { type: 'heading', level: 2, text: '4AT Assessment Tool — Validated for Delirium' },

    {
      type: 'table',
      headers: ['Component', 'Assessment', 'Score'],
      rows: [
        ['Alertness', 'Observe alertness: ask name and date of birth', 'Normal = 0; Mild drowsiness/agitation = 1; Markedly reduced/unresponsive = 4'],
        ['Attention (AMT4)', 'Age, date of birth, place, current year (any mistake = 1 point)', '0 mistakes = 0; 1 mistake = 1; 2+ mistakes = 2'],
        ['Acute onset/fluctuation', 'Is there a change from baseline? Does it fluctuate?', 'No = 0; Yes (evidence of change from baseline) = 4'],
        ['Attention', 'Count months backwards from December', '>7 months correct = 0; 1–6 months correct = 1; Untestable = 2'],
      ],
      caption: 'Score ≥4 = probable delirium; Score 1–3 = possible cognitive impairment or delirium; Score 0 = delirium unlikely. 4AT is available free at the4AT.com.',
    },

    { type: 'heading', level: 2, text: 'Common Causes — ICU BED HEAD' },

    {
      type: 'table',
      headers: ['Mnemonic', 'Cause'],
      rows: [
        ['I', 'Infection — UTI, LRTI, sepsis (any source)'],
        ['C', 'Constipation — extremely common precipitant, especially in elderly'],
        ['U', 'Urinary retention — especially post-operative or anticholinergic drugs'],
        ['B', 'Bleed — intracranial, GI, or any acute bleed causing haemodynamic compromise'],
        ['E', 'Electrolyte disturbance — hyponatraemia, hypercalcaemia, hypo/hyperglycaemia'],
        ['D', 'Dehydration'],
        ['H', 'Hypoxia/hypercapnia — respiratory failure, PE, pneumonia'],
        ['E', 'Environment — ICU, hospital admission, change in routine, unfamiliar surroundings'],
        ['A', 'Acute pain — untreated pain (especially post-operative or fractures)'],
        ['D', 'Drugs/alcohol — opiates, benzodiazepines, Z-drugs, gabapentinoids, anticholinergics, antipsychotics, alcohol withdrawal'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Most Delirium Requires Hospital Admission',
      items: [
        'Admit unless: patient has capacity to refuse, clear treatable cause identified and can be safely managed at home with close monitoring and carer support',
        'Community management requires: robust carer support, clear cause being treated, very close follow-up',
        'Inform UHDB Burton acute medical take if unsure — discuss for advice',
      ],
    },

    {
      type: 'list',
      items: [
        'Identify and treat the underlying cause — this is the primary intervention',
        'Review and stop or reduce precipitating medications where possible',
        'Non-pharmacological first: reorientation (clock, calendar, familiar objects, familiar faces), good lighting, quiet environment, maintain day-night cycle, avoid restraint',
        'Hearing aids and glasses: ensure the patient has them in — sensory deprivation worsens delirium',
        'Hydration and nutrition: encourage oral fluids; NG feeding if not managing',
        'Mobilisation: get patient out of bed as soon as safe',
        'Family/carers: involve them in care; provide clear explanation of delirium; avoid over-sedation',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Pharmacological Management — LAST RESORT',
      items: [
        'No medication should be used routinely for delirium — non-pharmacological approaches first',
        'Only use drugs if patient is at significant risk to themselves or others and distressed',
        'Haloperidol 0.5 mg PO/IM (start low — especially in elderly): for agitated/hyperactive delirium — lowest effective dose; monitor ECG (QTc prolongation)',
        'CAUTION in Parkinson\'s disease or Lewy Body dementia: haloperidol can cause severe neuroleptic sensitivity reactions (rigidity, NMS) — USE QUETIAPINE instead (25 mg PO)',
        'Benzodiazepines: avoid (worsen confusion) — exception: alcohol withdrawal delirium (lorazepam/chlordiazepoxide)',
        'Always document: indication, dose, review plan, response to medication',
      ],
    },

    { type: 'heading', level: 2, text: 'Follow-Up' },

    {
      type: 'list',
      items: [
        'Delirium can be the first sign of undiagnosed cognitive impairment or dementia — assess cognition a few weeks after recovery (when no longer acutely unwell)',
        'MMSE or MoCA at follow-up appointment — if cognitive impairment persists, refer for dementia assessment',
        'Debrief patient and family: explain what happened, why, and that full recovery is expected in most cases',
        'Review medications: identify precipitating drugs and consider whether they can be continued',
        'Frailty review: delirium often signals increased frailty — consider multidisciplinary frailty assessment',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Hospital admission (acute delirium): UHDB Queen\'s Hospital Burton — acute medical take or geriatrics',
        'If Parkinson\'s disease-related delirium: discuss with UHDB neurologist or Parkinson\'s disease specialist nurse',
        'Post-delirium cognitive assessment: MPFT memory service — refer if cognitive impairment persists at 4–6 weeks post-illness',
        'Community frailty support: Staffordshire connects (staffordshireconnects.info) — community services',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        '999: sudden onset aggressive behaviour with risk to self/others, loss of consciousness, new focal neurology (stroke)',
        'Same-day admission: confusion with fever (sepsis), confusion with AKI (electrolytes), confusion with head injury',
        'Red flags: sudden change in cognitive function in previously well elderly person — ALWAYS investigate the cause',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: '4AT Tool — Free Download', url: 'https://www.the4AT.com/' },
        { label: 'NICE CKS — Delirium', url: 'https://cks.nice.org.uk/topics/delirium/' },
        { label: 'NICE CG103 — Delirium', url: 'https://www.nice.org.uk/guidance/cg103' },
        { label: 'NHS — Delirium', url: 'https://www.nhs.uk/conditions/delirium/' },
      ],
    },
  ],
}

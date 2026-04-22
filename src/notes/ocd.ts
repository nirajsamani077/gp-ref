import type { Note } from '../data/notes'

export const ocd: Note = {
  id: 'ocd-bdd',
  title: 'OCD & Body Dysmorphic Disorder',
  subtitle: 'Obsessive-compulsive disorder and body dysmorphic disorder — diagnosis, CBT/ERP, and pharmacotherapy',
  tags: ['mental'],

  body: 'OCD obsessive compulsive disorder body dysmorphic disorder BDD obsessions compulsions ERP exposure response prevention CBT sertraline fluoxetine SSRI high dose clomipramine contamination checking intrusive thoughts hoarding rituals reassurance seeking body image dysmorphia suicide risk',

  content: [

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'callout',
      variant: 'info',
      title: 'What is OCD?',
      items: [
        'OCD is an anxiety disorder characterised by obsessions (intrusive, unwanted thoughts, images or urges) and compulsions (repetitive behaviours or mental acts performed to reduce the distress from obsessions)',
        'Common obsessions: contamination, fear of harm coming to self or others, symmetry, forbidden/taboo thoughts, religious or moral concerns',
        'Common compulsions: washing/cleaning, checking (locks, appliances), counting, ordering, seeking reassurance, mental rituals',
        'Obsessions and compulsions are ego-dystonic — the patient recognises them as excessive or unreasonable (unlike psychosis)',
        'The compulsion provides only temporary relief — the obsession returns, reinforcing the cycle',
        'OCD causes significant distress and interferes with daily functioning — diagnosis requires this interference',
        'OCD has a high suicide risk — always assess mood, self-harm, and suicidality',
      ],
    },

    { type: 'heading', level: 2, text: 'Screening & Assessment' },

    {
      type: 'list',
      items: [
        'Simple screening: "Do you have repetitive thoughts or worries that you find hard to stop? Do you feel you have to do things a certain number of times or in a certain way to prevent something bad happening?"',
        'Explore: nature of obsessions and compulsions, time spent per day (>1 hour suggests significant OCD), impact on work/relationships/social life',
        'Assess mood (comorbid depression is common), suicidality and self-harm risk',
        'Ask about insight — most patients have good insight but it can be reduced; lack of insight suggests more severe OCD',
        'In children: involve parents; OCD often presents differently (e.g. bedtime rituals, family seeking reassurance on behalf of child)',
        'Refer urgently if: severe OCD with risk to self, OCD with psychotic features, or significant safeguarding concerns',
      ],
    },

    { type: 'heading', level: 2, text: 'CBT and ERP' },

    {
      type: 'image',
      src: '/images/The-OCD-cycle-300x300.png',
      alt: 'The OCD cycle diagram showing obsessive thought leading to anxiety then compulsion then temporary relief then back to obsessive thought',
      caption: 'The OCD cycle — compulsions provide only temporary relief and reinforce the obsession. ERP breaks this cycle.',
      float: 'right',
      maxWidth: '280px',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Exposure and Response Prevention (ERP) — first-line treatment',
      items: [
        'ERP is the gold-standard psychological treatment for OCD — more effective than standard CBT alone',
        'Exposure: gradually and systematically confront feared situations or triggers (e.g. touching a doorknob without washing hands)',
        'Response prevention: resist the urge to perform the compulsion — the anxiety peaks then naturally decreases (habituation)',
        'Hierarchy: build a graded list of feared situations from least to most anxiety-provoking; work up the hierarchy over sessions',
        'Key principle: compulsions maintain OCD; by resisting compulsions, the patient learns that feared outcomes do not occur and anxiety reduces naturally',
        'Mindfulness: accept intrusive thoughts without engaging with them — thoughts are not facts; having a thought does not make it true or dangerous',
        'Reassurance seeking is itself a compulsion — advise family members not to provide reassurance as this reinforces OCD',
        'Typically 10–20 sessions of individual high-intensity CBT/ERP for moderate-severe OCD; available via Talking Therapies for mild-moderate',
      ],
    },

    { type: 'heading', level: 2, text: 'Pharmacological Treatment' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'OCD pharmacotherapy — key principles',
      items: [
        'SSRIs are first-line pharmacotherapy for OCD — higher doses and longer duration than for depression or GAD',
        'Sertraline is usually preferred first-line (evidence + tolerability); fluoxetine is preferred for BDD',
        'Start low, titrate slowly — typically increase dose every 4–6 weeks; allow 8–12 weeks at therapeutic dose before judging response',
        'Typical doses: Sertraline up to 200 mg OD; Fluoxetine up to 60 mg OD — these are often needed (higher than depression doses)',
        'If SSRI fails after adequate trial (≥12 weeks at maximum tolerated dose) → refer to secondary care',
        'Second-line in secondary care: clomipramine (TCA), augmentation with antipsychotics (risperidone, aripiprazole)',
        'Duration: continue for at least 12 months after remission to prevent relapse; many patients need long-term treatment',
        'Combination of SSRI + ERP is superior to either alone',
      ],
    },

    {
      type: 'table',
      headers: ['Drug', 'Starting dose', 'Target dose for OCD', 'Notes'],
      rows: [
        ['Sertraline', '50 mg OD', '100–200 mg OD', 'First-line; fewest interactions; titrate every 4–6 weeks'],
        ['Fluoxetine', '20 mg OD', '40–60 mg OD', 'Preferred for BDD; long half-life; fewer discontinuation symptoms'],
        ['Fluvoxamine', '50 mg OD', '100–300 mg OD', 'Licensed for OCD; more interactions than sertraline'],
        ['Paroxetine', '20 mg OD', '40–60 mg OD', 'More interactions; discontinuation syndrome on stopping'],
        ['Clomipramine (TCA)', 'Secondary care initiation', 'Up to 250 mg OD', 'Second-line; evidence base for OCD; cardiac/anticholinergic side effects; initiated by specialist only'],
      ],
      caption: 'OCD pharmacotherapy. Higher doses and longer durations are needed compared to depression. Always combine with ERP if possible.',
    },

    {
      type: 'notelink',
      notes: [
        { id: 'antidepressants', label: 'Antidepressants', subtitle: 'Dosing, switching, discontinuation guidance' },
        { id: 'anxiety-gad', label: 'Anxiety Disorders', subtitle: 'GAD, panic, social anxiety management' },
      ],
    },

    { type: 'heading', level: 2, text: 'Body Dysmorphic Disorder (BDD)' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'BDD — key points',
      items: [
        'BDD is an OCD-spectrum disorder: obsession with a perceived defect or flaw in physical appearance that is not noticeable or appears minor to others',
        'Common preoccupations: skin, nose, hair, weight, genitals; patients may spend hours checking mirrors, seeking reassurance, or camouflaging',
        'BDD is not psychosis — patients usually have some insight (they recognise others may not see the defect); if completely no insight, consider BDD with absent insight (still not psychosis)',
        'BDD carries very high suicide risk — take seriously; assess risk at every contact',
        'Distinguish from an eating disorder (body image concerns focused on weight/shape) or other OCD (non-appearance obsessions)',
        'Do NOT refer for cosmetic procedures — evidence shows cosmetic treatment does not improve BDD and often worsens it',
        'Treatment: same as OCD — ERP + SSRI (fluoxetine preferred for BDD at higher doses); refer to secondary care if moderate-severe',
      ],
    },

    { type: 'heading', level: 2, text: 'Stepped Care in OCD' },

    {
      type: 'table',
      headers: ['Step', 'Population', 'Intervention'],
      rows: [
        ['Step 1', 'All patients', 'Recognition, education, written information, support groups. Brief intervention by GP.'],
        ['Step 2', 'Mild to moderate OCD (symptoms not severely impairing)', 'Low-intensity CBT (ERP-based guided self-help via workbook or Talking Therapies). Brief individual ERP.'],
        ['Step 3', 'Moderate to severe OCD, or failed Step 2', 'High-intensity individual ERP/CBT + SSRI. Refer to IAPT Talking Therapies for high-intensity work.'],
        ['Step 4', 'Severe OCD, significant risk, treatment-resistant, or complex presentations', 'CMHT referral. Multi-disciplinary management. Consider augmentation, clomipramine, or specialist OCD services. Children: refer to CAMHS.'],
      ],
      caption: 'NICE stepped care for OCD. Most mild-moderate OCD can be managed in primary care with ERP-based self-help and SSRI.',
    },

    { type: 'heading', level: 2, text: 'Patient Resources' },

    {
      type: 'list',
      items: [
        'OCD UK (ocduk.org) — national charity with information, forums, and therapist directory',
        'MIND — OCD resources (mind.org.uk)',
        'Staffordshire & Stoke Talking Therapies — self-refer for IAPT-based ERP/CBT',
        'Book: "Overcoming Obsessive Compulsive Disorder" by David Veale (Overcoming series) — evidence-based self-help',
        'Reassure patients: OCD is a recognised, treatable condition — it does not reflect moral weakness or "madness"',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — OCD', url: 'https://cks.nice.org.uk/topics/obsessive-compulsive-disorder/' },
        { label: 'NICE CG31 — OCD & BDD', url: 'https://www.nice.org.uk/guidance/cg31' },
        { label: 'Staffordshire & Stoke Talking Therapies', url: 'https://staffsandstoketalkingtherapies.nhs.uk' },
        { label: 'Staffordshire Local MH Support Services', url: 'https://www.staffordshire.gov.uk/health-and-wellbeing/mental-wellbeing-services/mental-health-support/local-support-services-and' },
        { label: 'OCD UK', url: 'https://www.ocduk.org' },
        { label: 'BDD Foundation', url: 'https://bddfoundation.org' },
        { label: 'SilverCloud (computerised CBT — prescribe via Talking Therapies)', url: 'https://www.silvercloudhealth.com' },
      ],
    },

  ],
}

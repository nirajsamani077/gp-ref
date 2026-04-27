import type { Note } from '../data/notes'

export const perinatalMH: Note = {
  id: 'perinatal-mh',
  title: 'Perinatal Mental Health',
  subtitle: 'Baby blues, postnatal depression, postpartum psychosis — assessment, Edinburgh scale, antidepressants in breastfeeding',
  tags: ['mental', 'obstetrics', 'womens-health'],

  body: 'perinatal postnatal antenatal mental health baby blues postnatal depression PND postpartum psychosis EPDS Edinburgh scale SSRI sertraline paroxetine breastfeeding safeguarding mother baby unit recurrence risk CBT health visitor MPFT perinatal community Staffordshire six week check anxiety panic intrusive thoughts tokophobia',

  content: [

    { type: 'heading', level: 2, text: 'Overview — Three Conditions' },

    {
      type: 'image',
      src: '/images/postpartum-mh-types.gif',
      alt: 'Table comparing postpartum blues, perinatal depression and postpartum psychosis by incidence, onset and DSM-5 symptoms',
      caption: 'Three perinatal mental health conditions — very different incidence, onset and severity. Postpartum psychosis is a psychiatric emergency.',
      maxWidth: '600px',
    },

    {
      type: 'table',
      headers: ['Condition', 'Incidence', 'Onset', 'Key features'],
      rows: [
        ['Baby blues (maternity blues)', '50–85%', 'Within 1 week postpartum', 'Fluctuating, labile mood; tearfulness; irritability; anxiety. Normal and self-limiting.'],
        ['Perinatal depression', '10–15%', 'During pregnancy or within first 3 months postpartum; peaks ~3 months', 'Depressed mood; prominent anxiety; insomnia disproportionate to infant sleep; guilt; difficulty bonding. Also occurs antenatally — often missed.'],
        ['Postpartum psychosis', '0.1–0.2%', 'Dramatic — within 2 weeks postpartum (often within first week)', 'Mania and/or mixed affective state: agitation, mixed mood, bewilderment, delusions, disorganised behaviour, hallucinations. PSYCHIATRIC EMERGENCY.'],
      ],
      caption: 'Perinatal MH conditions overview. Severity ranges from normal (blues) to life-threatening (postpartum psychosis). Antenatal depression affects ~12% of pregnancies and is often under-recognised.',
    },

    { type: 'heading', level: 2, text: 'Baby Blues' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Baby blues — normal and self-limiting',
      items: [
        'Affects the majority of new mothers (50–85%); onset within first week; resolves spontaneously by day 10–14',
        'Features: tearfulness, irritability, labile mood, anxiety, sensitivity — often worse on days 3–5 as milk comes in',
        'Management: normalise and reassure — explain it is extremely common and will pass; encourage rest, support from partner and family',
        'Involve health visitor — routine HV contact at day 5 and day 10–14 is the key safety net; brief structured support is effective',
        'If symptoms persist beyond 2 weeks or are severe → reassess for postnatal depression using the EPDS',
        'Do NOT prescribe medication for baby blues',
      ],
    },

    { type: 'heading', level: 2, text: 'Perinatal Depression' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Recognition — think antenatal as well as postnatal',
      items: [
        'Perinatal depression includes BOTH antenatal depression (during pregnancy) and postnatal depression (within 12 months of birth) — antenatal depression is common (~12%) and frequently under-recognised',
        'Onset: insidious; most within 1 month of delivery, peaking around 3 months',
        'Symptoms may overlap with normal new parent experience — key differentiators: severity, duration (>2 weeks), functional impairment, inability to care for baby, prominent guilt or hopelessness',
        'Anxiety is very common in perinatal depression — intrusive thoughts about harm coming to the baby (usually ego-dystonic and frightening, NOT indicative of intent), excessive worry, panic attacks',
        'Screen at 6–8 week postnatal check and whenever concerns are raised — use Edinburgh Postnatal Depression Scale (EPDS)',
        'Enquire sensitively about previous MH history, domestic violence/abuse, social support, substance use',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Edinburgh Postnatal Depression Scale (EPDS)',
      items: [
        '10 questions covering the previous 7 days; maximum score 30; available in multiple languages',
        'Score ≥13: likely depression — offer treatment or refer',
        'Score 10–12: possible depression — repeat in 2 weeks; offer support; low threshold to treat',
        'Question 10 asks about self-harm thoughts — ANY positive response requires immediate exploration and risk assessment regardless of total score',
        'EPDS also validated for use in pregnancy (antenatal screening)',
        'EPDS can be completed in waiting room before appointment — integrate into 6–8 week check and any relevant antenatal visits',
        'Also validated for use in fathers/partners — perinatal depression in fathers affects ~10%; ask and screen',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment of Perinatal Depression' },

    {
      type: 'table',
      headers: ['Severity', 'Treatment'],
      rows: [
        ['Mild (EPDS 10–15)', 'Psychoeducation, active monitoring, social support. Refer to MPFT Perinatal Mental Health Community Service for psychological input (CBT, IPT, supported self-help). HV support.'],
        ['Moderate (EPDS 16–22)', 'Psychological therapy (CBT) + consider SSRI. Sertraline first choice in breastfeeding. Refer to Perinatal Mental Health service.'],
        ['Severe (EPDS ≥23, significant risk, psychosis)', 'Urgent referral to Perinatal Mental Health Team or crisis team. Medication + psychological therapy. Consider inpatient if severe or risk.'],
      ],
      caption: 'Stepped treatment for perinatal depression. Psychological therapy is first-line for mild-moderate; medication is added for moderate-severe or when therapy is insufficient or unavailable.',
    },

    { type: 'heading', level: 2, text: 'Antidepressants in Pregnancy & Breastfeeding' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Antidepressants in pregnancy — risk vs benefit discussion',
      items: [
        'Untreated depression in pregnancy carries significant risks: preterm birth, low birthweight, poor attachment, self-harm, suicide — do NOT withhold treatment on safety grounds without careful risk/benefit discussion',
        'Sertraline has the most safety data in pregnancy and is the preferred SSRI — use at the lowest effective dose',
        'Paroxetine: some evidence of association with fetal cardiac defects (small absolute risk) — avoid in first trimester if possible; switch to sertraline if starting new treatment',
        'Fluoxetine: second-line in pregnancy — associated with neonatal adaptation syndrome at higher doses; also long half-life causes accumulation',
        'Neonatal adaptation syndrome: symptoms in newborn within first 48h if mother on SSRIs near term — tremor, jitteriness, feeding difficulties, irritability; usually mild and self-limiting; plan neonatal observation',
        'Persistent pulmonary hypertension of the newborn (PPHN): rare association with late-pregnancy SSRI use — counsel but risk is very small (absolute risk ~3/1000)',
        'Venlafaxine: avoid in pregnancy if possible — neonatal withdrawal; if already established, do not abruptly stop',
        'Always involve perinatal mental health team for medication decisions in pregnancy where possible',
      ],
    },

    {
      type: 'image',
      src: '/images/antidepressants-breastfeeding.jpeg',
      alt: 'Table of antidepressant exposure via breastmilk — sertraline and paroxetine have low exposure and are preferred; fluoxetine may be detectable in infant blood due to long half-life',
      caption: 'Antidepressant exposure via breastmilk. Sertraline is the preferred choice — low milk:plasma ratio, good safety data. Avoid fluoxetine in breastfeeding if possible.',
      maxWidth: '580px',
    },

    {
      type: 'table',
      headers: ['Drug', 'Breastfeeding safety', 'Recommendation'],
      rows: [
        ['Sertraline', 'Low breastmilk levels; infant exposure <1% maternal dose; no adverse effects reported', '✅ First choice — safest SSRI in breastfeeding'],
        ['Paroxetine', 'Low breastmilk levels; generally considered safe', '✅ Acceptable second choice'],
        ['Fluoxetine', 'Accumulates due to long half-life; detectable in infant blood; occasional infant irritability/poor feeding reported', '⚠️ Avoid if possible — use sertraline instead; if already on fluoxetine and breastfeeding well, may continue with monitoring'],
        ['Mirtazapine', 'Limited data; levels generally low in breastmilk', '⚠️ Use with caution; monitor infant sedation'],
        ['Venlafaxine', 'Some transfer; active metabolite also passes; limited infant data', '⚠️ Use with caution; only if no alternatives'],
        ['TCAs (amitriptyline, nortriptyline)', 'Low infant exposure; amitriptyline/nortriptyline have reasonable safety data', '⚠️ Acceptable if SSRI not suitable; avoid doxepin'],
      ],
      caption: 'Antidepressants in breastfeeding. Key principle: sertraline first, always. The benefit of treating maternal depression outweighs the small risk of drug transfer via breastmilk.',
    },

    { type: 'heading', level: 2, text: 'Postpartum Psychosis' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Postpartum psychosis — psychiatric emergency',
      items: [
        'Rare (0.1–0.2%) but life-threatening — onset usually within the first 2 weeks postpartum, often within the first week',
        'Features: rapidly fluctuating mood (mania, mixed state or severe depression with psychosis), bewilderment and confusion, delusions (often about the baby), hallucinations, disorganised behaviour, severe insomnia',
        'Can deteriorate rapidly over hours — do NOT manage in primary care; arrange emergency admission',
        'ADMIT to a specialist Mother and Baby Unit (MBU) where possible — enables continuation of breastfeeding and maternal-infant bonding during treatment',
        'SAFEGUARDING: risk to the baby must be assessed — delusions or commands about the infant; contact social care if any concern about infant safety',
        'Treatment: antipsychotics ± mood stabiliser ± ECT (if severe); lithium has strong evidence for both acute treatment and prevention of recurrence',
        'Recurrence risk: 50% in subsequent pregnancies — all women with previous postpartum psychosis must have a perinatal psychiatry plan before/during next pregnancy; prophylactic lithium is often recommended from delivery',
        'Women with bipolar disorder or previous postpartum psychosis must be referred to the Perinatal Mental Health Team BEFORE or early in any future pregnancy',
      ],
    },

    { type: 'heading', level: 2, text: 'Risk Factors & Prevention' },

    {
      type: 'list',
      items: [
        'Previous postpartum psychosis: 50% recurrence risk — refer to perinatal psychiatry in early pregnancy for prevention plan',
        'Bipolar disorder: high risk of postpartum psychosis — perinatal psychiatry input throughout pregnancy; discuss prophylactic lithium',
        'Previous postnatal depression: increased risk of recurrence — proactive monitoring from early pregnancy and post-delivery',
        'Personal or family history of any mental illness',
        'Lack of social support; single parent; domestic violence or abuse',
        'Stressful life events: bereavement, relationship breakdown, financial problems',
        'Traumatic birth experience — can precipitate PTSD, anxiety, depression',
        'Unplanned pregnancy; ambivalence about motherhood',
        'Previous pregnancy loss — grief can complicate adjustment',
        'Physical illness: thyroid disease (check TFTs — postpartum thyroiditis affects ~5%), anaemia, chronic pain',
        'Migrant or refugee status; language barrier; poor continuity of care',
      ],
    },

    { type: 'heading', level: 2, text: 'Local Service & Referral' },

    {
      type: 'callout',
      variant: 'info',
      title: 'MPFT Perinatal Mental Health Community Service — Staffordshire',
      items: [
        'Specialist perinatal mental health service covering preconception, pregnancy and up to 12 months postpartum',
        'Accepts referrals from GPs, midwives, HVs and self-referral',
        'Provides: specialist assessment, psychological therapies (CBT, EMDR, IPT), medication advice in pregnancy/breastfeeding, risk management, coordination with obstetrics and neonatology',
        'Refer any woman with: moderate-severe perinatal depression, history of serious MH disorder (bipolar, postpartum psychosis, schizophrenia), significant anxiety or PTSD in pregnancy, or complex social circumstances with MH component',
        'For postpartum psychosis or acute crisis → crisis team / emergency admission first, then transfer care to inpatient Mother and Baby Unit',
        'Cross-reference with 6–8 week postnatal check — EPDS should be routinely completed at this contact',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'six-eight-week-check', label: '6–8 Week Postnatal Check', subtitle: 'EPDS screening, maternal review' },
        { id: 'depression', label: 'Depression', subtitle: 'PHQ-9, CBT framework, safety planning' },
        { id: 'antidepressants', label: 'Antidepressants', subtitle: 'Sertraline dosing, switching guidance' },
        { id: 'anxiety-gad', label: 'Anxiety Disorders', subtitle: 'Intrusive thoughts, panic, GAD' },
        { id: 'suicide-self-harm', label: 'Suicide & Self-Harm', subtitle: 'Risk assessment, safety plan, crisis' },
        { id: 'psychosis-schizophrenia', label: 'Psychosis & Schizophrenia', subtitle: 'Postpartum psychosis, acute referral' },
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'MPFT — Perinatal Mental Health Community (Staffs)', url: 'https://www.mpft.nhs.uk/services/mental-health-perinatal-community-staffordshire' },
        { label: 'NICE CKS — Postnatal Depression', url: 'https://cks.nice.org.uk/topics/depression-antenatal-postnatal/' },
        { label: 'NICE NG192 — Antenatal & Postnatal Mental Health', url: 'https://www.nice.org.uk/guidance/ng192' },
        { label: 'EPDS — Edinburgh Scale (PDF)', url: 'https://www.rethink.org/media/2897/epds.pdf' },
        { label: 'PANDAS Foundation (perinatal MH charity)', url: 'https://www.pandasfoundation.org.uk' },
        { label: 'MIND — Postnatal Depression', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/postnatal-depression/' },
        { label: 'Action on Postpartum Psychosis (APP)', url: 'https://www.app-network.org' },
        { label: 'Samaritans', url: 'https://www.samaritans.org' },
      ],
    },

  ],
}

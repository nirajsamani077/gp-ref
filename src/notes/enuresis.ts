import type { Note } from '../data/notes'

export const enuresis: Note = {
  id: 'enuresis',
  title: 'Enuresis (Bedwetting)',
  subtitle: 'Nocturnal enuresis in children — assessment, alarm therapy, desmopressin, and referral',
  tags: ['paediatrics', 'urology'],

  body: 'enuresis bedwetting nocturnal wetting primary secondary desmopressin desmomelts desmotabs alarm moisture sensor enuresis alarm ERIC continence nurse paediatrics vasopressin ADH nocturnal polyuria overactive bladder constipation reward star chart dry nights fluid restriction hyponatraemia nasal spray blacklisted NICE CKS daytime wetting LUTS bladder dysfunction arousal',

  content: [

    {
      type: 'callout',
      variant: 'info',
      title: 'Overview',
      items: [
        'Nocturnal enuresis = involuntary wetting during sleep — affects ~1 in 5 children aged 5 and ~1 in 10 aged 7',
        'Primary enuresis: child has never been consistently dry at night. Secondary enuresis: child was dry for ≥6 months and then starts wetting again',
        'Not the child\'s fault — it is a medical condition, not a behavioural problem',
        'Spontaneous resolution occurs in ~15% per year, but treatment significantly improves outcomes and quality of life',
        'No strict minimum age for treatment — treat if it is causing distress. Traditionally 7 years, but NICE supports treatment from age 5',
        'Three overlapping pathophysiological mechanisms: nocturnal polyuria (reduced vasopressin/ADH release), reduced nocturnal bladder capacity, and impaired arousal from sleep in response to bladder fullness',
      ],
    },

    {
      type: 'image',
      src: '/images/enuresis.webp',
      alt: 'Infographic: Primary enuresis — child has never been consistently dry at night; possible causes include deep sleeper, small bladder, hereditary, physically not fully developed, low vasopressin. Secondary enuresis — child was dry for ≥6 months but starts wetting again; possible causes include stress, anxiety, diabetes, kidney infection, psychological trauma, neurological or anatomical problems.',
      caption: 'Primary vs secondary enuresis. Secondary enuresis always warrants investigation to exclude an underlying cause — consider T1DM (urinalysis + BM), UTI, constipation, and psychosocial stressors.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red flags — act immediately',
      items: [
        'Secondary enuresis without an obvious cause — always investigate (UTI, T1DM, neurological cause)',
        'Polyuria, polydipsia, or weight loss → urgent urinalysis and blood glucose to exclude T1DM',
        'Lower limb weakness, abnormal neurology, or spinal concern',
        'Safeguarding concerns — bedwetting can be a marker of abuse or significant psychosocial stressor',
        'Systemically unwell child with new enuresis',
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'list',
      items: [
        'Clarify: primary or secondary? monosymptomatic (bedwetting only) or non-monosymptomatic (daytime symptoms too)?',
        'Daytime symptoms — urgency, frequency (>7 voids/day), daytime wetting, poor stream → manage as LUTS / overactive bladder before treating enuresis',
        'Bowel history — constipation is a major co-morbidity; treat constipation first (distended rectum compresses bladder)',
        'Fluid intake — type, timing, quantity (target 6–8 water-based drinks per day); avoid caffeine and fizzy drinks',
        'Severity — number of wet nights/week, size of wet patch, how many times per night, timing (early vs late in night)',
        'Impact on child and family — motivation, parental attitudes (anger/blame are a contraindication to alarm therapy)',
        'Sleep — ask about snoring or sleep-disordered breathing (OSA impairs arousal)',
        'Family history — strong genetic component',
        'Urine dip to exclude UTI and glycosuria',
      ],
    },

    { type: 'heading', level: 2, text: 'Initial Lifestyle Measures (for all children)' },

    {
      type: 'list',
      items: [
        'Adequate fluid intake — at least 1–2 L/day spread throughout the day; do NOT restrict overall fluid',
        'Reduce/eliminate caffeine and fizzy drinks (bladder irritants)',
        'Avoid large fluid intake in the hour before bed',
        'Double voiding at bedtime — toilet, then toilet again just before sleeping',
        'Regular daytime toileting routine (every 2–3 hours) if daytime symptoms present',
        'Reward system / star chart — reward achievable behaviours (e.g. drinking fluid, toileting before bed, using the alarm) NOT dry nights themselves',
        'Treat any constipation first — use Bristol Stool Chart, consider Movicol if needed; do not start enuresis treatment until bowel habit is regular',
        'Screen time off ≥1 hour before bed; regular bedtime routine',
        'Remove pull-ups/nappies to allow child to feel wetness (necessary for alarm to work)',
      ],
    },

    { type: 'heading', level: 2, text: 'Enuresis Alarm' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Alarm: first-line treatment (NICE)',
      items: [
        'First-line treatment per NICE — preferred over desmopressin when appropriate',
        'Works by conditioning: moisture sensor triggers alarm → child (and parent) wakes → goes to toilet → over weeks, the brain learns to arouse before wetting',
        'Most effective in children who wet ≥3 times per week, are motivated, have good family support, and share conducive sleeping arrangements',
        'Allow 12–16 weeks of consistent use before judging response; assess at 4–6 weeks for early signs',
        'Early signs of response: smaller wet patches, waking to the alarm, alarm triggering less frequently, some dry nights',
        'Success = 14 consecutive dry nights → stop treatment',
        'If no response at 4–6 weeks: consider combination alarm + desmopressin',
        'NOT appropriate if: parents express anger/blame toward the child, practical barriers (shared rooms), child/family not motivated, or child is younger/less mature',
      ],
    },

    {
      type: 'image',
      src: '/images/enuresis-alarm.webp',
      alt: 'Diagram showing 3 ways to place the moisture sensor for DRI Sleeper alarms: DRI Sleeper Excel with cord (clip-on alarm, moisture sensor in pants), DRI Sleeper Eclipse wireless (alarm range up to 35 feet/11 metres), DRI Sleeper Eclipse with parental monitor (alarm 1 in parents room, alarm 2 near child)',
      caption: 'Enuresis alarm sensor placement options. Alarms can be loaned from community continence services (e.g. Malem alarms). Wireless and parental-monitor variants are available for older children or where practical issues exist. Demonstrate use at the appointment and provide written instructions.',
    },

    {
      type: 'list',
      items: [
        'Alarms can be loaned from the community continence service — refer to your local paediatric continence nurse',
        'Show parents a demonstration video (e.g. Malem MO3 on YouTube) at point of loan',
        'Child and parent must both get up when the alarm sounds — go to toilet, change bedding/clothes, reset alarm',
        '"Over-learning" can be added once consistently dry: increase fluid before bed to challenge the system, then taper — may improve long-term success',
        'Mobile phone alarm apps can be used in older children and teenagers as an alternative or supplement',
      ],
    },

    { type: 'heading', level: 2, text: 'Desmopressin' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Desmopressin: when to use',
      items: [
        'Indicated when: alarm is undesirable or impractical, rapid dryness is needed (e.g. school trip, holiday), child aged ≥5 years with evidence of nocturnal polyuria (large wet patches early in the night)',
        'Also consider if alarm has failed — use as monotherapy or in combination',
        'NICE: offer from age 7; consider from age 5–7 if treatment is required and alarm not suitable',
        'Do NOT use for daytime wetting alone',
      ],
    },

    {
      type: 'table',
      headers: ['Formulation', 'Starting dose', 'Maximum dose', 'Notes'],
      rows: [
        [
          'Desmomelt (oral lyophilisate — dissolves under tongue)',
          '120 mcg at bedtime',
          '240 mcg at bedtime',
          'Preferred formulation — better bioavailability than tablet. Dissolves sublingually — do not swallow whole. Assess response at 4 weeks; if partial response, increase to 240 mcg.',
        ],
        [
          'Desmopressin tablet (Desmotabs)',
          '200 mcg at bedtime',
          '400 mcg at bedtime',
          'Alternative if Desmomelt not tolerated or unavailable. Less bioavailability than melt formulation.',
        ],
        [
          'Nasal spray',
          '—',
          '—',
          'BLACKLISTED — do NOT prescribe. Associated with life-threatening hyponatraemia. Oral formulations only.',
        ],
      ],
      caption: 'Desmopressin prescribing for nocturnal enuresis. Desmomelt (120–240 mcg) is preferred. Nasal spray is blacklisted due to hyponatraemia risk.',
    },

    {
      type: 'image',
      src: '/images/desmopressin.avif',
      alt: 'Desmopressin prescribing information and safety guidance for nocturnal enuresis',
      caption: 'Desmopressin — key safety points and prescribing information.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Desmopressin safety — fluid restriction is essential',
      items: [
        'Restrict ALL fluid intake from 1 hour before the dose until 8 hours after — this is mandatory, not optional',
        'Desmopressin is an ADH analogue — it causes water retention; if the child drinks, they cannot excrete the excess water and may develop dilutional hyponatraemia',
        'Symptoms of hyponatraemia: headache, nausea, confusion, seizures — advise parents to seek urgent help if these occur',
        'During illness with vomiting/diarrhoea or when child is likely to drink more (e.g. hot weather, exercise) — withhold desmopressin that night',
        'Nasal spray is absolutely contraindicated (blacklisted in UK) — oral formulations only',
      ],
    },

    {
      type: 'list',
      items: [
        'Give at bedtime (ideally 30–60 minutes before sleep)',
        'Review response at 4 weeks — if responding, continue for 3 months total',
        'Signs of response: smaller wet patches, fewer wet nights, fewer wetting episodes per night',
        'After 3 months: 1-week drug-free period — if dry without medication, stop; if not, continue for a further 3 months then reassess',
        'If no response at 4 weeks: consider stopping, or adding alarm (combination therapy), or specialist review',
        'Discharge from treatment if 14–28 consecutive dry nights achieved',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Continence nurse (first-line specialist referral)',
      items: [
        'Refer to the paediatric continence nurse service for: children not responding to initial lifestyle advice after 4–6 weeks, alarm loan and training, complex or non-monosymptomatic enuresis, concurrent daytime bladder problems',
        'Continence nurses can prescribe desmopressin, loan alarms, provide specialist assessment, and liaise with paediatrics',
        'In Staffordshire: refer via GP2GP or direct referral to the community children\'s continence service',
        'ERIC (Education and Resources for Improving Childhood Continence) — excellent resource for families and professionals: eric.org.uk',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer to paediatrics if:',
      items: [
        'No response to combination therapy (alarm + desmopressin) after adequate trial',
        'Non-monosymptomatic enuresis with significant daytime LUTS not responding to bladder retraining',
        'Suspected anatomical, neurological, or organic cause',
        'Recurrent UTIs in context of enuresis',
        'Consideration of anticholinergic therapy (e.g. oxybutynin/Lyrinel XL for overactive bladder component) — usually initiated by paediatrics or continence nurse',
        'Secondary enuresis with no identifiable cause after investigation',
        'Significant psychosocial comorbidity (anxiety, trauma) driving the enuresis',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'ERIC — Children\'s Continence Pathway (Night Wetting)', url: 'https://eric.org.uk/childrens-continence-pathway/flowchart-night-time-wetting/' },
        { label: 'NICE CKS — Enuresis — Nocturnal', url: 'https://cks.nice.org.uk/topics/enuresis-nocturnal/' },
        { label: 'NICE Guideline CG111 — Nocturnal Enuresis', url: 'https://www.nice.org.uk/guidance/cg111' },
        { label: 'ERIC — Resources for Families', url: 'https://eric.org.uk' },
      ],
    },

  ],
}

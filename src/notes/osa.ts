import type { Note } from '../data/notes'

export const osa: Note = {
  id: 'osa',
  title: 'Obstructive Sleep Apnoea (OSA)',
  subtitle: 'STOP-BANG, Epworth scale, CPAP, DVLA driving rules and other causes of daytime sleepiness',
  tags: ['respiratory'],

  body: 'obstructive sleep apnoea OSA OSAHS hypopnea Epworth sleepiness scale STOP-BANG CPAP mandibular advancement device MAD snoring apnoea excess daytime sleepiness EDS obesity hypoventilation obesity COPD overlap driving DVLA narcolepsy restless legs periodic limb movements nocturnal hypoxia hypercapnia NIV BiPAP',

  content: [

    { type: 'heading', level: 2, text: 'Background and Pathophysiology' },

    {
      type: 'list',
      items: [
        'OSA: intermittent upper airway collapse during sleep causing apnoeas (breathing pauses >10 seconds) and hypopnoeas (partial obstruction with ≥30% reduction in airflow) → oxygen desaturation → arousal → sleep fragmentation',
        'OSAHS (OSA-Hypopnoea Syndrome): OSA with significant daytime sleepiness from sleep disruption',
        'Prevalence: 3–7% of men, 2–5% of women; massively underdiagnosed; peak middle-age but any age',
        'Risk factors: obesity (BMI >30 — most important), neck circumference >40 cm (men), male sex, post-menopausal women, craniofacial abnormalities (retrognathia), tonsillar hypertrophy, alcohol (reduces upper airway tone), sedatives/muscle relaxants, hypothyroidism (reduced tone), acromegaly',
        'COPD-OSA overlap syndrome: worsens nocturnal hypoxia and hypercapnia; higher cardiovascular mortality; early CPAP/NIV referral',
        'Obesity hypoventilation syndrome (OHS): BMI >30 + daytime hypercapnia (PaCO2 >6 kPa) without another cause; most have OSA; requires NIV/BiPAP',
      ],
    },

    { type: 'heading', level: 2, text: 'Symptoms and Assessment' },

    {
      type: 'table',
      headers: ['Symptom Type', 'Features'],
      rows: [
        ['Night-time', 'Loud snoring, choking/gasping episodes (often reported by partner), witnessed apnoeas (partner observes breathing stopping), restless sleep, nocturia, sweating'],
        ['Morning', 'Unrefreshed despite adequate sleep duration, morning headaches (CO2 retention), dry mouth'],
        ['Daytime', 'Excessive daytime sleepiness (EDS) — not just tiredness; napping involuntarily, "fighting sleep" whilst driving; cognitive impairment, difficulty concentrating, irritability, low mood, loss of libido'],
      ],
      caption: 'Distinguish EDS from ordinary tiredness: EDS = actually falling asleep or very close to it in passive situations (reading, watching TV, as a passenger). Tiredness/fatigue alone without true sleepiness suggests other cause.',
    },

    { type: 'heading', level: 2, text: 'Screening Tools' },

    {
      type: 'callout',
      variant: 'info',
      title: 'STOP-BANG and Epworth — How to Use in Primary Care',
      items: [
        'Epworth Sleepiness Scale (ESS): self-rated likelihood of dozing in 8 situations (0–3 each); total /24; >10 = excessive daytime sleepiness; use as a clinical tool to assess severity and monitor response to treatment; NOT used to determine eligibility for referral or sleep studies',
        'STOP-BANG questionnaire: 8 binary questions (Snoring, Tired, Observed apnoea, Pressure/hypertension, BMI >35, Age >50, Neck >40 cm, Gender male); 3+ = high risk of moderate-severe OSA',
        'Always check: BMI, neck circumference, BP (OSA associated with hypertension — treat OSA first before adding antihypertensives if possible), oxygen saturation at rest',
        'Check DVLA driving status and occupation: ESS >10 = advise to inform DVLA and stop driving until assessed (see driving section)',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral and Sleep Studies' },

    {
      type: 'list',
      items: [
        'Refer ALL suspected OSA/OSAHS to a sleep clinic (respiratory or ENT) for sleep studies — diagnosis cannot be made clinically without objective sleep study',
        'Urgent referral (same-day or very urgent) if: SaO2 <94% at rest (risk of CO2 retention), suspected OHS (daytime hypercapnia), safety-critical occupation (HGV/PSV driver, pilot, train driver, machinery operator), known severe CVD',
        'Routine referral: standard clinical OSA symptoms without urgent features',
        'Sleep studies: home sleep study (limited channel oximetry + airflow recording) is first-line for most; polysomnography (full in-lab, 16+ channels) for complex or uncertain cases',
        'AHI (Apnoea-Hypopnoea Index): severity — mild 5–14/hr, moderate 15–29/hr, severe ≥30/hr',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment' },

    {
      type: 'table',
      headers: ['Treatment', 'Details'],
      rows: [
        ['Lifestyle modification', 'Weight loss (most effective — even 10% weight loss can significantly reduce AHI); reduce alcohol (especially within 4 hours of bed); stop smoking; avoid sedatives and hypnotics; positional therapy (sleeping on side — tennis ball sewn to back of pyjamas, or positional device for positional OSA)'],
        ['CPAP (Continuous Positive Airway Pressure)', 'Gold standard for moderate–severe OSA (AHI ≥15) or symptomatic mild OSA; air pressure "stents" upper airway open; used nightly via nasal or full-face mask; dramatically improves ESS, BP, quality of life, driving safety, and cardiovascular outcomes; common side effects: nasal dryness (heated humidifier helps), mask leak, claustrophobia; compliance is the key challenge — heated humidifier, correct mask fit, and support improve adherence'],
        ['Mandibular Advancement Device (MAD)', 'For mild–moderate OSA if CPAP declined or not tolerated; custom-fitted oral appliance that protrudes mandible during sleep; effective but less so than CPAP; fitted by specialist dentist; causes jaw and dental discomfort initially'],
        ['ENT surgery', 'Tonsillectomy/adenoidectomy in children with OSA (often curative); uvulopalatopharyngoplasty (UPPP) in adults — less effective than CPAP, irreversible; limited role in primary OSA in adults'],
        ['NIV/BiPAP', 'OHS or COPD-OSA overlap with hypercapnia — BiPAP (bilevel positive airway pressure) preferred over CPAP alone; manages both apnoeas and hypoventilation'],
      ],
    },

    { type: 'heading', level: 2, text: 'DVLA and Driving' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'DVLA Driving Rules for OSA',
      items: [
        'Untreated OSA with excessive daytime sleepiness (ESS >10): patient MUST be advised NOT to drive and must notify DVLA — risk of "falling asleep at the wheel" and causing an accident',
        'Group 1 licence (cars, motorcycles): can resume driving once symptoms are controlled on CPAP and ESS <10; do not need to notify DVLA if symptom-free on treatment; but MUST stop driving if still symptomatic',
        'Group 2 licence (HGV, LGV, PSV — buses, lorries): higher threshold; must notify DVLA; must demonstrate CPAP compliance (>4 hours/night average) and ESS improvement; DVLA will review annually',
        'Medically unfit to drive: if a patient refuses DVLA notification and continues to drive against advice, this is a rare situation where you may need to breach confidentiality — document clearly; follow GMC guidance',
        'Sleepy driving is 20–30% of all road traffic accidents in the UK — OSA is an important cause',
      ],
    },

    { type: 'heading', level: 2, text: 'Other Causes of Excessive Daytime Sleepiness' },

    {
      type: 'list',
      items: [
        'Poor sleep hygiene: irregular sleep schedule, screens before bed, excessive caffeine, hot/noisy bedroom — very common; address with CBT-I (Cognitive Behavioural Therapy for Insomnia)',
        'Insufficient sleep: new baby, shift work, long working hours — sleep deprivation is extremely common; distinguish from pathological EDS',
        'Medications: SSRIs, SNRIs, antipsychotics, antihistamines, beta-blockers, opioids, benzodiazepines — review medication list',
        'Nocturia: waking for micturition disrupts sleep; treat underlying cause (prostatic, overactive bladder, diabetes insipidus)',
        'Narcolepsy: rare (1/2000); irresistible sleep attacks, cataplexy (sudden loss of muscle tone triggered by emotion), hypnagogic hallucinations, sleep paralysis; refer to sleep neurologist',
        'Idiopathic hypersomnia: similar to narcolepsy but without cataplexy; specialist sleep service',
        'Periodic Limb Movement Disorder (PLMD): leg jerks during sleep disrupt sleep; associated with restless legs syndrome; worse with caffeine and neuroleptics; dopamine agonists (pramipexole) or gabapentinoids if significant; exclude iron deficiency (ferritin <50)',
        'Depression: fatigue and hypersomnia common; treat underlying depression; screen with PHQ-9',
        'Hypothyroidism: check TFTs in any unexplained fatigue or EDS — common and treatable',
      ],
    },

  ],
}

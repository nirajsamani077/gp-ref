import type { Note } from '../data/notes'

export const eatingDisorders: Note = {
  id: 'eating-disorders',
  title: 'Eating Disorders',
  subtitle: 'Anorexia, bulimia, ARFID, SCOFF questionnaire, monitoring and urgent referral criteria',
  tags: ['mental health', 'paediatrics'],

  body: 'eating disorder anorexia nervosa bulimia nervosa binge eating disorder ARFID avoidant restrictive food intake disorder OFSED SCOFF questionnaire BMI weight loss amenorrhoea bradycardia postural hypotension proximal myopathy electrolyte refeeding syndrome monitoring annual review BEAT charity ECHO fluoxetine olanzapine family therapy CBT CAMHS CMHT T1DM diabulimia',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Eating Disorders — Classification',
      items: [
        'Highest mortality of any psychiatric condition — most common in teenage girls and young women; prevalence rising',
        'Central feature: preoccupation with weight and body image (EXCEPT ARFID)',
        'Anorexia nervosa (AN): significantly low weight + intense fear of weight gain + body image distortion',
        'Bulimia nervosa (BN): normal or above normal weight + recurrent binges + compensatory behaviours (purging, excess exercise, laxatives, restriction)',
        'Binge eating disorder (BED): recurrent binges WITHOUT compensatory behaviours',
        'OFSED (Other Specified Feeding or Eating Disorder): most common type — meets some but not all criteria',
        'ARFID (Avoidant/Restrictive Food Intake Disorder): selective eating for other reasons (sensory, anxiety, disgust) NOT body image — common in autism',
        'Consider eating disorder in T1DM with unexplained high HbA1C or recurrent DKA — diabulimia (omitting insulin for weight control) is serious and life-threatening',
      ],
    },

    { type: 'heading', level: 2, text: 'SCOFF Questionnaire — Screening Tool' },

    {
      type: 'callout',
      variant: 'info',
      title: 'SCOFF Questions (Score ≥2 = Probable Eating Disorder)',
      items: [
        'S — Do you make yourself Sick because you feel uncomfortably full?',
        'C — Do you worry you have lost Control over how much you eat?',
        'O — Have you recently lost more than One stone (6 kg) in a 3-month period?',
        'F — Do you believe yourself to be Fat when others say you are too thin?',
        'F — Would you say that Food dominates your life?',
        'Score ≥2: high probability of eating disorder — refer to CAMHS (child) or CMHT eating disorder service (adult)',
      ],
    },

    { type: 'heading', level: 2, text: 'Criteria for Urgent/Emergency Admission' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Admit Urgently (Medical Admission)',
      items: [
        'BMI <15 (adults) OR below 2nd centile for age (children/adolescents)',
        'Rapid or significant weight loss (>1 kg/week)',
        'Cardiovascular: bradycardia (HR <40/min), hypotension, postural drop, syncope, prolonged QTc on ECG',
        'Dehydration, hypothermia',
        'Proximal myopathy: sit up from lying, squat and stand test — unable to rise unaided',
        'Acute suicidal ideation or active self-harm',
        'Food or drink refusal entirely',
        'Abnormal bloods: LOW potassium, phosphate, sodium, magnesium; ECG changes',
        'NB: BMI alone is unreliable in children — use centile chart; all moderate-severe AN carry cardiac risk',
      ],
    },

    { type: 'heading', level: 2, text: 'Primary Care Monitoring' },

    {
      type: 'table',
      headers: ['Parameter', 'Frequency'],
      rows: [
        ['Weight and BMI', 'At every appointment; plot on growth chart in under-18s'],
        ['Blood pressure (lying and standing)', 'Postural hypotension = risk of falls and cardiac compromise'],
        ['Heart rate and ECG', 'ECG if bradycardia, concerns about hypokalaemia or QTc'],
        ['Bloods: FBC, U&E, LFT, haematinics, HbA1c (if T1DM), TFTs, bone profile, magnesium, phosphate', 'Annually (or more frequently if medically compromised)'],
        ['DEXA scan and FRAX', 'Osteoporosis risk is significant in AN due to low oestrogen and malnutrition; FRAX at annual review'],
        ['Dental review', 'Erosion from purging; effects of laxatives and caffeine — refer regularly'],
        ['Menstrual history (WCBA)', 'Amenorrhoea common in AN; if trying to conceive — high-risk pregnancy; LARCs preferred for contraception'],
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment' },

    {
      type: 'list',
      items: [
        'Refer immediately to CAMHS (under 18) or CMHT eating disorder service (adult) — do NOT delay',
        'Treatment is predominantly specialist-led: family-based therapy (FBT) first line in adolescent AN; individual CBT in adults',
        'Fluoxetine: licensed for bulimia nervosa — 60 mg daily; also may help BED',
        'Olanzapine: may be used alongside AN treatment to reduce anxiety and support weight gain — specialist decision',
        'Nasogastric (NG) feeding: may be required for medically compromised patients — hospital setting',
        'Primary care role: annual physical monitoring, medication management, liaison with specialist team, carer support',
        'Carer support: signpost family to ECHO (Expert Carers Helping Others) and BEAT charity resources',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Special Considerations',
      items: [
        'T1DM with eating disorder (diabulimia): omitting or reducing insulin for weight control — causes persistent hyperglycaemia, DKA, accelerated complications; refer urgently to diabetes and eating disorder team',
        'Pregnancy: if pregnant with active eating disorder — very high risk; refer immediately to perinatal MH team + high-risk obstetrics',
        'Refeeding syndrome: when nutrition is reintroduced after starvation — severe hypophosphataemia, arrhythmias, cardiac failure; managed in hospital with careful electrolyte monitoring',
        'Laxative and diuretic abuse: electrolyte imbalances, metabolic alkalosis, dehydration',
        'Enquire about other mental health, substance use, carer status at every review',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Child/adolescent eating disorder: CAMHS via CaFSPA — Holly Lodge, St Michaels Court, Lichfield WS13 6EF; urgent cases via MPFT access team 0808 196 3002',
        'Adult eating disorder: MPFT Adult Eating Disorder Service — via MPFT access/SPA; 0808 196 3002',
        'Medical admission (urgent): UHDB Queen\'s Hospital Burton (adults) or paediatric ward (children)',
        'Patient and carer resources: BEAT Eating Disorders (beateatingdisorders.org.uk) — helpline, coaching, resources; ECHO (echoexpert.com) — support for carers',
        'Dental referral (erosion from purging): UHDB Burton dental services or local GDP',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG69 — Eating Disorders', url: 'https://www.nice.org.uk/guidance/ng69' },
        { label: 'BEAT Eating Disorders', url: 'https://www.beateatingdisorders.org.uk/' },
        { label: 'RCPSYCH — Eating Disorders', url: 'https://www.rcpsych.ac.uk/mental-health/problems-disorders/anorexia-and-bulimia' },
        { label: 'NHS — Eating Disorders', url: 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/' },
      ],
    },
  ],
}

import type { Note } from '../data/notes'

export const substanceMisuse: Note = {
  id: 'substance-misuse',
  title: 'Substance Use & Misuse',
  subtitle: 'Cannabis · Opiates · BDZ · Stimulants · Hallucinogens · NPS · IVDU · BBV · Support',
  tags: ['mental'],
  body: 'substance misuse drugs drug use cannabis opiates heroin methadone buprenorphine benzodiazepine cocaine MDMA ecstasy amphetamine speed nitrous oxide ketamine LSD psilocybin mushrooms spice mamba synthetic cannabinoids mephedrone anabolic steroids naltrexone BBV blood borne virus HIV hepatitis needle exchange FRANK CGL STARS withdrawal dependence',
  content: [

    { type: 'heading', level: 2, text: 'General Approach' },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Asking About Substance Use',
      items: [
        'Ask routinely — especially when presenting with physical, mental health, or social problems',
        'Find out specifics: WHAT drug(s), HOW (route), HOW MUCH, HOW OFTEN, WHEN started',
        'Non-judgemental, harm-reduction approach — reduces barriers to disclosure',
        'Always ask about alcohol AND drug use together — polydrug use is common',
        'Ask about needle/IV use → offer BBV testing: HIV, Hepatitis B, Hepatitis C',
        'Hepatitis B vaccination for IVDU patients who are non-immune',
        'Signpost to FRANK website (talktofrank.com) for patient information on harms',
        'Ask about interactions with prescribed drugs — especially critical with MH medications, antidepressants, antipsychotics, anticoagulants',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'IVDU — Specific Risks to Assess',
      items: [
        'BBV: HIV, Hepatitis B, Hepatitis C — offer testing; vaccinate against HBV if non-immune',
        'VTE: DVT, PE — from vascular injury; check limbs for thrombosis',
        'Endocarditis — fever + murmur + IVDU = admit urgently (IVDU endocarditis typically right-sided/tricuspid)',
        'Skin and soft tissue infections: abscesses, cellulitis, necrotising fasciitis',
        'Needle exchange services — refer to local service to reduce harm',
        'Naloxone provision: train patient and contacts in case of opioid overdose',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral & Support' },
    {
      type: 'callout',
      variant: 'info',
      title: 'When and How to Refer',
      items: [
        'Self-referral to local drug and alcohol service: STARS (Staffordshire) — www.staffstars.org',
        'Opiates and benzodiazepines specifically: withdrawal prescribing and monitoring should be done by CGL/specialist service',
        'Opioid substitution therapy (OST): methadone (full agonist) or buprenorphine/Subutex (partial agonist) — specialist initiation and monitoring',
        'Naltrexone (opioid antagonist) for relapse prevention after opioid withdrawal — specialist initiation',
        'Sublingual buprenorphine/naloxone (Suboxone) — newer; reduces risk of diversion; may cause dental decay (advise dental hygiene)',
        'Brief advice in primary care for milder/recreational use; refer for complex or dependent use',
        'FRANK helpline: 0300 123 6600; www.talktofrank.com',
        'Narcotics Anonymous (NA): www.ukna.org',
      ],
    },

    { type: 'heading', level: 2, text: 'Depressants' },
    {
      type: 'table',
      caption: 'Depressant drugs — effects, signs and risks',
      headers: ['Drug', 'Acute Effects / Signs', 'Specific Risks', 'Withdrawal'],
      rows: [
        ['Cannabis (THC/CBD)\nSpliff, weed, skunk, hash', 'Euphoria, red eyes, slow movements, tachycardia, increased appetite, impaired memory/concentration. Can be stimulant or sedating depending on strain.', 'Long-term: respiratory disease (smoked), cognitive impairment, psychosis (high-THC strains especially). Amotivational syndrome. Risk of dependence (~10%).', 'Irritability, insomnia, anxiety, decreased appetite — not medically dangerous but distressing. Peaks day 1–3.'],
        ['Benzodiazepines (BDZ)\nValium, Xanax, Temazepam', 'Sedation, reduced anxiety, euphoria, disinhibition, slurred speech, unsteady gait.', 'High addiction potential. Cognitive impairment. Overdose risk especially with opiates/alcohol. Respiratory depression.', 'DANGEROUS — can be fatal. Peaks day 10: anxiety, hallucinations, seizures. Requires supervised gradual taper. Never stop abruptly.'],
        ['Opiates / Heroin\nSmack, brown, diamorphine', 'Euphoria, analgesia, sedation, miosis (pinpoint pupils), hypotension, bradycardia, respiratory depression, nausea.', 'IVDU risks (BBV, endocarditis, VTE, abscesses). Overdose: respiratory arrest — reverse with naloxone. High physical and psychological dependence.', 'Peaks day 2: insomnia, restlessness, lacrimation, yawning, sweating, dilated pupils, vomiting, diarrhoea, muscle cramps. Not usually fatal in healthy adult but very distressing.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Stimulants' },
    {
      type: 'table',
      caption: 'Stimulant drugs — effects, signs and risks',
      headers: ['Drug', 'Acute Effects / Signs', 'Specific Risks', 'Notes'],
      rows: [
        ['Cocaine / Crack\nCharlie, coke, snow', 'Euphoria, rapid speech, agitation, dilated pupils, hypertension, tachycardia, reduced appetite, confidence.', 'Cardiac: MI (coronary vasospasm), arrhythmia, aortic dissection. Rhabdomyolysis. Paranoia/psychosis. Dependence. Nasal septum perforation (snorting). Crack: more addictive, faster onset.', 'Crash after use: profound fatigue, low mood. Psychological craving. No dangerous physical withdrawal. Addiction treatment via psychological support.'],
        ['MDMA / Ecstasy\nPills, Mandy, Molly', 'Empathy, euphoria, energy, dilated pupils, tachycardia, hyperthermia, jaw clenching.', 'Hyperthermia, hyponatraemia (from excess water drinking at raves — SIADH-like), serotonin syndrome (esp. with SSRIs/MAOIs). Rare but fatal cardiovascular events. Cognitive impairment with heavy use.', 'Comedown: low mood, fatigue ("mid-week blues"). No physical withdrawal. Serotonin depletion.'],
        ['Amphetamines / Speed\nWhiz, base', 'Same as cocaine — rapid speech, agitation, dilated pupils, hypertension, tachycardia. Longer duration.', 'All cocaine risks plus: severe jaw clenching/grinding (bruxism). Long-term psychosis (paranoid delusions, hallucinations — can persist). Cardiac toxicity.', 'Methamphetamine ("crystal meth"/"ice") — much more potent form; highly addictive; severe CNS and dental effects.'],
        ['Nitrous Oxide\nLaughing gas, balloons', 'Very rapid onset (<30s), euphoria, giggles, lightheaded, dissociation. Short duration (~2 min).', 'Risk of bradycardia, LOC, asphyxiation (hypoxia if used in closed space). Long-term B12 deficiency → subacute combined degeneration of cord (SCDC): peripheral neuropathy, ataxia. Now Class C drug.', 'Check serum B12 and consider supplementation in regular users. Assess for neurological symptoms (tingling, weakness, unsteady).'],
      ],
    },

    { type: 'heading', level: 2, text: 'Hallucinogens & Dissociatives' },
    {
      type: 'table',
      caption: 'Hallucinogen and dissociative drugs',
      headers: ['Drug', 'Acute Effects / Signs', 'Specific Risks'],
      rows: [
        ['Ketamine\nK, Special K, Vitamin K', 'Dreamlike, detached, dissociation, analgesia. "K-hole" = profound stupor/dissociation at high doses. Tachycardia, hypertension, nystagmus.', 'Haemorrhagic/ulcerative cystitis ("ketamine bladder") — can be irreversible; requires urology referral. Cognitive impairment with chronic use. Deaths rare but reckless behaviour risk.'],
        ['LSD\nAcid, tabs, trips', 'Vivid visual hallucinations, sensory distortion, altered sense of time. Pupil dilation, tachycardia, sweating.', '"Bad trips" — profound fear, paranoia, psychosis, risk of self-harm or suicide during episode. HPPD (hallucinogen persisting perception disorder) — flashbacks. No physical dependence.'],
        ['Psilocybin\nMagic mushrooms, shrooms', 'Similar to LSD but shorter duration (~4–6h). Lower cardiac effects.', 'Same risk of bad trip. Being explored in trials for treatment-resistant depression (not currently licensed). No physical withdrawal.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Novel Psychoactive Substances (NPS / "Legal Highs")' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'NPS — Unpredictable and Increasingly Dangerous',
      items: [
        'Psychoactive Substances Act 2016 — most NPS now illegal in UK regardless of "legal high" labelling',
        'Effects and toxicity highly unpredictable; composition varies between batches; often much more potent than original drugs',
      ],
    },
    {
      type: 'table',
      caption: 'Common NPS categories',
      headers: ['Category', 'Examples', 'Effects / Risks'],
      rows: [
        ['Synthetic cannabinoids', 'Spice, Black Mamba, Pandora\'s Box', 'Sprayed onto leaf material; smoked or vaped. Unpredictable — hypertension, tachycardia, psychosis, seizures. Much more addictive than cannabis with severe hangover and withdrawal syndrome.'],
        ['Synthetic opioids', 'Fentanyl analogues, nitazenes', 'Far more potent than heroin — standard naloxone doses may be insufficient (repeat/higher doses needed). High risk of fatal overdose.'],
        ['Synthetic BDZ', 'Diclazepam, etizolam', 'Very long half-life variants — withdrawal can be extremely prolonged and severe.'],
        ['Stimulants', 'Mephedrone (M-CAT, Meow Meow)', 'Similar to cocaine/MDMA but: panic attacks, autonomic instability, malignant hyperthermia. Intense craving and severe withdrawal.'],
        ['Dissociatives', 'Methoxetamine (Mexxy)', 'Related to ketamine but more severe CV and cerebellar toxicity.'],
        ['"Smart drugs" / Nootropics', 'Modafinil (narcolepsy), Methylphenidate (ADHD)', 'Common in university settings for cognitive enhancement. Risk of dependence, cardiovascular effects, insomnia, anxiety. Ask about these in young patients.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Other Substances' },
    {
      type: 'list',
      items: [
        'Anabolic steroids / doping agents (nandrolone, stanozolol): cardiovascular disease (LVH, cardiomyopathy, dyslipidaemia), hypogonadism and infertility (suppress HPG axis), hepatotoxicity, aggression. Adjuncts: clenbuterol (B2-agonist), growth hormone, insulin (hypoglycaemia risk), diuretics.',
        'GHB/GBL ("G"): CNS depressant; euphoria; narrow therapeutic window — small dose increase causes unconsciousness; dangerous combined with alcohol; severe withdrawal (agitation, psychosis, seizures).',
        'Alcohol: see separate Alcohol/ETOH note.',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'STARS (Staffordshire)', url: 'https://www.staffstars.org' },
        { label: 'FRANK — Drug Information', url: 'https://www.talktofrank.com' },
        { label: 'Narcotics Anonymous', url: 'https://www.ukna.org' },
        { label: 'NICE — Drug Misuse (CG51)', url: 'https://www.nice.org.uk/guidance/cg51' },
        { label: 'NICE — Opioid Dependence (CG52)', url: 'https://www.nice.org.uk/guidance/cg52' },
        { label: 'Nitrous Oxide — ACMD Report', url: 'https://www.gov.uk/government/publications/nitrous-oxide-harms-and-misuse' },
      ],
    },
  ],
}

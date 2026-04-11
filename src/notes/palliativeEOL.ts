import type { Note } from '../data/notes'

export const palliativeEOL: Note = {
  id: 'palliativeEOL',
  title: 'Palliative & End of Life Care',
  subtitle: 'Anticipatory prescribing, syringe drivers, opioid conversions & ACP',
  tags: ['palliative', 'eol', 'oncology'],
  body: 'palliative end of life anticipatory prescribing syringe driver CSCI morphine midazolam hyoscine haloperidol levomepromazine opioid conversion diamorphine oxycodone fentanyl buprenorphine GSF ReSPECT DNACPR advanced care planning nausea breathlessness secretions agitation ACP EOL MASCC darwin',
  content: [

    // ── Advanced Care Planning ─────────────────────────────────────
    { type: 'heading', level: 2, text: 'Advanced Care Planning' },

    { type: 'para', text: 'Start the ACP conversation early when signs of health deterioration are present. Earlier conversations allow time for planning, prefer\u00e9nce discussion and avoiding crisis decision-making.' },

    { type: 'heading', level: 3, text: 'When to Start the Conversation' },
    { type: 'list', items: [
      'Progressive cancer \u2014 too frail for curative treatment',
      'Severe heart failure, COPD, IPF, CKD or cirrhosis',
      'Neurodegenerative disease progression \u2014 loss of swallow, speech, motor function or recurrent aspiration',
      'Advanced dementia / frailty with geriatric giants: falls, delirium, incontinence, polypharmacy',
    ]},

    { type: 'heading', level: 3, text: 'Illness Trajectories' },
    { type: 'table',
      headers: ['Trajectory', 'Pattern', 'Typical causes'],
      rows: [
        ['Rapid decline', 'Relatively stable then steep decline', 'Cancer'],
        ['Intermittent decline', 'Ups and downs with each episode worse', 'Heart failure, COPD, organ failure'],
        ['Gradual decline', 'Slow steady decline over years', 'Frailty, dementia'],
      ]
    },

    { type: 'heading', level: 3, text: 'GSF Prognostic Indicator Guidance' },
    { type: 'table',
      headers: ['GSF Colour', 'Prognosis', 'Action'],
      rows: [
        ['\ud83d\udd35 Blue', 'Years+', 'Stable diagnosis; annual review'],
        ['\ud83d\udfe2 Green', 'Months', 'Unstable disease; consider DS1500; add to GSF register'],
        ['\ud83d\udfe1 Yellow', 'Weeks', 'Deteriorating; anticipatory meds; OOH notification'],
        ['\ud83d\udd34 Red', 'Days', 'Final days of life; anticipatories in place; syringe driver if needed'],
      ]
    },

    { type: 'heading', level: 3, text: 'ReSPECT Conversation \u2014 SPIKES Framework' },
    { type: 'table',
      headers: ['Step', 'Detail'],
      rows: [
        ['S \u2014 Setting', 'Involve NOK if patient consents; confirm capacity; arrange IMCA if no NOK and lacks capacity'],
        ['P \u2014 Perception / Invitation', 'Ask how they feel their health is; explore how much detail they wish to know'],
        ['I \u2014 Information', 'Use their concerns as the starting point; explain you are worried about significant deterioration'],
        ['K \u2014 Knowledge', 'Explain that when critically unwell the heart can stop; CPR only works in a minority of cases with a reversible cause; most situations in this context are not reversible. Explore their thoughts. Discuss ITU / life support machines.'],
        ['E \u2014 Empathy', 'Acknowledge their feelings; normalise distress; sit with silence if needed'],
        ['S \u2014 Summary', 'Summarise discussion; explain the ReSPECT form; arrange follow-up; document clearly'],
      ]
    },

    { type: 'heading', level: 3, text: 'Additional ACP Tasks' },
    { type: 'list', items: [
      'Add to GSF register at appropriate colour level',
      'Prescribe anticipatory medications \u2014 see below',
      'Notify Out of Hours (OOH) service and ambulance services',
      'Discuss Lasting Power of Attorney (health & finances) if not in place',
      'Advance Decision to Refuse Treatment (ADRT / \u201cliving will\u201d) \u2014 legally binding refusal of treatment even if life-sustaining; MacMillan ADRT form can be used; no solicitor required but must be formally written',
      'Discuss preferred place of death and post-death plans (burial / cremation)',
      '\u201cOne chance to get it right\u201d \u2014 NHS report; key document for EOL care approach',
    ]},

    { type: 'linkrow', links: [
      { label: 'UHNM ReSPECT Information', url: 'https://www.uhnm.nhs.uk/our-services/respect/' },
      { label: 'Digital ReSPECT \u2014 Staffordshire (GraphNet)', url: 'https://www.graphnethealth.com/knowledge-hub/news/digital-respect-forms-rolled-out-in-staffordshire-and-stoke-on-trent-for-first-time-enabling-personalised-clinical-care-during-emergency-situations' },
      { label: 'West Midlands Palliative Care \u2014 Syringe Drivers', url: 'https://www.westmidspallcare.co.uk/wmpcp/guide/syringe-driver-pump/' },
    ]},

    // ── Darwin-Specific Anticipatory Prescribing ───────────────────
    { type: 'heading', level: 2, text: 'Darwin \u2014 Anticipatory Prescribing Process' },

    { type: 'para', text: 'In Darwin (EMIS), anticipatory medications are prescribed via EPS (Electronic Prescription Service) and district nurses (DNs) are authorised to administer. Use the MASCC form and refer to DNs.' },

    { type: 'callout', variant: 'info', title: 'Darwin Anticipatories \u2014 Step by Step', items: [
      '1. Confirm GSF Yellow or Red (weeks / days prognosis)',
      '2. Complete MASCC anticipatory prescribing form (available via Darwin / EMIS templates)',
      '3. Prescribe anticipatory medications via EPS \u2014 sent to patient\u2019s preferred pharmacy',
      '4. Refer to district nursing team to administer PRN doses as per directive',
      '5. Document ceiling of care and ReSPECT decision in notes',
      '6. Notify OOH and update patient summary for ambulance crews',
    ]},

    { type: 'image', src: '/images/eol-darwin-anticipatories-1.png', alt: 'Darwin anticipatory medications formulary list', caption: 'Darwin anticipatory medications \u2014 standard formulary items for EPS prescribing' },
    { type: 'image', src: '/images/eol-darwin-anticipatories-2.png', alt: 'Darwin anticipatory prescribing doses for morphine, haloperidol, midazolam, hyoscine', caption: 'Darwin anticipatory prescribing \u2014 individual drug directive doses' },

    // ── Anticipatory PRN Prescribing ───────────────────────────────
    { type: 'heading', level: 2, text: 'Anticipatory Prescribing \u2014 PRN Doses' },

    { type: 'para', text: 'Prescribe anticipatory medications in advance for symptom control at end of life. DNs administer as per directive. Maximum doses apply over 24 hours.' },

    { type: 'callout', variant: 'warning', title: 'Renal Impairment (eGFR <30)', items: [
      'Avoid morphine \u2014 active metabolites accumulate',
      'Use oxycodone SC instead: oral morphine \u00f72 = oral oxycodone, then oral oxycodone \u00f72 = SC oxycodone',
      'Alternatively seek palliative care advice re fentanyl or alfentanil SC',
    ]},

    { type: 'table',
      caption: 'Standard anticipatory PRN prescribing doses (SC unless stated)',
      headers: ['Drug', 'Indication', 'PRN Dose (SC)', 'Interval', 'Max/24h', 'Notes'],
      rows: [
        ['Morphine sulfate', 'Pain, breathlessness', '2.5\u20135mg', '2-hourly', '30mg', 'If already on oral morphine: SC dose = oral TDD \u00f72; adjust accordingly'],
        ['Oxycodone', 'Pain if eGFR <30', '2.5\u20135mg', '4-hourly', '20mg', 'Oral morphine \u00f72 = oral oxycodone; oral oxycodone \u00f72 = SC oxycodone'],
        ['Midazolam', 'Agitation, anxiety, breathlessness', '2.5\u20135mg', '2-hourly', '30mg', 'Schedule 2 CD; controlled drug rules apply'],
        ['Hyoscine butylbromide', 'Secretions (\u2018death rattle\u2019), colic', '20mg', '4-hourly', '120mg', 'Does NOT cross blood-brain barrier; preferred for secretions'],
        ['Haloperidol', 'Nausea (chemical cause), agitation', '0.5\u20131.5mg', '2-hourly', '10mg', 'Avoid in Parkinson\u2019s disease (EPSE risk) \u2014 use cyclizine instead'],
        ['Levomepromazine', 'Broad-spectrum nausea, agitation', '2.5\u20135mg', '4-hourly', '25mg', 'Sedating; reduce dose in renal failure; useful at end of life'],
        ['Cyclizine', 'Nausea (obstruction, raised ICP)', '25\u201350mg', '6-hourly', '150mg', 'Preferred in Parkinson\u2019s; may precipitate in syringe driver with saline'],
        ['Dexamethasone', 'Nausea from brain mets / raised ICP', '8\u201316mg/day', 'Once daily', 'Discuss with specialist', 'IV / SC / oral; discuss with palliative team'],
      ]
    },

    // ── Syringe Driver (CSCI) ──────────────────────────────────────
    { type: 'heading', level: 2, text: 'Syringe Driver (CSCI over 24 hours)' },

    { type: 'para', text: 'A continuous subcutaneous infusion (CSCI) via syringe driver is used when the oral route is no longer possible. Diluent is water for injections (WFI). Drugs are combined in a single syringe if compatible.' },

    { type: 'image', src: '/images/eol-darwin-syringe-driver.png', alt: 'Darwin syringe driver authorisation form template', caption: 'Darwin syringe driver authorisation form \u2014 initial and review doses for morphine, haloperidol, midazolam, hyoscine butylbromide' },

    { type: 'table',
      caption: 'Typical syringe driver doses over 24 hours (CSCI)',
      headers: ['Drug', '24h Starting Dose', 'Range', 'Notes'],
      rows: [
        ['Morphine sulfate', '10\u201320mg/24h', 'Up to equivalent of oral TDD \u00f72', 'Opiate na\u00efve: start 10mg; if on oral morphine convert TDD\u00f72'],
        ['Diamorphine', '6.6\u201313.3mg/24h', 'Equivalent to morphine \u00f73', 'Only drug available as SC; converts at 1/3 of oral morphine dose'],
        ['Midazolam', '10\u201320mg/24h', 'Up to 50mg if needed', 'For agitation, anxiety, seizures; titrate as needed'],
        ['Levomepromazine', '6.25\u201325mg/24h', 'Sedating at higher doses', 'Broad antiemetic; also sedative; useful for refractory agitation'],
        ['Haloperidol', '2.5\u20135mg/24h', 'Up to 10mg', 'Chemical nausea; avoid in Parkinson\u2019s disease'],
        ['Hyoscine butylbromide', '60\u2013120mg/24h', 'Up to 180mg if needed', 'Secretions and colic; does not cross BBB; compatible with most drugs'],
        ['Diluent', 'Water for injections', '\u2014', 'Use WFI not normal saline; cyclizine may precipitate in saline'],
      ]
    },

    { type: 'callout', variant: 'tip', title: 'Syringe Driver Practical Tips', items: [
      'Use water for injections (WFI) as diluent \u2014 not normal saline',
      'Check drug compatibility before combining (see chart below)',
      'Morphine and midazolam are compatible in WFI',
      'Hyoscine butylbromide is generally compatible with most drugs',
      'Cyclizine can precipitate if mixed with saline or at high concentrations \u2014 mix carefully',
      'Haloperidol and levomepromazine generally should not be combined (both antipsychotics)',
      'Change syringe driver every 24 hours; check site for inflammation',
      'Morphine sulfate preferred in driver (diamorphine now less commonly used)',
    ]},

    // ── Drug Compatibility ─────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Drug Compatibility in Syringe Driver' },

    { type: 'image', src: '/images/eol-compatibility-chart.png', alt: 'Compatibility chart for two drugs in water for injections \u2014 colour coded matrix', caption: 'Compatibility chart: green = compatible, amber = caution/limited data, red = incompatible. Always check current UKMI guidance.' },

    { type: 'image', src: '/images/eol-prescribing-table.png', alt: 'EOL palliative prescribing table with doses, compatibility and notes for all anticipatory and syringe driver drugs', caption: 'Full EOL prescribing reference table \u2014 doses, compatible medicines and administration notes' },

    // ── Palliative Maths ───────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Palliative Opioid Conversion Maths' },

    { type: 'callout', variant: 'info', title: 'Key Opioid Conversions', items: [
      'Breakthrough dose = 1/6 of total daily dose (TDD) \u2014 e.g. TDD 30mg oral morphine \u2192 5mg PRN',
      'Oral codeine or tramadol \u00f710 = equivalent oral morphine (e.g. codeine 60mg QDS = 240mg/day \u00f710 = 24mg oral morphine/day)',
      'Oral morphine \u00f72 = SC morphine (e.g. 30mg oral = 15mg SC/24h)',
      'Oral morphine \u00f73 = SC diamorphine (e.g. 30mg oral = 10mg SC diamorphine/24h)',
      'Oral morphine \u00f72 = oral oxycodone (oxycodone ~1.5\u20132x more potent)',
      'Oral oxycodone \u00f72 = SC oxycodone',
      'Oral oxycodone \u00f71.5 = SC diamorphine',
      'Fentanyl patch 12mcg/h \u2248 30mg oral morphine/24h',
      'Buprenorphine patch 10mcg/h \u2248 24mg oral morphine/24h',
    ]},

    { type: 'table',
      caption: 'Opioid conversion summary table',
      headers: ['From', 'To', 'Conversion', 'Example'],
      rows: [
        ['Oral codeine / tramadol', 'Oral morphine', '\u00f710', 'Codeine 240mg/day \u2192 24mg oral morphine/day'],
        ['Oral morphine', 'SC morphine', '\u00f72', '30mg oral morphine \u2192 15mg SC morphine/24h'],
        ['Oral morphine', 'SC diamorphine', '\u00f73', '30mg oral morphine \u2192 10mg SC diamorphine/24h'],
        ['Oral morphine', 'Oral oxycodone', '\u00f72', '30mg oral morphine \u2192 15mg oral oxycodone/day'],
        ['Oral oxycodone', 'SC oxycodone', '\u00f72', '15mg oral oxycodone \u2192 7.5mg SC oxycodone/24h'],
        ['Oral oxycodone', 'SC diamorphine', '\u00f71.5', '15mg oral oxycodone \u2192 10mg SC diamorphine/24h'],
        ['Fentanyl patch', 'Oral morphine equivalent', '\u00d72.5 per mcg/h', '12mcg/h patch \u2192 30mg oral morphine/day'],
        ['Buprenorphine patch', 'Oral morphine equivalent', '\u00d72.4 per mcg/h', '10mcg/h patch \u2192 24mg oral morphine/day'],
      ]
    },

    { type: 'callout', variant: 'warning', title: 'CKD \u2014 Safe Opioids (eGFR <30)', items: [
      'Avoid morphine and codeine \u2014 active metabolites accumulate causing sedation and respiratory depression',
      'Preferred: buprenorphine (patch), fentanyl (patch or SC), alfentanil (SC), oxycodone (with caution in moderate CKD)',
      'Seek palliative care advice for all patients with eGFR <30 requiring strong opioids',
      'Tramadol also avoided in severe CKD',
    ]},

    // ── Cancer Pain & Opioid Initiation ───────────────────────────
    { type: 'heading', level: 2, text: 'Cancer Pain \u2014 Starting Opioids' },

    { type: 'para', text: 'Always coprescribe a laxative (senna + docusate as softener \u2014 not osmotic laxatives in already dehydrated patients). Nausea and drowsiness are usually transient. Newer option: naloxegol for opioid-induced constipation (OIC) resistant to laxatives.' },

    { type: 'table',
      caption: 'Initiating oral morphine in cancer pain (normal renal/liver function)',
      headers: ['Preparation', 'Starting Dose', 'Max / notes'],
      rows: [
        ['Zomorph / MST (sustained release)', '15mg BD (TDD 30mg)', 'Titrate by 30\u201350% every 1\u20132 days if pain uncontrolled'],
        ['Oramorph / Sevredol (immediate release, PRN)', '5mg PRN (= 1/6 of TDD 30mg)', 'Max 6 doses/day; adjust if needing >3 PRN/day'],
        ['Frail patients', '10mg BD + 2.5mg PRN', 'Lower starting dose; review frequently'],
        ['Renal impairment (eGFR <30)', 'Avoid morphine', 'Use fentanyl, buprenorphine or seek palliative advice'],
        ['Liver disease', 'Avoid oxycodone', 'Seek specialist advice'],
      ]
    },

    // ── Opioid Patches ────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Opioid Patches in Palliative Care' },

    { type: 'callout', variant: 'warning', title: 'When NOT to Use Patches', items: [
      'Opioid-na\u00efve patients \u2014 very potent, risk of fatal respiratory depression',
      'Unstable or rapidly changing pain \u2014 cannot titrate quickly (takes 12\u201324h to reach level)',
      'Anticipating end of life imminently \u2014 switch to SC infusion instead',
      'Fever \u2014 increases absorption; risk of toxicity',
      'Active skin reactions at patch sites',
    ]},

    { type: 'table',
      caption: 'Fentanyl patch (Matrifen / Durogesic DTrans) \u2014 change every 72 hours',
      headers: ['Patch Strength', 'Oral Morphine Equivalent', 'Notes'],
      rows: [
        ['12 mcg/h', '~30 mg/24h', 'Lowest available; very potent'],
        ['25 mcg/h', '~60 mg/24h', 'Matrix patch \u2014 can be cut by specialist only'],
        ['50 mcg/h', '~120 mg/24h', ''],
        ['75 mcg/h', '~180 mg/24h', ''],
        ['100 mcg/h', '~240 mg/24h', ''],
      ]
    },

    { type: 'table',
      caption: 'Buprenorphine patch (Butrans) \u2014 change every 7 days',
      headers: ['Patch Strength', 'Oral Morphine Equivalent', 'Notes'],
      rows: [
        ['5 mcg/h', '~12 mg/24h', 'Takes 72h to reach steady state; takes 24h to clear after removal'],
        ['10 mcg/h', '~24 mg/24h', 'Do not apply to same site again (rotate sites)'],
        ['15 mcg/h', '~36 mg/24h', ''],
        ['20 mcg/h', '~48 mg/24h', 'Transtec alternative: every 4 days, faster onset'],
      ]
    },

    { type: 'list', items: [
      'Apply to non-broken, non-hairy, flat skin (upper arm, chest, back)',
      'Can shower; do not soak in bath or use heat pads over patch (increases absorption)',
      'Always prescribe patches by brand name (Matrifen, Butrans, Transtec)',
      'If switching from SR oral morphine: start patch when last SR dose due; use same TDD equivalence',
      'Lidocaine 5% patch (Versatis): specialist palliative pain only; review at 2 weeks; stop after 4 weeks',
    ]},

    // ── Nausea in Palliative Care ──────────────────────────────────
    { type: 'heading', level: 2, text: 'Palliative Nausea \u2014 Causes & Treatment' },

    { type: 'table',
      caption: '6 main causes of nausea in palliative care and targeted antiemetics',
      headers: ['Cause', 'Typical Triggers', 'First-line Treatment'],
      rows: [
        ['Gastric stasis', 'Opioids, autonomic neuropathy, ascites', 'Metoclopramide 10mg TDS (avoid if bowel obstruction)'],
        ['Chemical / metabolic', 'Hypercalcaemia, uraemia, chemotherapy, opioids', 'Ondansetron 8mg BD or haloperidol 1.5mg nocte'],
        ['Visceral', 'Constipation, bowel obstruction, candidiasis', 'Cyclizine 50mg TDS or levomepromazine 6.25mg nocte'],
        ['Raised ICP', 'Brain metastases, cerebral oedema', 'Cyclizine 50mg TDS + dexamethasone 8\u201316mg/day + consider DXT'],
        ['Vestibular / movement', 'Opioids, motion', 'Cyclizine 50mg TDS or metoclopramide'],
        ['Anxiety', 'Psychological / anticipatory', 'Lorazepam 0.5\u20131mg SL PRN'],
      ]
    },

    { type: 'callout', variant: 'warning', title: 'Parkinson\u2019s Disease \u2014 Avoid Most Antiemetics', items: [
      'Avoid metoclopramide, haloperidol, levomepromazine, prochlorperazine \u2014 all worsen Parkinson\u2019s (EPSE risk)',
      'Safe options: cyclizine, ondansetron, domperidone (limited use)',
      'Discuss with palliative or neurology team',
    ]},

    // ── Other Symptoms ─────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Other End of Life Symptoms' },

    { type: 'table',
      headers: ['Symptom', 'Management'],
      rows: [
        ['Breathlessness', 'Morphine SC PRN (opioids reduce respiratory drive sensation); midazolam if anxiety component; fan/circulating air; lorazepam 0.5mg oral/SL PRN if anxiety; CPAP not appropriate at EOL'],
        ['Respiratory secretions (\u2018death rattle\u2019)', 'Hyoscine butylbromide 20mg SC PRN or CSCI; reassure family; repositioning; mouth care'],
        ['Itching', 'Emollients; menthol-based soothing cream; sedating antihistamine; ondansetron 8mg BD; gabapentin if uraemic (limited evidence)'],
        ['Hiccups', 'Often uraemia, raised ICP or gastric stasis/drug-related; sipping iced water; prokinetic (metoclopramide, domperidone, haloperidol) or dexamethasone; discuss with palliative'],
        ['Seizures', 'Often brain mets, uraemia/metabolic or inability to take AEDs orally; oral levetiracetam or SC midazolam; SC levetiracetam (unlicensed) in syringe driver; discuss with specialist'],
        ['Terminal haemorrhage', 'Involve specialist team; gauze soaked in tranexamic acid or adrenaline / haemostatic dressing (Kaltostat); buccal midazolam 10mg (1ml) IM as last resort; prepare family; often a terminal event'],
        ['Nutrition & hydration', 'Offer what patient can tolerate; little and often; eat together; consider steroids for appetite if not at EOL; mouth care essential as oral intake reduces; body has reduced nutritional needs as it shuts down'],
        ['Agitation / delirium', 'Treat reversible causes (urinary retention, constipation, pain, medication); haloperidol SC if hyperactive delirium; midazolam SC for distressing agitation; levomepromazine for refractory agitation'],
      ]
    },

  ]
}

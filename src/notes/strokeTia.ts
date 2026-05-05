import type { Note } from '../data/notes'

export const strokeTia: Note = {
  id: 'stroke-tia',
  title: 'Stroke & TIA — Recognition and Management',
  subtitle: 'FAST, ischaemic vs haemorrhagic, thrombolysis window, TIA workup and secondary prevention',
  tags: ['neurology', 'cardiology'],

  body: 'stroke TIA transient ischaemic attack FAST face arm speech time thrombolysis thrombectomy CT head MRI brain ischaemic haemorrhagic clopidogrel aspirin atorvastatin atrial fibrillation DOAC anticoagulation carotid stenosis endarterectomy TACS PACS LACS POCS Oxford classification lacunar posterior circulation secondary prevention blood pressure HbA1c lipids antiplatelet depression screening malnutrition dysphagia SALT',

  content: [

    // ── RECOGNITION ──────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'FAST — Call 999 Immediately',
      items: [
        'Face — drooping or asymmetry',
        'Arm — weakness or inability to raise both arms equally',
        'Speech — slurred, confused or unable to speak',
        'Time — call 999 immediately; act FAST',
        'ALSO: sudden visual loss (homonymous hemianopia or monocular amaurosis), sudden severe headache, sudden dizziness/loss of balance',
        'First — check BM (blood glucose): exclude hypoglycaemia as a stroke mimic before calling 999',
        'Do NOT give aspirin if stroke is suspected — it could be haemorrhagic',
      ],
    },

    { type: 'heading', level: 2, text: 'Stroke Types (Oxford / Bamford Classification)' },

    {
      type: 'table',
      headers: ['Type', 'Abbreviation', 'Clinical Features'],
      rows: [
        ['Total anterior circulation syndrome', 'TACS', 'All 3 of: contralateral hemiparesis/sensory loss + contralateral homonymous hemianopia + higher cortical dysfunction (dysphasia, visuospatial)'],
        ['Partial anterior circulation syndrome', 'PACS', '2 of the 3 TACS features, or higher cortical dysfunction alone'],
        ['Lacunar syndrome', 'LACS', 'Pure motor (internal capsule/pons), pure sensory (thalamus), sensorimotor stroke, or ataxic hemiparesis — no cortical features'],
        ['Posterior circulation syndrome', 'POCS', 'Cerebellar signs (ataxia, nystagmus), vertigo/gait disturbance, cranial nerve palsy, diplopia, dissection (neck pain on movement), HINTS positive'],
      ],
      caption: '85% of strokes are ischaemic; 15% are haemorrhagic. Clinical features cannot reliably distinguish — CT head is essential before any antiplatelet or thrombolytic treatment.',
    },

    // ── ACUTE STROKE MANAGEMENT ────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Acute Stroke — Immediate Management' },

    {
      type: 'list',
      items: [
        '999 → hyperacute stroke unit (HASU): if within 4.5 hours of symptom onset, potential candidate for IV thrombolysis (alteplase) or mechanical thrombectomy (clot retrieval)',
        'Urgent CT head: excludes haemorrhage before thrombolysis or antiplatelets',
        'Do NOT give aspirin until haemorrhage excluded on CT — could worsen haemorrhagic stroke',
        'After CT confirms ischaemic stroke: aspirin 300 mg for 2 weeks, then switch to clopidogrel 75 mg OD (or DOAC if AF)',
        'Atorvastatin 80 mg: start 48 hours after stroke onset (delay reduces risk of haemorrhagic transformation)',
        'Tight BP and blood glucose control during acute phase',
        'Dysphagia screening before any oral medications or fluids (SALT assessment)',
        'Screen for malnutrition and depression (extremely common post-stroke)',
        'Stroke unit: multidisciplinary PT, OT, SALT rehabilitation improves outcomes',
      ],
    },

    // ── WORKUP ────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Post-Stroke / TIA Investigations' },

    {
      type: 'table',
      headers: ['Investigation', 'Purpose'],
      rows: [
        ['CT head (urgent)', 'Exclude haemorrhage — mandatory before antiplatelets or thrombolysis'],
        ['MRI brain (DWI)', 'More sensitive for ischaemic infarct, especially posterior fossa — arranged by stroke team'],
        ['12-lead ECG', 'Detect AF as embolic cause — paroxysmal AF may need 24–48h Holter monitor'],
        ['Echocardiogram', 'Structural cardiac cause — patent foramen ovale, thrombus, vegetations'],
        ['Carotid Doppler USS / MR angiography', 'Symptomatic stenosis >50% → candidate for carotid endarterectomy (if neurologically stable, not severely disabled)'],
        ['Bloods', 'FBC, U&E, glucose, HbA1c, lipids, clotting, CRP'],
        ['24–48h cardiac monitoring', 'Paroxysmal AF detection — especially in cardioembolic pattern without identified cause'],
      ],
    },

    // ── TIA ───────────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'warning',
      title: 'TIA — Symptoms Resolve <24 Hours (Usually <1 Hour)',
      items: [
        'ABCD2 score is NO LONGER used to stratify TIA risk — all TIAs carry significant near-future stroke risk',
        'For ALL TIA: give aspirin 300 mg immediately AND refer for specialist assessment within 24 hours (admit if same day slot unavailable)',
        'Focal symptoms: weakness/sensory loss (unilateral), dysphasia, homonymous hemianopia, amaurosis fugax, gait disturbance, vertigo (if posterior circulation)',
        'Specialist will decide imaging (MRI preferred over CT), antiplatelet regimen (dual antiplatelet short-term then monotherapy), lipid/BP optimisation',
        'If AF identified as cause → switch to DOAC (anticoagulation) instead of antiplatelet — discuss with specialist',
        'Driving: must NOT drive for 1 month after TIA; must NOT drive for 1 month after stroke — DVLA notification required (Group 2/HGV: 12 months)',
      ],
    },

    // ── SECONDARY PREVENTION ─────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Secondary Prevention After Stroke / TIA' },

    {
      type: 'table',
      headers: ['Intervention', 'Target / Drug', 'Notes'],
      rows: [
        ['Antiplatelet (non-AF cause)', 'Clopidogrel 75 mg OD (preferred over aspirin monotherapy)', 'After 2 weeks of aspirin 300 mg. If aspirin-intolerant: dipyridamole MR 200 mg BD alone'],
        ['Anticoagulation (AF cause)', 'DOAC (apixaban, rivaroxaban, edoxaban, dabigatran) or warfarin', 'Start DOAC 2 weeks post-stroke (earlier for small infarcts — discuss with specialist); NOT antiplatelets in AF stroke'],
        ['Statin', 'Atorvastatin 80 mg OD', 'Start 48h post-ischaemic stroke; continue indefinitely (do NOT use in haemorrhagic stroke)'],
        ['Blood pressure', 'Target <130/80 mmHg', 'Start or intensify after acute phase; perindopril + indapamide (PROGRESS trial) — discuss timing with stroke specialist'],
        ['Blood glucose', 'HbA1c <48 mmol/mol', 'Tight glycaemic control reduces recurrence risk'],
        ['Carotid endarterectomy', 'Symptomatic stenosis 50–99%', 'Refer to vascular urgently — ideally within 2 weeks for maximum benefit; not if severely disabled'],
        ['Lifestyle', 'Smoking, alcohol, exercise, weight', 'Smoking cessation halves recurrence risk; Mediterranean diet; moderate exercise'],
      ],
    },

    // ── LOCAL REFERRAL ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Acute stroke: 999 → UHDB Queen\'s Hospital Burton (has hyperacute stroke unit — HASU)',
        'TIA clinic (24-hour referral): UHDB Burton neurology / TIA clinic — call or e-RS same day',
        'Neurology (outpatient follow-up): New Cross Hospital, Wolverhampton — primary outpatient neurology for South Staffordshire',
        'Vascular surgery (carotid endarterectomy): New Cross Hospital, Wolverhampton (RWHT vascular team)',
        'Alternative: UHDB Burton or UHB Good Hope for general neurology if patient preference',
        'Stroke rehabilitation: community stroke rehabilitation team — referral via UHDB stroke unit on discharge; community OT/PT via ICOTT',
        'Patient may prefer alternative local site — discuss at consultation',
      ],
    },

    // ── SAFETY NETTING ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — When to Act Urgently',
      items: [
        '999 immediately: new or worsening FAST symptoms, sudden severe headache (SAH), sudden visual loss, sudden loss of balance — DO NOT drive to A&E',
        'After TIA — must not drive for 1 month: advise patient clearly and document in notes',
        'Red flags for urgent GP review: BP >200/120 post-stroke, AF newly detected, symptoms recur after antiplatelet initiated',
        'Post-stroke depression: screen at every contact — high risk, often missed; treat with sertraline or mirtazapine',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Stroke and TIA', url: 'https://cks.nice.org.uk/topics/stroke-tia/' },
        { label: 'NICE NG128 — Stroke Rehabilitation', url: 'https://www.nice.org.uk/guidance/ng128' },
        { label: 'NICE NG236 — Stroke and TIA', url: 'https://www.nice.org.uk/guidance/ng236' },
        { label: 'Stroke Association', url: 'https://www.stroke.org.uk/' },
        { label: 'NHS — Stroke', url: 'https://www.nhs.uk/conditions/stroke/' },
        { label: 'DVLA — Neurological Conditions', url: 'https://www.gov.uk/guidance/neurological-disorders-assessing-fitness-to-drive' },
      ],
    },
  ],
}

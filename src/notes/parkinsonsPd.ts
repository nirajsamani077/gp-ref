import type { Note } from '../data/notes'

export const parkinsonsPd: Note = {
  id: 'parkinsons-pd',
  title: "Parkinson's Disease",
  subtitle: 'Diagnosis, motor triad, dopaminergic therapy, non-motor symptoms and GP management',
  tags: ['neurology'],

  body: "Parkinson's disease PD neurodegenerative dopamine resting tremor bradykinesia rigidity cogwheeling mask face shuffling gait micrographia levodopa carbidopa benserazide dopamine agonist ropinirole pramipexole apomorphine MAO-B selegiline COMT entacapone Lewy body dementia MSA multiple system atrophy PSP progressive supranuclear palsy drug-induced parkinsonism antipsychotics impulse control autonomic constipation drooling POTS postural hypotension rivastigmine essential tremor",

  content: [

    {
      type: 'callout',
      variant: 'info',
      title: 'Refer All Suspected PD Urgently to Neurology',
      items: [
        'Do NOT start dopaminergic treatment in primary care before specialist assessment',
        'Clinical diagnosis using UK PD Society Brain Bank criteria — SPECT DaTscan can help distinguish PD from essential tremor or vascular parkinsonism if diagnostic uncertainty',
        'A Parkinson\'s specialist nurse (PSN) should be involved in ongoing community management',
        'Signpost: Parkinson\'s UK — helpline 0808 800 0303, website and app resources',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Triad of Parkinson\'s Disease' },

    {
      type: 'table',
      headers: ['Feature', 'Characteristics', 'Examination Finding'],
      rows: [
        ['Resting tremor', '3–6 Hz "pill-rolling" tremor; starts unilaterally in hand, progresses to bilateral; suppressed by voluntary movement', 'Asymmetric at rest, disappears with action'],
        ['Bradykinesia', 'Slowness of movement; reduced arm swing; shuffling festinant gait; micrographia; hypomimia (masked face); hypophonia; dysphagia', 'Finger-tapping and heel-tapping test: progressive slowing and amplitude reduction'],
        ['Rigidity', 'Increased tone throughout range of movement; cogwheel rigidity (tremor superimposed) on passive flexion/extension of wrist or elbow', 'Lead-pipe rigidity with cogwheel quality on examination'],
      ],
      caption: 'PD is a clinical diagnosis. Asymmetric onset and resting tremor are highly suggestive. Good initial response to levodopa supports the diagnosis.',
    },

    { type: 'heading', level: 2, text: 'DDx — Tremor' },

    {
      type: 'table',
      headers: ['Tremor Type', 'Conditions', 'Features'],
      rows: [
        ['Resting tremor', 'Parkinson\'s disease', 'Present at rest, worse with distraction, decreases with action'],
        ['Postural / action tremor', 'Benign essential tremor (BET), physiological, drug-induced (salbutamol, lithium, valproate), thyrotoxicosis, alcohol withdrawal, anxiety', 'Present with arms outstretched or during voluntary movement; BET often positive family history and improves with alcohol'],
        ['Intention tremor', 'Cerebellar disease (MS, stroke, alcohol, tumour)', 'Worsens as limb approaches target; past-pointing; ataxia; nystagmus'],
      ],
    },

    { type: 'heading', level: 2, text: 'DDx — Parkinsonism (Not PD)' },

    {
      type: 'list',
      items: [
        'Drug-induced parkinsonism: antipsychotics (haloperidol, olanzapine, risperidone), metoclopramide, prochlorperazine — bilateral, no tremor usually; review and stop offending drug',
        'Multiple System Atrophy (MSA): autonomic failure (OH, impotence, bladder) prominent; poor levodopa response; cerebellar or pyramidal features',
        'Progressive Supranuclear Palsy (PSP): vertical gaze palsy (especially downgaze), early falls, axial rigidity, square-wave jerks; poor levodopa response',
        'Corticobasal Degeneration (CBD): asymmetric apraxia, cortical sensory loss, "alien limb" phenomenon; dementia',
        'Lewy Body Dementia (DLB): dementia onset before or concurrent with parkinsonism; visual hallucinations; REM sleep behaviour disorder; cognitive fluctuation; neuroleptic sensitivity — avoid antipsychotics',
        'Vascular parkinsonism: lower-body parkinsonism (gait affected more than arms), step-wise progression, vascular risk factors, white matter changes on MRI',
      ],
    },

    { type: 'heading', level: 2, text: 'Dopaminergic Treatment (Specialist Initiated)' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Early PD — Motor Symptoms Not Affecting QOL',
      items: [
        'Non-ergot derived dopamine agonist: ropinirole, pramipexole, rotigotine patch — less risk of pulmonary/cardiac fibrosis than ergot-derived (cabergoline, bromocriptine)',
        'Ergot-derived dopamine agonists require pre-treatment ECG, CXR, U&E, ESR — monitoring for retroperitoneal/pleural fibrosis',
        'Side effects of dopamine agonists: impulse control disorder (gambling, hypersexuality, binge eating, compulsive shopping — screen at every review), hallucinations, daytime somnolence, nasal congestion, postural hypotension',
        'MAO-B inhibitors (selegiline, rasagiline): mild motor benefit; may delay need for levodopa; avoid with meperidine and SSRIs (serotonin syndrome risk)',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Established PD — Motor Symptoms Affecting QOL',
      items: [
        'Levodopa + dopa decarboxylase inhibitor (co-careldopa / co-beneldopa): most effective motor treatment; carbidopa prevents peripheral conversion of L-dopa, reducing nausea and allowing smaller doses',
        'Motor complications with long-term levodopa: "wearing off" (end-of-dose deterioration), on-off fluctuations, peak-dose dyskinesia (involuntary writhing movements at peak dose)',
        'If oral route lost (e.g. nil by mouth, swallowing difficulty): use rotigotine patch — do NOT suddenly stop dopaminergic therapy (risk of acute severe dystonia resembling NMS)',
        'Apomorphine SC injection (rescue): for acute severe "off" episodes; requires domperidone pre-treatment',
      ],
    },

    { type: 'heading', level: 2, text: 'Adjunct Treatments for Motor Complications' },

    {
      type: 'list',
      items: [
        'MAO-B inhibitors (selegiline / rasagiline): inhibit dopamine breakdown — smooth out wearing off',
        'COMT inhibitors (entacapone, opicapone): reduce peripheral levodopa breakdown — extend levodopa effect',
        'Dopamine agonists: add to levodopa for on-off fluctuations',
        'Amantadine: reduces dyskinesia — mechanism unclear',
        'Advanced therapies (specialist): continuous apomorphine infusion, intrajejunal levodopa-carbidopa gel (Duodopa), deep brain stimulation (DBS)',
      ],
    },

    { type: 'heading', level: 2, text: 'Non-Motor Symptom Management' },

    {
      type: 'table',
      headers: ['Symptom', 'Management'],
      rows: [
        ['Autonomic — postural hypotension', 'Review and reduce offending medications; increase fluid and salt; compression stockings; midodrine 2.5 mg OD (specialist)'],
        ['Autonomic — drooling', 'Glycopyrronium buccal spray (Sialanar) or sublingual atropine drops — can cause urinary retention'],
        ['Autonomic — constipation', 'High fibre, increased fluid, macrogol laxative; movicol/prucalopride if refractory'],
        ['Sleep — REM sleep behaviour disorder', 'Melatonin 2–4 mg at night; clonazepam 0.25–0.5 mg — specialist referral if severe'],
        ['Sleep — daytime somnolence', 'Reduce dopamine agonists if possible; modafinil (specialist)'],
        ['Fatigue', 'Amantadine or SSRI — limited evidence; exclude depression and sleep disorder first'],
        ['Mood — depression', 'SSRI (avoid high-dose MAO-B with SSRI — serotonin syndrome risk); mirtazapine; referral'],
        ['Psychosis / hallucinations', 'Review dopaminergic medications first; quetiapine 12.5–25 mg at low dose (relatively safer); clozapine (specialist); AVOID haloperidol and other antipsychotics'],
        ['Dementia', 'Rivastigmine (licensed for PD dementia — Exelon patch); avoid antipsychotics and anticholinergics'],
        ['Bladder dysfunction', 'Oxybutynin avoided (anticholinergic burden); solifenacin or mirabegron preferred; exclude UTI first'],
      ],
    },

    { type: 'heading', level: 2, text: 'GP Monitoring — Ongoing Role' },

    {
      type: 'list',
      items: [
        'Annual review with specialist team: motor function, medication compliance, impulse control disorder screen, swallowing',
        'Annual QOF review: falls risk assessment, medication reconciliation, advance care planning',
        'MDT: physiotherapy (gait, balance, LSVT Big programme), OT (home adaptations), SALT (dysphagia, speech), dietitian, mental health',
        'Driving: inform DVLA — must notify; licence reviewed at individual level based on severity',
        'Advance care planning: RESPECT form, DNACPR, preferred place of care — introduce early before capacity lost',
        'Emergency prescribing advice: if patient is admitted and unable to take oral PD medications, hospital teams must administer equivalent on time — use Parkinson\'s UK "Red Flag" hospitalisation guide',
        'Do NOT use metoclopramide or prochlorperazine as antiemetics in PD — use domperidone instead',
      ],
    },

  ],
}

import type { Note } from '../data/notes'

export const palpitations: Note = {
  id: 'palpitations',
  title: 'Palpitations',
  subtitle: 'Cardiac vs benign causes, ECG interpretation, Holter monitoring, WPW, LQTS and DVLA rules',
  tags: ['cardiology'],

  body: 'palpitations arrhythmia ectopic beats SVT supraventricular tachycardia PAF paroxysmal atrial fibrillation flutter WPW Wolff-Parkinson-White long QT LQTS VT ventricular tachycardia cardiomyopathy POTS postural tachycardia ECG Holter 24h tape implantable loop recorder ILR thyroid electrolyte caffeine alcohol anxiety syncope presyncope DVLA driving',

  content: [

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — Refer Same Day / Admit',
      items: [
        'Syncope or presyncope with palpitations — especially exertional',
        'Chest pain or significant breathlessness concurrent with palpitations',
        'Family history of sudden cardiac death <40 years',
        'Known or suspected structural heart disease (cardiomyopathy, valvular disease)',
        'ECG showing: sustained VT, 2nd/3rd degree heart block, WPW, Brugada pattern, QTc >500 ms, or delta waves',
        'HR consistently >150 bpm or <40 bpm on presentation',
      ],
    },

    { type: 'heading', level: 2, text: 'History — Key Questions' },

    {
      type: 'list',
      items: [
        'Onset/offset: sudden start and stop (SVT/WPW) vs gradual (sinus tach, anxiety)',
        'Quality: fast and regular (SVT, flutter, VT), fast and irregular (AF), isolated "skipped" or "missed" beats (ectopics), fluttering (AF), thumping (ectopics/PAF)',
        'Duration and frequency: single episode vs recurrent, how long each episode lasts',
        'Exertional: exercise-induced arrhythmia suggests structural cause or channelopathy (WPW, LQTS, CPVT)',
        'Associated symptoms: chest pain, SOB, dizziness, presyncope, syncope → cardiac',
        'Triggers: caffeine, alcohol, cocaine, salbutamol, thyroid disease, anxiety, menstrual cycle',
        'Family history: sudden cardiac death, inherited arrhythmia syndrome, cardiomyopathy',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes of Palpitations' },

    {
      type: 'table',
      headers: ['Category', 'Causes', 'Clues'],
      rows: [
        ['Benign arrhythmia', 'Ectopic beats (PACs, PVCs) — extremely common', '"Skipped beat" or "missed beat"; settles at rest; reassuring after normal ECG/echo'],
        ['Cardiac — rhythm', 'PAF, atrial flutter, SVT, AVNRT, WPW, non-sustained VT, LQTS', 'Sudden onset/offset, may be exertional, HR very fast; ECG may show delta waves, short PR, prolonged QTc'],
        ['Cardiac — structural', 'Cardiomyopathy — frequent PVCs (>30/h) in older patients may be marker', 'Exertional breathlessness, peripheral oedema, murmur; Echo required'],
        ['Non-cardiac', 'Sinus tachycardia (anaemia, thyroid, dehydration, fever, medications)', 'Gradual onset, not paroxysmal; resolves with treatment of cause'],
        ['Autonomic/other', 'POTS, anxiety, phaeochromocytoma, hypoglycaemia, electrolyte disturbance (↓K, ↓Mg)', 'Postural symptoms, sweating, headache, BP lability'],
      ],
      caption: 'Most palpitations are benign ectopic beats — however, the history, ECG, and risk stratification determine whether further investigation is needed.',
    },

    { type: 'heading', level: 2, text: 'Examination' },

    {
      type: 'list',
      items: [
        'Heart rate and rhythm — is it irregular? Document rate',
        'Blood pressure — bilateral arms (coarctation); postural drop (POTS, dehydration)',
        'Signs of cardiac failure: JVP raised, displaced apex, S3/S4 gallop, bilateral crepitations, peripheral oedema',
        'Murmur — HOCM (ejection systolic, increased with Valsalva), mitral valve prolapse (mid-systolic click)',
        'Thyroid examination — goitre, thyroid bruit, lid lag, tremor, tachycardia',
        'Pallor — anaemia',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'table',
      headers: ['Test', 'What to Look For', 'Notes'],
      rows: [
        ['ECG (12-lead)', 'WPW (delta waves, short PR), LQTS (prolonged QTc >450 ms men / >470 ms women), Brugada (coved ST in V1–V2), LVH, heart block, AF', 'Do for all patients with palpitations — normal ECG in NSR does not exclude paroxysmal arrhythmia'],
        ['Bloods', 'FBC (anaemia), U&E (K, Mg — hypokalaemia causes ectopics and arrhythmias), TFT (hypo/hyperthyroid), glucose, Ca, Mg', 'Routine in all new presentations'],
        ['Echo', 'Structural heart disease, cardiomyopathy, valvular disease', 'Request if ECG abnormal, significant symptoms, signs of structural disease, or frequent PVCs'],
        ['24–72h Holter monitor', 'Documents arrhythmia during symptoms if occurring daily', 'Only useful if palpitations are frequent — will miss infrequent paroxysmal events'],
        ['Event recorder / Zio patch', '7–14 day continuous ambulatory monitoring', 'Better yield than 24h Holter for less frequent symptoms'],
        ['Implantable loop recorder (ILR / Reveal device)', 'Long-term monitoring up to 3 years', 'Reserved for infrequent, severely symptomatic episodes with negative prior monitoring'],
      ],
      caption: 'If ECG is normal and palpitations sound like typical ectopics (isolated, non-exertional, no red flags), reassurance and lifestyle advice are appropriate without further investigation.',
    },

    { type: 'heading', level: 2, text: 'Specific Conditions' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Wolff-Parkinson-White (WPW)',
      items: [
        'Accessory conduction pathway between atria and ventricles bypassing AV node',
        'ECG: short PR interval (<120 ms), delta wave (slurred QRS upstroke), wide QRS',
        'Presents with SVT, AF — risk of rapid conduction via accessory pathway causing haemodynamic compromise',
        'Avoid AV-nodal blocking agents (adenosine, verapamil, digoxin) in AF with WPW — can accelerate accessory pathway conduction',
        'Refer cardiology urgently — ablation is curative',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Long QT Syndrome (LQTS)',
      items: [
        'QTc >450 ms (men) or >470 ms (women) — corrected using Bazett formula: QTc = QT / √RR interval',
        'Risk of torsades de pointes → VF → sudden cardiac death (often exertion-triggered)',
        'Inherited (KCNQ1, KCNH2, SCN5A mutations — types 1–3) or drug-induced',
        'Common QT-prolonging drugs: macrolide antibiotics (clarithromycin, erythromycin), antipsychotics (haloperidol, quetiapine), SSRIs (citalopram ≥40 mg), methadone, hydroxychloroquine, ondansetron, amiodarone — check crediblemeds.org',
        'Refer cardiology urgently — avoid QT-prolonging drugs, consider beta-blockers, possible ICD',
      ],
    },

    { type: 'heading', level: 2, text: 'DVLA Guidance — Driving and Arrhythmias' },

    {
      type: 'table',
      headers: ['Situation', 'Group 1 (Car / Motorcycle)', 'Group 2 (LGV / PCV)'],
      rows: [
        ['Single faint (simple vasovagal)', 'No restriction', 'Stop and inform DVLA; return when cause treated'],
        ['Arrhythmia causing incapacity at the wheel', 'Stop until arrhythmia controlled', 'Stop and inform DVLA'],
        ['Arrhythmia causing symptoms but not at wheel', 'Can usually drive; inform DVLA if persistent unexplained', 'Stop and inform DVLA until controlled for ≥3 months'],
        ['Untreated or ongoing investigation', 'Advise not to drive during investigation if symptoms at wheel or risk of incapacity', 'Stop and inform DVLA until fully investigated and treated'],
      ],
      caption: 'Refer to DVLA "At a Glance" guidance for specific arrhythmias. GPs have a legal duty to advise patients who are unfit to drive — document this clearly in notes.',
    },

    { type: 'heading', level: 2, text: 'Reassurance and Lifestyle' },

    {
      type: 'list',
      items: [
        'Ectopic beats are almost universal — most patients respond well to explanation that the heart is beating normally and the "skip" is a premature beat followed by a stronger compensatory beat',
        'Reduce caffeine (coffee, energy drinks, chocolate), alcohol, and recreational stimulants (cocaine, MDMA)',
        'Salbutamol, pseudoephedrine, decongestants, and some herbal supplements (ginseng, ginkgo) can trigger palpitations',
        'Screen for anxiety and treat if contributing — panic attacks can cause severe awareness of normal or mildly elevated heart rate',
        'Regular aerobic exercise reduces ectopic burden in many patients',
      ],
    },

  ],
}

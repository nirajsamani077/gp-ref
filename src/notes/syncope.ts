import type { Note } from '../data/notes'

export const syncope: Note = {
  id: 'syncope',
  title: 'Syncope & Collapse',
  subtitle: 'Four main causes, TLOC algorithm, postural hypotension, vasovagal, POTS and DVLA driving rules',
  tags: ['cardiology', 'neurology'],

  body: 'syncope collapse transient loss of consciousness TLOC vasovagal reflex postural orthostatic hypotension POTS arrhythmia cardiogenic seizure epilepsy ECG Holter heart block WPW LQTS Brugada sudden cardiac death SCD DVLA driving licence fainting presyncope postural BP standing test prodrome pallor sweating palpitations',

  content: [

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — Consider Cardiac Cause / Same-Day Review',
      items: [
        'Exertional syncope or presyncope — structural heart disease or channelopathy until proven otherwise',
        'Syncope with chest pain, palpitations, or significant breathlessness',
        'Family history of sudden cardiac death <40 years or inherited arrhythmia syndrome',
        'Known or suspected heart failure, cardiomyopathy, or valvular disease',
        'Syncope without prodrome, especially if >65 years',
        'ECG abnormality: long QT, WPW, Brugada, AV block, AF, LVH, LBBB',
        'Sitting or lying syncope (simple vasovagal virtually never occurs at rest)',
        '→ Same-day cardiology assessment if red flags; 999 if ongoing haemodynamic compromise',
      ],
    },

    { type: 'heading', level: 2, text: 'Four Main Causes of Syncope' },

    {
      type: 'table',
      headers: ['Cause', 'Key Features', 'Investigations'],
      rows: [
        ['Cardiogenic (arrhythmia)', 'Sudden onset, no prodrome; exertional; palpitations before event; complete and rapid recovery; any posture', 'ECG, Holter/loop recorder, echo; urgent same-day cardiology'],
        ['Cardiogenic (structural)', 'HOCM (exertional syncope with murmur increasing on Valsalva), valvular stenosis, PE, acute MI', 'ECG, echo, troponin, CXR; same-day assessment'],
        ['Postural / Orthostatic hypotension', 'On standing, after prolonged bed rest, dehydration, medications (antihypertensives, alpha-blockers, diuretics)', 'Lying and standing BP (see below), medication review, hydration assessment'],
        ['Vasovagal / Reflex syncope', 'Classic 3 Ps: Prolonged standing, Provoking trigger (pain, phlebotomy, emotion), Prodrome (nausea, pallor, diaphoresis, visual dimming); never sitting (seated = red flag)', 'Clinical diagnosis; ECG; no further investigation if typical'],
        ['Neurological', 'Seizure (tonic-clonic, tongue biting, incontinence, post-ictal confusion), SOL (headache, focal neurology), SAH (thunderclap headache)', 'CT head, EEG, neurology referral; urgent if new seizure or focal signs'],
      ],
    },

    { type: 'heading', level: 2, text: 'History — Key Distinguishing Questions' },

    {
      type: 'list',
      items: [
        'Before (BDA — Before, During, After): What were you doing? Any warning symptoms (prodrome)? Pallor or sweating noticed by witnesses?',
        'During: Was it witnessed? Tonic-clonic movements? Tongue biting? Incontinence? Duration of unconsciousness?',
        'After: How quickly did you recover? Any confusion (post-ictal — suggests seizure)? Headache? Chest pain?',
        'Exertional? — cardiac cause until proven otherwise',
        'Posture at onset — lying/sitting syncope is not vasovagal',
        'Situational triggers: cough (post-tussive), micturition, defecation, laughter — classic reflex/situational syncope',
        'Medications: antihypertensives, diuretics, alpha-blockers, QT-prolonging drugs',
        'Family history: SCD, channelopathy (LQTS, WPW, Brugada, HOCM)',
      ],
    },

    { type: 'heading', level: 2, text: 'Postural BP Measurement' },

    {
      type: 'callout',
      variant: 'info',
      title: 'How to Measure Postural Hypotension',
      items: [
        'Patient supine for 10 minutes — measure lying BP and HR',
        'Ask patient to stand — check BP and HR at 1 minute and 3 minutes',
        'Significant orthostatic hypotension (OH): SBP drop ≥20 mmHg OR DBP drop ≥10 mmHg on standing',
        'POTS: HR rise ≥30 bpm (or absolute HR ≥120 bpm) on standing without significant BP drop — with symptoms (palpitations, dizziness, presyncope)',
        'If symptomatic with a smaller BP drop, the result is still clinically significant',
        'If BP same on standing but HR unchanged in a patient with autonomic dysfunction: may suggest ANS failure (Parkinson\'s MSA, diabetes)',
      ],
    },

    { type: 'heading', level: 2, text: 'Vasovagal / Reflex Syncope' },

    {
      type: 'list',
      items: [
        'Most common cause of syncope in all ages — mediated by the Bezold-Jarisch reflex: venous pooling → vigorous cardiac contraction → vagal activation → bradycardia and vasodilatation',
        'Classic prodrome: nausea, pallor, sweating, visual dimming, "going hot and cold", epigastric discomfort, then brief loss of consciousness',
        'Typical triggers: prolonged standing, hot environments, pain, blood/needles, emotional distress, post-prandial',
        'Situational syncope: variants triggered by specific situations (cough, micturition, defecation, laughter, swallowing — vagal)',
        'Management: avoid triggers; recognise prodrome and sit/lie down immediately; increase fluid and salt intake; support stockings; head-up tilt training (controversial); if recurrent and disabling → refer cardiology for tilt-table test',
        'Seated or recumbent syncope is NOT vasovagal — investigate for cardiac cause',
      ],
    },

    { type: 'heading', level: 2, text: 'Postural Tachycardia Syndrome (POTS)' },

    {
      type: 'list',
      items: [
        'HR rise ≥30 bpm within 10 minutes of standing (or ≥40 bpm in teenagers), WITHOUT orthostatic hypotension',
        'Symptoms: palpitations, dizziness, presyncope, weakness, fatigue, brain fog — often worse after prolonged standing, in heat, and post-exertion',
        'Diagnosis: formal tilt-table test in cardiology/specialist autonomic clinic',
        'Associated with: post-viral (COVID-19 long-COVID frequently), hypermobile EDS, autoimmune conditions, mast cell activation, deconditioning',
        'Non-pharmacological: increased salt and fluid intake (3–4 L water/day, 10 g salt/day); compression garments; head-of-bed elevation; graded exercise programme (cardiac rehab-style)',
        'Pharmacological (specialist): fludrocortisone, midodrine, beta-blockers (bisoprolol), ivabradine — only under specialist guidance',
      ],
    },

    { type: 'heading', level: 2, text: 'ECG in Syncope — What to Look For' },

    {
      type: 'table',
      headers: ['Finding', 'Significance'],
      rows: [
        ['WPW: short PR, delta wave, wide QRS', 'Accessory pathway — risk of rapid conduction; refer cardiology urgently'],
        ['Long QTc (>450 ms men; >470 ms women)', 'LQTS — risk of torsades de pointes/VF; check medications; refer'],
        ['Brugada pattern: coved ST elevation V1–V2', 'Risk of VF and SCD; may be unmasked by sodium channel blockers; refer'],
        ['AV block (2nd/3rd degree)', 'Risk of complete heart block; may need pacemaker; same-day cardiology'],
        ['LVH with strain pattern', 'Hypertrophic cardiomyopathy (HOCM) or hypertensive heart disease'],
        ['LBBB (new)', 'May suggest structural disease; refer for echo + cardiology'],
        ['AF or flutter', 'Haemodynamic instability during rapid ventricular rate; manage AF'],
        ['Sinus bradycardia <40 bpm / sinus arrest', 'Sick sinus syndrome; may need pacemaker; cardiology referral'],
      ],
      caption: 'A normal resting ECG in a patient with infrequent syncope does not exclude arrhythmia — request ambulatory monitoring (Holter/ILR) if suspicious.',
    },

    { type: 'heading', level: 2, text: 'DVLA Driving Guidance — Syncope (Group 1)' },

    {
      type: 'table',
      headers: ['Scenario', 'Group 1 (Car)', 'Group 2 (LGV/PCV)'],
      rows: [
        ['Typical vasovagal (consistent prodrome, avoidable trigger, never at wheel)', 'Can drive — no need to inform DVLA', 'Stop and inform DVLA; review by specialist'],
        ['Simple faint (single, clear explanation)', 'No restriction', 'Stop and inform; return when cleared'],
        ['Reversible cause identified and treated (avoidable trigger or correctable condition)', 'Can drive if symptomatic when standing only; if ever at wheel, stop 4 weeks, inform', 'Stop and inform; clearance required'],
        ['Cough syncope', 'Stop 6 months after single episode; 12 months if >1; must inform', 'Stop and inform; prolonged restrictions'],
        ['Cardiac syncope', 'Stop and inform; if cause found and treated: can resume after 4 weeks; otherwise revoke 6–12 months', 'Stop and inform; specialist clearance required'],
        ['Unexplained single syncope', 'Stop 6 months, inform DVLA', 'Stop, inform, specialist clearance; >12 months'],
        ['Unexplained recurrent syncope', 'Stop 12 months, inform DVLA', 'Stop, inform, specialist; likely prolonged restriction'],
        ['Seizure suspected', 'Stop 6 months; if ongoing risk: 12 months', 'Stop; up to 5 years if deemed risk of recurrence'],
      ],
      caption: 'Always refer to DVLA "At a Glance Guide to the Current Medical Standards of Fitness to Drive" for the most up-to-date guidance. Group 2 restrictions are significantly stricter. Document driving advice given in clinical notes.',
    },

  ],
}

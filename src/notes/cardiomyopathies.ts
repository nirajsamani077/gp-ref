import type { Note } from '../data/notes'

export const cardiomyopathies: Note = {
  id: 'cardiomyopathies',
  title: 'Cardiomyopathies (incl. HOCM)',
  subtitle: 'Hypertrophic, dilated & restrictive — sudden cardiac death risk, exertional symptoms and referral',
  tags: ['cardiology'],

  body: `cardiomyopathy hypertrophic HOCM HCM dilated DCM restrictive left ventricular outflow tract obstruction LVOTO ejection systolic murmur Valsalva sudden cardiac death SCD ICD septal ablation genetic screening echocardiogram exertional syncope`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Heart Failure/Cardiomyopathy', url: 'https://cks.nice.org.uk/specialities/cardiovascular/' },
        { label: 'Cardiomyopathy UK', url: 'https://www.cardiomyopathy.org/' },
        { label: 'BHF — Cardiomyopathy', url: 'https://www.bhf.org.uk/informationsupport/conditions/cardiomyopathy' },
      ],
    },

    { type: 'heading', level: 2, text: 'Hypertrophic Cardiomyopathy (HCM/HOCM)' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'The Young-Sudden-Death Cause — Refer Urgently',
      items: [
        'The commonest inherited cardiac condition (~1 in 500) and a leading cause of sudden cardiac death in young people/athletes — often asymptomatic until a catastrophic event',
        'Autosomal dominant sarcomeric mutation → left ventricular (especially septal) hypertrophy; septal thickening can obstruct the outflow tract (HOCM)',
        'Suspect with: exertional breathlessness/chest pain/dizziness/syncope, a family history of sudden cardiac death <40, or an incidental murmur/abnormal ECG',
        'Refer ALL suspected cases urgently to cardiology; advise AGAINST strenuous/competitive exercise until specialist assessment',
      ],
    },

    {
      type: 'list',
      items: [
        'Examination: jerky pulse, an ejection systolic murmur that INCREASES with Valsalva/standing (reduced preload) and DECREASES on squatting (increased afterload/preload) ± a mitral regurgitation murmur',
        'ECG is almost always abnormal — LVH, deep septal Q waves, left axis deviation, T-wave/P-wave changes',
        'Investigations (specialist): echocardiography, cardiac MRI, exercise testing, ambulatory ECG, and genetic counselling/cascade screening of first-degree relatives',
        'Management: beta-blockers or verapamil for symptoms (do NOT improve prognosis); avoid nitrates/ACE inhibitors/digoxin (worsen outflow obstruction); an ICD for those at high arrhythmic risk; septal myectomy/alcohol ablation for refractory obstruction',
      ],
    },

    { type: 'heading', level: 2, text: 'The Other Cardiomyopathies' },

    {
      type: 'table',
      headers: ['Type', 'Features', 'Causes'],
      rows: [
        ['Dilated (DCM)', 'Dilated, poorly contracting ventricle → heart failure, arrhythmia, thromboembolism', 'Idiopathic/genetic, alcohol, post-viral (myocarditis), peripartum, chemotherapy (anthracyclines, trastuzumab), haemochromatosis, thyroid'],
        ['Restrictive', 'Stiff, non-compliant ventricle → diastolic heart failure with preserved EF', 'Amyloidosis, sarcoidosis, haemochromatosis, endomyocardial fibrosis'],
        ['Arrhythmogenic (ARVC)', 'Fibrofatty replacement of the RV → ventricular arrhythmia/SCD', 'Genetic; another cause of exercise-related sudden death in the young'],
        ['Takotsubo ("broken heart")', 'Transient apical ballooning mimicking ACS, triggered by acute stress', 'Usually recovers; supportive management'],
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'heart-failure', label: 'Heart Failure', subtitle: 'DCM/restrictive cardiomyopathy present as heart failure' },
        { id: 'valvular-heart-disease', label: 'Valvular Heart Disease', subtitle: 'HOCM murmur mimics aortic stenosis — Valsalva distinguishes' },
        { id: 'palpitations', label: 'Palpitations', subtitle: 'Arrhythmia and SCD risk; family history of SCD' },
        { id: 'syncope', label: 'Syncope & Collapse', subtitle: 'Exertional syncope — a red flag for HOCM' },
      ],
    },

  ],
}

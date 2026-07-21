import type { Note } from '../data/notes'

export const cardiomyopathies: Note = {
  id: 'cardiomyopathies',
  title: 'Cardiomyopathies (incl. HOCM)',
  subtitle: 'Hypertrophic, dilated, restrictive & arrhythmogenic — sudden cardiac death risk, the HOCM murmur and referral',
  tags: ['cardiology'],

  body: `cardiomyopathy hypertrophic HOCM HCM dilated DCM restrictive arrhythmogenic ARVC takotsubo left ventricular outflow tract obstruction LVOTO ejection systolic murmur Valsalva squatting sudden cardiac death SCD ICD septal myectomy alcohol ablation genetic cascade screening echocardiogram cardiac MRI exertional syncope`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'The cardiomyopathies are diseases of the heart muscle itself. For the GP the crucial themes are recognising the patient at risk of sudden cardiac death (particularly hypertrophic cardiomyopathy in the young), interpreting exertional symptoms and murmurs correctly, prescribing safely (some common drugs worsen outflow obstruction), and arranging family screening — most are inherited.',
    },

    { type: 'heading', level: 2, text: 'Hypertrophic Cardiomyopathy (HCM/HOCM)' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'The Young-Sudden-Death Cause — Refer Urgently',
      items: [
        'The commonest inherited cardiac condition (~1 in 500) and a leading cause of sudden cardiac death in young people and athletes — often asymptomatic until a catastrophic event.',
        'Autosomal dominant sarcomeric mutation → left ventricular (especially septal) hypertrophy; septal thickening can obstruct the LV outflow tract (HOCM).',
        'Suspect with: exertional breathlessness/chest pain/dizziness/syncope, a family history of sudden cardiac death <40, or an incidental murmur/abnormal ECG.',
        'Refer ALL suspected cases urgently to cardiology and advise AGAINST strenuous/competitive exercise until assessed.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'The Murmur — Distinguishing HOCM from Aortic Stenosis',
      items: [
        'An ejection systolic murmur that INCREASES with manoeuvres that reduce preload/afterload (Valsalva, standing from squatting) and DECREASES on squatting or handgrip.',
        'This is the OPPOSITE of aortic stenosis (whose murmur falls with Valsalva) — a key bedside discriminator; there is a jerky pulse and often a mitral regurgitation murmur.',
        'The ECG is almost always abnormal (LVH, deep septal Q waves, T-wave changes) — a normal ECG makes significant HCM much less likely.',
      ],
    },
    {
      type: 'list',
      items: [
        'Investigations (specialist): echocardiography, cardiac MRI, exercise testing, ambulatory ECG for arrhythmia risk, and genetic counselling with cascade screening of first-degree relatives.',
        'Symptom management: beta-blocker or verapamil (do NOT improve prognosis). AVOID nitrates, ACE inhibitors/ARBs and digoxin — reducing preload/afterload or increasing contractility WORSENS outflow obstruction.',
        'High arrhythmic risk → implantable cardioverter defibrillator (ICD); refractory obstruction → septal myectomy or alcohol septal ablation.',
      ],
    },

    { type: 'heading', level: 2, text: 'The Other Cardiomyopathies' },
    {
      type: 'table',
      headers: ['Type', 'Features', 'Causes'],
      rows: [
        ['Dilated (DCM)', 'Dilated, poorly contracting ventricle → heart failure, arrhythmia, thromboembolism', 'Idiopathic/genetic, alcohol, post-viral (myocarditis), peripartum, chemotherapy (anthracyclines, trastuzumab), haemochromatosis, thyroid disease'],
        ['Restrictive', 'Stiff, non-compliant ventricle → diastolic heart failure with preserved EF', 'Amyloidosis, sarcoidosis, haemochromatosis, endomyocardial fibrosis'],
        ['Arrhythmogenic (ARVC)', 'Fibrofatty replacement of the RV → ventricular arrhythmia/SCD', 'Genetic; another cause of exercise-related sudden death in the young'],
        ['Takotsubo ("broken heart")', 'Transient apical ballooning mimicking ACS, triggered by acute emotional/physical stress', 'Usually recovers with supportive care'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Peripartum & Alcohol Cardiomyopathy',
      items: [
        'Peripartum cardiomyopathy: new heart failure in late pregnancy or the months after delivery → urgent cardiology; can recur in future pregnancies.',
        'Alcohol is a common reversible cause of DCM — abstinence can improve function; address alcohol use directly.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'Cardiomyopathy UK', url: 'https://www.cardiomyopathy.org/' },
        { label: 'BHF — Cardiomyopathy', url: 'https://www.bhf.org.uk/informationsupport/conditions/cardiomyopathy' },
        { label: 'CRY — Cardiac Risk in the Young', url: 'https://www.c-r-y.org.uk/' },
        { label: 'NICE CKS — Cardiovascular', url: 'https://cks.nice.org.uk/specialities/cardiovascular/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'heart-failure', label: 'Heart Failure', subtitle: 'DCM/restrictive cardiomyopathy present as heart failure' },
        { id: 'valvular-heart-disease', label: 'Valvular Heart Disease', subtitle: 'HOCM murmur mimics aortic stenosis — Valsalva distinguishes' },
        { id: 'palpitations', label: 'Palpitations', subtitle: 'Arrhythmia and SCD risk; family history of SCD' },
        { id: 'syncope', label: 'Syncope & Collapse', subtitle: 'Exertional syncope — a red flag for HOCM' },
        { id: 'alcohol-etoh', label: 'Alcohol', subtitle: 'A reversible cause of dilated cardiomyopathy' },
      ],
    },

  ],
}

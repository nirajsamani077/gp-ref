import type { Note } from '../data/notes'

export const valvularHeartDisease: Note = {
  id: 'valvular-heart-disease',
  title: 'Valvular Heart Disease',
  subtitle: 'Murmurs to echo, aortic stenosis red flags, the four main lesions and endocarditis prophylaxis',
  tags: ['cardiology'],

  body: `valvular heart disease murmur echocardiogram aortic stenosis aortic regurgitation mitral regurgitation mitral stenosis ejection systolic murmur AVR TAVI rheumatic fever endocarditis prophylaxis quiet S2 slow rising pulse`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG208 — Heart Valve Disease', url: 'https://www.nice.org.uk/guidance/ng208' },
        { label: 'NICE CKS — Heart Murmurs', url: 'https://cks.nice.org.uk/specialities/cardiovascular/' },
        { label: 'BHF — Heart Valve Disease', url: 'https://www.bhf.org.uk/informationsupport/conditions/heart-valve-disease' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Refer Murmurs for Echocardiography',
      items: [
        'Refer any newly identified heart murmur for echocardiography and cardiology assessment — particularly with symptoms (breathlessness, chest pain, syncope), an abnormal ECG, or a family history',
        'Echo defines the valve lesion, its severity, and ventricular function, and guides surveillance/surgery timing',
        'Symptom onset in significant valve disease (especially aortic stenosis) is an important trigger for intervention',
      ],
    },

    { type: 'heading', level: 2, text: 'Aortic Stenosis (AS)' },

    {
      type: 'list',
      items: [
        'Common, usually degenerative calcification in older patients (or a bicuspid valve in younger patients; rheumatic in developing countries)',
        'Ejection systolic murmur at the right 2nd intercostal space, louder on expiration, radiating to the carotids; important signs of severity — a quiet/absent S2 and a slow-rising, low-volume ("plateau") pulse',
        'The symptom triad of angina, syncope/exertional dizziness, and breathlessness indicates severe disease and a poor prognosis without intervention → valve replacement (surgical AVR, or TAVI if high surgical risk)',
        'Prescribing cautions in severe AS: avoid ACE inhibitors and nitrates (preload reduction with a fixed obstruction can cause profound hypotension/collapse); statins for coexistent IHD; aspirin long-term after TAVI',
      ],
    },

    { type: 'heading', level: 2, text: 'The Other Three Lesions' },

    {
      type: 'table',
      headers: ['Lesion', 'Murmur', 'Causes & notes'],
      rows: [
        ['Aortic regurgitation (AR)', 'Early diastolic murmur at the left sternal edge (sitting forward, expiration); collapsing pulse, wide pulse pressure', 'Acute (endocarditis, aortic dissection) or chronic (bicuspid valve, rheumatic, aortic root dilatation); causes LV volume overload → heart failure; surgery (AVR)'],
        ['Mitral regurgitation (MR)', 'Pan-systolic murmur at the apex radiating to the axilla', 'Degenerative/prolapse, ischaemic (functional), endocarditis, rheumatic; LV volume overload; surgical repair/replacement or transcatheter clip'],
        ['Mitral stenosis (MS)', 'Mid-diastolic rumbling murmur at the apex, loud S1, malar flush', 'Almost always rheumatic; associated with AF; treat symptoms (rate control, diuretics), valvotomy/replacement'],
      ],
    },

    { type: 'heading', level: 2, text: 'Rheumatic Fever & Endocarditis Prophylaxis' },

    {
      type: 'list',
      items: [
        'Rheumatic fever (rare in the UK): post-streptococcal "carditis and arthritis", causing predominantly left-sided valve disease (mitral stenosis most characteristically); other features include Sydenham\'s chorea, erythema marginatum and subcutaneous nodules (Jones criteria). Refer cardiology; long-term penicillin V prevents recurrence',
        'Endocarditis antibiotic prophylaxis is NOT routinely recommended for dental or other procedures in people with valve disease/prosthetic valves (no evidence of benefit) — instead emphasise excellent oral hygiene and prompt treatment of infection',
        'Patients at risk should be aware of endocarditis symptoms (persistent fever, malaise) and seek assessment promptly',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'heart-failure', label: 'Heart Failure', subtitle: 'Valve disease as a cause; volume overload management' },
        { id: 'atrialFibrillation', label: 'Atrial Fibrillation', subtitle: 'Common with mitral valve disease; anticoagulation' },
        { id: 'syncope', label: 'Syncope & Collapse', subtitle: 'Exertional syncope — a red flag for severe aortic stenosis' },
        { id: 'angina-ihd', label: 'Angina & IHD', subtitle: 'Angina as an aortic stenosis symptom; coexisting IHD' },
      ],
    },

  ],
}

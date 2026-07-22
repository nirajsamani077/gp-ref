import type { Note } from '../data/notes'

export const infectiveEndocarditis: Note = {
  id: 'infective-endocarditis',
  title: 'Infective Endocarditis (IE)',
  subtitle: 'When to suspect, Duke criteria, blood cultures/echo and who needs prophylaxis',
  tags: ['cardiology', 'infection'],

  body: `infective endocarditis IE fever new murmur splinter haemorrhages Janeway lesions Osler nodes Roth spots blood cultures echocardiogram transoesophageal Duke criteria IVDU prosthetic valve vegetations septic emboli antibiotic prophylaxis dental`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG64 — Endocarditis Prophylaxis', url: 'https://www.nice.org.uk/guidance/cg64' },
        { label: 'NICE CKS — Infective Endocarditis', url: 'https://cks.nice.org.uk/specialities/cardiovascular/' },
        { label: 'BSAC — Endocarditis Guidelines', url: 'https://bsac.org.uk/guidelines/' },
      ],
    },

    {
      type: 'para',
      text: 'Infective endocarditis is uncommon but easy to miss and carries a high mortality, so the primary-care skill is pattern recognition — fever plus a new/changed murmur, or unexplained persistent fever with a predisposing heart lesion or IV drug use — and urgent referral before starting antibiotics, which would compromise blood cultures. The UK prophylaxis position is also a common source of confusion: routine antibiotic cover for dental procedures is NOT recommended.',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Suspect and Refer — Do Not Miss',
      items: [
        'Think IE in: fever + a new or changed heart murmur, especially with a prosthetic valve, previous IE, structural/congenital heart disease, or intravenous drug use (IVDU — often right-sided/tricuspid)',
        'Also consider in unexplained persistent fever, embolic events (stroke, splenic/renal infarcts), or new heart failure',
        'Peripheral signs (now uncommon): splinter haemorrhages, Janeway lesions (painless palmar/plantar macules), Osler nodes (painful finger/toe pulp nodules), Roth spots (retinal), petechiae, splenomegaly, microscopic haematuria',
        'If suspected → refer urgently for admission; do NOT start antibiotics in the community before blood cultures (unless the patient is septic and it cannot wait) as it compromises diagnosis',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis — Modified Duke Criteria' },

    {
      type: 'table',
      headers: ['Category', 'Features'],
      rows: [
        ['Major', 'Typical organism from 2 separate positive blood cultures (e.g. Strep viridans, Staph aureus, enterococci); echocardiographic evidence (vegetation, abscess, new valve regurgitation)'],
        ['Minor', 'Predisposition (heart condition or IVDU); fever ≥38°C; vascular phenomena (septic emboli, Janeway lesions, mycotic aneurysm); immunological phenomena (Osler nodes, Roth spots, glomerulonephritis); microbiological evidence not meeting major'],
      ],
      caption: 'Definite IE = 2 major, or 1 major + 3 minor, or 5 minor. Investigation is hospital-led: at least 3 sets of blood cultures from different sites before antibiotics, plus echocardiography (transthoracic first; transoesophageal is more sensitive).',
    },

    { type: 'heading', level: 2, text: 'Management (Hospital)' },

    {
      type: 'list',
      items: [
        'Prolonged IV antibiotics (typically 4–6 weeks), guided by the organism and whether the valve is native or prosthetic; managed by an endocarditis MDT',
        'Surgery for: heart failure from valve destruction, uncontrolled infection/abscess, large mobile vegetations with embolic risk, or prosthetic valve involvement',
        'Monitor for complications: heart failure, embolic stroke, mycotic aneurysm, and immune-complex glomerulonephritis',
      ],
    },

    { type: 'heading', level: 2, text: 'Antibiotic Prophylaxis — the UK Position' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Not Routinely Recommended',
      items: [
        'NICE does NOT recommend routine antibiotic prophylaxis against IE for people undergoing dental or other procedures — even those with prosthetic valves or previous IE (no evidence it prevents IE, and antibiotic harms)',
        'Emphasise EXCELLENT oral hygiene and prompt treatment of infection in at-risk patients',
        'Prophylaxis may be considered on a case-by-case basis by the cardiology/dental team for the highest-risk individuals (e.g. previous IE, prosthetic valve) undergoing invasive dental procedures — a specialist decision, not routine',
        'Counsel at-risk patients to seek assessment for persistent unexplained fever/malaise, and to avoid unregulated skin piercing/tattoos',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'valvular-heart-disease', label: 'Valvular Heart Disease', subtitle: 'Predisposing valve lesions; murmurs and echo' },
        { id: 'substance-misuse', label: 'Substance Use & Misuse', subtitle: 'IVDU — right-sided IE risk and harm reduction' },
        { id: 'notifiable-diseases', label: 'Notifiable Diseases', subtitle: 'Public health context for serious infection' },
      ],
    },

  ],
}

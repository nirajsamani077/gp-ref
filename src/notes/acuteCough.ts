import type { Note } from '../data/notes'

export const acuteCough: Note = {
  id: 'acuteCough',
  title: 'Acute Cough — URTI & LRTI',
  subtitle: 'Assessment, antibiotic stewardship, back-up prescribing, and self-care',
  tags: ['symptoms', 'Respiratory', 'Infection'],

  body: 'acute cough URTI upper respiratory tract infection LRTI lower respiratory tract infection bronchitis pneumonia CRB65 antibiotic amoxicillin doxycycline clarithromycin back-up prescription delayed antibiotic saline nasal spray NICE NG120 antimicrobial stewardship self-care children paediatric fever sore throat colds',

  content: [
    {
      type: 'callout',
      variant: 'warning',
      title: 'Red flags — consider urgent assessment / admission',
      items: [
        'CRB65 score ≥2 or any patient who appears seriously unwell → hospital assessment / emergency admission',
        'Haemoptysis (not just blood-streaked sputum in simple URTI) → urgent CXR / 2WW referral',
        'Stridor or severe breathlessness (accessory muscle use, SpO₂ <92%) → 999',
        'Immunocompromised patient with new cough + fever → low threshold for same-day assessment and CXR',
        'Children: tachypnoea for age, grunting, chest recession, cyanosis, unable to drink → 999 / same-day A&E',
        'Cough persisting >3 weeks in an adult without clear cause → investigate (see Chronic Cough note)',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'URTI vs LRTI — Key Distinction',
    },
    {
      type: 'table',
      headers: ['Feature', 'URTI', 'LRTI / Pneumonia'],
      rows: [
        ['Definition', 'Infection above larynx: nose, sinuses, pharynx, larynx', 'Infection below larynx: bronchi, bronchioles, alveoli'],
        ['Symptoms', 'Runny nose, sore throat, mild cough, hoarseness', 'Productive cough, pleuritic chest pain, dyspnoea, wheeze'],
        ['Signs', 'Normal or mildly raised CRP, afebrile or low-grade fever', 'Tachycardia, tachypnoea, dullness to percussion, crepitations'],
        ['CXR', 'Not indicated routinely', 'Consolidation if pneumonia; consider if CRB65 ≥1 or uncertain'],
        ['Antibiotics', 'Usually not indicated — viral in vast majority', 'Consider if CRB65 ≥1, CRP >100, or systemically unwell'],
        ['Duration', 'Cough typically lasts 2–3 weeks (up to 4 weeks normal)', 'Treat pneumonia 5–7 days; most LRTI symptoms resolve in 3 weeks'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'CRB65 Score — Severity Assessment for LRTI',
    },
    {
      type: 'table',
      headers: ['Criterion', 'Score'],
      rows: [
        ['Confusion (new, AMT <8 or any acute confusion)', '1'],
        ['Respiratory rate ≥30/min', '1'],
        ['Blood pressure: systolic <90 or diastolic ≤60 mmHg', '1'],
        ['Age ≥65 years', '1'],
      ],
      caption: 'CRB65: used in primary care (no blood tests required). CURB65 (with urea) is the hospital equivalent.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'CRB65 — Management by score',
      items: [
        'Score 0: low risk — self-care; antibiotic if CRP >100 or clinically deteriorating',
        'Score 1–2: intermediate risk — same-day assessment; consider same-day CXR; antibiotic likely appropriate',
        'Score 3–4: high risk — arrange emergency hospital admission',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'NICE Antimicrobial Guidance (NG120)',
    },
    {
      type: 'image',
      src: '/images/acute-cough-nice.png',
      alt: 'NICE NG120 acute cough antimicrobial guidance summary',
      caption: 'NICE NG120 — summary of antibiotic prescribing decisions for acute cough / LRTI in primary care. CRP is the key guide when clinical severity is intermediate.',
    },
    {
      type: 'table',
      headers: ['CRP result', 'Action'],
      rows: [
        ['<20 mg/L', 'Do not offer antibiotic — reassure, self-care advice'],
        ['20–100 mg/L', 'Consider back-up (delayed) antibiotic — collect only if not improving after 48–72 h'],
        ['>100 mg/L', 'Offer immediate antibiotic'],
      ],
      caption: 'CRP-guided prescribing for acute cough (adapted from NICE NG120). Only use CRP if clinical assessment is genuinely uncertain — do not routinely test all patients.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Antibiotic Choices',
    },
    {
      type: 'image',
      src: '/images/acute-cough-abx.png',
      alt: 'Antibiotic choices for acute cough LRTI',
      caption: 'Antibiotic options for LRTI / acute cough — first-line and alternatives. Doxycycline preferred over amoxicillin in many local formularies due to broader atypical cover.',
    },
    {
      type: 'table',
      headers: ['Antibiotic', 'Dose', 'Duration', 'Notes'],
      rows: [
        ['Amoxicillin', '500 mg TDS', '5 days', 'First-line for pneumonia (CRB65 ≥1). Not for simple LRTI/bronchitis in previously well adults'],
        ['Doxycycline', '200 mg stat then 100 mg OD', '5 days', 'Alternative first-line; covers atypicals (Mycoplasma). Preferred in penicillin allergy or where atypical cover needed. Avoid in pregnancy'],
        ['Clarithromycin', '250–500 mg BD', '5 days', 'For penicillin allergy or atypical cover; more GI side effects. Avoid in liver disease or QTc prolongation'],
        ['Erythromycin', '250–500 mg QDS', '5 days', 'Use in pregnancy when macrolide required (doxycycline contraindicated). More GI side effects than clarithromycin'],
        ['Co-amoxiclav', '625 mg TDS', '5 days', 'Reserve for specific indications (aspiration, animal bite); avoid for routine LRTI — broad spectrum, resistance risk'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Back-up (Delayed) Antibiotic Prescribing',
    },
    {
      type: 'image',
      src: '/images/back-up-antibiotics.jpg',
      alt: 'Back-up antibiotic prescription explanation for patients',
      caption: 'Back-up antibiotic prescription — explain to patients: fill only if symptoms worsen or do not start to improve after 48–72 hours. Reduces antibiotic use without increasing complications.',
    },
    {
      type: 'list',
      items: [
        'Offer a back-up prescription when CRP 20–100 mg/L, or when clinical severity is borderline but patient is anxious or has difficulty re-attending',
        'Tell the patient: "This is a prescription for antibiotics — only take them if you feel significantly worse, develop a high fever, or your symptoms have not started to improve after 2–3 days"',
        'Evidence: back-up prescribing reduces antibiotic use by ~40% compared with immediate prescribing, with equivalent patient outcomes',
        'Provide the TARGET Respiratory tract infection leaflet at the same time (explains expected duration, when to seek help)',
        'Post-dated or collect-from-reception approaches are both acceptable — choose what works for your practice',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Saline Nasal Spray — Emerging Evidence',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Hypertonic saline nasal irrigation — Elvis and SANI trial evidence',
      items: [
        'ELVIS trial (2021, Edinburgh): adults with confirmed colds randomised to hypertonic saline nasal irrigation (2.7% NaCl) vs usual care — significant reduction in illness duration (by ~2 days) and transmission to household contacts',
        'Proposed mechanism: saline washes the nasal mucosa of virus particles, reduces viral shedding, and may modulate the inflammatory response',
        'SANI trial (2023, children aged 6 months – 12 years): isotonic vs hypertonic saline nasal drops/spray — hypertonic significantly reduced duration and severity of URTI symptoms',
        'Can be recommended as OTC self-care: NeilMed Sinus Rinse, Simply Saline, or any isotonic/hypertonic nasal saline spray',
        'Safe in all age groups including infants (use saline nasal drops); no significant adverse effects',
        'Especially useful: reduces the nasal congestion that perpetuates the cough via post-nasal drip',
        'Cost-effective alternative to antibiotic courses — worth recommending to all patients with URTI/LRTI before considering antibiotics',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Self-Care Advice',
    },
    {
      type: 'list',
      items: [
        'Reassure: most URTI/LRTI are viral — antibiotics will not help and cause side effects and resistance',
        'Expected duration: cough after URTI typically lasts 2–3 weeks; after LRTI up to 4 weeks — warn patients to set realistic expectations',
        'Rest and fluids: increased fluid intake helps thin secretions; rest supports immune recovery',
        'Honey and lemon: evidence supports honey (1–2 tsp at bedtime) as effective as OTC cough suppressants — can recommend to adults and children >1 year (not infants)',
        'Paracetamol or ibuprofen: for fever, myalgia, sore throat — can be alternated if needed',
        'Saline nasal spray (see above): particularly helpful for congestion-related cough',
        'Steam inhalation: no strong evidence but widely used and safe — may offer symptomatic relief',
        'Avoid: compound cough medicines with antihistamines in young children; no benefit and can cause harm',
        'Smoking cessation: if relevant — smoking prolongs RTI duration and increases severity',
        'Safety netting: seek medical advice if fever >38.5°C persists >3 days, breathlessness worsens, chest pain, or cough persists >3 weeks without improvement',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Acute Cough in Children',
    },
    {
      type: 'table',
      headers: ['Age group', 'Threshold for concern', 'Key diagnoses to consider', 'Notes'],
      rows: [
        ['<3 months', 'Any cough / fever → same-day assessment', 'Bronchiolitis (RSV), whooping cough, pneumonia', 'Low threshold for admission; no OTC cough medicines'],
        ['3 months – 2 years', 'Tachypnoea (>50/min), SpO₂ <95%, poor feeding', 'Bronchiolitis, viral LRTI, croup (barking cough, stridor)', 'Croup: assess with Westley score; dexamethasone 0.15 mg/kg single dose if moderate'],
        ['2–5 years', 'Wheeze + cough → consider asthma/viral wheeze; fever + cough → LRTI', 'Viral LRTI, asthma, foreign body inhalation', 'Sudden onset of cough with no other symptoms → consider FB inhalation'],
        ['5–12 years', 'As adults — use CRB65 principles adapted for age', 'Mycoplasma pneumonia (common in school-age), asthma, pertussis', 'Mycoplasma: treat with doxycycline (>12y) or clarithromycin (<12y)'],
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Whooping cough (pertussis) — remember',
      items: [
        'Notifiable disease — notify local HPT if suspected',
        'Characteristic: paroxysmal cough followed by inspiratory whoop, post-tussive vomiting, apnoea in infants',
        'PCR swab (nasopharyngeal) within 3 weeks of cough onset is most sensitive',
        'Treatment: azithromycin or clarithromycin within 3 weeks of onset reduces infectivity (may not alter clinical course)',
        'Contact prophylaxis: offer antibiotics to unvaccinated / incompletely vaccinated close contacts (including household)',
        'School exclusion: until 48 hours after starting antibiotics, or 21 days from symptom onset if untreated',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG120 — Antimicrobial prescribing for LRTI', url: 'https://www.nice.org.uk/guidance/ng120' },
        { label: 'NICE Antimicrobial Summaries (PDF)', url: '/pdfs/antimicrobial-abx-nice-summaries.pdf' },
        { label: 'Patient Info Cough Leaflet (PDF)', url: '/pdfs/cough-info.pdf' },
        { label: 'TARGET Respiratory Leaflets', url: 'https://www.rcgp.org.uk/clinical-and-research/resources/toolkits/TARGET-antibiotics-toolkit' },
        { label: 'NICE CKS — Acute Cough', url: 'https://cks.nice.org.uk/topics/cough/' },
        { label: 'Chronic Cough note', url: '#chronicCough' },
      ],
    },
  ],
}

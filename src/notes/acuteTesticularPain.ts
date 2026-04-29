import type { Note } from '../data/notes'

export const acuteTesticularPain: Note = {
  id: 'acute-testicular-pain',
  title: 'Acute Testicular Pain',
  subtitle: 'Torsion vs epididymo-orchitis — diagnosis, antibiotics, and safety-netting',
  tags: ['symptoms', 'urology'],

  body: 'acute testicular pain scrotum scrotal swelling torsion epididymo-orchitis epididymitis orchitis STI UTI chlamydia gonorrhoea Neisseria doxycycline ceftriaxone ofloxacin levofloxacin ciprofloxacin cremasteric reflex Prehn sign bell clapper deformity horizontal lie high riding testis USS ultrasound NAAT first pass urine GUM sexual health hydrocele epididymal cyst mumps distinguish differential diagnosis urgent emergency refer',

  content: [
    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer immediately to ED if any of:',
      items: [
        'Sudden-onset severe unilateral testicular pain — torsion until proven otherwise (surgical emergency, 6-hour window)',
        'Absent cremasteric reflex — highly sensitive for torsion',
        'Age <20 years with acute pain — torsion is the most common cause in this age group',
        'Systemically unwell: fever, vomiting, haemodynamic compromise',
        'Mumps exposure: swollen testis + viral prodrome + no vaccine history — bilateral in 15–30%',
        'Do NOT wait for imaging to refer if torsion suspected — call ED directly',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Torsion vs Epididymo-Orchitis — Distinguishing Features',
    },
    {
      type: 'table',
      headers: ['Feature', 'Testicular Torsion', 'Epididymo-Orchitis (EO)'],
      rows: [
        ['Onset', 'Sudden, severe', 'Gradual, hours–days'],
        ['Age', 'Peak 12–18 yrs (can occur any age)', 'Any age; STI more likely <35 yrs'],
        ['Pain character', 'Severe, constant, may radiate to abdomen/groin', 'Progressive scrotal ache, milder initially'],
        ['Fever / discharge', 'Absent', 'Often present (fever, urethral discharge, dysuria)'],
        ['Testis position', 'High-riding, horizontal lie ("bell clapper")', 'Normal position; epididymis swollen posteriorly'],
        ['Cremasteric reflex', 'Absent — most sensitive sign', 'Usually present'],
        ['Prehn\'s sign', 'Negative (elevation does NOT relieve pain)', 'Positive (elevation relieves pain)'],
        ['Reactive hydrocele', 'Can occur', 'Common'],
        ['Urine dip/NAAT', 'Usually normal', 'May show leucocytes, nitrites, positive NAAT'],
        ['Colour Doppler USS', 'Absent/reduced flow', 'Increased flow (hyperaemia)'],
      ],
      caption: 'Cremasteric reflex: stroke inner thigh → normal testis retracts upward. Absent in torsion. Prehn\'s sign: lift testis — pain relief suggests EO (not torsion).',
    },

    {
      type: 'image',
      src: '/images/bell-clapper-torsion.jpg',
      alt: 'Bell clapper deformity and testicular torsion of spermatic cord diagram',
      caption: 'Bell clapper deformity: high insertion of tunica vaginalis allows testis to rotate freely within the scrotum. Torsion of the spermatic cord cuts off blood supply — surgical emergency within 6 hours.',
          sensitive: true,
},

    {
      type: 'image',
      src: '/images/cremasteric-reflex.jpg',
      alt: 'Cremasteric reflex — stroke inner thigh causes ipsilateral testis to elevate',
      caption: 'Cremasteric reflex: stroking the inner thigh (1) causes reflex elevation of the ipsilateral testis (2). Absent in testicular torsion — a key clinical sign.',
          sensitive: true,
},

    {
      type: 'heading',
      level: 2,
      text: 'Scrotal Anatomy & Differential Diagnosis',
    },
    {
      type: 'image',
      src: '/images/scrotum-anatomy.jpg',
      alt: 'Scrotal anatomy showing epididymis, testis, vas deferens and surrounding structures',
      caption: 'Normal scrotal anatomy. Epididymis lies posterolaterally. Epididymitis: tender swelling at the back/top of testicle. Orchitis: entire testis involved. Hydrocele: anterior, transilluminates, you can get above it. Epididymal cyst: posterior, separate from testis.',
          sensitive: true,
},
    {
      type: 'table',
      headers: ['Condition', 'Features', 'Action'],
      rows: [
        ['Testicular torsion', 'Sudden pain, absent cremasteric reflex, high-riding testis, no fever', 'ED immediately — surgical exploration within 6 hours'],
        ['Epididymo-orchitis', 'Gradual pain, fever, discharge, positive NAAT/dip, epididymis tender', 'Antibiotics — see below. USS if uncertain'],
        ['Epididymal cyst', 'Painless lump posterior/separate to testis, transilluminates', 'Reassure. Refer if large or symptomatic'],
        ['Hydrocele', 'Anterior to testis, transilluminates, can get above it (unlike hernia)', 'Reassure if primary. USS to exclude underlying cause'],
        ['Inguinal hernia', 'Cannot get above swelling, descends into scrotum, reducible', 'Surgical referral'],
        ['Varicocele', '"Bag of worms" above testis, left > right, worse standing', 'Refer urology/fertility if symptomatic or infertility concern'],
        ['Mumps orchitis', 'Parotitis + fever preceding testicular pain, bilateral 15–30%', 'Supportive. Check vaccination history. Urgent urology'],
        ['Testicular tumour', 'Painless hard lump within testis, may be incidental', '2WW urology referral. Urgent USS'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Epididymo-Orchitis: Assessment & Investigations',
    },
    {
      type: 'list',
      items: [
        'History: age, sexual history (new partners, condom use, previous STIs, urethral discharge), previous catheterisation, UTI, or urological procedures',
        'Examination: urethral discharge, scrotal redness, epididymis tenderness (posterolateral), reactive hydrocele, cremasteric reflex present',
        'Urine: dipstick (positive nitrite PPV 96% for UTI; do NOT dip urine in men >65 — high false positive rate) + MSU for MC&S',
        'NAAT: first-pass urine for Chlamydia trachomatis + Neisseria gonorrhoeae (even if not referring to GUM)',
        'If urethral discharge: urethral swab for microscopy and culture (gonorrhoea)',
        'Consider USS if diagnosis uncertain, or if no improvement at 48–72 hours (exclude abscess, torsion, tumour)',
        'STI risk higher: age <35, new/multiple partners, no barrier contraception, previous STI, urethral discharge present',
        'UTI/enteric risk higher: age >35, previous urological procedure or catheter, no urethral discharge, low sexual risk',
      ],
    },

    {
      type: 'image',
      src: '/images/epididymoorchitis-flowchart.jpg',
      alt: 'Epididymo-orchitis management flowchart — STI vs UTI pathway with antibiotic choices',
      caption: 'Epididymo-orchitis management pathway: exclude torsion first, then stratify by STI vs enteric/UTI risk. Specimens before antibiotics where possible.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Epididymo-Orchitis: Antibiotic Treatment',
    },
    {
      type: 'table',
      headers: ['Scenario', 'First-line', 'Alternative / Notes'],
      rows: [
        ['STI likely (age <35, high sexual risk, urethral discharge)', 'Ceftriaxone 1g IM single dose (in 1% lidocaine) + Doxycycline 100mg BD for 10–14 days', 'If Chlamydia only (no gonorrhoea concern): Doxycycline 100mg BD 10–14d OR Ofloxacin 200mg BD 14d. Refer to GUM/Umbrella for NAATs, partner notification, contact tracing'],
        ['Gonococcal suspected (discharge + high risk)', 'Ceftriaxone 1g IM stat + Doxycycline 100mg BD 10–14d + Ofloxacin 200mg BD 14d', 'Culture before treatment. All gonorrhoea contacts need tracing. No sex until patient and partner(s) treated and reviewed'],
        ['UTI/enteric likely (age >35, low sexual risk, previous urology)', 'Ofloxacin 200mg BD 14d OR Levofloxacin 500mg OD 10d', 'Counsel: rare risk of irreversible quinolone tendinopathy — stop if tendon pain develops. Co-amoxiclav if quinolones contraindicated. Review culture result'],
        ['Uncertain (mixed risk — cover both)', 'Ceftriaxone 1g IM stat + Ofloxacin 200mg BD 14d', 'Covers enteric organisms AND gonorrhoea/chlamydia'],
        ['Child', 'Likely UTI — check urine dip/MSU. Seek paediatric/paediatric urology advice re antibiotics and USS', 'Do not assume STI in child'],
      ],
      caption: 'Always take specimens before starting antibiotics where possible. Refer high-risk STI patients to GUM (Umbrella/local sexual health) for NAAT testing, partner notification, and follow-up.',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Safety-netting',
      items: [
        'If no improvement at 3 days → return for review; reconsider diagnosis (USS to exclude abscess or torsion)',
        'Review at 2 weeks — most should have resolved. If not: check compliance, culture sensitivity, arrange USS, consider urology referral',
        'All patients with gonorrhoea or chlamydia → refer to GUM for partner notification and contact tracing',
        'No sexual intercourse until patient AND partner(s) have been treated and reviewed',
        'Scrotal support and analgesia (ibuprofen/paracetamol) for symptom relief',
        'If reactive hydrocele or persistent mass on review → USS to exclude tumour',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Epididymoorchitis Management PDF (local)', url: '/pdfs/epididymoorchitis.pdf' },
        { label: 'BASHH Epididymo-orchitis Guideline', url: 'https://www.bashh.org/guidelines' },
        { label: 'Umbrella Sexual Health (Birmingham)', url: 'https://www.umbrellahealth.co.uk' },
      ],
    },
  ],
}

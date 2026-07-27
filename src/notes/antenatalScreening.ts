import type { Note } from '../data/notes'

export const antenatalScreening: Note = {
  id: 'antenatal-screening',
  title: 'Antenatal & Newborn Screening',
  subtitle: 'The UK screening programmes — infectious disease, fetal anomaly, haemoglobinopathy, NIPE and the blood spot',
  tags: ['obstetrics'],

  body: `antenatal screening booking bloods infectious disease HIV hepatitis B syphilis fetal anomaly combined test NIPT Down's Edwards Patau 20-week anomaly scan sickle thalassaemia haemoglobinopathy NIPE newborn examination blood spot heel prick hearing screening informed choice`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'The UK offers a defined set of antenatal and newborn screening programmes, each of which is a CHOICE that women can accept or decline after informed, non-directive counselling. The GP role is to support that decision-making, ensure booking happens early enough for time-critical tests, and act on results and their downstream implications. Screening tests estimate risk or detect carriers — they are not diagnostic on their own.',
    },

    { type: 'heading', level: 2, text: 'Antenatal Programmes' },
    {
      type: 'table',
      headers: ['Programme', 'Timing', 'What it covers'],
      rows: [
        ['Infectious diseases in pregnancy', 'Booking (~10 wks)', 'HIV, hepatitis B, and syphilis — all treatable to protect mother and baby (e.g. hep B vaccination + immunoglobulin for the newborn; ART for HIV to prevent vertical transmission)'],
        ['Sickle cell & thalassaemia', 'By ~10 wks (ideally pre-10 for timely choices)', 'Haemoglobinopathy carrier screening; test the partner if the mother is a carrier'],
        ['Down\'s, Edwards\' & Patau\'s syndromes', 'Combined test 11–14 wks (or quadruple 14–20 wks)', 'Risk-based screen; higher-chance results → NIPT (contingent) then diagnostic CVS/amniocentesis if wanted'],
        ['Fetal anomaly (20-week scan)', '18–20+6 wks', 'Detailed ultrasound for 11 specific physical conditions (e.g. spina bifida, cardiac, renal, limb, abdominal wall)'],
      ],
    },
    {
      type: 'list',
      items: [
        'Blood-group and antibody testing at booking identifies rhesus-negative women (see Rhesus Disease & Anti-D) and red-cell antibodies.',
        'Screening for gestational diabetes (OGTT) is offered to at-risk women at ~24–28 weeks.',
        'Screening is NOT offered for some conditions (e.g. routine CMV/toxoplasma serology) — advise prevention instead.',
      ],
    },

    { type: 'heading', level: 2, text: 'Newborn Programmes' },
    {
      type: 'table',
      headers: ['Programme', 'Timing', 'Detail'],
      rows: [
        ['Newborn & Infant Physical Examination (NIPE)', 'Within 72h, and again at 6–8 weeks', 'Screens 4 areas — eyes (red reflex/cataract), heart (congenital heart disease), hips (DDH), and testes (undescended)'],
        ['Newborn blood spot ("heel prick")', 'Day 5', 'Screens for 9 conditions: sickle cell, cystic fibrosis, congenital hypothyroidism, and 6 inherited metabolic diseases (PKU, MCADD, MSUD, IVA, GA1, HCU)'],
        ['Newborn hearing screening', 'First weeks', 'Otoacoustic emissions ± automated ABR to detect congenital hearing loss'],
      ],
      caption: 'The 6–8 week GP baby check repeats key NIPE elements — a key opportunity to catch a missed cataract, cardiac murmur, DDH or undescended testis.',
    },

    { type: 'heading', level: 2, text: 'Principles' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Informed Choice',
      items: [
        'Every programme is optional — provide balanced information on what is screened for, the meaning of results, and the fact that a "screen positive" needs a diagnostic test to confirm.',
        'A declined test should be documented, and the offer can be revisited.',
        'Ensure clear pathways for communicating and acting on results, including onward referral (fetal medicine, genetics, specialist teams).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'GOV.UK — NHS Population Screening (Pregnancy & Newborn)', url: 'https://www.gov.uk/topic/population-screening-programmes' },
        { label: 'NHS — Screening in Pregnancy', url: 'https://www.nhs.uk/pregnancy/your-pregnancy-care/screening-tests/' },
        { label: 'GOV.UK — Fetal Anomaly Screening (FASP)', url: 'https://www.gov.uk/topic/population-screening-programmes/fetal-anomaly' },
        { label: 'GOV.UK — Newborn Blood Spot Screening', url: 'https://www.gov.uk/topic/population-screening-programmes/newborn-blood-spot' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'downs-syndrome', label: 'Down\'s Syndrome', subtitle: 'The trisomy screening pathway in detail' },
        { id: 'rhesus-anti-d', label: 'Rhesus Disease & Anti-D', subtitle: 'Blood-group screening and anti-D prophylaxis' },
        { id: 'anaemia-pregnancy', label: 'Anaemia in Pregnancy', subtitle: 'Haemoglobinopathy screening overlap' },
        { id: 'gestational-diabetes', label: 'Gestational Diabetes', subtitle: 'OGTT screening in at-risk women' },
        { id: 'neonatal-jaundice', label: 'Neonatal Jaundice', subtitle: 'Newborn assessment and the blood-spot hypothyroidism check' },
      ],
    },

  ],
}

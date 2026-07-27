import type { Note } from '../data/notes'

export const antenatalConcerns: Note = {
  id: 'antenatal-concerns',
  title: 'Reduced Fetal Movements, SGA/IUGR & Breech',
  subtitle: 'Third-trimester concerns — when to send to triage, growth restriction surveillance and malpresentation',
  tags: ['obstetrics'],

  body: `reduced fetal movements RFM kick counts stillbirth CTG small for gestational age SGA fetal growth restriction IUGR customised growth chart symphysis fundal height uterine artery Doppler breech presentation external cephalic version ECV term`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Three common third-trimester concerns present to primary care and maternity triage: reduced fetal movements, suspected small-for-gestational-age/growth restriction, and breech presentation. The unifying principle is that these can be markers of placental insufficiency and increased stillbirth risk, so the GP threshold to refer to maternity assessment should be low — reassurance is given by the maternity team after assessment, not withheld at the front door.',
    },

    { type: 'heading', level: 2, text: 'Reduced Fetal Movements (RFM)' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Send to Maternity Triage the Same Day',
      items: [
        'A perceived reduction in fetal movements can be the only warning sign of fetal compromise and is associated with stillbirth — always take it seriously.',
        'Advise women to contact maternity triage IMMEDIATELY with any reduction; do NOT advise going home to "have a cold drink and lie down" as a way of deferring assessment.',
        'There is no set "normal" number of movements — it is a change from the baby\'s own pattern that matters. Never use a home Doppler to reassure (a heartbeat does not exclude compromise).',
        'Assessment (maternity): CTG, and ultrasound for growth/liquor/Doppler if recurrent RFM or other risk factors; recurrent RFM is itself a risk factor warranting closer surveillance.',
      ],
    },

    { type: 'heading', level: 2, text: 'Small for Gestational Age (SGA) & Fetal Growth Restriction' },
    {
      type: 'list',
      items: [
        'SGA = estimated fetal weight below the 10th centile; fetal growth restriction (FGR/IUGR) is failure to reach the growth potential, often from placental insufficiency — the higher-risk group.',
        'Detected by serial symphysis-fundal height measurement (plotted on a customised chart) or ultrasound; a static or falling growth trajectory, or reduced liquor/abnormal Dopplers, raises concern.',
        'Risk factors that trigger serial growth scans rather than SFH: previous SGA/stillbirth, hypertension/pre-eclampsia, diabetes, smoking, maternal age/BMI, and antiphospholipid syndrome.',
        'Managed by the maternity team with growth scans, umbilical artery Doppler surveillance, and timing of delivery; refer any GP concern about growth for assessment.',
      ],
    },

    { type: 'heading', level: 2, text: 'Breech Presentation' },
    {
      type: 'list',
      items: [
        'Common before term and usually corrects; persistent breech at ~36 weeks warrants referral.',
        'External cephalic version (ECV) is offered from ~36–37 weeks (nulliparous) / 37 weeks (multiparous) — turning the baby head-down manually, with a success rate around 50%.',
        'If ECV is declined/unsuccessful, options are planned caesarean section (commonly recommended for term breech) or, in selected cases, vaginal breech birth — an obstetric decision.',
        'An undiagnosed breech in labour is managed by the intrapartum team.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'RCOG — Reduced Fetal Movements (GTG 57)', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/' },
        { label: 'RCOG — Small-for-Gestational-Age Fetus (GTG 31)', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/' },
        { label: 'RCOG — Breech / ECV (GTG 20a/20b)', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/' },
        { label: 'Kicks Count', url: 'https://www.kickscount.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'pre-eclampsia', label: 'Pre-eclampsia & Gestational Hypertension', subtitle: 'Placental disease overlaps with FGR' },
        { id: 'gestational-diabetes', label: 'Gestational Diabetes', subtitle: 'Affects growth and fetal surveillance' },
        { id: 'anaemia-pregnancy', label: 'Anaemia in Pregnancy', subtitle: 'Wider antenatal monitoring' },
        { id: 'antenatal-screening', label: 'Antenatal & Newborn Screening', subtitle: 'The 20-week scan and growth pathways' },
      ],
    },

  ],
}

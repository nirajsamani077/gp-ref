import type { Note } from '../data/notes'

export const rhesusAntiD: Note = {
  id: 'rhesus-anti-d',
  title: 'Rhesus Disease & Anti-D Prophylaxis',
  subtitle: 'Sensitising events, routine antenatal anti-D, the Kleihauer test and haemolytic disease of the newborn',
  tags: ['obstetrics'],

  body: `rhesus RhD negative anti-D immunoglobulin sensitising event haemolytic disease of the newborn HDN fetal maternal haemorrhage Kleihauer test routine antenatal anti-D prophylaxis RAADP cffDNA fetal genotyping 72 hours miscarriage ectopic amniocentesis`,

  content: [

    { type: 'heading', level: 2, text: 'The Problem' },
    {
      type: 'para',
      text: 'A rhesus D (RhD)-negative mother carrying an RhD-positive baby can be exposed to fetal red cells (a "sensitising event") and produce anti-D antibodies. This first pregnancy is usually unaffected, but in a subsequent RhD-positive pregnancy those antibodies cross the placenta and destroy fetal red cells — haemolytic disease of the newborn (HDN), causing fetal anaemia, hydrops and jaundice. Anti-D immunoglobulin given at the right times prevents sensitisation and has made severe HDN rare.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'How Anti-D Works',
      items: [
        'Anti-D immunoglobulin binds and "mops up" fetal RhD-positive cells in the maternal circulation before the mother\'s immune system can mount its own antibody response.',
        'It only prevents sensitisation — it cannot help once a woman is ALREADY sensitised (has her own anti-D antibodies), which is managed by fetal-medicine surveillance.',
        'Only relevant to RhD-NEGATIVE women who are not already sensitised; the baby\'s father/fetal genotype determines whether the baby could be RhD-positive.',
      ],
    },

    { type: 'heading', level: 2, text: 'Sensitising Events — Give Anti-D Within 72 Hours' },
    {
      type: 'list',
      items: [
        'Give anti-D as soon as possible and within 72 hours of any potentially sensitising event in a non-sensitised RhD-negative woman.',
        'Events include: birth of an RhD-positive baby, miscarriage/threatened miscarriage (per gestation rules), ectopic pregnancy, termination, antepartum haemorrhage, external cephalic version, abdominal trauma, and invasive procedures (amniocentesis, CVS, fetal blood sampling).',
        'Before ~12 weeks, anti-D is generally only needed after surgical/medical management of miscarriage or ectopic (not for threatened miscarriage with a viable pregnancy) — follow local/BSH guidance.',
      ],
    },

    { type: 'heading', level: 2, text: 'Routine Antenatal Anti-D Prophylaxis (RAADP) & Kleihauer' },
    {
      type: 'table',
      headers: ['Element', 'Detail'],
      rows: [
        ['RAADP', 'Routine anti-D at ~28 weeks (single- or two-dose regimen) for non-sensitised RhD-negative women — covers silent fetomaternal haemorrhage in the third trimester'],
        ['Cord blood at birth', 'Test the baby\'s blood group; if the baby is RhD-positive, give the mother a further postnatal dose'],
        ['Kleihauer test', 'After a potentially sensitising event ≥20 weeks and at birth — quantifies the size of the fetomaternal haemorrhage to check whether a LARGER anti-D dose is needed'],
        ['Fetal RhD genotyping (cffDNA)', 'A maternal blood test can determine the fetal RhD status — where the fetus is RhD-negative, anti-D can be safely omitted (increasingly used)'],
      ],
    },

    { type: 'heading', level: 2, text: 'The Already-Sensitised Woman' },
    {
      type: 'list',
      items: [
        'Detected on the booking antibody screen (and rechecked at ~28 weeks). Anti-D prophylaxis is of no benefit once sensitised.',
        'Managed by fetal medicine: serial antibody titres and middle cerebral artery Doppler to detect fetal anaemia, with intrauterine transfusion if severe.',
        'Other red-cell antibodies (e.g. anti-Kell, anti-c) can also cause HDN and are picked up on antibody screening.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE TA156 — Routine Antenatal Anti-D Prophylaxis', url: 'https://www.nice.org.uk/guidance/ta156' },
        { label: 'BSH — Anti-D Immunoglobulin Guideline', url: 'https://b-s-h.org.uk/guidelines/' },
        { label: 'NHS — Rhesus Disease', url: 'https://www.nhs.uk/conditions/rhesus-disease/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'antenatal-screening', label: 'Antenatal & Newborn Screening', subtitle: 'Blood-group/antibody screening at booking' },
        { id: 'miscarriage-ectopic', label: 'Miscarriage & Ectopic Pregnancy', subtitle: 'Common sensitising events' },
        { id: 'neonatal-jaundice', label: 'Neonatal Jaundice', subtitle: 'Haemolytic disease of the newborn as a cause' },
        { id: 'anaemia-pregnancy', label: 'Anaemia in Pregnancy', subtitle: 'Wider antenatal haematology' },
      ],
    },

  ],
}

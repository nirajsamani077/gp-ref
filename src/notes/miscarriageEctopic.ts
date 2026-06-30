import type { Note } from '../data/notes'

export const miscarriageEctopic: Note = {
  id: 'miscarriage-ectopic',
  title: 'Miscarriage & Ectopic Pregnancy',
  subtitle: 'Bleeding in early pregnancy, types of miscarriage, the ectopic emergency, EPAU referral and aftercare',
  tags: ['obstetrics', 'gynaecology'],

  body: `miscarriage threatened inevitable incomplete complete missed ectopic pregnancy bleeding early pregnancy EPAU early pregnancy assessment unit beta hCG progesterone misoprostol mifepristone expectant medical surgical management vacuum aspiration recurrent miscarriage antiphospholipid shoulder tip pain cervical excitation`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG126 — Ectopic Pregnancy & Miscarriage', url: 'https://www.nice.org.uk/guidance/ng126' },
        { label: 'NICE CKS — Miscarriage', url: 'https://cks.nice.org.uk/topics/miscarriage/' },
        { label: 'Tommy\'s — Baby Loss Support', url: 'https://www.tommys.org/' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Ectopic Pregnancy — Always Exclude',
      items: [
        'Do a pregnancy test in ANY woman of childbearing age with abdominal/pelvic pain, dizziness/collapse, or unexplained GI symptoms — ectopic can present atypically',
        'Suspicious features: lower abdominal/pelvic pain, shoulder-tip pain (diaphragmatic irritation), dizziness/syncope, amenorrhoea then bleeding; signs — tachycardia (or vagal bradycardia), hypotension, abdominal/adnexal tenderness, cervical excitation',
        'Haemodynamically unstable or signs of rupture → 999 / immediate A&E and alert the gynaecology on-call team',
        'Risk factors: previous ectopic, PID/tubal damage, tubal surgery, IVF, IUD/IUS in situ, smoking',
      ],
    },

    { type: 'heading', level: 2, text: 'Miscarriage — Definitions' },

    {
      type: 'table',
      headers: ['Type', 'Bleeding', 'Cervical os', 'Products'],
      rows: [
        ['Threatened', 'Yes (light)', 'Closed', 'Viable pregnancy may continue'],
        ['Inevitable', 'Yes (often heavy)', 'Open', 'Pregnancy will be lost'],
        ['Incomplete', 'Yes', 'Open', 'Some products passed, some retained'],
        ['Complete', 'Settling', 'Closed', 'All products passed'],
        ['Missed', 'Often none', 'Closed', 'Fetal demise without bleeding (found on scan)'],
      ],
      caption: 'Pregnancy loss before 24 weeks. ~1 in 5 pregnancies miscarry. Light bleeding/spotting in early pregnancy is common and, if a viable intrauterine pregnancy is confirmed on scan, is reassuring.',
    },

    { type: 'heading', level: 2, text: 'Assessment & Referral' },

    {
      type: 'list',
      items: [
        'Positive pregnancy test + bleeding/pain → assess haemodynamic status, pain, and amount of bleeding',
        'Light bleeding, no significant pain, <6 weeks from LMP and clinically well → expectant management: repeat a urine pregnancy test in 7 days (negative = miscarriage); return if symptoms worsen',
        '≥6 weeks, or pain/heavy bleeding, or uncertain dates → refer to the Early Pregnancy Assessment Unit (EPAU) for transvaginal ultrasound ± serial serum hCG (a rise/fall pattern and the "discriminatory" level ~1500 to expect an intrauterine pregnancy on TVUSS)',
        'Severe pain, signs of shock, or suspected rupture → 999/A&E',
        'Offer anti-D where relevant (e.g. surgical management) per local policy',
      ],
    },

    { type: 'heading', level: 2, text: 'Management of Confirmed Miscarriage' },

    {
      type: 'table',
      headers: ['Option', 'Detail'],
      rows: [
        ['Expectant', 'Allow natural passage (often first-line if stable) — not if increased risk of haemorrhage/infection or if the woman prefers intervention'],
        ['Medical', 'Vaginal or oral misoprostol (± mifepristone pre-treatment in missed miscarriage); causes uterine contractions to expel products'],
        ['Surgical', 'Manual vacuum aspiration (under LA) or surgical management in theatre — for heavy bleeding, infection, or patient choice'],
        ['Threatened miscarriage with bleeding + previous miscarriage + confirmed viable IUP', 'Offer vaginal micronised progesterone 400 mg BD until 16 weeks (NICE NG126)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Ectopic — Management Options (specialist-led)' },

    {
      type: 'list',
      items: [
        'Surgical (laparoscopic salpingectomy, or salpingotomy if the other tube is unhealthy) — for instability, significant pain, high hCG, or a large/live ectopic',
        'Medical (methotrexate) — selected stable women with low hCG and no significant pain; requires reliable follow-up with serial hCG; avoid pregnancy for ~3 months afterwards',
        'Expectant — for very small, resolving ectopics with falling hCG in a stable woman',
        'Fertility is usually unaffected unless there is pre-existing subfertility',
      ],
    },

    { type: 'heading', level: 2, text: 'Aftercare & Recurrent Miscarriage' },

    {
      type: 'list',
      items: [
        'Repeat a pregnancy test ~3 weeks after miscarriage; if still positive, consider retained products',
        'Emotional support is essential — signpost Tommy\'s/SANDS; acknowledge the loss; there is no increased risk in the next pregnancy after a single miscarriage; advise folic acid and to try again when ready',
        'Recurrent miscarriage (≥2, or any mid-trimester loss) → refer to the recurrent miscarriage clinic: investigations include antiphospholipid screen and thyroid antibodies/TFTs in all, thrombophilia screen for mid-trimester loss, pelvic ultrasound, and cytogenetics; prognosis is generally good (~75% subsequent success)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'antiphospholipid-syndrome', label: 'Antiphospholipid Syndrome', subtitle: 'Key treatable cause of recurrent miscarriage and thrombosis' },
        { id: 'hyperthyroidism', label: 'Hyperthyroidism', subtitle: 'Thyroid disease/antibodies and recurrent miscarriage' },
        { id: 'emergency-contraception', label: 'Emergency Contraception', subtitle: 'Pre-pregnancy care and contraception counselling' },
        { id: 'pre-eclampsia', label: 'Pre-eclampsia & Gestational Hypertension', subtitle: 'Other early/antenatal emergencies and aspirin prophylaxis' },
      ],
    },

  ],
}

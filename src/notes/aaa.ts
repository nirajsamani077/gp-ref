import type { Note } from '../data/notes'

export const aaa: Note = {
  id: 'aaa',
  title: 'Abdominal Aortic Aneurysm (AAA)',
  subtitle: 'Screening, surveillance thresholds, rupture risk, and GP management',
  tags: ['vascular', 'cardiology'],

  body: `abdominal aortic aneurysm AAA screening surveillance USS ultrasound aorta diameter rupture risk NAAASP national screening programme men 65 small medium large 3cm 4.5cm 5.5cm refer vascular EVAR open repair ruptured AAA emergency 999 pulsatile expansile mass back pain collapse DVLA 6cm 6.5cm antiplatelet statin atorvastatin aspirin clopidogrel smoking hypertension cardiovascular risk factors family history`,

  content: [
    // ── WHAT IS AAA ──────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'What is an AAA?',
      items: [
        'Dilatation of the abdominal aorta ≥3 cm (normal aorta <2 cm in most adults)',
        'Infrarenal aorta most commonly affected (>90% of cases)',
        'Prevalence ~1.3% in men aged 65; higher with smoking, hypertension, family history',
        'Risk factors: male sex, age >65, smoking (strongest modifiable RF), hypertension, hyperlipidaemia, COPD, family history (FDR with AAA)',
        'Protective factors: female sex, diabetes mellitus (paradoxically), non-white ethnicity',
      ],
    },

    // ── SCREENING ─────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'National AAA Screening Programme (NAAASP)',
    },
    {
      type: 'table',
      headers: ['Who', 'When', 'How to access'],
      rows: [
        ['All men aged 65', 'One-off invitation for abdominal USS', 'Automatic invitation via NHS; self-referral available if not received'],
        ['Men with FHx (1st degree male relative with AAA)', 'USS at age 50, then every 5 years until entering national screening at 65', 'GP referral for USS; Cornwall: refer to vascular'],
        ['Women with FHx or high CV risk', 'Not routinely included in NAAASP — use clinical judgement', 'Consider GP-initiated USS referral if strong FHx or multiple RFs'],
        ['Known AAA detected incidentally', 'Managed in primary care or direct surveillance; refer if ≥5.5 cm', 'Follow surveillance thresholds below'],
      ],
      caption: 'Self-referral line (Peninsula): 0800 970 8700 or rch-tr.AAAscreening@nhs.net. Encourage self-referral if high-risk patient not yet screened.',
    },

    // ── RUPTURE RISK IMAGE ────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Aneurysm Size & Annual Rupture Risk',
    },
    {
      type: 'image',
      src: '/images/aaa-rupture-risk.jpg',
      alt: 'Diagram showing four AAA sizes with annual rupture risk: 3.0–5.4 cm (0–1.6%), 5.5–6.0 cm (2.2–5.4%), 6.1–7.0 cm (3.2–6.4%), >7.0 cm (5.2–7.9%)',
      caption: 'Annual rupture risk increases sharply above 5.5 cm. Surgery is indicated when operative risk < risk of rupture.',
    },

    // ── SURVEILLANCE THRESHOLDS ───────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Surveillance Thresholds',
    },
    {
      type: 'table',
      headers: ['Aortic Diameter', 'Classification', 'Annual Rupture Risk', 'Action'],
      rows: [
        ['<3.0 cm', 'Normal', 'Negligible', 'Reassure; no follow-up required'],
        ['3.0–4.4 cm', 'Small AAA', '0–1.6%', 'Annual surveillance USS in primary care; optimise CV risk factors'],
        ['4.5–5.4 cm', 'Medium AAA', '~2–5%', '3-monthly surveillance USS; refer to vascular for planning; optimise RFs'],
        ['≥5.5 cm', 'Large AAA', '>5% and rising', '2-week wait referral to vascular surgery — elective repair considered'],
        ['Any size, symptomatic', 'Symptomatic / expanding', 'High', '999 emergency if suspected rupture; urgent same-day vascular if new pain + known AAA'],
        ['Expanding >1 cm/year', 'Rapid growth (any size)', 'High', 'Refer vascular urgently regardless of absolute diameter'],
      ],
      caption: 'Thresholds based on NAAASP guidelines. Surveillance scans arranged by GP/screening programme depending on how AAA was detected.',
    },

    // ── RUPTURED / SYMPTOMATIC ────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Suspected Ruptured or Symptomatic AAA — 999 Immediately',
      items: [
        'Classic triad: sudden severe abdominal/back/flank pain + pulsatile abdominal mass + haemodynamic collapse — but triad is rarely all present',
        'Think AAA in: elderly male, smoker, hypertensive with new abdominal/back/loin pain or syncope',
        'Pulsatile expansile epigastric mass on examination is AAA until proven otherwise',
        'Do NOT delay for USS — call 999 immediately; pre-alert nearest vascular centre',
        'Repair: EVAR (endovascular) preferred if anatomy suitable; open repair if not',
        'Mortality of ruptured AAA: ~80% overall; ~50% in those who reach hospital',
      ],
    },

    // ── GP MANAGEMENT ─────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'GP Management of Known AAA',
    },
    {
      type: 'table',
      headers: ['Area', 'Action'],
      rows: [
        ['Antiplatelet therapy', 'Aspirin 75mg OD or clopidogrel 75mg OD — reduces CV events; start unless contraindicated'],
        ['Statin', 'Atorvastatin 20–80mg — slows AAA growth and reduces CV mortality; start regardless of baseline cholesterol'],
        ['Blood pressure', 'Target BP <140/90 mmHg; ACE inhibitor or ARB first-line; avoid beta-blockers as sole agent (no proven AAA benefit)'],
        ['Smoking cessation', 'Most important modifiable RF; smoking doubles expansion rate; offer Varenicline/NRT + referral to stop smoking service'],
        ['Exercise', 'Advise avoiding high-intensity isometric exercise (heavy weightlifting, vigorous straining) — increases aortic wall stress; walking/cycling fine'],
        ['Annual review', 'Review surveillance scan results, BP, lipids, smoking status, antiplatelet compliance at annual review'],
        ['Safety netting', 'Provide written advice: any new abdominal, back, or flank pain → A&E immediately; do not wait for GP appointment'],
      ],
    },

    // ── DVLA ─────────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'DVLA Regulations',
    },
    {
      type: 'table',
      headers: ['AAA Diameter', 'Group 1 (car/motorcycle)', 'Group 2 (HGV/bus/coach)'],
      rows: [
        ['<6 cm', 'May drive; no need to notify DVLA', 'Must notify DVLA; annual medical review required; licensing at DVLA discretion'],
        ['6.0 cm', 'Must notify DVLA', 'Must notify DVLA'],
        ['>6.5 cm', 'Must stop driving until treated/repaired', 'Disqualified until treated and cleared by DVLA'],
        ['Post-repair (EVAR)', 'May drive 1 month post-op if satisfactory recovery', 'DVLA discretion — usually 3 months minimum'],
        ['Post-repair (open)', 'May drive when medically fit (usually 6–8 weeks)', 'DVLA discretion — longer recovery required'],
      ],
      caption: 'Advise patient at diagnosis to check DVLA guidance at gov.uk/aortic-aneurysm-and-driving. Document DVLA discussion in notes.',
    },

    // ── REFERRAL SUMMARY ──────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: 'Referral Summary',
      items: [
        '≥5.5 cm or expanding >1 cm/year → 2-week wait referral to vascular surgery',
        '4.5–5.4 cm → refer to vascular for planning/pre-operative assessment while on surveillance',
        'Symptomatic any size → 999 emergency',
        'Incidental AAA detected by GP USS → refer to vascular at initial detection of ≥3 cm for registration (Cornwall guideline)',
        'Include in referral: USS report, BP, BMI, PMH, medications, smoking status, renal function (U&E within 6 weeks), ABPI if available',
      ],
    },
  ],
}

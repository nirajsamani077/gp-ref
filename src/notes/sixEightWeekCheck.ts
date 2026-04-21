import type { Note } from '../data/notes'

export const sixEightWeekCheck: Note = {
  id: '6-8-week-check',
  title: '6–8 Week Baby & Mother Check',
  subtitle: 'GP postnatal review — baby examination and maternal wellbeing',
  tags: ['paediatrics', 'obstetrics'],

  body: `6 8 week check postnatal baby mother GP review maternal wellbeing birth history feeding development smile fix follow startle moro reflex red reflex retinoblastoma congenital cataract birthmarks haemangioma port wine stain stork mark salmon patch cafe au lait congenital dermal melanocytosis mongolian blue spot hip DDH developmental dysplasia Barlow Ortolani femoral pulses coarctation aorta CoA murmur innocent sacral dimple spina bifida occulta talipes clubfoot fontanelle craniosynostosis plagiocephaly brachycephaly tongue tie frenulotomy contraception LARC pelvic floor exercises PFE mastitis GDM PET hypertension MMR rubella vitamin D cosleeping SIDS perinatal mental health EPDS Edinburgh icon cope crying`,

  content: [

    {
      type: 'callout',
      variant: 'info',
      title: 'Before Starting — Check',
      items: [
        'DC summary, NIPE results, red book',
        'Gestation, mode of delivery, complications, SCBU stay',
        'HV and community midwife input so far',
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // MOTHER
    // ══════════════════════════════════════════════════════════════
    {
      type: 'heading',
      level: 2,
      text: '👩 Mother Check',
    },
    {
      type: 'list',
      items: [
        'How was the birth? Was motherhood what you were expecting? Any concerns?',
        'Sleep and support — think safeguarding if concerns',
        'Perinatal mental health — screen with EPDS; refer to perinatal MH services or HV if score elevated',
        'Smoking cessation, alcohol, exercise when ready',
      ],
    },
    {
      type: 'table',
      headers: ['Condition', 'Action'],
      rows: [
        ['Pre-eclampsia (PET)', 'Recheck BP + urine dip'],
        ['Gestational diabetes (GDM)', 'Fasting glucose now; annual HbA1c if normal'],
        ['Anaemia / blood loss', 'Repeat FBC if symptomatic or significant delivery blood loss'],
        ['Rubella immunity', 'Offer MMR if not immune (check booking bloods)'],
        ['VTE', 'Confirm LMWH course completed; any ongoing symptoms?'],
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: 'Lochia & Bleeding',
    },
    {
      type: 'list',
      items: [
        'By 6 weeks lochia should have reduced to lochia serosa or alba (pink/yellow/white) — no longer bright red',
        'Persistent fresh red bleeding (lochia rubra) → consider retained products of conception (RPOC), endometritis, or uterine subinvolution',
        'RPOC: USS pelvis; if confirmed → discuss with obstetrics (medical or surgical management)',
        'Endometritis: offensive discharge, uterine tenderness, fever → swab + antibiotics (co-amoxiclav or metronidazole + doxycycline)',
      ],
    },

    {
      type: 'heading',
      level: 3,
      text: 'Wound — Perineal Tear / Episiotomy / C-Section',
    },
    {
      type: 'list',
      items: [
        'Perineal wound: healing, signs of infection (erythema, discharge, dehiscence, pain) → examine + swab; document FGM if relevant',
        'Bladder/bowel continence and prolapse symptoms → PFE: 3× daily, 8 contractions held 8s — Squeezy app',
        '3rd/4th degree tear → confirm OASI clinic follow-up arranged; re-refer if faecal urgency/incontinence or pain',
        'C-section scar: inspect for wound breakdown, cellulitis, seroma, haematoma; ask about pain/numbness/itching (normal nerve recovery)',
        'C-section advice: no heavy lifting (>6 weeks), driving when able to perform emergency stop comfortably (usually ~6 weeks), no strenuous exercise until cleared',
        'Keloid/hypertrophic scar concerns → refer dermatology or plastics if significant',
      ],
    },

    {
      type: 'heading',
      level: 3,
      text: 'Breastfeeding',
    },
    {
      type: 'list',
      items: [
        'Ask about latch, pain, frequency, and whether baby is satisfied after feeds',
        'Nipple pain — check latch first; consider nipple thrush (fluconazole 150mg stat + 50mg OD 14 days; nystatin cream to nipple) or bacterial mastitis',
        'Mastitis — flucloxacillin 500mg QDS 10–14 days; encourage continued feeding/pumping from affected side; warm compress before feeds',
        'Tongue tie — if causing poor latch, nipple pain, or faltering growth → refer to HV/BF midwife; community frenulotomy if confirmed',
        'BF support: NHS Start4Life, local IBCLC, La Leche League',
      ],
    },

    {
      type: 'heading',
      level: 3,
      text: 'Contraception — UKMEC Postpartum Guidance',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Key Principle',
      items: [
        'Ovulation can return as early as 3 weeks postpartum even while breastfeeding',
        'LAM (lactational amenorrhoea method) is only reliable if: fully breastfeeding + amenorrhoeic + baby <6 months — all 3 must apply',
        'Encourage discussion of contraception before discharge; 6-week check is often too late',
      ],
    },
    {
      type: 'table',
      headers: ['Method', 'Breastfeeding (BF)', 'Not Breastfeeding (non-BF)', 'Notes'],
      rows: [
        ['POP (progestogen-only pill)', 'UKMEC 1 — use from 3 weeks PP', 'UKMEC 1 — use from 3 weeks PP', 'Safe immediately; no effect on milk supply; desogestrel (Cerazette) preferred'],
        ['Implant (Nexplanon)', 'UKMEC 1 — use from 4 weeks PP', 'UKMEC 1 — use from 4 weeks PP', 'Ideal LARC; can be fitted at 6-week check or earlier; no impact on lactation'],
        ['LNG-IUS (Mirena/Levosert)', 'UKMEC 1 — use from 4 weeks PP', 'UKMEC 1 — use from 4 weeks PP', 'Can be fitted at 6-week check; avoid if uterus still large/not involuted'],
        ['Cu-IUD (copper coil)', 'UKMEC 1 — use from 4 weeks PP', 'UKMEC 1 — use from 4 weeks PP', 'Ideally fitted within 48h of delivery or after 4 weeks; non-hormonal'],
        ['DMPA (Depo-Provera injection)', 'UKMEC 1 — use from 6 weeks PP (BF)', 'UKMEC 1 — use from 6 weeks PP', 'Some concern re early use and milk supply if BF; generally safe; irreversible for 12 weeks'],
        ['COCP (combined pill)', 'UKMEC 4 <6 weeks PP; UKMEC 2 at 6 weeks–6 months', 'UKMEC 3 <21 days PP; UKMEC 2 at 21–42 days', 'Avoid if BF <6 weeks — reduces milk supply; VTE risk elevated early PP'],
        ['Combined patch / ring', 'Same as COCP', 'Same as COCP', 'Apply same UKMEC thresholds as COCP'],
        ['Barrier (condom/diaphragm)', 'UKMEC 1 — anytime', 'UKMEC 1 — anytime', 'Diaphragm: refit at 6 weeks (uterus changed); condoms fine immediately'],
        ['Emergency contraception (EC)', 'LNG-EC (e.g. Levonelle): UKMEC 1; UPA-EC (ellaOne): avoid if BF (pump and dump 1 week)', '—', 'Cu-IUD most effective EC at any time'],
      ],
      caption: 'UKMEC 1 = no restriction; UKMEC 2 = benefits outweigh risks; UKMEC 3 = risks generally outweigh benefits; UKMEC 4 = unacceptable risk. PP = postpartum.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Practical Points at the 6-Week Check',
      items: [
        'Ask what contraception she is currently using — many women leave hospital with no plan',
        'Cervical smear: if overdue, defer until ≥12 weeks postpartum (cervix fragile earlier)',
        'LNG-IUS / copper IUD / implant can all be arranged at this appointment or referred to FP clinic',
        'If she wants the COCP and is breastfeeding — advise to wait until ≥6 months or switch to POP/LARC',
        'Document discussion and chosen method in notes',
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // BABY
    // ══════════════════════════════════════════════════════════════
    {
      type: 'heading',
      level: 2,
      text: '👶 Baby Check',
    },
    {
      type: 'image',
      src: '/images/6-8-week-check.webp',
      alt: 'General overview of the 6-8 week baby examination',
      caption: 'General overview of the newborn examination — systematic head-to-toe approach.',
    },

    // ── DEVELOPMENT ──────────────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Development & Feeding',
    },
    {
      type: 'list',
      items: [
        'Social smile present by 6–8 weeks → absent: monitor closely, refer if no smile by 8 weeks',
        'Fix and follow — tracks face/object through midline → absent: refer ophthalmology',
        'Startle to loud noise (Moro) → absent: refer paediatrics',
        'Feeding — breast or formula; frequency, volume, weight gain',
        'Nappy output — frequency of wet and dirty nappies',
        'Overall — colour, cry, dysmorphic features',
      ],
    },

    // ── HEAD ─────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Head & Face',
    },
    {
      type: 'list',
      items: [
        'Anterior fontanelle — soft and flat; bulging → raised ICP (urgent); sunken → dehydration; closes 9–18 months',
        'Posterior fontanelle — should close by 6–8 weeks; if ridge palpable → craniosynostosis, refer neurosurgery',
        'Head shape — plagiocephaly/brachycephaly: positioning advice usually sufficient',
        'Ears — normal position and shape',
        'Palate — visualise or palpate with finger → cleft: refer',
        'Clavicles — palpate for undetected birth fracture',
        'Plot HC in red book',
      ],
    },

    // ── EYES ─────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Eyes',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Red Reflex',
    },
    {
      type: 'list',
      items: [
        "Darkened room; ophthalmoscope set to +2 (green/black lens); sit at arm's length",
        'Demonstrate on parent first — establishes normal reflex colour for that ethnic group (darker skin = more orange/amber)',
        'Normal: symmetric red/orange glow in both pupils simultaneously',
        'Leukocoria (white pupillary reflex) = urgent 2WW ophthalmology — retinoblastoma or congenital cataract until proven otherwise',
        'Absent or asymmetric reflex → urgent 2WW ophthalmology',
        'Any shadow/opacity within reflex → urgent 2WW ophthalmology',
        'Refer with normal exam if: FHx bilateral congenital cataracts, TORCH, VZV, HSV, prematurity, FAS, SNHL',
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: 'Eye Examination',
    },
    {
      type: 'table',
      headers: ['Finding', 'Significance', 'Action'],
      rows: [
        ['Strabismus (squint)', 'Constant strabismus at any age is abnormal; intermittent normal up to 6 weeks', 'Cover test: cover one eye — watch for movement in uncovered eye (tropia); refer orthoptics if persistent'],
        ['No fix and follow', 'Should track face/object through midline by 6–8 weeks', 'Refer ophthalmology'],
        ['Nystagmus', 'Involuntary repetitive eye movements — may indicate visual impairment or neurological cause', 'Urgent paediatric/ophthalmology referral'],
        ['Ptosis (drooping lid)', 'Covers pupil → risk of deprivation amblyopia', 'Urgent ophthalmology — patch therapy or surgery to prevent amblyopia'],
        ['Buphthalmos (large eye)', 'Corneal diameter >12mm = raised IOP; congenital glaucoma', 'Urgent ophthalmology'],
        ['Corneal clouding', 'Congenital glaucoma, metabolic disease', 'Urgent ophthalmology'],
      ],
    },
    {
      type: 'image',
      src: '/images/Abnormal-red-reflex-information-poster.png.webp',
      alt: 'Red reflex checking poster showing normal, absent and abnormal red reflex with referral outcomes',
      caption: 'Normal = no referral. Absent/asymmetric = urgent referral. Abnormal = urgent referral.',
    },

    // ── HEART ────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Cardiovascular',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Background',
      items: [
        '~50% of congenital heart disease (CHD) is missed on antenatal USS — postnatal exam is critical',
        'Risk factors: T21, TORCH, maternal SSRI/anti-epileptics/diabetes/connective tissue disease, FHx CHD',
        'Alert if: persistent cyanosis, apnoea, poor feeding, faltering growth, sweating with feeds → low threshold to refer',
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: 'Examination',
    },
    {
      type: 'list',
      items: [
        'Inspect: work of breathing, subcostal/intercostal recession, nasal flaring, central cyanosis (tongue/lips), peripheral colour',
        'CRT centrally (sternum) <2 seconds',
        'Apex beat: should be at 4th–5th ICS, mid-clavicular line left; displaced right = dextrocardia',
        'Palpate for heaves (RV pressure load) and thrills (palpable murmur, grade ≥4)',
        'Femoral pulses: palpate bilaterally simultaneously — compare volume with brachial; weak/absent = coarctation of aorta (CoA)',
        'Auscultate 5 areas: pulmonary (2nd ICS left), aortic (2nd ICS right), tricuspid (4th ICS left), mitral (apex), mid-scapula (continuous or systolic murmur = CoA)',
      ],
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Absent / Weak Femoral Pulses → Same-Day Paediatric Cardiology',
      items: [
        'Coarctation of aorta (CoA) — narrowing of descending aorta distal to left subclavian',
        'Femoral pulses reduced or absent, radio-femoral delay; brachial stronger than femoral',
        'May have systolic murmur at mid-scapula (back)',
        'If suspected: 4-limb blood pressure (>20mmHg gradient arm-leg = CoA) → same-day referral',
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: 'Murmur Assessment',
    },
    {
      type: 'table',
      headers: ['Feature', 'Innocent (reassuring)', 'Pathological (refer)'],
      rows: [
        ['Timing', 'Systolic only (ejection)', 'Pansystolic, diastolic, or continuous'],
        ['Loudness', 'Grade 1–2/6 (soft)', 'Grade 3+/6 or associated thrill'],
        ['Quality', 'Soft, musical, blowing', 'Harsh, rough'],
        ['Location', 'Left sternal edge', 'Radiates to axilla, back, or neck'],
        ['Infant', 'Well, pink, feeding well, gaining weight', 'Cyanosis, sweaty feeds, poor weight gain, tachycardia'],
        ['Other', 'No click, normal S2 splitting', 'Fixed split S2 (ASD), single S2 (severe PS/AS)'],
      ],
    },
    {
      type: 'table',
      headers: ['Defect', 'Murmur', 'Notes'],
      rows: [
        ['VSD', 'Pansystolic, harsh, LSE — may radiate across precordium', 'Most common CHD; small VSDs may close spontaneously'],
        ['ASD', 'Ejection systolic at ULSE + fixed split S2', 'Often picked up later in childhood'],
        ['PDA', 'Continuous "machinery" murmur at ULSE/infraclavicular', 'Common in prematurity; treat with ibuprofen/indomethacin or surgical ligation'],
        ['Pulmonary stenosis', 'Ejection systolic at ULSE, radiates to back, ejection click', 'Varies from mild to severe'],
        ['CoA', 'Systolic at mid-scapula; weak femoral pulses', 'Check 4-limb BP; same-day referral'],
        ['TGA', 'Often no murmur early — presents with cyanosis in first hours/days', 'Duct-dependent; urgent prostaglandin E1'],
      ],
    },
    {
      type: 'table',
      headers: ['Urgency', 'Criteria', 'Action'],
      rows: [
        ['Immediate (same day)', 'Cyanosis, absent femoral pulses, haemodynamic compromise, shock', 'Call 999 / blue light transfer to paediatric cardiology'],
        ['Urgent (within 24–48h)', 'Loud murmur (≥3/6), thrill, diastolic murmur, fixed split S2, any unwell infant', 'Same-day paediatric A&E or on-call paediatrics'],
        ['Soon (within 1–2 weeks)', 'Soft murmur, well infant, normal pulses, normal saturations', 'Paediatric cardiology outpatient or paediatric A&G'],
        ['Routine', 'Grade 1–2 systolic, LSE, all features of innocent murmur', 'Review in 4–6 weeks; refer if persists'],
      ],
    },

    // ── ABDOMEN ──────────────────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Abdomen, Genitalia & Anus',
    },
    {
      type: 'list',
      items: [
        'Hepatosplenomegaly → investigate',
        'Anal patency confirmed',
      ],
    },

    {
      type: 'heading',
      level: 3,
      text: 'Umbilical Hernia',
    },
    {
      type: 'list',
      items: [
        'Very common; incomplete umbilical ring closure; commoner in Afro-Caribbean and premature infants',
        'Soft, reducible swelling; increases with crying — usually resolves by 3–4 years',
        'Refer if: persists >3–4 years, >2cm, or complicated (irreducible, tender)',
        'Do NOT strap or bind',
      ],
    },
    {
      type: 'image',
      src: '/images/VID_2252_F0095312-Baby_with_umbilical_hernia.max-600x600.jpg',
      alt: 'Umbilical hernia in a newborn — soft rounded protrusion at umbilicus',
      caption: 'Umbilical hernia: soft, reducible protrusion at the umbilicus. Usually resolves by age 3–4. Refer if persists, large >2cm, or complicated.',
    },

    {
      type: 'heading',
      level: 3,
      text: 'Inguinal Hernia',
    },
    {
      type: 'list',
      items: [
        'Patent processus vaginalis; commoner in males and premature infants',
        'Intermittent groin/scrotal (males) or labial (females) swelling, worse with crying',
        'Does NOT resolve spontaneously — urgent paediatric surgical referral; high incarceration risk in young infants',
      ],
    },

    {
      type: 'heading',
      level: 3,
      text: 'Umbilical Granuloma',
    },
    {
      type: 'list',
      items: [
        'Small, moist, pink/red fleshy nodule at the base of the umbilicus after cord separation (usually falls off day 7–10)',
        'Caused by overgrowth of granulation tissue — not infected; distinguish from umbilical polyp (rarer, firmer)',
        'May have slight discharge or bleeding but no surrounding erythema or tenderness (if present → consider omphalitis)',
        'Treatment: silver nitrate cauterisation — applied carefully to granuloma only, protecting surrounding skin with petroleum jelly; 1–2 applications usually sufficient',
        'Alternative: salt treatment (small amount of kitchen salt applied topically) — some evidence supports this as a safe first-line option',
        'Refer to paediatrics or paediatric surgery if persistent, large, or not responding to treatment',
      ],
    },
    {
      type: 'image',
      src: '/images/umbilical-granuloma.png',
      alt: 'Umbilical granuloma — pink fleshy nodule at umbilicus after cord separation',
      caption: 'Umbilical granuloma: moist pink nodule after cord separation. Treat with silver nitrate cauterisation (protect surrounding skin). Salt treatment is a safe alternative.',
    },

    {
      type: 'heading',
      level: 3,
      text: 'Testes & Genitalia',
    },
    {
      type: 'list',
      items: [
        'Testes (males) — palpate both; examine in warm room to prevent cremasteric retraction',
        'Undescended testis (cryptorchidism) at 8 weeks → refer paediatric surgery; repair (orchidopexy) by 6–18 months to preserve fertility and reduce malignancy risk',
        'Retractile testis (can be milked down into scrotum, stays without tension) → monitor; annual review until puberty',
        'Hypospadias — urethral meatus on ventral surface → refer urology; do not circumcise (prepuce used in repair)',
        'Bifid scrotum or penile chordae with bilateral impalpable testes → urgent referral, consider disorder of sexual differentiation (e.g. congenital adrenal hyperplasia)',
        'Anal patency confirmed',
      ],
    },
    {
      type: 'image',
      src: '/images/undescended-testicles-pathway.jpg',
      alt: 'Undescended testicle clinical pathway — unilateral vs bilateral, palpable vs impalpable',
      caption: 'Undescended testis pathway: unilateral palpable → routine paediatric surgical referral; bilateral impalpable → urgent referral (exclude CAH).',
    },

    // ── HIPS ─────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Hips — DDH',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer Urgent Ortho Even with Normal Exam if:',
      items: [
        'FHx DDH (first-degree relative)',
        'Breech presentation at or after 36 weeks',
      ],
    },
    {
      type: 'list',
      items: [
        'Ask: clicking or difficulty abducting legs when changing nappy?',
        'Ensure warm room — cold causes muscle tension and false restriction',
        'Lay baby supine on firm surface',
      ],
    },
    {
      type: 'table',
      headers: ['Assessment', 'Technique', 'Positive Finding'],
      rows: [
        ['Leg length', 'Flex both hips and knees to 90°; compare knee heights (Galeazzi test)', 'Unequal knee height = shorter femur on affected side'],
        ['Skin creases', 'Compare thigh/gluteal crease symmetry', 'Asymmetric creases — low PPV alone but adds to suspicion'],
        ['Abduction range', 'Flex hip to 90°; abduct both hips smoothly — should reach ~80°', 'Restricted or asymmetric abduction → refer'],
        ['Barlow test', 'Stabilise pelvis with one hand; flex + adduct hip; apply gentle posterior pressure on knee', 'Feel for clunk or give as femoral head exits acetabulum (dislocates)'],
        ['Ortolani test', 'Index + middle fingers on greater trochanter, thumb in groin; abduct hip + gentle anterior pressure on trochanter', 'Clunk of femoral head re-entering acetabulum (relocates)'],
      ],
      caption: 'Barlow = provokes dislocation of an unstable hip. Ortolani = reduces an already-dislocated hip.',
    },
    {
      type: 'table',
      headers: ['Scenario', 'Action'],
      rows: [
        ['Positive Barlow or Ortolani (clunk)', 'Urgent orthopaedic referral — USS hip within 2 weeks'],
        ['Restricted or asymmetric abduction', 'Urgent orthopaedic referral'],
        ['FHx DDH or breech ≥36 weeks — even if normal exam', 'Refer for USS hip at 4–6 weeks (Graf classification)'],
        ['Graf type I (USS)', 'Normal — no treatment'],
        ['Graf type II (USS)', 'Immature/borderline — monitor with repeat USS'],
        ['Graf type III–IV (USS)', 'Dysplastic — Pavlik harness; surgical reduction if fails'],
      ],
      caption: 'Pavlik harness: maintains hips in flexion/abduction to encourage acetabular development; used from birth to ~6 months.',
    },
    {
      type: 'image',
      src: '/images/Ortolani-and-Barlow.jpeg',
      alt: 'Barlow and Ortolani manoeuvre diagrams for DDH screening',
      caption: 'Barlow: adduct + posterior pressure → dislocates unstable hip. Ortolani: abduct + anterior lift → relocates with clunk.',
    },
    {
      type: 'linkrow',
      links: [
        { label: '▶ YouTube — Ortolani & Barlow Hip Test', url: 'https://www.youtube.com/watch?v=imhI6PLtGLc' },
      ],
    },

    // ── LIMBS ────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Limbs & Digits',
    },
    {
      type: 'list',
      items: [
        'Check all four limbs — symmetry, movement, tone',
        'Count digits — polydactyly/syndactyly → refer',
        'Talipes (clubfoot) — plantarflexed, inverted foot that cannot be passively corrected → refer physiotherapy + orthopaedics (Ponseti casting)',
      ],
    },
    {
      type: 'image',
      src: '/images/clubfoot.jpg',
      alt: 'Newborn talipes (clubfoot) showing plantarflexed and inverted foot',
      caption: 'Talipes equinovarus (clubfoot): plantarflexed, supinated foot that cannot be corrected to neutral. Refer for Ponseti casting.',
    },

    // ── NEURO / SPINE ────────────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Neurology, Tone & Spine',
    },
    {
      type: 'list',
      items: [
        'Tone — lie prone: head should be at least level with body at 6–8 weeks',
        'Moro + grasp reflexes if neurological concern',
        'Spine — run finger along full length',
        'Sacral dimple → refer USS lumbar spine or paediatrics if: >5mm diameter OR >25mm from anal verge OR associated hair tuft, skin tag, lipoma, discolouration, haemangioma',
        'Normal dimple: small, shallow, visible base, within 25mm of anus → reassure',
      ],
    },
    {
      type: 'image',
      src: '/images/sacreddimples.webp',
      alt: 'Sacral dimple — clinical photo and diagram showing measurement criteria',
      caption: 'Refer if >5mm, >25mm from anus, or with associated skin changes. Normal pit with visible base within 25mm = reassure.',
    },

    // ── BIRTHMARKS ───────────────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Skin & Birthmarks',
    },

    {
      type: 'image',
      src: '/images/salmon-patch-stork-mark.jpg',
      alt: 'Salmon patch / stork mark on newborn face — flat pink-red patches',
      caption: 'Salmon patch / Stork mark — flat pink-red patch; face, nape of neck, eyelids. Very common. Fades by 1–2 years. No treatment needed.',
    },
    {
      type: 'image',
      src: '/images/strawberry-naevus-haemangioma.jpg',
      alt: 'Infantile haemangioma — raised bright red strawberry naevus',
      caption: 'Infantile haemangioma (strawberry naevus) — raised, bright red; appears weeks 1–4, peaks 3–6 months, involutes over years. Refer if near eye (amblyopia risk), airway involvement, or ulcerated → propranolol effective.',
    },
    {
      type: 'image',
      src: '/images/port-wine-stain.jpg',
      alt: 'Port wine stain — flat purple-red birthmark on face',
      caption: 'Port wine stain — flat, pink-red to purple; does NOT fade. Extensive facial: ? Sturge-Weber syndrome (glaucoma, epilepsy) → refer ophthalmology. Laser treatment available.',
    },
    {
      type: 'image',
      src: '/images/cafe-au-lait-spot.jpg',
      alt: 'Café-au-lait spot — flat coffee-coloured oval patch',
      caption: 'Café-au-lait spot — flat, coffee-coloured, oval. Single spots common and benign. >6 spots >5mm (pre-pubertal) → consider neurofibromatosis type 1.',
    },
    {
      type: 'image',
      src: '/images/mongolian-blue-spot.jpg',
      alt: 'Mongolian blue spot / congenital dermal melanocytosis — blue-grey sacral patch',
      caption: 'Mongolian blue spot (blue-grey spot / congenital dermal melanocytosis) — flat, blue-grey; lumbosacral; commoner in darker-skinned infants. Fades by school age. Document clearly to avoid confusion with bruising.',
    },
    {
      type: 'image',
      src: '/images/congenital-melanocytic-naevus.jpg',
      alt: 'Congenital melanocytic naevus — brown pigmented lesion present from birth',
      caption: 'Congenital melanocytic naevus — brown/black, may have hair. Risk of melanoma increases with size (giant >20cm). Refer dermatology for large lesions.',
    },
    {
      type: 'linkrow',
      links: [
        { label: '🌐 NHS — Birthmarks Guide', url: 'https://www.nhs.uk/conditions/birthmarks/' },
      ],
    },

    // ── GROWTH ───────────────────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Growth & Vitamins',
    },
    {
      type: 'list',
      items: [
        'Plot weight + HC in red book (UK WHO growth charts)',
        'Faltering growth (weight crossing centiles down) → review feeding; refer if persistent',
        'Vitamin D 400 IU/day — all breastfed babies and mixed-fed babies receiving <500ml formula/day; from birth to 1 year',
        'Breastfeeding mother → also 400 IU/day vitamin D',
        'From 1 year → Healthy Start vitamins (A, C, D)',
      ],
    },

    // ── SAFETY ───────────────────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Safety & Wellbeing',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'SIDS Prevention',
      items: [
        'Back to sleep — always on their back',
        'Avoid co-sleeping if parent smokes, consumed alcohol/drugs, or very tired',
        'Firm, flat, clean sleep surface — no pillows or duvets',
        'Room-share (not bed-share) for first 6 months',
        'Smoke-free environment',
      ],
    },
    {
      type: 'list',
      items: [
        'Encourage skin-to-skin time and bonding',
        'Re-check perinatal mental health → refer perinatal MH services or HV if concerns',
        'Confirm 8-week immunisations are booked',
        'ICON — Coping with Infant Crying: evidence-based resource for parents struggling with a crying baby',
      ],
    },
    {
      type: 'linkrow',
      links: [
        { label: '🌐 ICON — Coping with Infant Crying', url: 'https://iconcope.org' },
      ],
    },

  ],
}

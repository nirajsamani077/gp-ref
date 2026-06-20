import type { Note } from '../data/notes'

export const ovarianCancer: Note = {
  id: 'ovarian-cancer',
  title: 'Ovarian Cancer & CA125',
  subtitle: 'The "silent killer", CA125 + ultrasound pathway, 2WW criteria and the IBS-in-the-over-50s rule',
  tags: ['cancer', 'gynaecology'],

  body: `ovarian cancer CA125 RMI risk of malignancy index transvaginal ultrasound pelvic mass ascites bloating early satiety abdominal pain IBS over 50 BRCA Lynch syndrome nulliparity HRT high grade serous low grade debulking surgery platinum chemotherapy CA125 false negative 2WW two week wait gynaecology FIT colorectal pancreatic`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG122 — Ovarian Cancer', url: 'https://www.nice.org.uk/guidance/cg122' },
        { label: 'NICE NG12 — Suspected Cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'Target Ovarian Cancer', url: 'https://targetovariancancer.org.uk/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Why It Is Missed — Non-Specific Symptoms' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Think Ovarian Cancer in Vague Persistent Symptoms',
      items: [
        'Frequently diagnosed late because symptoms are vague and attributed to benign conditions — IBS, UTI, GORD, "the menopause", or simply ageing',
        'Key pearl: new-onset IBS is RARE in women over 50 — in this group, persistent IBS-type symptoms should prompt CA125 (and consideration of colorectal and pancreatic cancer)',
        'Persistent or frequent (>12 times/month) symptoms: bloating/abdominal distension, early satiety/loss of appetite, pelvic or abdominal pain, urinary urgency/frequency',
        'Also consider with: unexplained weight loss, fatigue, or change in bowel habit',
      ],
    },

    { type: 'heading', level: 2, text: '2WW & Investigation Pathway' },

    {
      type: 'table',
      headers: ['Scenario', 'Action'],
      rows: [
        ['Ascites and/or a pelvic or abdominal mass (not obviously fibroids)', 'Refer directly via 2WW (suspected ovarian cancer)'],
        ['Woman ≥50 with persistent/frequent IBS-type or other suggestive symptoms', 'Measure serum CA125 first'],
        ['CA125 ≥35 IU/mL', 'Arrange urgent (direct-access) ultrasound — abdomen and transvaginal pelvis'],
        ['Ultrasound suggestive of ovarian cancer', '2WW gynaecology referral'],
        ['Ultrasound normal but CA125 raised', 'Keep looking — assess for other causes of raised CA125 and other cancers (FIT for colorectal, CT abdomen ± pancreatic pathway if weight loss); safety-net and review'],
        ['Symptoms persist despite normal investigations', 'Re-evaluate and re-investigate — do not falsely reassure'],
      ],
      caption: 'NICE recommends a sequential CA125-then-ultrasound approach. CA125 can be falsely negative (especially in early or non-serous tumours) — if clinical suspicion is strong, arrange CA125 and ultrasound in parallel rather than waiting.',
    },

    { type: 'heading', level: 2, text: 'CA125 — Interpreting Caveats' },

    {
      type: 'list',
      items: [
        'CA125 is neither perfectly sensitive nor specific',
        'Raised in many benign conditions: endometriosis, fibroids, PID, menstruation, pregnancy, ascites of any cause, liver disease, heart failure, recent abdominal surgery',
        'Also raised in non-ovarian malignancies (lung, breast, pancreatic, colorectal) — a raised CA125 with a normal pelvic ultrasound should prompt a broader cancer search',
        'In premenopausal women especially, mild elevations are common and less specific',
        'Do not use CA125 as a population screening test — screening has not been shown to reduce mortality',
      ],
    },

    { type: 'heading', level: 2, text: 'Risk Factors' },

    {
      type: 'list',
      items: [
        'Age and postmenopausal status (most cases occur after the menopause)',
        'Factors increasing lifetime ovulation / oestrogen exposure: nulliparity, early menarche/late menopause, obesity, HRT use',
        'Genetic: BRCA1/BRCA2 mutations (markedly increased risk — risk-reducing salpingo-oophorectomy may be offered), Lynch syndrome',
        'Family history of breast or ovarian cancer',
        'Protective: combined oral contraceptive use, multiparity, breastfeeding',
      ],
    },

    { type: 'heading', level: 2, text: 'Classification & Treatment' },

    {
      type: 'table',
      headers: ['Type', 'Behaviour', 'Notes'],
      rows: [
        ['High-grade serous (~70%)', 'Aggressive, metastasises early', 'Often arises from the distal fallopian tube/peritoneum; associated with BRCA; relatively chemosensitive (platinum-based)'],
        ['Low-grade (~30%)', 'Slower growing', 'Respond less well to chemotherapy'],
        ['Other types', 'Endometrioid, clear cell, mucinous, germ cell (younger women)', 'Germ cell tumours use different tumour markers (AFP, hCG, LDH)'],
      ],
    },

    {
      type: 'list',
      items: [
        'Treatment is by a specialist gynae-oncology MDT: cytoreductive ("debulking") surgery and platinum-based chemotherapy (carboplatin ± paclitaxel)',
        'Neoadjuvant chemotherapy may precede surgery in very advanced/bulky disease',
        'PARP inhibitors (e.g. olaparib) for BRCA-mutated/HRD disease as maintenance',
        'Signpost Target Ovarian Cancer, CRUK, and Macmillan for support',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Suspected cancer pathways including gynaecological cancers' },
        { id: 'endometrial-cancer', label: 'Endometrial Cancer', subtitle: 'Other gynaecological malignancy — PMB pathway' },
        { id: 'colorectal-cancer', label: 'Colorectal Cancer', subtitle: 'FIT testing — consider alongside ovarian cancer in vague abdominal symptoms' },
        { id: 'menopause', label: 'Menopause', subtitle: 'Symptoms wrongly attributed to menopause — keep ovarian cancer in mind' },
      ],
    },

  ],
}

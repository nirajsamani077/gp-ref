import type { Note } from '../data/notes'

export const diverticularDisease: Note = {
  id: 'diverticular-disease',
  title: 'Diverticular Disease & Diverticulitis',
  subtitle: 'Spectrum, when to admit, antibiotic use, Hinchey classification and colorectal cancer exclusion',
  tags: ['gastroenterology', 'colorectal'],

  body: 'diverticular disease diverticulosis diverticulitis acute diverticulitis complicated diverticulitis perforation abscess fistula stricture sigmoid colon LLQ pain change in bowel habit PR bleeding co-amoxiclav metronidazole ciprofloxacin colonoscopy CT colonography high fibre diet ispaghula Fybogel bulk forming laxative antispasmodic mebeverine surgery Hartmanns Hinchey classification pneumaturia faecaluria FIT test colorectal cancer NICE NG147 mesalazine rifaximin',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Diverticular Disease — Spectrum and Key Facts',
      items: [
        'Diverticula: outpouchings of colonic mucosa through points of weakness in the muscle wall — predominantly in sigmoid colon; prevalence ~50% in Western adults >60 years',
        'Diverticulosis: asymptomatic diverticula — incidental finding; no treatment required beyond dietary advice and reassurance',
        'Diverticular disease: symptomatic diverticula — LLQ pain, altered bowel habit, bloating WITHOUT fever or raised inflammatory markers',
        'Acute uncomplicated diverticulitis: inflammation ± infection of a diverticulum — fever, LLQ pain, systemic upset, raised CRP/WBC',
        'Complicated acute diverticulitis: Hinchey classification II–IV (pericolic abscess → pelvic abscess → purulent peritonitis → faecal peritonitis) — all require hospital admission',
        'Low-fibre Western diet causes high intraluminal pressure → mucosa herniates through weak points in the muscle wall alongside blood vessels',
      ],
    },

    { type: 'heading', level: 2, text: 'Hinchey Classification — Severity of Complicated Diverticulitis' },

    {
      type: 'table',
      headers: ['Stage', 'Description', 'Management'],
      rows: [
        ['Hinchey I', 'Pericolic abscess or phlegmon (walled-off collection adjacent to colon)', 'Hospital admission; IV antibiotics; CT-guided drainage if abscess >4 cm; may avoid surgery'],
        ['Hinchey II', 'Pelvic abscess (purulent collection in pelvis)', 'Hospital admission; IV antibiotics; CT-guided drainage; surgery may be needed'],
        ['Hinchey III', 'Purulent peritonitis — pus spread throughout abdomen', 'Emergency surgery — laparoscopic or open; Hartmann\'s procedure (colostomy) or primary anastomosis in selected cases'],
        ['Hinchey IV', 'Faecal peritonitis — faecal contamination of abdominal cavity', 'Emergency surgery; highest mortality; Hartmann\'s procedure; ITU post-operatively'],
      ],
      caption: 'Most GPs will only see Hinchey 0 (uncomplicated diverticulitis) or I (pericolic phlegmon/small abscess). Hinchey II–IV present with peritonitis and/or systemic sepsis — these are surgical emergencies.',
    },

    { type: 'heading', level: 2, text: 'When to Admit vs Treat in Primary Care' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'ADMIT URGENTLY if Any of:',
      items: [
        'Peritonitis or significant peritonism (guarding, rigidity, rebound tenderness)',
        'Sepsis: fever >38.5°C + tachycardia + hypotension or systemic unwell',
        'Inability to tolerate oral intake or medication',
        'Significant rectal bleeding requiring investigation or haemostasis',
        'Suspected perforation, abscess (severe LLQ pain + tender mass), or fistula (pneumaturia — air in urine, faecaluria)',
        'Immunocompromised patient (steroids, chemotherapy, HIV, DM) — higher risk of rapid deterioration',
        'Bowel obstruction',
        'No improvement after 48–72 hours of primary care management',
      ],
    },

    { type: 'heading', level: 2, text: 'Acute Uncomplicated Diverticulitis — Primary Care Management' },

    {
      type: 'list',
      items: [
        'NICE NG147 (2019): routine antibiotics are NOT recommended for mild uncomplicated acute diverticulitis in immunocompetent patients — most resolve without antibiotics',
        'Antibiotics are indicated if: systemically unwell, immunocompromised, diabetes, significant co-morbidity, very elevated CRP (>100), or fails to improve after 48 hours without antibiotics',
        'If antibiotics needed: co-amoxiclav 500/125 mg TDS for 5 days (oral)',
        'Penicillin allergy: cefalexin 500 mg QDS + metronidazole 400 mg TDS for 5 days; or ciprofloxacin 500 mg BD + metronidazole 400 mg TDS (reserve ciprofloxacin due to resistance concerns)',
        'Diet during acute episode: clear fluids for 48–72 hours (bowel rest reduces stool volume and pain); then low-residue diet; slowly reintroduce normal diet over 2–3 days',
        'Analgesia: paracetamol 1g QDS first-line; avoid NSAIDs (increased risk of perforation in diverticulitis — small but real); avoid opioids if possible (constipation worsens the condition)',
        'Review within 48 hours: if not improving → admit; if improving → continue treatment and arrange colonoscopy for confirmation after 6–8 weeks',
      ],
    },

    { type: 'heading', level: 2, text: 'Fistula — A Specific Complication to Recognise' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Colovesical Fistula — Pneumaturia and Faecaluria',
      items: [
        'Colovesical fistula: abnormal communication between sigmoid colon and bladder — complication of diverticular disease (or colorectal cancer, Crohn\'s disease, radiation)',
        'Classic symptoms: pneumaturia (air in urine — bubbles, or patient reports "fizzy urine"), faecaluria (faeces in urine — urine looks cloudy or smells foul), recurrent urinary tract infections refractory to antibiotics',
        'Do NOT dismiss recurrent UTIs in a patient with known diverticular disease — suspect fistula',
        'Investigation: CT abdomen + pelvis with contrast (most useful); cystoscopy; barium enema (historical)',
        'Management: surgical — usually colorectal + urology MDT; elective sigmoid colectomy + fistula repair; urgency depends on symptoms',
      ],
    },

    { type: 'heading', level: 2, text: 'Long-Term Management of Diverticular Disease' },

    {
      type: 'table',
      headers: ['Measure', 'Detail'],
      rows: [
        ['Confirm diagnosis', 'Colonoscopy (gold standard) or CT colonography (less invasive) — to confirm diverticular disease AND exclude colorectal cancer; arrange 6–8 weeks after the acute episode has settled (not before)'],
        ['High-fibre diet', 'Target 30g fibre/day; key sources: wholegrain bread, oats, fruit, vegetables, pulses; dietary fibre reduces constipation and recurrence; lifelong recommendation'],
        ['Bulk-forming laxative', 'Ispaghula husk (Fybogel 1 sachet BD with water) — if dietary fibre alone insufficient; maintains soft bulky stool; reduces intraluminal pressure'],
        ['Analgesia / antispasmodics', 'Mebeverine 135 mg TDS or hyoscine butylbromide (Buscopan) 10–20 mg TDS for colicky pain; paracetamol as needed; avoid NSAIDs and opioids long-term'],
        ['Avoid NSAIDs', 'Associated with diverticular perforation and bleeding — specifically counsel patients with diverticular disease'],
        ['Exercise', 'Regular physical activity reduces constipation and lowers risk of further episodes; recommend 150 mins/week moderate exercise'],
        ['Elective surgery', 'Sigmoid colectomy considered after ≥2 episodes of complicated diverticulitis, or recurrent debilitating uncomplicated episodes — colorectal MDT decision'],
      ],
    },

    { type: 'heading', level: 2, text: 'Colorectal Cancer Exclusion — Critical in All New Presentations' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Do Not Attribute All Symptoms to Diverticular Disease',
      items: [
        'ALL patients with new suspected diverticular disease: arrange colonoscopy or CT colonography after acute episode settles — to EXCLUDE colorectal cancer, which can be clinically indistinguishable',
        'Do NOT attribute persistent rectal bleeding or iron deficiency anaemia to diverticular disease without excluding malignancy first — even in known diverticular disease patients',
        'FIT (faecal immunochemical test): if positive (>10 µg Hb/g) → urgent 2WW colorectal referral, even in known diverticular disease',
        '2WW referral criteria: see Colorectal Cancer / 2WW note; prioritise if age >60, PR bleeding with change in bowel habit, unexplained IDA, or positive FIT',
        'Synchronous diagnoses are possible: diverticular disease and colorectal cancer can coexist in the same patient',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG147 — Diverticular Disease (2019)', url: 'https://www.nice.org.uk/guidance/ng147' },
        { label: 'NICE CKS — Diverticular Disease', url: 'https://cks.nice.org.uk/topics/diverticular-disease/' },
        { label: 'Guts UK — Diverticular Disease', url: 'https://gutscharity.org.uk/advice-and-information/conditions/diverticular-disease/' },
        { label: 'NHS — Diverticular Disease', url: 'https://www.nhs.uk/conditions/diverticular-disease-and-diverticulitis/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Acute complicated diverticulitis / peritonitis: UHDB Queen\'s Hospital Burton A&E / SAU — emergency admission; phone ahead for surgical review',
        'Elective colonoscopy / CT colonography (diagnosis confirmation + cancer exclusion): UHDB Queen\'s Hospital Burton endoscopy — via e-RS; allow 6–8 weeks post-acute episode; note: arrange FIT first if 2WW criteria met',
        'Colorectal 2WW (suspected cancer): UHDB Burton or Good Hope Hospital (UHB) via e-RS 2WW colorectal pathway',
        'Elective colorectal surgery (recurrent complicated diverticulitis): UHDB Burton colorectal surgery — via e-RS; discuss with patient after 2nd significant episode',
        'Gastroenterology (symptomatic diverticular disease, chronic abdominal pain): UHDB Burton gastroenterology if complex or atypical',
      ],
    },
  ],
}

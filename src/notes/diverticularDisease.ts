import type { Note } from '../data/notes'

export const diverticularDisease: Note = {
  id: 'diverticular-disease',
  title: 'Diverticular Disease & Diverticulitis',
  subtitle: 'Spectrum from asymptomatic diverticulosis to complicated diverticulitis',
  tags: ['gastroenterology', 'colorectal'],

  body: 'diverticular disease diverticulosis diverticulitis acute diverticulitis complicated diverticulitis perforation abscess fistula stricture sigmoid colon LLQ pain change in bowel habit PR bleeding co-amoxiclav metronidazole ciprofloxacin colonoscopy CT colonography high fibre diet bulk forming laxative antispasmodic mebeverine surgery Hartmanns',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Diverticular Disease — Spectrum',
      items: [
        'Diverticula: small outpouchings of colonic mucosa through the muscle wall — predominantly in the sigmoid colon; prevalence increases with age (common after age 60)',
        'Diverticulosis: asymptomatic diverticula — incidental finding; NO treatment needed beyond dietary advice',
        'Diverticular disease: symptomatic diverticula (LLQ pain, change in bowel habit) without infection — treat symptoms',
        'Acute diverticulitis: inflammation/infection of a diverticulum — fever, LLQ pain, systemic upset',
        'Complicated acute diverticulitis: perforation, abscess, fistula (commonly to bladder — pneumaturia, faecaluria), stricture, obstruction, haemorrhage',
        'Cause: low-fibre diet leads to higher intraluminal colonic pressure, forcing mucosa through points of weakness',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Admit (Acute Complicated Diverticulitis)' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'ADMIT URGENTLY if Any of:',
      items: [
        'Peritonitis or severe localised peritonism — suspected perforation',
        'Sepsis or systemic inflammatory response (fever >38.5°C, tachycardia, hypotension)',
        'Significant rectal bleeding requiring urgent investigation',
        'Unable to tolerate oral fluids',
        'Immunocompromised or significant comorbidity',
        'Suspected abscess or fistula',
        'Bowel obstruction',
        'CT abdomen and pelvis + IV antibiotics + surgical review required in hospital',
      ],
    },

    { type: 'heading', level: 2, text: 'Acute Uncomplicated Diverticulitis — Primary Care Management' },

    {
      type: 'list',
      items: [
        'Antibiotics: only if SYSTEMICALLY UNWELL or immunocompromised (NICE no longer recommends routine antibiotics for mild uncomplicated diverticulitis)',
        'If antibiotics indicated: co-amoxiclav 500/125 mg TDS for 5 days',
        'Penicillin allergy: cefalexin (or TMP) + metronidazole for 5 days; ciprofloxacin can be used as step-down from IV',
        'Dietary advice during acute attack: clear fluids and low-residue diet for 48–72 hours (bowel rest), then gradually reintroduce normal diet',
        'Safety net and review: review within 48 hours — especially if no antibiotics given; admit if no improvement',
        'Analgesia: paracetamol; avoid NSAIDs (risk of perforation); avoid opioids if possible (constipation)',
      ],
    },

    { type: 'heading', level: 2, text: 'Long-Term Management of Diverticular Disease' },

    {
      type: 'table',
      headers: ['Measure', 'Detail'],
      rows: [
        ['Confirm diagnosis', 'Colonoscopy (gold standard) or CT colonography (for patients who cannot tolerate colonoscopy). Exclude colorectal cancer in new presentations. Colonoscopy usually 6–8 weeks after acute episode has settled.'],
        ['High-fibre diet', 'For life — prevents constipation and reduces risk of further diverticulitis episodes. Aim for 30g fibre/day.'],
        ['Bulk-forming laxatives', 'Ispaghula husk (Fybogel) or psyllium — if dietary fibre insufficient; ensures soft bulky stools'],
        ['Analgesia for symptoms', 'Paracetamol first line; antispasmodics (mebeverine 135 mg TDS or hyoscine butylbromide) for colicky pain'],
        ['Avoid NSAIDs', 'Associated with risk of perforation and complications in diverticular disease'],
        ['Exercise', 'Regular physical activity reduces constipation and risk of further episodes'],
        ['Elective surgery', 'Sigmoid colectomy considered if recurrent complicated diverticulitis; discuss with colorectal MDT'],
      ],
    },

    { type: 'heading', level: 2, text: 'Red Flags — Do Not Miss' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Exclude Colorectal Cancer',
      items: [
        'All patients with suspected new diverticular disease or change in bowel habit: refer for colonoscopy to exclude colorectal cancer',
        'Persistent unexplained rectal bleeding or IDA in a patient with known diverticular disease: do NOT attribute to diverticula without excluding malignancy',
        '2WW referral criteria: see colorectal cancer / FIT test note',
        'FIT (faecal immunochemical test): if positive, urgent colorectal referral regardless of diverticular disease diagnosis',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Acute complicated diverticulitis: UHDB Queen\'s Hospital Burton A&E / surgical admissions',
        'Colonoscopy / CT colonography (new diagnosis confirmation): UHDB Queen\'s Hospital Burton endoscopy — via e-RS; allow 6–8 weeks after acute episode',
        'Colorectal 2WW (suspected cancer): UHDB Burton or Good Hope (UHB) 2WW colorectal pathway',
        'Elective colorectal surgery (recurrent diverticulitis): UHDB Burton colorectal surgery — discuss with patient after 2nd significant episode',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Diverticular Disease', url: 'https://cks.nice.org.uk/topics/diverticular-disease/' },
        { label: 'NICE NG147 — Diverticular Disease', url: 'https://www.nice.org.uk/guidance/ng147' },
        { label: 'NHS — Diverticular Disease', url: 'https://www.nhs.uk/conditions/diverticular-disease-and-diverticulitis/' },
        { label: 'Guts UK — Diverticular Disease', url: 'https://gutscharity.org.uk/advice-and-information/conditions/diverticular-disease/' },
      ],
    },
  ],
}

import type { Note } from '../data/notes'

export const ibs: Note = {
  id: 'ibs',
  title: 'Irritable Bowel Syndrome (IBS)',
  subtitle: 'Positive diagnosis, red-flag exclusion, FODMAP diet, antispasmodics, laxatives and neuromodulators',
  tags: ['gastroenterology'],

  body: `irritable bowel syndrome IBS functional gut-brain Rome criteria red flags faecal calprotectin FIT coeliac CA125 FODMAP antispasmodic mebeverine buscopan loperamide laxative ispaghula linaclotide amitriptyline SSRI CBT bile acid malabsorption microscopic colitis bloating abdominal pain altered bowel habit`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG61 — Irritable Bowel Syndrome', url: 'https://www.nice.org.uk/guidance/cg61' },
        { label: 'NICE CKS — IBS', url: 'https://cks.nice.org.uk/topics/irritable-bowel-syndrome/' },
        { label: 'BDA — IBS & FODMAP Diet', url: 'https://www.bda.uk.com/resource/irritable-bowel-syndrome-diet.html' },
      ],
    },

    { type: 'heading', level: 2, text: 'When to Consider — and the Positive Diagnosis' },

    {
      type: 'list',
      items: [
        'Consider IBS if ≥6 months of "ABC": Abdominal pain, Bloating, and Change In Bowel Habit',
        'IBS is a POSITIVE diagnosis (not just exclusion) — exclude red flags and organic causes, then diagnose confidently using the criteria below',
        'Rome/NICE positive criteria: abdominal pain relieved by defecation OR associated with altered stool frequency/form, PLUS ≥2 of: altered stool passage (straining, urgency, incomplete evacuation), bloating, symptoms worse after eating, PR mucus',
        'Subtype by predominant habit: IBS-C (constipation), IBS-D (diarrhoea), IBS-M (mixed)',
      ],
    },

    { type: 'heading', level: 2, text: 'Red Flags — Point AWAY from IBS' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Investigate / Refer if Any of:',
      items: [
        'Age ≥50 with new symptoms (new IBS is rare over 50 — think colorectal/ovarian cancer)',
        'Unintentional weight loss',
        'Rectal bleeding or anaemia',
        'Family history of bowel or ovarian cancer',
        'Abdominal or rectal mass; nocturnal symptoms waking from sleep',
        'Inflammatory markers raised / raised faecal calprotectin → think IBD',
      ],
    },

    { type: 'heading', level: 2, text: 'Baseline Investigations (to exclude mimics)' },

    {
      type: 'list',
      items: [
        'Bloods: FBC, ESR/CRP, coeliac serology (anti-TTG), and CA125 in women (exclude ovarian cancer); consider TFTs',
        'Stool: faecal calprotectin if <45 with diarrhoea (to exclude IBD); FIT test if meeting referral criteria; H. pylori stool antigen if dyspepsia',
        'Do NOT routinely do colonoscopy or extensive testing if criteria met and no red flags',
        'Consider in IBS-D specifically: bile acid malabsorption (especially post-cholecystectomy — SeHCAT test) and microscopic colitis (older patients, watery diarrhoea, drug-associated)',
      ],
    },

    { type: 'heading', level: 2, text: 'Dietary & Lifestyle Advice (first-line)' },

    {
      type: 'list',
      items: [
        'Regular meals, don\'t eat too quickly or skip meals; adequate fluids (~8 cups water/day), limit caffeine (<3 cups tea/coffee), alcohol and fizzy drinks',
        'Adjust fibre by subtype: reduce insoluble fibre (bran, wholegrain, skins) which worsens bloating; soluble fibre (oats, ispaghula) is better tolerated; 1 tbsp linseeds for wind',
        'Trial a low-FODMAP diet (restricting fermentable carbohydrates) — should be done with a dietitian; reasonable evidence for symptom benefit',
        'Probiotics: if tried, take for ≥4 weeks at the recommended dose; evidence is limited (Symprove is the one endorsed by BSG but is expensive)',
        'Address stress, sleep and physical activity — central to the gut–brain axis',
      ],
    },

    { type: 'heading', level: 2, text: 'Pharmacological Management by Symptom' },

    {
      type: 'table',
      headers: ['Predominant symptom', 'Treatment'],
      rows: [
        ['Pain / spasm', 'Antispasmodics: mebeverine, hyoscine butylbromide (Buscopan), or peppermint oil'],
        ['Constipation (IBS-C)', 'Bulk-forming laxative first (ispaghula/Fybogel) — AVOID lactulose (worsens bloating); then osmotic (macrogol) or stimulant (senna/bisacodyl); linaclotide if constipation persists >12 months despite ≥2 laxatives'],
        ['Diarrhoea (IBS-D)', 'Loperamide 2 mg after each loose stool, titrated to response'],
        ['Refractory / global symptoms', 'Low-dose tricyclic (amitriptyline 5–10 mg nocte, titrate) as a gut neuromodulator (2nd line: SSRI); refer for IBS-specific CBT/gut-directed hypnotherapy if symptoms persist >12 months'],
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Framing for Patients',
      items: [
        'IBS reflects dysregulation of the gut–brain axis — symptoms are real and physiological, not "all in the head"',
        'Looking after the brain helps the gut (sleep, stress, mood) — a biopsychosocial approach gives the best outcomes',
        'It is a chronic relapsing-remitting condition; the aim is control, not cure',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'antispasmodics-ibs', label: 'Antispasmodics & IBS Medications', subtitle: 'Detailed drug options for IBS' },
        { id: 'coeliac-disease', label: 'Coeliac Disease', subtitle: 'Always exclude with anti-TTG before diagnosing IBS' },
        { id: 'ibd', label: 'Inflammatory Bowel Disease', subtitle: 'Faecal calprotectin to distinguish IBD from IBS' },
        { id: 'colorectal-cancer', label: 'Colorectal Cancer', subtitle: 'Red-flag exclusion — FIT testing, 2WW' },
        { id: 'ovarian-cancer', label: 'Ovarian Cancer & CA125', subtitle: 'New "IBS" over 50 in women — check CA125' },
      ],
    },

  ],
}

import type { Note } from '../data/notes'

export const adultConstipation: Note = {
  id: 'adult-constipation',
  title: 'Adult Constipation',
  subtitle: 'Laxative types, doses, faecal impaction, OIC, newer agents & complications',
  tags: ['gastroenterology', 'symptoms'],

  body: 'constipation adult laxative bulk forming osmotic stimulant stool softener ispaghula husk Fybogel Movicol Laxido macrogol lactulose senna bisacodyl docusate sodium picosulfate glycerol suppository prucalopride linaclotide naloxegol naldemedine methylnaltrexone opioid induced OIC faecal impaction disimpaction Bristol stool chart red flags CIBH FIT 2WW fissure proctalgia rectal prolapse NICE IBS-C slow transit constipation',

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Definition & Assessment',
    },
    {
      type: 'para',
      text: 'Constipation = defecation that is unsatisfactory because of infrequent stools, difficult passage, or incomplete evacuation. Stools are often dry and hard. Most constipation in adults is idiopathic, IBS-related, or secondary to medication or inadequate fibre/fluid.',
    },
    {
      type: 'list',
      items: [
        'Clarify what the patient means by constipation — frequency, consistency, straining, incomplete emptying, bloating',
        'Change in bowel habit >60 years: FIT test and consider 2WW referral if result positive',
        'Assess for faecal loading / impaction — digital rectal examination if indicated',
        'Identify secondary causes: medications, hypothyroidism, hypercalcaemia, neuromuscular disorders, IBS, dehydration, low fibre',
        'Always ask about: duration, associated rectal bleeding, weight loss, family history of CRC or IBD',
        'Blood tests if refractory: FBC, TFTs, HbA1c, U&E, calcium',
      ],
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — Refer / Investigate Urgently',
      items: [
        'Persistent unexplained change in bowel habit (especially >50 years)',
        'Unintended weight loss >4kg',
        'Iron deficiency anaemia, fever, or nocturnal symptoms',
        'Persistent rectal bleeding without anal symptoms',
        'Palpable mass in lower right abdomen or pelvis',
        'Narrowing of stool calibre',
        'Family history of colorectal cancer or IBD',
        'Severe constipation unresponsive to adequate treatment',
        'Neurological symptoms (may indicate cauda equina or cord pathology)',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Common Drug Causes',
    },
    {
      type: 'table',
      headers: ['Drug class', 'Examples'],
      rows: [
        ['Opioid analgesics', 'Codeine, morphine, oxycodone, tramadol, compound products (co-codamol, co-dydramol)'],
        ['Antimuscarinics', 'TCAs, antipsychotics, antispasmodics (hyoscine, propantheline), anti-parkinsonian drugs (procyclidine, trihexyphenidyl)'],
        ['Calcium channel blockers', 'Verapamil (most constipating); diltiazem to lesser extent'],
        ['Iron salts', 'Ferrous sulphate, ferrous fumarate — switch to ferrous gluconate if problematic'],
        ['Calcium & aluminium salts', 'Calcium supplements, aluminium antacids'],
        ['Other', 'Antiepileptics, diuretics, 5HT3 antagonists (ondansetron), phenothiazines, SSRIs/SNRIs'],
      ],
      caption: 'If a medication is causing constipation: consider dose reduction, switching, or prescribing prophylactic laxatives alongside (particularly for opioids).',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Laxative Guidelines — Quick Reference',
    },
    {
      type: 'image',
      src: '/images/constipation-gp-notebook.jpg',
      alt: 'Laxative guidelines for adults — grid showing which laxative to use by aetiology: drug-induced, chronic, chronic with IBS, chronic frailty, pregnancy',
      caption: 'Laxative choice by clinical context. Key messages: always increase fluid/fibre; macrogol is the backbone for most chronic constipation; bulk forming is first-line for episodic/dietary constipation; avoid bulk laxatives in drug-induced (opioid) constipation.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Treatment Ladder — Standard Constipation',
    },
    {
      type: 'table',
      headers: ['Step', 'Treatment', 'Notes'],
      rows: [
        ['All patients', 'Lifestyle: increase dietary fibre (25–30g/day), adequate fluid intake (1.5–2L/day), exercise, toileting routine (semi-squatting position — feet raised on a stool, knees above hips, lean forward)', 'Toilet posture significantly improves evacuation mechanics. Squatty potty equivalent'],
        ['1st line', 'Bulk-forming laxative: Ispaghula husk (Fybogel) 1 sachet BD dissolved in water', 'MUST be taken with plenty of fluid. Not suitable for chronic constipation >6 months, intestinal obstruction, reduced gut motility, debilitated/elderly patients. Takes 2–3 days to work'],
        ['2nd line', 'Osmotic laxative: Macrogol (Laxido / Movicol) 1–3 sachets daily in divided doses. +/- Stimulant: Senna 15–30mg at night OR Bisacodyl 5–10mg at night (up to 20mg)', 'Macrogol first for hard stools. Add stimulant if stools are soft but difficult to pass or if frequency is the problem. Takes 1–2 days'],
        ['3rd line', 'Refer to gastroenterology or specialist with interest in constipation. Initiation of specialist agents (prucalopride, linaclotide) following specialist recommendation', 'Bloods: FBC, TFTs, HbA1c, Ca, U&E before referral'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Laxatives — Full Prescribing Guide',
    },
    {
      type: 'image',
      src: '/images/constipation-algorithm.jpg',
      alt: 'Constipation laxative comparison — background information, advantages and disadvantages of each class including bulk forming, stimulant, osmotic, linaclotide, lubiprostone, prucalopride and peripheral opioid antagonists',
      caption: 'Detailed advantage/disadvantage comparison of all laxative classes. Key: macrogol is the most evidence-based osmotic agent; lactulose is NOT recommended in IBS; stimulants work faster but cause cramps; newer agents reserved for treatment failure.',
    },
    {
      type: 'table',
      headers: ['Class', 'Drug', 'Dose', 'Mechanism', 'Side effects & counselling'],
      rows: [
        [
          'Bulk-forming',
          'Ispaghula husk (Fybogel)\nMethylcellulose\nSterculia (Normacol)',
          'Fybogel: 1 sachet BD\nMethylcellulose: 3–6 x 500mg tabs BD\nSterculia: 1–2 heaped tsp OD–BD',
          'Absorbs water, increases stool bulk and stimulates peristalsis via rectal distension',
          'Must take with at least 150–200ml water. Bloating, flatulence, rumbling — usually settles. Avoid in intestinal obstruction, reduced motility, swallowing difficulties. NOT suitable for opioid-induced constipation. 2–3 days onset',
        ],
        [
          'Osmotic',
          'Macrogol (Laxido / Movicol)\n\nLactulose',
          'Macrogol: 1–3 sachets/day in divided doses (up to 8 sachets/day for impaction)\n\nLactulose: 15ml BD (onset 48hrs)',
          'Macrogol: retains water in stool by osmosis — softens and increases volume\n\nLactulose: non-absorbable disaccharide → osmotic + fermented by colonic bacteria',
          'Macrogol: bloating and cramping initially; well tolerated long-term; preferred in elderly and frailty. Prescribe generically as macrogol\n\nLactulose: significant bloating and flatulence from bacterial fermentation. NOT recommended in IBS — worsens bloating. Less effective than macrogol. Not ideal first choice',
        ],
        [
          'Stimulant',
          'Senna\n\nBisacodyl\n\nSodium picosulfate\n\nDocusate sodium',
          'Senna: 15–30mg at night (2–4 x 7.5mg tabs)\nBisacodyl tabs: 5–10mg at night (up to 20mg)\nBisacodyl supp: 10mg in the morning\nSodium picosulfate: 5–10mg at night (up to 15–30mg)\nDocusate: 100–500mg/day in divided doses',
          'Stimulate sensory nerves in colonic mucosa → increased peristalsis and electrolyte secretion. Docusate also acts as a stool softener',
          'Onset 6–12 hours (overnight use ideal for morning bowel motion). Abdominal cramping common — reduce dose if severe. Diarrhoea, nausea, rectal bleeding at high doses. Avoid in intestinal obstruction. Long-term use traditionally avoided (theoretical melanosis coli — harmless but staining). Docusate: additional softener effect — useful in OIC. Sodium picosulfate elixir: useful when tablets not tolerated',
        ],
        [
          'Stool softener',
          'Glycerol suppositories',
          '1g / 2g / 4g suppository PRN',
          'Lubricates and softens stool; mild rectal stimulation',
          'For difficulty evacuating hard stool from rectum. Insert and retain 15–30 min. Safe in pregnancy. Use alongside oral laxatives if needed',
        ],
        [
          'Enemas',
          'Sodium citrate micro-enema (Micralax)\nSodium phosphate retention enema\nArachis oil retention enema\nDocusate sodium micro-enema',
          'Micralax: 5ml single dose\nSodium phosphate: as directed\nArachis oil: overnight, then sodium phosphate in morning',
          'Local osmotic effect / lubrication / distension',
          'Use when oral laxatives + suppositories insufficient. Arachis oil: AVOID in peanut allergy. Often requires district nurse/carer administration. Reserve for faecal impaction (see below)',
        ],
      ],
      caption: 'Always prescribe macrogol generically (Laxido or Movicol — same drug, different flavouring). Macrogol can be taken mixed into cold drinks. Stimulants best taken at night for morning effect. Review after 1–2 weeks of any new laxative.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Symptom-Directed Laxative Choice',
    },
    {
      type: 'image',
      src: '/images/constipation-laxative-guide.jpeg',
      alt: 'Bristol stool chart types 1–7, OIC guidance box with naloxegol and naldemedine, and drug mechanism/side effects table',
      caption: 'Bristol stool chart: types 1–2 = constipation; 3–4 = ideal; 5–7 = diarrhoea. OIC guidance: lifestyle + laxatives first; naloxegol/naldemedine if ≥1 laxative class failed for ≥4 days over 2 weeks.',
    },
    {
      type: 'table',
      headers: ['Presenting symptom', 'Laxative of choice', 'Rationale'],
      rows: [
        ['Infrequent urge (slow transit)', 'Stimulant (senna / bisacodyl)', 'Increases peristaltic activity'],
        ['Small, hard stools (inadequate hydration)', 'Bulk-forming (Fybogel) + adequate fluid', 'Increases stool bulk and softness'],
        ['Slow transit constipation', 'Osmotic (macrogol)', 'Retains water in stool; softens and accelerates transit'],
        ['Difficulty evacuating (outlet obstruction type)', 'Glycerol suppository or bisacodyl suppository', 'Local rectal stimulation and lubrication'],
        ['Megarectum / megacolon', 'Osmotic (macrogol)', 'Increases stool volume to trigger evacuation reflex'],
        ['Opioid-induced constipation', 'Stimulant + osmotic (avoid bulk-forming)', 'See OIC section below'],
        ['IBS-C (constipation with pain)', 'Macrogol (not lactulose). Consider linaclotide', 'Lactulose worsens bloating in IBS'],
        ['Pregnancy', 'Fybogel 1st line; macrogol or lactulose 2nd line; glycerol suppositories or bisacodyl suppository PRN', 'All considered safe. Avoid stimulant laxatives regularly in 1st trimester'],
        ['Frailty / elderly', 'Macrogol — no dose adjustment needed. Sodium picosulfate liquid if tablets not tolerated. Avoid bulk-forming if fluid intake inadequate', 'Macrogol well tolerated. Avoid lactulose (bloating). Suppositories helpful if rectal loading'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Faecal Impaction — Management',
    },
    {
      type: 'table',
      headers: ['Step', 'Treatment'],
      rows: [
        ['1st line (oral)', 'Macrogol (Laxido/Movicol) 8 sachets/day in divided doses over 6hrs +/- Senna 2–4 tabs at night OR Bisacodyl 5–10mg at night'],
        ['2nd line (suppositories)', 'Bisacodyl suppository 10mg in the morning +/- Glycerol suppository 4g'],
        ['3rd line (micro-enemas)', 'Docusate sodium micro-enema STAT OR Sodium citrate micro-enema (Micralax) STAT'],
        ['4th line (retention enemas)', 'Sodium phosphate retention enema STAT OR Arachis oil retention enema STAT. For hard impacted stool: arachis oil overnight + sodium phosphate enema or sodium citrate micro-enema in the morning'],
      ],
      caption: 'Assess for impaction clinically (palpable mass, loaded rectum on PR). Check plain AXR if uncertain. After disimpaction: start maintenance laxatives to prevent recurrence. Wean gradually over weeks.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Opioid-Induced Constipation (OIC)',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'OIC — Start Laxatives at the Same Time as the Opioid',
      items: [
        'Do NOT use bulk-forming laxatives in OIC — opioids reduce gut motility and bulk agents can worsen obstruction',
        'Prophylaxis: start stimulant (senna 15–30mg at night) + osmotic (macrogol 1–3 sachets/day) when opioid is first prescribed',
        'Treatment if constipated: increase doses — senna up to 30mg + macrogol up to 3 sachets. Add docusate sodium (softener + stimulant) up to 500mg/day. Consider sodium picosulfate 5–30mg at night as alternative stimulant',
        'If impacted: see faecal impaction section above',
        'If laxatives inadequate: consider peripheral opioid receptor antagonists (naloxegol, naldemedine, methylnaltrexone — specialist/palliative care initiation)',
      ],
    },
    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Indication / notes'],
      rows: [
        ['Naloxegol (Moventig)', '25mg OD (start 12.5mg if renal impairment or drug interactions)', 'Peripheral opioid receptor antagonist. Licensed for OIC in adults where laxatives have not provided adequate relief. NICE TA345: option in palliative care. Does not reverse central analgesia. Check interactions (CYP3A4 inhibitors — halve dose)'],
        ['Naldemedine (Rizmoic)', '200 micrograms OD', 'Peripheral opioid receptor antagonist. Alternative to naloxegol. NICE approved. Diarrhoea, GI discomfort, nausea — main side effects'],
        ['Methylnaltrexone (Relistor)', 'By weight SC injection: <38kg = 150mcg/kg; 38–62kg = 8mg; 62–114kg = 12mg; >115kg = 150mcg/kg — on alternate days', 'SC injection — specialist/palliative care only. For OIC where oral therapy has failed. 2 consecutive daily doses can be given if no response to first'],
      ],
      caption: 'Inadequate response to laxatives for OIC is defined as: symptoms of at least moderate severity in ≥1 of 4 stool symptom domains (incomplete bowel movement, hard stools, straining, false alarms) while taking ≥1 laxative class for ≥4 days in the prior 2 weeks.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Newer & Specialist Laxatives',
    },
    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Indication', 'Notes'],
      rows: [
        ['Prucalopride (Motegrity)', '2mg OD (1mg OD if >65 years or eGFR <30)', '5HT-4 agonist — stimulates bowel motility. Licensed for chronic constipation when 2 laxatives at adequate doses have failed. Initiation after failure of ≥2 laxative classes over 6 months, and when invasive treatment being considered', 'NICE TA211 (originally women only; now all adults). Cost ~£38–60/month. Review at 4 weeks — stop if inadequate response. Main side effects: headache, nausea, diarrhoea, abdominal pain. Prescribe only on specialist advice. Well-tolerated long-term'],
        ['Linaclotide (Constella)', '290 micrograms OD 30 min before breakfast', 'Guanylate cyclase-C agonist — increases intestinal fluid and reduces visceral pain. Licensed for IBS-C (constipation with pain symptoms). Not for simple constipation without pain', 'NICE approved for IBS-C when other pharmacological treatments have failed. Main side effect: diarrhoea (usually manageable — take with food if severe). Cost ~£37/month. Specialist initiation preferred'],
        ['Lubiprostone (Amitiza)', '24 micrograms BD with food for 2 weeks', 'Chloride channel activator — increases intestinal fluid secretion. For chronic idiopathic constipation not responding to lifestyle changes. NICE TA318', 'Less commonly prescribed in UK. Specialist initiation. Side effects: nausea (take with food), diarrhoea, headache'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Weaning Off Laxatives',
    },
    {
      type: 'list',
      items: [
        'Do NOT stop laxatives suddenly — wean gradually over weeks to months',
        'Begin reducing after 2–4 weeks of regular comfortable bowel movements with soft formed stools',
        'If combination used: reduce one at a time. Stop stimulant laxatives first, then bulk-forming, then osmotic',
        'Adjust remaining laxative doses to maintain regular bowel movements during weaning',
        'Relapses are common — treat early with increased doses rather than restarting from scratch',
        'Long-term laxatives may be necessary if the underlying cause cannot be corrected (e.g. permanent opioid therapy, neurological conditions)',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Complications of Chronic Constipation',
    },
    {
      type: 'table',
      headers: ['Complication', 'Management'],
      rows: [
        ['Anal fissure (chronic)', 'First: treat constipation vigorously. Topical GTN 0.4% ointment BD (headache is common side effect — apply with finger cot to anal margin only). Diltiazem 2% topical cream if GTN not tolerated. Refer if persistent >6 weeks or if considering botulinum toxin / surgery'],
        ['Proctalgia fugax / chronic rectal pain', 'Reassure (benign). Amitriptyline 10–25mg nocte for chronic pelvic pain syndrome. Gabapentin/pregabalin for neuropathic component. Pelvic floor physiotherapy. Biofeedback. Consider referral to colorectal specialist or pain clinic'],
        ['Levator ani syndrome', 'Similar to proctalgia — chronic rectal/pelvic pressure or ache. Physiotherapy, massage, biofeedback, local anaesthetic injection, tricyclics/gabapentinoids. Refer colorectal or urology/urogynaecology'],
        ['Rectal prolapse', 'Conservative: high-fibre diet, avoid straining, biofeedback pelvic floor exercises. Refer colorectal surgery for symptomatic prolapse — surgical options include Altemeier procedure, Delorme repair, rectopexy'],
        ['Haemorrhoids (piles)', 'Treat constipation. Topical preparations (e.g. Anusol, Scheriproct) for symptom relief. High-fibre diet, adequate fluid. Refer if prolapsed, thrombosed, or failing conservative management'],
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Constipation in Adults', url: 'https://cks.nice.org.uk/topics/constipation/' },
        { label: 'NICE TA211 — Prucalopride', url: 'https://www.nice.org.uk/guidance/ta211' },
        { label: 'NICE TA345 — Naloxegol for OIC', url: 'https://www.nice.org.uk/guidance/ta345' },
        { label: 'SSOT Formulary — GI', url: 'https://www.staffordshiremedicinesoptimisation.com/' },
        { label: 'Bristol Stool Chart (PDF)', url: 'https://www.bladderandbowel.org/bowel/bowel-resources/bristol-stool-form-scale/' },
      ],
    },
  ],
}

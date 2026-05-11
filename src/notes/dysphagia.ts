import type { Note } from '../data/notes'

export const dysphagia: Note = {
  id: 'dysphagia',
  title: 'Dysphagia',
  subtitle: '2WW referral, oropharyngeal vs oesophageal causes, eosinophilic oesophagitis',
  tags: ['gastroenterology', 'oncology'],

  body: 'dysphagia swallowing difficulty oesophageal cancer HNSCC head neck squamous cell carcinoma 2WW urgent referral SALT speech language therapy solids vs liquids achalasia dysmotility vocal cord palsy aspiration Virchow node Zenker pharyngeal pouch eosinophilic oesophagitis EoE budesonide orodispersible PPI globus oropharyngeal neurological MND MS Parkinson stroke bulbar palsy stricture',

  content: [
    {
      type: 'callout',
      variant: 'danger',
      title: 'All Dysphagia = 2WW Referral',
      items: [
        'ALL patients with dysphagia require urgent 2WW referral (upper GI or head & neck) to exclude oesophageal cancer or HNSCC',
        'Do NOT wait — dysphagia is a red flag symptom regardless of age or clinical story',
        'If swallowing is UNSAFE: same-day emergency admission (risk of aspiration)',
        'Always involve SALT (Speech and Language Therapy) and dietician when safe to eat is uncertain',
      ],
    },

    { type: 'heading', level: 2, text: 'History — Key Distinguishing Features' },

    {
      type: 'table',
      headers: ['Feature', 'Suggests'],
      rows: [
        ['Difficulty with solids > liquids', 'Mechanical obstruction — stricture, malignancy, Schatzki ring; progressive = malignancy until proven otherwise'],
        ['Difficulty with liquids > solids', 'Achalasia (failed LOS relaxation/dysmotility) or vocal cord palsy — high risk of aspiration'],
        ['Both solids and liquids equally', 'Neuromuscular: stroke (bulbar palsy), MND, MS, Parkinson\'s disease'],
        ['Intermittent; normal between episodes', 'Oesophageal spasm, achalasia, eosinophilic oesophagitis — especially if food impaction episodes'],
        ['Lump sensation swallowing saliva (globus)', 'Globus pharyngeus — NOT true dysphagia; settles with eating and drinking; manage with reassurance and PPI if GORD suspected'],
        ['Progressive over weeks/months', 'Malignancy — oesophageal or head and neck cancer; URGENT'],
        ['Risk factors', 'Smoking, alcohol, paan (betel nut), HPV infection — all raise malignancy risk'],
      ],
    },

    { type: 'heading', level: 2, text: 'Examination Findings' },

    {
      type: 'list',
      items: [
        'Oropharynx and ENT: look for pharyngeal lesions, tonsillar masses, mucosal abnormalities',
        'Cervical lymphadenopathy: Virchow\'s node (left supraclavicular fossa) = advanced upper GI malignancy',
        'Hoarse voice or weak cough: vocal cord palsy — may indicate lung, oesophageal or thyroid malignancy compressing the recurrent laryngeal nerve',
        'Cranial nerves 9–12: "say ahh" (palate/uvula deviation — CN9/10), tongue deviation (CN12) — bulbar palsy pattern',
        'Abdominal/epigastric mass: may indicate gastric cancer',
        'Weight loss, cachexia: suggests malignancy',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes of Dysphagia — Non-Malignant' },

    {
      type: 'table',
      headers: ['Level', 'Causes'],
      rows: [
        ['Oral', 'Poor dentition, ill-fitting dentures, TMJ dysfunction, oral candidiasis'],
        ['Pharyngeal (oropharyngeal dysphagia)', 'Neurological: post-stroke, MND, MS, Parkinson\'s, bulbar palsy. Structural: pharyngeal pouch (Zenker\'s diverticulum), post-radiotherapy fibrosis, pharyngeal abscess'],
        ['Oesophageal', 'Oesophagitis/peptic stricture, extrinsic thyroid compression, Barrett\'s oesophagus, Schatzki ring, achalasia, oesophageal dysmotility, systemic sclerosis'],
      ],
    },

    { type: 'heading', level: 2, text: 'Eosinophilic Oesophagitis (EoE)' },

    {
      type: 'list',
      items: [
        'Allergen-mediated chronic eosinophilic inflammation of the oesophagus — IgE-mediated; common triggers: milk, wheat',
        'Presents with: UGI symptoms, dysphagia (especially food impaction), heartburn, chest pain — often young adults; frequently atopic background or family history',
        'Diagnosis: endoscopy + biopsy (>15 eosinophils/HPF) — referred to gastroenterology',
        'Treatment: orodispersible budesonide (Jorveza) first line — licensed swallowed topically onto oesophageal mucosa; elemental or allergen elimination diet; balloon dilation for strictures',
        'Fluticasone inhaler swallowed (off-licence) or high-dose PPI may help — discuss with gastroenterology',
      ],
    },

    { type: 'heading', level: 2, text: 'Oesophageal Spasm' },

    {
      type: 'list',
      items: [
        'Chest pain + dysphagia, often related to food intake or stress',
        'Nutcracker oesophagus: high-pressure peristaltic contractions; achalasia: failed LOS relaxation with dysmotility',
        'Diagnosis: OGD + barium swallow + oesophageal manometry (specialist)',
        'Management: high-dose PPI + lifestyle modification; if failed, gastroenterology may consider GTN/CCB (off-licence) or endoscopic dilation/POEM (per-oral endoscopic myotomy)',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        '2WW upper GI (suspected oesophageal cancer): UHDB Queen\'s Hospital Burton upper GI MDT — via e-RS 2WW pathway',
        '2WW head and neck (HNSCC): UHDB Burton or Good Hope (UHB) HNSCC 2WW',
        'SALT referral (unsafe swallow): community SALT via MPFT or UHDB Burton SALT — direct GP referral',
        'Gastroenterology (EoE, achalasia, oesophageal spasm): UHDB Burton gastroenterology — via e-RS routine or urgent',
        'Dietician: UHDB Burton community dietetics — refer alongside SALT in patients with ongoing aspiration or weight loss',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer 2WW', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — Dysphagia', url: 'https://cks.nice.org.uk/topics/dysphagia/' },
        { label: 'BSG — Eosinophilic Oesophagitis', url: 'https://www.bsg.org.uk/clinical-resource/eosinophilic-oesophagitis-guideline/' },
        { label: 'NHS — Swallowing Problems', url: 'https://www.nhs.uk/conditions/swallowing-problems-dysphagia/' },
      ],
    },
  ],
}

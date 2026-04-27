import type { Note } from '../data/notes'

export const antiemeticsVertigo: Note = {
  id: 'antiemetics-vertigo',
  title: 'Antiemetics & Vertigo Medications',
  subtitle: 'Prescribing antiemetics for nausea, vomiting and vertigo — doses, cautions and drug choice',
  tags: ['prescribing', 'neurology', 'gastroenterology'],

  body: 'antiemetic nausea vomiting vertigo cyclizine prochlorperazine buccal metoclopramide promethazine cinnarizine motion sickness labyrinthitis BPPV vestibular neuronitis dystonic reaction extrapyramidal benign paroxysmal positional vertigo',

  content: [

    {
      type: 'image',
      src: '/images/antiemetics.jpg',
      alt: 'Antiemetics and nausea medicines infographic showing drug choices by mechanism',
      caption: 'Antiemetic drug choices — select by mechanism and indication. Most antiemetics act on dopamine (D2), histamine (H1) or muscarinic receptors.',
    },

    // ── DRUG CHOICE ─────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Drug Choice by Indication' },

    {
      type: 'table',
      headers: ['Drug', 'Class', 'Best For', 'Key Cautions'],
      rows: [
        ['Cyclizine', 'H1 antihistamine', 'Post-operative nausea, motion sickness, opioid-induced N&V, palliative use', 'Sedation; tachycardia in high doses; heart failure (avoid high doses)'],
        ['Prochlorperazine', 'Phenothiazine (D2 antagonist)', 'Acute N&V, labyrinthitis/vestibular neuronitis, vertigo', 'Dystonic reactions (especially young women); parkinsonism; short-term use only'],
        ['Metoclopramide', 'D2/5-HT4 antagonist', 'Acute N&V, gastroparesis, diabetic gastroparesis', 'Max 5 days; extrapyramidal effects; avoid in GI obstruction/perforation'],
        ['Promethazine', 'H1 antihistamine / phenothiazine', 'Motion sickness, pregnancy nausea (off-label), palliative', 'Sedation; avoid in children <2 yrs; anticholinergic effects'],
        ['Cinnarizine', 'H1 antihistamine / Ca-channel antagonist', 'Vertigo (BPPV, Ménière\'s disease, labyrinthitis)', 'Sedation; parkinsonism with long-term use; avoid if parkinsonism'],
      ],
      caption: 'For pregnancy nausea: ginger, acupressure bands first; if medication needed — cyclizine or promethazine are commonly used (off-label); metoclopramide short-term; ondansetron (specialist). Discuss risks carefully.',
    },

    // ── DOSES ────────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Prescribing Doses' },

    {
      type: 'table',
      headers: ['Drug', 'Formulation', 'Dose & Frequency', 'Notes'],
      rows: [
        ['Cyclizine', '50 mg tablets — 30 tablet', 'ONE tablet THREE times a day when required', 'Also available as 50 mg/ml injection for palliative use'],
        ['Prochlorperazine (oral)', '5 mg tablets — 28 tablet', 'ONE tablet TWO to THREE times a day when required', 'SHORT TERM USE — risk of dystonic reaction, particularly in young women; warn patient'],
        ['Prochlorperazine (buccal)', '3 mg buccal tablets — 8 tablet', 'Allow ONE tablet to dissolve under the top lip TWICE a day when required', 'Useful if unable to swallow; slower onset; good for vertigo/N&V in the community'],
        ['Metoclopramide', '10 mg tablets — 15 tablet', 'ONE tablet THREE times daily when required — MAXIMUM 5 DAYS', 'USE WITH CAUTION — extrapyramidal effects; limit quantity prescribed to prevent prolonged use'],
        ['Promethazine hydrochloride', '10 mg tablets — 56 tablet', 'ONE or TWO at night, then ONE to TWO in the morning if required', 'Also: Promethazine teoclate 25 mg tablets — TWO at night for motion sickness (up to 100 mg); teoclate formulation preferred for motion sickness'],
        ['Cinnarizine', '15 mg tablets — 30 tablet', 'TWO tablets THREE times a day with food when required', 'Specifically for vertigo — take with food to reduce GI side effects'],
      ],
      caption: 'Ardens formulary doses. Quantities listed are standard supply; adjust for duration of treatment needed.',
    },

    // ── WARNINGS ─────────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'warning',
      title: 'Prochlorperazine — Dystonic Reaction Risk',
      items: [
        'Acute dystonia (painful muscle spasms, particularly face, neck and jaw) occurs most commonly in young women — even after a single dose',
        'If dystonia occurs: procyclidine 5 mg IM/IV acts rapidly — keep available in the surgery emergency kit',
        'SHORT TERM USE ONLY — do not prescribe for more than a few days without review',
        'Contraindicated in Parkinson\'s disease and other dopaminergic states',
        'Buccal route (3 mg): lower dose; preferred for community vertigo management',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Metoclopramide — 5-Day Maximum',
      items: [
        'Maximum treatment duration is 5 days — MHRA restriction due to risk of extrapyramidal side effects (tardive dyskinesia with prolonged use)',
        'Prescribe quantities that reflect this: 15 tablets (5 days at TDS) is the standard supply',
        'Avoid in young adults (<20 years) and elderly — higher risk of extrapyramidal effects',
        'Avoid in patients with Parkinson\'s, phaeochromocytoma, GI obstruction, perforation or haemorrhage',
        'Do not use as long-term prophylaxis for nausea',
      ],
    },

    // ── VERTIGO SPECIFICS ────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Vertigo — Practical Management' },

    {
      type: 'table',
      headers: ['Cause', 'Features', 'Specific Treatment'],
      rows: [
        ['BPPV (benign paroxysmal positional vertigo)', 'Brief episodes on head movement (<1 min); positive Dix-Hallpike', 'Epley manoeuvre — highly effective; no medication needed; refer if manoeuvre fails'],
        ['Vestibular neuronitis / labyrinthitis', 'Sudden severe vertigo, nausea; no hearing loss (neuronitis) or with hearing loss (labyrinthitis); persists days–weeks', 'Prochlorperazine buccal or cinnarizine short-term; vestibular rehabilitation exercises (Cawthorne-Cooksey) after acute phase'],
        ['Ménière\'s disease', 'Episodic vertigo + tinnitus + fluctuating low-frequency hearing loss; lasts 20 min–24 hrs', 'Betahistine 16 mg TDS (prophylaxis); cinnarizine for acute episodes; refer ENT'],
        ['Central causes (cerebellar, stroke)', 'Direction-changing nystagmus, severe imbalance, neurological signs, inability to stand', 'Do NOT treat with antiemetics — urgent CT/MRI + neurology; 999 if acute'],
      ],
      caption: 'Most vertigo in primary care is BPPV — Epley manoeuvre is curative in the majority. Antiemetics are a holding measure, not a cure, for vestibular causes.',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Betahistine — for Ménière\'s',
      items: [
        'Betahistine 8 mg or 16 mg tablets — prophylaxis for Ménière\'s disease; reduces frequency and severity of attacks',
        'Dose: 16 mg THREE times daily with food; can reduce to 8 mg TDS if tolerated',
        'Take with food to reduce nausea (the irony); takes weeks to months to show effect',
        'Not an acute antiemetic — do not use for acute vertigo of other causes',
        'Contraindicated in phaeochromocytoma; caution in peptic ulcer disease',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Vertigo', url: 'https://cks.nice.org.uk/topics/vertigo/' },
        { label: 'NICE CKS — Nausea & Vomiting', url: 'https://cks.nice.org.uk/topics/nausea-vomiting-in-pregnancy/' },
        { label: 'BNF — Antiemetics', url: 'https://bnf.nice.org.uk/treatment-summaries/antiemetics/' },
        { label: 'NICE CKS — Labyrinthitis', url: 'https://cks.nice.org.uk/topics/labyrinthitis-vestibular-neuronitis/' },
      ],
    },

  ],
}

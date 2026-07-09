import type { Note } from '../data/notes'

export const infantColicReflux: Note = {
  id: 'infant-colic-reflux',
  title: 'Infant Colic & Reflux (GOR/GORD)',
  subtitle: 'Benign colic, physiological reflux vs GORD, feed advice, Gaviscon/PPI and red flags',
  tags: ['paediatrics'],

  body: `infantile colic crying reflux GOR GORD posseting regurgitation Gaviscon thickened formula PPI ranitidine pyloric stenosis cow's milk protein allergy CMPA faltering growth red flags feeding advice`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG1 — GORD in Children & Young People', url: 'https://www.nice.org.uk/guidance/ng1' },
        { label: 'NICE CKS — Colic (Infantile)', url: 'https://cks.nice.org.uk/topics/colic-infantile/' },
        { label: 'NICE CKS — GORD in Children', url: 'https://cks.nice.org.uk/topics/gord-in-children/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Infantile Colic' },

    {
      type: 'list',
      items: [
        'A benign, self-limiting condition: recurrent bouts of inconsolable crying in an otherwise healthy, thriving baby, typically drawing the legs up and arching the back, often worse in the evening',
        'Starts in the first few weeks and usually resolves by ~3–4 months',
        'Management is reassurance and support (it is not the parents\' fault; check feeding technique and for parental exhaustion/low mood)',
        'Soothing measures may help: holding, gentle motion/rocking, white noise, a warm bath',
        'NICE does NOT recommend simeticone (Infacol) or lactase drops (Colief) — though widely used, evidence of benefit is lacking; only consider a trial of a cow\'s-milk-free maternal diet / hydrolysed formula if features suggest cow\'s milk protein allergy',
        'Safety-net: crying that is high-pitched/weak, with fever, poor feeding, vomiting, or a change in behaviour is NOT colic — assess for illness (and be alert to non-accidental injury/abusive head trauma)',
      ],
    },

    { type: 'heading', level: 2, text: 'Reflux — Physiological vs GORD' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Most Reflux Is Normal',
      items: [
        'Gastro-oesophageal reflux (GOR) — effortless regurgitation/posseting of feeds — is very common and physiological in babies (immature lower oesophageal sphincter); most need only reassurance and resolve by ~1 year',
        'It becomes GORD only if it causes complications: distress/marked feeding difficulty, faltering growth, recurrent respiratory problems, or dental erosion',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Reflux Red Flags — Not Simple GOR',
      items: [
        'Projectile vomiting in a young infant (esp. 2–8 weeks) → pyloric stenosis',
        'Bilious (green) vomiting → intestinal obstruction',
        'Blood in vomit/stool, abdominal distension/tenderness or a mass',
        'Onset of vomiting after 6 months or persisting beyond 1 year',
        'Faltering growth, marked distress, or other systemic features → consider cow\'s milk protein allergy, UTI, raised intracranial pressure, or metabolic disease',
      ],
    },

    { type: 'heading', level: 2, text: 'Management of Reflux' },

    {
      type: 'list',
      items: [
        'First-line is feeding advice and reassurance: avoid overfeeding (breastfeed on demand; formula ~150 mL/kg/day in smaller, more frequent feeds), review positioning and winding, and observe a feed (HV/infant-feeding support)',
        'Breastfed with troublesome reflux: trial infant Gaviscon (mixed and given during/after feeds) for 1–2 weeks',
        'Formula-fed: trial a smaller, more frequent feed and/or a thickened (anti-reflux) formula, or infant Gaviscon (not both together) for 1–2 weeks',
        'If marked distress, faltering growth, or persistent symptoms suggesting GORD: a 4-week trial of a PPI (or H2-receptor antagonist)',
        'Do NOT use prokinetics (e.g. metoclopramide/domperidone) routinely; refer if symptoms persist despite treatment or red flags are present',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'cmpa', label: "Cow's Milk Protein Allergy", subtitle: 'Mimics colic/reflux — consider if not settling' },
        { id: 'faltering-growth', label: 'Faltering Growth', subtitle: 'When reflux/feeding problems affect weight' },
        { id: 'gastroenteritis-children', label: 'Gastroenteritis in Children', subtitle: 'Acute vomiting — a different entity' },
        { id: 'perinatal-mh', label: 'Perinatal Mental Health', subtitle: 'Parental exhaustion and low mood support' },
      ],
    },

  ],
}

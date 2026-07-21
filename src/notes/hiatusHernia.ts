import type { Note } from '../data/notes'

export const hiatusHernia: Note = {
  id: 'hiatus-hernia',
  title: 'Hiatus Hernia',
  subtitle: 'Sliding vs rolling, relationship to GORD, PPI management, the strangulation red flag and fundoplication',
  tags: ['gastroenterology'],

  body: `hiatus hernia sliding rolling paraoesophageal type I II III IV GORD reflux PPI fundoplication Nissen strangulation gastric volvulus obstruction OGD barium swallow diaphragm hiatus obesity iron deficiency anaemia Cameron lesion Borchardt triad`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Dyspepsia & GORD', url: 'https://cks.nice.org.uk/topics/dyspepsia-proven-gord/' },
        { label: 'Guts UK — Hiatus Hernia', url: 'https://gutscharity.org.uk/advice-and-information/conditions/hiatus-hernia/' },
        { label: 'NICE CG184 — GORD & Dyspepsia', url: 'https://www.nice.org.uk/guidance/cg184' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'Protrusion of the stomach into the chest (mediastinum) through the diaphragmatic oesophageal hiatus; very common, especially with increasing age and obesity; frequently an incidental finding at OGD or on imaging',
        'The hiatus and lower oesophageal sphincter normally act as an anti-reflux barrier — disruption promotes GORD',
        'Many are asymptomatic; symptoms are usually those of reflux, or — with larger/rolling hernias — mechanical symptoms and, rarely, acute obstruction/strangulation',
      ],
    },

    { type: 'heading', level: 2, text: 'Classification' },

    {
      type: 'table',
      headers: ['Type', 'Anatomy', 'Significance'],
      rows: [
        ['I — Sliding (~95%)', 'Gastro-oesophageal junction (GOJ) slides up above the diaphragm', 'Strongly associated with GORD; low complication risk'],
        ['II — Rolling / paraoesophageal', 'GOJ stays below; the fundus herniates alongside the oesophagus', 'Mechanical symptoms; risk of incarceration/volvulus'],
        ['III — Mixed', 'Both sliding and paraoesophageal components', 'Behaves like a rolling hernia — surgical risk'],
        ['IV', 'Other organs (e.g. colon, spleen) in the hernia sac', 'Large; usually needs surgical assessment'],
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Rolling (Paraoesophageal) Hernia — Strangulation / Gastric Volvulus',
      items: [
        'A rolling hernia can incarcerate or twist (gastric volvulus) — a surgical emergency',
        'Borchardt\'s triad suggests volvulus: severe epigastric/chest pain, violent retching WITHOUT the ability to vomit, and inability to pass an NG tube → immediate surgical assessment / ED',
        'Because of this risk, refer rolling/paraoesophageal (type II–IV) hernias for a surgical opinion even if relatively asymptomatic',
      ],
    },

    { type: 'heading', level: 2, text: 'Presentation & Investigation' },

    {
      type: 'list',
      items: [
        'Reflux symptoms: heartburn, acid regurgitation, worse lying flat/bending; nocturnal cough or hoarseness',
        'Mechanical (larger hernias): dysphagia, early satiety, postprandial chest discomfort, breathlessness after meals, and palpitations',
        'Iron-deficiency anaemia can arise from chronic mucosal bleeding at the hiatus (Cameron lesions/erosions) — investigate anaemia on its own merits, do not simply attribute to the hernia',
        'Diagnosis: usually incidental at OGD; a barium swallow or CT defines larger/rolling hernias and their anatomy',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Lifestyle/GORD measures: weight loss (most effective), smaller meals, avoid eating within ~3h of lying down, reduce alcohol/caffeine/fatty and trigger foods, raise the head of the bed, and stop smoking',
        'Acid suppression: a proton pump inhibitor at the lowest effective dose (regular or on-demand); add an alginate for breakthrough symptoms; review the need for long-term PPI periodically',
        'Refer for surgery (laparoscopic fundoplication ± hernia repair/mesh) if: symptoms persist despite optimal medical therapy, the patient wishes to avoid lifelong PPI, or there is a rolling/paraoesophageal hernia',
        'Investigate ALARM features (dysphagia, unintentional weight loss, GI bleeding/anaemia, persistent vomiting, epigastric mass) on the upper-GI cancer 2WW pathway — never attribute these to a known hiatus hernia without assessment',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'gord-dyspepsia', label: 'GORD & Dyspepsia', subtitle: 'Reflux management, PPIs, H. pylori and alarm features' },
        { id: 'ppi-deprescribing', label: 'PPIs — Side Effects & Deprescribing', subtitle: 'Reviewing and stepping down long-term acid suppression' },
        { id: 'barretts-oesophagus', label: "Barrett's Oesophagus", subtitle: 'Metaplasia from chronic reflux — surveillance' },
        { id: 'oesophagogastric-cancer', label: 'Oesophageal & Gastric Cancer', subtitle: 'Upper-GI 2WW alarm features to exclude' },
        { id: 'hernias', label: 'Abdominal Wall & Groin Hernias', subtitle: 'Other hernias and their strangulation risk' },
        { id: 'microcytic-anaemia', label: 'Microcytic Anaemia', subtitle: 'Iron deficiency from Cameron lesions' },
      ],
    },

  ],
}

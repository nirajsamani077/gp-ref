import type { Note } from '../data/notes'

export const hiatusHernia: Note = {
  id: 'hiatus-hernia',
  title: 'Hiatus Hernia',
  subtitle: 'Sliding vs rolling, relationship to GORD, PPI management and when to refer for fundoplication',
  tags: ['gastroenterology'],

  body: `hiatus hernia sliding rolling paraoesophageal GORD reflux PPI fundoplication strangulation obstruction OGD diaphragm obesity`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Dyspepsia & GORD', url: 'https://cks.nice.org.uk/topics/dyspepsia-proven-gord/' },
        { label: 'Guts UK — Hiatus Hernia', url: 'https://gutscharity.org.uk/advice-and-information/conditions/hiatus-hernia/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'Protrusion of the stomach into the chest (mediastinum) through the diaphragmatic hiatus; common, especially with obesity; often an incidental finding at OGD',
        'Two types: sliding (most common — the gastro-oesophageal junction slides up; associated with GORD) and rolling/paraoesophageal (the fundus herniates alongside the oesophagus — risk of mechanical complications)',
        'Many are asymptomatic; symptoms are usually those of GORD (heartburn, regurgitation), or — with rolling hernias — mechanical symptoms (dysphagia, chest discomfort, early satiety) and rarely obstruction/strangulation',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Rolling (Paraoesophageal) Hernia — Strangulation Risk',
      items: [
        'A rolling hernia can incarcerate/strangulate (a surgical emergency) — sudden severe chest/epigastric pain, vomiting/retching with inability to vomit, and inability to pass an NG tube suggest gastric volvulus → urgent surgical assessment',
        'Because of this risk, refer rolling/paraoesophageal hernias for surgical opinion even if relatively asymptomatic',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Lifestyle/GORD measures: weight loss, smaller meals, avoid late eating, reduce alcohol/caffeine/trigger foods, raise the head of the bed, stop smoking',
        'Acid suppression: a proton pump inhibitor at the lowest effective dose (PRN or regular) for reflux symptoms',
        'Refer for surgery (laparoscopic fundoplication ± hernia repair) if: symptoms persist despite optimal medical therapy, the patient prefers to avoid long-term PPI, or there is a rolling/paraoesophageal hernia (because of the strangulation risk)',
        'Investigate alarm features (dysphagia, weight loss, GI bleeding, anaemia, persistent vomiting) on the upper-GI cancer pathway — do not attribute these to a known hiatus hernia without assessment',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'gord-dyspepsia', label: 'GORD & Dyspepsia', subtitle: 'Reflux management, PPIs, H. pylori and alarm features' },
        { id: 'barretts-oesophagus', label: "Barrett's Oesophagus", subtitle: 'Metaplasia from chronic reflux — surveillance' },
        { id: 'oesophagogastric-cancer', label: 'Oesophageal & Gastric Cancer', subtitle: 'Upper-GI 2WW alarm features to exclude' },
      ],
    },

  ],
}

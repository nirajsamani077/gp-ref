import type { Note } from '../data/notes'

export const hernias: Note = {
  id: 'hernias',
  title: 'Abdominal Wall & Groin Hernias',
  subtitle: 'Inguinal vs femoral, umbilical/epigastric, when to refer and strangulation red flags',
  tags: ['surgery'],

  body: `hernia inguinal femoral umbilical paraumbilical epigastric incisional pubic tubercle incarceration strangulation mesh repair processus vaginalis childhood hernia truss reducible cough impulse`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hernia (Inguinal/Femoral)', url: 'https://cks.nice.org.uk/topics/hernia/' },
        { label: 'Royal College of Surgeons — Hernias', url: 'https://www.rcseng.ac.uk/patient-care/' },
        { label: 'NHS — Hernia', url: 'https://www.nhs.uk/conditions/hernia/' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Incarceration / Strangulation — Emergency',
      items: [
        'A tender, tense, irreducible hernia with pain, vomiting, or signs of obstruction → same-day surgical assessment / ED (strangulation compromises the blood supply — bowel ischaemia)',
        'Femoral hernias strangulate much more readily → refer ALL femoral hernias for repair regardless of symptoms',
        'Infant inguinal hernias have a high incarceration risk → urgent surgical referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Types & Landmarks' },

    {
      type: 'table',
      headers: ['Hernia', 'Location / features', 'Management'],
      rows: [
        ['Inguinal', 'Superomedial to the pubic tubercle; commonest (95% male); direct or indirect', 'Refer for routine mesh repair even if asymptomatic (unilateral usually open, bilateral/recurrent usually laparoscopic); a truss if unfit for surgery; ~2 weeks off manual work (longer after open repair)'],
        ['Femoral', 'Inferolateral to the pubic tubercle; more common in women', 'Refer ALL — high strangulation risk'],
        ['Umbilical', 'Symmetrical bulge through the umbilicus; common in infants', 'In infants usually resolves by ~4 years — refer only if persisting beyond ~4–5 years or complicated; adult umbilical hernias often need repair'],
        ['Paraumbilical', 'Asymmetrical bulge just above/below the umbilicus (adults)', 'Refer — tend not to resolve'],
        ['Epigastric', 'Midline between umbilicus and sternum', 'Routine referral (do not resolve; low strangulation risk)'],
        ['Incisional', 'Through a previous surgical scar', 'Refer for assessment/repair'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'list',
      items: [
        'Examine standing and lying: check for a cough impulse and whether it is reducible; note tenderness and any overlying skin changes',
        'Distinguish from other groin lumps: lymph nodes, saphena varix (soft, compressible, disappears on lying flat), femoral aneurysm (pulsatile), and (in men) an undescended testis or a hydrocele',
        'Childhood inguinal hernia (patent processus vaginalis): urgent referral (high incarceration risk); umbilical hernias in children usually resolve; epigastric hernias in children usually need routine referral',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'scrotal-groin-lumps', label: 'Scrotal & Groin Lumps', subtitle: 'Differential for the groin/scrotal lump' },
        { id: 'hiatus-hernia', label: 'Hiatus Hernia', subtitle: 'Diaphragmatic hernia — reflux and rolling-hernia risk' },
      ],
    },

  ],
}

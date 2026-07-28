import type { Note } from '../data/notes'

export const g6pdSpherocytosis: Note = {
  id: 'g6pd-spherocytosis',
  title: 'G6PD Deficiency & Hereditary Spherocytosis',
  subtitle: 'Two inherited haemolytic anaemias — trigger avoidance in G6PD and the spherocytosis picture',
  tags: ['haematology'],

  body: `G6PD glucose-6-phosphate dehydrogenase deficiency X-linked haemolysis oxidative fava beans primaquine dapsone nitrofurantoin Heinz bodies bite cells hereditary spherocytosis spectrin osmotic fragility splenomegaly gallstones folic acid splenectomy neonatal jaundice`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Both G6PD deficiency and hereditary spherocytosis cause a chronic or episodic haemolytic anaemia, but their mechanisms and management differ. G6PD deficiency is about AVOIDING oxidative triggers; hereditary spherocytosis is a membrane defect managed with folate, monitoring and (selectively) splenectomy. Both are causes of neonatal jaundice and pigment gallstones.',
    },

    { type: 'heading', level: 2, text: 'G6PD Deficiency' },
    {
      type: 'list',
      items: [
        'X-linked (mainly affects males), common in people of African, Mediterranean, Middle Eastern and Asian ancestry; usually asymptomatic between episodes.',
        'Acute haemolysis is precipitated by OXIDATIVE stress: certain drugs, fava (broad) beans, infection, and moth-ball naphthalene. Presents with sudden jaundice, dark urine, pallor and fatigue.',
        'Blood film during a crisis: bite cells and blister cells, Heinz bodies (supravital stain); diagnosis confirmed by a G6PD enzyme assay (do NOT test during acute haemolysis — reticulocytes have higher enzyme levels and can give a false-normal result; test after recovery).',
        'It is also a cause of neonatal jaundice (can be severe/kernicterus).',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Drugs & Foods to AVOID in G6PD Deficiency',
      items: [
        'Avoid: primaquine and other antimalarials (e.g. dapsone-containing), nitrofurantoin, sulfonamides/co-trimoxazole, dapsone, and (in high dose) aspirin; rasburicase and methylene blue are contraindicated.',
        'Avoid fava/broad beans ("favism") and naphthalene mothballs.',
        'Provide the patient with a list; always check the BNF/G6PD safe-drug list before prescribing. Management of a crisis is supportive (hydration, treat the trigger, transfuse if severe).',
      ],
    },

    { type: 'heading', level: 2, text: 'Hereditary Spherocytosis' },
    {
      type: 'list',
      items: [
        'Usually autosomal dominant; a red-cell membrane (spectrin/ankyrin) defect makes cells spherical and fragile → they are removed by the spleen (extravascular haemolysis).',
        'Features: chronic haemolytic anaemia, jaundice, SPLENOMEGALY, and pigment gallstones; ranges from mild to significant. Blood film shows spherocytes; diagnosis by EMA-binding flow cytometry (or osmotic fragility) and family history.',
        'Complications: aplastic crisis with parvovirus B19 (sudden Hb drop, low reticulocytes), and neonatal jaundice.',
        'Management: folic acid supplementation, monitoring, prompt treatment of crises, and cholecystectomy for symptomatic gallstones; SPLENECTOMY for moderate/severe disease reduces haemolysis (with pre-splenectomy vaccination and lifelong penicillin prophylaxis — see Splenomegaly/hyposplenism).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'BSH — Guidelines (Haemolytic Anaemias)', url: 'https://b-s-h.org.uk/guidelines/' },
        { label: 'BNF — G6PD Deficiency (Drugs to Avoid)', url: 'https://bnf.nice.org.uk/treatment-summaries/glucose-6-phosphate-dehydrogenase-deficiency/' },
        { label: 'NHS — Hereditary Spherocytosis', url: 'https://www.nhs.uk/conditions/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'normocytic-anaemia', label: 'Normocytic Anaemia', subtitle: 'Haemolysis screen — reticulocytes, LDH, haptoglobin' },
        { id: 'splenomegaly', label: 'Splenomegaly & Hyposplenism', subtitle: 'Splenectomy vaccination and prophylaxis rules' },
        { id: 'neonatal-jaundice', label: 'Neonatal Jaundice', subtitle: 'Both cause haemolytic neonatal jaundice' },
        { id: 'gallstones-pancreatitis', label: 'Gallstones & Pancreatitis', subtitle: 'Pigment gallstones from chronic haemolysis' },
        { id: 'sickle-cell', label: 'Sickle Cell Disease', subtitle: 'Another inherited haemoglobin/red-cell disorder' },
      ],
    },

  ],
}

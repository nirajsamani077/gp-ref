import type { Note } from '../data/notes'

export const sickleCell: Note = {
  id: 'sickle-cell',
  title: 'Sickle Cell Disease',
  subtitle: 'Vaso-occlusive crises, acute emergencies, chronic complications and primary-care management',
  tags: ['haematology', 'genetics'],

  body: `sickle cell disease SCD HbSS HbS vaso-occlusive crisis acute chest syndrome splenic sequestration aplastic crisis hyposplenism penicillin prophylaxis hydroxycarbamide priapism stroke acute pain crisis newborn screening trait`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Sickle Cell Disease', url: 'https://cks.nice.org.uk/topics/sickle-cell-disease/' },
        { label: 'NICE CG143 — Acute Painful Sickle Cell Episode', url: 'https://www.nice.org.uk/guidance/cg143' },
        { label: 'Sickle Cell Society', url: 'https://www.sicklecellsociety.org/' },
      ],
    },

    {
      type: 'para',
      text: 'Sickle cell disease is a lifelong haemoglobinopathy in which sickled red cells cause both chronic haemolytic anaemia and acute vaso-occlusive crises. The GP\'s role centres on prevention (penicillin prophylaxis and the asplenia vaccination schedule), prompt recognition and escalation of the acute emergencies (painful crisis, acute chest syndrome, splenic sequestration, stroke, priapism, sepsis), and supporting the specialist plan. Two principles matter most: trust the patient\'s pain, and treat suspected infection urgently.',
    },
    {
      type: 'list',
      items: [
        'An autosomal recessive haemoglobinopathy — abnormal β-globin produces HbS, which polymerises and sickles red cells when deoxygenated, causing haemolysis (anaemia) and vaso-occlusion (ischaemic pain/organ damage)',
        'More common in people of African/Caribbean, Indian and Middle Eastern ancestry',
        'Genotypes: HbSS (homozygous — most severe, "sickle cell anaemia"); compound heterozygous (HbSC, HbS/β-thalassaemia); sickle cell trait (HbAS — a carrier, usually asymptomatic)',
        'Usually detected on newborn (heel-prick) or antenatal screening; HbSS often presents in infancy with dactylitis, infections, splenomegaly and failure to thrive',
      ],
    },

    { type: 'heading', level: 2, text: 'Acute Crises & Emergencies' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Admit Acute Crises — Trust the Patient',
      items: [
        'Precipitants: infection, hypoxia, dehydration, cold, stress, acidosis',
        'Vaso-occlusive (painful) crisis: severe bony/abdominal pain — needs prompt, adequate analgesia (often strong opioids), hydration, oxygen and warmth; do not undertreat pain (NICE CG143)',
        'Acute chest syndrome: chest pain, fever, hypoxia, new infiltrate — a leading cause of death; emergency',
        'Splenic sequestration: rapid splenic enlargement with falling Hb and shock (young children) — emergency',
        'Aplastic crisis: parvovirus B19 → sudden drop in Hb with low reticulocytes',
        'Stroke (including in children), priapism (>1 hour — urological emergency), and serious infection (hyposplenism) are other emergencies',
        'Admit acute crises; if febrile/suspected infection give broad-spectrum antibiotics promptly; patients know their crises — believe their pain',
      ],
    },

    { type: 'heading', level: 2, text: 'Chronic Complications' },

    {
      type: 'list',
      items: [
        'Hyposplenism (functional asplenia) → lifelong infection risk: penicillin V prophylaxis (from infancy, often continued long-term) and the full asplenia vaccination schedule (pneumococcal, Hib, meningococcal, annual influenza)',
        'Chronic haemolytic anaemia (baseline Hb often 60–90 g/L), gallstones (pigment), leg ulcers, avascular necrosis (e.g. femoral head), retinopathy, pulmonary hypertension, chronic kidney disease, and recurrent priapism/erectile dysfunction',
        'Growth and puberty may be delayed',
      ],
    },

    { type: 'heading', level: 2, text: 'Management (specialist MDT + GP)' },

    {
      type: 'list',
      items: [
        'Hydroxycarbamide (hydroxyurea) reduces the frequency of painful crises and acute chest syndrome (raises HbF) — specialist-initiated',
        'Regular/exchange blood transfusion for specific indications (e.g. stroke prevention); iron-overload monitoring if transfused',
        'Haematopoietic stem cell transplant is the only cure (selected patients); newer disease-modifying agents emerging',
        'GP role: penicillin prophylaxis and vaccinations, prompt treatment of infection, folic acid, analgesia plans, and recognising/expediting acute crises',
        'Women of childbearing age: folic acid 5 mg; all contraception is safe; preconception and pregnancy care should be specialist-led',
        'Offer genetic counselling and partner/family screening (trait carries reproductive implications)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'microcytic-anaemia', label: 'Microcytic Anaemia', subtitle: 'Haemoglobinopathy vs iron deficiency (both low MCV)' },
        { id: 'normocytic-anaemia', label: 'Normocytic Anaemia', subtitle: 'Haemolysis as a cause — reticulocytes, LDH, haptoglobin' },
        { id: 'anaemia-pregnancy', label: 'Anaemia in Pregnancy', subtitle: 'Haemoglobinopathy screening in pregnancy' },
        { id: 'notifiable-diseases', label: 'Notifiable Diseases', subtitle: 'Asplenia vaccination/prophylaxis principles overlap' },
        { id: 'priapism', label: 'Priapism', subtitle: 'Recurrent/stuttering priapism is a sickle-cell complication' },
        { id: 'g6pd-spherocytosis', label: 'G6PD & Hereditary Spherocytosis', subtitle: 'Other inherited red-cell disorders' },
      ],
    },

  ],
}

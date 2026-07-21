import type { Note } from '../data/notes'

export const haemophiliaVwd: Note = {
  id: 'haemophilia-vwd',
  title: 'Haemophilia & von Willebrand Disease',
  subtitle: 'Inherited bleeding disorders — clotting-screen patterns, factor deficiencies and treatment',
  tags: ['haematology'],

  body: `haemophilia A factor VIII haemophilia B factor IX Christmas disease von Willebrand disease VWD bleeding disorder APTT haemarthrosis desmopressin DDAVP tranexamic acid factor concentrate X-linked autosomal dominant`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Bleeding Disorders', url: 'https://cks.nice.org.uk/topics/bruising/' },
        { label: 'UKHCDO — Haemophilia Guidelines', url: 'https://www.ukhcdo.org/' },
        { label: 'The Haemophilia Society', url: 'https://haemophilia.org.uk/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Haemophilia' },

    {
      type: 'list',
      items: [
        'X-linked recessive (affects males; females are usually carriers): Haemophilia A = factor VIII deficiency (commonest); Haemophilia B (Christmas disease) = factor IX deficiency',
        'Bleeding pattern: deep bleeding — haemarthroses (recurrent joint bleeds → arthropathy), muscle haematomas, and prolonged/severe bleeding after trauma or surgery',
        'Clotting screen: prolonged APTT with a normal PT, platelets and bleeding time; diagnosis confirmed by factor assays',
        'Managed by a haemophilia centre: factor VIII/IX concentrate (on-demand or prophylactic), and newer agents (e.g. emicizumab for haemophilia A); desmopressin can raise factor VIII in mild haemophilia A; tranexamic acid as an adjunct',
        'AVOID intramuscular injections, aspirin/NSAIDs and antiplatelets; care with procedures — liaise with the haemophilia centre',
      ],
    },

    { type: 'heading', level: 2, text: 'von Willebrand Disease (VWD)' },

    {
      type: 'list',
      items: [
        'The commonest inherited bleeding disorder; usually autosomal dominant; von Willebrand factor (vWF) mediates platelet adhesion and carries factor VIII — so VWD behaves like a PLATELET-type disorder',
        'Bleeding pattern: mucocutaneous — epistaxis, easy bruising, heavy menstrual bleeding, prolonged bleeding after dental work/surgery',
        'Types: type 1 (partial quantitative reduction — ~80%, mild), type 2 (qualitative defect), type 3 (complete absence — autosomal recessive, severe)',
        'Investigations: prolonged bleeding time (or PFA), possibly mildly prolonged APTT; vWF antigen/activity and factor VIII levels confirm',
        'Treatment: tranexamic acid for mild mucosal bleeding; desmopressin (DDAVP) raises vWF/factor VIII in type 1; vWF-containing factor concentrate for severe disease/major surgery; avoid aspirin/NSAIDs',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Clotting-Screen Pattern Recap',
      items: [
        'Isolated prolonged APTT → haemophilia A/B, VWD, or heparin',
        'Isolated prolonged PT → warfarin, vitamin K deficiency, early liver disease',
        'Both prolonged (± low platelets) → liver disease, DIC, or major factor deficiency',
        'Refer to a haematology/coagulation clinic for a suspected inherited bleeding disorder — especially with a family history or significant/prolonged bleeding',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'platelets-bruising', label: 'Thrombocytosis, Thrombocytopenia & Bruising', subtitle: 'The bleeding/bruising work-up and clotting patterns' },
        { id: 'hmb-fibroids', label: 'Heavy Menstrual Bleeding & Fibroids', subtitle: 'VWD as a cause of HMB from menarche' },
        { id: 'epistaxis', label: 'Epistaxis', subtitle: 'Recurrent nosebleeds — consider a bleeding disorder' },
      ],
    },

  ],
}

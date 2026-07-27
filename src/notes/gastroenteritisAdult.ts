import type { Note } from '../data/notes'

export const gastroenteritisAdult: Note = {
  id: 'gastroenteritis-adult',
  title: 'Gastroenteritis & Infective Diarrhoea (Adults)',
  subtitle: 'Self-limiting D&V, when to send a stool sample, antibiotics vs not, and travel/food-poisoning causes',
  tags: ['infection'],

  body: `gastroenteritis adult infective diarrhoea vomiting Campylobacter Salmonella typhoid Shigella E coli O157 norovirus C difficile Giardia oral rehydration stool culture ova cysts parasites notifiable disease food handler dehydration antibiotics loperamide`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Acute gastroenteritis in adults is usually a short, self-limiting viral or bacterial illness managed with oral rehydration and safety-netting — most cases need neither a stool sample nor antibiotics. The GP tasks are to assess hydration and rule out serious mimics, to know the specific situations that DO warrant stool testing (and public-health notification), and to avoid the traps: antibiotics/antimotility agents in E. coli O157, and missing C. difficile after antibiotics.',
    },

    { type: 'heading', level: 2, text: 'Assessment' },
    {
      type: 'list',
      items: [
        'History: onset, frequency, blood/mucus in stool, vomiting, fever, food history, travel, unwell contacts, recent antibiotics or hospitalisation, and occupation (food handler, healthcare, nursery).',
        'Assess hydration and for features of a surgical/serious abdomen (severe or localised pain, peritonism, distension) — persistent vomiting without diarrhoea, or pain out of proportion, is not typical gastroenteritis.',
        'Bloody diarrhoea (dysentery) points to invasive bacteria (Campylobacter, Shigella, Salmonella, E. coli O157) or, if relevant, inflammatory bowel disease/ischaemic colitis.',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Send a Stool Sample' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Not Routine — Send If:',
      items: [
        'Systemically unwell, immunocompromised, or needing admission; blood or pus in the stool.',
        'Recent travel abroad; suspected food poisoning associated with an outbreak; or the patient is a food handler / healthcare or care worker.',
        'Diarrhoea persisting >7 days, or recent hospitalisation/antibiotics (send a C. difficile toxin test).',
        'Request stool MC&S with ova, cysts and parasites (for persistent/travel-related diarrhoea — e.g. Giardia, amoebiasis), and C. difficile toxin where relevant.',
      ],
    },

    { type: 'heading', level: 2, text: 'Common Organisms' },
    {
      type: 'table',
      headers: ['Organism', 'Clues'],
      rows: [
        ['Norovirus', 'Winter outbreaks, prominent vomiting, very contagious; short-lived'],
        ['Campylobacter', 'Commonest bacterial cause; poultry; prodrome then bloody diarrhoea and cramps; can trigger Guillain-Barré/reactive arthritis'],
        ['Salmonella / Shigella', 'Food-borne; fever and bloody diarrhoea; typhoid/paratyphoid in returning travellers (enteric fever)'],
        ['E. coli O157 (STEC)', 'Bloody diarrhoea; risk of haemolytic uraemic syndrome — do NOT give antibiotics or antimotility agents'],
        ['Giardia', 'Prolonged, non-bloody, bloating/steatorrhoea after travel; treat with metronidazole'],
        ['C. difficile', 'After antibiotics/hospital; can cause colitis — stop the culprit antibiotic, treat per severity'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'list',
      items: [
        'Oral rehydration and small, frequent fluids/light diet; oral rehydration salts for those at risk of dehydration; admit if unable to maintain hydration, shocked, or a serious cause is suspected.',
        'Antibiotics are NOT routinely needed — most bacterial gastroenteritis is self-limiting; consider (per stool result/severity) for systemic illness, Shigella, Giardia, C. difficile, or immunocompromise.',
        'Antimotility agents (loperamide) can be used for mild non-bloody diarrhoea in adults but AVOID with bloody diarrhoea/fever or possible E. coli O157/C. difficile.',
        'Hygiene and exclusion: advise scrupulous hand hygiene; stay off work/school until 48 hours after the last episode; food handlers and certain occupations have specific exclusion rules.',
        'Notify UKHSA for suspected food poisoning and specific notifiable organisms (e.g. food poisoning, enteric fever, E. coli O157, cholera).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Gastroenteritis', url: 'https://cks.nice.org.uk/topics/gastroenteritis/' },
        { label: 'NICE CKS — Diarrhoea (Adult, Acute)', url: 'https://cks.nice.org.uk/topics/diarrhoea-adults-assessment/' },
        { label: 'UKHSA — Notifiable Diseases', url: 'https://www.gov.uk/guidance/notifiable-diseases-and-causative-organisms-how-to-report' },
        { label: 'NHS — Diarrhoea & Vomiting', url: 'https://www.nhs.uk/conditions/diarrhoea-and-vomiting/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'gastroenteritis-children', label: 'Gastroenteritis in Children', subtitle: 'Paediatric D&V — dehydration and HUS' },
        { id: 'fever-returning-traveller', label: 'Fever in the Returning Traveller', subtitle: 'Travel-related diarrhoea and enteric fever' },
        { id: 'c-diff', label: 'Clostridioides difficile', subtitle: 'Antibiotic-associated diarrhoea/colitis' },
        { id: 'ibd', label: 'Inflammatory Bowel Disease', subtitle: 'Consider if bloody diarrhoea persists' },
        { id: 'notifiable-diseases', label: 'Notifiable Diseases', subtitle: 'Public-health notification duties' },
      ],
    },

  ],
}

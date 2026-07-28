import type { Note } from '../data/notes'

export const entEmergencies: Note = {
  id: 'ent-emergencies',
  title: 'ENT Emergencies & Neck Space Infections',
  subtitle: 'Nasal septal haematoma, Ludwig\'s angina, quinsy, and the pharyngeal pouch',
  tags: ['ent'],

  body: `nasal septal haematoma boggy septum drainage saddle nose Ludwig's angina submandibular floor of mouth airway quinsy peritonsillar abscess trismus pharyngeal pouch Zenker dysphagia regurgitation halitosis epiglottitis airway emergency`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A small number of ENT presentations are time-critical because of airway risk or a complication that is preventable if acted on quickly. This note groups the ones a GP or OOH clinician must recognise: nasal septal haematoma (drain it or the septum dies), the deep-neck-space infections Ludwig\'s angina and quinsy (airway and sepsis risk), and the pharyngeal pouch (a benign but characteristic cause of dysphagia).',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Airway Red Flags — 999',
      items: [
        'Stridor, drooling, a muffled "hot-potato" voice, tripod positioning, or difficulty swallowing secretions → impending airway obstruction (Ludwig\'s angina, epiglottitis, severe quinsy) — call 999, do NOT lie the patient flat or examine the throat in suspected epiglottitis.',
        'Keep the patient upright and calm; give oxygen; get senior ENT/anaesthetic help.',
      ],
    },

    { type: 'heading', level: 2, text: 'Nasal Septal Haematoma' },
    {
      type: 'list',
      items: [
        'After nasal trauma, ALWAYS examine the septum: a boggy, fluctuant, often bilateral swelling of the septum (unlike a simple deviated/firm septum) is a haematoma.',
        'It is a surgical emergency — the haematoma strips the septal cartilage from its blood supply → avascular necrosis and a "saddle-nose" deformity, and can become infected (abscess).',
        'Refer same-day to ENT for incision and drainage; do not simply treat as a nosebleed/fracture.',
      ],
    },

    { type: 'heading', level: 2, text: 'Deep Neck Space Infections' },
    {
      type: 'table',
      headers: ['Condition', 'Features & action'],
      rows: [
        ['Ludwig\'s angina', 'Rapidly spreading cellulitis of the submandibular/floor-of-mouth spaces (often dental origin): bilateral neck swelling, raised/protruding tongue, drooling, trismus, systemic sepsis → airway emergency, IV antibiotics, urgent ENT/maxfax + anaesthetics'],
        ['Quinsy (peritonsillar abscess)', 'Severe unilateral sore throat, trismus, "hot-potato" voice, uvula deviated away from a swollen peritonsillar bulge → same-day ENT for needle aspiration/incision + antibiotics'],
        ['Epiglottitis', 'Rapid-onset severe sore throat with disproportionately little to see, drooling, stridor (Hib — now rarer) → do NOT examine the throat; 999/anaesthetics'],
      ],
    },

    { type: 'heading', level: 2, text: 'Pharyngeal Pouch (Zenker\'s Diverticulum)' },
    {
      type: 'list',
      items: [
        'An outpouching of the pharyngeal mucosa (through Killian\'s dehiscence), usually in older men: progressive dysphagia, REGURGITATION of undigested food (sometimes hours later), halitosis, a gurgling neck, chronic cough/aspiration, and sometimes a neck lump that empties on pressure.',
        'Not an emergency itself, but investigate dysphagia appropriately (contrast swallow; endoscopy is done with care given perforation risk); refer to ENT — treatment is surgical (endoscopic stapling or excision) if symptomatic.',
        'Always consider malignancy in new dysphagia (see upper-GI/head-and-neck cancer pathways).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'ENT UK — Patient Information', url: 'https://www.entuk.org/patients/conditions/' },
        { label: 'NICE CKS — Sore Throat (Acute)', url: 'https://cks.nice.org.uk/topics/sore-throat-acute/' },
        { label: 'NICE NG12 — Suspected Cancer (Head & Neck / Upper GI)', url: 'https://www.nice.org.uk/guidance/ng12' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'sorethroat-tonsillitis', label: 'Sore Throat & Tonsillitis', subtitle: 'Quinsy as a complication; FeverPAIN/Centor' },
        { id: 'epistaxis', label: 'Epistaxis', subtitle: 'Nasal trauma — always examine the septum' },
        { id: 'dysphagia', label: 'Dysphagia', subtitle: 'Pharyngeal pouch in the swallowing-difficulty differential' },
        { id: 'neck-lumps', label: 'Neck Lumps', subtitle: 'Neck swelling and space infections' },
        { id: 'cellulitis', label: 'Cellulitis & Skin Infections', subtitle: 'Deep-space cellulitis principles' },
      ],
    },

  ],
}

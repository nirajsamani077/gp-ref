import type { Note } from '../data/notes'

export const feverReturningTraveller: Note = {
  id: 'fever-returning-traveller',
  title: 'Fever in the Returning Traveller',
  subtitle: 'Always exclude malaria, spotting high-consequence infections, exposure history and initial tests',
  tags: ['infection'],

  body: `fever returning traveller malaria thick thin films dengue Zika chikungunya typhoid enteric fever viral haemorrhagic fever VHF Ebola traveller's diarrhoea Giardia hepatitis rabies incubation period exposure history notify UKHSA`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Fever in the Returned Traveller', url: 'https://cks.nice.org.uk/topics/malaria/' },
        { label: 'TravelHealthPro (NaTHNaC)', url: 'https://travelhealthpro.org.uk/' },
        { label: 'UKHSA — Imported Fever Service', url: 'https://www.gov.uk/guidance/imported-fever-service-ifs' },
      ],
    },

    {
      type: 'para',
      text: 'A fever in someone who has recently travelled is a "must not miss" presentation: the differential ranges from self-limiting viral illness to rapidly fatal falciparum malaria and, rarely, a high-consequence infectious disease requiring immediate isolation. A structured "where, when, what" exposure history plus the incubation period narrows the field quickly — but the two non-negotiables are always excluding malaria and thinking about viral haemorrhagic fever before you examine or take blood.',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Two Things You Must Not Miss',
      items: [
        'MALARIA — think of it in ANY febrile traveller returning from an endemic area (fever may be intermittent and non-specific); can be rapidly fatal (falciparum). If unwell/possible malaria → same-day assessment and urgent thick and thin blood films (a single negative film does not exclude it — repeat over 48 hours)',
        'HIGH-CONSEQUENCE INFECTIOUS DISEASE — if a viral haemorrhagic fever (e.g. Ebola/Marburg) is possible (endemic area within 21 days + compatible illness), do NOT examine/take bloods routinely: isolate, use PPE, and phone the Imported Fever Service / local infection team immediately',
        'Admit anyone who is septic or systemically unwell',
      ],
    },

    { type: 'heading', level: 2, text: 'Structured History — "Where, When, What"' },

    {
      type: 'list',
      items: [
        'Exact countries and regions, dates of travel and symptom onset (incubation period narrows the differential)',
        'Vaccinations and malaria prophylaxis taken (and adherence)',
        'Exposures: food and untreated water, freshwater swimming (schistosomiasis, leptospirosis), animal/insect bites (malaria, dengue, Zika, chikungunya, rickettsia, rabies), sexual contacts, healthcare contact, and unwell contacts',
        'Associated symptoms: rash, jaundice, diarrhoea, respiratory, neurological, urinary; and examine for rash, eschar/tick bite, lymphadenopathy, hepatosplenomegaly',
      ],
    },

    { type: 'heading', level: 2, text: 'Common Causes by Pattern' },

    {
      type: 'table',
      headers: ['Pattern', 'Consider'],
      rows: [
        ['Undifferentiated fever', 'Malaria, dengue, typhoid/paratyphoid (enteric fever), rickettsia, viral URTI/COVID/influenza'],
        ['Fever + diarrhoea', 'Traveller\'s diarrhoea (bacterial), Giardia, amoebiasis, enteric fever'],
        ['Fever + jaundice', 'Viral hepatitis (A/E), malaria, leptospirosis — usually needs admission'],
        ['Fever + rash', 'Dengue, chikungunya, Zika, rickettsia (eschar), typhoid (rose spots), measles'],
        ['Fever + respiratory', 'TB, influenza, COVID, Legionella, MERS/avian influenza (isolate if high-consequence)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Initial Investigations (if not admitting)' },

    {
      type: 'list',
      items: [
        'Malaria thick and thin films (or rapid antigen) — the priority; plus FBC (thrombocytopenia in malaria/dengue), U&E, LFTs, CRP, glucose, blood cultures, and urinalysis',
        'Stool MC&S (with ova, cysts and parasites) if diarrhoea',
        'Dengue/other serology as guided; consider HIV test',
        'Most systemically unwell or diagnostically uncertain travellers are best assessed acutely (infectious diseases)',
        'Notify UKHSA for notifiable diseases (e.g. malaria, typhoid, measles, VHF); use the Imported Fever Service for advice on complex cases',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'malaria', label: 'Malaria & Antimalarial Prophylaxis', subtitle: 'Diagnosis, species, treatment and prevention' },
        { id: 'lyme-disease', label: 'Lyme Disease & Tick Bites', subtitle: 'Tick-borne exposure and rash' },
        { id: 'hepatitis', label: 'Viral Hepatitis (A, B & C)', subtitle: 'Fever + jaundice in a traveller' },
        { id: 'notifiable-diseases', label: 'Notifiable Diseases', subtitle: 'Notification duties and UKHSA' },
      ],
    },

  ],
}

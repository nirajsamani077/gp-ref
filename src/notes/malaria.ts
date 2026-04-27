import type { Note } from '../data/notes'

export const malaria: Note = {
  id: 'malaria',
  title: 'Malaria & Antimalarial Prophylaxis',
  subtitle: 'GP perspective on prophylaxis, drug choice, mefloquine cautions, and suspected malaria',
  tags: ['infection'],

  body: 'malaria antimalarial prophylaxis atovaquone proguanil malarone doxycycline mefloquine chloroquine primaquine DEET insect repellent falciparum vivax ovale malariae travel health pregnancy child G6PD fever splenomegaly hypnozoite relapse artemisinin resistance notifiable Travel Health Pro',

  content: [

    { type: 'heading', level: 2, text: 'Malaria Types — GP Overview' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Falciparum vs non-falciparum malaria',
      items: [
        'Plasmodium falciparum: most dangerous; does not cause relapse; resistance to chloroquine is widespread — requires artemisinin combination therapy (ACT); can be fatal if not treated promptly',
        'P. vivax / P. ovale: 48-hour fever cycle; form dormant liver stages (hypnozoites) causing relapse months/years later; treat with chloroquine or ACT + primaquine (radical cure to clear hypnozoites — G6PD testing mandatory before primaquine)',
        'P. malariae: 72-hour fever cycle; no hypnozoites; associated with nephrotic syndrome in chronic infection',
        'Classic symptoms: cyclical fever, rigors, headache, myalgia, splenomegaly; can mimic flu especially in early stages',
        'Malaria is a notifiable disease — report to UKHSA via local Health Protection Team',
        'GP role: suspect malaria in any febrile traveller returning from endemic area; EMERGENCY — refer immediately for thick and thin blood films; do not wait for results if patient unwell',
      ],
    },

    { type: 'heading', level: 2, text: 'Malaria Prophylaxis' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Non-pharmacological prevention — for all travellers',
      items: [
        'DEET-based insect repellent (20–50%): highly effective against Anopheles mosquitoes; apply to exposed skin after sunscreen (sunscreen first, then DEET — DEET dilutes sunscreen SPF)',
        'Use from 2 months of age; lower concentration (20%) for young children',
        'Long sleeves and trousers at dusk and night when mosquitoes are most active',
        'Insecticide-treated bed nets (permethrin-impregnated)',
        'Air conditioning and ceiling fans reduce mosquito exposure indoors',
        'Country-specific guidance: always check Travel Health Pro (travelhealthpro.org.uk) for up-to-date risk and drug resistance maps before advising',
      ],
    },

    {
      type: 'image',
      src: '/images/Use-of-anti-malarial-drugs-for-P-falciparum-prophylaxis.png',
      alt: 'Table of antimalarial drugs for P. falciparum prophylaxis showing drug, adult dose, regimen, start before exposure and continue after exposure',
      caption: 'Antimalarial prophylaxis drugs — adult doses, timing of start (before exposure) and duration after return. See drug notes below for key cautions.',
      maxWidth: '620px',
    },

    { type: 'heading', level: 2, text: 'Drug Choice & Key Cautions' },

    {
      type: 'table',
      headers: ['Drug', 'Regime', 'Start / Stop', 'Key cautions & notes'],
      rows: [
        ['Atovaquone-proguanil (Malarone)', '250/100 mg OD with food', '1 day before → 7 days after', 'GI upset (take with food); expensive; good tolerability; no resistance issues; suitable for last-minute travel'],
        ['Doxycycline', '100 mg OD', '1–2 days before → 4 weeks after', 'Photosensitivity — sunscreen essential; not under 12 years; not in pregnancy; oesophagitis (take with water, sit upright); interacts with antacids'],
        ['Chloroquine', '300 mg base (500 mg salt) weekly', '1 week before → 4 weeks after', 'Widespread falciparum resistance — rarely first-line now; safest in pregnancy; contraindicated in epilepsy (lowers seizure threshold); headache common'],
        ['Mefloquine (Lariam)', '250 mg weekly', '2–3 weeks before → 4 weeks after', 'NEUROPSYCHIATRIC RISK — see callout below; contraindicated in epilepsy, psychiatric history, cardiac conduction defects; long half-life (side effects persist weeks after stopping)'],
        ['Primaquine', '30 mg base (= 2 tabs) daily', '1 day before → 3–7 days after', 'G6PD testing MANDATORY before use — causes haemolysis in G6PD deficiency; radical cure for vivax/ovale hypnozoites'],
      ],
      caption: 'Antimalarial prophylaxis summary. Drug choice depends on destination, resistance patterns, duration, patient factors and cost. Always check travelhealthpro.org.uk for current country recommendations.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Mefloquine (Lariam) — neuropsychiatric caution',
      items: [
        'Mefloquine has a significant neuropsychiatric side effect profile: anxiety, vivid dreams, insomnia, depression, hallucinations, psychosis, seizures',
        'Contraindicated in any history of psychiatric illness, epilepsy, or cardiac conduction defects',
        'Long half-life (~3 weeks): neuropsychiatric effects can persist for weeks to months after the drug is stopped',
        'Start 2–3 weeks before travel to identify side effects before departure — if side effects occur, switch drug while still in the UK',
        'MHRA mandates a patient information card be given with each prescription; document counselling',
        'Many patients and GPs now avoid mefloquine unless no alternatives are suitable — doxycycline or Malarone are generally preferred',
      ],
    },

    { type: 'heading', level: 2, text: 'Special Populations' },

    {
      type: 'table',
      headers: ['Group', 'Recommendation'],
      rows: [
        ['Pregnancy', 'Advise against travel to high-risk malaria areas if at all possible. If unavoidable: chloroquine (where sensitive) is the safest; atovaquone-proguanil and mefloquine are not recommended in 1st trimester; doxycycline contraindicated throughout pregnancy. Use DEET at lowest effective concentration.'],
        ['Breastfeeding', 'Chloroquine and mefloquine considered safe. Doxycycline — avoid (tooth discolouration in infant). Atovaquone-proguanil — insufficient data; avoid.'],
        ['Children', 'DEET safe from 2 months (lower concentration). Doxycycline only from age 12. Atovaquone-proguanil from 11 kg (doses are weight-based). Mefloquine from 5 kg. Chloroquine from any age (weight-based).'],
        ['G6PD deficiency', 'Primaquine and dapsone are contraindicated — causes haemolysis. Test all patients before primaquine. Chloroquine and doxycycline are safe.'],
        ['Immunocompromised / HIV', 'Higher risk of severe malaria. Atovaquone-proguanil may interact with antiretrovirals. Check interactions carefully. Seek travel health specialist advice.'],
      ],
      caption: 'Malaria prophylaxis in special populations. When in doubt, refer to travel health specialist or NaTHNaC.',
    },

    { type: 'heading', level: 2, text: 'Suspected Malaria — GP Action' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Febrile returning traveller — act promptly',
      items: [
        'Any fever in a traveller returning from a malaria-endemic area is malaria until proven otherwise',
        'Incubation: falciparum typically 7–14 days (can be up to 3 months); vivax/ovale up to 12 months or longer',
        'Do not wait — refer for emergency blood films (thick and thin) and rapid antigen test; repeat if first test negative but clinical suspicion remains',
        'Falciparum malaria can deteriorate rapidly — if unwell or any features of severe malaria (confusion, seizures, renal failure, jaundice, severe anaemia) → 999/immediate ED',
        'Malaria is a NOTIFIABLE DISEASE — notify local Health Protection Team on clinical suspicion; laboratory confirmation is NOT required first',
        'Vivax/ovale relapse can occur up to 1 year after return; always ask about travel history in febrile patients',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Travel Health Pro — Country Information', url: 'https://travelhealthpro.org.uk/countries' },
        { label: 'NaTHNaC — Malaria', url: 'https://travelhealthpro.org.uk/factsheet/52/malaria' },
        { label: 'UKHSA — Malaria Guidelines', url: 'https://www.gov.uk/guidance/malaria-prevention-guidelines-for-travellers-from-the-uk' },
        { label: 'NICE CKS — Malaria', url: 'https://cks.nice.org.uk/topics/malaria/' },
        { label: 'Notifiable Diseases — Report to UKHSA', url: 'https://www.gov.uk/guidance/notifiable-diseases-and-how-to-report-them' },
        { label: 'MHRA — Mefloquine Safety', url: 'https://www.gov.uk/drug-safety-update/mefloquine-lariam-updated-contraindications-and-warnings' },
      ],
    },

  ],
}

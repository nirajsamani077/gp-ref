import type { Note } from '../data/notes'

export const fitnessToFly: Note = {
  id: 'fitness-to-fly',
  title: 'Fitness to Fly',
  subtitle: 'Cabin hypoxia and pressure effects — common conditions, timing after events, and useful references',
  tags: ['general'],

  body: `fitness to fly air travel cabin pressure hypoxia hypoxic challenge test recent MI stroke surgery pneumothorax DVT pregnancy anaemia COPD oxygen in-flight medical clearance CAA MEDIF`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Commercial cabins are pressurised to the equivalent of ~1800–2400 m altitude, so the inspired oxygen falls (arterial oxygen saturation drops by a few percent in healthy people) and trapped gas expands by ~30%. Most passengers are unaffected, but these two physiological effects — HYPOXIA and gas EXPANSION — underlie the common fitness-to-fly questions. Airlines make the final decision (often via a MEDIF form); the GP provides accurate clinical information and advice.',
    },

    { type: 'heading', level: 2, text: 'Typical Timing After an Event (Guide — Check Airline/Guidance)' },
    {
      type: 'table',
      headers: ['Event', 'Typical minimum delay before flying'],
      rows: [
        ['Uncomplicated MI / ACS', 'Often ~3–10 days depending on risk (e.g. ~3 days after successful PCI, longer if complicated)'],
        ['Stroke / TIA', 'Usually avoid for ~10 days (individualised; longer if unstable)'],
        ['Uncomplicated surgery — abdominal / laparoscopic', 'Chest/abdominal: often ~4–10 days (gas expansion); laparoscopy shorter'],
        ['Pneumothorax', 'Not until ~1–2 weeks after full radiographic resolution (risk of tension) — a key absolute-ish contraindication if unresolved'],
        ['DVT / PE', 'Once established on anticoagulation and stable; use compression/mobilise on long flights'],
        ['Uncomplicated pregnancy', 'Usually fine to ~36 weeks (singleton) / ~32 weeks (multiple) — airlines require a letter after ~28 weeks'],
      ],
      caption: 'These are general guides — the CAA and airline guidance take precedence and are updated; assess each patient individually.',
    },

    { type: 'heading', level: 2, text: 'Respiratory & Other Considerations' },
    {
      type: 'list',
      items: [
        'Chronic lung disease (COPD, ILD): those with borderline oxygenation may need a "hypoxic challenge test" and possibly in-flight oxygen — refer to respiratory for assessment; arrange in-flight oxygen with the airline in advance.',
        'Significant anaemia (e.g. Hb <8 g/L) reduces oxygen-carrying reserve — correct/assess before flying; sickle cell disease patients are at risk of crises (hydration, and in-flight oxygen may be advised).',
        'Recent middle-ear/sinus surgery or acute otitis media/sinusitis → barotrauma risk; recent eye surgery with intraocular gas is a contraindication until the gas absorbs.',
        'Ensure adequate supplies of essential medication in hand luggage (with a letter for controlled drugs/needles), plan for time-zone changes (e.g. insulin), and consider DVT prophylaxis for long-haul in higher-risk patients.',
      ],
    },

    { type: 'heading', level: 2, text: 'The GP\'s Role' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Advise — the Airline Decides',
      items: [
        'The airline (via its medical department / MEDIF form) makes the final fitness-to-fly decision; the GP supplies accurate clinical details and sensible advice, and refers for specialist assessment (e.g. respiratory) where needed.',
        'Point patients to the CAA passenger health guidance and their airline\'s medical clearance process well before travel.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'CAA — Passenger Health / Fitness to Fly', url: 'https://www.caa.co.uk/passengers/before-you-fly/am-i-fit-to-fly/' },
        { label: 'BTS — Air Travel Recommendations (Respiratory)', url: 'https://www.brit-thoracic.org.uk/quality-improvement/guidelines/air-travel/' },
        { label: 'NHS — Travelling with a Health Condition', url: 'https://www.nhs.uk/using-the-nhs/healthcare-abroad/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'copd', label: 'COPD', subtitle: 'Hypoxic challenge and in-flight oxygen' },
        { id: 'dvt', label: 'DVT', subtitle: 'Travel-related VTE risk and prophylaxis' },
        { id: 'sickle-cell', label: 'Sickle Cell Disease', subtitle: 'Hypoxia-triggered crises and flying' },
        { id: 'angina-ihd', label: 'Angina & IHD', subtitle: 'Flying after MI/ACS' },
      ],
    },

  ],
}

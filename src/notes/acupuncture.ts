import type { Note } from '../data/notes'

export const acupuncture: Note = {
  id: 'acupuncture',
  title: 'Acupuncture',
  subtitle: 'Evidence base, indications, and practical overview for primary care',
  tags: ['MSK', 'pain', 'headache', 'chronic pain', 'physiotherapy'],

  body: 'acupuncture dry needling trigger point traditional Chinese medicine chronic pain MSK headache migraine tension physiotherapy NICE evidence needles sessions referral',

  content: [
    {
      type: 'image',
      src: '/images/acupuncture.jpg',
      alt: 'Acupuncture needles in skin',
      caption: 'Traditional acupuncture — fine needles inserted at specific points, left in situ for up to 30 minutes',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Overview',
    },
    {
      type: 'list',
      items: [
        'Involves insertion of fine needles into specific points on the body to modulate pain pathways and promote healing',
        'Neurophysiological basis: stimulates A-delta and C nerve fibres → release of endorphins, serotonin, and noradrenaline → modulation of the pain gate and descending inhibitory pathways',
        'Evidence base is moderate — stronger for headache/migraine and chronic MSK pain than for other conditions; acknowledged as a reasonable option within NHS NICE guidance for certain indications',
        'Generally safe with few serious adverse effects when performed by a trained practitioner; mild soreness and bruising at needle sites are common',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Evidence by Condition',
    },
    {
      type: 'table',
      headers: ['Condition', 'Evidence', 'NICE / guideline position'],
      rows: [
        ['Tension-type headache (prophylaxis)', 'Good — multiple RCTs showing reduction in headache days', 'NICE NG150: offer up to 10 sessions of acupuncture over 5–8 weeks as prophylaxis'],
        ['Migraine (prophylaxis)', 'Good — comparable to topiramate/amitriptyline in some trials', 'NICE NG150: offer up to 10 sessions over 5–8 weeks if pharmacological prophylaxis not tolerated'],
        ['Chronic primary pain', 'Moderate — evidence for short-term benefit in chronic widespread pain, fibromyalgia', 'NICE NG193: acupuncture is one of the recommended non-pharmacological options for chronic primary pain'],
        ['Chronic low back pain', 'Moderate — short-term pain and function benefit; effect wanes over time', 'NICE NG59: not recommended as a standalone treatment for low back pain without sciatica'],
        ['Neck pain / whiplash', 'Moderate — some benefit shown in RCTs', 'Often offered via physiotherapy or MSK pathways; not specifically NICE-recommended'],
        ['Osteoarthritis (knee/hip)', 'Moderate — pain reduction in the short term', 'NICE does not routinely recommend; some local CCG/ICB pathways include it'],
        ['Chronic pelvic pain / dysmenorrhoea', 'Limited — some positive trials but small and heterogeneous', 'Not specifically NICE-recommended; may be offered by specialist pain or gynaecology teams'],
        ['Nausea (chemotherapy / postoperative)', 'Good — particularly for PC6 (Neiguan) point stimulation', 'Widely used in oncology supportive care; not standard primary care referral'],
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Key NICE positions',
      items: [
        'NICE recommends acupuncture for headache and migraine prophylaxis (NG150) — up to 10 sessions',
        'NICE recommends it as an option in chronic primary pain (NG193) alongside other non-pharmacological approaches',
        'NICE does not recommend acupuncture for low back pain without sciatica (NG59) as a standalone treatment',
        'Overall: evidence supports it as an adjunct in chronic pain and headache — not a cure, but a reasonable addition to a multimodal approach',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Types of Acupuncture',
    },
    {
      type: 'table',
      headers: ['Type', 'Technique', 'Used for'],
      rows: [
        ['Traditional / Western medical acupuncture', 'Fine needles inserted at specific anatomical points; left in situ 15–30 minutes; may be stimulated manually or with low-voltage electrical current (electroacupuncture)', 'Headache, chronic pain, general pain modulation'],
        ['Trigger point acupuncture', 'Needles inserted directly into myofascial trigger points (taut bands in muscle); may produce a characteristic "twitch response"', 'Myofascial pain, muscle spasm, regional MSK pain'],
        ['Dry needling', 'Similar to trigger point technique; used by physiotherapists; targets tender points rather than traditional meridian points', 'MSK pain, neck/shoulder/back pain, sports injury rehabilitation'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Practical Points',
    },
    {
      type: 'list',
      items: [
        'Course: typically 6–10 sessions, 1–2× per week; NICE headache guidance specifies up to 10 sessions over 5–8 weeks',
        'Response: patients may feel worse before better in the first 1–2 sessions (post-needling soreness); improvement usually seen from session 3–4 onwards',
        'Effect duration: benefits can last weeks to months after completing a course; a maintenance session every few months is reasonable if the patient responds well',
        'Practitioners: can be delivered by physiotherapists, GPs, pain consultants, or traditional acupuncturists (BACC/AACP registered)',
        'NHS availability: variable by ICB — often available via self-referral to physiotherapy or via MSK referral pathways; some headache services offer it directly',
        'Contraindications: coagulopathy or anticoagulant therapy (relative), local infection or skin disease at needle site, pacemaker (if electroacupuncture), pregnancy (certain points avoided)',
        'Adverse effects: mild bruising, soreness, and fatigue common; vasovagal reactions during treatment in ~1%; serious adverse events (pneumothorax, infection) are rare but reported with poorly trained practitioners',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'What to tell patients',
      items: [
        'Very fine needles — most people feel minimal pain; a dull ache or tingling at the needle site ("de qi") is normal and a sign of activation',
        'Wear loose, comfortable clothing — arms and legs need to be accessible',
        'Avoid heavy meals or alcohol immediately before a session',
        'Some tiredness or light-headedness after treatment is normal — avoid driving immediately if this occurs',
        'It usually takes 4–6 sessions to see a meaningful benefit; commit to the course before deciding if it is helping',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG150 (Headache)', url: 'https://www.nice.org.uk/guidance/ng150' },
        { label: 'NICE NG193 (Chronic Pain)', url: 'https://www.nice.org.uk/guidance/ng193' },
        { label: 'BACC (find a practitioner)', url: 'https://www.acupuncture.org.uk' },
        { label: 'AACP (physio acupuncture)', url: 'https://www.aacp.org.uk' },
      ],
    },
  ],
}

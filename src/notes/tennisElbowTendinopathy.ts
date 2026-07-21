import type { Note } from '../data/notes'

export const tennisElbowTendinopathy: Note = {
  id: 'tennis-elbow-tendinopathy',
  title: 'Tennis Elbow & Tendinopathy',
  subtitle: 'Lateral/medial epicondylalgia and the eccentric-loading approach to overuse tendinopathy',
  tags: ['msk'],

  body: `tennis elbow lateral epicondylitis epicondylalgia golfer's elbow medial tendinopathy eccentric loading exercises overuse degenerative tendon Achilles patellar topical NSAID brace steroid injection shockwave`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Tennis Elbow', url: 'https://cks.nice.org.uk/topics/tennis-elbow/' },
        { label: 'CSP — Elbow Pain Exercises', url: 'https://www.csp.org.uk/conditions/elbow-pain' },
        { label: 'Versus Arthritis — Elbow Pain', url: 'https://versusarthritis.org/about-arthritis/conditions/elbow-pain/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Tendinopathy — the Key Concept' },

    {
      type: 'list',
      items: [
        'Tendinopathy is a DEGENERATIVE overuse problem (micro-tears + failed healing), NOT primarily inflammatory ("-opathy", not "-itis") — this changes the treatment (loading, not anti-inflammatories/rest)',
        'Common sites: tennis elbow (lateral epicondyle — wrist/finger extensors), golfer\'s elbow (medial epicondyle — flexors), Achilles, and patellar ("jumper\'s knee")',
        'Typically localised pain that eases as activity continues but is much worse afterwards, with tenderness at the tendon origin',
      ],
    },

    { type: 'heading', level: 2, text: 'Tennis Elbow (Lateral Epicondylalgia)' },

    {
      type: 'list',
      items: [
        'Overuse of the common extensor origin → lateral elbow pain, worse on gripping and resisted wrist/finger extension; now more common in manual workers than tennis players',
        'Clinical diagnosis; differentials include radial tunnel syndrome and elbow OA (imaging rarely needed)',
        'It is self-limiting but slow — most recover within months (up to a year) regardless of treatment; manage expectations',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Management — Load, Don\'t Rest',
      items: [
        'ECCENTRIC LOADING exercises are the mainstay — controlled lengthening of the tendon under progressive load (e.g. slow wrist extension/flexion over the edge of a chair arm with a light weight); a physiotherapy programme if not improving at ~6 weeks',
        'Relative rest — reduce (don\'t completely stop) aggravating activity; modify technique/ergonomics',
        'A counterforce brace (e.g. epicondylitis clasp) can help',
        'Topical (or short oral) NSAIDs for symptom relief',
        'Corticosteroid injections are NO LONGER recommended — they give short-term relief but worse long-term outcomes',
        'Refractory cases (>6–12 months): consider extracorporeal shockwave therapy or refer for a surgical opinion',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'achilles-tendinopathy', label: 'Achilles Tendinopathy & Rupture', subtitle: 'Same eccentric-loading principle; rupture red flags' },
        { id: 'shoulder-problems', label: 'Shoulder Problems', subtitle: 'Rotator cuff tendinopathy and injection cautions' },
        { id: 'osteoarthritis', label: 'Osteoarthritis', subtitle: 'Elbow OA as a differential' },
        { id: 'nsaids', label: 'NSAIDs', subtitle: 'Topical-first analgesia and safe prescribing' },
      ],
    },

  ],
}

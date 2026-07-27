import type { Note } from '../data/notes'

export const photosensitivity: Note = {
  id: 'photosensitivity',
  title: 'Photosensitive Rashes',
  subtitle: 'Polymorphic light eruption, drug photosensitivity, and photo-aggravated disease — plus sun protection',
  tags: ['dermatology'],

  body: `photosensitivity polymorphic light eruption PLE juvenile spring eruption sun rash photodistributed drug induced photosensitivity phototoxic photoallergic lupus porphyria SPF sun protection UVA UVB face dorsal hands V of neck`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A photosensitive rash is one triggered or worsened by sunlight, so it characteristically affects sun-exposed sites — the face, "V" of the neck, dorsal hands and forearms — while sparing shaded areas (under the chin, behind the ears, covered skin). Recognising this photodistribution is the diagnostic key; the causes range from the very common (polymorphic light eruption, drug photosensitivity) to markers of systemic disease (lupus) and rare metabolic conditions (porphyria).',
    },

    { type: 'heading', level: 2, text: 'Common Idiopathic Photodermatoses' },
    {
      type: 'list',
      items: [
        'Polymorphic light eruption (PLE): the commonest — an itchy papular/vesicular/plaque rash appearing hours to days after the first strong sun exposure of the season (spring/early summer, holidays), on exposed skin but often SPARING the face (which is habitually exposed and "hardened"). It settles over days and improves through the summer as the skin acclimatises.',
        'Juvenile spring eruption: a PLE variant affecting the ears (helices) of children/young males in spring.',
        'Management: strict sun protection (below), and for PLE, gradual sun exposure to build tolerance; topical steroids and antihistamines for flares; refer for phototherapy (desensitisation before summer) or specialist assessment if severe.',
      ],
    },

    { type: 'heading', level: 2, text: 'Drug-Induced Photosensitivity' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Review the Drug History',
      items: [
        'Phototoxic (an exaggerated sunburn on exposed skin) or photoallergic (an eczema-like eruption) reactions are common and under-recognised.',
        'Culprits include: thiazides and other diuretics, amiodarone, quinolones and tetracyclines (doxycycline), NSAIDs, retinoids, some antifungals, phenothiazines, and topical/systemic agents; St John\'s Wort and certain plants (phytophotodermatitis — e.g. giant hogweed, lime juice) cause a streaky reaction.',
        'Management: identify and, where possible, stop/switch the drug, plus sun protection.',
      ],
    },

    { type: 'heading', level: 2, text: 'Photo-Aggravated & Serious Causes' },
    {
      type: 'list',
      items: [
        'Systemic/cutaneous lupus erythematosus: a photosensitive malar or discoid rash — check ANA and assess for systemic features (see SLE).',
        'Rosacea and some eczemas are photo-aggravated.',
        'Porphyria (e.g. porphyria cutanea tarda): photosensitive blistering/fragility of the dorsal hands — consider if blistering, and check with porphyrin screening.',
        'A NEW marked photosensitivity, blistering, or systemic features warrants investigation and dermatology referral.',
      ],
    },

    { type: 'heading', level: 2, text: 'Sun Protection Advice (Applies to All)' },
    {
      type: 'list',
      items: [
        'High-SPF broad-spectrum sunscreen (SPF 30–50, high UVA rating) applied generously and reapplied; avoid peak sun (11am–3pm); protective clothing, wide-brimmed hat and sunglasses; seek shade.',
        'Reassure about vitamin D — those avoiding sun for photosensitivity should take a vitamin D supplement.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Polymorphic Light Eruption', url: 'https://cks.nice.org.uk/topics/polymorphic-light-eruption/' },
        { label: 'BAD — Polymorphic Light Eruption Leaflet', url: 'https://www.bad.org.uk/pils/polymorphic-light-eruption/' },
        { label: 'DermNet — Photosensitivity', url: 'https://dermnetnz.org/topics/photosensitivity' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'sle-sjogrens', label: 'SLE & Sjögren\'s', subtitle: 'Photosensitive lupus rash and systemic features' },
        { id: 'acne-rosacea', label: 'Acne Rosacea', subtitle: 'Photo-aggravated facial redness' },
        { id: 'actinic-keratosis', label: 'Actinic Keratosis', subtitle: 'Chronic UV damage on the same exposed sites' },
        { id: 'nsaids', label: 'NSAIDs', subtitle: 'A common cause of drug photosensitivity' },
        { id: 'vitamin-d', label: 'Vitamin D', subtitle: 'Supplementation when sun avoidance is needed' },
      ],
    },

  ],
}

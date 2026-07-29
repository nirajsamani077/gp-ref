import type { Note } from '../data/notes'

export const minorNeonatal: Note = {
  id: 'minor-neonatal',
  title: 'Minor Neonatal & Infant Conditions',
  subtitle: 'The common benign findings — teething, drooling, Epstein\'s pearls, labial adhesions, milia and more',
  tags: ['paediatrics'],

  body: `teething drooling Epstein's pearl milia labial adhesions physiological neonatal benign erythema toxicum neonatorum stork mark umbilical granuloma sticky eye tongue tie reassurance red flags`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A large part of neonatal and early-infant care is confident reassurance about benign, self-limiting findings that worry parents. Knowing these well — and the few red flags that distinguish them from something serious — saves unnecessary referral and anxiety. This note is a quick reference to the common minor conditions.',
    },

    { type: 'heading', level: 2, text: 'Common Benign Findings' },
    {
      type: 'table',
      headers: ['Finding', 'What it is & advice'],
      rows: [
        ['Teething', 'Discomfort, drooling, gum-rubbing and irritability from ~6 months; teething rings, chilled (not frozen) objects, and paracetamol/ibuprofen if needed. Teething does NOT cause high fever, diarrhoea or a seriously unwell child — assess those on their own merits'],
        ['Drooling', 'Physiological in infancy (immature swallow, teething); benign. Persistent/excessive drooling in an OLDER child, or with feeding/neuro concerns, warrants assessment'],
        ['Epstein\'s pearls', 'Small white/yellow cysts on the hard palate/gums in newborns — benign, resolve spontaneously; reassure (distinguish from oral thrush, which rubs off leaving erythema)'],
        ['Milia', 'Tiny white papules on the face (blocked sebaceous ducts) — benign, resolve in weeks'],
        ['Erythema toxicum neonatorum', 'Blotchy red macules with a central white/yellow papule in the first days — benign, self-resolving (distinguish from infection if unwell)'],
        ['Stork marks / salmon patches', 'Pink capillary marks on the nape/eyelids/forehead — usually fade (facial ones over the first year)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Labial Adhesions' },
    {
      type: 'list',
      items: [
        'Fusion of the labia minora in the midline in young girls (often from low oestrogen ± irritation) — the vulva looks "closed" with a thin midline line; usually asymptomatic and found incidentally.',
        'Mostly resolves spontaneously (and reliably at puberty with rising oestrogen) — REASSURE and do NOT forcibly separate.',
        'Treat only if symptomatic (recurrent UTI, urinary pooling/dribbling, discomfort): topical oestrogen cream to the adhesion line for a few weeks, plus emollient/barrier and avoiding irritants; refer if persistent/symptomatic or diagnostic doubt.',
      ],
    },

    { type: 'heading', level: 2, text: 'Umbilical Granuloma & Tongue-Tie' },
    {
      type: 'list',
      items: [
        'Umbilical granuloma: a small moist red nodule at the umbilicus after cord separation — benign; keep clean/dry; salt application or referral for silver-nitrate cautery if persistent (exclude a persistent discharge suggesting a patent urachus/vitelline duct).',
        'Tongue-tie (ankyloglossia): a tight lingual frenulum — only needs treatment (frenotomy) if it causes feeding difficulty (poor latch, maternal nipple pain, poor weight gain) — refer to the infant-feeding/tongue-tie service; many need no intervention.',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Always Reassess the Unwell Baby',
      items: [
        'Never attribute fever, poor feeding, lethargy, vomiting or a rash in an unwell infant to "teething" or a minor condition — a young infant who is unwell needs proper assessment (see Feverish Child / sepsis pathways).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Teething', url: 'https://cks.nice.org.uk/topics/teething/' },
        { label: 'NHS — Newborn Baby (Common Conditions)', url: 'https://www.nhs.uk/conditions/baby/newborn-twins-multiples/' },
        { label: 'NICE CKS — Labial Adhesions', url: 'https://cks.nice.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: '6-8-week-check', label: '6–8 Week Baby Check', subtitle: 'Where many of these are noticed and reassured' },
        { id: 'feverish-child', label: 'Feverish Child Under 5', subtitle: 'Do not blame illness on "teething"' },
        { id: 'infant-colic-reflux', label: 'Infant Colic & Reflux', subtitle: 'Other common infant presentations' },
        { id: 'neonatal-head-lumps', label: 'Neonatal Head Lumps', subtitle: 'Related benign neonatal findings' },
      ],
    },

  ],
}

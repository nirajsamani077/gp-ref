import type { Note } from '../data/notes'

export const perinealTears: Note = {
  id: 'perineal-tears',
  title: 'Perineal Tears (Post-Delivery)',
  subtitle: 'Classification, management of 3rd/4th degree tears, and follow-up',
  tags: ['obstetrics', 'gynaecology'],

  body: `perineal tears post-delivery obstetric anal sphincter injury OASI 1st 2nd 3rd 4th degree tear classification perineum perineal muscles anal sphincter external internal EAS IAS rectum epithelium repair theatre suture antibiotics co-amoxiclav metronidazole laxatives lactulose pelvic floor exercises PFE faecal incontinence urgency pain gynaecology referral sphincter dysfunction follow-up`,

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Classification of Perineal Tears',
    },
    {
      type: 'table',
      headers: ['Degree', 'Structures Involved', 'Management'],
      rows: [
        ['1st degree', 'Perineal skin only — no muscle involvement', 'May not need suturing; simple interrupted sutures if needed; can be done in delivery room'],
        ['2nd degree', 'Perineal muscles torn but anal sphincter complex intact', 'Suture repair in delivery room; not a surgical emergency'],
        ['3rd degree', 'Anal sphincter complex torn (external ± internal anal sphincter)', 'Theatre repair required — see sub-classification below'],
        ['4th degree', 'Anal sphincter complex AND anorectal epithelium torn', 'Theatre repair required — most severe'],
      ],
    },
    {
      type: 'image',
      src: '/images/perineal-tears-86f420.jpg',
      alt: 'Diagram showing four degrees of perineal tear with anatomical labels',
      caption: 'Perineal tear classification: 1st (skin), 2nd (perineal muscle), 3rd (anal sphincter), 4th (sphincter + rectum).',
          sensitive: true,
},

    {
      type: 'heading',
      level: 2,
      text: '3rd Degree Sub-classification',
    },
    {
      type: 'table',
      headers: ['Grade', 'Definition', 'Clinical Note'],
      rows: [
        ['3a', '<50% thickness of external anal sphincter (EAS) torn', 'Better prognosis; EAS partially intact'],
        ['3b', '>50% thickness of EAS torn', 'Higher risk of long-term dysfunction than 3a'],
        ['3c', 'EAS fully torn + internal anal sphincter (IAS) also torn', 'Worst prognosis within 3rd degree; IAS involvement significantly increases incontinence risk'],
      ],
      caption: 'IAS tone is critical for flatus and liquid stool control — its involvement worsens prognosis.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Immediate Management (3rd & 4th Degree)',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: '3rd & 4th Degree = Theatre Repair',
      items: [
        'Should be repaired in theatre under regional or general anaesthesia by an experienced surgeon',
        'Not suitable for delivery room repair',
        'High infection risk — prophylactic antibiotics required',
      ],
    },
    {
      type: 'table',
      headers: ['Intervention', 'Detail'],
      rows: [
        ['Antibiotics', 'Co-amoxiclav (amoxicillin/clavulanate) — broad spectrum covering bowel flora; metronidazole if penicillin allergic'],
        ['Laxatives', 'Lactulose (osmotic) ± Fybogel — to soften stool and reduce straining at repair site for 10–14 days post-op'],
        ['Pain relief', 'Regular paracetamol ± ibuprofen (if not contraindicated); avoid constipating opioids where possible'],
        ['Wound care', 'Keep area clean and dry; daily baths/showers; avoid tight clothing'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Follow-up & Ongoing Care (GP Role)',
    },
    {
      type: 'table',
      headers: ['Timeframe', 'Action'],
      rows: [
        ['6–12 weeks post-delivery', 'Pelvic floor exercises (PFE) — essential for sphincter recovery; refer to women\'s health physio'],
        ['6–12 weeks', 'Review in gynaecology / OASI (Obstetric Anal Sphincter Injury) clinic — usually arranged by the hospital at delivery'],
        ['Ongoing', 'Encourage continued PFE; address any urinary symptoms or sexual dysfunction at postnatal appointments'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'When to Re-refer (Suggests Sphincter Dysfunction)',
      items: [
        'Faecal incontinence — liquid or solid stool',
        'Faecal urgency — unable to defer defaecation',
        'Perineal pain persisting beyond expected healing',
        'Any of the above → direct referral to gynaecology / colorectal surgery for assessment',
        'May require endoanal USS, anorectal physiology studies, or further surgical repair',
      ],
    },

    // ── FUTURE PREGNANCIES ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Future Pregnancies — Counselling & Decision-Making' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Mode of Delivery after 3rd/4th Degree Tear',
      items: [
        'Refer to an obstetrician (or specialist OASI/perineal clinic) at ~16 weeks to discuss mode of delivery — this is a joint decision with the woman',
        'Factors favouring elective caesarean section (ELCS): persistent sphincter defect on anorectal physiology/endoanal USS, ongoing faecal incontinence or urgency, patient preference after counselling',
        'Factors favouring vaginal birth: recovered sphincter function (confirmed on investigation), no ongoing symptoms, absence of further significant risk factors for re-tear',
        'Recurrence risk: women who had a 3rd/4th degree tear have a higher risk (~6–8%) of repeat OASI in a subsequent vaginal birth — but most heal well and can safely have a vaginal delivery',
        'RCOG guidance (GTG No.29): do not withhold ELCS from women who have had a previous OASI and request it after informed counselling',
        'If vaginal birth is planned: risk-reduction strategies — mediolateral episiotomy, controlled delivery of the head, optimise maternal position and pushing technique',
        'Physiotherapy assessment prior to labour: confirm pelvic floor recovery with women\'s health physiotherapist before planned vaginal delivery',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'RCOG GTG No.29 — 3rd & 4th Degree Tears', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/third-and-fourth-degree-perineal-tears-management-green-top-guideline-no-29/' },
        { label: 'NICE CKS — Perineal Tears', url: 'https://cks.nice.org.uk/topics/perineal-tears-post-natal-assessment/' },
        { label: 'MASIC Foundation — Patient Support', url: 'https://www.masic.org.uk/' },
        { label: 'NHS — Perineal Tears in Childbirth', url: 'https://www.nhs.uk/pregnancy/labour-and-birth/what-happens/tears-stitches-and-episiotomies/' },
      ],
    },
  ],
}

import type { Note } from '../data/notes'

export const drugInducedLupus: Note = {
  id: 'drug-induced-lupus',
  title: 'Drug-Induced Lupus',
  subtitle: 'A reversible SLE-like syndrome — the culprit drugs, anti-histone antibodies, and resolution on withdrawal',
  tags: ['rheumatology'],

  body: `drug-induced lupus DIL hydralazine procainamide isoniazid minocycline anti-TNF anti-histone antibodies arthralgia serositis pleurisy fever ANA positive dsDNA negative resolves on stopping drug`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Drug-induced lupus is a lupus-like autoimmune syndrome triggered by certain medications, which typically resolves once the drug is stopped. It matters because it is reversible and easily attributed to idiopathic SLE — recognising the drug link avoids unnecessary long-term immunosuppression. It tends to affect an older age group than idiopathic SLE and spares the kidneys and CNS.',
    },

    { type: 'heading', level: 2, text: 'Culprit Drugs' },
    {
      type: 'list',
      items: [
        'Classic high-risk drugs: HYDRALAZINE, PROCAINAMIDE, and isoniazid.',
        'Others: minocycline (acne), anti-TNF biologics (infliximab/etanercept/adalimumab), some anticonvulsants (carbamazepine, phenytoin), quinidine, methyldopa, terbinafine, and (rarely) proton pump inhibitors and statins.',
        'Onset is usually after months of continuous treatment.',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical & Serological Features' },
    {
      type: 'table',
      headers: ['Feature', 'Drug-induced lupus', 'Idiopathic SLE'],
      rows: [
        ['Typical symptoms', 'Arthralgia/myalgia, fever, malaise, and SEROSITIS (pleurisy, pericarditis); rash less common', 'Multisystem — plus renal, CNS, haematological'],
        ['Renal / CNS involvement', 'Rare (a helpful discriminator)', 'Common'],
        ['ANA', 'Positive', 'Positive'],
        ['Anti-histone antibodies', 'Positive in most (esp. hydralazine/procainamide)', 'May be present but not specific'],
        ['Anti-dsDNA', 'Usually NEGATIVE', 'Often positive'],
        ['Complement (C3/C4)', 'Usually normal', 'Often low'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Stop the Drug',
      items: [
        'The mainstay of treatment is STOPPING the causative drug — symptoms usually resolve over weeks to months (serology can take longer to normalise).',
        'Symptomatic relief: NSAIDs for arthralgia/serositis; a short course of corticosteroids for more severe symptoms.',
        'Confirm the diagnosis and exclude idiopathic SLE (check anti-dsDNA, complement, renal function/urinalysis); refer to rheumatology if uncertain, symptoms are severe, or they do not resolve after withdrawal.',
        'Document the drug as a cause and avoid re-exposure.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'BSR — Lupus Guidance', url: 'https://www.rheumatology.org.uk/practice-quality/guidelines' },
        { label: 'NICE CKS — Systemic Lupus Erythematosus', url: 'https://cks.nice.org.uk/topics/lupus-systemic/' },
        { label: 'Lupus UK', url: 'https://www.lupusuk.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'sle-sjogrens', label: 'SLE & Sjögren\'s', subtitle: 'Idiopathic lupus — the condition to distinguish from' },
        { id: 'inflammatory-arthritis', label: 'Inflammatory Arthritis', subtitle: 'Arthralgia differential; anti-TNF as a cause' },
        { id: 'dmards', label: 'DMARDs & Biologics', subtitle: 'Anti-TNF-induced lupus' },
        { id: 'photosensitivity', label: 'Photosensitive Rashes', subtitle: 'Cutaneous lupus and drug photosensitivity overlap' },
      ],
    },

  ],
}

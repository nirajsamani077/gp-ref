import type { Note } from '../data/notes'

export const shoulderProblems: Note = {
  id: 'shoulder-problems',
  title: 'Shoulder Problems',
  subtitle: 'The 4-S approach, subacromial pain, frozen shoulder, OA and when to image',
  tags: ['msk'],

  body: `shoulder pain rotator cuff subacromial impingement tendinopathy calcific tendinitis bursitis frozen shoulder adhesive capsulitis glenohumeral OA acromioclavicular ACJ Hawkins Neer test scarf test referred neck pain steroid injection physiotherapy BESS instability dislocation`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Shoulder Pain', url: 'https://cks.nice.org.uk/topics/shoulder-pain/' },
        { label: 'BESS — Shoulder Patient Resources', url: 'https://www.bess.ac.uk/patient-information/' },
        { label: 'Versus Arthritis — Shoulder Pain', url: 'https://versusarthritis.org/about-arthritis/conditions/shoulder-pain/' },
      ],
    },

    {
      type: 'para',
      text: 'Most shoulder pain can be diagnosed clinically without imaging by working through a simple "4 S" framework — Site, Stiffness, Serious features and Stability. The single most useful discriminator is whether PASSIVE range of movement is lost (pointing to frozen shoulder or glenohumeral OA) or preserved (pointing to subacromial or ACJ problems). The main things not to miss are an acute traumatic cuff tear (needs early orthopaedic review) and referred pain from the neck, chest or a Pancoast tumour.',
    },
    { type: 'heading', level: 2, text: 'The "4 S" Approach' },

    {
      type: 'table',
      headers: ['S', 'Question', 'What it tells you'],
      rows: [
        ['Site', 'Where is the pain?', 'Deltoid/upper arm → subacromial or glenohumeral; over the ACJ → acromioclavicular; posterior/neck → referred cervical'],
        ['Stiff', 'Is passive range of movement reduced?', 'Loss of PASSIVE movement → frozen shoulder or glenohumeral OA; preserved passive movement → subacromial/ACJ/referred'],
        ['Serious?', 'Red flags?', 'Suspected infection, malignancy, or unreduced dislocation → urgent referral'],
        ['Stable?', 'History of instability/dislocation?', 'Recurrent subluxation/dislocation → refer (instability)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Differential Diagnoses' },

    {
      type: 'list',
      items: [
        'Subacromial pain syndrome (rotator cuff disease): tendinopathy, calcific tendinitis, subacromial bursitis, and rotator cuff tears — pain on abduction, painful arc, positive Hawkins/Neer impingement tests; passive range usually preserved',
        'Frozen shoulder (adhesive capsulitis): global loss of PASSIVE movement (especially external rotation)',
        'Glenohumeral or acromioclavicular OA: stiff shoulder; ACJ pain localised with a positive scarf test',
        'Referred pain: cervical spine (radiculopathy), or non-MSK (diaphragm, cardiac, apical lung tumour — Pancoast)',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Acute Cuff Tear After Trauma',
      items: [
        'Inability to actively abduct the arm to 90° after a traumatic injury (with passive movement intact) suggests a significant rotator cuff tear → same-day/urgent orthopaedic (shoulder) review — early repair gives better outcomes',
      ],
    },

    { type: 'heading', level: 2, text: 'Imaging' },

    {
      type: 'list',
      items: [
        'Do NOT routinely image the rotator cuff (USS/MRI) in primary care — degenerative/asymptomatic cuff tears are common and findings rarely change initial management',
        'EXCEPTION: significant trauma (suspected acute cuff tear → urgent ortho), or suspected red flags',
        'For a STIFF shoulder, X-ray is recommended — the main differential of frozen shoulder is glenohumeral OA, which X-ray distinguishes',
      ],
    },

    { type: 'heading', level: 2, text: 'Management by Diagnosis' },

    {
      type: 'table',
      headers: ['Condition', 'Management'],
      rows: [
        ['Subacromial pain syndrome', 'Activity modification, analgesia/NSAIDs, physiotherapy (BESS rehab leaflets), subacromial corticosteroid injection (limit to ~2); surgical decompression is controversial and reserved for refractory cases'],
        ['Frozen shoulder', 'Insidious painful stiffness, often in diabetics; goes through freezing (painful) → frozen (stiff) → thawing phases over up to ~3 years. NSAIDs, physiotherapy; intra-articular (glenohumeral, NOT subacromial) steroid injection helps in the painful/freezing stage; capsular release/hydrodilatation for refractory cases'],
        ['Glenohumeral OA', 'As per osteoarthritis — analgesia, physiotherapy, injection; refer for joint replacement if severe'],
        ['ACJ OA / injury', 'Localised tenderness, positive scarf test; analgesia, injection; can follow an acute fall (ACJ sprain)'],
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'osteoarthritis', label: 'Osteoarthritis', subtitle: 'Glenohumeral/ACJ OA — injection and replacement principles' },
        { id: 'neck-pain', label: 'Neck Pain', subtitle: 'Cervical radiculopathy is a key cause of referred shoulder pain' },
        { id: 'diabetes-t2dm', label: 'Type 2 Diabetes', subtitle: 'Strong association with frozen shoulder' },
        { id: 'lung-cancer', label: 'Lung Cancer', subtitle: 'Pancoast tumour — shoulder pain + Horner\'s in a smoker' },
      ],
    },

  ],
}

import type { Note } from '../data/notes'

export const handWristConditions: Note = {
  id: 'hand-wrist-conditions',
  title: 'Hand & Wrist Conditions',
  subtitle: 'Trigger finger, Dupuytren\'s, cubital tunnel and ganglion — diagnosis, injection and referral',
  tags: ['msk'],

  body: `trigger finger stenosing tenosynovitis A1 pulley Dupuytren's contracture palmar fascia needle fasciotomy cubital tunnel ulnar nerve ganglion cyst steroid injection hand splint carpal tunnel De Quervain's Garrod's pads Peyronie's Ledderhose`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Trigger Finger', url: 'https://cks.nice.org.uk/topics/trigger-finger/' },
        { label: 'NICE CKS — Dupuytren\'s Disease', url: 'https://cks.nice.org.uk/topics/dupuytrens-disease/' },
        { label: 'BSSH — Hand Conditions', url: 'https://www.bssh.ac.uk/patients/conditions.aspx' },
      ],
    },

    { type: 'heading', level: 2, text: 'Trigger Finger (Stenosing Tenosynovitis)' },

    {
      type: 'list',
      items: [
        'Thickening of the A1 pulley (over the flexor aspect of the MCP joint) prevents the flexor tendon gliding smoothly → catching/locking, with a palpable tender nodule; the finger catches on extension and can lock in flexion (initially passively correctable, later fixed)',
        'Mostly idiopathic; associated with diabetes, RA and repetitive gripping (like carpal tunnel)',
        'First-line: corticosteroid injection into the tendon sheath — cures ~80% (less effective in diabetics); allow ~2 weeks for effect; a second injection can be tried if it relapses (caution in diabetes)',
        'A night splint is an alternative/adjunct; refer to hand surgery (OTS) for A1 pulley release if injection(s) fail',
      ],
    },

    { type: 'heading', level: 2, text: 'Dupuytren\'s Contracture' },

    {
      type: 'list',
      items: [
        'Progressive fibrosis of the palmar fascia → nodules and cords causing fixed flexion (usually ring and little fingers)',
        'Associations: family history, male, age; alcohol, manual labour, diabetes, epilepsy/antiepileptics; part of a fibromatosis spectrum (Garrod\'s knuckle pads, Ledderhose disease of the plantar fascia, Peyronie\'s disease)',
        'No effective primary-care treatment (gloves, NSAIDs, injection of a painful nodule may help symptoms only)',
        'Refer for needle fasciotomy / collagenase / surgery (fasciectomy) when there is functional impairment or a positive Hueston "tabletop test" (cannot lay the hand flat on a table); recurrence is common as surgery does not halt the disease process',
        'Differentials: trigger finger, ganglion, and (rare) a slow-growing soft-tissue mass — image if uncertain',
      ],
    },

    { type: 'heading', level: 2, text: 'Cubital Tunnel Syndrome' },

    {
      type: 'list',
      items: [
        'Compression of the ulnar nerve at the elbow → tingling/numbness in the little and ring fingers, weakness and (late) wasting of the intrinsic hand muscles; worse on leaning on or flexing the elbow (often with elbow OA or prior trauma)',
        'Clinical diagnosis; nerve conduction studies if uncertain or before surgery',
        'Management: avoid sustained elbow flexion/leaning (elbow pad, night splint in extension), physiotherapy; refer for surgical decompression/transposition if persistent or with motor involvement',
      ],
    },

    { type: 'heading', level: 2, text: 'Ganglion Cyst' },

    {
      type: 'list',
      items: [
        'Smooth, mobile, fluctuant swelling (often dorsal wrist) arising from a joint or tendon sheath; transilluminates; frequently asymptomatic',
        'Reassure — many resolve spontaneously; avoid the old "hit it with a book" advice; aspiration has a high recurrence rate',
        'Refer for excision only if symptomatic, functionally limiting, or diagnostically uncertain',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Joint/Soft-Tissue Steroid Injection — General Points',
      items: [
        'Best evidence in De Quervain\'s tenosynovitis and trigger finger (can be curative)',
        'Complications: a post-injection flare is the commonest; infection and tendon rupture are rare; warn diabetics about transient glucose rise',
        'Avoid no more than ~3-monthly; ideally separate from COVID vaccination by ~2 weeks (or give with the flu vaccine)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'carpal-tunnel', label: 'Carpal Tunnel Syndrome', subtitle: 'Median nerve compression — the commonest wrist neuropathy' },
        { id: 'de-quervains', label: "De Quervain's Tenosynovitis", subtitle: 'Radial wrist tendinopathy — injection often curative' },
        { id: 'osteoarthritis', label: 'Osteoarthritis', subtitle: 'Hand/thumb-base OA — overlapping hand pain' },
        { id: 'inflammatory-arthritis', label: 'Inflammatory Arthritis', subtitle: 'RA association with trigger finger/CTS; small-joint synovitis' },
      ],
    },

  ],
}

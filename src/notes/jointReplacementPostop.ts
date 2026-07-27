import type { Note } from '../data/notes'

export const jointReplacementPostop: Note = {
  id: 'joint-replacement-postop',
  title: 'Hip & Knee Replacement — Post-Op Care',
  subtitle: 'The GP\'s role after arthroplasty — wound and VTE care, the painful/infected prosthesis and dislocation',
  tags: ['msk'],

  body: `hip replacement knee replacement arthroplasty post-operative VTE prophylaxis wound infection prosthetic joint infection dislocation loosening periprosthetic fracture rehabilitation antibiotic prophylaxis dental analgesia return to function`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Hip and knee replacements are among the most successful operations in medicine, and increasing numbers of patients return to primary care for ongoing care and complications. The GP role spans routine post-operative support (wound, VTE prophylaxis, analgesia, rehabilitation) and recognising the small number of serious complications — infection, dislocation, and periprosthetic fracture — that need urgent orthopaedic input.',
    },

    { type: 'heading', level: 2, text: 'Routine Post-Operative Care' },
    {
      type: 'list',
      items: [
        'VTE prophylaxis: patients are usually discharged on extended pharmacological thromboprophylaxis (e.g. a DOAC, LMWH, or aspirin per local protocol) — typically ~14 days after knee and up to ~28–35 days after hip replacement; ensure it is continued for the full course and watch for bleeding.',
        'Wounds: check healing; remove clips/sutures at the advised time; a small amount of clean serous ooze can be normal early, but see infection below.',
        'Analgesia and rehabilitation: encourage physiotherapy and early mobilisation; most regain good function over weeks to months. Reinforce hip-precautions advice where given (avoid extreme flexion/adduction/internal rotation early after certain hip approaches, to reduce dislocation).',
        'Address modifiable factors: optimise diabetes and nutrition, stop smoking (aids healing), and manage expectations about recovery timelines and return to driving/work.',
      ],
    },

    { type: 'heading', level: 2, text: 'Complications to Recognise' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Prosthetic Joint Infection & Dislocation',
      items: [
        'Prosthetic joint infection: increasing pain, a hot/swollen/red joint, wound discharge, fever, or a persistently painful joint (early OR late — can present months/years later). → Refer urgently to the orthopaedic team; do NOT start antibiotics blindly before discussion, as they can compromise diagnostic sampling.',
        'Dislocation (hip): sudden severe pain with a shortened/rotated leg and inability to weight-bear, often after a specific movement → ED for reduction.',
        'Periprosthetic fracture: fracture around the implant after a fall → urgent orthopaedics.',
        'A painful joint months/years on may also indicate aseptic loosening or wear → routine orthopaedic review (but exclude infection first).',
      ],
    },

    { type: 'heading', level: 2, text: 'Longer-Term Points' },
    {
      type: 'list',
      items: [
        'Antibiotic prophylaxis for dental/other procedures is NOT routinely recommended for prosthetic joints (as for endocarditis) — emphasise good dental/skin health and prompt treatment of infection instead.',
        'Any unexplained sepsis in a patient with a prosthetic joint should prompt consideration of the joint as a source.',
        'Metal-on-metal hips have specific surveillance requirements (blood metal ions, imaging) — check the operation type.',
        'A persistently painful, poorly functioning, or recurrently dislocating joint warrants orthopaedic re-referral.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG157 — Joint Replacement (Primary) Hip/Knee/Shoulder', url: 'https://www.nice.org.uk/guidance/ng157' },
        { label: 'NICE NG89 — VTE Prophylaxis', url: 'https://www.nice.org.uk/guidance/ng89' },
        { label: 'Versus Arthritis — Joint Replacement', url: 'https://versusarthritis.org/about-arthritis/treatments/surgery/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'osteoarthritis', label: 'Osteoarthritis', subtitle: 'The commonest indication for joint replacement' },
        { id: 'dvt', label: 'DVT', subtitle: 'VTE prophylaxis and recognising post-op thrombosis' },
        { id: 'cellulitis', label: 'Cellulitis & Skin Infections', subtitle: 'Distinguishing wound infection; prosthetic-joint risk' },
        { id: 'doacs', label: 'DOACs', subtitle: 'Extended thromboprophylaxis regimens' },
      ],
    },

  ],
}

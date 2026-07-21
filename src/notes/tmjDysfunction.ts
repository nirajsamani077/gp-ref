import type { Note } from '../data/notes'

export const tmjDysfunction: Note = {
  id: 'tmj-dysfunction',
  title: 'Temporomandibular Disorder (TMD/TMJ Dysfunction)',
  subtitle: 'Jaw pain, clicking and restricted opening — a common, mostly self-limiting condition, and what not to miss',
  tags: ['ent'],

  body: `temporomandibular disorder TMD TMJ dysfunction jaw pain clicking locking myofascial pain bruxism clenching trismus facial pain masseter temporalis conservative soft diet jaw rest bite splint occlusal appliance physiotherapy amitriptyline giant cell arteritis jaw claudication dental`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Temporomandibular disorder (TMD) is an umbrella term for pain and dysfunction of the temporomandibular joint (TMJ) and the muscles of mastication. It is very common (peaks in ages 20–40, more often in women), usually self-limiting, and strongly associated with parafunctional habits such as bruxism (tooth-grinding/clenching) and with stress. Reassurance and simple conservative measures are the mainstay — most patients improve without invasive treatment.',
    },

    { type: 'heading', level: 2, text: 'Clinical Features' },
    {
      type: 'list',
      items: [
        'Localised jaw / pre-auricular pain, worse on chewing, yawning or wide mouth opening; may radiate to the ear, temple or face.',
        'Joint noises — clicking or popping — and sometimes intermittent locking or limited mouth opening (trismus).',
        'Tenderness of the masseter and temporalis muscles and over the TMJ; frequently associated tension-type headache and a sensation of ear fullness or tinnitus with a NORMAL ear examination.',
        'Ask about clenching/grinding (often nocturnal), gum-chewing, nail-biting, recent dental work, stress and sleep.',
      ],
    },

    { type: 'heading', level: 2, text: 'Differentials Not to Miss' },
    {
      type: 'table',
      headers: ['Condition', 'Discriminating feature'],
      rows: [
        ['Giant cell arteritis', 'Age >50, JAW CLAUDICATION (pain building while chewing), scalp tenderness, visual symptoms, raised ESR/CRP → urgent, start steroids'],
        ['Dental / odontogenic pain', 'Localised to a tooth, worse with hot/cold or biting; refer to dentist'],
        ['Trigeminal neuralgia', 'Brief, severe, electric-shock facial pain in a trigeminal division, triggered by touch/chewing'],
        ['Parotid / ear pathology', 'Swelling, discharge, abnormal otoscopy, systemic features'],
        ['Angina (referred)', 'Exertional jaw pain with cardiac features — consider in the right context'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management — Conservative First' },
    {
      type: 'table',
      headers: ['Measure', 'Detail'],
      rows: [
        ['Reassurance / education', 'Explain the benign, self-limiting nature — this itself improves outcomes and reduces repeat attendance'],
        ['Jaw rest & soft diet', 'Soft foods, cut food small, avoid wide opening, gum and hard/chewy foods; support the jaw when yawning'],
        ['Self-care', 'Warm compresses, masseter/temporalis massage, and simple jaw-stretching/relaxation exercises'],
        ['Habit & stress', 'Address daytime clenching (awareness/lip-together-teeth-apart), stress management, sleep hygiene'],
        ['Analgesia', 'Short-term paracetamol or NSAID; topical NSAID over the masseter can help'],
        ['Dental appliance', 'A bite splint / occlusal (stabilisation) appliance via the dentist, especially for nocturnal bruxism'],
        ['Persistent pain', 'Low-dose amitriptyline is sometimes used for chronic TMD pain (as for other chronic facial/musculoskeletal pain)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Referral Criteria' },
    {
      type: 'table',
      headers: ['Situation', 'Refer to', 'Urgency'],
      rows: [
        ['Suspected giant cell arteritis', 'Rheumatology / same-day pathway (start steroids)', 'Urgent'],
        ['Severe/persistent symptoms despite ~3 months conservative care', 'Oral & maxillofacial surgery', 'Routine'],
        ['Recurrent locking, marked trismus or joint derangement', 'Oral & maxillofacial surgery', 'Routine'],
        ['Predominantly dental cause / need for a splint', 'Dentist', 'Routine'],
        ['Diagnostic uncertainty', 'OMFS / relevant specialty', 'Routine'],
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Temporomandibular Disorders', url: 'https://cks.nice.org.uk/topics/temporomandibular-disorders-tmds/' },
        { label: 'Royal College of Surgeons — TMD (Patient Info PDF)', url: 'https://www.rcseng.ac.uk/dental-faculties/fds/patient-facing-resources/' },
        { label: 'Oral Health Foundation — Jaw Problems', url: 'https://www.dentalhealth.org/' },
        { label: 'NHS — Temporomandibular Disorder', url: 'https://www.nhs.uk/conditions/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'gca', label: 'Giant Cell Arteritis', subtitle: 'Jaw claudication — the can\'t-miss differential over 50' },
        { id: 'trigeminal-neuralgia', label: 'Trigeminal Neuralgia', subtitle: 'Paroxysmal facial pain differential' },
        { id: 'headache-assessment', label: 'Headache Assessment', subtitle: 'TMD as a contributor to tension-type headache' },
        { id: 'tinnitus', label: 'Tinnitus', subtitle: 'Otological symptoms with a normal ear exam' },
        { id: 'aphthous-ulcers', label: 'Mouth Ulcers', subtitle: 'Orofacial pain differential' },
      ],
    },

  ],
}

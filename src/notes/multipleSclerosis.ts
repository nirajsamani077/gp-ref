import type { Note } from '../data/notes'

export const multipleSclerosis: Note = {
  id: 'multiple-sclerosis',
  title: 'Multiple Sclerosis (MS)',
  subtitle: 'RRMS, PPMS, optic neuritis, DMTs, fatigue, spasticity and bladder management',
  tags: ['neurology'],

  body: 'multiple sclerosis MS RRMS SPMS PPMS relapsing remitting secondary progressive primary progressive optic neuritis INO internuclear ophthalmoplegia Lhermitte sign demyelination MRI white matter lesions oligoclonal bands CSF disease modifying therapy DMT interferon natalizumab ocrelizumab fatigue spasticity baclofen bladder urgency urinary incontinence amantadine methylprednisolone steroids relapses neurology',

  content: [

    { type: 'heading', level: 2, text: 'Types and Epidemiology' },

    {
      type: 'table',
      headers: ['Type', 'Features', 'Proportion'],
      rows: [
        ['RRMS (Relapsing-Remitting MS)', 'Discrete relapses (new/worsening symptoms lasting >24h) followed by partial or complete recovery; most amenable to DMTs', '~85% of all MS'],
        ['SPMS (Secondary Progressive MS)', 'RRMS that transitions to progressive accumulation of disability with or without superimposed relapses', 'Majority of RRMS over 10–20 years'],
        ['PPMS (Primary Progressive MS)', 'Gradual worsening from onset without clear relapses; typically older males; fewer DMT options', '~15% of all MS'],
      ],
      caption: 'Peak onset: 20–40 years; F:M ratio 3:1 (RRMS); strong geographic variation — higher prevalence with increasing latitude from equator; ~130,000 patients in UK.',
    },

    { type: 'heading', level: 2, text: 'Clinical Features — Disseminated in Space and Time' },

    {
      type: 'list',
      items: [
        'Optic neuritis: subacute, unilateral painful visual loss; loss of colour vision (red desaturation); RAPD on examination (relative afferent pupillary defect); may be the first presentation of MS; urgent ophthalmology',
        'Internuclear ophthalmoplegia (INO): diplopia; failure of adduction on ipsilateral side with nystagmus of abducting eye — caused by demyelination of MLF (medial longitudinal fasciculus); bilateral INO = MS until proven otherwise',
        'Sensory: focal tingling, numbness, or pain; ascending sensory loss in spinal cord involvement; dysaesthesia (unpleasant abnormal sensation)',
        'Lhermitte\'s sign: electric shock sensation down spine and into limbs on neck flexion — indicates cervical cord demyelination; not specific to MS but highly suggestive',
        'Motor: focal weakness, spasticity, clumsiness; pyramidal signs (brisk reflexes, upgoing plantars, spastic paraparesis in progressive MS)',
        'Cerebellar: gait ataxia, limb ataxia, intention tremor, dysarthria (scanning speech)',
        'Bladder: urgency, frequency, urge incontinence (most common — detrusor overactivity) or retention (sphincter dyssynergia); UTI risk — assess with IPSS/bladder diary',
        'Fatigue: one of the most disabling symptoms; disproportionate and worsened by heat (Uthoff phenomenon — heat worsens MS symptoms transiently); distinguish from depression and poor sleep',
        'Cognitive: "MS fog" — slowed processing, memory difficulties, multitasking problems; common and disabling',
        'Heat sensitivity (Uthoff phenomenon): transient worsening of symptoms with raised body temperature (hot baths, exercise, fever) — NOT a relapse; symptoms improve when cooled',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis and Referral' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer Urgently to Neurology — Do Not Delay',
      items: [
        'Refer ALL suspected new MS presentations urgently to neurology — do NOT wait for second episode; early DMT initiation improves outcomes',
        'MRI brain and spine: white matter lesions on T2/FLAIR sequences; gadolinium-enhancing lesions = active inflammation; McDonald criteria require lesions disseminated in space (multiple CNS locations) and time (new lesions over time OR positive CSF)',
        'Lumbar puncture and CSF analysis: oligoclonal bands in >95% of MS (IgG bands present in CSF but not serum); elevated IgG index; not always required if MRI findings sufficient',
        'VEPs (Visual Evoked Potentials): detect subclinical optic nerve demyelination — useful if MRI equivocal',
        'Differentials: NMO spectrum disorder (AQP4 antibody — more severe relapses; different treatment), B12 deficiency (subacute combined degeneration of the cord — check serum B12 in all suspected MS), vasculitis (SLE, Sjögren\'s), sarcoidosis, ADEM (acute demyelination after infection/vaccination), small vessel ischaemic disease',
      ],
    },

    { type: 'heading', level: 2, text: 'Relapses — Management' },

    {
      type: 'list',
      items: [
        'Definition: new neurological symptoms or objective worsening of existing symptoms lasting >24 hours in the absence of fever or infection (Uthoff phenomenon excluded)',
        'Common relapse triggers: infection (especially UTI, URTI) — always exclude infection first before diagnosing relapse; MS relapses are a diagnosis of exclusion',
        'Contact neurology team (MS nurse) same day if suspected relapse for advice',
        'Corticosteroids: methylprednisolone 500 mg–1 g OD PO for 5 days (or IV equivalent) — shortens relapse duration but does NOT improve long-term disability; only give if neurological deficit is disabling; NEVER start steroids without neurology advice (avoid repeated courses — cumulative harms)',
        'Recovery: most relapses improve over 4–12 weeks; incomplete recovery with each relapse contributes to disability accumulation',
        'Vitamin D: no evidence it reduces relapses or disease progression — do not recommend as disease-modifying; treat deficiency as in general population',
      ],
    },

    { type: 'heading', level: 2, text: 'Disease-Modifying Therapies (DMTs)' },

    {
      type: 'table',
      headers: ['Category', 'Examples', 'Notes (all specialist-initiated)'],
      rows: [
        ['Moderate efficacy (RRMS)', 'Interferon beta (SC or IM), glatiramer acetate (SC), dimethyl fumarate (oral), teriflunomide (oral)', 'Reduce relapse rate by ~30%; flu-like S/E with interferons; injection site reactions; PML risk low; suitable for early RRMS'],
        ['High efficacy (RRMS)', 'Natalizumab (IV monthly — anti-VLA4), ocrelizumab (IV 6-monthly — anti-CD20), alemtuzumab (IV — anti-CD52), cladribine (oral), ofatumumab (SC)', 'Reduce relapses by 50–70%; significant PML risk with natalizumab (JC virus antibody monitoring); ocrelizumab also licensed for PPMS; alemtuzumab carries autoimmune side effects (thyroid, ITP, nephritis — monthly monitoring 4 years after last course)'],
        ['PPMS', 'Ocrelizumab (only licensed DMT for PPMS)', 'Slows disability progression; not a cure; initiated by specialist'],
        ['SPMS', 'Siponimod, cladribine — if still having relapses', 'Limited DMT options for pure progression; focus on symptom management'],
      ],
      caption: 'DMTs are specialist-initiated and monitored. GP role: monitoring bloods per protocol, managing common side effects, prompt referral for concerning features (e.g. new neurological symptoms in natalizumab patient = urgent PML exclusion).',
    },

    { type: 'heading', level: 2, text: 'Symptom Management in Primary Care' },

    {
      type: 'table',
      headers: ['Symptom', 'Management'],
      rows: [
        ['Fatigue', 'Energy conservation techniques (OT referral); graded exercise (proven benefit — does NOT worsen MS); treat sleep disorders and depression; amantadine 100 mg BD (modest benefit, specialist advice); avoid overheating; modafinil (specialist only)'],
        ['Spasticity', 'Baclofen 5 mg TDS — titrate slowly (avoid abrupt withdrawal — risk of severe rebound spasticity/seizures; taper over 1–2 weeks); alternatives: gabapentin, tizanidine; cannabis-based medicine (Sativex nabiximols oromucosal spray) if baclofen + gabapentin failed — specialist; physiotherapy and stretching essential; avoid precipitants (UTI, constipation, pressure sores worsen spasticity)'],
        ['Bladder urgency / urge incontinence', 'Bladder diary + IPSS score; exclude UTI (common trigger); oxybutynin or solifenacin (anticholinergic — avoid if also has cognitive impairment); mirabegron (beta-3 agonist — fewer cognitive effects); self-catheterisation (ISC) if retention or incomplete emptying; refer continence nurse or urology'],
        ['Pain and dysaesthesia', 'Amitriptyline (10–25 mg nocte, titrate); gabapentin or pregabalin; duloxetine; neuropathic pain ladder'],
        ['Oscillopsia (objects appear to move)', 'Gabapentin or memantine — specialist advice'],
        ['Mood / cognitive', 'CBT; SSRIs for depression/anxiety; neuropsychological assessment for cognitive difficulties; MS nurse support'],
        ['Constipation', 'High fibre, adequate fluid, laxatives; macrogol first line; suppositories or enemas if severe'],
      ],
    },

    { type: 'heading', level: 2, text: 'Practical GP Considerations' },

    {
      type: 'list',
      items: [
        'Avoid live vaccines in patients on DMTs — may be immunosuppressed; check Green Book; ensure all vaccines up to date before starting immunosuppressive DMTs (give ≥4 weeks before starting)',
        'Infections: UTIs are very common in MS (bladder dysfunction); low threshold to treat; recurrent UTIs → consider prophylactic antibiotics or ISC',
        'Driving: DVLA notification required — patients must declare MS; many continue to drive; DVLA medical assessment determines fitness; review if relapse or significant disability change',
        'Pregnancy: DMTs often stopped before or during pregnancy; MS relapses typically reduce in pregnancy (immunological tolerance); increased relapse rate post-partum; discuss with neurology before conception',
        'DVLA, blue badge, PIP, employment support — signpost to MS Society (mssociety.org.uk) and MS Trust (mstrust.org.uk) for holistic support',
        'Advanced care planning: important in progressive disease; RESPECT form; support at home; equipment (walking aids, wheelchair, adaptations)',
        'Annual review: disability status, bladder symptoms, mood, fatigue, review DMT side effects, BP, smoking, cardiovascular risk (steroids affect bone density — DEXA, Vit D/Ca)',
      ],
    },

  ],
}

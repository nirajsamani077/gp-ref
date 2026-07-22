import type { Note } from '../data/notes'

export const mesentericIschaemia: Note = {
  id: 'mesenteric-ischaemia',
  title: 'Mesenteric & Ischaemic Colitis',
  subtitle: 'Acute mesenteric ischaemia, chronic mesenteric ischaemia (intestinal angina) and ischaemic colitis',
  tags: ['gastroenterology'],

  body: `acute mesenteric ischaemia AMI SMA embolus thrombosis mesenteric venous thrombosis non-occlusive chronic mesenteric ischaemia intestinal angina ischaemic colitis pain out of proportion AF lactate metabolic acidosis CT angiography weight loss food fear postprandial bloody diarrhoea splenic flexure watershed`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Reduced blood flow to the gut produces three distinct syndromes: acute mesenteric ischaemia (a time-critical surgical emergency), chronic mesenteric ischaemia ("intestinal angina", easily mistaken for malignancy), and ischaemic colitis (usually a self-limiting watershed colitis). Recognising the first from an unremarkable examination — pain out of proportion — is the crucial GP/OOH skill.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Acute Mesenteric Ischaemia — a Time-Critical Emergency',
      items: [
        'Severe, constant, diffuse abdominal pain "OUT of proportion" to a relatively unremarkable examination is the hallmark.',
        'Typically an older patient with AF (embolus to the superior mesenteric artery), atherosclerosis, or a low-flow state; may follow a large meal or a period of hypotension.',
        'Rapid deterioration → bowel infarction, peritonism and shock; a raised lactate and metabolic acidosis are LATE, ominous signs — do not wait for them.',
        'Immediate 999/blue-light to ED — diagnosis is by urgent CT angiography; treatment is emergency revascularisation ± bowel resection. Delay is fatal.',
      ],
    },

    { type: 'heading', level: 2, text: 'The Three Syndromes' },
    {
      type: 'table',
      headers: ['Condition', 'Vessel / mechanism', 'Clinical picture'],
      rows: [
        ['Acute mesenteric ischaemia', 'SMA embolus/thrombosis, mesenteric venous thrombosis, or non-occlusive low flow', 'Sudden severe pain out of proportion, vomiting, rapid collapse — surgical emergency'],
        ['Chronic mesenteric ischaemia', 'Atherosclerotic stenosis of ≥2 mesenteric arteries', '"Intestinal angina": dull central pain 15–30 min after eating, food fear, weight loss'],
        ['Ischaemic colitis', 'Transient low flow to a "watershed" colon segment (splenic flexure)', 'Sudden crampy left-sided pain then bloody/loose stool; usually self-limiting'],
      ],
    },

    { type: 'heading', level: 2, text: 'Chronic Mesenteric Ischaemia' },
    {
      type: 'list',
      items: [
        'Suspect in an arteriopath (smoker, PAD, IHD) with postprandial pain, "food fear" (avoiding meals to avoid pain) and unintentional weight loss — often extensively investigated for malignancy first.',
        'Refer for CT/MR angiography; management is cardiovascular risk reduction plus revascularisation (angioplasty/stenting or surgery).',
        'Aggressive secondary prevention: antiplatelet, statin, smoking cessation, BP and glycaemic control.',
      ],
    },

    { type: 'heading', level: 2, text: 'Ischaemic Colitis' },
    {
      type: 'list',
      items: [
        'The commonest form of intestinal ischaemia; classically affects the splenic flexure (watershed between SMA and IMA territories).',
        'Sudden left-sided abdominal pain followed by loose or bloody stool; typically older patients, or after hypotension/aortic surgery; consider the combined pill/vasculitis/thrombophilia in younger patients.',
        'Most cases are mild and settle with supportive care (IV fluids, bowel rest, treat the precipitant); CT and later colonoscopy confirm and exclude other pathology.',
        'Refer/admit if peritonism, ongoing bleeding, or features of gangrenous colitis (fever, sepsis, rising lactate) which may need surgery.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'BMJ Best Practice — Mesenteric Ischaemia', url: 'https://bestpractice.bmj.com/topics/en-gb/756' },
        { label: 'NICE CKS — Gastrointestinal Conditions', url: 'https://cks.nice.org.uk/specialities/gastrointestinal-conditions/' },
        { label: 'ACPGBI — Colorectal Guidance', url: 'https://www.acpgbi.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'atrialFibrillation', label: 'Atrial Fibrillation', subtitle: 'Embolic source for acute mesenteric ischaemia' },
        { id: 'pvd', label: 'Peripheral Arterial Disease', subtitle: 'The same atherosclerotic process in mesenteric vessels' },
        { id: 'diverticular-disease', label: 'Diverticular Disease', subtitle: 'Differential for left-sided pain and PR bleeding' },
        { id: 'colorectal-cancer', label: 'Colorectal Cancer', subtitle: 'Weight loss / PR bleeding differential' },
        { id: 'upper-gi-bleed', label: 'GI Bleeding', subtitle: 'Assessment of lower GI bleeding' },
      ],
    },

  ],
}

import type { Note } from '../data/notes'

export const clusterHeadache: Note = {
  id: 'cluster-headache',
  title: 'Cluster Headache & Trigeminal Autonomic Cephalalgias',
  subtitle: '100% oxygen, sumatriptan, verapamil prophylaxis, TACs comparison and differential diagnosis',
  tags: ['neurology'],

  body: 'cluster headache trigeminal autonomic cephalgia TAC paroxysmal hemicrania SUNCT SUNA oxygen sumatriptan verapamil indomethacin episodic chronic orbital periorbital unilateral autonomic lacrimation rhinorrhoea miosis ptosis Horner conjunctival injection restlessness agitation lithium melatonin occipital nerve stimulation',

  content: [

    { type: 'heading', level: 2, text: 'Cluster Headache — Clinical Features' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Cluster Headache — Characteristic Presentation',
      items: [
        'Unilateral severe/excruciating orbital, periorbital, or temporal pain — always on the SAME side during a cluster period',
        'Duration: 15 minutes to 3 hours per attack',
        'Frequency: 1–8 attacks per day, at predictable times (often 1–2 hours after sleep onset — "alarm clock headache")',
        'Cluster period: lasts 4–12 weeks (episodic), then complete remission for months to years',
        'Chronic cluster headache (10%): no remission >3 months',
        'Autonomic features on the ipsilateral side (any ≥1 required): lacrimation, conjunctival injection, nasal congestion/rhinorrhoea, miosis, ptosis, eyelid oedema, forehead sweating',
        'Behaviour: restless, agitated, pacing — UNLIKE migraine where patient lies still in dark',
        'Alcohol can trigger attacks WITHIN a cluster period (not outside); circadian/seasonal pattern common',
      ],
    },

    { type: 'heading', level: 2, text: 'Acute Treatment' },

    {
      type: 'table',
      headers: ['Treatment', 'Dose / Details', 'Notes'],
      rows: [
        ['100% Oxygen (first line)', '12–15 L/min via non-rebreathe mask for 15–20 minutes', 'Needs high-flow cylinder and non-rebreathe mask — NOT low-flow oxygen; available on NHS FP10 (DF118 form); most effective if used at onset; ~70% respond within 15 minutes'],
        ['Sumatriptan SC injection (first line)', '6 mg SC at onset; may repeat after 1 hour if needed; max 2 injections/24h', 'Fastest acting triptan route; preferred over intranasal in cluster headache; oral triptans too slow for cluster headache attacks'],
        ['Sumatriptan nasal spray', '20 mg intranasally', 'Alternative if SC injection not tolerated; less effective than SC but useful for some patients'],
        ['Zolmitriptan nasal spray', '5 mg intranasally', 'Licensed alternative if sumatriptan nasal not tolerated'],
        ['Lidocaine 4% nasal drops', '1 mL into ipsilateral nostril (head back, 45° rotation)', 'Third-line; may abort some attacks via sphenopalatine ganglion effect'],
      ],
      caption: 'DO NOT use ergotamine routinely — significant vasoconstriction risk. Oxygen prescription: write on FP10 as "Oxygen for cluster headache" specifying flow rate and mask type; refer to Home Oxygen Order Form (HOOF) system if chronic.',
    },

    { type: 'heading', level: 2, text: 'Prophylaxis (Preventive Treatment)' },

    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Evidence / Notes'],
      rows: [
        ['Verapamil (first-line prophylaxis)', 'Start 80 mg TDS; titrate to 240–480 mg/day in divided doses; specialist may use up to 960 mg', 'ECG required before starting and after each dose increase — risk of heart block at higher doses; do NOT use with beta-blockers; takes 2–3 weeks to work'],
        ['Short course corticosteroids (bridge)', 'Prednisolone 60–80 mg OD for 5 days then taper', 'Used at start of cluster period while verapamil takes effect; rapid onset; not for long-term use'],
        ['Lithium carbonate (second line)', '300 mg BD, target serum level 0.4–0.8 mmol/L', 'More evidence in chronic cluster headache; requires renal/TFT monitoring; avoid NSAIDs'],
        ['Melatonin', '10 mg at night', 'Modest evidence; useful adjunct especially if nocturnal attacks; safe, well tolerated'],
        ['Galcanezumab (CGRP monoclonal antibody)', '300 mg SC monthly injection', 'Licensed specifically for episodic cluster headache; specialist initiation only; very effective'],
        ['Greater occipital nerve injection', 'Methylprednisolone 80 mg + lidocaine', 'Ipsilateral injection; fast onset bridge treatment; done by specialist'],
      ],
      caption: 'Prophylaxis should be started at the beginning of each cluster period. Stop prophylaxis gradually once the cluster period ends. Verapamil requires baseline and monitoring ECGs — PR interval prolongation and heart block are risks.',
    },

    { type: 'heading', level: 2, text: 'Trigeminal Autonomic Cephalalgias (TACs) — Comparison' },

    {
      type: 'table',
      headers: ['Feature', 'Cluster Headache', 'Paroxysmal Hemicrania', 'SUNCT / SUNA'],
      rows: [
        ['Duration per attack', '15 min – 3 hours', '2–30 minutes', '5–240 seconds'],
        ['Frequency', '1–8 per day', '5–40 per day', '3–200 per day'],
        ['Pain severity', 'Excruciating', 'Severe', 'Moderate–severe'],
        ['Autonomic features', 'Yes', 'Yes', 'Yes (conjunctival injection + lacrimation prominent)'],
        ['Sex predilection', 'Male 3:1', 'Female', 'Male slightly'],
        ['Specific treatment', 'O2, SC sumatriptan, verapamil', 'Indomethacin (diagnostic and therapeutic)', 'Lamotrigine (specialist)'],
        ['Response to indomethacin', 'Partial or none', 'Complete (ABSOLUTE — diagnostic)', 'None'],
      ],
      caption: 'Paroxysmal hemicrania: ABSOLUTE and COMPLETE response to indomethacin is diagnostic. If a unilateral headache with autonomic features responds completely to indomethacin → paroxysmal hemicrania. SUNCT (Short-lasting Unilateral Neuralgiform headache with Conjunctival injection and Tearing) / SUNA — very high frequency of brief attacks; specialist neurology management.',
    },

    { type: 'heading', level: 2, text: 'Differential Diagnosis' },

    {
      type: 'table',
      headers: ['Condition', 'Features'],
      rows: [
        ['Migraine with aura', 'Longer (4–72h), prefers dark/quiet, nausea/photophobia; bilateral or unilateral but without ipsilateral autonomic features; patient lies still'],
        ['Trigeminal neuralgia', 'Electric shock/stabbing facial pain, seconds, triggered by touch/eating/talking; no autonomic features; V2/V3 distribution'],
        ['Hemicrania continua', 'Continuous moderate unilateral headache with exacerbations + autonomic features; responds completely to indomethacin'],
        ['Horner\'s syndrome + headache', 'Consider carotid dissection — sudden painful Horner\'s in young patient; urgent MRI/MRA; do not dismiss as cluster'],
        ['Secondary causes', 'New headache mimicking cluster: pituitary adenoma (check pituitary MRI — especially in chronic cluster), cavernous sinus pathology; MRI recommended at diagnosis'],
      ],
      caption: 'All patients with new-onset cluster headache or diagnostic uncertainty should have neuroimaging (MRI head) to exclude secondary causes — particularly pituitary tumours and cavernous sinus lesions.',
    },

    { type: 'heading', level: 2, text: 'GP Referral and Ongoing Management' },

    {
      type: 'list',
      items: [
        'Refer all new suspected cluster headache to neurology for confirmation, imaging, and initiation of prophylaxis',
        'GP role: prescribe acute treatments (oxygen, sumatriptan SC), support prophylaxis compliance, and provide oxygen equipment',
        'Patient education: keep a headache diary (timing, duration, alcohol exposure, sleep); recognise cluster period onset early to start prophylaxis promptly',
        'Oxygen prescription: contact Home Oxygen Assessment and Review Service (HOAS) or GP prescribing team; patient needs their own cylinder and non-rebreathe mask',
        'Support organisations: OUCH UK (Organisation for the Understanding of Cluster Headache) — excellent patient resources',
        'Alcohol: advise to avoid during cluster periods (potent trigger within cluster) — safe to resume during remission',
      ],
    },

  ],
}

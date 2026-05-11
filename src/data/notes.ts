export type ContentBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'para'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'image'; src: string; alt: string; caption?: string; float?: 'left' | 'right'; maxWidth?: string; sensitive?: boolean }
  | { type: 'callout'; variant: 'info' | 'warning' | 'tip' | 'danger'; title: string; items: string[]; image?: { src: string; alt: string; maxWidth?: string; float?: 'left' | 'right' } }
  | { type: 'linkrow'; links: Array<{ label: string; url: string }> }
  | { type: 'calclink'; calculators: Array<{ id: string; label: string; subtitle?: string }> }
  | { type: 'notelink'; notes: Array<{ id: string; label: string; subtitle?: string }> }

export interface Note {
  id: string
  title: string
  subtitle: string
  tags: string[]
  body: string        // plain-text for search indexing
  content: ContentBlock[]
}

// Notes are registered here — imported from src/notes/
import { microcyticAnaemia }       from '../notes/microcyticAnaemia'
import { coeliacDisease }          from '../notes/coeliacDisease'
import { achillesTendinopathy }    from '../notes/achillesTendinopathy'
import { acneRosacea }             from '../notes/acneRosacea'
import { adenomyosis }             from '../notes/adenomyosis'
import { acuteOtitisMedia }        from '../notes/acuteOtitisMedia'
import { otitisExterna }           from '../notes/otitisExterna'
import { twoWeekWait }             from '../notes/twoWeekWait'
import { perinealTears }           from '../notes/perinealTears'
import { sixEightWeekCheck }       from '../notes/sixEightWeekCheck'
import { aaa }                    from '../notes/aaa'
import { abdominalMigraine }      from '../notes/abdominalMigraine'
import { abnormalLft }           from '../notes/abnormalLft'
import { abortionForms }         from '../notes/abortionForms'
import { epilepsyAdults }        from '../notes/epilepsyAdults'
import { epilepsyChildhood }     from '../notes/epilepsyChildhood'
import { seizureEmergency }      from '../notes/seizureEmergency'
import { acneVulgaris }          from '../notes/acneVulgaris'
import { actinicKeratosis }      from '../notes/actinicKeratosis'
import { acupuncture }           from '../notes/acupuncture'
import { limpingChild }          from '../notes/limpingChild'
import { acuteCough }            from '../notes/acuteCough'
import { chronicCough }          from '../notes/chronicCough'
import { asthmaDiagnosis }       from '../notes/asthmaDiagnosis'
import { asthmaAdult }           from '../notes/asthmaAdult'
import { asthmaChild }           from '../notes/asthmaChild'
import { asthmaEmergency }       from '../notes/asthmaEmergency'
import { acuteTesticularPain }   from '../notes/acuteTesticularPain'
import { acutelyDisturbedPerson } from '../notes/acutelyDisturbedPerson'
import { adrenalInsufficiency }   from '../notes/adrenalInsufficiency'
import { diabetesDiagnosis }      from '../notes/diabetesDiagnosis'
import { diabetesT2DM }           from '../notes/diabetesT2DM'
import { diabetesT1DM }           from '../notes/diabetesT1DM'
import { diabeticComplications }  from '../notes/diabeticComplications'
import { adhdAdult }              from '../notes/adhdAdult'
import { adhdChild }              from '../notes/adhdChild'
import { scoliosis }              from '../notes/scoliosis'
import { adultConstipation }      from '../notes/adultConstipation'
import { palliativeEOL }          from '../notes/palliativeEOL'
import { atrialFibrillation }     from '../notes/atrialFibrillation'
import { amd }                    from '../notes/amd'
import { aki }                    from '../notes/aki'
import { rhinosinusitis }         from '../notes/rhinosinusitis'
import { nasalPolyps }            from '../notes/nasalPolyps'
import { alcoholEtoh }            from '../notes/alcoholEtoh'
import { substanceMisuse }        from '../notes/substanceMisuse'
import { haemMalignancies }       from '../notes/haemMalignancies'
import { allergicReactions }      from '../notes/allergicReactions'
import { alopecia }               from '../notes/alopecia'
import { dementia }               from '../notes/dementia'
import { amenorrhoea }            from '../notes/amenorrhoea'
import { analCancer }             from '../notes/analCancer'
import { analFissure }            from '../notes/analFissure'
import { aphthousUlcers }         from '../notes/aphthousUlcers'
import { angina }                 from '../notes/angina'
import { enuresis }               from '../notes/enuresis'
import { ankleInjury }            from '../notes/ankleInjury'
import { anosmia }                from '../notes/anosmia'
import { antidepressants }        from '../notes/antidepressants'
import { lithiumBipolar }         from '../notes/lithiumBipolar'
import { anxiety }                from '../notes/anxiety'
import { ocd }                    from '../notes/ocd'
import { depression }             from '../notes/depression'
import { ptsd }                   from '../notes/ptsd'
import { stressGrief }            from '../notes/stressGrief'
import { suicideSelfHarm }        from '../notes/suicideSelfHarm'
import { childAnxietyDepression } from '../notes/childAnxietyDepression'
import { malaria }               from '../notes/malaria'
import { notifiableDiseases }    from '../notes/notifiableDiseases'
import { antiphospholipidSyndrome } from '../notes/antiphospholipidSyndrome'
import { psychosisSchizophrenia }  from '../notes/psychosisSchizophrenia'
import { antipsychoticsSmi }       from '../notes/antipsychoticsSmi'
import { perinatalMH }             from '../notes/perinatalMH'
import { antiemeticsVertigo }     from '../notes/antiemeticsVertigo'
import { antispasmodics }         from '../notes/antispasmodics'
import { boilsStaphCarriage }     from '../notes/boilsStaphCarriage'
import { insomnia }              from '../notes/insomnia'
import { vitaminB12 }           from '../notes/vitaminB12'
import { neonatalHeadLumps }    from '../notes/neonatalHeadLumps'
import { balanitis }            from '../notes/balanitis'
import { phimosisCircumcision } from '../notes/phimosisCircumcision'
import { barrettsOesophagus }  from '../notes/barrettsOesophagus'
import { benignBreast }          from '../notes/benignBreast'
import { breastCancer }          from '../notes/breastCancer'
import { breastHormonalTherapy } from '../notes/breastHormonalTherapy'
import { ckd }                   from '../notes/ckd'
import { copd }                  from '../notes/copd'
import { heartFailure }          from '../notes/heartFailure'
import { migraine }              from '../notes/migraine'
import { strokeTia }             from '../notes/strokeTia'
import { gout }                  from '../notes/gout'
import { cellulitis }            from '../notes/cellulitis'
import { cocp }                  from '../notes/cocp'
import { autism }                from '../notes/autism'
import { psoriasis }             from '../notes/psoriasis'
import { allergicRhinitis }      from '../notes/allergicRhinitis'
import { anaphylaxis }           from '../notes/anaphylaxis'
import { bellsPalsy }            from '../notes/bellsPalsy'
import { bronchiectasis }        from '../notes/bronchiectasis'
import { bronchiolitis }         from '../notes/bronchiolitis'
import { burns }                 from '../notes/burns'
import { essentialTremor }       from '../notes/essentialTremor'
import { bleedingOnHrt }         from '../notes/bleedingOnHrt'
import { brainTumour }           from '../notes/brainTumour'
import { bcc }                   from '../notes/bcc'
import { bleedingOnContraception } from '../notes/bleedingOnContraception'
import { cdiff }                 from '../notes/cdiff'
import { carpalTunnel }          from '../notes/carpalTunnel'
import { croup }                 from '../notes/croup'
import { delirium }              from '../notes/delirium'
import { conjunctivitis }        from '../notes/conjunctivitis'
import { contactDermatitis }     from '../notes/contactDermatitis'
import { cfs }                   from '../notes/cfs'
import { dmards }                from '../notes/dmards'
import { cmpa }                  from '../notes/cmpa'
import { cancerPain }            from '../notes/cancerPain'
import { capacityMca }           from '../notes/capacityMca'
import { cataracts }             from '../notes/cataracts'
import { cervicalCancer }        from '../notes/cervicalCancer'
import { childDevelopment }      from '../notes/childDevelopment'
import { childSafeguarding }     from '../notes/childSafeguarding'
import { chronicPain }           from '../notes/chronicPain'
import { chronicPelvicPain }     from '../notes/chronicPelvicPain'
import { doacs }                 from '../notes/doacs'
import { deQuervains }           from '../notes/deQuervains'
import { delayedPuberty }        from '../notes/delayedPuberty'
import { diverticularDisease }   from '../notes/diverticularDisease'
import { domesticViolence }      from '../notes/domesticViolence'
import { dysphagia }             from '../notes/dysphagia'
import { eatingDisorders }       from '../notes/eatingDisorders'
import { elderlyFalls }          from '../notes/elderlyFalls'
import { emergencyContraception } from '../notes/emergencyContraception'
import { endometriosis }         from '../notes/endometriosis'
import { colorectalCancer }      from '../notes/colorectalCancer'
import { cushingsSyndrome }      from '../notes/cushingsSyndrome'
import { atopicEczema }              from '../notes/atopicEczema'
import { gordDyspepsia }             from '../notes/gordDyspepsia'
import { diabeticFoot }              from '../notes/diabeticFoot'
import { erectileDysfunction }       from '../notes/erectileDysfunction'
import { feverishChild }             from '../notes/feverishChild'
import { fibromyalgia }              from '../notes/fibromyalgia'
import { gallstonesPancreatitis }    from '../notes/gallstonesPancreatitis'
import { gca }                       from '../notes/gca'
import { frailty }                   from '../notes/frailty'
import { endometrialCancer }         from '../notes/endometrialCancer'
import { falteringGrowth }           from '../notes/falteringGrowth'
import { familialHypercholesterolaemia } from '../notes/familialHypercholesterolaemia'
import { glaucoma }                  from '../notes/glaucoma'

// Enrich each note's body with text extracted from content blocks (captions, headings, list items, etc.)
function enrichBody(note: Note): Note {
  const extra: string[] = []
  for (const block of note.content) {
    if (block.type === 'image' && block.caption) extra.push(block.caption)
    if (block.type === 'image' && block.alt)     extra.push(block.alt)
    if (block.type === 'heading')                extra.push(block.text)
    if (block.type === 'para')                   extra.push(block.text)
    if (block.type === 'list')                   extra.push(...block.items)
    if (block.type === 'callout')                extra.push(block.title, ...block.items)
    if (block.type === 'table') {
      extra.push(...block.headers)
      block.rows.forEach(row => extra.push(...row))
      if (block.caption) extra.push(block.caption)
    }
    if (block.type === 'linkrow') extra.push(...block.links.map(l => l.label))
  }
  return { ...note, body: note.body + ' ' + extra.join(' ') }
}

export const NOTES: Note[] = [
  microcyticAnaemia,
  coeliacDisease,
  achillesTendinopathy,
  acneRosacea,
  adenomyosis,
  acuteOtitisMedia,
  otitisExterna,
  twoWeekWait,
  perinealTears,
  sixEightWeekCheck,
  aaa,
  abdominalMigraine,
  abnormalLft,
  abortionForms,
  epilepsyAdults,
  epilepsyChildhood,
  seizureEmergency,
  acneVulgaris,
  actinicKeratosis,
  acupuncture,
  limpingChild,
  acuteCough,
  chronicCough,
  asthmaDiagnosis,
  asthmaAdult,
  asthmaChild,
  asthmaEmergency,
  acuteTesticularPain,
  acutelyDisturbedPerson,
  adrenalInsufficiency,
  diabetesDiagnosis,
  diabetesT2DM,
  diabetesT1DM,
  diabeticComplications,
  adhdAdult,
  adhdChild,
  scoliosis,
  adultConstipation,
  palliativeEOL,
  atrialFibrillation,
  amd,
  aki,
  rhinosinusitis,
  nasalPolyps,
  alcoholEtoh,
  substanceMisuse,
  haemMalignancies,
  allergicReactions,
  alopecia,
  dementia,
  amenorrhoea,
  analCancer,
  analFissure,
  aphthousUlcers,
  angina,
  enuresis,
  ankleInjury,
  anosmia,
  benignBreast,
  breastCancer,
  breastHormonalTherapy,
  antidepressants,
  lithiumBipolar,
  anxiety,
  ocd,
  depression,
  ptsd,
  stressGrief,
  suicideSelfHarm,
  childAnxietyDepression,
  malaria,
  notifiableDiseases,
  antiphospholipidSyndrome,
  psychosisSchizophrenia,
  antipsychoticsSmi,
  perinatalMH,
  antiemeticsVertigo,
  antispasmodics,
  boilsStaphCarriage,
  insomnia,
  vitaminB12,
  neonatalHeadLumps,
  balanitis,
  phimosisCircumcision,
  barrettsOesophagus,
  ckd,
  copd,
  heartFailure,
  migraine,
  strokeTia,
  gout,
  cellulitis,
  cocp,
  autism,
  psoriasis,
  allergicRhinitis,
  anaphylaxis,
  bellsPalsy,
  bronchiectasis,
  bronchiolitis,
  burns,
  essentialTremor,
  bleedingOnHrt,
  brainTumour,
  bcc,
  bleedingOnContraception,
  cdiff,
  carpalTunnel,
  croup,
  delirium,
  conjunctivitis,
  contactDermatitis,
  cfs,
  dmards,
  cmpa,
  cancerPain,
  capacityMca,
  cataracts,
  cervicalCancer,
  childDevelopment,
  childSafeguarding,
  chronicPain,
  chronicPelvicPain,
  doacs,
  deQuervains,
  delayedPuberty,
  diverticularDisease,
  domesticViolence,
  dysphagia,
  eatingDisorders,
  elderlyFalls,
  emergencyContraception,
  endometriosis,
  colorectalCancer,
  cushingsSyndrome,
  atopicEczema,
  gordDyspepsia,
  diabeticFoot,
  erectileDysfunction,
  feverishChild,
  fibromyalgia,
  gallstonesPancreatitis,
  gca,
  frailty,
  endometrialCancer,
  falteringGrowth,
  familialHypercholesterolaemia,
  glaucoma,
].map(enrichBody)

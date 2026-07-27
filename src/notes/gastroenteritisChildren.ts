import type { Note } from '../data/notes'

export const gastroenteritisChildren: Note = {
  id: 'gastroenteritis-children',
  title: 'Gastroenteritis / D&V in Children',
  subtitle: 'Assessing dehydration, oral rehydration, red flags that aren\'t gastroenteritis, and HUS',
  tags: ['paediatrics'],

  body: `gastroenteritis children diarrhoea vomiting dehydration oral rehydration solution Dioralyte rotavirus ondansetron red flags bilious vomiting bloody stool haemolytic uraemic syndrome HUS E coli shigella school exclusion`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG84 — Diarrhoea & Vomiting in Children', url: 'https://www.nice.org.uk/guidance/cg84' },
        { label: 'NICE CKS — Gastroenteritis', url: 'https://cks.nice.org.uk/topics/gastroenteritis/' },
        { label: 'NHS — Rotavirus / D&V in Children', url: 'https://www.nhs.uk/conditions/rotavirus-gastroenteritis/' },
      ],
    },

    {
      type: 'para',
      text: 'Childhood gastroenteritis is usually a self-limiting viral illness managed at home with oral rehydration. The clinical work is threefold: assess for dehydration/shock, actively exclude the presentations that are NOT gastroenteritis (bilious vomiting, blood in stool, a surgical abdomen, meningitis), and remember haemolytic uraemic syndrome after bloody diarrhoea — where antibiotics and antidiarrhoeals are contraindicated.',
    },
    {
      type: 'list',
      items: [
        'Usually viral (rotavirus/norovirus); most children can be managed at home with fluids',
        'Typical course: vomiting lasts ~1–2 days (settling by ~3 days), diarrhoea ~5–7 days (settling by ~2 weeks)',
        'Check contacts and travel; advise scrupulous hand hygiene and exclusion from school/nursery until 48 hours after the last episode',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: "If Present, It's NOT Simple Gastroenteritis",
      items: [
        'Bilious (green) vomiting → intestinal obstruction — surgical emergency',
        'Blood in the stool, or significant/localised abdominal pain, tenderness, distension or a mass',
        'High fever, meningism, or a non-blanching rash (consider sepsis/meningococcal)',
        'Projectile vomiting in a young infant (<2 months) → pyloric stenosis',
        'Signs of a surgical abdomen (e.g. intussusception — colicky pain, "redcurrant jelly" stool, a sausage-shaped mass)',
      ],
    },

    { type: 'heading', level: 2, text: 'Assess Dehydration' },

    {
      type: 'table',
      headers: ['Level', 'Signs'],
      rows: [
        ['No clinical dehydration', 'Alert, normal pulse/skin/eyes, moist mucous membranes, normal urine output'],
        ['Clinical dehydration', 'Irritable/lethargic, reduced urine output, dry mucous membranes, sunken eyes, reduced skin turgor, tachycardia'],
        ['Shock (red flags)', 'Decreased consciousness, pale/mottled/cold skin, prolonged capillary refill, weak pulses, tachycardia, hypotension (late)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'No dehydration: continue breast/formula feeds and encourage fluids; discourage fruit juices/fizzy drinks; offer oral rehydration solution (ORS) if at increased risk of dehydration (age <1, ≥5 diarrhoea or ≥2 vomits in 24h, or comorbidity)',
        'Clinical dehydration: oral rehydration solution (e.g. Dioralyte) — ~50 mL/kg over 4 hours plus maintenance, given little and often; continue breastfeeding',
        'Shock or unable to tolerate/deteriorating on oral fluids → admit for NG or IV rehydration (beware overly rapid correction — hyponatraemia/hypernatraemia)',
        'A single dose of ondansetron may reduce vomiting and the need for admission in selected children (per local pathways); probiotics are not recommended; do not routinely use antidiarrhoeals/antiemetics',
        'Stool MC&S if: systemically unwell/admitted, immunocompromised, blood or mucus in the stool, recent travel, or diarrhoea >7 days; notify UKHSA if an outbreak is suspected',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Haemolytic Uraemic Syndrome (HUS) — Do Not Miss',
      items: [
        'Caused by Shiga-toxin-producing E. coli (STEC/O157) and Shigella — suspect after bloody diarrhoea',
        'Triad: microangiopathic haemolytic anaemia + thrombocytopenia + acute kidney injury (pallor, reduced urine output, oedema after a diarrhoeal illness)',
        'Admit urgently; supportive management (many need dialysis); do NOT give antibiotics or antidiarrhoeals for suspected E. coli O157 (may increase HUS risk)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'feverish-child', label: 'Feverish Child Under 5', subtitle: 'Traffic-light assessment and sepsis recognition' },
        { id: 'infant-colic-reflux', label: 'Infant Colic & Reflux', subtitle: 'Vomiting/regurgitation in babies — different entity' },
        { id: 'faltering-growth', label: 'Faltering Growth', subtitle: 'Prolonged/recurrent GI illness and weight' },
        { id: 'aki', label: 'Acute Kidney Injury', subtitle: 'HUS-related renal failure' },
        { id: 'gastroenteritis-adult', label: 'Gastroenteritis (Adults)', subtitle: 'Adult D&V — stool testing and organism guide' },
      ],
    },

  ],
}

import type { Note } from '../data/notes'

export const learningDisability: Note = {
  id: 'learning-disability',
  title: 'Learning Disability & Neurodiversity',
  subtitle: 'Annual health checks, reasonable adjustments, diagnostic overshadowing and the LeDeR context',
  tags: ['mental', 'paediatrics'],

  body: `learning disability intellectual disability neurodiversity autism ADHD annual health check reasonable adjustments diagnostic overshadowing capacity mental capacity act LeDeR health inequality communication STOMP constipation`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'People with a learning disability (a significant reduction in the ability to understand new/complex information and to cope independently, with onset before adulthood) experience profound health inequalities and die younger, often of preventable causes. "Neurodiversity" more broadly includes autism, ADHD and related conditions. The GP\'s role is proactive, adjusted, equal care — most concretely delivered through the annual learning-disability health check and reasonable adjustments.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Beware Diagnostic Overshadowing',
      items: [
        'Diagnostic overshadowing = wrongly attributing new physical symptoms/behaviour to the person\'s learning disability or autism, and so missing a treatable illness.',
        'A CHANGE in behaviour is often the presentation of pain or illness in someone with limited communication — actively look for physical causes (infection, constipation, dental pain, reflux, fracture) before assuming it is "behavioural".',
      ],
    },

    { type: 'heading', level: 2, text: 'The Annual Health Check' },
    {
      type: 'list',
      items: [
        'Offered from age 14 to everyone on the learning-disability register — a structured, proactive review that reduces unmet need and premature death.',
        'Includes: reviewing physical and mental health, medication (see STOMP — Stopping Over-Medication of People with a learning disability/autism, esp. psychotropics), screening/immunisation uptake, epilepsy and continence, weight/lifestyle, sensory needs, and producing/updating a Health Action Plan.',
        'Actively address the conditions that are more common: epilepsy, constipation (a common, sometimes fatal, under-recognised problem), obesity, dysphagia/aspiration, dental disease, mental illness, and sensory impairment.',
        'Ensure the person is on the register and their records are flagged.',
      ],
    },

    { type: 'heading', level: 2, text: 'Reasonable Adjustments & Capacity' },
    {
      type: 'list',
      items: [
        'Make REASONABLE ADJUSTMENTS (a legal duty): longer/first/last appointments, quiet environment, accessible (easy-read) information, communication aids, involving carers/advocates, and a hospital passport for admissions.',
        'Assess CAPACITY decision-by-decision (Mental Capacity Act) — a learning disability does not remove capacity; support the person to decide, and use best-interests processes where they cannot.',
        'Support carers and coordinate with community learning-disability teams, education (EHCP) and social care; plan transition from child to adult services.',
      ],
    },

    { type: 'heading', level: 2, text: 'Neurodiversity Note' },
    {
      type: 'list',
      items: [
        'Autism and ADHD are common and often coexist with (but are distinct from) learning disability; the same principles apply — reasonable adjustments, avoiding overshadowing, and screening for mental and physical health.',
        'The national LeDeR programme (Learning from Lives and Deaths) reviews deaths of people with a learning disability/autism to improve care and reduce avoidable mortality.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NHS England — Learning Disability Annual Health Check', url: 'https://www.england.nhs.uk/learning-disabilities/improving-health/annual-health-checks/' },
        { label: 'NICE NG54 — Mental Health in Learning Disability', url: 'https://www.nice.org.uk/guidance/ng54' },
        { label: 'Mencap', url: 'https://www.mencap.org.uk/' },
        { label: 'STOMP — Stopping Over-Medication', url: 'https://www.england.nhs.uk/learning-disabilities/improving-health/stomp/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'autism-asd', label: 'Autism (ASD)', subtitle: 'Neurodevelopmental diagnosis and support' },
        { id: 'capacity-mca', label: 'Mental Capacity Act', subtitle: 'Decision-specific capacity and best interests' },
        { id: 'paediatric-constipation', label: 'Paediatric Constipation', subtitle: 'A common, under-recognised problem to manage proactively' },
        { id: 'epilepsyAdults', label: 'Epilepsy (Adults)', subtitle: 'More common and often under-treated' },
        { id: 'child-development', label: 'Child Development & Delay', subtitle: 'Recognising developmental delay in childhood' },
      ],
    },

  ],
}

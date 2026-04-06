import { useEffect } from 'react'
import FenoCalculator from '../calculators/FenoCalculator'
import SixCitCalculator from '../calculators/SixCitCalculator'
import Fib4Calculator from '../calculators/Fib4Calculator'

interface Props {
  highlightedId?: string
}

interface CalcEntry {
  id: string
  title: string
  subtitle: string
  component: React.ReactNode
}

const ENTRIES: CalcEntry[] = [
  {
    id: 'feno',
    title: 'FeNO Calculator',
    subtitle: 'Fractional Exhaled Nitric Oxide — asthma eosinophilic inflammation',
    component: <FenoCalculator />,
  },
  {
    id: '6cit',
    title: '6-CIT — Six Item Cognitive Impairment Test',
    subtitle: 'Cognitive screening tool for dementia — scored 0–28',
    component: <SixCitCalculator />,
  },
  {
    id: 'fib4',
    title: 'FIB-4 Index — Liver Fibrosis',
    subtitle: 'Fibrosis staging in NAFLD, MASLD and liver disease — Age × AST ÷ (Platelets × √ALT)',
    component: <Fib4Calculator />,
  },
]

export default function CalculatorsTab({ highlightedId }: Props) {
  // Scroll to highlighted calculator when navigating from search
  useEffect(() => {
    if (!highlightedId) return
    const timer = setTimeout(() => {
      const el = document.getElementById(`calc-${highlightedId}`)
      if (el) {
        // Find the scrollable <main> container
        const scroller = el.closest('main') ?? el.parentElement
        if (scroller) {
          const top = el.offsetTop - (scroller as HTMLElement).offsetTop - 16
          scroller.scrollTo({ top, behavior: 'smooth' })
        } else {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }, 80)
    return () => clearTimeout(timer)
  }, [highlightedId])

  return (
    <div style={{ padding: '24px 20px 40px', maxWidth: 900, width: '100%', margin: '0 auto' }}>
      {ENTRIES.map((entry) => {
        const isHighlighted = entry.id === highlightedId
        return (
          <section
            key={entry.id}
            id={`calc-${entry.id}`}
            style={{
              marginBottom: 40,
              backgroundColor: '#fff',
              border: '1px solid #dce6f0',
              borderLeft: isHighlighted ? '5px solid #1a365d' : '5px solid #2b6cb0',
              borderRadius: 10,
              padding: '22px 24px',
              boxShadow: isHighlighted
                ? '0 0 0 2px #2b6cb0'
                : '0 1px 4px rgba(0,0,0,0.05)',
              transition: 'box-shadow 0.2s',
            }}
          >
            <h2 style={{ fontSize: 17, fontWeight: 700, color: '#1a365d', margin: '0 0 2px' }}>
              {entry.title}
            </h2>
            <p style={{ fontSize: 12, color: '#8a9bb0', margin: '0 0 20px' }}>
              {entry.subtitle}
            </p>
            {entry.component}
          </section>
        )
      })}
    </div>
  )
}

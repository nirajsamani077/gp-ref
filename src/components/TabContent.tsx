import type { TabId } from '../types'
import LinksTab from './LinksTab'
import CalculatorsTab from './CalculatorsTab'
import NotesTab from './NotesTab'
import SymptomsTab from './SymptomsTab'

const PLACEHOLDERS: Partial<Record<TabId, string>> = {
  forms:  'Forms coming soon',
  images: 'Images coming soon',
}

interface Props {
  active: TabId
  highlightedLinkUrl?: string | null
  highlightedCalcId?: string | null
  highlightedNoteId?: string | null
}

export default function TabContent({ active, highlightedLinkUrl, highlightedCalcId, highlightedNoteId }: Props) {
  if (active === 'notes') {
    return (
      <main style={{ flex: 1, overflow: 'hidden', backgroundColor: '#f7f9fb', display: 'flex', flexDirection: 'column' }}>
        <NotesTab highlightedNoteId={highlightedNoteId} />
      </main>
    )
  }

  if (active === 'symptoms') {
    return (
      <main style={{ flex: 1, overflow: 'hidden', backgroundColor: '#f0fff4', display: 'flex', flexDirection: 'column' }}>
        <SymptomsTab />
      </main>
    )
  }

  if (active === 'links') {
    return (
      <main style={{ flex: 1, overflowY: 'auto', backgroundColor: '#f7f9fb' }}>
        <LinksTab highlightedUrl={highlightedLinkUrl} />
      </main>
    )
  }

  if (active === 'calculators') {
    return (
      <main style={{ flex: 1, overflowY: 'auto', backgroundColor: '#f7f9fb' }}>
        <CalculatorsTab highlightedId={highlightedCalcId ?? undefined} />
      </main>
    )
  }

  return (
    <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a0aec0', fontSize: 16, backgroundColor: '#f7f9fb' }}>
      {PLACEHOLDERS[active]}
    </main>
  )
}

import type { TabId } from '../types'
import LinksTab from './LinksTab'
import CalculatorsTab from './CalculatorsTab'
import NotesTab from './NotesTab'
import SymptomsTab from './SymptomsTab'
import AskTab from './AskTab'
import FormsTab from './FormsTab'

const PLACEHOLDERS: Partial<Record<TabId, string>> = {
  images: 'Images coming soon',
}

interface Props {
  active: TabId
  highlightedLinkUrl?: string | null
  highlightedCalcId?: string | null
  highlightedNoteId?: string | null
  highlightedNoteQuery?: string
  highlightedSymptomId?: string | null
  formOpenReq?: { id: string; seq: number } | null
  noteBackRef?: { id: string; name: string } | null
  onBackToSymptom?: () => void
  pendingAskQuery?: string
  onClearPendingAskQuery?: () => void
}

export default function TabContent({ active, highlightedLinkUrl, highlightedCalcId, highlightedNoteId, highlightedNoteQuery, highlightedSymptomId, formOpenReq, noteBackRef, onBackToSymptom, pendingAskQuery, onClearPendingAskQuery }: Props) {
  if (active === 'notes') {
    return (
      <main style={{ flex: 1, overflow: 'hidden', backgroundColor: '#f7f9fb', display: 'flex', flexDirection: 'column' }}>
        {noteBackRef && (
          <button
            onClick={onBackToSymptom}
            style={{
              display: 'flex', alignItems: 'center', gap: 8, width: '100%',
              padding: '9px 16px', border: 'none', borderBottom: '1px solid #cbe0cf',
              backgroundColor: '#e6f6ec', color: '#276749', cursor: 'pointer',
              fontSize: 13.5, fontWeight: 700, textAlign: 'left', flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 15 }}>←</span>
            Back to “{noteBackRef.name}” differentials
          </button>
        )}
        <NotesTab highlightedNoteId={highlightedNoteId} externalHighlightQuery={highlightedNoteQuery} />
      </main>
    )
  }

  if (active === 'forms') {
    return (
      <main style={{ flex: 1, overflow: 'hidden', backgroundColor: '#f7f9fb', display: 'flex', flexDirection: 'column' }}>
        <FormsTab formOpenReq={formOpenReq} />
      </main>
    )
  }

  if (active === 'ask') {
    return (
      <main style={{ flex: 1, overflow: 'hidden', backgroundColor: '#f7f9fb', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <AskTab pendingQuery={pendingAskQuery} onClearPendingQuery={onClearPendingAskQuery} />
      </main>
    )
  }

  if (active === 'symptoms') {
    return (
      <main style={{ flex: 1, overflow: 'hidden', backgroundColor: '#fbfdff', display: 'flex', flexDirection: 'column' }}>
        <SymptomsTab highlightedSymptomId={highlightedSymptomId} />
      </main>
    )
  }

  if (active === 'links') {
    return (
      <main style={{ flex: 1, overflow: 'hidden', backgroundColor: '#f7f9fb', display: 'flex', flexDirection: 'column' }}>
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

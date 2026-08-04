import { useState, useEffect, useCallback } from 'react'
import type { TabId } from './types'
import { TABS } from './tabs'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import BottomTabBar from './components/BottomTabBar'
import TabContent from './components/TabContent'
import CommandPalette from './components/CommandPalette'
import { UpdateBanner } from './components/UpdateBanner'

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isDesktop
}

export default function App() {
  const [activeTab, setActiveTab]           = useState<TabId>('notes')
  const [highlightedLinkUrl, setHighlightedLinkUrl]     = useState<string | null>(null)
  const [highlightedCalcId, setHighlightedCalcId]       = useState<string | null>(null)
  const [highlightedNoteId, setHighlightedNoteId]       = useState<string | null>(null)
  const [highlightedNoteQuery, setHighlightedNoteQuery] = useState<string | undefined>(undefined)
  const [highlightedSymptomId, setHighlightedSymptomId] = useState<string | null>(null)
  const [noteBackRef, setNoteBackRef]       = useState<{ id: string; name: string } | null>(null)
  const [paletteOpen, setPaletteOpen]       = useState(false)
  const [pendingAskQuery, setPendingAskQuery] = useState<string | undefined>(undefined)
  const isDesktop = useIsDesktop()

  const handleTabSelect = useCallback((tabId: TabId) => {
    setNoteBackRef(null)
    if (tabId === 'notes' && activeTab === 'notes') {
      window.dispatchEvent(new CustomEvent('gpr-home'))
    } else {
      setActiveTab(tabId)
    }
  }, [activeTab])

  const handleGoHome = useCallback(() => {
    setNoteBackRef(null)
    setActiveTab('notes')
    window.dispatchEvent(new CustomEvent('gpr-home'))
  }, [])

  // Return from a note back to the differential it was opened from
  const handleBackToSymptom = useCallback(() => {
    if (!noteBackRef) return
    setHighlightedSymptomId(noteBackRef.id)
    setActiveTab('symptoms')
    setNoteBackRef(null)
  }, [noteBackRef])

  const handleNavigate = useCallback((tab: TabId, id: string) => {
    setActiveTab(tab)
    if (tab === 'links')       setHighlightedLinkUrl(id)
    if (tab === 'calculators') setHighlightedCalcId(id)
  }, [])

  // Command palette — open via button or ⌘K event from CommandPalette
  const handleOpenPalette = useCallback(() => setPaletteOpen(true), [])
  useEffect(() => {
    const handler = () => setPaletteOpen(true)
    window.addEventListener('gpr-open-palette', handler)
    return () => window.removeEventListener('gpr-open-palette', handler)
  }, [])

  // Ask tab — called from command palette "Ask AI" row
  const handleAsk = useCallback((query: string) => {
    setActiveTab('ask')
    setPendingAskQuery(query)
  }, [])

  // Listen for in-note calculator link clicks (dispatched by NoteRenderer calclink blocks)
  useEffect(() => {
    function handler(e: Event) {
      const calcId = (e as CustomEvent<string>).detail
      setActiveTab('calculators')
      setHighlightedCalcId(calcId)
    }
    window.addEventListener('navigate-calc', handler)
    return () => window.removeEventListener('navigate-calc', handler)
  }, [])

  // Listen for in-note cross-note link clicks and command palette navigation
  // detail can be: string (legacy notelink) | { id: string; query?: string }
  useEffect(() => {
    function handler(e: Event) {
      const detail = (e as CustomEvent).detail
      const noteId = typeof detail === 'string' ? detail : (detail?.id ?? '')
      const query  = typeof detail === 'object' ? (detail?.query ?? undefined) : undefined
      const from   = typeof detail === 'object' ? detail?.from : undefined
      setActiveTab('notes')
      setHighlightedNoteId(noteId)
      setHighlightedNoteQuery(query)
      // Remember a symptom origin so the note can offer "back to differentials"
      setNoteBackRef(from?.type === 'symptom' ? { id: from.id, name: from.name } : null)
    }
    window.addEventListener('navigate-note', handler)
    return () => window.removeEventListener('navigate-note', handler)
  }, [])

  // Listen for command-palette navigation to a symptom / presentation
  useEffect(() => {
    function handler(e: Event) {
      const detail = (e as CustomEvent).detail
      const id = typeof detail === 'string' ? detail : (detail?.id ?? '')
      setActiveTab('symptoms')
      setHighlightedSymptomId(id)
      setNoteBackRef(null)
    }
    window.addEventListener('navigate-symptom', handler)
    return () => window.removeEventListener('navigate-symptom', handler)
  }, [])

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100dvh', backgroundColor: '#fff',
      fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
    }}>
      <Header
        onNavigate={handleNavigate}
        onHome={handleGoHome}
        onOpenPalette={handleOpenPalette}
      />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {isDesktop && (
          <Sidebar tabs={TABS} active={activeTab} onSelect={handleTabSelect} />
        )}
        <TabContent
          active={activeTab}
          highlightedLinkUrl={highlightedLinkUrl}
          highlightedCalcId={highlightedCalcId}
          highlightedNoteId={highlightedNoteId}
          highlightedNoteQuery={highlightedNoteQuery}
          highlightedSymptomId={highlightedSymptomId}
          noteBackRef={noteBackRef}
          onBackToSymptom={handleBackToSymptom}
          pendingAskQuery={pendingAskQuery}
          onClearPendingAskQuery={() => setPendingAskQuery(undefined)}
        />
      </div>

      {!isDesktop && (
        <BottomTabBar tabs={TABS} active={activeTab} onSelect={handleTabSelect} />
      )}

      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigate={handleNavigate}
        onAsk={handleAsk}
      />

      <UpdateBanner />
    </div>
  )
}

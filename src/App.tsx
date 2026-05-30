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
  const [highlightedLinkUrl, setHighlightedLinkUrl] = useState<string | null>(null)
  const [highlightedCalcId, setHighlightedCalcId]   = useState<string | null>(null)
  const [highlightedNoteId, setHighlightedNoteId]   = useState<string | null>(null)
  const [paletteOpen, setPaletteOpen]       = useState(false)
  const [pendingAskQuery, setPendingAskQuery] = useState<string | undefined>(undefined)
  const isDesktop = useIsDesktop()

  const handleTabSelect = useCallback((tabId: TabId) => {
    if (tabId === 'notes' && activeTab === 'notes') {
      window.dispatchEvent(new CustomEvent('gpr-home'))
    } else {
      setActiveTab(tabId)
    }
  }, [activeTab])

  const handleGoHome = useCallback(() => {
    setActiveTab('notes')
    window.dispatchEvent(new CustomEvent('gpr-home'))
  }, [])

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

  // Listen for in-note cross-note link clicks (dispatched by NoteRenderer notelink blocks)
  useEffect(() => {
    function handler(e: Event) {
      const noteId = (e as CustomEvent<string>).detail
      setActiveTab('notes')
      setHighlightedNoteId(noteId)
    }
    window.addEventListener('navigate-note', handler)
    return () => window.removeEventListener('navigate-note', handler)
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

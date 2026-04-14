import { useState, useEffect, useCallback } from 'react'
import type { TabId } from './types'
import { TABS } from './tabs'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import BottomTabBar from './components/BottomTabBar'
import TabContent from './components/TabContent'
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
  const isDesktop = useIsDesktop()

  const handleTabSelect = useCallback((tabId: TabId) => {
    if (tabId === 'notes' && activeTab === 'notes') {
      // Re-tapping the active Notes tab resets to the home list view
      window.dispatchEvent(new CustomEvent('gpr-home'))
    } else {
      setActiveTab(tabId)
    }
  }, [activeTab])

  // Tapping the logo from any state: switch to Notes + reset its internal state
  const handleGoHome = useCallback(() => {
    setActiveTab('notes')
    window.dispatchEvent(new CustomEvent('gpr-home'))
  }, [])

  // Called by the header search when user picks a link or calculator
  const handleNavigate = useCallback((tab: TabId, id: string) => {
    setActiveTab(tab)
    if (tab === 'links')       setHighlightedLinkUrl(id)
    if (tab === 'calculators') setHighlightedCalcId(id)
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

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100dvh', backgroundColor: '#fff',
      fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
    }}>
      <Header onNavigate={handleNavigate} onHome={handleGoHome} />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {isDesktop && (
          <Sidebar tabs={TABS} active={activeTab} onSelect={handleTabSelect} />
        )}
        <TabContent
          active={activeTab}
          highlightedLinkUrl={highlightedLinkUrl}
          highlightedCalcId={highlightedCalcId}
        />
      </div>

      {!isDesktop && (
        <BottomTabBar tabs={TABS} active={activeTab} onSelect={handleTabSelect} />
      )}

      <UpdateBanner />
    </div>
  )
}

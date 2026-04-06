import { useState, useEffect, useCallback } from 'react'
import type { TabId } from './types'
import { TABS } from './tabs'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import BottomTabBar from './components/BottomTabBar'
import TabContent from './components/TabContent'

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
    setActiveTab(tabId)
  }, [])

  // Called by the header search when user picks a link or calculator
  const handleNavigate = useCallback((tab: TabId, id: string) => {
    setActiveTab(tab)
    if (tab === 'links')       setHighlightedLinkUrl(id)
    if (tab === 'calculators') setHighlightedCalcId(id)
  }, [])

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100dvh', backgroundColor: '#fff',
      fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
    }}>
      <Header onNavigate={handleNavigate} />

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
    </div>
  )
}

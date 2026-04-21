import { useState } from 'react'
import FlowchartPicker from './FlowchartPicker'
import FlowchartViewer from './FlowchartViewer'
import type { Flowchart } from '../../data/flowcharts'

export default function FlowsTab() {
  const [selected, setSelected] = useState<Flowchart | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {selected
        ? <FlowchartViewer flowchart={selected} onBack={() => setSelected(null)} />
        : <FlowchartPicker onSelect={setSelected} />
      }
    </div>
  )
}

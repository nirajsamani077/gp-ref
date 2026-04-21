import { useEffect, useState, useMemo } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  BackgroundVariant,
  ReactFlowProvider,
  type NodeTypes,
  type Edge,
} from '@xyflow/react'
import GPOsNode from './GPOsNode'
import { NODE_VARIANT_META } from '../../data/flowcharts'
import type { Flowchart, GPOsNodeData } from '../../data/flowcharts'
import { applyDagreLayout } from './dagreLayout'

const nodeTypes: NodeTypes = { gpos: GPOsNode }

interface Props {
  flowchart: Flowchart
  onBack: () => void
}

// ── Detail bottom sheet ───────────────────────────────────────────────────────
function DetailSheet({ data, onClose }: { data: GPOsNodeData; onClose: () => void }) {
  const meta = NODE_VARIANT_META[data.variant] ?? NODE_VARIANT_META.action

  // Split detail on newlines for readable paragraphs
  const lines = (data.detail ?? '').split('\n').filter(Boolean)

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(15,42,74,0.35)',
          zIndex: 10,
          cursor: 'pointer',
        }}
      />
      {/* Sheet */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: '#fff',
        borderRadius: '16px 16px 0 0',
        boxShadow: '0 -8px 40px rgba(0,0,0,0.2)',
        zIndex: 11,
        maxHeight: '65%',
        display: 'flex', flexDirection: 'column',
        animation: 'sheet-up 0.22s cubic-bezier(0.32,0.72,0,1)',
      }}>
        <style>{`@keyframes sheet-up{from{transform:translateY(100%)}to{transform:none}}`}</style>

        {/* Sheet handle + header */}
        <div style={{
          padding: '10px 16px 12px',
          borderBottom: `3px solid ${meta.bg}`,
          flexShrink: 0,
        }}>
          <div style={{
            width: 36, height: 4, borderRadius: 2,
            background: '#e2e8f0', margin: '0 auto 10px',
          }} />
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <div style={{
              width: 10, height: 10, borderRadius: 3,
              background: meta.bg, border: `2px solid ${meta.border}`,
              flexShrink: 0, marginTop: 4,
            }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0f2a4a', lineHeight: 1.3 }}>
                {data.label}
              </div>
              <div style={{
                display: 'inline-block', marginTop: 4,
                fontSize: 9, fontWeight: 700, color: meta.border,
                background: meta.bg + '33', border: `1px solid ${meta.border}44`,
                padding: '2px 7px', borderRadius: 20,
                textTransform: 'uppercase', letterSpacing: '0.07em',
              }}>
                {meta.label}
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                background: '#f1f5f9', border: 'none', cursor: 'pointer',
                width: 28, height: 28, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, color: '#64748b', flexShrink: 0,
              }}
            >×</button>
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ overflowY: 'auto', padding: '14px 16px 24px' }}>
          {lines.map((line, i) => {
            const isBullet = line.startsWith('•') || line.startsWith('-')
            return (
              <div key={i} style={{
                fontSize: 13, color: '#334155', lineHeight: 1.65,
                marginBottom: isBullet ? 4 : 10,
                paddingLeft: isBullet ? 0 : 0,
              }}>
                {line}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

// ── Inner viewer (inside ReactFlowProvider) ───────────────────────────────────
function FlowchartViewerInner({ flowchart, onBack }: Props) {
  const [activeNode, setActiveNode] = useState<GPOsNodeData | null>(null)

  // Apply dagre layout once per flowchart
  const laidOutNodes = useMemo(
    () => applyDagreLayout(flowchart.nodes, flowchart.edges),
    [flowchart.id] // eslint-disable-line react-hooks/exhaustive-deps
  )

  const nodes = laidOutNodes.map(n => ({ ...n, type: 'gpos' }))

  const edges: Edge[] = flowchart.edges.map(e => ({
    ...e,
    type: 'smoothstep' as const,
    animated: e.animated !== false,
    style: {
      strokeWidth: 3,
      stroke: '#64748b',
      ...(e.style ?? {}),
    },
    markerEnd: { type: 'arrowclosed' as const, color: '#64748b', width: 18, height: 18 },
    labelStyle: { fontSize: 11, fontWeight: 700, fill: '#334155' },
    labelBgStyle: { fill: '#f8fafc', fillOpacity: 0.95 },
    labelBgPadding: [5, 7] as [number, number],
    labelBgBorderRadius: 6,
  }))

  // Listen for node tap events from GPOsNode
  useEffect(() => {
    function handler(e: Event) {
      setActiveNode((e as CustomEvent<GPOsNodeData>).detail)
    }
    window.addEventListener('gpos-node-detail', handler)
    return () => window.removeEventListener('gpos-node-detail', handler)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f8fafc' }}>

      {/* ── Header ── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '9px 14px',
        background: '#fff',
        borderBottom: '1px solid #dde6f0',
        flexShrink: 0,
      }}>
        <button
          onClick={onBack}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            background: 'none', border: '1.5px solid #dde6f0', cursor: 'pointer',
            fontSize: 13, fontWeight: 600, color: '#2563a8',
            padding: '5px 11px', borderRadius: 8,
            transition: 'background 0.15s, border-color 0.15s',
            flexShrink: 0,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#eef4fb'; e.currentTarget.style.borderColor = '#93c5fd' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none';    e.currentTarget.style.borderColor = '#dde6f0' }}
        >
          ← Back
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 13.5, fontWeight: 700, color: '#0f2a4a',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {flowchart.title}
          </div>
          {flowchart.lastReviewed && (
            <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 1 }}>
              Reviewed {flowchart.lastReviewed} · NICE / BSG
            </div>
          )}
        </div>
      </div>

      {/* ── Mobile hint strip ── */}
      <div style={{
        background: '#f0f7ff',
        borderBottom: '1px solid #bfdbfe',
        padding: '5px 14px',
        fontSize: 11, color: '#3b6fd4', flexShrink: 0,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <span style={{ fontSize: 13 }}>👆</span>
        <span>Tap a node for details · Drag to pan · Pinch to zoom</span>
      </div>

      {/* ── Canvas ── */}
      <div style={{ flex: 1, position: 'relative' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          defaultViewport={{ x: 30, y: 30, zoom: 0.85 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={true}
          zoomOnScroll={false}
          zoomOnPinch={true}
          panOnScroll={false}
          panOnDrag={true}
          minZoom={0.15}
          maxZoom={2.5}
          style={{ background: '#f8fafc' }}
        >
          <Background variant={BackgroundVariant.Dots} gap={22} size={1} color="#dde6f0" />
          <Controls
            showInteractive={false}
            style={{ bottom: 16, right: 12 }}
          />
        </ReactFlow>

        {/* Bottom sheet overlay — lives inside the relative container */}
        {activeNode && (
          <DetailSheet data={activeNode} onClose={() => setActiveNode(null)} />
        )}
      </div>

      {/* ── Legend strip ── */}
      <div style={{
        display: 'flex', gap: 10, padding: '7px 14px',
        background: '#fff', borderTop: '1px solid #dde6f0',
        flexShrink: 0, overflowX: 'auto', scrollbarWidth: 'none',
        alignItems: 'center',
      }}>
        {(Object.entries(NODE_VARIANT_META) as [keyof typeof NODE_VARIANT_META, (typeof NODE_VARIANT_META)[keyof typeof NODE_VARIANT_META]][]).map(([key, m]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
            <div style={{
              width: 11, height: 11, borderRadius: 3,
              background: m.bg, border: `2px solid ${m.border}`,
              flexShrink: 0,
            }} />
            <span style={{ fontSize: 10, color: '#64748b', fontWeight: 500, whiteSpace: 'nowrap' }}>
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Exported wrapper ──────────────────────────────────────────────────────────
export default function FlowchartViewer(props: Props) {
  return (
    <ReactFlowProvider>
      <FlowchartViewerInner {...props} />
    </ReactFlowProvider>
  )
}

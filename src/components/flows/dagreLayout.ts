import dagre from '@dagrejs/dagre'
import type { Node, Edge } from '@xyflow/react'

const NODE_WIDTH  = 240
const NODE_HEIGHT = 60

export function applyDagreLayout<T extends Record<string, unknown>>(
  nodes: Node<T>[],
  edges: Edge[],
  direction: 'TB' | 'LR' = 'TB',
): Node<T>[] {
  const g = new dagre.graphlib.Graph()
  g.setDefaultEdgeLabel(() => ({}))
  g.setGraph({
    rankdir: direction,
    ranksep: 90,   // vertical gap between ranks
    nodesep: 48,   // horizontal gap between nodes on the same rank
    marginx: 30,
    marginy: 30,
    edgesep: 20,
  })

  nodes.forEach(n => {
    g.setNode(n.id, { width: NODE_WIDTH, height: NODE_HEIGHT })
  })
  edges.forEach(e => {
    g.setEdge(e.source, e.target)
  })

  dagre.layout(g)

  return nodes.map(n => {
    const pos = g.node(n.id)
    return {
      ...n,
      position: {
        x: pos.x - NODE_WIDTH  / 2,
        y: pos.y - NODE_HEIGHT / 2,
      },
    }
  })
}

import { useState, useRef, useEffect, useCallback } from 'react'
import { streamAskQuery, generateFollowUps } from '../lib/askService'
import type { SourceNote } from '../lib/askService'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Message {
  id: string
  role: 'user' | 'assistant'
  text: string
  streaming?: boolean
  sources?: SourceNote[]
  followUps?: string[]
  error?: boolean
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const NAVY = '#1a365d'
const QUICK_STARTS = [
  'Anaemia workup in a 45yr old man',
  'AF — when to anticoagulate?',
  'ADHD referral threshold local',
  'Sore throat — antibiotic criteria',
  'Depression — first line treatment',
]

function uid() {
  return Math.random().toString(36).slice(2)
}

// ---------------------------------------------------------------------------
// Small sub-components
// ---------------------------------------------------------------------------
function SourcePill({ note }: { note: SourceNote }) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('navigate-note', { detail: note.id }))
  }
  return (
    <button
      onClick={handleClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        background: '#e8f0fe',
        border: '1px solid #c5d5f5',
        borderRadius: 20,
        padding: '2px 10px',
        fontSize: 11,
        color: '#2b5cb8',
        fontWeight: 600,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background 0.12s',
      }}
      onMouseOver={e => (e.currentTarget.style.background = '#d1e3ff')}
      onMouseOut={e => (e.currentTarget.style.background = '#e8f0fe')}
    >
      <span style={{ fontSize: 10 }}>📄</span>
      {note.title}
    </button>
  )
}

function FollowUpChip({ text, onSelect }: { text: string; onSelect: (t: string) => void }) {
  return (
    <button
      onClick={() => onSelect(text)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: '#fff',
        border: `1.5px solid ${NAVY}`,
        borderRadius: 20,
        padding: '4px 12px',
        fontSize: 12,
        color: NAVY,
        fontWeight: 500,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background 0.12s',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
      onMouseOver={e => (e.currentTarget.style.background = '#f0f5ff')}
      onMouseOut={e => (e.currentTarget.style.background = '#fff')}
    >
      {text}
    </button>
  )
}

// Typing dots indicator
function TypingDots() {
  return (
    <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center', padding: '2px 0' }}>
      {[0, 1, 2].map(i => (
        <span
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            backgroundColor: '#94a3b8',
            display: 'inline-block',
            animation: 'gpDot 1.2s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </span>
  )
}

// Render assistant message text with basic markdown-ish formatting
function MessageText({ text, streaming }: { text: string; streaming?: boolean }) {
  if (!text && streaming) return <TypingDots />

  // Split on newlines to render line by line
  const lines = text.split('\n')
  return (
    <div style={{ lineHeight: 1.55, fontSize: 14 }}>
      {lines.map((line, i) => {
        const trimmed = line.trim()
        if (!trimmed) return <div key={i} style={{ height: 6 }} />
        // Bold if starts with ### or ** wrapping
        if (trimmed.startsWith('### ')) {
          return <div key={i} style={{ fontWeight: 700, marginTop: 6 }}>{trimmed.slice(4)}</div>
        }
        if (trimmed.startsWith('## ')) {
          return <div key={i} style={{ fontWeight: 700, fontSize: 15, marginTop: 8 }}>{trimmed.slice(3)}</div>
        }
        if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
          return (
            <div key={i} style={{ display: 'flex', gap: 6, marginTop: 2 }}>
              <span style={{ color: '#64748b', flexShrink: 0, marginTop: 1 }}>•</span>
              <span>{formatInline(trimmed.slice(2))}</span>
            </div>
          )
        }
        return <div key={i} style={{ marginTop: i === 0 ? 0 : 4 }}>{formatInline(line)}</div>
      })}
      {streaming && text && <span style={{ opacity: 0.4 }}>▋</span>}
    </div>
  )
}

// Inline bold via **...**
function formatInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  if (parts.length === 1) return text
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**')
          ? <strong key={i}>{p.slice(2, -2)}</strong>
          : <span key={i}>{p}</span>
      )}
    </>
  )
}

// ---------------------------------------------------------------------------
// Main AskTab component
// ---------------------------------------------------------------------------
export default function AskTab() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const abortRef = useRef<boolean>(false)

  // Detect mobile for bottom padding
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const h = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', h)
    return () => mq.removeEventListener('change', h)
  }, [])

  // Auto-scroll to bottom as tokens arrive
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [messages])

  const submit = useCallback(async (query: string) => {
    const q = query.trim()
    if (!q || isStreaming) return

    setInput('')
    setIsStreaming(true)
    abortRef.current = false

    const userMsg: Message = { id: uid(), role: 'user', text: q }
    const assistantId = uid()
    const assistantMsg: Message = { id: assistantId, role: 'assistant', text: '', streaming: true }

    setMessages(prev => [...prev, userMsg, assistantMsg])

    let fullText = ''

    await streamAskQuery(q, {
      onToken: (token) => {
        if (abortRef.current) return
        fullText += token
        setMessages(prev =>
          prev.map(m => m.id === assistantId ? { ...m, text: fullText } : m)
        )
      },
      onDone: async (sources) => {
        setMessages(prev =>
          prev.map(m =>
            m.id === assistantId
              ? { ...m, text: fullText, streaming: false, sources }
              : m
          )
        )
        setIsStreaming(false)

        // Generate follow-ups in background
        const followUps = await generateFollowUps(q, fullText)
        if (followUps.length > 0) {
          setMessages(prev =>
            prev.map(m =>
              m.id === assistantId ? { ...m, followUps } : m
            )
          )
        }
      },
      onError: (msg) => {
        setMessages(prev =>
          prev.map(m =>
            m.id === assistantId
              ? { ...m, text: msg, streaming: false, error: true }
              : m
          )
        )
        setIsStreaming(false)
      },
    })
  }, [isStreaming])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit(input)
    }
  }

  const handleClear = () => {
    setMessages([])
    setInput('')
    abortRef.current = true
    setIsStreaming(false)
  }

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  const inputBarHeight = 64
  const bottomNavHeight = isMobile ? 62 : 0

  return (
    <>
      {/* Keyframe for dots animation */}
      <style>{`
        @keyframes gpDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#f7f9fb',
        position: 'relative',
      }}>

        {/* ---- Disclaimer bar ---- */}
        <div style={{
          padding: '6px 16px',
          backgroundColor: '#fffbeb',
          borderBottom: '1px solid #fde68a',
          fontSize: 11,
          color: '#92400e',
          textAlign: 'center',
          flexShrink: 0,
        }}>
          Based on GP OS content only. Always apply clinical judgement.
        </div>

        {/* ---- Scrollable message area ---- */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          paddingBottom: inputBarHeight + bottomNavHeight + 8,
          paddingTop: 12,
        }}>

          {/* Empty state — quick start prompts */}
          {messages.length === 0 && (
            <div style={{ padding: '24px 16px' }}>
              <div style={{
                textAlign: 'center',
                marginBottom: 24,
              }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>💬</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: NAVY }}>Ask GP OS</div>
                <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>
                  Clinical questions answered using your reference notes
                </div>
              </div>

              <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
                Quick start
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {QUICK_STARTS.map(q => (
                  <button
                    key={q}
                    onClick={() => submit(q)}
                    style={{
                      textAlign: 'left',
                      background: '#fff',
                      border: '1px solid #dde6f0',
                      borderRadius: 12,
                      padding: '10px 14px',
                      fontSize: 14,
                      color: NAVY,
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'background 0.12s, border-color 0.12s',
                      boxShadow: '0 1px 3px rgba(26,54,93,0.06)',
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.background = '#f0f5ff'
                      e.currentTarget.style.borderColor = '#b3c8f0'
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.background = '#fff'
                      e.currentTarget.style.borderColor = '#dde6f0'
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map(msg => (
            <div key={msg.id} style={{ padding: '4px 12px' }}>

              {msg.role === 'user' ? (
                /* User bubble — right aligned */
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 4 }}>
                  <div style={{
                    backgroundColor: NAVY,
                    color: '#fff',
                    borderRadius: '18px 18px 4px 18px',
                    padding: '10px 14px',
                    maxWidth: '78%',
                    fontSize: 14,
                    lineHeight: 1.45,
                    boxShadow: '0 1px 4px rgba(26,54,93,0.18)',
                  }}>
                    {msg.text}
                  </div>
                </div>
              ) : (
                /* Assistant bubble — left aligned */
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 4 }}>
                  {/* GP OS label */}
                  <div style={{ fontSize: 10, color: '#94a3b8', fontWeight: 600, marginLeft: 2, marginBottom: 3, letterSpacing: '0.04em' }}>
                    GP OS
                  </div>

                  <div style={{
                    backgroundColor: msg.error ? '#fff5f5' : '#fff',
                    color: msg.error ? '#c0392b' : '#1e293b',
                    borderRadius: '4px 18px 18px 18px',
                    padding: '10px 14px',
                    maxWidth: '86%',
                    boxShadow: '0 1px 4px rgba(26,54,93,0.08)',
                    border: msg.error ? '1px solid #fecaca' : '1px solid #e2ecf7',
                  }}>
                    <MessageText text={msg.text} streaming={msg.streaming} />
                  </div>

                  {/* Source pills */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 5,
                      marginTop: 6,
                      maxWidth: '86%',
                    }}>
                      <span style={{ fontSize: 10, color: '#94a3b8', alignSelf: 'center' }}>From:</span>
                      {msg.sources.map(s => <SourcePill key={s.id} note={s} />)}
                    </div>
                  )}

                  {/* Follow-up chips */}
                  {msg.followUps && msg.followUps.length > 0 && (
                    <div style={{ marginTop: 8, maxWidth: '86%' }}>
                      <div style={{ fontSize: 10, color: '#94a3b8', marginBottom: 5, fontWeight: 600 }}>
                        Follow-up
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'flex-start' }}>
                        {msg.followUps.map(f => (
                          <FollowUpChip key={f} text={f} onSelect={submit} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          <div ref={bottomRef} style={{ height: 4 }} />
        </div>

        {/* ---- Input bar ---- */}
        <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: bottomNavHeight,
          backgroundColor: '#fff',
          borderTop: '1px solid #dde6f0',
          padding: '8px 12px',
          paddingBottom: isMobile ? 10 : 8,
          display: 'flex',
          alignItems: 'flex-end',
          gap: 8,
          boxShadow: '0 -2px 12px rgba(26,54,93,0.07)',
          zIndex: 10,
        }}>
          {/* Clear button */}
          {messages.length > 0 && (
            <button
              onClick={handleClear}
              title="Clear chat"
              style={{
                flexShrink: 0,
                width: 34,
                height: 34,
                borderRadius: '50%',
                border: '1px solid #e2ecf7',
                background: '#f7f9fb',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                color: '#64748b',
                alignSelf: 'flex-end',
                marginBottom: 2,
              }}
            >
              ✕
            </button>
          )}

          {/* Text input */}
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask GP OS..."
            rows={1}
            style={{
              flex: 1,
              border: '1.5px solid #dde6f0',
              borderRadius: 20,
              padding: '9px 14px',
              fontSize: 15,
              fontFamily: 'inherit',
              resize: 'none',
              outline: 'none',
              lineHeight: 1.4,
              maxHeight: 100,
              overflowY: 'auto',
              color: '#1e293b',
              background: '#f7f9fb',
              transition: 'border-color 0.15s',
            }}
            onFocus={e => (e.currentTarget.style.borderColor = NAVY)}
            onBlur={e => (e.currentTarget.style.borderColor = '#dde6f0')}
            disabled={isStreaming}
          />

          {/* Send button */}
          <button
            onClick={() => submit(input)}
            disabled={!input.trim() || isStreaming}
            style={{
              flexShrink: 0,
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: 'none',
              background: !input.trim() || isStreaming ? '#cbd5e1' : NAVY,
              color: '#fff',
              cursor: !input.trim() || isStreaming ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 17,
              alignSelf: 'flex-end',
              transition: 'background 0.15s',
              marginBottom: 1,
            }}
          >
            ↑
          </button>
        </div>
      </div>
    </>
  )
}

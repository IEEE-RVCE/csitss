'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Calendar, CheckCircle2, Clock, Circle, Award, Dot } from 'lucide-react'

// ── helpers ──────────────────────────────────────────────────────────────────

function parseDate(raw: string): Date | null {
  const cleaned = raw.replace(/(\d+)(st|nd|rd|th)/gi, '$1')
  const d = new Date(cleaned)
  return isNaN(d.getTime()) ? null : d
}

type Status = 'done' | 'current' | 'upcoming'

function getStatus(dateStr: string, today: Date): Status {
  const d = parseDate(dateStr)
  if (!d) return 'upcoming'
  if (d < today) return 'done'
  const diff = d.getTime() - today.getTime()
  const days = diff / (1000 * 60 * 60 * 24)
  if (days <= 30) return 'current'
  return 'upcoming'
}

function daysUntil(dateStr: string, today: Date): number | null {
  const d = parseDate(dateStr)
  if (!d) return null
  return Math.round((d.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

// Wraps ordinal suffixes in <sup> tags
function formatDate(raw: string): React.ReactNode {
  const parts = raw.split(/(\d+)(st|nd|rd|th)/gi)
  return (
    <>
      {parts.map((part, i) => {
        if (/^(st|nd|rd|th)$/i.test(part)) {
          return <sup key={i}>{part}</sup>
        }
        return part
      })}
    </>
  )
}

// ── data ─────────────────────────────────────────────────────────────────────

const timelineData = [
  { label: 'Submission of Full-length Manuscript', sublabel: 'Opens from', date: '16th April 2026' },
  { label: 'Last Date to Submit Full-length Manuscript', sublabel: null, date: '1st July 2026', extended: '14th June 2026' },
  { label: 'Notification of Acceptance', sublabel: null, date: '14th August 2026' },
  { label: 'Early Bird Registration', sublabel: 'Opens from', date: '20th August 2026' },
  { label: 'Early Bird Registration Ends', sublabel: null, date: '05th September 2026' },
  { label: 'Last Date for Registration of Paper', sublabel: null, date: '26th September 2026' },
  { label: 'Camera-ready Manuscript & Copyright Form', sublabel: 'Submission deadline', date: '28th September 2026' },
  { label: 'Last Date for Registration of Ph.D. Thesis', sublabel: null, date: '30th September 2026' },
  { label: 'Best PhD Thesis Presentation', sublabel: null, date: '29th October 2026' },
  { label: 'Conference Dates', sublabel: null, date: '30th and 31st October 2026', isHighlight: true },
]

const awards = [
  'Best PhD Thesis Award (single-page synopsis to be submitted as per the submission dates)',
  'Best Research Paper Award for paper presented by Faculty and Student',
]

// ── status config — solid, clearly lifted surfaces ───────────────────────────

const statusConfig = {
  done: {
    // Distinct teal-tinted surface — clearly above the navy bg
    cardBg:     'bg-[#0f2330]',
    border:     'border-cyan-400/30',
    shadow:     'shadow-[0_2px_16px_rgba(0,0,0,0.35)]',
    labelColor: 'text-slate-300',
    dateColor:  'text-cyan-300',
    sublabel:   'text-cyan-500/70',
    badge:      'bg-cyan-400/15 text-cyan-300 border border-cyan-400/20',
    dotBg:      'bg-[#0a2535] border-cyan-400/40',
    dotIcon:    'text-cyan-400',
  },
  current: {
    // Strong violet-tinted surface with glow
    cardBg:     'bg-[#180f38]',
    border:     'border-violet-400/50',
    shadow:     'shadow-[0_4px_28px_rgba(139,92,246,0.22)]',
    labelColor: 'text-white',
    dateColor:  'text-violet-200',
    sublabel:   'text-violet-400/80',
    badge:      'bg-violet-400/15 text-violet-200 border border-violet-400/30',
    dotBg:      'bg-[#1a0f40] border-violet-400/60',
    dotIcon:    'text-violet-300',
  },
  upcoming: {
    // Lifted slate surface — solidly above bg, clearly readable
    cardBg:     'bg-[#162032]',
    border:     'border-slate-500/30',
    shadow:     'shadow-[0_2px_12px_rgba(0,0,0,0.3)]',
    labelColor: 'text-slate-200',
    dateColor:  'text-slate-300',
    sublabel:   'text-slate-500',
    badge:      'bg-slate-500/15 text-slate-300 border border-slate-500/25',
    dotBg:      'bg-[#162032] border-slate-500/40',
    dotIcon:    'text-slate-400',
  },
}

// ── component ─────────────────────────────────────────────────────────────────

const CustomTimeline = () => {
  const today = new Date()
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [revealedItems, setRevealedItems] = useState<boolean[]>(
    Array(timelineData.length).fill(false)
  )

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.05 }
    )
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    timelineData.forEach((_, i) => {
      setTimeout(() => {
        setRevealedItems((prev) => { const next = [...prev]; next[i] = true; return next })
      }, i * 90)
    })
  }, [visible])

  return (
    <div ref={containerRef} className="w-full px-4 py-14" id="timeline">
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* ── Section header ── */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Calendar size={13} />
            Important Dates
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight mb-3 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Conference Timeline
          </h2>
        </div>

        {/* ── Timeline items ── */}
        <div className="relative">
          {/* Vertical track — more visible */}
          <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-gradient-to-b from-cyan-400/60 via-slate-500/50 to-slate-600/20 rounded-full" />

          <div className="space-y-3">
            {timelineData.map((item, index) => {
              const status = getStatus(item.date, today)
              const cfg = statusConfig[status]
              const days = daysUntil(item.date, today)
              const isCurrent = status === 'current'
              const revealed = revealedItems[index]

              // Highlight override
              const cardBg    = item.isHighlight ? 'bg-[#251a08]' : cfg.cardBg
              const border    = item.isHighlight ? 'border-amber-400/40' : cfg.border
              const shadow    = item.isHighlight ? 'shadow-[0_4px_24px_rgba(251,191,36,0.15)]' : cfg.shadow
              const labelCol  = item.isHighlight ? 'text-amber-200 font-bold' : cfg.labelColor
              const dateCol   = item.isHighlight ? 'text-amber-300' : cfg.dateColor
              const badgeCls  = item.isHighlight ? 'bg-amber-400/15 text-amber-300 border border-amber-400/25' : cfg.badge

              return (
                <div
                  key={index}
                  className={`relative pl-12 transition-all duration-500 ${revealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                >
                  {/* ── Dot on track ── */}
                  <div className="absolute left-0 top-3.5 flex items-center justify-center">
                    {status === 'done' ? (
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${cfg.dotBg}`}>
                        <CheckCircle2 size={18} className={cfg.dotIcon} strokeWidth={2} />
                      </div>
                    ) : isCurrent ? (
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${cfg.dotBg} relative`}>
                        <span className="absolute inset-0 rounded-full animate-ping bg-violet-400/25" />
                        <Clock size={17} className={cfg.dotIcon} strokeWidth={2.5} />
                      </div>
                    ) : (
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${cfg.dotBg}`}>
                        <Circle size={14} className={cfg.dotIcon} strokeWidth={2} />
                      </div>
                    )}
                  </div>

                  {/* ── Card ── */}
                  <div className={`rounded-2xl border px-5 py-4 transition-all duration-300 ${cardBg} ${border} ${shadow}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">

                      {/* Left: label */}
                      <div className="flex-1 min-w-0">
                        {item.sublabel && (
                          <span className={`block text-[10px] font-bold tracking-widest uppercase mb-0.5 ${cfg.sublabel}`}>
                            {item.sublabel}
                          </span>
                        )}
                        <p className={`text-sm font-semibold leading-snug ${labelCol}`}>
                          {item.label}
                        </p>
                      </div>

                      {/* Right: date + badge */}
                      <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0 mt-1 sm:mt-0">
                        <span className={`text-sm font-bold tracking-wide ${dateCol}`}>
                          {item.extended && (
                            <span className="line-through text-slate-600 mr-1.5 font-normal text-xs">
                              {formatDate(item.extended)}
                            </span>
                          )}
                          {formatDate(item.date)}
                        </span>

                        <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeCls}`}>
                          <Dot size={10} className="shrink-0" />
                          {status === 'done'
                            ? 'Completed'
                            : isCurrent && days !== null
                              ? days <= 0 ? 'Today' : `In ${days} day${days === 1 ? '' : 's'}`
                              : 'Upcoming'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Awards section ── */}
        <div className={`mt-10 rounded-2xl border border-amber-400/25 bg-[#1e1508] px-6 py-5 shadow-[0_4px_24px_rgba(251,191,36,0.08)] transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center">
              <Award size={16} className="text-amber-400" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-amber-400">
                Recognition
              </p>
              <h3 className="text-sm font-bold text-white">Awards — CSITSS 2026</h3>
            </div>
          </div>
          <p className="text-xs text-amber-300/60 mb-3 font-medium">
            The below awards will be conferred by CSITSS‑2026
          </p>
          <ul className="space-y-2.5">
            {awards.map((award, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 size={15} className="text-amber-400 mt-0.5 shrink-0" />
                {award}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default CustomTimeline

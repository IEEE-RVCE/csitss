'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Calendar, CheckCircle2, Clock, Circle, Award, Dot } from 'lucide-react'

// ── helpers ──────────────────────────────────────────────────────────────────

/** Parse a date string like "16th April 2026" → Date */
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

// ── data ─────────────────────────────────────────────────────────────────────

const timelineData = [
  {
    label: 'Submission of Full-length Manuscript',
    sublabel: 'Opens from',
    date: '16th April 2026',
  },
  {
    label: 'Last Date to Submit Full-length Manuscript',
    sublabel: null,
    date: '1st July 2026',
    extended: '14th June 2026',
  },
  {
    label: 'Notification of Acceptance',
    sublabel: null,
    date: '9th August 2026',
  },
  {
    label: 'Early Bird Registration',
    sublabel: 'Opens from',
    date: '13th August 2026',
  },
  {
    label: 'Early Bird Registration Ends',
    sublabel: null,
    date: '30th August 2026',
  },
  {
    label: 'Last Date for Registration of Paper',
    sublabel: null,
    date: '26th September 2026',
  },
  {
    label: 'Camera-ready Manuscript & Copyright Form',
    sublabel: 'Submission deadline',
    date: '26th September 2026',
  },
  {
    label: 'Last Date for Registration of Ph.D. Thesis',
    sublabel: null,
    date: '30th September 2026',
  },
  {
    label: 'Best PhD Thesis Presentation',
    sublabel: null,
    date: '29th October 2026',
  },
  {
    label: 'Conference Dates',
    sublabel: null,
    date: '30th and 31st October 2026',
    isHighlight: true,
  },
]

const awards = [
  'Best PhD Thesis Award (single-page synopsis to be submitted as per the submission dates)',
  'Best Research Paper Award for paper presented by Faculty and Student',
]

// ── status indicator helpers ──────────────────────────────────────────────────

const statusConfig = {
  done: {
    ring: 'border-cyan-500/25',
    bg: 'bg-cyan-950/30',
    dot: 'bg-cyan-500',
    text: 'text-cyan-400',
    label: 'Completed',
  },
  current: {
    ring: 'border-violet-500/40',
    bg: 'bg-violet-950/25',
    dot: 'bg-violet-500',
    text: 'text-violet-400',
    label: 'Upcoming Soon',
  },
  upcoming: {
    ring: 'border-white/[0.08]',
    bg: 'bg-[#0c1525]/60',
    dot: 'bg-slate-600',
    text: 'text-slate-500',
    label: 'Upcoming',
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
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    timelineData.forEach((_, i) => {
      setTimeout(() => {
        setRevealedItems((prev) => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, i * 90)
    })
  }, [visible])


  return (
    <div ref={containerRef} className="w-full px-4 py-14" id="timeline">
      <div
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* ── Section header ───────────────────────────────────────────── */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Calendar size={13} />
            Important Dates
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight mb-3 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
            Conference Timeline
          </h2>
          <p className="text-sm text-slate-500 max-w-md leading-relaxed">
            Key milestones for CSITSS&nbsp;2026 — Oct&nbsp;30–31, Bengaluru
          </p>
        </div>

        {/* ── Timeline items ────────────────────────────────────────────── */}
        <div className="relative">
          {/* Vertical track */}
          <div className="absolute left-[19px] top-5 bottom-5 w-px bg-gradient-to-b from-cyan-500/40 via-slate-700/40 to-slate-800/20 rounded-full" />

          <div className="space-y-3">
            {timelineData.map((item, index) => {
              const status = getStatus(item.date, today)
              const cfg = statusConfig[status]
              const days = daysUntil(item.date, today)
              const isCurrent = status === 'current'
              const revealed = revealedItems[index]

              return (
                <div
                  key={index}
                  className={`relative pl-12 transition-all duration-500 ${
                    revealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                >
                  {/* Dot on track */}
                  <div className="absolute left-0 top-3.5 flex items-center justify-center">
                    {status === 'done' ? (
                      <div className="w-10 h-10 rounded-full bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center">
                        <CheckCircle2 size={18} className="text-cyan-400" strokeWidth={2} />
                      </div>
                    ) : isCurrent ? (
                      <div className="w-10 h-10 rounded-full bg-violet-950/50 border border-violet-500/30 flex items-center justify-center relative">
                        <span className="absolute inset-0 rounded-full animate-ping bg-violet-400/20" />
                        <Clock size={16} className="text-violet-400" strokeWidth={2.5} />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#0c1525] border border-white/[0.08] flex items-center justify-center">
                        <Circle size={14} className="text-slate-600" strokeWidth={2} />
                      </div>
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`group rounded-2xl border px-5 py-4 transition-all duration-300 ${cfg.ring} ${cfg.bg} ${
                      isCurrent
                        ? 'shadow-[0_4px_24px_rgba(139,92,246,0.15)]'
                        : status === 'done'
                        ? 'shadow-[0_2px_12px_rgba(34,211,238,0.06)]'
                        : 'shadow-none'
                    } ${item.isHighlight ? '!border-amber-500/25 !bg-amber-950/20' : ''}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                      <div className="flex-1 min-w-0">
                        {item.sublabel && (
                          <span className="block text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-0.5">
                            {item.sublabel}
                          </span>
                        )}
                        <p
                          className={`text-sm font-semibold leading-snug ${
                            status === 'done'
                              ? 'text-slate-500'
                              : status === 'current'
                              ? 'text-slate-100'
                              : 'text-slate-400'
                          } ${item.isHighlight ? '!text-amber-300 font-bold' : ''}`}
                        >
                          {item.label}
                        </p>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0 mt-1 sm:mt-0">
                        <span
                          className={`text-sm font-bold ${
                            status === 'done'
                              ? 'text-slate-500'
                              : status === 'current'
                              ? 'text-violet-300'
                              : 'text-slate-400'
                          } ${item.isHighlight ? '!text-amber-300' : ''}`}
                        >
                          {item.extended && (
                            <span className="line-through text-slate-700 mr-1 font-normal text-xs">
                              {item.extended}
                            </span>
                          )}
                          {item.date}
                        </span>

                        {/* status badge */}
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            status === 'done'
                              ? 'bg-cyan-950/50 text-cyan-400'
                              : isCurrent
                              ? 'bg-violet-950/50 text-violet-400'
                              : 'bg-white/5 text-slate-500'
                          }`}
                        >
                          <Dot size={10} className="shrink-0" />
                          {status === 'done'
                            ? 'Completed'
                            : isCurrent && days !== null
                            ? days <= 0
                              ? 'Today'
                              : `In ${days} day${days === 1 ? '' : 's'}`
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

        {/* ── Awards section ────────────────────────────────────────────── */}
        <div
          className={`mt-10 rounded-2xl border border-amber-500/15 bg-gradient-to-br from-amber-950/30 to-orange-950/20 px-6 py-5 transition-all duration-700 delay-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-xl bg-amber-950/60 border border-amber-500/25 flex items-center justify-center">
              <Award size={16} className="text-amber-400" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-amber-400">
                Recognition
              </p>
              <h3 className="text-sm font-bold text-slate-100">Awards — CSITSS 2026</h3>
            </div>
          </div>
          <p className="text-xs text-amber-400/50 mb-3 font-medium">
            The below awards will be conferred by CSITSS‑2026
          </p>
          <ul className="space-y-2">
            {awards.map((award, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                <CheckCircle2 size={14} className="text-amber-400 mt-0.5 shrink-0" />
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

import React, { useEffect, useRef, useState } from 'react'
import { new2026 as imgs, Lightbox } from './Gallery'

const n = imgs.length

const Arrow = ({ dir, onClick }: { dir: 'prev' | 'next'; onClick: () => void }) => (
  <button
    onClick={onClick}
    aria-label={dir === 'prev' ? 'Previous photo' : 'Next photo'}
    className={`absolute top-1/2 -translate-y-1/2 ${dir === 'prev' ? 'left-3' : 'right-3'} z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-colors`}
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d={dir === 'prev' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
    </svg>
  </button>
)

const GlimpsesSlideshow = () => {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [full, setFull] = useState<number | null>(null)
  const [notice, setNotice] = useState(false)

  // floating "glimpses are live" notice: show after 1.5s, hide for good once the section is seen
  useEffect(() => {
    const t = setTimeout(() => setNotice(true), 1500)
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { clearTimeout(t); setNotice(false); io.disconnect() }
    }, { threshold: 0.3 })
    if (sectionRef.current) io.observe(sectionRef.current)
    return () => { clearTimeout(t); io.disconnect() }
  }, [])

  const go = (d: number) => setIdx((i) => (i + d + n) % n)

  useEffect(() => {
    if (paused || full !== null) return
    const t = setInterval(() => go(1), 4500)
    return () => clearInterval(t)
  }, [paused, full])

  // keep active thumbnail visible without scrolling the page
  useEffect(() => {
    const strip = stripRef.current
    const el = strip?.children[idx] as HTMLElement | undefined
    if (strip && el) strip.scrollTo({ left: el.offsetLeft - strip.clientWidth / 2 + el.clientWidth / 2, behavior: 'smooth' })
  }, [idx])

  return (
    <section ref={sectionRef} className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 lg:px-8 scroll-mt-24" id="glimpses">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-3">
          Event Highlights
        </div>
        {/* leading + pb so bg-clip-text doesn't chop the descenders of "g"/"p" */}
        <h2 className="font-serif italic text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.25] pb-2 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          Glimpses of CSITSS 2026
        </h2>
      </div>

      <div
        className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_8px_40px_rgba(34,211,238,0.08)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
          touchX.current = null
        }}
      >
        {imgs.map(({ src }, i) =>
          // render only current + neighbours so the crossfade has something to fade from
          [idx, (idx + 1) % n, (idx - 1 + n) % n].includes(i) ? (
            <img
              key={src}
              src={src}
              alt={`CSITSS 2026 photo ${i + 1}`}
              draggable={false}
              onClick={() => setFull(i)}
              className={`absolute cursor-zoom-in inset-0 w-full h-full object-contain select-none transition-opacity duration-700 ${
                i === idx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : null,
        )}
        <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/50 text-white/80 text-[11px] font-medium pointer-events-none">
          Click to view full screen
        </div>
        <Arrow dir="prev" onClick={() => go(-1)} />
        <Arrow dir="next" onClick={() => go(1)} />
        <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/50 text-white/90 text-[11px] font-semibold tracking-widest">
          {idx + 1} / {n}
        </div>
      </div>

      <div ref={stripRef} className="mt-3 flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {imgs.map(({ thumb }, i) => (
          <button
            key={thumb}
            onClick={() => setIdx(i)}
            aria-label={`Show photo ${i + 1}`}
            className={`flex-shrink-0 w-20 sm:w-24 aspect-[3/2] rounded-lg overflow-hidden border-2 transition-all ${
              i === idx ? 'border-cyan-400 opacity-100' : 'border-transparent opacity-50 hover:opacity-90'
            }`}
          >
            <img src={thumb} loading="lazy" alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {full !== null && (
        <Lightbox
          imgs={imgs}
          index={full}
          onClose={() => setFull(null)}
          onPrev={() => setFull((i) => ((i ?? 0) - 1 + n) % n)}
          onNext={() => setFull((i) => ((i ?? 0) + 1) % n)}
        />
      )}

      {notice && (
        <div className="fixed bottom-5 right-5 z-[90] w-[min(340px,calc(100vw-2.5rem))] overflow-hidden rounded-2xl bg-slate-900/95 border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.25)] backdrop-blur-md">
          <div className="relative">
            <img src={imgs[0].thumb} alt="" className="w-full aspect-[3/2] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
            <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-extrabold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
              </span>
              New
            </span>
            <button
              onClick={() => setNotice(false)}
              aria-label="Dismiss"
              className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
          <div className="px-4 pb-4 -mt-6 relative">
            <p className="font-serif text-xl font-semibold text-white leading-tight">Glimpses of CSITSS 2026</p>
            <p className="text-sm text-slate-400 mt-1 mb-3">Photos from the event are now live.</p>
            <a
              href="#glimpses"
              onClick={() => setNotice(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white text-sm font-semibold shadow-[0_4px_20px_rgba(34,211,238,0.3)] transition-colors"
            >
              Check it out
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default GlimpsesSlideshow

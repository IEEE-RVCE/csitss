'use client'
import React, { useState, useEffect, useCallback } from 'react'

export type Img = { src: string; thumb: string; tag?: string }

const TAG_2026 = 'CSITSS 2026'
export const new2026: Img[] = Array.from({ length: 41 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return { src: `/gallery/2026/${n}.webp`, thumb: `/gallery/2026/thumbs/${n}.webp`, tag: TAG_2026 }
})
const previous: Img[] = [1, 3, 5, 8, 10, 15, 18, 21, 24].map((n) => ({
  src: `/gallery/image_${n}.webp`,
  thumb: `/gallery/image_${n}.webp`,
}))
const imgLinks: Img[] = [...new2026, ...previous]

const TagBadge = ({ tag }: { tag?: string }) =>
  tag ? (
    <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-cyan-400/90 text-black text-[10px] font-bold tracking-widest uppercase pointer-events-none">
      {tag}
    </span>
  ) : null

// ── Lightbox ──────────────────────────────────────────────────────────────────
export const Lightbox = ({
  imgs,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  imgs: Img[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    // z-[200] sits above the navbar (z-[100])
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-xs font-semibold tracking-widest select-none pointer-events-none">
        {index + 1} / {imgs.length}
      </div>

      {/* Close */}
      <button
        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onClose() }}
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main image */}
      <div
        className="relative flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={index}
          src={imgs[index].src}
          alt={`Gallery ${index + 1}`}
          className="max-w-[88vw] max-h-[82vh] object-contain rounded-2xl shadow-2xl select-none"
          draggable={false}
        />
      </div>

      <div className="absolute top-5 left-5"><TagBadge tag={imgs[index].tag} /></div>
    </div>
  )
}

// ── Gallery ───────────────────────────────────────────────────────────────────
const Gallery = () => {
  const [heroIndex, setHeroIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  // Auto-cycle hero every 4 s
  useEffect(() => {
    if (paused || lightboxIndex !== null) return
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % imgLinks.length)
    }, 4000)
    return () => clearInterval(t)
  }, [paused, lightboxIndex])

  const openLightbox = (idx: number) => { setPaused(true); setLightboxIndex(idx) }
  const closeLightbox = useCallback(() => { setLightboxIndex(null); setPaused(false) }, [])
  const prevLight = useCallback(() =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + imgLinks.length) % imgLinks.length)), [])
  const nextLight = useCallback(() =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % imgLinks.length)), [])

  const n = imgLinks.length
  const isNear = (i: number) => [heroIndex, (heroIndex + 1) % n, (heroIndex - 1 + n) % n].includes(i)

  // 6 tiles = all images except current hero
  const gridImages = imgLinks
    .map((img, i) => ({ ...img, i }))
    .filter(({ i }) => i !== heroIndex)
    .slice(0, 6)

  return (
    <div className="w-full py-12 px-0" id="gallery">

      {/* Section header */}
      <div className="mb-8 px-4 sm:px-0">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-3">
          Previous Editions
        </div>
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight mb-3 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Moments from CSITSS
          </h2>
          <button
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors group"
            onClick={() => openLightbox(heroIndex)}
          >
            View full gallery
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Desktop grid: explicit CSS template ── */}
      {/*
        gridTemplateColumns: 2.2fr 1fr 1fr  →  hero + 2 cols of tiles
        gridTemplateRows:    repeat(3, 1fr)   →  3 rows → 6 tiles total
        Hero spans rows 1-3 in column 1.
        6 tiles auto-place into cols 2-3, rows 1-3.
      */}
      <div
        className="hidden md:grid gap-3"
        style={{
          gridTemplateColumns: '2.2fr 1fr 1fr',
          gridTemplateRows: 'repeat(3, 1fr)',
          height: 'clamp(440px, 46vw, 620px)',
        }}
      >
        {/* Hero */}
        <div
          className="relative overflow-hidden rounded-2xl cursor-pointer group"
          style={{ gridColumn: '1', gridRow: '1 / 4' }}
          onClick={() => openLightbox(heroIndex)}
        >
          {imgLinks.map(({ src }, i) => isNear(i) && (
            <img
              key={src}
              src={src}
              alt={`Gallery ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                i === heroIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              } group-hover:scale-[1.04]`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Play/pause */}
          <button
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setPaused((p) => !p) }}
            aria-label={paused ? 'Play' : 'Pause'}
          >
            {paused ? (
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
            )}
          </button>

          <TagBadge tag={imgLinks[heroIndex].tag} />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/80 text-[11px] font-semibold tracking-widest z-10 pointer-events-none">
            {heroIndex + 1} / {n}
          </div>
        </div>

        {/* 6 tiles — auto-placed into cols 2-3 × rows 1-3 */}
        {gridImages.map(({ src, thumb, tag, i }, k) => (
          <div
            key={src}
            className="relative overflow-hidden rounded-2xl cursor-pointer group"
            onClick={() => openLightbox(i)}
          >
            <img
              src={thumb}
              loading="lazy"
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <TagBadge tag={tag} />
            {k === gridImages.length - 1 && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/55 text-white text-lg font-semibold">
                +{n - 7} more
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* ── Mobile: stacked hero + thumbnail strip ── */}
      <div className="md:hidden">
        <div
          className="relative w-full overflow-hidden rounded-2xl cursor-pointer mb-3"
          style={{ height: 'clamp(240px, 62vw, 420px)' }}
          onClick={() => openLightbox(heroIndex)}
        >
          {imgLinks.map(({ src }, i) => isNear(i) && (
            <img
              key={src}
              src={src}
              alt={`Gallery ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === heroIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          <TagBadge tag={imgLinks[heroIndex].tag} />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {imgLinks.map(({ thumb }, i) => (
            <button
              key={thumb}
              className={`flex-shrink-0 w-24 h-[72px] rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                i === heroIndex ? 'border-[#ff7b65] scale-105' : 'border-transparent opacity-70'
              }`}
              onClick={() => { setHeroIndex(i); openLightbox(i) }}
            >
              <img src={thumb} loading="lazy" alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          imgs={imgLinks}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevLight}
          onNext={nextLight}
        />
      )}
    </div>
  )
}

export default Gallery
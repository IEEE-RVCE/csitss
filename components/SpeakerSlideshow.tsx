'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageSquare, ChevronDown } from 'lucide-react'

interface SpeakerMessage {
  id: number
  name: string
  designation: string
  institution: string
  image: string
  paragraphs: React.ReactNode[]
}

const speakers: SpeakerMessage[] = [
  {
    id: 1,
    name: 'Prof. Dr.-Ing. Martin Versen',
    designation: '',
    institution: 'Technische Hochschule Rosenheim, Germany',
    image: '/speakers/foreign/Martin_Versen.png',
    paragraphs: [
      <span key="1_1">To the IEEE CSITSS Organizers and Participants,</span>,
      <span key="1_2">
        From the Faculty of Engineering at Technische Hochschule Rosenheim — and especially from our Fluorescence Measurement Technology lab — we send our warmest regards.
      </span>,
      <span key="1_3">
        We develop real-time AI systems to classify subtle optical signals — a field deeply aligned with your themes of{' '}
        <span className="text-cyan-300 font-semibold">Sustainable Environment and Circular Economy</span>,{' '}
        <span className="text-violet-300 font-semibold">Artificial Intelligence Systems</span>, and{' '}
        <span className="text-sky-300 font-semibold">Data Analytics and Intelligent Decision Systems</span>. We&apos;re excited to exchange ideas, learn from your innovations, and build global connections that turn research into impact.
      </span>,
      <span key="1_4" className="italic">
        Looking forward to connecting, collaborating, and co-creating the future — together.
      </span>
    ]
  },
  {
    id: 2,
    name: 'Andreas Doleschel',
    designation: 'Dean of the Faculty of Engineering and Management',
    institution: 'Technische Hochschule Rosenheim, Germany',
    image: '/speakers/foreign/Andreas_Doleschel.png',
    paragraphs: [
      <span key="2_1" className="font-bold text-cyan-300">The 2026 edition of CSITSS,</span>,
      <span key="2_2">Dear organising team, dear participants, dear researchers,</span>,
      <span key="2_3">
        CSITSS is an outstanding event that brings together a wide range of stakeholders. The spirit of{' '}
        <span className="text-cyan-300 font-semibold">collaboration</span>, the exchange of{' '}
        <span className="text-violet-300 font-semibold">cutting-edge research results</span>, insights into ongoing activities, and the valuable interactions beyond the formal presentations are essential for driving innovation and progress.
      </span>,
      <span key="2_4">
        In today&apos;s increasingly complex world, collaboration is more important than ever. Bringing together researchers and industry partners, combining{' '}
        <span className="text-sky-300 font-semibold">academic ideas with practical applications</span> and innovative products, is a powerful driver for growth and{' '}
        <span className="text-cyan-300 font-semibold">technological advancement</span>.
      </span>,
      <span key="2_5">
        I am delighted to be part of this community and to share ideas and experiences with you.
      </span>
    ]
  }
]

export default function SpeakerSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = next, -1 = prev
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [hasMoreContent, setHasMoreContent] = useState(false)
  const textContainerRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Auto-play interval (6 seconds)
  useEffect(() => {
    if (!isMounted || isHovered) return

    const timer = setInterval(() => {
      handleNext()
    }, 6000)

    return () => clearInterval(timer)
  }, [currentIndex, isHovered, isMounted])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % speakers.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length)
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const checkScroll = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const container = isMobile ? bottomRowRef.current : textContainerRef.current
    if (container) {
      const hasMore = container.scrollHeight > container.clientHeight
      const isAtBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 10
      setHasMoreContent(hasMore && !isAtBottom)
    }
  }

  // Check scrolling availability on slide change or mount
  useEffect(() => {
    if (!isMounted) return

    const timer = setTimeout(checkScroll, 200)
    window.addEventListener('resize', checkScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkScroll)
    }
  }, [currentIndex, isMounted])

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const hasMore = container.scrollHeight > container.clientHeight
    const isAtBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 10
    setHasMoreContent(hasMore && !isAtBottom)
  }

  // Render static loader or placeholder during SSR to prevent hydration issues
  if (!isMounted) {
    const defaultSpeaker = speakers[0]
    return (
      <div className="h-[520px] md:h-[480px] bg-gradient-to-br from-[#0e1525] via-[#111a30] to-[#0d1828] border border-violet-400/20 shadow-[0_8px_40px_rgba(139,92,246,0.1)] rounded-3xl overflow-hidden flex flex-col relative" data-lenis-prevent>
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

        {/* Top: Name + affiliation */}
        <div className="p-4 pb-2 z-10">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-violet-400/10 border border-violet-400/20 text-[9px] font-bold tracking-widest uppercase text-violet-300 w-fit mb-1.5">
            <MessageSquare className="w-2.5 h-2.5" />
            Message from Speaker
          </div>
          <div>
            <p className="text-sm sm:text-base font-bold text-white leading-tight">{defaultSpeaker.name}</p>
            {defaultSpeaker.designation && (
              <p className="text-[11px] sm:text-xs font-semibold text-slate-400 mt-0.5 leading-snug">{defaultSpeaker.designation}</p>
            )}
            <p className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5 leading-snug">{defaultSpeaker.institution}</p>
          </div>
        </div>

        {/* Bottom: photo + message side-by-side */}
        <div className="flex flex-col md:flex-row gap-5 flex-1 overflow-y-auto md:overflow-y-hidden custom-scrollbar p-4 pt-2 z-10 relative min-h-0">
          <div className="relative w-full md:w-1/3 shrink-0 overflow-hidden rounded-xl h-[240px] md:h-auto min-h-[180px] md:min-h-[220px]">
            <img
              src={defaultSpeaker.image}
              alt={defaultSpeaker.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1525]/90 via-transparent to-transparent" />
          </div>
          <div className="flex-1 flex flex-col min-w-0 min-h-0 relative">
            <div className="relative flex-1 overflow-y-visible md:overflow-y-auto custom-scrollbar pr-1">
              <svg className="w-4 h-4 text-violet-400/25 mb-0.5" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              {defaultSpeaker.paragraphs.map((p, idx) => (
                <p key={idx} className="text-xs text-slate-300 leading-relaxed mt-1.5 text-justify">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Scroll Fade Overlay */}
        <div className="absolute bottom-5 left-0 right-0 h-10 bg-gradient-to-t from-[#0d1828] via-[#0d1828]/80 to-transparent pointer-events-none z-10" />
      </div>
    )
  }

  const activeSpeaker = speakers[currentIndex]

  // Slide/Fade variants
  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 30 : -30,
      y: 0,
    }),
    center: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        opacity: { duration: 0.4, ease: 'easeOut' as const },
        x: { duration: 0.4, ease: 'easeOut' as const },
      }
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -30 : 30,
      y: 0,
      transition: {
        opacity: { duration: 0.3, ease: 'easeIn' as const },
        x: { duration: 0.3, ease: 'easeIn' as const },
      }
    })
  }

  return (
    <div
      className="h-[520px] md:h-[480px] bg-gradient-to-br from-[#0e1525] via-[#111a30] to-[#0d1828] border border-violet-400/20 shadow-[0_8px_40px_rgba(139,92,246,0.1)] rounded-3xl overflow-hidden flex flex-col relative group/card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-lenis-prevent
    >
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Main animated area */}
      <div className="flex-1 flex flex-col relative min-h-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex-1 flex flex-col p-4 pb-8 z-10 min-h-0"
          >
            {/* Top: Name + affiliation (Full width inside transition) */}
            <div className="pb-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-violet-400/10 border border-violet-400/20 text-[9px] font-bold tracking-widest uppercase text-violet-300 w-fit mb-1.5">
                <MessageSquare className="w-2.5 h-2.5" />
                Message from Speaker
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-white leading-tight">{activeSpeaker.name}</p>
                {activeSpeaker.designation && (
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-400 mt-0.5 leading-snug">{activeSpeaker.designation}</p>
                )}
                <p className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5 leading-snug">{activeSpeaker.institution}</p>
              </div>
            </div>

            {/* Bottom: photo + message side-by-side */}
            <div
              ref={bottomRowRef}
              onScroll={handleScroll}
              className="flex flex-col md:flex-row gap-5 flex-1 overflow-y-auto md:overflow-y-hidden custom-scrollbar pt-2 relative min-h-0"
            >
              {/* Left: Speaker photo */}
              <div className="relative w-full md:w-1/3 shrink-0 overflow-hidden rounded-xl h-[240px] md:h-auto min-h-[180px] md:min-h-[220px]">
                <img
                  src={activeSpeaker.image}
                  alt={activeSpeaker.name}
                  onLoad={checkScroll}
                  className="w-full h-full object-cover object-top"
                />
                {/* gradient overlay blending into card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1525]/90 via-transparent to-transparent" />
              </div>

              {/* Right: message */}
              <div className="flex-1 flex flex-col min-w-0 min-h-0 relative">
                {/* Quote — small icon, full message */}
                <div
                  ref={textContainerRef}
                  onScroll={handleScroll}
                  className="relative flex-1 overflow-y-visible md:overflow-y-auto custom-scrollbar pr-1"
                >
                  {/* Tiny decorative quote mark */}
                  <svg className="w-4 h-4 text-violet-400/25 mb-0.5" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  {activeSpeaker.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-xs text-slate-300 leading-relaxed mt-1.5 text-justify">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Navigation Arrows (fade in on hover of card) */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/60 hover:bg-violet-500/80 border border-white/10 flex items-center justify-center text-white transition-all duration-300 z-20 opacity-0 group-hover/card:opacity-100 scale-90 group-hover/card:scale-100"
        aria-label="Previous Speaker"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/60 hover:bg-violet-500/80 border border-white/10 flex items-center justify-center text-white transition-all duration-300 z-20 opacity-0 group-hover/card:opacity-100 scale-90 group-hover/card:scale-100"
        aria-label="Next Speaker"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Pinned Scroll Fade Overlay & Down Arrow */}
      {hasMoreContent && (
        <>
          <div className="absolute bottom-5 left-0 right-0 h-10 bg-gradient-to-t from-[#0d1828] via-[#0d1828]/80 to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-5 right-4 animate-bounce pointer-events-none bg-slate-950/85 backdrop-blur-sm p-1.5 rounded-full border border-violet-400/20 text-cyan-400 z-20">
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </>
      )}

      {/* Navigation Dot Indicators */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {speakers.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-5 bg-cyan-400' : 'w-1.5 bg-slate-500/60 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.6);
        }
      `}</style>
    </div>
  )
}

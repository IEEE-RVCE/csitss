/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import Timeline from '../components/TimeLine'
import Gallery from '../components/Gallery'
import ConferenceThemes from '../components/ConferenceThemes'
import Table from '../components/table'
import { FileText, Award, Calendar, MapPin, Download, Send, ChevronRight, Earth } from 'lucide-react'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <section className="body-font m-0 px-4 md:px-8 text-slate-300 font-sans">
        {/* Main Hero Container */}
        <div className="max-w-7xl mx-auto pt-3 md:pt-4 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Left Column (Left Card) */}
          <div className="lg:col-span-7 bg-[#0c1525]/90 backdrop-blur-sm border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.4)] rounded-3xl p-4 sm:p-6 transition-all duration-300 hover:shadow-[0_12px_50px_rgba(34,211,238,0.06)] flex flex-col justify-between">
            <div>
              {/* Tag / Badge Row */}
              <div className="flex flex-wrap gap-2 mb-3">
                {/* Badge 1: 10th Edition */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-bold text-cyan-400 shadow-sm">
                  10th Edition
                </div>
                {/* Badge 2: IEEE International Conference */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 shadow-sm">
                  IEEE International Conference
                </div>
              </div>

              {/* Styled Conference Label */}
              <div className="mb-2">
                <span className="font-sans text-xs font-extrabold tracking-[0.25em] text-cyan-400 uppercase">
                  CSITSS 2026
                </span>
              </div>

              {/* Serif Title */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-[1.15] text-white tracking-tight font-medium mb-3">
                Computational Systems &amp; <br />
                Information Technology for <br />
                <span className="font-serif italic bg-gradient-to-r from-cyan-400 via-violet-400 to-sky-400 bg-clip-text text-transparent font-semibold pr-1">Sustainable Solutions.</span>
              </h1>

              {/* Highlighted Description */}
              <div className="relative border-l-2 border-cyan-400/25 pl-4 mb-3">
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
                  The 10th IEEE International Conference organised by <strong className="text-slate-100 font-semibold">RV College of Engineering</strong>.
                </p>
              </div>

              {/* Grid of Key Info Box (4 boxes) */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {/* Box 1: Conference */}
                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#0a1020]/80 border border-white/[0.06] shadow-none">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-slate-500 tracking-wider font-sans uppercase">CONFERENCE</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-100 font-sans truncate">Oct 30-31, 2026</span>
                  </div>
                </div>

                {/* Box 2: Past Editions */}
                <div className="relative flex items-center gap-3 p-2.5 rounded-2xl bg-[#0a1020]/80 border border-white/[0.06] shadow-none overflow-hidden">
                  <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Earth className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 pt-1">
                    <span className="block text-[10px] font-bold text-slate-500 tracking-wider font-sans uppercase">Past Editions</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-100 font-sans truncate">9 Successful</span>
                  </div>
                </div>

                {/* Box 3: Venue */}
                <a href="#venue" className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#0a1020]/80 border border-white/[0.06] hover:border-violet-400/20 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-violet-400/10 flex items-center justify-center text-violet-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-slate-500 tracking-wider font-sans uppercase">VENUE</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-100 font-sans truncate">RVCE, Bengaluru</span>
                  </div>
                </a>

                {/* Box 4: Indexing */}
                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#0a1020]/80 border border-white/[0.06] shadow-none">
                  <div className="w-10 h-10 rounded-full bg-sky-400/10 flex items-center justify-center text-sky-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-slate-500 tracking-wider font-sans uppercase">PUBLICATION</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-100 font-sans truncate">IEEE Xplore</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Link href="/paper-submission-guidelines" legacyBehavior>
                  <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white text-sm font-semibold tracking-wide shadow-[0_4px_20px_rgba(34,211,238,0.2)] hover:shadow-[0_6px_28px_rgba(34,211,238,0.3)] transition-all duration-200">
                    Submit your paper
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </Link>

                <a href="#timeline" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/[0.08] text-slate-200 text-sm font-semibold shadow-sm hover:shadow transition-all duration-200">
                  View timeline
                </a>
              </div>
            </div>

            {/* Bottom Descriptive Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Card 1: Paper Submission Guidelines */}
              <Link href="/paper-submission-guidelines" legacyBehavior>
                <a className="flex items-start gap-3 p-3 rounded-2xl bg-[#0a1020]/60 border border-white/[0.06] hover:bg-cyan-400/5 hover:border-cyan-400/15 group transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-400/20 flex items-center justify-center shrink-0 transition-all duration-300">
                    <FileText className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs sm:text-sm font-bold text-slate-300 group-hover:text-white transition-colors">Submission Guidelines</span>
                    <span className="block text-[11px] text-slate-500 group-hover:text-slate-400 mt-0.5 leading-normal transition-colors">Paper formats & instructions</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-auto self-center" />
                </a>
              </Link>

              {/* Card 2: Ph.D Thesis Award */}
              <Link href="/phd-thesis-award-application" legacyBehavior>
                <a className="flex items-start gap-3 p-3 rounded-2xl bg-[#0a1020]/60 border border-white/[0.06] hover:bg-cyan-400/5 hover:border-cyan-400/15 group transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-400/20 flex items-center justify-center shrink-0 transition-all duration-300">
                    <Award className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs sm:text-sm font-bold text-slate-300 group-hover:text-white transition-colors">Ph.D Thesis Award</span>
                    <span className="block text-[11px] text-slate-500 group-hover:text-slate-400 mt-0.5 leading-normal transition-colors">Apply for Best Ph.D Thesis</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-auto self-center" />
                </a>
              </Link>

              {/* Card 3: Download Brochure */}
              <a href="/CSITSSBrochure2026final.pdf" target="_blank" rel="noreferrer" className="flex items-start gap-3 p-3 rounded-2xl bg-[#0a1020]/60 border border-white/[0.06] hover:bg-cyan-400/5 hover:border-cyan-400/15 group transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-400/20 flex items-center justify-center shrink-0 transition-all duration-300">
                  <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs sm:text-sm font-bold text-slate-300 group-hover:text-white transition-colors">Download Brochure</span>
                  <span className="block text-[11px] text-slate-500 group-hover:text-slate-400 mt-0.5 leading-normal transition-colors">Get detailed conference PDF</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-auto self-center" />
              </a>

              {/* Card 4: Reach & Contact Us */}
              <Link href="/contact" legacyBehavior>
                <a className="flex items-start gap-3 p-3 rounded-2xl bg-[#0a1020]/60 border border-white/[0.06] hover:bg-cyan-400/5 hover:border-cyan-400/15 group transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-400/20 flex items-center justify-center shrink-0 transition-all duration-300">
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs sm:text-sm font-bold text-slate-300 group-hover:text-white transition-colors">Contact &amp; Venue</span>
                    <span className="block text-[11px] text-slate-500 group-hover:text-slate-400 mt-0.5 leading-normal transition-colors">Connect with organizers &amp; maps</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-auto self-center" />
                </a>
              </Link>
            </div>
          </div>

          {/* Right Column — two stacked cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* ── Partners card ── */}
            <div className="bg-[#0c1525]/90 backdrop-blur-sm border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.4)] rounded-3xl p-4 sm:p-5">
              {/* Header row */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-slate-500 tracking-[0.15em] font-sans uppercase">Organised &amp; Supported By</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 font-sans">
                  8 partners
                </span>
              </div>

              {/* 3-per-row logo grid */}
              <div className="grid grid-cols-3 gap-2">
                <a href="https://www.rvce.edu.in/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-2.5 rounded-xl bg-white/95 border border-white/20 shadow-sm hover:shadow-[0_6px_20px_rgba(34,211,238,0.15)] hover:border-cyan-400/40 hover:scale-[1.04] transition-all duration-300 ease-out">
                  <img src="/Logo3.png" alt="RVCE" className="max-h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                </a>
                <a href="https://ieeebangalore.org/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-2.5 rounded-xl bg-white/95 border border-white/20 shadow-sm hover:shadow-[0_6px_20px_rgba(34,211,238,0.15)] hover:border-cyan-400/40 hover:scale-[1.04] transition-all duration-300 ease-out">
                  <img src="/logo_IEEE_Banaglaore_Section.png" alt="IEEE Bangalore" className="max-h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                </a>
                <a href="https://www.comsoc.org/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-2.5 rounded-xl bg-white/95 border border-white/20 shadow-sm hover:shadow-[0_6px_20px_rgba(34,211,238,0.15)] hover:border-cyan-400/40 hover:scale-[1.04] transition-all duration-300 ease-out">
                  <img src="/ieee-comsoc.png" alt="IEEE ComSoc" className="max-h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                </a>
                <a href="https://sensorscouncil.ieeebangalore.org/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-2.5 rounded-xl bg-white/95 border border-white/20 shadow-sm hover:shadow-[0_6px_20px_rgba(34,211,238,0.15)] hover:border-cyan-400/40 hover:scale-[1.04] transition-all duration-300 ease-out">
                  <img src="/ieee-sensors-council.png" alt="IEEE Sensors Council" className="max-h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                </a>
                <a href="https://www.sdu.dk/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-2.5 rounded-xl bg-white/95 border border-white/20 shadow-sm hover:shadow-[0_6px_20px_rgba(34,211,238,0.15)] hover:border-cyan-400/40 hover:scale-[1.04] transition-all duration-300 ease-out">
                  <img src="/sdu.png" alt="SDU" className="max-h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                </a>
                <a href="https://www.thws.de/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-2.5 rounded-xl bg-white/95 border border-white/20 shadow-sm hover:shadow-[0_6px_20px_rgba(34,211,238,0.15)] hover:border-cyan-400/40 hover:scale-[1.04] transition-all duration-300 ease-out">
                  <img src="/thws.png" alt="THWS" className="max-h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                </a>
                <a href="https://www.th-rosenheim.de/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-2.5 rounded-xl bg-white/95 border border-white/20 shadow-sm hover:shadow-[0_6px_20px_rgba(34,211,238,0.15)] hover:border-cyan-400/40 hover:scale-[1.04] transition-all duration-300 ease-out">
                  <img src="/rosenheim.png" alt="TH Rosenheim" className="max-h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                </a>
                <a href="https://www.fh-dortmund.de/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-2.5 rounded-xl bg-white/95 border border-white/20 shadow-sm hover:shadow-[0_6px_20px_rgba(34,211,238,0.15)] hover:border-cyan-400/40 hover:scale-[1.04] transition-all duration-300 ease-out">
                  <img src="/dortmund.png" alt="FH Dortmund" className="max-h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* ── Speaker Message card ── */}
            <div className="flex-1 bg-gradient-to-br from-[#0c1525]/95 via-[#0e1a2e]/95 to-[#0c1a30]/90 backdrop-blur-sm border border-violet-400/15 shadow-[0_8px_40px_rgba(139,92,246,0.08)] rounded-3xl p-4 sm:p-5 flex flex-col gap-3 relative overflow-hidden">

              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              {/* Badge */}
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-400/10 border border-violet-400/20 text-[10px] font-bold tracking-widest uppercase text-violet-300">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Message from Speaker
                </div>
              </div>

              {/* Speaker profile row */}
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-violet-400/30 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                    <img
                      src="/speakers/foreign/Martin_Versen.png"
                      alt="Prof. Dr.-Ing. Martin Versen"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* online-style dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0c1525]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white leading-tight">Prof. Dr.-Ing. Martin Versen</p>
                  <p className="text-[11px] text-slate-400 leading-snug mt-0.5">Technische Hochschule Rosenheim, Germany</p>
                </div>
              </div>

              {/* Quote mark + message body */}
              <div className="relative flex-1">
                <svg className="absolute -top-1 -left-1 w-6 h-6 text-violet-400/30" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <div className="pl-5 max-h-[160px] overflow-y-auto scrollbar-hide pr-1">
                  <p className="text-[11.5px] text-slate-300 leading-relaxed">
                    To the IEEE CSITSS Organizers and Participants,
                  </p>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed mt-2">
                    From the Faculty of Engineering at Technische Hochschule Rosenheim — and especially from the team behind our Fluorescence Measurement Technology lab — we send our warmest regards.
                  </p>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed mt-2">
                    We develop real-time AI systems to classify subtle optical signals — a field deeply aligned with your themes of{' '}
                    <span className="text-cyan-400 font-medium">Sustainable Environment and Circular Economy</span>,{' '}
                    <span className="text-violet-400 font-medium">Artificial Intelligence Systems</span>, and{' '}
                    <span className="text-sky-400 font-medium">Data Analytics and Intelligent Decision Systems</span>.
                    We're excited to exchange ideas, learn from your innovations, and build global connections that turn research into impact.
                  </p>
                  <p className="text-[11.5px] text-slate-300 leading-relaxed mt-2 italic">
                    Looking forward to connecting, collaborating, and co-creating the future — together.
                  </p>
                </div>
              </div>

              {/* Footer divider + signature */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] text-slate-500 italic">With appreciation</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-violet-400">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                  TH Rosenheim, Germany
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ── IEEE Publication Banner ─────────────────────────────────────── */}
        <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 px-6 py-5 rounded-2xl border border-white/[0.08] bg-[#0c1525]/90 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            {/* Icon */}
            <div className="shrink-0 w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mt-0.5">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            {/* Text */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-cyan-400 mb-1">Publication</p>
              <h3 className="text-sm font-semibold text-slate-100 mb-1">Publication in IEEE Xplore</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Accepted and presented papers will be submitted for possible inclusion into
                IEEE Xplore, subject to meeting IEEE Xplore&apos;s scope and quality requirements.
              </p>
            </div>
            {/* Chip */}
            <div className="shrink-0 flex flex-col items-center sm:items-end gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-bold tracking-wide whitespace-nowrap">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg>
                IEEE Xplore
              </span>
            </div>
          </div>
        </section>

        {/* ── Timeline ────────────────────────────────────────────────────── */}
        <Timeline />

        <Table />

        <div id="themes">
          <ConferenceThemes />
        </div>

        <section className="py-14" id="venue">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-3">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Venue
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                RV College of Engineering, Bengaluru
              </h2>
            </div>

            {/* Map + Image grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509397044632!2d77.49651251530834!3d12.923722790887302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1652610248773!5m2!1sen!2sin&style=feature:all|element:geometry|color:0x242f3e|visibility:simplified&style=feature:landscape|element:geometry.fill|color:0x2b2b2b&style=feature:poi|element:all|visibility:off&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:labels.icon|visibility:off&style=feature:transit|element:all|visibility:off&style=feature:water|element:geometry.fill|color:0x212a37&style=feature:water|element:labels.text.fill|color:0x3e606f"
                  width="100%"
                  height="360"
                  className="block w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Campus image */}
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)] cursor-pointer group"
                onClick={() => {
                  const modal = document.getElementById('modal')
                  if (modal) {
                    modal.classList.remove('hidden')
                    modal.classList.add('flex')
                  }
                }}
              >
                <img
                  src="./map2.jpg"
                  alt="Venue related image"
                  className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://goo.gl/maps/sXWGV9iXqQRwz2PJ9"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white text-sm font-semibold shadow-[0_4px_20px_rgba(34,211,238,0.2)] hover:shadow-[0_6px_28px_rgba(34,211,238,0.3)] transition-all duration-200"
              >
                Open Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="HOTELS.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/[0.08] text-slate-200 text-sm font-semibold shadow-sm hover:shadow transition-all duration-200"
              >
                Download Hotels List Near RVCE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Modal for enlarged image */}
            <div
              id="modal"
              className="fixed inset-0 z-50 hidden items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={() => {
                const modal = document.getElementById('modal')
                if (modal) {
                  modal.classList.add('hidden')
                  modal.classList.remove('flex')
                }
              }}
            >
              <img
                src="./map2.jpg"
                alt="Enlarged view"
                className="h-auto max-h-[85vh] w-auto max-w-[92vw] rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>


        <style jsx>{`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>

        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <Gallery />
          {/* Microsoft CMT note */}
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-700/50 bg-slate-900/40 px-5 py-4">
            <svg className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs text-slate-500 leading-relaxed">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </div>

      </section>
    </>
  )
}

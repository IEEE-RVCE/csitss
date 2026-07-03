/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import Timeline from '../components/TimeLine'
import Gallery from '../components/Gallery'
import ConferenceThemes from '../components/ConferenceThemes'
import Table from '../components/table'
import { FileText, Award, Calendar, Clock, MapPin, Download, Send, ChevronRight, Earth } from 'lucide-react'
import Link from 'next/link'

// const image = {
//   src: 'logo_IEEE_Banaglaore_Section.png',
//   alt: 'ieee_bangalore_logo',
//   href: 'https://ieeebangalore.org/',
//   show: true,
//   padding: 'pt-6',
// }

export default function Index() {
  return (
    <>
      <section className="body-font m-0 px-4 md:px-8 text-gray-600 font-sans">
        {/* Main Hero Container */}
        <div className="max-w-7xl mx-auto pt-3 md:pt-4 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Left Column (Left Card) */}
          <div className="lg:col-span-7 bg-white/85 backdrop-blur-sm border border-gray-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] rounded-3xl p-4 sm:p-6 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              {/* Tag / Badge Row */}
              <div className="flex flex-wrap gap-2 mb-3">
                {/* Badge 1: 10th Edition */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#ff7b65]/10 border border-[#ff7b65]/20 text-xs font-bold text-[#ff7b65] shadow-sm">
                  10th Edition
                </div>
                {/* Badge 2: IEEE International Conference */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-gray-100 text-xs font-semibold text-slate-700 shadow-sm">
                  IEEE International Conference
                </div>
              </div>

              {/* Styled Conference Label */}
              <div className="mb-2">
                <span className="font-sans text-xs font-extrabold tracking-[0.25em] text-[#ff7b65] uppercase">
                  CSITSS 2026
                </span>
              </div>

              {/* Serif Title */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-[1.15] text-gray-900 tracking-tight font-medium mb-3">
                Computational Systems &amp; <br />
                Information Technology for <br />
                <span className="font-serif italic bg-gradient-to-r from-[#ff7b65] via-[#ff6b8b] to-[#a855f7] bg-clip-text text-transparent font-semibold pr-1">Sustainable Solutions.</span>
              </h1>

              {/* Highlighted Description */}
              <div className="relative border-l-2 border-[#ff7b65]/35 pl-4 mb-3">
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-sans">
                  The 10th IEEE International Conference organised by <strong className="text-gray-800 font-semibold">RV College of Engineering</strong>.
                </p>
              </div>

              {/* Grid of Key Info Box (4 boxes) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                {/* Box 1: Conference */}
                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-gray-50 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                  <div className="w-10 h-10 rounded-full bg-[#ff7b65]/10 flex items-center justify-center text-[#ff7b65] shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-gray-400 tracking-wider font-sans uppercase">CONFERENCE</span>
                    <span className="block text-xs sm:text-sm font-bold text-gray-800 font-sans truncate">Oct 30-31, 2026</span>
                  </div>
                </div>

                {/* Box 2: Paper Deadline */}
                <div className="relative flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-gray-50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] overflow-hidden">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                    <Earth className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 pt-1">
                    <span className="block text-[10px] font-bold text-gray-400 tracking-wider font-sans uppercase">Past Editions</span>
                    <span className="block text-xs sm:text-sm font-bold text-gray-800 font-sans truncate">9 Successful</span>
                  </div>
                </div>

                {/* Box 3: Venue */}
                <a href="#venue" className="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-gray-50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-purple-100 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-gray-400 tracking-wider font-sans uppercase">VENUE</span>
                    <span className="block text-xs sm:text-sm font-bold text-gray-800 font-sans truncate">RVCE, Bengaluru</span>
                  </div>
                </a>

                {/* Box 4: Indexing */}
                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-gray-50 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                  <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-gray-400 tracking-wider font-sans uppercase">PUBLICATION</span>
                    <span className="block text-xs sm:text-sm font-bold text-gray-800 font-sans truncate">IEEE Xplore</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Link href="/paper-submission-guidelines" legacyBehavior>
                  <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff7b65] to-[#ff6b8b] hover:from-[#ff6b8b] hover:to-[#ff5c7a] text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-200">
                    Submit your paper
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </Link>

                <a href="#timeline" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold shadow-sm hover:shadow transition-all duration-200">
                  View timeline
                </a>
              </div>
            </div>

            {/* Bottom Descriptive Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Card 1: Paper Submission Guidelines */}
              <Link href="/paper-submission-guidelines" legacyBehavior>
                <a className="flex items-start gap-3 p-3 rounded-2xl bg-[#fdfbf7] border border-gray-100 hover:bg-[#ff7b65]/5 hover:border-[#ff7b65]/20 group transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-400 group-hover:text-[#ff7b65] group-hover:border-[#ff7b65]/20 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                    <FileText className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs sm:text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">Submission Guidelines</span>
                    <span className="block text-[11px] text-gray-400 group-hover:text-gray-500 mt-0.5 leading-normal transition-colors">Paper formats & instructions</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#ff7b65] group-hover:translate-x-0.5 transition-all shrink-0 ml-auto self-center" />
                </a>
              </Link>

              {/* Card 2: Ph.D Thesis Award */}
              <Link href="/phd-thesis-award-application" legacyBehavior>
                <a className="flex items-start gap-3 p-3 rounded-2xl bg-[#fdfbf7] border border-gray-100 hover:bg-[#ff7b65]/5 hover:border-[#ff7b65]/20 group transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-400 group-hover:text-[#ff7b65] group-hover:border-[#ff7b65]/20 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                    <Award className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs sm:text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">Ph.D Thesis Award</span>
                    <span className="block text-[11px] text-gray-400 group-hover:text-gray-500 mt-0.5 leading-normal transition-colors">Apply for Best Ph.D Thesis</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#ff7b65] group-hover:translate-x-0.5 transition-all shrink-0 ml-auto self-center" />
                </a>
              </Link>

              {/* Card 3: Download Brochure */}
              <a href="/CSITSSBrochure2026final.pdf" target="_blank" rel="noreferrer" className="flex items-start gap-3 p-3 rounded-2xl bg-[#fdfbf7] border border-gray-100 hover:bg-[#ff7b65]/5 hover:border-[#ff7b65]/20 group transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-400 group-hover:text-[#ff7b65] group-hover:border-[#ff7b65]/20 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                  <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs sm:text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">Download Brochure</span>
                  <span className="block text-[11px] text-gray-400 group-hover:text-gray-500 mt-0.5 leading-normal transition-colors">Get detailed conference PDF</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#ff7b65] group-hover:translate-x-0.5 transition-all shrink-0 ml-auto self-center" />
              </a>

              {/* Card 4: Reach & Contact Us */}
              <Link href="/contact" legacyBehavior>
                <a className="flex items-start gap-3 p-3 rounded-2xl bg-[#fdfbf7] border border-gray-100 hover:bg-[#ff7b65]/5 hover:border-[#ff7b65]/20 group transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-400 group-hover:text-[#ff7b65] group-hover:border-[#ff7b65]/20 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs sm:text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">Contact &amp; Venue</span>
                    <span className="block text-[11px] text-gray-400 group-hover:text-gray-500 mt-0.5 leading-normal transition-colors">Connect with organizers &amp; maps</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#ff7b65] group-hover:translate-x-0.5 transition-all shrink-0 ml-auto self-center" />
                </a>
              </Link>
            </div>
          </div>

          {/* Right Column (Right Card: Institutions & Partners) */}
          <div className="lg:col-span-5 bg-white/85 backdrop-blur-sm border border-gray-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] rounded-3xl p-4 sm:p-5 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] flex flex-col h-full">
            {/* Subtitle Row */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.15em] font-sans">ORGANISED & SUPPORTED BY</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-100 text-[10px] font-bold text-slate-500 shadow-sm uppercase font-sans">
                8 partners
              </span>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 gap-2.5 flex-grow">
              {/* Partner 1: RV College of Engineering */}
              <a href="https://www.rvce.edu.in/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-3.5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_-5px_rgba(255,123,101,0.15)] hover:border-[#ff7b65]/40 hover:scale-[1.05] transition-all duration-300 ease-out">
                <img src="/Logo3.png" alt="RVCE Logo" className="max-h-12 sm:max-h-14 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105" />
              </a>

              {/* Partner 2: IEEE Bangalore Section */}
              <a href="https://ieeebangalore.org/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-3.5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_-5px_rgba(255,123,101,0.15)] hover:border-[#ff7b65]/40 hover:scale-[1.05] transition-all duration-300 ease-out">
                <img src="/logo_IEEE_Banaglaore_Section.png" alt="IEEE Bangalore Section Logo" className="max-h-12 sm:max-h-14 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105" />
              </a>

              {/* Partner 3: IEEE ComSoc */}
              <a href="https://www.comsoc.org/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-3.5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_-5px_rgba(255,123,101,0.15)] hover:border-[#ff7b65]/40 hover:scale-[1.05] transition-all duration-300 ease-out">
                <img src="/ieee-comsoc.png" alt="IEEE ComSoc Logo" className="max-h-12 sm:max-h-14 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105" />
              </a>

              {/* Partner 4: IEEE Sensors Council */}
              <a href="https://sensorscouncil.ieeebangalore.org/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-3.5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_-5px_rgba(255,123,101,0.15)] hover:border-[#ff7b65]/40 hover:scale-[1.05] transition-all duration-300 ease-out">
                <img src="/ieee-sensors-council.png" alt="IEEE Sensors Council Logo" className="max-h-12 sm:max-h-14 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105" />
              </a>

              {/* Partner 5: SDU */}
              <a href="https://www.sdu.dk/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-3.5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_-5px_rgba(255,123,101,0.15)] hover:border-[#ff7b65]/40 hover:scale-[1.05] transition-all duration-300 ease-out">
                <img src="/sdu.png" alt="SDU Logo" className="max-h-12 sm:max-h-14 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105" />
              </a>

              {/* Partner 6: THWS */}
              <a href="https://www.thws.de/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-3.5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_-5px_rgba(255,123,101,0.15)] hover:border-[#ff7b65]/40 hover:scale-[1.05] transition-all duration-300 ease-out">
                <img src="/thws.png" alt="THWS Logo" className="max-h-12 sm:max-h-14 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105" />
              </a>

              {/* Partner 7: TH Rosenheim */}
              <a href="https://www.th-rosenheim.de/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-3.5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_-5px_rgba(255,123,101,0.15)] hover:border-[#ff7b65]/40 hover:scale-[1.05] transition-all duration-300 ease-out">
                <img src="/rosenheim.png" alt="TH Rosenheim Logo" className="max-h-12 sm:max-h-14 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105" />
              </a>

              {/* Partner 8: Fachhochschule Dortmund */}
              <a href="https://www.fh-dortmund.de/" target="_blank" rel="noreferrer" className="group flex items-center justify-center p-3.5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_-5px_rgba(255,123,101,0.15)] hover:border-[#ff7b65]/40 hover:scale-[1.05] transition-all duration-300 ease-out">
                <img src="/dortmund.png" alt="FH Dortmund Logo" className="max-h-12 sm:max-h-14 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105" />
              </a>
            </div>
          </div>
        </div>

        {/* ── IEEE Publication Banner ─────────────────────────────────────── */}
        <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 px-6 py-5 rounded-2xl border border-gray-100/80 bg-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            {/* Icon */}
            <div className="shrink-0 w-11 h-11 rounded-xl bg-[#ff7b65]/10 border border-[#ff7b65]/20 flex items-center justify-center mt-0.5">
              <svg className="w-5 h-5 text-[#ff7b65]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            {/* Text */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#ff7b65] mb-1">Publication</p>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Publication in IEEE Xplore</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Accepted and presented papers will be submitted for possible inclusion into
                IEEE Xplore, subject to meeting IEEE Xplore&apos;s scope and quality requirements.
              </p>
            </div>
            {/* Chip */}
            <div className="shrink-0 flex flex-col items-center sm:items-end gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wide whitespace-nowrap">
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7b65]/10 border border-[#ff7b65]/20 text-[#ff7b65] text-[10px] font-bold tracking-widest uppercase mb-3">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Venue
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                RV College of Engineering, Bengaluru
              </h2>
            </div>

            {/* Map + Image grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
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
              <div className="overflow-hidden rounded-2xl border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] cursor-pointer group"
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff7b65] to-[#ff6b8b] hover:from-[#ff6b8b] hover:to-[#ff5c7a] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              >
                Open Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="HOTELS.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold shadow-sm hover:shadow transition-all duration-200"
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
              className="fixed inset-0 z-50 hidden items-center justify-center bg-black/75 backdrop-blur-sm"
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
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-200/60 bg-amber-50/50 px-5 py-4">
            <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs text-amber-800 leading-relaxed">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </div>

      </section>
    </>
  )
}

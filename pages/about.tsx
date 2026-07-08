/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function About() {
  return (
    <section className="body-font font-sans text-slate-300 px-4 md:px-8">
      <div className="max-w-7xl mx-auto py-10 space-y-6">

        {/* ── About the Conference — golden finish ──────────────────────── */}
        <div className="rounded-2xl border border-amber-400/25 bg-[#1e1508] px-6 py-7 sm:px-10 sm:py-10 shadow-[0_4px_24px_rgba(251,191,36,0.08)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-amber-300">
              About the Conference
            </h1>
          </div>
          <div className="border-l-2 border-amber-400/40 pl-6 space-y-4 text-justify">
            <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed">
              The <span className="text-white font-bold">10th International Conference on Computational Systems and Information Technology for Sustainable Solutions (CSITSS-2026)</span>, during <span className='text-white font-bold'>October 30<sup>th</sup>–31<sup>st</sup>, 2026</span> brings together academicians, scientists, researchers, industry professionals, postdoctoral fellows and research scholars from across the globe to share <span className="text-amber-300 font-semibold">Advances in Sustainable and Emerging Technologies</span>. The conference focuses on <span className="text-amber-200/90 font-medium">Green Electronics, Renewable Energy, Robotics and Automation, Photonics, Artificial Intelligence, Cyber-Physical Systems, Quantum Mechanics and Computing</span>.
            </p>
            <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed">
              CSITSS has been successfully organized for the <span className="text-amber-300 font-semibold">past nine years</span>, attracting participants from
              India and abroad.{' '}
              <strong className="text-white font-semibold">
                All accepted papers will be submitted for possible inclusion into <span className="text-amber-300 font-semibold">IEEE Xplore</span> subject to meeting IEEE Xplore's scope and quality requirements.
              </strong>{' '}
              Renowned international speakers will deliver keynote addresses on cutting-edge developments.
              CSITSS-2026 provides a global platform for <span className="text-amber-200/90 font-medium">knowledge exchange, collaboration, and networking</span>, with technical support from IEEE.
            </p>
          </div>
        </div>

        {/* ── Vision + Mission ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Vision */}
          <div className="bg-[#0c1525]/90 backdrop-blur-sm border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.4)] rounded-3xl p-7 sm:p-10">
            <h2 className="font-serif text-2xl font-semibold text-white mb-6">
              Vision
            </h2>
            <div className="border-l-2 border-[#ff7b65]/40 pl-6">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Leadership in Quality Technical Education, Interdisciplinary
                Research and Innovation, focusing on Sustainable and Inclusive
                Technology.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-[#0c1525]/90 backdrop-blur-sm border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.4)] rounded-3xl p-7 sm:p-10">
            <h2 className="font-serif text-2xl font-semibold text-white mb-6">
              Mission
            </h2>
            <ul className="space-y-3 border-l-2 border-[#ff7b65]/40 pl-6">
              {[
                'To deliver outcome-based quality education, emphasizing on experiential learning with state-of-the-art infrastructure.',
                'To create a conducive environment for interdisciplinary research and innovation.',
                'To develop professionals through holistic education focusing on individual growth, discipline, integrity, ethics and social sensitivity.',
                'To nurture industry-institution collaboration leading to competency enhancement and entrepreneurship.',
                'To focus on technologies that are sustainable and inclusive, benefiting all sections of the society.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#ff7b65] shrink-0" />
                  <span className="text-sm sm:text-base text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── About RVCE ───────────────────────────────────────────────── */}
        <div className="bg-[#0c1525]/90 backdrop-blur-sm border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.4)] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Campus image */}
            <div className="relative overflow-hidden min-h-[300px] group">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/rv2.jpg"
                alt="RV College of Engineering"
              />
            </div>

            {/* Text content */}
            <div className="p-7 sm:p-10 flex flex-col">
              <h2 className="font-serif text-2xl font-semibold text-white mb-6">
                About RVCE
              </h2>
              <div className="border-l-2 border-[#ff7b65]/40 pl-6 space-y-4">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                  <span className="text-[#ff7b65] font-bold">RV College of Engineering<sup>®</sup> (RVCE)</span> established in 1963 is one of
                  the earliest self-financing engineering colleges in the country.
                  The institution is run by <span className="text-white font-semibold">Rashtreeya Sikshana Samithi Trust
                  (RSST)</span> a not-for-profit Trust. RVCE is an Autonomous college.
                  Currently, the institution offers <span className="text-white font-semibold">15 Bachelors, 14 Master Programs</span> and all the departments have Research Centres,
                  affiliated to <span className="text-white font-semibold">Visvesvaraya Technological University (VTU)
                  Belagavi</span>. The institution has set itself a Vision &quot;<span className="text-[#ff7b65]/90 font-medium">Leadership in Quality Technical Education, Interdisciplinary Research &amp; Innovation, With a Focus on Sustainable and Inclusive Technology</span>&quot;
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                  Recent awards and achievements include – <span className="text-white font-semibold">UGC Autonomy Granted
                  for 10 years (2024-25 up to 2033-34)</span>, <span className="text-white font-semibold">NAAC Accredited with A+ Grade</span> in the 2nd cycle of Accreditation (Dec, 2024), Ranked <span className="text-[#ff7b65] font-bold">99<sup>th</sup> in the Country by NIRF-2024</span>, &quot;Engineering College of the Year-2023&quot; by the
                  Higher Education Review Magazine, ranked <span className="text-white font-semibold">7th in the Country
                  &amp; 2nd in Karnataka</span> - IIRF Ranking (2023), Ranked 1501+ in
                  Times Higher Education World University Rankings-2024-25. Ranked
                  801+ in Computer Science and 1001+ Rank in Engineering category
                  in THE World University Rankings- 2024-25, Ranked 1501+ in
                  Impact Ranking in THE World University Rankings-2024, Ranked
                  601+ in THE World University Rankings (Asia)-2024, and <span className="text-[#ff7b65] font-semibold">NPTEL
                  (Local Chapter) &quot;AAA&quot; Rating</span>.
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                  The institution has to its credit over <span className="text-[#ff7b65] font-bold">1500 National and International Journal publications</span>, filed <span className="text-[#ff7b65] font-bold">70 patents</span>, <span className="text-[#ff7b65] font-bold">61
                  published patents</span>, <span className="text-[#ff7b65] font-bold">40 granted patents</span>, completed sponsored
                  research and consultancy projects worth <span className="text-white font-bold">Rs. 25.0 crores </span>in the
                  last three years. The institution has established <span className="text-[#ff7b65] font-bold">28 Centre's of
                  Excellence / Centre's of Competence</span> in niche areas of science
                  and technology. All the eligible UG and PG programs have been
                  accredited by NBA multiple Times. Six UG Programs and 1 PG
                  program have been accredited for six and five years respectively
                  by NBA. The students have won awards and accolades in national
                  and international competition.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About

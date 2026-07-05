/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function About() {
  return (
    <section className="body-font font-sans text-slate-200 px-4 md:px-8">
      <div className="max-w-7xl mx-auto py-10 space-y-6">

        {/* ── About the Conference ─────────────────────────────────────── */}
        <div className="bg-[#0c1525]/90 backdrop-blur-sm border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.4)] rounded-3xl p-7 sm:p-10">
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-6">
            About the Conference
          </h1>
          <div className="border-l-2 border-cyan-400/40 pl-6 space-y-4">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              The <span className="bg-gradient-to-t from-cyan-400/25 via-cyan-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">10th International Conference on Computational Systems and Information Technology for Sustainable Solutions (CSITSS-2026)</span>, during October 30–31,
              2026 brings together academicians, scientists, researchers, industry professionals,
              postdoctoral fellows and research scholars from across the globe to share <span className="bg-gradient-to-t from-emerald-400/25 via-emerald-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">Advances in Sustainable and Emerging Technologies</span>. The conference focuses on <span className="bg-gradient-to-t from-amber-400/25 via-amber-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">Green Electronics, Renewable Energy, Robotics and Automation, Photonics, Artificial Intelligence, Cyber-Physical Systems, Quantum Mechanics and Computing</span>.
            </p>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              CSITSS has been successfully organized for the <span className="bg-gradient-to-t from-violet-400/25 via-violet-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">past nine years</span>, attracting participants from
              India and abroad.{' '}
              <strong className="text-white font-semibold">
                All accepted papers will be submitted for possible inclusion into <span className="bg-gradient-to-t from-sky-400/25 via-sky-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">IEEE Xplore</span> subject to meeting IEEE Xplore's scope and quality requirements.
              </strong>{' '}
              Renowned international speakers will deliver keynote addresses on cutting-edge developments.
              CSITSS-2026 provides a global platform for <span className="bg-gradient-to-t from-fuchsia-400/25 via-fuchsia-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">knowledge exchange, collaboration, and networking</span>, with technical support from IEEE.
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
            <div className="border-l-2 border-violet-400/40 pl-6">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
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
            <ul className="space-y-3 border-l-2 border-sky-400/40 pl-6">
              {[
                'To deliver outcome-based quality education, emphasizing on experiential learning with state-of-the-art infrastructure.',
                'To create a conducive environment for interdisciplinary research and innovation.',
                'To develop professionals through holistic education focusing on individual growth, discipline, integrity, ethics and social sensitivity.',
                'To nurture industry-institution collaboration leading to competency enhancement and entrepreneurship.',
                'To focus on technologies that are sustainable and inclusive, benefiting all sections of the society.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span className="text-sm sm:text-base text-slate-200 leading-relaxed">{item}</span>
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
              <div className="border-l-2 border-amber-400/40 pl-6 space-y-4">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  <span className="bg-gradient-to-t from-amber-400/25 via-amber-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">RV College of Engineering (RVCE)</span> established in 1963 is one of
                  the earliest self-financing engineering colleges in the country.
                  The institution is run by Rashtreeya Sikshana Samithi Trust
                  (RSST) a not-for-profit Trust. RVCE is an Autonomous college.
                  Currently, the institution offers <span className="bg-gradient-to-t from-cyan-400/25 via-cyan-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">15 Bachelors, 14 Master Programs</span> and all the departments have Research Centres,
                  affiliated to Visvesvaraya Technological University (VTU)
                  Belagavi. The institution has set itself a Vision "<span className="bg-gradient-to-t from-violet-400/25 via-violet-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">Leadership in Quality Technical Education, Interdisciplinary Research &amp; Innovation, With a Focus on Sustainable and Inclusive Technology</span>"
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  Recent awards and achievements include – UGC Autonomy Granted
                  for 10 years (2024-25 up to 2033-34), <span className="bg-gradient-to-t from-emerald-400/25 via-emerald-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">NAAC Accredited with A+ Grade</span> in the 2nd cycle of Accreditation (Dec, 2024), Ranked <span className="bg-gradient-to-t from-sky-400/25 via-sky-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">99th in the Country by NIRF-2024</span>, "Engineering College of the Year-2023" by the
                  Higher Education Review Magazine, ranked 7th in the Country
                  &amp; 2nd in Karnataka - IIRF Ranking (2023), Ranked 1501+ in
                  Times Higher Education World University Rankings-2024-25. Ranked
                  801+ in Computer Science and 1001+ Rank in Engineering category
                  in THE World University Rankings- 2024-25, Ranked 1501+ in
                  Impact Ranking in THE World University Rankings-2024, Ranked
                  601+ in THE World University Rankings (Asia)-2024, and NPTEL
                  (Local Chapter) "AAA" Rating.
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  The institution has to its credit over <span className="bg-gradient-to-t from-fuchsia-400/25 via-fuchsia-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">1500 National and International Journal publications</span>, filed 70 patents, 61
                  published patents, 40 granted patents, completed sponsored
                  research and consultancy projects worth <span className="bg-gradient-to-t from-amber-400/25 via-amber-400/25 via-[40%] to-transparent to-[40%] px-0.5 text-slate-100 font-medium">Rs. 25.0 crores</span> in the
                  last three years. The institution has established 28 Centre's of
                  Excellence / Centre's of Competence in niche areas of science
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

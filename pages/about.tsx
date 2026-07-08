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
                className="w-full h-full object-cover object-right transition-transform duration-500 group-hover:scale-105"
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
                  Established in 1963 with three engineering branches (Civil, Mechanical and Electrical), RVCE
now offers 13 undergraduate engineering programs, 13 master’s degree programs and doctoral
studies. It is located 13 km from the centre of Bengaluru, the Silicon Valley of India, on Mysore
Road. The sprawling campus, spread over an area of 16.85 acres (16.43 guntas), is set in sylvan
surroundings. It provides an ideal atmosphere to stimulate the teaching-learning process, helping
to produce skilled and disciplined engineers.
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                Rated as one of the top ten self-financing engineering institutions in the country. The current
annual student intake for UG and PG programmes is over 2,000. With a highly qualified and
dedicated faculty, it utilizes its expertise in various disciplines to conduct Research and
Development (R&amp;D) for industry and defence establishments in the country. Over the past six
decades, RVCE has transformed into a premier hub of learning, blending state-of-the-art
infrastructure with exceptional human resources that are deeply committed to imparting quality
technical education driven by creativity, innovation and societal impact. We take pride in
fostering an ecosystem of knowledge assimilation, generation and dissemination, while instilling
strong human values and a deep sense of social responsibility.
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                 At RVCE, we place special emphasis on Outcome-Based Education (OBE), Experiential
Learning and Interdisciplinary Research. Our curriculum is designed not just to provide students
with a strong theoretical foundation but to equip them with critical thinking, skill development
abilities, analytical frameworks, entrepreneurial skills, and leadership qualities that will enable
them to thrive in a dynamic global environment. Our research thrust focuses on emerging areas
such as Alternative Multifunctional Materials, Clean and Hybrid Power, Large-Area Flexible
Electronics, IoT, Computational Genomics, Smart Antenna Systems, Intelligent Transport
Systems, e-Mobility, Green Infrastructure, Logistics and Supply Chain, Cloud Technologies,
Artificial Intelligence and Sensors. Through these focus areas, we aim to establish RVCE as a
distinguished centre of excellence.
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                A key strength of RVCE is our robust industry-academia collaboration. More than 30 leading
companies have established dedicated research and development (R&amp;D) labs within the
institution, enabling hands-on learning and real-world problem-solving. Industry giants such as
Intel, IBM, Cisco, TI, NXP, Samsung, Bosch, Wipro, SAP, ABB, Infosys, Cognizant, Mercedes-
Benz, Morris Garage, Tata Technologies and Tejas Networks actively engage with our faculty
and students in research, internships, and skill development programmes, ensuring that our
graduates are industry-ready.
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                Beyond academics, RVCE provides a holistic learning experience with ample opportunities in
co-curricular and extracurricular activities. Students are encouraged to explore their talents in
technical clubs, cultural activities, sports and community service, shaping them into not only
competent engineers but also responsible and ethical global citizens. RVCE also has
international collaborations with Florida International University (USA), University of
Dortmund (Germany), Technical University of Applied Science (Würzburg-Schweinfurt),
Rosenheim Technical University of Applied Sciences (Germany) and Drexel University
(Philadelphia).
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

import React from 'react'

function Contact() {
  return (
    <section className="body-font font-sans text-slate-200 px-4 md:px-8">
      <div className="max-w-7xl mx-auto py-10">

        {/* Section header */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
            Contact Us
          </h1>
        </div>

        {/* Contact card */}
        <div className="bg-[#0c1525]/90 backdrop-blur-sm border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.4)] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Image */}
            <div className="relative overflow-hidden min-h-[320px] group">
              <img
                src="https://images.unsplash.com/photo-1485770958101-9dd7e4ea6d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                alt="contact"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Contact info */}
            <div className="flex flex-col items-center justify-center p-10 sm:p-14 text-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-base text-slate-300 leading-relaxed mb-3">
                  For any queries, please mail us at
                </p>
                <a
                  href="mailto:csitss2026@rvce.edu.in"
                  className="text-lg font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:underline"
                >
                  csitss2026@rvce.edu.in
                </a>
              </div>
              <div className="mt-5 pt-5 border-t border-white/[0.08] text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-3">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Address
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  RV College of Engineering<sup>®</sup>,<br />
                  RV Vidyanikethan Post, Mysuru Road,<br />
                  Bengaluru – 560059
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact

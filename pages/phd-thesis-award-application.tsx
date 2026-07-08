export default function PhDThesisAwardApplication() {
  return (
    <main className="min-h-screen px-4 md:px-8 pt-10 pb-20 text-slate-300 font-sans">
      <div className="mx-auto w-full max-w-4xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 mb-3">
            IEEE CSITSS 2026
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-white tracking-tight mb-4">
            Best PhD Thesis Award
          </h1>
          <p className="max-w-3xl text-lg leading-7 text-slate-200">
            Guidelines to apply for the Best PhD Thesis Award at IEEE CSITSS
            2026.
          </p>
        </div>

        <div className="space-y-6">

          {/* Eligibility Criteria */}
          <section className="bg-[#0c1525]/60 border border-white/[0.07] rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white border-l-2 border-cyan-400/60 pl-3 mb-5">
              Eligibility Criteria
            </h2>
            <ul className="space-y-3 text-base leading-7 text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-cyan-400/50 shrink-0" />
                <span>
                  Thesis successfully defended between 1st June 2024 to 1st
                  December 2025 are eligible to apply.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-cyan-400/50 shrink-0" />
                <span>Research topic must be within the conference scope.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-cyan-400/50 shrink-0" />
                <span>
                  PhD degree must be awarded from a recognized university in
                  India.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-cyan-400/50 shrink-0" />
                <span>Thesis must be available in English language only.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-cyan-400/50 shrink-0" />
                <span>Only one nomination is allowed per candidate.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-cyan-400/50 shrink-0" />
                <span>No conflict of interest should exist.</span>
              </li>
            </ul>
          </section>

          {/* How to Apply */}
          <section className="bg-violet-400/5 border border-violet-400/15 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white border-l-2 border-violet-400/60 pl-3 mb-4">
              How to Apply
            </h2>
            <p className="text-base leading-7 text-slate-200 mb-5">
              The candidates are required to mail the below mentioned documents
              in a Zip file to{' '}
              <a
                className="font-semibold text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 underline-offset-4"
                href="mailto:csitss2026@rvce.edu.in"
              >
                csitss2026@rvce.edu.in
              </a>
              . The title of the thesis should be the name of the Zip file. All
              the documents should be in PDF format. In the subject field,
              mention &quot;Best PhD Thesis - Participation&quot;.
            </p>
            <ol className="space-y-3 text-base leading-7 text-slate-200">
              <li className="flex items-start gap-3">
                <span className="text-violet-400/70 font-mono text-xs mt-0.5 shrink-0 w-5">1.</span>
                <span>Thesis in PDF along with Similarity index and AI content.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400/70 font-mono text-xs mt-0.5 shrink-0 w-5">2.</span>
                <span>
                  Extended thesis summary (3-5 pages): Abstract, problem
                  statement, objectives, brief methodology, results and
                  discussion, conclusion and future scope.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400/70 font-mono text-xs mt-0.5 shrink-0 w-5">3.</span>
                <span>Curriculum vitae of the candidate.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400/70 font-mono text-xs mt-0.5 shrink-0 w-5">4.</span>
                <span>
                  List of publications published from the thesis with citations if
                  any.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400/70 font-mono text-xs mt-0.5 shrink-0 w-5">5.</span>
                <span>Proof of degree completion.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400/70 font-mono text-xs mt-0.5 shrink-0 w-5">6.</span>
                <span>Recommendation letter from supervisor.</span>
              </li>
            </ol>
          </section>

          {/* Contact Details */}
          <section className="bg-[#0c1525]/60 border border-white/[0.07] rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white border-l-2 border-sky-400/60 pl-3 mb-4">
              Contact Details
            </h2>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-base leading-7 text-slate-200">
              <p>
                All email queries may be sent to{' '}
                <a
                  className="font-semibold text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 underline-offset-4"
                  href="mailto:csitss2026@rvce.edu.in"
                >
                  csitss2026@rvce.edu.in
                </a>{' '}
                with the subject line &quot;Best PhD Thesis - Participation&quot;.
              </p>
            </div>
          </section>

          {/* Warning note */}
          <div className="rounded-2xl border border-amber-400/15 bg-amber-400/5 p-5 text-sm leading-7 text-amber-300/80 sm:p-6">
            <p>
              Please ensure that the submission is complete and strictly
              follows the file and email format instructions before sending the
              nomination.
            </p>
          </div>

          {/* Back to Home */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/[0.08] text-slate-200 text-sm font-semibold transition-all duration-200"
            >
              Back to Home
            </a>
          </div>

        </div>
      </div>

      {/* Ambient glows */}
      <div className="fixed top-1/3 right-0 w-72 h-72 bg-violet-500/4 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 left-0 w-72 h-72 bg-cyan-500/4 rounded-full blur-3xl pointer-events-none -z-10" />
    </main>
  )
}

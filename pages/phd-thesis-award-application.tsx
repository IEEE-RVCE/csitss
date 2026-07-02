export default function PhDThesisAwardApplication() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6 py-16 text-slate-800 sm:px-10 lg:px-16">
      <section className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-600">
          IEEE CSITSS 2026
        </p>
        <h1 className="mt-4 text-3xl font-black text-slate-900 sm:text-5xl">
          Best PhD Thesis Award
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          Guidelines to apply for the Best PhD Thesis Award at IEEE CSITSS
          2026.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Eligibility Criteria
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
              <li>
                Thesis successfully defended between 1st June 2024 to 1st
                December 2025 are eligible to apply.
              </li>
              <li>Research topic must be within the conference scope.</li>
              <li>
                PhD degree must be awarded from a recognized university in
                India.
              </li>
              <li>Thesis must be available in English language only.</li>
              <li>Only one nomination is allowed per candidate.</li>
              <li>No conflict of interest should exist.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-purple-100 bg-purple-50/70 p-5 sm:p-6">
            <h2 className="text-2xl font-bold text-slate-900">How to Apply</h2>
            <p className="mt-3 leading-7 text-slate-700">
              The candidates are required to mail the below mentioned documents
              in a Zip file to{' '}
              <a
                className="font-semibold text-purple-700 underline decoration-purple-300 underline-offset-4 hover:text-purple-900"
                href="mailto:csitss2026@rvce.edu.in"
              >
                csitss2026@rvce.edu.in
              </a>
              . The title of the thesis should be the name of the Zip file. All
              the documents should be in PDF format. In the subject field,
              mention "Best PhD Thesis - Participation".
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-slate-700">
              <li>
                Thesis in PDF along with Similarity index and AI content.
              </li>
              <li>
                Extended thesis summary (3-5 pages): Abstract, problem
                statement, objectives, brief methodology, results and
                discussion, conclusion and future scope.
              </li>
              <li>Curriculum vitae of the candidate.</li>
              <li>
                List of publications published from the thesis with citations if
                any.
              </li>
              <li>Proof of degree completion.</li>
              <li>Recommendation letter from supervisor.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Contact Details
            </h2>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 leading-7 text-slate-700">
              <p>
                All email queries may be sent to{' '}
                <a
                  className="font-semibold text-purple-700 underline decoration-purple-300 underline-offset-4 hover:text-purple-900"
                  href="mailto:csitss2026@rvce.edu.in"
                >
                  csitss2026@rvce.edu.in
                </a>{' '}
                with the subject line "Best PhD Thesis - Participation".
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900 sm:p-6">
            <p>
              Please ensure that the submission is complete and strictly
              follows the file and email format instructions before sending the
              nomination.
            </p>
          </section>

          <div className="flex flex-wrap gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-purple-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-400/40"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

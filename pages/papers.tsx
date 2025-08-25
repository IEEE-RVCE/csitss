import React from 'react'

function Papers() {
  return (
    <div className="bg-light-blue-100 mt-10 py-10">
      <aside className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg sm:p-8 lg:p-12">
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-700 sm:text-5xl">
            Call For Papers
          </p>
        </div>
        <p className="my-4 text-justify text-lg font-medium text-gray-700 sm:text-2xl">
          Conference does not accept/encourage Survey/Review articles.
        </p>
                {/* IEEE Publication Information Section */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="flex flex-col items-center p-6 text-center md:flex-row md:p-8 md:text-left">
                    <div className="flex-shrink-0">
                        <svg className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                    </div>
                    <div className="mt-4 md:ml-6 md:mt-0">
                        <h3 className="text-xl font-bold text-gray-800">
                            Publication in IEEE Xplore
                        </h3>
                        <p className="mt-2 text-lg text-gray-600">
                            All accepted and presented papers will be published in the IEEE Xplore Digital Library.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <p className="my-4 text-justify text-base font-medium text-gray-600 sm:text-xl">
          Prospective authors are encouraged to submit quality and original
          research papers for presentation at the Conference. Authors are
          requested to submit their manuscripts in PDF format not exceeding 6
          pages in A4 size through online submission at Microsoft CMT. The
          manuscript should follow the standard IEEE template. The format of the
          paper could be downloaded in the link below{' '}
          <a
            href="https://www.ieee.org/conferences/publishing/templates.html"
            className="text-blue-500 hover:underline"
          >
            <b>Manuscript Template Link</b>
          </a>
          .
          <br />
          All submissions for the conference will be handled electronically and
          submitted papers will be peer-reviewed by domain experts. To submit
          the papers, use the Microsoft CMT Link mentioned below:
          <br />
          <a
            href="https://cmt3.research.microsoft.com/CSITSS2025"
            className="text-blue-500 hover:underline"
          >
            <b>Paper Submission Link</b>
          </a>
        </p>

        <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="https://cmt3.research.microsoft.com/CSITSS2025"
            className="block rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow-xl hover:bg-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Your Paper
          </a>
          <a
            href="Guidelines to Authors - IEEE.pdf"
            className="block rounded-lg px-5 py-3 font-medium text-blue-500 hover:text-blue-600"
            download
          >
            Download Guidelines for Authors
          </a>
        </div>
      </aside>
    </div>
  )
}

export default Papers

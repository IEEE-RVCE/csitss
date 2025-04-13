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
            href="https://cmt3.research.microsoft.com/CSITSS2024"
            className="text-blue-500 hover:underline"
          >
            <b>Paper Submission Link</b>
          </a>
        </p>

        <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="https://cmt3.research.microsoft.com/CSITSS2024"
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

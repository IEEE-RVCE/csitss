//import {   Tabs } from '@mantine/core'
// import { List,Center } from '@mantine/core'

import React from 'react'


function Papers() {
  return (
    <div className="mt-10">
     
          <aside className="bg-gray-100 p-6 sm:p-8 lg:p-12">
            <div className="mx-auto">
              <p className="text-center text-3xl font-bold sm:text-5xl">
                Call For Papers{' '}
              </p>
              <p className="text-justify text-2xl font-medium text-gray-700 my-4">
                Conference does not accept/encourage Survey/Review articles.
                </p>
              <p className="text-justify text-xl font-medium text-gray-500">
                Prospective authors are encouraged to submit quality and
                original research papers for presentation at the Conference.
                Authors are requested to submit their manuscripts in PDF format
                not exceeding 6 pages in A4 size through online submission at
                Microsoft CMT - on or{' '}
                <i>
                  before 15<sup>th</sup> July 2024.{' '}
                </i>
                The manuscript should follow the standard IEEE template.The
                format of the paper could be downloaded in link below{' '}
                <a href="https://www.ieee.org/conferences/publishing/templates.html">
                  <b>Manuscript Template Link</b>
                </a>
                .<br />
                All submission for the conference will be handled electronically
                and submitted papers will be peer reviewed by domain experts. To
                submit the papers use the Microsoft CMT Link mentioned below:
                <br />
                <a href="https://cmt3.research.microsoft.com/CSITSS2023">
                  <b>Paper Submission Link</b>
                </a>
              </p>

              <div className="mt-8 sm:flex sm:items-center sm:justify-center">
                <a
                  href="https://cmt3.research.microsoft.com/CSITSS2024"
                  className="block rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow-xl hover:bg-blue-600"
                  target="_blank"
                >
                  Submit Your Paper
                </a>
                </div>
                <div className="mt-8 sm:flex sm:items-center sm:justify-center">
                <a
                  href="Guidelines to Authors - IEEE.pdf"
                  className="mt-4 block rounded-lg  px-5 py-3 font-medium text-blue-500 hover:text-blue-600 sm:mt-0"
                  download>
                  Download Guidelines for Authors
                </a>
              </div>
            </div>
          </aside>
        
    </div>
  )
}

export default Papers

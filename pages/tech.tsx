import React from 'react'
import Link from 'next/link'

export const Topics = [
  {
    label: 'Computational Analysis of Structural and Functional Materials',
    subTopics: [
      null
    ],
  },
  {
    label: 'Autonomous Vehicles Navigation and Control Systems',
    subTopics: [
      null
    ],
  },
  {
    label: 'Green Electronics: Sustainable Practices',
    subTopics: [
      null
    ],
  },
  {
    label: 'Robotics and Automation',
    subTopics: [
      null
    ],
  },

  {
    label: 'Photonics, Optoelectronics and Mechatronics System',
    subTopics: [
     null
    ],
  },
  {
    label: 'Artificial Intelligence for Sustainable World',
    subTopics: [
      null
    ],
  },
  {
    label: 'Digital Transformation in Various Sectors of Economy',
    subTopics: [
      null
    ],
  },
  {
    label: 'Renewable Energy and Environmental Engineering',
    subTopics: [
      null
    ],
  },
  {
    label: 'Cyber-Physical Systems',
    subTopics: [
      null
    ],
  },
  {
    label: 'Biomedical Electronics and Healthcare Applications',
    subTopics: [
      null
    ],
  },
  {
    label: 'Quantum Mechanics and Computing',
    subTopics: [
      null
    ],
  },
  {
    label: 'Next-Generation Communication Systems',
    subTopics: [
      null
    ],
  },
]

function Tech() {
  const [activeTab, setActiveTab] = React.useState('papers')

  return (
    <div className="mt-10">
      <div className="flex space-x-4 border-b border-gray-200">
        <button
          className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setActiveTab('papers')}
        >
          Call For Papers
        </button>
      </div>

      {activeTab === 'papers' && (
        <aside className="bg-gray-100 p-12 sm:p-16 lg:p-24">
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
                before 5<sup>th</sup> August 2023.{' '}
              </i>
              The manuscript should follow the standard IEEE template.The
              format of the paper could be downloaded in link below{' '}
              <a 
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Manuscript Template Link</b>
              </a>
              .<br />
              All submission for the conference will be handled electronically
              and submitted papers will be peer reviewed by domain experts. To
              submit the papers use the Microsoft CMT Link mentioned below:
              <br />
              <a 
                href="https://cmt3.research.microsoft.com/CSITSS2023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Paper Submission Link</b>
              </a>
            </p>

            <div className="mt-8 sm:flex sm:items-center sm:justify-center">
              <a
                href="https://cmt3.research.microsoft.com/CSITSS2024"
                className="block rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow-xl hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Your Paper
              </a>
              <Link
                href="/Guidelines to Authors - IEEE.pdf"
                className="mt-4 block rounded-lg px-5 py-3 font-medium text-blue-500 hover:text-blue-600 sm:mt-0"
                download
              >
                Download Guidelines for Authors
              </Link>
            </div>
          </div>
        </aside>
      )}
    </div>
  )
}

export default Tech

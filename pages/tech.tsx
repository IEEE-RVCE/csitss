import {   Tabs } from '@mantine/core'
// import { List,Center } from '@mantine/core'

import React from 'react'

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
  return (
    <div className="mt-10">
      <Tabs grow>
        <Tabs.Tab label="Call For Papers">
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
                <a
                  href="Guidelines to Authors - IEEE.pdf"
                  className="mt-4 block rounded-lg  px-5 py-3 font-medium text-blue-500 hover:text-blue-600 sm:mt-0"
                  download>
                  Download Guidelines for Authors
                </a>
              </div>
            </div>
          </aside>
        </Tabs.Tab>
        {/* <Tabs.Tab label="Conference Tracks">
          <aside className="m-6 bg-gray-100 sm:m-8 lg:m-12">
            <div className=" p-6 sm:p-8 lg:p-12">
              <p className="text-center text-3xl font-bold sm:text-5xl">
                Conference Tracks{' '}
              </p>
              <p className="text-center text-sm font-bold">
                Authors are invited to submit their original research work in
                the following (but not limited to)
              </p>
              <Center>
                <div>
                  {Topics.map((topic, index) => (
                    <div className="mt-8" key={topic.label}>
                      <p className="mb-4 text-2xl font-medium text-gray-900">
                        {index + 1}. {topic.label}
                      </p>
                      <br />
                      <List className="mt-4" type="ordered">
                        {topic.subTopics.map((subTopic, index) => (
                          <List.Item
                            className="relative left-6 text-lg font-medium text-gray-500"
                            key={subTopic}
                          >
                            {index + 1}) {subTopic}
                          </List.Item>
                        ))}
                      </List>
                    </div>
                  ))}
                </div>
              </Center>
            </div>
          </aside>
        </Tabs.Tab> */}
      </Tabs>
    </div>
  )
}

export default Tech

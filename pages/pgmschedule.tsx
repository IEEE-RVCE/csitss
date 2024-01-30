import React from 'react'
import { Tabs } from '@mantine/core'

export default function pgmschedule() {
  const Day1 = [
    {
      head: [
        [
          '6 INTERNATIONAL CONFERENCE on Computational Systems & Information Technology Sustainable Solutions [CSITSS-2022] (Tentative schedule, Subject to changes.)',
        ],
        ['TUTORIAL DAY: DAY 1 SCHEDULE/ 21-12-2022'],
      ],
      columns: [
        'PRE TUTORIAL TRACK 01',
        '',
        ' Processors & Communication Systems',
        'BT Seminar Hall',
      ],
      rows: [
        [
          '9:30AM to 11:00AM',
          // "Mr. G Balaj, ABB",
          'Signal Processing and Health Care : Our endeavors during the COVID-19 Lockdown',
          'Dr.Sriram Ganapathy, Associate Professor, Electrical Engineering, IISc Bangalore',
          // "Mr. G Balaji, ABB",
          'BT Seminar Hall',
        ],
        ['11.00AM to 11.30AM', '----', 'High Tea', ''],
        [
          '11.30AM to 01.00PM',
          'NiralOS : Open and Disaggregated Private 5G and Edge Infrastructure Platform for Enterprise Operational Effectiveness',
          'Abhijit Chaudhary is the Founder and CEO of Niral Networks',
          'BT Seminar Hall',
        ],
        ['01.00PM to 02.00PM', '---', 'Lunch', '----'],
        [
          '02.00PM to 03.15PM',
          'FGPAs for wireless Communications',
          'Hariprasad Bhat,Manager-FGPA Solutions, Leka Wireless & team',
          'BT Seminar Hall',
        ],
        ['03.15PM to 03.30PM', '----', 'High Tea', '----'],
        [
          '03.30PM to 04.30PM',
          'FGPAs for wireless Communications',
          'Hariprasad Bhat,Manager-FGPA Solutions, Leka Wireless & team',
          'BT Seminar Hall',
        ],
      ],
    },
    {
      head: [
        [
          '6 INTERNATIONAL CONFERENCE on Computational Systems & Information Technology Sustainable Solutions [CSITSS-2022] (Tentative schedule, Subject to changes.)',
        ],
        ['TUTORIAL DAY: DAY 1 SCHEDULE/ 21-12-2022'],
      ],
      columns: [
        'PRE TUTORIAL TRACK 2',
        '',
        'Computing Systems and Applications & Intelligent Systems Venue',
        'MCA Seminar Hall',
      ],
      rows: [
        [
          '09:30AM to 11:00AM',
          // "Mr. G Balaj, ABB",
          'Question answering using information retrieval techniques',
          'Dr. Jyotirmoy Banerjee, Mr. Srinivas Kundeti, Mr. L Raghunatha Reddy and Mr. Sridhar D Kamoji, Ercrisson ',
          // "Mr. G Balaji, ABB",
          'MCA Seminar Hall',
        ],
        ['11.00AM to 11.30AM', '----', 'High Tea', '----'],
        [
          '11.30AM to 01.00PM',
          'Question answering using information retrieval techniques',
          ' Dr. Jyotirmoy Banerjee, Mr. Srinivas Kundeti, Mr. L Raghunatha Reddy and Mr. Sridhar D Kamoji',
          'MCA Seminar Hall',
        ],
        ['01.00PM to 02.00PM', '----', 'Lunch', '----'],
        [
          '02.00PM to 03.15PM',
          'Data modeling for weather and climate study',
          'Dr K C Gouda,Principal Scientist,National Aeronautics Laboratory',
          'MCA Seminar Hall',
        ],
        ['03.15PM to 03.30PM', '----', 'High Tea', '----'],
        [
          '03.30PM to 04.30PM',
          'Data modeling for weather and climate study',
          'Dr K C Gouda,Principal Scientist,National Aeronautics Laboratory',
          'MCA Seminar Hall',
        ],
      ],
    },
    {
      head: [
        [
          '6 INTERNATIONAL CONFERENCE on Computational Systems & Information Technology Sustainable Solutions [CSITSS-2022] (Tentative schedule, Subject to changes.)',
        ],
        ['TUTORIAL DAY: DAY 1 SCHEDULE/ 21-12-2022'],
      ],
      columns: [
        'PRE TUTORIAL TRACK 3',
        '',
        'Sensors: Sensors, Automation & Process Control; Energy Systems',
        'IEM Seminar Hall',
      ],

      rows: [
        [
          '9:30AM to 11:00AM',
          // "Mr. G Balaj, ABB",
          'Pre Tutorial:  Energy Systems',
          'Mangesh Nawarange, Jain University',
          // "Mr. G Balaji, ABB",
          'IEM Seminar Hall',
        ],
        ['11.00AM to 11.30AM', '----', 'High Tea', '----'],
        [
          '11.30AM to 01.00PM',
          'Energy Systems Demo at ABB Lab,Department of EEE,RVCE',
          'Dr. Srivani, HOD, EEE, RVCE',
          'IEM Seminar Hall',
        ],
        // [
        //     "11.30AM to 01.00PM",
        //     "Demo:  Energy Systems",
        //     "Dr. Srivani, HOD, EEE, RVCE",
        //     "ABB LAB, EEE, RVCE",
        // ],
        ['01.00PM to 02.00PM', '----', 'Lunch', '----'],
        [
          '02.00PM to 03.15PM',
          'Smart Sensors amnd its Applications',
          'Dr K Natarajan , Research Coorinatior, Jain University',
          'IEM Seminar Hall',
        ],
        ['03.15PM to 03.30PM', '----', 'High Tea', '----'],
        [
          '03.30PM to 04.30PM',
          'Smart Sensors amnd its Applications',
          'Dr K Natarajan , Research Coorinatior, Jain University',
          'IEM Seminar Hall',
        ],
      ],
    },
  ]

  const Day2 = {
    head: [
      [
        '6 INTERNATIONAL CONFERENCE on Computational Systems & Information Technology Sustainable Solutions [CSITSS-2022] (Tentative schedule, Subject to changes.)',
      ],
      ['Inaguration/ Day 2/ 22-12-2022'],
    ],
    columns: ['Time', 'Topic', 'Speaker', 'Venue'],

    rows: [
      [
        '10.00AM TO 11.00AM',
        // "Mr. G Balaj, ABB",
        'Inauguration',
        '',
        // "Mr. G Balaji, ABB",
        'IEM Auditorium',
      ],
      [
        '11.00AM TO 11.30AM',
        // "Mr. G Balaj, ABB",
        '-------',
        'High Tea',
        // "Mr. G Balaji, ABB",
        '-------',
      ],
      [
        '11.30AM TO 12.15PM',
        // "Mr. G Balaj, ABB",
        'Next generation of Cyber Forensics: A Road Map ',
        ':Dr.S S Iyengar is a world-renowned computer scientist and a Director of US Army funded Centre of Excellence in Digital Forensics in USA',
        // "Mr. G Balaji, ABB",
        'IEM Auditorium',
      ],
      [
        '12.15AM TO 01.00PM',
        // "Mr. G Balaj, ABB",
        'The Future of Computing',
        ' Dr. L Venkata Subramaniam an IBM Distinguished Quantum Ambassador. ',
        // "Mr. G Balaji, ABB",
        'IEM Auditorium',
      ],
      [
        ' 01.00PM TO 02.00PM',
        // "Mr. G Balaj, ABB",
        '-------',
        'LUNCH',
        // "Mr. G Balaji, ABB",
        '-------',
      ],
      [
        '02.00PM TO 02.45PM',
        // "Mr. G Balaj, ABB",
        'Plenary Talk:',
        'Expert Committee from Progress Software        ',
        // "Mr. G Balaji, ABB",
        'Venue: BT Seminar Hall',
      ],
      [
        '02.45PM to 03.00PM',
        // "Mr. G Balaj, ABB",
        '-------',
        'TEA Break',
        // "Mr. G Balaji, ABB",
        '-------',
      ],
      [
        '03.00PM to 04.45PM',
        // "Mr. G Balaj, ABB",
        'TRACK 1:',
        'Sensors: Sensors, Automation & Process Control; Energy Systems  Paper ID: 85,147,164,192,156,53       ',
        // "Mr. G Balaji, ABB",
        'Venue: BT Seminar Hall',
      ],
      [
        '  ',
        // "Mr. G Balaj, ABB",
        'TRACK 2:',
        'Communication Systems-1 Paper ID:9,36,158,190,229,230  ',
        // "Mr. G Balaji, ABB",
        'Venue: MCA Seminar Hall        ',
      ],
      [
        '  ',
        // "Mr. G Balaj, ABB",
        'TRACK 3:',
        ' Intelligent Systems-1  Paper ID:108,118,243,122,154,59       ',
        // "Mr. G Balaji, ABB",
        'Venue: MCA Seminar Hall        ',
      ],
    ],
  }

  const Day3 = {
    head: [
      [
        '6 INTERNATIONAL CONFERENCE on Computational Systems & Information Technology Sustainable Solutions [CSITSS-2022]',
      ],
      ['Conference Day 3/ 23-12-2022'],
    ],
    columns: ['Time', 'Event', 'Venue'],

    rows: [
      [
        '9:30-10:15',
        'Plenary Talk - A keynote speech on 5G and Nokia’s sustainable solutions in 5G area which covers not just the 5G ecosystem but also the various enterprise and CSP use cases/solutions where Nokia is already focussing on to make an impact when it comes to sustainable solutions and Environmental Social Governance (ESG) for Industry 4.0, Innovation, infrastructure and improve global economic growth.Speaker: Sunil Kumar G, Head - Industrialization & Commercialization, CNS EnSo SIS, Senior Executive with 28 years track record of successful strategic leadership in the Telecom and IT space with core competencies in Consulting, Operations, Delivery, Pre- Sales, Program management, System Integration, Automation, Testing and Product Management.Successfully built & managed services and product businesses across Europe, Americas, APAC and India including several key onsite engagements in UK, APAC, USA including an independent consultant role in Brazil.',
        'BT Seminar Hall',
      ],
      [
        '10:15-11:00',
        'Invited Talk- by Dr. Devesh Dwivedi, PhD India Site Leader, Global Foundries',
        'BT Seminar Hall',
      ],
      ['11:15-11:30', 'TEA BREAK', ''],
      [
        '11:30-1:00',
        'TRACK 1: Processors: VLSI Design & Embedded Systems: Paper ID:13,24,168,257,92',
        'BT Seminar Hall',
      ],
      [
        '',
        'TRACK 2: Computing Systems and Applications-1 : Paper ID:54,148,167,242,261,120',
        'MCA Seminar Hall',
      ],
      [
        '',
        'TRACK 3: Intelligent Systems-2 : Paper ID:132,138,142,144,146,149',
        ' IEM Seminar Hall',
      ],
      ['1:00-2:00', 'LUNCH', 'Food Court'],
      ['2:00-2:25', 'Plenary Talk/TEA BREAK', ''],
      [
        '3:00-4:30',
        'TRACK 1: Intelligent Systems-3:Paper ID:150,129,202,215,226,228',
        'BT Seminar Hall',
      ],
      [
        '',
        'TRACK 2: Communication Systems-2:Paper ID:238,19,254,251',
        'MCA Seminar Hall',
      ],
      [
        '',
        'TRACK 3: Intelligent Systems-4:ID:235,237,240,241,256',
        'IEM Seminar Hall',
      ],
      ['4:30-5:00', 'Valedictory', 'BT Seminar Hall'],
    ],
  }
  return (
    <>
      <div>
        <Tabs grow>
          <Tabs.Tab label="DAY 1">
            <aside className=" p-12 sm:p-16 lg:p-24">
              <div className="block">
                {Day1[0].head.map((row) => (
                  <>
                    <th className="block text-blue-800">{row[0]}</th>
                  </>
                ))}
                <th className="block text-gray-600">Program Schedule</th>
              </div>
              <p className="mt-4 text-gray-600">
                <div className="overflow-x-auto">
                  <br />
                  <table className="min-w-full divide-y-2 divide-gray-200 border-2 text-sm sm:p-16 lg:p-24">
                    <thead className="bg-gray-100">
                      <tr>
                        {Day1[0].columns.map((col) => (
                          <th className="whitespace-nowrap px-2 py-2 text-left">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {Day1[0].rows.map((row) => (
                        <tr>
                          <td className="whitespace-nowrap bg-gray-100 px-1 py-2  text-gray-700">
                            {row[0]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[1]}</td>

                          <td className="bg-gray-100 px-1 py-2  text-gray-700">
                            {row[2]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <br />
                  <table className="min-w-full divide-y-2 divide-gray-200 border-2 text-sm sm:p-16 lg:p-24">
                    <thead className="bg-gray-100">
                      <tr>
                        {Day1[1].columns.map((col) => (
                          <th className="whitespace-nowrap px-2 py-2 text-left">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {Day1[1].rows.map((row) => (
                        <tr>
                          <td className="whitespace-nowrap bg-gray-100 px-1 py-2  text-gray-700">
                            {row[0]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[1]}</td>

                          <td className="bg-gray-100 px-1 py-2  text-gray-700">
                            {row[2]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <br />
                  <table className="min-w-full divide-y-2 divide-gray-200 border-2 text-sm sm:p-16 lg:p-24">
                    <thead className="bg-gray-100">
                      <tr>
                        {Day1[2].columns.map((col) => (
                          <th className="whitespace-nowrap px-2 py-2 text-left">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {Day1[2].rows.map((row) => (
                        <tr>
                          <td className="whitespace-nowrap bg-gray-100 px-1 py-2  text-gray-700">
                            {row[0]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[1]}</td>

                          <td className="bg-gray-100 px-1 py-2  text-gray-700">
                            {row[2]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              </p>
            </aside>
          </Tabs.Tab>
          <Tabs.Tab label="DAY 2">
            <aside className=" p-12 sm:p-16 lg:p-24">
              <div className="block">
                {Day2.head.map((row) => (
                  <>
                    <th className="block text-blue-800">{row[0]}</th>
                  </>
                ))}
                <th className="block text-gray-600">Program Schedule</th>
              </div>
              <p className="mt-4 text-gray-600">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y-2 divide-gray-200 border-2 text-sm sm:p-16 lg:p-24">
                    <thead className="bg-gray-100">
                      <tr>
                        {Day2.columns.map((col) => (
                          <th className="whitespace-nowrap px-2 py-2 text-left">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {Day2.rows.map((row) => (
                        <tr>
                          <td className="whitespace-nowrap bg-gray-100 px-1 py-2  text-gray-700">
                            {row[0]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[1]}</td>

                          <td className="bg-gray-100 px-1 py-2  text-gray-700">
                            {row[2]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </p>
            </aside>
          </Tabs.Tab>
          <Tabs.Tab label="DAY 3">
            <aside className=" p-12 sm:p-16 lg:p-24">
              <div className="block">
                {Day3.head.map((row) => (
                  <>
                    <th className="block text-blue-800">{row[0]}</th>
                  </>
                ))}
                <th className="block text-gray-600">Program Schedule</th>
              </div>
              <p className="mt-4 text-gray-600">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y-2 divide-gray-200 border-2 text-sm sm:p-16 lg:p-24">
                    <thead className="bg-gray-100">
                      <tr>
                        {Day3.columns.map((col) => (
                          <th className="whitespace-nowrap px-2 py-2 text-center">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {Day3.rows.map((row) => (
                        <tr>
                          <td className="whitespace-nowrap bg-gray-100 px-1 py-2  text-gray-700">
                            {row[0]}
                          </td>

                          <td className="px-1 py-2 text-justify text-gray-700">
                            {row[1]}
                          </td>

                          <td className="whitespace-nowrap bg-gray-100 px-1 py-2  text-gray-700">
                            {row[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </p>
            </aside>
          </Tabs.Tab>
        </Tabs>
      </div>
    </>
  )
}

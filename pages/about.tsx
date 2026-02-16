import React from 'react'

function About() {
  return (
    <>
      <div className="p-4">
        <section className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 animate-fadeIn">
              Vision
            </h1>
            <hr className="w-1/2 border-t-4 border-gradient-to-r from-blue-500 to-indigo-700 mt-2 animate-fadeIn" />
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed text-center">
            Leadership in Quality Technical Education, Interdisciplinary
            Research and Innovation, focusing on Sustainable and Inclusive
            Technology.
          </p>
        </section>

        <section className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 animate-fadeIn">
              Mission
            </h1>
            <hr className="w-1/2 border-t-4 border-gradient-to-r from-blue-500 to-indigo-700 mt-2 animate-fadeIn" />
          </div>
          <ul className="mt-4 text-gray-700 leading-relaxed list-disc pl-6 space-y-2 animate-fadeIn">
            <li>
              To deliver outcome-based quality education, emphasizing on
              experiential learning with state-of-the-art infrastructure.
            </li>
            <li>
              To create a conducive environment for interdisciplinary research
              and innovation.
            </li>
            <li>
              To develop professionals through holistic education focusing on
              individual growth, discipline, integrity, ethics and social
              sensitivity.
            </li>
            <li>
              To nurture industry-institution collaboration leading to
              competency enhancement and entrepreneurship.
            </li>
            <li>
              To focus on technologies that are sustainable and inclusive,
              benefiting all sections of the society.
            </li>
          </ul>
        </section>

        <section className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
              <img
                className="w-full h-full object-cover"
                src="/rv2.jpg"
                alt="RV College of Engineering"
              />
            </div>

            <div className="flex flex-col justify-center lg:py-24">
              <div className="flex flex-col items-center mb-12">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 animate-fadeIn">
                  About RVCE
                </h1>
                <hr className="w-1/2 border-t-4 border-gradient-to-r from-blue-500 to-indigo-700 mt-2 animate-fadeIn" />
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed text-justify animate-fadeIn">
                RV College of Engineering (RVCE) established in 1963 is one of
                the earliest self-financing engineering colleges in the country.
                The institution is run by Rashtreeya Sikshana Samithi Trust
                (RSST) a not-for-profit Trust. RVCE is an Autonomous college.
                Currently, the institution offers 15 Bachelors, 14 Master
                Programs and all the departments have Research Centres,
                affiliated to Visvesvaraya Technological University (VTU)
                Belagavi. The institution has set itself a Vision "Leadership in
                Quality Technical Education, Interdisciplinary Research &
                Innovation, With a Focus on Sustainable and Inclusive
                Technology"
                <br />
                <br />
                Recent awards and achievements include – UGC Autonomy Granted
                for 10 years (2024-25 up to 2033- 34), NAAC Accredited with A+
                Grade in the 2nd cycle of Accreditation (Dec, 2024), Ranked 99th
                in the Country by National Institutional Ranking Framework
                (NIRF-2024), “Engineering College of the Year-2023” by the
                Higher Education Review Magazine, ranked 7th in the Country
                &amp; 2nd in Karnataka - IIRF Ranking (2023), Ranked 1501+ in
                Times Higher Education World University Rankings-2024-25. Ranked
                801+ in Computer Science and 1001+ Rank in Engineering category
                in THE World University Rankings- 2024-25, Ranked 1501+ in
                Impact Ranking in THE World University Rankings-2024, Ranked
                601+ in THE World University Rankings (Asia)-2024, and NPTEL
                (Local Chapter) “AAA” Rating.
                <br />
                <br />
                The institution has to its credit over 1500 National and
                International Journal publications, filed 70 patents, 61
                published patents, 40 granted patents, completed sponsored
                research and consultancy projects worth Rs. 25.0 crores in the
                last three years. The institution has established 28 Centre's of
                Excellence / Centre's of Competence in niche areas of science
                and technology. All the eligible UG and PG programs have been
                accredited by NBA multiple Times. Six UG Programs and 1 PG
                program have been accredited for six and five years respectively
                by NBA. The students have won awards and accolades in national
                and international competition
              </p>
            </div>
          </div>
        </section>

         <section className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 animate-fadeIn">
              About the Conference
            </h1>
            <hr className="w-1/2 border-t-4 border-gradient-to-r from-blue-500 to-indigo-700 mt-2 animate-fadeIn" />
             <p className="mt-4 text-gray-700 leading-relaxed text-justify animate-fadeIn">
              The 10th International Conference on Computational Systems and
Information Technology for Sustainable Solutions (CSITSS-2026), during October 30-31,
2026 brings together academicians, scientists, researchers, industry professionals,
postdoctoral fellows and research scholars from across the globe to share Advances in
Sustainable and Emerging Technologies. The conference focuses on Green Electronics,
Renewable Energy, Robotics and Automation, Photonics, Artificial Intelligence, Cyber-
Physical Systems, Quantum Mechanics and Computing.
<br />
<br />
CSITSS has been successfully organized for the past nine years, attracting participants from
India and abroad. <b>All accepted papers will be submitted for possible inclusion into IEEE
Xplore subject to meeting IEEE Xplore's scope and quality requirements.</b> Renowned
international speakers will deliver keynote addresses on cutting-edge developments.
CSITSS-2026 provides a global platform for knowledge exchange, collaboration, and
networking, with technical support from IEEE.
<br />
<br />
             </p>
          </div>
          
        </section>

        {/* <section>
          <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
            {/* <h2 className="text-3xl font-extrabold sm:text-4xl">
              CONFERENCE TRACKS
            </h2> */}

        {/* <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <h1
                style={{
                  marginRight: '1rem',
                  background: 'linear-gradient(to right, #ff0000, #800000)',
                  WebkitBackgroundClip: 'text',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: 'transparent',
                  alignContent: 'center',
                  width: '100%',
                }}
              >
                Conference Tracks
              </h1> */}
        {/* <hr
                style={{
                  background: 'linear-gradient(to right, red, transparent)',
                  height: '3px',
                  width: '100%',
                  marginRight: '1rem',
                }}
              />
            </div> */}
        {/* {Topics.map((topic) => (
              <div className="flex flex-col overflow-hidden  rounded-lg">
                <Accordion>                                            ////////  uncomment this when subpoints are given......
                  <Accordion.Item label={topic.label}>
                    {topic.subTopics.map((subTopic) => (
                      <ol className="list-disc">
                        <li>{subTopic}</li>
                      </ol>
                    ))}
                  </Accordion.Item>
                </Accordion>
              </div>
            ))} */}
        {/* <div>
                  {Topics.map((topic, index) => (
                    <div className="mt-8" key={topic.label}>
                      <p className="mb-4 text-2xl font-medium text-gray-900">
                        {index + 1}. {topic.label}
                      </p>
                      {/* <br /> */}
        {/* <List className="mt-4" type="ordered">
                        {topic.subTopics.map((subTopic, index) => (
                          <List.Item
                            className="relative left-6 text-lg font-medium text-gray-500"
                            key={subTopic}
                          >
                            {index + 1}) {subTopic}
                          </List.Item>
                        ))}
                      </List> */}
        {/* </div> 
                  ))}
                </div>
          </div>
        </section> */}
      </div>
    </>
  )
}

export default About

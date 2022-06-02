import React from 'react'

function about() {
  return (
    <><div className="p-4">
      <section className='max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8'>
        <h2 className="text-3xl font-extrabold sm:text-4xl">Vision</h2>
        <p className="mt-4 text-gray-600">
          Leadership in Quality Technical Education, Interdisciplinary Research and Innovation, with a focus on
          Sustainable and Inclusive Technology
        </p>
      </section>
      <section className='max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8'>
        <h2 className="text-3xl font-extrabold sm:text-4xl">Mission</h2>
        <p className="mt-4 text-gray-600">
          <ul>
            <li>
              To deliver outcome-based quality education, emphasizing on experiential learning with
              state-of-the-art infrastructure
            </li>
            <li>
              To create a conducive environment for interdisciplinary research and innovation.
            </li>
            <li>
              To develop professionals through holistic education focusing on individual growth, discipline,
              integrity, ethics and social sensitivity.
            </li>
            <li>
              To nurture industry – institution collaboration leading to competency enhancement and
              entrepreneurship.
            </li>
            <li>
              To focus on technologies that are sustainable and inclusive, benefiting all sections of the society.
            </li>
          </ul>
        </p>
      </section><section>
        <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
            >
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src="https://rvce.edu.in/sites/default/files/styles/slider/public/PIC015-converted-20%25.jpg?itok=I7U60Fq8"
                alt="Man using a computer"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">About RVCE</h2>

              <p className="mt-4 text-gray-600">
                RV College of Engineering (RVCE) established in 1963 is one of the earliest self-financing
                engineering colleges in the country. The institution is run by Rashtreeya Sikshana Samithi Trust
                (RSST) a not-for-profit Trust. RVCE is recognized as leading technical institution and rated
                amongst the top five self-financing Engineering colleges in the country. Currently, the institution
                offers 13 Bachelor, 16 Master Programs and all the departments have research centres, affiliated
                to Visvesvaraya Technological University (VTU) Belagavi.
                The institution is Ranked 78th in the Country by National Institutional Ranking Framework (NIRF)
                during 2020-21 and QS-IGUAGE - DIAMOND University Rating (2021-2024). 11 UG programs
                and eligible M. Tech. & MCA programs have been accredited by NBA multiple times. The
                institution has to its credit over 1500 National and International Journal publications, filed over 50
                patents, 44 published patents, 5 patents granted, completed sponsored research and consultancy
                projects worth ₹. 20.0 crores in the last three years. Established 16 ics. The College currently has
                student strength more than 5500, faculty strength of above 350, technical administrative Staff of
                about 230 and around 350 Research Scholars are pursuing Ph.D.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8'>
        <h2 className="text-3xl font-extrabold sm:text-4xl">ABOUT THE CONFERENCE</h2>
        <p className="mt-4 text-gray-600">
          The 6th International Conference on “Computational Systems and Information Technology for
          Sustainable Solutions [CSITSS – 2022] focusses to bring together leading academic scientists,
          researchers, industry representatives, postdoctoral fellows and research scholars around the
          world to share their knowledge and research expertise in SPICCE (Sensors, Processors,
          Intelligent systems, Computing, Communication and Energy solutions) from 21th to 23rd
          December 2022.
          The conference has been held successfully for the past five years with participants from all over
          India and abroad. All peer reviewed and selected papers of the conference will be submitted for
          possible inclusion in IEEE digital library Indexed by Scopus. The present version of the
          CSITSS-2022 aims to achieve higher standards by attracting original research works in SPICCE.
          International speakers will deliver the keynote talks on the latest happenings in the domains. The
          CSITSS-2022 ensures to provide a platform for researchers around the globe for knowledge
          exchange and networking.
        </p>
      </section>
    </div>
    </>
  )
}

export default about
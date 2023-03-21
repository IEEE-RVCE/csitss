import { Accordion } from "@mantine/core";
import React from "react";
import { Topics } from "./tech";

function about() {
  return (
    <>
      <div className="p-4">
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Vision</h2>
          <p className="mt-4 text-gray-600">
            Leadership in Quality Technical Education, Interdisciplinary
            Research and Innovation, with a focus on Sustainable and Inclusive
            Technology
          </p>
        </section>
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Mission</h2>
          <p className="mt-4 text-gray-600">
            <ul className="list-disc">
              <li>
                To deliver outcome-based quality education, emphasizing on
                experiential learning with state-of-the-art infrastructure
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
                To nurture industry – institution collaboration leading to
                competency enhancement and entrepreneurship.
              </li>
              <li>
                To focus on technologies that are sustainable and inclusive,
                benefiting all sections of the society.
              </li>
            </ul>
          </p>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://rvce.edu.in/sites/default/files/styles/slider/public/PIC015-converted-20%25.jpg?itok=I7U60Fq8"
                  alt="Man using a computer"
                />
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl ">About RVCE</h2>

                <p className="mt-4 text-justify text-gray-600">
                  RV College of Engineering (RVCE) established in 1963 is one of
                  the earliest self-financing engineering colleges in the
                  country. The institution is run by Rashtreeya Sikshana Samithi
                  Trust (RSST) a not-for-profit Trust. RVCE is an Autonomous
                  college. Currently, the institution offers 15 Bachelors, 14
                  Master Programs and all the departments have Research Centres,
                  affiliated to Visvesvaraya Technological University (VTU)
                  Belagavi. The institution has set itself a Vision “Leadership
                  in Quality Technical Education, Interdisciplinary Research &
                  Innovation, With a Focus on Sustainable and Inclusive
                  Technology”.
                  <br />
                  <br />
                  Recent awards and achievements include - Ranked 89th in the
                  Country by National Institutional Ranking Framework (NIRF:
                  2022), QS-IGUAGE -Diamond University Rating (2021-2024),
                  “Excellent” rating in ARIIA Ranking-2021 and NPTEL (Local
                  Chapter) “AA” Rating & Max. No. of NPTEL Stars. The
                  institution has to its credit over 1500 National and
                  International Journal & Conference publications, filed over 50
                  patents, 49 published patents, 15 granted patents, completed
                  sponsored research and consultancy projects worth Rs. 20.0
                  crores in the last three years. The institution has
                  established Centres of Competence (5) and Centres of
                  Excellence (17) in various domains. The students have won
                  awards and accolades in national and international
                  competitions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            ABOUT THE CONFERENCE
          </h2>
          <p className="mt-4 text-justify text-gray-600">
            The 6th International Conference on “Computational Systems and
            Information Technology for Sustain- able Solutions [CSITSS – 2022]”
            focusses to bring together leading academicians, scientists,
            researchers, industry representatives, postdoctoral fellows and
            research scholars around the world to share their knowledge and
            research expertise in SPICCE (Sensors, Processors, Intelligent
            systems, Computing, Communication and Energy solutions) from 21
            <sup>st</sup> to 23<sup>rd</sup> December 2022.
            <br />
            <br />
            The conference has been successfully organised for the past five
            years with participants from all over India and abroad. All peer
            reviewed, selected and presented papers of the conference will be
            submitted for possible inclusion in IEEE digital library. The
            present version of the CSITSS-2022 aims to achieve higher standards
            by attracting original research works in the domain of SPICCE.
            International speakers will deliver the keynote talks on the latest
            technologies in these domains. The CSITSS-2022 ensures to provide a
            platform for researchers around the globe for knowledge exchange and
            networking.
          </p>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              CONFERENCE TRACKS
            </h2>
            {Topics.map((topic) => (
              <div className="flex flex-col overflow-hidden  rounded-lg">
                <Accordion>
                  <Accordion.Item label={topic.label}>
                    {topic.subTopics.map((subTopic) => (
                      <ol>
                        <li>{subTopic}</li>
                      </ol>
                    ))}
                  </Accordion.Item>
                </Accordion>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default about;

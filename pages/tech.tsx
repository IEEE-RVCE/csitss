import { Center, List, Tabs } from "@mantine/core";

import React from "react";

export const Topics = [
  {
    label: "Renewable Energy & Power System",
    subTopics: [
      "Power systems & HVDC",
      "Power electronics and Industrial drives",
      "Renewable energy systems & Grid Integration",
      "Micro grids and Smart grids",
      "Power system protection, monitoring & control",
      "Computational intelligent techniques for energy sustainability",
      "Power system resilience & Cyber security",
    ],
  },
  {
    label: "Robotics and automation",
    subTopics: [
      "Sensors for smart systems (IoT/Healthcare etc,.)",
      "Industrial & Home Automation",
      "Robotics and Advanced control application",
      "Biomedical applications",
      "Virtual instrumentation",
      "UAV/Drone Technology",
      "Wearable and Implantable Body Sensor",
    ],
  },
  {
    label: "Communication",
    subTopics: [
      "5G and beyond 5G Technology",
      "Image/Video/Audio processing",
      "Optical communication and networks",
      "RADAR, SONAR and LIDAR applications",
      "Microwave and Wireless Networking",
      "Software Defined Networking (SDN)",
      "Social Media Networks",
      "Ultra-wideband and Green communications",
    ],
  },
  {
    label: "Computing and Intelligent Systems",
    subTopics: [
      "Computer Networks and Cyber security",
      "Machine Intelligence",
      "Web and Mobile Applications",
      "Computing Environments (Cloud, Distributed, etc.)",
      "Internet of Things / Edge Systems",
      "Augmented, Virtual Reality and extended reality",
      "Data Analytics",
      "Block Chain",
      "Computer Vision and Pattern Recognition",
      "Metaverse",
    ],
  },
  {
    label: "E-mobility and Sustainable Systems",
    subTopics: [
      "Hybrid Energy Storage & BMS",
      "Smart City & Smart Energy System",
      "Fuel-cell-based transport",
      "EV/HEV Design, HIL, SIL & Annotation",
      "EVs and PHEVs charging, V2G strategies",
      "Autonomous vehicle, intelligent guidance,safety assessment",
      "Modelling, simulation and control of EV systems",
    ],
  },
  {
    label: "Embedded systems and VLSI Design",
    subTopics: [
      "Analog/ Digital /Mixed Signal/RF System Designs",
      "Advances in CAD for VLSI",
      "Embedded Systems Design",
      "Low-power digital architectures",
      "Test & Reliability of Machine Learning Systems",
      "Microsystems/MEMS/Sensors Test",
      "Pre-silicon, Post-silicon: Debug, Verification and Validation",
    ],
  },
];

function Tech() {
  return (
    <div className="mt-10">
      <Tabs grow>
        <Tabs.Tab label="Call For Papers">
          <aside className="bg-gray-100 p-12 sm:p-16 lg:p-24">
            <div className="mx-auto">
              <p className="text-center text-3xl font-bold sm:text-5xl">
                Call For Papers{" "}
              </p>
              <p className="text-justify text-xl font-medium text-gray-500">
                Prospective authors are encouraged to submit quality and
                original research papers for presentation at the Conference.
                Authors are requested to submit their manuscripts in PDF format
                not exceeding 6 pages in A4 size through online submission at
                Microsoft CMT - on or{" "}
                <i>
                  before 5<sup>th</sup> August 2023.{" "}
                </i>
                The manuscript should follow the standard IEEE template.The
                format of the paper could be downloaded in link below{" "}
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
                  href="https://cmt3.research.microsoft.com/CSITSS2023"
                  className="block rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow-xl hover:bg-blue-600"
                  target="_blank"
                >
                  Submit Your Paper
                </a>
                {/* <a
                  href="brochure.pdf"
                  className="mt-4 block rounded-lg px-5 py-3 font-medium text-blue-500 hover:text-blue-600 sm:mt-0"
                  download>
                  Download CFP
                </a> */}
              </div>
            </div>
          </aside>
        </Tabs.Tab>
        <Tabs.Tab label="Conference Tracks">
          <aside className="m-6 bg-gray-100 sm:m-8 lg:m-12">
            <div className=" p-6 sm:p-8 lg:p-12">
              <p className="text-center text-3xl font-bold sm:text-5xl">
                Conference Tracks{" "}
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
                      {/* <br /> */}
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
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default Tech;

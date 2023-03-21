import { List, Tabs } from "@mantine/core";

import React from "react";

export const Topics = [
  {
    label: "Sensors: Sensors, Automation and Process control",
    subTopics: [
      "Sensors for Smart Systems (Health Care/IoT systems / Agriculture, etc.) ",
      "Wearable electronics",
      "Industrial/Home Automation",
      "Bioinformatics",
      "Non-invasive Biomedical devices ",
      "Robotics",
      "Advanced control Applications",
    ],
  },
  {
    label: "Processors: VLSI Design and Embedded Systems",
    subTopics: [
      "Analog/ Digital /Mixed Signal/RF System Designs",
      "Static Timing Analysis, Physical design, Circuit Design and Layouts",
      "Emulation, Verification: Pre-silicon, Post-silicon and Validation",
      "H/W and S/W acceleration, IPs for system designs Testing - ATE, DFT, MBIST, Scan",
      "Machine Learning on Hardware/Neural Processing units",
      "High reliable Systems",
    ],
  },
  {
    label: "Intelligent Systems",
    subTopics: [
      "Modeling and Simulation",
      "Natural Language Processing",
      "Computer Vision and Pattern Recognition ",
      "Data Science and Big Data Analytics",
      "Augmented and Virtual Reality",
      "Artificial Intelligence and Machine Learning",
      "Smart City",
      "Smart Transport Systems",
    ],
  },
  {
    label: "Computing",
    subTopics: [
      "Cyber security and Block-chain",
      "Web and Mobile Applications",
      "Human-Computer Interaction",
      "Internet of Things/ Cyber Physical Systems",
      "Soft Computing",
      "Knowledge-based Systems",
      "Cloud and Edge Computing",
      "Social Computing and Networks",
      "Autonomic Software Systems",
    ],
  },
  {
    label: "Communication",
    subTopics: [
      "Sensor Networks",
      "Channel Models for mmwave and THz",
      "Signal Processing for RADAR, SONAR and LiDAR",
      "Speech/Image/Video Processing",
      "MIMO and multicarrier",
      "5G and Beyond 5G Communications",
      "IoT networks and Integration with cellular",
      "Optical Communication",
      "Software Defined Radio/ Networks",
    ],
  },
  {
    label: "Energy Systems",
    subTopics: [
      "Energy management for smart mobility ",
      "Intelligent Energy management and sustainable solutions",
      "Computational Intelligence for energy management",
      "Autonomous Electric vehicles",
      "Renewable energy systems ",
      "Power System and High Voltage DC Transmission",
      "Wireless Power Transfer",
      "Battery Technology",
      "Industrial Drives and Automation",
    ],
  },
];

function Tech() {
  return (
    <div>
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
                  before 5<sup>th</sup> November 2022
                </i>
                . The manuscript should follow the standard IEEE template.The
                format of the paper could be downloaded in link below{" "}
                <a href="https://www.ieee.org/conferences/publishing/templates.html">
                  <b>
                    https://www.ieee.org/conferences/publishing/templates.html
                  </b>
                </a>
                .<br />
                All submission for the conference will be handled electronically
                and submitted papers will be peer reviewed by domain experts. To
                submit the papers use the Microsoft CMT Link mentioned below:
                <br />
                <a href="https://cmt3.research.microsoft.com/CSITSS2022">
                  <b>https://cmt3.research.microsoft.com/CSITSS2022.</b>
                </a>
              </p>

              <div className="mt-8 sm:flex sm:items-center sm:justify-center">
                <a
                  href="https://cmt3.research.microsoft.com/CSITSS2022"
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
          <aside className="bg-gray-100 p-12 sm:p-16 lg:p-24">
            <div className="">
              <p className="text-center text-3xl font-bold sm:text-5xl">
                Conference Tracks{" "}
              </p>
              <p className="text-center text-sm font-bold">
                Research submissions on all topics related to SPICCE (Sensors,
                Processors, Intelligent systems, Computing, Communication and
                Energy solutions), but not limited to the following
              </p>
              {Topics.map((topic, index) => (
                <div className="mt-8" key={topic.label}>
                  <p className="text-2xl font-medium text-gray-900">
                    {index + 1}. {topic.label}
                  </p>
                  <List className="mt-4" type="ordered">
                    {topic.subTopics.map((subTopic, index) => (
                      <List.Item
                        className="text-lg font-medium text-gray-500"
                        key={subTopic}
                      >
                        {index + 1}) {subTopic}
                      </List.Item>
                    ))}
                  </List>
                </div>
              ))}
            </div>
          </aside>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default Tech;

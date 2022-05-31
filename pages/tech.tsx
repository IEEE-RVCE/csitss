import { List, Tabs } from "@mantine/core";

import React from "react";

const Topics = [{
  label: "Social Media and Mobile Computing",
  subTopics: [
    " Web Mining",
    "Social Media Networks",
    "Multimedia Communications",
    "Mobile computing",
    "Wireless Sensors",
    "                Virtual Reality and Augmented Reality",

  ]
}, {
  label: "Analytics and Cloud Computing",
  subTopics: [
    "Big Data Analytics & Management",
    "AI and Machine Learning techniques",
    "High Performance Computing",
    "Internet of Things(IoT)",
    "Cloud and Grid Computing",
    "Parallel and Distributed Systems",
    "Software Defined Networking(SDN)",
    "Cryptography and Information Security",
    "Blockchain"
  ]
}, {
  label: "Communication",
  subTopics: [
    "Wireline communications",
    "Broadband communication",
    "In Vehicle and Vehicular communication",
    "5G and beyond 5G"
  ]
}]





function Tech() {
  return (
    <div>
      <Tabs grow>
        <Tabs.Tab label="Call For Papers">

          <aside className="bg-gray-100 p-12 sm:p-16 lg:p-24">
            <div className="mx-auto">
              <p className="text-3xl font-bold sm:text-5xl text-center">
                Call For Papers{" "}
              </p>
              <p className="text-xl font-medium text-gray-500">
                Prospective authors are encouraged to submit high quality research
                papers for presentation at the Conference. The papers should not
                have been published elsewhere and should be original research work.
                Authors are requested to submit their manuscripts in PDF format not
                exceeding 6 pages in A4 size through online submission on or before 30th
                September 2021. The manuscript has to be in standard IEEE template
                and checked for plagiarism. All submission will be handled
                electronically and submitted papers will be peer reviewed by domain
                experts.
              </p>

              <div className="mt-8 sm:flex sm:items-center sm:justify-center">
                <a
                  href=""
                  className="block rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow-xl hover:bg-blue-600"
                >
                  Submit Your Paper
                </a>

                <a
                  href=""
                  className="mt-4 block rounded-lg px-5 py-3 font-medium text-blue-500 hover:text-blue-600 sm:mt-0"
                >
                  View Brochure
                </a>
              </div>
            </div>
          </aside>
        </Tabs.Tab>
        <Tabs.Tab label="Conference Topics">
          <aside className="bg-gray-100 p-12 sm:p-16 lg:p-24">
            <div className="">
              <p className="text-3xl font-bold sm:text-5xl text-center">
                Conference Topics{" "}
              </p>
              {Topics.map((topic) => (
                <div className="mt-8" key={topic.label}>
                  <p className="text-2xl font-medium text-gray-900">
                    {topic.label}
                  </p>
                  <List className="mt-4" type="ordered">
                    {topic.subTopics.map((subTopic) => (
                      <List.Item className="text-lg font-medium text-gray-500" key={subTopic}>
                        {subTopic}
                      </List.Item>
                    ))}
                  </List>
                </div>
              ))}
            </div>
            Research submissions on all topics related to SMACC, but not limited to the following
          </aside>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default Tech;

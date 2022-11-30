import React from "react";
import { Tabs } from "@mantine/core";

export default function pgmschedule() {
  const Day1 = {
    head: [
      [
        "6 INTERNATIONAL CONFERENCE on Computational Systems & Information Technology Sustainable Solutions [CSITSS-2022]",
      ],
      ["TUTORIAL DAY: DAY 1 SCHEDULE/ 21-12-2022"],
    ],
    columns: [
      "",
      "9:30-11:00",
      "11:00-11:15",
      "11:15-12:45",
      "12:45-1:45",
      "1:45-3:15",
      "3:15-3:30",
      "3:30-5:00",
    ],

    rows: [
      [
        "Theme 1",
        "Mr. G Balaji, ABB",
        "High Tea",
        "Mr. G Balaji, ABB",
        "LUNCH",
        "To Be finalised",
        "HIGH TEA",
        "To Be finalised",
      ],
      [
        "Theme 2",
        "Prof Sriram Ganapathy",
        "High Tea",
        "Niral Networks",
        "LUNCH",
        "Sri Hari Prasad Bhat, Leka Wireless",
        "HIGH TEA",
        "Sri Hari Prasad Bhat, Leka Wireless",
      ],
      [
        "Theme 3",
        "Dr. Jyotirmoy Banerjee is Principal Data Scientist,Ericsson",
        "High Tea",
        "Srinivas Kundeti,Ericsson R&D;L Raghunatha Reddy, Senior Data Scientist Ericsson R&D",
        "LUNCH",
        "To Be finalised",
        "HIGH TEA",
        "To Be finalised",
      ],
    ],
  };

  const Day2 = {
    head: [
      [
        "6 INTERNATIONAL CONFERENCE on Computational Systems & Information Technology Sustainable Solutions [CSITSS-2022]",
      ],
      ["Inaguration/ Day 2/ 22-12-2022"],
    ],
    columns: [
      "",
      "10:00-11:00",
      "11:00-11:30",
      "11:30-12:30",
      "12:30-1:30",
      "12:45-1:45",
      "1:45-3:15",
      "3:15-3:30",
      "3:30-5:00",
    ],

    rows: [
      [
        "Theme 1",
        "Inaguration",
        "High Tea",
        "Key note Address: Dr. SS Iyengar",
        "Invited Talk 1: AI and Quantum Electronics:  Dr. L V Subramaniam",
        "LUNCH",
        "Sensors: Paper Proceding: 6 Papers",
        "HIGH TEA",
        "Energy Systems: Paper Proceding 6 Papers",
      ],
      [
        "Theme 2",
        "Inaguration",
        "High Tea",
        "Key note Address: Dr. SS Iyengar",
        "Invited Talk 1: AI and Quantum Electronics:  Dr. L V Subramaniam",
        "LUNCH",
        "Communication:Paper Proceding:6 Papers",
        "HIGH TEA",
        "Processing::Paper Proceding:6 Papers",
      ],
      [
        "Theme 3",
        "Inaguration",
        "High Tea",
        "Key note Address: Dr. SS Iyengar",
        "Invited Talk 1: AI and Quantum Electronics:  Dr. L V Subramaniam",
        "LUNCH",
        "Intelligent Systems:Paper Proceding:6 Papers",
        "HIGH TEA",
        "Computing:Paper Proceding:6 Papers",
      ],
    ],
  };

  const Day3 = {
    head: [
      [
        "6 INTERNATIONAL CONFERENCE on Computational Systems & Information Technology Sustainable Solutions [CSITSS-2022]",
      ],
      ["Conference Day 3/ 23-12-2022"],
    ],
    columns: [
      "",
      "9:30-10:15",
      "10:45-11:30",
      "11:30-11:45",
      "11:450-12:45",
      "12:45-1:45",
      "1:45-3:15",
      "3:15-3:30",
      "3:30-5:00",
    ],

    rows: [
      [
        "Theme 1",
        "Invited Talk:Nokia Networks",
        "Invited Talk: ",
        "High Tea",
        "Invited Talk:Fedility ",
        "LUNCH",
        "Sensors: Paper Proceding: 6 Papers",
        "HIGH TEA",
        "Energy Systems: Paper Proceding 6 Papers",
      ],
      [
        "Theme 2",
        "Invited Talk:Nokia Networks",
        "Invited Talk: ",
        "High Tea",
        "Invited Talk:Fedility ",
        "LUNCH",
        "Communication:Paper Proceding:6 Papers",
        "HIGH TEA",
        "Processing::Paper Proceding:6 Papers",
      ],
      [
        "Theme 3",
        "Invited Talk:Nokia Networks",
        "Invited Talk: ",
        "High Tea",
        "Invited Talk:Fedility ",
        "LUNCH",
        "Intelligent Systems:Paper Proceding:6 Papers",
        "HIGH TEA",
        "Computing:Paper Proceding:6 Papers",
      ],
    ],
  };
  return (
    <>
      <div>
        <Tabs grow>
          <Tabs.Tab label="DAY 1">
            <aside className=" p-12 sm:p-16 lg:p-24">
              <div className="block">
                {Day1.head.map((row) => (
                  <>
                    <th className="block text-blue-800">{row[0]}</th>
                  </>
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y-2 divide-gray-200 border-2 text-sm sm:p-16 lg:p-24">
                    <thead className="bg-gray-100">
                      <tr>
                        {Day1.columns.map((col) => (
                          <th className="whitespace-nowrap px-2 py-2 text-left">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {Day1.rows.map((row) => (
                        <tr>
                          <td className="whitespace-nowrap bg-gray-100 px-1 py-2  text-gray-700">
                            {row[0]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[1]}</td>

                          <td className="bg-gray-100 px-1 py-2  text-gray-700">
                            {row[2]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[3]}</td>

                          <td className=" bg-gray-100 px-1 py-2 text-gray-700">
                            {row[4]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[5]}</td>

                          <td className=" bg-gray-100 px-1 py-2 text-gray-700">
                            {row[6]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[7]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

                          <td className=" bg-gray-100 px-1 py-2 text-gray-700">
                            {row[4]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[5]}</td>

                          <td className=" bg-gray-100 px-1 py-2 text-gray-700">
                            {row[6]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[7]}</td>
                          <td className=" bg-gray-100 px-1 py-2  text-gray-700">
                            {row[8]}
                          </td>
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
              </div>
              <p className="mt-4 text-gray-600">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y-2 divide-gray-200 border-2 text-sm sm:p-16 lg:p-24">
                    <thead className="bg-gray-100">
                      <tr>
                        {Day3.columns.map((col) => (
                          <th className="whitespace-nowrap px-2 py-2 text-left">
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

                          <td className=" px-1 py-2 text-gray-700">{row[1]}</td>

                          <td className="bg-gray-100 px-1 py-2  text-gray-700">
                            {row[2]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[3]}</td>

                          <td className=" bg-gray-100 px-1 py-2 text-gray-700">
                            {row[4]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[5]}</td>

                          <td className=" bg-gray-100 px-1 py-2 text-gray-700">
                            {row[6]}
                          </td>

                          <td className=" px-1 py-2 text-gray-700">{row[7]}</td>
                          <td className=" bg-gray-100 px-1 py-2  text-gray-700">
                            {row[8]}
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
  );
}

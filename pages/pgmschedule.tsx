import React from "react";
import { Tabs } from "@mantine/core";

export default function pgmschedule() {
    const Day1 = {
        head: [
            [
                "6 INTERNATIONAL CONFERENCE on Computational Systems & Information Technology Sustainable Solutions [CSITSS-2022] (Tentative schedule, Subject to changes.)",
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
                // "Mr. G Balaj, ABB",
                "ABB",
                "High Tea",
                // "Mr. G Balaji, ABB",
                "ABB",
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
                // "Sri Hari Prasad Bhat, Leka Wireless",
                "Leka Wireless",
                "HIGH TEA",
                //"Sri Hari Prasad Bhat, Leka Wireless",
                "Leka Wireless",
            ],
            [
                "Theme 3",
                "Ericsson R&D",
                //"Dr. Jyotirmoy Banerjee is Principal Data Scientist,Ericsson",
                "High Tea",
                "Ericsson R&D",
                // "Srinivas Kundeti,Ericsson R&D;L Raghunatha Reddy, Senior Data Scientist Ericsson R&D",
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
                "6 INTERNATIONAL CONFERENCE on Computational Systems & Information Technology Sustainable Solutions [CSITSS-2022] (Tentative schedule, Subject to changes.)",
            ],
            ["Inaguration/ Day 2/ 22-12-2022"],
        ],
        columns: [
            "",
            "10:00-11:00",
            "11:00-11:30",
            "11:30-12:15",
            "12:15-1:15",
            "1:15-2:00",
            "2:00-2:45",
            "2:45-3:00",
            "3:00-4:30",
        ],

        rows: [
            [
                "Theme 1",
                "Inaguration IEM Auditorium",
                "High Tea",
                "Key note Address: Dr. SS Iyengar",
                "Invited Talk 1: AI and Quantum Electronics:  Dr. L V Subramaniam",
                "LUNCH",
                "Planery Talk:Progress Software+ Talk by MUK; BT Seminar Hall    ",
                "HIGH TEA",
                "Sensors: Paper Proceding: 6 Papers",
            ],
            [
                "Theme 2",
                "Inaguration IEM Auditorium",
                "High Tea",
                "Key note Address: Dr. SS Iyengar",
                "Invited Talk 1: AI and Quantum Electronics:  Dr. L V Subramaniam",
                "LUNCH",
                "Planery Talk:Progress Software+ Talk by MUK; BT Seminar Hall   ",
                "HIGH TEA",
                "Communication:Paper Proceding:6 Papers",
            ],
            [
                "Theme 3",
                "Inaguration IEM Auditorium",
                "High Tea",
                "Key note Address: Dr. SS Iyengar",
                "Invited Talk 1: AI and Quantum Electronics:  Dr. L V Subramaniam",
                "LUNCH",
                "Planery Talk:Progress Software+ Talk by MUK; BT Seminar Hall   ",
                "HIGH TEA",
                "Intelligent Systems:Paper Proceding:6 Papers",
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
            "Time",
            "Event",
            "Venue",
        ],

        rows: [
            [
                "9:30-10:15",
                "Plenary Talk - A keynote speech on 5G and Nokia’s sustainable solutions in 5G area which covers not just the 5G ecosystem but also the various enterprise and CSP use cases/solutions where Nokia is already focussing on to make an impact when it comes to sustainable solutions and Environmental Social Governance (ESG) for Industry 4.0, Innovation, infrastructure and improve global economic growth.Speaker: Sunil Kumar G, Head - Industrialization & Commercialization, CNS EnSo SIS, Senior Executive with 28 years track record of successful strategic leadership in the Telecom and IT space with core competencies in Consulting, Operations, Delivery, Pre- Sales, Program management, System Integration, Automation, Testing and Product Management.Successfully built & managed services and product businesses across Europe, Americas, APAC and India including several key onsite engagements in UK, APAC, USA including an independent consultant role in Brazil.",
                "BT Seminar Hall",
            ],
            [
                "10:15-11:00",
                "Invited Talk- by Dr. Devesh Dwivedi, PhD India Site Leader, Global Foundries",
                "BT Seminar Hall",
            ],
            [
                "11:15-11:30",
                "TEA BREAK",
                "",
            ],
            [
                "11:30-1:00",
                "TRACK 1: Processors: VLSI Design & Embedded Systems: Paper ID:13,24,168,257,92",
                "BT Seminar Hall",
            ],
            [
                "",
                "TRACK 2: Computing Systems and Applications-1 : Paper ID:54,148,167,242,261,120",
                "MCA Seminar Hall",
            ],
            [
                "",
                "TRACK 3: Intelligent Systems-2 : Paper ID:132,138,142,144,146,149",
                " IEM Seminar Hall",
            ],
            [
                "1:00-2:00",
                "LUNCH",
                "Food Court",
            ],
            [
                "2:00-2:25",
                "Plenary Talk/TEA BREAK",
                "",
            ],
            [
                "3:00-4:30",
                "TRACK 1: Intelligent Systems-3:Paper ID:150,129,202,215,226,228",
                "BT Seminar Hall",
            ],
            [
                "",
                "TRACK 2: Communication Systems-2:Paper ID:238,19,254,251",
                "MCA Seminar Hall",
            ],
            [
                "",
                "TRACK 3: Intelligent Systems-4:ID:235,237,240,241,256",
                "IEM Seminar Hall",
            ],
            [
                "4:30-5:00",
                "Valedictory",
                "BT Seminar Hall",
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
                                <th className="block text-gray-600">Paper presentation will be updated at the earliest</th>
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
                                <th className="block text-gray-600">Paper presentation will be updated at the earliest</th>

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
    );
}

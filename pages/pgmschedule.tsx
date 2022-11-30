import React from "react";
import { Tabs} from "@mantine/core";

export default function pgmschedule() {
    const Head = {
        rows: [
            ["6 INTERNATIONAL CONFERENCE on Computational Systems & Information Technology Sustainable Solutions [CSITSS-2022]"],
            ["TUTORIAL DAY: DAY 1 SCHEDULE/ 21-12-2022"]
        ]
    };
    const Schedule = {
        columns: ["", "9:30-11:00", "11:00-11:15", "11:15-12:45",
            "12:45-1:45", "1:45-3:15", "3:15-3:30", "3:30-5:00"],

        rows: [
            ["Theme 1", "Mr. G Balaji, ABB", "High Tea", "Mr. G Balaji, ABB", "LUNCH", "To Be finalised", "HIGH TEA", "To Be finalised"],
            ["Theme 2", "Prof Sriram Ganapathy", "High Tea", "To Be finalised", "LUNCH", "Sri Hari Prasad Bhat, Leka Wireless", "HIGH TEA", "Sri Hari Prasad Bhat, Leka Wireless"],
            ["Theme 3", "Dr. Jyotirmoy Banerjee is Principal Data Scientist,Ericsson", "High Tea", "Srinivas Kundeti,Ericsson R&D", "LUNCH", "L Raghunatha Reddy, Senior Data Scientist Ericsson R&D", "HIGH TEA", "Sridhar D Kamoji"],
        ],
    };
    return (
        <>
            <div>
                <Tabs grow >
                    <Tabs.Tab label="DAY 1">
                        <aside className=" p-12 sm:p-16 lg:p-24">

                            <div className="block">
                                {Head.rows.map((row) => (
                                    <>
                                        <th className="block text-blue-800">{row[0]}</th>
                                    </>
                                ))}
                            </div>
                            <p className="mt-4 text-gray-600">
                                <div className="overflow-x-auto">
                                    <table className="border-2 min-w-full divide-y-2 divide-gray-200 text-sm sm:p-16 lg:p-24">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                {Schedule.columns.map((col) => (
                                                    

                                                        <th className="whitespace-nowrap px-2 py-2 text-left">
                                                            {col}
                                                        </th>

                                                    
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200" >
                                            {Schedule.rows.map((row) => (

                                                <tr>
                                                    <td className="whitespace-nowrap px-1 py-2 text-gray-700  bg-gray-100">
                                                        {row[0]}
                                                    </td>

                                                    <td className=" px-1 py-2 text-gray-700">
                                                        {row[1]}
                                                    </td>

                                                    <td className="px-1 py-2 text-gray-700  bg-gray-100">
                                                        {row[2]}
                                                    </td>

                                                    <td className=" px-1 py-2 text-gray-700">
                                                        {row[3]}
                                                    </td>

                                                    <td className=" px-1 py-2 text-gray-700 bg-gray-100">
                                                        {row[4]}
                                                    </td>

                                                    <td className=" px-1 py-2 text-gray-700">
                                                        {row[5]}
                                                    </td>

                                                    <td className=" px-1 py-2 text-gray-700 bg-gray-100">
                                                        {row[6]}
                                                    </td>

                                                    <td className=" px-1 py-2 text-gray-700">
                                                        {row[7]}
                                                    </td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </p>
                        </aside>
                    </Tabs.Tab>
                    <Tabs.Tab label="DAY 2">
                        <aside className="bg-gray-100 p-12 sm:p-16 lg:p-24">
                            <div className="mx-auto">


                            </div>
                        </aside>
                    </Tabs.Tab>
                    <Tabs.Tab label="DAY 3">
                        <aside className="bg-gray-100 p-12 sm:p-16 lg:p-24">
                            <div className="mx-auto">


                            </div>
                        </aside>
                    </Tabs.Tab>
                </Tabs>
            </div>
        </>
    );
}
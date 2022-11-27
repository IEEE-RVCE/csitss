import React from "react";
import { Tabs, Table } from "@mantine/core";

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

        row: [
            ["Theme 1", "Mr. G Balaji, ABB", "HIGH TEA", "Mr. G Balaji, ABB", "LUNCH", "To Be finalised", "HIGH TEA", "To Be finalised"],
            ["Theme 2", "Prof Sriram Ganapathy", "HIGH TEA", "To Be finalised", "LUNCH", "Sri Hari Prasad Bhat, Leka Wireless", "HIGH TEA", "Sri Hari Prasad Bhat, Leka Wireless"],
            ["Theme 3", "Dr. Jyotirmoy Banerjee is Principal Data Scientist,Ericsson", "HIGH TEA", "Srinivas Kundeti,Ericsson R&D", "LUNCH", "L Raghunatha Reddy, Senior Data Scientist Ericsson R&D", "HIGH TEA", "Sridhar D Kamoji"],
        ],
    };
    return (
        <>
            <div className="p-4">
                <Tabs grow>
                    <Tabs.Tab label="DAY 1">
                        <aside className="bg-gray-100 p-12 sm:p-16 lg:p-24">
                            <div className="mx-auto">
                                <table className="grid border-2">
                                    <tbody className="border-1">
                                        <tr>
                                        {Head.rows.map((row) => (
                                            <>
                                                <th className="block col-span-7">{row[0]}</th>

                                                <th className="block col-span-7">{row[1]}</th>

                                            </>
                                        ))}
 </tr>
                                        {Schedule.columns.map((col) => (
                                            <>

                                                <td className="inline whitespace-nowrap px-4 py-2 font-medium text-gray-900 col-span-7">
                                                    {col}
                                                </td>

                                            </>
                                        ))}
                                       


                                        {Schedule.row.map((row) => (
                                            <>
                                                <tr className="divide-y">
                                                    <td className=" whitespace-nowrap px-4 py-2 text-gray-700">
                                                        {row[0]}
                                                    </td>

                                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                                        {row[1]}
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                                        {row[2]}
                                                    </td>
                                                </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
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
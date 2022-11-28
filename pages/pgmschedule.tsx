import React, { useMemo } from "react";
import { useTable } from "react-table"
import { Tabs } from "@mantine/core";

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
    const DATA = [
        { "1": "Theme 1", "2": "Mr. G Balaji, ABB", "3": "HIGH TEA", "4": "Mr. G Balaji, ABB", "5": "LUNCH", "6": "To Be finalised", "7": "HIGH TEA", "8": "To Be finalised" },
        { "1": "Theme 2", "2": "Prof Sriram Ganapathy", "3": "HIGH TEA", "4": "To Be finalised", "5": "LUNCH", "6": "Sri Hari Prasad Bhat,Leka Wireless", "7": "HIGH TEA", "8": "Sri Hari Prasad Bhat, Leka Wireless" },
        { "1": "Theme 3", "2": "Dr. Jyotirmoy Banerjee is Principal Data Scientist,Ericsson", "3": "HIGH TEA", "4": "Srinivas Kundeti,Ericsson R&D", "5": "LUNCH", "6": "L Raghunatha Reddy, Senior Data Scientist Ericsson R&D", "7": "HIGH TEA", "8": "Sridhar D Kamoji" },

    ]
    const COLUMNS = [
        { Header: "", accessor: "1" },
        { Header: "9:30-11:00", accessor: "2" },
        { Header: "11:00-11:15", accessor: "3" },
        { Header: "11:15-12:45", accessor: "4" },
        { Header: "12:45-1:45", accessor: "5" },
        { Header: "1:45-3:15", accessor: "6" },
        { Header: "3:15-3:30", accessor: "7" },
        { Header: "3:30-5:00", accessor: "8" },

    ]
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => DATA, [])
    const tableInstance = useTable(
        {
            columns,
            data,
        }
    )
    const {
        getTableProps,

    } = tableInstance
    return (
        <>
            <div className="p-4">
                <Tabs grow>
                    <Tabs.Tab label="DAY 1">
                        <aside className="bg-gray-100 p-12 sm:p-16 lg:p-24">
                            <div className="mx-auto">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>

                                            </td>
                                        </tr>
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
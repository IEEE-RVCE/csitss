import React from "react";

function registration() {
  const TableData = {
    columns: [
      "DELEGATES",
      "INDIAN DELEGATES AMOUNT IN RS.\n ",
      "FOREIGN DELEGATES AMOUNT IN USD.",
    ],

    rows: [
      ["Regular Registrations from September 16, 2023", "", ""],
      ["Students (IEEE Members) ", "Rs. 5,000", "USD. 100"],
      ["Students (Non-IEEE Members)", "Rs. 6,500", "USD. 130"],
      ["Faculty (IEEE Members) ", "Rs. 6,000", "USD. 125"],
      ["Faculty (Non-IEEE Members)", "Rs. 8,000", "USD. 160"],
      ["Industry Professionals (IEEE Members) ", "Rs. 10,000", "USD. 200"],
      ["Industry Professionals (Non-IEEE Members) ", "Rs. 13,500", "USD. 240"],
      ["Pre Conference Tutorial", "Rs. 500", "USD. 50"],
    ],
  };

  const EarlyBirdTableData = {
    rows: [
      ["Early Bird Registrations before September 15, 2023:", "", ""],
      ["Students ", "Rs. 4,000", "USD. 75"],
      ["Faculty ", "Rs. 5,000", "USD. 100"],
    ],
  };

  return (
    <>
      <div className="p-4">
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Registration</h2>
          <p className="mt-4 text-gray-600">
            At least one of the authors should register to participate in the
            Conference. The payment mode is mentioned in the conference
            website. Registration is compulsory for participation in the Conference.
            Authors can present two papers for single registration.
            <br />
            Authors and participants are requested to download the registration
            form from the conference website and submit the filled form to the
            Email ID:
            <a href="mailto:sitss2022@rvce.edu.in" className="text-indigo-500">
              csitss2023@rvce.edu.in
            </a>
          </p>
        </section>
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Registration Details
          </h2>
          <p className="mt-4 text-gray-600">
            <b>Beneficiary Name: </b>
            PRINCIPAL, RVCE
            <br />
            <b>Bank Account Number: </b>
            136010112055
            <br />
            <b>Bank Name: </b>
            KOTAK MAHINDRA BANK
            <br />
            <b>Branch Name: </b>
            RVCE Campus, Bengaluru
            <br />
            <b>IFSC Code: </b>
            KKBK0008053
            <br />
            <b>SWIFT Code: </b>
            KKBKINBB
          </p>
        </section>
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Pricing Details
          </h2>
          <p className="mt-4 text-gray-600">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                  <tr>
                    {TableData.columns.map((col) => (
                      <>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                          {col}
                        </th>
                      </>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {EarlyBirdTableData.rows.map((row) => (
                    <tr>
                      <td
                        className={`whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 ${row[0] ===
                          "Early Bird Registrations before 15th November 2022"
                          ? "font-extrabold"
                          : ""
                          }`}
                      >
                        {row[0]}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row[1]}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                  {TableData.rows.map((row) => (
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {row[0]}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row[1]}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </p>
          <p>
            <i>*Inclusion of 18% GST</i>
          </p>
        </section>
      </div>
    </>
  );
}

export default registration;

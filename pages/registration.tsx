import React from 'react'

function registration() {


  const TableData = {
    columns: [
      "DELEGATES", "INDIAN DELEGATES AMOUNT IN RS.\n(INCLUDING GST) ", "  FOREIGN DELEGATES AMOUNT IN USD.(INCLUDING GST)"],

    rows: [
      ["Students (Early bird Registrations) ", "Rs. 4,000", "USD. 75"],
      ["Faculty (Early bird Registrations) ", "Rs. 5,000", "USD. 100"], ["Students (IEEE Members) ", "Rs. 5,000", "USD. 100"],
      ["Students (Non-IEEE Members)", "Rs. 6,000", "USD. 125"],
      ["Faculty (IEEE Members) ", "Rs. 6,000", "USD. 125"],
      ["Faculty (Non-IEEE Members)", "Rs. 7,500", "USD. 150"],
      ["Industry Professionals (IEEE Members) ", "Rs. 10,000", "USD. 200"],

    ]

  }


  return (
    <>
      <div className="p-4">
        <section className='max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8'>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Registration</h2>
          <p className="mt-4 text-gray-600">
            At least one of the authors should register to participate in the
            Conference. All peer reviewed and selected papers of the
            conference will be submitted for possible inclusion in IEEE digital
            library Indexed by Scopus. The payment mode is mentioned in
            the conference website. Registration is compulsory for
            participation in the Conference.
            Authors and participants are requested to download the
            registration form from the conference website and submit the
            filled form to the Email ID:
            <a href="mailto:sitss2022@rvce.edu.in" className='text-indigo-500' >
              csitss2022@rvce.edu.in
            </a>
          </p>
        </section>
        <section className='max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8'>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Registration Details</h2>
          <p className="mt-4 text-gray-600">
            <b>
              Beneficiary Name:{" "}
            </b>
            PRINCIPAL, RVCE<br />
            <b>
              Bank Account Number:{" "}
            </b>
            136010112055<br />
            <b>
              Bank Name:{" "}
            </b>
            KOTAK MAHINDRA BANK<br />
            <b>
              Branch Name:{" "}
            </b>
            RVCE Campus, Bengaluru<br />
            <b>
              IFSC Code:{" "}
            </b>
            KKBK0008053<br />
            <b>
              SWIFT Code:{" "}
            </b>
            KKBKINBBCPC
          </p>
        </section>
        <section className='max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8'>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Pricing Details</h2>
          <p className="mt-4 text-gray-600">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm divide-y-2 divide-gray-200">
                <thead>
                  <tr>
                    {TableData.columns.map(col => (
                      <>
                        <th
                          className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
                        >
                          {col}
                        </th>
                      </>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {TableData.rows.map(row => (
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        {row[0]}
                      </td>
                      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                        {row[1]}
                      </td>
                      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </p>
        </section>
      </div>
    </>
  )
}

export default registration
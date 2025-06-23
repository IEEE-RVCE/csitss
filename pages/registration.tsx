import React from 'react'

function registration() {
  // const TableData = {
  //   columns: [
  //     "DELEGATES",
  //     "INDIAN DELEGATES AMOUNT IN RS.\n ",
  //     "FOREIGN DELEGATES AMOUNT IN USD.",
  //   ],

  //   rows: [
  //     ["Regular Registrations from September 16, 2023", "", ""],
  //     ["Students (IEEE Members) ", "Rs. 5,000", "USD. 100"],
  //     ["Students (Non-IEEE Members)", "Rs. 6,500", "USD. 130"],
  //     ["Faculty (IEEE Members) ", "Rs. 6,000", "USD. 125"],
  //     ["Faculty (Non-IEEE Members)", "Rs. 8,000", "USD. 160"],
  //     ["Industry Professionals (IEEE Members) ", "Rs. 10,000", "USD. 200"],
  //     ["Industry Professionals (Non-IEEE Members) ", "Rs. 13,500", "USD. 240"],
  //     ["Pre Conference Tutorial", "Rs. 500", "USD. 50"],
  //   ],
  // };

  // const EarlyBirdTableData = {
  //   rows: [
  //     ["Early Bird Registrations before September 15, 2023:", "", ""],
  //     ["Students ", "Rs. 4,000", "USD. 75"],
  //     ["Faculty ", "Rs. 5,000", "USD. 100"],
  //   ],
  // };

  return (
    <>
      <div className="p-4">
        {' '}
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Registration
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            {/* At least one of the authors should register to participate in the
            Conference. The payment mode is mentioned in the conference
            website. Registration is compulsory for participation in the Conference.
            Authors can present two papers for single registration.
            <br />
            Authors and participants are requested to download the registration
            form from the conference website and submit the filled form to the
            Email ID:
            <a href="mailto:csitss@rvce.edu.in" className="text-indigo-500">
              csitss@rvce.edu.in
            </a> */}
            The details of the registration fees are as follows:
          </p>
        </section>
        {/* <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
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
        </section> */}{' '}
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-3xl font-extrabold sm:text-4xl">
            Pricing Details
          </h2> */}{' '}
          <div className="mt-4">
            <div className="mb-3 md:hidden">
              <p className="text-xs text-gray-500 italic text-center">
                💡 Swipe left to see all pricing details
              </p>
            </div>
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="min-w-full divide-y divide-x text-xs sm:text-sm border-2 border-blue-900 divide-blue-900">
                <thead className="divide-x divide-y divide-blue-900 ">
                  {' '}
                  <tr className="bg-blue-900 text-white">
                    <th
                      colSpan={6}
                      className="px-2 py-3 text-center text-xs sm:text-sm font-semibold"
                    >
                      Indian Delegates (INR)
                    </th>
                  </tr>{' '}
                  <tr className="divide-x divide-blue-900">
                    <th
                      colSpan={2}
                      rowSpan={2}
                      className="px-2 py-3 text-center text-xs sm:text-sm font-medium bg-gray-50"
                    >
                      Categories
                    </th>
                    <th
                      colSpan={2}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-2 sm:px-4 py-3 shadow-lg"
                    >
                      <span className="flex items-center justify-center gap-1 sm:gap-2">
                        <svg
                          className="w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm leading-tight text-center">
                          Early Bird Registration
                          <br className="hidden sm:inline" />
                          <span className="text-xs opacity-90">
                            (On or before 18th September)
                          </span>
                        </span>
                      </span>
                    </th>
                    <th
                      colSpan={2}
                      className="px-2 py-3 text-center text-xs sm:text-sm font-medium bg-gray-50"
                    >
                      Regular Registration
                    </th>
                  </tr>{' '}
                  <tr className="divide-x divide-blue-900">
                    <th className="hidden"></th>
                    <th className="px-1 sm:px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      IEEE
                    </th>
                    <th className="px-1 sm:px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      Non-IEEE
                    </th>
                    <th className="px-1 sm:px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      IEEE
                    </th>
                    <th className="px-1 sm:px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      Non-IEEE
                    </th>
                  </tr>
                </thead>{' '}
                <tbody className="divide-y divide-blue-900">
                  <tr className="divide-x text-center divide-blue-900">
                    <th
                      rowSpan={3}
                      className="px-2 py-3 text-xs sm:text-sm font-medium bg-gray-50 align-middle"
                    >
                      With Authorship
                    </th>
                    <th className="px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      Student/Research Scholars
                    </th>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      &#8377;5310
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      &#8377;6490
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      &#8377;6490
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      &#8377;7670
                    </td>
                  </tr>
                  <tr className="divide-x text-center divide-blue-900">
                    <th className="hidden"></th>
                    <th className="px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      Academicians
                    </th>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      &#8377;7080
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      &#8377;8260
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      &#8377;8260
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      &#8377;10030
                    </td>
                  </tr>
                  <tr className="divide-x text-center divide-blue-900">
                    <th className="hidden"></th>
                    <th className="px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      Industry Professionals
                    </th>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      &#8377;8260
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      &#8377;9440
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      &#8377;11800
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      &#8377;15930
                    </td>
                  </tr>
                  <tr className="divide-x text-center divide-blue-900">
                    <th
                      colSpan={2}
                      className="px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50"
                    >
                      Pre Conference Tutorial
                    </th>
                    <td colSpan={4} className="px-2 py-2 text-xs sm:text-sm">
                      &#8377;500
                    </td>
                  </tr>
                  {/* <tr className="divide-x text-center divide-blue-900 ">
                    <th colSpan={2}>
                    Conference Participation without authorship-attendee
                    </th>
                    <td colSpan={4}>
                      2500
                    </td>
                  </tr> */}
                  {/* <br /> */}{' '}
                  <tr className="divide-x text-center bg-blue-900 text-white divide-blue-900">
                    <th
                      colSpan={6}
                      className="px-2 py-3 text-center text-xs sm:text-sm font-semibold"
                    >
                      Foreign Delegates (USD)
                    </th>
                  </tr>{' '}
                  <tr className="divide-x text-center divide-blue-900">
                    <th
                      colSpan={2}
                      rowSpan={2}
                      className="px-2 py-3 text-center text-xs sm:text-sm font-medium bg-gray-50"
                    >
                      Categories
                    </th>
                    <th
                      colSpan={2}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-2 sm:px-4 py-3 shadow-lg"
                    >
                      <span className="flex items-center justify-center gap-1 sm:gap-2">
                        <svg
                          className="w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm leading-tight text-center">
                          Early Bird Registration
                          <br className="hidden sm:inline" />
                          <span className="text-xs opacity-90">
                            (On or before 18th September)
                          </span>
                        </span>
                      </span>
                    </th>
                    <th
                      colSpan={2}
                      className="px-2 py-3 text-center text-xs sm:text-sm font-medium bg-gray-50"
                    >
                      Regular Registration
                    </th>
                  </tr>
                  <tr className="divide-x text-center divide-blue-900">
                    <th className="hidden"></th>
                    <th className="px-1 sm:px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      IEEE
                    </th>
                    <th className="px-1 sm:px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      Non-IEEE
                    </th>
                    <th className="px-1 sm:px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      IEEE
                    </th>
                    <th className="px-1 sm:px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      Non-IEEE
                    </th>
                  </tr>
                  {/* </thead> */}
                  {/* <tbody className="divide-y divide-gray-200"> */}{' '}
                  <tr className="divide-x text-center divide-blue-900">
                    <th
                      rowSpan={3}
                      className="px-2 py-3 text-xs sm:text-sm font-medium bg-gray-50 align-middle"
                    >
                      With Authorship
                    </th>
                    <th className="px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      Student/Research Scholars
                    </th>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      $80
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      $110
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      $110
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      $130
                    </td>
                  </tr>
                  <tr className="divide-x text-center divide-blue-900">
                    <th className="hidden"></th>
                    <th className="px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      Academicians
                    </th>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      $100
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      $130
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      $135
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      $165
                    </td>
                  </tr>
                  <tr className="divide-x text-center divide-blue-900">
                    <th className="hidden"></th>
                    <th className="px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50">
                      Industry Professionals
                    </th>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      $110
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      $135
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      $200
                    </td>
                    <td className="px-1 sm:px-2 py-2 text-xs sm:text-sm">
                      $240
                    </td>
                  </tr>
                  <tr className="divide-x text-center divide-blue-900">
                    <th
                      colSpan={2}
                      className="px-2 py-2 text-xs sm:text-sm font-medium bg-gray-50"
                    >
                      Pre Conference Tutorial
                    </th>
                    <td colSpan={4} className="px-2 py-2 text-xs sm:text-sm">
                      $25
                    </td>
                  </tr>
                  {/* <tr className="divide-x text-center  divide-blue-900 ">
                    <th colSpan={2}>
                    Conference Participation without authorship-attendee
                    </th>
                    <td colSpan={4}>
                      50
                    </td>
                  </tr> */}
                  {/* {EarlyBirdTableData.rows.map((row) => (
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
                  ))} */}
                  {/* {TableData.rows.map((row) => (
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
                  ))} */}{' '}
                </tbody>
              </table>
            </div>
          </div>
          <p>
            <strong>
              <i className="text-red-800">
                *All the pricing details mentioned above are inclusive of 18%
                GST
              </i>
            </strong>
          </p>
        </section>{' '}
        <section className="flex justify-center py-4 px-4">
          <a
            href="https://rzp.io/l/vMqgBae"
            className="bg-blue-500 text-white py-3 px-4 sm:px-6 rounded-md text-center hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base font-medium shadow-lg"
          >
            Click Here to Pay Through Razorpay (Indian Delegates)
          </a>
        </section>{' '}
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Registration Method for Foreign Delegates only
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base space-y-1">
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
        </section>{' '}
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h3 className="text-lg sm:text-xl font-extrabold">
            Instructions for Registration
          </h3>{' '}
          <br />
          <ol className="list-decimal text-justify space-y-2 text-sm sm:text-base pl-4 sm:pl-6">
            <li>At least one author per accepted paper has to register.</li>
            <li>
              At least one author must present their accepted paper in the
              conference for consideration of publication on IEEE explore.
            </li>
            <li>
              Registration fee for the paper (
              <span className="font-bold">with authorship</span>) includes
              access to the pre conference tutorial, conference proceedings, all
              technical sessions and presenter certificate.
            </li>
            <li>
              Registration fee for the{' '}
              <span className="font-bold">pre conference tutorial</span>{' '}
              includes access to the pre conference tutorial only (7th Nov
              2025).
            </li>
            <li>
              Registration fee for the{' '}
              <span className="font-bold">
                conference participation without authorship-attendee
              </span>{' '}
              is not entitled for paper publication, however participation
              certificate will be provided.
            </li>

            <li>
              Registration for{' '}
              <span className="font-bold">
                Indian Delegates is through Razorpay
              </span>{' '}
              and{' '}
              <span className="font-bold">
                Foreign Delegates can use the account details
              </span>{' '}
              mentioned for bank transfer
            </li>
            <li>
              While registering for{' '}
              <span className="font-bold">Best Thesis Award</span>, enter paper
              id as 9999
            </li>
          </ol>
        </section>
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          {' '}
          <h3 className="text-lg sm:text-xl font-extrabold">
            Important Notes
          </h3>{' '}
          <br />
          <ol className="list-decimal text-justify space-y-2 text-sm sm:text-base pl-4 sm:pl-6">
            <li>
              Registration category should be chosen appropriately from the
              aforementioned table.
            </li>
            <li>Registration fees are not refundable or non-transferable.</li>
            <li>
              You must save the payment proof in{' '}
              <span className="italic">pdf</span>. This payment proof file is to
              be attached in a section while filling the registration form.
            </li>
            <li>
              CSITSS-2025 organizing committee will not be responsible for any
              financial loss caused by improper transactions during registration
              process in CSITSS-2025.
            </li>
            <li>
              The author's name(s) must match the ones provided during the
              manuscript submission, registration (There should be one/same name
              at all stages of the conference).
            </li>
            <li>
              The submission of invalid proofs will lead to the cancellation of
              participation in the conference.
            </li>
          </ol>
        </section>
        {/*<section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <a className="text-center" href="https://forms.gle/NaKWRJ9gJjiyd4dX6"><p className="bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-bounce text-4xl font-bold">Click Here To Register</p></a>
                </section>  */}
      </div>
    </>
  )
}

export default registration

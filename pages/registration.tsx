import Image from 'next/image'
import React from 'react'

function Registration() {
  // ...existing code...

  return (
    <>
      <div className="p-4 bg-gray-50 font-sans">
        {' '}
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800">
            Registration
          </h2>
          <p className="mt-4 flex ">
            <span className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg shadow-lg text-base lg:text-lg sm:text-sm">
              Registration is closed for All
            </span>
          </p>
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
        {/* ...existing code... */}
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
                      className="bg-green-600 text-white font-bold px-2 sm:px-4 py-3 shadow-lg"
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
                      Pre Conference Tutorial (20th November 2025)
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
                      className="bg-green-600 text-white font-bold px-2 sm:px-4 py-3 shadow-lg"
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
                      Pre Conference Tutorial (20th November 2025)
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
          <p className="mt-2 flex flex-col gap-2 mt-3">
            <strong>
              <i className="text-sm bg-green-600 text-white p-2 rounded-lg">
                *Listener/Attendee Fee is ₹1000
              </i>
            </strong>
            <strong>
              <i className="text-red-800 text-sm">
                *All the pricing details mentioned above are inclusive of 18%
                GST
              </i>
            </strong>
          </p>
        </section>{' '}
        {/* New Professional UI Section for Registration Links */}
        <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Complete Your Registration
            </h2>
            <p className="mt-2 text-gray-600">
              Please select the appropriate registration form below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: For Authors */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                For Authors of Accepted Papers
              </h3>
              <p className="text-gray-500 mb-4">
                Registration (Authors) - CSITSS 2025
              </p>
              <div className="p-2 border rounded-md inline-block mb-4 bg-gray-50 relative overflow-hidden">
                <Image
                  src="/authorQR.png"
                  alt="QR Code for Attendee Registration"
                  width={160}
                  height={160}
                  className="w-40 h-40 object-cover blur-[2px] grayscale opacity-40"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src =
                      'https://placehold.co/160x160/EFEFEF/333333?text=QR+Not+Found'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-extrabold text-xs sm:text-sm shadow-2xl transform -rotate-12 border-2 border-red-700">
                      <div className="text-center leading-tight">
                        REGISTRATION
                        <br />
                        CLOSED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                // href="https://forms.gle/CavwwpknvbzvPHF77"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-2.5 px-5 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium pointer-events-none opacity-50 cursor-not-allowed"
              >
                Registration closed for Authors
              </a>
            </div>

            {/* Card 2: For Attendees */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                For All Other Attendees / Listeners
              </h3>
              <p className="text-gray-500 mb-4">
                (Pre-conference, Listener, Best Thesis Award)
              </p>
              <div className="p-2 border rounded-md inline-block mb-4 bg-gray-50 relative overflow-hidden">
                <Image
                  src="/attendee.png"
                  alt="QR Code for Attendee Registration"
                  width={160}
                  height={160}
                  className="w-40 h-40 object-cover blur-[2px] grayscale opacity-40"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src =
                      'https://placehold.co/160x160/EFEFEF/333333?text=QR+Not+Found'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-extrabold text-xs sm:text-sm shadow-2xl transform -rotate-12 border-2 border-red-700">
                      <div className="text-center leading-tight">
                        REGISTRATION
                        <br />
                        CLOSED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                // href="https://rzp.io/rzp/QUdjqRtG"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-2.5 px-5 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium pointer-events-none opacity-50 cursor-not-allowed"
              >
                Registration closed for Attendees
              </a>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-800">
            Instructions for Registration
          </h3>{' '}
          <br />
          <ol className="list-decimal text-justify space-y-3 text-sm sm:text-base pl-4 sm:pl-6 text-gray-600">
            <li>At least one author per accepted paper has to register.</li>
            <li>
              At least one author must present their accepted paper in the
              conference for consideration of publication on IEEE explore.
            </li>
            <li>
              Registration fee for the paper (
              <span className="font-bold text-gray-700">with authorship</span>)
              includes access to the pre conference tutorial, conference
              proceedings, all technical sessions and presenter certificate.
            </li>
            <li>
              Registration fee for the{' '}
              <span className="font-bold text-gray-700">
                pre conference tutorial
              </span>{' '}
              includes access to the pre conference tutorial only (20th Nov
              2025).
            </li>
            <li>
              Registration fee for the{' '}
              <span className="font-bold text-gray-700">
                conference participation without authorship-attendee
              </span>{' '}
              is not entitled for paper publication, however participation
              certificate will be provided.
            </li>

            <li>
              Registration for{' '}
              <span className="font-bold text-gray-700">
                Indian Delegates is through Razorpay
              </span>{' '}
              and{' '}
              <span className="font-bold text-gray-700">
                Foreign Delegates can use the account details
              </span>{' '}
              mentioned for bank transfer
            </li>
            <li>
              While registering for{' '}
              <span className="font-bold text-gray-700">Best Thesis Award</span>
              , enter paper id as 9999
            </li>
          </ol>
        </section>
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          {' '}
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-800">
            Important Notes
          </h3>{' '}
          <br />
          <ol className="list-decimal text-justify space-y-3 text-sm sm:text-base pl-4 sm:pl-6 text-gray-600">
            <li>
              Registration category should be chosen appropriately from the
              aforementioned table.
            </li>
            <li>Registration fees are not refundable or non-transferable.</li>
            <li>
              You must save the payment proof in{' '}
              <span className="italic font-semibold">pdf</span>. This payment
              proof file is to be attached in a section while filling the
              registration form.
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
        {/* ...existing code... */}
      </div>
    </>
  )
}

export default Registration

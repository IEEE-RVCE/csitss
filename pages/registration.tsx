import React from "react";

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
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Registration</h2>
          <p className="mt-4 text-gray-600">
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
        </section> */}
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-3xl font-extrabold sm:text-4xl">
            Pricing Details
          </h2> */}
          <p className="mt-4 text-gray-600">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                  <tr>
                    {/* {TableData.columns.map((col) => (
                      <>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                          {col}
                        </th>
                      </>
                    ))} */}
                    <th colSpan={6}><b>Indian Delegates (INR)</b></th>
                  </tr>
                  <tr>
                    <th colSpan={2} rowSpan={2}>Categories</th>
                    <th colSpan={2}>Early Bird Registration (till 30th September 2023)</th>
                    <th colSpan={2}>Regular Registration (after 30th September 2023)</th>
                  </tr>
                  <tr>
                    <th>IEEE</th>
                    <th>Non-IEEE</th>
                    <th>IEEE</th>
                    <th>Non-IEEE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <th rowSpan={3}>With Authorship</th>
                    <th>Student/Research Scholars</th>
                    <td>4000</td>
                    <td>5000</td>
                    <td>5000</td>
                    <td>6500</td>
                  </tr>
                  <tr>
                    <th>Academicians</th>
                    <td>5000</td>
                    <td>6000</td>
                    <td>6000</td>
                    <td>8000</td>
                  </tr>
                  <tr>
                    <th>Industry Professionals</th>
                    <td>6000</td>
                    <td>7000</td>
                    <td>10000</td>
                    <td>13500</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>Pre Conference Tutorial</th>
                    <td colSpan={4}>500</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                    Conference Participation without authorship-attendee
                    </th>
                    <td colSpan={4}>
                      2500
                    </td>
                  </tr>
                  {/* <br /> */}
                  <tr>
                    <th colSpan={6}>
                      Foreign Delegates (USD)
                    </th>
                  </tr>
                  <tr>
                    <th colSpan={2} rowSpan={2}>Categories</th>
                    <th colSpan={2}>Early Bird Registration (till 30th September 2023)</th>
                    <th colSpan={2}>Regular Registration (after 30th September 2023)</th>
                  </tr>
                  <tr>
                    <th>IEEE</th>
                    <th>Non-IEEE</th>
                    <th>IEEE</th>
                    <th>Non-IEEE</th>
                  </tr>
                {/* </thead> */}
                {/* <tbody className="divide-y divide-gray-200"> */}
                  <tr>
                    <th rowSpan={3}>With Authorship</th>
                    <th>Student/Research Scholars</th>
                    <td>75</td>
                    <td>100</td>
                    <td>100</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <th>Academicians</th>
                    <td>90</td>
                    <td>120</td>
                    <td>125</td>
                    <td>160</td>
                  </tr>
                  <tr>
                    <th>Industry Professionals</th>
                    <td>100</td>
                    <td>125</td>
                    <td>200</td>
                    <td>240</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>Pre Conference Tutorial</th>
                    <td colSpan={4}>25</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                    Conference Participation without authorship-attendee
                    </th>
                    <td colSpan={4}>
                      50
                    </td>
                  </tr>
                
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
                  ))} */}
                </tbody>
              </table>
            </div>
          </p>
          <p>
            <strong><i>*All the pricing details mentioned above are inclusive of 18% GST</i></strong>
          </p>
        </section>
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-extrabold sm:text-xl">Instructions for Registration</h3> <br />
          <ol className="list-decimal text-justify space-y-1">
            <li>
            At least one author per accepted paper has to register.
            </li>
            <li>At least one author must present their accepted paper in the conference for consideration of publication on IEEE explore.</li>
            <li>Registration fee for the paper (with authorship) includes access to the pre conference tutorial, conference proceedings, all technical sessions and presenter certificate.</li>
            <li>The registration process entitles the same author to present maximum of two papers only. However, the author has to register for each paper ID separately (with the same transaction ID).</li>
            <li>Registration fee for the pre conference tutorial includes access to the pre conference tutorial only (2nd Nov 2023).</li>
            <li>Registration fee for the conference participation without authorship-attendee is not entitled for paper publication, however participation certificate will be provided.</li>
          </ol>
        </section>
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-extrabold sm:text-xl">Important Notes</h3> <br />
          <ol className="list-decimal text-justify space-y-1">
            <li>
            Registration category should be chosen appropriately from the aforementioned table.
            </li>
            <li>
            Registration fees are not refundable or non-transferable.
            </li>
            <li>
            You must save the payment proof in pdf. This payment proof file is to be attached in a section while filling the registration form.
            </li>
            <li>
            CSITSS-2023 organizing committee will not be responsible for any financial loss caused by improper transactions during registration process in CSITSS-2023.
            </li>
            <li>
            The author's name(s) must match the ones provided during the manuscript submission, registration (There should be one/same name at all stages of the conference).
            </li>
            <li>
            The submission of invalid proofs will lead to the cancellation of participation in the conference.
            </li>
          </ol>
        </section>
        <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <a href="https://forms.gle/NaKWRJ9gJjiyd4dX6"><button>Click Here To Register</button></a>
          <p>If it doesn't work, go to the link <a href="https://forms.gle/NaKWRJ9gJjiyd4dX6">https://forms.gle/NaKWRJ9gJjiyd4dX6</a></p>
        </section>
      </div>
    </>
  );
}

export default registration;

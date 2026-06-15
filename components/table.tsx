import React from 'react'

const pricingRows = [
  {
    label: 'Students / Research Scholars',
    earlyIeee: '₹5310/$80',
    earlyNonIeee: '₹6490/$110',
    regularIeee: '₹6490/$110',
    regularNonIeee: '₹7670/$130',
  },
  {
    label: 'Academics',
    earlyIeee: '₹7080/$100',
    earlyNonIeee: '₹8260/$130',
    regularIeee: '₹8260/$135',
    regularNonIeee: '₹10030/$165',
  },
  {
    label: 'Industry Professionals',
    earlyIeee: '₹8260/$110',
    earlyNonIeee: '₹9440/$135',
    regularIeee: '₹11800/$200',
    regularNonIeee: '₹15930/$240',
  },
  {
    label: 'Best Ph.D Thesis Presentation',
    earlyIeee: '₹1180',
    earlyNonIeee: '₹2360',
    regularIeee: '-',
    regularNonIeee: '-',
  },
  {
    label: '*Listener/Attendee Fee',
    earlyIeee: '₹1180',
    earlyNonIeee: '₹2360',
    regularIeee: '-',
    regularNonIeee: '-',
  },
]

function Table() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 px-6 py-5">
            <h2 className="text-center text-lg font-semibold text-white sm:text-xl">
              Indian (Amount in INR ₹) / Foreign Authors and Delegates (Amount
              in USD $)
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-blue-50 text-blue-900">
                <tr>
                  <th
                    rowSpan={2}
                    className="whitespace-nowrap border-b border-r border-gray-200 px-4 py-3 text-base font-semibold"
                  >
                    Particulars
                  </th>
                  <th
                    colSpan={2}
                    className="border-b border-r border-gray-200 px-4 py-3 text-center text-base font-semibold"
                  >
                    Early Bird
                    <div className="text-xs font-medium text-gray-500">
                      (On or Before 30th August)
                    </div>
                  </th>
                  <th
                    colSpan={2}
                    className="border-b border-gray-200 px-4 py-3 text-center text-base font-semibold"
                  >
                    Regular Registration
                  </th>
                </tr>
                <tr className="text-center">
                  <th className="border-b border-r border-gray-200 px-4 py-2 text-sm font-semibold">
                    IEEE
                  </th>
                  <th className="border-b border-r border-gray-200 px-4 py-2 text-sm font-semibold">
                    Non-IEEE
                  </th>
                  <th className="border-b border-r border-gray-200 px-4 py-2 text-sm font-semibold">
                    IEEE
                  </th>
                  <th className="border-b border-gray-200 px-4 py-2 text-sm font-semibold">
                    Non-IEEE
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {pricingRows.map((row) => (
                  <tr key={row.label} className="even:bg-blue-50/60">
                    <td className="border-b border-r border-gray-200 px-4 py-3 font-medium">
                      {row.label}
                    </td>
                    <td className="border-b border-r border-gray-200 px-4 py-3 text-center">
                      {row.earlyIeee}
                    </td>
                    <td className="border-b border-r border-gray-200 px-4 py-3 text-center">
                      {row.earlyNonIeee}
                    </td>
                    <td className="border-b border-r border-gray-200 px-4 py-3 text-center">
                      {row.regularIeee}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-center">
                      {row.regularNonIeee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-gray-200 bg-blue-50 px-6 py-4 text-sm text-blue-900">
            (All the pricing details mentioned above are inclusive of 18% GST)
          </div>
        </div>
      </section>
    </>
  )
}
export default Table

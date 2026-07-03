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
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7b65]/10 border border-[#ff7b65]/20 text-[#ff7b65] text-[10px] font-bold tracking-widest uppercase mb-3">
          Registration
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
          Registration Fees
        </h2>
        <p className="mt-1.5 text-xs text-gray-400">
          Indian (INR ₹) &nbsp;/&nbsp; Foreign Authors &amp; Delegates (USD $)
        </p>
      </div>

      {/* Table card */}
      <div className="overflow-hidden rounded-2xl border border-gray-100/80 bg-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                <th
                  rowSpan={2}
                  className="whitespace-nowrap border-b border-r border-gray-100 bg-gray-50 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-500"
                >
                  Particulars
                </th>
                <th
                  colSpan={2}
                  className="border-b border-r border-gray-100 bg-emerald-50 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-emerald-700"
                >
                  Early Bird
                  <div className="text-[10px] font-medium text-emerald-500 normal-case tracking-normal mt-0.5">
                    On or before 30th August
                  </div>
                </th>
                <th
                  colSpan={2}
                  className="border-b border-gray-100 bg-blue-50 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-blue-700"
                >
                  Regular Registration
                </th>
              </tr>
              <tr className="text-center">
                <th className="border-b border-r border-gray-100 bg-emerald-50/60 px-4 py-2 text-[11px] font-semibold text-emerald-600">
                  IEEE
                </th>
                <th className="border-b border-r border-gray-100 bg-emerald-50/60 px-4 py-2 text-[11px] font-semibold text-emerald-600">
                  Non-IEEE
                </th>
                <th className="border-b border-r border-gray-100 bg-blue-50/60 px-4 py-2 text-[11px] font-semibold text-blue-600">
                  IEEE
                </th>
                <th className="border-b border-gray-100 bg-blue-50/60 px-4 py-2 text-[11px] font-semibold text-blue-600">
                  Non-IEEE
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {pricingRows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="border-b border-r border-gray-100 px-5 py-3 text-sm font-medium text-gray-800">
                    {row.label}
                  </td>
                  <td className="border-b border-r border-gray-100 px-4 py-3 text-center text-sm font-semibold text-emerald-700">
                    {row.earlyIeee}
                  </td>
                  <td className="border-b border-r border-gray-100 px-4 py-3 text-center text-sm text-gray-600">
                    {row.earlyNonIeee}
                  </td>
                  <td className="border-b border-r border-gray-100 px-4 py-3 text-center text-sm font-semibold text-blue-700">
                    {row.regularIeee}
                  </td>
                  <td className="border-b border-gray-100 px-4 py-3 text-center text-sm text-gray-600">
                    {row.regularNonIeee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer notes */}
        <div className="border-t border-gray-100 bg-gray-50/70 px-5 py-4 space-y-1.5 text-xs text-gray-500">
          <p>The manuscript length should be <span className="font-semibold text-gray-700">5–6 pages</span>.</p>
          <p>Additional pages beyond the limit will incur an extra page charge of <span className="font-semibold text-gray-700">INR 1180 or USD 30 per page</span>. Upto extra two pages only.</p>
          <p>All pricing details mentioned above are <span className="font-semibold text-gray-700">inclusive of 18% GST</span>.</p>
        </div>
      </div>
    </section>
  )
}

export default Table
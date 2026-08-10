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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-3">
          Registration
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
          Registration Fees
        </h2>
        <p className="mt-1.5 text-xs text-slate-500">
          Indian (INR ₹) &nbsp;/&nbsp; Foreign Authors &amp; Delegates (USD $)
        </p>
      </div>

      {/* Table card */}
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1525]/90 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                <th
                  rowSpan={2}
                  className="whitespace-nowrap border-b border-r border-white/[0.06] bg-[#070d1a] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500"
                >
                  Particulars
                </th>
                <th
                  colSpan={2}
                  className="border-b border-r border-white/[0.06] bg-emerald-950/60 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-emerald-400"
                >
                  Early Bird
                  <div className="text-[11px] font-medium text-emerald-500/70 normal-case tracking-normal mt-0.5">
                    On or before <span className="font-bold text-emerald-300">05<sup>th</sup>September</span>
                  </div>
                </th>
                <th
                  colSpan={2}
                  className="border-b border-white/[0.06] bg-sky-950/60 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-sky-400"
                >
                  Regular Registration
                </th>
              </tr>
              <tr className="text-center">
                <th className="border-b border-r border-white/[0.06] bg-emerald-950/40 px-4 py-2 text-[11px] font-semibold text-emerald-500">
                  IEEE
                </th>
                <th className="border-b border-r border-white/[0.06] bg-emerald-950/40 px-4 py-2 text-[11px] font-semibold text-emerald-500">
                  Non-IEEE
                </th>
                <th className="border-b border-r border-white/[0.06] bg-sky-950/40 px-4 py-2 text-[11px] font-semibold text-sky-500">
                  IEEE
                </th>
                <th className="border-b border-white/[0.06] bg-sky-950/40 px-4 py-2 text-[11px] font-semibold text-sky-500">
                  Non-IEEE
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-[#0a1020]' : 'bg-[#0c1525]/50'}>
                  <td className="border-b border-r border-white/[0.06] px-5 py-3 text-sm font-medium text-slate-300">
                    {row.label}
                  </td>
                  <td className="border-b border-r border-white/[0.06] px-4 py-3 text-center text-sm font-semibold text-emerald-400">
                    {row.earlyIeee}
                  </td>
                  <td className="border-b border-r border-white/[0.06] px-4 py-3 text-center text-sm text-slate-400">
                    {row.earlyNonIeee}
                  </td>
                  <td className="border-b border-r border-white/[0.06] px-4 py-3 text-center text-sm font-semibold text-sky-400">
                    {row.regularIeee}
                  </td>
                  <td className="border-b border-white/[0.06] px-4 py-3 text-center text-sm text-slate-400">
                    {row.regularNonIeee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer notes */}
        <div className="border-t border-white/[0.06] bg-[#070d1a]/80 px-5 py-4 space-y-1.5 text-sm text-slate-400">
          <p>The manuscript length should be <span className="font-semibold text-slate-200">5–6 pages</span>.</p>
          <p>Additional pages beyond the limit will incur an extra page charge of <span className="font-semibold text-slate-200">INR 1180 or USD 30 per page</span>. Upto extra two pages only.</p>
          <p>All pricing details mentioned above are <span className="font-semibold text-slate-200">inclusive of 18% GST</span>.</p>
        </div>
      </div>
    </section>
  )
}

export default Table

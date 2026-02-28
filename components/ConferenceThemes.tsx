import React from 'react'
import conferenceThemes, { ThemeCategory } from '../data/conference_themes'

const headerColors: Record<string, string> = {
  blue: 'bg-blue-600',
  purple: 'bg-purple-600',
  emerald: 'bg-emerald-600',
  amber: 'bg-amber-600',
  rose: 'bg-rose-600',
  teal: 'bg-teal-600',
}

const dotColors: Record<string, string> = {
  blue: 'bg-blue-400',
  purple: 'bg-purple-400',
  emerald: 'bg-emerald-400',
  amber: 'bg-amber-400',
  rose: 'bg-rose-400',
  teal: 'bg-teal-400',
}

const rowBgColors: Record<string, { even: string; odd: string }> = {
  blue: { even: 'bg-blue-50/40', odd: 'bg-white' },
  purple: { even: 'bg-purple-50/40', odd: 'bg-white' },
  emerald: { even: 'bg-emerald-50/40', odd: 'bg-white' },
  amber: { even: 'bg-amber-50/40', odd: 'bg-white' },
  rose: { even: 'bg-rose-50/40', odd: 'bg-white' },
  teal: { even: 'bg-teal-50/40', odd: 'bg-white' },
}

/** Pair themes into rows of 2 for the table layout */
const pairedThemes: [ThemeCategory, ThemeCategory][] = []
for (let i = 0; i < conferenceThemes.length; i += 2) {
  pairedThemes.push([conferenceThemes[i], conferenceThemes[i + 1]])
}

const ThemeCell = ({ theme }: { theme: ThemeCategory }) => {
  const dot = dotColors[theme.color] || dotColors.blue
  const rowBg = rowBgColors[theme.color] || rowBgColors.blue

  return (
    <ul className="divide-y divide-gray-100">
      {theme.topics.map((topic, idx) => (
        <li
          key={idx}
          className={`flex items-start gap-3 px-5 py-2.5 transition-colors duration-150 hover:bg-gray-50 ${
            idx % 2 === 0 ? rowBg.even : rowBg.odd
          }`}
        >
          <span
            className={`mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${dot}`}
          />
          <span className="text-[0.9rem] leading-relaxed text-gray-700">
            {topic}
          </span>
        </li>
      ))}
    </ul>
  )
}

const ConferenceThemes = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5">
          <svg
            className="h-4 w-4 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          <span className="text-sm font-semibold text-blue-700">
            CSITSS 2026
          </span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Conference Themes
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-500">
          Explore the diverse range of topics and research areas covered at
          CSITSS 2026
        </p>
      </div>

      {/* Table — Desktop (2-column paired layout) */}
      <div className="hidden overflow-hidden rounded-2xl border border-gray-200 shadow-sm md:block">
        <table className="w-full table-fixed border-collapse">
          <tbody>
            {pairedThemes.map(([left, right], rowIdx) => {
              const leftHeader = headerColors[left.color] || headerColors.blue
              const rightHeader =
                headerColors[right.color] || headerColors.blue

              return (
                <React.Fragment key={rowIdx}>
                  {/* Header row */}
                  <tr>
                    <td
                      className={`w-1/2 px-5 py-4 ${leftHeader} ${
                        rowIdx > 0 ? 'border-t-[3px] border-t-white' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-white/80"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={left.iconPath} />
                        </svg>
                        <span className="text-[0.95rem] font-bold text-white">
                          {left.title}
                        </span>
                      </div>
                    </td>
                    <td
                      className={`w-1/2 border-l border-l-white/30 px-5 py-4 ${rightHeader} ${
                        rowIdx > 0 ? 'border-t-[3px] border-t-white' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-white/80"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={right.iconPath} />
                        </svg>
                        <span className="text-[0.95rem] font-bold text-white">
                          {right.title}
                        </span>
                      </div>
                    </td>
                  </tr>
                  {/* Topics row */}
                  <tr>
                    <td className="w-1/2 align-top p-0">
                      <ThemeCell theme={left} />
                    </td>
                    <td className="w-1/2 border-l border-gray-200 align-top p-0">
                      <ThemeCell theme={right} />
                    </td>
                  </tr>
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Table — Mobile (single-column stacked) */}
      <div className="space-y-4 md:hidden">
        {conferenceThemes.map((theme, idx) => {
          const header = headerColors[theme.color] || headerColors.blue
          return (
            <div
              key={idx}
              className="overflow-hidden rounded-xl border border-gray-200 shadow-sm"
            >
              <div className={`flex items-center gap-3 px-5 py-3.5 ${header}`}>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={theme.iconPath} />
                </svg>
                <span className="text-[0.95rem] font-bold text-white">
                  {theme.title}
                </span>
              </div>
              <ThemeCell theme={theme} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ConferenceThemes

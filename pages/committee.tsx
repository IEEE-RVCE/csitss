'use client'

import { cn } from '../lib/utils'
import { Users, ChevronRight } from 'lucide-react'
import { committees } from '../data/committee'

interface CommitteeCardProps {
  name: string
  path: string
  featured?: boolean
  isSinglePerson?: boolean
  colorIndex?: number
}

function CommitteeCard({
  name,
  path,
  featured = false,
  isSinglePerson = false,
  colorIndex = 0,
}: CommitteeCardProps) {
  const colorGradients = [
    'from-blue-50/80 to-indigo-100/60 border-blue-200/50',
    'from-purple-50/80 to-violet-100/60 border-purple-200/50',
    'from-emerald-50/80 to-teal-100/60 border-emerald-200/50',
    'from-orange-50/80 to-amber-100/60 border-orange-200/50',
    'from-rose-50/80 to-pink-100/60 border-rose-200/50',
    'from-cyan-50/80 to-sky-100/60 border-cyan-200/50',
    'from-violet-50/80 to-purple-100/60 border-violet-200/50',
    'from-teal-50/80 to-emerald-100/60 border-teal-200/50',
    'from-indigo-50/80 to-blue-100/60 border-indigo-200/50',
    'from-slate-50/80 to-gray-100/60 border-slate-200/50',
  ]

  const iconGradients = [
    'from-blue-500/90 to-indigo-600/90',
    'from-purple-500/90 to-violet-600/90',
    'from-emerald-500/90 to-teal-600/90',
    'from-orange-500/90 to-amber-600/90',
    'from-rose-500/90 to-pink-600/90',
    'from-cyan-500/90 to-sky-600/90',
    'from-violet-500/90 to-purple-600/90',
    'from-teal-500/90 to-emerald-600/90',
    'from-indigo-500/90 to-blue-600/90',
    'from-slate-500/90 to-gray-600/90',
  ]

  const currentColorGradient =
    colorGradients[colorIndex % colorGradients.length]
  const currentIconGradient = iconGradients[colorIndex % iconGradients.length]

  return (
    <a
      href={`/committee-details/${path}`}
      className={cn(
        'group block rounded-2xl p-6 shadow-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1',
        'border backdrop-blur-sm',
        featured
          ? 'bg-gradient-to-br from-blue-50/90 to-sky-100/70 border-blue-200/60 shadow-blue-100/50'
          : `bg-gradient-to-br ${currentColorGradient} shadow-gray-100/50`
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              'rounded-xl p-3 shadow-sm',
              featured
                ? 'bg-gradient-to-br from-blue-500/90 to-sky-600/90 shadow-blue-200/50'
                : `bg-gradient-to-br ${currentIconGradient} shadow-gray-200/30`
            )}
          >
            <Users
              className={cn(
                'h-5 w-5',
                featured ? 'text-white' : 'text-gray-700'
              )}
            />
          </div>
          <div>
            <h3
              className={cn(
                'font-semibold tracking-tight',
                featured ? 'text-xl text-gray-900' : 'text-gray-800'
              )}
            >
              {name}
            </h3>
            {!isSinglePerson && (
              <p className="mt-1 text-sm text-gray-600/80 font-medium">
                View Members
              </p>
            )}
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400/70 transition-colors group-hover:text-gray-600" />
      </div>
    </a>
  )
}

export default function Committee() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-transparent py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Conference Committee
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Meet the distinguished professionals and academic leaders who form
            the CSITSS RVCE committee, bringing their expertise and dedication
            to advance the field through collaborative research and innovation
          </p>
        </div>

        <div className="mb-12">
          <CommitteeCard
            name={committees[0].name}
            path={committees[0].path}
            featured={true}
            isSinglePerson={true}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {committees.slice(1).map((committee, index) => (
            <CommitteeCard
              key={committee.path}
              name={committee.name}
              path={committee.path}
              colorIndex={index}
            />
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-1/3 -z-10 h-64 w-64 translate-x-1/4 transform rounded-full bg-gradient-to-br from-blue-500/20 to-sky-500/20 blur-3xl" />
      <div className="absolute bottom-1/3 left-0 -z-10 h-64 w-64 -translate-x-1/4 transform rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 blur-3xl" />
    </section>
  )
}

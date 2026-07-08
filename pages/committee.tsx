'use client'

import { committees } from '../data/committee'
import Link from 'next/link'
import {
  Award,
  Users,
  Shield,
  BookOpen,
  Globe,
  Code2,
  FileText,
  Calendar,
  Heart,
  Truck,
  DollarSign,
  Mic,
  ClipboardList,
  HelpCircle,
  Star,
  Megaphone,
  ChevronRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type AccentKey =
  | 'cyan'
  | 'violet'
  | 'sky'
  | 'emerald'
  | 'amber'
  | 'rose'
  | 'indigo'
  | 'teal'

interface Accent {
  icon: string
  bg: string
  iconBorder: string
  hoverFrom: string
  hoverVia: string
  hoverTo: string
  hoverShadow: string
  chevron: string
}

const accents: Record<AccentKey, Accent> = {
  cyan: {
    icon: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    iconBorder: 'border-cyan-400/20',
    hoverFrom: 'hover:from-cyan-400/40',
    hoverVia: 'hover:via-sky-400/20',
    hoverTo: 'hover:to-cyan-400/40',
    hoverShadow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]',
    chevron: 'group-hover:text-cyan-400',
  },
  violet: {
    icon: 'text-violet-400',
    bg: 'bg-violet-400/10',
    iconBorder: 'border-violet-400/20',
    hoverFrom: 'hover:from-violet-400/40',
    hoverVia: 'hover:via-purple-400/20',
    hoverTo: 'hover:to-violet-400/40',
    hoverShadow: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]',
    chevron: 'group-hover:text-violet-400',
  },
  sky: {
    icon: 'text-sky-400',
    bg: 'bg-sky-400/10',
    iconBorder: 'border-sky-400/20',
    hoverFrom: 'hover:from-sky-400/40',
    hoverVia: 'hover:via-cyan-400/20',
    hoverTo: 'hover:to-sky-400/40',
    hoverShadow: 'hover:shadow-[0_0_20px_rgba(56,189,248,0.12)]',
    chevron: 'group-hover:text-sky-400',
  },
  emerald: {
    icon: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    iconBorder: 'border-emerald-400/20',
    hoverFrom: 'hover:from-emerald-400/40',
    hoverVia: 'hover:via-teal-400/20',
    hoverTo: 'hover:to-emerald-400/40',
    hoverShadow: 'hover:shadow-[0_0_20px_rgba(52,211,153,0.12)]',
    chevron: 'group-hover:text-emerald-400',
  },
  amber: {
    icon: 'text-amber-400',
    bg: 'bg-amber-400/10',
    iconBorder: 'border-amber-400/20',
    hoverFrom: 'hover:from-amber-400/40',
    hoverVia: 'hover:via-yellow-400/20',
    hoverTo: 'hover:to-amber-400/40',
    hoverShadow: 'hover:shadow-[0_0_20px_rgba(251,191,36,0.12)]',
    chevron: 'group-hover:text-amber-400',
  },
  rose: {
    icon: 'text-rose-400',
    bg: 'bg-rose-400/10',
    iconBorder: 'border-rose-400/20',
    hoverFrom: 'hover:from-rose-400/40',
    hoverVia: 'hover:via-pink-400/20',
    hoverTo: 'hover:to-rose-400/40',
    hoverShadow: 'hover:shadow-[0_0_20px_rgba(251,113,133,0.12)]',
    chevron: 'group-hover:text-rose-400',
  },
  indigo: {
    icon: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    iconBorder: 'border-indigo-400/20',
    hoverFrom: 'hover:from-indigo-400/40',
    hoverVia: 'hover:via-blue-400/20',
    hoverTo: 'hover:to-indigo-400/40',
    hoverShadow: 'hover:shadow-[0_0_20px_rgba(129,140,248,0.12)]',
    chevron: 'group-hover:text-indigo-400',
  },
  teal: {
    icon: 'text-teal-400',
    bg: 'bg-teal-400/10',
    iconBorder: 'border-teal-400/20',
    hoverFrom: 'hover:from-teal-400/40',
    hoverVia: 'hover:via-emerald-400/20',
    hoverTo: 'hover:to-teal-400/40',
    hoverShadow: 'hover:shadow-[0_0_20px_rgba(45,212,191,0.12)]',
    chevron: 'group-hover:text-teal-400',
  },
}

const accentOrder: AccentKey[] = [
  'cyan', 'violet', 'sky', 'emerald',
  'amber', 'rose', 'indigo', 'teal',
]

const iconMap: Record<string, LucideIcon> = {
  chief_patron: Award,
  patrons: Award,
  conference_chairs: Users,
  steering_committee: Shield,
  conference_convenors_committee: BookOpen,
  foreign_delegates_committee: Globe,
  technical_committee: Code2,
  program_committee: ClipboardList,
  website_committee: Megaphone,
  sponsorship_committee: Star,
  publication_committee: FileText,
  session_management_committee: Calendar,
  hospitality_committee: Heart,
  transportation: Truck,
  finance_committee: DollarSign,
  main_stage_committee: Mic,
  registration_committee: ClipboardList,
  help_desk_committee: HelpCircle,
  advisory_committee: Star,
}

export default function Committee() {
  const [chiefPatron, ...rest] = committees

  return (
    <section className="min-h-screen text-slate-300 font-sans px-4 md:px-8 pt-10 pb-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Conference Committee
          </h1>
          <p className='text-md text-slate-400 leading-relaxed font-sans my-4 max-w-2xl mx-auto'>Meet the distinguished professionals and academic leaders who form the CSITSS RVCE committee, bringing their expertise and dedication to advance the field through collaborative research and innovation</p>
        </div>

        {/* Chief Patron — Featured with gradient border + shine */}
        <Link href={`/committee-details/${chiefPatron.path}`} legacyBehavior>
          <a className="group relative block rounded-2xl p-px overflow-hidden mb-5 bg-gradient-to-r from-violet-400/25 via-white/[0.06] to-violet-400/25 hover:from-violet-400/60 hover:via-cyan-400/20 hover:to-violet-400/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]">
            {/* Shine sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -skew-x-12 pointer-events-none z-10" />
            {/* Inner card */}
            <div className="relative flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-gradient-to-br from-[#0d1220] via-[#0f1628] to-[#0c1120]">
              {/* BG glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-400/10 border border-violet-400/25 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-violet-400" />
                </div>
                <div>

                  <h2 className="font-serif text-lg sm:text-xl font-semibold text-white">
                    {chiefPatron.name}
                  </h2>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 relative" />
            </div>
          </a>
        </Link>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {rest.map((committee, index) => {
            const accentKey = accentOrder[index % accentOrder.length]
            const accent = accents[accentKey]
            const Icon = iconMap[committee.path] || Users

            return (
              <Link
                key={committee.path}
                href={`/committee-details/${committee.path}`}
                legacyBehavior
              >
                <a
                  className={`group relative block rounded-xl p-px overflow-hidden bg-gradient-to-r from-white/[0.07] via-white/[0.03] to-white/[0.07] ${accent.hoverFrom} ${accent.hoverVia} ${accent.hoverTo} transition-all duration-500 ${accent.hoverShadow}`}
                >
                  {/* Shine sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -skew-x-12 pointer-events-none z-10" />
                  {/* Inner card */}
                  <div className="relative flex items-center justify-between gap-3 px-3.5 py-3 rounded-xl bg-[#080e1a]">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-lg ${accent.bg} border ${accent.iconBorder} flex items-center justify-center shrink-0`}
                      >
                        <Icon className={`w-4 h-4 ${accent.icon}`} />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200 leading-snug truncate">
                          {committee.name}
                        </span>
                        <span className={`block text-[10px] font-medium mt-0.5 ${accent.icon} opacity-60 group-hover:opacity-100 transition-opacity duration-200`}>
                          View Members
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-3.5 h-3.5 text-slate-700 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 ${accent.chevron}`}
                    />
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Ambient glows */}
      <div className="fixed top-1/3 right-0 w-72 h-72 bg-violet-500/4 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 left-0 w-72 h-72 bg-cyan-500/4 rounded-full blur-3xl pointer-events-none -z-10" />
    </section>
  )
}

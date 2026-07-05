import { useEffect, useState } from 'react'
import { CommitteeCard } from '../../components/CommitteeCard'
import { useRouter } from 'next/router'
import { committees } from '../../data/committee'
import Link from 'next/link'
import { ArrowLeft, Users } from 'lucide-react'

const CommitteeDetail = () => {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) return
      const { name } = router.query
      if (name && typeof name === 'string') {
        try {
          const data = require(`../../data/${name}`).default
          setMembers(data)
        } catch (e) {
          console.error('Error loading committee data:', e)
        } finally {
          setLoading(false)
        }
      }
    }
    fetchData()
  }, [router.isReady, router.query])

  const { name } = router.query
  const committeeName =
    committees.find((c) => c.path === name)?.name ?? ''

  if (loading) {
    return (
      <div className="min-h-screenflex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen text-slate-300 font-sans px-4 md:px-8 pt-10 pb-20">
      <div className="max-w-5xl mx-auto">

        {/* Back nav */}
        <Link href="/committee" legacyBehavior>
          <a className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200 mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            All Committees
          </a>
        </Link>

        {/* Page header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-cyan-400" />
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight">
            {committeeName}
          </h1>
        </div>

        <CommitteeCard members={members} />
      </div>

      {/* Ambient glow */}
      <div className="fixed top-1/4 right-0 w-80 h-80 bg-cyan-500/4 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 left-0 w-80 h-80 bg-violet-500/4 rounded-full blur-3xl pointer-events-none -z-10" />
    </div>
  )
}

export default CommitteeDetail

interface Member {
  name: string
  post: string
  imgLink: string
  position?: string
  department?: string
  email?: string
}

function MemberCard({ member }: { member: Member }) {
  const initials = member.name
    .split(' ')
    .map((w) => w.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="group relative flex flex-col sm:flex-row bg-[#080e1a] rounded-2xl overflow-hidden min-h-[140px] border-2 border-white/[0.07] hover:border-cyan-400/25 transition-colors duration-500 hover:shadow-[0_0_22px_rgba(34,211,238,0.08)]">
      {/* Shine sweep */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -skew-x-12 pointer-events-none z-10" />
        {/* Photo */}
        <div className="relative sm:w-32 h-36 sm:h-auto shrink-0 bg-[#080e1a]">
          {member.imgLink ? (
            <img
              src={member.imgLink}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const img = e.target as HTMLImageElement
                img.style.display = 'none'
                const fallback = img.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
            />
          ) : null}
          {/* Fallback initials */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500/15 to-violet-500/15"
            style={{ display: member.imgLink ? 'none' : 'flex' }}
          >
            <span className="text-2xl font-bold text-slate-400">{initials}</span>
          </div>
          {/* Right edge fade on sm+ */}
          <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-r from-transparent to-[#080e1a] hidden sm:block pointer-events-none" />
          {/* Bottom fade on mobile */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#080e1a] to-transparent sm:hidden pointer-events-none" />
        </div>

        {/* Info */}
        <div className="flex-1 px-4 py-4 flex flex-col justify-center gap-1">
          <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-cyan-100 transition-colors duration-200">
            {member.name}
          </h3>
          {member.position && (
            <p className="text-xs text-slate-400 leading-snug">{member.position}</p>
          )}
          {member.department && (
            <p className="text-[11px] text-slate-500 leading-snug">{member.department}</p>
          )}
          {member.email && (
            <span className="mt-1.5 inline-block self-start text-[10px] font-mono text-cyan-400/70 bg-cyan-400/5 border border-cyan-400/10 rounded px-1.5 py-0.5">
              {member.email}
            </span>
          )}
        </div>
      </div>
  )
}

export const CommitteeCard = ({ members }: { members: Member[] }) => {
  const grouped = members.reduce<Record<string, Member[]>>((acc, member) => {
    if (!acc[member.post]) acc[member.post] = []
    acc[member.post].push(member)
    return acc
  }, {})

  return (
    <div className="space-y-10">
      {Object.entries(grouped).map(([post, postMembers]) => (
        <div key={post}>
          {/* Section divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/25 to-cyan-400/40" />
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-cyan-400 bg-cyan-400/8 border border-cyan-400/20 rounded-full px-4 py-1 shadow-[0_0_12px_rgba(34,211,238,0.08)]">
              {post}
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-cyan-400/25 to-cyan-400/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {postMembers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

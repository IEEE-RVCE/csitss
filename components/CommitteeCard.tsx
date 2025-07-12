interface Members {
  name: string
  post: string
  imgLink: string
  department?: string
  email?: string
}

export const CommitteeCard = ({ members }: { members: Members[] }) => {
  // Group members by their post/role
  const groupedMembers = members.reduce(
    (groups: { [key: string]: Members[] }, member) => {
      const post = member.post
      if (!groups[post]) {
        groups[post] = []
      }
      groups[post].push(member)
      return groups
    },
    {}
  )

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-12">
      {Object.entries(groupedMembers).map(([post, postMembers]) => (
        <div key={post} className="space-y-6">
          {/* Group heading */}
          <div className="">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{post}</h2>
            {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div> */}
          </div>

          {/* Cards for this group - two per row on large screens, one per row on small */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {postMembers.map((member) => (
              <div
                key={member.name}
                className="group relative bg-white hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 
                           border border-gray-200 hover:border-blue-300 rounded-2xl shadow-sm hover:shadow-xl 
                           transition-all duration-300 overflow-hidden transform hover:-translate-y-1 flex flex-col md:flex-row min-h-[200px]"
              >
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                ></div>

                {/* Image container - Left side */}
                <div className="relative w-full md:w-48 h-48 flex-shrink-0 flex items-center justify-center mx-auto md:mx-0">
                  <div className="w-40 h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
                    {member.imgLink ? (
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                        src={member.imgLink}
                        alt={`${member.name}'s photo`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const fallback =
                            target.nextElementSibling as HTMLElement
                          if (fallback) fallback.style.display = 'flex'
                        }}
                      />
                    ) : null}

                    {/* Fallback initials display */}
                    <div
                      className={`w-full h-full ${member.imgLink ? 'hidden' : 'flex'} items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 transition-transform duration-300 group-hover:scale-105 rounded-xl`}
                      style={{ display: member.imgLink ? 'none' : 'flex' }}
                    >
                      <span className="text-4xl font-bold text-white">
                        {member.name
                          .split(' ')
                          .map((word) => word.charAt(0))
                          .join('')
                          .slice(0, 2)}
                      </span>
                    </div>
                  </div>
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  {/* Decorative corner accent */}
                  <div className="absolute top-4 left-4 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content section - Right side */}
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="space-y-3">
                    {/* Name only (removed position) */}
                    <div>
                      <h3
                        className="text-xl font-bold text-gray-900 group-hover:text-blue-700 
                                   transition-colors duration-300 leading-tight"
                      >
                        {member.name}
                      </h3>
                    </div>

                    {/* Additional info if available */}
                    {(member.department || member.email) && (
                      <div className="space-y-2">
                        {member.department && (
                          <div className="flex items-center text-gray-600">
                            <div className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full mr-2 group-hover:bg-blue-100 transition-colors duration-300">
                              <svg
                                className="w-3 h-3 text-gray-500 group-hover:text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                              </svg>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-900">
                                {member.department}
                              </span>
                            </div>
                          </div>
                        )}
                        {member.email && (
                          <div className="flex items-center justify-start">
                            <div className="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-700 bg-purple-50 border border-purple-200 rounded-full transition-all duration-300 shadow-sm">
                              {member.email}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Decorative element */}
                  <div
                    className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-to-l from-blue-500 to-indigo-500 
                               transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

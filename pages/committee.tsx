import React, { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

interface Connection {
  from: { x: number; y: number }
  to: { x: number; y: number }
  type: string
}

interface CommitteeItem {
  name: string
  to: string
}

// Modern Card Component
const getCommitteeEmoji = (committeeName: string): string => {
  const map: { [key: string]: string } = {
    'Chief Patron': '🌟',
    Patrons: '🤝',
    'Conference Chairs': '🎤',
    'Program Chairs': '🗂️',
    'Technical Program Chairs': '🧑‍💻',
    'Finance Chairs': '💰',
    'Publication Chairs': '📚',
    'Sponsorship Chairs': '🤝',
    'Publicity and Media Chairs': '📢',
    'Organizing Committee': '🛠️',
    'Advisory Committee': '🧑‍⚖️',
    'Website Chairs': '🌐',
    'Conference Convenors': '📝',
    'Session Management': '🕒',
    Hospitality: '🏨',
    Transportation: '🚌',
    'Registration Committee': '📝',
    'Conference Coordinators': '🧑‍💼',
    'Technical Committee': '🔬',
    'Brochure & Flyer': '📰',
    'Souvenir Committee': '🎁',
    'Foreign Delegate Management': '🌏',
  }
  // Fallback: use a generic emoji
  return map[committeeName] || '👥'
}

const ModernCard = ({
  committeeName,
  to,
}: {
  committeeName: string
  to: string
}) => {
  const router = useRouter()
  return (
    <div
      className="group relative bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 
                 border border-gray-200 hover:border-blue-300 rounded-xl shadow-sm hover:shadow-lg 
                 transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={() => router.push(to)}
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
      <div className="relative p-6 flex flex-col items-center justify-between">
        {/* Committee name, emoji, and arrow on the same line */}
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center gap-1 min-w-0">
            <span className="text-2xl ml-3 select-none" aria-hidden="true">
              {getCommitteeEmoji(committeeName)}
            </span>
            <h3
              className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 
                           transition-colors duration-300 leading-tight text-left truncate"
            >
              {committeeName}
            </h3>
          </div>
          <ChevronRightIcon
            className="w-5 h-5 text-gray-400 group-hover:text-blue-500 
                                       transition-all duration-300 group-hover:translate-x-1 ml-4 flex-shrink-0"
          />
        </div>
        {/* <div
          className="mt-2 h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 
                        rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div> */}
      </div>
    </div>
  )
}

export default function Committee1() {
  const [connections, setConnections] = useState<Connection[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Define the 9-level committee structure
  const committeeStructure = {
    level0: [{ name: 'Chief Patron', to: '/committee-details/chief_patron' }],
    level1: [
      { name: 'Patrons', to: '/committee-details/patrons' },
      { name: 'Conference Chairs', to: '/committee-details/conference_chairs' },
    ],
    level2: [
      { name: 'Program Chairs', to: '/committee-details/program_chairs' },
      // {
      //   name: 'Technical Program Chairs',
      //   to: '/committee-details/technical_program_chairs',
      // },
      { name: 'Finance Chairs', to: '/committee-details/finance_chairs' },
    ],
    level3: [
      {
        name: 'Publication Chairs',
        to: '/committee-details/publication_chairs',
      },
      {
        name: 'Sponsorship Chairs',
        to: '/committee-details/sponsorship_chairs',
      },
    ],
    level4: [
      {
        name: 'Publicity and Media Chairs',
        to: '/committee-details/pm_chairs',
      },
      {
        name: 'Organizing Committee',
        to: '/committee-details/organizing_committee',
      },
    ],
    // level5: [
    //   // {
    //   //   name: 'Advisory Committee',
    //   //   to: '/committee-details/advisory_committee',
    //   // },
    // ],
    level5: [
      { name: 'Website Chairs', to: '/committee-details/website_chairs' },
      {
        name: 'Conference Convenors',
        to: '/committee-details/conference_convenors',
      },
    ],
    level6: [
      {
        name: 'Session Management',
        to: '/committee-details/session_management',
      },
      { name: 'Hospitality', to: '/committee-details/hospitality' },
    ],
    level7: [
      { name: 'Transportation', to: '/committee-details/transportation' },
      {
        name: 'Registration Committee',
        to: '/committee-details/registration_committee',
      },
    ],
    level8: [
      {
        name: 'Conference Coordinators',
        to: '/committee-details/conference_coordinators',
      },
      {
        name: 'Technical Committee',
        to: '/committee-details/technical_committee',
      },
    ],
    level9: [
      { name: 'Brochure & Flyer', to: '/committee-details/brochure_flyer' },
      {
        name: 'Souvenir Committee',
        to: '/committee-details/souvenier_committee',
      },
    ],
    level10: [
      {
        name: 'Foreign Delegate Management',
        to: '/committee-details/foreign_delegate_management_committee',
      },
    ],
  }

  useEffect(() => {
    const calculateConnections = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const newConnections: Connection[] = []

      // Define level connections (parent level -> child level)
      const levelConnections = [
        { from: 'level0', to: 'level1' },
        { from: 'level1', to: 'level2' },
        { from: 'level2', to: 'level3' },
        { from: 'level3', to: 'level4' },
        { from: 'level4', to: 'level5' },
        { from: 'level5', to: 'level6' },
        { from: 'level6', to: 'level7' },
        { from: 'level7', to: 'level8' },
        { from: 'level8', to: 'level9' },
        { from: 'level9', to: 'level10' },
        // { from: 'level10', to: 'level11' },
      ]

      levelConnections.forEach((connection) => {
        const fromLevel =
          committeeStructure[connection.from as keyof typeof committeeStructure]
        const toLevel =
          committeeStructure[connection.to as keyof typeof committeeStructure]

        console.log(
          `Processing connection: ${connection.from} -> ${connection.to}`
        )
        console.log(
          `From level has ${fromLevel.length} items, To level has ${toLevel.length} items`
        )

        // For level 0 (Chief Patron), connect to both level 1 cards
        if (connection.from === 'level0') {
          const fromItem = fromLevel[0]
          const fromId = generateCardId(fromItem.name)
          const fromCard = container.querySelector(`[data-card-id="${fromId}"]`)

          if (fromCard) {
            const fromRect = fromCard.getBoundingClientRect()
            const containerRect = container.getBoundingClientRect()
            const fromPosition = {
              x: fromRect.left - containerRect.left + fromRect.width / 2,
              y: fromRect.bottom - containerRect.top,
            }

            toLevel.forEach((toItem: CommitteeItem) => {
              const toId = generateCardId(toItem.name)
              const toCard = container.querySelector(`[data-card-id="${toId}"]`)

              if (toCard) {
                const toRect = toCard.getBoundingClientRect()
                const toPosition = {
                  x: toRect.left - containerRect.left + toRect.width / 2,
                  y: toRect.top - containerRect.top,
                }

                newConnections.push({
                  from: fromPosition,
                  to: toPosition,
                  type: 'curved-line',
                })
              }
            })
          }
        } else {
          // For other levels, connect each parent to the corresponding child directly below
          fromLevel.forEach((fromItem: CommitteeItem, fromIndex: number) => {
            const fromId = generateCardId(fromItem.name)
            const fromCard = container.querySelector(
              `[data-card-id="${fromId}"]`
            )

            if (fromCard) {
              const fromRect = fromCard.getBoundingClientRect()
              const containerRect = container.getBoundingClientRect()
              const fromPosition = {
                x: fromRect.left - containerRect.left + fromRect.width / 2,
                y: fromRect.bottom - containerRect.top,
              }

              // For level 5 -> level 6, handle the special case where we have 2 parents but only 2 children
              if (connection.from === 'level5' && connection.to === 'level6') {
                // Connect Organizing Committee (index 0) to Website Chairs (index 0)
                // Connect Advisory Committee (index 1) to Conference Convenors (index 1)
                if (toLevel[fromIndex]) {
                  const toItem = toLevel[fromIndex]
                  const toId = generateCardId(toItem.name)
                  const toCard = container.querySelector(
                    `[data-card-id="${toId}"]`
                  )

                  if (toCard) {
                    const toRect = toCard.getBoundingClientRect()
                    const toPosition = {
                      x: toRect.left - containerRect.left + toRect.width / 2,
                      y: toRect.top - containerRect.top,
                    }

                    newConnections.push({
                      from: fromPosition,
                      to: toPosition,
                      type: 'direct-line',
                    })

                    console.log(
                      `Connection created from ${fromItem.name} to ${toItem.name}`
                    )
                  }
                }
              }
              // For level 6 -> level 7, connect both children to their respective parents
              else if (
                connection.from === 'level6' &&
                connection.to === 'level7'
              ) {
                if (toLevel[fromIndex]) {
                  const toItem = toLevel[fromIndex]
                  const toId = generateCardId(toItem.name)
                  const toCard = container.querySelector(
                    `[data-card-id="${toId}"]`
                  )

                  if (toCard) {
                    const toRect = toCard.getBoundingClientRect()
                    const toPosition = {
                      x: toRect.left - containerRect.left + toRect.width / 2,
                      y: toRect.top - containerRect.top,
                    }

                    newConnections.push({
                      from: fromPosition,
                      to: toPosition,
                      type: 'direct-line',
                    })

                    console.log(
                      `Connection created from ${fromItem.name} to ${toItem.name}`
                    )
                  }
                }
              }
              // For all other levels, use normal 1:1 mapping
              else {
                if (toLevel[fromIndex]) {
                  const toItem = toLevel[fromIndex]
                  const toId = generateCardId(toItem.name)
                  const toCard = container.querySelector(
                    `[data-card-id="${toId}"]`
                  )

                  if (toCard) {
                    const toRect = toCard.getBoundingClientRect()
                    const toPosition = {
                      x: toRect.left - containerRect.left + toRect.width / 2,
                      y: toRect.top - containerRect.top,
                    }

                    newConnections.push({
                      from: fromPosition,
                      to: toPosition,
                      type: 'direct-line',
                    })

                    console.log(
                      `Connection created from ${fromItem.name} to ${toItem.name}`
                    )
                  }
                } else {
                  console.log(
                    `No corresponding child found for ${fromItem.name} at index ${fromIndex}, trying to connect to available children`
                  )
                  // If no direct match, connect to the first available child
                  if (toLevel.length > 0) {
                    const toItem = toLevel[0]
                    const toId = generateCardId(toItem.name)
                    const toCard = container.querySelector(
                      `[data-card-id="${toId}"]`
                    )

                    if (toCard) {
                      const toRect = toCard.getBoundingClientRect()
                      const toPosition = {
                        x: toRect.left - containerRect.left + toRect.width / 2,
                        y: toRect.top - containerRect.top,
                      }

                      newConnections.push({
                        from: fromPosition,
                        to: toPosition,
                        type: 'direct-line',
                      })

                      console.log(
                        `Fallback connection created from ${fromItem.name} to ${toItem.name}`
                      )
                    }
                  }
                }
              }
            }
          })
        }
      })

      console.log(`Total connections created: ${newConnections.length}`)
      setConnections(newConnections)
    }

    // Use a longer delay and multiple attempts to ensure DOM is fully rendered
    const timer1 = setTimeout(calculateConnections, 500)
    const timer2 = setTimeout(calculateConnections, 1000)

    window.addEventListener('resize', calculateConnections)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      window.removeEventListener('resize', calculateConnections)
    }
  }, [])

  const generateCardId = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')
  }

  // const getLevelTitle = (levelKey: string): string => {
  //   const titles: { [key: string]: string } = {
  //     level0: 'Leadership',
  //     level1: 'Executive Committee',
  //     level2: 'Program Management',
  //     level3: 'Operations',
  //     level4: 'Communications & Partnerships',
  //     level5: 'Advisory & Organization',
  //     level6: 'Technical & Coordination',
  //     level7: 'Event Management',
  //     level8: 'Logistics & Support',
  //     level9: 'Special Committees',
  //     level10: 'Publications & Souvenir',
  //     level11: 'International Relations',
  //   }
  //   return titles[levelKey] || levelKey
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-sky-400 to-blue-300">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Committee
              {/* <span className="block text-blue-200 text-2xl sm:text-3xl lg:text-4xl font-light mt-2">
                Leadership & Organization
              </span> */}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet the distinguished professionals and academic leaders who form
              the CSITSS RVCE committee, bringing their expertise and dedication
              to advance the field through collaborative research and
              innovation.
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Committee Hierarchy Structure */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        ref={containerRef}
      >
        {/* Connection Lines SVG - Fixed positioning and z-index */}
        {connections.length > 0 && (
          <svg
            className="absolute top-0 left-0 pointer-events-none"
            style={{
              width: '100%',
              height: '100%',
              zIndex: 5,
              position: 'absolute',
            }}
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {connections.map((connection, index) => {
              const midY =
                connection.from.y + (connection.to.y - connection.from.y) / 2
              return (
                <g key={index}>
                  {/* Connection dots */}
                  <circle
                    cx={connection.from.x}
                    cy={connection.from.y}
                    r="6"
                    fill="#3b82f6"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <circle
                    cx={connection.to.x}
                    cy={connection.to.y}
                    r="6"
                    fill="#3b82f6"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  {/* Simplified curved paths */}
                  {connection.type === 'curved-line' ? (
                    // Curved lines for level 0 (Chief Patron) with horizontal segment
                    <path
                      d={`M ${connection.from.x} ${connection.from.y} 
                          L ${connection.from.x} ${midY - 20}
                          Q ${connection.from.x} ${midY} ${connection.from.x + (connection.to.x - connection.from.x) / 2} ${midY}
                          Q ${connection.to.x} ${midY} ${connection.to.x} ${midY + 20}
                          L ${connection.to.x} ${connection.to.y}`}
                      stroke="#3b82f6"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.8"
                    />
                  ) : (
                    // Direct curved lines for other levels
                    <path
                      d={`M ${connection.from.x} ${connection.from.y} 
                          Q ${(connection.from.x + connection.to.x) / 2} ${midY} ${connection.to.x} ${connection.to.y}`}
                      stroke="#3b82f6"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.8"
                    />
                  )}
                </g>
              )
            })}
          </svg>
        )}

        {/* Render Committee Levels with Hierarchy Emphasis */}
        {Object.entries(committeeStructure).map(([levelKey, levelItems]) => (
          <div key={levelKey} className="relative z-20 mb-20">
            {/* Level Header with Hierarchy Indicator */}{' '}
            <div className="text-center mb-12">
              {/* <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                  {getLevelTitle(levelKey)}
                </h2> */}
              {/* <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto opacity-60"></div> */}
            </div>
            {/* Level Cards Container */}
            <div className="flex justify-center">
              <div
                className={`grid gap-8 w-full ${
                  levelItems.length === 1
                    ? 'grid-cols-1 max-w-lg'
                    : 'grid-cols-1 md:grid-cols-2 max-w-5xl'
                }`}
              >
                {levelItems.map((item: CommitteeItem, index: number) => (
                  <div
                    key={index}
                    data-card-id={generateCardId(item.name)}
                    className="relative z-30"
                  >
                    {/* Card with enhanced hierarchy styling */}
                    <div className="relative">
                      <ModernCard committeeName={item.name} to={item.to} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      {/* <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            For any queries, please mail us at
          </p>
          <a
            href="mailto:csitss2025@rvce.edu.in"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold 
                       hover:bg-blue-50 hover:shadow-xl hover:scale-105 transform 
                       transition-all duration-300 shadow-lg"
          >
            csitss2025@rvce.edu.in
          </a>
        </div>
      </div> */}
    </div>
  )
}

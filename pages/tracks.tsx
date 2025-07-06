import React, { useState } from 'react'

function Tracks() {
  const [activeTrack, setActiveTrack] = useState<string | null>(null)

  // const tracks = [
  //   {
  //     id: 1,
  //     title: 'Computing and Intelligent Systems',
  //     chair: 'Dr Nagaraja G.S',
  //     gradient: 'from-blue-500 to-cyan-400',
  //     icon: '🧠',
  //     items: [
  //       'Artificial Intelligence and Machine learning',
  //       'Computing and Intelligent Systems',
  //       'Cloud, Big Data, and Distributed Architectures',
  //       'Cybersecurity, Blockchain, and Privacy-Aware Systems',
  //       'Data Analytics in Healthcare',
  //       'Quantum Mechanics and Computing',
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: 'Advanced Electronics and Communication Systems',
  //     chair: 'Dr Shylashree N',
  //     gradient: 'from-purple-500 to-pink-500',
  //     icon: '📡',
  //     items: [
  //       'VLSI Design & Embedded Systems',
  //       'Photonics, Optoelectronics and Mechatronics System',
  //       'Smart Antennas and MIMO Systems',
  //       'Next-Generation Communication Systems',
  //       'Green Electronics: Sustainable Practices',
  //       'Cyber-Physical Systems',
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: 'Advanced Robotics and Digital Technologies for Industrial Automation',
  //     chair: 'Dr Rama A',
  //     gradient: 'from-emerald-500 to-teal-400',
  //     icon: '🤖',
  //     items: [
  //       'Robotics and Automation',
  //       'Autonomous Vehicles Navigation and Control Systems',
  //       'Enhancing Organization Functions through Digital Technologies',
  //       'Real time data analytics and supply chain Management',
  //       'Advanced Manufacturing and Product Innovation',
  //       'Thermal, Fluid, and Energy Systems Engineering',
  //       'Enhancing Organization Functions through Digital Technologies',
  //       'Digital Transformation in Various Sectors of Economy',
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: 'Sustainable Environment, Smart Infrastructure, and Intelligent Transport Systems',
  //     chair: 'Dr Radha Krishna',
  //     gradient: 'from-green-500 to-emerald-400',
  //     icon: '🌱',
  //     items: [
  //       'Environmental Conservation , Biodiversity and Renewable Energy',
  //       'Intelligent Transport Systems and E-Mobility',
  //       'Infrastructure Health Monitoring and Smart Infrastructure.',
  //       'Computational Analysis of Structural , Functional and Nano Materials',
  //       '3D Printing',
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: 'Integrated Controls, Energy Systems, and Biomedical Technologies',
  //     chair: 'Dr Dinesh M N',
  //     gradient: 'from-yellow-400 to-amber-500',
  //     icon: '⚡',
  //     items: [
  //       'Biomedical Engineering and Healthcare Applications',
  //       'Control and Automation',
  //       'Integrated Energy Systems',
  //       'Biomechanics and rehabilitation Engineering',
  //       'Bio medical signal and image processing.',
  //     ],
  //   },
  // ];

  /*
Old tracks array commented out for reference.
*/

  // Updated tracks as per July 2025 requirements
  const tracks = [
    {
      id: 'A',
      title: 'Computing and Intelligent Systems',
      chair: 'Dr Nagaraja G.S',
      gradient: 'from-blue-500 to-cyan-400',
      icon: '🧠',
      items: [
        'Artificial Intelligence and Machine learning',
        'Computing and Intelligent Systems',
        'Cloud, Big Data, and Distributed Architectures',
        'Cybersecurity, Blockchain, and Privacy-Aware Systems',
        'Data Analytics in Healthcare',
        'Quantum Mechanics and Computing',
      ],
    },
    {
      id: 'B',
      title: 'Advanced Electronics and Communication Systems',
      chair: 'Dr Shylashree N',
      gradient: 'from-purple-500 to-pink-500',
      icon: '📡',
      items: [
        'VLSI Design & Embedded Systems',
        'Photonics, Optoelectronics and Mechatronics System',
        'Smart Antennas and MIMO Systems',
        'Next-Generation Communication Systems',
        'Green Electronics: Sustainable Practices',
        'Cyber-Physical Systems',
      ],
    },
    {
      id: 'C',
      title:
        'Advanced Robotics and Digital Technologies for Industrial Automation',
      chair: 'Dr Rama A',
      gradient: 'from-emerald-500 to-teal-400',
      icon: '🤖',
      items: [
        'Robotics and Automation',
        'Autonomous Vehicles Navigation and Control Systems',
        'Enhancing Organization Functions through Digital Technologies',
        'Real time data analytics and supply chain Management',
        'Advanced Manufacturing and Product Innovation',
        'Thermal, Fluid, and Energy Systems Engineering',
        'Enhancing Organization Functions through Digital Technologies',
        'Digital Transformation in Various Sectors of Economy',
      ],
    },
    {
      id: 'D',
      title:
        'Sustainable Environment, Smart Infrastructure, and Intelligent Transport Systems',
      chair: 'Dr Radha Krishna',
      gradient: 'from-green-500 to-emerald-400',
      icon: '🌱',
      items: [
        'Environmental Conservation , Biodiversity and Renewable Energy',
        'Intelligent Transport Systems and E-Mobility',
        'Infrastructure Health Monitoring and Smart Infrastructure.',
        'Computational Analysis of Structural , Functional and Nano Materials',
        '3D Printing',
      ],
    },
    {
      id: 'E',
      title: 'Integrated Controls, Energy Systems, and Biomedical Technologies',
      chair: 'Dr Dinesh M N',
      gradient: 'from-yellow-400 to-amber-500',
      icon: '⚡',
      items: [
        'Biomedical Engineering and Healthcare Applications',
        'Control and Automation',
        'Integrated Energy Systems',
        'Biomechanics and rehabilitation Engineering',
        'Bio medical signal and image processing.',
      ],
    },
  ]

  const handleTrackClick = (id: string) => {
    setActiveTrack(activeTrack === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* AEGIS 2025 Theme Section */}
        <div className="mb-20">
          {/* Main Theme Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6 shadow-lg">
              <span className="text-3xl font-bold text-white">⚡</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              <span className="block">Theme</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AEGIS 2025
              </span>
            </h2>
          </div>

          {/* Interactive AEGIS Banner */}
          <div className="relative">
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>
              <div className="relative text-center">
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-6">
                  {[
                    { letter: 'A', tracks: 'Robotics, Computing, Electronics' },
                    {
                      letter: 'E',
                      tracks: 'Cross-cutting core for all tracks',
                    },
                    {
                      letter: 'G',
                      tracks: 'Sustainable infrastructure, energy, environment',
                    },
                    {
                      letter: 'I',
                      tracks: 'AI/ML, IoT, CPS, autonomous systems',
                    },
                    {
                      letter: 'S',
                      tracks:
                        'Cybersecurity, communication, control, biomedical',
                    },
                  ].map((item) => (
                    <div key={item.letter} className="group relative">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-10 rounded-full backdrop-blur-sm border border-white border-opacity-20 group-hover:bg-opacity-20 transition-all duration-300">
                        <span className="text-xl sm:text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                          {item.letter}
                        </span>
                      </div>
                      {/* Tooltip */}
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 pointer-events-none">
                        <div className="font-semibold mb-1">
                          {item.letter === 'A'
                            ? 'Advanced'
                            : item.letter === 'E'
                              ? 'Engineering'
                              : item.letter === 'G'
                                ? 'Green'
                                : item.letter === 'I'
                                  ? 'Intelligent'
                                  : 'Secure Systems'}
                        </div>
                        <div className="text-xs text-gray-300 max-w-40 whitespace-normal">
                          {item.tracks}
                        </div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-slate-800"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
                  Advanced Engineering for
                </h3>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-6 tracking-wide">
                  Green, Intelligent, and Secure Systems
                </h3>
                <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Pioneering the future of engineering through sustainable
                  innovation, intelligent solutions, and secure technologies
                </p>

                {/* Aligned Tracks Summary */}
                <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
                    <div className="bg-white bg-opacity-10 rounded-xl p-3 backdrop-blur-sm">
                      <div className="text-cyan-400 font-bold text-lg mb-1">
                        A
                      </div>
                      <div className="text-white text-sm font-semibold mb-1">
                        Advanced
                      </div>
                      <div className="text-blue-200 text-xs">
                        Robotics, Computing, Electronics
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-xl p-3 backdrop-blur-sm">
                      <div className="text-indigo-400 font-bold text-lg mb-1">
                        E
                      </div>
                      <div className="text-white text-sm font-semibold mb-1">
                        Engineering
                      </div>
                      <div className="text-blue-200 text-xs">
                        Cross-cutting core for all tracks
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-xl p-3 backdrop-blur-sm">
                      <div className="text-green-400 font-bold text-lg mb-1">
                        G
                      </div>
                      <div className="text-white text-sm font-semibold mb-1">
                        Green
                      </div>
                      <div className="text-blue-200 text-xs">
                        Sustainable infrastructure, energy, environment
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-xl p-3 backdrop-blur-sm">
                      <div className="text-purple-400 font-bold text-lg mb-1">
                        I
                      </div>
                      <div className="text-white text-sm font-semibold mb-1">
                        Intelligent
                      </div>
                      <div className="text-blue-200 text-xs">
                        AI/ML, IoT, CPS, autonomous systems
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-xl p-3 backdrop-blur-sm">
                      <div className="text-orange-400 font-bold text-lg mb-1">
                        S
                      </div>
                      <div className="text-white text-sm font-semibold mb-1">
                        Secure Systems
                      </div>
                      <div className="text-blue-200 text-xs">
                        Cybersecurity, communication, control, biomedical
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Conference</span>
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text pb-3 text-transparent sm:pb-5">
              Tracks
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-600">
            Authors are invited to submit their original research work in the
            following areas (but not limited to):
          </p>
        </div>

        {/* Track Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
              onClick={() => handleTrackClick(track.id)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-90`}
              ></div>

              <div className="relative p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl">{track.icon}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-30 text-xl font-bold text-white">
                    {track.id}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  {track.title}
                </h3>
                <p className="mb-1 text-sm text-white text-opacity-80 font-semibold">
                  Chair: {track.chair}
                </p>
                <p className="text-sm text-white text-opacity-80">
                  {track.items.length} research areas
                </p>

                <div
                  className={`mt-4 overflow-hidden transition-all duration-300 ${
                    activeTrack === track.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <ul className="mt-2 space-y-2 text-sm text-white">
                    {track.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-6 inline-flex items-center text-sm font-medium text-white hover:underline focus:outline-none">
                  {activeTrack === track.id ? 'Hide details' : 'Show details'}
                  <svg
                    className={`ml-1 h-4 w-4 transform transition-transform ${
                      activeTrack === track.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Ready to submit your paper?
          </h2>
          <div className="mt-8 flex justify-center">
            <a
              href="https://cmt3.research.microsoft.com/CSITSS2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit your paper
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracks

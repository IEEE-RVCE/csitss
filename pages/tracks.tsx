import React, { useState } from 'react'

function Tracks() {
  const [activeTrack, setActiveTrack] = useState<number | null>(null)

  const tracks = [
    {
      id: 1,
      title: 'Artificial Intelligence of Things',
      gradient: 'from-blue-500 to-cyan-400',
      icon: '🤖',
      items: [
        'AI at the Edge vs. Cloud AI: Opportunities and Trade-offs',
        'AIoT System Architectures and Communication Protocols',
        'Energy-Efficient AI for IoT Devices',
        'Real-Time Data Processing and Edge Computing',
        'On-Device ML Models: TinyML and Federated Learning',
        'Reinforcement Learning in Autonomous IoT Systems',
        'Data Labeling and Quality Challenges in IoT Environments',
        'Anomaly Detection in Sensor Networks using AI',
      ],
    },
    {
      id: 2,
      title: 'AI in Education',
      gradient: 'from-purple-500 to-pink-500',
      icon: '🎓',
      items: [
        'Personalized Learning through AI',
        'AI in Educational Content Creation',
        'AI for Teacher Support and Development',
        'Ethical Challenges and Considerations',
        'AI in Assessment and Evaluation',
        'AI and Special Education',
        'Future Research and Innovations in AI for Education',
        'Designing AI Solutions for Educational Challenges',
      ],
    },
    {
      id: 3,
      title: 'Machine Learning and AI in Image Processing',
      gradient: 'from-emerald-500 to-teal-400',
      icon: '🖼️',
      items: [
        'Generative Models in Image Processing',
        'Self-supervised and Few-shot Learning',
        'Multimodal Learning and Vision-Language Models',
        'Healthcare and Medical Imaging',
        'Autonomous Systems and Surveillance',
        'Agricultural and Environmental Monitoring',
        'Retail and Smart Cities',
      ],
    },
    {
      id: 4,
      title: 'Computing and Intelligent Systems',
      gradient: 'from-orange-500 to-amber-400',
      icon: '💻',
      items: [
        'Computer Networks and Cyber security',
        'Machine Intelligence',
        'Web and Mobile Applications',
        'Computing Environments (Cloud, Distributed, etc.)',
        'Internet of Things / Edge Systems',
        'Augmented, Virtual Reality and extended reality',
        'Data Analytics',
        'Block Chain',
        'Computer Vision and Pattern Recognition',
        'Metaverse',
      ],
    },
    {
      id: 5,
      title: 'VLSI design & Embedded system',
      gradient: 'from-indigo-500 to-sky-400',
      icon: '🔌',
      items: [
        'Analog/ Digital /Mixed Signal/RF System Designs',
        'Advances in CAD for VLSI',
        'Embedded Systems Design',
        'Low-power digital architectures',
        'Test & Reliability of Machine Learning Systems',
        'Microsystems/MEMS/Sensors Test',
        'Pre-silicon, Post-silicon: Debug, Verification and Validation',
      ],
    },
    {
      id: 6,
      title: 'Smart communication',
      gradient: 'from-rose-500 to-red-400',
      icon: '📡',
      items: [
        'Intelligent Network Architectures',
        'Wireless Communication Technologies',
        'IoT and M2M Communication',
        'AI/ML in Communication Systems',
        'Secure and Resilient Communication',
        'Human-Centered and Social Communication',
      ],
    },
    {
      id: 7,
      title: 'Control and automation',
      gradient: 'from-lime-500 to-green-400',
      icon: '🤖',
      items: [
        'Cyber-Physical Systems',
        'Automation Technologies and Applications',
        'Robotics and Autonomous Systems',
        'Digital Twins in Automation and Control',
        'Cybersecurity in Control and Automation Systems',
        'Future Trends in Smart Factories and Industry 5.0',
        'Wearable and Implantable Body Sensor',
      ],
    },
    {
      id: 8,
      title: 'Renewable Power and energy system',
      gradient: 'from-yellow-400 to-amber-500',
      icon: '⚡',
      items: [
        'Solar Energy Technologies',
        'Wind Energy Systems',
        'Energy Storage and Conversion',
        'Smart Grids and Energy Management',
        'Bioenergy and Waste-to-Energy',
        'Hydropower and Ocean Energy',
        'Policy, Regulation, and Economics',
      ],
    },
    {
      id: 9,
      title: 'E-mobility Sustainable solutions',
      gradient: 'from-cyan-500 to-blue-400',
      icon: '🚗',
      items: [
        'E-Mobility as a Catalyst for Sustainable Transportation',
        'Innovations in Electric Vehicle (EV) Technology',
        'EV Charging Infrastructure',
        'Sustainable Energy Integration',
        'E-Mobility and Smart Cities',
        'Environmental and Economic Impact Analysis',
      ],
    },
    {
      id: 10,
      title: 'Environmental Conservation and Biodiversity',
      gradient: 'from-green-500 to-emerald-400',
      icon: '🌱',
      items: [
        'Biodiversity Assessment and Monitoring',
        'Conservation Strategies and Protected Areas',
        'Climate Change and Biodiversity',
        'Ecosystem Services and Natural Capital',
        'Human-Wildlife Interactions and Conflict Mitigation',
        'Conservation Technology and Innovation',
        'Education, Advocacy, and Community Engagement',
        'Industry, Corporate Responsibility, and Biodiversity',
      ],
    },
  ]

  const handleTrackClick = (id: number) => {
    setActiveTrack(activeTrack === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Conference</span>
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text pb-3 text-transparent sm:pb-5">
              Tracks
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-600">
            Authors are invited to submit their original research work in the following areas (but not limited to):
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
              <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-90`}></div>
              
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
                
                <button
                  className="mt-6 inline-flex items-center text-sm font-medium text-white hover:underline focus:outline-none"
                >
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
              href="https://cmt3.research.microsoft.com/CSITSS2024"
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

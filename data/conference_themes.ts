export interface ThemeCategory {
  title: string
  topics: string[]
  color: string
  iconPath: string
}

const conferenceThemes: ThemeCategory[] = [
  {
    title: 'Emerging Technologies',
    color: 'blue',
    iconPath:
      'M13 10V3L4 14h7v7l9-11h-7z',
    topics: [
      'Nano Technology',
      'AI in healthcare and medical devices',
      'Personalized and precision medicine',
      'Human–Computer Interaction',
      'AI powered medical imaging',
      'Manufacturing Engineering',
      'Digital Twin',
      'Avionics & UAV',
      'Vehicular Communication',
      'Neuromorphic Computing',
      'Soft Robotics',
      'Space Technologies',
      'Quantum Information System',
    ],
  },
  {
    title: 'Computing & Intelligent Systems',
    color: 'purple',
    iconPath:
      'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    topics: [
      'Generative & Agentic AI',
      'Quantum computing algorithms',
      'Cloud Computing',
      'Software Defined Network (SDN)',
      'Augmented, virtual, and mixed reality (AR/VR/MR)',
      'Metaverse platforms and applications',
      'Cyber Physical System',
      'Block Chain Technology',
      'Edge Computing',
      'Future Computing Models',
    ],
  },
  {
    title: 'Sustainable Environment and Circular Economy',
    color: 'emerald',
    iconPath:
      'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    topics: [
      'Smart City',
      'Affordable and Green Energy',
      'Industry, Innovation and Infrastructure',
      'Climate Action',
      'Precision Agriculture',
      'Smart Grid',
      'Holistic regenerative economy',
      'Integrated circular systems for waste, water and environmental sustainability',
      'Supply Chain and Management',
      'Rare Earth material',
      'Urban Mining & E-Waste Management',
      'Carbon Capture, Utilization and Storage (CCUS)',
    ],
  },
  {
    title: 'Data Science, Analytics, and Intelligent Decision Systems',
    color: 'amber',
    iconPath:
      'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    topics: [
      'Data Mining',
      'Biological Data Science',
      'Machine Learning & AI',
      'Human-Centric, Secure & Responsible Intelligent Systems',
      'Cloud-Native Intelligent Applications',
      'Video & Data Analytics',
    ],
  },
  {
    title: 'Advanced Electronics, Communication and Networking Technologies',
    color: 'rose',
    iconPath:
      'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0',
    topics: [
      'Optical Communication',
      'Smart Antennas and MIMO Systems',
      'VLSI Design and Embedded Systems',
      '5G/6G, terahertz, satellite, and non-terrestrial networks',
      'Sensors Technology and IoT applications',
      'Semiconductor Technology',
      'Cryptography & Intelligent Surveillance Systems',
      'Photonics and Optoelectronics',
      'Open RAN (Radio Access Networks)',
      'Chiplet Technology',
    ],
  },
  {
    title: 'AI & Ethics / Responsible AI Systems',
    color: 'teal',
    iconPath:
      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    topics: [
      'Artificial Intelligence of Things (AIoT)',
      'Distributed Artificial Intelligence',
      'AI for Simulation and Modeling',
      'AI in Education and Smart Learning Systems',
      'Machine Learning and AI for Image and Video Processing',
      'Neural Operators',
      'Large Language Models and Generative AI',
      'AI Ethics and Responsible AI Systems',
    ],
  },
]

export default conferenceThemes

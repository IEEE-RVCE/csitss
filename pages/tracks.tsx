import React from 'react'

function Papers() {
  return (
    <div className="bg-light-blue-100 mt-10 py-10">
      <aside className="mx-auto max-w-4xl transform rounded-lg bg-white p-6 shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl sm:p-8 lg:p-12">
        <div className="text-center">
          <p className="animate-fade-in text-3xl font-bold text-blue-700 sm:text-5xl">
            Conference Tracks
          </p>
        </div>
        <p className="animate-fade-in my-4 text-justify text-lg font-medium text-gray-700 sm:text-2xl">
          Authors are invited to submit their original research work in the
          following areas (but not limited to):
        </p>
        <ul className="animate-fade-in list-none space-y-4 text-justify text-base font-medium text-gray-600 sm:text-xl">
          {[
            {
              title:
                'Computational Analysis of Structural and Functional Materials:',
              items: [
                'Energy Materials, Nanomaterials, Smart Materials',
                'High-performance Embedded Computation',
                'Decision and Planning',
                'Target Tracking/Recognition',
              ],
            },
            {
              title: 'Green Electronics: Sustainable Practices:',
              items: [
                'Eco-Friendly Materials for Electronics',
                'Energy-Efficient Electronic Devices',
                'Green Supply Chain Management in Electronics',
                'Biodegradable and Organic Electronics',
              ],
            },
            {
              title: 'Robotics and Automation:',
              items: [
                'Artificial Intelligence in Robotics',
                'Human-Robot Interaction',
                'Agricultural Robotics',
                'Robotic Perception and Sensing',
              ],
            },
            {
              title: 'Photonics, Optoelectronics and Mechatronics Systems:',
              items: [
                'Fiber optics and optical communications',
                'Optical sensors and imaging systems',
                'Control systems and intelligent systems',
                'Micro-electromechanical systems (MEMS)',
              ],
            },
            {
              title: 'Artificial Intelligence for Sustainable World:',
              items: [
                'AI and ML engineering and science applications',
                'Natural language processing and large language models for regional requirements',
                'Advanced AI models and algorithms',
                'Mathematical algorithms for ML',
                'New generation hardware architectures for AI',
                'Generative AI for society and industry',
              ],
            },
            {
              title: 'Digital Transformation in Various Sectors of Economy:',
              items: [
                'Digital transformation in Logistics',
                'Digitization and Inclusivity in Banking and Financial Services Sector',
                'Digital Modeling practices in Manufacturing',
                'E-commerce and E-business',
              ],
            },
            {
              title: 'Renewable Energy and Environmental Engineering:',
              items: [
                'Microgrids & Smart grids',
                'Power Electronics application to Renewable Energy systems',
                'Computational Intelligent Techniques for Energy Sustainability',
                'Distributed Energy system and Control Strategies',
                'Power System operation, resilience, monitoring and control',
                'Carbon Capture, Utilization & Storage (CCUS) and Alternative Fuels',
                'Sustainable construction materials and technologies',
              ],
            },
            {
              title: 'Cyber-Physical Systems:',
              items: [
                'Next-Generation CPS Architectures',
                'IoT-based Smart Infrastructures',
                'Cybersecurity Challenges in CPS',
                'Ethical Considerations in CPS Design and Deployment',
              ],
            },
            {
              title: 'Biomedical Electronics and Healthcare Applications:',
              items: [
                'Biomedical Image processing',
                'Biosensors and Wearable electronics',
                'Point of care devices, Bio_Mems',
              ],
            },
            {
              title: 'Quantum Mechanics and Computing:',
              items: [
                'Hybrid quantum-classical computing systems',
                'Quantum simulation and modelling',
                'Quantum machine learning and optimization algorithms',
              ],
            },
            {
              title: 'Next-Generation Communication Systems:',
              items: [
                'Internet of Things (IoT), 5G and Beyond',
                'Edge Computing and Edge Networking',
                'Software-Defined Networking (SDN) and Network Function Virtualization (NFV)',
                'Satellite Communication Systems',
                'Wireless Sensor Networks and Smart Grid Communication',
                'Blockchain and Distributed Ledger Technologies (DLT)',
                'Emerging Communication Technologies',
              ],
            },
          ].map((track, index) => (
            <li key={index} className="animate-fade-in">
              <b>{track.title}</b>
              <ul className="list-inside list-disc space-y-2 pl-6">
                {track.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default Papers

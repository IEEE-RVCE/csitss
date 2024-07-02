import React from 'react';

function Papers() {
  return (
    <div className="mt-10 bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <aside className="bg-white shadow-lg rounded-lg p-4 sm:p-8 lg:p-12 mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-blue-700 sm:text-5xl">
            Conference Tracks
          </p>
        </div>
        <p className="text-justify text-lg sm:text-2xl font-medium text-gray-700 my-4">
          Authors are invited to submit their original research work in the following areas (but not limited to):
        </p>
        <ul className="text-justify text-base sm:text-xl font-medium text-gray-600 list-none space-y-4">
          <li className="mb-4">
            <b>Computational Analysis of Structural and Functional Materials:</b>
            <ul className="pl-6 list-disc list-inside space-y-2">
              <li>Energy Materials, Nanomaterials, Smart Materials</li>
              <li>High-performance Embedded Computation</li>
              <li>Decision and Planning</li>
              <li>Target Tracking/Recognition</li>
            </ul>
          </li>
          <li className="mb-4">
            <b>Green Electronics: Sustainable Practices:</b>
            <ul className="pl-6 list-disc list-inside space-y-2">
              <li>Eco-Friendly Materials for Electronics</li>
              <li>Energy-Efficient Electronic Devices</li>
              <li>Green Supply Chain Management in Electronics</li>
              <li>Biodegradable and Organic Electronics</li>
            </ul>
          </li>
          <li className="mb-4">
            <b>Robotics and Automation:</b>
            <ul className="pl-6 list-disc list-inside space-y-2">
              <li>Artificial Intelligence in Robotics</li>
              <li>Human-Robot Interaction</li>
              <li>Agricultural Robotics</li>
              <li>Robotic Perception and Sensing</li>
            </ul>
          </li>
          <li className="mb-4">
            <b>Photonics, Optoelectronics and Mechatronics Systems:</b>
            <ul className="pl-6 list-disc list-inside space-y-2">
              <li>Fiber optics and optical communications</li>
              <li>Optical sensors and imaging systems</li>
              <li>Control systems and intelligent systems</li>
              <li>Micro-electromechanical systems (MEMS)</li>
            </ul>
          </li>
          <li className="mb-4">
            <b>Artificial Intelligence for Sustainable World:</b>
            <ul className="pl-6 list-disc list-inside space-y-2">
              <li>AI and ML engineering and science applications</li>
              <li>Natural language processing and large language models for regional requirements</li>
              <li>Advanced AI models and algorithms</li>
              <li>Mathematical algorithms for ML</li>
              <li>New generation hardware architectures for AI</li>
              <li>Generative AI for society and industry</li>
            </ul>
          </li>
          <li className="mb-4">
            <b>Digital Transformation in Various Sectors of Economy:</b>
            <ul className="pl-6 list-disc list-inside space-y-2">
              <li>Digital transformation in Logistics</li>
              <li>Digitization and Inclusivity in Banking and Financial Services Sector</li>
              <li>Digital Modeling practices in Manufacturing</li>
              <li>E-commerce and E-business</li>
            </ul>
          </li>
          <li className="mb-4">
            <b>Renewable Energy and Environmental Engineering:</b>
            <ul className="pl-6 list-disc list-inside space-y-2">
              <li>Microgrids & Smart grids</li>
              <li>Power Electronics application to Renewable Energy systems</li>
              <li>Computational Intelligent Techniques for Energy Sustainability</li>
              <li>Distributed Energy system and Control Strategies</li>
              <li>Power System operation, resilience, monitoring and control</li>
              <li>Carbon Capture, Utilization & Storage (CCUS) and Alternative Fuels</li>
            </ul>
          </li>
          <li className="mb-4">
            <b>Cyber-Physical Systems:</b>
            <ul className="pl-6 list-disc list-inside space-y-2">
              <li>Next-Generation CPS Architectures</li>
              <li>IoT-based Smart Infrastructures</li>
              <li>Cybersecurity Challenges in CPS</li>
              <li>Ethical Considerations in CPS Design and Deployment</li>
            </ul>
          </li>
          <li className="mb-4">
            <b>Biomedical Electronics and Healthcare Applications:</b>
            <ul className="pl-6 list-disc list-inside space-y-2">
              <li>Biomedical Image processing</li>
              <li>Biosensors and Wearable electronics</li>
              <li>Point of care devices, Bio_Mems</li>
            </ul>
          </li>
          <li className="mb-4">
            <b>Quantum Mechanics and Computing:</b>
            <ul className="pl-6 list-disc list-inside space-y-2">
              <li>Hybrid quantum-classical computing systems</li>
              <li>Quantum simulation and modelling</li>
              <li>Quantum machine learning and optimization algorithms</li>
            </ul>
          </li>
          <li className="mb-4">
            <b>Next-Generation Communication Systems:</b>
            <ul className="pl-6 list-disc list-inside space-y-2">
              <li>Internet of Things (IoT), 5G and Beyond</li>
              <li>Edge Computing and Edge Networking</li>
              <li>Software-Defined Networking (SDN) and Network Function Virtualization (NFV)</li>
              <li>Satellite Communication Systems</li>
              <li>Wireless Sensor Networks and Smart Grid Communication</li>
              <li>Blockchain and Distributed Ledger Technologies (DLT)</li>
              <li>Emerging Communication Technologies</li>
            </ul>
          </li>
        </ul>
        
      </aside>
    </div>
  );
}

export default Papers;

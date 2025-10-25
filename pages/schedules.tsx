import React, { useState } from 'react'
import ScheduleModal from '../components/ScheduleModal'
import { Calendar, MapPin } from 'lucide-react'

const Schedules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Conference Schedule
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2">CSITSS 2025</p>
          <p className="text-lg text-blue-50 max-w-3xl mx-auto">
            9th IEEE International Conference on Computational Systems and
            Information Technology for Sustainable Solutions
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>20th - 22nd November 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>RVCE, Bangalore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Event Schedule
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive program schedule featuring keynote
            speeches, technical sessions, tutorials, and networking
            opportunities throughout the three-day conference.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pre-Conference Tutorial Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-500 transform hover:-translate-y-2">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-10 h-10" />
                {/* <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                  Day 1
                </span> */}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Pre-Conference Tutorial
              </h3>
              <p className="text-blue-100 text-sm">20th November 2025</p>
            </div>

            <div className="p-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>View Schedule</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Conference Day 1 Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 opacity-75">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-10 h-10" />
                {/* <span className="bg-white text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                  Day 2
                </span> */}
              </div>
              <h3 className="text-2xl font-bold mb-2">Program Schedule</h3>
              <p className="text-green-100 text-sm">21st November 2025</p>
            </div>

            <div className="p-6">
              <button
                disabled
                className="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-lg font-semibold cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span>Coming Soon</span>
              </button>
            </div>
          </div>

          {/* Main Conference Day 2 Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 opacity-75">
  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 text-white">
    <div className="flex items-center justify-between mb-4">
      <Calendar className="w-10 h-10" />
    </div>
    <h3 className="text-2xl font-bold mb-2">Tentative Paper Presentation Track Schedule</h3>
    <p className="text-purple-100 text-sm">22nd November 2025</p>
  </div>

  <div className="p-6">
    <a
      href="/Session_TrackDetails_24-Oct_CSITSS2025.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
    >
      <span>Open Schedule PDF</span>
    </a>
  </div>
</div>

      {/* Schedule Modal */}
      <ScheduleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Schedules

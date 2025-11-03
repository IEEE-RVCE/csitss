import React, { useState } from 'react'
import ScheduleModal from '../components/ScheduleModal'
import {
  BookOpen,
  Calendar,
  CloudDownload,
  FileSpreadsheet,
  MapPin,
} from 'lucide-react'

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

        {/* Schedule Cards - First Row */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {/* Pre-Conference Tutorial Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-500 transform hover:-translate-y-2 flex flex-col justify-between">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Pre-Conference Tutorial
              </h3>
              <p className="text-blue-100 text-sm">20th November 2025</p>
            </div>

            <div className="p-6">
              <button
                onClick={() =>
                  window.open(
                    '/Program_Schedule_WebsiteCSITSS2025.docx.pdf',
                    '_blank'
                  )
                }
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Open PDF</span>
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
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-green-500 transform hover:-translate-y-2 flex flex-col justify-between">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Program Schedule</h3>
              <p className="text-green-100 text-sm">21-22nd November 2025</p>
            </div>

            <div className="p-6">
              <button
                onClick={() =>
                  window.open(
                    '/Tentative_ProgramSchedule_CSITSS2025_NEW.pdf',
                    '_blank'
                  )
                }
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Open PDF</span>
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

          {/* Paper Presentation Track Schedule Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-purple-500 transform hover:-translate-y-2 flex flex-col justify-between">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Tentative Paper Presentation Track Schedule
              </h3>
              <p className="text-purple-100 text-sm">21-22nd November 2025</p>
            </div>

            <div className="p-6">
              <button
                onClick={() =>
                  window.open(
                    '/Session_TrackDetails_31st_Oct_CSITSS2025.pdf',
                    '_blank'
                  )
                }
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Open PDF</span>
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

          {/* Author Resources - Second Row */}

          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-amber-500 transform hover:-translate-y-2">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Author Resources</h3>
              <p className="text-amber-100 text-sm">
                Guidelines & Templates for Presenters
              </p>
            </div>

            <div className="p-6 space-y-3">
              <button
                onClick={() =>
                  window.open('/Updated_Author-Guidelines.pdf', '_blank')
                }
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <FileSpreadsheet className="w-5 h-5" />
                <span>Author Guidelines</span>
              </button>
              <button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href =
                    '/Research_Paper_ Presentaion_Template_CSITSS-2025_Final.pptx'
                  link.download =
                    'Research_Paper_ Presentaion_Template_CSITSS-2025_Final.pptx'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="w-full bg-white border-2 border-amber-500 text-amber-600 py-3 px-4 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                <CloudDownload className="w-5 h-5" />
                <span>Download PPT Template</span>
              </button>
            </div>
          </div>
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

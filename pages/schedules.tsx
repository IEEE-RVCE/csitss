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
                    '/ProgramSchedule_CSITSS2025_FINAL1.pdf',
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
                Paper Presentation Track Schedule
              </h3>
              <p className="text-purple-100 text-sm">21-22nd November 2025</p>
            </div>

            <div className="p-6">
              <button
                onClick={() =>
                  window.open(
                    '/Final-Session_TrackDetails_To-Publish_CSITSS2025.pdf',
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

      {/* Important Announcement Banner */}
      <div className="mb-12 max-w-5xl mx-auto">
        <div className=" overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Important Notice for Authors
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  <strong>DEAR AUTHORS KINDLY UPLOAD THE PPT FOR PAPER
                  PRESENTATION BY THE END OF 17/11/2025 POSITIVELY.</strong>
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2 font-medium">
                    File Naming Convention:
                  </p>
                  <code className="text-sm bg-white px-3 py-2 rounded border border-gray-300 text-gray-800 block">
                    PAPERID_CSITSS2025.pptx
                  </code>
                  <p className="text-xs text-gray-500 mt-2">
                    Example: <span className="font-mono">1196_CSITSS2025.pptx</span>
                  </p>
                </div>
                <a
                  href="https://drive.google.com/drive/folders/1vKyphszMKMYboRq_0rTB9AX1rGCsaiK9?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <CloudDownload className="w-5 h-5" />
                  <span>Upload Your Presentation</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
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

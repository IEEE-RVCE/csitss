import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ScheduleModalProps {
  isOpen: boolean
  onClose: () => void
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [activeDay, setActiveDay] = useState(1)

  const scheduleData = {
    day1: {
      date: '20th November 2025',
      title: 'Pre-Conference Tutorial',
      tracks: [
        {
          name: 'Track 1: AI and Machine Learning for Secure and Sustainable Systems',
          venue: 'MV Seminar Hall (Dept of Civil Engg., 3rd Floor)',
          sessions: [
            {
              time: '9:30 AM - 11:00 AM',
              topic: 'Generative AI at the Edge',
              speaker: 'Mr. Sambu Mohan',
              designation:
                'Senior Software Manager, Embedded and Edge Products Division at Synaptics, Bangalore',
            },
            {
              time: '11:00 AM - 11:30 AM',
              topic: 'TEA BREAK',
              isBreak: true,
            },
            {
              time: '11:30 AM - 1:00 PM',
              topic:
                'AI for Visual Creativity: How Machines See, Enhance, and Reimagine Photos & Videos',
              speaker: 'Shri. Roopa Sheshadri & Mr. Praful Mathur',
              designation:
                'Director, Chief Engineer at Samsung R&D Institute Bangalore & Senior Researcher at Samsung R&D Institute Bangalore',
            },
          ],
        },
        {
          name: 'Track 2: Green Computing - Sustainable AI Solutions',
          venue: 'ISE Seminar Hall (Dept. of Information Science & Engg., 1st Floor)',
          sessions: [
            {
              time: '9:30 AM - 11:00 AM',
              topic:
                'AI-Driven IoT Analytics: Transforming Device Management for the Digital Era',
              speaker: 'Venkata Chunduru',
              designation:
                'Director & Head India Operations at Arcadis (IBI) Group, Bangalore',
            },
            {
              time: '11:00 AM - 11:30 AM',
              topic: 'TEA BREAK',
              isBreak: true,
            },
            {
              time: '11:30 AM - 1:00 PM',
              topic:
                'Putting the Puzzle pieces together: A Systems Thinking Approach to Circular Economy Transitions',
              speaker: 'Prof. Dr. Tim Gruchmann',
              designation: 'Professor, Department of Business Studies, FH Dortmund',
            },
          ],
        },
      ],
    },
  }

  const handleDownloadPDF = () => {
    // Update this path to your actual PDF file
    const pdfPath = '/Program_Schedule_WebsiteCSITSS2025.docx.pdf'
    window.open(pdfPath, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl w-full max-w-7xl max-h-[85vh] overflow-hidden"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="bg-blue-600 text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold">CSITSS-2025 Schedule of Events</h2>
                  <p className="text-blue-100 text-xs mt-0.5">
                    9th IEEE International Conference on Computational Systems and Information
                    Technology for Sustainable Solutions
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {/* Download PDF Button */}
                  <button
                    onClick={handleDownloadPDF}
                    className="flex items-center gap-1.5 bg-white text-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium"
                  >
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
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="hidden sm:inline">Download PDF</span>
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 bg-gray-50">
                <div className="flex px-5">
                  <button
                    onClick={() => setActiveDay(1)}
                    className={`px-5 py-2.5 text-sm font-semibold transition-colors relative ${
                      activeDay === 1
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Day 1
                    {activeDay === 1 && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveDay(2)}
                    className={`px-5 py-2.5 text-sm font-semibold transition-colors relative ${
                      activeDay === 2
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    disabled
                  >
                    Day 2
                    <span className="ml-1.5 text-xs text-gray-400">(Coming Soon)</span>
                  </button>
                  <button
                    onClick={() => setActiveDay(3)}
                    className={`px-5 py-2.5 text-sm font-semibold transition-colors relative ${
                      activeDay === 3
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    disabled
                  >
                    Day 3
                    <span className="ml-1.5 text-xs text-gray-400">(Coming Soon)</span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(85vh-140px)] p-5">
                <AnimatePresence mode="wait">
                  {activeDay === 1 && (
                    <motion.div
                      key="day1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Day Header */}
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900">
                          {scheduleData.day1.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{scheduleData.day1.date}</p>
                      </div>

                      {/* Tracks Grid */}
                      <div className="grid md:grid-cols-2 gap-5">
                        {scheduleData.day1.tracks.map((track, trackIndex) => (
                          <motion.div
                            key={trackIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: trackIndex * 0.1 }}
                            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                          >
                            {/* Track Header */}
                            <div className="mb-4">
                              <h4 className="text-base font-bold text-gray-900 mb-2">
                                {track.name}
                              </h4>
                              <div className="flex items-start gap-2 text-xs text-gray-600">
                                <svg
                                  className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                <span className="font-medium text-xs">{track.venue}</span>
                              </div>
                            </div>

                            {/* Sessions */}
                            <div className="space-y-3">
                              {track.sessions.map((session, sessionIndex) => (
                                <div
                                  key={sessionIndex}
                                  className={`${
                                    session.isBreak
                                      ? 'bg-amber-50 border-amber-200'
                                      : 'bg-white border-gray-200'
                                  } border rounded-md p-3`}
                                >
                                  {/* Time */}
                                  <div className="flex items-center gap-1.5 mb-1.5">
                                    <svg
                                      className={`w-3.5 h-3.5 ${
                                        session.isBreak ? 'text-amber-600' : 'text-green-600'
                                      }`}
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    <span
                                      className={`text-xs font-semibold ${
                                        session.isBreak ? 'text-amber-700' : 'text-gray-700'
                                      }`}
                                    >
                                      {session.time}
                                    </span>
                                  </div>

                                  {session.isBreak ? (
                                    <div className="flex items-center gap-2">
                                      <span className="text-xl">☕</span>
                                      <p className="font-bold text-sm text-amber-900">{session.topic}</p>
                                    </div>
                                  ) : (
                                    <>
                                      {/* Topic */}
                                      <p className="font-semibold text-sm text-gray-900 mb-2 leading-snug">
                                        {session.topic}
                                      </p>

                                      {/* Speaker */}
                                      {session.speaker && (
                                        <div className="mt-2 pt-2 border-t border-gray-100">
                                          <p className="text-xs font-semibold text-blue-600">
                                            {session.speaker}
                                          </p>
                                          <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                                            {session.designation}
                                          </p>
                                        </div>
                                      )}
                                    </>
                                  )}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ScheduleModal

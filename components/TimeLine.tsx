import React, { useEffect, useState } from 'react'
import { Calendar, Clock, Download } from 'lucide-react'

const CustomTimeline = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  // const [showPopup, setShowPopup] = useState(false)

  const data = [
    {
      label: 'Manuscript Submission Opens',
      date: '5th July 2025',
    },
    {
      label: 'Manuscript Submission Deadline',
      date: '16th August 2025',
    },
    {
      label: 'Acceptance Notification',
      date: '5th Sept 2025',
    },
    {
      label: 'Camera-Ready Submission Opens',
      date: '12th Sept 2025',
    },
    {
      label: 'Early Bird Registration Deadline',
      date: '18th Sept 2025',
    },
    {
      label: 'Camera-Ready Submission Closes',
      date: '10th Oct 2025 (Hard Deadline)',
    },
    {
      label: 'Registration Deadline',
      date: '10th Oct 2025',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 50)

      const itemHeight = 150
      const activeItemIndex = Math.floor(scrollPosition / itemHeight)
      setActiveIndex(Math.min(activeItemIndex, data.length - 1))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownload = () => {
    const pdfPath = '/Program_Schedule_WebsiteCSITSS2025.docx.pdf'
    window.open(pdfPath, '_blank')
  }

  return (
    <div className="w-full px-4 py-12 relative">
      {/* Popup Notification */}
      {/* <div
        className={`fixed top-4 right-4 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-xl 
          transform transition-all duration-300 flex items-center gap-3 z-50
          ${showPopup ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <span className="font-semibold">Coming Soon!</span>
        <button
          onClick={() => setShowPopup(false)}
          className="text-white hover:text-blue-200 transition-colors"
        >
          <X size={20} />
        </button>
      </div> */}

      <div
        className={`max-w-5xl mx-auto transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-16 flex items-center justify-center gap-3">
          <Calendar className="text-blue-600" size={40} />
          Important Dates
        </h1>

        <div className="relative pl-8">
          {data.map((item, index) => (
            <div
              key={index}
              className={`mb-16 transition-all duration-500 ${
                index <= activeIndex
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-80 -translate-x-4'
              }`}
            >
              <div className="flex items-start gap-8">
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center 
                    ${index <= activeIndex ? 'bg-blue-600' : 'bg-gray-200'} 
                    transition-all duration-500 transform hover:scale-110`}
                  >
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  {index < data.length - 1 && (
                    <div
                      className={`absolute left-8 top-16 w-0.5 h-24 
                      ${index <= activeIndex ? 'bg-blue-600' : 'bg-gray-200'} 
                      transition-colors duration-500`}
                    />
                  )}
                </div>

                <div
                  className={`flex-1 pt-3 transition-all duration-500 transform 
                  ${index <= activeIndex ? 'translate-y-0' : 'translate-y-4'}`}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xl text-gray-700 font-medium">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 
              text-white text-lg font-semibold rounded-full transition-all duration-300 
              transform hover:scale-105 hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Download Pre-Conference Schedule
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomTimeline

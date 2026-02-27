import React, { useEffect, useState } from 'react'
import { Calendar, Clock } from 'lucide-react'

const CustomTimeline = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  // const [showPopup, setShowPopup] = useState(false)

  const data = [
    {
      label: 'Submission of Full-length Manuscript (opens from)',
      date: '5th April 2026',
    },
    {
      label: 'Last date to submit Full-length Manuscript',
      date: '31st May 2026',
    },
    {
      label: 'Notification of Acceptance',
      date: '5th Aug 2026',
    },
    {
      label: 'Early Bird Registration (opens from)',
      date: '13th Aug 2026',
    },
    {
      label: 'Early Bird Registration ends on',
      date: '30th Aug 2026',
    },
    {
      label: 'Submission of Camera-ready Manuscript and Copyright form',
      date: '20th Sept 2026',
    },
    {
      label: 'Last Date for Registration for both paper and Ph. D. Thesis',
      date: '1st Oct 2026',
    },
    {
      label: 'Best PhD Thesis Presentation',
      date: '29th Oct 2026',
    },
    {
      label: 'Conference Dates',
      date: '30th and 31st Oct 2026',
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
                    {item.date}{' '}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 pl-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Awards</h2>
          <p className="text-lg text-gray-700 font-medium mb-4">
            The below awards will be conferred by CSITSS- 2026
          </p>
          <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700 pl-4">
            <li>Best PhD Thesis</li>
            <li>Best Faculty and student paper</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default CustomTimeline

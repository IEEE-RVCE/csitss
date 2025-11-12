import React from 'react'
import { BriefcaseBusiness, FileText } from 'lucide-react'

type SpeakerType = {
  id: number
  name: string
  designation: string
  topic?: string
  imageLink: string
  profileLink?: string
  time?: string
  venue?: string
}

const SpeakerCard = ({
  speaker,
  setSpeakerPopup,
}: {
  speaker: SpeakerType
  setSpeakerPopup: (profileLink: string | null) => void
}) => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 border border-gray-200 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-80 w-full overflow-hidden bg-gray-100">
        <img
          src={speaker.imageLink}
          alt={speaker.name}
          className="h-full w-full object-cover "
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Speaker Info */}
        <h3 className="text-xl flex justify-center font-semibold text-gray-900 mb-3">
          <span className="">{speaker.name}</span>
        </h3>

        {/* Designation */}
        <div className="mb-4 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
              <BriefcaseBusiness className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              {/* <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                Designation
              </p> */}
              <p className="text-sm text-gray-800 leading-relaxed font-medium">
                {speaker.designation}
              </p>
            </div>
          </div>
        </div>

        {/* Topic */}
        {speaker.topic && (
          <div className="mt-4 pt-4 border-t border-gray-200 mb-4">
            <div className="flex items-start">
              <FileText className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <p className="text-sm font-medium text-blue-600">
                  <span className="text-gray-500">Topic:</span> {speaker.topic}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Time and Venue Info (for keynote/plenary) */}
        {(speaker.time || speaker.venue) && (
          <div className="space-y-3 mb-4 mt-2">
            {speaker.time && (
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
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
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Time</p>
                  <p className="text-sm font-medium text-gray-900">{speaker.time}</p>
                </div>
              </div>
            )}

            {speaker.venue && (
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0"
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
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Venue</p>
                  <p className="text-sm font-medium text-gray-900">{speaker.venue}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Button to view profile - pushed to bottom */}
        {speaker.profileLink && (
          <div className="flex justify-center mt-auto pt-4">
            <span
              className="text-sm font-medium bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
              onClick={() => setSpeakerPopup(speaker.profileLink || null)}
            >
              View Profile
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default SpeakerCard

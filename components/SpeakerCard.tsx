import React from 'react'
import { BriefcaseBusiness, FileText } from 'lucide-react'

type SpeakerType = {
  id: number
  name: string
  designation: string
  topic?: string
  imageLink: string
  profileLink?: string
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
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                Designation
              </p>
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

        {/* Button to view profile - pushed to bottom */}
        {speaker.profileLink && (
          <div className="flex justify-end mt-auto pt-4">
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

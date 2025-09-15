import React from 'react'

type SpeakerType = {
  id: number
  name: string
  designation: string
  topic?: string
  imageLink: string
}

const SpeakerCard = ({ speaker }: { speaker: SpeakerType }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={speaker.imageLink}
          className="h-full w-full object-cover"
          alt={speaker.name}
        />
      </div>

      {/* Text Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{speaker.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">{speaker.designation}</p>
        {speaker.topic && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <p className="text-sm font-medium text-blue-600">
              <span className="text-gray-500">Topic:</span> {speaker.topic}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SpeakerCard

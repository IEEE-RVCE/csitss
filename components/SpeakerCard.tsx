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
    <div
      key={speaker.id}
      className="hover:border-gradient-to-r relative flex w-72 flex-col space-y-3 rounded-3xl border-2 border-transparent bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-lg">
        <img
          src={speaker.imageLink}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          alt={speaker.name}
        />
      </div>

      {/* Text Section */}
      <div className="text-center">
        <h1 className="text-xl font-semibold text-gray-800">{speaker.name}</h1>
        <h2 className="mt-1 text-sm text-gray-500">{speaker.designation}</h2>
        {speaker.topic && (
          <p className="mt-2 text-sm font-medium italic text-gray-600">
            Topic: {speaker.topic}
          </p>
        )}
      </div>

      {/* Hover Overlay Effect */}
    </div>
  )
}

export default SpeakerCard

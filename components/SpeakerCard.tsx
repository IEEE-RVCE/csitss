import React from 'react'

type SpeakerType = {
  id: number
  name: string
  designation: string
  imageLink: string
}

const SpeakerCard = ({ speaker }: { speaker: SpeakerType }) => {
  return (
    <div
      key={speaker.id}
      className="flex w-72 flex-col space-y-2 rounded-2xl p-4 shadow-lg transition-all duration-300 hover:-translate-y-3"
    >
      <img
        src={speaker.imageLink}
        className="h-64 w-64 rounded-xl object-cover"
        alt={speaker.name}
      />
      <div>
        <h1 className="text-lg font-bold">{speaker.name}</h1>
        <h1 className="text-md text-gray-500">{speaker.designation}</h1>
      </div>
    </div>
  )
}

export default SpeakerCard

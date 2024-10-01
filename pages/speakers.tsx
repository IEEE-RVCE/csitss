import React from 'react'
import SpeakerCard from '../components/SpeakerCard'

type SpeakerType = {
  id: number
  name: string
  designation: string
  imageLink: string
}

const speakerList: SpeakerType[] = [
  {
    id: 1,
    name: 'Sri. S S Iyengar',
    designation:
      'Distinguised University Professor, Florida International University (FIU), Miami',
    imageLink: './speakers/ss_iyenger.jpeg',
  },
  {
    id: 2,
    name: 'Chaitra Vedullapalli',
    designation: 'Cofounder & CMO, Meylah',
    imageLink: './speakers/chaitra_v.jpeg',
  },
  {
    id: 3,
    name: 'Rajamani',
    designation: 'Founder and CEO, Google',
    imageLink: 'https://rvu.edu.in/wp-content/uploads/2023/02/02-3.png',
  },
]

const speakers = () => {
  return (
    <div className="py-8">
      <h1 className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-center text-4xl font-bold text-transparent">
        Keynote Speakers
      </h1>
      <div className="mt-12 flex w-full flex-col items-center space-x-0 space-y-8 py-2 px-0  lg:flex-row lg:justify-between lg:space-x-4 lg:space-y-0 lg:px-12">
        {speakerList.map((speaker: SpeakerType) => (
          <SpeakerCard speaker={speaker} />
        ))}
      </div>
    </div>
  )
}

export default speakers

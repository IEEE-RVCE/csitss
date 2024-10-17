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
    name: 'Prof. Dr.-Ing. Vinod Rajamani',
    designation: 'Professor, University of Applied Sciences and Arts Dortmund',
    imageLink:
      'https://www.fh-dortmund.de/kontakt-daten/Rajamani-Vinod.php.media/82194/Vinod-Rajamani_Portrait.jpg.scaled/3312b7eed140ac54332cfc22f82c192c.jpg',
  },
]

const speakers = () => {
  return (
    <div className="min-h-screen bg-white py-10">
      <div className="flex justify-center">
        <h1 className="w-fit rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text px-6 py-3 text-4xl font-extrabold text-transparent shadow-lg">
          Keynote Speakers
        </h1>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8 py-6 px-4 lg:px-16">
        {speakerList.map((speaker: SpeakerType) => (
          <div
            key={speaker.id}
            className="hover:border-gradient-to-r w-full max-w-xs rounded-2xl border-2 border-transparent bg-white bg-clip-border p-6 shadow-lg transition-all hover:scale-105 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 hover:shadow-2xl"
          >
            <SpeakerCard speaker={speaker} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default speakers

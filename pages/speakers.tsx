import React from 'react'
import SpeakerCard from '../components/SpeakerCard'

type SpeakerType = {
  id: number
  name: string
  designation: string
  topic?: string
  imageLink: string
}

const keynoteSpeakers: SpeakerType[] = [
  {
    id: 1,
    name: 'Prof. Dr. Jean Meyer',
    designation:
      'President of the Technical University of Applied Sciences Wuerzburg-Schweinfurt (THWS)',
    topic:'Humanoid Robots – More than just another Industrial Revolution',
    imageLink: './speakers/Jean.png',
  },
  {
    id: 2,
    name: 'Prof. Dr. Achim Förster',
    designation: 'Vice President for International & Academic Affairs at THWS',
    topic:'AI Regulation under the EU AI Act',
    imageLink: './speakers/Achim.png',
  },
  
]



const Speakers = () => {
  return (
    <div className="min-h-screen bg-white py-10">
      {/* Keynote Speakers Section */}
      <div className="flex justify-center">
        <h1 className="w-fit rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text px-6 py-3 text-4xl font-extrabold text-transparent shadow-lg">
          Keynote Speakers
        </h1>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-8 py-6 px-4 lg:px-16">
        {keynoteSpeakers.map((speaker) => (
          <div
            key={speaker.id}
            className="hover:border-gradient-to-r w-full max-w-xs rounded-2xl border-2 border-transparent bg-white bg-clip-border p-6 shadow-lg transition-all hover:scale-105 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 hover:shadow-2xl"
          >
            <SpeakerCard speaker={speaker} />
          </div>
        ))}
      </div>
{/* 
      
      <div className="mt-16 flex justify-center">
        <h1 className="w-fit rounded-full bg-gradient-to-r from-teal-600 via-green-600 to-yellow-600 bg-clip-text px-6 py-3 text-4xl font-extrabold text-transparent shadow-lg">
          Invited Speakers
        </h1>
      </div>

     
      <div className="mt-12 flex justify-center">
        <h2 className="w-fit rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text px-6 py-3 text-3xl font-extrabold text-transparent shadow-lg">
          Track 1: AI for All
        </h2>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-8 py-6 px-4 lg:px-16">
        {aiForAllSpeakers.map((speaker) => (
          <div
            key={speaker.id}
            className="hover:border-gradient-to-r w-full max-w-xs rounded-2xl border-2 border-transparent bg-white bg-clip-border p-6 shadow-lg transition-all hover:scale-105 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 hover:shadow-2xl"
          >
            <SpeakerCard speaker={speaker} />
          </div>
        ))}
      </div>


      <div className="mt-16 flex justify-center">
        <h2 className="w-fit rounded-full bg-gradient-to-r from-pink-600 via-red-600 to-yellow-600 bg-clip-text px-6 py-3 text-3xl font-extrabold text-transparent shadow-lg">
          Track 2: Digital Transformation
        </h2>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-8 py-6 px-4 lg:px-16">
        {digitalTransformationSpeakers.map((speaker) => (
          <div
            key={speaker.id}
            className="hover:border-gradient-to-r w-full max-w-xs rounded-2xl border-2 border-transparent bg-white bg-clip-border p-6 shadow-lg transition-all hover:scale-105 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:shadow-2xl"
          >
            <SpeakerCard speaker={speaker} />
          </div>
        ))}
      </div>
   */}
    </div>
       
  )
}

export default Speakers

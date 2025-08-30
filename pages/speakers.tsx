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
    name: 'Sri. S S Iyengar',
    designation:
      'Distinguished University Professor, Florida International University (FIU), Miami',
    imageLink: './speakers/ss_iyenger.jpeg',
  },
  {
    id: 2,
    name: "Prof. Dr. Stephan Weyers",
    designation: "Vice-Rector for Teaching, Studies and International Affairs, FH Dortmund.",
    imageLink: "/speakers/stephanWeyers.png",
  }
  // {
  //   id: 2,
  //   name: 'Chaitra Vedullapalli',
  //   designation: 'Cofounder & CMO, Meylah',
  //   imageLink: './speakers/chaitra_v.jpeg',
  // },
  // {
  //   id: 3,
  //   name: 'Prof. Dr.-Ing. Vinod Rajamani',
  //   designation: 'Professor, University of Applied Sciences and Arts Dortmund',
  //   imageLink:
  //     'https://www.fh-dortmund.de/kontakt-daten/Rajamani-Vinod.php.media/82194/Vinod-Rajamani_Portrait.jpg.scaled/3312b7eed140ac54332cfc22f82c192c.jpg',
  // },
]

const aiForAllSpeakers: SpeakerType[] = [
  {
    id: 4,
    name: 'Mr. Raj Pagaku',
    designation:
      'VP Engineering, Security Business Unit, Juniper Networks India Pvt Ltd, Bengaluru, India',
    topic: 'Inclusive AI: Shaping the Future for Everyone',
    imageLink:
      'https://media.licdn.com/dms/image/v2/D5603AQHYe3rt7tTUZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690629699833?e=1735776000&v=beta&t=kILq2XM2fufTdX-vVWqQWYw2E8EJGwS_sSRuuxW5dfs',
  },
  {
    id: 5,
    name: 'Dr. Nagaraju G',
    designation:
      'Director, Ophthalmology, Minto Eye Hospital, BMCRI, Bengaluru',
    topic: 'AI in Health Care',
    imageLink:
      'https://mhbmcri.karnataka.gov.in/storage/pdf-files/DrNagraj.jpg',
  },
]

const digitalTransformationSpeakers: SpeakerType[] = [
  {
    id: 6,
    name: 'Dr. K B Shyam Prasad',
    designation:
      'Momentive Performance Materials India Pvt Ltd, India Technology Centre, Bengaluru',
    topic: 'Accelerate Innovation through Digital Tools',
    imageLink:
      'https://media.licdn.com/dms/image/v2/C5603AQH8tHEbqXh4dg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517713735746?e=1735776000&v=beta&t=PEUeA-D3bFctLoqUEMUQ_8IAL_IlunJ3RPc2rVHb9kI',
  },
  {
    id: 7,
    name: 'Mr. Abhi Anand',
    designation:
      'Director (Financial Services Leader), PwC, Bagmane Tech Park, Bengaluru',
    topic: 'Sustainable AI Applications',
    imageLink:
      'https://media.licdn.com/dms/image/v2/D5603AQHZ1kZTvzQ-tA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692179908763?e=1735776000&v=beta&t=Rya_Qbez8e9baX4U9ZtaTIalpl8o95Z5xbyI_Gf_Q6Y',
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

      {/* Pre Conference Speakers Section */}
      <div className="mt-16 flex justify-center">
        <h1 className="w-fit rounded-full bg-gradient-to-r from-teal-600 via-green-600 to-yellow-600 bg-clip-text px-6 py-3 text-4xl font-extrabold text-transparent shadow-lg">
          Invited Speakers
        </h1>
      </div>

      {/* AI for All Track */}
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

      {/* Digital Transformation Track */}
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
    </div>
  )
}

export default Speakers

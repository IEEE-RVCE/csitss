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
    designation: "Vice-Rector for Teaching, Studies and International Affairs, FH Dortmund",
    topic: "Navigating the Future: Engineering Education for Sustainability and Employability",
    imageLink: "/speakers/stephanWeyers.png",
  },
  {
    id: 3,
    name: "Prof. Dr. Jean Meyer",
    designation: "President of THWS",
    topic: "Humanoid Robots – More than just another Industrial Revolution",
    imageLink: "/speakers/jean.png",
  }
]

const plenarySpeakers: SpeakerType[] = [
  // Add your plenary speaker data here
  // Example:
  // {
  //   id: 10,
  //   name: 'Plenary Speaker Name',
  //   designation: 'Title and Organization',
  //   topic: 'Talk Topic',
  //   imageLink: '/speakers/plenary-speaker.jpg',
  // }
  {
    id: 1,
    name: "Prof. Dr. Achim Förster",
    designation: "Vice President for International & Academic Affairs at THWS",
    topic: "AI Regulation under the EU AI Act",
    imageLink: "/speakers/achim.png",
  }
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
  const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
    </div>
  )

  const SpeakerGrid = ({ speakers }: { speakers: SpeakerType[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
      {speakers.map((speaker) => (
        <SpeakerCard key={speaker.id} speaker={speaker} />
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conference Speakers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our distinguished speakers who will share their expertise and insights at CSITSS 2025
          </p>
        </div>

        {/* Keynote Speakers Section */}
        <section className="mb-20">
          <SectionHeader title="Keynote Speakers" />
          <SpeakerGrid speakers={keynoteSpeakers} />
        </section>

        {/* Plenary Speakers Section */}
        {plenarySpeakers.length > 0 && (
          <section className="mb-20">
            <SectionHeader title="Plenary Speakers" />
            <SpeakerGrid speakers={plenarySpeakers} />
          </section>
        )}

        {/* Invited Speakers Section */}
        <section className="mb-20">
          <SectionHeader title="Invited Speakers" subtitle="Special presentations across different tracks" />
          
          {/* AI for All Track */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Track 1: AI for All</h3>
              <div className="w-16 h-0.5 bg-purple-500 mx-auto rounded"></div>
            </div>
            <SpeakerGrid speakers={aiForAllSpeakers} />
          </div>

          {/* Digital Transformation Track */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Track 2: Digital Transformation</h3>
              <div className="w-16 h-0.5 bg-green-500 mx-auto rounded"></div>
            </div>
            <SpeakerGrid speakers={digitalTransformationSpeakers} />
          </div>
        </section>

      </div>
    </div>
  )
}

export default Speakers

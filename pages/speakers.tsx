import React, { useState } from 'react'
import SpeakerCard from '../components/SpeakerCard'
import { BriefcaseBusiness, FileText, X } from 'lucide-react'
import { speakersProfile } from '../data/speakers_profile'

type SpeakerType = {
  id: number
  name: string
  designation: string
  topic?: string
  imageLink: string
  profileLink?: string
  time: string
  venue: string
}

type TutorialSpeakerType = {
  id: number
  name: string
  designation: string
  topic: string
  imageLink: string
  profileLink?: string
  time: string
  venue: string
}

type PanelMemberType = {
  id: number
  name: string
  designation: string
  imageLink: string
  profileLink?: string
}

const keynoteSpeakers: SpeakerType[] = [
  {
    id: 1,
    name: 'Mr. Rafi Mohammed',
    designation: 'Vice President and Head of Technology, Maximus India',
    topic:
      'How the Public Service Sector Leverages AEGIS to Enhance the Citizen Experience Through Its Partnership with Maximus',
    imageLink: '/speakers/rafi-mohammed.png',
    profileLink: 'rafi-mohammed',
    time: '9:30 AM - 1:30 PM',
    venue: 'IEM Auditorium, RVCE',
  },
  {
    id: 2,
    name: 'Prof. Dr. Jean Meyer',
    designation:
      'President of the Technical University of Applied Sciences Würzburg-Schweinfurt (THWS). Professor at the Faculty of Mechanical Engineering at THWS',
    // topic: 'Humanoid Robots - More than just another Industrial Revolution',
    topic: 'Humanoid Robots – More than just another Industrial Revolution',
    profileLink: 'jean-meyer',
    imageLink: '/speakers/jean.png',
    time: '9:30 AM - 1:30 PM',
    venue: 'IEM Auditorium, RVCE',
  },
  {
    id: 3,
    name: 'Sri. S S Iyengar',
    designation:
      'Ryder Professor & Director, School of Computing and Information Sciences, Florida International University, Miami, USA',
    imageLink: './speakers/ss_iyenger.jpeg',
    profileLink: 'ss-iyengar',
    topic: 'Python for Real AI Applications',
    time: '9:30 AM - 1:30 PM',
    venue: 'IEM Auditorium, RVCE',
  },
  {
    id: 4,
    name: 'Prof. Dr. Stephan Weyers',
    designation:
      'Vice-Rector for Teaching, Studies and International Affairs, FH Dortmund, Germany.',
    profileLink: 'stephan-weyers',
    topic:
      'Navigating the Future: Engineering Education for Sustainability and Employability',
    imageLink: '/speakers/stephanWeyers.png',
    time: '9:30 AM - 1:30 PM',
    venue: 'IEM Auditorium, RVCE',
  },
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
    name: 'Prof. Dr.-Ing. Vinod Rajamani',
    designation:
      'Vice Dean of Academics and Internationalization Chairman of Indo-German Collaboration at Auslandsgesellschaft.de. Fachhochschule Dortmund University of Applied Sciences and Arts, Germany',
    topic:
      'International Research Collaboration in Sustainability at FH Dortmund',
    profileLink: 'vinod-rajamani',
    imageLink: '/speakers/vinod.png',
    time: '09:30AM - 10:00 AM',
    venue: 'Civil Seminar Hall',
  },
  {
    id: 2,
    name: 'Prof. Dr. Achim Förster',
    designation:
      'Vice President for International & Academic Affairs at Technical University of Applied Sciences Würzburg-Schweinfurt (THWS),  Germany.',
    topic: 'AI Regulation under the EU AI Act',
    imageLink: '/speakers/achim.png',
    profileLink: 'achim-forster',
    time: '10:00 AM - 10:30 AM',
    venue: 'Civil Seminar Hall',
  },
]

const panelDiscussionMembers: PanelMemberType[] = [
  {
    id: 1,
    name: 'Prof. Dr. Stephan Weyers',
    designation:
      'Vice-Rector for Teaching, Studies and International Affairs, FH Dortmund, Germany',
    imageLink: '/speakers/stephanWeyers.png',
    profileLink: 'stephan-weyers-panel',
  },
  {
    id: 2,
    name: 'Prof. Dr. Achim Förster',
    designation:
      'Vice President for International & Academic Affairs, Technical University of Applied Sciences Würzburg-Schweinfurt (THWS), Germany',
    imageLink: '/speakers/achim.png',
    profileLink: 'achim-forster-panel',
  },
  {
    id: 3,
    name: 'Prof. Dr. Marian Daun',
    designation:
      'Professor of Software Engineering and Program Director of the Robotics (IRO) program at THWS, Germany',
    imageLink: '/speakers/marian.png',
    profileLink: 'marian-daun',
  },
  {
    id: 4,
    name: 'Prof. Dr. Sonja Kuhnt',
    designation:
      'Professor of Mathematical Statistics at the Faculty of Computer Science, Fachhochschule Dortmund, Germany',
    imageLink: '/speakers/sonja.png',
    profileLink: 'sonja-kuhnt',
  },
  {
    id: 5,
    name: 'Dr. K.S. Geetha',
    designation:
      'Vice-Principal and Professor, Department of Electronics & Communication Engineering, RVCE (Moderator)',
    imageLink: '/speakers/ksgeetha.png',
    profileLink: 'ks-geetha',
  },
  {
    id: 6,
    name: 'Dr. K.N. Subramanya',
    designation:
      'Principal & Professor, Department of Industrial Engineering and Management, RVCE',
    imageLink: '/speakers/knsubramanya.png',
    profileLink: 'kn-subramanya',
  },
]

const preConferenceTutorialSpeakers: TutorialSpeakerType[] = [
  {
    id: 1,
    name: 'Mr. Sambu Mohan',
    designation:
      'Senior Software Manager, Embedded and Edge Products Division at Synaptics, Bangalore',
    topic: 'Generative AI at the Edge',
    imageLink: '/speakers/MrSambuMohan.png',
    profileLink: 'sambu-mohan',
    time: '9:30 AM - 11:00 AM',
    venue: 'MV Seminar Hall (Dept of Civil Engg., 3rd Floor)',
  },
  {
    id: 2,
    name: 'Shri. Roopa Sheshadri',
    designation: 'Director at Samsung R&D Institute, Bangalore',
    topic:
      'AI for Visual Creativity: How Machines See, Enhance, and Reimagine Photos & Videos',
    imageLink: '/speakers/roopa-sheshadri.png',
    profileLink: 'roopa-sheshadri',
    time: '11:30 AM - 1:00 PM',
    venue: 'MV Seminar Hall (Dept of Civil Engg., 3rd Floor)',
  },
  {
    id: 3,
    name: 'Mr. Praful Mathur',
    designation: 'Chief Engineer at Samsung R&D Institute, Bangalore',
    topic:
      'AI for Visual Creativity: How Machines See, Enhance, and Reimagine Photos & Videos',
    imageLink: '/speakers/praful-mathur.png',
    profileLink: 'praful-mathur',
    time: '11:30 AM - 1:00 PM',
    venue: 'MV Seminar Hall (Dept of Civil Engg., 3rd Floor)',
  },
  {
    id: 4,
    name: 'Mr. Venkata Chunduru',
    designation:
      'Director & Head India Operations at Arcadis (IBI) Group, Bangalore',
    topic:
      'AI-Driven IoT Analytics: Transforming Device Management for the Digital Era',
    imageLink: '/speakers/venkata-chunduru.png',
    profileLink: 'venkata-chunduru',
    time: '9:30 AM - 11:00 AM',
    venue: 'ISE Seminar Hall (Dept. of Information Science & Engg., 1st Floor)',
  },
  {
    id: 5,
    name: 'Prof. Dr. Tim Gruchmann',
    designation: 'Professor, Department of Business Studies, FH Dortmund',
    topic:
      'Putting the Puzzle pieces together: A Systems Thinking Approach to Circular Economy Transitions',
    imageLink: '/speakers/tim-gruchmann.png',
    profileLink: 'tim-gruchmann',
    time: '11:30 AM - 1:00 PM',
    venue: 'ISE Seminar Hall (Dept. of Information Science & Engg., 1st Floor)',
  },
]

// const aiForAllSpeakers: SpeakerType[] = [
//   {
//     id: 4,
//     name: 'Mr. Raj Pagaku',
//     designation:
//       'VP Engineering, Security Business Unit, Juniper Networks India Pvt Ltd, Bengaluru, India',
//     topic: 'Inclusive AI: Shaping the Future for Everyone',
//     imageLink:
//       'https://media.licdn.com/dms/image/v2/D5603AQHYe3rt7tTUZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690629699833?e=1735776000&v=beta&t=kILq2XM2fufTdX-vVWqQWYw2E8EJGwS_sSRuuxW5dfs',
//   },
//   {
//     id: 5,
//     name: 'Dr. Nagaraju G',
//     designation:
//       'Director, Ophthalmology, Minto Eye Hospital, BMCRI, Bengaluru',
//     topic: 'AI in Health Care',
//     imageLink:
//       'https://mhbmcri.karnataka.gov.in/storage/pdf-files/DrNagraj.jpg',
//   },
// ]

// const digitalTransformationSpeakers: SpeakerType[] = [
//   {
//     id: 6,
//     name: 'Dr. K B Shyam Prasad',
//     designation:
//       'Momentive Performance Materials India Pvt Ltd, India Technology Centre, Bengaluru',
//     topic: 'Accelerate Innovation through Digital Tools',
//     imageLink:
//       'https://media.licdn.com/dms/image/v2/C5603AQH8tHEbqXh4dg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517713735746?e=1735776000&v=beta&t=PEUeA-D3bFctLoqUEMUQ_8IAL_IlunJ3RPc2rVHb9kI',
//   },
//   {
//     id: 7,
//     name: 'Mr. Abhi Anand',
//     designation:
//       'Director (Financial Services Leader), PwC, Bagmane Tech Park, Bengaluru',
//     topic: 'Sustainable AI Applications',
//     imageLink:
//       'https://media.licdn.com/dms/image/v2/D5603AQHZ1kZTvzQ-tA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692179908763?e=1735776000&v=beta&t=Rya_Qbez8e9baX4U9ZtaTIalpl8o95Z5xbyI_Gf_Q6Y',
//   },
// ]

const Speakers = () => {
  const [speakerPopup, setSpeakerPopup] = useState<string | null>(null)

  const SectionHeader = ({
    title,
    subtitle,
  }: {
    title: string
    subtitle?: string
  }) => (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
    </div>
  )

  const SpeakerGrid = ({ speakers }: { speakers: SpeakerType[] }) => (
    <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto">
      {speakers.map((speaker) => (
        <div
          key={speaker.id}
          className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
        >
          <SpeakerCard speaker={speaker} setSpeakerPopup={setSpeakerPopup} />
        </div>
      ))}
    </div>
  )

  const TutorialSpeakerCard = ({
    speaker,
  }: {
    speaker: TutorialSpeakerType
  }) => (
    <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 border border-gray-200 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-80 w-full overflow-hidden bg-gray-100">
        <img
          src={speaker.imageLink}
          alt={speaker.name}
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Speaker Info */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
          {speaker.name}
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
        <div className="mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-start">
            <FileText className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm font-medium text-blue-600">
              <span className="text-gray-500">Topic:</span> {speaker.topic}
            </p>
          </div>
        </div>

        {/* Time and Venue Info */}
        <div className="space-y-3 mb-4">
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
              <p className="text-xs font-semibold text-gray-500 uppercase">
                Time
              </p>
              <p className="text-sm font-medium text-gray-900">
                {speaker.time}
              </p>
            </div>
          </div>

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
              <p className="text-xs font-semibold text-gray-500 uppercase">
                Venue
              </p>
              <p className="text-sm font-medium text-gray-900">
                {speaker.venue}
              </p>
            </div>
          </div>
        </div>

        {/* Button to view profile */}
        {speaker.profileLink && (
          <div className="flex justify-center mt-auto pt-2">
            <button
              type="button"
              className="text-sm font-medium bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 cursor-pointer transition-colors"
              onClick={() => setSpeakerPopup(speaker.profileLink || null)}
            >
              View Profile
            </button>
          </div>
        )}
      </div>
    </div>
  )

  const TutorialSpeakerGrid = ({
    speakers,
  }: {
    speakers: TutorialSpeakerType[]
  }) => (
    <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto">
      {speakers.map((speaker) => (
        <div
          key={speaker.id}
          className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
        >
          <TutorialSpeakerCard speaker={speaker} />
        </div>
      ))}
    </div>
  )

  const PanelMemberCard = ({ member }: { member: PanelMemberType }) => (
    <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 border border-gray-200 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-80 w-full overflow-hidden bg-gray-100">
        <img
          src={member.imageLink}
          alt={member.name}
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Member Info */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
          {member.name}
        </h3>

        {/* Designation */}
        <div className="mb-4 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
              <BriefcaseBusiness className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800 leading-relaxed font-medium">
                {member.designation}
              </p>
            </div>
          </div>
        </div>

        {/* Button to view profile */}
        {member.profileLink && (
          <div className="flex justify-center mt-auto pt-2">
            <span
              className="text-sm font-medium bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 cursor-pointer transition-colors"
              onClick={() => setSpeakerPopup(member.profileLink || null)}
            >
              View Profile
            </span>
          </div>
        )}
      </div>
    </div>
  )

  const PanelMemberGrid = ({ members }: { members: PanelMemberType[] }) => (
    <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto">
      {members.map((member) => (
        <div
          key={member.id}
          className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
        >
          <PanelMemberCard member={member} />
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conference Speakers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our distinguished speakers who will share their expertise and
            insights at CSITSS 2025
          </p>
        </div>

        {/* Keynote Speakers Section */}
        <section className="mb-20">
          <SectionHeader
            title="Keynote Speakers"
            subtitle="Keynote Speakers address on 21st November 2025"
          />
          <SpeakerGrid speakers={keynoteSpeakers} />
        </section>

        {/* Plenary Speakers Section */}
        {plenarySpeakers.length > 0 && (
          <section className="mb-20">
            <SectionHeader
              title="Plenary Speakers"
              subtitle="Plenary Speakers address on 22nd November 2025"
            />
            <SpeakerGrid speakers={plenarySpeakers} />
          </section>
        )}

        {/* Panel Discussion Members Section */}
        {panelDiscussionMembers.length > 0 && (
          <section className="mb-20">
            <SectionHeader title="Panel Discussion Members" />

            {/* Professional Callout Box for Theme, Time, and Venue */}
            <div className="max-w-6xl mx-auto mb-10">
              <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl shadow-lg border-2 border-blue-200 overflow-hidden">
                <div className="relative p-6">
                  {/* Title Row */}
                  <div className="mb-4">
                    <span className="text-md font-bold text-blue-800 uppercase tracking-wide block text-center mb-2">
                      Theme
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-black-800">
                      AEGIS: Advanced Engineering for Green, Intelligent, and
                      Secure Systems
                    </h3>
                  </div>

                  {/* Info Row - Three Sections */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Theme Section */}
                    <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-blue-100 shadow-sm">
                      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg shadow-md flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          Date
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          22nd November 2025
                        </p>
                      </div>
                    </div>

                    {/* Time Section */}
                    <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-green-100 shadow-sm">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-lg shadow-md flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
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
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          Time
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          4:30 PM - 5:15 PM
                        </p>
                      </div>
                    </div>

                    {/* Venue Section */}
                    <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-purple-100 shadow-sm">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2 rounded-lg shadow-md flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
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
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          Venue
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          ECE Seminar Hall
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <PanelMemberGrid members={panelDiscussionMembers} />
          </section>
        )}

        {/* Pre-Conference Tutorial Speakers Section */}
        {preConferenceTutorialSpeakers.length > 0 && (
          <section className="mb-20">
            <SectionHeader
              title="Pre-Conference Tutorial Speakers"
              subtitle="20th November 2025 | Expert-led tutorials on cutting-edge technologies"
            />
            <TutorialSpeakerGrid speakers={preConferenceTutorialSpeakers} />
          </section>
        )}

        {/* Invited Speakers Section */}
        {/* <section className="mb-20">
          <SectionHeader
            title="Invited Speakers"
            subtitle="Special presentations across different tracks"
          /> */}

        {/* AI for All Track */}
        {/* <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Track 1: AI for All
              </h3>
              <div className="w-16 h-0.5 bg-purple-500 mx-auto rounded"></div>
            </div>
            <SpeakerGrid speakers={aiForAllSpeakers} />
          </div> */}

        {/* Digital Transformation Track */}
        {/* <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Track 2: Digital Transformation
              </h3>
              <div className="w-16 h-0.5 bg-green-500 mx-auto rounded"></div>
            </div>
            <SpeakerGrid speakers={digitalTransformationSpeakers} />
          </div> */}
        {/* </section> */}
      </div>
      {/* Speaker Profile Popup */}
      {speakerPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={() => setSpeakerPopup(null)}
        >
          {/* Close Button - Fixed Position */}
          <button
            className="fixed top-4 right-4 sm:top-8 sm:right-8 z-[60] bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            onClick={() => setSpeakerPopup(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="bg-white rounded-lg shadow-2xl w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Content Container */}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                <div className="text-gray-900 leading-relaxed text-sm sm:text-base whitespace-pre-wrap break-words text-justify">
                  {speakersProfile[speakerPopup] ||
                    'Profile information not available.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Speakers

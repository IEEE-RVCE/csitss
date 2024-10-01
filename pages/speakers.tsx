import React from 'react'

type SpeakerType = {
    id: number,
    name: string,
    designation : string,
    imageLink : string
}

const speakerList: SpeakerType[] = [
    {
        id: 1,
        name: "Sri. S S Iyengar",
        designation: "Distinguised University Professor, Florida International University (FIU), Miami",
        imageLink: "./speakers/ss_iyenger.jpeg"
    },
    {
        id: 2,
        name: "Chaitra Vedullapalli",
        designation: "Cofounder & CMO, Meylah",
        imageLink: "./speakers/chaitra_v.jpeg"
    },
    {
        id: 3,
        name: "Rajamani",
        designation: "Founder and CEO, Google",
        imageLink: "https://rvu.edu.in/wp-content/uploads/2023/02/02-3.png"
    }
]

const speakers = () => {
  return (
    <div className='py-8'>
        <h1 className='text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600'> Keynote Speakers </h1>
        <div className='flex py-2 flex-col w-full mt-12 px-0 items-center lg:px-12 lg:justify-between  lg:flex-row space-x-0 lg:space-x-4 space-y-8 lg:space-y-0'>
            {speakerList.map((speaker:SpeakerType)=>{
                return <div key={speaker.id} className='flex hover:-translate-y-3 transition-all duration-300 rounded-2xl w-72 flex-col space-y-2 shadow-lg p-4'>
                    <img src={speaker.imageLink} className='h-64 w-64 rounded-xl' alt={speaker.name} />
                    <div>
                        <h1 className='text-xl font-bold'>{speaker.name}</h1>
                        <h1 className='text-lg text-gray-500'>{speaker.designation}</h1>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default speakers
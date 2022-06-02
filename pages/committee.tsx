import { Avatar } from '@mantine/core';
import React from 'react'

type Mem = {
  label: string;
  members: {
    name: string;
    post?: string;
  }[];
}

const committeeMembers: Mem[] = [{
  label: "Chief Patron",
  members: [
    {
      name: "Dr. M. P. Shyam",
      post: "President, RSST."
    }
  ]
}, {
  label: "Patron",
  members: [
    {
      name: "Sri. K. G. Subbarama Setty	",
      post: "Hon. Treasurer, RSST."
    },
    {
      name: "Sri. A.V.S. Murthy",
      post: "Hon. Secretary, RSST."
    },
    {
      name: "Sri. D.P.Nagaraj",
      post: "Hon. Joint Secretary, RSST."
    },
    {
      name: "Sri Dr. K N Subramanya",
      post: "Principal, RVCE."
    }
  ]
},
{
  label: "Advisory Committee",
  members: [
    {
      name: "Dr.Gang Li",
      post: "Deakin University, Australia"
    },
    {
      name: "Dr. SundaravadivazhaganBalasubaramanian",
    },
    {
      name: "Dr. Uma Mohan",
      post: "Director - Doctoral programmes,LSC, UK"
    },
    {
      name: "Dr.Devesh Dwivedi",
      post: "India Site Head, IP Development and Design Centre of Excellence, Global Foundries, India"
    },
    {
      name: "Dr. Amara",
      post: "USA"
    }
  ]
},
{
  label: "Organising Committee",
  members: [
    {
      name: "Dr. Uma B.V.",
      post: "Dean Student Affairs and Professor, Department. of ECE"
    },
    {
      name: "Dr. H. V. Ravish Aradhya",
      post: " Assc. Dean and Professor and, Department. of ECE"
    },
    {
      name: "Dr. K. Sreelakshmi",
      post: "Professor and Head, Department of ETE"
    },
    {
      name: "Dr. C H Renumadhavi",
      post: "iProfessor and Head, Department of EIE"
    },
    {
      name: "Dr. Ramakanth Kumar P",
      post: "Professor and Head, Department of CSE"
    },
    {
      name: "Dr. B.M. Sagar",
      post: "Professor and Head, Department of ISE"
    },
    {
      name: "Dr. Andhe Dharani",
      post: " Professor and Director, MCA"
    },
    {
      name: "Dr. RudrannaNandihalli",
      post: "Professor and Head, Department of EEE"
    }
  ]
},
{
  label: "IEEE Co-ordinators",
  members: [
    {
      name: "Dr. Prakash Biswagar",
      post: ",Professor, Department of ECE"
    },
    {
      name: "Dr. Ashok Kumar AR",
      post: "Associate Professor, Department of CSE"
    },
    {
      name: "Prof. Raghavendra Prasad S G",
      post: "Assistant Professor, Department of ISE"
    }
  ]
},
{
  label: "Genral Chairs",
  members: [
    {
      name: "Dr. Geetha KS",
      post: "Vice Principal, Professor and Head, Department of Electronics and \nCommunication Engineering, RV College of Engineering, Bengaluru."
    }
  ]
},
{
  label: "Program Chair",
  members: [
    {
      name: "Dr. M Uttara Kumari",
      post: "Professor, Department of ECE, RVCE"
    },
    {
      name: "Dr. K S Shushrutha",
      post: "Associate Professor, Department of ECE, RVCE"
    }
  ]
},
{
  label: "Technical Chair",
  members: [
    {
      name: "Dr Mahesh A",
      post: "Associate Professor, Department of ECE, RVCE"
    }
  ]
},
{
  label: "Finance Chair",
  members: [
    {
      name: "Dr Usha Rani K R",
      post: "Associate Professor, Department of ECE, RVCE"
    }
  ]
},
{
  label: "Publication Chair",
  members: [
    {
      name: "Dr. Kariyappa B.S",
      post: "Professor, Department of ECE, RVCE"
    }
  ]
},
{
  label: "SponsorShip Chair",
  members: [
    {
      name: "Dr.Kiran V",
      post: "Associate Professor, Department of ECE, RVCE"
    }
  ]
},
{
  label: "Publicity Chair",
  members: [
    {
      name: "Dr. Shilpa D.R.",
      post: "Associate Professor, Department of ECE, RVCE"
    }
  ]
},
{
  label: "Web Chair & Conference Management System",
  members: [
    {
      name: "Dr Veena Devi",
      post: "Associate Professor, Department of ECE, RVCE"
    }
  ]
},
{
  label: "Conference Convenors",
  members: [
    {
      name: "Dr. Abhay Deshpande",
      post: "Associate Professor, Department of ECE, RVCE"
    },
    {
      name: "Dr. Shylashree N",
      post: "Associate Professor, Department of ECE, RVCE"
    }
  ]
}
]


function committee() {
  return (
    <div>
      <h2 className="text-4xl font-bold sm:text-5xl text-center">
        Committee
      </h2>
      <div className="space-y-4">
        {committeeMembers.map((committeeMember, index) => {
          return (
            <div key={index}>
              <details className="group">
                <summary
                  className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
                >
                  <h5 className="font-medium text-gray-900">
                    {committeeMember.label}
                  </h5>

                  <svg
                    className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                {committeeMember.members.map((member, index) => {
                  return (
                    <div key={index} className="flex flex-row">
                      <div className="p-4">
                        <Avatar size={250} />
                        <p className="px-4 mt-4 leading-relaxed text-gray-700">
                          <h3>{member.name}</h3>
                          <p>{member.post}</p>
                        </p>
                      </div>
                    </div>
                  )
                })}
              </details>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default committee
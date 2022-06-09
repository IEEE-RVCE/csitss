import { Accordion } from '@mantine/core';
import { Avatar } from '@mantine/core';
import React from 'react'

type Mem = {
  label: string;
  members: {
    name: string;
    post?: string;
    imgLink?: string;
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
      name: "Dr. Sundaravadivazhagan Balasubaramanian",
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
}, {
  label: "Genral Chairs",
  members: [
    {
      name: "Dr. Geetha KS",
      post: "Vice Principal, Professor and Head, Department of Electronics and \nCommunication Engineering, RV College of Engineering, Bengaluru."
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
}, {
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
  label: "Conference Convenors",
  members: [
    {
      name: "Dr. Abhay Deshpande",
      post: "Associate Professor, Department of ECE, RVCE"
    },
    {
      name: "Dr. Shylashree N",
      post: "Associate Professor, Department of ECE, RVCE"
    },
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
              <Accordion>
                <Accordion.Item label={committeeMember.label} opened>
                  {committeeMember.members.map((member, index) => {
                    return (
                      <>
                        <div className="grid grid-col-3">

                          {index + 1}.
                          <a
                            className="block mt-2 p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                          >
                            <div className="flex flex-col items-center justify-between sm:flex-row">
                              <div>
                                <Avatar src={null} alt="no image here" color="indigo" size={200} />
                              </div>
                              <div>
                                <h6 className="mt-2 font-bold">{member.name}</h6>
                                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                  {member.post}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </>
                    )
                  })}
                </Accordion.Item>
              </Accordion>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default committee
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

const committeeMembers: Mem[] = [
  {
    label: "Chief Patron",
    members: [
      {
        name: "Dr. M. P. Shyam",
        post: "President, RSST.",
       imgLink:
          "https://img.etimg.com/thumb/msid-91593340,width-300,imgsize-59386,,resizemode-4,quality-100/1.jpg",
      },
      {
        name: "Sri. K. G. SubbaramaSetty",
        post: "Hon. Treasurer, RSST.",
      // imgLink:
        //  "https://img.etimg.com/thumb/msid-91593340,width-300,imgsize-59386,,resizemode-4,quality-100/1.jpg",
      },
    ],
  },
  {
    label: "Patrons",
    members: [
      
      {
        name: "Dr.A.V.S. Murthy",
        post: "Hon. Secretary, RSST.",
        imgLink: "https://www.rvcn.edu.in/wp-content/uploads/2021/08/n2.jpg",
      },
      {
        name: "Sri. D.P.Nagaraj",
        post: "Hon. Joint Secretary, RSST.",
        imgLink: "https://i.ibb.co/cYYfZh0/Whats-App-Image-2022-10-21-at-2-06-39-PM.jpg"
      },
      {
        name: "Sri Dr. K N Subramanya",
        post: "Principal, RVCE.",
       imgLink: "https://rvce.edu.in/sites/default/files/Principal-knrv2.png",
      },
      {
        name: "Dr. Geetha K S",
        post: "Vice Principal, RVCE.",
        //imgLink: "https://i.ibb.co/NCNHtpb/Whats-App-Image-2022-10-21-at-2-06-04-PM.jpg"
      },
    ],
  },
  {
    label: "Advisory Committee",
    members: [
      {
        name: "Prof. Panduranga Vittal K",
        post: "Dept. of EEE, NITK, Surathkal",
        //imgLink:
        //  "https://www.deakin.edu.au/media/data-sources/profiles-images/web-profile-image?src=1265.jpg",
      },
      {
        name: "Dr. Deepa Shenoy",
        post: "Advisor Technical & conference committee,IEEE Bangalore section",
        //imgLink:
        //  "https://www.deakin.edu.au/media/data-sources/profiles-images/web-profile-image?src=1265.jpg",
      },
      {
        name: "Dr. Vinod Rajamani,",
        post: " Professor University of Dortmund",
        //imgLink:
        //  "https://www.deakin.edu.au/media/data-sources/profiles-images/web-profile-image?src=1265.jpg",
      },
      {
        name: "Dr. Chandra Shekhar Atla",
        post: ", Chair, PES IEEE Bangalore Section",
        //imgLink:
        //  "https://www.deakin.edu.au/media/data-sources/profiles-images/web-profile-image?src=1265.jpg",
      },
     
      {
        name: "Mr. Dr. Uma Mohan",
        post: "Director - Doctoral programmes,LSC, UK",
       // imgLink:
         // "https://media-exp2.licdn.com/dms/image/C5603AQEJtTSgFemXlQ/profile-displayphoto-shrink_200_200/0/1562684613237?e=1661385600&v=beta&t=Ao_3wn9mHy9n2JQZ9XuDLV6XQZKWlCtc35QPO5DInMk",
      },
      {
        name: "Dr. Sachin R Rondiya",
        post: "Asst. Professor, Dept. of Materials Engineering, IISC, Bangalore.",
       // imgLink:
        //  "https://i.ibb.co/TmdN1kZ/Whats-App-Image-2022-10-21-at-8-21-12-PM.jpg"
      },
      // {
      //   name: "Dr. Amara",
      //   post: "USA"
      // },
      {
        name: "Shri.Puneet Kumar Mishra",
        post: "Chair, AP/MTT Bangalore Joint Chapter, Secretary, India Council.",
       // imgLink:
         // "https://ieeebangalore.org/wp-content/uploads/2021/02/Puneet-1024x1024.jpg",
      },
      {
        name: "Dr. M.V. Reddy",
        post: "Nouveau Monde Graphite, Montreal, QC, Canada.",
      
      },
      {
        name: "Mr. Srikanth Kashyap S",
        post: "Chief Technical Officer, JVS ELECTRONICS    PVT. LTD",
       // imgLink: "https://i.ibb.co/JQZkFLD/Whats-App-Image-2022-10-27-at-12-40-27-PM.jpg"
      },
      {
        name: "Dr. Gurunath Gurrala",
        post: "Assoc.Prof., Dept.of. EECS, IISC, Bengaluru.",
       // imgLink: "https://i.ibb.co/JQZkFLD/Whats-App-Image-2022-10-27-at-12-40-27-PM.jpg"
      },
    ],
  },
  {
    label: "General Chair",
    members: [
      {
        name: "Dr. S G Srivani",
        post: "HOD EEE, RVCE",
      //  imgLink:
         // "https://i.ibb.co/QCY40pM/Whats-App-Image-2022-09-09-at-12-02-54-PM.jpg",
      },
    ],
  },
  {
    label: "Organizing Committee",
    members: [
      {
        name: "Dr. Uma B.V.",
        post: "Dean Student Affairs and Professor, Department. of ECE",
       // imgLink: "https://rvce.edu.in/sites/default/files/BVU.jpg",
      },
      {
        name: "Dr. S G Srivani",
        post: "Professor and Head , Department of EEE,RVCE",
       // imgLink: "https://rvce.edu.in/sites/default/files/eee-sgs.png",
      },
      {
        name: "Dr. H. V. Ravish Aradhya",
        post: "Professor and Head, Department. of ECE,RVCE",
       
      },
      {
        name: "Dr. K. Sreelakshmi",
        post: "Professor and Head, Department of ETE,RVCE",
       
      },
      {
        name: "Dr. C H Renumadhavi",
        post: "Professor and Head, Department of EIE,RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/CHR_MAM_EIEphoto.jpg",
      },
      {
        name: "Dr. Ramakanth Kumar P",
        post: "Professor and Head, Department of CSE,RVCE,AI-ML,RVCE",
      //  imgLink:
        //  "https://rvce.edu.in/sites/default/files/cse_Dr.Ramakanthkumar_p.jpg",
      },
      {
        name: "Dr. B.M. Sagar",
        post: "Professor and Head, Department of ISE,RVCE",
      //  imgLink:
        //  "https://media-exp1.licdn.com/dms/image/C5603AQFDQlGgXxsvxg/profile-displayphoto-shrink_200_200/0/1595389613138?e=1668038400&v=beta&t=mhi2QCeqkeIXcyFIqazQQx7V-aDrABjcpGvdUqfrZRk",
      },
      {
        name: "Dr. Andhe Dharani",
        post: " Professor and Director, MCA,RVCE",
        
      },
      {
        name: "Dr. Nagaraja G S",
        post: "Professor, Department of CSE,RVCE",
       
      },
      {
        name: "Dr. Ashok Kumar A R",
        post: "Associate Professor, Department of CSE,RVCE",
       // imgLink: "https://ieee-rvce.org/assets/images/execom/compsoc/ashok_sir.jpg",
      },
      {
        name: "Dr. Rajesh",
        post: "Honeywell Pvt. Ltd., Bangalore",
       // imgLink: "https://i.ibb.co/6w3985S/Rajesh-Honeywell.jpg",
      },
      {
        name: "Dr. Chengappa",
        post: "Secretary, IEEE Bangalore Section",
     //   imgLink:
        //  "https://ieeebangalore.org/wp-content/uploads/2019/12/Chengappa_Headshot.png",
      },
      {
        name: "Dr. Satish Babu",
        post: "Professor and Head , Department of AI&ML",
       // imgLink:
         // "https://rvce.edu.in/sites/default/files/bsb-passport-photo.jpg",
      },
      {
        name: "Mr. H. S. Hallikeri",
        post: " Director, Arctictern Pvt. Ltd., Bangalore        ",
     //   imgLink:
        //  "https://ieeebangalore.org/wp-content/uploads/2019/12/Chengappa_Headshot.png",
      },
      
      
     
     
    ],
  },
  {
    label: "Program Chairs",
    members: [
      {
        name: "Dr M N Dinesh",
        post: "Professor, Department of EEE, RVCE",
     //   imgLink:
        //  "https://ieeebangalore.org/wp-content/uploads/2019/12/Chengappa_Headshot.png",
      },
      {
        name: "Dr. Madhu B.R",
        post: "Asst. Professor, Department of EEE, RVCE",
     //   imgLink:
        //  "https://ieeebangalore.org/wp-content/uploads/2019/12/Chengappa_Headshot.png",
      },
      {
        name: "Dr. Pandry Narendra Rao",
        post: "Asst. Professor, Department of EEE, RVCE        ",
     //   imgLink:
        //  "https://ieeebangalore.org/wp-content/uploads/2019/12/Chengappa_Headshot.png",
      },
      {
        name: "Dr. Nagaraja G S",
        post: " Professor, Department of CSE, RVCE",
     //   imgLink:
        //  "https://ieeebangalore.org/wp-content/uploads/2019/12/Chengappa_Headshot.png",
      },
      {
        name: "Dr. M Uttara Kumari",
        post: "Professor, Department of ECE, RVCE",
       // imgLink:
         // "https://ieee-rvce.org/assets/images/alumni/2021/main/muk_maam.jpg",
      },
      {
        name: "Dr. K S Shushrutha",
        post: "Associate Professor, Department of ECE, RVCE",
      //  imgLink:
       //   "https://ieee-rvce.org/assets/images/execom/comsoc/shushrutha_sir.jpg",
      },
    ],
  },
  {
    label: "Technical Chairs",
    members: [
      {
        name: "Dr. Hemalatha J.N",
        post: "Associate Professor, Department of EEE, RVCE",
      //  imgLink:
        //  "https://ieee-rvce.org/assets/images/execom/main/mahesh_sir.jpg",
      },
      {
        name: "Dr. Mahesh A",
        post: " Assoc.Professor, Department of ECE, RVCE        ",
     //   imgLink:
        //  "https://ieeebangalore.org/wp-content/uploads/2019/12/Chengappa_Headshot.png",
      },
      {
        name: "Prof. Raghavendra Prasad S G",
        post: "Assistant Professor, Department of ISE",
       // imgLink: "https://rvce.edu.in/sites/default/files/sgr.jpg",
      },
    ],
  },
  {
    label: "Finance Chair",
    members: [
      {
        name: "Dr. Adinatha Jain",
        post: "Asst. Professor, Department of EEE, RVCE",
     //   imgLink: "https://rvce.edu.in/sites/default/files/IMG-5954.jpg",
      },
      {
        name: "Dr. Parth Sarathi Panigrahy",
        post: "Asst. Professor, Department of EEE,RVCE",
      //  imgLink: "https://rvce.edu.in/sites/default/files/BSK%20ECE1.png",
      },
      {
        name: "Dr. Usha Rani K. R",
        post: " Professor, Department of ECE, RVCE",
      //  imgLink: "https://rvce.edu.in/sites/default/files/BSK%20ECE1.png",
      }
    ],
  },
  {
    label: "Publication Chair",
    members: [
      {
        name: "Dr. Anitha G.S",
        post: "Associate Professor, Department of EEE, RVCE",
      //  imgLink: "https://rvce.edu.in/sites/default/files/BSK%20ECE1.png",
      },
      {
        name: "Dr. Vandana Jha",
        post: " Asst. Professor, Department of EEE, RVCE        ",
      //  imgLink: "https://rvce.edu.in/sites/default/files/BSK%20ECE1.png",
      },
      {
        name: "Dr. Kariyappa B. S",
        post: "Professor, Department of ECE, RVCE        ",
      //  imgLink: "https://rvce.edu.in/sites/default/files/BSK%20ECE1.png",
      }
    ],
  },
  {
    label: "SponsorShip Chair",
    members: [
      {
        name: "Dr.V.Chayapathy",
        post: "Associate Professor, Department of EEE, RVCE",
       
      },
      {
        name: "Dr. Ajay K.M, Asst",
        post: "Professor, Department of EEE, RVCE",
       
      },
      {
        name: "Dr. Abhilash Krishna D G",
        post: "Asst. Professor, Department of EEE, RVCE",
       
      },
      {
        name: "Dr. Kiran V",
        post: " Assoc.Professor, Department of ECE, RVCE",
       
      },
    ],
  },
  {
    label: "Publicity Chairs",
    members: [
      {
        name: "Mr Suresh C",
        post: "Asst. Professor, Department of EEE, RVCE",
       
      },
      {
        name: "Mrs Raja Vidya",
        post: " Asst Professor, Department of EEE, RVCE",
       
      },
      {
        name: "Dr. Prakash Biswagar",
        post: "Assoc.Professor, Department of ECE, RVCE",
       
      },
    ],
  },
  {
    label: "Website Management & System",
    members: [
      {
        name: "Mrs C. Sunanda",
        post: "Asst. Professor, Department of EEE, RVCE",
       // imgLink: "https://www.rvce.edu.in//sites/default/files/VD.jpg",
      },
      {
        name: "Mrs Sushmita Sarkar",
        post: "Asst. Professor, Department of EEE, RVCE",
       // imgLink: "https://www.rvce.edu.in//sites/default/files/VD.jpg",
      },
      {
        name: "Dr. Veena Devi",
        post: "Assoc.Professor, Department of ECE, RVCE ",
       // imgLink: "https://www.rvce.edu.in//sites/default/files/VD.jpg",
      },
    ],
  },
  {
    label: "Conference Convenors",
    members: [
      {
        name: "Dr. Abhay Deshpande",
        post: "Associate Professor, Department of ECE, RVCE",
       
      },
      {
        name: "Dr. Abhilash Krishna D G",
        post: "Asst. Professor, Department of EEE, RVCE        ",
       // imgLink: "https://www.rvce.edu.in//sites/default/files/VD.jpg",
      },
      {
        name: "Dr. Parth Sarathi Panigrahy",
        post: "Asst. Professor, Department of EEE,RVCE        ",
       // imgLink: "https://www.rvce.edu.in//sites/default/files/VD.jpg",
      },
      {
        name: "Dr. Pandry Narendra Rao",
        post: "Asst. Professor, Department of EEE, RVCE        ",
       // imgLink: "https://www.rvce.edu.in//sites/default/files/VD.jpg",
      },
      {
        name: "Dr. Vandana Jha",
        post: " Asst. Professor, Department of EEE, RVCE",
      //  imgLink: "https://www.rvce.edu.in//sites/default/files/ec-ssn.png",
      },
      {
        name: "Dr. Shylashree N",
        post: "Assoc.Professor, Department of ECE, RVCE",
       // imgLink: "https://www.rvce.edu.in//sites/default/files/VD.jpg",
      },
      {
        name: "Dr. Abhay Deshpande",
        post: "Assoc.Professor, Department of ECE, RVCE        ",
       // imgLink: "https://www.rvce.edu.in//sites/default/files/VD.jpg",
      },
    ],
  },
];


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
                                <Avatar src={member.imgLink} alt={member.name} color="indigo" size={200} />
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

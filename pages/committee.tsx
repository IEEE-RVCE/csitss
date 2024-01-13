import { Accordion } from "@mantine/core";
import { Avatar } from "@mantine/core";
import React from "react";

type Mem = {
  label: string;
  members: {
    name: string;
    post?: string;
    imgLink?: string;
  }[];
};

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
      //{
        //name: "Sri. K. G. SubbaramaSetty",
        //post: "Hon. Treasurer, RSST.",
        //imgLink: "https://i.ibb.co/JBmKmwM/image.png",
        //  "https://img.etimg.com/thumb/msid-91593340,width-300,imgsize-59386,,resizemode-4,quality-100/1.jpg",
      //},
    ],
  },
  {
    label: "Patrons",
    members: [
      {
        name: "Sri. K G SubbaramaSetty",
        post: "Hon. Treasurer, RSST",
        imgLink: "https://i.ibb.co/JBmKmwM/image.png",
      },
      {
        name: "Dr.A.V.S. Murthy",
        post: "Hon. Secretary, RSST.",
        imgLink: "https://www.rvcn.edu.in/wp-content/uploads/2021/08/n2.jpg",
      },
      {
        name: "Sri. D.P.Nagaraj",
        post: "Hon. Joint Secretary, RSST.",
        imgLink:
          "https://i.ibb.co/cYYfZh0/Whats-App-Image-2022-10-21-at-2-06-39-PM.jpg",
      },
    ],
  },
  {
    label: "Advisory Committee",
    members: [
      {
        name: "Sri Dr. K N Subramanya",
        post: "Principal, RVCE.",
        imgLink: "https://rvce.edu.in/sites/default/files/Principal-knrv2.png",
      },
      {
        name: "Dr. Geetha K S",
        post: "Vice Principal, RVCE.",
        imgLink: "https://rvce.edu.in/sites/default/files/KS-Geetha-VP.jpg",
      },
      //{
        //name: "Dr. Shanmukha N",
        //post: "Professor and Dean Academics, Dept. of Mechanical Engineering, RVCE",
        //imgLink: "https://i.ibb.co/DLfrSwC/download.jpg",
      //},
      {
        name: "Prof. Panduranga Vittal K",
        post: "Dept. of EEE, NITK, Surathkal",
        imgLink:
          "https://eee.nitk.ac.in/sites/default/files/kpvittal_150px172.png",
        //  "https://www.deakin.edu.au/media/data-sources/profiles-images/web-profile-image?src=1265.jpg",
      },
      {
        name: "Dr. Deepa Shenoy",
        post: "Advisor Technical & conference committee,IEEE Bangalore section",
        imgLink:
          "https://wie.ieeebangalore.org/wp-content/uploads/2019/01/Dr.-Deepa-Shenoy.jpg",
        //  "https://www.deakin.edu.au/media/data-sources/profiles-images/web-profile-image?src=1265.jpg",
      },
      {
        name: "Dr. Vinod Rajamani,",
        post: " Professor University of Dortmund",
        imgLink:
          "https://www.fh-dortmund.de/kontakt-daten/Rajamani-Vinod.php.media/82194/Vinod-Rajamani_Portrait.jpg.scaled/3312b7eed140ac54332cfc22f82c192c.jpg",
        //  "https://www.deakin.edu.au/media/data-sources/profiles-images/web-profile-image?src=1265.jpg",
      },
      {
        name: "Dr. Chandra Shekhar Atla",
        post: "Chair, PES IEEE Bangalore Section",
        imgLink:
          "https://i.ibb.co/GJ4JyXg/31dd669b-fa0e-4d1d-8277-1ebf74ab919b.jpg",
        //  "https://www.deakin.edu.au/media/data-sources/profiles-images/web-profile-image?src=1265.jpg",
      },

      {
        name: "Dr. Uma Mohan",
        post: "Director - Doctoral programmes,LSC, UK",
        imgLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrVmdahp_qoWamUfFjT84pGmBOcRwiK-dWDoOqUbMMo9ZiDOYB62NxUE_5O2015CqIL8&usqp=CAU",
        // "https://media-exp2.licdn.com/dms/image/C5603AQEJtTSgFemXlQ/profile-displayphoto-shrink_200_200/0/1562684613237?e=1661385600&v=beta&t=Ao_3wn9mHy9n2JQZ9XuDLV6XQZKWlCtc35QPO5DInMk",
      },
      {
        name: "Dr. Sachin R Rondiya",
        post: "Asst. Professor, Dept. of Materials Engineering, IISc, Bangalore.",
        imgLink:
          "https://materials.iisc.ac.in/assets/images/faculty/sachin.jpg",
        //  "https://i.ibb.co/TmdN1kZ/Whats-App-Image-2022-10-21-at-8-21-12-PM.jpg"
      },
      {
        name: "Dr. M.V. Reddy",
        post: "Nouveau Monde Graphite, Montreal, QC, Canada.",
        imgLink:
          "https://relx-elsevier-erms--c.documentforce.com/servlet/servlet.ImageServer?id=0154J000001AWP4QAO&oid=00D1t000000qIy5EAE&lastMod=1597136647554",
      },
      {
        name: "Mr. Srikanth Kashyap S",
        post: "Chief Technical Officer, JVS ELECTRONICS    PVT. LTD",
        imgLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRA3kcWvP3geFy0z4uLaSlJlHTHIqgDBt-DIrK5So&s",
        // imgLink: "https://i.ibb.co/JQZkFLD/Whats-App-Image-2022-10-27-at-12-40-27-PM.jpg"
      },
      {
        name: "Dr. Gurunath Gurrala",
        post: "Assoc.Prof., Dept.of. EECS, IISc, Bengaluru.",
        imgLink:
          "https://eecs.iisc.ac.in/wp-content/uploads/2019/10/gurunath-300x300.jpg",
      },
    ],
  },
  {
    label: "General Chair",
    members: [
      {
        name: "Dr. B M Sagar",
        post: "Professor & Head, Department. of ISE, RVCE",
        imgLink: "data:image/jpeg;base64,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",
      },
    ],
  },
  {
    label: "Organizing Committee",
    members: [
      {
        name: "Dr. Uma B.V.",
        post: "Dean Student Affairs and Professor, Department. of ECE",
        imgLink: "https://rvce.edu.in/sites/default/files/BVU.jpg",
      },
      {
        name: "Dr. M Uttara Kumari",
        post: "Professor, Department of ECE,RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/MUK_1.jpg",
      },
      {
        name: "Dr. H. V. Ravish Aradhya",
        post: "Professor and Head, Department. of ECE,RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/hvr_photo.jpg",
      },
      {
        name: "Dr. K. Sreelakshmi",
        post: "Professor and Head, Department of ETE,RVCE",
        imgLink:
          "https://rvce.edu.in/sites/default/files/Dr.KS_Profilephoto.jpg",
      },
      {
        name: "Dr. C H Renumadhavi",
        post: "Professor and Head, Department of EIE,RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/CHR_MAM_EIEphoto.jpg",
      },
      {
        name: "Dr. Ramakanth Kumar P",
        post: "Professor and Head, Department of CSE,RVCE,AI-ML,RVCE",
        imgLink:
          "https://rvce.edu.in/sites/default/files/cse_Dr.Ramakanthkumar_p.jpg",
      },
      {
        name: "Dr. B.M. Sagar",
        post: "Professor and Head, Department of ISE,RVCE",
        imgLink: "https://i.ibb.co/s5tH88F/bms.jpg",
      },
      {
        name: "Dr. Andhe Dharani",
        post: " Professor and Director, MCA,RVCE",
        imgLink: "https://i.ibb.co/Krh4KKn/andheD.png",
      },
      {
        name: "Dr. Satish Babu",
        post: "Professor and Head,Department of AI-ML, RVCE",
        imgLink:
          "https://rvce.edu.in/sites/default/files/bsb-passport-photo.jpg",
      },
      {
        name: "Dr. Padmaja K V",
        post: "Professor,Department of EIE, RVCE",
        imgLink:
          "http://www.rvce.edu.in/sites/default/files/IMG_20160924_103402.jpg",
      },
      {
        name: "Dr. Nagaraja G S",
        post: "Professor, Department of CSE,RVCE",
        imgLink: "https://i.ibb.co/7NKfJLm/ngs.png",
      },
      {
        name: "Dr. Ashok Kumar A R",
        post: "Associate Professor, Department of CSE,RVCE",
        imgLink:
          "https://ieee-rvce.org/assets/images/execom/compsoc/ashok_sir.jpg",
      },
      {
        name: "Dr. Rajesh",
        post: "Honeywell Pvt. Ltd., Bangalore",
        imgLink: "https://i.ibb.co/6w3985S/Rajesh-Honeywell.jpg",
      },
      {
        name: "Dr. Chengappa",
        post: "Secretary, IEEE Bangalore Section",
        imgLink:
          "https://ieeebangalore.org/wp-content/uploads/2019/12/Chengappa_Headshot.png",
      },
      {
        name: "Mr. H. S. Hallikeri",
        post: " Director, Arctictern Pvt. Ltd., Bangalore        ",
        imgLink: "https://i.ibb.co/VmScg7p/hsh.jpg",
      },
    ],
  },
  {
    label: "Program Chairs",
    members: [
      {
        name: "Dr M N Dinesh",
        post: "Professor, Department of EEE, RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/eee-mnd.png",
      },
      {
        name: "Dr. K S Shushrutha",
        post: "Associate Professor, Department of ECE, RVCE",
        imgLink: "https://i.ibb.co/7GcYKBk/kss.png",
      },
      {
        name: "Mr. Raghavendra Prasad S G",
        post: "Asst. Professor, Department of ISE, RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/sgr.jpg",
      },
    ],
  },
  {
    label: "Technical Chairs",
    members: [
      {
        name: "Dr. Nagamani K",
        post: "Professor, Department of ETE, RVCE",
        imgLink: "https://i.ibb.co/Swqs1Gv/kn.png",
      },
      {
        name: "Dr. Hemalatha J.N",
        post: "Associate Professor, Department of EEE, RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/eee-jnh.jpg",
        //  "https://ieee-rvce.org/assets/images/execom/main/mahesh_sir.jpg",
      },
      {
        name: "Dr. Mahesh A",
        post: " Assoc.Professor, Department of ECE, RVCE        ",
        imgLink: "https://i.ibb.co/KD67WDG/mah.jpg",
        //  "https://ieeebangalore.org/wp-content/uploads/2019/12/Chengappa_Headshot.png",
      },
    ],
  },
  {
    label: "Finance Chair",
    members: [
      {
        name: "Dr. Prasanna Kumar",
        post: "Asst. Professor, Department of EIE, RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/EIE-SCPK.jpg",
      },
      {
        name: "Dr. Adinath Jain",
        post: "Asst. Professor, Department of EEE, RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/eee-aj.jpg",
      },
      {
        name: "Dr. Usha Rani K R",
        post: "Professor, Department of ECE, RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/IMG-5954.jpg",
      },
    ],
  },
  {
    label: "Publication Chair",
    members: [
      {
        name: "Dr. Usha J",
        post: "Professor, Department of MCA, RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/mca-uj.jpg",
      },
      {
        name: "Dr. Shanta Rangaswamy",
        post: "Professor, Department of CSE, RVCE",
        imgLink: "https://i.ibb.co/89CJWsS/sr.png",
      },
      {
        name: "Dr. Madhu B R",
        post: "Assoc. Professor, Department of EEE, RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/eee-mbr.jpg",
      },
    ],
  },
  {
    label: "Sponsorship Chair",
    members: [
      {
        name: "Dr. D Ranganath",
        post: "Dean, Placement & Training Department",

        imgLink: "https://rvce.edu.in/sites/default/files/Plac_Ranganath.JPG",
      },
      {
        name: "Dr. Ajay K M",
        post: "Asst. Professor, Department of EEE, RVCE",
        imgLink: "https://i.ibb.co/PZp0KnJ/akm.png",
      },
      {
        name: "Mr. Somesh Nandi",
        post: "Asst. Professor, Department of AIML, RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/somesh.jpg",
      },
    ],
  },
  {
    label: "Publicity Chairs",
    members: [
      {
        name: "Dr. Vinay Hegde",
        post: "Assoc. Professor, Department of CSE, RVCE",
        imgLink: "https://i.ibb.co/Wytj8B2/vh.png",
      },
      {
        name: "Smt. Raja Vidya",
        post: "Asst. Professor, Department of EEE, RVCE",
        imgLink:
          "http://www.rvce.edu.in/sites/default/files/Passport_Photo-min.jpg",
      },
      {
        name: "Dr. Shilpa D R",
        post: " Assoc. Professor, Department of ECE, RVCE",
        imgLink:
          "https://rvce.edu.in/sites/default/files/Dr.%20Shilpa%20D.R.jpg",
      },
    ],
  },
  {
    label: "Website Management & System",
    members: [
      {
        name: "Dr. Veena Devi",
        post: "Assoc. Professor, Department of ECE, RVCE",
        imgLink: "http://www.rvce.edu.in/sites/default/files/VD.jpg",
      },
      {
        name: "Mrs Sushmita Sarkar",
        post: "Asst. Professor, Department of EEE, RVCE",
        imgLink: "http://www.rvce.edu.in/sites/default/files/DSC_743244.jpg",
      },
      {
        name: "Dr. B Renuka Prasad",
        post: "Assoc. Professor & Assoc. Dean, Department of MCA, RVCE",
        imgLink: "https://rvce.edu.in/sites/default/files/brp.JPG",
      },
    ],
  },
  {
    label: "Conference Convenors",
    members: [
      {
        name: "Dr. Abhay Deshpande",
        post: "Associate Professor, Department of ECE, RVCE",
        imgLink: "https://i.ibb.co/fpfCtJs/adec.png",
      },
      {
        name: "Dr. Abhilash Krishna D G",
        post: "Asst. Professor, Department of EEE, RVCE",
        imgLink: "https://i.ibb.co/Pm9X1QV/akdg.jpg",
      },
      {
        name: "Dr. Parth Sarathi Panigrahy",
        post: "Asst. Professor, Department of EEE,RVCE        ",
        imgLink: "https://rvce.edu.in/sites/default/files/partha.png",
      },
      {
        name: "Dr. Pandry Narendra Rao",
        post: "Asst. Professor, Department of EEE, RVCE        ",
        imgLink: "https://rvce.irins.org/assets/profile_images/381452.jpg",
      },
      {
        name: "Dr. Vandana Jha",
        post: " Asst. Professor, Department of EEE, RVCE",
        imgLink:
          "https://rvce.edu.in/sites/default/files/eee-faculty-bhvandana.png",
      },
    ],
  },
];

function committee() {
  return (
    <div>
      <br />
      <br />
      <h2 className="text-center text-4xl font-bold sm:text-5xl">Committee</h2>
      <div className="space-y-4">
        {committeeMembers.map((committeeMember, index) => {
          return (
            <div key={index}>
              <Accordion>
                <Accordion.Item label={committeeMember.label} opened>
                  {committeeMember.members.map((member, index) => {
                    return (
                      <>
                        <div className="grid-col-3 grid">
                          {index + 1}.
                          <a className="mt-2 block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                            <div className="flex flex-col items-center sm:flex-row">
                              <div className="flex flex-1 justify-center">
                                <Avatar
                                  src={member.imgLink}
                                  alt={member.name}
                                  color="indigo"
                                  size={200}
                                />
                              </div>
                              <div className="flex-1">
                                <h6 className="mt-2 font-bold">
                                  {member.name}
                                </h6>
                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                  {member.post}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </>
                    );
                  })}
                </Accordion.Item>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default committee;

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
      {
        name: "Sri. K. G. SubbaramaSetty",
        post: "Hon. Treasurer, RSST.",
        imgLink: "https://i.ibb.co/JBmKmwM/image.png",
        //  "https://img.etimg.com/thumb/msid-91593340,width-300,imgsize-59386,,resizemode-4,quality-100/1.jpg",
      },
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
      {
        name: "Dr. Shanmukha N",
        post: "Professor and Dean Academics, Dept. of Mechanical Engineering, RVCE",
        imgLink: "https://i.ibb.co/DLfrSwC/download.jpg",
      },
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
        name: "Dr. S G Srivani",
        post: "Professor & Head, Department. of EEE, RVCE",
        imgLink: "https://i.ibb.co/Y7f0pwt/srivani.jpg",
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

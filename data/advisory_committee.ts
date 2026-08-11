const advisory_committee = [
  {
    name: 'Dr. K. N. Subramanya',
    post: 'Advisory Committee',
    position:"Principal RVCE",
    imgLink: 'https://rvce.edu.in/wp-content/uploads/2025/09/Group-12861-2.png',
  },
  {
    name: 'Dr. K. S. Geetha',
    post: 'Advisory Committee',
    position:"Vice Principal, RVCE",
    imgLink: 'https://rvce.edu.in/department/wp-content/uploads/2025/07/Vice-Principal-1-1229x1536.jpg',
  },
  {
    name: 'Dr. S.S. Iyengar',
    post:"Advisory Committee",
    position: 'Distinguished University Professor, Ryder Professor of Computer Science, Florida International University (FIU), Miami',
    imgLink: 'https://www.cis.fiu.edu/wp-content/uploads/2016/07/S-S-Iyengar.jpg',
  },
  // {
  //   name: 'Prof. Dr.-Ing. Vinod Rajamani',
  //   post: 'Vice Dean, Mechanical Engineering, Fachhochscule Dortmund University',
  //   imgLink: '',
  // },
  // {
  //   name: 'Prof. Shankar Subramaniam',
  //   post: 'Professor, University of California San Diego',
  //   imgLink: '',
  // },
  {
    name: 'Dr. Narasimha Murthy M A',
    post: 'Advisory Committee',
    position: 'Head - Quality Management and Delivery Excellence, Infineon Technologies India Pvt Ltd',
    imgLink: 'https://media.licdn.com/dms/image/v2/D5603AQFdouoJ3PF5FQ/profile-displayphoto-scale_400_400/B56Z59oyPZKcAg-/0/1780224307599?e=1787788800&v=beta&t=ei1kc7TkSt1Rz1zoha87RnCUZokG0Bx4NWHhRMOCp9A',
  },
  // {
  //   name: 'Dr. Pradeep G Siddheshwar',
  //   post: 'FIMA(UK), FNASc, Sr Prof. of Mathematics, Director, Centre for Mathematical Needs, Director, R & D Cell, Christ University',
  //   imgLink: '',
  // },
  // {
  //   name: 'Dr. Mahadev Prasanna',
  //   post: 'Director, Indian Institute of Information Technology (IIIT) Dharwad',
  //   imgLink: '',
  // },
  // {
  //   name: 'Dr. Chengappa M R',
  //   post: 'Vice Chair, Industry Engagement and Open/IEEE Standard',
  //   imgLink: '',
  // },
  // {
  //   name: 'Dr.Chandrakanta Kumar',
  //   post: 'Chair-Elect, IEEE, Bangalore Section',
  //   imgLink: '',
  // },
  // {
  //   name: 'Dr. Abhishek Appaji M',
  //   post: 'Treasurer, IEEE Bengaluru section',
  //   imgLink: '',
  // },
  {
    name: 'Dr. Achim Forster, LL.M',
    post: 'Advisory Committee',
    position: 'Vice President for International & Academic Affairs, Technical University of Applied Sciences, Germany	',
    imgLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmTIi6PYkOOHyBp4drYwqsH9olXvryGt4pg&s',
  },
  {
    name: 'Sushma Nagaraja ',
    post: 'Advisory Committee',
    position:"Grellscheid, Professor, University of Bergen, Norway"  ,
    imgLink: 'https://media.licdn.com/dms/image/sync/v2/D4D27AQEocUP8QQrD9A/articleshare-shrink_800/B4DZmEc76zIEAI-/0/1758863802279?e=2147483647&v=beta&t=gqP10WHp9px3C14czq3DGYXe-_CPBr-HN1Cb64AO1Mo',
  },
  {
    name: 'Dr. Vinod Rajamani',
    post: 'Advisory Committee',
    position: 'Fachhochschule Dortmund University of Applied Sciences and Arts 	',
    imgLink: 'https://www.fh-dortmund.de/kontakt-daten/Rajamani-Vinod.php.media/82194/Vinod-Rajamani_Portrait.jpg.scaled/180c853eb3d8b8f049fdfaedb15b647c.jpg',
  },
  {
    name: 'Dr. S V Sathyanarayana',
    post: 'Advisory Committee',
    position: 'IEEE Vice Chair (Technical Activities), Bangalore Section',
    imgLink: 'https://ieeebangalore.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-08-at-5.50.13-PM-Dr.Sathyanarayana-S-V-1024x1024.jpeg',
  },
  {
    name: 'Dr. Anindya Saha',
    post: 'Advisory Committee',
    position: 'IEEE Vice Chair (Industry Activities), Bangalore Section',
    imgLink: 'https://ctu.ieee.org/wp-content/uploads/2024/10/IEEE-CTU-2024-8.png',
  },
  {
    name: 'Gnanapriya C',
    post: 'Advisory Committee',
    position: 'Chair, IEEE Communication Society Bangalore Section',
    imgLink: 'https://site.ieee.org/bangalore-com/files/2021/01/Gnanapriya.jpg',
  },
  {
    name: 'Dr. Navin Kumar',
    post: 'Advisory Committee',
    position: 'Chair, IEEE Sensors Council Bangalore Chapter',
    imgLink: 'data:image/jpeg;base64,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',
  },

  {
    name: 'Dr. Yogendra Kumar Mishra',
    post: 'Advisory Committee',
    position: 'Professor, SDU NANOSYD, The Mads Clausen Institute	',
    imgLink: 'https://sunwayuniversity.edu.my/sites/default/files/styles/large/public/speaker-images/2025/8_keynote_speaker_prof_mishra.jpg?itok=XuVIiEAR',
  },
  {
    name: 'Dr. Stephen Weyer',
    post: 'Advisory Committee',
    position: 'Vice Rector, FH Dortmund University, Germany	',
    imgLink: 'https://www.fh-dortmund.de/kontakt-daten/Weyers-Stephan.php.media/168538/Stephan_Weyers11510.jpg.scaled/c052f9feec818d3fbf6392a376cdca92.jpg',
  },
]

export default advisory_committee
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import { Element, Link as ScrollLink } from 'react-scroll'
import HeaderImages from '../components/HeaderImages'
import Timeline from '../components/TimeLine'
import Gallery from '../components/Gallery'
import CountdownTimer from '../components/CountdownTimer'; 

// const image = {
//   src: 'logo_IEEE_Banaglaore_Section.png',
//   alt: 'ieee_bangalore_logo',
//   href: 'https://ieeebangalore.org/',
//   show: true,
//   padding: 'pt-6',
// }



export default function Index() {
  return (
    <>
      <section className="body-font m-0 text-gray-600">
        {/* <div className="bar">
          <span className="bar_content">
            All of the students register for pre-tutorial conference. Amount to be paid : 590 (Includes GST)
            <a href="https://rzp.io/l/3N4bwhvH" className="text-gray-600"> Quick Payment Link</a>
          </span>
        </div> */}
        <header>
          <div
            className="heroHeader w-full bg-cover bg-center"
            style={{padding:'3rem'}}
          >
            <HeaderImages />
            <div className="flex  w-full items-center justify-center ">
              <div className="rounded-3xl bg-gray-800 bg-opacity-80 px-9 py-5 text-center font-extrabold ">
                <h1 className="bg bg-gradient-to-r from-yellow-200  via-amber-500 via-orange-600 via-red-600 via-amber-400 to-yellow-300 bg-clip-text text-5xl font-extrabold text-transparent">
                  WELCOME TO CSITSS-2024
                </h1>
                <p className="text-xl text-white md:text-2xl md:mt-0 mt-4">
                  <span className="font-normal ">
                    8<sup>th</sup> International Conference on Computational
                    Systems and Information Technology for Sustainable Solutions
                  </span>
                </p>
                <p className="align-text-center text-xl text-slate-50">
                 
                </p>
                <p className="align-text-center text-xl font-normal text-slate-50">
                  Organized by
                </p>
                <p className="text-align-center text-2xl text-slate-50">
                  <h4>
                    RV College of Engineering<sup className="text-lg">®</sup>
                  </h4>
                </p>
                
                <div className="flex flex-col md:grid md:grid-cols-3 gap-4 p-4">
                <a
  href="https://cmt3.research.microsoft.com/CSITSS2024"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none flex items-center justify-center transition-colors duration-300 ease-in-out"
>
  <span>Submit Paper</span>
</a>

                 <ScrollLink
                 activeClass="active"
                 className="mt-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none flex items-center justify-center transition-colors duration-300 ease-in-out" 
                 to="test4" 
                 spy={true}
                 smooth={true}
                 duration={600}
                 delay={100}
                 >
                  <span>Timeline</span>
                </ScrollLink>
  <a
    href="CSITSS 2024 Brochure.pdf"
    className="mt-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none flex items-center justify-center transition-colors duration-300 ease-in-out"
    download
  >
    <span>Download Brochure</span>
  </a>
</div>


              </div>
            </div>
          </div>
          <CountdownTimer />
        </header>
        <div className="w-full bg-blue-200 bg-opacity-50 py-4 px-6 text-center text-black mt-4 rounded-lg shadow-lg">
  <p className="font-semibold text-lg">
    Organized by <span className="text-blue-700">RV College of Engineering</span> in association with <span className="text-blue-700">Florida International University</span>, <span className="text-blue-700">Fachhochschule Dortmund, Germany</span>. Technically Co-Sponsored by <span className="text-blue-700">IEEE Bangalore Section, India</span>.
  </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
  <div className="bg-red-100 p-6 rounded-lg shadow-lg text-center text-gray-800 hover:bg-red-200 transition-colors duration-300">
    <svg
      className="mx-auto mb-4 h-12 w-12 text-red-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 7h18M3 11h18M3 15h18M3 19h18"
      />
    </svg>
    <h3 className="text-2xl font-bold">November 7-9, 2024</h3>
    <p>Date</p>
  </div>
  <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center text-gray-800 hover:bg-green-200 transition-colors duration-300">
    <svg
      className="mx-auto mb-4 h-12 w-12 text-green-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
    <h3 className="text-2xl font-bold">RV College of Engineering</h3>
    <p>Venue</p>
  </div>
  <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center text-gray-800 hover:bg-blue-200 transition-colors duration-300">
    <svg
      className="mx-auto mb-4 h-12 w-12 text-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 7h18M3 11h18M3 15h18M3 19h18"
      />
    </svg>
    <h3 className="text-2xl font-bold">IEEE Approval</h3>
    <p>Conference Number: 64042</p>
  </div>
  <div className="bg-yellow-100 p-6 rounded-lg shadow-lg text-center text-gray-800 hover:bg-yellow-200 transition-colors duration-300">
    <svg
      className="mx-auto mb-4 h-12 w-12 text-yellow-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12l8 8 8-8-8-8-8 8z"
      />
    </svg>
    <h3 className="text-2xl font-bold">Global Participation</h3>
    <p>Researchers from Around the World</p>
  </div>
</div>

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-24 lg:grid-cols-2 lg:gap-16">
      <div className="relative overflow-visible rounded-lg sm:h-80 lg:order-last lg:h-full animate-fadeIn2 image-3d">
        <img
          src="Poster.png"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          alt="Your Image"
        />
      </div>

      <div className="flex flex-col justify-center animate-fadeIn2">
        <h2 className="text-3xl font-bold sm:text-4xl mb-6 text-gradient text-black">
          About CSITSS
        </h2>
        <p className="text-xl font-normal text-gray-900 mb-8 leading-relaxed">
  The 8<sup>th</sup> International Conference on Computational Systems and Information Technology for Sustainable Solutions [CSITSS — 2024] focuses on bringing together leading academicians, scientists, researchers, industry representatives, postdoctoral fellows, and research scholars around the world to share their knowledge and research expertise in Green Electronics, Renewable Energy, Robotics and Automation, Photonics, Artificial Intelligence, Cyber-Physical Systems, Quantum Mechanics, and Computing from <span> </span>
  <span className="animated-date">
    <span> </span>
    <span>N</span>
    <span>o</span>
    <span>v</span>
    <span>e</span>
    <span>m</span>
    <span>b</span>
    <span>e</span>
    <span>r</span>
    <span> </span>
    <span>7</span>
    <span><sup>th</sup></span>
    <span> </span>
    <span>t</span>
    <span>o</span>
    <span> </span>
    <span>9</span>
    <span><sup>th</sup></span>
    <span> </span>
    <span>2</span>
    <span>0</span>
    <span>2</span>
    <span>4</span>
  </span>.
  <br /><br />
  The conference has been successfully organized for the past seven years with participants from all over India and abroad. All peer-reviewed, selected, and presented papers from the conference will be submitted for possible inclusion in the IEEE digital library. International speakers will deliver keynote talks on the latest technologies in these domains. The CSITSS-2024 ensures to provide a platform for researchers around the globe for knowledge exchange and networking. The Conference is approved by IEEE with the conference number: 64042.
</p>


        <a
          className="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          href="https://cmt3.research.microsoft.com/CSITSS2024"
        >
          <span className="text-sm font-medium">Submit Paper</span>
          <svg
            className="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>

    <div className="mt-40 text-center animate-fadeIn2">
      <h4 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-3xl font-bold text-transparent">
        In association with
      </h4>
      <div className="flex justify-center mt-6 animate-fadeIn2">
        <div className="mx-10 logo-animation">
          <img
            src="https://brand.fiu.edu/_assets/images/fiu-logo.png"
            className="h-auto w-auto object-cover"
            alt="FIU Logo"
          />
        </div>
        <div className="mx-4 logo-animation">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/FH_Dortmund-logo.svg/450px-FH_Dortmund-logo.svg.png?20110112153650"
            className="h-auto w-auto object-cover"
            alt="FH Dortmund Logo"
          />
        </div>
      </div>
    </div>
  </div>
</section>


        <Element name="test4" className="element">
          <div className="flex flex-col items-center justify-center p-4">
            <Timeline />
          </div>
        </Element>
        <section className=" py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center sm:text-4xl mb-8 animate-fadeIn">Venue</h2>
    <div className="relative overflow-hidden rounded-lg ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509397044632!2d77.49651251530834!3d12.923722790887302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1652610248773!5m2!1sen!2sin&style=feature:all|element:geometry|color:0x242f3e|visibility:simplified&style=feature:landscape|element:geometry.fill|color:0x2b2b2b&style=feature:poi|element:all|visibility:off&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:labels.icon|visibility:off&style=feature:transit|element:all|visibility:off&style=feature:water|element:geometry.fill|color:0x212a37&style=feature:water|element:labels.text.fill|color:0x3e606f"
        width="100%"
        height="400"
        style={{
          border: '2px solid #374151',
          borderRadius: '0.5rem',
          maxWidth: '900px', // Decreased width
          margin: '0 auto', // Centering the map
          padding: '0.5rem',
          backgroundColor: '#1F2937',
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <div className="flex justify-center mt-8 space-x-4 animate-fadeIn">
      <a
        className="inline-flex items-center rounded-lg border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 transition-colors duration-300"
        href="https://goo.gl/maps/sXWGV9iXqQRwz2PJ9"
      >
        <span className="text-sm font-medium">Open Maps</span>
        <svg
          className="ml-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
      <a
        className="inline-flex items-center rounded-lg border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 transition-colors duration-300"
        href="HOTELS.pdf"
      >
        <span className="text-sm font-medium">Download Hotels List Near RVCE</span>
        <svg
          className="ml-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
</section>

<style jsx>{`
  .animate-fadeIn {
    animation: fadeIn 1s ease-in-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`}</style>

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <h1>
            <span className="text-3xl font-bold sm:text-4xl">
              Previous Conference Images
            </span>
          </h1>
          <Gallery />
        </div>
      </section>
    </>
  )
}

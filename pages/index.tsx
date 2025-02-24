/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import { Element, Link as ScrollLink } from 'react-scroll'
import HeaderImages from '../components/HeaderImages'
import Timeline from '../components/TimeLine'


import Gallery from '../components/Gallery'


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
            style={{ padding: '3rem' }}
          >
            <HeaderImages />
            <div className="flex  w-full items-center justify-center ">
              <div className="rounded-3xl bg-gray-800 bg-opacity-80 px-9 py-5 text-center font-extrabold ">
                <h1 className="bg bg-gradient-to-r from-yellow-200  via-amber-500 via-orange-600 via-red-600 via-amber-400 to-yellow-300 bg-clip-text text-5xl font-extrabold text-transparent">
                  WELCOME TO CSITSS-2025
                </h1>
                <p className="mt-4 text-xl text-white md:mt-0 md:text-2xl">
                  <span className="font-normal ">
                    9<sup>th</sup> International Conference on Computational
                    Systems and Information Technology for Sustainable Solutions
                  </span>
                </p>
                <p className="align-text-center text-xl text-slate-50"></p>
                <p className="align-text-center text-xl font-normal text-slate-50">
                  Organized by
                </p>
                <p className="text-align-center text-2xl text-slate-50">
                  <h4>
                    RV College of Engineering<sup className="text-lg">®</sup>
                  </h4>
                </p>

                <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-3">
                  <a
                    href="https://cmt3.research.microsoft.com/CSITSS2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white transition-colors duration-300 ease-in-out hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
                  >
                    <span>Submit Paper</span>
                  </a>

                  <ScrollLink
                    activeClass="active"
                    className="mt-4 flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white transition-colors duration-300 ease-in-out hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
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
                    className="mt-4 flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white transition-colors duration-300 ease-in-out hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
                    download
                  >
                    <span>Download Brochure</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="mt-4 w-full rounded-lg bg-blue-200 bg-opacity-50 py-4 px-6 text-center text-black shadow-lg">
          <p className="text-lg font-semibold">
            Organized by{' '}
            <span className="text-blue-700">RV College of Engineering</span>
            </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-red-100 p-6 text-center text-gray-800 shadow-lg transition-colors duration-300 hover:bg-red-200">
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
            <h3 className="text-2xl font-bold">November 20-22, 2025</h3>
            <p>Date</p>
          </div>
          <div className="rounded-lg bg-green-100 p-6 text-center text-gray-800 shadow-lg transition-colors duration-300 hover:bg-green-200">
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
          <div className="rounded-lg bg-blue-100 p-6 text-center text-gray-800 shadow-lg transition-colors duration-300 hover:bg-blue-200">
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

            <h3 className="text-2xl font-bold">8 successful editions of CSITSS</h3>

            
          </div>
          <div className="rounded-lg bg-yellow-100 p-6 text-center text-gray-800 shadow-lg transition-colors duration-300 hover:bg-yellow-200">
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
           
             

              <div className="animate-fadeIn2 flex flex-col justify-center">
                <h2 className="text-gradient mb-6 text-3xl font-bold text-black sm:text-4xl">
                  About CSITSS
                </h2>
                <p className="mb-8 text-xl font-normal leading-relaxed text-gray-900">
                  The 9<sup>th</sup> International Conference on Computational
                  Systems and Information Technology for Sustainable Solutions
                  [CSITSS — 2025] focuses on bringing together leading
                  academicians, scientists, researchers, industry
                  representatives, postdoctoral fellows, and research scholars
                  around the world to share their knowledge and research
                  expertise in Green Electronics, Renewable Energy, Robotics and
                  Automation, Photonics, Artificial Intelligence, Cyber-Physical
                  Systems, Quantum Mechanics, and Computing from <span> </span>
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
                    <span>20</span>
                    <span>
                      <sup>th</sup>
                    </span>
                    <span> </span>
                    <span>t</span>
                    <span>o</span>
                    <span> </span>
                    <span>22</span>
                    <span>
                      <sup>nd</sup>
                    </span>
                    <span> </span>
                    <span>2</span>
                    <span>0</span>
                    <span>2</span>
                    <span>5</span>
                  </span>
                  .
                  <br />
                  <br />
                  The conference has been successfully organized for the past
                  seven years with participants from all over India and abroad.
                  All peer-reviewed, selected, and presented papers from the
                  conference will be submitted for possible inclusion in the
                  IEEE digital library. International speakers will deliver
                  keynote talks on the latest technologies in these domains. The
                  CSITSS-2025 ensures to provide a platform for researchers
                  around the globe for knowledge exchange and networking. 
                </p>

                <a
                  className="inline-flex transform items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
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

            
            
         
              
            
          
        </section>

        

        <Element name="test4" className="element">
          <div className="flex flex-col items-center justify-center p-4">
          <Timeline />
          </div>
        </Element>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="animate-fadeIn mb-8 text-center text-3xl font-bold sm:text-4xl">
              Venue
            </h2>

            <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
              {/* Left side with the map */}
              <div className="relative w-full overflow-hidden rounded-lg md:w-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509397044632!2d77.49651251530834!3d12.923722790887302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1652610248773!5m2!1sen!2sin&style=feature:all|element:geometry|color:0x242f3e|visibility:simplified&style=feature:landscape|element:geometry.fill|color:0x2b2b2b&style=feature:poi|element:all|visibility:off&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:labels.icon|visibility:off&style=feature:transit|element:all|visibility:off&style=feature:water|element:geometry.fill|color:0x212a37&style=feature:water|element:labels.text.fill|color:0x3e606f"
                  width="100%"
                  height="400"
                  style={{
                    border: '2px solid #374151',
                    borderRadius: '0.5rem',
                    maxWidth: '900px',
                    padding: '0.5rem',
                    backgroundColor: '#1F2937',
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Right side with the image */}
              <div className="flex w-full justify-center p-4 md:w-1/2">
                <img
                  src="./map2.jpg"
                  alt="Venue related image"
                  className="h-[400px] w-full cursor-pointer rounded-lg object-cover"
                  onClick={() => {
                    const modal = document.getElementById('modal')
                    if (modal) modal.classList.remove('hidden')
                  }}
                  style={{
                    border: '2px solid #374151',
                    borderRadius: '0.5rem',
                    maxWidth: '900px',
                    padding: '0.5rem',
                    backgroundColor: '#1F2937',
                  }}
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="animate-fadeIn mt-8 flex flex-col justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <a
                className="inline-flex items-center justify-center rounded-lg border border-indigo-600 bg-indigo-600 px-8 py-3 text-white transition-colors duration-300 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
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
                className="inline-flex items-center justify-center rounded-lg border border-indigo-600 bg-indigo-600 px-8 py-3 text-white transition-colors duration-300 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                href="HOTELS.pdf"
              >
                <span className="text-sm font-medium">
                  Download Hotels List Near RVCE
                </span>
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

            {/* Modal for enlarged image */}
            <div
              id="modal"
              className="fixed inset-0 z-50 flex hidden items-center justify-center bg-black bg-opacity-75"
              onClick={() => {
                const modal = document.getElementById('modal')
                if (modal) modal.classList.add('hidden')
              }}
            >
              <img
                src="./map2.jpg"
                alt="Enlarged view"
                className="h-auto max-h-[80vh] w-auto max-w-[90vw] rounded-lg shadow-lg"
              />
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

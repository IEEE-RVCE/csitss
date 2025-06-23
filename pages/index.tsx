/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
// import { Element, ScrollLink } from 'react-scroll'
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
      <section className="body-font m-0 px-4 text-gray-600">
        {/* <div className="bar">
          <span className="bar_content">
            All of the students register for pre-tutorial conference. Amount to be paid : 590 (Includes GST)
            <a href="https://rzp.io/l/3N4bwhvH" className="text-gray-600"> Quick Payment Link</a>
          </span>
        </div> */}
        <header>
          <div
            className="heroHeader w-full bg-cover bg-center"
            style={{ padding: '3rem', paddingTop: '1rem' }}
          >
            {' '}
            <HeaderImages />{' '}
            <div className="flex w-full items-center justify-center mt-8 md:mt-28">
              <div className="w-full bg-white/10 dark:bg-black/15 rounded-3xl backdrop-blur-[2px] border border-white/20 dark:border-gray-700/30 px-10 py-8 text-center shadow-2xl">
                <h1 className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
                  WELCOME TO CSITSS-2025
                </h1>
                <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-white font-semibold drop-shadow-[1px_1px_3px_rgba(0,0,0,0.9)]">
                  9<sup className="text-sm">th</sup> International Conference on
                  Computational
                  <br />
                  Systems and Information Technology for Sustainable Solutions
                </p>

                <div className="mt-8 mb-6">
                  <p className="text-lg text-white/90 font-medium drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] mb-2">
                    Organized by
                  </p>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold drop-shadow-[1px_1px_3px_rgba(0,0,0,0.9)]">
                    RV College of Engineering<sup className="text-sm">®</sup>
                  </h4>
                </div>

                <div className="flex flex-col gap-4 p-6 sm:flex-row sm:justify-center sm:gap-6">
                  <a
                    href="https://cmt3.research.microsoft.com/CSITSS2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:from-blue-500 hover:to-blue-600 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400/50 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Submit Paper
                    </span>
                  </a>

                  <a
                    href="#timeline"
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:from-emerald-500 hover:to-emerald-600 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-400/50 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Timeline
                    </span>
                  </a>

                  <a
                    href="Draft brochure-CSITSS 2025.pdf"
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:from-purple-500 hover:to-purple-600 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-400/50 active:scale-95"
                    download
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download Flyer
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="mt-4  w-full rounded-lg bg-blue-200 bg-opacity-50 py-4 px-6 text-center text-black shadow-lg">
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

            <h3 className="text-2xl font-bold">
              8 successful editions of CSITSS
            </h3>
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
              <p
                className="mb-8 text-xl font-normal leading-relaxed text-gray-900"
                style={{
                  textAlign: 'justify',
                  textJustify: 'inter-word',
                  hyphens: 'auto',
                  wordSpacing: 'normal',
                }}
              >
                The 9<sup>th</sup> International Conference on Computational
                Systems and Information Technology for Sustainable Solutions
                [CSITSS — 2025] focuses on bringing together leading
                academicians, scientists, researchers, industry representatives,
                postdoctoral fellows and research scholars around the world to
                share their knowledge and research expertise in Green
                Electronics, Renewable Energy, Robotics and Automation,
                Photonics, Artificial Intelligence, Cyber-Physical Systems,
                Quantum Mechanics and Computing from November 20<sup>th</sup> to
                22<sup>nd</sup>, 2025.
                <br />
                <br />
                The conference has been successfully organized for the past
                seven years with participants from all over India and abroad.
                All peer-reviewed, selected, and presented papers from the
                conference will be submitted for possible inclusion in the IEEE
                digital library. International speakers will deliver keynote
                talks on the latest technologies in these domains. The
                CSITSS-2025 ensures to provide a platform for researchers around
                the globe for knowledge exchange and networking.
              </p>

              <p
                className="mb-8 text-xl font-normal leading-relaxed text-gray-900"
                style={{
                  textAlign: 'justify',
                  textJustify: 'inter-word',
                  hyphens: 'auto',
                  wordSpacing: 'normal',
                }}
              >
                The{' '}
                <a
                  href="https://cmt3.research.microsoft.com/"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 no-underline"
                  style={{ textDecoration: 'none' }}
                >
                  Microsoft CMT service
                </a>{' '}
                is used for managing the peer-reviewing process for this
                conference. This service is provided for free by Microsoft, and
                they bear all expenses, including costs for Azure cloud services
                as well as for software development and support.
              </p>

              <a
                className="inline-flex transform items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                href="https://cmt3.research.microsoft.com/CSITSS2025"
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

        {/* <Element name="test4" className="element"> */}
        <div className="flex flex-col items-center justify-center p-4">
          <Timeline />
        </div>
        {/* </Element> */}
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

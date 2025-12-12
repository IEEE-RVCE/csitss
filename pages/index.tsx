/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
// import { Element, ScrollLink } from 'react-scroll'
import HeaderImages from '../components/HeaderImages'
import Timeline from '../components/TimeLine'
import Gallery from '../components/Gallery'
import Marquee from 'react-fast-marquee'
// import Marquee from 'react-fast-marquee'

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
        <div className="w-full flex justify-center bg-indigo-600 py-2.5">
          <Marquee gradient={false} speed={50} pauseOnHover>
            <span
              className="text-lg font-semibold text-white hover:underline cursor-pointer"
              onClick={() => window.open('/Best_PaperID.pdf', '_blank')}
            >
              BEST PAPER in the CSITSS-9 2025
            </span>
          </Marquee>
        </div>
        <header>
          <div className="heroHeader w-full bg-cover bg-center px-4 py-8 sm:px-8 sm:py-12 md:px-16 md:py-16">
            {' '}
            <HeaderImages />
            {/* Connected Date and Welcome Cards */}
            <div className="mt-6 flex w-full items-center justify-center">
              <div className="relative w-full max-w-6xl">
                {/* Conference Date Section */}
                <div className="flex w-full items-center justify-center">
                  <div className="rounded-t-3xl border border-white/30 border-b-0 bg-white/10 px-6 py-3 text-center shadow-xl backdrop-blur-[2px] dark:border-gray-600/40 dark:bg-black/20 sm:px-10 sm:py-5 lg:px-12 lg:py-6">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                      <svg
                        className="h-6 w-6 text-white/90 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="text-xs font-medium text-white/90 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] sm:text-sm lg:text-base">
                          Conference Dates
                        </p>
                        <h3 className="whitespace-nowrap text-lg font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] sm:text-xl lg:text-2xl xl:text-3xl">
                          November 20-22, 2025
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Welcome Card - Connected */}
                <div className="flex w-full items-center justify-center">
                  <div className="w-full rounded-b-3xl rounded-t-none border border-white/20 border-t-white/30 bg-white/10 px-10 py-8 text-center shadow-2xl backdrop-blur-[2px] dark:border-gray-700/30 dark:border-t-gray-600/40 dark:bg-black/15">
                    <h1 className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text break-words px-2 text-center text-2xl font-black text-transparent drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                      WELCOME TO CSITSS-2025
                    </h1>
                    <p className="mt-4 px-2 text-base font-semibold text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.9)] xs:text-lg sm:text-xl lg:text-2xl">
                      9<sup className="text-sm">th</sup> International
                      Conference on Computational
                      <br className="hidden xs:block" />
                      Systems and Information Technology for Sustainable
                      Solutions
                    </p>
                    <div className="my-3">
                      <p className="mb-1 px-2 text-base font-medium text-white/90 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] xs:text-lg  lg:text-xl">
                        CONFERENCE RECORD <b># 67709</b>
                      </p>
                    </div>
                    <div className="mb-4 mt-2">
                      <p className="mb-1 px-2 text-base font-medium text-white/90 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] xs:text-lg">
                        Organized by
                      </p>
                      <h4 className="px-2 text-lg font-bold text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.9)] xs:text-xl sm:text-2xl lg:text-3xl">
                        RV College of Engineering
                        <sup className="text-sm">®</sup>
                      </h4>
                    </div>
                    <div className="flex flex-col gap-3 px-2 sm:flex-row sm:justify-center sm:gap-4">
                      <a
                        href="https://cmt3.research.microsoft.com/CSITSS2025"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-blue-500 hover:to-blue-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400/50 active:scale-95"
                      >
                        <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition-transform duration-500 group-hover:translate-x-[100%]"></div>
                        <span className="relative flex items-center justify-center gap-2">
                          <svg
                            className="h-5 w-5"
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
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-emerald-500 hover:to-emerald-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-400/50 active:scale-95"
                      >
                        <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition-transform duration-500 group-hover:translate-x-[100%]"></div>
                        <span className="relative flex items-center justify-center gap-2">
                          <svg
                            className="h-5 w-5"
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
                        href="CSITSS 2024 Brochure.pdf"
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-purple-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-400/50 active:scale-95"
                        download
                      >
                        <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition-transform duration-500 group-hover:translate-x-[100%]"></div>
                        <span className="relative flex items-center justify-center gap-2">
                          <svg
                            className="h-5 w-5"
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
            </div>
          </div>
        </header>
        <div className="mt-4 w-full rounded-lg bg-blue-200 bg-opacity-50 px-6 py-4 text-center text-black shadow-lg">
          <p className="text-lg font-semibold">
            Organized by{' '}
            <span className="text-blue-700">RV College of Engineering</span>
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 px-2 xs:grid-cols-2 md:grid-cols-4">
          <div className="rounded-lg bg-red-100 p-4 text-center text-gray-800 shadow-lg transition-colors duration-300 hover:bg-red-200 xs:p-6">
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
          <div className="rounded-lg bg-green-100 p-4 text-center text-gray-800 shadow-lg transition-colors duration-300 hover:bg-green-200 xs:p-6">
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
          <div className="rounded-lg bg-blue-100 p-4 text-center text-gray-800 shadow-lg transition-colors duration-300 hover:bg-blue-200 xs:p-6">
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
          <div className="rounded-lg bg-yellow-100 p-4 text-center text-gray-800 shadow-lg transition-colors duration-300 hover:bg-yellow-200 xs:p-6">
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

        {/* IEEE Publication Information Section */}
        <section className="mx-auto max-w-screen-xl px-4 pt-12 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col items-center p-6 text-center md:flex-row md:p-8 md:text-left">
              <div className="flex-shrink-0">
                <svg
                  className="h-16 w-16 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <div className="mt-4 md:ml-6 md:mt-0">
                <h3 className="text-xl font-bold text-gray-800">
                  Publication in IEEE Xplore
                </h3>
                <p className="mt-2 text-lg text-gray-600">
                  All accepted and presented papers will be published in the
                  IEEE Xplore Digital Library.
                </p>
              </div>
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

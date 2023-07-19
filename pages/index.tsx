/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import { Element, Link as ScrollLink } from "react-scroll";
import HeaderImages from "../components/HeaderImages";
import Timeline from "../components/TimeLine";
import Gallery from "../components/Gallery";


const image = {
  src: "logo_IEEE_Banaglaore_Section.png",
  alt: "ieee_bangalore_logo",
  href: "https://ieeebangalore.org/",
  show: true,
  padding: "pt-6"
};


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
            style={{ height: "38rem" }}
          >

            <HeaderImages />
            <div className="flex h-4/6  w-full items-center justify-center ">
              <div className="bg-gray-800 bg-opacity-50 text-center font-extrabold">
                <h1 className="bg bg-gradient-to-r from-yellow-300  via-amber-400 via-orange-500 via-red-600 via-amber-400 to-yellow-300 bg-clip-text text-5xl font-extrabold text-transparent">
                  WELCOME TO CSITSS-2023
                </h1>
                <p className="text-xl text-white md:text-2xl">
                  <span className="font-semibold ">
                    7<sup>th</sup> International Conference on Computational
                    Systems and Information Technology for Sustainable Solutions
                  </span>
                </p>
                <p className="align-text-center text-xl text-slate-50">
                  Conference Record #60515
                </p>
                <p className="align-text-center text-xl text-slate-50">
                  Organized by
                </p>
                <p className="text-align-center text-2xl text-slate-50">
                  <h4>
                    RV College of Engineering<sup className="text-lg">®</sup>
                  </h4>
                </p>
                <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-3 xl:grid-cols-3">
                  <a
                    href="https://cmt3.research.microsoft.com/CSITSS2023"
                    target="_blank"
                    className="mt-4 rounded bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
                  >
                    Submit Paper
                  </a>
                  <ScrollLink
                    activeClass="active"
                    className="mt-4 rounded bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
                    to="test4"
                    spy={true}
                    smooth={true}
                    duration={600}
                    delay={100}
                  >
                    TimeLine
                  </ScrollLink>
                  <a
                    href="CSITSS_19-07-2023.pdf"
                    className="mt-4 rounded bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
                  >
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <br /><br />
                <br /><br />
                <br /><br />
                {/* <h2 className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-3xl font-extrabold text-transparent">
                  Organized by
                </h2>{" "} <br />
                <h1 className=" text-blue-800 text-center text-4xl font-extrabold text-transparent">
                  R V College of Engineering
                </h1>{" "} <br /> */}
                <h4 className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-3xl font-extrabold text-transparent">
                  In association with
                </h4>{" "} <br /> 
                <div className="flex flex-row items-center justify-center">
                  <img
                    src="https://brand.fiu.edu/_assets/images/fiu-logo.png"
                    className="h-auto w-auto object-cover"
                  />
                </div>
                <br /> <br />
                <h1 className="font-poppins bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-600 bg-clip-text text-center text-3xl font-extrabold text-transparent">
                  Technically co-sponsored by <br />
                </h1>
                <div className={`flex flex-row items-center justify-center`}>
                    <a href={image.href} target="_blank" rel="noreferrer">
                      <img className="h-auto w-auto object-cover" src={image.src} alt={image.alt} />
                    </a>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <img
                    className="h-[25%] w-auto object-cover"
                    src="https://ieeebangalore.org/wp-content/uploads/2022/01/Bangalore-Section-Logo-white-1-01-768x183.png"
                    alt="ieee_blr_logo"
                  />
                </div>
              </div>

              <div>
                <h2 className="my-4 text-3xl font-bold sm:text-4xl">
                  About CSITSS
                </h2>

                <p className="break-normal text-justify text-lg font-bold text-gray-900">
                  The 7<sup>th</sup> International Conference on "Computational Systems and Information
                  Technology for Sustainable Solutions [CSITSS — 2023]" focuses on bringing together
                  leading academicians, scientists, researchers, industry representatives, postdoctoral
                  fellows and research scholars around the world to share their knowledge and research
                  expertise in Renewable Energy, Robotics, Computing, Communication, E-mobility, Embedded Systems,
                  (R2C2E2) from 2<sup>nd</sup> to 4<sup>th</sup>, November 2023.
                  <br />
                  The conference has been successfully organised for the past six years with participants
                  from all over India and abroad. All peer-reviewed, selected and presented papers from
                  the conference will be submitted for possible inclusion in IEEE digital library. The present
                  version of the CSITSS-2023 aims to achieve higher standards by attracting original
                  research works in the domain of R2C2E2. International speakers will deliver keynote talks
                  on the latest technologies in these domains. The CSITSS-2023 ensures to provide a
                  platform for researchers around the globe for knowledge exchange and networking.                </p>

                <a
                  className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="https://cmt3.research.microsoft.com/CSITSS2023"
                >
                  <a
                    href="https://cmt3.research.microsoft.com/CSITSS2023"
                    className="text-sm font-medium"
                  >
                    {" "}
                    Submit Paper{" "}
                  </a>

                  <svg
                    className="ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Element name="test4" className="element">
          <div className="flex flex-col items-center justify-center p-4">
            <Timeline />
          </div>
        </Element>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509397044632!2d77.49651251530834!3d12.923722790887302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1652610248773!5m2!1sen!2sin"
                  width="1200"
                  height="600"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="lg:py-24 gap-8">
                <h2 className="text-3xl font-bold sm:text-4xl">Venue</h2>
                <p className="mt-4 text-gray-600">RVCE, Mysuru Road</p>
                <a
                  className="mr-8 mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="https://goo.gl/maps/sXWGV9iXqQRwz2PJ9"
                >
                  <span className="text-sm font-medium"> Open Maps </span>
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
                  className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="HOTELS.pdf"
                >
                  <span className="text-sm font-medium"> Download Hotels List Near RVCE </span>
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
          </div>
        </section>
      </section>
      <section>
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
  );
}

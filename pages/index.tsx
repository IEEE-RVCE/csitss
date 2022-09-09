/* eslint-disable react/no-unescaped-entities */
import { Element, Link as ScrollLink } from "react-scroll";

import HeaderImages from "../components/HeaderImages";
import React from "react";
import Timeline from "../components/TimeLine";

/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

export default function Index() {
  return (
    <>
      <HeaderImages />
      <section className="body-font text-gray-600">
        <header>
          <div
            className="heroHeader w-full bg-cover bg-center"
            style={{ height: "50rem" }}
          >
            <div className="flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="text-center font-extrabold">
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent">
                  WELCOME TO CSITSS-2022
                </h1>
                <p className="text-xl text-white md:text-2xl">
                  <span className="font-semibold">
                    6<sup>th</sup> International Conference on Computational
                    Systems and Information Technology for Sustainable Solutions
                  </span>
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
                    href="https://cmt3.research.microsoft.com/CSITSS2022"
                    target="_blank"
                    className="mt-4 rounded bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
                  >
                    Submit Paper
                  </a>
                  {/* <a className="mt-4 rounded bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none" href="brochure.pdf" download>
                    Download CFP
                  </a> */}
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
                    href="A5brochure (1)_compressed.pdf"
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
                <h1 className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-4xl font-extrabold text-transparent">
                  Organized by RV College Of Engineering
                </h1>{" "}
                <p className="m-4 text-center text-base font-bold text-white">
                  in association with
                </p>{" "}
                <div className="flex flex-row items-center justify-center">
                  <img
                    src="https://brand.fiu.edu/_assets/images/fiu-logo.png"
                    className="h-auto w-auto object-cover"
                  />
                </div>
                <br />
                <h1 className="font-poppins bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-600 bg-clip-text text-center text-4xl font-extrabold text-transparent">
                  Technically co-sponsored by <br /> IEEE Bangalore Section
                </h1>
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
                  The 6<span className="charge">th</span> International
                  Conference on “Computational Systems and Information
                  Technology for Sustainable Solutions
                  <br /> [CSITSS – 2022] focusses to bring together leading
                  academic scientists, researchers, industry representatives,
                  postdoctoral fellows and research scholars around the world to
                  share their knowledge and research expertise in SPICCE
                  (Sensors, Processors, Intelligent systems, Computing,
                  Communication and Energy solutions) from 21<sup>st</sup> to 23
                  <sup>rd</sup> December 2022. The conference has been held
                  successfully for the past five years with participants from
                  all over India and abroad.The present version of the
                  CSITSS-2022 aims to achieve higher standards by attracting
                  original research works in SPICCE. International speakers will
                  deliver the keynote talks on the latest happenings in the
                  domains. The CSITSS-2022 ensures to provide a platform for
                  researchers around the globe for knowledge exchange and
                  networking.
                </p>

                <a
                  className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="/get-started"
                >
                  <a
                    href="https://cmt3.research.microsoft.com/CSITSS2022"
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
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">Venue</h2>
                <p className="mt-4 text-gray-600">RVCE, Mysuru Road</p>
                <a
                  className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="/get-started"
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
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

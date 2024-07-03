/* eslint-disable @next/next/no-html-link-for-pages */
import { AppShell, Header, Image, Menu } from '@mantine/core'

import Link from 'next/link'
import React from 'react'
const Links: Array<{
  href: string
  label: string
  newTab?: boolean
}> = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/committee',
    label: 'Committee',
  },
  {
    href: '/papers',
    label: 'Call for Papers',
  },
  {
    href: '/awards',
    label: 'Awards',
  },
  {
    href: "/registration",
    label: "Registration",
  },
  {
    href: '/sponsorship',
    label: 'Sponsors',
  },
  {
    href: '/tracks',
    label: 'Tracks',
  },
  {
    href: '/contact',
    label: 'Contact Us',
  },
  
  // {
  //   href: "https://rzp.io/l/3N4bwhvH",
  //   label: "Quick Payment Link",
  //   newTab: true,
  // },
  // {
  //   href: "/pgmschedule",
  //   label: "Program Schedule",
  // },
]

// const downloadLinks = [
//   {
//     href: './PDF PROGRAMPLAN.pdf',
//     label: 'Program Schedule',
//   },
//    {
//     href: "./PDF TUTORIALS & TRACK.pdf",
//     label: "Tutorial Schedule",
//   },
  
//   {
//     href: './Invitation Letter.pdf',
//     label: 'Inaugural Invitation & Schedule',
//   },
// ]

const NavBar = () => {
  return (
    <header>
      <div className="mx-auto w-full p-1 shadow-md bg-blue-100 bg-opacity-20">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-stretch" href="/">
                <Image
                  src="RVCE NEW-HEADER_onlyLogo.png"
                  alt="logo"
                  className="h-full w-14"
                />
              </a>
            </Link>
          </div>

          <nav className="text-m hidden space-x-10  font-medium md:flex">
            {Links.map((link) => (
              <Link href={link.href} key={JSON.stringify(link)}>
                <a
                  className="font-sans text-black-500 hover:border-b-3 hover:text-blue-700 "
                  href={link.href}
                  target={link.newTab ? '_blank' : '_self'}
                >
                  {link.label} 
                </a>
              </Link>
            ))}
          </nav>
          <div className="hidden items-center justify-end space-x-8 md:flex-1 lg:flex lg:w-0">
            <Menu
              control={
                <button
                  className="rounded-lg bg-black-100 p-2 text-gray-600"
                  type="button"
                  name="Mobile Navigation Menu"
                >
                  {' '}
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              }
            >
              <Menu.Label>
                <p className="font-sans text-blue-400 underline">
                  Download Links
                </p>
              </Menu.Label>

              {/* {downloadLinks.map((link) => (
                <Menu.Item>
                  <Link href={link.href}>
                    <a className="font-sans text-gray-500">{link.label}</a>
                  </Link>
                </Menu.Item>
              ))} */}
            </Menu>
          </div>
          <div className="lg:hidden">
            <Menu
              control={
                <button
                  className="rounded-lg bg-gray-100 p-2 text-gray-600"
                  type="button"
                  name="Mobile Navigation Menu"
                >
                  {' '}
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              }
            >
              <Menu.Label> </Menu.Label>
              {Links.map((link) => (
                <Menu.Item>
                  <Link href={link.href}>
                    <a className="font-sans text-gray-500">{link.label} </a>
                  </Link>
                </Menu.Item>
              ))}
              <Menu.Label>
                <p className="font-sans text-blue-400 underline">
                  Download Links 
                </p>
              </Menu.Label>
              {/* {downloadLinks.map((link) => (
                <Menu.Item>
                  <Link href={link.href}>
                    <a className="font-sans text-gray-500">{link.label}  qqq</a>
                  </Link>
                </Menu.Item>
              ))} */}
            </Menu>
          </div>
        </div>
        {/*<Marquee>
          <div className="content">
            <a href="./PDF PROGRAMPLAN.pdf">
              <span className="ml-20 text-red-800">Program Schedule</span>{" "}
              Released--Download Here{" "}
            </a>
            
            <a href="./Invitation Letter.pdf">
              <span className="ml-20 text-red-800"></span> Inauguration
              Invitation and Schedule{" "}
            </a>
          </div>
              </Marquee>*/}
      </div>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="static bottom-0 w-[100%] bg-gray-50">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center px-4 py-16 sm:px-6 lg:block lg:px-8">
        <a className="flex items-center justify-around" href="/">
          <Image
            src="logo_rvce.jpg"
            alt="logo"
            className="m-5 h-full w-20"
          />
          <Image
            src="https://i.ibb.co/dBDxKQt/GO-CHANGE-THE-WORLD.png"
            alt="GO-CHANGE-THE-WORLD"
            className="m-5 h-full w-48"
          />
        </a>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-extrabold uppercase text-blue-800">
            RV College of Engineering
          </h1>
          <h2>RV Vidyanikethan Post, Mysuru Road Bengaluru - 560059</h2>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-xs text-gray-900">
            &copy; 2022
            {new Date().getFullYear() === 2022
              ? ''
              : '- ' + new Date().getFullYear()}{' '}
            IEEE RVCE
          </p>
          {/*<div className="flex flex-col items-center justify-center gap-4">
            <span className="text-center text-xs text-gray-500">
              Collaboration with{" "}
            </span>
             <Box>
              <div className="ml-10 flex flex-nowrap justify-evenly md:ml-20 lg:ml-40">
                <div className="inline-block px-3">
                  <div className="m-5 ml-0 h-auto w-auto max-w-xs overflow-hidden bg-none p-2 transition-shadow duration-300 ease-in-out hover:shadow-xl">
                    <a
                      href="https://www.rvce.edu.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="RVCE NEW-HEADER.png"
                        alt="rvce_logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="inline-block px-3">
                  <div className="m-5 h-auto w-auto max-w-xs overflow-hidden  rounded-lg bg-none pt-11 transition-shadow duration-300 ease-in-out hover:shadow-xl">
                    <a
                      href="https://ieee-rvce.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="h-auto w-auto object-cover"
                        src="logo_rvce_ieee.png"
                        alt="rvce_logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
          </div> */}
          <div>
            <p className="text-sm text-gray-500">
              Developed by <br />
              <a
                target="_blank"
                className="font-bold text-indigo-500"
                href="https://ieee-rvce.org/#/devs"
                rel="noreferrer"
              >
                IEEE RVCE SE Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const WrapApp = ({ children }: any) => {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={80}>
          <NavBar />
        </Header>
      }
      footer={<Footer />}
    >
      {children}
    </AppShell>
  )
}

export default WrapApp

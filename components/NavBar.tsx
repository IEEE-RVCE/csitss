/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

const Links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/committee', label: 'Committee' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/papers', label: 'Call for Papers' },
  { href: '/awards', label: 'Awards' },
  { href: '/registration', label: 'Registration' },
  { href: '/sponsorship', label: 'Sponsors' },
  { href: '/tracks', label: 'Tracks' },
  { href: '/contact', label: 'Contact Us' },
]

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <div className="navbar mx-auto w-full bg-blue-400 bg-opacity-20 p-1 shadow-md">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/">
              <img
                src="RVCE NEW-HEADER_onlyLogo.png"
                alt="logo"
                className="logo h-full w-14"
              />
            </Link>
          </div>
          <nav className="text-m hidden space-x-10 font-medium md:flex">
            {Links.map((link) => (
              <Link href={link.href} key={link.label}>
                <span className="nav-link text-black-500 hover:border-b-3 font-sans hover:text-blue-700">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
          <div className="relative md:hidden">
            <button
              className="bg-black-100 rounded-lg p-2 text-gray-600"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                <div className="px-4 py-2">
                  <p className="font-sans text-blue-400 underline">
                    Navigation Links
                  </p>
                </div>
                {Links.map((link) => (
                  <Link href={link.href} key={link.label}>
                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {link.label}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Marquee className="marquee bg-blue-300">
        <div className="content1">
          <span className="ml-80 font-bold text-yellow-300">
            <a href="" download>
              Website Under Construction
            </a>
          </span>{' '}
        </div>
      </Marquee>
      <style jsx>{`
        .navbar {
          animation: fadeIn 1s ease-in-out;
        }
        .logo {
          transition: transform 0.3s;
        }
        .logo:hover {
          transform: scale(1.1);
        }
        .nav-link {
          position: relative;
          transition: color 0.3s, border-bottom 0.3s;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          width: 0%;
          height: 3px;
          bottom: -2px;
          left: 50%;
          background-color: #1e40af;
          transition: all 0.3s ease-in-out;
        }
        .nav-link:hover::before {
          width: 100%;
          left: 0;
        }
        .marquee {
          margin-top: 1rem;
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
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <a className="flex items-center justify-around" href="/">
              <img src="/logo_rvce.jpg" alt="logo" className="m-5 h-full w-20" />
            </a>
            <a>
              <img
                src="/logo_IEEE_Banaglaore_Section.png"
                alt="logo"
                className="m-5 h-full w-20"
              />
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0">
            © 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

const WrapApp = ({ children }: any) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-20">
        <NavBar />
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="h-16">
        <Footer />
      </footer>
    </div>
  )
}

export default WrapApp

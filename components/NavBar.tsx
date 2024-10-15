/* eslint-disable @next/next/no-html-link-for-pages */
import { AppShell, Center, Header, Image, Menu } from '@mantine/core'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

const Links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/committee', label: 'Committee' },
  { href: '/speakers', label: 'Keynote Speakers' },
  { href: '/papers', label: 'Call for Papers' },
  { href: '/awards', label: 'Awards' },
  { href: '/registration', label: 'Registration' },
  { href: '/sponsorship', label: 'Sponsors' },
  { href: '/tracks', label: 'Tracks' },
  { href: '/contact', label: 'Contact Us' },
]

const NavBar = () => {
  return (
    <header>
      <div className="navbar mx-auto w-full bg-blue-400 bg-opacity-20 p-1 shadow-md">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-stretch">
                <Image
                  src="RVCE NEW-HEADER_onlyLogo.png"
                  alt="logo"
                  className="logo h-full w-14"
                />
              </a>
            </Link>
          </div>
          <nav className="text-m hidden space-x-10 font-medium md:flex">
            {Links.map((link) => (
              <Link href={link.href} key={link.label}>
                <a className="nav-link text-black-500 hover:border-b-3 font-sans hover:text-blue-700">
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>
          <div className="hidden items-center justify-end space-x-8 md:flex-1 lg:flex lg:w-0">
            <Menu
              control={
                <button
                  className="bg-black-100 rounded-lg p-2 text-gray-600"
                  type="button"
                  name="Mobile Navigation Menu"
                >
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
                <Menu.Item key={link.label}>
                  <Link href={link.href}>
                    <a className="font-sans text-gray-500">{link.label}</a>
                  </Link>
                </Menu.Item>
              ))}
              <Menu.Label>
                <p className="font-sans text-blue-400 underline">
                  Download Links
                </p>
              </Menu.Label>
            </Menu>
          </div>
        </div>
      </div>
      <Marquee className="marquee bg-blue-300">
        <div className="content1">
          <span className="ml-80 font-bold text-yellow-300">
          <a href="PhD-Results.pdf"  download>
          Download PDF
          </a>
          </span>{' '}
          <span className="ml-80 font-bold text-yellow-300">
            Registrations are closed{' '}
          </span>{' '}
          <span className="ml-80 font-bold text-yellow-300">
            Notification of Acceptance
          </span>{' '}
          will be provided by 28th Aug 2024.
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
    <footer className="static bottom-0 w-full bg-gray-50">
      <div
        className="mainDiv mx-auto flex max-w-screen-xl flex-col items-center px-4 py-16 sm:px-6 lg:block lg:px-8"
        style={{ padding: '10px' }}
      >
        <a className="flex items-center justify-around" href="/">
          <Image src="/logo_rvce.jpg" alt="logo" className="m-5 h-full w-20" />
        </a>
        <a>
          <Center>
            <Image
              src="https://i.ibb.co/dBDxKQt/GO-CHANGE-THE-WORLD.png"
              alt="GO-CHANGE-THE-WORLD"
              className="m-5 h-full w-48"
            />
          </Center>
        </a>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-extrabold uppercase text-blue-800">
            RV College of Engineering
          </h1>
          <h2 className="text-center">
            RV Vidyanikethan Post, Mysuru Road Bengaluru - 560059
          </h2>
        </div>
        <div className="abc mt-8 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-center text-xs text-gray-900">
              &copy; 2022
              {new Date().getFullYear() > 2022
                ? `-${new Date().getFullYear()}`
                : ''}{' '}
              IEEE RVCE
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              <Center>Developed by</Center>
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
      <style jsx>{`
        @media (max-width: 500px) {
          footer {
            padding: 10px;
          }
          .text-xs {
            font-size: 12px;
          }
          .mainDiv {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 5px;
          }
        }
        @media (max-width: 1035px) {
          .abc {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
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

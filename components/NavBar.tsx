/* eslint-disable @next/next/no-html-link-for-pages */
import { AppShell, Box, Header, Image, Menu } from "@mantine/core";


import Link from "next/link";
import React from "react";
const Links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/committee",
    label: "Committee",
  },
  {
    href: "/tech",
    label: "Technical Program",
  },
  {
    href: "/registration",
    label: "Registration",
  },

  {
    href: "/contact",
    label: "Contact Us",
  },
  {
    href: "https://rzp.io/l/FtNzQRku",
    label: "Quick Payment Link",
  }
];

const NavBar = () => {
  return (
    <header>
      <div className="mx-auto max-w-screen-xl p-2">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-center" href="/">
                <Image
                  src="https://i.ibb.co/pzcZmKs/Untitled-design-5.png"
                  alt="logo"
                  className=" mt-5 h-full w-20"
                />
              </a>
            </Link>
          </div>

          <nav className="hidden space-x-8 text-sm font-medium md:flex">
            {Links.map((link) => (
              <Link href={link.href} key={JSON.stringify(link)}>
                <a
                  className="text-gray-500 hover:text-indigo-400"
                  href={link.href}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>
          <div className="lg:hidden">
            <Menu
              control={
                <button
                  className="rounded-lg bg-gray-100 p-2 text-gray-600"
                  type="button"
                  name="Mobile Navigation Menu"
                >
                  {" "}
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
              <Menu.Label>Goto</Menu.Label>
              {Links.map((link) => (
                <Menu.Item>
                  <Link href={link.href}>
                    <a className="text-gray-500" href="/">
                      {link.label}
                    </a>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="static bottom-0 w-[100%] bg-gray-50">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center px-4 py-16 sm:px-6 lg:block lg:px-8">
        <a className="flex items-center justify-around" href="/">
          <Image
            src="https://i.ibb.co/pzcZmKs/Untitled-design-5.png"
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
          <p className="text-center text-xs text-gray-500">
            &copy; 2022
            {new Date().getFullYear() === 2022
              ? ""
              : "- " + new Date().getFullYear()}{" "}
            IEEE RVCE
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-center text-xs text-gray-500">
              Collaboration with{" "}
            </span>
            <Box>
              <div className="ml-10 flex flex-nowrap md:ml-20 lg:ml-40 justify-evenly">
                <div className="inline-block px-3">
                  <div className="m-5 ml-0 h-auto w-auto max-w-xs overflow-hidden rounded-lg bg-none p-2 transition-shadow duration-300 ease-in-out hover:shadow-xl">
                    <a
                      href="https://www.rvce.edu.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src="RVCE NEW-HEADER.png"
                        alt="rvce_logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="inline-block px-3">
                  <div className="w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-none m-5 p-2 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <a href="https://www.ieee.org" target="_blank" rel="noreferrer">
                      <img
                        className="w-auto h-auto object-cover"
                        src="logo_IEEE_Main.png"
                        alt="rvce_logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="inline-block px-3">
                  <div className="w-auto h-auto max-w-xs overflow-hidden rounded-lg  bg-none m-5 pt-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <a
                      href="https://ieeebangalore.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="w-auto h-auto object-cover"
                        src="logo_IEEE_Banaglaore_Section.png"
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

          </div>
          <div>
            <p className="text-sm text-gray-500">
              Developed by{" "}
              <a
                target="_blank"
                className="font-bold text-indigo-500"
                href="https://www.linkedin.com/in/prajwal-prakash-a3b9931b3/"
                rel="noreferrer"
              >
                IEEE RVCE SE Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WrapApp = ({ children }: any) => {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={80} >
          <NavBar />
        </Header>
      }
      footer={<Footer />}
    >
      {children}
    </AppShell>
  );
};

export default WrapApp;

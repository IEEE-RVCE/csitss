/* eslint-disable @next/next/no-html-link-for-pages */
import { AppShell, Divider, Header, Image, Menu, Tooltip } from "@mantine/core";
import { CashIcon, ChatIcon } from "@heroicons/react/solid";

import Link from "next/link";
import React from "react";
import { useAuth } from "../hooks/auth";
import { useRouter } from "next/router";

// const withAuthLinks = [
//   {
//     href: "/register",
//     label: "Register",
//   }
// ]

const withOutAuthLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/tech",
    label: "Technical Program",
  },
  {
    href: "/sponsorship",
    label: "Sponsorship",
  },
  {
    href: "/committee",
    label: "Committee",
  },
  {
    href: "/contact",
    label: "Contact Us",
  }
]

const NavBar = () => {
  const { user } = useAuth();
  const router = useRouter();

  /**
   * @description Performing Dynamic Imports as it reduces the overhead of the navBar
   */
  const handleLogout = () => {
    import("../lib/firebaseClient").then((pack) => {
      pack.firebase.auth().signOut();
    });
    router.push("/");
  };

  return (
    <header>
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-center" href="/">
                <Image
                  src="https://i.ibb.co/dty0MtL/IEEE-RVCE-Computer-Society-Logo.png"
                  alt="logo"
                  className=" mt-5 h-full w-20"
                />
              </a>
            </Link>
          </div>

          <nav className="hidden space-x-8 text-sm font-medium md:flex">
            {user ? (
              <>
                <Link href={`/view`}>
                  <a
                    className="text-gray-500 hover:text-indigo-400"
                    href="/view"
                  >
                    View Your Registration Status
                  </a>
                </Link>
                <Link href="/register">
                  <a className="text-gray-500" href="/authenticated">
                    Register for the Event
                  </a>
                </Link>
              </>
            ) : (
              <>
                {withOutAuthLinks.map((link) => (
                  <Link href={link.href} key={JSON.stringify(link)}>
                    <a className="text-gray-500 hover:text-indigo-400" href={link.href}>
                      {link.label}
                    </a>
                  </Link>
                ))}
              </>
            )}
          </nav>

          <div className="hidden flex-1 items-center justify-end space-x-4 sm:flex">
            {!user ? (
              <>
                <Link href="/login">
                  <a className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white">
                    Login
                  </a>
                </Link>
              </>
            ) : (
              <>
                <span className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white">
                  Logged as {user.displayName}
                </span>
                <button
                  className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>

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
              {user ? (
                <>
                  <Menu.Label>Goto</Menu.Label>
                  <Menu.Item>
                    <Link href="/register">
                      <a className="text-gray-500" href="/register">
                        View Your Registration Status
                      </a>
                    </Link>
                  </Menu.Item>
                  <Divider />
                  <Menu.Label>Actions</Menu.Label>
                  <Menu.Item color="indigo">
                    <button onClick={handleLogout}>Logout</button>
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Label>Goto</Menu.Label>

                  <Menu.Item>
                    <Link href="/">
                      <a className="text-gray-500" href="/">
                        Home
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href="/contact">
                      <a className="text-gray-500" href="/contact">
                        Contact
                      </a>
                    </Link>
                  </Menu.Item>
                  <Divider />
                  <Menu.Label>Actions</Menu.Label>
                  <Menu.Item color="indigo">
                    <Link href="/login">
                      <a href="/login">Login</a>
                    </Link>
                  </Menu.Item>
                </>
              )}
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
        <Link href="/">
          <a className="flex items-center justify-items-center" href="/">
            <Image
              src="https://i.ibb.co/dty0MtL/IEEE-RVCE-Computer-Society-Logo.png"
              alt="logo"
              className="m-5 h-full w-20"
            />
          </a>
        </Link>
        <div className="mt-8 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
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
            <div className="mb-2 flex items-center justify-center gap-4">
              <CashIcon className="text-green-400 h-full w-16 rounded-full object-cover p-4 transition-shadow duration-300 ease-in-out hover:shadow-xl lg:h-20 lg:w-20" />

              <CashIcon className="text-green-400 h-full w-16 rounded-full object-cover p-4 transition-shadow duration-300 ease-in-out hover:shadow-xl lg:h-20 lg:w-20" />

              <CashIcon className="text-green-400 h-full w-16 rounded-full object-cover p-4 transition-shadow duration-300 ease-in-out hover:shadow-xl lg:h-20 lg:w-20" />

              <CashIcon className="text-green-400 h-full w-16 rounded-full object-cover p-4 transition-shadow duration-300 ease-in-out hover:shadow-xl lg:h-20 lg:w-20" />

            </div>
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
                Prajwal P
              </a>
            </p>
            <Tooltip label="Contact ME">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ChatIcon className="h-5 w-5 text-gray-400" />
              </a>
            </Tooltip>
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
        <Header height={130}>
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

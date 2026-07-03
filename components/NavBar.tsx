/* eslint-disable @next/next/no-html-link-for-pages */
import { AppShell, Image, Menu } from '@mantine/core'
import Link from 'next/link'
import { useEffect, useState } from 'react'
// import Marquee from 'react-fast-marquee'

const Links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#timeline', label: 'Dates' },
  { href: '/#themes', label: 'Themes' },
  { href: '/committee', label: 'Committee' },
  { href: '/contact', label: 'Contact Us' },
]

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full px-4 md:px-8 pt-4 bg-transparent pointer-events-none">
      <div className="mx-auto max-w-7xl w-full bg-white/95 backdrop-blur-md border border-gray-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full px-6 py-2.5 flex items-center justify-between transition-all duration-300 pointer-events-auto">
        {/* Left Section: Logo & Titles */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/RVCE NEW-HEADER_onlyLogo.png"
              alt="logo"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-sm sm:text-base text-gray-800 tracking-tight leading-tight">
                CSITSS 2026
              </span>
              <span className="font-sans text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">
                IEEE • RV College of Engineering
              </span>
            </div>
          </a>
        </Link>

        {/* Middle Section: Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-sans">
          {Links.map((link) => (
            <Link href={link.href} key={link.label} legacyBehavior>
              <a className="text-sm font-semibold text-gray-600 hover:text-[#ff7b65] transition-colors duration-200">
                {link.label}
              </a>
            </Link>
          ))}
        </nav>
        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          <Menu shadow="md" width={200} position="bottom-end">
            <Menu.Target>
              <button
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                type="button"
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </Menu.Target>
            <Menu.Dropdown className="rounded-xl border border-gray-100/80 shadow-xl bg-white p-2">
              {Links.map((link) => (
                <Menu.Item
                  key={link.label}
                  className="hover:bg-orange-50/50 rounded-lg transition-colors py-2"
                >
                  <Link href={link.href} legacyBehavior>
                    <a className="font-sans text-sm font-semibold text-gray-600 hover:text-gray-900 block w-full">
                      {link.label}
                    </a>
                  </Link>
                </Menu.Item>
              ))}
              <Menu.Divider />
             
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </header>
  )
}

const Footer = () => {
  const [pageViews, setPageViews] = useState(0)

  useEffect(() => {
    fetch('/api/pageViews', {
      method: 'POST',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setPageViews(data.count))
      .catch(console.error)
  }, [])

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/#timeline', label: 'Important Dates' },
    { href: '/#themes', label: 'Themes' },
    { href: '/#venue', label: 'Venue' },
    { href: '/committee', label: 'Committee' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <footer className="w-full bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-8 border-b border-slate-700/60">
          {/* Left: Branding + address */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <Image
                src="/RVCE NEW-HEADER_onlyLogo.png"
                alt="RVCE Logo"
                className="h-9 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-sm text-white tracking-tight leading-tight">
                  CSITSS 2026
                </span>
                <span className="font-sans text-[10px] text-slate-400 font-medium leading-tight">
                  IEEE • RV College of Engineering
                </span>
              </div>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed">
              RV College of Engineering<br />
              RV Vidyanikethan Post, Mysuru Road<br />
              Bengaluru – 560059
            </p>
          </div>

          {/* Right: Quick links */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-3">
              Quick Links
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            © 2022{new Date().getFullYear() > 2022 ? `–${new Date().getFullYear()}` : ''} IEEE RVCE. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              <svg className="w-3 h-3 text-[#ff7b65]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="font-bold text-white">{pageViews.toLocaleString()}</span>
              <span className="text-slate-500">views</span>
            </span>
            <span className="text-slate-700">·</span>
            <span>
              Developed by{' '}
              <a
                href="https://ieee-rvce.org/#/devs"
                target="_blank"
                rel="noreferrer"
                className="text-[#ff7b65] hover:text-[#ff6b8b] font-semibold transition-colors"
              >
                IEEE RVCE SE Team
              </a>
            </span>
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
      header={{
        height: 80,
      }}
      footer={{
        height: 60,
      }}
    >
      <AppShell.Header style={{ background: 'transparent', border: 'none', pointerEvents: 'none' }}>
        <NavBar />
      </AppShell.Header>
      <AppShell.Main style={{ paddingTop: '80px' }}>{children}</AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  )
}

export default WrapApp

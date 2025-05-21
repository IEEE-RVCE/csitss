import React from 'react'

interface Image {
  src: string
  alt: string
  href: string
  show: boolean
  padding?: string
  size?: string // Add size property for individual image sizing
}

const HeaderImages: React.FC = () => {
  // const images: Image[] = [
  //   ...
  // ]

  // Split images into rows of 4
  const firstRowImages = [
    {
      src: 'Logo3.png',
      alt: 'rvce_logo',
      href: 'https://www.rvce.edu.in/',
      show: true,
      padding: 'pl-2',
    },

    {
      src: 'IEEE-CS-BangaloreChapter-Logo.png',
      alt: 'ieee_cs_bangalore_chapter_logo',
      href: 'https://cs.ieeebangalore.org/',
      show: true,
      // padding: 'p-2',
    },
    {
      src: 'IEEE-banglore-Section.jpg',
      alt: 'ieee_bangalore_section_logo',
      href: 'https://ieeebangalore.org/',
      show: true,
    },
    {
      src: 'ieee-main.png',
      alt: 'ieee_bangalore_logo',
      href: 'https://ieeebangalore.org/',
      show: true,
      padding: 'pt-6',
    },

    // // {
    // //   src: 'logo_rvce_ieee.png',
    // //   alt: 'rvce_ieee_logo',
    // //   href: 'https://ieee-rvce.org/',
    // //   show: true,
    // //   padding: 'pt-6',
    // // },
  ]

  const secondRowImages = [
    {
      src: 'thws.png',
      alt: 'thws_logo',
      href: 'https://www.thws.de/',
      show: true,
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/FH_Dortmund-logo.svg/450px-FH_Dortmund-logo.svg.png?20110112153650',
      alt: 'fh_dortmund_logo',
      href: 'https://www.fh-dortmund.de/',
      show: true,
      // padding: 'p-2',
    },
    {
      src: 'rosenheim.png',
      alt: 'rosenheim_logo',
      href: 'https://www.rosenheim.de/',
      show: true,
      padding: 'pr-2',
    },
    {
      src: 'fiu-logo2.png',
      alt: 'fiu_logo',
      href: 'https://www.fiu.edu/',
      show: true,
      size: 'w-40', // Reduce the size of the last logo
    },

    // // {
    // //   src: 'logo_rvce_ieee.png',
    // //   alt: 'rvce_ieee_logo',
    // //   href: 'https://ieee-rvce.org/',
    // //   show: true,
    // //   padding: 'pt-6',
    // // },
  ]

  return (
    <div>
      <div className="center p-auto m-14 mt-0 hidden flex-col md:block">
        <div className="mt-6 flex flex-col  rounded-3xl bg-white bg-opacity-60 py-4 scrollbar-hide sm:mx-0 md:mx-0 lg:mx-20">
          {/* First Row */}
          <div className="flex items-center justify-evenly gap-8 overflow-x-scroll px-4">
            {firstRowImages.map((image: Image) =>
              image.show ? (
                <div className=" inline-block flex-1" key={image.alt}>
                  <div
                    className={`mx-0 max-w-xs overflow-hidden ${image.padding ?? ''} transition-shadow duration-300 ease-in-out hover:shadow-xl`}
                  >
                    <a href={image.href} target="_blank" rel="noreferrer">
                      <img
                        className="h-20 w-auto object-contain sm:h-24 md:h-28 lg:h-32"
                        src={image.src}
                        alt={image.alt}
                      />
                    </a>
                  </div>
                </div>
              ) : null
            )}
          </div>
          {/* Second Row */}
          <div className="flex items-center justify-evenly gap-8 overflow-x-scroll px-4">
            {secondRowImages.map((image: Image) =>
              image.show ? (
                <div className="my-4 mt-0 inline-block flex-1" key={image.alt}>
                  <div
                    className={`mx-0 max-w-xs overflow-hidden ${image.padding ?? ''} transition-shadow duration-300 ease-in-out hover:shadow-xl`}
                  >
                    <a
                      href={image.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-center"
                    >
                      <img
                        className={`${image.size ?? 'w-20'} w-auto object-contain sm:h-24 md:h-28 lg:h-32`}
                        src={image.src}
                        alt={image.alt}
                      />
                    </a>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderImages

/*
  const firstRowImages = [
    {
      src: 'Logo3.png',
      alt: 'rvce_logo',
      href: 'https://www.rvce.edu.in/',
      show: true,
      padding: 'pl-2',
    },

    {
      src: 'IEEE-CS-BangaloreChapter-Logo.png',
      alt: 'ieee_cs_bangalore_chapter_logo',
      href: 'https://cs.ieeebangalore.org/',
      show: true,
      // padding: 'p-2',
    },
    {
      src: 'IEEE-banglore-Section.jpg',
      alt: 'ieee_bangalore_section_logo',
      href: 'https://ieeebangalore.org/',
      show: true,
    },
    {
      src: 'ieee-main.png',
      alt: 'ieee_bangalore_logo',
      href: 'https://ieeebangalore.org/',
      show: true,
      padding: 'pt-6',
    },

    // // {
    // //   src: 'logo_rvce_ieee.png',
    // //   alt: 'rvce_ieee_logo',
    // //   href: 'https://ieee-rvce.org/',
    // //   show: true,
    // //   padding: 'pt-6',
    // // },
  ]

  const secondRowImages = [
    {
      src: 'thws.png',
      alt: 'thws_logo',
      href: 'https://www.thws.de/',
      show: true,
    },

    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/FH_Dortmund-logo.svg/450px-FH_Dortmund-logo.svg.png?20110112153650',
      alt: 'fh_dortmund_logo',
      href: 'https://www.fh-dortmund.de/',
      show: true,
      // padding: 'p-2',
    },
    {
      src: 'rosenheim.png',
      alt: 'rosenheim_logo',
      href: 'https://www.rosenheim.de/',
      show: true,
      padding: 'pr-2',
    },

    {
      src: 'fiu-logo2.png',
      alt: 'fiu_logo',
      href: 'https://www.fiu.edu/',
      show: true,
    },

    // // {
    // //   src: 'logo_rvce_ieee.png',
    // //   alt: 'rvce_ieee_logo',
    // //   href: 'https://ieee-rvce.org/',
    // //   show: true,
    // //   padding: 'pt-6',
    // // },
  ]*/

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
    },
  ]

  // const technicalCoSponsors = [
  //   {
  //     src: 'IEEE-banglore-Section.jpg',
  //     alt: 'ieee_bangalore_section_logo',
  //     href: 'https://ieeebangalore.org/',
  //     show: true,
  //     padding: 'pr-2',
  //   },
  //   {
  //     src: 'ieee-main.png',
  //     alt: 'ieee_bangalore_logo',
  //     href: 'https://ieeebangalore.org/',
  //     show: true,
  //     padding: 'pt-1',
  //   },

  //   // {
  //   //   src: 'logo_rvce_ieee.png',
  //   //   alt: 'rvce_ieee_logo',
  //   //   href: 'https://ieee-rvce.org/',
  //   //   show: true,
  //   //   padding: 'pt-6',
  //   // },
  // ]

  const secondRowImages = [
    {
      src: 'ieee-sensors-council.png',
      alt: 'sensor_bangalore_logo',
      href: 'https://sensorscouncil.ieeebangalore.org/',
      show: true,
    },
    // {
    //   src: 'ieee-comsoc.png',
    //   alt: 'IEEE_Comsoc',
    //   href: 'https://www.comsoc.org/',
    //   show: true,
    //  padding: 'pl-8',

    // },
    //   {
    //     src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/FH_Dortmund-logo.svg/450px-FH_Dortmund-logo.svg.png?20110112153650',
    //     alt: 'fh_dortmund_logo',
    //     href: 'https://www.fh-dortmund.de/',
    //     show: true,
    //     // padding: 'p-2',
    //   },
    //   // {
    //   //   src: 'rosenheim.png',
    //   //   alt: 'rosenheim_logo',
    //   //   href: 'https://www.rosenheim.de/',
    //   //   show: true,
    //   //   padding: 'pr-2',
    //   // },
    //   {
    //     src: 'fiu-logo2.png',
    //     alt: 'fiu_logo',
    //     href: 'https://www.fiu.edu/',
    //     show: true,
    //     size: 'w-40', // Reduce the size of the last logo
    //   },

    //   // // {
    //   // //   src: 'logo_rvce_ieee.png',
    //   // //   alt: 'rvce_ieee_logo',
    //   // //   href: 'https://ieee-rvce.org/',
    //   // //   show: true,
    //   // //   padding: 'pt-6',
    //   // // },
  ]
  return (
    <div>
      <div className="center p-auto m-14 -mt-5 hidden md:block">
        <div className="mt-6 flex flex-col rounded-3xl bg-white bg-opacity-60 pt-4 pb-4 scrollbar-hide sm:mx-0 md:mx-0 lg:mx-20">
          {/* First Row */}
          <div className="flex items-center justify-center gap-8 overflow-x-hidden px-8 py-6">
            {/* RVCE Logo */}
            {firstRowImages.map((image: Image) =>
              image.show ? (
                <div
                  className="flex items-center justify-center"
                  key={image.alt}
                  style={{ flexBasis: '29%' }}
                >
                  <div
                    className={`mx-auto overflow-hidden ${image.padding ?? ''} transition-shadow duration-300 ease-in-out hover:shadow-xl flex justify-center`}
                  >
                    <a href={image.href} target="_blank" rel="noreferrer">
                      <img
                        className="h-28 w-auto object-contain lg:h-32"
                        src={image.src}
                        alt={image.alt}
                      />
                    </a>
                  </div>
                </div>
              ) : null
            )}

            {/* Technical Co-Sponsors Group */}
            {/* <div className="relative" style={{ flexBasis: '50%' }}>
              <div className="relative  p-6 pt-10 "> */}
            {/* Label positioned at top center, overlapping the border */}
            {/* <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-blue-500 text-white px-6 py-1 rounded-full text-base font-bold shadow-2xl whitespace-nowrap ">
                    Technical Co-Sponsors
                  </span>
                </div> */}

            {/* Logos inside the box */}
            {/* <div className="flex items-center justify-evenly  gap-10">
                  {technicalCoSponsors.map((image: Image) =>
                    image.show ? (
                      <div
                        className="flex items-center justify-center flex-1"
                        key={image.alt}
                      >
                        <div
                          className={`overflow-hidden ${image.padding ?? ''} transition-all duration-300 ease-in-out hover:scale-105`}
                        >
                          <a href={image.href} target="_blank" rel="noreferrer">
                            <img
                              className="h-20 w-auto object-contain lg:h-24"
                              src={image.src}
                              alt={image.alt}
                            />
                          </a>
                        </div>
                      </div>
                    ) : null
                  )}
                </div> */}
            {/* </div>
            </div> */}
          </div>

          {/* Second Row */}

          <div className="flex items-center justify-center gap-8 overflow-x-hidden px-8 pb-2 w-full">
            {secondRowImages.map((image: Image) =>
              image.show ? (
                <div
                  className="flex items-center justify-center"
                  key={image.alt}
                  style={{ flexBasis: '38%' }}
                >
                  <div
                    className={`mx-auto overflow-hidden ${image.padding ?? ''} transition-shadow duration-300 ease-in-out hover:shadow-xl`}
                  >
                    <a
                      href={image.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-center"
                    >
                      <img
                        className={`${image.size ?? 'h-32'} w-auto object-contain lg:h-40 `}
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

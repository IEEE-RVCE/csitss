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

  // Row 1: RV Logo (centered)
  const firstRowImages = [
    {
      src: 'Logo3.png',
      alt: 'rvce_logo',
      href: 'https://www.rvce.edu.in/',
      show: true,
    },
  ]

  // Row 2: IEEE Images
  const secondRowImages = [
    {
      src: 'logo_IEEE_Banaglaore_Section.png',
      alt: 'ieee_bangalore_section_logo',
      href: 'https://ieeebangalore.org/',
      show: true,
    },
    {
      src: 'ieee-comsoc.png',
      alt: 'ieee_comsoc_logo',
      href: 'https://www.comsoc.org/',
      show: true,
    },
    {
      src: 'ieee-sensors-council.png',
      alt: 'ieee_sensors_council_logo',
      href: 'https://sensorscouncil.ieeebangalore.org/',
      show: true,
    },
  ]

  // Row 3: Other Images
  const thirdRowImages = [
    {
      src: 'sdu.png',
      alt: 'sdu_logo',
      href: 'https://www.sdu.dk/',
      show: true,
    },
    {
      src: 'thws.png',
      alt: 'thws_logo',
      href: 'https://www.thws.de/',
      show: true,
    },
    {
      src: 'rosenheim.png',
      alt: 'rosenheim_logo',
      href: 'https://www.rosenheim.de/',
      show: true,
    },
    {
      src: 'dortmund.png',
      alt: 'dortmund_logo',
      href: 'https://www.fh-dortmund.de/',
      show: true,
    },
  ]
  return (
    <div>
      <div className="center p-auto m-14 -mt-5 hidden md:block">
        <div className="mt-6 flex flex-col rounded-3xl bg-white bg-opacity-60 pt-4 pb-4 scrollbar-hide sm:mx-0 md:mx-0 lg:mx-20">
          {/* Row 1: RV Logo (Centered) */}
          <div className="flex items-center justify-center gap-8 overflow-x-hidden px-8 py-6">
            {firstRowImages.map((image: Image) =>
              image.show ? (
                <div
                  className="flex items-center justify-center"
                  key={image.alt}
                >
                  <div
                    className={`mx-auto overflow-hidden ${image.padding ?? ''} transition-shadow duration-300 ease-in-out hover:shadow-xl flex justify-center`}
                  >
                    <a href={image.href} target="_blank" rel="noreferrer">
                      <img
                        className="h-24 w-auto object-contain lg:h-28"
                        src={image.src}
                        alt={image.alt}
                      />
                    </a>
                  </div>
                </div>
              ) : null
            )}
          </div>

          {/* Row 2: IEEE Images */}
          <div className="flex items-center justify-center gap-8 overflow-x-hidden px-8 py-6">
            {secondRowImages.map((image: Image) =>
              image.show ? (
                <div
                  className="flex items-center justify-center flex-1"
                  key={image.alt}
                >
                  <div
                    className={`mx-auto overflow-hidden ${image.padding ?? ''} transition-shadow duration-300 ease-in-out hover:shadow-xl flex justify-center`}
                  >
                    <a href={image.href} target="_blank" rel="noreferrer">
                      <img
                        className="h-24 w-auto object-contain lg:h-28"
                        src={image.src}
                        alt={image.alt}
                      />
                    </a>
                  </div>
                </div>
              ) : null
            )}
          </div>

          {/* Row 3: Other Images */}
          <div className="flex items-center justify-center gap-8 overflow-x-hidden px-8 pb-6">
            {thirdRowImages.map((image: Image) =>
              image.show ? (
                <div
                  className="flex items-center justify-center flex-1"
                  key={image.alt}
                >
                  <div
                    className={`mx-auto overflow-hidden ${image.padding ?? ''} transition-shadow duration-300 ease-in-out hover:shadow-xl flex justify-center`}
                  >
                    <a href={image.href} target="_blank" rel="noreferrer">
                      <img
                        className={`${image.size ?? 'h-24'} w-auto object-contain lg:h-28`}
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

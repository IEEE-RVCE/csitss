import React from 'react'

const HeaderImages = () => {
  const images = [
    {
      src: 'Logo3.png',
      alt: 'rvce_logo',
      href: 'https://www.rvce.edu.in/',
      show: true,
      padding: 'pl-2',
    },
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
      src: 'fiu-logo2.png',
      alt: 'fiu_logo',
      href: 'https://www.fiu.edu/',
      show: true,
    },
    {
      src: 'rosenheim.png',
      alt: 'rosenheim_logo',
      href: 'https://www.rosenheim.de/',
      show: true,
      padding: 'pr-2',
    },

    // // {
    // //   src: "logo_IEEE_Banaglaore_Section.png",
    // //   alt: "ieee_bangalore_logo",
    // //   href: "https://ieeebangalore.org/",
    // //   show: true,
    // //   padding: "pt-6"
    // // },
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
        <div className="mt-6 flex items-center justify-evenly gap-8 overflow-x-scroll rounded-3xl bg-white bg-opacity-70 scrollbar-hide sm:mx-0 md:mx-0 lg:mx-20">
          {images.map((image) => {
            if (image.show) {
              return (
                <div className="my-6 inline-block" key={image.alt}>
                  <div
                    className={`mx-0 max-w-xs overflow-hidden ${image.padding} transition-shadow duration-300 ease-in-out hover:shadow-xl`}
                  >
                    <a href={image.href} target="_blank" rel="noreferrer">
                      <img
                        className="h-auto w-auto object-contain"
                        src={image.src}
                        alt={image.alt}
                      />
                    </a>
                  </div>
                </div>
              )
            } else return null
          })}
        </div>
      </div>
    </div>
  )
}

export default HeaderImages

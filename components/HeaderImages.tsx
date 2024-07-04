import React from 'react';

const HeaderImages = () => {
  const images = [
    {
      src: 'Logo3.png',
      alt: 'rvce_logo',
      href: 'https://www.rvce.edu.in/',
      show: true,
      padding: 'p-2',
    },
    {
      src: 'ieee-main.png',
      alt: 'ieee_logo',
      href: 'https://www.ieee.org',
      show: true,
      padding: 'p-2',
    },
    {
      src: 'https://www.fh-dortmund.de/WEB-IES/fhdo-module/2.19.0/images/FHDO-Logo-large.svg',
      alt: 'fh_dortmund_logo',
      href: 'https://www.fh-dortmund.de/',
      show: true,
      padding: 'p-2',
    },
    {
      src: 'fiu-logo2.png',
      alt: 'fiu_logo',
      href: 'https://www.fiu.edu/',
      show: true,
      padding: 'p-2',
    },
    // {
    //   src: "logo_IEEE_Banaglaore_Section.png",
    //   alt: "ieee_bangalore_logo",
    //   href: "https://ieeebangalore.org/",
    //   show: true,
    //   padding: "pt-6"
    // },
    // {
    //   src: 'logo_rvce_ieee.png',
    //   alt: 'rvce_ieee_logo',
    //   href: 'https://ieee-rvce.org/',
    //   show: true,
    //   padding: 'pt-6',
    // },
  ];

  return (
    <div>
      <div className="center p-auto m-14 mt-0 hidden flex-col md:block">
        <div className="mx-20 mt-6 flex items-center justify-evenly gap-8 overflow-x-scroll rounded-3xl bg-white bg-opacity-40 scrollbar-hide">
          {images.map((image) => {
            if (image.show) {
              return (
                <div className="my-6 inline-block" key={image.alt}>
                  <div className={`mx-0 max-w-xs overflow-hidden ${image.padding} transition-shadow duration-300 ease-in-out hover:shadow-xl`}>
                    <a href={image.href} target="_blank" rel="noreferrer">
                      <img className="h-auto w-auto object-contain" src={image.src} alt={image.alt} />
                    </a>
                  </div>
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default HeaderImages;

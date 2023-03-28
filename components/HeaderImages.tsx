import React from "react";

const HeaderImages = () => {

  const images = [
    {
      src: "RVCE NEW-HEADER.png",
      alt: "rvce_logo",
      href: "https://www.rvce.edu.in/",
      show: true,
      padding: "p-2"
    },
    {
      src: "logo_IEEE_Main.png",
      alt: "ieee_logo",
      href: "https://www.ieee.org",
      show: false,
      padding: "p-2"
    },
    {
      src: "logo_IEEE_Banaglaore_Section.png",
      alt: "ieee_bangalore_logo",
      href: "https://ieeebangalore.org/",
      show: false,
      padding: "pt-6"
    },
    {
      src: "logo_rvce_ieee.png",
      alt: "rvce_ieee_logo",
      href: "https://ieee-rvce.org/",
      show: true,
      padding: "pt-6"
    },
  ];

  return (
    <div>
      <div className="center p-auto m-auto hidden flex-col md:block ">
        <div className="flex overflow-x-scroll pb-0 scrollbar-hide justify-evenly">
          {images.map((image) => {
            if (image.show) {
              return (
                <div className="inline-block px-3">
                  <div className={`m-5 ml-0 h-auto w-auto max-w-xs overflow-hidden rounded-lg bg-none ${image.padding} transition-shadow duration-300 ease-in-out hover:shadow-xl`}>
                    <a href={image.href} target="_blank" rel="noreferrer">
                      <img className="h-full w-full object-cover" src={image.src} alt={image.alt} />
                    </a>
                  </div>
                </div>
              );
            } else return
          })}
        </div>
      </div>
    </div>

  );
};

export default HeaderImages;

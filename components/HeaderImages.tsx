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
    // {
    //   src: "logo_IEEE_Main.png",
    //   alt: "ieee_logo",
    //   href: "https://www.ieee.org",
    //   show: true,
    //   padding: "p-2"
    // },
    // {
    //   src: "logo_IEEE_Banaglaore_Section.png",
    //   alt: "ieee_bangalore_logo",
    //   href: "https://ieeebangalore.org/",
    //   show: true,
    //   padding: "pt-6"
    // },
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
      <div className="center p-auto mt-0 m-14  hidden flex-col md:block ">
        <div className="flex items-center overflow-x-scroll gap-8 mt-6 scrollbar-hide justify-evenly bg-white bg-opacity-30 rounded-3xl mx-20 backdrop-blur-sm ">
          {images.map((image) => {
            if (image.show) {
              return (
                <div className="inline-block  my-6 ">
                  <div className={` mx-0   max-w-xs overflow-hidden  ${image.padding} transition-shadow duration-300 ease-in-out hover:shadow-xl `}>
                    <a href={image.href} target="_blank" rel="noreferrer">
                      <img className="h-fit w-fit object-cover " src={image.src} alt={image.alt} />
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
import React from "react";

const HeaderImages = () => {
  return (
    <div>
      <div className="hidden md:block flex-col center m-auto p-auto">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            <div className="inline-block px-3">
              <div className="w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-none m-5 p-2 ml-0 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <a
                  href="https://www.rvce.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-full h-full object-cover rounded-full"
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
              <div className="w-auto h-auto max-w-xs overflow-hidden rounded-lg  bg-none m-5 pt-11 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <a
                  href="https://ieee-rvce.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-auto h-auto object-cover"
                    src="logo_rvce_ieee.png"
                    alt="rvce_logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImages;
import React from "react";

const HeaderImages = () => {
  return (
    <div>
      <div className="center p-auto m-auto hidden flex-col md:block">
        <div className="scrollbar-hide flex overflow-x-scroll pb-10">
          <div className="ml-10 flex flex-nowrap md:ml-20 lg:ml-40 justify-evenly">
            <div className="inline-block px-3">
              <div className="m-5 ml-0 h-auto w-auto max-w-xs overflow-hidden rounded-lg bg-none p-2 transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <a
                  href="https://www.rvce.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src="RVCE NEW-HEADER.png"
                    alt="rvce_logo"
                  />
                </a>
              </div>
            </div>
            {/* <div className="inline-block px-3">
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
  </div>*/}
            <div className="inline-block px-3">
              <div className="m-5 h-auto w-auto max-w-xs overflow-hidden  rounded-lg bg-none pt-11 transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <a
                  href="https://ieee-rvce.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-auto w-auto object-cover"
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

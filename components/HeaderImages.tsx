import React from "react";

const HeaderImages = () => {
  return (
    <div>
      <div className="center p-auto m-auto hidden flex-col md:block ">
        <div className="flex overflow-x-scroll pb-0 scrollbar-hide">
          <div className="ml-10 flex flex-nowrap justify-evenly md:ml-20 lg:ml-40">
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
              <div className="m-5 h-auto w-auto max-w-xs overflow-hidden rounded-lg bg-none p-2 transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <a href="https://www.ieee.org" target="_blank" rel="noreferrer">
                  <img
                    className="h-auto w-auto object-cover"
                    src="logo_IEEE_Main.png"
                    alt="rvce_logo"
                  />
                </a>
              </div>
            </div> */}
            {/* <div className="inline-block px-3">
              <div className="m-5 h-auto w-auto max-w-xs overflow-hidden  rounded-lg bg-none pt-6 transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <a
                  href="https://ieeebangalore.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-auto w-auto object-cover"
                    src="logo_IEEE_Banaglaore_Section.png"
                    alt="rvce_logo"
                  />
                </a>
              </div>
            </div> */}
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

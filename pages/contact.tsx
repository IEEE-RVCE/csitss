import React from "react";

function contact() {
  return (
    <>
      <div className="mx-auto flex justify-center px-5 py-24 sm:flex-col">
        <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-gray-900 p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-1 text-lg font-medium text-white">
            Contact Us
          </h2>
          <p className="mb-5 leading-relaxed text-white">
            Any Doubts pertaining to the CSITSS
          </p>
          <form action="https://formspree.io/f/xrgrdozk" method="POST">
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              ></textarea>
            </div>
            <button className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
              Send
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-400 text-opacity-90">
            Your email will be not shared with anyone.
          </p>
        </div>
      </div>
    </>
  );
}

export default contact;

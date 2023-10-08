import React from "react";
import { PhoneIcon } from "@heroicons/react/solid";
function contact() {
  return (
    <>
      <div className="container my-4 mx-auto bg-gray-100 p-4">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1485770958101-9dd7e4ea6d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              alt="contact"
              className="h-auto w-full rounded-xl"
            />
          </div>
          <div>
            <div className="md:flex md:flex-col md:justify-between">
              <div className="mb-4 p-2 md:mb-0 ">
                <table className="mx-auto w-full border-collapse border border-gray-300 text-sm">
                  <tr>
                    <th className="border border-black px-4 py-2 text-left">
                      Name
                    </th>
                    <th className="border border-black px-4 py-2 text-left">
                      Contact Number
                    </th>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">
                      Dr. Abhilash Krishna D G
                    </td>

                    <td className="flex-row border border-black px-4 py-2">
                      <div className="flex">
                        <PhoneIcon className="mx-2 h-4 w-4" />
                        +91 7989341864
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">
                      Dr. Parth Sarathi Panigrahy
                    </td>
                    <td className="border border-black px-4 py-2">
                      <div className="flex">
                        <PhoneIcon className="mx-2 h-4 w-4" />
                        +91 8847834371
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">
                      Dr. Pandry Narendra Rao
                    </td>
                    <td className="border border-black px-4 py-2">
                      <div className="flex">
                        <PhoneIcon className="mx-2 h-4 w-4" />
                        +91 9885414398
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">
                      Dr. Vandana Jha{" "}
                    </td>
                    <td className="border border-black px-4 py-2">
                      <div className="flex">
                        <PhoneIcon className="mx-2 h-4 w-4" />
                        +91 8969977560
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="mt-4">
                <h3 className="h-full text-center align-middle text-sm md:text-lg">
                  For any queires, please mail us at
                  <br />
                  <a href="mailto:csitss@rvce.edu.in">
                    <span className="font-bold">csitss@rvce.edu.in</span>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;

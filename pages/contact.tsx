import React from 'react'
import { PhoneIcon, MailIcon } from '@heroicons/react/solid'

function Contact() {
  return (
    <>
      <br />
      <div className="container my-8 mx-auto bg-white p-4 md:p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1485770958101-9dd7e4ea6d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              alt="contact"
              className="h-auto w-full rounded-xl shadow-md"
            />
          </div>
          <div>
            <div className="md:flex md:flex-col md:justify-between">
              <div className="mb-4 p-2 md:mb-0 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-blue-200">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Name
                      </th>
                      <th className="border border-gray-300 px-10 py-2 text-left">
                        Contact Number
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">
                        Dr. Sagar B M, HOD Dept. of ISE, RVCE
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className="flex items-center">
                          <PhoneIcon className="mr-2 h-4 w-4 text-blue-500" />
                          <span className="hover:text-blue-500 cursor-pointer">
                            +91 9886332226
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className="flex items-center">
                          <MailIcon className="mr-2 h-4 w-4 text-blue-500" />
                          <span className="hover:text-blue-500 cursor-pointer">
                            sagarbm@rvce.edu.in
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">
                        Dr. M Krishna, HOD Dept. of ME, RVCE
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className="flex items-center">
                          <PhoneIcon className="mr-2 h-4 w-4 text-blue-500" />
                          <span className="hover:text-blue-500 cursor-pointer">
                            +91 9980480001
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className="flex items-center">
                          <MailIcon className="mr-2 h-4 w-4 text-blue-500" />
                          <span className="hover:text-blue-500 cursor-pointer">
                            krishnam@rvce.edu.in
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">
                        Dr. Padmashree T, Associate Professor, Dept. of ISE, RVCE
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className="flex items-center">
                          <PhoneIcon className="mr-2 h-4 w-4 text-blue-500" />
                          <span className="hover:text-blue-500 cursor-pointer">
                            +91 9632076605
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className="flex items-center">
                          <MailIcon className="mr-2 h-4 w-4 text-blue-500" />
                          <span className="hover:text-blue-500 cursor-pointer">
                            padmashreet@rvce.edu.in
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">
                        Dr. Shilpa D R, Associate Professor, Dept. of ECE, RVCE
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className="flex items-center">
                          <PhoneIcon className="mr-2 h-4 w-4 text-blue-500" />
                          <span className="hover:text-blue-500 cursor-pointer">
                            +91 9481427157
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className="flex items-center">
                          <MailIcon className="mr-2 h-4 w-4 text-blue-500" />
                          <span className="hover:text-blue-500 cursor-pointer">
                            shilpadr@rvce.edu.in
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">
                        Dr. Vishnumurthy K A, Assistant Professor, Dept. of CHY, RVCE
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className="flex items-center">
                          <PhoneIcon className="mr-2 h-4 w-4 text-blue-500" />
                          <span className="hover:text-blue-500 cursor-pointer">
                            +91 9741211557
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className="flex items-center">
                          <MailIcon className="mr-2 h-4 w-4 text-blue-500" />
                          <span className="hover:text-blue-500 cursor-pointer">
                            vishnumurthyka@rvce.edu.in
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <h3 className="text-center text-sm md:text-lg">
                  For any queries, please mail us at
                  <br />
                  <a href="mailto:csitss@rvce.edu.in" className="font-bold text-blue-600 hover:underline">
                    csitss2024@rvce.edu.in
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

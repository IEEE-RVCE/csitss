import React from 'react';
import { PhoneIcon, MailIcon } from '@heroicons/react/solid';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-0">
      <div className="container mx-auto bg-white p-6 md:p-10 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1485770958101-9dd7e4ea6d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              alt="contact"
              className="h-auto w-full rounded-xl shadow-md"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm md:text-base rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Contact Number</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">Dr. Sagar B M, HOD Dept. of ISE, RVCE</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center whitespace-nowrap">
                        <PhoneIcon className="mr-2 h-5 w-5 text-blue-500" />
                        <span className="hover:text-blue-500 cursor-pointer">+91 9886332226</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center">
                        <MailIcon className="mr-2 h-5 w-5 text-blue-500" />
                        <span className="hover:text-blue-500 cursor-pointer">sagarbm@rvce.edu.in</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">Dr. M Krishna, HOD Dept. of ME, RVCE</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center whitespace-nowrap">
                        <PhoneIcon className="mr-2 h-5 w-5 text-blue-500" />
                        <span className="hover:text-blue-500 cursor-pointer">+91 9980480001</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center">
                        <MailIcon className="mr-2 h-5 w-5 text-blue-500" />
                        <span className="hover:text-blue-500 cursor-pointer">krishnam@rvce.edu.in</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">Dr. Padmashree T, Associate Professor, Dept. of ISE, RVCE</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center whitespace-nowrap">
                        <PhoneIcon className="mr-2 h-5 w-5 text-blue-500" />
                        <span className="hover:text-blue-500 cursor-pointer">+91 9632076605</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center">
                        <MailIcon className="mr-2 h-5 w-5 text-blue-500" />
                        <span className="hover:text-blue-500 cursor-pointer">padmashreet@rvce.edu.in</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">Dr. Shilpa D R, Associate Professor, Dept. of ECE, RVCE</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center whitespace-nowrap">
                        <PhoneIcon className="mr-2 h-5 w-5 text-blue-500" />
                        <span className="hover:text-blue-500 cursor-pointer">+91 9481427157</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center">
                        <MailIcon className="mr-2 h-5 w-5 text-blue-500" />
                        <span className="hover:text-blue-500 cursor-pointer">shilpadr@rvce.edu.in</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">Dr. Vishnumurthy K A, Assistant Professor, Dept. of CHY, RVCE</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center whitespace-nowrap">
                        <PhoneIcon className="mr-2 h-5 w-5 text-blue-500" />
                        <span className="hover:text-blue-500 cursor-pointer">+91 9741211557</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center">
                        <MailIcon className="mr-2 h-5 w-5 text-blue-500" />
                        <span className="hover:text-blue-500 cursor-pointer">vishnumurthyka@rvce.edu.in</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-base md:text-lg">
                For any queries, please mail us at <br />
                <a
                  href="mailto:csitss@rvce.edu.in"
                  className="font-bold text-blue-600 hover:underline"
                >
                  csitss2024@rvce.edu.in
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

//import {   Tabs } from '@mantine/core'
// import { List,Center } from '@mantine/core'

import React from 'react'


function Awards() {
  return (
    <div className="mt-10">
     
          <aside className="bg-gray-100 p-6 sm:p-8 lg:p-12">
            <div className="mx-auto">
              <p className="text-center text-3xl font-bold sm:text-5xl">
                Awards{' '}
              </p>
              <p className="text-justify text-2xl font-medium text-gray-700 my-4">
    
                </p>
              <p className="text-justify text-xl font-medium text-gray-500">
            
The below awards will be conferred by CSITSS-2024:
<br />i. Best Ph.D Thesis
<br />ii. Best Faculty and Student Paper 
<br />
<br />
Ph.D. scholars, who have been awarded their Ph.D. degree in the conference themes specified from 
recognized universities during the period June 1, 2023 to June 1, 2024, are eligible to apply for 
CSITSS 2024 Best Ph.D. Thesis Award. Ph.D. Thesis (in pdf format) and degree certificate can be 
submitted to the <b>Email ID: csitss2024@rvce.edu.in.</b> Application fees: Rs.1000/-.
                <br />
             
              </p>

              <div className="mt-8 sm:flex sm:items-center sm:justify-center">
                <a
                  href="https://cmt3.research.microsoft.com/CSITSS2024"
                  className="block rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow-xl hover:bg-blue-600"
                  target="_blank"
                >
                  Submit Your Paper
                </a>
                </div>
                <div className="mt-8 sm:flex sm:items-center sm:justify-center">
                <a
                  href="Guidelines to Authors - IEEE.pdf"
                  className="mt-4 block rounded-lg  px-5 py-3 font-medium text-blue-500 hover:text-blue-600 sm:mt-0"
                  download>
                  Download Guidelines for Authors
                </a>
              </div>
            </div>
          </aside>
        
    </div>
  )
}

export default Awards

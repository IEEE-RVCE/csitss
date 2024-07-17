import React from 'react';

function Awards() {
  return (
    <div className="mt-10 bg-light-blue-100 py-10">
      <aside className="bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-12 mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-3xl sm:text-5xl font-bold text-blue-700">
            Awards
          </p>
        </div>
        <p className="text-justify text-xl sm:text-2xl font-medium text-gray-700 my-4">
          The below awards will be conferred by CSITSS-2024:
        </p>
        <p className="text-justify text-base sm:text-xl font-medium text-gray-600 my-4">
          <i>i.</i> Best Ph.D Thesis<br />
          <i>ii.</i> Best Faculty and Student Paper 
        </p>
        <p className="text-justify text-base sm:text-xl font-medium text-gray-600 my-4">
          Ph.D. scholars, who have been awarded their Ph.D. degree in the conference themes specified, from 
          recognized universities during the period June 1, 2023 to June 1, 2024, are eligible to apply for 
          CSITSS 2024 Best Ph.D. Thesis Award. Ph.D. Thesis (in pdf format) and degree certificate can be 
          submitted to the <b>Email ID: csitss2024@rvce.edu.in.</b> Application fees: Rs.1000/-.
        </p>
      </aside>
    </div>
  );
}

export default Awards;

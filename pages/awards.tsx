function Awards() {
  return (
    <div className="bg-light-blue-100 mt-10 py-10">
      <aside className="mx-auto max-w-4xl rounded-lg bg-white p-4 shadow-lg sm:p-6 lg:p-8">
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-700 sm:text-3xl lg:text-5xl">
            Awards
          </p>
        </div>
        <p className="my-4 text-justify text-lg font-medium text-gray-700 sm:text-xl lg:text-2xl">
          The below awards will be conferred by CSITSS-2025:
        </p>
        <p className="my-4 text-justify text-base font-medium text-gray-600 sm:text-lg lg:text-xl">
          <i>i.</i> Best Ph.D Thesis
          <br />
          <i>ii.</i> Best Faculty and Student Paper
        </p>{' '}
        <p className="my-4 text-justify text-base font-medium text-gray-600 sm:text-lg lg:text-xl">
          Ph.D. scholars, who have been awarded their Ph.D. degree (From June
          2024 to July 2025) in the conference themes specified, from recognized
          universities are eligible to apply for CSITSS 2025 Best Ph.D. Thesis
          Award. Ph.D. Thesis (in pdf format) and degree certificate can be
          submitted to the{' '}
          <a
            href="mailto:csitss2025@rvce.edu.in?subject=CSITSS 2025 Best Ph.D. Thesis Award Application"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm sm:text-base cursor-pointer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            csitss2025@rvce.edu.in
          </a>
          . Application fees: Rs.1000/-. While registering for{' '}
          <b>Best Thesis award</b>, enter the paper ID as 9999. Last date for
          submission 22nd October 2025.
        </p>
        {/* <div className="mt-6">
          <div className="mt-4 text-center">
            <a
            // askdjasjdkasj jhasdh asdjhjhasjhdsa asjdhjasdh asdjhh    WHat athe are the thing what wesay that wih   asjh
              href="PhD-Results.pdf"
              download
              className="text-lg font-medium text-blue-700 hover:underline sm:text-xl lg:text-2xl"
            >
              Download PhD-Results
            </a>
          </div>
        </div> */}
      </aside>
    </div>
  )
}

export default Awards

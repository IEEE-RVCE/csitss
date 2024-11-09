// components/ThankYouPopup.tsx
import { FC } from 'react'

interface ThankYouPopupProps {
  isOpen: boolean
  onClose: () => void
}

const ThankYouPopup: FC<ThankYouPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 transition-opacity duration-300 ease-in-out">
      <div className="relative w-full max-w-lg scale-105 transform rounded-xl bg-blue-50 p-8 shadow-2xl transition-all duration-500 ease-out">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-gradient mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-3xl font-bold text-transparent">
          Thank You
        </h2>

        <p className="text-center text-lg font-semibold text-gray-800">
          Dear Authors, Reviewers, Attendees, and Session Chairs,
        </p>

        <p className="mt-4 leading-relaxed text-gray-700">
          We are delighted to announce the successful conclusion of the{' '}
          <span className="font-semibold text-blue-600">
            8th IEEE International Conference on Computational Systems and
            Information Technology for Sustainable Solutions
          </span>{' '}
          on{' '}
          <span className="font-semibold text-purple-600">
            November 9, 2024
          </span>
          .
        </p>

        <p className="mt-4 leading-relaxed text-gray-700">
          Thank you all for your active participation and invaluable
          contributions. E-certificates will be sent to your registered email
          addresses shortly.
        </p>

        <p className="mt-6 text-lg font-semibold text-gray-800">
          Warm regards,
        </p>

        <p className="mt-2 leading-relaxed text-gray-700">
          General Chair
          <br />
          <span className="font-semibold text-blue-600">Dr. B M Sagar</span>,
          Professor and Head, Dept of Information Science and Engineering, RV
          College of Engineering
          <br />
          <span className="font-semibold text-purple-600">Dr. M Krishna</span>,
          Professor and Head, Dept of Mechanical Engineering, RV College of
          Engineering
        </p>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-md bg-gradient-to-r from-blue-500 to-purple-500 py-3 font-semibold text-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ThankYouPopup

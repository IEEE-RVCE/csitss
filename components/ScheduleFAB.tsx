import React from 'react'
import { motion } from 'framer-motion'

interface ScheduleFABProps {
  onClick: () => void
}

const ScheduleFAB: React.FC<ScheduleFABProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed top-24 right-6 z-50 flex items-center gap-3 bg-white text-gray-900 px-5 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-blue-600 group"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Text */}
      <span className="font-semibold text-sm">
        Program Schedule
      </span>
      {/* Icon */}
      <svg
        className="w-5 h-5 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      
    </motion.button>
  )
}

export default ScheduleFAB
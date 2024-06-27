'use client'

import { useRouter } from 'next/router'

export default function Card({ committeeName, to }: { committeeName: string, to: string }) {
  const router = useRouter()

  return (
    <div className="m-5 cursor-pointer transition-transform transform hover:scale-105" onClick={() => router.push(to)}>
      <a className="block p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-blue-100">
        <h5 className="md:text-lg text-sm text-gray-700 font-semibold text-center">{committeeName}</h5>
      </a>
    </div>
  )
}

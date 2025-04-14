'use client'
import { useRouter } from 'next/router'

export default function Card({
  committeeName,
  to,
}: {
  committeeName: string
  to: string
}) {
  const router = useRouter()

  return (
    <div
      className="m-5 cursor-pointer transition-transform transform hover:scale-105"
      onClick={() => router.push(to)}
    >
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-blue-100">
        <div className="text-lg text-gray-700 font-semibold text-center">
          {committeeName}
        </div>
      </div>
    </div>
  )
}

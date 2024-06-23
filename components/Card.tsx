'use client'

import { useRouter } from 'next/router'

export default function Card({ committeeName, to }: { committeeName: string, to: string }) {
    const router = useRouter();
    return <div className="m-5 cursor-pointer" onClick={() => router.push(to)}>
        <a className="block p-7 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 shadow-lg justify-center items-center">
            <h5 className="md:text-lg text-sm text-gray-700 flex justify-center items-center">{ committeeName }</h5>
        </a>
    </div>
}
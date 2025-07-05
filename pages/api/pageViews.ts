import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from 'redis'

const redis = createClient({
  url: process.env.REDIS_URL,
})

redis.on('error', (err) => console.error('Redis Client Error', err))
await redis.connect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ count: number } | { error: string }>
) {
  try {
    // Use Next.js built-in cookie parsing
    const hasViewed = req.cookies.page_viewed === 'true'

    if (req.method === 'POST') {
      let count: number

      if (hasViewed) {
        const current = await redis.get('page_view_count')
        count = Number(current)
      } else {
        count = await redis.incr('page_view_count')

        // Set cookie using Next.js method
        res.setHeader(
          'Set-Cookie',
          `page_viewed=true; Max-Age=86400; Path=/; SameSite=lax`
        )
      }

      return res.status(200).json({ count })
    }

    // if (req.method === 'GET') {
    //   const current = await redis.get('page_view_count')
    //   return res.status(200).json({ count: Number(current) })
    // }

    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  } catch (error) {
    console.error('Redis error:', error)
    res.status(503).json({ error: 'Service unavailable' })
  }
}

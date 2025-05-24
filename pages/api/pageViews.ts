import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

// This API route is now a proxy to countapi.xyz for page view counting on Vercel
// spell-checker: disable
// spell-checker: disable-line
const NAMESPACE = 'csitss' // Change to a unique string for your site
const KEY = 'homepage' // Change to a unique string for your page
const baseUrl = `https://api.counterapi.dev/v1`

interface PageViewCookies {
  page_viewed?: string
}

interface PageViewResponse {
  count: number
}

interface ErrorResponse {
  error: string
}

export default async function handler(
  req: NextApiRequest & { cookies: PageViewCookies },
  res: NextApiResponse<PageViewResponse | ErrorResponse>
): Promise<void> {
  try {
    if (req.method === 'POST') {
      // Increment and return the new count
      const response = await axios.get(`${baseUrl}/${NAMESPACE}/${KEY}/up`)
      const data: PageViewResponse = response.data
      // Set a cookie to prevent multiple increments in one day
      res.setHeader('Set-Cookie', 'page_viewed=true; Max-Age=86400; Path=/')
      return res.status(200).json({ count: data.count })
    } else if (req.method === 'GET') {
      const response = await axios.get(`${baseUrl}/${NAMESPACE}/${KEY}`)
      const data: PageViewResponse = response.data
      return res.status(200).json({ count: data.count })
    } else {
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error) {
    console.error('Page view counter error:', error)
    return res.status(503).json({ error: 'Page view service unavailable' })
  }
}

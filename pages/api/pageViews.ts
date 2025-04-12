import fs from 'fs'
import path from 'path'

const filePath = path.resolve('./pageViews.json')

export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { cookies } = req
    const hasVisited = cookies.page_viewed

    if (hasVisited) {
      // User has already been counted today
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to read page views' })
        }
        const count = JSON.parse(data).count || 0
        return res.status(200).json({ count })
      })
    } else {
      // Increment the page view count
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to read page views' })
        }
        const currentCount = JSON.parse(data).count || 0
        const updatedCount = currentCount + 1

        fs.writeFile(
          filePath,
          JSON.stringify({ count: updatedCount }),
          (err) => {
            if (err) {
              return res
                .status(500)
                .json({ error: 'Failed to update page views' })
            }

            // Set a cookie to prevent multiple increments in one day
            res.setHeader(
              'Set-Cookie',
              'page_viewed=true; Max-Age=86400; Path=/'
            )
            return res.status(200).json({ count: updatedCount })
          }
        )
      })
    }
  } else if (req.method === 'GET') {
    // Read the current page view count
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to read page views' })
      }
      const count = JSON.parse(data).count || 0
      return res.status(200).json({ count })
    })
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

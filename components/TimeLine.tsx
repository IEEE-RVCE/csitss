import { Text, Button, Timeline } from '@mantine/core'
import { AnnotationIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

const data = [
  {
    label: 'Submission of Full-length Manuscript (opens from)',
    date: '5th July 2024',
  },
  {
    label: 'Last date to submit Full-length Manuscript',
    date: '14th August 2024',
  },
  {
    label: 'Notification of Acceptance',
    oldDate: '28th August 2024',
    newDate: '7th September 2024',
  },
  {
    label: 'Early Bird Registration',
    date: 'Before 18th September 2024',
  },
  {
    label: 'Last Date for Registration',
    oldDate: '3rd October 2024',
  },
  {
    label: 'Submission of Camera-ready Manuscript and Copyright Form',
    date: '10th October 2024',
  },
  {
    label: 'Pre-Conference Tutorial',
    date: '7th November 2024',
    venue: 'ISE Department',
    time: '8:30 AM - 9:30 AM',
    subEvents: [
      {
        track: 'Track 1: AI for All',
        venue: 'MV Seminar Hall (Dept. of Civil Engg., 3rd Floor)',
        events: [
          {
            time: '9:30 AM - 11:00 AM',
            speaker: 'Mr. Raj Pagaku',
            topic: 'Inclusive AI: Shaping the Future for Everyone',
          },
          {
            time: '11:00 AM - 11:30 AM',
            speaker: 'Tea Break',
          },
          {
            time: '11:30 AM - 1:00 PM',
            speaker: 'Dr. Nagaraju G',
            topic: 'AI in Health Care',
          },
        ],
      },
      {
        track: 'Track 2: Digital Transformation',
        venue:
          'ET Seminar Hall (Dept. of Electronics & Telecom. Engg., Ground Floor)',
        events: [
          {
            time: '9:30 AM - 11:00 AM',
            speaker: 'Dr. K B Shyam Prasad',
            topic: 'Accelerate Innovation through Digital Tools',
          },
          {
            time: '11:00 AM - 11:30 AM',
            speaker: 'Tea Break',
          },
          {
            time: '11:30 AM - 1:00 PM',
            speaker: 'Mr. Abhi Anand',
            topic: 'Sustainable AI Applications',
          },
        ],
      },
    ],
  },
  {
    label: 'Conference Dates',
    date: '8th and 9th November 2024',
  },
]

export default function CustomTimeLine() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownload = () => {
    const fileUrl = '/PRE_CONFERENCE.pdf' // Path to your file
    const element = document.createElement('a')
    element.href = fileUrl
    element.download = 'PreConferenceSchedule.pdf' // Specify file name
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className={`timeline-container ${isVisible ? 'fade-in' : ''}`}>
      <h1 className="timeline-title">Important Dates</h1>
      <Timeline active={0} bulletSize={28} lineWidth={4} color="teal">
        {data.map((item, index) => (
          <Timeline.Item
            key={index}
            bullet={<AnnotationIcon className="timeline-icon" />}
            title={<span className="timeline-item-title">{item.label}</span>}
            className="timeline-item"
          >
            <Text size="lg" mt={2} className="timeline-item-text">
              {item.oldDate ? (
                <>
                  <span className="text-gray-500 line-through">
                    {item.oldDate}
                  </span>{' '}
                  <span className="font-bold text-gray-900">
                    {item.newDate}
                  </span>
                </>
              ) : (
                item.date
              )}
            </Text>
            {item.venue && (
              <Text size="md" color="gray">
                Venue: {item.venue} | Time: {item.time}
              </Text>
            )}
            {/* Sub-events for Pre-Conference Tutorial */}
            {item.subEvents && (
              <div className="sub-events mt-4">
                {item.subEvents.map((subEvent, subIndex) => (
                  <div key={subIndex} className="sub-event mt-4">
                    <Text size="sm" color="gray" weight={600}>
                      {subEvent.track} - {subEvent.venue}
                    </Text>
                    {subEvent.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="event mt-2">
                        <Text size="sm" color="gray">
                          {event.time}
                        </Text>
                        <Text size="sm" color="gray" weight={600}>
                          {event.speaker}
                        </Text>
                        {event.topic && (
                          <Text size="sm" color="gray" italic>
                            Topic: {event.topic}
                          </Text>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </Timeline.Item>
        ))}
      </Timeline>
      {/* Download Button */}
      <div className="download-button mt-4">
        <Button onClick={handleDownload} variant="outline" color="teal">
          Download Pre-Conference Schedule
        </Button>
      </div>
    </div>
  )
}

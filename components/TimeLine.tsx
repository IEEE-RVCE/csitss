import { Text, Timeline } from '@mantine/core'
import { AnnotationIcon } from '@heroicons/react/solid'

export default function CustomTimeLine() {
  const data = [
    {
      label: 'Submission of Full-length Manuscript (opens from)',
      date: '5th July 2024',
    },
    {
      label: 'Last date to submit Full-length Manuscript',
      date: '30th July 2024',
    },
    {
      label: 'Notification of Acceptance',
      date: '28th August 2024',
    },
    {
      label: 'Early Bird Registration',
      date: 'Before 18th September 2024',
    },
    {
      label: 'Submission of Camera-ready Manuscript and Copyright Form',
      date: '10th October 2024',
    },
    {
      label: 'Last Date for Registration',
      date: '25th October 2024',
    },
    {
      label: 'Pre-Conference Tutorial',
      date: '7th November 2024',
    },
    {
      label: 'Conference Dates',
      date: '8th and 9th November 2024',
    },
  ]

  return (
    <div>
      <h1 className="my-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent underline">
        Important Dates
      </h1>
      <Timeline active={0} bulletSize={24} lineWidth={4} color="teal">
        {data.map((item, index) => (
          <Timeline.Item
            key={index}
            bullet={<AnnotationIcon className="h-6 w-6 text-teal-500" />}
            title={<span className="font-semibold text-lg">{item.label}</span>}
            className="my-2"
          >
            <Text size="md" mt={4} className="text-gray-700">
              {item.date}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  )
}

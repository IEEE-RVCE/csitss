import { Text, Timeline } from "@mantine/core";

import { AnnotationIcon } from "@heroicons/react/solid";

export default function CustomTimeLine() {

  const data = [
    {
      label: "Submission of Full-length Manuscript(opens from)",
      date: "28th June 2023",
    },
    {
      label: "Last date to submit Full-length Manuscript",
      date: "28th August 2023",
    },
    {
      label: "Notification of Acceptance",
      date: "12th September 2023",
    },
    {
      label: "Early Bird Registration",
      date: "18th September 2023",
    },
    {
      label: "Submission of Camera-ready Manuscript and Copyright Form",
      date: "24th September 2023",
    },
    {
      label: "Last Date for Registration",
      date: "6th October 2023",
    },
    {
      label: "Pre-Conference Tutorial",
      date: "2nd November 2023",
    },
    {
      label: "Conference Dates",
      date: "2nd-4th November 2023",
    },
  ];

  return (
    <>
      <h1 className="my-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent underline">
        Important Dates
      </h1>
      <Timeline active={0} bulletSize={24} lineWidth={3}>
        {data.map((item, index) => (
          <Timeline.Item
            key={index}
            bullet={<AnnotationIcon />}
            title={item.label}
          >
            <Text size="md" mt={4}>
              {item.date}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
}

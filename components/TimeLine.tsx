import { Text, Timeline } from '@mantine/core';
import { AnnotationIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
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
    newDate:'7th September 2024',
  },
  {
    label: 'Early Bird Registration',
    date:'Before 18th September 2024',
  },
  {
    label: 'Submission of Camera-ready Manuscript and Copyright Form',
    date:'7th October 2024',
  },
  {
    label: 'Last Date for Registration',
    date: '15th October 2024',
    
  },
  {
    label: 'Pre-Conference Tutorial',
    date: '7th November 2024',
  },
  {
    label: 'Conference Dates',
    date: '8th and 9th November 2024',
  },
];

export default function CustomTimeLine() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`timeline-container ${isVisible ? 'fade-in' : ''}`}>
      <h1 className="timeline-title">
        Important Dates
      </h1>
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
                  <span className="line-through text-gray-500">{item.oldDate}</span>
                  {' '}
                  <span className="font-bold text-gray-900">{item.newDate}</span>
                </>
              ) : (
                item.date
              )}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}

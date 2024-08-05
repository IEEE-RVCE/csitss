import React, { useEffect, useState } from 'react';

// Define the type for the timeLeft state
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {

    // Get current date in IST
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
    const nowIST = new Date(now.getTime() + istOffset);
    
    // Set the target date in IST
    const targetDate = new Date('2024-11-08T00:00:00+05:30'); // Midnight of the target date in IST

    const difference = +targetDate - +nowIST;

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [showCSITSS, setShowCSITSS] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    if (showCSITSS) {
      setTimeout(() => setShowCSITSS(false), 2000); // Show "CSITSS" for 2 seconds
    }

    return () => clearTimeout(timer);
  }, [timeLeft, showCSITSS]);

  return (
    <div className="countdown-timer">
      {showCSITSS ? (
        <div className="csitss">
          {'CSITSS'.split('').map((char, index) => (
            <div key={index} className="char">
              {char}
            </div>
          ))}
        </div>
      ) : (
        <div className="time-circle">
          <div className="time">
            <span className="time-number">{timeLeft.days}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time">
            <span className="time-number">{timeLeft.hours}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time">
            <span className="time-number">{timeLeft.minutes}</span>
            <span className="time-label">Minutes</span>
          </div>
          <div className="time">
            <span className="time-number">{timeLeft.seconds}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>
      )}
      <style jsx>{`
        .countdown-timer {
          position: fixed;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          transition: opacity 1s;
        }

        .csitss {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 3rem;
          font-weight: bold;
          color: #1e40af;
          animation: fadeOut 2s forwards;
        }

        .char {
          margin: 2px 0;
        }

        .time-circle {
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #1e40af;
          border-radius: 10px;
          padding: 10px;
          background-color: rgba(255, 255, 255, 0.8);
        }

        .time {
          text-align: center;
          margin: 5px 0;
        }

        .time-number {
          display: block;
          font-size: 2rem;
          font-weight: bold;
          color: #1e40af;
        }

        .time-label {
          display: block;
          font-size: 1rem;
          color: #1e40af;
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .countdown-timer {
            top: auto;
            bottom: 0;
            right: 0;
            width: 100%;
            transform: translateY(0);
            padding: 5px;
          }

          .csitss {
            flex-direction: row;
            font-size: 1.5rem;
          }

          .char {
            margin: 0 2px;
          }

          .time-circle {
            flex-direction: row;
            justify-content: space-around;
            border: 2px solid #1e40af;
            padding: 5px;
            width: 100%;
          }

          .time-number {
            font-size: 1.5rem;
          }

          .time-label {
            font-size: 0.8rem;
          }

          .time {
            margin: 0 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default CountdownTimer;

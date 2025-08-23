"use client";

import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-08-30T09:00:00') - +new Date();
    let timeLeft = {
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

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set initial time to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const timerComponents = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 md:gap-x-8 text-center text-primary-foreground">
      {timerComponents.map((component, index) => (
        <div key={component.label} className="flex items-center">
          <div className="flex flex-col items-center">
            <span className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider">
              {String(component.value).padStart(2, '0')}
            </span>
            <span className="text-sm md:text-base font-headline uppercase tracking-widest">{component.label}</span>
          </div>
          {index < timerComponents.length - 1 && (
             <span className={`font-display text-5xl md:text-7xl lg:text-8xl ml-4 md:ml-8 ${index === 1 ? 'hidden md:inline' : ''}`}>:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

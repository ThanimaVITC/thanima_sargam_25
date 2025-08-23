"use client";

import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [targetDate] = useState(new Date('2024-08-30T09:00:00'));
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let newTimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };
    
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [isMounted, targetDate]);
  
  const timerComponents = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (!isMounted) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 md:gap-x-8 text-center text-primary-foreground max-w-sm mx-auto md:max-w-none">
        {timerComponents.map((component, index) => (
          <div key={component.label} className="flex items-center">
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider">
                00
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
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 md:gap-x-8 text-center text-primary-foreground max-w-sm mx-auto md:max-w-none">
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

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

  const renderTimerComponent = (component: {label: string, value: number}, index: number) => (
    <div key={component.label} className="flex items-center">
      <div className="flex flex-col items-center">
        <span className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider">
          {isMounted ? String(component.value).padStart(2, '0') : '00'}
        </span>
        <span className="text-sm md:text-base font-headline uppercase tracking-widest">{component.label}</span>
      </div>
      {index % 2 === 0 && (
        <span className="font-display text-5xl md:text-7xl lg:text-8xl ml-4 md:ml-8">:</span>
      )}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-x-8 text-center text-primary-foreground max-w-md mx-auto md:max-w-none">
      <div className="flex justify-center items-center gap-x-4 md:gap-x-8">
        {renderTimerComponent(timerComponents[0], 0)}
        {renderTimerComponent(timerComponents[1], 1)}
      </div>
      <div className="flex justify-center items-center gap-x-4 md:gap-x-8">
        {renderTimerComponent(timerComponents[2], 2)}
        {renderTimerComponent(timerComponents[3], 3)}
      </div>
    </div>
  );
};

export default CountdownTimer;

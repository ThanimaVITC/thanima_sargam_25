"use client";

import { useState, useEffect } from 'react';

const targetDate = new Date("2025-08-30T09:00:00"); 

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
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
  }, []);

  const timerComponents = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];
  
  const TimeValue = ({value, isSeconds}: {value: number, isSeconds?: boolean}) => (
      <span key={isSeconds ? value: undefined} className={`font-display text-5xl md:text-7xl lg:text-8xl tracking-wider ${isSeconds ? 'animate-in fade-in-0 slide-in-from-top-4 duration-500' : ''}`}>
          {String(value).padStart(2, "0")}
      </span>
  )

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-x-8 text-center text-primary-foreground max-w-md mx-auto md:max-w-none">
      <div className="flex justify-center items-center gap-x-4 md:gap-x-8">
        <div className="flex flex-col items-center">
            <TimeValue value={timeLeft.days} />
            <span className="text-sm md:text-base font-headline uppercase tracking-widest">Days</span>
        </div>
        <span className="font-display text-5xl md:text-7xl lg:text-8xl ml-4 md:ml-8 hidden md:inline">:</span>
        <div className="flex flex-col items-center">
             <TimeValue value={timeLeft.hours} />
            <span className="text-sm md:text-base font-headline uppercase tracking-widest">Hours</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-4 md:gap-x-8">
        <div className="flex flex-col items-center">
             <TimeValue value={timeLeft.minutes} />
            <span className="text-sm md:text-base font-headline uppercase tracking-widest">Minutes</span>
        </div>
         <span className="font-display text-5xl md:text-7xl lg:text-8xl ml-4 md:ml-8 hidden md:inline">:</span>
        <div className="flex flex-col items-center">
             <TimeValue value={timeLeft.seconds} isSeconds />
            <span className="text-sm md:text-base font-headline uppercase tracking-widest">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

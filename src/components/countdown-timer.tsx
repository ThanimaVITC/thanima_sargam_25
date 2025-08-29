"use client";

import { useState, useEffect } from 'react';

const targetDate = new Date("2025-08-30T08:30:00"); 

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
  
  const TimeValue = ({value, isSeconds}: {value: number, isSeconds?: boolean}) => (
      <span key={isSeconds ? value: undefined} className={`font-headline text-5xl md:text-7xl lg:text-8xl tracking-wider ${isSeconds ? 'animate-in fade-in-0 slide-in-from-top-4 duration-500' : ''}`}>
          {String(value).padStart(2, "0")}
      </span>
  );

  const TimerBlock = ({ value, label, isSeconds }: { value: number; label: string; isSeconds?: boolean }) => (
    <div className="flex flex-col items-center">
      <TimeValue value={value} isSeconds={isSeconds} />
      <span className="text-sm md:text-base font-body uppercase tracking-widest">{label}</span>
    </div>
  );

  const Colon = () => <span className="font-headline text-5xl md:text-7xl lg:text-8xl hidden md:inline">:</span>;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-x-4 lg:gap-x-8 text-center text-primary-foreground max-w-md mx-auto md:max-w-none">
      {/* Mobile Layout: 2x2 grid */}
      <div className="flex md:hidden justify-center items-center gap-x-8">
        <TimerBlock value={timeLeft.days} label="Days" />
        <TimerBlock value={timeLeft.hours} label="Hours" />
      </div>
      <div className="flex md:hidden justify-center items-center gap-x-8">
        <TimerBlock value={timeLeft.minutes} label="Minutes" />
        <TimerBlock value={timeLeft.seconds} label="Seconds" isSeconds />
      </div>

      {/* Desktop Layout: 1x4 grid */}
      <div className="hidden md:flex justify-center items-center gap-x-4 lg:gap-x-8">
        <TimerBlock value={timeLeft.days} label="Days" />
        <Colon />
        <TimerBlock value={timeLeft.hours} label="Hours" />
        <Colon />
        <TimerBlock value={timeLeft.minutes} label="Minutes" />
        <Colon />
        <TimerBlock value={timeLeft.seconds} label="Seconds" isSeconds />
      </div>
    </div>
  );
};

export default CountdownTimer;

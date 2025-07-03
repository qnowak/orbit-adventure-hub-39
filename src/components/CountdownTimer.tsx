import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: Date;
  initialHours?: number;
}

const CountdownTimer = ({ targetDate, initialHours = 72 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0, 
    seconds: 0
  });

  useEffect(() => {
    // Calculate target time - either provided date or hours from now
    const target = targetDate || new Date(Date.now() + initialHours * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      if (distance < 0) {
        // Timer expired
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, initialHours]);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  const isExpired = timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isExpired) {
    return (
      <div className="text-2xl font-bold text-red-400 animate-pulse">
        🚀 MISSION COMPLETE
      </div>
    );
  }

  return (
    <div className="text-2xl font-bold text-white font-mono">
      T minus {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
    </div>
  );
};

export default CountdownTimer;
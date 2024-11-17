import { useEffect, useState } from "react";

interface Props {
  datetime: string;
}

export default function Countdown({datetime}: Props ) {
  const [days, setDays] = useState('0');
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('0');

  useEffect(() => {
    const updateCountdown = () => {
      const date = new Date(datetime);
      const now = new Date();
      const distance = date.getTime() - now.getTime();
      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    };

    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-4 mb-5 inline-block">
        <div className="countdown-item float-start">
          <div className="text-5xl p-2 bg-background rounded-lg leading-[3rem]">{days}</div>
          <div className="uppercase text-sm mt-4">Days</div>
        </div>
        <span className="text-4xl p-3 float-left">:</span>
        <div className="countdown-item float-start">
          <div className="text-5xl p-2 bg-background rounded-lg leading-[3rem]">{hours}</div>
          <div className="uppercase text-sm mt-4">Hours</div>
        </div>
        <span className="text-4xl p-3 float-left">:</span>
        <div className="countdown-item float-start ">
          <div className="text-5xl p-2 bg-background rounded-lg leading-[3rem]">{minutes}</div>
          <div className="uppercase text-sm mt-4">Minutes</div>
        </div>
        <span className="text-4xl p-3 float-left">:</span>
        <div className="countdown-item float-start">
          <div className="text-5xl p-2 bg-background rounded-lg leading-[3rem]">{seconds}</div>
          <div className="uppercase text-sm mt-4">Seconds</div>
        </div>
      </div>
    </div>
  );
}

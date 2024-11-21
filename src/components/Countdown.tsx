import { useEffect, useState } from 'react';
import { getLangFromUrl, useTranslations } from '@i18n/utils';

const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);

interface Props {
  datetime: string;
}

export default function Countdown({ datetime }: Props) {
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
      <div className="mb-5 mt-4 inline-block">
        <div className="countdown-item float-start">
          <div className="digit">{days}</div>
          <div className="unit">{t('countdown.days')}</div>
        </div>
        <span className="separator">:</span>
        <div className="countdown-item float-start">
          <div className="digit">{hours}</div>
          <div className="unit">{t('countdown.hours')}</div>
        </div>
        <span className="separator">:</span>
        <div className="countdown-item float-start">
          <div className="digit">{minutes}</div>
          <div className="unit">{t('countdown.minutes')}</div>
        </div>
        <span className="separator">:</span>
        <div className="countdown-item float-start">
          <div className="digit">{seconds}</div>
          <div className="unit">{t('countdown.seconds')}</div>
        </div>
      </div>
    </div>
  );
}

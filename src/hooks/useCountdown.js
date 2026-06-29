import { useEffect, useState } from 'react';

function getTimeParts(targetISO) {
  const target = new Date(targetISO).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: diff <= 0 };
}

export default function useCountdown(targetISO) {
  const [time, setTime] = useState(() => getTimeParts(targetISO));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeParts(targetISO));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetISO]);

  return time;
}

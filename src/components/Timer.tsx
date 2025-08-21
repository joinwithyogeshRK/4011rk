import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  initialTime: number; // in seconds
  onTimeEnd?: () => void;
}

const Timer = ({ initialTime, onTimeEnd }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onTimeEnd) onTimeEnd();
      return;
    }

    if (isPaused) return;

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, isPaused, onTimeEnd]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    const percentage = (timeLeft / initialTime) * 100;
    if (percentage <= 20) return 'text-error';
    if (percentage <= 50) return 'text-warning';
    return 'text-success';
  };

  return (
    <div className="timer-display flex items-center justify-center">
      <Clock className={`h-5 w-5 mr-2 ${getTimerColor()}`} />
      <span className={getTimerColor()}>{formatTime(timeLeft)}</span>
    </div>
  );
};

export default Timer;

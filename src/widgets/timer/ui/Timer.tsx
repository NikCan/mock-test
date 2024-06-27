import { calculateTimeLeft } from '@/shared/lib';
import { Box, Typography } from '@mui/material';
import { FC, memo, useCallback, useEffect, useState } from 'react';

interface Props {
  /** in seconds */
  duration: number;
  onTimeUp: () => void;
  uniqueKey: string;
}
export const Timer: FC<Props> = memo(({ duration, onTimeUp, uniqueKey }) => {
  const getStartTime = useCallback((): string => {
    let startTime = localStorage.getItem(uniqueKey);
    if (!startTime) {
      startTime = Date.now().toString();
      localStorage.setItem(uniqueKey, startTime);
    }
    return startTime;
  }, [uniqueKey]);

  const startTime = getStartTime();

  const [timeLeft, setTimeLeft] = useState<number>(() =>
    calculateTimeLeft(startTime, duration)
  );

  useEffect(() => {
    const newTimeLeft = calculateTimeLeft(startTime, duration);
    if (newTimeLeft <= 0) {
      onTimeUp();
      setTimeLeft(0);
      return;
    }

    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(startTime, duration);

      if (newTimeLeft <= 0) {
        clearInterval(interval);
        onTimeUp();
        setTimeLeft(0);
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, onTimeUp, startTime]);

  const formattedTime = `${String(Math.floor(timeLeft / 60)).padStart(
    2,
    '0'
  )}:${String(timeLeft % 60).padStart(2, '0')}`;

  return (
    <Box
      sx={{
        border: '1px solid black',
        borderRadius: 1,
        px: 1,
        py: 0.5
      }}
    >
      <Typography>{formattedTime}</Typography>
    </Box>
  );
});
Timer.displayName = 'Timer';

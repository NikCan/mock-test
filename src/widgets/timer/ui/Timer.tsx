import { Box, Stack, Typography } from '@mui/material';
import { FC, memo, useEffect, useState } from 'react';

interface Props {
  /** in seconds */
  duration: number;
  onTimeUp: () => void;
  uniqueKey: string;
}
export const Timer: FC<Props> = memo(({ duration, onTimeUp, uniqueKey }) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  const formattedTime = `${String(Math.floor(timeLeft / 60)).padStart(
    2,
    '0'
  )}:${String(timeLeft % 60).padStart(2, '0')}`;

  useEffect(() => {
    const startTimeKey = `startTime_${uniqueKey}`;
    let startTime = localStorage.getItem(startTimeKey);
    if (!startTime) {
      startTime = Date.now().toString();
      localStorage.setItem(startTimeKey, startTime);
    }

    const interval = setInterval(() => {
      const elapsedTime = Math.floor(
        (Date.now() - parseInt(startTime!, 10)) / 1000
      );
      const newTimeLeft = duration - elapsedTime;

      if (newTimeLeft <= 0) {
        clearInterval(interval);
        onTimeUp();
        setTimeLeft(0);
        localStorage.removeItem(startTimeKey);
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, onTimeUp, uniqueKey]);

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

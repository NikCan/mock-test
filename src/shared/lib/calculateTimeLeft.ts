export const calculateTimeLeft = (
  startTime: string,
  duration: number
): number => {
  const elapsedTime = Math.floor((Date.now() - parseInt(startTime, 10)) / 1000);
  return duration - elapsedTime;
};

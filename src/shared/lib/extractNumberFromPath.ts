export const extractNumberFromPath = (path: string) => {
  const match = path.match(/\/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
};

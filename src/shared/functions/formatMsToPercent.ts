export const formatMsToPercent = (ms: number): number => {
  return Math.floor((ms / 1000 / 120) * 100);
};
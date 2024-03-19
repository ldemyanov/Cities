export const formatMsToPercent = (ms: number, maxValue: number): number => {
  return Math.floor((ms / 1000 / maxValue) * 100);
};
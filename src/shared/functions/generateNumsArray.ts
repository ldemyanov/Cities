export const generateNumsArray = (start: number, end: number): number[] => {
  return [...Array(end - start + 1).keys()].map(x => x + start);
} 
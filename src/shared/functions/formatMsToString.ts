export const formatMsToString = (ms: number): string => {

  const date = new Date(ms);

  const seconds = date.getSeconds();
  const minutes = date.getMinutes();

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}


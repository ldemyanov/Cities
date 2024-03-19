export const getLastSymbolOfCity = (city: string): string => {
  let end = city.length - 1;
  const badEnds = ['ь', 'ъ', 'ы']

  while (end > 0) {
    const symbol = city.toLowerCase().substring(end, end + 1);

    if (!badEnds.includes(symbol)) {
      return symbol.toUpperCase();
    }

    end--;
  }

  return '';
}
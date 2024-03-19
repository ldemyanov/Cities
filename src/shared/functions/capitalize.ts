export const capitalize = (str: string): string => {
  return typeof str === 'string' ? str.replace(/^\w/, c => c.toUpperCase()) : ''
}
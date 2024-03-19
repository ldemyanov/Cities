/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '3': '3px',
      '5': '5px',
    },
    extend: {},
  },
  plugins: [
    import('@tailwindcss/typography')
  ],
}


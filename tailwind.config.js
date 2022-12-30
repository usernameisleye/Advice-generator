/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['"Manrope"', 'sans-serif'],
    },
    colors: {
      'dark-blue': 'hsl(218, 23%, 16%)',
      'grayish-blue': 'hsl(217, 19%, 38%)',
      'dark-grayish-blue': 'hsl(217, 19%, 24%)',
      'white': '#ffffff',
      'light-cyan': 'hsl(193, 38%, 86%)',
      'neon-green': 'hsl(150, 100%, 66%)',
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'earth-blue': '#2A6F97',
        'ocean-blue': '#014F86',
        'sky-blue': '#61A5C2',
        'earth-green': '#52796F',
        'forest-green': '#354F52',
        'desert-amber': '#E9C46A',
        'earth-clay': '#F4A261',
        'earth-red': '#E76F51',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern earthy color palette for geography theme
        'earth-green': '#4D7C0F',
        'earth-blue': '#0369A1',
        'earth-brown': '#78350F',
        'earth-sand': '#F5D0A9',
        'earth-clay': '#B45309',
        'ocean-blue': '#0C4A6E',
        'ocean-teal': '#0F766E',
        'mountain-gray': '#4B5563',
        'forest-green': '#166534',
        'desert-amber': '#D97706',
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(66, 153, 225, 0.5)',
        'inner-glow': 'inset 0 0 15px rgba(66, 153, 225, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

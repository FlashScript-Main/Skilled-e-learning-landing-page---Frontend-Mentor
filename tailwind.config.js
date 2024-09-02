/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans", sans-serif'],
      },
      colors: {
        // Primary
          'primary-dark-blue-gray': '#666ca3',
          'primary-yankees-blue': '#13183f',
          'primary-silver': '#83869a',
          'primary-pink': '#f74780',
          'primary-carnation-pink': '#ffa7c3',

        // Neutral
          'neutral-white': '#ffffff',
      },
      screens: {
        // @media (min-width: ...) {}
          'xs': '475px',  // => @media (min-width: 475px) { ... }
        
        // @media (max-width: ...) {}
          // 'max-screen-xs': {'max': '425px'}, // => @media (max-width: 425px) { ... }
      },
    },
  },
  plugins: [],
}
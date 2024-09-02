/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['"Plus Jakarta Sans", sans-serif'],
      },
      colors: {
        // Primary
          'primary-dark-purple': 'hsl(273, 85%, 13%)',
          'primary-eucaplyptus': 'hsl(150, 100%, 63%)',
          'primary-davys-grey': 'hsl(271, 12%, 34%)',
          'primary-ghost-white': 'hsl(276, 100%, 99%)',

        // Neutral
          'neutral-white': 'hsl(0, 0%, 100%)',
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
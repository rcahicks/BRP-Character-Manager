/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '300px',
      // => @media (min-width: 300px) { ... }

      'md': '700px',
      // => @media (min-width: 700px) { ... }

      'lg': '1000px',
      // => @media (min-width: 1000px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    // colors: {
      
    // },
    extend: {
      colors: {
        "of-black": "#1A180C",
        "of-white": "#FAFAFA",
        // Original: (gradient)
        // #7e68bd
        // #5fa5c5

        // Step 1:
        // #917ace
        // #74b7d6

        // Step 2:
        // #9f8adb
        // #87c8e6
      },
      backgroundImage: {
        "gm-tools": "url('/src/images/gm-tools-bg.png')",
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 0%' },
          '10%': { backgroundPosition: '20% 100%' },
          '20%': { backgroundPosition: '40% 0%' },
          '30%': { backgroundPosition: '60% 100%' },
          '40%': { backgroundPosition: '80% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '60%': { backgroundPosition: '80% 0%' },
          '70%': { backgroundPosition: '60% 100%' },
          '80%': { backgroundPosition: '40% 0%' },
          '90%': { backgroundPosition: '20% 100%' },
          '100%': { backgroundPosition: '0% 0%'},
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 2s ease infinite alternate',
      },
    },
  },
  plugins: [],
}


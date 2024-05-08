/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

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


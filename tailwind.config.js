/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // colors: {
    //   "of-green": "#81B29A",
    //   "of-grain": "#F2CC8F",
    //   "of-blue": "#3D405B",
    //   "of-salmon": "#E07A5F",
    //   "of-eggshell": "#F4F1DE"
    // },
    extend: {
      colors: {
        "of-green": "#81B29A",
        "of-grain": "#F2CC8F",
        "of-blue": "#3D405B",
        "of-salmon": "#E07A5F",
        "of-eggshell": "#F4F1DE"
        // after we finalize colors, remove this from extended and uncoment colors.
      },
    },
  },
  plugins: [],
}


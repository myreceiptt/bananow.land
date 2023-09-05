const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      //  white
      //  neutral-100
      //  neutral-200
        "white-now": "#E2E2E2",
      //  neutral-300
      //  neutral-400
        "light-now": "#C0BFBF",

        "dark-now": "#5C5C5C",
      //  neutral-600
      //  neutral-700
      //  neutral-800
      //  neutral-900
      //  black

      //  gray-50
      //  dark-600

      //  rose-500
        "yellow-now": "#FBB22D",
        "green-now": "#36A749",
      //  rose-100
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        judul: "FontJudul",
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
 
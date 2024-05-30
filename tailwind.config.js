/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero_pattern': "url('/background.png')"
      },
      colors: {
        'body': '#FFFFFF',
        'theme_blue': '#123499'
      },
      fontFamily: {
        plus_jakarta_sans: ["Plus+Jakarta+Sans"]
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('tailwind-scrollbar')],
};

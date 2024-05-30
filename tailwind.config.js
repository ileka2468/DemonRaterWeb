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
        'theme_blue': '#123499',
        'hero_grey': '#737373',
        'nav_link_grey': '#4E5E6C',
        'auth_google_gray': '#828282',
        'auth_faint_gray': '#DDDDDD',
        'auth_dash_text_gray': '#A1A1A1'

      },
      fontFamily: {
        plus_jakarta_sans: ['Plus Jakarta Sans', 'serif'],
        poppins: ['Poppins', 'serif']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('tailwind-scrollbar')],
};

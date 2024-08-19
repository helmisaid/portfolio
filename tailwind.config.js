/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0f766e',
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        stock: [defaultTheme.fontFamily.sans],
      },
      screens: {
        '2xl': '1320px',
      },
    },
    darkMode: "class",
    plugins: [nextui()],
  },
  plugins: [],
};

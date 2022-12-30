/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "blue": "#401FA5",
      "white": "#FFFFFF",
      "orange": "#FE481C",
      "black": "#000000",
      "gray": "#dcdcdc",
      "bck_color": "#D9D9D9",
    },
    fontSize: {
      "xs": '11px',
      "sm": '13px',
      "base": "16px",
      "lg": "19px",
      "xl": '24px',
      "2xl": '28px',
      "3xl": "33px",
      "h3": "40px",
      "h2": "48px",
      "h1": "57px"
    },
    extend: {},
  },
  plugins: [],
}
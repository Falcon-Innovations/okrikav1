/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      dark:"#2c2c2c",
      gray:"545454",
      okrikaprimary:{
        50:"#f1edeb",
        100:"#d3c8c1",
        200:"#bdaea3",
        300:"#9f897a",
        400:"#8d7260",
        500:"#704f38",
        600:"#664833",
        700:"#503828",
        800:"#3e2b1f",
        900:"#2f2118"
      },
      grayOkrika:{
        50:"#e9e9ea",
        100:"#bababd",
        200:"#98989d",
        300:"#696a70",
        400:"#4c4d54",
        500:"#1f2029",
        600:"#1c1d25",
        700:"#16171d",
        800:"#111217",
        900:"#0d0e11"
      },
    },
    extend: {},
  },
  plugins: [],
}


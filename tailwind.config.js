/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      t: "640px",

      l: "1024px",

      d: "1280px",
    },
    colors: {
      background: "#FAFAFA",
      primary: "#474345",
      secondary: "#D8DAD8",
      accent: "#6F7672",
      divColor: "#EEEEEE",
      titleColor: "#051f10",
      error: "#DF2E38",
      blue: "#362FD9",
      white: "#F9FBE7",
      gray: "#6B728E",
      pastelRed: "#FF5757",
      pastelOrange: "#FF914D",
      pastelGreen: "#00BF63",
      lightGray: "#9DB2BF",
      green: "#3D8361",
      orange: "#FC4F00",
      red: "#990000",
      transparent: "transparent",
    },
    fontFamily: {
      overpass: "'Overpass', sans-serif",
      quicksand: "'Quicksand', sans-serif",
      roboto: "'Roboto', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#f2f2f2",
      black: "#0d0d0d",
      red: "#e44e58",
      blue: "#0077b5",
      lightGray: "#2e3031",
      darkGray: "#181a1b",
      darkBlue: "#002333",
    },
    extend: {},
  },
  plugins: [],
};

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
      yellow: "#ffff00",
      lightGray: "#2e3031",
      darkGray: "#181a1b",
      darkBlue: "#002333",
    },
    fontFamily: {
      sans: ["Tilt Neon", "sans-serif"],
      serif: ["Pridi", "serif"],
    },
    extend: {
      animation: {
        fadeDown: "1.6s ease 1.5s infinite fadeDown",
        fadeIn: "1s ease 0.5s backwards fadeIn",
      },
      keyframes: {
        fadeDown: {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(45%)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

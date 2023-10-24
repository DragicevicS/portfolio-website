/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#f2f2f2",
      black: "#0d0d0d",
      darkerRed: "#D3222E",
      lighterRed: "#E7555E",
      darkerBlue: "#0073AD",
      lighterBlue: "#009CF0",
      darkBlue: "#002333",
      lighterGray: "#2C2E2F",
      darkGray: "#181a1b",
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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".underline-animation::after": {
          content: '""',
          display: "block",
          height: "1px",
          background: "#0d0d0d",
          transition: "width 0.3s ease, left 0.3s ease",
          position: "absolute",
          bottom: "0",
          left: "50%",
          width: "0",
        },
        ".dark .underline-animation::after": {
          background: "#f2f2f2",
        },
        ".underline-animation:hover::after": {
          width: "100%",
          left: "0",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#1B1B1B",
      white: "#FFFFFF",
      gray: {
        900: "#1D2F3F",
        800: "#2E475D",
        700: "#657787",
        200: "#EDEDED",
        100: "#F4F4F4",
      },
      red: {
        900: "#EF5F63",
        700: "#F48F93",
        300: "#FFE9E4",
        100: "#FFFCFA",
      },
    },
    border: {
      thin: "1px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["serif"],
    },

    extend: {},
  },
  plugins: [],
};

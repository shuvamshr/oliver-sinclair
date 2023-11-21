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
      },
      red: {
        900: "#F16F73",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Vollkorn", "serif"],
    },
    extend: {
      lineHeight: {
        2: "4.5rem",
        1: "1.875rem",
      },
    },
  },
  plugins: [],
};

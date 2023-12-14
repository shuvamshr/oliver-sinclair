import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lg: "1260px",
    },
    colors: {
      black: "#1B1B1B",
      white: "#FFFFFF",
      gray: {
        900: "#1D2F3F",
        800: "#2E475D",
        700: "#657787",
        300: "#E4E4E4",
        200: "#EDEDED",
        100: "#F4F4F4",
      },
      red: {
        900: "#EF5F63",
        700: "#F48F93",
        300: "#FFE9E4",
        200: "#FFF9F5",
        100: "#FFFCFA",
      },
      blue: {
        100: "#EEF0F7",
      },
    },

    fontFamily: {
      sans: ["var(--font-poppins)", "sans-serif"],
      serif: ["var(--font-vollkorn)", "serif"],
      sys_serif: ["serif"],
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

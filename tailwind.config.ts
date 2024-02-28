import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "dark-blue": "#202733",
        "dark-grayish-blue": "#313A48",
        "grayish-blue": "#4F5D74",
        "light-cyan": "#CEE3E9",
        "neon-green": "#53FFAA",
      },
      fontFamily: {
        body: ["var(--app-font)", ...fontFamily.sans],
      },
      dropShadow: {
        "neon-green": "0 0 16px rgba(83, 255, 170, .8)"
      }
    },
  },
  plugins: [],
};
export default config;

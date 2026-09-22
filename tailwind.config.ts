import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E0E0D",
          soft: "#181816",
          line: "#2C2C28",
        },
        signal: {
          DEFAULT: "#F2B400",
          dim: "#C99000",
          pale: "#FDE7A8",
        },
        paper: {
          DEFAULT: "#F6F4EC",
          dim: "#EAE6D8",
        },
        graphite: "#8A8A82",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "hazard-stripe":
          "repeating-linear-gradient(135deg, #F2B400 0px, #F2B400 14px, #0E0E0D 14px, #0E0E0D 28px)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;

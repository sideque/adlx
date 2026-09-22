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
          DEFAULT: "#14120F", // warm near-black
          soft: "#211E19",
          line: "#3A362E",
        },
        ivory: {
          DEFAULT: "#F6F2EA",
          dim: "#EDE7D9",
          line: "#DAD2BF",
        },
        bronze: {
          DEFAULT: "#9C7A45",
          dark: "#7A5F35",
          light: "#B79A63",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        editorial: "1440px",
      },
      letterSpacing: {
        wide2: "0.08em",
        widest2: "0.18em",
        widest3: "0.25em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

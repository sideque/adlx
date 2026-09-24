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
          DEFAULT: "#0C0C0D", // Deep charcoal near-black
          soft: "#141416",    // Slightly lighter charcoal
          card: "#18181B",    // Dark card background
          line: "#27272A",    // Subtle dark border
          muted: "#8E8E93",   // Muted gray text
        },
        ivory: {
          DEFAULT: "#F7F5F0", // Warm ivory off-white
          pure: "#FFFFFF",
          dim: "#EFECE6",
          dark: "#E4DFD5",
          line: "#D6CFC4",
        },
        sand: {
          DEFAULT: "#C5BEB3",
          dark: "#A29B8F",
          muted: "#787268",
        },
        bronze: {
          DEFAULT: "#C5A880", // Muted luxury bronze gold
          dark: "#A48252",
          light: "#D8BF9D",
          hover: "#B89768",
          glow: "rgba(197, 168, 128, 0.15)",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1D37",
          deep: "#071229",
          light: "#16294A",
          soft: "#22345A",
        },
        accent: {
          DEFAULT: "#E53935",
          dark: "#C62828",
          soft: "#FBE9E8",
        },
        ink: {
          DEFAULT: "#0F1720",
          muted: "#5B6472",
          faint: "#8992A0",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#F6F7FA",
          line: "#E7E9EE",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,29,55,0.04), 0 12px 32px -12px rgba(10,29,55,0.18)",
        cardHover: "0 4px 12px rgba(10,29,55,0.08), 0 24px 48px -16px rgba(10,29,55,0.24)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
        pulseLine: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

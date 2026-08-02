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
      fontSize: {
        // Module 9: readability pass. Every text-* utility used across
        // Modules 1-8 is remapped here to a larger size, more generous
        // line-height, and (where no explicit font-weight class is set on
        // the element) a slightly heavier default weight. Because this is
        // additive under `extend`, it overrides only these named sizes —
        // anything not listed (7xl+) keeps Tailwind's normal scale.
        xs: ["0.875rem", { lineHeight: "1.4", fontWeight: "500" }], // 14px — smallest tier (eyebrows, badges); was 12px
        sm: ["1rem", { lineHeight: "1.75rem", fontWeight: "500" }], // 16px — most body copy across the site was text-sm at 14px
        base: ["1.125rem", { lineHeight: "1.75rem", fontWeight: "500" }], // 18px
        lg: ["1.375rem", { lineHeight: "1.85rem", fontWeight: "600" }], // 22px — card titles
        xl: ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }], // 24px — card titles
        "2xl": ["1.75rem", { lineHeight: "2.25rem", fontWeight: "600" }], // 28px
        "3xl": ["2rem", { lineHeight: "2.5rem", fontWeight: "600" }], // 32px
        "4xl": ["2.375rem", { lineHeight: "1.15", fontWeight: "700" }], // 38px — section headings desktop
        "5xl": ["3.125rem", { lineHeight: "1.1", fontWeight: "700" }], // 50px — hero desktop
        "6xl": ["3.625rem", { lineHeight: "1.05", fontWeight: "700" }], // 58px
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

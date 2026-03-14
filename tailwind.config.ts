import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#eb6424",
          "orange-light": "#f78752",
          "orange-pale": "#fcc1a4",
          "orange-bg": "#fef3ec",
          navy: "#172436",
          "navy-light": "#1e3a5f",
          "navy-dark": "#0f1a27",
          beige: "#f7f5f3",
          "beige-dark": "#eae5e1",
          green: "#226f54",
          "green-light": "#90b7a9",
          "green-bg": "#e1ebe7",
        },
        neutral: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#787471",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-urbanist)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-lg": ["2.25rem", { lineHeight: "1.2" }],
        "heading": ["1.875rem", { lineHeight: "1.25" }],
        "heading-sm": ["1.5rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "card": "0 2px 8px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.1)",
        "nav": "0 4px 12px rgba(0, 0, 0, 0.08)",
        "hero": "0 24px 40px rgba(0, 0, 0, 0.1)",
      },
      maxWidth: {
        "content": "1200px",
        "narrow": "800px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "draw-line": "drawLine 2s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

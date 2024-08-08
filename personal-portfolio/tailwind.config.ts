import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        main: "#f5f6f8",
        "pink-bright": "#F991E9",
        teal: "#2FA094",
        "sky-blue": "#92A8EC",
        "yellow-cta": "#d9fb68",
        "yellow-cta-hover": "rgb(248 203 70 / 77%)",
        "bg-card": "#FFFFFF",
        "black-1": "#010101",
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      maxWidth: {
        main: "1240px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        button: "4px 4px 0px -1px rgba(0,0,0,0.96)",
        roundedShape: "4px 5px 0px 2px rgba(0, 0, 0, 0.96)",
        roundedShapeHover: "4px 4px 0px 0px rgba(0,0,0,0.96)",
        clippedBox: "filter: drop-shadow(5px 5px 0px -1px rgba(0,0,0,0.96))",
        buttonHover: "6px 6px 0px -1px rgba(0,0,0,0.96)",
        circle: "2px 2px 0px -1px rgba(0, 0, 0, 0.96)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        prompt: ["var(--font-prompt)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

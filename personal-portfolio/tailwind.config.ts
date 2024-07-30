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
        main: "#F9F5F3",
        "pink-bright": "#F991E9",
        teal: "#2FA094",
        "sky-blue": "#92A8EC",
        "yellow-cta": "#F8CB46",
        "yellow-cta-hover": "rgb(248 203 70 / 77%)",
        "bg-card": "#FFFFFF",
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
        clippedBox:
          "filter: drop-shadow(5px 5px 0px -1px rgba(0,0,0,0.96))",
        buttonHover: "6px 6px 0px -1px rgba(0,0,0,0.96)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        prompt: ["var(--font-prompt)"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF8F2",
          soft: "#F7F2E9",
        },
        champagne: {
          DEFAULT: "#F0E3CC",
          deep: "#E4D0A7",
        },
        gold: {
          light: "#D9BD80",
          DEFAULT: "#C6A55C",
          deep: "#9C7A3C",
        },
        ink: {
          DEFAULT: "#332B22",
          soft: "#5C5140",
        },
        wax: {
          DEFAULT: "#7A2436",
          deep: "#5C1826",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        script: ["var(--font-script)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gold-shimmer":
          "linear-gradient(120deg, #9C7A3C 0%, #E4D0A7 25%, #C6A55C 50%, #E4D0A7 75%, #9C7A3C 100%)",
        "paper-texture":
          "radial-gradient(circle at 20% 20%, rgba(198,165,92,0.06), transparent 40%), radial-gradient(circle at 80% 80%, rgba(198,165,92,0.08), transparent 45%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        twinkle: "twinkle 3.5s ease-in-out infinite",
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(156, 122, 60, 0.45)",
        card: "0 20px 60px -15px rgba(51, 43, 34, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;

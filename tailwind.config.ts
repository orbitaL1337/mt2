import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sky-soft": "#dff4ff",
        "sky-pale": "#cdeeff",
        coral: "#ff7f97",
        sky: "#4ea3df",
        ink: "#2f5b9f",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(64, 108, 164, 0.12)",
        "soft-lg": "0 16px 30px rgba(64, 108, 164, 0.18)",
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;

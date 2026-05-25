import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0A0A0A",
        graphite: "#111111",
        line: "rgba(255,255,255,0.08)",
        muted: "#A1A1AA",
        text: "#F5F5F5",
        accent: "#7DD3FC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        premium: "0 24px 90px rgba(0,0,0,0.5)",
        glow: "0 0 80px rgba(125,211,252,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

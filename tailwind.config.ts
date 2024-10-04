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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        pingOnce: {
          "50%": { transform: "scale(2)" },
          100: { transform: "scale(1)" },
        },
      },
      animation: {
        pingOnce: "pingOnce 1s cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;

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
        theme: "#37517E",
        theme2: '#38BDF8'
      },
      keyframes: {
        "bounce-ud-slow": {
          "0%, 100%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "trans-up-down": "bounce-ud-slow 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

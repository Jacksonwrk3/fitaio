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
        containerGray: "#e2e8f0",
        loadingGray: "#e4e4e7",
        primary: {
          100: "#ede9fe", // text-violet-100
          200: "#ddd6fe", // text-violet-200
          300: "#c4b5fd", // text-violet-300
          400: "#a78bfa", // text-violet-400
          500: "#8b5cf6", // text-violet-500
          600: "#7c3aed", // text-violet-600
          700: "#6d28d9", // text-violet-700
          800: "#5b21b6", // text-violet-800
          900: "#4c1d95", // text-violet-900
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;

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
        primary: {
          100: "text-violet-100", // Lightest shade
          200: "text-violet-200",
          300: "text-violet-300",
          400: "text-violet-400",
          500: "text-violet-500", // Default primary shade
          600: "text-violet-600",
          700: "text-violet-700",
          800: "text-violet-800",
          900: "text-violet-900", // Darkest shade
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

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
        grayPrimary: "text-red-500",
        primary: "#8b5cf6", // Violet
        accent: "#3C6E71", // Teal for buttons and links
        background: "#FFFFFF", // White for background
        "background-muted": "#D9D9D9", // Light gray for dividers and containers
        "primary-dark": "#284B63", // Dark blue for headings, navbar, and hover
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;

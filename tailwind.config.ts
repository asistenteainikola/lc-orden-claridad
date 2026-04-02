import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1C3557",
          light: "#2E5F8A",
        },
        gold: {
          DEFAULT: "#C9962A",
          light: "#E8B84B",
        },
        ice: "#F5F7FA",
        pearl: "#EAEEF5",
        slate: "#64748B",
        carbon: "#1E293B",
        border: "#D8E0EC",
      },
      fontFamily: {
        head: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-opensans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

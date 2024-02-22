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
        'primary': '#003B95',
        'primary-dark': '#00224F',
        'secondary': '#ffb700',
        'accent1': '#1a1a1a',
        'accent2': '#595959',
      },
    },
  },
  plugins: [],
};
export default config;

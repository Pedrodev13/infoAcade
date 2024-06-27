import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      extend: {
        fontFamily:{
          montserrat: ['MontSerrat', 'sans-serif'],
          'montSerrat-regular': ['MontSerrat-Regular']
        },
      },
    },
  plugins: [],
};
export default config;

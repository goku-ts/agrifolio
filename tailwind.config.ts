import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 
  theme: {
    extend: {
        fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Poppins as default sans-serif font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui : {
   themes : []
  },
  plugins: [
    daisyui
  ],
};
export default config;

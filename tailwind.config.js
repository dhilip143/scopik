/** @type {import('tailwindcss').Config} */
export default {
  content: [
     // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        news:["Newsreader", "serif"],
        inter:["Inter", "sans-serif"]
      }
      
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/bgImg.jpg')",
      },
      colors :{
        btnColor:"#4ade80"
      },
  },
  },
  plugins: [],
}


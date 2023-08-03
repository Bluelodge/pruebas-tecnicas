/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      aspectRatio: {
        '2/3': '2 / 3'
      },
      colors: {
        'cream': 'rgb(255, 222, 190)'
      }
    },
  },
  
  plugins: [],
}

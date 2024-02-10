/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'primery': "#4E66EC",
        'green': '#487664',
        'myRed': '#969696',
        'Red': '#ff0000',
        'RedLight': '#A71B4A',
      },
      fontFamily: {
        myFont: "Roboto, sans-serif",
      },
    },
    container: {
      center: true
    },
  },
  plugins: [],
}


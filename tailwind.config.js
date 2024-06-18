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
        'primery': "#14b8a6",
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
      center: true,
      // padding: {
      //   DEFAULT: '1rem',
      //   lg: '3rem',
      //   xl: '4rem',
      // }
    },
  },
  plugins: [],
}


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
        // 'gray' : '#fbf0e4',
        'green': '#487664',
        'myRed': '#ff0000',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens:{
      'sm':{'max':'375px'},
      'lg':'375px',

    },
    extend: {
      fontFamily: {
        rubik:"'rubik', 'sans-serif'"
      }
    },
  },
  plugins: [],
}


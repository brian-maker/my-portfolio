/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkGray': '#4f5e75',
        'white':"#ffffff",
        'yellow':"#fab426",
        'bgFooter':"#333a44",
        'textFooter':'#818996',
        'cto':'#485567',
        'dim-grey':' rgb(147 ,156, 170 )',
        'ligthyellow':'rgb(255, 244, 223)',
        "careers":'rgba(242, 245, 249,1 )'
      },
    },
  },
  plugins: [],
}
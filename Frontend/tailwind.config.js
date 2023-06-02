/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, css, js, jsx}"],
  theme: {
   fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
   },
    extend: {
      screens: { 
        "1000px": "1050px",
        "1100px": "1150px",
        "800px": "800px",
        "400px": "400px",
      },
  },
  plugins: [],
},
};


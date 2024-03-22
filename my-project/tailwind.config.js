/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
        dnavbar:"#FC6736",
        ctext:"GRAY",
        bgdark:"#1A202C",
        belownav:"#0F2A3D",
        f2:"#32735F",
        f3:"#03464C",
        f4:"#6EBBA4",
        f5:"#84BD3A",
        f6:"#626F77",
        f7:"#84BD3C",
        f8:"#30735F", 
        f9:"#840032",
      },
      backgroundColor: {
        skin:{
          fill: "var(--fill-color)"

        }
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
        },
      }
    },
  },
  plugins: [],
}

const { fontFamily } = require('tailwindcss/defaultTheme') 
 
/** @type {import('tailwindcss').Config} */ 
export default { 
  content: [ 
    // Or if using src directory: 
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "./node_modules/tw-elements/dist/js/**/*.js", 
  ], 
  darkMode: 'class', 
  theme: { 
    extend: { 
      fontFamily: { 
        mont: ['var(--font-mont)', ...fontFamily.sans], 
      }, 
      colors: { 
        dark: "#000000", 
        light: "#f5f5f5", 
        primary: "#B63E96", 
        primaryDark: "#58E6D9",  
      }, 
    }, 
    screens: { 
      "2xl": { max: "1535px" }, 
      // => @media (max-width: 1535px) { ... } 
   
      xl: { max: "1279px" }, 
      // => @media (max-width: 1279px) { ... } 
   
      lg: { max: "1023px" }, 
      // => @media (max-width: 1023px) { ... } 
   
      md: { max: "767px" }, 
      // => @media (max-width: 767px) { ... } 
   
      sm: { max: "639px" }, 
      // => @media (max-width: 639px) { ... } 
   
      xs: { max: "479px" }, 
      // => @media (max-width: 479px) { ... } 
  }, 
  }, 
  plugins: [], 
}
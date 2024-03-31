import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    colors:{
      csCardBtn:"#000000",
      bgDark:"#292B32",
      bgWhite:"#F7F7F8",
      cardbgWhite:"#FFFFFF",
      cardbgDark:"#818A97",
      cardBg:"#3B3E47",
      Btn:"#2C9CF0",
      cardInBgDark:"#292B32",
      cardInBgWhite:"#F7F7F8",
      sportHighLight:"#738FFF",
      scrollBtns : "#2C9CF0",
      evntsSport:"#DFDFDF",
      ticketCircle:"#221A2C",
      innerTextLight:"#525965",
      cardCircleLight:"#F3F9FF",
      ticketLight:"#A9ACB2"
    },
    screens: {
      'xs':'320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1536px',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'serif'] 
    },
    fontSize: {
      'sm': '0.75rem',
      'base': '0.875rem',
      'md': '1.0625rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '4xl': '2.441rem',
      '5xl': '3.125rem',
    },
    extend: {
      backgroundImage:(theme)=>( {
        csBgDark : 'linear-gradient(#18282A,#221A2C)',
        csBgLight : 'linear-gradient(#F9F8FF,#F3F9FF)'
      }),
      boxShadow: {
        '3xl': 'inset -9.5px 0 12px -6px #dddddd',
        '4xl': 'inset 9.5px 0 12px -6px #dddddd'
      }
    },
  },
  plugins: [],
};
export default config;

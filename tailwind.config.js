/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark:{
          1: "#121212",
          2:"#181818",
          3:"#161925"
        },
        font:{
          1:"#ADB7BE",
          2:"#aaa6c3"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/herobg.png')",
        "profileback":"url('/images/bgimgback.jpg')",
        "about": "url('/images/aboutimg.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
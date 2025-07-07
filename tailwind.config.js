/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // لدعم App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // لدعم Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // مكونات
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "960px",
      xl: "1430px",
    },
    fontFamily: {
      primary: "var(--font-Cormorant_Upright)",
      secondery: "var(--font-Open_Sans)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#100e0e",
        },
        secondery: {
          DEFAULT: "#787f8a",
        },
        accent: {
          DEFAULT: "#c7a17a",
          hover: "#a08161",
        },
      },
      backgroundImage: {
        hero_overlay: "url('/assets/hero/hero-overlay.png')",
        opening_hours: "url('/assets/opening-hours/bg.png')",
        footer: "url('/assets/footer/bg.png')",
      },
    },
  },
  plugins: [],
};

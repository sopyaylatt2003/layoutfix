/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
    },
    container: {
      center: true,
      // default breakpoints but with 40px removed
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};

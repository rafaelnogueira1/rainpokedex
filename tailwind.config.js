/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
        navigation: ["Poppins", "sans-serif"],
      },
      colors: {
        navigation: "#3B4CCA",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#fbfff4",
        customBlack: "#282828",
      },
    },
  },
  plugins: [],
};

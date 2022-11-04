/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "767px",
    },
    extend: {
      width: {
        100: "32rem",
      },
      margin: {
        96: "30rem",
      },
      fontFamily: {
        ty: "'Roboto Condensed', sans-serif",
        fira: "'Fira Sans', sans-serif",
      },
      colors: {
        primary: "#111827",
        trasparent: "rgba(0%, 0%, 100%, 0.75)",
      },
    },
  },
  plugins: [],
  //important: true,
};

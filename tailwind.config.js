/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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

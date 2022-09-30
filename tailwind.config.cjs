/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        body: "#1F1E1C",
        bgpink: "#FFF6F9",
        snow: "#FFF9FB",
        lavenderblush: "FFF2F6",
        piggypink: "#FFE5EC",
        ultrapink: "#FB6F92",
        bakerpink: "#FF8FAB",
        cherryblossom: "#FFB3C6",
        pink: "#FFC2D1",
        black: "#1F1E1C",
        gradientpink: "#E786AE",
        gradientred: "#ED6770",
        popstar: "#BD546E",
        blush: "#E66686",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Tamzen", "monospace"],
        bodybold: ["Tamzen Bold", "monospace"],
      },
    },
  },
  plugins: [],
};

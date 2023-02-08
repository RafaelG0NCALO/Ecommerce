/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
      },

      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(288px, 1fr))",
      },

      keyframes: {
        txt2: {
          "0%, 80%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        cart: {
          "0%": { left: "-10%" },
          "40%, 60%": { left: "37%" },
          "100%": { left: "110%" },
        },
        box: {
          "0%, 40%": { top: "-40%" },
          "60%": { top: "20%", left: "41%" },
          "100%": { top: "20%", left: "120%" },
        },
        txt1: {
          "0%": { opacity: 1 },
          "25%, 100%": { opacity: 0 },
        },
      },

      animation: {
        txt2: "txt2 1.5s ease-in-out forwards;",
        cart: "cart 1.5s ease-in-out forwards",
        box: "box 1.5s ease-in-out forwards",
        txt1: "txt1 1.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

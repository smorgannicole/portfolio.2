/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#A2D2FF",
          100: "#BDE0FE",
        },
        yellow: {
          500: "#FFD700",
        },
        orange: {
          500: "#FFA500",
        },
        gray: {
          500: "#808080",
          200: "#D3D3D3",
          777: "#333333",
          888: "#2F4F4F",
          950: "#4C4B63",
        },
        pink: {
          550: "#FFC8DD",
          650: "#FFAFCC",
        },
        purple: {
          550: "#CDB4DB",
        },
        magenta: {
          500: "#FF00FF",
        },
        offwhite: {
          100: "#F1F1F1",
        },
      },
      top: {
        22: "75px",
      },
      height: {
        111: "500px",
        222: "700px",
        333: "999px",
      },
      width: {
        111: "500px",
        222: "700px",
        333: "999px",
      },
      animation: {
        blob: "blob 6s infinite",
        blob2: "blob 6s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "33%": {
            transform: "translate(30px, -40px)",
          },
          "66%": {
            transform: "translate(-20px, 20px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-60px, 20px) scale(1.05)",
          },
          "66%": {
            transform: "translate(50px, 50px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

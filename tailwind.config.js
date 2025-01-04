/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Montserrat"],
      },
      backgroundImage: {
        bgInstagram: {
          background: "linear-gradient(to top left, #833ab4,#fd1d1d,#fcb045)",
        },
        bgImg: {
          background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        },
      },
      keyframes: {
        photoAnimation: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(10px)",
          },
        },
        handWave: {
          "0%, 100%": {
            rotate: "0deg",
          },
          "50%": {
            rotate: "10deg",
          },
        },
      },
      animation: {
        photoAnimation: "photoAnimation 5s infinite ",
        handWave: "handWave 1s infinite ",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#66fcf1",
        secondary: "#45a29e",
        white: "#fafafa",
        lightGray: "#c5c6c7",
        gray: "#838383",
        blurredGray: "#0b0c10a2",
        navy: "#1f2833",
        black: "#0b0c10",
        red: "#c50000",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
      fontSize: {
        small: "1rem",
        medium: "2rem",
        large: "3rem",

        h1Mobile: "2rem",
        h2Mobile: "1.5rem",
        pMobile: "1rem",

        h1Desktop: "3rem",
        h2Desktop: "2rem",
        pDesktop: "1.5rem",
      },
      width: {
        maxDesktop: "1140px",
      },
      keyframes: {
        bounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-30px)" },
          "60%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        bounce: "bounce 2s infinite",
      },
    },
  },
  plugins: [],
}

import { ThemeProvider } from "styled-components";

const theme = {
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
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

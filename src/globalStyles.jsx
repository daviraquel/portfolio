import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 /* scrollbar */
 ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.lightGray};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.navy};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.secondary};
  }

  :root{
      font-size: 14px;
    --swiper-theme-color: ${(props) => props.theme.colors.primary};
  }
  html{
    scroll-behavior: smooth;
  }
  body {
    background-color:${(props) => props.theme.colors.black};
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSize.h1Mobile};
    font-weight: ${(props) => props.theme.fontWeight.medium};
  }

  h2 {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.h2Mobile};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    padding-bottom: 0.75rem;
  }

  h3 {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.h2Mobile};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    padding: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSize.pMobile};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    margin-top: 1.5rem;
    line-height: 1.5rem;
    text-align: justify;
    z-index:10;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: ${(props) => props.theme.fontSize.h2Desktop};
      padding-bottom: 1rem;
    }
    p {
      font-size: ${(props) => props.theme.fontSize.pDesktop};
      line-height: 1.75rem;
      margin-top: 2rem;
    }
  }
`;

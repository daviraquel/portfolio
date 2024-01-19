import styled from "styled-components"

export const WorksContainer = styled.section`
  height: 100vh;
  position: relative;
  color: ${(props) => props.theme.colors.white};
  padding-top: 80px;
  box-sizing: border-box;
  h2 {
    text-align: center;
  }
  p {
    font-size: 1rem;
    text-align: center;
    margin: -10px 0 0 0;
    opacity: 0.8;
  }
  .textContainer {
    width: 80%;
    max-width: ${(props) => props.theme.width.maxDesktop};
    margin: 0 auto;
    z-index: 10;
  }
  @media (min-width: 768px) {
  }
`

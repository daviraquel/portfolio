import styled from "styled-components"

export const MainTitleContainer = styled.section`
  height: 100vh;
  position: relative;
  background-color: transparent;
  text-shadow: 0px 0px 3px white;
  .title-container {
    text-align: center;
    text-wrap: nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 825px;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 0.2em;
  }
  h2 {
    margin: 0;
    padding: 0.2em 0 0 0.5em;
  }
  span {
    color: ${(props) => props.theme.colors.primary};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
  img {
    width: 200px;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  @media (min-width: 768px) {
    .title-container {
      text-align: left;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
    }
    h1 {
      font-size: 4em;
    }
    h2 {
      margin: 0;
      padding: 0.2em 0 0 0.5em;
    }
  }
`

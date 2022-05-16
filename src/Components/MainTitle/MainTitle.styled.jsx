import styled from "styled-components";

export const MainTitleContainer = styled.section`
  height: 100vh;
  position: relative;
  background-color: transparent;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    max-width: 825px;
  }
  span {
    color: ${(props) => props.theme.colors.primary};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: ${(props) => props.theme.fontSize.h1Desktop};
    }
  }
`;

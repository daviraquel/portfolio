import styled from "styled-components";

import li from "../../assets/img/li.webp";
import intake from "../../assets/img/intake.webp";

export const AboutContainer = styled.section`
  height: 100vh;
  position: relative;
  color: ${(props) => props.theme.colors.white};
  padding-top: 80px;
  box-sizing: border-box;
  .textContainer {
    width: 80%;
    max-width: ${(props) => props.theme.width.maxDesktop};
    margin: 0 auto;
    z-index: 10;
  }
  img {
    border-radius: 50px;
    z-index: -1;
    visibility: hidden;
    width: 400px;
  }
  .imageContainer {
    z-index: -1;
    box-shadow: 0 0 30px 30px ${(props) => props.theme.colors.black} inset;
  }
  #li {
    background-image: url(${li});
    background-size: contain;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  #intake {
    background-image: url(${intake});
    background-size: contain;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }
  @media (min-width: 768px) {
    padding-top: 150px;
  }
`;

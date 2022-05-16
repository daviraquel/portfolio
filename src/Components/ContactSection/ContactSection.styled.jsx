import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${(props) => props.theme.width.maxDesktop};
  gap: 20px;
  margin: 3rem auto 0;
  a {
    width: 100px;
    height: 100px;
    color: ${(props) => props.theme.colors.primary};
  }
  svg {
    height: 100%;
    width: 100%;
  }
  a:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
  @media (min-width: 768px) {
    flex-direction: row;
    a {
      width: 150px;
      height: 150px;
    }
  }
`;

export const ContactsContainer = styled.section`
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
  h2 {
    text-align: center;
  }
  #duck {
    width: 100%;
  }
  #duck img {
    border-radius: 50px;
    width: 200px;
    position: absolute;
    bottom: 0;
    left: 50px;
  }

  #duck p {
    font-size: 1rem;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.colors.gray};
  }
  @media (min-width: 768px) {
    padding-top: 150px;
  }
`;

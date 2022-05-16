import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  backdrop-filter: blur(5px);
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  transition: all 0.3s;
  z-index: 10;
  h3 {
    opacity: ${(props) => (props.scrolled ? "0" : "1")};
    transition: all 0.3s;
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.h3Mobile};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
  @media (min-width: 768px) {
    padding-top: 30px 120px;
  }
`;

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 50px;
  max-width: ${(props) => props.theme.width.maxDesktop};
  align-items: center;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const StyledHeaderLink = styled.a`
  font-size: ${(props) => props.theme.fontSize.small};
  padding: 15px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s;
  display: block;
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 22px;

  :hover {
    color: ${(props) => props.theme.colors.white};
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.black} 10%,
      ${(props) => props.theme.colors.navy} 75%,
      ${(props) => props.theme.colors.secondary} 100%
    );
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }

  img {
    height: 25px;
  }
`;

import styled from "styled-components";

export const StyledMenu = styled.div`
  width: 50%;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.black};
  transform: ${(props) =>
    props.menuOpen ? "translateX(0)" : "translateX(50px)"};
  opacity: ${(props) => (props.menuOpen ? "1" : "0")};
  transition: all 0.3s linear;
  position: absolute;
  top: 75%;
  right: 0;
  border-radius: 0.5em 0 0 0.5em;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
    display: ${(props) => (props.menuOpen ? "block" : "none")};
  }
`;

export const DropDownLink = styled.li`
  position: relative;

  a {
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.colors.white};
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.75em 5%;
  }
  div {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

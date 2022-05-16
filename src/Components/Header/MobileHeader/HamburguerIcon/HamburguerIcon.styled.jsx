import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) =>
      props.menuOpen ? props.theme.colors.red : props.theme.colors.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

div:first-child {
    transform: ${(props) => (props.menuOpen ? "rotate(45deg)" : "rotate(0)")};
  }

  div:nth-child(2) {
    opacity: ${(props) => (props.menuOpen ? "0" : "1")};
    transform: ${(props) => (props.menuOpen ? "translateX(-20px)" : null)}
  }

  div:nth-child(3) {
    transform: ${(props) => (props.menuOpen ? "rotate(-45deg)" : "rotate(0)")}
  }
}
`;

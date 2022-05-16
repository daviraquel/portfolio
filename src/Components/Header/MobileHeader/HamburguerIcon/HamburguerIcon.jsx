import { StyledBurger } from "./HamburguerIcon.styled";

export const HamburguerIcon = ({ menuOpen, setMenuOpen }) => {
  const handleclick = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };
  return (
    <StyledBurger menuOpen={menuOpen} onClick={() => handleclick()}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

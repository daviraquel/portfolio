import { StyledHeaderLink } from "../Header.styled";

export const HeaderLink = ({ text, link }) => {
  return (
    <StyledHeaderLink className="dropHover" href={link}>
      {text}
    </StyledHeaderLink>
  );
};

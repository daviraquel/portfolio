import { StyledMenu, DropDownLink } from "./MobileHeader.styled"

export const DropdownMenu = ({ menuOpen, setMenuOpen }) => {
  const closeMenu = () => setMenuOpen(false)
  return (
    <StyledMenu menuOpen={menuOpen}>
      <ul>
        <DropDownLink key="1">
          <a href="/#works" onClick={closeMenu}>
            Work
          </a>
        </DropDownLink>
        <DropDownLink key="1">
          <a href="/#contact" onClick={closeMenu}>
            Contact
          </a>
        </DropDownLink>
      </ul>
    </StyledMenu>
  )
}

import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../../hooks";

import { Header, HeaderContainer } from "../Header.styled";
import { DropdownMenu } from "./DropdownMenu";
import { HamburguerIcon } from "./HamburguerIcon/HamburguerIcon";

export const MobileHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    return window.scrollY >= 50 ? setScrolled(true) : setScrolled(false);
  };

  window.addEventListener("scroll", changeBackground);
  const [menuOpen, setMenuOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setMenuOpen(false));

  return (
    <Header scrolled={scrolled}>
      <HeaderContainer ref={node}>
        <h3>Welcome!</h3>
        <HamburguerIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <DropdownMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      </HeaderContainer>
    </Header>
  );
};

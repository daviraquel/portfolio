import { useState } from "react"

import { HeaderLink } from "../HeaderLink/HeaderLink"

import { Header, HeaderContainer } from "../Header.styled"

export const DesktopHeader = () => {
  const [scrolled, setScrolled] = useState(false)

  const changeBackground = () => {
    return window.scrollY >= 50 ? setScrolled(true) : setScrolled(false)
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <Header scrolled={scrolled}>
      <HeaderContainer>
        <HeaderLink id="linkContact" text="Home" link="/" />
        <HeaderLink id="linkContact" text="Work" link="/#works" />
        <HeaderLink id="linkContact" text="Contact" link="/#contact" />
      </HeaderContainer>
    </Header>
  )
}

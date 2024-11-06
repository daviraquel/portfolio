import { useState, useEffect } from "react"
import { HeaderLink } from "./HeaderLink"

export const DesktopHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)

  const changeBackground = () => {
    setScrolled(window.scrollY >= 50)
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    return () => window.removeEventListener("scroll", changeBackground)
  }, [])

  return (
    <header
      className={`fixed w-full p-4 box-border transition-all duration-300 z-10 backdrop-blur-sm ${
        scrolled ? "bg-opacity-75" : "bg-opacity-100"
      }`}
    >
      <div className="container mx-auto flex flex-row gap-12 items-center justify-end">
        <HeaderLink text="Home" link="body" />
        <HeaderLink text="Work" link="#works" />
        <HeaderLink text="Contact" link="#contact" />
      </div>
    </header>
  )
}

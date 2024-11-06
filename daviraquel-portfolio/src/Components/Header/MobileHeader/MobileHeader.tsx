import React, { useState, useRef, useEffect } from "react"
import { DropdownMenu } from "./DropdownMenu"
import { HamburguerIcon } from "./HamburguerIcon"
import { useOnClickOutside } from "../../../hooks/useOnClickOutside"

export const MobileHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const changeBackground = () => {
    setScrolled(window.scrollY >= 50)
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    return () => window.removeEventListener("scroll", changeBackground)
  }, [])

  const node = useRef<HTMLDivElement>(null)
  useOnClickOutside(node, () => setMenuOpen(false))

  return (
    <header
      className={`fixed w-full p-4 box-border transition-all duration-300 z-10 backdrop-blur-sm ${
        scrolled ? "bg-opacity-75" : "bg-opacity-100"
      }`}
    >
      <div
        ref={node}
        className="container mx-auto flex flex-row gap-12 items-center justify-end"
      >
        <h3
          className={`transition-opacity duration-300 ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          Welcome!
        </h3>
        <HamburguerIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <DropdownMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      </div>
    </header>
  )
}

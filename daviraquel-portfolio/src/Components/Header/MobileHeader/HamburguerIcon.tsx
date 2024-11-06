import React from "react"

interface HamburguerIconProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

export const HamburguerIcon: React.FC<HamburguerIconProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <button
      className="absolute right-5 top-5 flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0"
      onClick={handleClick}
    >
      <div
        className={`w-8 h-1 bg-${
          menuOpen ? "red-500" : "primary"
        } rounded transition-all duration-300 transform origin-top-left ${
          menuOpen ? "rotate-45" : "rotate-0"
        }`}
      />
      <div
        className={`w-8 h-1 bg-${
          menuOpen ? "red-500" : "primary"
        } rounded transition-all duration-300 ${
          menuOpen ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0"
        }`}
      />
      <div
        className={`w-8 h-1 bg-${
          menuOpen ? "red-500" : "primary"
        } rounded transition-all duration-300 transform origin-bottom-left ${
          menuOpen ? "-rotate-45" : "rotate-0"
        }`}
      />
    </button>
  )
}

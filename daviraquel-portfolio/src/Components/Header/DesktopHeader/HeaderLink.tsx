import React from "react"
import { handleClickSection } from "../../../helpers/handleClickSection"

interface HeaderLinkProps {
  text: string
  link: string
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({ text, link }) => {
  return (
    <button
      className="text-sm p-4 font-bold transition-all duration-300 block text-primary border border-primary rounded-lg hover:text-white hover:bg-gradient-to-r from-black via-navy to-secondary hover:border-secondary"
      onClick={() => handleClickSection(link)}
    >
      {text}
    </button>
  )
}

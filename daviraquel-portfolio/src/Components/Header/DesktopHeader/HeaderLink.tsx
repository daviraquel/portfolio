import React from "react"

interface HeaderLinkProps {
  text: string
  link: string
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({ text, link }) => {
  return (
    <a
      className="text-sm p-4 font-bold transition-all duration-300 block text-primary border border-primary rounded-lg hover:text-white hover:bg-gradient-to-r from-black via-navy to-secondary hover:border-secondary"
      href={link}
    >
      {text}
    </a>
  )
}

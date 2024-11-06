import React from "react"

interface DropdownMenuProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  const closeMenu = () => setMenuOpen(false)

  return (
    <div
      className={`w-1/2 mx-auto bg-black transform transition-transform duration-300 ${
        menuOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
      } absolute top-3/4 right-0 rounded-l-lg`}
    >
      <ul className={`m-0 list-none p-0 ${menuOpen ? "block" : "hidden"}`}>
        <li className="relative">
          <a
            href="/#works"
            onClick={closeMenu}
            className="text-sm text-white block uppercase p-3"
          >
            Work
          </a>
        </li>
        <li className="relative">
          <a
            href="/#contact"
            onClick={closeMenu}
            className="text-sm text-white block uppercase p-3"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

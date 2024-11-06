import { useState, useEffect } from "react"
import { DesktopHeader } from "./DesktopHeader/DesktopHeader"
import { MobileHeader } from "./MobileHeader/MobileHeader"

export const Header: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth)

  const updateSize = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <header className="fixed w-full p-4 box-border transition-all duration-300 z-10 backdrop-blur-sm">
      <div className="container mx-auto flex flex-row gap-12 items-center justify-end">
        {windowSize >= 768 ? <DesktopHeader /> : <MobileHeader />}
      </div>
    </header>
  )
}

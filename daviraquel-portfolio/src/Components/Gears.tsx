import { useRef, useState, useEffect, RefObject } from "react"
import "./Gears.css"

export const Gears: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth)

  const updateSize = () => {
    setWindowSize(window.innerWidth)
  }

  const gearRef: RefObject<HTMLDivElement> = useRef(null)
  const pinionRef: RefObject<HTMLDivElement> = useRef(null)

  const rotateGears = () => {
    if (gearRef.current && pinionRef.current) {
      gearRef.current.style.transform = `rotate(${window.scrollY}deg)`
      pinionRef.current.style.transform = `rotate(-${window.scrollY * 1.5}deg)`
    }
  }

  useEffect(() => {
    if (windowSize > 768) {
      window.addEventListener("resize", updateSize)
      window.addEventListener("scroll", rotateGears)
      return () => {
        window.removeEventListener("resize", updateSize)
        window.removeEventListener("scroll", rotateGears)
      }
    }
  }, [windowSize])

  return windowSize > 768 ? (
    <div id="gearContainer">
      <div id="gear" className="gears" ref={gearRef}></div>
      <div id="pinion" className="gears" ref={pinionRef}></div>
    </div>
  ) : null
}

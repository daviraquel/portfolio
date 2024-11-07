import { useState, useEffect } from "react"
import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import duck from "../assets/img/duck.webp"

const commonLinkClasses = "w-24 h-24 text-primary transition duration-300"
const commonLinkHoverClasses = "hover:text-secondary"
const commonContainerClasses = "max-w-screen-lg mx-auto"

export const ContactSection: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  })

  const [windowSize, setWindowSize] = useState<number>(window.innerWidth)
  const updateSize = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const duckNoise = new Audio("/duck.mp3")
  const playNoise = () => {
    duckNoise.play()
  }

  return (
    <section
      id="contact"
      className="h-screen relative text-white pt-20 box-border"
    >
      {windowSize >= 930 && (
        <div id="duck" className="w-full">
          <img
            onClick={playNoise}
            src={duck}
            alt="a rubber duck wearing a horned helmet"
            className="rounded-full w-48 absolute bottom-0 left-12"
          />
          {/* <p className="text-gray-500 text-center absolute bottom-4 w-full">
            Go ahead, click the barbarian duck.
          </p> */}
        </div>
      )}
      <div className={`textContainer ${commonContainerClasses}`}>
        <motion.h2
          ref={titleRef}
          animate={{
            x: titleInView ? 0 : -200,
            opacity: titleInView ? 1 : 0,
          }}
          transition={{ duration: 3 }}
          className="text-center"
        >
          Get in touch!
        </motion.h2>
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-5 mt-12 ${commonContainerClasses} ${
          windowSize >= 768 ? "flex-row" : ""
        }`}
      >
        <a
          href="https://www.linkedin.com/in/daviraquel/"
          target="_blank"
          rel="noreferrer"
          className={`${commonLinkClasses} ${commonLinkHoverClasses} ${
            windowSize >= 768 ? "w-36 h-36" : ""
          }`}
        >
          <FaLinkedin className="w-full h-full" />
        </a>
        <a
          href="https://github.com/daviraquel"
          target="_blank"
          rel="noreferrer"
          className={`${commonLinkClasses} ${commonLinkHoverClasses} ${
            windowSize >= 768 ? "w-36 h-36" : ""
          }`}
        >
          <BsGithub className="w-full h-full" />
        </a>
        <a
          href="mailto:daviraquel@gmail.com"
          className={`${commonLinkClasses} ${commonLinkHoverClasses} ${
            windowSize >= 768 ? "w-36 h-36" : ""
          }`}
        >
          <FiMail className="w-full h-full" />
        </a>
      </div>
    </section>
  )
}

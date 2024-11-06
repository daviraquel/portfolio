import { useState, useEffect } from "react"
// import Typical from "react-typical"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { DownArrow } from "./DownArrow"

import li from "../assets/img/li.webp"
import intake from "../assets/img/intake.webp"

export const AboutSection = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const updateSize = () => {
    setWindowSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  })

  const [firstTextRef, firstTextInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  })

  const [secondTextRef, secondTextInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  })

  const [thirdTextRef, thirdTextInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  })

  const spanClassName = "text-primary"

  return (
    <section
      className="h-window relative text-white pt-[80px] borderbox"
      id="about"
    >
      {windowSize >= 768 ? (
        <div>
          <div
            id="li"
            style={{ zIndex: "-1", boxShadow: "0 0 30px 30px black inset" }}
          >
            <img
              src={li}
              alt="li DR electric vehicle"
              className="rounded-3xl z-[-1] w-[400px]"
            />
          </div>
          <div
            id="intake"
            style={{ zIndex: "-1", boxShadow: "0 0 30px 30px black inset" }}
          >
            <img
              src={intake}
              alt="combustion engine air intake"
              className="rounded-3xl z-[-1] w-[400px]"
            />
          </div>
        </div>
      ) : null}

      <div className="w-[80%] max-w-maxDesktop mx-auto z-10">
        <motion.p
          ref={firstTextRef}
          animate={{
            y: firstTextInView ? 0 : -50,
            opacity: firstTextInView ? 1 : 0,
          }}
          transition={{ duration: 3 }}
        >
          Years of experience in engineering projects within the auto industry
          and electric vehicle startups taught me great{" "}
          <span className={spanClassName}>attention to detail</span> as well as{" "}
          <span className={spanClassName}>problem solving</span> abilities, all
          while{" "}
          <span className={spanClassName}>managing projects efficiently</span>.
        </motion.p>
        <motion.p
          ref={secondTextRef}
          animate={{
            x: firstTextInView ? 0 : -200,
            opacity: secondTextInView ? 1 : 0,
          }}
          transition={{ duration: 3 }}
        >
          Fueled by a perpetual{" "}
          <span className={spanClassName}>passion for technology</span>, I
          embarked on a year-long, full-time course. This immersive experience
          helped me improve skills and empowered me to transition into a
          developer role.
        </motion.p>
        <motion.p
          ref={thirdTextRef}
          animate={{
            y: firstTextInView ? 0 : 100,
            opacity: thirdTextInView ? 1 : 0,
          }}
          transition={{ duration: 3 }}
        >
          Since then, my focus has been on collaborating with data scientists
          and analysts to improve{" "}
          <span className={spanClassName}>data visualization</span> and{" "}
          <span className={spanClassName}>user experience</span>.Through the
          creation of user-friendly interfaces and layouts, I strive to make
          complex data more accessible and visually appealing.
        </motion.p>
        <DownArrow linkUrl="#works" />
      </div>
    </section>
  )
}

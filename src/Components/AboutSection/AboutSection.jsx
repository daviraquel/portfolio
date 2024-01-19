import { useState, useEffect } from "react"
// import Typical from "react-typical"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { AboutContainer } from "./AboutSection.styled"
import { DownArrow } from "../DownArrow/DownArrow"
import li from "../../assets/img/li.webp"
import intake from "../../assets/img/intake.webp"

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

  return (
    <AboutContainer id="about">
      {windowSize >= 768 ? (
        <div>
          <div id="li" className="imageContainer">
            <img src={li} alt="li DR electric vehicle" />
          </div>
          <div id="intake" className="imageContainer">
            <img src={intake} alt="combustion engine air intake" />
          </div>
        </div>
      ) : null}

      <div className="textContainer">
        {/* <Typical
          steps={
            firstTextInView
              ? [
                  "Full-stack developer",
                  300,
                  "Full-stack developer, production engineer",
                  600,
                  "Full-stack developer, production engineer, CAD designer",
                  900,
                  "Full-stack developer, production engineer, CAD designer, problem solver.",
                  1200,
                ]
              : ["", 0]
          }
          wrapper="h2"
        /> */}
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
          <span>attention to detail</span> as well as{" "}
          <span>problem solving</span> abilities, all while{" "}
          <span>managing projects efficiently</span>.
        </motion.p>
        <motion.p
          ref={secondTextRef}
          animate={{
            x: firstTextInView ? 0 : -200,
            opacity: secondTextInView ? 1 : 0,
          }}
          transition={{ duration: 3 }}
        >
          Fueled by a perpetual <span>passion for technology</span>, I embarked
          on a year-long, full-time course. This immersive experience helped me
          improve skills and empowered me to transition into a developer role.
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
          and analysts to improve <span>data visualization</span> and{" "}
          <span>user experience</span>.Through the creation of user-friendly
          interfaces and layouts, I strive to make complex data more accessible
          and visually appealing.
        </motion.p>
        {/* <motion.p
          ref={thirdTextRef}
          animate={{
            y: firstTextInView ? 0 : 100,
            opacity: thirdTextInView ? 1 : 0,
          }}
          transition={{ duration: 3 }}
        >
          If you see an opportunity for collaboration or if there's a way I can
          assist you, let's connect!
        </motion.p> */}
        <DownArrow link="#works" />
      </div>
    </AboutContainer>
  )
}

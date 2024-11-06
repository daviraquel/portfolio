import { useState, useEffect } from "react"
// import Typical from "react-typical"
import { motion, useAnimation } from "framer-motion"
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

  const controls = useAnimation()
  const [firstImageRef] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
    onChange: (inView) => {
      if (inView) {
        controls.start({ x: 0, y: "-50%", opacity: 1 })
      } else {
        controls.start({ x: "100%", y: "-50%", opacity: 0 })
      }
    },
  })

  const controlsIntake = useAnimation()
  const [secondImageRef] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
    onChange: (inView) => {
      if (inView) {
        controlsIntake.start({ x: 0, y: "-50%", opacity: 1 })
      } else {
        controlsIntake.start({ x: "-100%", y: "-50%", opacity: 0 })
      }
    },
  })

  // const [secondImageRef, imageInView] = useInView({
  //   triggerOnce: true,
  //   rootMargin: "-50px 0px",
  // })

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

  const bgImageContainer =
    "absolute rounded-[75px] z-[-1] shadow-[inset_0_0_30px_30px_black]"

  return (
    <section
      className="h-[100vh] relative text-white borderbox overflow-hidden"
      id="about"
    >
      {windowSize >= 768 ? (
        <div>
          <motion.div
            id="li"
            className={`${bgImageContainer} right-0 top-[50%] `}
            ref={firstImageRef}
            initial={{ x: "100%", opacity: 0 }}
            animate={controls}
            transition={{ duration: 1 }}
          >
            <div className="relative w-[400px] h-[400px] rounded-l-[75px] overflow-hidden">
              <img
                src={li}
                alt="li DR electric vehicle"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#242424] opacity-75"></div>
            </div>
          </motion.div>
          <motion.div
            id="intake"
            className={`${bgImageContainer} left-0 top-[50%] `}
            ref={secondImageRef}
            initial={{ x: "100%", opacity: 0 }}
            animate={controlsIntake}
            transition={{ duration: 1 }}
          >
            <div className="relative w-[400px] rounded-r-[75px] overflow-hidden">
              <img
                src={intake}
                alt="combustion engine air intake"
                className="inset-0 w-full object-cover"
              />
              <div className="absolute left-[-50px] inset-0 bg-gradient-to-b from-transparent to-[#242424] opacity-75"></div>
            </div>
          </motion.div>
        </div>
      ) : null}
      <div className="h-full w-full flex items-center justify-center">
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
            <span className={spanClassName}>attention to detail</span> as well
            as <span className={spanClassName}>problem solving</span> abilities,
            all while{" "}
            <span className={spanClassName}>managing projects efficiently</span>
            .
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
        </div>
      </div>
      <DownArrow linkUrl="#works" />
    </section>
  )
}

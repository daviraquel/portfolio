import { useState, useEffect } from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { AboutContainer } from "./AboutSection.styled";
import { DownArrow } from "../DownArrow/DownArrow";
import li from "../../assets/img/li.webp";
import intake from "../../assets/img/intake.webp";

export const AboutSection = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const updateSize = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  const [firstTextRef, firstTextInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const [secondTextRef, secondTextInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const [thirdTextRef, thirdTextInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

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
        <Typical
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
        />
        <motion.p
          ref={firstTextRef}
          animate={{
            y: firstTextInView ? 0 : -50,
            opacity: firstTextInView ? 1 : 0,
          }}
          transition={{ duration: 3 }}
        >
          I studied mechanical engineering and worked as a CAD designer in
          engineering projects: FSAE, electric vehicles, reverse engineering, 3D
          printing and so on.
        </motion.p>
        <motion.p
          ref={secondTextRef}
          animate={{
            x: firstTextInView ? 0 : -200,
            opacity: secondTextInView ? 1 : 0,
          }}
          transition={{ duration: 3 }}
        >
          I started learning development out of curiosity. Ended up getting
          really into it and decided to get serious about it. So I quit my job
          and started a full stack web developer course!
        </motion.p>
        <motion.p
          ref={thirdTextRef}
          animate={{
            y: firstTextInView ? 0 : 100,
            opacity: thirdTextInView ? 1 : 0,
          }}
          transition={{ duration: 3 }}
        >
          It's been an awesome journey so far and it never ends. Got big plans
          and big challenges ahead. Maybe we can help each other out? Get in
          touch!
        </motion.p>
        <DownArrow link="#works" />
      </div>
    </AboutContainer>
  );
};

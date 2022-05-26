import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { WorksContainer } from "./WorksSection.styled";
import { Carrousel } from "../Carrousel/Carrousel";
import { DownArrow } from "../DownArrow/DownArrow";

export const WorksSection = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <WorksContainer id="works">
      <div className="textContainer">
        <motion.h2
          ref={titleRef}
          animate={{
            x: titleInView ? 0 : -200,
            opacity: titleInView ? 1 : 0,
          }}
          transition={{ duration: 3 }}
        >
          Check out some of the projects I worked on!
        </motion.h2>
        <Carrousel />
        <DownArrow link="#contact" />
      </div>
    </WorksContainer>
  );
};

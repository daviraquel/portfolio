//import { motion } from "framer-motion";
//import { useInView } from "react-intersection-observer";

import { WorksContainer } from "./WorksSection.styled";
import { Carrousel } from "../Carrousel/Carrousel";
import { DownArrow } from "../DownArrow/DownArrow";

export const WorksSection = () => {
  // const [titleRef, titleInView] = useInView({
  //   triggerOnce: true,
  //   rootMargin: "-100px 0px",
  // });

  return (
    <WorksContainer id="works">
      <div className="textContainer">
        <h2>Check out some of the projects I worked on!</h2>
        <Carrousel />
        <DownArrow link="#contact" />
      </div>
    </WorksContainer>
  );
};

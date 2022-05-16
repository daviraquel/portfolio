import { useState, useEffect } from "react";

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
        <h2>
          Full-stack developer, production engineer, CAD designer, problem
          solver.
        </h2>
        <p>
          I studied mechanical engineering and worked as a CAD designer in
          engineering projects: FSAE, electric vehicles, reverse engineering, 3D
          printing and so on.
        </p>
        <p>
          I started learning development out of curiosity. Ended up getting
          really into it and decided to get serious about it. So I quit my job
          and started a full stack web developer course!
        </p>
        <p>
          It's been an awesome journey so far and it never ends. Got big plans
          and big challenges ahead. Maybe we can help each other out? Get in
          touch!
        </p>
        <DownArrow link="#works" />
      </div>
    </AboutContainer>
  );
};

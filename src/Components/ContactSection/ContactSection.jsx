import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { ContactsContainer, LinkContainer } from "./ContactSection.styled";
import duck from "../../assets/img/duck.webp";

export const ContactSection = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const updateSize = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  const duckNoise = new Audio("/duck.mp3");
  const playNoise = () => {
    duckNoise.play();
  };

  return (
    <ContactsContainer id="contact">
      {windowSize >= 930 ? (
        <div id="duck">
          <img
            onClick={playNoise}
            src={duck}
            alt="a rubber duck wearing a horned helmet"
          />
          <p>Go ahead, click the barbarian duck.</p>
        </div>
      ) : null}
      <div className="textContainer">
        <motion.h2
          ref={titleRef}
          animate={{
            x: titleInView ? 0 : -200,
            opacity: titleInView ? 1 : 0,
          }}
          transition={{ duration: 3 }}
        >
          Get in touch!
        </motion.h2>
      </div>
      <LinkContainer>
        <a
          href="https://www.linkedin.com/in/daviraquel/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/daviraquel"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a href="mailto:daviraquel@gmail.com">
          <FiMail />
        </a>
      </LinkContainer>
    </ContactsContainer>
  );
};

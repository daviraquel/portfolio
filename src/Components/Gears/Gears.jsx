import { useRef, useState, useEffect } from "react";

import "./Gears.css";

export const Gears = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const updateSize = () => {
    setWindowSize(window.innerWidth);
  };

  const gearRef = useRef();
  const pinionRef = useRef();

  const rotateGears = () => {
    gearRef.current.style.transform = "rotate(" + window.scrollY * 1 + "deg)";
    pinionRef.current.style.transform =
      "rotate(-" + window.scrollY * 1.5 + "deg)";
  };

  useEffect(() => {
    if (windowSize > 768) {
      window.addEventListener("resize", updateSize);
      window.addEventListener("scroll", rotateGears);
      return () => {
        window.removeEventListener("resize", updateSize);
        window.removeEventListener("scroll", rotateGears);
      };
    }
  });

  return windowSize > 768 ? (
    <div id="gearContainer">
      <div id="gear" className="gears" ref={gearRef}></div>
      <div id="pinion" className="gears" ref={pinionRef}></div>
    </div>
  ) : null;
};

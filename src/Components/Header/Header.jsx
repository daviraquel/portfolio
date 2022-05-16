import { useState, useEffect } from "react";

import { DesktopHeader } from "./DesktopHeader/DesktopHeader";
import { MobileHeader } from "./MobileHeader/MobileHeader";

export const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const updateSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  return windowSize >= 768 ? <DesktopHeader /> : <MobileHeader />;
};

import { Gears } from "../../Components/Gears/Gears";
import { Header } from "../../Components/Header/Header";
import { MainTitle } from "../../Components/MainTitle/MainTitle";
import { AboutSection } from "../../Components/AboutSection/AboutSection";
import { WorksSection } from "../../Components/WorksSection/WorksSection";
import { ContactSection } from "../../Components/ContactSection/ContactSection";

export const Home = () => {
  return (
    <div id="homepage">
      <Gears />
      <Header />
      <MainTitle />
      <AboutSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
};

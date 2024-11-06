import { Gears } from "../Components/Gears"
import { Header } from "../Components/Header/Header"
import { MainTitle } from "../Components/MainTitle"
import { AboutSection } from "../Components/AboutSection"
import { WorksSection } from "../Components/WorksSection"
import { ContactSection } from "../Components/ContactSection"

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
  )
}

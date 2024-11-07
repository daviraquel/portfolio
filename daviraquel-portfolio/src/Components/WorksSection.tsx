import { Carrousel } from "./Carrousel/Carrousel"
import { DownArrow } from "./DownArrow"

const commonContainerClasses = "w-4/5 max-w-screen-lg mx-auto z-10"
const commonTextClasses = "text-center"

export const WorksSection: React.FC = () => {
  return (
    <section
      id="works"
      className="h-screen relative text-white pt-20 box-border"
    >
      <div className={`textContainer ${commonContainerClasses}`}>
        <h2 className={commonTextClasses}>
          Some projects showcasing my skills!
        </h2>
        {/* <p className={`${commonTextClasses} text-opacity-80 mt-[-2.5rem]`}>
          (without infringing NDA's)
        </p> */}
        <Carrousel />
      </div>
      <DownArrow linkUrl="#contact" />
    </section>
  )
}

import { DownArrow } from "./DownArrow"
import background from "../assets/img/logodavi.png"

const commonTextClasses = "text-center"
const commonContainerClasses =
  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-3xl"

export const MainTitle: React.FC = () => {
  return (
    <section className="h-screen relative bg-transparent text-shadow-white">
      <div className={`title-container ${commonContainerClasses}`}>
        <img
          src={background}
          alt="my desk"
          className="w-52 h-full object-cover z-[-1]"
        />
        <div className={commonTextClasses}>
          <h1 className="text-2xl mb-1">Davi Raquel</h1>
          <h2 className="m-0 p-1 pl-2">Full-stack developer</h2>
          <h2 className="m-0 p-1 pl-2">Production engineer</h2>
          <h2 className="m-0 p-1 pl-2">Problem solver</h2>
        </div>
      </div>
      <DownArrow linkUrl="#about" />
    </section>
  )
}

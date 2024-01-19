import { MainTitleContainer } from "./MainTitle.styled"
import { DownArrow } from "../DownArrow/DownArrow"
import background from "../../assets/img/logodavi.png"

export const MainTitle = () => {
  return (
    <MainTitleContainer>
      <div className="title-container">
        <img src={background} alt="my desk" />
        <div>
          <h1>Davi Raquel</h1>
          <h2>Full-stack developer</h2>
          <h2>Production engineer</h2>
          <h2>Problem solver</h2>
        </div>
      </div>
      <DownArrow link="#about" />
    </MainTitleContainer>
  )
}

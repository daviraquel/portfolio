import { MainTitleContainer } from "./MainTitle.styled";
import { DownArrow } from "../DownArrow/DownArrow";
import background from "../../assets/img/mainbg.webp";

export const MainTitle = () => {
  return (
    <MainTitleContainer>
      <img src={background} alt="my desk" />
      <h1>
        Hi, I'm <span>Davi</span>!
      </h1>
      <DownArrow link="#about" />
    </MainTitleContainer>
  );
};

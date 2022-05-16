import { Carousel } from "3d-react-carousal";

import { CarrouselCard } from "./CarrouselCard";
import { CarrouselContainer } from "./Carrousel.styled";
import { works } from "../../utils/utils";

export const Carrousel = () => {
  let slides = works.map((el) => (
    <CarrouselCard
      link={el.link}
      title={el.title}
      description={el.description}
      techs={el.techs}
      imageUrl={el.imageUrl}
    />
  ));

  return (
    <CarrouselContainer id="CARROSSEL">
      <Carousel slides={slides} arrows={true} />
    </CarrouselContainer>
  );
};

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import { CarrouselCard } from "./CarrouselCard"
import { works } from "../../helpers"

// const commonArrowClasses = "transition-transform duration-200 transform scale-120";
// const commonArrowHoverClasses = "hover:scale-150";

export const Carrousel: React.FC = () => {
  const slides = works.map((el) => (
    <SwiperSlide key={el.title}>
      <CarrouselCard
        link={el.link}
        title={el.title}
        description={el.description}
        techs={el.techs}
        imageUrl={el.imageUrl}
      />
    </SwiperSlide>
  ))

  return (
    <div id="CARROSSEL" className="mt-8">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slides}
      </Swiper>
    </div>
  )
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projectData from "../data/projectData.json";
import ProjectCard from "./ProjectCard.jsx";

function SwiperGroup() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="swiper-matching-height"
    >
      {projectData.map((project) => (
        <SwiperSlide key={project.title} className="h-full">
          <ProjectCard
            title={project.title}
            thumbnail={project.thumbnail}
            cardDesc={project.cardDesc}
            url={project.url}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperGroup;

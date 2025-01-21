import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projectData from "../data/projectData.json";

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
      height={100}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {projectData.map((project) => (
        <SwiperSlide key={project.title}>
          <div className="card flex flex-col justify-between h-full p-10 bg-primary">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-1/4 object-contain"
            />
            <h5 className="mt-4 text-lg font-semibold">{project.title}</h5>
            <p className="text-gray-600">{project.cardDesc}</p>
            <a
              href={project.link}
              className="bg-primary text-darkBgText rounded-full text-center p-2 custom-btn"
            >
              More info
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperGroup;

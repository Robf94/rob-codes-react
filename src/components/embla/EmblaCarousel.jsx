import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import projectData from "../../data/projectData.json";
import ProjectCard from "../ProjectCard.jsx";

function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      slidesToScroll: 1,
      duration: 10,
    },
    [WheelGesturesPlugin()],
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {projectData.map((project) => (
            <div key={project.title} className="embla__slide">
              <ProjectCard
                title={project.title}
                thumbnail={project.thumbnail}
                cardDesc={project.cardDesc}
                url={project.url}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls grid justify-between">
        <div className="embla__buttons grid items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots flex flex-wrap items-center justify-end">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmblaCarousel;

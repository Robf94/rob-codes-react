import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

function EmblaCarouselSubpage(props) {
  const { images } = props;
  const progressNode = useRef(null);

  const options = { loop: false };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  return (
    <div className="embla">
      <div className="subpage__embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="subpage__embla__container flex">
          {images.map((image, index) => (
            <div className="subpage__embla__slide" key={index}>
              <div
                className="image-container"
                style={{ backgroundImage: `url(${image})` }}
              >
                <img
                  src={image}
                  alt={`Project screenshot ${index + 1}`}
                  className="object-contain"
                />
              </div>
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

export default EmblaCarouselSubpage;

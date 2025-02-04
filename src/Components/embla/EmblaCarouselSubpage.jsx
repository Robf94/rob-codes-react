import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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

  const options = { loop: true };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

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
    </div>
  );
}

export default EmblaCarouselSubpage;

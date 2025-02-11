import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import scrollToView from "../utils/scrollToView";

function Hero() {
  return (
    <section
    className="custom-padding-lg flex h-screen scroll-mt-nav bg-primary px-2"
    id="hero"
    >
      <div className="relative flex h-full w-full flex-col items-center justify-evenly gap-0 pt-nav md:flex-row md:justify-between">
        <div className="w-full text-darkBgText md:w-1/2">
          <h2 className="mb-2 text-4xl">Hi, I'm Rob</h2>
          <p className="mb-0 text-xl">
            I'm a self-motivated junior software developer looking to begin a
            career in the industry. With a growing wealth of experience to hand,
            my ambition is to become a full-stack software developer. Please
            feel free to browse my recent projects below!
          </p>
        </div>
        <div className="flex w-auto justify-center">
          <img
            src="/assets/me/rob-cropped.jpg"
            alt="A photo of Rob"
            className="rob-photo aspect-square w-[300px] rounded-full"
          />
        </div>

        <div className="absolute hidden w-full justify-center self-end text-5xl text-darkBgText md:flex">
          <a
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              scrollToView("work");
            }}
          >
            <FontAwesomeIcon icon={faAngleDown} />
            {/* Animate with Motion */}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

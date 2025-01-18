import robImage from "../assets/me/rob-cropped.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section
      className="flex custom-padding-lg"
      id="about-me"
    >
      <div className="flex flex-col md:flex-row items-center justify-between h-full gap-0 row-about">
        <div className="text-container w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-2">Hi, I'm Rob</h2>
          <p className="text-lg mb-0">
            I'm a self-motivated junior software developer looking to begin a career in the
            industry. With a growing wealth of experience to hand, my ambition is to become a
            full-stack software developer. Please feel free to browse my recent projects below!
          </p>
        </div>
        <div className="img-container w-full md:w-1/2">
          <img
            src={robImage}
            alt="A photo of Rob"
            className="rob-photo rounded-full"
          />
        </div>

        <div className="arrow-container hidden md:flex justify-center w-full">
          <a
            className="nav-link"
            href="#my-projects"
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

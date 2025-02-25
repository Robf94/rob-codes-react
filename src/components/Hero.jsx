import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import scrollToView from "../utils/scrollToView";
import { motion, useScroll, useTransform } from "motion/react";

function Hero() {
  const { scrollY } = useScroll();
  const fadeOut = useTransform(scrollY, [500, 800], [1, 0]);
  const moveUp = useTransform(scrollY, [0, 3000], [0, -500]);

  return (
    <motion.section
      className="custom-padding-lg flex h-screen scroll-mt-nav overflow-x-hidden bg-primary px-2"
      id="hero"
      style={{ translateY: moveUp, opacity: fadeOut }}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-evenly gap-0 pt-nav md:flex-row md:justify-between">
        <motion.div
          className="w-full text-darkBgText md:w-1/2"
          initial={{ translateX: -1000, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            opacity: fadeOut,
            translateY: moveUp,
          }}
        >
          <h2 className="mb-2 text-4xl">Hi, I'm Rob</h2>
          <p className="mb-0 text-xl">
            I'm a self-motivated software developer with a passion for building
            beautiful, functional web apps. With hands-on experience in
            full-stack development, I specialize in crafting responsive websites
            and dynamic apps for clients. I have an eye for detail and bring a
            problem-solving mindset to every task. Please feel free to browse my
            recent projects below!
          </p>
        </motion.div>
        <motion.div
          className="flex w-auto justify-center"
          initial={{ translateX: 1000, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            opacity: fadeOut,
            translateY: moveUp,
          }}
        >
          <img
            src="/assets/me/rob-cropped.jpg"
            alt="A photo of Rob"
            className="rob-photo aspect-square w-[300px] rounded-full"
          />
        </motion.div>

        <div className="absolute hidden w-full justify-center self-end text-5xl text-darkBgText md:flex">
          <a
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              scrollToView("work");
            }}
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;

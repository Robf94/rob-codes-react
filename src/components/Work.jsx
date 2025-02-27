import EmblaCarousel from "./embla/EmblaCarousel";
import { motion } from "motion/react";

function Work() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5, once: true }}
      className="custom-padding-lg mb-5 scroll-mt-nav px-2"
      id="work"
    >
      <h1 className="mb-2 w-full text-4xl md:text-center">Work</h1>
      <EmblaCarousel />
    </motion.section>
  );
}

export default Work;

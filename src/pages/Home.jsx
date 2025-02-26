import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "../components/Work";
import HighFive from "../components/HighFive";

function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Skills />
      <div
        className="custom-padding-lg flex scroll-mt-nav flex-col gap-2 px-2 my-5 md:flex-row"
        id="contact"
      >
        <ContactForm />
        <HighFive />
      </div>
    </>
  );
}

export default Home;

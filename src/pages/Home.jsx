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
      <div className="custom-padding-lg flex scroll-mt-nav flex-col gap-6 px-2 py-10 md:flex-row">
        <ContactForm />
        <HighFive />
      </div>
    </>
  );
}

export default Home;

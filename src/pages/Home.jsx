import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "../components/Work";

function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Skills />
      <div
        className="custom-padding-lg my-5 flex scroll-mt-nav flex-col justify-center gap-2 px-2 md:flex-row"
        id="contact"
      >
        <ContactForm />
      </div>
    </>
  );
}

export default Home;

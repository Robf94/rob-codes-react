import { useParams } from "react-router-dom";
import projectData from "../data/projectData.json";
import Button from "../components/Button";
import EmblaCarouselSubpage from "../components/embla/EmblaCarouselSubpage";

function WorkSubpage() {
  const { url } = useParams();
  const project = projectData.find((p) => p.url === url);

  if (!project) {
    return <div className="p-6 text-red-500">Project not found.</div>;
  }

  return (
    <section
      className="subpages-main custom-padding-lg mt-nav px-3 py-nav"
      id={project.url}
    >
      <div className="mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl font-semibold">{project.title}</h1>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full md:w-1/2">
            <EmblaCarouselSubpage images={project.screenshots} />
          </div>

          <div className="w-full md:w-1/2">
            <div className="desc-container mb-6">
              <h3 className="text-2xl font-semibold">About</h3>
              <p>{project.about}</p>
            </div>
            <div className="skills-container mb-6">
              <h3 className="text-xl font-semibold">Skills Learned</h3>
              <ul>
                {project.skills.map((skill, index) => (
                  <li key={index} className="ml-6 list-outside list-disc">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <Button buttonLink={project.extUrl} buttonText="View Project" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSubpage;

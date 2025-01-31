import { useParams } from "react-router-dom";
import projectData from "../data/projectData.json";
import SubpageSwiperGroup from "../components/SubpageSwiperGroup";

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
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-4xl font-semibold">{project.title}</h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Swiper Section */}
          <div className="w-full md:w-1/2">
            <SubpageSwiperGroup images={project.screenshots} />
          </div>

          {/* Description & Skills Section */}
          <div className="w-full md:w-1/2">
            <div className="desc-container mb-6">
              <h3 className="text-2xl font-semibold">About</h3>
              <p>{project.about}</p>
            </div>
            <div className="skills-container mb-6">
              <h3 className="text-xl font-semibold">Skills Learned</h3>
              <ul>
                {project.skills.map((skill, index) => (
                  <li key={index} className="list-disc pl-5">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="rounded mt-4 inline-block bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSubpage;

import skills from "../data/skills.json";

function Skills() {
  return (
    <section className="custom-padding-lg px-2 my-5">
      <h1 className="mb-2 w-full text-4xl md:text-center">Skills</h1>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex w-[calc(100%/3-0.75rem)] items-center justify-center sm:w-[calc(100%/4-0.75rem)] md:w-[calc(100%/6-0.75rem)] lg:w-[calc(100%/12-0.75rem)]"
          >
            <div className="tooltip text-white" data-tip={skill.name}>
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-16 sm:w-14 md:w-24 lg:w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

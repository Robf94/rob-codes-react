import skills from "../data/skills.json";

// Make loop scrollable

function Skills() {
  return (
    <section className="custom-padding-lg py-10 px-2">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Skills</h1>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

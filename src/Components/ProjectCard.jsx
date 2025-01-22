import Button from "./Button";

function ProjectCard(props) {
  const { title, thumbnail, cardDesc, url } = props;
  return (
    <div className="workCard flex flex-col justify-between h-full p-10">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-1/4 object-contain"
      />
      <h5 className="mt-4 text-lg font-semibold">{title}</h5>
      <p className="text-gray-600">{cardDesc}</p>
      <Button
        buttonText="More info"
        buttonLink={url}
      />
    </div>
  );
}

export default ProjectCard;

import Button from "./Button";

function ProjectCard(props) {
  const { title, thumbnail, cardDesc, url } = props;
  return (
    <div className="flex h-full flex-col justify-evenly rounded-xl bg-white p-10">
      <img
        src={thumbnail}
        alt={title}
        className="h-[75px] w-full object-contain"
      />
      <div className="text-wrapper mb-5 mt-10 flex flex-grow flex-col">
        <h5 className="text-lg font-semibold">{title}</h5>
        <p className="text-gray-600">{cardDesc}</p>
      </div>
      <Button buttonText="More info" buttonLink={url} />
    </div>
  );
}

export default ProjectCard;

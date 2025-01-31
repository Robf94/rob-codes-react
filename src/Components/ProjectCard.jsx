import { Link } from "react-router-dom";
import Button from "./Button";

function ProjectCard(props) {
  const { title, thumbnail, cardDesc, url } = props;
  return (
    <div className="workCard flex h-full flex-col justify-between p-10">
      <img
        src={thumbnail}
        alt={title}
        className="h-1/4 w-full object-contain"
      />
      <h5 className="mt-4 text-lg font-semibold">{title}</h5>
      <p className="text-gray-600">{cardDesc}</p>
      <Link to={`${url}`}>
        <Button
          buttonText="More info"
          // buttonLink={url}
        />
      </Link>
    </div>
  );
}

export default ProjectCard;

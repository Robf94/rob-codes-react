import { Link } from "react-router-dom";

function Button(props) {
  const { buttonText, buttonLink } = props;

  const isExternal = /^https?:\/\//.test(buttonLink);
  return isExternal ? (
    <a
      href={buttonLink}
      target="_blank"
      rel="noopener noreferrer"
      className="custom-btn mt-auto w-full rounded-full bg-primary p-2 text-center text-darkBgText"
    >
      {buttonText}
    </a>
  ) : (
    <Link to={buttonLink}>
      <button className="custom-btn mt-auto w-full rounded-full bg-primary p-2 text-center text-darkBgText">
        {buttonText}
      </button>
    </Link>
  );
}

export default Button;

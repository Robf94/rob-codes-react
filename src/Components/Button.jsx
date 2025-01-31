import { Link } from "react-router-dom";

function Button(props) {
  const { buttonText, buttonLink } = props;
  return (
    <button className="custom-btn mt-auto w-full rounded-full bg-primary p-2 text-center text-darkBgText">
      <Link to={buttonLink}>{buttonText}</Link>
    </button>
  );
}

export default Button;

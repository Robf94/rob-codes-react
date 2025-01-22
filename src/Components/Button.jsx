import {Link} from "react-router-dom"

function Button(props) {
  const { buttonText, buttonLink } = props;
  return (
    <button className="bg-primary text-darkBgText rounded-full w-full text-center p-2 custom-btn mt-auto">
      <Link to={buttonLink}>{buttonText}</Link>
    </button>
  );
}

export default Button;

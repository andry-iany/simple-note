import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h3 className="py-4 text-orange">
      <Link to="/" className="mb-4 text-reset text-decoration-none">
        Simple Note
      </Link>
    </h3>
  );
};

export default Logo;

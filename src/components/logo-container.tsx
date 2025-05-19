import { Link } from "react-router-dom";

const LogoContainer = () => {
  return (
    <Link to="/">
      <img
        src="/svg/logo.svg"
        alt="Logo"
        className="min-w-10 max-h-10 object-cover"
      />
    </Link>
  );
};

export default LogoContainer;

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="Hi Bill" width={48}></img>
    </Link>
  );
};

export default Logo;

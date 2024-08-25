import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Hi Bill" width={48}></img>
    </a>
  );
};

export default Logo;

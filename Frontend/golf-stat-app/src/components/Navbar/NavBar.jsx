import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  const handleClick = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };
  return (
    <nav className="navbar">
      <ul>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/player">
          <button>Player Page</button>
        </Link>
        <Link to="/scorecard">
          <button>Scorecard</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/">
          <button onClick={handleClick}>Logout</button>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;

import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
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
      </ul>
    </nav>
  );
};

export default NavBar;

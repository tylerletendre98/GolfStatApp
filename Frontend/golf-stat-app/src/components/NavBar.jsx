import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/player">
          <li>Player Page</li>
        </Link>
        <Link to="/scorecard">
          <li>Score Card</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;

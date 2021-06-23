import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = (props) => {
  const handleClick = () => {
    localStorage.removeItem("token");
    alert("You've been logged out!");
    window.location = "/";
  };

  if (props.player === undefined) {
    return (
      <nav className="navbar">
        <ul>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </ul>
      </nav>
    );
  } else
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
          <Link to="/golferData">
            <button>Player Data</button>
          </Link>
          <Link to="/golfFriends">
            <button>Golf Friends</button>
          </Link>
          <Link to="/">
            <button onClick={handleClick}>Logout</button>
          </Link>
        </ul>
      </nav>
    );
};

export default NavBar;

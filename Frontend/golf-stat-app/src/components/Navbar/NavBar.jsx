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
      <div>
        <div>
          <h1>Golf Stat App</h1>
        </div>
        <nav className="nav justify-content-center">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                style={{ backgroundColor: "wheat" }}
              >
                <Link to="/">
                  <button>Home</button>
                </Link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#" style={{ backgroundColor: "wheat" }}>
                <Link to="/exploreCourses">
                  <button>Explore Courses</button>
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ backgroundColor: "wheat" }}>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ backgroundColor: "wheat" }}>
                <Link to="/register">
                  <button>Register</button>
                </Link>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else
    return (
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            href="#"
            style={{ backgroundColor: "wheat" }}
          >
            <Link to="/">
              <button>Home</button>
            </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{ backgroundColor: "wheat" }}>
            <Link to="/player">
              <button>Player Page</button>
            </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{ backgroundColor: "wheat" }}>
            <Link to="/scorecard">
              <button>Add A Round</button>
            </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{ backgroundColor: "wheat" }}>
            <Link to="/golferData">
              <button>Player Data</button>
            </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{ backgroundColor: "wheat" }}>
            <Link to="/exploreCourses">
              <button>Explore Courses</button>
            </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{ backgroundColor: "wheat" }}>
            <Link to="/golfFriends">
              <button>Golf Friends</button>
            </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{ backgroundColor: "wheat" }}>
            <Link to="/">
              <button onClick={handleClick}>Logout</button>
            </Link>
          </a>
        </li>
      </ul>
    );
};

export default NavBar;

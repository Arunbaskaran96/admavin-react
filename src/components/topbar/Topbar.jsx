// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from "./topbar.module.css";
function Topbar() {
  return (
    <header className={classes.container}>
      <h3>AdMavin</h3>
      <nav className={classes.navigation}>
        <ul className={classes.lists}>
          <li className={classes.link}>
            <NavLink
              to="/elementtransfer"
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: "red",
                      backgroundColor: "white",
                      padding: "10px 20px",
                    }
                  : { color: "white" };
              }}
            >
              Task1
            </NavLink>
          </li>
          <li className={classes.link}>
            <NavLink
              to="/file"
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: "red",
                      backgroundColor: "white",
                      padding: "10px 20px",
                    }
                  : { color: "white" };
              }}
            >
              Task2
            </NavLink>
          </li>
          <li className={classes.link}>
            <NavLink
              to="/infinitescroll"
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: "red",
                      backgroundColor: "white",
                      padding: "10px 20px",
                    }
                  : { color: "white" };
              }}
            >
              Task3
            </NavLink>
          </li>
          <li className={classes.link}>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: "red",
                      backgroundColor: "white",
                      padding: "10px 20px",
                    }
                  : { color: "white" };
              }}
            >
              Task4
            </NavLink>
          </li>

          <li className={classes.link}>
            <NavLink
              to="/square"
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: "red",
                      backgroundColor: "white",
                      padding: "10px 20px",
                    }
                  : { color: "white" };
              }}
            >
              Task5
            </NavLink>
          </li>
        </ul>
        {/* <Link to="/elementtansfer">
          <p className={classes.link}>Task1</p>
        </Link>
        <Link to="/infinitescroll">
          <p className={classes.link}>Task2</p>
        </Link>
        <Link to="/file">
          <p className={classes.link}>Task3</p>
        </Link>
        <Link to="/game">
          <p className={classes.link}>Task4</p>
        </Link>
        <Link to="/square">
          <p className={classes.link}>Task5</p>
        </Link> */}
      </nav>
    </header>
  );
}

export default Topbar;

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
              Task3
            </NavLink>
          </li>
          <li className={classes.link}>
            <NavLink
              to="/game"
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
      </nav>
    </header>
  );
}

export default Topbar;

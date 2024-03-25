// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./topbar.module.css";
function Topbar() {
  return (
    <header className={classes.container}>
      <h3>AdMavin</h3>
      <nav className={classes.navigation}>
        <ul className={classes.lists}>
          <li className={classes.link}>Task1</li>
          <Link to="/file">
            <li className={classes.link}>Task2</li>
          </Link>
          <li className={classes.link}>Task3</li>
          <li className={classes.link}>Task4</li>
          <li className={classes.link}>Task5</li>
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

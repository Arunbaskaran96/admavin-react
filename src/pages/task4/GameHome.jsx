import { useEffect, useState } from "react";
import classes from "./game.module.css";
import Game from "./Game";

function GameHome() {
  const [countDown, setCountDown] = useState(3);
  useEffect(() => {
    countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
  }, [countDown]);
  return countDown > 0 ? (
    <div className={`${classes.homeContainer} ${classes.flexBox}`}>
      <h2>Hi ✨ Welcome to the game</h2>
      <h3>{`Please wait.... Game Starts in ${countDown}`}</h3>
    </div>
  ) : (
    <Game />
  );
}

export default GameHome;

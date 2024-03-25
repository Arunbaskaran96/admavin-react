import { useEffect, useState } from "react";
import classes from "./game.module.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Game() {
  const [timer, setTimer] = useState(10);
  const [correctBox, setCorrectBox] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameEnd, setGmaeEnd] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const { setItem, getItem } = useLocalStorage("highestScore");
  const [newHighScore, setNewHighScore] = useState(false);
  if (timer == 0) {
    const hs = getItem();
    if (hs < score) {
      setNewHighScore(true);
      setItem(score);
    }
  }

  useEffect(() => {
    if (timer === 0) {
      setGmaeEnd(true);
    }
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  useEffect(() => {
    if (clickCount == 0 && gameStart) {
      setScore((s) => s - 2.5);
    }
    setGameStart(true);
    setClickCount(0);

    const randomNum = Math.ceil(Math.random() * (9 - 1) + 1);
    const element = document.getElementById(randomNum);
    setCorrectBox(randomNum);
    element.innerText = "HIT";
    return () => (element.innerText = null);
  }, [timer]);

  const boxes = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "6",
    },
    {
      id: "7",
    },
    {
      id: "8",
    },
    {
      id: "9",
    },
  ];
  const clickHandler = (e) => {
    if (clickCount === 0) {
      setClickCount(clickCount + 1);
      const element = e.target.getAttribute("data-id");
      if (element == correctBox) {
        setScore(score + 5);
      }
    }
  };
  return !gameEnd ? (
    <div className={`${classes.container} ${classes.flexContainer}`}>
      <div>
        <h3>{`Game Ends in ${timer}`}</h3>
      </div>
      <div className={classes.gameContainer}>
        {boxes.map((item) => {
          return (
            <div
              id={item.id}
              onClick={clickHandler}
              className={`${classes.box} ${classes.flexContainer}`}
              key={item.id}
              data-id={item.id}
            ></div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className={`${classes.container} ${classes.flexContainer}`}>
      {newHighScore && <h2>Congratulation 😎 you set a new high score</h2>}
      <h3>{`Your final score is ${score}`}</h3>
    </div>
  );
}

export default Game;

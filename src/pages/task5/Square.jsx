import { makeSquare } from "../../utils/makeSquare";
import "./square.css";

function Square() {
  const squareHandler = (e) => {
    makeSquare(e);
  };
  return (
    <div className="container">
      <div
        data-id="root"
        className="square flexContainer"
        onClick={squareHandler}
      ></div>
    </div>
  );
}

export default Square;

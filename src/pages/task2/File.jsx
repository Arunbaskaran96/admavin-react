import { useState } from "react";
import classes from "./file.module.css";

function File({ file }) {
  const [expand, setExpand] = useState(false);

  const clickHandler = (e) => {
    e.stopPropagation();
    setExpand(!expand);
  };
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <div
          style={{ cursor: "pointer" }}
          key={file.id}
          className={classes.item}
        >
          <div id={file.id} className={classes.parent} onClick={clickHandler}>
            📁 {file.title}
          </div>
          <div
            className={classes.child}
            style={{
              display: expand ? "block" : "none",
            }}
          >
            {file.child.map((file) => {
              return <File key={file.id} file={file} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default File;

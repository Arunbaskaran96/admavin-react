import classes from "./file.module.css";
import file from "./file.json";
import File from "./File";

function FileHome() {
  return (
    <div className={classes.fileContainer}>
      {file.map((file) => {
        return <File key={file.id} file={file} />;
      })}
    </div>
  );
}

export default FileHome;

import classes from "./loading.module.css";

function Loading() {
  return (
    <div className={classes.container}>
      <div className={classes.loading}></div>
    </div>
  );
}

export default Loading;

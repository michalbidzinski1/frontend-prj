import classes from "./BookDetail.module.scss";

function Book(props) {
  return <div className={classes.book}>{props.children}</div>;
}

export default Book;

import classes from "./Form.module.scss";

function Form(props) {
  return <div className={classes.form}>{props.children}</div>;
}

export default Form;

import React from "react";

// Styling
import classes from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
  return <div className={classes.btn}>{children}</div>;
};

export default Button;

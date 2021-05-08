import React from "react";

// Styling
import classes from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  extraClasses?: string;
}

const Button: React.FC<Props> = ({ children, extraClasses }) => {
  return (
    <div className={`${classes.btn} ${extraClasses ? extraClasses : ""}`}>
      {children}
    </div>
  );
};

export default Button;

import React from "react";

// Styling
import classes from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  extraClasses?: string;
  handleUpload?: any;
}

const Button: React.FC<Props> = ({ children, extraClasses, handleUpload }) => {
  return (
    <div
      onClick={handleUpload}
      className={`${classes.btn} ${extraClasses ? extraClasses : ""}`}
    >
      {children}
    </div>
  );
};

export const HTMLButton: React.FC<Props> = ({ children, extraClasses }) => {
  return (
    <button className={`${classes.btn} ${extraClasses ? extraClasses : ""}`}>
      {children}
    </button>
  );
};

export default Button;

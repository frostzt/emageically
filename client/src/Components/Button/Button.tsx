import React from "react";

// Styling
import classes from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  extraClasses?: string;
  inverted?: Boolean;
  handleUpload?: any;
}

const Button: React.FC<Props> = ({
  children,
  extraClasses,
  handleUpload,
  inverted,
}) => {
  return (
    <div
      onClick={handleUpload}
      className={`${classes.btn} ${inverted ? classes.inverted : ""} ${
        extraClasses ? extraClasses : ""
      }`}
    >
      {children}
    </div>
  );
};

export const HTMLButton: React.FC<Props> = ({
  children,
  extraClasses,
  inverted,
}) => {
  return (
    <button
      className={`${classes.btn} ${inverted ? classes.inverted : ""} ${
        extraClasses ? extraClasses : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

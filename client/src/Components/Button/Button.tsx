import React from "react";

// Styling
import classes from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  extraClasses?: string;
  inverted?: Boolean;
  handler?: any;
  style?: React.CSSProperties;
}

const Button: React.FC<Props> = ({
  children,
  extraClasses,
  inverted,
  style,
  handler,
}) => {
  return (
    <div
      onClick={handler}
      className={`${classes.btn} ${inverted ? classes.inverted : ""} ${
        extraClasses ? extraClasses : ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export const HTMLButton: React.FC<Props> = ({
  children,
  extraClasses,
  inverted,
  style,
  handler,
}) => {
  return (
    <button
      onClick={handler}
      className={`${classes.btn} ${inverted ? classes.inverted : ""} ${
        extraClasses ? extraClasses : ""
      }`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;

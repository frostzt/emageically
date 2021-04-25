import React from "react";

// Styling
import classes from "./Masonry.module.scss";

interface Props {
  children: React.ReactNode;
}

const Masonry: React.FC<Props> = ({ children }) => {
  return <div className={classes.masonry}>{children}</div>;
};

export default Masonry;

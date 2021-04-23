import React from "react";

// Stylin
import cx from "classnames";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <div className={classes.logo__iContainer}>
        <img
          className={classes.logo__iContainer_image}
          src={process.env.PUBLIC_URL + "logo.svg"}
          alt="Emageically"
        />
      </div>
      <div className={cx(classes.logo__text, "mar-l-2rem")}>
        <h1 className={classes.logo__text_heading}>Emageically</h1>
        <p className={classes.logo__text_desc}>Upload and find images!</p>
      </div>
    </div>
  );
};

export default Logo;

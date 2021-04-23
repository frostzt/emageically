import * as React from "react";

// Style
import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__iContainer}>
        <img
          className={classes.header__iContainer_image}
          src={process.env.PUBLIC_URL + "logo.svg"}
          alt="Emageically"
        />
      </div>
      <div className={classes.header__text}>
        <h1 className={classes.header__text_heading}>Emageically</h1>
        <p className={classes.header__text_desc}>Upload and find images!</p>
      </div>
    </div>
  );
};

export default Header;

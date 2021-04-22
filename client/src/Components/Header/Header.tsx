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
    </div>
  );
};

export default Header;

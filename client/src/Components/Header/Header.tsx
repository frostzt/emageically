import * as React from "react";

// Styling
import classes from "./Header.module.scss";

// Components
import Logo from "../LogoContainer/Logo";

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <Logo />
    </div>
  );
};

export default Header;

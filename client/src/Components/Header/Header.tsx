import * as React from "react";

// Styling
import classes from "./Header.module.scss";

// Components
import Logo from "../LogoContainer/Logo";
import Search from "../Search/Search";

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <Search extraClasses="mar-l-5rem" />
    </div>
  );
};

export default Header;

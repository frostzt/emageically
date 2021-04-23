import * as React from "react";

// Styling
import classes from "./Header.module.scss";

// Components
import Logo from "../LogoContainer/Logo";
import Search from "../Search/Search";

interface Props {
  handleSearchChange: Function;
  search: string;
}

const Header: React.FC<Props> = ({ handleSearchChange, search }) => {
  return (
    <div className={classes.header}>
      <Logo />
      <Search
        search={search}
        handleSearchChange={handleSearchChange}
        extraClasses="mar-l-5rem"
      />
    </div>
  );
};

export default Header;

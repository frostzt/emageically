import * as React from "react";
import { useMediaQuery } from "react-responsive";

// Styling
import classes from "./Header.module.scss";

// Components
import Logo from "../LogoContainer/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

interface Props {
  handleSearchChange: Function;
  handleUpload: Function;
  search: string;
}

const Header: React.FC<Props> = ({
  handleSearchChange,
  search,
  handleUpload,
}) => {
  const isMobileLarge: Boolean = useMediaQuery({
    query: "(max-device-width: 26.5625em)",
  });

  return (
    <div className={classes.header}>
      <Logo />
      {isMobileLarge ? null : (
        <Search
          search={search}
          handleSearchChange={handleSearchChange}
          extraClasses="mar-l-5rem"
        />
      )}
      <Button handler={handleUpload} extraClasses={classes.btn}>
        Add Image
      </Button>
    </div>
  );
};

export default Header;

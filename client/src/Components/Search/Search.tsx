import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

// Styling
import cx from "classnames";
import classes from "./Search.module.scss";

// Components
import Input from "../Input/Input";

interface Props {
  extraClasses?: string | undefined;
}

const Search: React.FC<Props> = ({ extraClasses }) => {
  return (
    <div className={`${classes.search} ${extraClasses ? extraClasses : ""}`}>
      <div className={classes.search__container}>
        <AiOutlineSearch className={classes.search__container_icon} />
        <Input
          placeholder="Search by name"
          classname={classes.search__container_input}
        />
      </div>
    </div>
  );
};

export default Search;

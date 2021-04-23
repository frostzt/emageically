import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

// Styling
import classes from "./Search.module.scss";

const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes.search__container}>
        <AiOutlineSearch />
        <input className={classes.search__container_input} type="text" />
      </div>
    </div>
  );
};

export default Search;

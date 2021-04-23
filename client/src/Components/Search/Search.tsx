import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

// Styling
import classes from "./Search.module.scss";

// Components
import Input from "../Input/Input";

const Search = () => {
  return (
    <div className={classes.search}>
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

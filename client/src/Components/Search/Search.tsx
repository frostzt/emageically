import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

// Styling
import classes from "./Search.module.scss";

// Components
import Input from "../Input/Input";

interface Props {
  extraClasses?: string | undefined;
  handleSearchChange: Function;
  search: string;
}

const Search: React.FC<Props> = ({
  extraClasses,
  handleSearchChange,
  search,
}) => {
  return (
    <div className={`${classes.search} ${extraClasses ? extraClasses : ""}`}>
      <div className={classes.search__container}>
        <AiOutlineSearch className={classes.search__container_icon} />
        <Input
          value={search}
          placeholder="Search by name"
          handleSearchChange={handleSearchChange}
          classname={classes.search__container_input}
        />
      </div>
    </div>
  );
};

export default Search;

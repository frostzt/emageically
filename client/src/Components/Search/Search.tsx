import React from "react";
import SearchOutlined from "@ant-design/icons";

// Styling
import classes from "./Search.module.scss";

const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes.search__container}>
        <input className={classes.search__container_input} type="text" />
      </div>
    </div>
  );
};

export default Search;

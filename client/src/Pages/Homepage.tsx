import React, { Fragment, useState } from "react";

// Style
import classes from "./Homepage.module.scss";

// Components
import Header from "../Components/Header/Header";
import ImageCard from "../Components/ImageCard/ImageCard";

const Homepage: React.FC = () => {
  const [search, setSearch] = useState("");

  // Handle SearchChange
  const handleSearchChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <Fragment>
      <Header search={search} handleSearchChange={handleSearchChange} />
      <div className={classes.homepage}></div>
    </Fragment>
  );
};

export default Homepage;

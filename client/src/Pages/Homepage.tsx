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
      <div className={classes.homepage}>
        <ImageCard
          imageSource={`${process.env.PUBLIC_URL + "images/Image1.jpg"}`}
          title="Some people are there"
        />
        <ImageCard
          imageSource={`${process.env.PUBLIC_URL + "images/Image2.jpg"}`}
          title="Some people are there"
        />
        <ImageCard
          imageSource={`${process.env.PUBLIC_URL + "images/Image3.jpg"}`}
          title="Some people are there"
        />
        <ImageCard
          imageSource={`${process.env.PUBLIC_URL + "images/Image4.jpg"}`}
          title="Some people are there"
        />
        <ImageCard
          imageSource={`${process.env.PUBLIC_URL + "images/Image5.jpg"}`}
          title="Some people are there"
        />
        <ImageCard
          imageSource={`${process.env.PUBLIC_URL + "images/Image6.jpg"}`}
          title="Some people are there"
        />
        <ImageCard
          imageSource={`${process.env.PUBLIC_URL + "images/Image7.jpg"}`}
          title="Some people are there"
        />
        <ImageCard
          imageSource={`${process.env.PUBLIC_URL + "images/Image8.jpg"}`}
          title="Some people are there"
        />
      </div>
    </Fragment>
  );
};

export default Homepage;

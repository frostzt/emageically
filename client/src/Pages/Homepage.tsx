import React, { Fragment, useState } from "react";

// Style
import classes from "./Homepage.module.scss";

// Layout
import Masonry from "../Layouts/Masonry/Masonry";

// Components
import Header from "../Components/Header/Header";
import ImageCard from "../Components/ImageCard/ImageCard";

const Homepage: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  // Handle SearchChange
  const handleSearchChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <Fragment>
      <Header search={search} handleSearchChange={handleSearchChange} />
      <div className={classes.homepage}>
        <Masonry>
          <ImageCard
            title="Something about people"
            imageSource={`${process.env.PUBLIC_URL + "images/Image1.jpg"}`}
          />
          <ImageCard
            title="Something about people"
            imageSource={`${process.env.PUBLIC_URL + "images/Image2.jpg"}`}
          />
          <ImageCard
            title="Something about people"
            imageSource={`${process.env.PUBLIC_URL + "images/Image3.jpg"}`}
          />
          <ImageCard
            title="Something about people"
            imageSource={`${process.env.PUBLIC_URL + "images/Image4.jpg"}`}
          />
          <ImageCard
            title="Something about people"
            imageSource={`${process.env.PUBLIC_URL + "images/Image5.jpg"}`}
          />
          <ImageCard
            title="Something about people"
            imageSource={`${process.env.PUBLIC_URL + "images/Image6.jpg"}`}
          />
          <ImageCard
            title="Something about people"
            imageSource={`${process.env.PUBLIC_URL + "images/Image7.jpg"}`}
          />
          <ImageCard
            title="Something about people"
            imageSource={`${process.env.PUBLIC_URL + "images/Image8.jpg"}`}
          />
        </Masonry>
      </div>
    </Fragment>
  );
};

export default Homepage;

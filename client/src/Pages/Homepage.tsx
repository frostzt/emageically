import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

// Style
import classes from "./Homepage.module.scss";

// Layout
import Masonry from "../Layouts/Masonry/Masonry";

// Components
import Header from "../Components/Header/Header";
import ImageCard from "../Components/ImageCard/ImageCard";

// GLOBALS
const ENDPOINT = `http://localhost:5000/api/v1/images`;

const Homepage: React.FC = () => {
  const [length, setLength] = useState(0);
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      axios.get(ENDPOINT).then((response) => {
        setIsLoading(false);
        setLength(response.data.length);
        setImages(response.data.formattedFiles);
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  // Handle SearchChange
  const handleSearchChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <Fragment>
      <Header search={search} handleSearchChange={handleSearchChange} />
      <div className={classes.homepage}>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <Masonry>
            {images.map((link, index) => (
              <ImageCard
                key={index}
                imageSource={link}
                title="Humans are not that good!"
              />
            ))}
          </Masonry>
        )}
      </div>
    </Fragment>
  );
};

export default Homepage;

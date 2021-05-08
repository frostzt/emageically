import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

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
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      axios.get(ENDPOINT).then((response) => {
        setIsLoading(false);
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
            {images.map(({ title, link, id }) => (
              <ImageCard title={title} imageSource={link} key={id} />
            ))}
          </Masonry>
        )}
      </div>
    </Fragment>
  );
};

export default Homepage;

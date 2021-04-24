import React from "react";

// Styling
import classes from "./ImageCard.module.scss";

interface Props {
  title: string;
  imageSource: string;
  imageAlt?: string;
}

const ImageCard: React.FC<Props> = ({ title, imageSource, imageAlt }) => {
  return (
    <div className={classes.imageCard}>
      <div className={classes.imageCard__container}>
        <img
          className={classes.imageCard__container_image}
          src={imageSource}
          alt={imageAlt ? imageAlt : title}
        />
      </div>
    </div>
  );
};

export default ImageCard;

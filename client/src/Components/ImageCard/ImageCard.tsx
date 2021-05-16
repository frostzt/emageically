import React, { Fragment, useState } from "react";

// Styling
import classes from "./ImageCard.module.scss";

// Components
import ImageFocus from "../ImageFocus/ImageFocus";

interface Props {
  title: string;
  imageSource: string;
  imageAlt?: string;
}

const ImageCard: React.FC<Props> = ({ title, imageSource, imageAlt }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Handle Image focusing
  const handleFocus = () => {
    return setIsFocused((prevState) => !prevState);
  };

  return (
    <Fragment>
      {isFocused ? <ImageFocus /> : null}
      <div className={classes.imageCard} onClick={handleFocus}>
        <div className={classes.imageCard__title}>{title}</div>
        <div className={classes.imageCard__container}>
          <img
            className={classes.imageCard__container_image}
            src={imageSource}
            alt={imageAlt ? imageAlt : title}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ImageCard;

import React, { useRef, useState } from "react";

// Styling
import classes from "./ImageCard.module.scss";

interface Props {
  title: string;
  imageSource: string;
  imageAlt?: string;
}

type NumUndef = number | undefined;

const ImageCard: React.FC<Props> = ({ title, imageSource, imageAlt }) => {
  const [height, setHeight] = useState<NumUndef>(0);
  const [width, setWidth] = useState<NumUndef>(0);

  const imageRef = useRef<HTMLImageElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  let imageBelow: any;

  const setupLayout = (imageBelow: any) => {};

  const calculateHeight: Function = () => {
    setHeight(() => imageRef.current?.offsetHeight);
    setWidth(() => imageRef.current?.offsetWidth);

    imageBelow =
      imageCardRef.current?.nextElementSibling?.nextElementSibling
        ?.nextElementSibling;
    setupLayout(imageBelow);
  };

  return (
    <div ref={imageCardRef} className={classes.imageCard}>
      <div className={classes.imageCard__container}>
        <img
          onLoad={() => calculateHeight()}
          ref={imageRef}
          className={classes.imageCard__container_image}
          src={imageSource}
          alt={imageAlt ? imageAlt : title}
        />
      </div>
    </div>
  );
};

export default ImageCard;
